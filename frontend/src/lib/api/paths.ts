import type { GeneratedCareerPath, EducationStageKey } from "@/lib/data/pathEngine";

export interface TaskRecord {
  id: string;
  title: string;
  isCompleted: boolean;
  completedAt?: string | null;
  position: number;
  resourceUrl?: string | null;
  resourceType?: string | null;
  notes?: string | null;
}

export interface MilestoneRecord {
  id: string;
  stageKey: string;
  title: string;
  description: string;
  whyItMatters: string;
  prerequisites?: string | null;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  targetDate?: string | null;
  durationMonths?: number | null;
  position: number;
  tasks: TaskRecord[];
}

export interface CareerPathRecord {
  id: string;
  title: string;
  targetCareerSlug: string;
  educationStage: EducationStageKey;
  currentStream?: string;
  district?: string;
  budgetTier?: string;
  isActive: boolean;
  completionPercent: number;
  notes?: string | null;
  preferencesJson?: string | null;
  totalMilestones: number;
  completedMilestones: number;
  totalTasks: number;
  completedTasks: number;
  milestones: MilestoneRecord[];
  createdAt: string;
  updatedAt: string;
}

export interface AchievementRecord {
  id: string;
  badgeKey: string;
  title: string;
  description: string;
  unlockedAt: string;
}

const LOCAL_STORAGE_KEY = "skillbridgesl_saved_paths_v2";

function getLocalPaths(): CareerPathRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalPaths(paths: CareerPathRecord[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(paths));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Fetch all saved career paths for the user.
 * Tries the backend authenticated endpoint first; falls back to localStorage for guests.
 */
export async function fetchUserPaths(): Promise<CareerPathRecord[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch("/api/paths", {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.paths)) {
        if (data.paths.length > 0) {
          saveLocalPaths(data.paths);
          return data.paths;
        }

        // When user is authenticated but has no paths in DB yet, auto-sync local guest path to DB
        const local = getLocalPaths();
        if (local.length > 0) {
          const primary = local.find((p) => p.isActive) || local[0];
          try {
            const syncRes = await fetch("/api/paths", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: primary.title,
                targetCareerSlug: primary.targetCareerSlug,
                educationStage: primary.educationStage,
                currentStream: primary.currentStream,
                district: primary.district,
                budgetTier: primary.budgetTier,
                milestones: primary.milestones.map((m) => ({
                  stageKey: m.stageKey,
                  title: m.title,
                  description: m.description,
                  whyItMatters: m.whyItMatters,
                  prerequisites: m.prerequisites,
                  durationMonths: m.durationMonths,
                  tasks: m.tasks.map((t) => ({
                    title: t.title,
                    resourceUrl: t.resourceUrl,
                    resourceType: t.resourceType,
                    notes: t.notes,
                  })),
                })),
              }),
            });
            if (syncRes.ok) {
              const syncData = await syncRes.json();
              if (syncData.path) {
                saveLocalPaths([syncData.path]);
                return [syncData.path];
              }
            }
          } catch {
            // Return local paths if sync encounters network error
          }
          return local;
        }

        return [];
      }
    }
  } catch {
    // Fall back to local storage
  }

  // Fallback to local paths
  return getLocalPaths();
}

/**
 * Get active career path.
 */
export async function fetchActivePath(): Promise<CareerPathRecord | null> {
  const paths = await fetchUserPaths();
  return paths.find((p) => p.isActive) || paths[0] || null;
}

/**
 * Create a new career path from generated roadmap.
 * Always saves locally first so no user work is ever lost, then syncs with API.
 */
