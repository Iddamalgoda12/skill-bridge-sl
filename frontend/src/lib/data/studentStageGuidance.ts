// Stage-specific (O/L and A/L) actions, tips, and career-specific tasks for Sri Lankan students.
// Sources: Department of Examinations (doenets.lk), Ministry of Education (e-thaksalawa), UGC admission
// handbooks (ugc.ac.lk), University of Moratuwa aptitude-test notices (uom.lk), and professional bodies.
// Dates, fees, and cut-offs change every year, so tasks send students to the official page to confirm them.

import type { GeneratedMilestone, GeneratedTask } from "./pathEngine";
import { CAREER_ACTIONS_SI } from "./studentStageGuidance.si";

type Pair = [title: string, notes: string];

interface CareerStageActions {
  ol: Pair[];
  al: Pair[];
  tip: string;
}

const toTasks = (pairs: Pair[]): GeneratedTask[] => pairs.map(([title, notes]) => ({ title, notes }));

// ─── Career-specific actions ─────────────────────────────────────────────────

const CAREER_ACTIONS: Record<string, CareerStageActions> = {
  doctor: {
    ol: [
      ["Aim for 'A' passes in Science, Mathematics, and English; Biological Science A/L streams are very competitive", "Most Bio-stream schools pick Grade 12 students on O/L results, so a strong Science grade matters."],
      ["Join a first-aid or health group (St John Ambulance, Red Cross, school Health Club)", "Early exposure to patient care and teamwork. Many first-aid courses are open to school students."],
      ["Read the SLMC and Faculty of Medicine pages to understand the MBBS route and internship", "Know the path early: 5-year MBBS, then a 1-year internship, then SLMC registration."],
    ],
    al: [
      ["Study Biology, Chemistry, and Physics with a weekly timed past-paper routine", "Medical selection is by Z-score, so consistent past-paper practice matters more than reading volume."],
      ["Check last year's Z-score cut-off for Medicine in your district on the UGC website", "District cut-offs differ widely; Colombo is the most competitive. Plan a realistic backup list."],
      ["Research non-medicine alternatives: Dental Surgery, Nursing, Pharmacy, Physiotherapy, Medical Laboratory Science, Ayurveda", "Medicine admits only a small fraction of Bio-stream students; a backup degree list protects you."],
    ],
    tip: "Z-scores for Medicine depend on the district and subject-wise competition. Keep a ranked backup list of health degrees before the UGC application opens.",
  },
  dentist: {
    ol: [
      ["Build strong Science and Mathematics results; dentistry uses the same Bio-stream Z-score route as Medicine", "Fine motor skills help too: drawing, model building, and craft activities."],
      ["Visit a dental clinic or read about the BDS programme at the Faculty of Dental Sciences", "Understand daily work and the 5-year BDS course."],
    ],
    al: [
      ["Prioritise Biology and Chemistry marks; dental seats follow Medicine's Z-score pattern", "Check UGC cut-offs for Dental Surgery each year."],
      ["Keep Medicine, Dental Surgery, Pharmacy, and Allied Health in your UGC preference order based on last year's cut-offs", "The UGC handbook lets you list many degree programmes in order of preference."],
    ],
    tip: "Dental Surgery is offered at very few state faculties, so competition is high. Plan allied health backups early.",
  },
  veterinarian: {
    ol: [
      ["Focus on Science and Biology-related topics; volunteer or shadow at an animal shelter or vet clinic if possible", "Practical contact with animals confirms your interest before A/L."],
      ["Read about the Veterinary Science degree at the Faculty of Veterinary Medicine and Animal Science, University of Peradeniya", "Check entry requirements and Z-score ranges."],
    ],
    al: [
      ["Study Biology, Chemistry, and Physics (Bio stream) with regular past papers", "Veterinary Science is admitted via UGC Z-score."],
      ["Shortlist agricultural-science and animal-science degrees as alternatives", "These share much of the same subject knowledge."],
    ],
    tip: "Use school holidays for animal-care volunteering; it helps with motivation and with later interviews.",
  },
  pharmacist: {
    ol: [
      ["Prioritise Science and Mathematics credits (chemistry-heavy topics matter)", "Pharmacy relies on accuracy: dosing, units, and calculations."],
    ],
    al: [
      ["Study Chemistry carefully alongside Biology (or Physics/Maths per the programme's rules)", "Check which A/L subject combinations the pharmacy degree accepts in the UGC handbook."],
      ["Learn how pharmacy registration works and what the degree internship involves", "Confirm the current process with the relevant Sri Lankan pharmacy authority."],
    ],
    tip: "Read the UGC handbook entry for Pharmacy, because accepted subject combinations can differ across universities.",
  },
  physiotherapist: {
    ol: [
      ["Build Science and Biology foundations; join school sports and first-aid groups", "Understanding of the human body and movement starts early."],
    ],
    al: [
      ["Bio-stream results drive entry into state Physiotherapy degrees; check current cut-offs", "UGC handbook lists the accepted degree programmes and subject requirements."],
      ["Look at private and foreign physiotherapy degrees as a backup route", "Check that the programme is recognised before applying."],
    ],
    tip: "Volunteer at a rehabilitation or sports-injury setting during A/L holidays if you can.",
  },
  nurse: {
    ol: [
      ["Secure credits in Science, Mathematics, and English", "These are normally the minimum entry for any nursing route."],
      ["Learn about the Ministry of Health nursing-school intake and the BSc Nursing degrees at state universities", "Intake rules change; watch for official gazette notices and the UGC handbook."],
    ],
    al: [
      ["Study Biology and Chemistry well; Bio stream gives access to both degree and diploma pathways", "Also check whether other streams qualify in the current intake notice."],
      ["Watch for Ministry of Health nursing-school applications and UGC nursing degree preferences", "Apply to both routes where eligible."],
    ],
    tip: "Good English, empathy, and teamwork matter. Practise explaining things calmly and clearly to others.",
  },
  "ayurvedic-doctor": {
    ol: [
      ["Build Science, Sinhala/Tamil, and English results", "Ayurveda uses Bio-stream selection, and traditional texts need strong language ability."],
    ],
    al: [
      ["Check the Institute of Indigenous Medicine (University of Colombo) and Z-score ranges for Ayurveda degrees", "Include them in your UGC preferences alongside other health degrees."],
    ],
    tip: "Learn the difference between Ayurveda, Unani, and Siddha degree routes before you choose.",
  },
  engineer: {
    ol: [
      ["Aim for 'A' passes in Mathematics and Science; take Additional Mathematics if your school offers it", "Combined Mathematics at A/L is far easier with a strong algebra and trigonometry base."],
      ["Try the Sri Lanka Mathematics or Science Olympiad programmes and school science fairs", "Problem-solving practice and a stronger CV for later scholarships."],
      ["Build or tinker: simple circuits, Arduino, mechanical models, or CAD basics", "Hands-on experience helps you pick the right engineering discipline."],
    ],
    al: [
      ["Study Combined Mathematics, Physics, and Chemistry (or ICT where allowed) with weekly timed papers", "Engineering selection is by Z-score; Moratuwa, Peradeniya, and Ruhuna have separate cut-offs."],
      ["Check the cut-off marks of your target engineering degree and district on the UGC site", "Keep Technology-stream and private/foreign backups ready."],
      ["Compare IESL-accredited degrees at state and private universities", "Accreditation matters for chartered engineer status."],
    ],
    tip: "Do not wait for A/L to start Combined Mathematics. Revise O/L algebra, trigonometry, and geometry thoroughly in Grade 11.",
  },
  "software-engineer": {
    ol: [
      ["Take ICT at O/L and learn Python or Scratch basics on free platforms (e.g. Khan Academy, freeCodeCamp)", "Build 2–3 small projects such as a calculator, quiz app, or simple website."],
      ["Join the school ICT society or Sri Lanka Olympiad in Informatics training if available", "Logic and algorithmic thinking carry over to A/L and university."],
      ["Practise typing and basic English technical vocabulary", "Almost all documentation and tutorials are in English."],
    ],
    al: [
      ["Study Combined Mathematics, Physics, and Chemistry/ICT; or ICT, Maths, Physics where offered", "Check each university's accepted subject combinations in the UGC handbook."],
      ["Keep a GitHub portfolio of small projects during A/L", "Evidence of skills helps for private degrees, scholarships, and internships."],
      ["Compare state (Moratuwa, Colombo, Kelaniya, etc.) and private (SLIIT, IIT, NSBM, etc.) computing degrees", "Check accreditation and fees, and note direct-entry requirements."],
    ],
    tip: "Private degrees accept A/L 'S' passes in many cases, but state universities are Z-score based. Prepare for both.",
  },
  architect: {
    ol: [
      ["Take Art at O/L and keep a sketchbook; practise freehand drawing and perspective", "Architecture selection includes an aptitude test, so drawing skill counts."],
      ["Learn about the B.Arch at the University of Moratuwa and the SLIA professional route", "Check the current aptitude-test notice on uom.lk."],
    ],
    al: [
      ["Plan for the University of Moratuwa aptitude test as well as your A/L results", "Watch uom.lk and ugc.ac.lk for the official notice and online registration dates each year."],
      ["Build a portfolio of sketches, models, and photographs of buildings", "Useful for aptitude preparation and private programmes."],
      ["Maintain Mathematics and Physics results; they support structural and technical subjects", "Check accepted A/L streams for each architecture programme."],
    ],
    tip: "The aptitude test is separate from Z-score. Start timed drawing and design exercises well before A/L results.",
  },
  "quantity-surveyor": {
    ol: [
      ["Build Mathematics and English strength; add Geography or Business/Accounting if offered", "Costing, measurement, and contract documents rely on numeracy and clear writing."],
    ],
    al: [
      ["Check A/L subject requirements for Quantity Surveying at Moratuwa and other universities", "Accepted streams can include Maths and Technology; confirm in the UGC handbook."],
      ["Look at IQSSL membership and accredited degrees", "Accreditation affects professional registration."],
    ],
    tip: "Visit a construction site (with permission) or talk to a QS during Grade 12 to see the work first-hand.",
  },
  lawyer: {
    ol: [
      ["Build English and mother-tongue writing; read newspapers and practise short opinion essays", "Law depends on clear reasoning and precise language."],
      ["Join debating, mock trial, or school Law Society activities", "Public speaking and structured argument are core law skills."],
    ],
    al: [
      ["Read the UGC handbook entry for LLB degrees and the Sri Lanka Law College entrance process", "Law is available via state LLB degrees, private/external LLB, and Law College after meeting its requirements."],
      ["Keep strong English; practise legal-style reading comprehension and essay writing", "Law College examinations are in English, Sinhala, and Tamil; confirm the current medium rules."],
    ],
    tip: "Any A/L stream can lead to law, but Arts subjects such as Logic, Political Science, and Languages help.",
  },
  teacher: {
    ol: [
      ["Secure Credit passes (C+) in your mother tongue, Mathematics, and English", "Teacher-training intakes check O/L credits and A/L results."],
      ["Volunteer as a peer tutor or prefect for younger students", "Early teaching practice builds confidence."],
    ],
    al: [
      ["Check the National Colleges of Education (NCOE) intake and B.Ed degree entry requirements", "Watch official notices for application dates and subject requirements."],
      ["Choose A/L subjects you could teach; confirm demand for those subjects", "Some subjects (e.g. Science, English, Mathematics) are in higher demand in schools."],
    ],
    tip: "Practise explaining one topic to a friend each week; if you can teach it, you understand it.",
  },
  "university-lecturer": {
    ol: [
      ["Develop strong study habits and curiosity; aim for top results in your best subjects", "Academic careers need consistently high degree classes."],
    ],
    al: [
      ["Choose degrees where you can reach First Class or Second Upper honours", "State universities usually recruit lecturers with strong GPA and postgraduate study."],
    ],
    tip: "Start research reading early: popular science and journal summaries build your reading stamina.",
  },
  accountant: {
    ol: [
      ["Secure Credit passes in Mathematics and English; take Business & Accounting Studies in Basket 1", "AAT Sri Lanka and CA Sri Lanka entry rules use your O/L passes."],
      ["Learn about AAT Sri Lanka, CA Sri Lanka, CIMA, and ACCA entry routes", "Some professional routes open soon after O/L and can run alongside A/L."],
    ],
    al: [
      ["Study Accounting, Business Studies, and Economics (Commerce stream) with weekly past papers", "State Commerce degrees (BBA, Accounting, Finance) are selected by Z-score."],
      ["Register for an entry-level professional course (e.g. AAT) alongside A/L only if your timetable allows", "Check the current entry criteria on each institute's official site."],
    ],
    tip: "Do not take on too many exams in Grade 12–13. Protect your A/L preparation first, then add professional papers.",
  },
  "financial-analyst": {
    ol: [
      ["Strengthen Mathematics; learn basic spreadsheet skills (Excel / Google Sheets)", "Data and number handling are core skills."],
    ],
    al: [
      ["Study Commerce or Physical Science with Mathematics, then compare degrees in finance, economics, and statistics", "CFA, CIMA, and ACCA exams are accessible after a degree or suitable qualifications."],
    ],
    tip: "Follow business news in English each week and practise summarising one article in 5 lines.",
  },
  banker: {
    ol: [
      ["Secure Credit passes in Mathematics and English; take Business & Accounting Studies if possible", "Banks use O/L and A/L results in recruitment."],
    ],
    al: [
      ["Check Institute of Bankers of Sri Lanka (IBSL) routes and bank recruitment criteria", "Many entry-level banking jobs ask for A/L passes and English."],
    ],
    tip: "Customer service and numeracy matter equally. Practise explaining numbers simply in English.",
  },
  "hr-manager": {
    ol: [
      ["Develop communication skills: join debating, drama, or leadership clubs", "HR is people-focused; teamwork and clear writing are essential."],
    ],
    al: [
      ["Compare management and HR degrees and the Institute of Personnel Management (IPM) professional route", "Check entry rules in the UGC handbook and IPM's official site."],
    ],
    tip: "Lead a school project end-to-end; it is early practice in managing people and deadlines.",
  },
  "logistics-manager": {
    ol: [
      ["Strengthen Mathematics, English, and ICT", "Planning, shipping documents, and tracking systems depend on all three."],
    ],
    al: [
      ["Explore Transport & Logistics degrees and CILT Sri Lanka professional routes", "Check current accepted A/L streams in the UGC handbook."],
    ],
    tip: "Learn how a package moves from a factory to a customer; map it as a simple diagram.",
  },
  "hospitality-manager": {
    ol: [
      ["Build English and communication; take Home Economics or Business if available", "Guest service depends on confident English."],
      ["Learn about SLITHM and other NVQ tourism and hotel programmes available after O/L", "Check eligibility and intake dates on the official site."],
    ],
    al: [
      ["Compare hospitality degrees and SLITHM programmes; check intake dates and fees", "Hotel work experience helps with later promotion."],
      ["Learn a third language (German, French, Japanese, Chinese) to stand out", "Check official language centres for A/L-student courses."],
    ],
    tip: "Do a short holiday attachment at a hotel or restaurant if you can; it teaches service standards.",
  },
  "airline-pilot": {
    ol: [
      ["Secure Credit passes in English, Mathematics, and Science in a single sitting", "Flight schools and CAASL licensing use these."],
      ["Check the CAASL Class 1 medical requirements before spending money on training", "Vision, hearing, and general health standards are strict; verify with CAASL and approved medical examiners."],
    ],
    al: [
      ["Study Physics and Mathematics where possible (Physical Science stream is helpful)", "Aviation theory and navigation rely on them."],
      ["Compare approved flying schools; check CPL/ATPL requirements and total costs", "Never pay a school before verifying CAASL approval."],
    ],
    tip: "Pilot training is expensive. Plan fees, insurance, and a backup career before committing.",
  },
  "air-traffic-controller": {
    ol: [
      ["Strengthen English speaking and listening; credit in Mathematics and Science", "Radio communication uses precise standard English phrases."],
    ],
    al: [
      ["Watch Airport & Aviation Services (Sri Lanka) and CAASL recruitment notices", "Check A/L subject, medical, and age criteria in each notice."],
      ["Practise concentration and quick spatial reasoning with logic puzzles and maps", "ATC aptitude tests assess these."],
    ],
    tip: "Recruitment is irregular. Follow official notices rather than agents.",
  },
  "marine-officer": {
    ol: [
      ["Secure Credit passes in English, Mathematics, and Science", "Maritime academies use them in admission."],
      ["Check the seafarer medical requirements (vision, colour vision, hearing) early", "Medical fitness is mandatory at admission."],
    ],
    al: [
      ["Compare CINEC Maritime Campus, CGTTI, and other approved cadet programmes", "Confirm STCW approval and cadet placement terms before paying."],
    ],
    tip: "Ask any programme for its sea-time (cadetship) placement record before paying fees.",
  },
  "digital-marketer": {
    ol: [
      ["Build English writing and ICT skills; open a small blog, page, or YouTube project", "Practical portfolios matter in digital marketing."],
    ],
    al: [
      ["Take free Google Skillshop and Meta Blueprint courses; compare marketing and media degrees", "Certificates are free to take; confirm current offerings on the official sites."],
    ],
    tip: "Run a small real campaign for a school club or local shop and track the results.",
  },
  "fashion-designer": {
    ol: [
      ["Take Art; practise sketching, colour theory, and basic sewing", "Fashion degrees often use portfolios or aptitude tests."],
    ],
    al: [
      ["Check the University of Moratuwa fashion design programme and its aptitude-test notice", "Watch uom.lk for dates and format."],
      ["Build a portfolio of 10–15 designs with sketches, fabric samples, and photos", "Useful for private institutes and scholarships."],
    ],
    tip: "Visit local textile and apparel exhibitions to see the industry's scale.",
  },
  "ecotourism-naturalist": {
    ol: [
      ["Join school nature societies, Field Ornithology Group of Sri Lanka events, or national park education programmes", "Field knowledge comes from time outdoors."],
      ["Improve English and add one foreign language", "Most guest-facing roles use English and sometimes German, French, or Chinese."],
    ],
    al: [
      ["Learn about SLTDA guide licensing and the Department of Wildlife Conservation naturalist routes", "Confirm age, education, and training requirements on official sites."],
    ],
    tip: "Keep a field notebook: species seen, dates, places, and sketches.",
  },
  "wildlife-conservationist": {
    ol: [
      ["Join Young Zoologists' Association (YZA) or school wildlife clubs", "Early involvement shows motivation."],
    ],
    al: [
      ["Compare zoology, environmental-science, and natural-resources degrees; watch Department of Wildlife Conservation recruitment notices", "Check which degrees match the roles you want."],
    ],
    tip: "Volunteer for citizen-science projects (bird counts, beach cleanups) to build field experience.",
  },
  "marine-biologist": {
    ol: [
      ["Build Science and Biology strength; learn to swim confidently", "Fieldwork often involves boats and water."],
    ],
    al: [
      ["Check University of Ruhuna fisheries and marine science programmes and NARA research pathways", "Confirm accepted A/L streams in the UGC handbook."],
    ],
    tip: "Join beach or reef clean-ups, and consider learning snorkelling or diving safely with a certified instructor.",
  },
  "agricultural-scientist": {
    ol: [
      ["Take Agriculture & Food Technology; start a small school or home garden project", "Practical experience helps your later choice of specialisation."],
    ],
    al: [
      ["Compare agriculture degrees at Peradeniya, Ruhuna, Rajarata, Sabaragamuwa, and Wayamba", "Check accepted streams (Bio, Physical, or Agriculture) in the UGC handbook."],
    ],
    tip: "Visit a research institute open day or a local farm to see modern farming methods.",
  },
  "aquaculture-specialist": {
    ol: [
      ["Build Science and Biology foundations; learn about fish and aquatic systems", "Aquaculture is applied biology and water chemistry."],
    ],
    al: [
      ["Check fisheries and aquaculture degree options (e.g. University of Ruhuna) and NAQDA programmes", "Confirm the A/L stream and subject rules."],
    ],
    tip: "Set up a small aquarium to learn water quality and feeding basics.",
  },
  "environmental-officer": {
    ol: [
      ["Strengthen Science and Geography; join the school Environmental Society", "Environmental regulation uses science and policy."],
    ],
    al: [
      ["Compare environmental science and natural-resources degrees; follow Central Environmental Authority (CEA) recruitment notices", "Check qualifications required by each notice."],
    ],
    tip: "Run a school recycling or water-quality project and record before/after data.",
  },
  "food-scientist": {
    ol: [
      ["Build Science and Chemistry foundations; take Home Economics or Agriculture & Food Technology", "Food science uses chemistry, biology, and processing."],
    ],
    al: [
      ["Compare Food Science and Technology degrees and check accepted A/L streams", "Look into Sri Lanka Standards Institution (SLSI) and food-industry internship routes."],
    ],
    tip: "Try a simple home experiment on food preservation; document the method and results.",
  },
  "biomedical-scientist": {
    ol: [
      ["Strengthen Science and Mathematics; learn basic lab safety", "Lab skills and accuracy matter."],
    ],
    al: [
      ["Compare Medical Laboratory Science and biomedical degrees; check state intake and Z-score cut-offs", "Include them in UGC preferences after Medicine and Dental."],
    ],
    tip: "Read about how common lab tests (blood count, urine tests) work to see if you enjoy this work.",
  },
  gemologist: {
    ol: [
      ["Build Science and Mathematics; learn about Sri Lanka's gem industry", "Understanding minerals and optics helps."],
    ],
    al: [
      ["Check National Gem and Jewellery Authority (NGJA) training and recognised gemmology programmes", "Verify accreditation and course recognition before paying."],
    ],
    tip: "Visit the Ratnapura gem museum or an official gem exhibition to see how stones are graded.",
  },
  "tea-plantation-manager": {
    ol: [
      ["Build Science, Mathematics, and English; take Agriculture if offered", "Plantation roles combine crop science and people management."],
    ],
    al: [
      ["Check plantation management degrees (e.g. Sabaragamuwa University) and Tea Research Institute programmes", "Confirm accepted A/L streams."],
    ],
    tip: "Learn about estate operations and labour management; both matter in plantation careers.",
  },
};

