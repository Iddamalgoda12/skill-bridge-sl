import { Landmark, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { studyRoutes, sampleUniversities } from "@/lib/data/universities";

export async function StudyOptions() {
  const [t, catalog] = await Promise.all([getTranslations("careerDetail.study"), getTranslations("catalog")]);
  return (
    <section className="section-block">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid-2 study-grid">
        {studyRoutes.map((route) => (
          <article className="study-card glass-panel" key={route.slug}>
            <header>
              <span className="icon-bubble"><Landmark size={22} aria-hidden="true" /></span>
              <div>
                <h3>{catalog.has(`university.${route.slug}.name`) ? catalog(`university.${route.slug}.name`) : route.university}</h3>
                <p className="muted">{t(`routes.${route.slug}.type`)}</p>
              </div>
              <span className="small-pill">{t("programmes", { count: route.degrees.length })}</span>
            </header>
            {/* Degree titles are official programme names and are shown as published. */}
            <ul>
              {route.degrees.map((degree, i) => (
                <li key={degree}><span>{degree}</span><small>{degree.includes("External") ? t("fit.external") : i < 2 ? t("fit.strong") : t("fit.related")}</small></li>
              ))}
            </ul>
            <footer>
              <a href={sampleUniversities.find((u) => u.slug === route.slug)?.website || "https://www.iit.ac.lk"} target="_blank" rel="noopener noreferrer">{t("officialList")}<ArrowUpRight size={12} aria-hidden="true" /></a>
              <p>{t(`routes.${route.slug}.note`)}</p>
            </footer>
          </article>
        ))}
      </div>
      <p className="section-footnote">{t("footnote")}</p>
    </section>
  );
}
