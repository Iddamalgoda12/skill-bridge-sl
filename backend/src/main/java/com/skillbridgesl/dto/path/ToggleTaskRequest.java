package com.skillbridgesl.dto.path;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToggleTaskRequest {
    private Boolean isCompleted;
    private String notes;
}

