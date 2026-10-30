"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import {
  fetchUserPaths,
  toggleTaskCompletion,
  deleteCareerPath,
  fetchUserAchievements,
  type CareerPathRecord,
  type AchievementRecord,
} from "@/lib/api/paths";
import { careerDetails } from "@/lib/data/careerDetails";

export function StudentPathDashboard() {
  const locale = useLocale();
  const isSi = locale === "si";

  const [paths, setPaths] = useState<CareerPathRecord[]>([]);
  const [activePathId, setActivePathId] = useState<string | null>(null);
  const [achievements, setAchievements] = useState<AchievementRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>({});

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

  const handleDeletePath = async (id: string) => {
    if (!confirm(isSi ? "මෙම career roadmap එක ඉවත් කිරීමට ඔබට විශ්වාසද?" : "Are you sure you want to remove this career roadmap?")) return;
    await deleteCareerPath(id);
    const remaining = paths.filter((p) => p.id !== id);
    setPaths(remaining);
    if (remaining.length > 0) {
      setActivePathId(remaining[0].id);
    }
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
      {/* Top Bar: Saved Paths Switcher & Progress */}
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
            onClick={() => handleDeletePath(activePath.id)}
            title="Delete this roadmap"
          >
            <Trash2 size={15} />
            <span>{isSi ? "අයින් කරන්න" : "Delete Path"}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Overview & Timeline */}
      <div className="dashboard-main-grid">
        {/* Left Column: Milestones & Interactive Task Checklists */}
        <div className="dashboard-timeline-col">
          {/* Active Milestone Card Highlight */}
          <div className="roadmap-progress-summary glass-panel">
            <div className="progress-summary-top">
              <div>
                <span className="summary-stage-tag">{activePath.educationStage.toUpperCase()}</span>
                <h2 className="summary-career-title">{activePath.title}</h2>
                <p className="summary-career-sub">
                  {isSi ? "ඉලක්කගත වෘත්තිය:" : "Target Profession:"}{" "}
                  <strong>
                    {careerInfo ? (isSi ? `${careerInfo.title} (${careerInfo.sinhalaTitle})` : careerInfo.title) : activePath.targetCareerSlug}
                  </strong>
                  {activePath.district && <span> • {activePath.district} {isSi ? "දිස්ත්‍රික්කය" : "District"}</span>}
                </p>
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

          {/* Connected Milestones List */}
          <div className="milestones-interactive-list">
            {activePath.milestones.map((m, mIdx) => {
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
                      </p>
                    </div>

                    <button
                      type="button"
                      className="expand-toggle-btn"
                      aria-label={isExpanded ? (isSi ? "හකුලන්න" : "Collapse") : (isSi ? "විහිදුවන්න" : "Expand")}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
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
                          {isSi ? "කළ යුතු දෑ ලැයිස්තුව (Checklist):" : "Actionable Checklist:"}
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

                              {task.resourceUrl && (
                                <Link
                                  href={task.resourceUrl}
                                  className="task-jump-link"
                                  target={task.resourceUrl.startsWith("http") ? "_blank" : undefined}
                                >
                                  <span>{isSi ? "Guide එක බලන්න" : "View Guide"}</span>
                                  <ExternalLink size={12} />
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
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
    </div>
  );
}

