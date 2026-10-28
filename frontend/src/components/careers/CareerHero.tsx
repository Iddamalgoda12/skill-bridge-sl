import Link from "next/link";
import Image from "next/image";
import { Sparkles, Route, Check, DollarSign, BookOpen, GraduationCap, Compass, Brain, TrendingUp } from "lucide-react";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";
import type { CareerDetail } from "@/lib/data/careerDetails";

interface CareerHeroProps {
  career: CareerDetail;
}

export function CareerHero({ career }: CareerHeroProps) {
  const navItems = [
    { href: "#overview", label: "Overview", icon: Compass },
    { href: "#salary", label: "Sri Lankan Salary", icon: DollarSign },
    { href: "#education", label: "O/L & A/L Requirements", icon: BookOpen },
    { href: "#universities", label: "Degrees & Unis", icon: GraduationCap },
    { href: "#roadmap", label: "Career Roadmap", icon: Route },
    { href: "#skills", label: "Skills & Suitability", icon: Brain },
    { href: "#future", label: "Future Outlook", icon: TrendingUp },
  ];

  return (
    <section className="career-hero-container">
      <div className="career-hero-grid">
        <div className="career-hero-content">
          <div className="career-hero-badges">
            <span className="career-category-pill">
              <Sparkles size={13} aria-hidden="true" />
              {career.category}
            </span>
            <span className="career-salary-pill">
              <DollarSign size={13} aria-hidden="true" />
              {career.salary.midLevel.label}
            </span>
            <span className="career-verified-pill">
              <Check size={13} aria-hidden="true" />
              Verified SL UGC / Professional
            </span>
          </div>

          <h1 className="career-hero-title">
            {career.title}
            {career.sinhalaTitle && (
              <span className="career-sinhala-subtitle">{career.sinhalaTitle}</span>
            )}
          </h1>

          <p className="career-hero-tagline">{career.tagline}</p>

          <div className="career-hero-actions">
            <SaveButton id={career.slug} title={career.title} />
            <ActionLink href="/build-your-path" icon={<Route size={16} />}>
              Build My Career Path
            </ActionLink>
            <Link href="/universities" className="career-hero-secondary-btn">
              <GraduationCap size={16} aria-hidden="true" />
              Explore Universities
            </Link>
          </div>

          {/* Quick Jump Navigation Bar */}
          <nav className="career-quick-nav" aria-label="Career sections">
            <span className="career-quick-nav-label">Jump to:</span>
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
                <p className="floating-badge-sub">Top Degree Pathway</p>
                <p className="floating-badge-main">
                  {career.universities[0]?.degreeName.split("(")[0].trim() || "Recognized Bachelor's"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
