package com.skillbridgesl.dto.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/** Used for both token refresh and logout. */
public record RefreshRequest(
    @NotBlank(message = "required")
    @Size(max = 256, message = "too_long")
    String refreshToken
) {}
