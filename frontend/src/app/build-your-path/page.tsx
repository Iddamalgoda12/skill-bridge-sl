import type { Metadata } from "next";
import { Route, Check } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { ActionLink } from "@/components/shared/ActionLink";
import { JourneyIllustration } from "@/components/path/JourneyIllustration";
import { PathBuilder } from "@/components/path/PathBuilder";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCards } from "@/components/shared/ResourceCards";
import Footer from "@/components/layout/Footer";
import assets from "@/lib/design/assets.json";
export const metadata:Metadata={title:"Build Your Path"};
export default function BuildYourPathPage(){return <div className="page-container path-page"><section className="path-hero"><div><PageIntro badge={<><Route/>BUILD YOUR PATH</>} title={<>Your future,<br/><span>step by step.</span></>}><div className="gold-underline"/><p>Big dreams feel easier with a clear plan. Discover the subjects,<br/>courses and milestones that can take you there.</p></PageIntro><div className="hero-button-row"><ActionLink href="#stage-selection" icon={<Route size={18}/>}>Build my roadmap</ActionLink><ActionLink href="#roadmap-preview">See an example</ActionLink></div><p className="path-hero-note inline-icon"><Check size={15}/>Made for Sri Lankan students, from O/Ls to your first career.</p></div><JourneyIllustration/></section><PathBuilder/><section className="section-block"><SectionHeading title="Simple today. Flexible tomorrow." description="Your path is a guide, not a fixed rule. Revisit it as your interests and options change."/><ResourceCards items={[{title:"Discover what suits you",description:"Compare career goals and build confidence.",href:"/careers",icon:assets.path.imgVectorCompass1},{title:"Understand what is needed",description:"Know which subjects and entry rules to check.",href:"/universities",icon:assets.path.imgVectorShield,tone:"tone-mint"},{title:"Make progress visible",description:"Turn a big ambition into small next steps.",href:"/my-path",icon:assets.path.imgVectorCheck2,tone:"tone-lavender"}]}/></section><Footer note="Your future. Your path."/></div>;}
