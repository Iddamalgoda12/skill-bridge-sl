package com.skillbridgesl.dto.path;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateMilestoneRequest {
    private String title;
    private String description;
    private String whyItMatters;
    private String prerequisites;
    private String status; // PENDING, IN_PROGRESS, COMPLETED
    private LocalDate targetDate;
    private Integer durationMonths;
}

