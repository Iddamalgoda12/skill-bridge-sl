"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { useAppPreferences } from "@/components/layout/AppPreferences";
import assets from "@/lib/design/assets.json";

const trends = [
  { name: "Engineer", slug: "civil-engineer", focus: "Design & technology", universities: 8, left: "-40.38%", width: "738.46%" },
  { name: "Doctor", slug: "doctor", focus: "Health & science", universities: 6, left: "-151.92%", width: "738.46%" },
  { name: "Accountant", slug: "accountant", focus: "Business & finance", universities: 5, left: "-361.86%", width: "714.42%" },
  { name: "Designer", slug: "ui-ux-designer", focus: "Creative technology", universities: 4, left: "-489.86%", width: "742.03%" },
  { name: "Teacher", slug: "school-teacher", focus: "Education & learning", universities: 6, left: "-600.48%", width: "742.03%" },
];

function CareerCard({ career, duplicate = false }: { career: typeof trends[number]; duplicate?: boolean }) {
  return <Link href={`/careers/${career.slug}`} className="trending-card glass-panel" tabIndex={duplicate ? -1 : undefined} aria-hidden={duplicate || undefined}>
    <div className="career-photo-crop"><Image src={assets.home.imgCareerPhotograph} alt="" width={1920} height={2400} unoptimized style={{ left: career.left, width: career.width }} /></div>
    <div className="trending-info"><div><strong>{career.name}</strong><p>{career.focus}<span aria-hidden="true"> · </span>{career.universities} universities</p></div><span className="round-arrow" aria-hidden="true"><ArrowRight size={15} /></span></div>
  </Link>;
}

export function TrendingCareers() {
  const { t } = useAppPreferences();
  return <section className="trending-careers" aria-labelledby="trending-heading">
    <div className="trending-title"><h2 id="trending-heading">{t("home.trending", "Trending career paths")}</h2><ActionLink href="/careers">{t("home.viewAll", "View all")}</ActionLink></div>
    <div className="trending-viewport" role="region" aria-label={t("home.trending", "Trending career paths")}>
      <div className="trending-track">{trends.map(career => <CareerCard career={career} key={career.slug} />)}{trends.map(career => <CareerCard career={career} duplicate key={`duplicate-${career.slug}`} />)}</div>
    </div>
  </section>;
}
