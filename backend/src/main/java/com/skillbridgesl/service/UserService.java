package com.skillbridgesl.service;

import com.skillbridgesl.dto.user.ChangePasswordRequest;
import com.skillbridgesl.dto.user.UpdateProfileRequest;
import com.skillbridgesl.dto.user.UserProfile;
import com.skillbridgesl.exception.InvalidRequestException;
import com.skillbridgesl.exception.ResourceNotFoundException;
import com.skillbridgesl.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository      userRepository;
    private final PasswordEncoder     passwordEncoder;
    private final RefreshTokenService refreshTokens;

    @Transactional(readOnly = true)
    public UserProfile getProfile(UUID userId) {
        return UserProfile.from(load(userId));
    }

    @Transactional
    public UserProfile updateProfile(UUID userId, UpdateProfileRequest request) {
        var user = load(userId);
        user.setFirstName(request.firstName().trim());
        user.setLastName(request.lastName().trim());
        var bio = request.bio() == null ? "" : request.bio().trim();
        user.setBio(bio.isEmpty() ? null : bio);
        return UserProfile.from(user);
    }

    /** Changing the password signs the account out everywhere else. */
    @Transactional
    public void changePassword(UUID userId, ChangePasswordRequest request) {
        AuthService.requirePasswordWithinBcryptLimit(request.newPassword(), "newPassword");
        var user = load(userId);
        if (!passwordEncoder.matches(request.currentPassword(), user.getPasswordHash())) {
            throw new InvalidRequestException("currentPassword", "incorrect_password");
        }
        user.setPasswordHash(passwordEncoder.encode(request.newPassword()));
        refreshTokens.revokeAll(user);
        log.info("Password changed for user {}", user.getId());
    }

    private com.skillbridgesl.model.User load(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", userId));
    }
}
