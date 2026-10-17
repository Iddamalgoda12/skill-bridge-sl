import type { Metadata } from "next";
import { CareerDirectory } from "@/components/careers/CareerDirectory";
import { getCareers } from "@/lib/api/catalog";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {title:"Explore Careers"};
export default async function CareersPage(){return <div className="page-container careers-page"><CareerDirectory careers={await getCareers()}/><Footer/></div>;}
