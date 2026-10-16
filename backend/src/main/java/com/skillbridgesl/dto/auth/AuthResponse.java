package com.skillbridgesl.dto.auth;

import com.skillbridgesl.model.User;

public record AuthResponse(
    String  accessToken,
    String  refreshToken,
    String  tokenType,
    long    expiresIn,
    UserInfo user
) {
    public record UserInfo(
        String id,
        String email,
        String firstName,
        String lastName,
        User.Role role
    ) {}

    public static AuthResponse of(String access, String refresh, long expiresIn, User user) {
        return new AuthResponse(
            access,
            refresh,
            "Bearer",
            expiresIn,
            new UserInfo(
                user.getId().toString(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole()
            )
        );
    }
}

