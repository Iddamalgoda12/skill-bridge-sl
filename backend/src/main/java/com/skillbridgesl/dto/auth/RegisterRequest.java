package com.skillbridgesl.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/** Validation messages are stable codes; the frontend translates them. */
public record RegisterRequest(

    @NotBlank(message = "required")
    @Size(max = 100, message = "too_long")
    String firstName,

    @NotBlank(message = "required")
    @Size(max = 100, message = "too_long")
    String lastName,

    @NotBlank(message = "required")
    @Email(message = "invalid_email")
    @Size(max = 254, message = "too_long")
    String email,

    @NotBlank(message = "required")
    @Size(min = 8, max = 72, message = "password_length")
    @Pattern(regexp = "^(?=.*\\p{L})(?=.*\\d).*$", message = "password_weak")
    String password
) {}
