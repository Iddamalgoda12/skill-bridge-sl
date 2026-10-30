import { Check, GraduationCap } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
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
  const [t, locale] = await Promise.all([
    getTranslations("universityDetail"),
    getLocale(),
  ]);
  const isSi = locale === "si";

  const groups = propDegreeGroups || (isRuhuna ? (ruhunaDegreeGroups as unknown as DegreeGroupItem[]) : []);

  const eyebrowText = isRuhuna
    ? t("degrees.eyebrow")
    : (isSi ? "උපාධි පාඨමාලා" : "UNDERGRADUATE DEGREE PROGRAMMES");
  const titleText = isRuhuna
    ? t("degrees.title")
    : (isSi ? `${universityName || "විශ්වවිද්‍යාලයේ"} උපාධි පාඨමාලා` : `Degree Pathways at ${universityName || "the University"}`);
  const descText = isRuhuna
    ? t("degrees.description")
    : (isSi
        ? "විවිධ පීඨ ඔස්සේ හැදෑරිය හැකි පිළිගත් උපාධි පාඨමාලා, ප්‍රවේශ සුදුසුකම් සහ අධ්‍යයන ව්‍යුහය."
        : `Explore verified undergraduate honours degrees, entry qualifications, and curriculum structures offered across academic faculties.`);

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
                <span className={`icon-bubble ${group.tone || "tone-ice"}`}>
                  <GraduationCap size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{facultyName}</p>
                </div>
              </header>

              <ul className="degree-list">
                {group.degrees.map((deg: DegreeItem | string, idx: number) => {
                  const name = typeof deg === "string" ? deg : deg.name;
                  const tag = typeof deg === "object" && deg.tag && deg.tag !== "Degree Programme" ? deg.tag : null;

                  return (
                    <li key={idx} className="degree-item-row">
                      <div className="degree-title-wrap">
                        <Check size={14} className="degree-check-icon" aria-hidden="true" />
                        <span className="degree-name">{name}</span>
                      </div>
                      {tag && <span className="degree-tag-badge">{tag}</span>}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
      <p className="section-footnote">
        {t("degrees.footnote")}
      </p>
    </section>
  );
}
