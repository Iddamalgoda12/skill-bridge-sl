"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, SlidersHorizontal, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { SaveButton } from "@/components/shared/SaveButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { useAppPreferences } from "@/components/layout/AppPreferences";
import assets from "@/lib/design/assets.json";
import type { Career } from "@/types/catalog";

const mainCategories = ["All careers", "Technology", "Healthcare", "Engineering", "Business", "Creative", "Education"];
const additionalCategories = ["Legal", "Hospitality", "Skilled Trades"];
const interests = [
  ["Technology & coding", "Technology"],
  ["Health & wellbeing", "Healthcare"],
  ["Building & engineering", "Engineering"],
  ["Business & finance", "Business"],
  ["Creative thinking", "Creative"],
] as const;
const studyRoutes = [
  ["A/L university degrees", "degree"],
  ["Professional qualifications", "professional"],
  ["Diplomas & NVQ", "diploma"],
  ["Skills + portfolio", "skills"],
] as const;

function matchesStudyRoute(career: Career, route: string) {
  const entry = career.entry.toLowerCase();
  if (route === "degree") return /degree|university|mbbs|engineering/.test(entry);
  if (route === "professional") return /professional|registration|licensing|ca\b|slmc|accreditation/.test(entry);
  if (route === "diploma") return /diploma|nvq|training|apprenticeship|vocational/.test(entry);
  if (route === "skills") return /skills|portfolio|practice|experience/.test(entry);
  return true;
}

