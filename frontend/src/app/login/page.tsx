import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AuthForm } from "@/components/forms/AuthForm";
import { safeRedirectPath } from "@/lib/auth/validation";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("auth.login"))("meta") };
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; changed?: string }> }) {
  const { next, changed } = await searchParams;
  return <div className="page-container auth-page"><AuthForm next={safeRedirectPath(next)} passwordChanged={changed === "1"} /></div>;
}
