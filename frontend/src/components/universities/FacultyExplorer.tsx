"use client";

import { useState, useMemo } from "react";
import { MapPin, ExternalLink, Calendar, GraduationCap, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { faculties as ruhunaFaculties } from "@/lib/data/faculties";
import { DesignAsset } from "@/components/shared/DesignAsset";
import type { FacultyItem } from "@/lib/data/universityDetails";

export function FacultyExplorer({
  faculties: propFaculties,
  isRuhuna = true,
  universityName,
}: {
  faculties?: FacultyItem[];
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const t = useTranslations("universityDetail");

  // Determine list of faculties
  const facultyList = propFaculties || (isRuhuna ? (ruhunaFaculties as unknown as FacultyItem[]) : []);

  // Compute filter options dynamically
  const filterOptions = useMemo(() => {
    if (isRuhuna && !propFaculties) {
      return [
        { id: "all", label: t("facultyExplorer.filterAll") },
        { id: "matara", label: t("facultyExplorer.filterMatara") },
        { id: "galle", label: t("facultyExplorer.filterGalle") },
        { id: "kamburupitiya", label: t("facultyExplorer.filterKamburupitiya") },
      ];
    }

    // For other universities, extract unique campus zones if more than 1 exist, else extract streams
    const zones = Array.from(new Set(facultyList.map((f) => f.campusZone).filter(Boolean))) as string[];
    if (zones.length > 1 && zones.length <= 5) {
      return [
        { id: "all", label: "All Campuses" },
        ...zones.map((z) => ({ id: z, label: z })),
      ];
    }

    const streams = Array.from(new Set(facultyList.map((f) => f.stream).filter(Boolean))) as string[];
    if (streams.length > 1 && streams.length <= 6) {
      return [
        { id: "all", label: "All Streams" },
        ...streams.map((s) => ({ id: s, label: s })),
      ];
    }

    return [{ id: "all", label: "All Faculties" }];
  }, [isRuhuna, propFaculties, facultyList, t]);

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return facultyList;
    return facultyList.filter(
      (f) => f.campusZone === activeFilter || f.stream === activeFilter
    );
  }, [facultyList, activeFilter]);

  const eyebrowText = isRuhuna
    ? t("facultyExplorer.eyebrow")
    : "FACULTIES & ACADEMIC DIVISIONS";
  const titleText = isRuhuna
    ? t("facultyExplorer.title")
    : `Explore Faculties at ${universityName || "the University"}`;
  const descText = isRuhuna
    ? t("facultyExplorer.description")
    : `Comprehensive academic faculties offering specialized degree programmes, advanced research laboratories, and interdisciplinary study pathways.`;

  return (
    <section id="faculties" className="section-block faculty-explorer-section">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">{eyebrowText}</p>
          <h2 className="section-title">{titleText}</h2>
          <p className="section-description muted">{descText}</p>
        </div>

        {/* Filter Pills */}
        {filterOptions.length > 1 && (
          <div className="zone-filter-pills glass-panel">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`zone-pill ${activeFilter === opt.id ? "active" : ""}`}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="faculty-cards-grid">
        {filtered.map((faculty) => {
          // Ruhuna specific translation key resolution
          const hasRuhunaI18n = isRuhuna && !propFaculties && t.has(`faculties.${faculty.id}.title`);
          const title = hasRuhunaI18n ? t(`faculties.${faculty.id}.title`) : faculty.name;
          const copy = hasRuhunaI18n ? t(`faculties.${faculty.id}.copy`) : faculty.description;

          return (
            <article className="faculty-detail-card glass-panel" key={faculty.id}>
              <div className="faculty-card-header">
                <span className={`icon-bubble ${faculty.tone || "blue"}`}>
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div className="faculty-header-meta">
                  <span className="faculty-zone-pill">
                    <MapPin size={11} aria-hidden="true" />
                    <span>{faculty.location}</span>
                  </span>
                  <span className="faculty-est-pill">
                    <Calendar size={11} aria-hidden="true" />
                    <span>Est. {faculty.established}</span>
                  </span>
                </div>
              </div>

              <div className="faculty-card-body">
                <h3>{title}</h3>
                <p className="faculty-card-subcopy">{copy}</p>

                <div className="faculty-stream-tag">
                  <GraduationCap size={13} aria-hidden="true" />
                  <span>
                    <strong>{isRuhuna ? t("facultyExplorer.streamLabel") : "Stream:"}</strong> {faculty.stream}
                  </span>
                </div>

                {faculty.departments && faculty.departments.length > 0 && (
                  <div className="faculty-depts-preview">
                    <strong>Key Departments & Research:</strong>
                    <ul>
                      {faculty.departments.map((dept) => (
                        <li key={dept}>{dept}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="faculty-card-footer">
                {faculty.website && (
                  <a
                    href={faculty.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faculty-portal-btn"
                    aria-label={`${title} Official Website`}
                  >
                    <span>{isRuhuna ? t("facultyExplorer.visitFaculty") : "Official Faculty Portal"}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}

                <a href="#degrees" className="faculty-degrees-link">
                  <span>View Degrees</span>
                  <ChevronRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
