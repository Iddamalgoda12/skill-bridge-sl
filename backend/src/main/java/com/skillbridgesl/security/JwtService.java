package com.skillbridgesl.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Stateless JWT utility – wraps JJWT 0.12 API.
 * Uses HS256 with a 256-bit key derived from the configured secret.
 */
@Service
public class JwtService {

    @Value("${app.jwt.secret}")
    private String secret;

    @Value("${app.jwt.expiration-ms:900000}")
    private long jwtExpirationMs;

    /** Fail fast on a missing or weak signing key rather than at the first login. */
    @PostConstruct
    void validateSecret() {
        byte[] key;
        try {
            key = Decoders.BASE64.decode(secret);
        } catch (RuntimeException e) {
            throw new IllegalStateException("app.jwt.secret must be a base64-encoded value", e);
        }
        if (key.length < 32) {
            throw new IllegalStateException(
                "app.jwt.secret must decode to at least 32 bytes; generate one with: openssl rand -base64 48");
        }
    }

    public long accessTtlSeconds() {
        return jwtExpirationMs / 1000;
    }

    // ── Token generation ─────────────────────────────────────────────────────

    public String generateToken(UserDetails userDetails) {
        return generateToken(Map.of(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        return buildToken(extraClaims, userDetails, jwtExpirationMs);
    }

    private String buildToken(Map<String, Object> extraClaims,
                              UserDetails userDetails,
                              long expirationMs) {
        var claims = new HashMap<>(extraClaims);
        claims.put("roles", userDetails.getAuthorities()
                .stream().map(a -> a.getAuthority()).toList());

        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationMs))
                .signWith(signingKey(), Jwts.SIG.HS256)
                .compact();
    }

    // ── Token validation ──────────────────────────────────────────────────────

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equalsIgnoreCase(userDetails.getUsername()) && !isTokenExpired(token)
                && userDetails.isEnabled();
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // ── Claims extraction ─────────────────────────────────────────────────────

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        return claimsResolver.apply(extractAllClaims(token));
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(signingKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey signingKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }
}

