package com.skillbridgesl.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

/**
 * A single-use refresh credential. Only the SHA-256 hash of the opaque token is
 * stored. Tokens issued from the same login share a {@code familyId} so that
 * reuse of a rotated token can revoke the whole chain.
 */
@Entity
@Table(name = "refresh_tokens")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "token", nullable = false, unique = true)
    private String tokenHash;

    @Column(name = "family_id", nullable = false, updatable = false)
    private UUID familyId;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Column(name = "revoked_at")
    private Instant revokedAt;

    @Column(name = "rotated_at")
    private Instant rotatedAt;

    @Column(name = "created_at", nullable = false, updatable = false)
    @Builder.Default
    private Instant createdAt = Instant.now();

    public boolean isRevoked() { return revokedAt != null; }

    public boolean isExpired() { return expiresAt.isBefore(Instant.now()); }
}
