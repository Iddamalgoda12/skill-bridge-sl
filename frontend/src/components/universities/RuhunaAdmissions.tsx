import { GraduationCap, CheckCircle2, Award, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { AdmissionsData } from "@/lib/data/universityDetails";

export async function RuhunaAdmissions({
  admissions: propAdmissions,
  isRuhuna = true,
  universityName,
}: {
  admissions?: AdmissionsData;
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const t = await getTranslations("universityDetail.admissionsGuide");

  if (isRuhuna && !propAdmissions) {
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

  // Dynamic admissions for other universities
  const adm = propAdmissions;
  if (!adm) return null;

  return (
    <section id="admissions" className="section-block ruhuna-admissions-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{adm.eyebrow || "ADMISSIONS GUIDANCE"}</p>
        <h2 className="section-title">{adm.title}</h2>
        <p className="section-description muted">{adm.description}</p>
      </div>

      <div className="admissions-steps-grid">
        <div className="admission-step-card glass-panel">
          <div className="step-number-bubble">01</div>
          <div className="step-icon-box">
            <GraduationCap size={20} aria-hidden="true" />
          </div>
          <h3>{adm.step1Title}</h3>
          <p>{adm.step1Desc}</p>
          {adm.step1Tags && adm.step1Tags.length > 0 && (
            <div className="step-tag-row">
              {adm.step1Tags.map((tag) => (
                <span className="small-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="admission-step-card glass-panel featured-step">
          <div className="step-number-bubble">02</div>
          <div className="step-icon-box">
            <Award size={20} aria-hidden="true" />
          </div>
          <h3>{adm.step2Title}</h3>
          <p>{adm.step2Desc}</p>
          <div className="quota-breakdown-box">
            <div className="quota-bar">
              <span className="quota-segment merit" style={{ width: adm.isGovernment ? "40%" : "50%" }}>
                {adm.quotaMerit}
              </span>
              <span className="quota-segment district" style={{ width: adm.isGovernment ? "45%" : "30%" }}>
                {adm.quotaDistrict}
              </span>
              <span className="quota-segment special" style={{ width: adm.isGovernment ? "15%" : "20%" }}>
                {adm.quotaSpecial}
              </span>
            </div>
            {adm.quotaNote && <small className="muted">{adm.quotaNote}</small>}
          </div>
        </div>

        <div className="admission-step-card glass-panel">
          <div className="step-number-bubble">03</div>
          <div className="step-icon-box">
            <CheckCircle2 size={20} aria-hidden="true" />
          </div>
          <h3>{adm.step3Title}</h3>
          <p>{adm.step3Desc}</p>
          <div className="step-action-box">
            <a
              href={adm.portalUrl || "https://www.ugc.ac.lk"}
              target="_blank"
              rel="noopener noreferrer"
              className="ugc-portal-link"
            >
              <span>{adm.portalLabel || "Visit Official Admissions Portal"}</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