// Category fallbacks for any career without its own entry.
const CATEGORY_FALLBACK: Record<string, CareerStageActions> = {
  Healthcare: CAREER_ACTIONS.doctor,
  Engineering: CAREER_ACTIONS.engineer,
  Business: CAREER_ACTIONS.accountant,
  Legal: CAREER_ACTIONS.lawyer,
  Education: CAREER_ACTIONS.teacher,
  Hospitality: CAREER_ACTIONS["hospitality-manager"],
  Aviation: CAREER_ACTIONS["airline-pilot"],
  Maritime: CAREER_ACTIONS["marine-officer"],
  Creative: CAREER_ACTIONS["fashion-designer"],
  Marketing: CAREER_ACTIONS["digital-marketer"],
};

const GENERIC_ACTIONS: CareerStageActions = {
  ol: [
    ["Talk to two people working in this field and ask what they wish they had done at O/L", "A short conversation gives realistic expectations."],
  ],
  al: [
    ["Check the UGC handbook for degrees related to this career and note their A/L requirements", "The handbook lists degrees, subject combinations, and intake numbers."],
  ],
  tip: "Compare state and private routes early, and confirm accreditation for any programme.",
};

const GENERIC_ACTIONS_SI: CareerStageActions = {
  ol: [
    ["මෙම ක්ෂේත්‍රයේ සේවය කරන පුද්ගලයන් දෙදෙනෙකු හමුවී O/L හිදී ඔවුන් කළා නම් හොඳ යැයි සිතන දේ ඇසීමෙන් බලන්න", "කෙටි සංවාදයකින් යථාර්ථවාදී අපේක්ෂාවන් ලැබේ."],
  ],
  al: [
    ["මෙම වෘත්තියට අදාළ උපාධි UGC අත්පොතෙන් බලා ඒවායේ A/L අවශ්‍යතා සටහන් කරගන්න", "අත්පොතේ උපාධි, විෂය සංයෝජන සහ ඇතුළත් කරගන්නා ගණන දක්වා ඇත."],
  ],
  tip: "රාජ්‍ය සහ පෞද්ගලික මාර්ග කල්තබා සසඳා, ඕනෑම පාඨමාලාවක පිළිගැනීම තහවුරු කරගන්න.",
};

