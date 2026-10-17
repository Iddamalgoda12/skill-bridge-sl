import { Route } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { SavedPaths } from "@/components/path/SavedPaths";
import Footer from "@/components/layout/Footer";
export const metadata={title:"My Path"};
export default function MyPathPage(){return <div className="page-container"><PageIntro badge={<><Route/>YOUR JOURNEY</>} title="Your future, in one place."><p>Keep your favourite careers, universities and next steps together.</p></PageIntro><SavedPaths/><Footer/></div>;}
