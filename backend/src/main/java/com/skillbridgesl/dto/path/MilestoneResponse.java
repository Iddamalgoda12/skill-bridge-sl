package com.skillbridgesl.dto.path;

import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MilestoneResponse {
    private UUID id;
    private String stageKey;
    private String title;
    private String description;
    private String whyItMatters;
    private String prerequisites;
    private String status;
    private LocalDate targetDate;
    private Integer durationMonths;
    private int position;
    private List<TaskResponse> tasks;
}

