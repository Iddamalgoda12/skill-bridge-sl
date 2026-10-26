import type { ReactNode } from "react";

export function SectionHeading({ title, description, eyebrow, action }: { title: ReactNode; description?: ReactNode; eyebrow?: ReactNode; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
