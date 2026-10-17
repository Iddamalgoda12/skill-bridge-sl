import Image from "next/image";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { SectionHeading } from "@/components/shared/SectionHeading";
import assets from "@/lib/design/assets.json";
const roles=[
 ["Front-End Developer","Web experiences people love","HTML • CSS • React",assets.career.imgGeneratedAiPhotoFrontEndDeveloper,assets.career.imgVectorCode],
 ["Back-End Engineer","APIs, services & databases","Java • Python • SQL",assets.career.imgGeneratedAiPhotoBackEndEngineer,assets.career.imgVectorLayers],
 ["Full-Stack Engineer","Build connected products","React • Node.js",assets.career.imgGeneratedAiPhotoFullStackEngineer,assets.career.imgVectorCompass1],
 ["Mobile App Developer","Create apps for everyday life","Flutter • Kotlin",assets.career.imgGeneratedAiPhotoMobileAppDeveloper,assets.career.imgVectorPhone],
 ["Cloud / DevOps Engineer","Ship and run systems at scale","AWS • Docker",assets.career.imgGeneratedAiPhotoCloudDevOpsEngineer,assets.career.imgVectorCloud],
 ["Data / AI Engineer","Turn data into smart systems","Python • ML",assets.career.imgGeneratedAiPhotoDataAiEngineer,assets.career.imgVectorBrain],
];
export function CareerRoles(){return <section className="section-block"><SectionHeading title="What jobs can you do?" description="Six directions you can explore after learning software engineering."/><div className="grid-3 role-grid">{roles.map(([title,copy,skills,photo,icon])=><article className="role-card glass-panel" key={title}><div className="role-photo"><Image src={photo} alt={title} fill sizes="150px"/></div><div className="role-content"><DesignAsset src={icon}/><h3>{title}</h3><p className="muted">{copy}</p><strong>{skills}</strong></div></article>)}</div></section>;}
