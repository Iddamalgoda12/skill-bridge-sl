package com.skillbridgesl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing           // Auditing: createdAt, updatedAt on entities
@EnableCaching               // Spring Cache abstraction
@EnableAsync                 // Async @Service methods
public class SkillBridgeSLApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkillBridgeSLApplication.class, args);
    }
}

