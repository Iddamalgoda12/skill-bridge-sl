package com.skillbridgesl.model;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    // Postgres native enum column: bind as a named enum, not varchar.
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.NAMED_ENUM)
    @Column(nullable = false)
    private Role role;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private boolean isActive = true;

    @Column(name = "is_verified", nullable = false)
    @Builder.Default
    private boolean isVerified = false;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    // ── UserDetails ───────────────────────────────────────────────────────────

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override public String getPassword()                { return passwordHash; }
    @Override public String getUsername()                { return email; }
    @Override public boolean isAccountNonExpired()       { return true; }
    @Override public boolean isAccountNonLocked()        { return isActive; }
    @Override public boolean isCredentialsNonExpired()   { return true; }
    @Override public boolean isEnabled()                 { return isActive; }

    // ── Enum ──────────────────────────────────────────────────────────────────

    public enum Role { STUDENT, INSTRUCTOR, ADMIN }
}

