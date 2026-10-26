package com.skillbridgesl.model;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "courses")
@EntityListeners(AuditingEntityListener.class)
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instructor_id", nullable = false)
    private User instructor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, unique = true, length = 280)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @Column(nullable = false, precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal price = BigDecimal.ZERO;

    // Postgres native enum column: bind as a named enum, not varchar.
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.NAMED_ENUM)
    @Column(nullable = false)
    @Builder.Default
    private Status status = Status.DRAFT;

    @Column(length = 50)
    @Builder.Default
    private String level = "BEGINNER";

    @Column(length = 50)
    @Builder.Default
    private String language = "en";

    @ElementCollection
    @CollectionTable(name = "course_tags",
                     joinColumns = @JoinColumn(name = "course_id"))
    @Column(name = "tag")
    @Builder.Default
    private Set<String> tags = new HashSet<>();

    @Column(name = "duration_mins")
    private Integer durationMins;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("position ASC")
    @Builder.Default
    private List<Section> sections = new ArrayList<>();

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    public enum Status { DRAFT, PUBLISHED, ARCHIVED }
}

