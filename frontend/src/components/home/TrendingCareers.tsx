import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import assets from "@/lib/design/assets.json";
const trends = [
  { name: "Engineer", slug: "civil-engineer", courses: "120+", universities: 8, left: "-40.38%", width: "738.46%" },
  { name: "Doctor", slug: "doctor", courses: "95+", universities: 6, left: "-151.92%", width: "738.46%" },
  { name: "Accountant", slug: "accountant", courses: "70+", universities: 5, left: "-361.86%", width: "714.42%" },
  { name: "Designer", slug: "ui-ux-designer", courses: "60+", universities: 4, left: "-489.86%", width: "742.03%" },
  { name: "Teacher", slug: "school-teacher", courses: "50+", universities: 6, left: "-600.48%", width: "742.03%" },
];
export function TrendingCareers() {
  return <section className="trending-careers" aria-labelledby="trending-heading"><div className="trending-title"><h2 id="trending-heading">Trending career paths</h2><ActionLink href="/careers">View All</ActionLink></div><div className="trending-grid">{trends.map(career => <Link href={`/careers/${career.slug}`} className="trending-card glass-panel" key={career.slug}><div className="career-photo-crop">{/* Figma uses crops of this original image; preserve the supplied transforms. */}{/* eslint-disable-next-line @next/next/no-img-element */}<img src={assets.home.imgCareerPhotograph} alt="" style={{ left: career.left, width: career.width }} /></div><div className="trending-info"><div><strong>{career.name}</strong><p>{career.courses} courses <span>✦</span> {career.universities} universities</p></div><span className="round-arrow"><ArrowRight size={15} /></span></div></Link>)}</div></section>;
}
