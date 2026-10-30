"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Route, ArrowRight, CheckCircle2, Sparkles, Compass, Flame } from "lucide-react";
import { fetchUserPaths, type CareerPathRecord } from "@/lib/api/paths";
import { careerDetails } from "@/lib/data/careerDetails";

export function PersonalPathBanner() {
  const locale = useLocale();
  const isSi = locale === "si";
  const [activePath, setActivePath] = useState<CareerPathRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPath() {
      try {
        const paths = await fetchUserPaths();
        if (paths.length > 0) {
          const active = paths.find((p) => p.isActive) || paths[0];
          setActivePath(active);
        }
      } catch {
        // Fallback gracefully
      } finally {
        setLoading(false);
      }
    }
    loadPath();
  }, []);

  if (loading) {
    return (
      <div className="personal-path-card glass-panel skeleton-panel" style={{ minHeight: "160px" }}>
        <div className="skeleton skeleton-line" style={{ width: "40%" }} />
        <div className="skeleton skeleton-line" style={{ width: "70%" }} />
      </div>
    );
  }

  if (activePath) {
    const careerInfo = careerDetails[activePath.targetCareerSlug];
    const displayTitle = isSi && careerInfo?.sinhalaTitle ? careerInfo.sinhalaTitle : careerInfo?.title || activePath.title;
    const subtitle = isSi ? careerInfo?.title : careerInfo?.sinhalaTitle;

    return (
      <div className="personal-path-card active-path glass-panel">
        <div className="path-card-badge-row">
          <span className="path-status-pill">
            <span className="status-dot-pulse" />
            {isSi ? "ක්‍රියාකාරී වෘත්තීය මාර්ග සැලසුම" : "Active Career Roadmap"}
          </span>
          <span className="path-progress-percent">
            {activePath.completionPercent}% {isSi ? "සම්පූර්ණයි" : "Completed"}
          </span>
        </div>

        <div className="path-card-main">
          <div className="path-career-info">
            <div className="path-icon-bubble tone-forest">
              <Route size={24} />
            </div>
            <div>
              <h3 className="path-career-title">{displayTitle}</h3>
              {subtitle && <p className="path-career-sinhala">{subtitle}</p>}
              <div className="path-stats-row">
                <span className="path-stat-chip">
                  <CheckCircle2 size={13} className="chip-icon" />
                  {isSi
                    ? `Milestones ${activePath.totalMilestones}න් ${activePath.completedMilestones}ක් සාර්ථකයි`
                    : `${activePath.completedMilestones} of ${activePath.totalMilestones} Milestones`}
                </span>
                <span className="path-stat-chip">
                  <Flame size={13} className="chip-icon" />
                  {isSi
                    ? `කාර්යයන් ${activePath.totalTasks}න් ${activePath.completedTasks}ක් නිමයි`
                    : `${activePath.completedTasks} of ${activePath.totalTasks} Tasks Done`}
                </span>
              </div>
            </div>
          </div>

          <div className="path-actions-col">
            <Link href="/my-path" className="glass-button gold-glass path-primary-btn">
              <span>{isSi ? "මගේ Path එක බලන්න" : "View My Personal Path"}</span>
              <ArrowRight size={17} />
            </Link>
            <Link href="/build-your-path" className="path-secondary-link">
              {isSi ? "අලුත් Career Path එකක් සැලසුම් කරන්න" : "Build a New Career Path"}
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="path-progress-track">
          <div
            className="path-progress-fill"
            style={{ width: `${Math.max(5, activePath.completionPercent)}%` }}
          />
        </div>
      </div>
    );
  }

  // If no path built yet
  return (
    <div className="personal-path-card empty-path glass-panel">
      <div className="path-card-main">
        <div className="path-career-info">
          <div className="path-icon-bubble tone-mint">
            <Compass size={24} />
          </div>
          <div>
            <span className="path-status-pill tone-mint-pill">
              {isSi ? "වෘත්තීය මගපෙන්වීමේ සැලසුම" : "Career Guidance Blueprint"}
            </span>
            <h3 className="path-career-title" style={{ marginTop: "4px" }}>
              {isSi ? "ඔයාගෙම වෘත්තීය මාර්ග සැලසුම" : "Personal Career Roadmap"}
            </h3>
            <p className="path-empty-desc">
              {isSi
                ? "ඔයා කැමති ඕනෑම career එකක් තෝරාගෙන, ඒ සඳහා අවශ්‍ය O/L සහ A/L විෂයයන්, ලංකාවේ රජයේ විශ්වවිද්‍යාල, සහ වෘත්තීය පාඨමාලා ඇතුළත් සම්පූර්ණ මගපෙන්වීම ලබාගන්න."
                : "Choose your dream profession to receive your personalized roadmap covering required G.C.E. O/L subjects, A/L stream, UGC state universities, and professional courses in Sri Lanka."}
            </p>
          </div>
        </div>

        <div className="path-actions-col">
          <Link href="/build-your-path" className="glass-button gold-glass path-primary-btn">
            <Sparkles size={16} />
            <span>{isSi ? "මගේ Career Path එක හදන්න" : "Build My Career Path"}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}

