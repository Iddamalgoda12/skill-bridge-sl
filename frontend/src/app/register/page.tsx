import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AuthForm } from "@/components/forms/AuthForm";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("auth.register"))("meta") };
}

export default function RegisterPage() {
  return <div className="page-container auth-page"><AuthForm register /></div>;
}
