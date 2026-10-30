package com.skillbridgesl.repository;

import com.skillbridgesl.model.PathMilestone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PathMilestoneRepository extends JpaRepository<PathMilestone, UUID> {

    List<PathMilestone> findByCareerPathIdOrderByPositionAsc(UUID pathId);

    @Query("SELECT m FROM PathMilestone m WHERE m.id = :id AND m.careerPath.user.id = :userId")
    Optional<PathMilestone> findByIdAndUserId(@Param("id") UUID id, @Param("userId") UUID userId);

    @Query("SELECT COUNT(m) FROM PathMilestone m WHERE m.careerPath.id = :pathId AND m.status = 'COMPLETED'")
    long countCompletedByPathId(@Param("pathId") UUID pathId);

    @Query("SELECT COUNT(m) FROM PathMilestone m WHERE m.careerPath.id = :pathId")
    long countTotalByPathId(@Param("pathId") UUID pathId);
}

