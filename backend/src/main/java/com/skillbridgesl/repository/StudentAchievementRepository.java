package com.skillbridgesl.repository;

import com.skillbridgesl.model.StudentAchievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface StudentAchievementRepository extends JpaRepository<StudentAchievement, UUID> {

    List<StudentAchievement> findByUserIdOrderByUnlockedAtDesc(UUID userId);

    Optional<StudentAchievement> findByUserIdAndBadgeKeyAndCareerPathId(UUID userId, String badgeKey, UUID pathId);

    boolean existsByUserIdAndBadgeKey(UUID userId, String badgeKey);
}

