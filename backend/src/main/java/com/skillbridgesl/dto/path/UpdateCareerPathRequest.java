package com.skillbridgesl.dto.path;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateCareerPathRequest {
    private String title;
    private Boolean isActive;
    private String notes;
    private String currentStream;
    private String district;
    private String budgetTier;
    private String preferencesJson;
}

