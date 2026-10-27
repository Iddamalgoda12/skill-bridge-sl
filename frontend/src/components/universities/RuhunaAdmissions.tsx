import { GraduationCap, CheckCircle2, Award, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function RuhunaAdmissions() {
  const t = await getTranslations("universityDetail.admissionsGuide");

  return (
    <section id="admissions" className="section-block ruhuna-admissions-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-description muted">{t("description")}</p>
      </div>

      <div className="admissions-steps-grid">
        <div className="admission-step-card glass-panel">
          <div className="step-number-bubble">01</div>
          <div className="step-icon-box">
            <GraduationCap size={20} aria-hidden="true" />
          </div>
          <h3>{t("step1Title")}</h3>
          <p>{t("step1Desc")}</p>
          <div className="step-tag-row">
            <span className="small-pill">Physical Science</span>
            <span className="small-pill">Bio Science</span>
            <span className="small-pill">Technology</span>
            <span className="small-pill">Commerce</span>
            <span className="small-pill">Arts</span>
          </div>
        </div>

        <div className="admission-step-card glass-panel featured-step">
          <div className="step-number-bubble">02</div>
          <div className="step-icon-box">
            <Award size={20} aria-hidden="true" />
          </div>
          <h3>{t("step2Title")}</h3>
          <p>{t("step2Desc")}</p>
          <div className="quota-breakdown-box">
            <div className="quota-bar">
              <span className="quota-segment merit" style={{ width: "40%" }}>40% Merit</span>
              <span className="quota-segment district" style={{ width: "55%" }}>55% District</span>
              <span className="quota-segment special" style={{ width: "5%" }}>5%</span>
            </div>
            <small className="muted">National intake formula prescribed by UGC Sri Lanka</small>
          </div>
        </div>

        <div className="admission-step-card glass-panel">
          <div className="step-number-bubble">03</div>
          <div className="step-icon-box">
            <CheckCircle2 size={20} aria-hidden="true" />
          </div>
          <h3>{t("step3Title")}</h3>
          <p>{t("step3Desc")}</p>
          <div className="step-action-box">
            <a
              href="https://www.ugc.ac.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="ugc-portal-link"
            >
              <span>{t("ugcLinkText")}</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
