import { useTranslations } from "next-intl";
import { Bookmark, Check, Sparkles, ArrowRight } from "lucide-react";
import type { Roadmap } from "@/types/catalog";
import { milestoneIndexes } from "@/lib/data/roadmaps";

const tones = ["gold", "mint", "lavender", "peach"];

export function RoadmapPreview({ roadmap, saved, onSave }: { roadmap: Roadmap; saved: boolean; onSave: () => void }) {
  const t = useTranslations("path");
  const milestones = milestoneIndexes(roadmap.stage);
  return (
    <section id="roadmap-preview" className="roadmap-preview glass-panel gold-glass" aria-label={t("preview.label")}>
      <span className="eyebrow-pill"><Sparkles size={15} aria-hidden="true" />{t("preview.badge", { stage: t(`stages.${roadmap.stage}.label`) })}</span>
      <h3>{t("preview.yourPathTo")}</h3>
      <h2>{t(`goals.${roadmap.goal}.title`)}</h2>
      <p className="muted">{t("preview.milestones", { count: milestones.length })}</p>
      <ol className="roadmap-timeline">
        {milestones.map((n) => (
          <li key={n}>
            <span className={`milestone-number tone-${tones[n - 1]}`}>{String(n).padStart(2, "0")}</span>
            <div>
              <p className="eyebrow">{t(`roadmap.labels.${n}`)}</p>
              <h4>{t(`roadmap.${roadmap.goal}.${n}.title`)}</h4>
              <p className="muted">{t(`roadmap.${roadmap.goal}.${n}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
      <button className="glass-button roadmap-save" onClick={onSave} aria-live="polite">
        {saved ? <Check size={17} aria-hidden="true" /> : <Bookmark size={17} aria-hidden="true" />} {saved ? t("preview.saved") : t("preview.add")}<ArrowRight size={17} aria-hidden="true" />
      </button>
    </section>
  );
}
