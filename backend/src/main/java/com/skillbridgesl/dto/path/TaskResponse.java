package com.skillbridgesl.dto.path;

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
    private boolean isCompleted;
    private Instant completedAt;
    private int position;
    private String resourceUrl;
    private String resourceType;
    private String notes;
}

