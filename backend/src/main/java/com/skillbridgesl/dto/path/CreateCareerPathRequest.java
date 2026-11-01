package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateCareerPathRequest {

    @NotBlank(message = "Path title is required")
    @Size(min = 3, max = 255, message = "Path title must be 3-255 characters")
    private String title;

    @NotBlank(message = "Target career slug is required")
    private String targetCareerSlug;

    @NotBlank(message = "Education stage is required")
    private String educationStage;

    private String currentStream;
    private String district;
    private String budgetTier;
    private String notes;
    private String preferencesJson;

    private List<MilestoneInputDto> milestones;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MilestoneInputDto {
        private String stageKey;
        private String title;
        private String description;
        private String whyItMatters;
        private String prerequisites;
        private LocalDate targetDate;
        private Integer durationMonths;
        private List<TaskInputDto> tasks;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class TaskInputDto {
        private String title;
        private String resourceUrl;
        private String resourceType;
        private String notes;
    }
}

