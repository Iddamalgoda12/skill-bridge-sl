package com.skillbridgesl.auth;

import com.skillbridgesl.security.RateLimitFilter;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockFilterChain;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import static org.assertj.core.api.Assertions.assertThat;

class RateLimitFilterTest {

    private MockHttpServletResponse call(RateLimitFilter filter, String path, String addr, String forwarded) throws Exception {
        var request = new MockHttpServletRequest("POST", path);
        request.setServletPath(path);
        request.setRemoteAddr(addr);
        if (forwarded != null) request.addHeader("X-Forwarded-For", forwarded);
        var response = new MockHttpServletResponse();
        filter.doFilter(request, response, new MockFilterChain());
        return response;
    }

    @Test
    void blocksAfterBudgetIsSpentPerClientAndEndpoint() throws Exception {
        var filter = new RateLimitFilter(false, 3);
        for (int i = 0; i < 3; i++) assertThat(call(filter, "/auth/login", "10.0.0.1", null).getStatus()).isEqualTo(200);

        var blocked = call(filter, "/auth/login", "10.0.0.1", null);
        assertThat(blocked.getStatus()).isEqualTo(429);
        assertThat(blocked.getHeader("Retry-After")).isNotNull();
        assertThat(blocked.getContentAsString()).contains("RATE_LIMITED");

        // Other clients and other endpoints keep their own budget.
        assertThat(call(filter, "/auth/login", "10.0.0.2", null).getStatus()).isEqualTo(200);
        assertThat(call(filter, "/auth/register", "10.0.0.1", null).getStatus()).isEqualTo(200);
    }

    @Test
    void forwardedForIsIgnoredUnlessTrusted() throws Exception {
        var untrusted = new RateLimitFilter(false, 1);
        call(untrusted, "/auth/login", "10.0.0.1", "1.1.1.1");
        // A spoofed header must not give an attacker a fresh budget.
        assertThat(call(untrusted, "/auth/login", "10.0.0.1", "2.2.2.2").getStatus()).isEqualTo(429);

        var trusted = new RateLimitFilter(true, 1);
        call(trusted, "/auth/login", "10.0.0.1", "1.1.1.1");
        assertThat(call(trusted, "/auth/login", "10.0.0.1", "2.2.2.2").getStatus()).isEqualTo(200);
    }

    @Test
    void ignoresOtherEndpointsAndMethods() throws Exception {
        var filter = new RateLimitFilter(false, 1);
        for (int i = 0; i < 5; i++) assertThat(call(filter, "/users/me/password", "10.0.0.1", null).getStatus()).isEqualTo(200);
        // Token refresh is not a credential-guessing surface and must never be throttled.
        for (int i = 0; i < 5; i++) assertThat(call(filter, "/auth/refresh", "10.0.0.1", null).getStatus()).isEqualTo(200);
    }
}
