package com.skillbridgesl.dto.auth;

import com.skillbridgesl.dto.user.UserProfile;
import com.skillbridgesl.model.User;

public record AuthResponse(
    String accessToken,
    String refreshToken,
    String tokenType,
    long expiresIn,
    UserProfile user
) {
    /** @param expiresInSeconds lifetime of the access token, in seconds */
    public static AuthResponse of(String access, String refresh, long expiresInSeconds, User user) {
        return new AuthResponse(access, refresh, "Bearer", expiresInSeconds, UserProfile.from(user));
    }
}
