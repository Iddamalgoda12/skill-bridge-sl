package com.skillbridgesl.service;

import com.skillbridgesl.dto.auth.AuthResponse;
import com.skillbridgesl.dto.auth.LoginRequest;
import com.skillbridgesl.dto.auth.RegisterRequest;
import com.skillbridgesl.exception.EmailAlreadyExistsException;
import com.skillbridgesl.model.User;
import com.skillbridgesl.repository.UserRepository;
import com.skillbridgesl.security.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final UserRepository       userRepository;
    private final PasswordEncoder      passwordEncoder;
    private final JwtService           jwtService;
    private final AuthenticationManager authManager;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new EmailAlreadyExistsException(request.email());
        }

        var user = User.builder()
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .passwordHash(passwordEncoder.encode(request.password()))
                .role(User.Role.STUDENT)
                .build();

        userRepository.save(user);
        log.info("New user registered: {}", user.getEmail());

        return issueTokens(user);
    }

    public AuthResponse login(LoginRequest request) {
        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email(), request.password()));

        var user = userRepository.findByEmail(request.email())
                .orElseThrow();

        log.info("User logged in: {}", user.getEmail());
        return issueTokens(user);
    }

    public AuthResponse refresh(String refreshToken) {
        var username = jwtService.extractUsername(refreshToken);
        var user = userRepository.findByEmail(username).orElseThrow();

        if (!jwtService.isTokenValid(refreshToken, user)) {
            throw new IllegalArgumentException("Invalid refresh token");
        }

        return issueTokens(user);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private AuthResponse issueTokens(User user) {
        var access  = jwtService.generateToken(user);
        var refresh = jwtService.generateRefreshToken(user);
        var expiry  = jwtService.extractExpiration(access).getTime()
                      - System.currentTimeMillis();
        return AuthResponse.of(access, refresh, expiry, user);
    }
}

