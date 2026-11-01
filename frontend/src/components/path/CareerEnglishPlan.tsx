import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap, Languages, type LucideIcon } from "lucide-react";

type Props = {
  careerTitle: string;
  careerSlug: string;
  careerCategory: string;
  isSinhala: boolean;
};

type EnglishProvider = {
  name: string;
  course: string;
  description: string;
  descriptionSi: string;
  href: string;
  secondaryHref?: string;
  linkLabel?: string;
  secondaryLabel?: string;
  icon: LucideIcon;
  tone: string;
};

function practiceFor(slug: string, category: string, isSi: boolean) {
  if (isSi) {
    if (category === "Healthcare") return "රෝගීන් සමඟ කතා කිරීම, ප්‍රතිකාර පැහැදිලි කිරීම සහ කණ්ඩායම් handover පුහුණු කරන්න.";
    if (category === "Legal") return "සේවාදායක සාකච්ඡා, නඩු සාරාංශ සහ වෘත්තීය ඊමේල් පුහුණු කරන්න.";
    if (category === "Business") return "ඉදිරිපත් කිරීම්, රැස්වීම්, පාරිභෝගික ඇමතුම් සහ වාර්තා පුහුණු කරන්න.";
    if (category === "Hospitality") return "අමුත්තන් පිළිගැනීම, සේවා විස්තර කිරීම සහ ඉල්ලීම් විසඳීම පුහුණු කරන්න.";
    if (slug === "teacher" || slug === "university-lecturer") return "පාඩමක් පැහැදිලි කිරීම, උපදෙස් දීම සහ ප්‍රතිචාර ලබා දීම පුහුණු කරන්න.";
    if (category === "Engineering") return "ඔබේ සැලසුම් තීරණ පැහැදිලි කිරීම, ව්‍යාපෘතියක් ඉදිරිපත් කිරීම සහ තාක්ෂණික යාවත්කාලීන ලිවීම පුහුණු කරන්න.";
    return "ඔබේ වැඩ ගැන හඳුන්වා දීම, ව්‍යාපෘතියක් පැහැදිලි කිරීම සහ රැකියා සම්මුඛ පරීක්ෂණවලට පිළිතුරු දීම පුහුණු කරන්න.";
  }

  if (category === "Healthcare") return "Practise patient conversations, explaining care clearly, and concise team handovers.";
  if (category === "Legal") return "Practise client interviews, structured case summaries, and clear professional emails.";
  if (category === "Business") return "Practise presentations, meeting contributions, customer calls, and concise reports.";
  if (category === "Hospitality") return "Practise welcoming guests, explaining services, and resolving requests politely.";
  if (slug === "teacher" || slug === "university-lecturer") return "Practise giving instructions, explaining a lesson, and offering useful feedback.";
  if (category === "Engineering") return "Practise explaining a design decision, presenting a project, and writing a short technical update.";
  return "Practise introducing your work, explaining a project, asking clear questions, and answering interview questions.";
}

const providers: EnglishProvider[] = [
  {
    name: "British Council Sri Lanka",
    course: "English classes for ages 11–17 and adults",
    description: "Choose the age-appropriate course. Adult modules span A1–C1 and include work and study options; a level check helps match your starting point.",
    descriptionSi: "වයසට ගැළපෙන පාඨමාලාව තෝරන්න. වැඩිහිටි මොඩියුල A1–C1 මට්ටම් ආවරණය කරයි; මට්ටම් පරීක්ෂාවකින් සුදුසු ආරම්භක මට්ටම හඳුනාගත හැකිය.",
    href: "https://www.britishcouncil.lk/english/courses-kids-teens",
    secondaryHref: "https://www.britishcouncil.lk/english/courses-adults/classes/programmes-pricing",
    linkLabel: "Teen courses (11–17)",
    secondaryLabel: "Adult English (18+)",
    icon: Languages,
    tone: "english-provider-green",
  },
  {
    name: "Open University of Sri Lanka",
    course: "Certificate in English for General Communication",
    description: "A one-year foundation course for learners over age 16, covering speaking, listening, reading, writing, and introductory workplace English. Check the next intake.",
    descriptionSi: "වයස 16ට වැඩි ඉගෙනුම ලබන්නන් සඳහා වසරක මූලික පාඨමාලාවකි. කථනය, සවන්දීම, කියවීම, ලිවීම සහ රැකියා ස්ථානයේ මූලික ඉංග්‍රීසි ආවරණය කරයි. ඊළඟ බඳවාගැනීම බලන්න.",
    href: "https://ou.ac.lk/programme/certificate-in-english-for-general-communication/",
    linkLabel: "Official course details",
    icon: Languages,
    tone: "english-provider-blue",
  },
  {
    name: "Open University of Sri Lanka",
    course: "Short Course in English for Employment",
    description: "A 20-week, 80-hour course designed for job seekers, employees, and entrepreneurs. Check the official page for the next intake and current fee.",
    descriptionSi: "රැකියා සොයන අයට, සේවකයන්ට සහ ව්‍යවසායකයන්ට සකස් කළ සති 20ක, පැය 80ක පාඨමාලාවකි. ඊළඟ බඳවාගැනීම සහ වත්මන් ගාස්තුව නිල පිටුවෙන් බලන්න.",
    href: "https://ou.ac.lk/programme/short-course-in-english-for-employment/",
    linkLabel: "Official course details",
    icon: Briefcase,
    tone: "english-provider-violet",
  },
  {
    name: "University of Colombo · Extension Courses in English",
    course: "Diploma in Advanced English · 1 year",
    description: "A one-year weekend diploma for adults developing English for professional demands. Check current eligibility and the next application period.",
    descriptionSi: "වෘත්තීය අවශ්‍යතා සඳහා ඉංග්‍රීසි දියුණු කිරීමට වැඩිහිටියන්ට වසරක සති අන්ත ඩිප්ලෝමාවකි. සුදුසුකම් සහ ඊළඟ අයදුම් කාලය බලන්න.",
    href: "https://arts.cmb.ac.lk/diploma-courses-english/",
    linkLabel: "Official course details",
    icon: GraduationCap,
    tone: "english-provider-gold",
  },
];