function getCareerActions(slug: string, category: string, isSi = false): CareerStageActions {
  if (isSi) {
    const si = CAREER_ACTIONS_SI[slug];
    if (si) return si;
    // Category fallbacks reuse the Sinhala entry of the representative career
    const rep = Object.entries(CATEGORY_FALLBACK).find(([cat]) => cat === category);
    const repSlug = rep && Object.keys(CAREER_ACTIONS).find((k) => CAREER_ACTIONS[k] === rep[1]);
    return (repSlug && CAREER_ACTIONS_SI[repSlug]) || GENERIC_ACTIONS_SI;
  }
  return CAREER_ACTIONS[slug] || CATEGORY_FALLBACK[category] || GENERIC_ACTIONS;
}

// ─── O/L ─────────────────────────────────────────────────────────────────────

// Exam-prep tasks that go inside the main O/L milestone (English, habits, logistics in one place).
export function getOlPrepTasks(examYear: boolean, isSi = false): GeneratedTask[] {
  const t = (en: string, si: string) => (isSi ? si : en);
  const tasks: GeneratedTask[] = [];
  if (examYear) {
    tasks.push({
      title: t(
        "Confirm your O/L registration and subject list with your school, and note the exam dates on the Department of Examinations site",
        "ඔබේ O/L ලියාපදිංචිය සහ විෂය ලැයිස්තුව පාසලෙන් තහවුරු කර, විභාග දිනයන් විභාග දෙපාර්තමේන්තු වෙබ් අඩවියෙන් සටහන් කරගන්න"
      ),
      resourceUrl: "https://doenets.lk",
      resourceType: "OFFICIAL_GUIDE",
      notes: t(
        "School candidates are registered through the principal. Check name spelling, medium, and subjects. The O/L has been held in December in recent years; confirm this year's dates.",
        "පාසල් අපේක්ෂකයින් ලියාපදිංචි වන්නේ විදුහල්පති හරහා ය. නමේ අක්ෂර වින්‍යාසය, මාධ්‍යය සහ විෂයයන් පරීක්ෂා කරන්න. මෑත වසරවල O/L දෙසැම්බරයේ පැවැත්වී ඇත; මෙම වසරේ දින තහවුරු කරගන්න."
      ),
    });
  }
  tasks.push(
    {
      title: t(
        "Complete 5 years of past papers per subject under timed conditions (Maths, English, Science first)",
        "සෑම විෂයකටම past paper වසර 5ක් කාලසීමා සහිතව සම්පූර්ණ කරන්න (මුලින් ගණිතය, ඉංග්‍රීසි, විද්‍යාව)"
      ),
      resourceUrl: "https://doenets.lk",
      resourceType: "OFFICIAL_GUIDE",
      notes: t(
        "Past papers and marking schemes are on the Department of Examinations site. Focus on time management and clear step-by-step working.",
        "Past paper සහ ලකුණු දීමේ පටිපාටි විභාග දෙපාර්තමේන්තු වෙබ් අඩවියේ ඇත. කාල කළමනාකරණය සහ පියවරෙන් පියවර පැහැදිලි විසඳුම් කෙරෙහි අවධානය යොමු කරන්න."
      ),
    },
    {
      title: t(
        "Build a weekly timetable: 45–50 minute study blocks, 10-minute breaks, one full rest block, 7–8 hours of sleep",
        "සතිපතා කාලසටහනක් සාදන්න: මිනිත්තු 45–50ක අධ්‍යයන වාර, මිනිත්තු 10ක විවේක, එක් සම්පූර්ණ විවේක වාරයක්, පැය 7–8ක නින්ද"
      ),
      notes: t(
        "Short, regular sessions beat last-minute cramming. Keep your phone out of reach while studying.",
        "කෙටි, නිතිපතා වාර අවසන් මොහොතේ ගොනු කිරීමට වඩා හොඳයි. අධ්‍යයනය කරන විට දුරකථනය ළඟින් තබා නොගන්න."
      ),
    },
    {
      title: t(
        "Keep a mistake notebook and teach one topic a week to a study partner",
        "වැරදි සටහන් පොතක් තබාගෙන සතියකට එක් මාතෘකාවක් අධ්‍යයන සහකරුවෙකුට ඉගැන්වීමට යොදාගන්න"
      ),
      notes: t(
        "Write each wrong answer with the correct method and review it weekly. Explaining a topic is the best test of understanding.",
        "සෑම වැරදි පිළිතුරක්ම නිවැරදි ක්‍රමය සමඟ ලියා සතිපතා නැවත බලන්න. මාතෘකාවක් පැහැදිලි කිරීම අවබෝධය පරීක්ෂා කරන හොඳම ක්‍රමයයි."
      ),
    },
    {
      title: t(
        "Read one short English text a day and write a 3-line summary; speak English for 15 minutes daily",
        "දිනපතා කෙටි ඉංග්‍රීසි පාඨයක් කියවා පේළි 3ක සාරාංශයක් ලියන්න; දිනපතා මිනිත්තු 15ක් ඉංග්‍රීසියෙන් කතා කරන්න"
      ),
      notes: t(
        "Daily practice improves comprehension and confidence faster than occasional long sessions.",
        "දිනපතා පුහුණුව, කලාතුරකින් කරන දිගු වාරවලට වඩා වේගයෙන් අවබෝධය සහ විශ්වාසය වර්ධනය කරයි."
      ),
    },
    {
      title: t(
        "Write 5 past-paper essays or letters and get feedback from your English teacher",
        "past paper රචනා හෝ ලිපි 5ක් ලියා ඉංග්‍රීසි ගුරුවරයාගෙන් ප්‍රතිපෝෂණ ලබාගන්න"
      ),
      notes: t(
        "Marks are usually lost on structure, spelling, and timing. Get feedback on all three.",
        "ලකුණු බොහෝවිට අහිමි වන්නේ ව්‍යුහය, අක්ෂර වින්‍යාසය සහ කාලය නිසාය. තුනටම ප්‍රතිපෝෂණ ලබාගන්න."
      ),
    },
    {
      title: t(
        "Use free Ministry of Education lessons on e-thaksalawa, and read in your mother tongue weekly",
        "e-thaksalawa හි නොමිලේ ඇති අධ්‍යාපන අමාත්‍යාංශ පාඩම් භාවිතා කර සතිපතා මව්බසින් කියවන්න"
      ),
      resourceUrl: "https://e-thaksalawa.moe.gov.lk",
      resourceType: "OFFICIAL_GUIDE",
      notes: t(
        "A pass in your first language is needed for A/L entry and government jobs.",
        "A/L ඇතුළත් වීමට සහ රජයේ රැකියා සඳහා මව්බසින් සාමාර්ථයක් අවශ්‍යයි."
      ),
    }
  );
  if (examYear) {
    tasks.push({
      title: t(
        "Prepare exam-day items (admission card, ID, pens, geometry set) and plan your Grade 12 options before results",
        "විභාග දිනයට අවශ්‍ය දේ (ප්‍රවේශ පත්‍රය, හැඳුනුම්පත, පෑන්, ජ්‍යාමිති පෙට්ටිය) සූදානම් කර ප්‍රතිඵල එන්නට පෙර Grade 12 විකල්ප සැලසුම් කරන්න"
      ),
      notes: t(
        "Pack the night before and arrive early. Research A/L schools and subject availability while you wait for results.",
        "කලින් රාත්‍රියේ සූදානම් කර මුලින්ම පැමිණෙන්න. ප්‍රතිඵල බලා සිටින විට A/L පාසල් සහ විෂය ලබාගත හැකිද යන්න සොයා බලන්න."
      ),
    });
  }
  return tasks;
}