export function CareerDirectory({ careers }: { careers: Career[] }) {
  const { t } = useAppPreferences();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All careers");
  const [studyRoute, setStudyRoute] = useState("");
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => careers
    .filter((career) => category === "All careers" || career.category === category)
    .filter((career) => !studyRoute || matchesStudyRoute(career, studyRoute))
    .filter((career) => `${career.title} ${career.summary} ${career.employers}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sort === "az" ? a.title.localeCompare(b.title) : 0),
  [careers, category, studyRoute, query, sort]);

  function selectCategory(next: string) {
    setCategory(next);
    if (additionalCategories.includes(next)) setShowMoreCategories(true);
  }

  function clearFilters() {
    setQuery("");
    setCategory("All careers");
    setStudyRoute("");
    setShowMoreCategories(false);
  }

  return (
    <>
      <section className="career-directory-hero glass-panel">
        <div>
          <span className="eyebrow-pill">
            <DesignAsset src={assets["18:9557"].imgIconCompass} />{t("copy.EXPLORE CAREERS", "EXPLORE CAREERS")}
          </span>
          <h1>{t("copy.Find a career that", "Find a career that")}<br /><span>{t("copy.feels like you.", "feels like you.")}</span></h1>
          <p className="muted">{t("copy.Discover real career paths, entry routes, employers and salary insights", "Discover real career paths, entry routes, employers and salary insights")}<br />{t("copy.made for students and career explorers across Sri Lanka.", "made for students and career explorers across Sri Lanka.")}</p>
          <label className="search-input career-search">
            <DesignAsset src={assets["18:9557"].imgIconSearch} />
            <input aria-label="Search careers" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("copy.Search careers: software, medicine, accounting, design...", "Search careers: software, medicine, accounting, design...")} />
            <DesignAsset src={assets["18:9557"].imgIconArrow} />
          </label>
        </div>
        <HeroArtwork compact />
      </section>

      <div className="career-stats grid-4" aria-label="Career directory facts">
        {[
          [String(careers.length), "career paths", assets["18:9590"].imgIconCompass],
          ["9", "career families", assets["18:9596"].imgIconBriefcase],
          ["LKR", "salary signals", assets.careerDirectoryCards.imgIconCoin],
          ["UGC", "admission checks", assets["18:9608"].imgIconSchool],
        ].map(([value, label, icon]) => (
          <div className="glass-panel" key={label}>
            <DesignAsset src={icon} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className="section-block">
        <SectionHeading eyebrow="BROWSE THE POSSIBILITIES" title="Explore career paths" description={`${filtered.length} curated roles · Sri Lankan education pathways`} />
        <div className="career-browser">
          <aside className="career-sidebar glass-panel" aria-label="Career filters">
            <h3>{t("copy.Find your fit", "Find your fit")}</h3>
            <p className="muted">{t("copy.Refine by your strengths and interests", "Refine by your strengths and interests")}</p>
            <p className="eyebrow">{t("copy.YOUR INTERESTS", "YOUR INTERESTS")}</p>
            {interests.map(([label, value]) => (
              <button key={value} type="button" className={category === value ? "selected" : ""} aria-pressed={category === value} onClick={() => selectCategory(category === value ? "All careers" : value)}>
                <SlidersHorizontal size={14} />{label}{category === value && <span aria-hidden="true">✓</span>}
              </button>
            ))}
            <p className="eyebrow study-route-label">{t("copy.STUDY ROUTES", "STUDY ROUTES")}</p>
            <div className="study-route-filters">
              {studyRoutes.map(([label, value]) => (
                <label key={value}>
                  <input type="radio" name="career-study-route" checked={studyRoute === value} onChange={() => setStudyRoute(studyRoute === value ? "" : value)} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            <div className="sidebar-cta gold-glass">
              <Sparkles size={22} />
              <h3>{t("copy.Not sure what fits?", "Not sure what fits?")}</h3>
              <p className="muted">{t("copy.Match your interests to a career.", "Match your interests to a career.")}</p>
              <ActionLink href="/build-your-path">Build my path</ActionLink>
            </div>
          </aside>

          <div>
            <div className="category-chips" aria-label="Filter by career family">
              {mainCategories.map((item) => (
                <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => selectCategory(item)}>{item}</button>
              ))}
              <button type="button" className={showMoreCategories ? "selected" : ""} aria-expanded={showMoreCategories} onClick={() => setShowMoreCategories(!showMoreCategories)}>More <SlidersHorizontal size={13} /></button>
              {showMoreCategories && additionalCategories.map((item) => (
                <button key={item} type="button" className={category === item ? "selected" : ""} aria-pressed={category === item} onClick={() => selectCategory(item)}>{item}</button>
              ))}
            </div>
            <div className="results-toolbar">
              <span role="status">Showing {filtered.length} careers</span>
              <label className="career-sort"><span className="sr-only">Sort careers</span><select aria-label="Sort careers" className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Popular first</option><option value="az">Name (A–Z)</option></select></label>
            </div>

            <div className="career-grid">
              {filtered.map((career) => (
                <article className="career-card glass-panel" key={career.slug}>
                  <div className="career-card-media">
                    {career.image ? <Image src={career.image} fill sizes="(max-width:700px) 90vw, 270px" alt={`Figma career photograph for ${career.title}`} /> : <div className="career-image-placeholder"><Compass size={38} /></div>}
                    <span className="career-category">{career.category}</span>
                    <SaveButton id={career.slug} title={career.title} compact iconAsset={assets.careerDirectoryCards.imgIconBookmark} />
                  </div>
                  <h3><Link href={`/careers/${career.slug}`}>{career.title}</Link></h3>
                  <p className="career-salary">{career.salary || "Monthly pay: varies"}</p>
                  <p className="career-card-line"><DesignAsset src={assets.careerDirectoryCards.imgIconBriefcase} />{career.employers}</p>
                  <p className="career-card-line"><DesignAsset src={assets.careerDirectoryCards.imgIconSchool} />{career.entry}</p>
                  <Link className="career-explore gold-glass" href={`/careers/${career.slug}`}>Explore career<DesignAsset src={assets.careerDirectoryCards.imgIconArrow} /></Link>
                </article>
              ))}
            </div>
            {!filtered.length && (
              <div className="glass-panel empty-state" role="status">
                <h3>No careers found</h3>
                <p>Try another search or choose a different category.</p>
                <button className="glass-button" type="button" onClick={clearFilters}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="career-source-note section-block">
        <p>Salary signals are indicative monthly averages for listed occupations or adjacent role families, not guaranteed offers.</p>
        <p>Entry routes are guidance only: actual A/L subjects, grades, Z-scores, accreditation, licensing and employer criteria differ.</p>
        <small>Confirm salary information and admission requirements with current official sources before making a decision.</small>
      </div>
    </>
  );
}
