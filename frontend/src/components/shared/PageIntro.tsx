"use client";
import type { ReactNode } from "react";
import { localizeNode, useAppPreferences } from "@/components/layout/AppPreferences";
export function PageIntro({ badge, title, children }: { badge: ReactNode; title: ReactNode; children?: ReactNode }) {
  const { t } = useAppPreferences();
  return <header className="page-intro"><div className="eyebrow-pill">{localizeNode(badge, t)}</div><h1>{localizeNode(title, t)}</h1><div className="intro-description">{localizeNode(children, t)}</div></header>;
}
