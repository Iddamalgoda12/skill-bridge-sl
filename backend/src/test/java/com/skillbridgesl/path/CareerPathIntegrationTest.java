package com.skillbridgesl.path;

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

import java.util.List;
import java.util.Map;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * The career-path API through the real security chain and database: creating a roadmap,
 * tracking progress, and (most importantly) that one student can never see or change another's.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("local")
@TestPropertySource(properties = {"app.security.auth-rate-limit=100000"})
@Transactional
class CareerPathIntegrationTest {

    private static final String PASSWORD = "Sup3rSecret";

    @Autowired MockMvc mvc;
    @Autowired ObjectMapper json;

    private String register() throws Exception {
        String email = "path-" + UUID.randomUUID() + "@example.com";
        String body = mvc.perform(post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json.writeValueAsString(Map.of(
                                "firstName", "Kamal", "lastName", "Silva", "email", email, "password", PASSWORD))))
                .andExpect(status().isCreated()).andReturn().getResponse().getContentAsString();
        return json.readTree(body).get("accessToken").asText();
    }

    private MockHttpServletRequestBuilder authed(MockHttpServletRequestBuilder request, String token) {
        return request.header("Authorization", "Bearer " + token);
    }

    private Map<String, Object> samplePath() {
        return Map.of(
                "title", "Medicine (MBBS) via University of Colombo · Bio stream",
                "targetCareerSlug", "doctor",
                "educationStage", "ol",
                "currentStream", "Biological Science",
                "district", "Colombo",
                "preferencesJson", "{\"universityName\":\"University of Colombo\",\"route\":\"STATE_UGC\"}",
                "milestones", List.of(
                        Map.of("stageKey", "OL_MASTERY", "title", "O/L Examination Mastery", "durationMonths", 10,
                                "tasks", List.of(Map.of("title", "Past papers"), Map.of("title", "English practice"))),
                        Map.of("stageKey", "AL_STREAM_PREP", "title", "A/L Preparation", "durationMonths", 18,
                                "tasks", List.of(Map.of("title", "Z-score plan")))));
    }

    private JsonNode createPath(String token) throws Exception {
        String body = mvc.perform(authed(post("/paths").contentType(MediaType.APPLICATION_JSON)
                        .content(json.writeValueAsString(samplePath())), token))
                .andExpect(status().isCreated()).andReturn().getResponse().getContentAsString();
        return json.readTree(body);
    }

    @Test
    void pathsRequireAuthentication() throws Exception {
        mvc.perform(get("/paths")).andExpect(status().isUnauthorized());
        mvc.perform(post("/paths").contentType(MediaType.APPLICATION_JSON).content("{}"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void createdPathKeepsMilestonesTasksPreferencesAndOrder() throws Exception {
        String token = register();
        JsonNode path = createPath(token);

        assertThat(path.get("totalMilestones").asInt()).isEqualTo(2);
        assertThat(path.get("totalTasks").asInt()).isEqualTo(3);
        assertThat(path.get("completionPercent").asInt()).isZero();
        assertThat(path.get("preferencesJson").asText()).contains("University of Colombo");
        assertThat(path.get("milestones").get(0).get("stageKey").asText()).isEqualTo("OL_MASTERY");
        assertThat(path.get("milestones").get(0).get("tasks").get(1).get("title").asText()).isEqualTo("English practice");
        // The frontend reads these exact keys
        assertThat(path.get("isActive").asBoolean()).isTrue();
        assertThat(path.get("milestones").get(0).get("tasks").get(0).get("isCompleted").asBoolean()).isFalse();

        mvc.perform(authed(get("/paths"), token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].id").value(path.get("id").asText()));
    }

    @Test
    void completingTasksUpdatesProgress() throws Exception {
        String token = register();
        JsonNode path = createPath(token);
        String firstTaskId = path.get("milestones").get(0).get("tasks").get(0).get("id").asText();

        mvc.perform(authed(patch("/paths/tasks/" + firstTaskId).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"isCompleted\":true}"), token))
                .andExpect(status().isOk());

        mvc.perform(authed(get("/paths/" + path.get("id").asText()), token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.completedTasks").value(1))
                .andExpect(jsonPath("$.completionPercent").value(33))
                .andExpect(jsonPath("$.milestones[0].tasks[0].isCompleted").value(true))
                .andExpect(jsonPath("$.milestones[0].tasks[1].isCompleted").value(false));
    }

    @Test
    void tasksCanBeAddedAndDeletedAndProgressFollows() throws Exception {
        String token = register();
        JsonNode path = createPath(token);
        String id = path.get("id").asText();
        String milestoneId = path.get("milestones").get(0).get("id").asText();

        String body = mvc.perform(authed(post("/paths/milestones/" + milestoneId + "/tasks")
                        .contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"Join study group\"}"), token))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value("Join study group"))
                .andReturn().getResponse().getContentAsString();
        String newTaskId = json.readTree(body).get("id").asText();

        mvc.perform(authed(get("/paths/" + id), token))
                .andExpect(jsonPath("$.totalTasks").value(4))
                .andExpect(jsonPath("$.milestones[0].tasks.length()").value(3));

        mvc.perform(authed(delete("/paths/tasks/" + newTaskId), token)).andExpect(status().isNoContent());

        mvc.perform(authed(get("/paths/" + id), token))
                .andExpect(jsonPath("$.totalTasks").value(3))
                .andExpect(jsonPath("$.milestones[0].tasks.length()").value(2));
    }

    @Test
    void updateAndAddRequestsAreValidatedOnTheServer() throws Exception {
        String token = register();
        JsonNode path = createPath(token);
        String id = path.get("id").asText();
        String milestoneId = path.get("milestones").get(0).get("id").asText();

        mvc.perform(authed(patch("/paths/" + id).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"ab\"}"), token)).andExpect(status().isBadRequest());
        mvc.perform(authed(patch("/paths/milestones/" + milestoneId).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"status\":\"DONE\"}"), token)).andExpect(status().isBadRequest());
        mvc.perform(authed(patch("/paths/milestones/" + milestoneId).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"durationMonths\":0}"), token)).andExpect(status().isBadRequest());
        mvc.perform(authed(post("/paths/" + id + "/milestones").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"stageKey\":\"CUSTOM\",\"title\":\"x\"}"), token)).andExpect(status().isBadRequest());
        mvc.perform(authed(post("/paths/milestones/" + milestoneId + "/tasks").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"  \"}"), token)).andExpect(status().isBadRequest());
    }

    @Test
    void aStudentCannotReadChangeOrDeleteAnotherStudentsPath() throws Exception {
        String owner = register();
        String intruder = register();
        JsonNode path = createPath(owner);
        String id = path.get("id").asText();
        String taskId = path.get("milestones").get(0).get("tasks").get(0).get("id").asText();
        String milestoneId = path.get("milestones").get(0).get("id").asText();

        mvc.perform(authed(get("/paths/" + id), intruder)).andExpect(status().isNotFound());
        mvc.perform(authed(patch("/paths/" + id).contentType(MediaType.APPLICATION_JSON).content("{\"title\":\"Hacked\"}"), intruder))
                .andExpect(status().isNotFound());
        mvc.perform(authed(patch("/paths/tasks/" + taskId).contentType(MediaType.APPLICATION_JSON).content("{\"isCompleted\":true}"), intruder))
                .andExpect(status().isNotFound());
        mvc.perform(authed(delete("/paths/milestones/" + milestoneId), intruder)).andExpect(status().isNotFound());
        mvc.perform(authed(delete("/paths/" + id), intruder)).andExpect(status().isNotFound());
        mvc.perform(authed(get("/paths"), intruder)).andExpect(jsonPath("$.length()").value(0));

        // ...and the owner's data is untouched
        mvc.perform(authed(get("/paths/" + id), owner))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(path.get("title").asText()))
                .andExpect(jsonPath("$.completedTasks").value(0));
    }

    @Test
    void invalidRequestsAreRejectedWithClientErrors() throws Exception {
        String token = register();
        mvc.perform(authed(post("/paths").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"\",\"targetCareerSlug\":\"doctor\",\"educationStage\":\"ol\"}"), token))
                .andExpect(status().isBadRequest());
        mvc.perform(authed(get("/paths/not-a-uuid"), token)).andExpect(status().is4xxClientError());
    }

    @Test
    void creatingASecondPathMakesItTheOnlyActiveOne() throws Exception {
        String token = register();
        createPath(token);
        createPath(token);

        String body = mvc.perform(authed(get("/paths"), token)).andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        long active = 0;
        for (JsonNode node : json.readTree(body)) {
            // The API exposes the flag as `isActive`; the frontend reads exactly that key.
            assertThat(node.has("isActive")).as("response exposes isActive").isTrue();
            if (node.get("isActive").asBoolean()) active++;
        }
        assertThat(active).isEqualTo(1);
    }
}
