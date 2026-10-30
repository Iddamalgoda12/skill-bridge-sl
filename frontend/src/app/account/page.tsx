import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { UserRound, Route } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { ActionLink } from "@/components/shared/ActionLink";
import { ProfileForm } from "@/components/account/ProfileForm";
import { PasswordForm } from "@/components/account/PasswordForm";
import { LogoutButton } from "@/components/account/LogoutButton";
import { PersonalPathBanner } from "@/components/account/PersonalPathBanner";
import { getCurrentUser } from "@/lib/auth/session";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("account"))("meta"), robots: { index: false } };
}

export default async function AccountPage() {
  const user = await getCurrentUser();
  // The proxy only checks for a plausible cookie; this is the authoritative check.
  if (!user) redirect("/login?next=/account");

  const [t, locale] = await Promise.all([getTranslations("account"), getLocale()]);
  const isSi = locale === "si";

  return (
    <div className="page-container account-page">
      <PageIntro badge={<><UserRound />{t("eyebrow")}</>} title={t("greeting", { name: user.firstName })}>
        <p>{t("subtitle")}</p>
      </PageIntro>
      <div className="account-actions">
        <span className="eyebrow-pill">{t(`role.${user.role}`)}</span>
        <ActionLink href="/my-path" icon={<Route size={16} />}>
          {isSi ? "මගේ Roadmaps" : "My Roadmaps"}
        </ActionLink>
        <LogoutButton />
      </div>

      {/* Prominent Personal Path Section */}
      <div className="section-block" style={{ marginTop: "28px" }}>
        <PersonalPathBanner />
      </div>

      <div className="account-grid section-block">
        <ProfileForm user={user} />
        <PasswordForm />
      </div>
    </div>
  );
}
