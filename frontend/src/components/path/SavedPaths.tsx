"use client";

import { useSyncExternalStore } from "react";
import { Bookmark, Route, Trash2 } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { SaveButton } from "@/components/shared/SaveButton";
import { savedItems, subscribeSaved, type SavedItem } from "@/lib/data/saved-items";
import type { Roadmap } from "@/types/catalog";

const roadmapKey = "skillbridge:roadmaps:v1";

function roadmapSnapshot() {
  try {
    const raw = localStorage.getItem(roadmapKey) || "[]";
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) && data.every(
      (roadmap) =>
        roadmap &&
        typeof roadmap.id === "string" &&
        typeof roadmap.career === "string" &&
        Array.isArray(roadmap.milestones),
    )
      ? raw
      : "[]";
  } catch {
    return "[]";
  }
}

function removeRoadmap(id: string, roadmaps: Roadmap[]) {
  try {
    localStorage.setItem(
      roadmapKey,
      JSON.stringify(roadmaps.filter((roadmap) => roadmap.id !== id)),
    );
    window.dispatchEvent(new Event("skillbridge:shortlist-change"));
  } catch {
    // Keep the existing saved roadmap if storage is unavailable.
  }
}

export function SavedPaths() {
  const saved: SavedItem[] = JSON.parse(
    useSyncExternalStore(subscribeSaved, savedItems.snapshot, () => "[]"),
  );
  const roadmaps: Roadmap[] = JSON.parse(
    useSyncExternalStore(subscribeSaved, roadmapSnapshot, () => "[]"),
  );

  return (
    <section className="section-block">
      <p className="muted">Your shortlist and roadmaps are saved on this device.</p>
      {!saved.length && !roadmaps.length ? (
        <div className="empty-state glass-panel section-block">
          <Bookmark size={36} />
          <h2>Your next chapter starts here.</h2>
          <p>Save a career or university, or create your first roadmap.</p>
          <ActionLink href="/build-your-path" icon={<Route size={17} />}>
            Build my path
          </ActionLink>
        </div>
      ) : (
        <>
          {saved.length > 0 && (
            <div className="grid-3 section-block">
              {saved.map((item) => (
                <article className="saved-card glass-panel" key={`${item.kind}-${item.id}`}>
                  <span className="eyebrow">{item.kind}</span>
                  <h3>{item.title}</h3>
                  <ActionLink href={`/${item.kind === "career" ? "careers" : "universities"}/${item.id}`}>
                    Explore {item.kind}
                  </ActionLink>
                  <SaveButton id={item.id} title={item.title} kind={item.kind} />
                </article>
              ))}
            </div>
          )}
          {roadmaps.length > 0 && (
            <>
              <h2 className="section-block">Your roadmaps</h2>
              <div className="grid-2 section-block">
                {roadmaps.map((roadmap) => (
                  <article className="saved-card glass-panel" key={roadmap.id}>
                    <h3>Your path to {roadmap.career}</h3>
                    <ol>
                      {roadmap.milestones.map((milestone) => (
                        <li key={milestone.label}>
                          <strong>{milestone.title}</strong>
                          <p className="muted">{milestone.description}</p>
                        </li>
                      ))}
                    </ol>
                    <button
                      className="glass-button"
                      type="button"
                      onClick={() => removeRoadmap(roadmap.id, roadmaps)}
                    >
                      <Trash2 size={16} />Remove roadmap
                    </button>
                  </article>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
