package com.skillbridgesl.dto.user;

import com.skillbridgesl.model.User;

public record UserProfile(
    String id,
    String email,
    String firstName,
    String lastName,
    String bio,
    User.Role role,
    boolean verified
) {
    public static UserProfile from(User user) {
        return new UserProfile(
            user.getId().toString(),
            user.getEmail(),
            user.getFirstName(),
            user.getLastName(),
            user.getBio(),
            user.getRole(),
            user.isVerified());
    }
}
