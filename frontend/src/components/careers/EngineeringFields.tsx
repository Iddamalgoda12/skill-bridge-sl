"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Building2,
  Cpu,
  Zap,
  Cog,
  Radio,
  Bot,
  FlaskConical,
  HeartPulse,
  Ship,
  Layers,
  Pickaxe,
  Plane,
  Cloud,
  Shield,
  Brain,
  Palette,
  Database,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  DollarSign,
  Compass,
} from "lucide-react";
import {
  ENGINEERING_DISCIPLINES,
  type EngineeringDiscipline,
} from "@/lib/data/engineeringDisciplines";

const ICON_MAP: Record<string, typeof Building2> = {
  Building2,
  Cpu,
  Zap,
  Cog,
  Radio,
  Bot,
  FlaskConical,
  HeartPulse,
  Ship,
  Layers,
  Pickaxe,
  Plane,
  Cloud,
  Shield,
  Brain,
  Palette,
  Database,
};

const disciplines = ENGINEERING_DISCIPLINES.map((d) => ({
  ...d,
  icon: ICON_MAP[d.iconName] || Cog,
}));

export function EngineeringFields() {
  const locale = useLocale();
  const isSi = locale === "si";
  const [activeFilter, setActiveFilter] = useState<"all" | "civil" | "mechanical" | "computing" | "specialized">("all");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>("software-engineering");

  const filtered = disciplines.filter((d) => activeFilter === "all" || d.category === activeFilter);
  const activeItem = disciplines.find((d) => d.id === selectedDiscipline) || disciplines[0];

  const filterTabs = [
    { key: "all", label: isSi ? `සියලු අංශ (${disciplines.length})` : `All Disciplines (${disciplines.length})` },
    { key: "computing", label: isSi ? "Software & IT ක්ෂේත්‍ර" : "Software, Cloud & Tech" },
    { key: "civil", label: isSi ? "සිවිල් & ඉදිකිරීම්" : "Infrastructure & Built" },
    { key: "mechanical", label: isSi ? "යාන්ත්‍රික & බලශක්ති" : "Machinery & Power" },
    { key: "specialized", label: isSi ? "විශේෂඥ ඉංජිනේරු අංශ" : "High-Tech & Specialized" },
  ];

  return (
    <div className="engineering-fields-experience section-block">
      {/* Overview Banner */}
      <section className="glass-panel" style={{ padding: "28px 24px", marginBottom: "32px", borderRadius: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span className="eyebrow-pill" style={{ margin: 0 }}>
            <Award size={15} /> {isSi ? "IESL & Washington Accord පිළිගත්" : "Washington Accord & IESL Accredited"}
          </span>
          <span className="eyebrow-pill" style={{ margin: 0, background: "rgba(22, 101, 52, 0.1)", color: "#166534" }}>
            <CheckCircle2 size={15} /> {isSi ? "ශ්‍රී ලංකාවේ සියලුම ඉංජිනේරු අංශ 17" : "All 17 Engineering & Tech Branches"}
          </span>
        </div>
        <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "10px 0 12px", color: "var(--forest)" }}>
          {isSi
            ? "ශ්‍රී ලංකාවේ සියලුම ඉංජිනේරු සහ තාක්ෂණික විශේෂඥ අංශ"
            : "All Engineering Disciplines & Tech Specialisations in Sri Lanka"}
        </h2>
        <p className="muted" style={{ fontSize: "14.5px", lineHeight: 1.6, maxWidth: "880px", margin: 0 }}>
          {isSi
            ? "මෘදුකාංග, ක්ලවුඩ්, AI, හාඩ්වෙයාර්, සිවිල්, යාන්ත්‍රික ඇතුළු සියලුම තාක්ෂණික අංශ ඉංජිනේරු ක්ෂේත්‍රය යටතට අයත් වේ. උසස් පෙළ ගණිත අංශයෙන් ඇතුළත් වන සිසුන් මූලික ඉංජිනේරු විද්‍යාව හැදෑරීමෙන් පසු තම විශේෂඥ අංශය තෝරා ගනී."
            : "All technical, software, cloud, cybersecurity, AI, hardware, civil, mechanical, and industrial engineering branches are unified under the Engineering discipline. Undergraduates begin with foundational physical science and engineering mathematics before advancing to their specialized engineering domains."}
        </p>
      </section>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`glass-button ${activeFilter === tab.key ? "selected" : ""}`}
            style={{
              padding: "9px 18px",
              borderRadius: "14px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              background: activeFilter === tab.key ? "var(--forest)" : "rgba(255, 255, 255, 0.7)",
              color: activeFilter === tab.key ? "#ffffff" : "var(--forest)",
              borderColor: activeFilter === tab.key ? "var(--forest)" : "rgba(255, 255, 255, 0.9)",
              transition: "all 0.2s ease",
            }}
            onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Discipline Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px", marginBottom: "40px" }}>
        {filtered.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === activeItem.id;
          return (
            <div
              key={item.id}
              className={`glass-panel ${isSelected ? "highlighted-card" : ""}`}
              style={{
                padding: "20px",
                borderRadius: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                border: isSelected ? "2px solid #ab8327" : "1px solid rgba(255,255,255,0.7)",
                boxShadow: isSelected ? "0 12px 28px rgba(171, 131, 39, 0.16)" : "var(--glass-shadow-sm)",
                transition: "all 0.25s var(--ease-spring)",
              }}
              onClick={() => setSelectedDiscipline(item.id)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(250,225,154,0.35))",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--forest)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <Icon size={24} />
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(171, 131, 39, 0.12)",
                    color: "#8a6311",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 2px", color: "var(--forest)" }}>
                {item.titleEn}
              </h3>
              <p style={{ fontSize: "12.5px", color: "var(--muted-ink)", margin: "0 0 10px", fontWeight: 500 }}>
                {item.titleSi}
              </p>

              <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#334155", margin: "0 0 14px", flexGrow: 1 }}>
                {item.summaryEn}
              </p>

              {/* Specialisation pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                {item.specialisations.slice(0, 3).map((spec) => (
                  <span
                    key={spec}
                    style={{
                      fontSize: "10.5px",
                      padding: "3px 8px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      color: "#475569",
                    }}
                  >
                    {spec}
                  </span>
                ))}
                {item.specialisations.length > 3 && (
                  <span style={{ fontSize: "10.5px", padding: "3px 8px", color: "var(--muted-ink)" }}>
                    +{item.specialisations.length - 3} more
                  </span>
                )}
              </div>

              {/* Salary & degree */}
              <div
                style={{
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11.5px",
                }}
              >
                <span style={{ fontWeight: 600, color: "#ab8327", display: "flex", alignItems: "center", gap: "4px" }}>
                  <DollarSign size={13} /> {item.salaryLkr}
                </span>
                <span style={{ color: "var(--muted-ink)", fontSize: "11px" }}>{item.degree}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Spotlight on Selected Discipline */}
      {activeItem && (
        <section
          className="glass-panel"
          style={{
            padding: "30px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,249,235,0.85))",
            border: "1px solid rgba(250,225,154,0.8)",
            boxShadow: "0 16px 36px rgba(128,96,40,0.1)",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span className="eyebrow-pill" style={{ margin: 0 }}>
              <Sparkles size={14} /> {isSi ? "ක්ෂේත්‍රය පිළිබඳ ගැඹුරු විමසුම" : "In-Depth Field Spotlight"}
            </span>
            <span style={{ fontSize: "12px", color: "var(--muted-ink)" }}>
              {activeItem.degree}
            </span>
          </div>

          <h2 style={{ fontSize: "26px", fontWeight: 700, margin: "6px 0 2px", color: "var(--forest)" }}>
            {isSi ? activeItem.titleSi : activeItem.titleEn}
          </h2>
          <p style={{ fontSize: "15px", color: "#64748b", margin: "0 0 16px", fontWeight: 500 }}>
            {isSi ? activeItem.titleEn : activeItem.titleSi}
          </p>

          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#334155", marginBottom: "22px" }}>
            {isSi ? activeItem.summarySi : `${activeItem.summaryEn} ${activeItem.summarySi}`}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {/* Core Specialisations */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <BookOpen size={16} /> {isSi ? "ප්‍රධාන අධ්‍යයන විෂයයන් සහ මොඩියුල" : "Key Study Areas & Modules"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#475569" }}>
                {activeItem.specialisations.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Top Employers */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Briefcase size={16} /> {isSi ? "ශ්‍රී ලංකාවේ ප්‍රමුඛ සේවා යෝජකයින්" : "Top Employers in Sri Lanka"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#475569" }}>
                {activeItem.employers.map((emp) => (
                  <li key={emp}>{emp}</li>
                ))}
              </ul>
            </div>

            {/* Where to Study */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <GraduationCap size={16} /> {isSi ? "මෙම ක්ෂේත්‍රය පවතින විශ්වවිද්‍යාල" : "Universities Offering This Field"}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {activeItem.universities.map((uni) => (
                  uni.slug ? (
                    <Link
                      key={uni.name}
                      href={`/universities/${uni.slug}`}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(22, 101, 52, 0.08)",
                        color: "var(--forest)",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {uni.name} <ArrowRight size={11} />
                    </Link>
                  ) : (
                    <span
                      key={uni.name}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(0, 0, 0, 0.05)",
                        color: "#475569",
                        fontWeight: 500,
                      }}
                    >
                      {uni.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px dashed rgba(171, 131, 39, 0.3)", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href={`/build-your-path?career=engineer&field=${activeItem.id}#career-architect`}
              className="glass-button gold-glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "13.5px",
              }}
            >
              <span>
                {isSi
                  ? `${activeItem.titleSi} ඉලක්ක කරගත් Roadmap එක හදන්න`
                  : `Build Your Engineering Roadmap (${activeItem.titleEn})`}
              </span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      {/* Roadmap: How to Become an Engineer in Sri Lanka */}
      <section className="section-block">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 32px" }}>
          <span className="eyebrow-pill">
            <Compass size={14} /> {isSi ? "වෘත්තීය ගමන් මග" : "Professional Journey"}
          </span>
          <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "10px 0 8px", color: "var(--forest)" }}>
            {isSi ? "වරලත් ඉංජිනේරුවරයෙකු (CEng) වීමේ නිල පියවර" : "Pathway to Becoming a Chartered Engineer (CEng)"}
          </h2>
          <p className="muted" style={{ fontSize: "14.5px" }}>
            {isSi
              ? "ශ්‍රී ලංකා ඉංජිනේරු ආයතනය (IESL) සහ Washington Accord විසින් පිළිගත් නිල පියවරෙන් පියවර මාර්ගය."
              : "The official step-by-step pathway in Sri Lanka accredited by the Institution of Engineers, Sri Lanka (IESL) and the Washington Accord."}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>01</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              G.C.E. A/L Physical Science
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Combined Mathematics, Physics, and Chemistry or ICT. Pass all 3 subjects and obtain the required Z-score for state university admission or private degree entry.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>02</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              4-Year B.Sc. Engineering Degree
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Complete an IESL-recognized 4-year honours degree (Washington Accord accredited) including a 6-month industrial internship and a final-year research capstone.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>03</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              Associate Member (AMIE SL)
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Register as an Associate Member of the Institution of Engineers, Sri Lanka (AMIE SL) upon graduation, starting your documented professional logbook.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>04</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              Chartered Engineer (CEng / IntPE)
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Complete 3–4 years of mentored engineering practice, pass the IESL Professional Review Examination (PRE), and earn the globally recognized CEng credential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
