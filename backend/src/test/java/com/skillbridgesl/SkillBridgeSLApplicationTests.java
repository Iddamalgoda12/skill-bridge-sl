package com.skillbridgesl;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("local")
class SkillBridgeSLApplicationTests {

    @Test
    void contextLoads() {
        // Requires the local PostgreSQL database and applies pending Flyway migrations.
    }
}
