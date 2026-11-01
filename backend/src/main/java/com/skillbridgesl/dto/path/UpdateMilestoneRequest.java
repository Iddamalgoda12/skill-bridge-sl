package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateMilestoneRequest {
    @Size(min = 3, max = 255, message = "Title must be 3-255 characters")
    private String title;
    private String description;
    private String whyItMatters;
    private String prerequisites;
    @Pattern(regexp = "PENDING|IN_PROGRESS|COMPLETED", flags = Pattern.Flag.CASE_INSENSITIVE, message = "Status must be PENDING, IN_PROGRESS or COMPLETED")
    private String status; // PENDING, IN_PROGRESS, COMPLETED
    private LocalDate targetDate;
    @Min(value = 1, message = "Duration must be at least 1 month")
    @Max(value = 120, message = "Duration must be at most 120 months")
    private Integer durationMonths;
}

