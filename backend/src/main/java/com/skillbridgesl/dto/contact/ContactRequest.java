package com.skillbridgesl.dto.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ContactRequest(

    @NotBlank(message = "required")
    @Size(max = 150, message = "too_long")
    String name,

    @NotBlank(message = "required")
    @Email(message = "invalid_email")
    @Size(max = 254, message = "too_long")
    String email,

    @NotBlank(message = "required")
    @Pattern(regexp = "guidance|scholarships|feedback", message = "invalid")
    String topic,

    @NotBlank(message = "required")
    @Size(min = 10, message = "too_short")
    @Size(max = 4000, message = "too_long")
    String message
) {}
