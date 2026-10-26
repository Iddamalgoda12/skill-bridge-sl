package com.skillbridgesl.dto.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateProfileRequest(

    @NotBlank(message = "required")
    @Size(max = 100, message = "too_long")
    String firstName,

    @NotBlank(message = "required")
    @Size(max = 100, message = "too_long")
    String lastName,

    @Size(max = 500, message = "too_long")
    String bio
) {}
