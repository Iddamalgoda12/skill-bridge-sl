package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateCareerPathRequest {
    @Size(min = 3, max = 255, message = "Path title must be 3-255 characters")
    private String title;
    private Boolean isActive;
    @Size(max = 5000, message = "Notes must be at most 5000 characters")
    private String notes;
    private String currentStream;
    private String district;
    private String budgetTier;
    private String preferencesJson;
}

