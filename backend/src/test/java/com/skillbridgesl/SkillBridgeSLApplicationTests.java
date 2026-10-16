package com.skillbridgesl;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@Testcontainers
@ActiveProfiles("local")
class SkillBridgeSLApplicationTests {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:17-alpine")
            .withDatabaseName("skillbridgesl_test")
            .withUsername("test")
            .withPassword("test");

    @DynamicPropertySource
    static void overrideProps(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url",      postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);

        // Resolve database/migrations/ relative to the repo root.
        // When running `mvn test` from backend/, the working directory is backend/,
        // so we walk up one level to find the shared migrations folder.
        var migrationsPath = java.nio.file.Path.of("../database/migrations")
                .toAbsolutePath().normalize().toString();
        registry.add("spring.flyway.locations",
                     () -> "filesystem:" + migrationsPath);

        // Disable mail during tests
        registry.add("spring.mail.host", () -> "localhost");
    }

    @Test
    void contextLoads() {
        // Verifies the Spring application context starts correctly
        // with a real PostgreSQL database (via Testcontainers + Flyway migrations)
    }
}

