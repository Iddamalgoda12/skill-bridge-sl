import type { Metadata } from "next";
import { Route } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { StudentPathDashboard } from "@/components/path/StudentPathDashboard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "My Career Path Dashboard - Milestones & Achievements | SkillBridge SL",
    description:
      "Track your active education and career roadmap milestones, complete actionable tasks, monitor your progress, and earn achievement badges.",
  };
}

export default async function MyPathPage() {
  const t = await getTranslations("myPath");

  return (
    <div className="page-container my-path-page">
      <PageIntro
        badge={
          <>
            <Route />
            {t("eyebrow")}
          </>
        }
        title={t("title")}
      >
        <p>{t("intro")}</p>
      </PageIntro>

      <StudentPathDashboard />
    </div>
  );
}
