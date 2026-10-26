package com.skillbridgesl.auth;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillbridgesl.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * End-to-end auth behaviour through the real filter chain and database.
 * Rolled back after each test so the development database stays clean.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("local")
@TestPropertySource(properties = {"app.security.auth-rate-limit=100000", "app.jwt.refresh-reuse-grace-ms=0"})
@Transactional
class AuthFlowIntegrationTest {

    private static final String PASSWORD = "Sup3rSecret";

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;
    @Autowired UserRepository users;

    private final String email = "test-" + UUID.randomUUID() + "@example.com";

    private MockHttpServletRequestBuilder post(String path, Object body) throws Exception {
        return org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post(path)
                .contentType(MediaType.APPLICATION_JSON).content(json.writeValueAsString(body));
    }

    private JsonNode register() throws Exception {
        MvcResult result = mvc.perform(post("/auth/register", Map.of(
                "firstName", "Nimal", "lastName", "Perera", "email", email, "password", PASSWORD)))
                .andExpect(status().isCreated()).andReturn();
        return json.readTree(result.getResponse().getContentAsString());
    }

    @Test
    void registerIssuesTokensAndStoresOnlyAHash() throws Exception {
        var body = register();

        assertThat(body.get("accessToken").asText()).isNotBlank();
        assertThat(body.get("refreshToken").asText()).isNotBlank();
        assertThat(body.get("expiresIn").asLong()).isEqualTo(900);
        assertThat(body.get("user").get("role").asText()).isEqualTo("STUDENT");
        assertThat(body.toString()).doesNotContain("passwordHash").doesNotContain(PASSWORD);

        var stored = users.findByEmailIgnoreCase(email).orElseThrow();
        assertThat(stored.getPasswordHash()).startsWith("$2").isNotEqualTo(PASSWORD);
    }