// Career-specific O/L actions, kept separate from generic exam preparation.
export function getOlCareerMilestone(
  career: { slug: string; title: string; category: string },
  careerLabel: string,
  durationMonths: number,
  isSi = false
): GeneratedMilestone {
  const actions = getCareerActions(career.slug, career.category, isSi);
  const t = (en: string, si: string) => (isSi ? si : en);
  return {
    stageKey: "OL_CAREER_ACTIONS",
    title: t(`O/L Actions for a ${careerLabel} Career`, `${careerLabel} වෘත්තිය සඳහා O/L කළ යුතු දේ`),
    description: t(
      `Targeted steps at O/L level for ${careerLabel} pathways in Sri Lanka.`,
      `ශ්‍රී ලංකාවේ ${careerLabel} මාර්ග සඳහා O/L මට්ටමේ ඉලක්කගත පියවර.`
    ),
    whyItMatters: t(
      "Your O/L results and early choices shape A/L stream and degree options. Career-specific action now keeps those options open.",
      "ඔබේ O/L ප්‍රතිඵල සහ මුල් තේරීම් A/L අංශය සහ උපාධි විකල්ප හැඩගස්වයි. දැන් වෘත්තියට විශේෂිත පියවර ගැනීමෙන් ඒ විකල්ප විවෘතව තබාගත හැක."
    ),
    prerequisites: t("Grade 10–11 enrolment", "Grade 10–11 ඉගෙනුම"),
    durationMonths,
    tasks: [
      ...toTasks(actions.ol),
      {
        title: t(
          `Read the ${career.title} career guide, including A/L stream and Z-score expectations`,
          `${career.title} වෘත්තීය මාර්ගෝපදේශය, A/L අංශය සහ Z-score අපේක්ෂා ඇතුළුව කියවන්න`
        ),
        resourceUrl: `/careers/${career.slug}`,
        resourceType: "CAREER",
        notes: t(
          "Know the A/L stream requirement before choosing Grade 12 subjects.",
          "Grade 12 විෂයයන් තෝරාගැනීමට පෙර A/L අංශයේ අවශ්‍යතාව දැනගන්න."
        ),
      },
      { title: `${t("Tip", "උපදෙස")}: ${actions.tip}` },
    ],
  };
}

