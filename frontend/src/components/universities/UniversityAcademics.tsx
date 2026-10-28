import { Check, Clock, GraduationCap, Award } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { degreeGroups as ruhunaDegreeGroups } from "@/lib/data/faculties";
import type { DegreeGroupItem, DegreeItem } from "@/lib/data/universityDetails";

export async function UniversityAcademics({
  degreeGroups: propDegreeGroups,
  isRuhuna = true,
  universityName,
}: {
  degreeGroups?: DegreeGroupItem[];
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const t = await getTranslations("universityDetail");

  const groups = propDegreeGroups || (isRuhuna ? (ruhunaDegreeGroups as unknown as DegreeGroupItem[]) : []);

  const eyebrowText = isRuhuna
    ? t("degrees.eyebrow")
    : "UNDERGRADUATE DEGREE PROGRAMMES";
  const titleText = isRuhuna
    ? t("degrees.title")
    : `Degree Pathways at ${universityName || "the University"}`;
  const descText = isRuhuna
    ? t("degrees.description")
    : `Explore verified undergraduate honours degrees, entry qualifications, and curriculum structures offered across academic faculties.`;

  return (
    <section id="degrees" className="section-block">
      <SectionHeading
        eyebrow={eyebrowText}
        title={titleText}
        description={descText}
      />
      <div className="grid-3 degree-grid">
        {groups.map((group) => {
          const hasRuhunaI18n = isRuhuna && !propDegreeGroups && t.has(`degreeGroups.${group.id}.title`);
          const title = hasRuhunaI18n ? t(`degreeGroups.${group.id}.title`) : group.title;
          const facultyName = hasRuhunaI18n ? t(`degreeGroups.${group.id}.faculty`) : group.faculty;

          return (
            <article className="degree-card glass-panel" key={group.id}>
              <header>
                <span className={`icon-bubble ${group.tone || "blue"}`}>
                  <GraduationCap size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{facultyName}</p>
                </div>
              </header>

              <ul>
                {group.degrees.map((deg: DegreeItem | string, idx: number) => {
                  if (typeof deg === "string") {
                    return (
                      <li key={idx}>
                        <Check size={13} aria-hidden="true" />
                        <span>{deg}</span>
                      </li>
                    );
                  }

                  return (
                    <li key={deg.name || idx} className="degree-rich-item">
                      <div className="degree-item-title-row">
                        <Check size={13} aria-hidden="true" />
                        <strong>{deg.name}</strong>
                      </div>
                      <div className="degree-item-meta-row">
                        {deg.duration && (
                          <span className="degree-meta-pill">
                            <Clock size={11} /> {deg.duration}
                          </span>
                        )}
                        {deg.stream && (
                          <span className="degree-meta-pill">
                            <GraduationCap size={11} /> {deg.stream}
                          </span>
                        )}
                        {deg.tag && (
                          <span className="degree-meta-tag">
                            <Award size={11} /> {deg.tag}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
      <p className="section-footnote">
        {isRuhuna
          ? t("degrees.footnote")
          : "* Course intakes, minimum Z-scores, and entry prerequisites are gazetted annually by the University Grants Commission (UGC) of Sri Lanka and institutional governing councils."}
      </p>
    </section>
  );
}
