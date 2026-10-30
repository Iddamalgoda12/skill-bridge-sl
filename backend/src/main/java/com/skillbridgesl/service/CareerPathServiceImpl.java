package com.skillbridgesl.service;

import com.skillbridgesl.dto.path.*;
import com.skillbridgesl.exception.ResourceNotFoundException;
import com.skillbridgesl.model.*;
import com.skillbridgesl.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CareerPathServiceImpl implements CareerPathService {

    private final StudentCareerPathRepository pathRepository;
    private final PathMilestoneRepository milestoneRepository;
    private final MilestoneTaskRepository taskRepository;
    private final StudentAchievementRepository achievementRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<CareerPathResponse> getUserPaths(UUID userId) {
        return pathRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::toPathResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CareerPathResponse getPathById(UUID userId, UUID pathId) {
        StudentCareerPath path = pathRepository.findByIdAndUserId(pathId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("CareerPath", pathId));
        return toPathResponse(path);
    }

    @Override
    @Transactional(readOnly = true)
    public CareerPathResponse getActivePath(UUID userId) {
        return pathRepository.findFirstByUserIdAndIsActiveTrueOrderByUpdatedAtDesc(userId)
                .map(this::toPathResponse)
                .orElse(null);
    }

    @Override
    @Transactional
    public CareerPathResponse createPath(UUID userId, CreateCareerPathRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", userId));

        // If newly created path is marked active, unset any existing active paths
        List<StudentCareerPath> activePaths = pathRepository.findActiveByUserId(userId);
        for (StudentCareerPath p : activePaths) {
            p.setActive(false);
        }
        pathRepository.saveAll(activePaths);

        StudentCareerPath path = StudentCareerPath.builder()
                .user(user)
                .title(request.getTitle())
                .targetCareerSlug(request.getTargetCareerSlug())
                .educationStage(request.getEducationStage())
                .currentStream(request.getCurrentStream())
                .district(request.getDistrict())
                .budgetTier(request.getBudgetTier())
                .notes(request.getNotes())
                .preferencesJson(request.getPreferencesJson())
                .isActive(true)
                .completionPercent(0)
                .milestones(new ArrayList<>())
                .build();

        StudentCareerPath savedPath = pathRepository.save(path);

        // Build milestones if provided in request
        if (request.getMilestones() != null && !request.getMilestones().isEmpty()) {
            int mPos = 0;
            for (CreateCareerPathRequest.MilestoneInputDto mDto : request.getMilestones()) {
                PathMilestone milestone = PathMilestone.builder()
                        .careerPath(savedPath)
                        .stageKey(mDto.getStageKey() != null ? mDto.getStageKey() : "MILESTONE")
                        .title(mDto.getTitle())
                        .description(mDto.getDescription())
                        .whyItMatters(mDto.getWhyItMatters())
                        .prerequisites(mDto.getPrerequisites())
                        .targetDate(mDto.getTargetDate())
                        .durationMonths(mDto.getDurationMonths())
                        .status("PENDING")
                        .position(mPos++)
                        .tasks(new ArrayList<>())
                        .build();

                PathMilestone savedMilestone = milestoneRepository.save(milestone);

                if (mDto.getTasks() != null && !mDto.getTasks().isEmpty()) {
                    int tPos = 0;
                    for (CreateCareerPathRequest.TaskInputDto tDto : mDto.getTasks()) {
                        MilestoneTask task = MilestoneTask.builder()
                                .milestone(savedMilestone)
                                .title(tDto.getTitle())
                                .resourceUrl(tDto.getResourceUrl())
                                .resourceType(tDto.getResourceType())
                                .notes(tDto.getNotes())
                                .isCompleted(false)
                                .position(tPos++)
                                .build();
                        savedMilestone.getTasks().add(taskRepository.save(task));
                    }
                }
                savedPath.getMilestones().add(savedMilestone);
            }
        }

        // Award badge for creating first roadmap
        if (!achievementRepository.existsByUserIdAndBadgeKey(userId, "FIRST_PATH_CREATED")) {
            StudentAchievement badge = StudentAchievement.builder()
                    .user(user)
                    .careerPath(savedPath)
                    .badgeKey("FIRST_PATH_CREATED")
                    .title("Visionary Pathfinder")
                    .description("Designed your personalized Sri Lankan education and career roadmap.")
                    .build();
            achievementRepository.save(badge);
        }

        return toPathResponse(savedPath);
    }

    @Override
    @Transactional
    public CareerPathResponse updatePath(UUID userId, UUID pathId, UpdateCareerPathRequest request) {
        StudentCareerPath path = pathRepository.findByIdAndUserId(pathId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("CareerPath", pathId));

        if (request.getTitle() != null) path.setTitle(request.getTitle());
        if (request.getNotes() != null) path.setNotes(request.getNotes());
        if (request.getCurrentStream() != null) path.setCurrentStream(request.getCurrentStream());
        if (request.getDistrict() != null) path.setDistrict(request.getDistrict());
        if (request.getBudgetTier() != null) path.setBudgetTier(request.getBudgetTier());
        if (request.getPreferencesJson() != null) path.setPreferencesJson(request.getPreferencesJson());

        if (request.getIsActive() != null) {
            if (request.getIsActive()) {
                List<StudentCareerPath> active = pathRepository.findActiveByUserId(userId);
                for (StudentCareerPath p : active) {
                    if (!p.getId().equals(pathId)) {
                        p.setActive(false);
                    }
                }
                pathRepository.saveAll(active);
            }
            path.setActive(request.getIsActive());
        }

        return toPathResponse(pathRepository.save(path));
    }

    @Override
    @Transactional
    public void deletePath(UUID userId, UUID pathId) {
        StudentCareerPath path = pathRepository.findByIdAndUserId(pathId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("CareerPath", pathId));
        pathRepository.delete(path);
    }

    @Override
    @Transactional
    public MilestoneResponse addMilestone(UUID userId, UUID pathId, AddMilestoneRequest request) {
        StudentCareerPath path = pathRepository.findByIdAndUserId(pathId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("CareerPath", pathId));

        int nextPos = path.getMilestones().size();

        PathMilestone milestone = PathMilestone.builder()
                .careerPath(path)
                .stageKey(request.getStageKey())
                .title(request.getTitle())
                .description(request.getDescription())
                .whyItMatters(request.getWhyItMatters())
                .prerequisites(request.getPrerequisites())
                .targetDate(request.getTargetDate())
                .durationMonths(request.getDurationMonths())
                .status("PENDING")
                .position(nextPos)
                .tasks(new ArrayList<>())
                .build();

        PathMilestone saved = milestoneRepository.save(milestone);
        recalculateProgress(path);
        return toMilestoneResponse(saved);
    }

    @Override
    @Transactional
    public MilestoneResponse updateMilestone(UUID userId, UUID milestoneId, UpdateMilestoneRequest request) {
        PathMilestone milestone = milestoneRepository.findByIdAndUserId(milestoneId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Milestone", milestoneId));

        if (request.getTitle() != null) milestone.setTitle(request.getTitle());
        if (request.getDescription() != null) milestone.setDescription(request.getDescription());
        if (request.getWhyItMatters() != null) milestone.setWhyItMatters(request.getWhyItMatters());
        if (request.getPrerequisites() != null) milestone.setPrerequisites(request.getPrerequisites());
        if (request.getTargetDate() != null) milestone.setTargetDate(request.getTargetDate());
        if (request.getDurationMonths() != null) milestone.setDurationMonths(request.getDurationMonths());

        if (request.getStatus() != null) {
            milestone.setStatus(request.getStatus().toUpperCase());
            // If milestone marked completed, complete all child tasks
            if ("COMPLETED".equalsIgnoreCase(request.getStatus())) {
                for (MilestoneTask task : milestone.getTasks()) {
                    task.setCompleted(true);
                    task.setCompletedAt(Instant.now());
                }
                taskRepository.saveAll(milestone.getTasks());
            }
        }

        PathMilestone saved = milestoneRepository.save(milestone);
        recalculateProgress(milestone.getCareerPath());
        return toMilestoneResponse(saved);
    }

    @Override
    @Transactional
    public void deleteMilestone(UUID userId, UUID milestoneId) {
        PathMilestone milestone = milestoneRepository.findByIdAndUserId(milestoneId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Milestone", milestoneId));
        StudentCareerPath path = milestone.getCareerPath();
        milestoneRepository.delete(milestone);
        recalculateProgress(path);
    }

    @Override
    @Transactional
    public TaskResponse toggleTask(UUID userId, UUID taskId, ToggleTaskRequest request) {
        MilestoneTask task = taskRepository.findByIdAndUserId(taskId, userId)
                .orElseThrow(() -> new ResourceNotFoundException("Task", taskId));

        boolean newCompleted = request.getIsCompleted() != null ? request.getIsCompleted() : !task.isCompleted();
        task.setCompleted(newCompleted);
        task.setCompletedAt(newCompleted ? Instant.now() : null);
        if (request.getNotes() != null) task.setNotes(request.getNotes());

        MilestoneTask savedTask = taskRepository.save(task);

        // Update parent milestone status based on task completions
        PathMilestone milestone = task.getMilestone();
        List<MilestoneTask> tasks = milestone.getTasks();
        long completed = tasks.stream().filter(MilestoneTask::isCompleted).count();

        if (completed == tasks.size() && !tasks.isEmpty()) {
            milestone.setStatus("COMPLETED");
        } else if (completed > 0) {
            milestone.setStatus("IN_PROGRESS");
        } else {
            milestone.setStatus("PENDING");
        }
        milestoneRepository.save(milestone);

        // Recalculate whole path completion and check badges
        recalculateProgress(milestone.getCareerPath());
        checkAndAwardAchievements(userId, milestone.getCareerPath());

        return toTaskResponse(savedTask);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AchievementResponse> getUserAchievements(UUID userId) {
        return achievementRepository.findByUserIdOrderByUnlockedAtDesc(userId).stream()
                .map(a -> AchievementResponse.builder()
                        .id(a.getId())
                        .badgeKey(a.getBadgeKey())
                        .title(a.getTitle())
                        .description(a.getDescription())
                        .unlockedAt(a.getUnlockedAt())
                        .build())
                .collect(Collectors.toList());
    }

    // ── Helper Methods ────────────────────────────────────────────────────────

    private void recalculateProgress(StudentCareerPath path) {
        long totalTasks = taskRepository.countTotalTasksByPathId(path.getId());
        long completedTasks = taskRepository.countCompletedTasksByPathId(path.getId());

        int percent = 0;
        if (totalTasks > 0) {
            percent = (int) Math.round(((double) completedTasks / totalTasks) * 100);
        } else {
            long totalM = milestoneRepository.countTotalByPathId(path.getId());
            long completedM = milestoneRepository.countCompletedByPathId(path.getId());
            if (totalM > 0) {
                percent = (int) Math.round(((double) completedM / totalM) * 100);
            }
        }

        path.setCompletionPercent(percent);
        pathRepository.save(path);
    }

    private void checkAndAwardAchievements(UUID userId, StudentCareerPath path) {
        int percent = path.getCompletionPercent();
        User user = path.getUser();

        if (percent >= 25 && !achievementRepository.existsByUserIdAndBadgeKey(userId, "MILESTONE_25")) {
            achievementRepository.save(StudentAchievement.builder()
                    .user(user)
                    .careerPath(path)
                    .badgeKey("MILESTONE_25")
                    .title("First Quarter Milestone")
                    .description("Completed 25% of your career path tasks!")
                    .build());
        }

        if (percent >= 50 && !achievementRepository.existsByUserIdAndBadgeKey(userId, "MILESTONE_50")) {
            achievementRepository.save(StudentAchievement.builder()
                    .user(user)
                    .careerPath(path)
                    .badgeKey("MILESTONE_50")
                    .title("Halfway Achiever")
                    .description("Crossed the 50% mark toward your target career!")
                    .build());
        }

        if (percent == 100 && !achievementRepository.existsByUserIdAndBadgeKey(userId, "MILESTONE_100")) {
            achievementRepository.save(StudentAchievement.builder()
                    .user(user)
                    .careerPath(path)
                    .badgeKey("MILESTONE_100")
                    .title("Career Trailblazer")
                    .description("Completed 100% of your roadmap milestones. Ready for launch!")
                    .build());
        }
    }

    private CareerPathResponse toPathResponse(StudentCareerPath p) {
        List<MilestoneResponse> mResponses = p.getMilestones() != null
                ? p.getMilestones().stream().map(this::toMilestoneResponse).collect(Collectors.toList())
                : Collections.emptyList();

        int totalM = mResponses.size();
        int completedM = (int) mResponses.stream().filter(m -> "COMPLETED".equalsIgnoreCase(m.getStatus())).count();

        int totalT = 0;
        int completedT = 0;
        for (MilestoneResponse mr : mResponses) {
            if (mr.getTasks() != null) {
                totalT += mr.getTasks().size();
                completedT += mr.getTasks().stream().filter(TaskResponse::isCompleted).count();
            }
        }

        return CareerPathResponse.builder()
                .id(p.getId())
                .title(p.getTitle())
                .targetCareerSlug(p.getTargetCareerSlug())
                .educationStage(p.getEducationStage())
                .currentStream(p.getCurrentStream())
                .district(p.getDistrict())
                .budgetTier(p.getBudgetTier())
                .isActive(p.isActive())
                .completionPercent(p.getCompletionPercent())
                .notes(p.getNotes())
                .preferencesJson(p.getPreferencesJson())
                .totalMilestones(totalM)
                .completedMilestones(completedM)
                .totalTasks(totalT)
                .completedTasks(completedT)
                .milestones(mResponses)
                .createdAt(p.getCreatedAt())
                .updatedAt(p.getUpdatedAt())
                .build();
    }

    private MilestoneResponse toMilestoneResponse(PathMilestone m) {
        List<TaskResponse> tResponses = m.getTasks() != null
                ? m.getTasks().stream().map(this::toTaskResponse).collect(Collectors.toList())
                : Collections.emptyList();

        return MilestoneResponse.builder()
                .id(m.getId())
                .stageKey(m.getStageKey())
                .title(m.getTitle())
                .description(m.getDescription())
                .whyItMatters(m.getWhyItMatters())
                .prerequisites(m.getPrerequisites())
                .status(m.getStatus())
                .targetDate(m.getTargetDate())
                .durationMonths(m.getDurationMonths())
                .position(m.getPosition())
                .tasks(tResponses)
                .build();
    }

    private TaskResponse toTaskResponse(MilestoneTask t) {
        return TaskResponse.builder()
                .id(t.getId())
                .title(t.getTitle())
                .isCompleted(t.isCompleted())
                .completedAt(t.getCompletedAt())
                .position(t.getPosition())
                .resourceUrl(t.getResourceUrl())
                .resourceType(t.getResourceType())
                .notes(t.getNotes())
                .build();
    }
}
