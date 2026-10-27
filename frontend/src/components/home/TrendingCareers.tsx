import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ActionLink } from "@/components/shared/ActionLink";
import { TrendingViewport } from "./TrendingViewport";
import assets from "@/lib/design/assets.json";

const trends = [
  { key: "engineer", slug: "civil-engineer", universities: 8, left: "-40.38%", width: "738.46%" },
  { key: "doctor", slug: "doctor", universities: 6, left: "-151.92%", width: "738.46%" },
  { key: "accountant", slug: "accountant", universities: 5, left: "-361.86%", width: "714.42%" },
  { key: "designer", slug: "ui-ux-designer", universities: 4, left: "-489.86%", width: "742.03%" },
  { key: "teacher", slug: "school-teacher", universities: 6, left: "-600.48%", width: "742.03%" },
] as const;

type Trend = (typeof trends)[number];

async function CareerCard({ career, duplicate = false }: { career: Trend; duplicate?: boolean }) {
  const t = await getTranslations("home.trendingCards");
  return (
    <Link href={`/careers/${career.slug}`} className="trending-card glass-panel" tabIndex={duplicate ? -1 : undefined} aria-hidden={duplicate || undefined}>
      <div className="career-photo-crop"><Image src={assets.home.imgCareerPhotograph} alt="" width={1920} height={2400} unoptimized style={{ left: career.left, width: career.width }} /></div>
      <div className="trending-info">
        <div>
          <strong>{t(`${career.key}.name`)}</strong>
          <p>{t(`${career.key}.focus`)}<span aria-hidden="true"> · </span>{t("universities", { count: career.universities })}</p>
        </div>
        <span className="round-arrow" aria-hidden="true"><ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}

export async function TrendingCareers() {
  const t = await getTranslations("home");
  return (
    <section className="trending-careers" aria-labelledby="trending-heading">
      <div className="trending-title">
        <h2 id="trending-heading">{t("trending")}</h2>
        <ActionLink href="/careers">{t("viewAll")}</ActionLink>
      </div>
      <TrendingViewport label={t("trending")} pauseLabel={t("pauseTrending")} playLabel={t("playTrending")}>
        <div className="trending-track">
          {trends.map((career) => <CareerCard career={career} key={career.slug} />)}
          {trends.map((career) => <CareerCard career={career} duplicate key={`duplicate-${career.slug}`} />)}
        </div>
      </TrendingViewport>
    </section>
  );
}
