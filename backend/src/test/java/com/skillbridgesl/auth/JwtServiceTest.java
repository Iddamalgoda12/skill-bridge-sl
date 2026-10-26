package com.skillbridgesl.auth;

import com.skillbridgesl.model.User;
import com.skillbridgesl.security.JwtService;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Base64;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class JwtServiceTest {

    private static final String STRONG = Base64.getEncoder().encodeToString(new byte[48]);

    private JwtService service(String secret, long ttlMs) {
        var s = new JwtService();
        ReflectionTestUtils.setField(s, "secret", secret);
        ReflectionTestUtils.setField(s, "jwtExpirationMs", ttlMs);
        return s;
    }

    private User user(boolean active) {
        return User.builder().email("a@example.com").role(User.Role.STUDENT).isActive(active).build();
    }

    @Test
    void rejectsWeakOrMalformedSecrets() {
        var weak = service(Base64.getEncoder().encodeToString(new byte[16]), 1000);
        assertThatThrownBy(() -> ReflectionTestUtils.invokeMethod(weak, "validateSecret"))
                .isInstanceOf(IllegalStateException.class);
        var junk = service("%%%not-base64%%%", 1000);
        assertThatThrownBy(() -> ReflectionTestUtils.invokeMethod(junk, "validateSecret"))
                .isInstanceOf(IllegalStateException.class);
        ReflectionTestUtils.invokeMethod(service(STRONG, 1000), "validateSecret");
    }

    @Test
    void validatesSubjectExpiryAndEnabledState() {
        var jwt = service(STRONG, 60_000);
        var token = jwt.generateToken(user(true));
        assertThat(jwt.isTokenValid(token, user(true))).isTrue();
        assertThat(jwt.isTokenValid(token, user(false))).isFalse();
        assertThat(jwt.accessTtlSeconds()).isEqualTo(60);

        var expired = service(STRONG, -1000).generateToken(user(true));
        assertThatThrownBy(() -> jwt.isTokenValid(expired, user(true))).isInstanceOf(io.jsonwebtoken.ExpiredJwtException.class);
    }

    @Test
    void tamperedTokenIsRejected() {
        var jwt = service(STRONG, 60_000);
        var token = jwt.generateToken(user(true));
        var tampered = token.substring(0, token.length() - 3) + "abc";
        assertThatThrownBy(() -> jwt.extractUsername(tampered)).isInstanceOf(io.jsonwebtoken.JwtException.class);
    }
}
