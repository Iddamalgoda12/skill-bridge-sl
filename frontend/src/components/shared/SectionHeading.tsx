"use client";
import type { ReactNode } from "react";
import { useAppPreferences } from "@/components/layout/AppPreferences";
export function SectionHeading({ title, description, eyebrow, action }: { title: string; description?: string; eyebrow?: string; action?: ReactNode }) {
  const { t } = useAppPreferences();
  return <div className="section-heading"><div>{eyebrow && <p className="eyebrow">{t(`copy.${eyebrow}`, eyebrow)}</p>}<h2>{t(`copy.${title}`, title)}</h2>{description && <p className="muted">{t(`copy.${description}`, description)}</p>}</div>{action}</div>;
}
