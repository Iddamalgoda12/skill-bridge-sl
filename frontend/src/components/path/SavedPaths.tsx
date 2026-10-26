"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Bookmark, Route, Trash2 } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { SaveButton } from "@/components/shared/SaveButton";
import { milestoneIndexes } from "@/lib/data/roadmaps";
import { isLegacyRoadmap, savedItems, savedRoadmaps, subscribeSaved, type SavedItem, type StoredRoadmap } from "@/lib/data/saved-items";

/** `titles` maps `${kind}:${slug}` to the name in the current language (from the server); stored titles are the fallback. */
export function SavedPaths({ titles }: { titles: Record<string, string> }) {
  const t = useTranslations("myPath");
  const p = useTranslations("path");
  const saved: SavedItem[] = JSON.parse(useSyncExternalStore(subscribeSaved, savedItems.snapshot, () => "[]"));
  const roadmaps: StoredRoadmap[] = JSON.parse(useSyncExternalStore(subscribeSaved, savedRoadmaps.snapshot, () => "[]"));

  function remove(id: string) {
    try {
      savedRoadmaps.remove(id);
    } catch {
      // Keep the existing saved roadmap if storage is unavailable.
    }
  }

  return (
    <section className="section-block">
      <p className="muted">{t("deviceNote")}</p>
      {!saved.length && !roadmaps.length ? (
        <div className="empty-state glass-panel section-block">
          <Bookmark size={36} aria-hidden="true" />
          <h2>{t("empty.title")}</h2>
          <p>{t("empty.body")}</p>
          <ActionLink href="/build-your-path" icon={<Route size={17} />}>{t("empty.action")}</ActionLink>
        </div>
      ) : (
        <>
          {saved.length > 0 && (
            <div className="grid-3 section-block">
              {saved.map((item) => {
                const title = titles[`${item.kind}:${item.id}`] ?? item.title;
                return (
                  <article className="saved-card glass-panel" key={`${item.kind}-${item.id}`}>
                    <span className="eyebrow">{t(`kind.${item.kind}`)}</span>
                    <h3>{title}</h3>
                    <ActionLink href={`/${item.kind === "career" ? "careers" : "universities"}/${item.id}`}>{t(`explore.${item.kind}`)}</ActionLink>
                    <SaveButton id={item.id} title={title} kind={item.kind} />
                  </article>
                );
              })}
            </div>
          )}
          {roadmaps.length > 0 && (
            <>
              <h2 className="section-block">{t("roadmaps")}</h2>
              <div className="grid-2 section-block">
                {roadmaps.map((roadmap) => {
                  const legacy = isLegacyRoadmap(roadmap);
                  return (
                    <article className="saved-card glass-panel" key={roadmap.id}>
                      <h3>{p("preview.pathTo", { goal: legacy ? roadmap.career : p(`goals.${roadmap.goal}.title`) })}</h3>
                      <ol>
                        {legacy
                          ? roadmap.milestones.map((m) => (
                              <li key={m.label}><strong>{m.title}</strong><p className="muted">{m.description}</p></li>
                            ))
                          : milestoneIndexes(roadmap.stage).map((n) => (
                              <li key={n}><strong>{p(`roadmap.${roadmap.goal}.${n}.title`)}</strong><p className="muted">{p(`roadmap.${roadmap.goal}.${n}.description`)}</p></li>
                            ))}
                      </ol>
                      <button className="glass-button" type="button" onClick={() => remove(roadmap.id)}>
                        <Trash2 size={16} aria-hidden="true" />{t("removeRoadmap")}
                      </button>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
