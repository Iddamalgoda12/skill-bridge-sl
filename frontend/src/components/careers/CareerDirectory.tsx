"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Compass, SlidersHorizontal, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { SaveButton } from "@/components/shared/SaveButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import assets from "@/lib/design/assets.json";
import { formatSalary, type LocalizedCareer } from "@/lib/i18n/catalog";

const ALL = "all";
const mainCategories = [ALL, "Technology", "Healthcare", "Engineering", "Business", "Creative", "Education"];
const additionalCategories = ["Legal", "Hospitality", "Skilled Trades"];
const interests = [
  ["technology", "Technology"],
  ["health", "Healthcare"],
  ["engineering", "Engineering"],
  ["business", "Business"],
  ["creative", "Creative"],
] as const;
const studyRoutes = ["degree", "professional", "diploma", "skills"] as const;

/** Study-route filters match the English entry-route text kept on the record. */
function matchesStudyRoute(career: LocalizedCareer, route: string) {
  const entry = career.entry.toLowerCase();
  if (route === "degree") return /degree|university|mbbs|engineering/.test(entry);
  if (route === "professional") return /professional|registration|licensing|ca\b|slmc|accreditation/.test(entry);
  if (route === "diploma") return /diploma|nvq|training|apprenticeship|vocational/.test(entry);
  if (route === "skills") return /skills|portfolio|practice|experience/.test(entry);
  return true;
}

