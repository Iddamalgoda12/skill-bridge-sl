"use client";
import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

/** Auto-scrolling strip with a visible pause control (WCAG 2.2.2). Also pauses on hover and focus via CSS. */
export function TrendingViewport({ children, label, pauseLabel, playLabel }: { children: ReactNode; label: string; pauseLabel: string; playLabel: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="trending-viewport-container">
      <div className="trending-viewport" role="region" aria-label={label} data-paused={paused}>{children}</div>
      <button
        type="button"
        className="trending-pause"
        aria-pressed={paused}
        aria-label={paused ? playLabel : pauseLabel}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </div>
  );
}
