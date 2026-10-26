package com.skillbridgesl.config;

import com.skillbridgesl.security.JsonSecurityHandlers;
import com.skillbridgesl.security.JwtAuthenticationFilter;
import com.skillbridgesl.security.RateLimitFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private static final String[] PUBLIC_ENDPOINTS = {
        "/auth/**",
        "/contact",
        "/courses/public/**",
        "/categories/**",
        "/actuator/health",
        "/actuator/info",
        "/api-docs/**",
        "/swagger-ui/**",
        "/swagger-ui.html"
    };

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final RateLimitFilter          rateLimitFilter;
    private final UserDetailsService       userDetailsService;
    private final CorsConfigurationSource  corsConfigurationSource;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            // Stateless bearer-token API: no ambient cookie credentials reach this
            // service (the Next.js BFF holds the cookies and checks Origin itself).
            .csrf(AbstractHttpConfigurer::disable)
            .headers(headers -> headers
                .referrerPolicy(r -> r.policy(
                    org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy.NO_REFERRER)))
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(JsonSecurityHandlers.unauthorized())
                .accessDeniedHandler(JsonSecurityHandlers.forbidden()))
            .cors(cors -> cors.configurationSource(corsConfigurationSource))
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(PUBLIC_ENDPOINTS).permitAll()
                .anyRequest().authenticated())
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(rateLimitFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        var provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}

