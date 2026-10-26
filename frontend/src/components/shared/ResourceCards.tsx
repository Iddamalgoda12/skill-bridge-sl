import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignAsset } from "./DesignAsset";

type Item = { title: string; description: string; href: string; icon: string; tone?: string; external?: boolean };

export function ResourceCards({ items }: { items: Item[] }) {
  return (
    <div className="grid-3">
      {items.map((item) => {
        const body = (
          <>
            <span className={`icon-bubble ${item.tone || ""}`}><DesignAsset src={item.icon} /></span>
            <div><h3>{item.title}</h3><p className="muted">{item.description}</p></div>
            <ArrowRight size={18} className="resource-arrow" aria-hidden="true" />
          </>
        );
        return item.external ? (
          <a href={item.href} key={item.title} className="resource-card glass-panel" target="_blank" rel="noopener noreferrer">{body}</a>
        ) : (
          <Link href={item.href} key={item.title} className="resource-card glass-panel">{body}</Link>
        );
      })}
    </div>
  );
}
