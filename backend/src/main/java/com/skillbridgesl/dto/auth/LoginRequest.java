package com.skillbridgesl.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(

    @NotBlank(message = "required")
    @Email(message = "invalid_email")
    @Size(max = 254, message = "too_long")
    String email,

    @NotBlank(message = "required")
    @Size(max = 128, message = "too_long")
    String password
) {}
