package com.skillbridgesl.dto.path;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskResponse {
    private UUID id;
    private String title;
    // Lombok would expose this as "completed"; the API contract (and the frontend) use "isCompleted"
    @JsonProperty("isCompleted")
    private boolean isCompleted;
    private Instant completedAt;
    private int position;
    private String resourceUrl;
    private String resourceType;
    private String notes;
}

