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
    const res = await fetch("/api/paths", { method: "GET" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.paths)) {
        return data.paths;
      }
    }
  } catch {
    // Fall back to local storage
  }
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
 */
export async function saveGeneratedPath(
  generated: GeneratedCareerPath
): Promise<CareerPathRecord> {
  const payload = {
    title: generated.title,
    targetCareerSlug: generated.targetCareerSlug,
    educationStage: generated.educationStage,
    currentStream: generated.currentStream,
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

  try {
    const res = await fetch("/api/paths", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.path) return data.path;
    }
  } catch {
    // Fallback to local storage for guest
  }

  // Create local record
  const newPath: CareerPathRecord = {
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
  const updated = [newPath, ...existing.map((p) => ({ ...p, isActive: false }))];
  saveLocalPaths(updated);
  return newPath;
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

