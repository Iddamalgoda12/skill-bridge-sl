package com.skillbridgesl.controller;

import com.skillbridgesl.dto.contact.ContactRequest;
import com.skillbridgesl.model.ContactMessage;
import com.skillbridgesl.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Public "personal guidance" form. Messages are stored for the maintainers to follow up. */
@RestController
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageRepository messages;

    @PostMapping
    public ResponseEntity<Void> submit(@Valid @RequestBody ContactRequest request) {
        messages.save(ContactMessage.builder()
                .name(request.name().trim())
                .email(request.email().trim().toLowerCase(java.util.Locale.ROOT))
                .topic(request.topic())
                .message(request.message().trim())
                .build());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
