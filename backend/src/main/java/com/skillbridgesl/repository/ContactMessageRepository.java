package com.skillbridgesl.repository;

import com.skillbridgesl.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, UUID> {
}