export async function saveGeneratedPath(
  generated: GeneratedCareerPath
): Promise<CareerPathRecord> {
  // Sanitize stream to clean title (fits VARCHAR(50) and VARCHAR(255))
  const cleanStream = generated.currentStream
    ? generated.currentStream.split(/\bor\b|\/|,|\(/)[0].trim().slice(0, 48)
    : "General";

  const payload = {
    title: generated.title,
    targetCareerSlug: generated.targetCareerSlug,
    educationStage: generated.educationStage,
    currentStream: cleanStream,
    district: generated.district,
    budgetTier: generated.budgetTier,
    milestones: generated.milestones.map((m) => ({
      stageKey: m.stageKey,
      title: m.title,
      description: m.description,
      whyItMatters: m.whyItMatters,
      prerequisites: m.prerequisites,
      durationMonths: m.durationMonths,
      tasks: m.tasks.map((t) => ({
        title: t.title,
        resourceUrl: t.resourceUrl,
        resourceType: t.resourceType,
        notes: t.notes,
      })),
    })),
  };

  // 1. Instantly save local record so student progress is immediately secured
  const localRecord: CareerPathRecord = {
    id: "local-" + Date.now(),
    title: payload.title,
    targetCareerSlug: payload.targetCareerSlug,
    educationStage: payload.educationStage,
    currentStream: payload.currentStream,
    district: payload.district,
    budgetTier: payload.budgetTier,
    isActive: true,
    completionPercent: 0,
    totalMilestones: payload.milestones.length,
    completedMilestones: 0,
    totalTasks: payload.milestones.reduce((acc, m) => acc + m.tasks.length, 0),
    completedTasks: 0,
    milestones: payload.milestones.map((m, mIdx) => ({
      id: "m-" + Date.now() + "-" + mIdx,
      stageKey: m.stageKey,
      title: m.title,
      description: m.description,
      whyItMatters: m.whyItMatters,
      prerequisites: m.prerequisites,
      status: "PENDING",
      position: mIdx,
      tasks: m.tasks.map((t, tIdx) => ({
        id: "t-" + Date.now() + "-" + mIdx + "-" + tIdx,
        title: t.title,
        isCompleted: false,
        position: tIdx,
        resourceUrl: t.resourceUrl,
        resourceType: t.resourceType,
        notes: t.notes,
      })),
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const existing = getLocalPaths();
  const updated = [localRecord, ...existing.filter((p) => p.targetCareerSlug !== localRecord.targetCareerSlug).map((p) => ({ ...p, isActive: false }))];
  saveLocalPaths(updated);

  // 2. Sync with authenticated API in the background with timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch("/api/paths", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.path) {
        // Sync the server-assigned ID into local storage as well
        const synced = [data.path, ...existing.filter((p) => p.id !== data.path.id && p.targetCareerSlug !== data.path.targetCareerSlug).map((p) => ({ ...p, isActive: false }))];
        saveLocalPaths(synced);
        return data.path;
      }
    }
  } catch {
    // Expected for guests / offline / timeout - localRecord is already saved safely!
  }

  return localRecord;
}

/**
 * Toggle a task's completion status.
 */
export async function toggleTaskCompletion(
  pathId: string,
  taskId: string,
  isCompleted: boolean
): Promise<{ success: boolean }> {
  try {
    const res = await fetch(`/api/paths/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted }),
    });
    if (res.ok) return { success: true };
  } catch {
    // Local fallback
  }

  // Local storage update
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    for (const m of path.milestones) {
      const task = m.tasks.find((t) => t.id === taskId);
      if (task) {
        task.isCompleted = isCompleted;
        task.completedAt = isCompleted ? new Date().toISOString() : null;

        // Update milestone status
        const completedCount = m.tasks.filter((t) => t.isCompleted).length;
        if (completedCount === m.tasks.length && m.tasks.length > 0) {
          m.status = "COMPLETED";
        } else if (completedCount > 0) {
          m.status = "IN_PROGRESS";
        } else {
          m.status = "PENDING";
        }
        break;
      }
    }

    // Recalculate totals
    let allTasks = 0;
    let doneTasks = 0;
    let doneMilestones = 0;
    for (const m of path.milestones) {
      allTasks += m.tasks.length;
      doneTasks += m.tasks.filter((t) => t.isCompleted).length;
      if (m.status === "COMPLETED") doneMilestones++;
    }
    path.totalTasks = allTasks;
    path.completedTasks = doneTasks;
    path.completedMilestones = doneMilestones;
    path.completionPercent = allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;
    path.updatedAt = new Date().toISOString();

    saveLocalPaths(paths);
  }
  return { success: true };
}

/**
 * Delete a path.
 */
export async function deleteCareerPath(pathId: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/paths/${pathId}`, { method: "DELETE" });
    if (res.ok) return true;
  } catch {
    // Local fallback
  }

  const paths = getLocalPaths().filter((p) => p.id !== pathId);
  saveLocalPaths(paths);
  return true;
}

/**
 * Fetch achievements.
 */
export async function fetchUserAchievements(): Promise<AchievementRecord[]> {
  try {
    const res = await fetch("/api/paths/achievements");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.achievements)) return data.achievements;
    }
  } catch {
    // Local fallback
  }
  return [];
}

/**
 * Add a new custom milestone to a path.
 */
