import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignAsset } from "./DesignAsset";
export function ResourceCards({ items }: { items: { title: string; description: string; href: string; icon: string; tone?: string }[] }) {
  return <div className="grid-3">{items.map(item => <Link href={item.href} key={item.title} className="resource-card glass-panel"><span className={`icon-bubble ${item.tone || ""}`}><DesignAsset src={item.icon} /></span><div><h3>{item.title}</h3><p className="muted">{item.description}</p></div><ArrowRight size={18} className="resource-arrow" /></Link>)}</div>;
}
