import { BookOpen } from "lucide-react";
import { PageIntro } from "@/components/shared/PageIntro";
import { CourseDirectory } from "@/components/universities/CourseDirectory";
import { getCourses } from "@/lib/api/catalog";
import Footer from "@/components/layout/Footer";
export const metadata={title:"Courses"};
export default async function CoursesPage(){return <div className="page-container"><PageIntro badge={<><BookOpen/>FIND YOUR NEXT STEP</>} title="Discover your course."><p>Explore study programmes and the universities that can help you get there.<br/>Confirm current entry criteria, programme availability and fees with each institution.</p></PageIntro><CourseDirectory courses={await getCourses()}/><Footer/></div>;}
