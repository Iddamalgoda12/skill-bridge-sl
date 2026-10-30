package com.skillbridgesl.repository;

import com.skillbridgesl.model.MilestoneTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface MilestoneTaskRepository extends JpaRepository<MilestoneTask, UUID> {

    List<MilestoneTask> findByMilestoneIdOrderByPositionAsc(UUID milestoneId);

    @Query("SELECT t FROM MilestoneTask t WHERE t.id = :id AND t.milestone.careerPath.user.id = :userId")
    Optional<MilestoneTask> findByIdAndUserId(@Param("id") UUID id, @Param("userId") UUID userId);

    @Query("SELECT COUNT(t) FROM MilestoneTask t WHERE t.milestone.careerPath.id = :pathId AND t.isCompleted = true")
    long countCompletedTasksByPathId(@Param("pathId") UUID pathId);

    @Query("SELECT COUNT(t) FROM MilestoneTask t WHERE t.milestone.careerPath.id = :pathId")
    long countTotalTasksByPathId(@Param("pathId") UUID pathId);
}

