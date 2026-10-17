import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { UniversityDirectory } from "@/components/universities/UniversityDirectory";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCards } from "@/components/shared/ResourceCards";
import Footer from "@/components/layout/Footer";
import { getUniversities } from "@/lib/api/catalog";
import assets from "@/lib/design/assets.json";
export const metadata: Metadata = { title: "Universities" };
export default async function UniversitiesPage({searchParams}: {searchParams: Promise<{compare?:string}>}) {
 const [universities,query]=await Promise.all([getUniversities(),searchParams]);
 return <div className="page-container universities-page"><PageIntro badge={<><Landmark/>SRI LANKA UNIVERSITIES</>} title="Discover university."><p>Explore government universities and private higher education institutes in Sri Lanka.<br/>Compare study programmes, locations, entry pathways and student opportunities.</p></PageIntro><UniversityDirectory universities={universities} initialCompare={query.compare==="true"}/><section className="section-block"><SectionHeading title="Plan your university journey" description="Helpful resources for students preparing for higher education."/><ResourceCards items={[{title:"University Admission Guide",description:"Understand A/L eligibility, applications and entry requirements.",href:"/universities/ruhuna#admissions",icon:assets.universities.imgIconGraduation1,tone:"tone-mint"},{title:"Scholarships & Funding",description:"Explore scholarships, student loans and financial support.",href:"/contact?topic=scholarships",icon:assets.universities.imgIconWallet1},{title:"Course & Career Guidance",description:"Discover which study pathways match your ambitions.",href:"/build-your-path",icon:assets.universities.imgIconCompass1,tone:"tone-ice"}]}/></section><Footer/></div>;
}
