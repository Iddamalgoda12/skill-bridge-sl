package com.skillbridgesl.dto.path;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddTaskRequest {

    @NotBlank(message = "Task title is required")
    @Size(min = 2, max = 255, message = "Task title must be 2-255 characters")
    private String title;
}
