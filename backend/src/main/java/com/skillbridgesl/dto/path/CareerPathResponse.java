package com.skillbridgesl.dto.path;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CareerPathResponse {
    private UUID id;
    private String title;
    private String targetCareerSlug;
    private String educationStage;
    private String currentStream;
    private String district;
    private String budgetTier;
    // Lombok would expose this as "active"; the API contract (and the frontend) use "isActive"
    @JsonProperty("isActive")
    private boolean isActive;
    private int completionPercent;
    private String notes;
    private String preferencesJson;
    private int totalMilestones;
    private int completedMilestones;
    private int totalTasks;
    private int completedTasks;
    private List<MilestoneResponse> milestones;
    private Instant createdAt;
    private Instant updatedAt;
}

