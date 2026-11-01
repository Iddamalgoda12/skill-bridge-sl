"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Route,
  CheckCircle2,
  Circle,
  Clock,
  GraduationCap,
  Sparkles,
  Trophy,
  Plus,
  Trash2,
  ArrowRight,
  Compass,
  AlertCircle,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowUpDown,
  Edit3,
  X,
  Check,
  Layers,
  FileText,
} from "lucide-react";
import {
  fetchUserPaths,
  toggleTaskCompletion,
  deleteCareerPath,
  fetchUserAchievements,
  addCustomMilestone,
  updateMilestone,
  deleteMilestone,
  updateCareerPath,
  addTaskToMilestone,
  deleteTaskFromMilestone,
  type CareerPathRecord,
  type MilestoneRecord,
  type TaskRecord,
  type AchievementRecord,
} from "@/lib/api/paths";
import { careerDetails } from "@/lib/data/careerDetails";
import { SRI_LANKAN_DISTRICTS } from "@/lib/data/pathEngine";

export function StudentPathDashboard() {
  const locale = useLocale();
  const isSi = locale === "si";

  const [paths, setPaths] = useState<CareerPathRecord[]>([]);
  const [activePathId, setActivePathId] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<AchievementRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>({});

  // ─── SEARCH, FILTER & SORT STATE (Rubric: Read / Search, Filter, Sort) ───
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PENDING" | "IN_PROGRESS" | "COMPLETED">("ALL");
  const [stageFilter, setStageFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"POSITION" | "DATE" | "DURATION" | "STATUS">("POSITION");

  // ─── CRUD MODALS STATE ───────────────────────────────────────────────────
  const [isAddMilestoneOpen, setIsAddMilestoneOpen] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState<MilestoneRecord | null>(null);
  const [isEditPathOpen, setIsEditPathOpen] = useState(false);
  const [deleteConfirmTarget, setDeleteConfirmTarget] = useState<{
    type: "PATH" | "MILESTONE" | "TASK";
    id: string;
    parentId?: string;
    title: string;
  } | null>(null);

  // Form states for Add Milestone
  const [newStageKey, setNewStageKey] = useState("STAGE_2_UNDERGRADUATE");
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newWhy, setNewWhy] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newTargetDate, setNewTargetDate] = useState("");
  const [newTaskInput, setNewTaskInput] = useState("");
  const [newTaskList, setNewTaskList] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states for Edit Path
  const [editPathTitle, setEditPathTitle] = useState("");
  const [editPathDistrict, setEditPathDistrict] = useState("");
  const [editPathNotes, setEditPathNotes] = useState("");

  // Quick inline add task inputs
  const [quickTaskInputs, setQuickTaskInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadData() {
      try {
        const [loadedPaths, loadedBadges] = await Promise.all([
          fetchUserPaths(),
          fetchUserAchievements(),
        ]);
        setPaths(loadedPaths);
        setAchievements(loadedBadges);

        if (loadedPaths.length > 0) {
          const active = loadedPaths.find((p) => p.isActive) || loadedPaths[0];
          setActivePathId(active.id);
          // Expand the first incomplete milestone by default
          const firstIncomplete = active.milestones.find((m) => m.status !== "COMPLETED");
          if (firstIncomplete) {
            setExpandedMilestones({ [firstIncomplete.id]: true });
          } else if (active.milestones[0]) {
            setExpandedMilestones({ [active.milestones[0].id]: true });
          }
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const activePath = paths.find((p) => p.id === activePathId) || paths[0];

  // ─── FILTERED & SORTED MILESTONES (Rubric: Search, Filter, Sort) ────────
  const filteredMilestones = useMemo(() => {
    if (!activePath) return [];
    let list = [...activePath.milestones];

    // 1. Text Search Filter (Title, Description, WhyItMatters, and Tasks)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((m) => {
        const matchTitle = m.title.toLowerCase().includes(q);
        const matchDesc = (m.description || "").toLowerCase().includes(q);
        const matchWhy = (m.whyItMatters || "").toLowerCase().includes(q);
        const matchTask = m.tasks.some((t) => t.title.toLowerCase().includes(q));
        return matchTitle || matchDesc || matchWhy || matchTask;
      });
    }

    // 2. Status Filter
    if (statusFilter !== "ALL") {
      list = list.filter((m) => m.status === statusFilter);
    }

    // 3. Stage Filter
    if (stageFilter !== "ALL") {
      list = list.filter((m) => m.stageKey === stageFilter);
    }

    // 4. Sorting
    if (sortBy === "DATE") {
      list.sort((a, b) => {
        if (!a.targetDate) return 1;
        if (!b.targetDate) return -1;
        return new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime();
      });
    } else if (sortBy === "DURATION") {
      list.sort((a, b) => (a.durationMonths || 999) - (b.durationMonths || 999));
    } else if (sortBy === "STATUS") {
      const statusWeight: Record<string, number> = { IN_PROGRESS: 0, PENDING: 1, COMPLETED: 2 };
      list.sort((a, b) => (statusWeight[a.status] ?? 3) - (statusWeight[b.status] ?? 3));
    } else {
      list.sort((a, b) => a.position - b.position);
    }

    return list;
  }, [activePath, searchQuery, statusFilter, stageFilter, sortBy]);

  // ─── TASK TOGGLE ─────────────────────────────────────────────────────────
  const handleToggleTask = async (milestoneId: string, taskId: string, currentCompleted: boolean) => {
    if (!activePath) return;

    // Optimistic UI update
    setPaths((prev) =>
      prev.map((p) => {
        if (p.id !== activePath.id) return p;
        const newMilestones = p.milestones.map((m) => {
          if (m.id !== milestoneId) return m;
          const newTasks = m.tasks.map((t) =>
            t.id === taskId ? { ...t, isCompleted: !currentCompleted } : t
          );
          const completedCount = newTasks.filter((t) => t.isCompleted).length;
          const status =
            completedCount === newTasks.length && newTasks.length > 0
              ? ("COMPLETED" as const)
              : completedCount > 0
              ? ("IN_PROGRESS" as const)
              : ("PENDING" as const);
          return { ...m, tasks: newTasks, status };
        });

        const allTasks = newMilestones.reduce((acc, m) => acc + m.tasks.length, 0);
        const doneTasks = newMilestones.reduce(
          (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
          0
        );
        const doneMilestones = newMilestones.filter((m) => m.status === "COMPLETED").length;

        return {
          ...p,
          milestones: newMilestones,
          totalTasks: allTasks,
          completedTasks: doneTasks,
          completedMilestones: doneMilestones,
          completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
        };
      })
    );

    // Call API / storage
    await toggleTaskCompletion(activePath.id, taskId, !currentCompleted);
  };

  // ─── INLINE ADD TASK ─────────────────────────────────────────────────────
  const handleQuickAddTask = async (milestoneId: string) => {
    const title = quickTaskInputs[milestoneId]?.trim();
    if (!title || !activePath) return;

    const newTask = await addTaskToMilestone(activePath.id, milestoneId, title);

    setPaths((prev) =>
      prev.map((p) => {
        if (p.id !== activePath.id) return p;
        const newMilestones = p.milestones.map((m) => {
          if (m.id !== milestoneId) return m;
          return { ...m, tasks: [...m.tasks, newTask] };
        });
        const allTasks = newMilestones.reduce((acc, m) => acc + m.tasks.length, 0);
        const doneTasks = newMilestones.reduce(
          (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
          0
        );
        return {
          ...p,
          milestones: newMilestones,
          totalTasks: allTasks,
          completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
        };
      })
    );

    setQuickTaskInputs((prev) => ({ ...prev, [milestoneId]: "" }));
  };

  // ─── CREATE: ADD CUSTOM MILESTONE (Rubric: Create with Form Validation) ──
  const handleAddMilestoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activePath) return;

    // Client-side Validation (Rubric: Validation & Error Handling)
    if (!newTitle.trim() || newTitle.trim().length < 3) {
      setFormError(isSi ? "කරුණාකර අවම වශයෙන් අකුරු 3ක මාතෘකාවක් ඇතුළත් කරන්න." : "Milestone title must be at least 3 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const added = await addCustomMilestone(activePath.id, {
        stageKey: newStageKey,
        title: newTitle.trim(),
        description: newDesc.trim() || undefined,
        whyItMatters: newWhy.trim() || undefined,
        durationMonths: newDuration ? parseInt(newDuration, 10) : undefined,
        targetDate: newTargetDate || undefined,
        tasks: newTaskList.length > 0 ? newTaskList : undefined,
      });

      setPaths((prev) =>
        prev.map((p) => {
          if (p.id !== activePath.id) return p;
          const updatedM = [...p.milestones, added];
          const allTasks = updatedM.reduce((acc, m) => acc + m.tasks.length, 0);
          const doneTasks = updatedM.reduce(
            (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
            0
          );
          return {
            ...p,
            milestones: updatedM,
            totalMilestones: updatedM.length,
            totalTasks: allTasks,
            completedTasks: doneTasks,
            completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
          };
        })
      );

      // Expand newly created milestone
      setExpandedMilestones((prev) => ({ ...prev, [added.id]: true }));
      setIsAddMilestoneOpen(false);
    } catch (err) {
      setFormError(isSi ? "Milestone එක එකතු කිරීමේදී දෝෂයක් සිදු විය." : "Failed to add milestone. Please check inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── UPDATE: EDIT MILESTONE (Rubric: Update Existing Records) ────────────
  const handleUpdateMilestoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activePath || !editingMilestone) return;

    if (!editingMilestone.title.trim() || editingMilestone.title.trim().length < 3) {
      setFormError(isSi ? "මාතෘකාව අවම වශයෙන් අකුරු 3ක් විය යුතුය." : "Milestone title must be at least 3 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const updated = await updateMilestone(activePath.id, editingMilestone.id, {
        title: editingMilestone.title.trim(),
        description: editingMilestone.description || "",
        whyItMatters: editingMilestone.whyItMatters || "",
        status: editingMilestone.status,
        targetDate: editingMilestone.targetDate || null,
        durationMonths: editingMilestone.durationMonths || null,
      });

      if (updated) {
        setPaths((prev) =>
          prev.map((p) => {
            if (p.id !== activePath.id) return p;
            const updatedM = p.milestones.map((m) => (m.id === updated.id ? { ...m, ...updated } : m));
            const allTasks = updatedM.reduce((acc, m) => acc + m.tasks.length, 0);
            const doneTasks = updatedM.reduce(
              (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
              0
            );
            const doneMilestones = updatedM.filter((m) => m.status === "COMPLETED").length;
            return {
              ...p,
              milestones: updatedM,
              completedMilestones: doneMilestones,
              totalTasks: allTasks,
              completedTasks: doneTasks,
              completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
            };
          })
        );
      }

      setEditingMilestone(null);
    } catch {
      setFormError(isSi ? "යාවත්කාලීන කිරීම අසාර්ථක විය." : "Update failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── UPDATE: EDIT PATH DETAILS ────────────────────────────────────────────
  const handleUpdatePathSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activePath) return;

    if (!editPathTitle.trim() || editPathTitle.trim().length < 3) {
      setFormError(isSi ? "Roadmap මාතෘකාව අවම වශයෙන් අකුරු 3ක් විය යුතුය." : "Title must be at least 3 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      await updateCareerPath(activePath.id, {
        title: editPathTitle.trim(),
        district: editPathDistrict || undefined,
        notes: editPathNotes.trim() || undefined,
      });

      setPaths((prev) =>
        prev.map((p) =>
          p.id === activePath.id
            ? { ...p, title: editPathTitle.trim(), district: editPathDistrict, notes: editPathNotes.trim() }
            : p
        )
      );

      setIsEditPathOpen(false);
    } catch {
      setFormError(isSi ? "යාවත්කාලීන කිරීම අසාර්ථක විය." : "Failed to update roadmap details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── DELETE: SAFE CONFIRMATION (Rubric: Safe Delete with Confirmation) ──
  const handleConfirmDelete = async () => {
    if (!deleteConfirmTarget || !activePath) return;

    const { type, id, parentId } = deleteConfirmTarget;

    if (type === "PATH") {
      await deleteCareerPath(id);
      const remaining = paths.filter((p) => p.id !== id);
      setPaths(remaining);
      if (remaining.length > 0) {
        setActivePathId(remaining[0].id);
      }
    } else if (type === "MILESTONE") {
      await deleteMilestone(activePath.id, id);
      setPaths((prev) =>
        prev.map((p) => {
          if (p.id !== activePath.id) return p;
          const remainingM = p.milestones.filter((m) => m.id !== id);
          const allTasks = remainingM.reduce((acc, m) => acc + m.tasks.length, 0);
          const doneTasks = remainingM.reduce(
            (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
            0
          );
          const doneMilestones = remainingM.filter((m) => m.status === "COMPLETED").length;
          return {
            ...p,
            milestones: remainingM,
            totalMilestones: remainingM.length,
            completedMilestones: doneMilestones,
            totalTasks: allTasks,
            completedTasks: doneTasks,
            completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
          };
        })
      );
    } else if (type === "TASK" && parentId) {
      await deleteTaskFromMilestone(activePath.id, parentId, id);
      setPaths((prev) =>
        prev.map((p) => {
          if (p.id !== activePath.id) return p;
          const newMilestones = p.milestones.map((m) => {
            if (m.id !== parentId) return m;
            return { ...m, tasks: m.tasks.filter((t) => t.id !== id) };
          });
          const allTasks = newMilestones.reduce((acc, m) => acc + m.tasks.length, 0);
          const doneTasks = newMilestones.reduce(
            (acc, m) => acc + m.tasks.filter((t) => t.isCompleted).length,
            0
          );
          return {
            ...p,
            milestones: newMilestones,
            totalTasks: allTasks,
            completedTasks: doneTasks,
            completionPercent: allTasks > 0 ? Math.round((doneTasks / allTasks) * 100) : 0,
          };
        })
      );
    }

    setDeleteConfirmTarget(null);
  };

  const toggleMilestoneExpand = (mId: string) => {
    setExpandedMilestones((prev) => ({ ...prev, [mId]: !prev[mId] }));
  };

  if (loading) {
    return (
      <div className="dashboard-loading-state glass-panel">
        <Sparkles className="spin-slow" size={28} />
        <p>{isSi ? "ඔයාගෙ Career Journey Dashboard එක load වෙනවා..." : "Loading your career journey dashboard..."}</p>
      </div>
    );
  }

  if (paths.length === 0) {
    return (
      <div className="dashboard-empty-state glass-panel">
        <div className="empty-icon-wrap">
          <Route size={36} />
        </div>
        <h2>{isSi ? "ඔයා තවම Career Path එකක් හදලා නෑ" : "You haven't built a career path yet"}</h2>
        <p>
          {isSi
            ? "ඔයා කැමති career එක තෝරන්න, O/L, A/L වල සිට university සහ charter දක්වා milestones ලකුණු කර ඔයාගෙ progress එක track කරන්න."
            : "Discover your ideal career, set milestones from O/L and A/L to university graduation, and track your progress with personalized guidance."}
        </p>
        <Link href="/build-your-path" className="builder-launch-btn gold-glass">
          <Sparkles size={18} />
          <span>{isSi ? "පළමු Career Path එක හදන්න" : "Build My First Career Path"}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const careerInfo = careerDetails[activePath.targetCareerSlug];

  return (
    <div className="dashboard-content-wrapper">
      {/* ──────────────────────────────────────────────────────────────────
          TOP BAR: SAVED PATHS SWITCHER & ACTIONS
      ────────────────────────────────────────────────────────────────── */}
      <div className="dashboard-header-bar glass-panel">
        <div className="path-switcher-col">
          <span className="switcher-label">
            {isSi ? "ක්‍රියාකාරී Roadmaps:" : "Active Career Path:"}
          </span>
          <div className="paths-tabs-row">
            {paths.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`path-tab-pill ${p.id === activePath.id ? "active-tab" : ""}`}
                onClick={() => setActivePathId(p.id)}
              >
                <span>{p.title}</span>
                <span className="tab-percent">{p.completionPercent}%</span>
              </button>
            ))}
            <Link href="/build-your-path" className="add-path-tab-btn" title="Create another career path">
              <Plus size={14} />
              <span>{isSi ? "අලුත් එකක්" : "New Path"}</span>
            </Link>
          </div>
        </div>

        <div className="path-delete-col">
          <button
            type="button"
            className="delete-path-btn"
            onClick={() =>
              setDeleteConfirmTarget({
                type: "PATH",
                id: activePath.id,
                title: activePath.title,
              })
            }
            title="Delete this entire roadmap"
          >
            <Trash2 size={15} />
            <span>{isSi ? "Roadmap එක අයින් කරන්න" : "Delete Path"}</span>
          </button>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          MAIN GRID: OVERVIEW, FILTERS, MILESTONES & SIDEBAR
      ────────────────────────────────────────────────────────────────── */}
      <div className="dashboard-main-grid">
        {/* Left Column: Milestones & Interactive Task Checklists */}
        <div className="dashboard-timeline-col">
          {/* Active Milestone Card Highlight */}
          <div className="roadmap-progress-summary glass-panel">
            <div className="progress-summary-top">
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="summary-stage-tag">{activePath.educationStage.toUpperCase()}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                  <h2 className="summary-career-title" style={{ margin: 0 }}>{activePath.title}</h2>
                  <button
                    type="button"
                    className="milestone-action-btn"
                    title={isSi ? "Roadmap විස්තර වෙනස් කරන්න" : "Edit Roadmap Details"}
                    onClick={() => {
                      setEditPathTitle(activePath.title);
                      setEditPathDistrict(activePath.district || "");
                      setEditPathNotes(activePath.notes || "");
                      setFormError("");
                      setIsEditPathOpen(true);
                    }}
                  >
                    <Edit3 size={15} />
                  </button>
                </div>
                <p className="summary-career-sub">
                  {isSi ? "ඉලක්කගත වෘත්තිය:" : "Target Profession:"}{" "}
                  <strong>
                    {careerInfo ? (isSi ? `${careerInfo.title} (${careerInfo.sinhalaTitle})` : careerInfo.title) : activePath.targetCareerSlug}
                  </strong>
                  {activePath.district && <span> • {activePath.district} {isSi ? "දිස්ත්‍රික්කය" : "District"}</span>}
                </p>
                {activePath.notes && (
                  <p style={{ fontSize: "12px", color: "#475569", marginTop: "4px", fontStyle: "italic" }}>
                    📝 {activePath.notes}
                  </p>
                )}
              </div>

              <div className="progress-gauge-wrap">
                <div className="gauge-number">{activePath.completionPercent}%</div>
                <span className="gauge-label">{isSi ? "සම්පූර්ණයි" : "Roadmap Complete"}</span>
              </div>
            </div>

            <div className="summary-progress-bar-wrap">
              <div
                className="summary-progress-bar-fill"
                style={{ width: `${activePath.completionPercent}%` }}
              />
            </div>

            <div className="summary-stats-footer">
              <span>
                <strong>{activePath.completedMilestones}</strong> of {activePath.totalMilestones}{" "}
                {isSi ? "Milestones සම්පූර්ණයි" : "Milestones Completed"}
              </span>
              <span>
                <strong>{activePath.completedTasks}</strong> of {activePath.totalTasks}{" "}
                {isSi ? "Tasks සම්පූර්ණයි" : "Tasks Checked"}
              </span>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────────
              SEARCH, FILTER & SORT BAR (Rubric: Read / Search, Filter, Sort)
          ────────────────────────────────────────────────────────────── */}
          <div className="dashboard-filter-bar glass-panel">
            {/* Search Input */}
            <div className="dashboard-search-wrap">
              <Search size={16} style={{ color: "#64748b", flexShrink: 0 }} />
              <input
                type="text"
                placeholder={isSi ? "Milestone හෝ task නමක් search කරන්න..." : "Search milestones, tasks, or resources..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dashboard-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter and Sort Controls Group */}
            <div className="dashboard-filters-group">
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="dashboard-select-input"
                title="Filter by completion status"
              >
                <option value="ALL">{isSi ? "සියලු Statuses" : "All Statuses"}</option>
                <option value="IN_PROGRESS">{isSi ? "සිදුවෙමින් පවතින (In Progress)" : "In Progress"}</option>
                <option value="PENDING">{isSi ? "ඉදිරියට ඇති (Pending)" : "Pending"}</option>
                <option value="COMPLETED">{isSi ? "සම්පූර්ණ කළ (Completed)" : "Completed"}</option>
              </select>

              {/* Stage Filter */}
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="dashboard-select-input"
                title="Filter by stage"
              >
                <option value="ALL">{isSi ? "සියලු අදියර (All Stages)" : "All Stages"}</option>
                <option value="STAGE_1_FOUNDATION">{isSi ? "O/L & A/L පදනම" : "Stage 1: Foundation"}</option>
                <option value="STAGE_2_UNDERGRADUATE">{isSi ? "උපාධිය / Higher Studies" : "Stage 2: Degree"}</option>
                <option value="STAGE_3_LICENSURE">{isSi ? "වෘත්තීය Charter" : "Stage 3: Charter / License"}</option>
                <option value="STAGE_4_CAREER">{isSi ? "වෘත්තීය රැකියාව" : "Stage 4: Career"}</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="dashboard-select-input"
                title="Sort order"
              >
                <option value="POSITION">{isSi ? "පිළිවෙල (Stage Order)" : "Sort: Stage Order"}</option>
                <option value="DATE">{isSi ? "දිනය අනුව (Target Date)" : "Sort: Target Date"}</option>
                <option value="DURATION">{isSi ? "කාල සීමාව (Duration)" : "Sort: Duration"}</option>
                <option value="STATUS">{isSi ? "Status අනුව" : "Sort: Status"}</option>
              </select>

              {/* Create Button (Rubric: Create Records through Forms) */}
              <button
                type="button"
                className="dashboard-add-milestone-btn"
                onClick={() => {
                  setNewTitle("");
                  setNewDesc("");
                  setNewWhy("");
                  setNewDuration("");
                  setNewTargetDate("");
                  setNewTaskList([]);
                  setFormError("");
                  setIsAddMilestoneOpen(true);
                }}
              >
                <Plus size={15} />
                <span>{isSi ? "නව Milestone එකක්" : "+ Add Milestone"}</span>
              </button>
            </div>
          </div>

          {/* Results Count & Reset Filter notice */}
          {(searchQuery || statusFilter !== "ALL" || stageFilter !== "ALL") && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#64748b", padding: "0 4px" }}>
              <span>
                {isSi ? "ප්‍රතිඵල:" : "Showing:"}{" "}
                <strong>{filteredMilestones.length}</strong> of {activePath.milestones.length} milestones
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("ALL");
                  setStageFilter("ALL");
                  setSortBy("POSITION");
                }}
                style={{ background: "none", border: "none", color: "#2e7559", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
              >
                {isSi ? "Filters Reset කරන්න" : "Clear Filters"}
              </button>
            </div>
          )}

          {/* Connected Milestones List */}
          <div className="milestones-interactive-list">
            {filteredMilestones.length === 0 ? (
              <div className="glass-panel" style={{ padding: "32px", textAlign: "center", borderRadius: "18px" }}>
                <p style={{ color: "#64748b", margin: 0 }}>
                  {isSi
                    ? "ඔබ සෙවූ නිර්ණායක වලට අදාළ Milestones හමු නොවිණි."
                    : "No milestones match your search and filter criteria."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setStatusFilter("ALL");
                    setStageFilter("ALL");
                  }}
                  className="crud-cancel-btn"
                  style={{ marginTop: "12px", display: "inline-block" }}
                >
                  {isSi ? "සියලු Milestones පෙන්වන්න" : "Show All Milestones"}
                </button>
              </div>
            ) : (
              filteredMilestones.map((m, mIdx) => {
                const isExpanded = expandedMilestones[m.id] ?? true;
                const isDone = m.status === "COMPLETED";
                const inProgress = m.status === "IN_PROGRESS";

                return (
                  <article
                    key={m.id}
                    className={`milestone-interactive-card glass-panel ${isDone ? "is-done" : inProgress ? "is-in-progress" : ""}`}
                  >
                    <div
                      className="milestone-interactive-header"
                      onClick={() => toggleMilestoneExpand(m.id)}
                    >
                      <div className="milestone-status-indicator">
                        {isDone ? (
                          <CheckCircle2 size={24} className="status-icon done" />
                        ) : inProgress ? (
                          <div className="status-pulse-circle">
                            <span>{mIdx + 1}</span>
                          </div>
                        ) : (
                          <Circle size={22} className="status-icon pending" />
                        )}
                      </div>

                      <div className="milestone-title-content">
                        <div className="milestone-title-row">
                          <h3>{m.title}</h3>
                          <span className={`status-pill ${m.status.toLowerCase()}`}>
                            {isSi
                              ? (m.status === "COMPLETED"
                                  ? "සම්පූර්ණයි"
                                  : m.status === "IN_PROGRESS"
                                  ? "සිදුවෙමින් පවතී"
                                  : "ඉදිරියට")
                              : m.status.replace(/_/g, " ")}
                          </span>
                        </div>
                        <p className="milestone-subtitle">
                          {isSi
                            ? `පියවර ${mIdx + 1} • ${m.durationMonths ? `මාස ~${m.durationMonths}` : "අඛණ්ඩව"}`
                            : `Stage ${mIdx + 1} • ${m.durationMonths ? `~${m.durationMonths} Months` : "Ongoing"}`}
                          {m.targetDate && <span> • 🎯 {m.targetDate}</span>}
                        </p>
                      </div>

                      {/* Milestone Actions (Edit, Delete, Expand) */}
                      <div className="milestone-header-actions" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="milestone-action-btn"
                          title={isSi ? "Milestone එක සංස්කරණය කරන්න (Edit)" : "Edit Milestone"}
                          onClick={() => {
                            setEditingMilestone({ ...m });
                            setFormError("");
                          }}
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          type="button"
                          className="milestone-action-btn delete-btn"
                          title={isSi ? "Milestone එක ඉවත් කරන්න (Delete)" : "Delete Milestone"}
                          onClick={() => {
                            setDeleteConfirmTarget({
                              type: "MILESTONE",
                              id: m.id,
                              title: m.title,
                            });
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                        <button
                          type="button"
                          className="expand-toggle-btn"
                          onClick={() => toggleMilestoneExpand(m.id)}
                          aria-label={isExpanded ? (isSi ? "හකුලන්න" : "Collapse") : (isSi ? "විහිදුවන්න" : "Expand")}
                        >
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="milestone-interactive-body">
                        {m.description && <p className="m-body-desc">{m.description}</p>}

                        {m.whyItMatters && (
                          <div className="m-why-callout">
                            <strong>{isSi ? "මෙය වැදගත් වන්නේ ඇයි:" : "Why this matters:"}</strong> {m.whyItMatters}
                          </div>
                        )}

                        {/* Interactive Task Checklist */}
                        <div className="m-tasks-checklist-wrap">
                          <span className="checklist-subhead">
                            {isSi ? "කළ යුතු දෑ ලැයිස්තුව (Actionable Checklist):" : "Actionable Checklist:"}
                          </span>
                          <ul className="m-tasks-ul">
                            {m.tasks.map((task) => (
                              <li
                                key={task.id}
                                className={`m-task-row ${task.isCompleted ? "task-done" : ""}`}
                              >
                                <label className="m-task-label">
                                  <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() =>
                                      handleToggleTask(m.id, task.id, task.isCompleted)
                                    }
                                    className="m-task-checkbox"
                                  />
                                  <span className="m-task-text">{task.title}</span>
                                </label>

                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                  {task.resourceUrl && (
                                    <Link
                                      href={task.resourceUrl}
                                      className="task-jump-link"
                                      target={task.resourceUrl.startsWith("http") ? "_blank" : undefined}
                                    >
                                      <span>{isSi ? "Guide බලන්න" : "Guide"}</span>
                                      <ExternalLink size={12} />
                                    </Link>
                                  )}
                                  <button
                                    type="button"
                                    className="task-delete-btn"
                                    title={isSi ? "Task එක ඉවත් කරන්න" : "Delete task"}
                                    onClick={() => {
                                      setDeleteConfirmTarget({
                                        type: "TASK",
                                        id: task.id,
                                        parentId: m.id,
                                        title: task.title,
                                      });
                                    }}
                                  >
                                    <X size={13} />
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>

                          {/* Quick Add Task Inline Row */}
                          <div className="task-quick-add-row">
                            <input
                              type="text"
                              placeholder={isSi ? "මෙම milestone එකට අලුත් task එකක් එකතු කරන්න..." : "Add a custom task to this milestone..."}
                              value={quickTaskInputs[m.id] || ""}
                              onChange={(e) =>
                                setQuickTaskInputs({ ...quickTaskInputs, [m.id]: e.target.value })
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleQuickAddTask(m.id);
                                }
                              }}
                              className="task-quick-input"
                            />
                            <button
                              type="button"
                              className="task-quick-btn"
                              onClick={() => handleQuickAddTask(m.id)}
                            >
                              {isSi ? "+ එකතු කරන්න" : "+ Add"}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Achievements, Connected Career, & University Options */}
        <aside className="dashboard-side-col">
          {/* Target Career Snapshot Card */}
          {careerInfo && (
            <div className="side-widget-card glass-panel">
              <div className="side-widget-header">
                <Compass size={18} />
                <h4>{isSi ? "ඉලක්කගත Career Guide එක" : "Target Career Guide"}</h4>
              </div>
              <p className="widget-career-title">{careerInfo.title}</p>
              {careerInfo.sinhalaTitle && <p className="widget-career-sinhala">{careerInfo.sinhalaTitle}</p>}
              <p className="widget-career-desc">{careerInfo.tagline}</p>

              <div className="widget-salary-row">
                <span className="salary-label">{isSi ? "සාමාන්‍ය වැටුප (Mid-Level):" : "Estimated Mid-Level:"}</span>
                <strong>{careerInfo.salary.midLevel.label}</strong>
              </div>

              <Link
                href={`/careers/${careerInfo.slug}`}
                className="view-career-btn gold-glass"
              >
                <span>{isSi ? "සම්පූර්ණ Guide එක කියවන්න" : "Read Full 10-Pillar Guide"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}

          {/* Student Achievements & Milestone Badges */}
          <div className="side-widget-card glass-panel">
            <div className="side-widget-header">
              <Trophy size={18} className="trophy-icon" />
              <h4>{isSi ? "ලබාගත් Achievements & Badges" : "Achievements & Badges"}</h4>
            </div>

            <div className="achievements-badges-grid">
              <div className="badge-item unlocked">
                <div className="badge-icon-wrap">🌟</div>
                <div className="badge-details">
                  <strong>{isSi ? "මඟපෙන්වුම්කරු" : "Visionary Pathfinder"}</strong>
                  <small>{isSi ? "ඔයාගෙ roadmap එක සෑදුවා" : "Created your personalized roadmap"}</small>
                </div>
              </div>

              <div className={`badge-item ${activePath.completionPercent >= 25 ? "unlocked" : "locked"}`}>
                <div className="badge-icon-wrap">🎯</div>
                <div className="badge-details">
                  <strong>{isSi ? "25% සම්පූර්ණයි" : "25% Milestone"}</strong>
                  <small>{activePath.completionPercent >= 25 ? (isSi ? "ජයගත්තා!" : "Unlocked!") : (isSi ? "Tasks වලින් 25%ක් සම්පූර්ණ කරන්න" : "Complete 25% of tasks")}</small>
                </div>
              </div>

              <div className={`badge-item ${activePath.completionPercent >= 50 ? "unlocked" : "locked"}`}>
                <div className="badge-icon-wrap">🚀</div>
                <div className="badge-details">
                  <strong>{isSi ? "අඩක් ජයගත් වීරයා" : "Halfway Hero"}</strong>
                  <small>{activePath.completionPercent >= 50 ? (isSi ? "ජයගත්තා!" : "Unlocked!") : (isSi ? "Tasks වලින් 50%ක් සම්පූර්ණ කරන්න" : "Complete 50% of tasks")}</small>
                </div>
              </div>

              <div className={`badge-item ${activePath.completionPercent === 100 ? "unlocked" : "locked"}`}>
                <div className="badge-icon-wrap">👑</div>
                <div className="badge-details">
                  <strong>{isSi ? "වෘත්තීය ජයග්‍රාහකයා" : "Career Trailblazer"}</strong>
                  <small>{activePath.completionPercent === 100 ? (isSi ? "ජයගත්තා!" : "Unlocked!") : (isSi ? "100% සම්පූර්ණ කර ජයගන්න" : "Achieve 100% completion")}</small>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Universities Connected to Path */}
          {careerInfo && careerInfo.universities.length > 0 && (
            <div className="side-widget-card glass-panel">
              <div className="side-widget-header">
                <GraduationCap size={18} />
                <h4>{isSi ? "නිර්දේශිත Universities" : "Recommended Universities"}</h4>
              </div>

              <ul className="side-unis-list">
                {careerInfo.universities.slice(0, 3).map((uni, idx) => (
                  <li key={idx} className="side-uni-item">
                    <div>
                      <strong>{uni.name}</strong>
                      <p>{uni.degreeName}</p>
                    </div>
                    {uni.slug && (
                      <Link href={`/universities/${uni.slug}`} className="side-uni-arrow">
                        <ArrowRight size={13} />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <Link href="/universities" className="side-all-unis-link">
                {isSi ? "සියලු Universities බලන්න →" : "Explore all universities →"}
              </Link>
            </div>
          )}
        </aside>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          MODAL 1: ADD CUSTOM MILESTONE (Rubric: Create with Validation)
      ────────────────────────────────────────────────────────────────── */}
      {isAddMilestoneOpen && (
        <div className="crud-modal-overlay" onClick={() => setIsAddMilestoneOpen(false)}>
          <div className="crud-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="crud-modal-header">
              <h3 className="crud-modal-title">
                {isSi ? "නව Milestone එකක් එක් කරන්න" : "Add Custom Milestone"}
              </h3>
              <button
                type="button"
                className="crud-modal-close"
                onClick={() => setIsAddMilestoneOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddMilestoneSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {formError && (
                <div style={{ padding: "8px 12px", borderRadius: "8px", background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)" }}>
                  <span className="crud-form-error">{formError}</span>
                </div>
              )}

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "අධ්‍යාපන අදියර (Stage):" : "Roadmap Stage:"}</label>
                <select
                  value={newStageKey}
                  onChange={(e) => setNewStageKey(e.target.value)}
                  className="crud-form-select"
                >
                  <option value="STAGE_1_FOUNDATION">{isSi ? "1 වන පියවර: O/L සහ A/L පදනම" : "Stage 1: Foundation (O/L & A/L)"}</option>
                  <option value="STAGE_2_UNDERGRADUATE">{isSi ? "2 වන පියවර: උපාධිය / Higher Studies" : "Stage 2: Degree / Higher Studies"}</option>
                  <option value="STAGE_3_LICENSURE">{isSi ? "3 වන පියවර: වෘත්තීය බලපත්‍ර / Charter" : "Stage 3: Professional Charter"}</option>
                  <option value="STAGE_4_CAREER">{isSi ? "4 වන පියවර: රැකියාව සහ කර්මාන්තය" : "Stage 4: Career & Industry"}</option>
                </select>
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "Milestone මාතෘකාව (අනිවාර්යයි):" : "Milestone Title (Required):"}</label>
                <input
                  type="text"
                  placeholder={isSi ? "උදා: complete AWS Certified Solutions Architect" : "e.g. Complete AWS Certified Solutions Architect"}
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                    if (formError) setFormError("");
                  }}
                  className="crud-form-input"
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div className="crud-form-group">
                  <label className="crud-form-label">{isSi ? "කාල සීමාව (මාස):" : "Duration (Months):"}</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    placeholder="e.g. 6"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="crud-form-input"
                  />
                </div>

                <div className="crud-form-group">
                  <label className="crud-form-label">{isSi ? "ඉලක්කගත දිනය:" : "Target Date:"}</label>
                  <input
                    type="date"
                    value={newTargetDate}
                    onChange={(e) => setNewTargetDate(e.target.value)}
                    className="crud-form-input"
                  />
                </div>
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "විස්තරය (Description):" : "Description:"}</label>
                <textarea
                  rows={2}
                  placeholder={isSi ? "මෙම පියවරේදී කළ යුතු දෑ විස්තර කරන්න..." : "Describe what you will accomplish in this stage..."}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="crud-form-textarea"
                />
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "මෙය වැදගත් වන්නේ ඇයි (Why it matters):" : "Why It Matters:"}</label>
                <textarea
                  rows={2}
                  placeholder={isSi ? "ඔබේ වෘත්තියට මෙම සුදුසුකම දායක වන්නේ කෙසේද..." : "Explain how this step accelerates your career..."}
                  value={newWhy}
                  onChange={(e) => setNewWhy(e.target.value)}
                  className="crud-form-textarea"
                />
              </div>

              {/* Checklist Task Builder */}
              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "ක්‍රියාකාරී Tasks එකතු කරන්න:" : "Add Initial Checklist Tasks:"}</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    placeholder={isSi ? "Task එකක් ලියන්න..." : "Type a task title..."}
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (newTaskInput.trim()) {
                          setNewTaskList([...newTaskList, newTaskInput.trim()]);
                          setNewTaskInput("");
                        }
                      }
                    }}
                    className="crud-form-input"
                  />
                  <button
                    type="button"
                    className="task-quick-btn"
                    onClick={() => {
                      if (newTaskInput.trim()) {
                        setNewTaskList([...newTaskList, newTaskInput.trim()]);
                        setNewTaskInput("");
                      }
                    }}
                  >
                    {isSi ? "+ එක් කරන්න" : "+ Add"}
                  </button>
                </div>

                {newTaskList.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 0", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {newTaskList.map((item, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", background: "rgba(255, 255, 255, 0.8)", padding: "4px 8px", borderRadius: "6px", border: "1px solid rgba(215, 200, 159, 0.5)" }}>
                        <span>• {item}</span>
                        <button
                          type="button"
                          onClick={() => setNewTaskList(newTaskList.filter((_, i) => i !== idx))}
                          style={{ background: "none", border: "none", color: "#dc2626", cursor: "pointer" }}
                        >
                          <X size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="crud-modal-footer">
                <button
                  type="button"
                  className="crud-cancel-btn"
                  onClick={() => setIsAddMilestoneOpen(false)}
                >
                  {isSi ? "අවලංගු කරන්න" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="crud-submit-btn"
                >
                  {isSubmitting ? (isSi ? "සුරකිමින්..." : "Saving...") : (isSi ? "Milestone එක සුරකින්න" : "Save Milestone")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────
          MODAL 2: EDIT MILESTONE (Rubric: Update Existing Records)
      ────────────────────────────────────────────────────────────────── */}
      {editingMilestone && (
        <div className="crud-modal-overlay" onClick={() => setEditingMilestone(null)}>
          <div className="crud-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="crud-modal-header">
              <h3 className="crud-modal-title">
                {isSi ? "Milestone එක සංස්කරණය කරන්න" : "Edit Milestone"}
              </h3>
              <button
                type="button"
                className="crud-modal-close"
                onClick={() => setEditingMilestone(null)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUpdateMilestoneSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {formError && (
                <div style={{ padding: "8px 12px", borderRadius: "8px", background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)" }}>
                  <span className="crud-form-error">{formError}</span>
                </div>
              )}

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "Milestone මාතෘකාව:" : "Milestone Title:"}</label>
                <input
                  type="text"
                  value={editingMilestone.title}
                  onChange={(e) =>
                    setEditingMilestone({ ...editingMilestone, title: e.target.value })
                  }
                  className="crud-form-input"
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div className="crud-form-group">
                  <label className="crud-form-label">{isSi ? "තත්ත්වය (Status):" : "Status:"}</label>
                  <select
                    value={editingMilestone.status}
                    onChange={(e) =>
                      setEditingMilestone({ ...editingMilestone, status: e.target.value as any })
                    }
                    className="crud-form-select"
                  >
                    <option value="PENDING">{isSi ? "ඉදිරියට (Pending)" : "Pending"}</option>
                    <option value="IN_PROGRESS">{isSi ? "සිදුවෙමින් පවතී (In Progress)" : "In Progress"}</option>
                    <option value="COMPLETED">{isSi ? "සම්පූර්ණයි (Completed)" : "Completed"}</option>
                  </select>
                </div>

                <div className="crud-form-group">
                  <label className="crud-form-label">{isSi ? "කාල සීමාව (මාස):" : "Duration (Months):"}</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={editingMilestone.durationMonths || ""}
                    onChange={(e) =>
                      setEditingMilestone({
                        ...editingMilestone,
                        durationMonths: e.target.value ? parseInt(e.target.value, 10) : null,
                      })
                    }
                    className="crud-form-input"
                  />
                </div>
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "ඉලක්කගත දිනය:" : "Target Date:"}</label>
                <input
                  type="date"
                  value={editingMilestone.targetDate || ""}
                  onChange={(e) =>
                    setEditingMilestone({
                      ...editingMilestone,
                      targetDate: e.target.value || null,
                    })
                  }
                  className="crud-form-input"
                />
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "විස්තරය (Description):" : "Description:"}</label>
                <textarea
                  rows={2}
                  value={editingMilestone.description || ""}
                  onChange={(e) =>
                    setEditingMilestone({ ...editingMilestone, description: e.target.value })
                  }
                  className="crud-form-textarea"
                />
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "මෙය වැදගත් වන්නේ ඇයි (Why it matters):" : "Why It Matters:"}</label>
                <textarea
                  rows={2}
                  value={editingMilestone.whyItMatters || ""}
                  onChange={(e) =>
                    setEditingMilestone({ ...editingMilestone, whyItMatters: e.target.value })
                  }
                  className="crud-form-textarea"
                />
              </div>

              <div className="crud-modal-footer">
                <button
                  type="button"
                  className="crud-cancel-btn"
                  onClick={() => setEditingMilestone(null)}
                >
                  {isSi ? "අවලංගු කරන්න" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="crud-submit-btn"
                >
                  {isSubmitting ? (isSi ? "යාවත්කාලීන වෙමින්..." : "Updating...") : (isSi ? "වෙනස්කම් සුරකින්න" : "Save Changes")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────
          MODAL 3: EDIT PATH DETAILS (Rubric: Update Parent Record)
      ────────────────────────────────────────────────────────────────── */}
      {isEditPathOpen && (
        <div className="crud-modal-overlay" onClick={() => setIsEditPathOpen(false)}>
          <div className="crud-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="crud-modal-header">
              <h3 className="crud-modal-title">
                {isSi ? "Roadmap විස්තර සංස්කරණය කරන්න" : "Edit Career Roadmap Details"}
              </h3>
              <button
                type="button"
                className="crud-modal-close"
                onClick={() => setIsEditPathOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUpdatePathSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {formError && (
                <div style={{ padding: "8px 12px", borderRadius: "8px", background: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)" }}>
                  <span className="crud-form-error">{formError}</span>
                </div>
              )}

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "Roadmap මාතෘකාව (Title):" : "Roadmap Title:"}</label>
                <input
                  type="text"
                  value={editPathTitle}
                  onChange={(e) => setEditPathTitle(e.target.value)}
                  className="crud-form-input"
                  required
                />
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "දිස්ත්‍රික්කය (District Quota):" : "Administrative District:"}</label>
                <select
                  value={editPathDistrict}
                  onChange={(e) => setEditPathDistrict(e.target.value)}
                  className="crud-form-select"
                >
                  <option value="">{isSi ? "-- දිස්ත්‍රික්කය තෝරන්න --" : "-- Select District --"}</option>
                  {SRI_LANKAN_DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d} District
                    </option>
                  ))}
                </select>
              </div>

              <div className="crud-form-group">
                <label className="crud-form-label">{isSi ? "පුද්ගලික සටහන් සහ ඉලක්ක (Notes):" : "Personal Notes & Goals:"}</label>
                <textarea
                  rows={3}
                  value={editPathNotes}
                  onChange={(e) => setEditPathNotes(e.target.value)}
                  placeholder={isSi ? "ඔබේ විශේෂ ඉලක්ක, අයවැය හෝ සටහන් මෙහි ලියන්න..." : "Write your personal target Z-score, target universities, or study schedule notes..."}
                  className="crud-form-textarea"
                />
              </div>

              <div className="crud-modal-footer">
                <button
                  type="button"
                  className="crud-cancel-btn"
                  onClick={() => setIsEditPathOpen(false)}
                >
                  {isSi ? "අවලංගු කරන්න" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="crud-submit-btn"
                >
                  {isSubmitting ? (isSi ? "සුරකිමින්..." : "Saving...") : (isSi ? "වෙනස්කම් සුරකින්න" : "Save Changes")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────────
          MODAL 4: SAFE DELETE CONFIRMATION (Rubric: Safe Delete with Confirmation)
      ────────────────────────────────────────────────────────────────── */}
      {deleteConfirmTarget && (
        <div className="crud-modal-overlay" onClick={() => setDeleteConfirmTarget(null)}>
          <div className="crud-modal-card" style={{ maxWidth: "440px" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#dc2626" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(220, 38, 38, 0.12)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#1a2a1d" }}>
                  {isSi ? "ඉවත් කිරීම තහවුරු කරන්න" : "Confirm Safe Deletion"}
                </h3>
                <span style={{ fontSize: "12px", color: "#64748b" }}>
                  {deleteConfirmTarget.type === "PATH"
                    ? (isSi ? "Career Roadmap එක ඉවත් කිරීම" : "Deleting Entire Career Roadmap")
                    : deleteConfirmTarget.type === "MILESTONE"
                    ? (isSi ? "Milestone එක ඉවත් කිරීම" : "Deleting Milestone Record")
                    : (isSi ? "Task එක ඉවත් කිරීම" : "Deleting Task")}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "13.5px", color: "#334155", margin: "8px 0" }}>
              {isSi
                ? `ඔබට "${deleteConfirmTarget.title}" ස්ථිරවම ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්නද? මෙම ක්‍රියාව ආපසු හැරවිය නොහැක.`
                : `Are you sure you want to permanently delete "${deleteConfirmTarget.title}"? This action cannot be undone.`}
            </p>

            <div className="crud-modal-footer">
              <button
                type="button"
                className="crud-cancel-btn"
                onClick={() => setDeleteConfirmTarget(null)}
              >
                {isSi ? "අවලංගු කරන්න" : "Cancel"}
              </button>
              <button
                type="button"
                className="crud-delete-confirm-btn"
                onClick={handleConfirmDelete}
              >
                {isSi ? "ඔව්, ඉවත් කරන්න" : "Yes, Delete Record"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
