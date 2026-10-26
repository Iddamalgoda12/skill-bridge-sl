"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LoaderCircle, LogOut } from "lucide-react";
import { apiRequest } from "@/lib/api/client";

export function LogoutButton() {
  const t = useTranslations("account");
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await apiRequest("/api/auth/logout", { method: "POST" });
    } finally {
      // Even if the request failed, leave the protected page; the proxy re-checks the session.
      router.push("/");
      router.refresh();
    }
  }

  return (
    <button type="button" className="glass-button" onClick={logout} disabled={pending}>
      {pending ? <LoaderCircle size={17} className="loading-icon" aria-hidden="true" /> : <LogOut size={17} aria-hidden="true" />}
      {t("logout")}
    </button>
  );
}
