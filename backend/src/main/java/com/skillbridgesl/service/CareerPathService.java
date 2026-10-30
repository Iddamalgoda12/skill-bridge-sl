package com.skillbridgesl.service;

import com.skillbridgesl.dto.path.*;

import java.util.List;
import java.util.UUID;

public interface CareerPathService {

    List<CareerPathResponse> getUserPaths(UUID userId);

    CareerPathResponse getPathById(UUID userId, UUID pathId);

    CareerPathResponse getActivePath(UUID userId);

    CareerPathResponse createPath(UUID userId, CreateCareerPathRequest request);

    CareerPathResponse updatePath(UUID userId, UUID pathId, UpdateCareerPathRequest request);

    void deletePath(UUID userId, UUID pathId);

    MilestoneResponse addMilestone(UUID userId, UUID pathId, AddMilestoneRequest request);

    MilestoneResponse updateMilestone(UUID userId, UUID milestoneId, UpdateMilestoneRequest request);

    void deleteMilestone(UUID userId, UUID milestoneId);

    TaskResponse toggleTask(UUID userId, UUID taskId, ToggleTaskRequest request);

    List<AchievementResponse> getUserAchievements(UUID userId);
}

