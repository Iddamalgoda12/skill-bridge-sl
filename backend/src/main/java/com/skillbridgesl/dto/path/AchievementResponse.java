package com.skillbridgesl.dto.path;

import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AchievementResponse {
    private UUID id;
    private String badgeKey;
    private String title;
    private String description;
    private Instant unlockedAt;
}

