package com.skillbridgesl.controller;

import com.skillbridgesl.dto.user.ChangePasswordRequest;
import com.skillbridgesl.dto.user.UpdateProfileRequest;
import com.skillbridgesl.dto.user.UserProfile;
import com.skillbridgesl.model.User;
import com.skillbridgesl.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

/** The signed-in user's own account. There is deliberately no user-id path parameter. */
@RestController
@RequestMapping("/users/me")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public UserProfile me(@AuthenticationPrincipal User principal) {
        return userService.getProfile(principal.getId());
    }

    @PatchMapping
    public UserProfile update(@AuthenticationPrincipal User principal,
                              @Valid @RequestBody UpdateProfileRequest request) {
        return userService.updateProfile(principal.getId(), request);
    }

    @PostMapping("/password")
    public ResponseEntity<Void> changePassword(@AuthenticationPrincipal User principal,
                                               @Valid @RequestBody ChangePasswordRequest request) {
        userService.changePassword(principal.getId(), request);
        return ResponseEntity.noContent().build();
    }
}
