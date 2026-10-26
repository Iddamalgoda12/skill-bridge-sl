package com.skillbridgesl.service;

import com.skillbridgesl.exception.InvalidTokenException;
import com.skillbridgesl.model.RefreshToken;
import com.skillbridgesl.model.User;
import com.skillbridgesl.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.HexFormat;
import java.util.UUID;

/** Issues, rotates and revokes opaque refresh tokens. */
@Slf4j
@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private static final SecureRandom RANDOM = new SecureRandom();

    private final RefreshTokenRepository repository;

    @Value("${app.jwt.refresh-expiration-ms:604800000}")
    private long refreshExpirationMs;

    /**
     * A token rotated this recently may be presented again (a browser firing parallel
     * requests with the same cookie). Beyond it, reuse is treated as theft.
     */
    @Value("${app.jwt.refresh-reuse-grace-ms:10000}")
    private long reuseGraceMs;

    public record Issued(String token, User user) {}

    /** Starts a new token family (a fresh login). */
    @Transactional
    public String issue(User user) {
        return issue(user, UUID.randomUUID());
    }

    /**
     * Single-use rotation. Presenting an already-rotated token is treated as
     * theft: the whole family is revoked and the request is rejected.
     */
    @Transactional(noRollbackFor = InvalidTokenException.class)
    public Issued rotate(String presentedToken) {
        var tokenHash = hash(presentedToken);
        var stored = repository.findByTokenHash(tokenHash).orElseThrow(InvalidTokenException::new);

        if (stored.isExpired() || !stored.getUser().isEnabled()) {
            throw new InvalidTokenException();
        }

        var user = stored.getUser();
        var familyId = stored.getFamilyId();
        var now = Instant.now();

        if (stored.isRevoked() || repository.rotateIfActive(stored.getId(), now) == 0) {
            // Already used (possibly by a request that committed after we loaded it, so
            // judge the current row). Tolerate an immediate retry only if it was a
            // rotation (not a logout/theft revoke) and the family still has a live successor.
            var current = repository.findByTokenHash(tokenHash).orElse(stored);
            if (withinGrace(current, now)
                    && repository.existsByFamilyIdAndRevokedAtIsNullAndExpiresAtAfter(familyId, now)) {
                return new Issued(issue(user, familyId), user);
            }
            repository.revokeFamily(familyId, now);
            log.warn("Refresh token reuse detected for user {}; family revoked", user.getId());
            throw new InvalidTokenException();
        }
        return new Issued(issue(user, familyId), user);
    }

    private boolean withinGrace(RefreshToken token, Instant now) {
        return token.getRotatedAt() != null
                && token.getRotatedAt().plusMillis(reuseGraceMs).isAfter(now);
    }

    /** Logout: revokes the presented token's family. Unknown tokens are ignored. */
    @Transactional
    public void revoke(String presentedToken) {
        if (presentedToken == null || presentedToken.isBlank()) return;
        repository.findByTokenHash(hash(presentedToken))
                .ifPresent(t -> repository.revokeFamily(t.getFamilyId(), Instant.now()));
    }

    @Transactional
    public void revokeAll(User user) {
        repository.revokeAllForUser(user.getId(), Instant.now());
    }

    @Scheduled(cron = "0 15 3 * * *")
    @Transactional
    public void purgeExpired() {
        int removed = repository.deleteExpiredBefore(Instant.now().minus(Duration.ofDays(1)));
        if (removed > 0) log.info("Purged {} expired refresh tokens", removed);
    }

    private String issue(User user, UUID familyId) {
        var bytes = new byte[32];
        RANDOM.nextBytes(bytes);
        var token = Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
        repository.save(RefreshToken.builder()
                .user(user)
                .tokenHash(hash(token))
                .familyId(familyId)
                .expiresAt(Instant.now().plusMillis(refreshExpirationMs))
                .build());
        return token;
    }

    static String hash(String token) {
        try {
            var digest = MessageDigest.getInstance("SHA-256").digest(token.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(digest);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }
}