export async function addCustomMilestone(
  pathId: string,
  input: {
    stageKey: string;
    title: string;
    description?: string;
    whyItMatters?: string;
    prerequisites?: string;
    durationMonths?: number;
    targetDate?: string;
    tasks?: string[];
  }
): Promise<MilestoneRecord> {
  const newTasks: TaskRecord[] = (input.tasks || []).map((tTitle, tIdx) => ({
    id: "t-" + Date.now() + "-" + tIdx,
    title: tTitle,
    isCompleted: false,
    position: tIdx,
  }));

  const localMilestone: MilestoneRecord = {
    id: "m-" + Date.now(),
    stageKey: input.stageKey || "STAGE_2_UNDERGRADUATE",
    title: input.title,
    description: input.description || "",
    whyItMatters: input.whyItMatters || "",
    prerequisites: input.prerequisites || null,
    status: "PENDING",
    targetDate: input.targetDate || null,
    durationMonths: input.durationMonths || null,
    position: 999,
    tasks: newTasks,
  };

  // 1. Update local storage immediately
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    localMilestone.position = path.milestones.length;
    path.milestones.push(localMilestone);
    path.totalMilestones = path.milestones.length;
    path.totalTasks = path.milestones.reduce((acc, m) => acc + m.tasks.length, 0);
    path.completedTasks = path.milestones.reduce(
      (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
      0
    );
    path.completedMilestones = path.milestones.filter((m) => m.status === "COMPLETED").length;
    path.completionPercent =
      path.totalTasks > 0 ? Math.round((path.completedTasks / path.totalTasks) * 100) : 0;
    path.updatedAt = new Date().toISOString();
    saveLocalPaths(paths);
  }

  // 2. Sync with backend API
  try {
    const res = await fetch(`/api/paths/${pathId}/milestones`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stageKey: input.stageKey,
        title: input.title,
        description: input.description,
        whyItMatters: input.whyItMatters,
        prerequisites: input.prerequisites,
        targetDate: input.targetDate,
        durationMonths: input.durationMonths,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.milestone) {
        return {
          ...localMilestone,
          id: data.milestone.id,
          tasks: newTasks,
        };
      }
    }
  } catch {
    // Local fallback is active
  }

  return localMilestone;
}

/**
 * Update an existing milestone.
 */
export async function updateMilestone(
  pathId: string,
  milestoneId: string,
  updates: Partial<MilestoneRecord>
): Promise<MilestoneRecord | null> {
  // 1. Update local storage
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  let updatedM: MilestoneRecord | null = null;
  if (path) {
    const m = path.milestones.find((item) => item.id === milestoneId);
    if (m) {
      if (updates.title !== undefined) m.title = updates.title;
      if (updates.description !== undefined) m.description = updates.description;
      if (updates.whyItMatters !== undefined) m.whyItMatters = updates.whyItMatters;
      if (updates.prerequisites !== undefined) m.prerequisites = updates.prerequisites;
      if (updates.status !== undefined) m.status = updates.status;
      if (updates.targetDate !== undefined) m.targetDate = updates.targetDate;
      if (updates.durationMonths !== undefined) m.durationMonths = updates.durationMonths;

      // If status changed to COMPLETED, mark all child tasks completed
      if (updates.status === "COMPLETED") {
        m.tasks.forEach((t) => {
          t.isCompleted = true;
          t.completedAt = new Date().toISOString();
        });
      }

      // Recalculate totals
      let allTasks = 0;
      let doneTasks = 0;
      let doneMilestones = 0;
      for (const item of path.milestones) {
        allTasks += item.tasks.length;
        doneTasks += item.tasks.filter((t) => t.isCompleted).length;
        if (item.status === "COMPLETED") doneMilestones++;
      }
      path.totalTasks = allTasks;
      path.completedTasks = doneTasks;
      path.completedMilestones = doneMilestones;
      path.completionPercent = allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;
      path.updatedAt = new Date().toISOString();
      saveLocalPaths(paths);
      updatedM = { ...m };
    }
  }

  // 2. Sync with backend API
  try {
    const res = await fetch(`/api/paths/milestones/${milestoneId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updates.title,
        description: updates.description,
        whyItMatters: updates.whyItMatters,
        prerequisites: updates.prerequisites,
        status: updates.status,
        targetDate: updates.targetDate,
        durationMonths: updates.durationMonths,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.milestone) {
        return data.milestone;
      }
    }
  } catch {
    // Local fallback is active
  }

  return updatedM;
}

/**
 * Delete a milestone safely.
 */
export async function deleteMilestone(
  pathId: string,
  milestoneId: string
): Promise<boolean> {
  // 1. Update local storage
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    path.milestones = path.milestones.filter((m) => m.id !== milestoneId);
    let allTasks = 0;
    let doneTasks = 0;
    let doneMilestones = 0;
    for (const item of path.milestones) {
      allTasks += item.tasks.length;
      doneTasks += item.tasks.filter((t) => t.isCompleted).length;
      if (item.status === "COMPLETED") doneMilestones++;
    }
    path.totalMilestones = path.milestones.length;
    path.totalTasks = allTasks;
    path.completedTasks = doneTasks;
    path.completedMilestones = doneMilestones;
    path.completionPercent = allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;
    path.updatedAt = new Date().toISOString();
    saveLocalPaths(paths);
  }

  // 2. Sync with backend API
  try {
    const res = await fetch(`/api/paths/milestones/${milestoneId}`, { method: "DELETE" });
    if (res.ok) return true;
  } catch {
    // Local fallback is active
  }

  return true;
}

/**
 * Update career path details (e.g. title, notes, district).
 */
export async function updateCareerPath(
  pathId: string,
  updates: { title?: string; notes?: string; district?: string }
): Promise<CareerPathRecord | null> {
  // 1. Update local storage
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    if (updates.title !== undefined) path.title = updates.title;
    if (updates.notes !== undefined) path.notes = updates.notes;
    if (updates.district !== undefined) path.district = updates.district;
    path.updatedAt = new Date().toISOString();
    saveLocalPaths(paths);
  }

  // 2. Sync with backend API
  try {
    const res = await fetch(`/api/paths/${pathId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.path) return data.path;
    }
  } catch {
    // Local fallback is active
  }

  return path || null;
}

