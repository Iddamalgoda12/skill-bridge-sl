import { Globe, BookOpen, GraduationCap, Building2, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function RuhunaOfficialLinks() {
  const t = await getTranslations("universityDetail.resourcesHub");

  const links = [
    {
      id: "portal",
      icon: Globe,
      title: t("mainPortal"),
      desc: t("mainPortalDesc"),
      href: "https://www.ruh.ac.lk",
      urlLabel: "ruh.ac.lk",
    },
    {
      id: "library",
      icon: BookOpen,
      title: t("libraryPortal"),
      desc: t("libraryPortalDesc"),
      href: "https://lib.ruh.ac.lk",
      urlLabel: "lib.ruh.ac.lk",
    },
    {
      id: "ugc",
      icon: GraduationCap,
      title: t("ugcPortal"),
      desc: t("ugcPortalDesc"),
      href: "https://www.ugc.ac.lk",
      urlLabel: "ugc.ac.lk",
    },
    {
      id: "cinta",
      icon: Building2,
      title: t("cintaPortal"),
      desc: t("cintaPortalDesc"),
      href: "https://www.ruh.ac.lk",
      urlLabel: "cinta.ruh.ac.lk",
    },
  ];

  return (
    <section id="resources" className="section-block ruhuna-resources-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-description muted">{t("description")}</p>
      </div>

      <div className="resources-links-grid">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link-card glass-panel"
            >
              <div className="resource-icon-wrapper">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="resource-link-info">
                <div className="resource-title-row">
                  <h3>{link.title}</h3>
                  <ExternalLink size={14} className="external-arrow" aria-hidden="true" />
                </div>
                <p className="resource-desc muted">{link.desc}</p>
                <span className="resource-url-tag">{link.urlLabel}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

