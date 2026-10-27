import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ActionLink } from "@/components/shared/ActionLink";
import { TrendingViewport } from "./TrendingViewport";
import { sampleCareers } from "@/lib/data/careers";
import { localizeCareer, formatSalary, type LocalizedCareer } from "@/lib/i18n/catalog";

// Synchronized with main careers page: authentic Sri Lankan career paths
const featuredSlugs = [
  "engineer",
  "doctor",
  "tea-plantation-manager",
  "wildlife-conservationist",
  "marine-biologist",
  "ayurvedic-doctor",
  "accountant",
  "gemologist",
  "airline-pilot",
  "lawyer",
  "architect",
  "agricultural-scientist",
  "veterinarian",
  "dentist",
  "hospitality-manager",
  "air-traffic-controller",
];

function CareerCard({
  career,
  salaryText,
  duplicate = false,
}: {
  career: LocalizedCareer;
  salaryText: string;
  duplicate?: boolean;
}) {
  return (
    <Link
      href={`/careers/${career.slug}`}
      className="trending-card glass-panel"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
    >
      <div className="career-photo-crop">
        <Image
          src={career.image || "/images/careers/engineer.jpg"}
          alt={career.display.title}
          fill
          sizes="260px"
          style={{ objectFit: "cover" }}
        />
        <span className="trending-category">{career.display.category}</span>
      </div>
      <div className="trending-info">
        <div style={{ minWidth: 0, flex: 1 }}>
          <strong className="trending-name">{career.display.title}</strong>
          <p className="trending-salary">{salaryText}</p>
        </div>
        <span className="round-arrow" aria-hidden="true">
          <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}

export async function TrendingCareers() {
  const [t, catalog] = await Promise.all([
    getTranslations("home"),
    getTranslations("catalog"),
  ]);

  const careersList: LocalizedCareer[] = featuredSlugs
    .map((slug) => sampleCareers.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((career) => localizeCareer(catalog, career));

  return (
    <section className="trending-careers" aria-labelledby="trending-heading">
      <div className="trending-title">
        <h2 id="trending-heading">{t("trending")}</h2>
        <ActionLink href="/careers">{t("viewAll")}</ActionLink>
      </div>
      <TrendingViewport
        label={t("trending")}
        pauseLabel={t("pauseTrending")}
        playLabel={t("playTrending")}
      >
        <div className="trending-track">
          {careersList.map((career) => (
            <CareerCard
              career={career}
              salaryText={formatSalary(catalog, career)}
              key={career.slug}
            />
          ))}
          {careersList.map((career) => (
            <CareerCard
              career={career}
              salaryText={formatSalary(catalog, career)}
              duplicate
              key={`duplicate-${career.slug}`}
            />
          ))}
        </div>
      </TrendingViewport>
    </section>
  );
}