/**
 * Add a new task to a milestone.
 */
export async function addTaskToMilestone(
  pathId: string,
  milestoneId: string,
  taskTitle: string
): Promise<TaskRecord> {
  const newTask: TaskRecord = {
    id: "t-" + Date.now(),
    title: taskTitle.trim(),
    isCompleted: false,
    position: 999,
  };

  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    const m = path.milestones.find((item) => item.id === milestoneId);
    if (m) {
      newTask.position = m.tasks.length;
      m.tasks.push(newTask);
      if (m.status === "COMPLETED") {
        m.status = "IN_PROGRESS";
      }

      let allTasks = 0;
      let doneTasks = 0;
      let doneMilestones = 0;
      for (const item of path.milestones) {
        allTasks += item.tasks.length;
        doneTasks += item.tasks.filter((t) => t.isCompleted).length;
        if (item.status === "COMPLETED") doneMilestones++;
      }
      path.totalTasks = allTasks;
      path.completedTasks = doneTasks;
      path.completedMilestones = doneMilestones;
      path.completionPercent = allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;
      path.updatedAt = new Date().toISOString();
      saveLocalPaths(paths);
    }
  }

  return newTask;
}

/**
 * Delete a task from a milestone.
 */
export async function deleteTaskFromMilestone(
  pathId: string,
  milestoneId: string,
  taskId: string
): Promise<boolean> {
  const paths = getLocalPaths();
  const path = paths.find((p) => p.id === pathId);
  if (path) {
    const m = path.milestones.find((item) => item.id === milestoneId);
    if (m) {
      m.tasks = m.tasks.filter((t) => t.id !== taskId);
      const completedCount = m.tasks.filter((t) => t.isCompleted).length;
      if (m.tasks.length === 0) {
        m.status = "PENDING";
      } else if (completedCount === m.tasks.length) {
        m.status = "COMPLETED";
      } else if (completedCount > 0) {
        m.status = "IN_PROGRESS";
      } else {
        m.status = "PENDING";
      }

      let allTasks = 0;
      let doneTasks = 0;
      let doneMilestones = 0;
      for (const item of path.milestones) {
        allTasks += item.tasks.length;
        doneTasks += item.tasks.filter((t) => t.isCompleted).length;
        if (item.status === "COMPLETED") doneMilestones++;
      }
      path.totalTasks = allTasks;
      path.completedTasks = doneTasks;
      path.completedMilestones = doneMilestones;
      path.completionPercent = allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0;
      path.updatedAt = new Date().toISOString();
      saveLocalPaths(paths);
    }
  }
  return true;
}

