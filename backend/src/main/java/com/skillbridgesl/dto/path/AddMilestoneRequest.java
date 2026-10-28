package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddMilestoneRequest {

    @NotBlank(message = "Stage key is required")
    private String stageKey;

    @NotBlank(message = "Title is required")
    private String title;

    private String description;
    private String whyItMatters;
    private String prerequisites;
    private LocalDate targetDate;
    private Integer durationMonths;
}

