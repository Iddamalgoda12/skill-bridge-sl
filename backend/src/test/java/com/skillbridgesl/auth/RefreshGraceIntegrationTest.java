package com.skillbridgesl.auth;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.UUID;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Parallel requests from one browser can present the same refresh cookie. A token
 * rotated moments ago must work once more — but never after logout.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("local")
@TestPropertySource(properties = {"app.security.auth-rate-limit=100000", "app.jwt.refresh-reuse-grace-ms=60000"})
@Transactional
class RefreshGraceIntegrationTest {

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;

    private MockHttpServletRequestBuilder jsonPost(String path, Object body) throws Exception {
        return post(path).contentType(MediaType.APPLICATION_JSON).content(json.writeValueAsString(body));
    }

    private JsonNode send(String path, Object body) throws Exception {
        return json.readTree(mvc.perform(jsonPost(path, body)).andReturn().getResponse().getContentAsString());
    }

    private String registerRefreshToken() throws Exception {
        return send("/auth/register", Map.of("firstName", "A", "lastName", "B",
                "email", "grace-" + UUID.randomUUID() + "@example.com", "password", "Sup3rSecret"))
                .get("refreshToken").asText();
    }

    @Test
    void recentlyRotatedTokenCanBeRetriedOnce() throws Exception {
        var original = registerRefreshToken();
        var first = send("/auth/refresh", Map.of("refreshToken", original)).get("refreshToken").asText();

        mvc.perform(jsonPost("/auth/refresh", Map.of("refreshToken", original))).andExpect(status().isOk());
        // The family is intact: the first successor still works.
        mvc.perform(jsonPost("/auth/refresh", Map.of("refreshToken", first))).andExpect(status().isOk());
    }

    @Test
    void graceDoesNotSurviveLogout() throws Exception {
        var original = registerRefreshToken();
        var rotated = send("/auth/refresh", Map.of("refreshToken", original)).get("refreshToken").asText();

        mvc.perform(jsonPost("/auth/logout", Map.of("refreshToken", rotated))).andExpect(status().isNoContent());

        mvc.perform(jsonPost("/auth/refresh", Map.of("refreshToken", original))).andExpect(status().isUnauthorized());
        mvc.perform(jsonPost("/auth/refresh", Map.of("refreshToken", rotated))).andExpect(status().isUnauthorized());
    }
}
