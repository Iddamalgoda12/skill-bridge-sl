"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Calendar, GraduationCap, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { faculties } from "@/lib/data/faculties";
import { DesignAsset } from "@/components/shared/DesignAsset";

type ZoneFilter = "all" | "matara" | "galle" | "kamburupitiya";

export function FacultyExplorer() {
  const t = useTranslations("universityDetail");
  const [activeZone, setActiveZone] = useState<ZoneFilter>("all");

  const filtered = activeZone === "all"
    ? faculties
    : faculties.filter((f) => f.campusZone === activeZone);

  return (
    <section id="faculties" className="section-block faculty-explorer-section">
      <div className="section-header-row">
        <div>
          <p className="eyebrow">{t("facultyExplorer.eyebrow")}</p>
          <h2 className="section-title">{t("facultyExplorer.title")}</h2>
          <p className="section-description muted">{t("facultyExplorer.description")}</p>
        </div>

        {/* Filter Pills */}
        <div className="zone-filter-pills glass-panel">
          <button
            type="button"
            className={`zone-pill ${activeZone === "all" ? "active" : ""}`}
            onClick={() => setActiveZone("all")}
          >
            {t("facultyExplorer.filterAll")}
          </button>
          <button
            type="button"
            className={`zone-pill ${activeZone === "matara" ? "active" : ""}`}
            onClick={() => setActiveZone("matara")}
          >
            {t("facultyExplorer.filterMatara")}
          </button>
          <button
            type="button"
            className={`zone-pill ${activeZone === "galle" ? "active" : ""}`}
            onClick={() => setActiveZone("galle")}
          >
            {t("facultyExplorer.filterGalle")}
          </button>
          <button
            type="button"
            className={`zone-pill ${activeZone === "kamburupitiya" ? "active" : ""}`}
            onClick={() => setActiveZone("kamburupitiya")}
          >
            {t("facultyExplorer.filterKamburupitiya")}
          </button>
        </div>
      </div>

      <div className="faculty-cards-grid">
        {filtered.map((faculty) => {
          const title = t(`faculties.${faculty.id}.title`);
          const copy = t(`faculties.${faculty.id}.copy`);

          return (
            <article className="faculty-detail-card glass-panel" key={faculty.id}>
              <div className="faculty-card-header">
                <span className={`icon-bubble ${faculty.tone}`}>
                  <DesignAsset src={faculty.icon} />
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
                  <span><strong>{t("facultyExplorer.streamLabel")}</strong> {faculty.stream}</span>
                </div>

                <div className="faculty-depts-preview">
                  <strong>Key Departments & Research:</strong>
                  <ul>
                    {faculty.departments.map((dept) => (
                      <li key={dept}>{dept}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="faculty-card-footer">
                <a
                  href={faculty.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faculty-portal-btn"
                  aria-label={`${title} Official Website`}
                >
                  <span>{t("facultyExplorer.visitFaculty")}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>

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
