import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function ActionLink({ href, children, icon, dark = false, className = "", arrow = true, external = false }: { href: string; children: ReactNode; icon?: ReactNode; dark?: boolean; className?: string; arrow?: boolean; external?: boolean }) {
  const classes = `glass-button ${dark ? "button-dark" : ""} ${className}`;
  const content = <>{icon}<span>{children}</span>{arrow && <ArrowRight size={17} className="action-arrow" />}</>;
  return (
    <Button asChild variant="glass" className={classes}>
      {external ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <Link href={href}>{content}</Link>}
    </Button>
  );
}
