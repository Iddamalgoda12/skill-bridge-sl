"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Sparkles, Route, Check, DollarSign, BookOpen, GraduationCap, Compass, Brain, TrendingUp } from "lucide-react";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";
import type { CareerDetail } from "@/lib/data/careerDetails";

interface CareerHeroProps {
  career: CareerDetail;
}

const CATEGORY_SI: Record<string, string> = {
  Technology: "තාක්ෂණය",
  Engineering: "ඉංජිනේරු",
  Healthcare: "සෞඛ්‍ය හා වෛද්‍ය",
  Business: "ව්‍යාපාර හා මූල්‍ය",
  Creative: "නිර්මාණශීලී හා කලා",
  Education: "අධ්‍යාපන හා විද්‍යා",
  Legal: "නීති ක්ෂේත්‍රය",
  Hospitality: "සංචාරක හා හෝටල්",
  "Skilled Trades": "ගුවන්, නාවික හා කාර්මික",
};

export function CareerHero({ career }: CareerHeroProps) {
  const locale = useLocale();
  const isSi = locale === "si";

  const navItems = [
    { href: "#overview", label: isSi ? "විස්තරය" : "Overview", icon: Compass },
    { href: "#salary", label: isSi ? "සාමාන්‍ය වැටුප" : "Sri Lankan Salary", icon: DollarSign },
    { href: "#education", label: isSi ? "O/L & A/L අවශ්‍යතා" : "O/L & A/L Requirements", icon: BookOpen },
    { href: "#universities", label: isSi ? "උපාධි & Universities" : "Degrees & Unis", icon: GraduationCap },
    { href: "#roadmap", label: isSi ? "වෘත්තීය පියවර" : "Career Roadmap", icon: Route },
    { href: "#skills", label: isSi ? "කුසලතා & ගැළපීම" : "Skills & Suitability", icon: Brain },
    { href: "#future", label: isSi ? "අනාගත ඉල්ලුම" : "Future Outlook", icon: TrendingUp },
  ];

  const primaryTitle = isSi && career.sinhalaTitle ? career.sinhalaTitle : career.title;
  const secondaryTitle = isSi ? career.title : career.sinhalaTitle;
  const categoryLabel = isSi && CATEGORY_SI[career.category] ? CATEGORY_SI[career.category] : career.category;

  return (
    <section className="career-hero-container">
      <div className="career-hero-grid">
        <div className="career-hero-content">
          <div className="career-hero-badges">
            <span className="career-category-pill">
              <Sparkles size={13} aria-hidden="true" />
              {categoryLabel}
            </span>
            <span className="career-salary-pill">
              <DollarSign size={13} aria-hidden="true" />
              {career.salary.midLevel.label}
            </span>
            <span className="career-verified-pill">
              <Check size={13} aria-hidden="true" />
              {isSi ? "තහවුරු කළ UGC / වෘත්තීය සුදුසුකම්" : "Verified SL UGC / Professional"}
            </span>
          </div>

          <h1 className="career-hero-title">
            {primaryTitle}
            {secondaryTitle && (
              <span className="career-sinhala-subtitle">{secondaryTitle}</span>
            )}
          </h1>

          <p className="career-hero-tagline">{career.tagline}</p>

          <div className="career-hero-actions">
            <SaveButton id={career.slug} title={career.title} />
            <ActionLink href="/build-your-path" icon={<Route size={16} />}>
              {isSi ? "මගේ Career Path එක හදන්න" : "Build My Career Path"}
            </ActionLink>
            <Link href="/universities" className="career-hero-secondary-btn">
              <GraduationCap size={16} aria-hidden="true" />
              {isSi ? "විශ්වවිද්‍යාල බලන්න" : "Explore Universities"}
            </Link>
          </div>

          {/* Quick Jump Navigation Bar */}
          <nav className="career-quick-nav" aria-label="Career sections">
            <span className="career-quick-nav-label">{isSi ? "පෙරළන්න:" : "Jump to:"}</span>
            <div className="career-quick-nav-pills">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.href} href={item.href} className="career-nav-pill">
                    <Icon size={12} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Hero Image Card */}
        <div className="career-hero-visual">
          <div className="career-hero-image-card glass-panel">
            <div className="career-image-wrapper">
              <Image
                src={career.heroImage}
                alt={career.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="career-cover-img"
              />
              <div className="career-image-overlay" />
            </div>

            <div className="career-image-floating-badge">
              <div className="floating-badge-icon">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="floating-badge-sub">{isSi ? "ප්‍රධාන උපාධි පාඨමාලාව" : "Top Degree Pathway"}</p>
                <p className="floating-badge-main">
                  {career.universities[0]?.degreeName.split("(")[0].trim() || (isSi ? "පිළිගත් උපාධිය" : "Recognized Bachelor's")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
