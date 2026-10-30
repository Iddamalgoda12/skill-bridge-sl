import { Globe, BookOpen, GraduationCap, Building2, ExternalLink } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import type { OfficialLinkItem } from "@/lib/data/universityDetails";

export async function RuhunaOfficialLinks({
  links: propLinks,
  isRuhuna = true,
  universityName,
}: {
  links?: OfficialLinkItem[];
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const [t, locale] = await Promise.all([
    getTranslations("universityDetail.resourcesHub"),
    getLocale(),
  ]);
  const isSi = locale === "si";

  const ruhunaLinks = [
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

  if (isRuhuna && !propLinks) {
    return (
      <section id="resources" className="section-block ruhuna-resources-section">
        <div className="section-heading-centered">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-description muted">{t("description")}</p>
        </div>

        <div className="resources-links-grid">
          {ruhunaLinks.map((link) => {
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

  // Dynamic links for other universities
  const links = propLinks || [];
  const iconList = [Globe, BookOpen, GraduationCap, Building2];

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <section id="resources" className="section-block ruhuna-resources-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{isSi ? "නිල විශ්වවිද්‍යාල ප්‍රවේශ හා සේවා" : "OFFICIAL UNIVERSITY PORTALS"}</p>
        <h2 className="section-title">
          {isSi
            ? `${universityName || "විශ්වවිද්‍යාලයේ"} නිල සම්පත් සහ වෙබ් අඩවි`
            : `Official Resources & Portals of ${universityName || "the University"}`}
        </h2>
        <p className="section-description muted">
          {isSi
            ? "සනාතන සභා නිල වෙබ් අඩවිය, පීඨ පරිපාලන අංශ, ශිෂ්‍ය තොරතුරු පද්ධති සහ උසස් අධ්‍යාපන මාර්ගෝපදේශ සඳහා සෘජු ප්‍රවේශයන්."
            : "Direct links to the official senate website, faculty administration desks, student portals, and national higher education guidelines."}
        </p>
      </div>

      <div className="resources-links-grid">
        {links.map((link, idx) => {
          const Icon = iconList[idx % iconList.length];
          const domain = getDomain(link.url);

          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link-card glass-panel"
            >
              <div className="resource-icon-wrapper">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="resource-link-info">
                <div className="resource-title-row">
                  <h3>{link.label}</h3>
                  <ExternalLink size={14} className="external-arrow" aria-hidden="true" />
                </div>
                <p className="resource-desc muted">{link.description}</p>
                <span className="resource-url-tag">{domain}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
