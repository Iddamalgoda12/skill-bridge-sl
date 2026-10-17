import { SectionHeading } from "@/components/shared/SectionHeading";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
const employers=[
 ["WSO2","API management, identity & integration","Product engineering / enterprise software",assets.career.imgCompanyAbstractMark],
 ["99x","Digital product engineering for clients","Product design / platform development",assets.career.imgCompanyAbstractMark1],
 ["Sysco LABS","Technology for global foodservice supply chains","Cloud, data & logistics platforms",assets.career.imgCompanyAbstractMark2],
 ["IFS","Enterprise cloud software for industries","ERP, service and asset management",assets.career.imgCompanyAbstractMark3],
 ["Virtusa","Digital engineering and IT consulting","Software delivery and modernization",assets.career.imgCompanyAbstractMark4],
 ["LSEG","Financial markets data and technology","Trading, analytics and data systems",assets.career.imgCompanyAbstractMark5],
];
export function Employers(){return <section className="section-block"><SectionHeading title="Companies where these skills matter" description="Example software employers and the kind of technology they work on — not live job listings."/><div className="grid-3 employer-grid">{employers.map(([name,description,detail,icon])=><article key={name} className="employer-card glass-panel"><div><DesignAsset src={icon}/><h3>{name}</h3></div><p>{description}</p><small>{detail}</small></article>)}</div><p className="section-footnote">Companies are shown as career examples; hiring, salaries and entry-level opportunities are not implied.</p></section>;}