export function CareerEnglishPlan({ careerTitle, careerSlug, careerCategory, isSinhala }: Props) {
  const practice = practiceFor(careerSlug, careerCategory, isSinhala);

  return (
    <section className="career-english-plan" aria-labelledby="career-english-title">
      <div className="career-english-heading">
        <span className="career-english-icon"><Languages size={21} /></span>
        <div>
          <span className="career-english-eyebrow">
            {isSinhala ? "සෑම වෘත්තියකටම අමතර ශක්තියක්" : "A skill to grow alongside your career"}
          </span>
          <h4 id="career-english-title">
            {isSinhala ? `${careerTitle} සඳහා ඉංග්‍රීසි සන්නිවේදනය` : `Build English for ${careerTitle}`}
          </h4>
          <p>
            {isSinhala
              ? "ඔබට අවශ්‍ය මට්ටම රැකියාව අනුව වෙනස් වේ. ඔබේ වත්මන් මට්ටමෙන් පටන්ගෙන, වෘත්තියට අදාළ ඉංග්‍රීසි දිනපතා පුහුණු කරන්න."
              : "The level you need depends on the role. Start at your current level and practise the English you will use in your field."}
          </p>
        </div>
      </div>

      <div className="career-english-practice">
        <strong>{isSinhala ? "ඔබේ වෘත්තියට ගැළපෙන පුහුණුව" : "Practise for this career"}</strong>
        <span>{practice}</span>
      </div>

      <div className="career-english-providers">
        {providers.map(({ name, course, description, descriptionSi, href, secondaryHref, linkLabel, secondaryLabel, icon: Icon, tone }) => (
          <article className={`career-english-provider ${tone}`} key={course}>
            <span className="provider-icon"><Icon size={17} /></span>
            <div className="provider-copy">
              <span className="provider-name">{name}</span>
              <strong>{course}</strong>
              <p>{isSinhala ? descriptionSi : description}</p>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {isSinhala
                  ? (secondaryHref ? "යෞවන පාඨමාලා (11–17)" : "නිල පාඨමාලා තොරතුරු")
                  : linkLabel || "Official course details"}
                <ArrowUpRight size={14} />
              </Link>
              {secondaryHref && (
                <Link href={secondaryHref} target="_blank" rel="noopener noreferrer">
                  {isSinhala ? "වැඩිහිටි පාඨමාලා (18+)" : secondaryLabel}
                  <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {(careerSlug === "teacher" || careerSlug === "university-lecturer") && (
        <p className="career-english-teaching-note">
          {isSinhala
            ? "ඉංග්‍රීසි ගුරුවරුන්ට හෝ ඉංග්‍රීසි මාධ්‍යයෙන් උගන්වන අයට: University of Colombo හි English for Teachers / English Medium Instruction ඩිප්ලෝමා ද බලන්න."
            : "For future English teachers or teachers who teach in English: the University of Colombo also lists dedicated Diplomas in English for Teachers and English Medium Instruction. Check the entry requirements before applying."}{" "}
          <Link href="https://arts.cmb.ac.lk/diploma-courses-english/" target="_blank" rel="noopener noreferrer">
            {isSinhala ? "සුදුසුකම් බලන්න" : "Check eligibility"}<ArrowUpRight size={13} />
          </Link>
        </p>
      )}
    </section>
  );
}
