import { Check, Pencil, Target, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";

const stages = [
  { id: "ol", Icon: Pencil, tone: "" },
  { id: "al", Icon: Target, tone: "tone-mint" },
  { id: "after", Icon: GraduationCap, tone: "tone-lavender" },
] as const;
const steps = [1, 2, 3, 4] as const;

export async function SchoolRoadmap() {
  const t = await getTranslations("careerDetail.school");
  return (
    <section id="school-roadmap" className="section-block">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid-3">
        {stages.map(({ id, Icon, tone }) => (
          <article key={id} className="school-card glass-panel glass-gradient">
            <header>
              <span className={`icon-bubble ${tone}`}><Icon size={24} aria-hidden="true" /></span>
              <div><p className="eyebrow">{t(`${id}.stage`)}</p><h3>{t(`${id}.title`)}</h3></div>
              <span className="small-pill">{t(`${id}.badge`)}</span>
            </header>
            <ol>
              {steps.map((n) => (
                <li key={n}>
                  <span className={`check-dot ${tone}`}><Check size={13} aria-hidden="true" /></span>
                  <div><strong>{String(n).padStart(2, "0")} {t(`${id}.steps.${n}.title`)}</strong><p>{t(`${id}.steps.${n}.copy`)}</p></div>
                </li>
              ))}
            </ol>
            <p className={`school-note ${tone}`}>{t(`${id}.note`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
