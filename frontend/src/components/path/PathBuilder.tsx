"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { BookOpen, Calculator, GraduationCap, Laptop, Heart, Palette, Check, ChevronRight, Sparkles, Info } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoadmapPreview } from "./RoadmapPreview";
import { stages, goals, createRoadmap } from "@/lib/data/roadmaps";
import { savedRoadmaps } from "@/lib/data/saved-items";
import type { GoalId, RoadmapStage } from "@/types/catalog";

const stageIcons = [BookOpen, Calculator, GraduationCap, Laptop];
const goalIcons = { software: Laptop, doctor: Heart, designer: Palette } as const;
const goalTones = { software: "tone-mint", doctor: "tone-peach", designer: "tone-lavender" } as const;

export function PathBuilder() {
  const t = useTranslations("path");
  const [stage, setStage] = useState<RoadmapStage>("ol");
  const [goalId, setGoalId] = useState<GoalId>("software");
  const [focus, setFocus] = useState<string[]>(["maths", "english"]);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const goal = goals.find((g) => g.id === goalId)!;
  const roadmap = useMemo(() => createRoadmap(goalId, stage, focus), [goalId, stage, focus]);
  const saved = savedId === `${roadmap.id}|${focus.join(",")}`;

  function chooseGoal(id: GoalId) {
    setGoalId(id);
    setFocus(goals.find((g) => g.id === id)!.focus.slice(0, 2));
    setMessage(null);
  }

  function toggleFocus(item: string) {
    setFocus((current) => (current.includes(item) ? current.filter((x) => x !== item) : [...current, item]));
    setMessage(null);
  }

  function generate() {
    setMessage({ kind: "ok", text: t("builder.ready") });
    document.getElementById("roadmap-preview")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function save() {
    try {
      savedRoadmaps.save(roadmap);
      setSavedId(`${roadmap.id}|${focus.join(",")}`);
      setMessage({ kind: "ok", text: t("builder.saved") });
    } catch {
      setMessage({ kind: "error", text: t("builder.storageError") });
    }
  }

  return (
    <>
      <section id="stage-selection" className="stage-section">
        <SectionHeading title={t("stage.title")} description={t("stage.description")} action={<span className="eyebrow-pill">{t("stage.step")}</span>} />
        <div className="grid-4 stage-options">
          {stages.map((s, i) => {
            const Icon = stageIcons[i];
            return (
              <button key={s.id} type="button" className={`stage-option glass-panel ${stage === s.id ? "gold-glass selected" : "glass-gradient"}`} onClick={() => { setStage(s.id); setMessage(null); }} aria-pressed={stage === s.id}>
                <div>
                  <span className={`icon-bubble ${s.tone}`}><Icon size={24} aria-hidden="true" /></span>
                  <span><strong>{t(`stages.${s.id}.label`)}</strong><small>{t(`stages.${s.id}.description`)}</small></span>
                  {stage === s.id && <Check size={16} className="stage-check" aria-hidden="true" />}
                </div>
                <p>{t(`stages.${s.id}.detail`)}<ChevronRight size={17} aria-hidden="true" /></p>
              </button>
            );
          })}
        </div>
      </section>

      <div className="builder-grid">
        <section className="path-builder glass-panel glass-gradient">
          <h2>{t("builder.title")}</h2>
          <p className="muted">{t("builder.subtitle")}</p>
          <ol className="builder-steps">
            {(["goal", "focus", "review"] as const).map((key, i) => <li key={key}><span>{i + 1}</span>{t(`builder.steps.${key}`)}</li>)}
          </ol>
          <fieldset>
            <legend>{t("builder.goalLegend")}</legend>
            <p className="muted">{t("builder.goalHint")}</p>
            <div className="goal-options">
              {goals.map((g) => {
                const Icon = goalIcons[g.id];
                return (
                  <button type="button" key={g.id} className={`goal-option ${goalId === g.id ? "selected gold-glass" : ""}`} aria-pressed={goalId === g.id} onClick={() => chooseGoal(g.id)}>
                    <span className={`icon-bubble ${goalTones[g.id]}`}><Icon size={22} aria-hidden="true" /></span>
                    <span><strong>{t(`goals.${g.id}.title`)}</strong><small>{t(`goals.${g.id}.description`)}</small></span>
                    {goalId === g.id && <Check size={13} className="goal-check" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend>{t("builder.focusLegend")}</legend>
            <p className="muted">{t("builder.focusHint", { stage: t(`stages.${stage}.label`), goal: t(`goals.${goalId}.title`) })}</p>
            <div className="focus-chips">
              {goal.focus.map((f) => (
                <button type="button" key={f} className={focus.includes(f) ? "selected" : ""} aria-pressed={focus.includes(f)} onClick={() => toggleFocus(f)}>
                  {focus.includes(f) ? <Check size={14} aria-hidden="true" /> : <BookOpen size={14} aria-hidden="true" />} {t(`focus.${f}`)}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="notice inline-icon">
            <Info size={19} aria-hidden="true" />
            <div>{goalId === "software" ? t("builder.noticeSoftware") : t("builder.noticeOther")}<small>{t("builder.noticeSmall")}</small></div>
          </div>
          <div className="builder-submit">
            <button type="button" className="glass-button gold-glass" onClick={generate}><Sparkles size={17} aria-hidden="true" />{t("builder.create")}<ChevronRight size={17} aria-hidden="true" /></button>
            <span>{t("builder.paceNote")}</span>
          </div>
          <p className={message?.kind === "error" ? "notice notice-error" : "status-message"} role={message?.kind === "error" ? "alert" : "status"}>{message?.text}</p>
        </section>
        <RoadmapPreview roadmap={roadmap} saved={saved} onSave={save} />
      </div>
    </>
  );
}
