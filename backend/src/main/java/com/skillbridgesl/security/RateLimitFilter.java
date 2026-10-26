package com.skillbridgesl.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.NonNull;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.util.ArrayDeque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Fixed-budget, sliding-window limiter for credential endpoints. In memory, so
 * it protects a single instance; put a shared limiter in front when scaling out.
 *
 * <p>Client address comes from the socket unless {@code app.security.trust-forwarded-for}
 * is enabled, which must only be set when the API is reachable solely through a
 * trusted proxy (otherwise the header is spoofable).
 */
@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private static final Duration WINDOW = Duration.ofMinutes(15);

    private final boolean trustForwardedFor;
    private final int maxRequests;
    private final Map<String, ArrayDeque<Long>> hits = new ConcurrentHashMap<>();

    public RateLimitFilter(@Value("${app.security.trust-forwarded-for:false}") boolean trustForwardedFor,
                           @Value("${app.security.auth-rate-limit:30}") int maxRequests) {
        this.trustForwardedFor = trustForwardedFor;
        this.maxRequests = maxRequests;
    }

    @Override
    protected boolean shouldNotFilter(@NonNull HttpServletRequest request) {
        if (!"POST".equals(request.getMethod())) return true;
        var path = request.getServletPath();
        // Refresh is deliberately absent: tokens are 256-bit random values (not guessable) and
        // the BFF renews silently for every signed-in user, so a shared budget would lock everyone out.
        return !(path.equals("/auth/login") || path.equals("/auth/register") || path.equals("/contact"));
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain chain) throws ServletException, IOException {
        var key = request.getServletPath() + "|" + clientAddress(request);
        if (!tryAcquire(key)) {
            response.setStatus(429);
            response.setHeader("Retry-After", String.valueOf(WINDOW.toSeconds()));
            response.setContentType("application/problem+json");
            response.getWriter().write(
                "{\"status\":429,\"title\":\"Too Many Requests\",\"code\":\"RATE_LIMITED\"}");
            return;
        }
        chain.doFilter(request, response);
    }

    boolean tryAcquire(String key) {
        long now = System.currentTimeMillis();
        var queue = hits.computeIfAbsent(key, k -> new ArrayDeque<>());
        synchronized (queue) {
            while (!queue.isEmpty() && now - queue.peekFirst() > WINDOW.toMillis()) queue.pollFirst();
            if (queue.size() >= maxRequests) return false;
            queue.addLast(now);
            return true;
        }
    }

    @Scheduled(fixedDelayString = "PT10M")
    void evictIdle() {
        long cutoff = System.currentTimeMillis() - WINDOW.toMillis();
        hits.entrySet().removeIf(e -> {
            synchronized (e.getValue()) {
                return e.getValue().isEmpty() || e.getValue().peekLast() < cutoff;
            }
        });
    }

    private String clientAddress(HttpServletRequest request) {
        if (trustForwardedFor) {
            var forwarded = request.getHeader("X-Forwarded-For");
            if (forwarded != null && !forwarded.isBlank()) {
                return forwarded.split(",")[0].trim();
            }
        }
        return request.getRemoteAddr();
    }
}