/** `artwork` is a server-rendered slot (it needs server-only translations). */
export function CareerDirectory({ careers, artwork }: { careers: LocalizedCareer[]; artwork: ReactNode }) {
  const router = useRouter();
  const t = useTranslations("careers");
  const catalog = useTranslations("catalog");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [studyRoute, setStudyRoute] = useState("");
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [sort, setSort] = useState("featured");

  const categoryLabel = (value: string) => (value === ALL ? t("categories.all") : catalog.has(`category.${value}`) ? catalog(`category.${value}`) : value);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return careers
      .filter((career) => category === ALL || career.category === category)
      .filter((career) => !studyRoute || matchesStudyRoute(career, studyRoute))
      .filter((career) => !needle || `${career.display.title} ${career.display.summary} ${career.display.employers} ${career.title} ${career.employers}`.toLowerCase().includes(needle))
      .sort((a, b) => (sort === "az" ? a.display.title.localeCompare(b.display.title) : 0));
  }, [careers, category, studyRoute, query, sort]);

  function selectCategory(next: string) {
    setCategory(next);
    if (additionalCategories.includes(next)) setShowMoreCategories(true);
  }

  function clearFilters() {
    setQuery("");
    setCategory(ALL);
    setStudyRoute("");
    setShowMoreCategories(false);
  }

  return (
    <>
      <section className="career-directory-hero glass-panel">
        <div>
          <span className="eyebrow-pill">
            <DesignAsset src={assets["18:9557"].imgIconCompass} />{t("eyebrow")}
          </span>
          <h1>{t.rich("title", { accent: (chunks) => <span>{chunks}</span>, br: () => <br /> })}</h1>
          <p className="muted">{t.rich("intro", { br: () => <br /> })}</p>
          <label className="search-input career-search">
            <DesignAsset src={assets["18:9557"].imgIconSearch} />
            <input type="search" aria-label={t("searchLabel")} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("searchPlaceholder")} />
            <DesignAsset src={assets["18:9557"].imgIconArrow} />
          </label>
        </div>
        {artwork}
      </section>

      <section className="section-block">
        <SectionHeading eyebrow={t("browse.eyebrow")} title={t("browse.title")} description={t("browse.description", { count: filtered.length })} />
        <div className="career-browser">
          <aside className="career-sidebar glass-panel" aria-label={t("filters.label")}>
            <h3>{t("filters.title")}</h3>
            <p className="muted">{t("filters.subtitle")}</p>
            <p className="eyebrow">{t("filters.interests")}</p>
            {interests.map(([key, value]) => (
              <button key={value} type="button" className={category === value ? "selected" : ""} aria-pressed={category === value} onClick={() => selectCategory(category === value ? ALL : value)}>
                <SlidersHorizontal size={14} aria-hidden="true" />{t(`filters.interest.${key}`)}{category === value && <span aria-hidden="true">✓</span>}
              </button>
            ))}
            <p className="eyebrow study-route-label">{t("filters.studyRoutes")}</p>
            <div className="study-route-filters">
              {studyRoutes.map((value) => (
                <label key={value}>
                  <input type="radio" name="career-study-route" checked={studyRoute === value} onChange={() => setStudyRoute(studyRoute === value ? "" : value)} onClick={() => studyRoute === value && setStudyRoute("")} />
                  <span>{t(`filters.route.${value}`)}</span>
                </label>
              ))}
            </div>
            <div className="sidebar-cta gold-glass">
              <Sparkles size={22} aria-hidden="true" />
              <h3>{t("filters.notSure")}</h3>
              <p className="muted">{t("filters.match")}</p>
              <ActionLink href="/build-your-path">{t("filters.buildPath")}</ActionLink>
            </div>
          </aside>

          <div>
            <div className="category-chips" role="group" aria-label={t("categories.label")}>
              {mainCategories.map((item) => (
                <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => selectCategory(item)}>{categoryLabel(item)}</button>
              ))}
              <button type="button" className={showMoreCategories ? "selected" : ""} aria-expanded={showMoreCategories} onClick={() => setShowMoreCategories(!showMoreCategories)}>{t("categories.more")} <SlidersHorizontal size={13} aria-hidden="true" /></button>
              {showMoreCategories && additionalCategories.map((item) => (
                <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => selectCategory(item)}>{categoryLabel(item)}</button>
              ))}
            </div>
            <div className="results-toolbar">
              <span role="status">{t("results", { count: filtered.length })}</span>
              <label className="career-sort">
                <span className="sr-only">{t("sort.label")}</span>
                <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}>
                  <option value="featured">{t("sort.featured")}</option>
                  <option value="az">{t("sort.az")}</option>
                </select>
              </label>
            </div>

            <div className="career-grid">
              {filtered.map((career) => (
                <article
                  className="career-card glass-panel"
                  key={career.slug}
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.closest("button") || target.closest("a")) return;
                    router.push(`/careers/${career.slug}`);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div className="career-card-media">
                    {career.image ? (
                      <Image
                        src={career.image}
                        fill
                        sizes="(max-width:700px) 90vw, (max-width:1250px) 33vw, 270px"
                        alt={t("card.photoAlt", { title: career.display.title })}
                      />
                    ) : (
                      <div className="career-image-placeholder"><Compass size={38} aria-hidden="true" /></div>
                    )}
                    <span className="career-category">{career.display.category}</span>
                    <SaveButton id={career.slug} title={career.display.title} compact iconAsset={assets.careerDirectoryCards.imgIconBookmark} />
                  </div>
                  <h3><Link href={`/careers/${career.slug}`}>{career.display.title}</Link></h3>
                  <p className="career-salary">{formatSalary(catalog, career)}</p>
                  <p className="career-card-line"><DesignAsset src={assets.careerDirectoryCards.imgIconBriefcase} /><span>{career.display.employers}</span></p>
                  <p className="career-card-line"><DesignAsset src={assets.careerDirectoryCards.imgIconSchool} /><span>{career.display.entry}</span></p>
                  <Link className="career-explore gold-glass" href={`/careers/${career.slug}`}>{t("card.explore")}<DesignAsset src={assets.careerDirectoryCards.imgIconArrow} /></Link>
                </article>
              ))}
            </div>
            {!filtered.length && (
              <div className="glass-panel empty-state" role="status">
                <h3>{t("empty.title")}</h3>
                <p>{t("empty.body")}</p>
                <button className="glass-button" type="button" onClick={clearFilters}>{t("empty.clear")}</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