// ─── Between O/L and A/L ─────────────────────────────────────────────────────

export function getAfterOlMilestone(careerLabel: string, alStream: string, isSi = false): GeneratedMilestone {
  const t = (en: string, si: string) => (isSi ? si : en);
  return {
    stageKey: "AFTER_OL_PLANNING",
    title: t(
      "After O/L: Results, Grade 12 School & Stream Choice",
      "O/L පසු: ප්‍රතිඵල, Grade 12 පාසල සහ අංශය තේරීම"
    ),
    description: t(
      `Turn your O/L results into a confirmed A/L stream and school that fit a ${careerLabel} career.`,
      `ඔබේ O/L ප්‍රතිඵල ${careerLabel} වෘත්තියට ගැළපෙන තහවුරු කළ A/L අංශයක් සහ පාසලක් බවට පත් කරගන්න.`
    ),
    whyItMatters: t(
      "Your Grade 12 stream and subject combination decide which university degrees you can apply for.",
      "ඔබේ Grade 12 අංශය සහ විෂය සංයෝජනය මගින් ඔබට අයදුම් කළ හැකි විශ්වවිද්‍යාල උපාධි තීරණය වේ."
    ),
    prerequisites: t("O/L examination completed", "O/L විභාගය අවසන්"),
    durationMonths: 3,
    tasks: [
      {
        title: t(
          "Check your results on the Department of Examinations website and keep both the result sheet and the school certificate",
          "ඔබේ ප්‍රතිඵල විභාග දෙපාර්තමේන්තු වෙබ් අඩවියෙන් බලා ප්‍රතිඵල පත්‍රය සහ පාසල් සහතිකය දෙකම තබාගන්න"
        ),
        resourceUrl: "https://doenets.lk",
        resourceType: "OFFICIAL_GUIDE",
        notes: t(
          "Results are released online. You will need certified copies for applications.",
          "ප්‍රතිඵල මාර්ගගතව නිකුත් වේ. අයදුම්පත් සඳහා සහතික කළ පිටපත් අවශ්‍ය වේ."
        ),
      },
      {
        title: t(
          `Confirm you meet the A/L entry criteria for ${alStream}; speak with your principal or career guidance teacher`,
          `${alStream} සඳහා A/L ඇතුළත් වීමේ නිර්ණායක ඔබ සපුරා ඇතැයි තහවුරු කරගන්න; විදුහල්පති හෝ වෘත්තීය මග පෙන්වීමේ ගුරුවරයා සමඟ කතා කරන්න`
        ),
        notes: t(
          "Typical minimum: passes in 6 subjects with credits in a set number including your first language and Mathematics for Maths/Science streams. Confirm the current rule with your school.",
          "සාමාන්‍ය අවම: විෂයයන් 6කින් සාමාර්ථ, ගණිත/විද්‍යා අංශ සඳහා මව්බස සහ ගණිතය ඇතුළුව නියමිත සංඛ්‍යාවක සම්මාන සමඟ. වත්මන් නීතිය පාසලෙන් තහවුරු කරගන්න."
        ),
      },
      {
        title: t(
          "List 3–5 schools offering your chosen stream and subjects; check their Grade 12 admission circular and deadlines",
          "ඔබ තෝරාගත් අංශය සහ විෂයයන් ඇති පාසල් 3–5ක් ලැයිස්තුගත කර ඒවායේ Grade 12 ඇතුළත් කිරීමේ චක්‍රලේඛය සහ අවසන් දින බලන්න"
        ),
        notes: t(
          "Admission for Grade 12 is by results and the school's capacity. Apply to more than one school.",
          "Grade 12 ඇතුළත් කිරීම ප්‍රතිඵල සහ පාසලේ ධාරිතාව අනුව සිදු වේ. පාසල් එකකට වඩා අයදුම් කරන්න."
        ),
      },
      {
        title: t(
          "Use this gap to start A/L subject groundwork (Combined Maths, Chemistry, Biology, Accounting, etc.)",
          "මෙම හිඩැස පාවිච්චි කර A/L විෂයවල මූලික සූදානම ආරම්භ කරන්න (සංයුක්ත ගණිතය, රසායන විද්‍යාව, ජීව විද්‍යාව, ගිණුම්කරණය ආදිය)"
        ),
        notes: t(
          "A few weeks of preview before classes begin makes Grade 12 easier.",
          "පන්ති ආරම්භ වීමට පෙර සති කිහිපයක පූර්ව අධ්‍යයනය Grade 12 පහසු කරයි."
        ),
      },
      {
        title: t("Start or continue English classes", "ඉංග්‍රීසි පන්ති ආරම්භ කරන්න හෝ දිගටම කරන්න"),
        notes: t(
          "A/L students must also sit General English and the Common General Test; start English early.",
          "A/L සිසුන් General English සහ Common General Test ද කළ යුතු බැවින් ඉංග්‍රීසි කල්තබා ආරම්භ කරන්න."
        ),
      },
      {
        title: t(
          "If results are lower than needed, list backup options: repeat O/L, NVQ diploma, SLIATE, or an alternative stream",
          "ප්‍රතිඵල අවශ්‍ය මට්ටමට වඩා අඩු නම් විකල්ප ලැයිස්තුගත කරන්න: O/L නැවත කිරීම, NVQ ඩිප්ලෝමා, SLIATE හෝ වෙනත් අංශයක්"
        ),
        notes: t(
          "A lower result does not end the path. Many routes still lead to your target field.",
          "අඩු ප්‍රතිඵලයක් මාර්ගය අවසන් නොකරයි. බොහෝ මාර්ග තවමත් ඔබේ ඉලක්කගත ක්ෂේත්‍රයට යොමු කරයි."
        ),
      },
    ],
  };
}

