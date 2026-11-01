package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
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
    @Size(min = 3, max = 255, message = "Title must be 3-255 characters")
    private String title;

    private String description;
    private String whyItMatters;
    private String prerequisites;
    private LocalDate targetDate;
    @Min(value = 1, message = "Duration must be at least 1 month")
    @Max(value = 120, message = "Duration must be at most 120 months")
    private Integer durationMonths;
}