    @Test
    void duplicateEmailIsRejectedCaseInsensitively() throws Exception {
        register();
        mvc.perform(post("/auth/register", Map.of(
                "firstName", "A", "lastName", "B", "email", email.toUpperCase(), "password", PASSWORD)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.code").value("EMAIL_EXISTS"));
    }

    @Test
    void registerValidationReturnsFieldCodes() throws Exception {
        mvc.perform(post("/auth/register", Map.of(
                "firstName", "", "lastName", "B", "email", "not-an-email", "password", "abcdefgh")))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value("VALIDATION_FAILED"))
                .andExpect(jsonPath("$.violations.firstName").value("required"))
                .andExpect(jsonPath("$.violations.email").value("invalid_email"))
                .andExpect(jsonPath("$.violations.password").value("password_weak"));
    }

    @Test
    void passwordBeyondBcryptLimitIsRejected() throws Exception {
        mvc.perform(post("/auth/register", Map.of(
                "firstName", "A", "lastName", "B", "email", email, "password", "a1" + "é".repeat(40))))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.violations.password").value("password_length"));
    }

    @Test
    void loginSucceedsWithDifferentEmailCaseAndFailsUniformly() throws Exception {
        register();
        mvc.perform(post("/auth/login", Map.of("email", email.toUpperCase(), "password", PASSWORD)))
                .andExpect(status().isOk());

        // Wrong password and unknown account must be indistinguishable.
        var wrong = mvc.perform(post("/auth/login", Map.of("email", email, "password", "nope12345")))
                .andExpect(status().isUnauthorized()).andReturn().getResponse().getContentAsString();
        var unknown = mvc.perform(post("/auth/login", Map.of("email", "ghost@example.com", "password", "nope12345")))
                .andExpect(status().isUnauthorized()).andReturn().getResponse().getContentAsString();
        assertThat(json.readTree(wrong).get("code").asText()).isEqualTo("INVALID_CREDENTIALS");
        assertThat(json.readTree(unknown).get("code").asText()).isEqualTo("INVALID_CREDENTIALS");
    }

    @Test
    void disabledAccountCannotLogIn() throws Exception {
        register();
        var user = users.findByEmailIgnoreCase(email).orElseThrow();
        user.setActive(false);
        users.saveAndFlush(user);

        mvc.perform(post("/auth/login", Map.of("email", email, "password", PASSWORD)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("INVALID_CREDENTIALS"));
    }

    @Test
    void protectedEndpointsRequireAValidAccessToken() throws Exception {
        mvc.perform(get("/users/me")).andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("UNAUTHENTICATED"));
        mvc.perform(get("/users/me").header("Authorization", "Bearer garbage"))
                .andExpect(status().isUnauthorized());

        var token = register().get("accessToken").asText();
        mvc.perform(get("/users/me").header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(email))
                .andExpect(jsonPath("$.passwordHash").doesNotExist());
    }

    @Test
    void refreshRotatesAndReuseRevokesTheFamily() throws Exception {
        var first = register().get("refreshToken").asText();

        var second = json.readTree(mvc.perform(post("/auth/refresh", Map.of("refreshToken", first)))
                .andExpect(status().isOk()).andReturn().getResponse().getContentAsString());
        assertThat(second.get("refreshToken").asText()).isNotEqualTo(first);

        // Replaying the rotated token is treated as theft...
        mvc.perform(post("/auth/refresh", Map.of("refreshToken", first)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("INVALID_TOKEN"));
        // ...and takes the legitimately issued successor down with it.
        mvc.perform(post("/auth/refresh", Map.of("refreshToken", second.get("refreshToken").asText())))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void accessTokenCannotBeUsedAsRefreshToken() throws Exception {
        var access = register().get("accessToken").asText();
        mvc.perform(post("/auth/refresh", Map.of("refreshToken", access)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void logoutRevokesTheRefreshToken() throws Exception {
        var refresh = register().get("refreshToken").asText();
        mvc.perform(post("/auth/logout", Map.of("refreshToken", refresh))).andExpect(status().isNoContent());
        mvc.perform(post("/auth/refresh", Map.of("refreshToken", refresh))).andExpect(status().isUnauthorized());
        // Idempotent, and unknown tokens do not leak anything.
        mvc.perform(post("/auth/logout", Map.of("refreshToken", "unknown"))).andExpect(status().isNoContent());
    }

    @Test
    void profileCanBeUpdatedOnlyByItsOwner() throws Exception {
        var token = register().get("accessToken").asText();
        mvc.perform(patch("/users/me").header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json.writeValueAsString(Map.of("firstName", " Kamal ", "lastName", "Silva", "bio", "Future engineer"))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Kamal"))
                .andExpect(jsonPath("$.bio").value("Future engineer"))
                .andExpect(jsonPath("$.email").value(email));

        mvc.perform(patch("/users/me").header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json.writeValueAsString(Map.of("firstName", "", "lastName", "Silva"))))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.violations.firstName").value("required"));
    }

    @Test
    void changingPasswordRequiresCurrentPasswordAndSignsOutOtherSessions() throws Exception {
        var auth = register();
        var access = auth.get("accessToken").asText();
        var refresh = auth.get("refreshToken").asText();

        mvc.perform(post("/users/me/password", Map.of("currentPassword", "wrong12345", "newPassword", "N3wPassword"))
                        .header("Authorization", "Bearer " + access))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.violations.currentPassword").value("incorrect_password"));

        mvc.perform(post("/users/me/password", Map.of("currentPassword", PASSWORD, "newPassword", "N3wPassword"))
                        .header("Authorization", "Bearer " + access))
                .andExpect(status().isNoContent());

        mvc.perform(post("/auth/refresh", Map.of("refreshToken", refresh))).andExpect(status().isUnauthorized());
        mvc.perform(post("/auth/login", Map.of("email", email, "password", PASSWORD))).andExpect(status().isUnauthorized());
        mvc.perform(post("/auth/login", Map.of("email", email, "password", "N3wPassword"))).andExpect(status().isOk());
    }

    @Test
    void frameworkErrorsKeepTheirStatusAndLeakNothing() throws Exception {
        mvc.perform(org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON).content("{not json"))
                .andExpect(status().isBadRequest());
        var token = register().get("accessToken").asText();
        mvc.perform(get("/does-not-exist").header("Authorization", "Bearer " + token))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.code").value("NOT_FOUND"));
        mvc.perform(get("/auth/login").header("Authorization", "Bearer " + token))
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    void securityHeadersArePresent() throws Exception {
        mvc.perform(get("/actuator/health"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-Frame-Options", "DENY"));
    }

    @Test
    void contactFormStoresValidMessagesAndRejectsInvalidOnes() throws Exception {
        mvc.perform(post("/contact", Map.of("name", "Nimal", "email", "nimal@example.com",
                        "topic", "guidance", "message", "I would like some advice about A/Ls.")))
                .andExpect(status().isCreated());

        mvc.perform(post("/contact", Map.of("name", "", "email", "bad", "topic", "spam", "message", "short")))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.violations.name").value("required"))
                .andExpect(jsonPath("$.violations.email").value("invalid_email"))
                .andExpect(jsonPath("$.violations.topic").value("invalid"))
                .andExpect(jsonPath("$.violations.message").value("too_short"));
    }
}
