import type { ReactNode } from "react";

export function PageIntro({ badge, title, children }: { badge: ReactNode; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-intro">
      <div className="eyebrow-pill">{badge}</div>
      <h1>{title}</h1>
      <div className="intro-description">{children}</div>
    </header>
  );
}
