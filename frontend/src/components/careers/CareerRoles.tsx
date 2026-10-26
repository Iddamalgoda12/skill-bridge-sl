import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { SectionHeading } from "@/components/shared/SectionHeading";
import assets from "@/lib/design/assets.json";

// Skill lists are technology names, identical in every language.
const roles = [
  { id: "frontend", skills: "HTML • CSS • React", photo: assets.career.imgGeneratedAiPhotoFrontEndDeveloper, icon: assets.career.imgVectorCode },
  { id: "backend", skills: "Java • Python • SQL", photo: assets.career.imgGeneratedAiPhotoBackEndEngineer, icon: assets.career.imgVectorLayers },
  { id: "fullstack", skills: "React • Node.js", photo: assets.career.imgGeneratedAiPhotoFullStackEngineer, icon: assets.career.imgVectorCompass1 },
  { id: "mobile", skills: "Flutter • Kotlin", photo: assets.career.imgGeneratedAiPhotoMobileAppDeveloper, icon: assets.career.imgVectorPhone },
  { id: "devops", skills: "AWS • Docker", photo: assets.career.imgGeneratedAiPhotoCloudDevOpsEngineer, icon: assets.career.imgVectorCloud },
  { id: "data", skills: "Python • ML", photo: assets.career.imgGeneratedAiPhotoDataAiEngineer, icon: assets.career.imgVectorBrain },
];

export async function CareerRoles() {
  const t = await getTranslations("careerDetail.roles");
  return (
    <section className="section-block">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid-3 role-grid">
        {roles.map(({ id, skills, photo, icon }) => (
          <article className="role-card glass-panel" key={id}>
            <div className="role-photo"><Image src={photo} alt="" fill sizes="150px" /></div>
            <div className="role-content">
              <DesignAsset src={icon} />
              <h3>{t(`items.${id}.title`)}</h3>
              <p className="muted">{t(`items.${id}.copy`)}</p>
              <strong>{skills}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
