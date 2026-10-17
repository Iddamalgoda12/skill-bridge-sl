"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { localizeNode, useAppPreferences } from "@/components/layout/AppPreferences";
export function ActionLink({ href, children, icon, dark = false, className = "", arrow = true }: { href: string; children: ReactNode; icon?: ReactNode; dark?: boolean; className?: string; arrow?: boolean }) {
  const { t } = useAppPreferences();
  return <Button asChild className={`glass-button ${dark ? "button-dark" : ""} ${className}`}><Link href={href}>{icon}<span>{localizeNode(children, t)}</span>{arrow && <ArrowRight size={17} className="action-arrow" />}</Link></Button>;
}
