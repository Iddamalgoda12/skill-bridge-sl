import { MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { ContactForm } from "@/components/forms/ContactForm";
import Footer from "@/components/layout/Footer";
export const metadata={title:"Personal Guidance"};
export default async function ContactPage({searchParams}:{searchParams:Promise<{topic?:string}>}){const {topic}=await searchParams;return <div className="page-container"><PageIntro badge={<><MessageCircle/>PERSONAL GUIDANCE</>} title="Have any questions?"><p>Share where you are in your journey and what you’d like to explore.</p></PageIntro><ContactForm topic={topic==="scholarships"?topic:"guidance"}/><Footer/></div>;}
