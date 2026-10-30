package com.skillbridgesl.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "student_career_paths")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentCareerPath {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(name = "target_career_slug", nullable = false, length = 100)
    private String targetCareerSlug;

    @Column(name = "education_stage", nullable = false, length = 50)
    private String educationStage;

    @Column(name = "current_stream", length = 50)
    private String currentStream;

    @Column(length = 50)
    private String district;

    @Column(name = "budget_tier", length = 50)
    private String budgetTier;

    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private boolean isActive = true;

    @Column(name = "completion_percent", nullable = false)
    @Builder.Default
    private Integer completionPercent = 0;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "preferences_json", columnDefinition = "TEXT")
    private String preferencesJson;

    @OneToMany(mappedBy = "careerPath", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("position ASC")
    @Builder.Default
    private List<PathMilestone> milestones = new ArrayList<>();

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;
}

