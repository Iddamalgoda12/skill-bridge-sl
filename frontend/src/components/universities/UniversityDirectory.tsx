"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Search, MapPin, BookOpen, SlidersHorizontal, Globe, Landmark, School, ArrowRight } from "lucide-react";
import { UniversityCard } from "./UniversityCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import type { LocalizedUniversity } from "@/lib/i18n/catalog";

const ALL = "all";
const types = [
  { value: ALL, key: "all", Icon: Globe },
  { value: "Government", key: "government", Icon: Landmark },
  { value: "Non-state", key: "nonState", Icon: School },
] as const;

export function UniversityDirectory({ universities }: { universities: LocalizedUniversity[] }) {
  const t = useTranslations("universities");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>(ALL);
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [sort, setSort] = useState("featured");
  const [more, setMore] = useState(false);

  // Filters keep the raw catalog value; the label shown comes from the localized record.
  const locations = useMemo(
    () => [...new Map(universities.map((u) => [u.location, u.display.location]))],
    [universities]
  );
  const areas = useMemo(
    () => [...new Map(universities.flatMap((u) => u.areas.map((a, i) => [a, u.display.areas[i]] as const)))],
    [universities]
  );

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return universities
      .filter((u) => type === ALL || u.type === type)
      .filter((u) => !location || u.location === location)
      .filter((u) => !area || u.areas.includes(area))
      .filter((u) => {
        if (!needle) return true;
        const haystack = `${u.name} ${u.shortName} ${u.display.name} ${u.display.location} ${u.display.areas.join(" ")} ${u.areas.join(" ")}`.toLowerCase();
        return haystack.includes(needle);
      })
      .sort((a, b) =>
        sort === "az"
          ? a.display.name.localeCompare(b.display.name)
          : sort === "za"
          ? b.display.name.localeCompare(a.display.name)
          : 0
      );
  }, [universities, type, location, area, search, sort]);

  function clear() {
    setQuery("");
    setSearch("");
    setType(ALL);
    setLocation("");
    setArea("");
    setSort("featured");
  }

  return (
    <>
      <form
        className="university-search glass-panel"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(query);
        }}
      >
        <div className="search-row">
          <label className="search-input">
            <Search size={20} aria-hidden="true" />
            <input
              type="search"
              aria-label={t("search.label")}
              placeholder={t("search.placeholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <Button variant="glass" className="glass-button button-dark" type="submit">
            <Search size={18} aria-hidden="true" />
            {t("search.submit")}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
        <div className="filter-row">
          <label className="select-control">
            <MapPin size={15} aria-hidden="true" />
            <select
              aria-label={t("filters.location")}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">{t("filters.allLocations")}</option>
              {locations.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="select-control">
            <BookOpen size={15} aria-hidden="true" />
            <select
              aria-label={t("filters.area")}
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">{t("filters.allAreas")}</option>
              {areas.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <button
            className="filter-button"
            type="button"
            onClick={() => setMore(!more)}
            aria-expanded={more}
          >
            {t("filters.degreeType")}
          </button>
          <button
            className="filter-button"
            type="button"
            onClick={() => setMore(!more)}
            aria-expanded={more}
          >
            {t("filters.funding")}
          </button>
          <button
            className="filter-button gold-glass"
            type="button"
            onClick={() => setMore(!more)}
            aria-expanded={more}
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            {t("filters.more")}
          </button>
          <button className="clear-filters" type="button" onClick={clear}>
            {t("filters.clear")}
          </button>
        </div>
        {more && <div className="notice filter-notice">{t("filters.moreNotice")}</div>}
      </form>

      <div className="institution-category">
        <div>
          <h3>{t("category.title")}</h3>
          <p className="muted">{t("category.subtitle")}</p>
        </div>
        <div className="segmented-control glass-panel" role="group" aria-label={t("category.title")}>
          {types.map(({ value, key, Icon }) => (
            <button
              type="button"
              key={value}
              className={type === value ? "selected" : ""}
              aria-pressed={type === value}
              onClick={() => setType(value)}
            >
              <Icon size={17} aria-hidden="true" />
              {t(`category.${key}`)}
            </button>
          ))}
        </div>
      </div>

      <section className="university-results">
        <SectionHeading
          title={t("results.title")}
          description={t("results.description")}
          action={
            <select
              aria-label={t("sort.label")}
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">{t("sort.featured")}</option>
              <option value="az">{t("sort.az")}</option>
              <option value="za">{t("sort.za")}</option>
            </select>
          }
        />
        <p className="sr-only" role="status">
          {t("results.count", { count: filtered.length })}
        </p>
        <div className="grid-3">
          {filtered.map((u) => (
            <UniversityCard university={u} key={u.slug} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="glass-panel empty-state" role="status">
            <h3>{t("results.empty")}</h3>
            <button className="glass-button" onClick={clear}>
              {t("filters.clear")}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
