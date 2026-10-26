import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { faculties, degreeGroups } from "@/lib/data/faculties";

export async function UniversityAcademics() {
  const t = await getTranslations("universityDetail");
  return (
    <>
      <section id="faculties" className="section-block">
        <SectionHeading eyebrow={t("academics.eyebrow")} title={t("academics.title")} description={t("academics.description")} />
        <div className="faculty-grid">
          {faculties.map(({ id, icon, tone }) => (
            <a className="faculty-card glass-panel" href="#degrees" key={id}>
              <span className={`icon-bubble ${tone}`}><DesignAsset src={icon} /></span>
              <h3>{t(`faculties.${id}.title`)}</h3>
              <p>{t(`faculties.${id}.copy`)}</p>
            </a>
          ))}
        </div>
      </section>
      <section id="degrees" className="section-block">
        <SectionHeading eyebrow={t("degrees.eyebrow")} title={t("degrees.title")} description={t("degrees.description")} />
        <div className="grid-3 degree-grid">
          {degreeGroups.map((group) => (
            <article className="degree-card glass-panel" key={group.id}>
              <header>
                <span className={`icon-bubble ${group.tone}`}><DesignAsset src={group.icon} /></span>
                <div><h3>{t(`degreeGroups.${group.id}.title`)}</h3><p>{t(`degreeGroups.${group.id}.faculty`)}</p></div>
              </header>
              <ul>{group.degrees.map((degree) => <li key={degree}><Check size={13} aria-hidden="true" />{degree}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="section-footnote">{t("degrees.footnote")}</p>
      </section>
    </>
  );
}