// ─── A/L ─────────────────────────────────────────────────────────────────────

// Study-strategy, Common General Test, and English tasks that go inside the main A/L milestone.
export function getAlPrepTasks(isSi = false): GeneratedTask[] {
  const t = (en: string, si: string) => (isSi ? si : en);
  return [
    {
      title: t(
        "Grade 12: finish each subject's syllabus once. Grade 13: revise and do timed papers from about 8 months before the exam",
        "Grade 12: සෑම විෂයයකම විෂය නිර්දේශය එක් වරක් අවසන් කරන්න. Grade 13: විභාගයට මාස 8කට පමණ පෙර සිට පුනරීක්ෂණය සහ කාලසීමා සහිත paper කරන්න"
      ),
      notes: t(
        "Build understanding first, then speed, then exam technique.",
        "මුලින් අවබෝධය, පසුව වේගය, ඉන්පසු විභාග ශිල්පීය ක්‍රම ගොඩනඟන්න."
      ),
    },
    {
      title: t(
        "Do 2 timed past papers per subject per month, analyse your errors, and keep a formula and key-diagram sheet",
        "සෑම විෂයකටම මසකට කාලසීමා සහිත past paper 2ක් කර වැරදි විශ්ලේෂණය කරන්න; සූත්‍ර සහ ප්‍රධාන රූප සටහන් පත්‍රයක් තබාගන්න"
      ),
      resourceUrl: "https://doenets.lk",
      resourceType: "OFFICIAL_GUIDE",
      notes: t(
        "Past papers are on the Department of Examinations site. Review your summary sheet for 10 minutes daily.",
        "Past paper විභාග දෙපාර්තමේන්තු වෙබ් අඩවියේ ඇත. ඔබේ සාරාංශ පත්‍රය දිනපතා මිනිත්තු 10ක් නැවත බලන්න."
      ),
    },
    {
      title: t(
        "Practise Common General Test papers and General English monthly",
        "සෑම මසකම Common General Test paper සහ General English පුහුණු වන්න"
      ),
      resourceUrl: "https://ugc.ac.lk",
      resourceType: "OFFICIAL_GUIDE",
      notes: t(
        "Read daily news in your language and one English paper weekly. Minimum marks and rules are in the annual UGC handbook.",
        "දිනපතා ඔබේ භාෂාවෙන් පුවත් සහ සතිපතා ඉංග්‍රීසි පුවත්පතක් කියවන්න. අවම ලකුණු සහ නීති වාර්ෂික UGC අත්පොතේ ඇත."
      ),
    },
    {
      title: t(
        "Join a spoken-English or writing class that suits your level",
        "ඔබේ මට්ටමට ගැළපෙන කථන ඉංග්‍රීසි හෝ ලිවීමේ පන්තියකට එක් වන්න"
      ),
      resourceUrl: "https://www.britishcouncil.lk/english",
      resourceType: "COURSE",
      notes: t(
        "Choose a class that does not clash with main-subject lessons.",
        "ප්‍රධාන විෂය පන්ති සමඟ ගැටෙන්නේ නැති පන්තියක් තෝරන්න."
      ),
    },
    {
      title: t(
        "Choose tuition carefully: one class per hard subject and 2 hours of self-study for every class hour; keep one full rest block weekly",
        "ටියුෂන් පරෙස්සමින් තෝරන්න: අපහසු විෂයයකට එක් පන්තියක් සහ පන්ති පැයකට ස්වයං අධ්‍යයන පැය 2ක්; සතියකට එක් සම්පූර්ණ විවේක වාරයක් තබාගන්න"
      ),
      notes: t(
        "Avoid overlapping classes that leave no revision time. Consistent rest improves memory and exam performance.",
        "පුනරීක්ෂණයට කාලයක් නොලැබෙන ගැටෙන පන්ති වළක්වන්න. නිතිපතා විවේකය මතකය සහ විභාග ප්‍රතිඵල වැඩි දියුණු කරයි."
      ),
    },
    {
      title: t(
        "If stress becomes overwhelming, talk to a trusted teacher, parent, or counsellor (e.g. Sumithrayo, 011 2682535)",
        "ආතතිය දරාගත නොහැකි වුවහොත් විශ්වාසවන්ත ගුරුවරයෙකු, දෙමාපියෙකු හෝ උපදේශකයෙකු සමඟ කතා කරන්න (උදා: සුමිත්‍රයෝ, 011 2682535)"
      ),
      notes: t(
        "Asking for help early is a sign of strength. Confirm the number on the official Sumithrayo site.",
        "කල්තබා උදව් ඉල්ලීම ශක්තියේ ලකුණකි. අංකය සුමිත්‍රයෝ නිල වෙබ් අඩවියෙන් තහවුරු කරගන්න."
      ),
    },
  ];
}

