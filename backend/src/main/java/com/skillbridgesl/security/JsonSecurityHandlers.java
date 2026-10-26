package com.skillbridgesl.security;

import org.springframework.http.MediaType;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;

import java.nio.charset.StandardCharsets;

/** Machine-readable 401/403 responses for the filter chain (before controllers are reached). */
public final class JsonSecurityHandlers {

    private JsonSecurityHandlers() {}

    public static AuthenticationEntryPoint unauthorized() {
        return (request, response, ex) -> write(response, 401, "Unauthorized", "UNAUTHENTICATED");
    }

    public static AccessDeniedHandler forbidden() {
        return (request, response, ex) -> write(response, 403, "Forbidden", "FORBIDDEN");
    }

    private static void write(jakarta.servlet.http.HttpServletResponse response,
                              int status, String title, String code) throws java.io.IOException {
        response.setStatus(status);
        response.setContentType(MediaType.APPLICATION_PROBLEM_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.getWriter().write("{\"status\":%d,\"title\":\"%s\",\"code\":\"%s\"}".formatted(status, title, code));
    }
}
