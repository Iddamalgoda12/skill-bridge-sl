import type { Roadmap, RoadmapStage } from "@/types/catalog";
export const stages: { id: RoadmapStage; label: string; description: string; detail: string; tone: string }[] = [
 {id:"ol",label:"O/L Student",description:"Find your strengths",detail:"Subjects • first skills",tone:""},
 {id:"al",label:"A/L Student",description:"Shape your stream",detail:"Subjects • entry routes",tone:"tone-mint"},
 {id:"after-al",label:"After A/Ls",description:"Choose your next step",detail:"Degrees • alternatives",tone:"tone-lavender"},
 {id:"university",label:"University Student",description:"Prepare for industry",detail:"Projects • internships",tone:"tone-peach"},
];
export const goals = [
 {title:"Software Engineer",description:"Apps, systems & AI",focus:["Mathematics","English","ICT (optional)","Coding basics","Creative thinking"]},
 {title:"Doctor",description:"Health & care",focus:["Biology","Chemistry","English","Communication","Scientific thinking"]},
 {title:"Designer",description:"Creative problem-solving",focus:["Art & design","English","Digital tools","Creative thinking","Portfolio"]},
];
export function createSampleRoadmap(career: string, stage: RoadmapStage, focus: string[]): Roadmap {
 const technical=career==="Software Engineer";const medicine=career==="Doctor";
 const all=[
 {label:"NOW • O/Ls",title:technical?"Strengthen Maths + English":medicine?"Build your science foundation":"Explore visual ideas",description:technical?"Explore ICT and try a mini coding project.":medicine?"Focus on science, English and study habits.":"Practise drawing, observation and creative thinking."},
 {label:"NEXT • A/Ls",title:"Choose a suitable subject stream",description:technical?"Review Maths / ICT eligibility by course.":medicine?"Check the required science subjects for medicine.":"Review design programme entry requirements."},
 {label:"AFTER A/Ls",title:"Compare relevant degrees",description:technical?"CS, Software Engineering or IT routes.":medicine?"Review recognised medical programmes and entry criteria.":"Compare design degrees and portfolio requirements."},
 {label:"CAREER LAUNCH",title:technical?"Build projects and apply":medicine?"Complete training and registration":"Build a portfolio and apply",description:technical?"GitHub portfolio, internships, first role.":medicine?"Confirm supervised practice and registration requirements.":"Personal projects, internships and your first role."},
 ];
 const offset={ol:0,al:1,"after-al":2,university:3}[stage];
 return {id:`${career.toLowerCase().replaceAll(" ","-")}-${stage}`,career,stage,focus,milestones:all.slice(offset)};
}