export function getAlCareerMilestone(
  career: { slug: string; title: string; category: string },
  careerLabel: string,
  isSi = false
): GeneratedMilestone {
  const actions = getCareerActions(career.slug, career.category, isSi);
  const t = (en: string, si: string) => (isSi ? si : en);
  return {
    stageKey: "AL_CAREER_ACTIONS",
    title: t(`A/L Actions for a ${careerLabel} Career`, `${careerLabel} වෘත්තිය සඳහා A/L කළ යුතු දේ`),
    description: t(
      `Practical A/L-level steps tied to ${careerLabel} pathways in Sri Lanka.`,
      `ශ්‍රී ලංකාවේ ${careerLabel} මාර්ග හා බැඳුණු ප්‍රායෝගික A/L මට්ටමේ පියවර.`
    ),
    whyItMatters: t(
      "Aptitude tests, portfolios, medicals, and backup degrees all need planning during A/L, not after results.",
      "යෝග්‍යතා පරීක්ෂණ, portfolio, වෛද්‍ය පරීක්ෂණ සහ විකල්ප උපාධි සියල්ල සැලසුම් කළ යුත්තේ ප්‍රතිඵල පසුව නොව A/L කාලයේ දීය."
    ),
    prerequisites: t("Selected A/L stream", "තෝරාගත් A/L අංශය"),
    durationMonths: 18,
    tasks: [...toTasks(actions.al), { title: `${t("Tip", "උපදෙස")}: ${actions.tip}` }],
  };
}

