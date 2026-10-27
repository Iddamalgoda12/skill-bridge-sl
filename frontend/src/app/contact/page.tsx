import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { ContactForm } from "@/components/forms/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("contact"))("meta") };
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const [{ topic }, t] = await Promise.all([searchParams, getTranslations("contact")]);
  return (
    <div className="page-container">
      <PageIntro badge={<><MessageCircle />{t("eyebrow")}</>} title={t("title")}>
        <p>{t("intro")}</p>
      </PageIntro>
      <ContactForm topic={topic === "scholarships" || topic === "feedback" ? topic : "guidance"} />
    </div>
  );
}
