package com.skillbridgesl.dto.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ChangePasswordRequest(

    @NotBlank(message = "required")
    @Size(max = 128, message = "too_long")
    String currentPassword,

    @NotBlank(message = "required")
    @Size(min = 8, max = 72, message = "password_length")
    @Pattern(regexp = "^(?=.*\\p{L})(?=.*\\d).*$", message = "password_weak")
    String newPassword
) {}
