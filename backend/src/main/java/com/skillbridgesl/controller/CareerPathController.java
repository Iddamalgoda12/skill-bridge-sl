package com.skillbridgesl.controller;

import com.skillbridgesl.dto.path.*;
import com.skillbridgesl.model.User;
import com.skillbridgesl.service.CareerPathService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/paths")
@RequiredArgsConstructor
public class CareerPathController {

    private final CareerPathService careerPathService;

    @GetMapping
    public List<CareerPathResponse> getUserPaths(@AuthenticationPrincipal User principal) {
        return careerPathService.getUserPaths(principal.getId());
    }

    @GetMapping("/active")
    public ResponseEntity<CareerPathResponse> getActivePath(@AuthenticationPrincipal User principal) {
        CareerPathResponse active = careerPathService.getActivePath(principal.getId());
        return active != null ? ResponseEntity.ok(active) : ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public CareerPathResponse getPathById(@AuthenticationPrincipal User principal,
                                          @PathVariable UUID id) {
        return careerPathService.getPathById(principal.getId(), id);
    }

    @PostMapping
    public ResponseEntity<CareerPathResponse> createPath(@AuthenticationPrincipal User principal,
                                                         @Valid @RequestBody CreateCareerPathRequest request) {
        CareerPathResponse created = careerPathService.createPath(principal.getId(), request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PatchMapping("/{id}")
    public CareerPathResponse updatePath(@AuthenticationPrincipal User principal,
                                         @PathVariable UUID id,
                                         @RequestBody UpdateCareerPathRequest request) {
        return careerPathService.updatePath(principal.getId(), id, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePath(@AuthenticationPrincipal User principal,
                                           @PathVariable UUID id) {
        careerPathService.deletePath(principal.getId(), id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/milestones")
    public ResponseEntity<MilestoneResponse> addMilestone(@AuthenticationPrincipal User principal,
                                                          @PathVariable UUID id,
                                                          @Valid @RequestBody AddMilestoneRequest request) {
        MilestoneResponse added = careerPathService.addMilestone(principal.getId(), id, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(added);
    }

    @PatchMapping("/milestones/{milestoneId}")
    public MilestoneResponse updateMilestone(@AuthenticationPrincipal User principal,
                                             @PathVariable UUID milestoneId,
                                             @RequestBody UpdateMilestoneRequest request) {
        return careerPathService.updateMilestone(principal.getId(), milestoneId, request);
    }

    @DeleteMapping("/milestones/{milestoneId}")
    public ResponseEntity<Void> deleteMilestone(@AuthenticationPrincipal User principal,
                                                @PathVariable UUID milestoneId) {
        careerPathService.deleteMilestone(principal.getId(), milestoneId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/tasks/{taskId}")
    public TaskResponse toggleTask(@AuthenticationPrincipal User principal,
                                   @PathVariable UUID taskId,
                                   @RequestBody ToggleTaskRequest request) {
        return careerPathService.toggleTask(principal.getId(), taskId, request);
    }

    @GetMapping("/achievements")
    public List<AchievementResponse> getAchievements(@AuthenticationPrincipal User principal) {
        return careerPathService.getUserAchievements(principal.getId());
    }
}

