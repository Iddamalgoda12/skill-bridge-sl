// Sri Lanka G.C.E. O/L (Ordinary Level) Curriculum Guidance
// Aligned strictly with the Ministry of Education & Department of Examinations Sri Lanka syllabus.
// Every student sits for 6 Compulsory Core Subjects + 1 subject from each of the 3 Elective Baskets (Total 9 subjects),
// and may optionally sit for Additional Mathematics as a 10th subject.

export interface OlBasketChoice {
  basketNumber: 1 | 2 | 3;
  basketTitle: string;
  sinhalaBasketTitle: string;
  recommendedSubject: string;
  sinhalaRecommendedSubject: string;
  reason: string;
  sinhalaReason: string;
  alternatives: string;
  sinhalaAlternatives: string;
}

export interface OlAdditionalMathsGuidance {
  recommended: boolean;
  importance: "ESSENTIAL" | "HIGHLY_RECOMMENDED" | "BENEFICIAL" | "OPTIONAL";
  badgeText: string;
  sinhalaBadgeText: string;
  reason: string;
  sinhalaReason: string;
}

export interface CareerOlGuidance {
  coreSummary: string;
  sinhalaCoreSummary: string;
  basket1: OlBasketChoice;
  basket2: OlBasketChoice;
  basket3: OlBasketChoice;
  additionalMaths: OlAdditionalMathsGuidance;
  juniorTip: string;
  sinhalaJuniorTip: string;
}

export const OL_CORE_SUBJECTS = [
  {
    name: "Mathematics (සාමාන්‍ය ගණිතය)",
    importance: "Credit ('C') or Distinction ('A') pass is mandatory for entry into Science, Maths, Technology, and Commerce A/L streams.",
    sinhalaImportance: "විද්‍යා, ගණිත, තාක්ෂණවේද සහ වාණිජ උසස් පෙළ ධාරාවන්ට ඇතුළත් වීමට අවම සම්මාන (C) හෝ විශිෂ්ට (A) සාමාර්ථයක් අනිවාර්ය වේ."
  },
  {
    name: "Science (සාමාන්‍ය විද්‍යාව)",
    importance: "Fundamental Physics, Chemistry, and Biology modules. Prerequisite for Physical and Biological Science streams.",
    sinhalaImportance: "භෞතික, රසායනික හා ජීව විද්‍යා මූලධර්ම. භෞතික හා ජීව විද්‍යා උසස් පෙළ ධාරාවන් සඳහා අනිවාර්ය පූර්ව අවශ්‍යතාවයකි."
  },
  {
    name: "English Language (ඉංග්‍රීසි භාෂාව)",
    importance: "Essential for university undergraduate education, technical textbooks, aptitude tests, and international accreditation.",
    sinhalaImportance: "විශ්වවිද්‍යාල අධ්‍යයන, තාක්ෂණික විෂය පොත්පත්, ප්‍රවේශ විභාග සහ වෘත්තීය සුදුසුකම් සඳහා අත්‍යවශ්‍ය වේ."
  },
  {
    name: "Mother Tongue (මව්බස හා සාහිත්‍යය: සිංහල / දෙමළ)",
    importance: "Official national language comprehension, critical communication, and grammar foundation.",
    sinhalaImportance: "භාෂා කුසලතාව, ලිඛිත සන්නිවේදනය, විචාර බුද්ධිය සහ රජයේ රැකියා සඳහා අවශ්‍ය මූලික සුදුසුකමකි."
  },
  {
    name: "Religion (ආගම: බුද්ධ ධර්මය / කතෝලික / ක්‍රිස්තියානි / ඉස්ලාම් / හින්දු)",
    importance: "Moral philosophy, personal ethics, and cultural awareness.",
    sinhalaImportance: "සදාචාරාත්මක වටිනාකම්, පෞද්ගලික විනය සහ ආචාරධර්ම වර්ධනය."
  },
  {
    name: "History (ඉතිහාසය)",
    importance: "Sri Lankan heritage, state governance evolution, and global historical developments.",
    sinhalaImportance: "ශ්‍රී ලංකා ඉතිහාසය, රාජ්‍ය පාලන ක්‍රම සහ ලෝක ශිෂ්ටාචාරය පිළිබඳ පුළුල් අවබෝධය."
  }
];

