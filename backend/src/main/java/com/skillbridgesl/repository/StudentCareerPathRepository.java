package com.skillbridgesl.repository;

import com.skillbridgesl.model.StudentCareerPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface StudentCareerPathRepository extends JpaRepository<StudentCareerPath, UUID> {

    List<StudentCareerPath> findByUserIdOrderByCreatedAtDesc(UUID userId);

    Optional<StudentCareerPath> findByIdAndUserId(UUID id, UUID userId);

    @Query("SELECT p FROM StudentCareerPath p WHERE p.user.id = :userId AND p.isActive = true ORDER BY p.updatedAt DESC")
    List<StudentCareerPath> findActiveByUserId(@Param("userId") UUID userId);

    Optional<StudentCareerPath> findFirstByUserIdAndIsActiveTrueOrderByUpdatedAtDesc(UUID userId);

    boolean existsByUserIdAndTargetCareerSlug(UUID userId, String targetCareerSlug);
}

