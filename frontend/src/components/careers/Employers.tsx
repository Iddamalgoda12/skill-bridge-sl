import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DesignAsset } from "@/components/shared/DesignAsset";
import assets from "@/lib/design/assets.json";

// Company names are proper nouns; descriptions are translated.
const employers = [
  { id: "wso2", name: "WSO2", icon: assets.career.imgCompanyAbstractMark },
  { id: "99x", name: "99x", icon: assets.career.imgCompanyAbstractMark1 },
  { id: "sysco", name: "Sysco LABS", icon: assets.career.imgCompanyAbstractMark2 },
  { id: "ifs", name: "IFS", icon: assets.career.imgCompanyAbstractMark3 },
  { id: "virtusa", name: "Virtusa", icon: assets.career.imgCompanyAbstractMark4 },
  { id: "lseg", name: "LSEG", icon: assets.career.imgCompanyAbstractMark5 },
];

export async function Employers() {
  const t = await getTranslations("careerDetail.employers");
  return (
    <section className="section-block">
      <SectionHeading title={t("title")} description={t("description")} />
      <div className="grid-3 employer-grid">
        {employers.map(({ id, name, icon }) => (
          <article key={id} className="employer-card glass-panel">
            <div><DesignAsset src={icon} /><h3>{name}</h3></div>
            <p>{t(`items.${id}.description`)}</p>
            <small>{t(`items.${id}.detail`)}</small>
          </article>
        ))}
      </div>
      <p className="section-footnote">{t("footnote")}</p>
    </section>
  );
}