const GUIDANCE_MAP: Record<string, CareerOlGuidance> = {
  // ─── SOFTWARE & COMPUTING ──────────────────────────────────────────────────
  "software-engineer": {
    coreSummary: "Minimum 6 Passes with Distinction ('A') or Credit ('C') in Mathematics, Science, and English.",
    sinhalaCoreSummary: "ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි ඇතුළුව අවම සාමාර්ථ 6ක් ('A' හෝ 'C' සාමාර්ථ සහිතව).",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
      sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
      reason: "Provides essential understanding of startup balance sheets, project budgeting, SaaS revenue, and corporate operations.",
      sinhalaReason: "මෘදුකාංග ව්‍යාපෘති අයවැය, SaaS මූල්‍ය ආකෘති සහ ව්‍යාපාරික මෙහෙයුම් තේරුම් ගැනීමට උපකාරී වේ.",
      alternatives: "Geography (spatial computing & GIS) or Entrepreneurship Studies",
      sinhalaAlternatives: "භූගෝල විද්‍යාව (GIS/සිතියම්කරණය) හෝ ව්‍යවසායකත්ව අධ්‍යයනය"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය) or Art (චිත්‍ර කලාව)",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
      reason: "English Literature hones analytical communication and documentation; Art builds color theory and spatial design for UI/UX.",
      sinhalaReason: "ඉංග්‍රීසි සාහිත්‍යය මඟින් ලේඛනගත කිරීමේ සහ සන්නිවේදන හැකියාවද, චිත්‍ර කලාව මඟින් UI/UX නිර්මාණකරණයද දියුණු කරයි.",
      alternatives: "Western Music or Drama & Theatre",
      sinhalaAlternatives: "බටහිර සංගීතය හෝ නාට්‍ය හා රංග කලාව"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Information & Communication Technology - ICT (තොරතුරු හා සන්නිවේදන තාක්ෂණය)",
      sinhalaRecommendedSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
      reason: "Directly introduces algorithmic thinking, Python/scratch flowcharts, data structures, binary arithmetic, and web technologies.",
      sinhalaReason: "ඇල්ගොරිතම චින්තනය, ක්‍රමලේඛන මූලධර්ම, ද්විමය ගණිතය සහ වෙබ් තාක්ෂණය පිළිබඳ ප්‍රායෝගික පදනම ලබාදේ.",
      alternatives: "Design & Technology (D&T) or Electronics Technology",
      sinhalaAlternatives: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T) හෝ විද්‍යුත් තාක්ෂණවේදය"
    },
    additionalMaths: {
      recommended: true,
      importance: "HIGHLY_RECOMMENDED",
      badgeText: "Highly Recommended for Physical Science",
      sinhalaBadgeText: "ගණිත අංශයට ඉතා නිර්දේශිතයි",
      reason: "Mastering O/L Additional Maths (Quadratic equations, Trigonometry, Coordinate Geometry) gives a massive competitive advantage in A/L Combined Mathematics.",
      sinhalaReason: "වර්ගජ සමීකරණ, ත්‍රිකෝණමිතිය සහ ඛණ්ඩාංක ජ්‍යාමිතිය ප්‍රගුණ කිරීම A/L සංයුක්ත ගණිතය (Combined Maths) ඉතා පහසුවෙන් ජයගැනීමට මහඟු පිටුවහලකි."
    },
    juniorTip: "Strive for Distinction ('A') in Mathematics, Science, and English at O/L to secure entrance to premier A/L Physical Science (Maths) streams.",
    sinhalaJuniorTip: "ප්‍රමුඛ පාසල් වල A/L ගණිත අංශයට ඇතුළත් වීමට ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි සඳහා 'A' සාමාර්ථ ලබාගැනීම ඉලක්ක කරන්න."
  },

  // ─── ENGINEERING ───────────────────────────────────────────────────────────
  "engineer": {
    coreSummary: "Minimum 6 Passes with Distinction ('A') or Credit ('C') in Mathematics, Science, and English.",
    sinhalaCoreSummary: "ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි ඇතුළුව අවම සාමාර්ථ 6ක් ('A' හෝ 'C' සාමාර්ථ සහිතව).",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Geography (භූගෝල විද්‍යාව) or Business & Accounting Studies",
      sinhalaRecommendedSubject: "භූගෝල විද්‍යාව හෝ ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
      reason: "Geography teaches topography, contour maps, weathering, and hydrology for Civil/Environmental engineers; Accounting teaches engineering cost control.",
      sinhalaReason: "භූගෝල විද්‍යාව මඟින් සමෝච්ච රේඛා, භූගෝලීය සැකැස්ම සහ ජල විද්‍යාවද, ගිණුම්කරණය මඟින් ව්‍යාපෘති පිරිවැය කළමනාකරණයද උගන්වයි.",
      alternatives: "Civic Education or Entrepreneurship Studies",
      sinhalaAlternatives: "පුරවැසි අධ්‍යාපනය හෝ ව්‍යවසායකත්ව අධ්‍යයනය"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "Art (චිත්‍ර කලාව) or English Literature",
      sinhalaRecommendedSubject: "චිත්‍ර කලාව හෝ ඉංග්‍රීසි සාහිත්‍යය",
      reason: "Art develops isometric drawing, perspective sketching, and 3D spatial visualization needed for CAD and technical engineering drafting.",
      sinhalaReason: "චිත්‍ර කලාව මඟින් ත්‍රිමාණ අවකාශීය සංකල්ප, සමමිතික ඇඳීම් සහ ඉංජිනේරු සැලසුම් ඇඳීමේ පදනම ගොඩනංවයි.",
      alternatives: "Drama & Theatre or Music",
      sinhalaAlternatives: "නාට්‍ය හා රංග කලාව හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය) or ICT",
      sinhalaRecommendedSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T) හෝ ICT",
      reason: "Offers direct hands-on workshop experience with mechanical linkages, materials science, electronic circuits, and orthographic projections.",
      sinhalaReason: "යාන්ත්‍රික සම්බන්ධතා, ද්‍රව්‍ය තාක්ෂණය, විද්‍යුත් පරිපථ සහ ප්‍රක්ෂේපන ඇඳීම් පිළිබඳ ප්‍රායෝගික වැඩමුළු පුහුණුවක් ලබාදේ.",
      alternatives: "Design, Electrical & Electronic Technology or Mechanical Technology",
      sinhalaAlternatives: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ යාන්ත්‍රික තාක්ෂණවේදය"
    },
    additionalMaths: {
      recommended: true,
      importance: "ESSENTIAL",
      badgeText: "Essential Preparation for Combined Maths",
      sinhalaBadgeText: "සංයුක්ත ගණිතය සඳහා අත්‍යවශ්‍යයි",
      reason: "O/L Additional Mathematics is the proven gold standard foundation for mastering A/L Combined Maths (Pure Calculus, Trigonometry, Statics & Dynamics).",
      sinhalaReason: "A/L සංයුක්ත ගණිතයේ කලනය (Calculus), ත්‍රිකෝණමිතිය සහ ස්ථිති-ගති විද්‍යාව සඳහා අතිරේක ගණිතය ප්‍රබලතම පදනම සපයයි."
    },
    juniorTip: "Securing 8 or 9 'A' passes with Additional Maths is the standard track followed by top Engineering faculty entrants at Moratuwa and Peradeniya.",
    sinhalaJuniorTip: "මොරටුව සහ පේරාදෙණිය ඉංජිනේරු පීඨ වලට තේරීපත්වන සිසුන්ගෙන් බහුතරයක් O/L හිදී අතිරේක ගණිතය සමඟ 'A' 8-9ක් ලබාගත් අයයි."
  },

  // ─── MEDICINE (MBBS) ───────────────────────────────────────────────────────
  "doctor": {
    coreSummary: "Minimum 6 Passes with Distinction ('A') in Science, Mathematics, English, and First Language.",
    sinhalaCoreSummary: "විද්‍යාව, ගණිතය, ඉංග්‍රීසි සහ මව්බස සඳහා විශිෂ්ට ('A') සාමාර්ථ සහිතව අවම සම්මාන 6ක්.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Geography (භූගෝල විද්‍යාව) or Civic Education",
      sinhalaRecommendedSubject: "භූගෝල විද්‍යාව හෝ පුරවැසි අධ්‍යාපනය",
      reason: "Geography covers environmental epidemiology, vector habitats, and community demographics; Civic Education covers medical ethics and human rights.",
      sinhalaReason: "භූගෝල විද්‍යාව මඟින් රෝග වාහක පරිසරය හා ජනගහන ව්‍යාප්තියද, පුරවැසි අධ්‍යාපනය මඟින් රෝගී අයිතිවාසිකම් හා ආචාරධර්මද උගන්වයි.",
      alternatives: "Business & Accounting Studies",
      sinhalaAlternatives: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය)",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය",
      reason: "MBBS faculties in Sri Lanka operate entirely in English. Rigorous English Literature comprehension prepares you for thousands of pages of medical texts.",
      sinhalaReason: "ශ්‍රී ලංකාවේ සියලුම වෛද්‍ය පීඨ දේශන හා විභාග 100% ක්ම ඉංග්‍රීසි මාධ්‍යයෙන් සිදුවන බැවින් සංකීර්ණ වෛද්‍ය ග්‍රන්ථ හැදෑරීමට මෙය අතිශය වැදගත් වේ.",
      alternatives: "Art (anatomic sketch visualization) or Western/Eastern Music",
      sinhalaAlternatives: "චිත්‍ර කලාව (ව්‍යුහ විද්‍යාත්මක සටහන් සඳහා) හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Health & Physical Education (සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය)",
      sinhalaRecommendedSubject: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය",
      reason: "Covers human anatomy, physiology, cardiovascular health, nutrition, immunology, and emergency first aid at an early secondary stage.",
      sinhalaReason: "මිනිස් සිරුරේ පද්ධති, ව්‍යුහ විද්‍යාව, පෝෂණය, ප්‍රතිශක්තිකරණය සහ ප්‍රථමාධාර පිළිබඳ මුල් අවධියේදීම දැනුම ලබාදේ.",
      alternatives: "Agriculture & Food Technology or ICT",
      sinhalaAlternatives: "කෘෂිකර්මය හා ආහාර තාක්ෂණය හෝ ICT"
    },
    additionalMaths: {
      recommended: false,
      importance: "BENEFICIAL",
      badgeText: "Beneficial for Physics Calculations",
      sinhalaBadgeText: "භෞතික විද්‍යා ගණනය කිරීම් සඳහා හිතකරයි",
      reason: "While not compulsory for A/L Bio Science, Additional Maths builds fast calculation instincts useful for A/L Physics mechanics and chemistry equilibrium.",
      sinhalaReason: "A/L ජීව විද්‍යා අංශයට අනිවාර්ය නොවුණද, A/L භෞතික විද්‍යාවේ ගණනය කිරීම් සහ රසායන විද්‍යා සමතුලිතතා ගණන් ඉක්මනින් විසඳීමට උපකාරී වේ."
    },
    juniorTip: "Top government medical faculties (Colombo, Peradeniya, Sri Jayewardenepura) admit candidates with high Z-scores; building disciplined study habits at O/L is foundational.",
    sinhalaJuniorTip: "කොළඹ, පේරාදෙණිය, ජයවර්ධනපුර වෛද්‍ය පීඨ සඳහා ඉතා ඉහළ Z-score අවශ්‍ය වන බැවින් සාමාන්‍ය පෙළ අවධියේ සිටම ක්‍රමානුකූල පාඩම් පුරුදු ඇතිකර ගන්න."
  },

  // ─── DENTIST ───────────────────────────────────────────────────────────────
  "dentist": {
    coreSummary: "Minimum 6 Passes with Distinction ('A') in Science, Mathematics, English, and First Language.",
    sinhalaCoreSummary: "විද්‍යාව, ගණිතය, ඉංග්‍රීසි සහ මව්බස සඳහා විශිෂ්ට ('A') සාමාර්ථ සහිතව අවම සම්මාන 6ක්.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Business & Accounting Studies or Civic Education",
      sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය හෝ පුරවැසි අධ්‍යාපනය",
      reason: "Crucial for private dental clinic financial management, equipment amortisation, and healthcare ethics.",
      sinhalaReason: "පෞද්ගලික දන්ත සායනයක් පවත්වාගෙන යාම, උපකරණ මිලදී ගැනීම් සහ වෛද්‍ය ආචාරධර්ම සඳහා වැදගත් වේ.",
      alternatives: "Geography",
      sinhalaAlternatives: "භූගෝල විද්‍යාව"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "Art (චිත්‍ර කලාව) or English Literature",
      sinhalaRecommendedSubject: "චිත්‍ර කලාව හෝ ඉංග්‍රීසි සාහිත්‍යය",
      reason: "Dentistry requires high manual dexterity, tooth carving, and fine aesthetic symmetry; Art develops superior hand-eye coordination.",
      sinhalaReason: "දන්ත වෛද්‍ය විද්‍යාවේදී දත් ආකෘති නිර්මාණය, සියුම් කැටයම් සහ අත්වල සියුම් ක්‍රියාකාරිත්වය (manual dexterity) සඳහා චිත්‍ර කලාව මහඟු පදනමකි.",
      alternatives: "Oriental Music or Dancing",
      sinhalaAlternatives: "සංගීතය හෝ නර්තනය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Health & Physical Education (සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය)",
      sinhalaRecommendedSubject: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය",
      reason: "Covers oral hygiene, biological pathogens, musculoskeletal posture, and general anatomy.",
      sinhalaReason: "මුඛ සෞඛ්‍යය, ව්‍යාධිජනක ක්ෂුද්‍රජීවීන් සහ මාංශ පේශි ක්‍රියාකාරිත්වය පිළිබඳ අවබෝධය සපයයි.",
      alternatives: "ICT or Design & Technology",
      sinhalaAlternatives: "තොරතුරු තාක්ෂණය හෝ නිර්මාණකරණය හා තාක්ෂණවේදය"
    },
    additionalMaths: {
      recommended: false,
      importance: "OPTIONAL",
      badgeText: "Optional",
      sinhalaBadgeText: "විකල්ප විෂයයකි",
      reason: "Standard Mathematics at O/L provides sufficient preparation for A/L Biological Science.",
      sinhalaReason: "සාමාන්‍ය ගණිතය සාමාන්‍ය පෙළදී හොඳින් සමත්වීම A/L ජීව විද්‍යා අංශය හැදෑරීමට ප්‍රමාණවත් වේ."
    },
    juniorTip: "BDS (Bachelor of Dental Surgery) at Peradeniya is extremely competitive. Target high distinction passes in Science and English.",
    sinhalaJuniorTip: "පේරාදෙණිය දන්ත වෛද්‍ය පීඨයට ඇතුළත් වීමට ඉහළ Z-score අවශ්‍ය වේ. විද්‍යාව සහ ඉංග්‍රීසි සඳහා විශිෂ්ට සාමාර්ථ ඉලක්ක කරන්න."
  },

  // ─── VETERINARIAN ──────────────────────────────────────────────────────────
  "veterinarian": {
    coreSummary: "Minimum 6 Passes with Distinction ('A') in Science, Mathematics, English, and First Language.",
    sinhalaCoreSummary: "විද්‍යාව, ගණිතය, ඉංග්‍රීසි සහ මව්බස සඳහා විශිෂ්ට ('A') සාමාර්ථ සහිතව අවම සම්මාන 6ක්.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Geography (භූගෝල විද්‍යාව)",
      sinhalaRecommendedSubject: "භූගෝල විද්‍යාව",
      reason: "Covers animal biogeography, ecological climate zones, wildlife habitats, and agricultural livestock regions.",
      sinhalaReason: "සත්ව භූගෝල විද්‍යාව, දේශගුණික කලාප, වනජීවී පරිසර පද්ධති සහ පශු සම්පත් කලාප පිළිබඳ දැනුම ලබාදේ.",
      alternatives: "Business & Accounting Studies",
      sinhalaAlternatives: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය) or Art",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
      reason: "BVSc degree at Peradeniya is taught in English. Art develops animal anatomical observation and sketching.",
      sinhalaReason: "පේරාදෙණිය පශු වෛද්‍ය පීඨයේ අධ්‍යයන කටයුතු ඉංග්‍රීසි මාධ්‍යයෙන් සිදුවන අතර චිත්‍ර කලාව සත්ව ව්‍යුහ විද්‍යා සටහන් ඇඳීමට උපකාරී වේ.",
      alternatives: "Drama & Theatre",
      sinhalaAlternatives: "නාට්‍ය හා රංග කලාව"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Agriculture & Food Technology (කෘෂිකර්මය හා ආහාර තාක්ෂණය)",
      sinhalaRecommendedSubject: "කෘෂිකර්මය හා ආහාර තාක්ෂණය",
      reason: "Direct hands-on study of livestock breeds (dairy cattle, poultry, swine), animal feed, pasture management, and veterinary hygiene.",
      sinhalaReason: "පශු සම්පත් පාලනය (කිරි ගව, කුකුළු, එළු පාලනය), සත්ව ආහාර හා තෘණ වගාව පිළිබඳ ප්‍රායෝගික පුහුණුවක් සපයයි.",
      alternatives: "Health & Physical Education or Aquatic Bioresources",
      sinhalaAlternatives: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය හෝ ජලජ ජෛව සම්පත්"
    },
    additionalMaths: {
      recommended: false,
      importance: "OPTIONAL",
      badgeText: "Optional",
      sinhalaBadgeText: "විකල්ප විෂයයකි",
      reason: "Focus deeply on core Science and Agriculture at O/L.",
      sinhalaReason: "සාමාන්‍ය පෙළදී විද්‍යාව සහ කෘෂිකර්මය කෙරෙහි ප්‍රමුඛ අවධානයක් යොමු කරන්න."
    },
    juniorTip: "BVSc is offered exclusively at the University of Peradeniya; aim for strong distinction grades across all O/L subjects.",
    sinhalaJuniorTip: "ශ්‍රී ලංකාවේ පශු වෛද්‍ය උපාධිය පිරිනමනු ලබන්නේ පේරාදෙණිය විශ්වවිද්‍යාලයෙන් පමණක් බැවින් ඉහළ සාමාර්ථ අත්‍යවශ්‍ය වේ."
  },

  // ─── PHARMACIST & ALLIED HEALTH ────────────────────────────────────────────
  "pharmacist": {
    coreSummary: "Minimum 6 Passes at O/L with Credit (C) in Science, Mathematics, and English.",
    sinhalaCoreSummary: "විද්‍යාව, ගණිතය සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) සාමාර්ථ සහිතව විෂයයන් 6ක් සමත්වීම.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
      sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
      reason: "Essential for community pharmacy retail, inventory control, drug importation economics, and pharmaceutical supply chain management.",
      sinhalaReason: "ඖෂධහල් කළමනාකරණය, ඖෂධ තොග පාලනය සහ ආනයන මූල්‍ය කටයුතු තේරුම් ගැනීමට උපකාරී වේ.",
      alternatives: "Civic Education or Geography",
      sinhalaAlternatives: "පුරවැසි අධ්‍යාපනය හෝ භූගෝල විද්‍යාව"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය)",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය",
      reason: "Critical for understanding international drug monographs, pharmacopeia, chemical naming conventions, and clinical trial reports.",
      sinhalaReason: "ජාත්‍යන්තර ඖෂධ නාමාවලි, රසායනික සූත්‍ර සහ ඖෂධීය පර්යේෂණ පත්‍රිකා කියවා තේරුම් ගැනීමට ඉවහල් වේ.",
      alternatives: "Art or Music",
      sinhalaAlternatives: "චිත්‍ර කලාව හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Health & Physical Education (සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය) or ICT",
      sinhalaRecommendedSubject: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය හෝ ICT",
      reason: "Teaches bodily absorption, metabolism, disease pathology, and digital pharmacy dispensing software basics.",
      sinhalaReason: "ශරීරයේ රෝග තත්ත්ව, ඖෂධ අවශෝෂණය සහ ඩිජිටල් ඖෂධ බෙදාහැරීමේ පද්ධති පිළිබඳ මූලික අවබෝධයක් ලබාදේ.",
      alternatives: "Agriculture & Food Technology",
      sinhalaAlternatives: "කෘෂිකර්මය හා ආහාර තාක්ෂණය"
    },
    additionalMaths: {
      recommended: false,
      importance: "OPTIONAL",
      badgeText: "Optional",
      sinhalaBadgeText: "විකල්ප විෂයයකි",
      reason: "Standard Mathematics covers dosage ratios, molecular weight formulas, and percentage concentrations adequately.",
      sinhalaReason: "ඖෂධ මාත්‍රා ගණනය සහ සාන්ද්‍රණ ගණනය කිරීම් සඳහා සාමාන්‍ය ගණිතය ප්‍රමාණවත් වේ."
    },
    juniorTip: "B.Pharm state university intake requires strong Bio Science A/L results with high chemistry marks.",
    sinhalaJuniorTip: "රාජ්‍ය විශ්වවිද්‍යාල B.Pharm උපාධියට ඇතුළත් වීමට A/L රසායන විද්‍යාව සඳහා ඉහළ ලකුණු ලබාගත යුතුය."
  },

  // ─── ACCOUNTING, FINANCE & BANKING ─────────────────────────────────────────
  "accountant": {
    coreSummary: "Minimum 6 Passes at O/L with Credit (C) or Distinction ('A') in Mathematics and English.",
    sinhalaCoreSummary: "ගණිතය සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) හෝ විශිෂ්ට (A) සාමාර්ථ සහිතව විෂයයන් 6ක් සමත්වීම.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
      sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
      reason: "The absolute foundational subject. Teaches double-entry bookkeeping, ledger posting, trial balances, and profit & loss statements — gives an entire year's head start for A/L Accounting.",
      sinhalaReason: "ද්විත්ව සටහන් ක්‍රමය, ලෙජර ගිණුම්, ශේෂ පිරික්සුම සහ ලාභ අලාභ ගිණුම් පිළිබඳ ප්‍රබල පදනම සපයන අතර A/L ගිණුම්කරණයට පූර්ණ පෙරහුරුවකි.",
      alternatives: "Entrepreneurship Studies or Geography",
      sinhalaAlternatives: "ව්‍යවසායකත්ව අධ්‍යයනය හෝ භූගෝල විද්‍යාව"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය) or Drama & Theatre",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ නාට්‍ය හා රංග කලාව",
      reason: "Professional accountancy bodies (CA Sri Lanka, ACCA, CIMA) require immaculate English communication, audit report drafting, and presentation skills.",
      sinhalaReason: "CA Sri Lanka, ACCA, CIMA වැනි වෘත්තීය විභාග සහ විගණන වාර්තා සැකසීම සඳහා උසස් ඉංග්‍රීසි භාෂා සහ සන්නිවේදන ප්‍රවීණතාවක් අවශ්‍ය වේ.",
      alternatives: "Art or Music",
      sinhalaAlternatives: "චිත්‍ර කලාව හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Information & Communication Technology - ICT (තොරතුරු හා සන්නිවේදන තාක්ෂණය)",
      sinhalaRecommendedSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
      reason: "Modern accounting is completely digitised. ICT covers spreadsheets (Excel formulas), relational databases, and ERP software concepts.",
      sinhalaReason: "නූතන ගිණුම්කරණය ඩිජිටල්කරණය වී ඇති බැවින් Excel, දත්ත සමුදාය (Databases) සහ ERP මෘදුකාංග භාවිතයට ICT විෂයය අත්‍යවශ්‍ය වේ.",
      alternatives: "Communication & Media Studies",
      sinhalaAlternatives: "සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය"
    },
    additionalMaths: {
      recommended: false,
      importance: "BENEFICIAL",
      badgeText: "Beneficial for Financial Mathematics",
      sinhalaBadgeText: "මූල්‍ය ගණිතය සඳහා හිතකරයි",
      reason: "Strengthens statistical and compound interest calculation agility for advanced financial modeling and actuarial pathways.",
      sinhalaReason: "උසස් මූල්‍ය ආකෘතිකරණය, සංඛ්‍යානය සහ වැල් පොලී ගණනය කිරීම් සඳහා ඉවහල් වේ."
    },
    juniorTip: "A solid 'A' in O/L Mathematics and English allows you to immediately register for CA Sri Lanka Foundation level or CIMA certificate right after O/L.",
    sinhalaJuniorTip: "සාමාන්‍ය පෙළ ගණිතය සහ ඉංග්‍රීසි සඳහා 'A' සාමාර්ථ තිබීමෙන් O/L නිමවූ වහාම CA Sri Lanka හෝ CIMA ලියාපදිංචි වීමට අවස්ථාව ලැබේ."
  },

  // ─── LAWYER ────────────────────────────────────────────────────────────────
  "lawyer": {
    coreSummary: "Minimum 6 Passes at O/L with Distinction ('A') or Credit ('C') in English Language and First Language.",
    sinhalaCoreSummary: "ඉංග්‍රීසි භාෂාව සහ මව්බස සඳහා විශිෂ්ට ('A') හෝ සම්මාන ('C') සහිතව විෂයයන් 6ක් සමත්වීම.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Civic Education (පුරවැසි අධ්‍යාපනය)",
      sinhalaRecommendedSubject: "පුරවැසි අධ්‍යාපනය",
      reason: "Covers the Constitution of Sri Lanka, fundamental human rights, separation of powers, the parliamentary legislative process, and court systems.",
      sinhalaReason: "ශ්‍රී ලංකා ආණ්ඩුක්‍රම ව්‍යවස්ථාව, මූලික මිනිස් අයිතිවාසිකම්, නීතියේ ආධිපත්‍යය, පාර්ලිමේන්තු පනත් සහ අධිකරණ පද්ධතිය පිළිබඳ ඍජු පදනම සපයයි.",
      alternatives: "Business & Accounting Studies or Geography",
      sinhalaAlternatives: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය හෝ භූගෝල විද්‍යාව"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය) or Sinhala/Tamil Literature",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ සිංහල/දෙමළ සාහිත්‍යය",
      reason: "Hones critical text dissection, persuasive linguistic argument structure, textual interpretation, and rhetoric essential for court advocacy.",
      sinhalaReason: "නීති තර්ක ගොඩනැගීම, වගන්ති විශ්ලේෂණය, නඩු තීන්දු කියවීම සහ අධිකරණයේ වාචික තර්ක කිරීමේ භාෂා හැකියාව දියුණු කරයි.",
      alternatives: "Drama & Theatre (public speaking & courtroom confidence)",
      sinhalaAlternatives: "නාට්‍ය හා රංග කලාව (කථිකත්වය හා ආත්මවිශ්වාසය)"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Communication & Media Studies (සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය)",
      sinhalaRecommendedSubject: "සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය",
      reason: "Teaches public communication ethics, media regulation laws, defamation concepts, and persuasive public addressing.",
      sinhalaReason: "ජනමාධ්‍ය නීති, අපහාස නීතිය, මහජන සන්නිවේදන ආචාරධර්ම සහ මාධ්‍ය විශ්ලේෂණය පිළිබඳ අවබෝධයක් ලබාදේ.",
      alternatives: "Information & Communication Technology (ICT)",
      sinhalaAlternatives: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)"
    },
    additionalMaths: {
      recommended: false,
      importance: "OPTIONAL",
      badgeText: "Optional",
      sinhalaBadgeText: "විකල්ප විෂයයකි",
      reason: "Formal deductive logic exercises are beneficial, but standard mathematics is completely sufficient for Law College Entrance.",
      sinhalaReason: "නීති විද්‍යාල ප්‍රවේශයට සාමාන්‍ය ගණිතය ප්‍රමාණවත් වේ."
    },
    juniorTip: "Sri Lanka Law College entrance and University of Colombo LLB entrance place extraordinary weight on English proficiency and analytical general knowledge.",
    sinhalaJuniorTip: "කොළඹ විශ්වවිද්‍යාල නීති පීඨය සහ ශ්‍රී ලංකා නීති විද්‍යාල ප්‍රවේශය සඳහා ඉංග්‍රීසි භාෂා ප්‍රවීණතාවය සහ සාමාන්‍ය දැනුම අතිශය තීරණාත්මක වේ."
  },

  // ─── ARCHITECT & QUANTITY SURVEYOR ─────────────────────────────────────────
  "architect": {
    coreSummary: "Minimum 6 Passes at O/L with Credit (C) or Distinction ('A') in Mathematics, English, and Science.",
    sinhalaCoreSummary: "ගණිතය, ඉංග්‍රීසි සහ විද්‍යාව සඳහා අවම සම්මාන (C) හෝ විශිෂ්ට ('A') සාමාර්ථ සහිතව විෂයයන් 6ක් සමත්වීම.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Geography (භූගෝල විද්‍යාව)",
      sinhalaRecommendedSubject: "භූගෝල විද්‍යාව",
      reason: "Covers urban settlement morphology, contour topography, climate zoning, sunlight angles, and natural environmental hazards.",
      sinhalaReason: "නාගරික සැලසුම්කරණය, සමෝච්ච සමීක්ෂණ, දේශගුණික තත්ත්ව සහ හිරු එළිය පතිත වන කෝණ පිළිබඳ අවබෝධය සපයයි.",
      alternatives: "Business & Accounting Studies",
      sinhalaAlternatives: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "Art (චිත්‍ර කලාව)",
      sinhalaRecommendedSubject: "චිත්‍ර කලාව",
      reason: "Crucial for passing the mandatory University of Moratuwa Architecture Aptitude Test. Teaches linear perspective, scale, shading, and visual imagination.",
      sinhalaReason: "මොරටුව විශ්වවිද්‍යාලයේ ගෘහ නිර්මාණ ශිල්ප ප්‍රවේශ කුසලතා පරීක්ෂණය (Aptitude Test) සමත්වීමට පර්යාලෝක චිත්‍ර (Perspective), සෙවනැලි සහ අවකාශීය චිත්‍ර අත්‍යවශ්‍ය වේ.",
      alternatives: "English Literature or Music",
      sinhalaAlternatives: "ඉංග්‍රීසි සාහිත්‍යය හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය) or ICT",
      sinhalaRecommendedSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T) හෝ ICT",
      reason: "Hands-on experience with scale models, wood/metal joinery, structural equilibrium, and architectural CAD foundations.",
      sinhalaReason: "ආකෘති නිර්මාණය, ව්‍යුහාත්මක සමතුලිතතාව සහ පරිගණක ආශ්‍රිත සැලසුම්කරණ (CAD) මූලිකාංග උගන්වයි.",
      alternatives: "Design & Construction Technology",
      sinhalaAlternatives: "ඉදිකිරීම් තාක්ෂණවේදය"
    },
    additionalMaths: {
      recommended: true,
      importance: "HIGHLY_RECOMMENDED",
      badgeText: "Highly Recommended for Geometry & 3D Spatial Math",
      sinhalaBadgeText: "ජ්‍යාමිතිය හා අවකාශීය ගණිතය සඳහා ඉතා නිර්දේශිතයි",
      reason: "Trigonometry and coordinate geometry directly translate to structural stability and architectural geometric forms.",
      sinhalaReason: "ත්‍රිකෝණමිතිය සහ ඛණ්ඩාංක ජ්‍යාමිතිය ගෘහනිර්මාණ ව්‍යුහයන්ගේ ස්ථායිතාව සහ අවකාශීය සැලසුම් සඳහා ඍජුවම උපකාරී වේ."
    },
    juniorTip: "Start keeping a personal sketchbook of buildings, streets, and natural shadows early; Moratuwa and SLIA value creative portfolios.",
    sinhalaJuniorTip: "ගොඩනැගිලි සහ පරිසර නිර්මාණ ඇතුළත් චිත්‍ර එකතුවක් (Portfolio) සාමාන්‍ය පෙළ කාලයේ සිටම නිර්මාණය කිරීම මොරටුව ප්‍රවේශයට මහඟු වාසියකි."
  },

  // ─── AIRLINE PILOT & AIR TRAFFIC CONTROLLER ────────────────────────────────
  "airline-pilot": {
    coreSummary: "Minimum 6 Passes at O/L in a single sitting with Credit (C) passes in Mathematics, Science, and English.",
    sinhalaCoreSummary: "එක් වරකදී ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි සඳහා සම්මාන (C) සහිතව අවම සාමාර්ථ 6ක් සමත්වීම (CAASL නියමයකි).",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Geography (භූගෝල විද්‍යාව)",
      sinhalaRecommendedSubject: "භූගෝල විද්‍යාව",
      reason: "Covers latitude/longitude coordinates, international time zones, atmospheric air masses, jet streams, monsoon weather, and cartography.",
      sinhalaReason: "අක්ෂාංශ, දේශාංශ, ජාත්‍යන්තර වේලා කලාප, වායුගෝලීය පීඩන රටා, ජෙට් ප්‍රවාහ සහ කාලගුණ විද්‍යාව ගුවන් නියමුවන්ට මූලික වේ.",
      alternatives: "Foreign Language (French / German / Japanese)",
      sinhalaAlternatives: "විදේශ භාෂාවක් (ප්‍රංශ, ජර්මන්, ජපන්)"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය)",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය",
      reason: "Aviation demands flawless radio telephony in ICAO Operational Level 4+ English under high-stress emergency cockpit conditions.",
      sinhalaReason: "ගුවන් නියමු කුටියේ හදිසි සන්නිවේදනය සහ ICAO ජාත්‍යන්තර ගුවන්විදුලි සන්නිවේදන ප්‍රමිතීන් සඳහා ඉංග්‍රීසි භාෂා ප්‍රවීණතාව අනිවාර්ය වේ.",
      alternatives: "Western Music or Art",
      sinhalaAlternatives: "බටහිර සංගීතය හෝ චිත්‍ර කලාව"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Design, Electrical & Electronic Technology or ICT",
      sinhalaRecommendedSubject: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ ICT",
      reason: "Covers radar principles, radio wave propagation, electromagnetic frequencies, and flight computer hardware.",
      sinhalaReason: "රේඩාර් පද්ධති, ගුවන්විදුලි තරංග, විද්‍යුත් චුම්භක සංඛ්‍යාත සහ ගුවන් යානා පරිගණක පද්ධති පිළිබඳ අවබෝධයක් ලබාදේ.",
      alternatives: "Design & Technology (D&T)",
      sinhalaAlternatives: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)"
    },
    additionalMaths: {
      recommended: true,
      importance: "HIGHLY_RECOMMENDED",
      badgeText: "Highly Recommended for Navigation Vectors",
      sinhalaBadgeText: "ගුවන් යාත්‍රා දෛශික ගණනය සඳහා ඉතා නිර්දේශිතයි",
      reason: "Mental trigonometry, descent profiles, wind triangle vectors, and fuel burn rates require sharp, instinctive calculation agility.",
      sinhalaReason: "සුළං දෛශික, ගොඩබෑමේ කෝණ සහ ඉන්ධන පරිභෝජන ගණනය කිරීම් ක්ෂණිකව සිදුකිරීමට අතිරේක ගණිතය මනා පුහුණුවක් සපයයි."
    },
    juniorTip: "Civil Aviation Authority of Sri Lanka (CAASL) strictly requires O/L passes with Credits in English, Maths, and Science in a single sitting for CPL issuance.",
    sinhalaJuniorTip: "ශ්‍රී ලංකා සිවිල් ගුවන් සේවා අධිකාරිය (CAASL) ගුවන් නියමු බලපත්‍ර සඳහා සාමාන්‍ය පෙළ එකවර විභාගයෙන් ගණිතය, විද්‍යාව, ඉංග්‍රීසි සම්මාන (C) ලබාගැනීම අනිවාර්ය කර ඇත."
  }
};

