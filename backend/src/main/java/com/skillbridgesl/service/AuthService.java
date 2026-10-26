package com.skillbridgesl.service;

import com.skillbridgesl.dto.auth.AuthResponse;
import com.skillbridgesl.dto.auth.LoginRequest;
import com.skillbridgesl.dto.auth.RegisterRequest;
import com.skillbridgesl.exception.EmailAlreadyExistsException;
import com.skillbridgesl.exception.InvalidRequestException;
import com.skillbridgesl.model.User;
import com.skillbridgesl.repository.UserRepository;
import com.skillbridgesl.security.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.util.Locale;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    /** BCrypt silently ignores input beyond 72 bytes; reject it instead. */
    static final int MAX_PASSWORD_BYTES = 72;

    private final UserRepository        userRepository;
    private final PasswordEncoder       passwordEncoder;
    private final JwtService            jwtService;
    private final RefreshTokenService   refreshTokens;
    private final AuthenticationManager authManager;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        requirePasswordWithinBcryptLimit(request.password(), "password");
        var email = normalize(request.email());
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new EmailAlreadyExistsException();
        }

        var user = User.builder()
                .firstName(request.firstName().trim())
                .lastName(request.lastName().trim())
                .email(email)
                .passwordHash(passwordEncoder.encode(request.password()))
                .role(User.Role.STUDENT)
                .build();

        try {
            userRepository.saveAndFlush(user);
        } catch (DataIntegrityViolationException e) {
            // Lost a race with a concurrent registration of the same email.
            throw new EmailAlreadyExistsException();
        }
        log.info("New user registered: {}", user.getId());
        return issueTokens(user);
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        var email = normalize(request.email());
        authManager.authenticate(new UsernamePasswordAuthenticationToken(email, request.password()));
        var user = userRepository.findByEmailIgnoreCase(email).orElseThrow();
        log.info("User logged in: {}", user.getId());
        return issueTokens(user);
    }

    @Transactional(noRollbackFor = com.skillbridgesl.exception.InvalidTokenException.class)
    public AuthResponse refresh(String refreshToken) {
        var issued = refreshTokens.rotate(refreshToken);
        return AuthResponse.of(jwtService.generateToken(issued.user()), issued.token(),
                jwtService.accessTtlSeconds(), issued.user());
    }

    public void logout(String refreshToken) {
        refreshTokens.revoke(refreshToken);
    }

    static void requirePasswordWithinBcryptLimit(String password, String field) {
        if (password.getBytes(StandardCharsets.UTF_8).length > MAX_PASSWORD_BYTES) {
            throw new InvalidRequestException(field, "password_length");
        }
    }

    static String normalize(String email) {
        return email.trim().toLowerCase(Locale.ROOT);
    }

    private AuthResponse issueTokens(User user) {
        return AuthResponse.of(jwtService.generateToken(user), refreshTokens.issue(user),
                jwtService.accessTtlSeconds(), user);
    }
}