export function getAlApplicationMilestone(careerLabel: string, isSi = false): GeneratedMilestone {
  const t = (en: string, si: string) => (isSi ? si : en);
  return {
    stageKey: "AL_UGC_APPLICATION",
    title: t(
      "UGC Application, Z-score Planning & Backup Routes",
      "UGC අයදුම්පත, Z-score සැලසුම්කරණය සහ විකල්ප මාර්ග"
    ),
    description: t(
      `Build a ranked degree list for ${careerLabel} pathways and line up backups before results arrive.`,
      `ප්‍රතිඵල එන්නට පෙර ${careerLabel} මාර්ග සඳහා ශ්‍රේණිගත උපාධි ලැයිස්තුවක් සාදා විකල්ප සූදානම් කරගන්න.`
    ),
    whyItMatters: t(
      "State university seats are filled by Z-score within the merit and district-quota lists. A well-ordered list and a real Plan B protect you.",
      "රාජ්‍ය විශ්වවිද්‍යාල ආසන merit සහ දිස්ත්‍රික් quota ලැයිස්තු තුළ Z-score මගින් පුරවනු ලබයි. හොඳින් අනුපිළිවෙලට සකසන ලද ලැයිස්තුවක් සහ සැබෑ විකල්ප සැලැස්මක් ඔබව ආරක්ෂා කරයි."
    ),
    prerequisites: t("A/L results (or expected results)", "A/L ප්‍රතිඵල (හෝ අපේක්ෂිත ප්‍රතිඵල)"),
    durationMonths: 6,
    tasks: [
      { title: t("Read the current UGC student handbook: Z-score method, merit and district quota shares, and special categories", "වත්මන් UGC ශිෂ්‍ය අත්පොත කියවන්න: Z-score ක්‍රමය, merit සහ දිස්ත්‍රික් quota කොටස් සහ විශේෂ ප්‍රවර්ග"), resourceUrl: "https://ugc.ac.lk", resourceType: "OFFICIAL_GUIDE", notes: t("Confirm quota percentages and rules in the handbook for your batch.", "ඔබේ කණ්ඩායම සඳහා quota ප්‍රතිශත සහ නීති අත්පොතෙන් තහවුරු කරගන්න.") },
      { title: t("Check your district's cut-offs for your target degrees, using the last 2–3 years as a guide", "ඔබේ ඉලක්කගත උපාධි සඳහා ඔබේ දිස්ත්‍රික්කයේ කඩඉම් පසුගිය වසර 2–3 මාර්ගෝපදේශයක් ලෙස බලන්න"), notes: t("Your district is the district of your school. Cut-offs differ by district and year.", "ඔබේ දිස්ත්‍රික්කය යනු ඔබේ පාසලේ දිස්ත්‍රික්කයයි. කඩඉම් දිස්ත්‍රික්කය සහ වසර අනුව වෙනස් වේ.") },
      { title: t("Build a ranked preference list of 15–20 degrees: dream, realistic, and safe", "උපාධි 15–20ක ශ්‍රේණිගත මනාප ලැයිස්තුවක් සාදන්න: සිහින, යථාර්ථවාදී සහ ආරක්ෂිත"), notes: t("Only list degrees you would truly study; order matters.", "ඔබ සැබවින්ම හදාරන උපාධි පමණක් ලැයිස්තුගත කරන්න; අනුපිළිවෙල වැදගත්.") },
      { title: t("Check whether your target degrees need an aptitude test, interview, or portfolio, and note the dates", "ඔබේ ඉලක්කගත උපාධිවලට යෝග්‍යතා පරීක්ෂණයක්, සම්මුඛ පරීක්ෂණයක් හෝ portfolio එකක් අවශ්‍යදැයි බලා දින සටහන් කරගන්න"), notes: t("Architecture, fashion design, music, and some others have separate tests. Watch ugc.ac.lk and the university website.", "ගෘහ නිර්මාණ, විලාසිතා නිර්මාණ, සංගීතය සහ තවත් සමහරකට වෙනම පරීක්ෂණ ඇත. ugc.ac.lk සහ විශ්වවිද්‍යාල වෙබ් අඩවිය නරඹන්න.") },
      { title: t("Prepare certified copies: A/L and O/L result sheets, birth certificate, ID, and school documents", "සහතික කළ පිටපත් සූදානම් කරන්න: A/L සහ O/L ප්‍රතිඵල පත්‍ර, උප්පැන්න සහතිකය, හැඳුනුම්පත සහ පාසල් ලේඛන"), notes: t("Keep scans and originals together.", "ස්කෑන් පිටපත් සහ මුල් පිටපත් එකට තබාගන්න.") },
      { title: t("Shortlist 3 recognised private or alternative routes: private universities, SLIATE HND, TVEC NVQ, and the Open University", "පිළිගත් පෞද්ගලික හෝ විකල්ප මාර්ග 3ක් කෙටි ලැයිස්තුගත කරන්න: පෞද්ගලික විශ්වවිද්‍යාල, SLIATE HND, TVEC NVQ සහ විවෘත විශ්වවිද්‍යාලය"), resourceUrl: "https://ou.ac.lk", resourceType: "OFFICIAL_GUIDE", notes: t("Check UGC/TVEC accreditation and fees before paying. Some HND/NVQ programmes allow progression to a degree.", "ගෙවීමට පෙර UGC/TVEC පිළිගැනීම සහ ගාස්තු බලන්න. සමහර HND/NVQ වැඩසටහන් උපාධියකට ප්‍රගමනයට ඉඩ දෙයි.") },
      { title: t("Plan funding with your family: total fees and living costs, Mahapola and bursaries, loans, and foreign options", "පවුලත් සමඟ මුදල් සැලසුම් කරන්න: මුළු ගාස්තු සහ ජීවන වියදම්, මහපොළ සහ ශිෂ්‍යාධාර, ණය සහ විදේශීය විකල්ප"), notes: t("Plan the cost of the whole course, not only the first year. Check the Mahapola Trust Fund and university notices.", "පළමු වසර පමණක් නොව මුළු පාඨමාලාවේම පිරිවැය සැලසුම් කරන්න. මහපොළ භාරය සහ විශ්වවිද්‍යාල දැන්වීම් බලන්න.") },
      { title: t("Decide on repeating A/L only after reading the UGC rules on attempts and your teachers' advice", "A/L නැවත කිරීම ගැන තීරණය කරන්නේ උත්සාහ ගණන පිළිබඳ UGC නීති සහ ගුරුවරුන්ගේ උපදෙස් කියවූ පසුවය"), notes: t("Repeat only if another attempt can meaningfully improve your Z-score.", "තවත් උත්සාහයකින් ඔබේ Z-score අර්ථවත් ලෙස වැඩි දියුණු කළ හැකි නම් පමණක් නැවත කරන්න.") },
    ],
  };
}