import { getEngineeringDiscipline } from "./engineeringDisciplines";

// Default fallback generator for careers not explicitly mapped
export function getCareerOlGuidance(careerSlug: string, category: string, engineeringFieldId?: string): CareerOlGuidance {
  if (careerSlug === "engineer" && engineeringFieldId) {
    const engDiscipline = getEngineeringDiscipline(engineeringFieldId);
    if (engDiscipline) {
      return {
        coreSummary: `Minimum 6 Passes at O/L with Credit ('C') or Distinction ('A') in Mathematics, Science, and English for ${engDiscipline.titleEn}.`,
        sinhalaCoreSummary: `${engDiscipline.titleSi} සඳහා ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) හෝ විශිෂ්ට (A) සාමාර්ථ සහිතව විෂයයන් 6ක් සමත්වීම.`,
        basket1: {
          basketNumber: 1,
          basketTitle: "Basket 1 (Social Sciences & Commerce)",
          sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
          recommendedSubject: engDiscipline.olGuidance.basket1.subject,
          sinhalaRecommendedSubject: engDiscipline.olGuidance.basket1.sinhalaSubject,
          reason: engDiscipline.olGuidance.basket1.reason,
          sinhalaReason: engDiscipline.olGuidance.basket1.sinhalaReason,
          alternatives: "Civic Education or Entrepreneurship Studies",
          sinhalaAlternatives: "පුරවැසි අධ්‍යාපනය හෝ ව්‍යවසායකත්ව අධ්‍යයනය"
        },
        basket2: {
          basketNumber: 2,
          basketTitle: "Basket 2 (Aesthetic & Literature)",
          sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
          recommendedSubject: engDiscipline.olGuidance.basket2.subject,
          sinhalaRecommendedSubject: engDiscipline.olGuidance.basket2.sinhalaSubject,
          reason: engDiscipline.olGuidance.basket2.reason,
          sinhalaReason: engDiscipline.olGuidance.basket2.sinhalaReason,
          alternatives: "Art or English Literature",
          sinhalaAlternatives: "චිත්‍ර කලාව හෝ ඉංග්‍රීසි සාහිත්‍යය"
        },
        basket3: {
          basketNumber: 3,
          basketTitle: "Basket 3 (Technical & Vocational)",
          sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
          recommendedSubject: engDiscipline.olGuidance.basket3.subject,
          sinhalaRecommendedSubject: engDiscipline.olGuidance.basket3.sinhalaSubject,
          reason: engDiscipline.olGuidance.basket3.reason,
          sinhalaReason: engDiscipline.olGuidance.basket3.sinhalaReason,
          alternatives: "ICT or Design & Technology (D&T)",
          sinhalaAlternatives: "තොරතුරු තාක්ෂණය හෝ නිර්මාණකරණය හා තාක්ෂණවේදය"
        },
        additionalMaths: {
          recommended: engDiscipline.olGuidance.additionalMaths.recommended,
          importance: engDiscipline.olGuidance.additionalMaths.recommended ? "HIGHLY_RECOMMENDED" : "BENEFICIAL",
          badgeText: engDiscipline.olGuidance.additionalMaths.badge,
          sinhalaBadgeText: engDiscipline.olGuidance.additionalMaths.sinhalaBadge,
          reason: engDiscipline.olGuidance.additionalMaths.reason,
          sinhalaReason: engDiscipline.olGuidance.additionalMaths.sinhalaReason
        },
        juniorTip: `Aim for 8–9 'A' passes at O/L with Additional Maths to secure admission into premier A/L Physical Science streams preparing for ${engDiscipline.titleEn}.`,
        sinhalaJuniorTip: `${engDiscipline.titleSi} ඉලක්ක කරගත් A/L ගණිත අංශයට තේරීපත්වීම සඳහා අතිරේක ගණිතය සමඟ 'A' 8–9ක් ඉලක්ක කරන්න.`
      };
    }
  }

  if (GUIDANCE_MAP[careerSlug]) {
    return GUIDANCE_MAP[careerSlug];
  }

  const catLower = (category || "").toLowerCase();
  const slugLower = (careerSlug || "").toLowerCase();

  // Engineering & Technology variants
  if (catLower.includes("engineer") || catLower.includes("tech") || slugLower.includes("engineer") || slugLower.includes("tech")) {
    return {
      coreSummary: "Minimum 6 Passes at O/L with Credit ('C') or Distinction ('A') in Mathematics, Science, and English.",
      sinhalaCoreSummary: "ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) හෝ විශිෂ්ට (A) සාමාර්ථ සහිතව විෂයයන් 6ක් සමත්වීම.",
      basket1: {
        basketNumber: 1,
        basketTitle: "Basket 1 (Social Sciences & Commerce)",
        sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
        recommendedSubject: "Business & Accounting Studies or Geography",
        sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය හෝ භූගෝල විද්‍යාව",
        reason: "Covers project cost estimation, budgeting, and spatial terrain mapping.",
        sinhalaReason: "ව්‍යාපෘති පිරිවැය කළමනාකරණය සහ භූගෝලීය මිනුම් තේරුම් ගැනීමට උපකාරී වේ.",
        alternatives: "Civic Education or Entrepreneurship",
        sinhalaAlternatives: "පුරවැසි අධ්‍යාපනය හෝ ව්‍යවසායකත්වය"
      },
      basket2: {
        basketNumber: 2,
        basketTitle: "Basket 2 (Aesthetic & Literature)",
        sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
        recommendedSubject: "English Literature or Art",
        sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
        reason: "Refines spatial 3D visualization or international technical English documentation.",
        sinhalaReason: "ත්‍රිමාණ අවකාශීය නිර්මාණශීලීත්වය හෝ ජාත්‍යන්තර ඉංග්‍රීසි සන්නිවේදනය දියුණු කරයි.",
        alternatives: "Music or Drama",
        sinhalaAlternatives: "සංගීතය හෝ නාට්‍ය"
      },
      basket3: {
        basketNumber: 3,
        basketTitle: "Basket 3 (Technical & Vocational)",
        sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
        recommendedSubject: "Information & Communication Technology - ICT or Design & Technology",
        sinhalaRecommendedSubject: "තොරතුරු තාක්ෂණය (ICT) හෝ නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)",
        reason: "Provides programming logic, electronic circuitry, or mechanical fabrication basics.",
        sinhalaReason: "ක්‍රමලේඛන තර්කනය, ඉලෙක්ට්‍රොනික පරිපථ සහ යාන්ත්‍රික සැලසුම්කරණ මූලිකාංග උගන්වයි.",
        alternatives: "Electronic or Mechanical Technology",
        sinhalaAlternatives: "විද්‍යුත් හෝ යාන්ත්‍රික තාක්ෂණවේදය"
      },
      additionalMaths: {
        recommended: true,
        importance: "HIGHLY_RECOMMENDED",
        badgeText: "Highly Recommended for Physical Science",
        sinhalaBadgeText: "ගණිත අංශයට ඉතා නිර්දේශිතයි",
        reason: "Builds high-speed algebra and trigonometry skills for A/L Combined Mathematics.",
        sinhalaReason: "A/L සංයුක්ත ගණිතය සඳහා අවශ්‍ය වීජ ගණිතය සහ ත්‍රිකෝණමිතිය පුහුණු කරයි."
      },
      juniorTip: "Aim for at least 6 'A' passes with Maths, Science, and English to qualify for top A/L science streams.",
      sinhalaJuniorTip: "A/L විද්‍යා සහ ගණිත අංශ වලට තේරීපත්වීම සඳහා ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි ඇතුළුව අවම 'A' 6ක් ඉලක්ක කරන්න."
    };
  }

  // Healthcare, Bio, Life Sciences, Agriculture
  if (catLower.includes("health") || catLower.includes("bio") || catLower.includes("agri") || catLower.includes("marine") || catLower.includes("food")) {
    return {
      coreSummary: "Minimum 6 Passes at O/L with Credit ('C') in Science, Mathematics, and English.",
      sinhalaCoreSummary: "විද්‍යාව, ගණිතය සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) සහිතව විෂයයන් 6ක් සමත්වීම.",
      basket1: {
        basketNumber: 1,
        basketTitle: "Basket 1 (Social Sciences & Commerce)",
        sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
        recommendedSubject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaRecommendedSubject: "භූගෝල විද්‍යාව",
        reason: "Covers ecosystems, soil dynamics, biodiversity climates, and environmental disease patterns.",
        sinhalaReason: "පරිසර පද්ධති, පස, ජෛව විවිධත්වය සහ පාරිසරික සාධක පිළිබඳ අවබෝධයක් ලබාදේ.",
        alternatives: "Civic Education or Business Studies",
        sinhalaAlternatives: "පුරවැසි අධ්‍යාපනය හෝ ව්‍යාපාර අධ්‍යයනය"
      },
      basket2: {
        basketNumber: 2,
        basketTitle: "Basket 2 (Aesthetic & Literature)",
        sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
        recommendedSubject: "English Literature or Art",
        sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
        reason: "Develops precise scientific observational sketching or English medical textbook reading fluency.",
        sinhalaReason: "විද්‍යාත්මක රූප සටහන් ඇඳීම හෝ උසස් ඉංග්‍රීසි කියවීමේ හැකියාව වර්ධනය කරයි.",
        alternatives: "Music or Drama",
        sinhalaAlternatives: "සංගීතය හෝ නාට්‍ය"
      },
      basket3: {
        basketNumber: 3,
        basketTitle: "Basket 3 (Technical & Vocational)",
        sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
        recommendedSubject: "Health & Physical Education or Agriculture & Food Technology",
        sinhalaRecommendedSubject: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය හෝ කෘෂිකර්මය හා ආහාර තාක්ෂණය",
        reason: "Provides direct foundational knowledge in biological anatomy, disease prevention, or plant/animal physiology.",
        sinhalaReason: "ශරීර ව්‍යුහය, සෞඛ්‍ය පුරුදු හෝ ශාක හා සත්ව කායික විද්‍යාව පිළිබඳ මූලික අවබෝධයක් සපයයි.",
        alternatives: "Aquatic Bioresources or ICT",
        sinhalaAlternatives: "ජලජ ජෛව සම්පත් හෝ ICT"
      },
      additionalMaths: {
        recommended: false,
        importance: "BENEFICIAL",
        badgeText: "Beneficial for Physics",
        sinhalaBadgeText: "භෞතික විද්‍යාවට හිතකරයි",
        reason: "Not required for Biological Science, but helps speed up A/L Physics calculations.",
        sinhalaReason: "ජීව විද්‍යා අංශයට අනිවාර්ය නොවන නමුත් A/L භෞතික විද්‍යා ගණනය කිරීම් සඳහා උපකාරී වේ."
      },
      juniorTip: "Maintain high marks in O/L Science and English as biology degrees in Sri Lanka require high Z-scores.",
      sinhalaJuniorTip: "ජීව විද්‍යා අංශයේ විශ්වවිද්‍යාල පාඨමාලා සඳහා ඉහළ Z-score අවශ්‍ය බැවින් O/L විද්‍යාව සහ ඉංග්‍රීසි සඳහා උපරිම ලකුණු ලබාගන්න."
    };
  }

  // Business, Commerce, Management, Finance
  if (catLower.includes("business") || catLower.includes("finance") || catLower.includes("commerce") || catLower.includes("management")) {
    return {
      coreSummary: "Minimum 6 Passes at O/L with Credit ('C') in Mathematics and English.",
      sinhalaCoreSummary: "ගණිතය සහ ඉංග්‍රීසි සඳහා අවම සම්මාන (C) සහිතව විෂයයන් 6ක් සමත්වීම.",
      basket1: {
        basketNumber: 1,
        basketTitle: "Basket 1 (Social Sciences & Commerce)",
        sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
        recommendedSubject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
        sinhalaRecommendedSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Direct foundation for A/L Commerce. Covers bookkeeping, ledgers, balance sheets, and commerce theory.",
        sinhalaReason: "A/L වාණිජ අංශයට ඍජු පදනමයි. මූලික පොත් තැබීම, ගිණුම්කරණ සමීකරණ සහ වාණිජ මූලධර්ම උගන්වයි.",
        alternatives: "Entrepreneurship Studies or Geography",
        sinhalaAlternatives: "ව්‍යවසායකත්ව අධ්‍යයනය හෝ භූගෝල විද්‍යාව"
      },
      basket2: {
        basketNumber: 2,
        basketTitle: "Basket 2 (Aesthetic & Literature)",
        sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
        recommendedSubject: "English Literature or Drama & Theatre",
        sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ නාට්‍ය හා රංග කලාව",
        reason: "Builds persuasive verbal communication, negotiation skills, and executive reporting confidence.",
        sinhalaReason: "සාකච්ඡා කිරීම, ව්‍යාපාරික ඉදිරිපත් කිරීම් (Presentations) සහ වාර්තාකරණ භාෂා හැකියාව දියුණු කරයි.",
        alternatives: "Art or Music",
        sinhalaAlternatives: "චිත්‍ර කලාව හෝ සංගීතය"
      },
      basket3: {
        basketNumber: 3,
        basketTitle: "Basket 3 (Technical & Vocational)",
        sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
        recommendedSubject: "Information & Communication Technology - ICT (තොරතුරු හා සන්නිවේදන තාක්ෂණය)",
        sinhalaRecommendedSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Mastering spreadsheets, business data models, and office IT systems is mandatory for modern commerce.",
        sinhalaReason: "ව්‍යාපාරික දත්ත විශ්ලේෂණය, පැතුරුම්පත් (Excel) සහ තොරතුරු පද්ධති භාවිතය සඳහා අත්‍යවශ්‍ය වේ.",
        alternatives: "Communication & Media Studies",
        sinhalaAlternatives: "සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය"
      },
      additionalMaths: {
        recommended: false,
        importance: "OPTIONAL",
        badgeText: "Optional",
        sinhalaBadgeText: "විකල්ප විෂයයකි",
        reason: "Helpful for financial analytics and econometrics, but standard mathematics is sufficient.",
        sinhalaReason: "මූල්‍ය විශ්ලේෂණයට උපකාරී වුවද වාණිජ අංශයට සාමාන්‍ය ගණිතය ප්‍රමාණවත් වේ."
      },
      juniorTip: "Securing Credits in O/L Mathematics and English allows seamless qualification for CA Sri Lanka, CIMA, and CMA registrations.",
      sinhalaJuniorTip: "සාමාන්‍ය පෙළ ගණිතය සහ ඉංග්‍රීසි සම්මාන ලබාගැනීම CA Sri Lanka, CIMA, CMA ලියාපදිංචියට මඟපාදයි."
    };
  }

  // Arts, Humanities, Law, Media, Design, Aviation, Other
  return {
    coreSummary: "Minimum 6 Passes at O/L with Credit ('C') in English and First Language.",
    sinhalaCoreSummary: "ඉංග්‍රීසි සහ මව්බස සඳහා අවම සම්මාන (C) සහිතව විෂයයන් 6ක් සමත්වීම.",
    basket1: {
      basketNumber: 1,
      basketTitle: "Basket 1 (Social Sciences & Commerce)",
      sinhalaBasketTitle: "1 වන කාණ්ඩය (සමාජ විද්‍යා / වාණිජ)",
      recommendedSubject: "Civic Education or Geography",
      sinhalaRecommendedSubject: "පුරවැසි අධ්‍යාපනය හෝ භූගෝල විද්‍යාව",
      reason: "Provides broad understanding of governance, laws, environmental geography, and community society.",
      sinhalaReason: "රාජ්‍ය පාලනය, නීතිය, මානව භූගෝල විද්‍යාව සහ සමාජ ව්‍යුහය පිළිබඳ පුළුල් අවබෝධයක් සපයයි.",
      alternatives: "Business & Accounting Studies or Second Language",
      sinhalaAlternatives: "ව්‍යාපාර අධ්‍යයනය හෝ දෙවන භාෂාව"
    },
    basket2: {
      basketNumber: 2,
      basketTitle: "Basket 2 (Aesthetic & Literature)",
      sinhalaBasketTitle: "2 වන කාණ්ඩය (සෞන්දර්ය හා සාහිත්‍යය)",
      recommendedSubject: "English Literature or Art / Drama",
      sinhalaRecommendedSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව / නාට්‍ය",
      reason: "Refines critical thinking, persuasive rhetoric, cultural aesthetics, and creative communication.",
      sinhalaReason: "විචාරාත්මක චින්තනය, කලාත්මක සෞන්දර්යය සහ වාචික සන්නිවේදන ප්‍රවීණතාව ගොඩනංවයි.",
      alternatives: "Sinhala/Tamil Literature or Music",
      sinhalaAlternatives: "සාහිත්‍යය හෝ සංගීතය"
    },
    basket3: {
      basketNumber: 3,
      basketTitle: "Basket 3 (Technical & Vocational)",
      sinhalaBasketTitle: "3 වන කාණ්ඩය (තාක්ෂණික හා වෘත්තීය)",
      recommendedSubject: "Information & Communication Technology - ICT or Media Studies",
      sinhalaRecommendedSubject: "තොරතුරු තාක්ෂණය (ICT) හෝ සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය",
      reason: "Essential for digital literacy, media presentation, content creation, and research.",
      sinhalaReason: "ඩිජිටල් සාක්ෂරතාව, මාධ්‍ය සන්නිවේදනය සහ තොරතුරු ගවේෂණය සඳහා වැදගත් වේ.",
      alternatives: "Design & Technology or Home Economics",
      sinhalaAlternatives: "නිර්මාණකරණය හා තාක්ෂණවේදය හෝ ගෘහ ආර්ථික විද්‍යාව"
    },
    additionalMaths: {
      recommended: false,
      importance: "OPTIONAL",
      badgeText: "Optional",
      sinhalaBadgeText: "විකල්ප විෂයයකි",
      reason: "Standard Mathematics is sufficient for arts and legal disciplines.",
      sinhalaReason: "කලා හා නීති ක්ෂේත්‍ර සඳහා සාමාන්‍ය ගණිතය ප්‍රමාණවත් වේ."
    },
    juniorTip: "Focus on reading quality English books and newspapers to build language and current affairs fluency.",
    sinhalaJuniorTip: "ඉංග්‍රීසි භාෂා ඥානය සහ සාමාන්‍ය දැනුම වර්ධනය කරගැනීමට දිනපතා කියවීමේ පුරුද්දක් ඇතිකර ගන්න."
  };
}

