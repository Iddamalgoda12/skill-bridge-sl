// Verified Sri Lankan Engineering Disciplines & Specializations
// Aligned with Institution of Engineers, Sri Lanka (IESL), Washington Accord, and UGC Admissions Handbooks.

export interface EngineeringUniversity {
  name: string;
  slug?: string;
  degreeName: string;
  faculty: string;
  type: "STATE" | "PRIVATE" | "DEFENCE";
  duration: string;
}

export interface EngineeringDiscipline {
  id: string;
  category: "civil" | "mechanical" | "computing" | "specialized";
  iconName: string;
  titleEn: string;
  titleSi: string;
  degree: string;
  summaryEn: string;
  summarySi: string;
  specialisations: string[];
  employers: string[];
  universities: EngineeringUniversity[];
  salaryLkr: string;
  badge: string;
  zScoreTarget: string;
  alStream: string;
  olGuidance: {
    basket1: { subject: string; sinhalaSubject: string; reason: string; sinhalaReason: string };
    basket2: { subject: string; sinhalaSubject: string; reason: string; sinhalaReason: string };
    basket3: { subject: string; sinhalaSubject: string; reason: string; sinhalaReason: string };
    additionalMaths: { recommended: boolean; badge: string; sinhalaBadge: string; reason: string; sinhalaReason: string };
  };
  keyToolsAndProjects: string[];
  industryRoleTitle: string;
  charteredTitle: string;
}

export const ENGINEERING_DISCIPLINES: EngineeringDiscipline[] = [
  // ─── 1. CIVIL ENGINEERING ──────────────────────────────────────────────────
  {
    id: "civil-engineering",
    category: "civil",
    iconName: "Building2",
    titleEn: "Civil Engineering",
    titleSi: "සිවිල් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Civil Engineering · 4 Years",
    summaryEn: "Design, construct, and sustain major national infrastructure: bridges, multi-storey buildings, expressways, reservoirs, coastal dams, and water networks.",
    summarySi: "පාලම්, අධිවේගී මාර්ග, ගොඩනැගිලි, ජලාශ සහ වරාය වැනි රටේ ප්‍රධාන යටිතල පහසුකම් සැලසුම් කර ඉදිකිරීම.",
    specialisations: [
      "Structural Engineering & High-Rise Design",
      "Geotechnical & Foundation Soil Mechanics",
      "Hydraulics & Water Resources Engineering",
      "Transportation, Highways & Traffic Systems",
      "Environmental & Coastal Engineering"
    ],
    employers: [
      "Access Engineering PLC",
      "Maga Engineering",
      "International Construction Consortium (ICC)",
      "Central Engineering Consultancy Bureau (CECB)",
      "Road Development Authority (RDA)",
      "National Water Supply & Drainage Board (NWSDB)"
    ],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Ruhuna", slug: "university-of-ruhuna", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Jaffna", slug: "university-of-jaffna", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "South Eastern University", slug: "south-eastern-university-of-sri-lanka", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Civil Engineering", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 120k – 380k+ / mo (2026 avg)",
    badge: "Infrastructure Pillar",
    zScoreTarget: "Moratuwa: ~1.98+, Peradeniya: ~1.85+, Ruhuna: ~1.72+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers contour topography, soil erosion, drainage basins, and surveying principles essential for civil site planning.",
        sinhalaReason: "සමෝච්ච රේඛා, පාංශු ඛාදනය, ජල පෝෂක ප්‍රදේශ සහ භූමි මිනුම් මූලධර්ම තේරුම් ගැනීමට ඉවහල් වේ."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව) or English Literature",
        sinhalaSubject: "චිත්‍ර කලාව හෝ ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Develops isometric structural perspective sketching, visual spatial thinking, and contractor contract drafting.",
        sinhalaReason: "ත්‍රිමාණ ව්‍යුහාත්මක චිත්‍ර ඇඳීම සහ ගිවිසුම් කෙටුම්පත් කිරීමේ හැකියාව දියුණු කරයි."
      },
      basket3: {
        subject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය)",
        sinhalaSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)",
        reason: "Hands-on experience with workshop timber/steel fabrication, orthographic projection, and structural equilibrium.",
        sinhalaReason: "ලී හා වානේ සම්බන්ධතා, ප්‍රක්ෂේපන ඇඳීම් සහ ව්‍යුහාත්මක සමතුලිතතාව පිළිබඳ ප්‍රායෝගික පුහුණුවක් සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Structural Mechanics",
        sinhalaBadge: "ව්‍යුහාත්මක යාන්ත්‍ර විද්‍යාවට අත්‍යවශ්‍යයි",
        reason: "Calculus and trigonometry are fundamental for beam bending moments, shear forces, and A/L Combined Maths.",
        sinhalaReason: "බීරම් වල නැමුම් ඝූර්ණ, තෙරපුම් බල සහ A/L සංයුක්ත ගණිතය ජයගැනීමට අතිරේක ගණිතය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["AutoCAD / Civil 3D", "Revit BIM modeling", "ETABS & SAP2000 structural analysis", "Total Station land surveying", "Concrete cube compression testing"],
    industryRoleTitle: "Civil & Structural Site / Design Engineer",
    charteredTitle: "Chartered Civil Engineer (CEng C.Eng FIE-SL / MIE-SL)"
  },

  // ─── 2. MECHANICAL ENGINEERING ─────────────────────────────────────────────
  {
    id: "mechanical-engineering",
    category: "mechanical",
    iconName: "Cog",
    titleEn: "Mechanical Engineering",
    titleSi: "යාන්ත්‍රික ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Mechanical Engineering · 4 Years",
    summaryEn: "Develop, analyze, and automate thermal machines, industrial production systems, automotive powertrains, HVAC climate units, and energy equipment.",
    summarySi: "යන්ත්‍ර සූත්‍ර, කර්මාන්තශාලා ස්වයංක්‍රීයකරණය, මෝටර් රථ පද්ධති සහ බලශක්ති තාක්ෂණය සැලසුම් කර ක්‍රියාත්මක කිරීම.",
    specialisations: [
      "Thermodynamics & Powerplant Generation",
      "Manufacturing Systems & CAD/CAM Robotics",
      "Automotive Powertrains & EV Systems",
      "HVAC & Industrial Building Services",
      "Fluid Dynamics & Pneumatic Automation"
    ],
    employers: [
      "MAS Holdings",
      "Brandix Apparel Solutions",
      "Diesel & Motor Engineering (DIMO)",
      "Toyota Lanka",
      "Ceylon Electricity Board (CEB)",
      "Unilever Sri Lanka",
      "Hayleys Group"
    ],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Ruhuna", slug: "university-of-ruhuna", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Jaffna", slug: "university-of-jaffna", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 125k – 360k+ / mo (2026 avg)",
    badge: "Core Machinery Field",
    zScoreTarget: "Moratuwa: ~1.95+, Peradeniya: ~1.82+, Ruhuna: ~1.70+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Covers factory machine depreciation, plant operational expenditure (OPEX), and maintenance budgeting.",
        sinhalaReason: "යන්ත්‍ර සූත්‍ර ක්ෂයවීම්, කර්මාන්තශාලා මෙහෙයුම් වියදම් සහ නඩත්තු අයවැය කළමනාකරණයට උපකාරී වේ."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව)",
        sinhalaSubject: "චිත්‍ර කලාව",
        reason: "Develops freehand exploded views, machine component spatial visualization, and geometric precision.",
        sinhalaReason: "යන්ත්‍ර කොටස්වල ත්‍රිමාණ විච්ඡේදිත රූප සටහන් (exploded views) සහ අවකාශීය සංකල්ප දියුණු කරයි."
      },
      basket3: {
        subject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය)",
        sinhalaSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)",
        reason: "Hands-on lathe machining, gear trains, linkage mechanisms, and pneumatic circuit foundations.",
        sinhalaReason: "ලියවන පට්ටල් භාවිතය, ගියර පද්ධති, යාන්ත්‍රික සම්බන්ධක සහ වායව පරිපථ පිළිබඳ ප්‍රායෝගික පුහුණුවක් සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Dynamics & Calculus",
        sinhalaBadge: "ගති විද්‍යාව සහ කලනයට අත්‍යවශ්‍යයි",
        reason: "Rigorous training for Newton-Euler dynamic equations, rotational mechanics, and A/L Physics mechanics.",
        sinhalaReason: "භ්‍රමණ චලිතය, නිව්ටන්ගේ ගති විද්‍යාව සහ A/L භෞතික විද්‍යාවේ යාන්ත්‍ර විද්‍යාවට අතිරේක ගණිතය මූලික වේ."
      }
    },
    keyToolsAndProjects: ["SolidWorks / Autodesk Inventor", "ANSYS FEA stress simulation", "CNC machine G-code programming", "Arduino automated mechanical rig", "Thermodynamics heat exchanger prototype"],
    industryRoleTitle: "Mechanical Systems / Plant Operations Engineer",
    charteredTitle: "Chartered Mechanical Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 3. ELECTRICAL & ELECTRONIC ENGINEERING ────────────────────────────────
  {
    id: "electrical-engineering",
    category: "mechanical",
    iconName: "Zap",
    titleEn: "Electrical & Electronic Engineering",
    titleSi: "විදුලි සහ ඉලෙක්ට්‍රොනික ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Electrical & Electronic Engineering · 4 Years",
    summaryEn: "Power nation-building electrical grids, renewable solar/wind installations, high-voltage transformers, electric vehicle systems, and industrial drives.",
    summarySi: "ජාතික විදුලිබල පද්ධති, සූර්ය හා සුළං බලශක්ති ව්‍යාපෘති, ස්මාර්ට් ග්‍රිඩ් සහ ඉහළ වෝල්ටීයතා පද්ධති මෙහෙයවීම.",
    specialisations: [
      "Power Systems Generation & Transmission Grids",
      "Renewable Energy Systems (Solar PV & Wind Farms)",
      "High-Voltage Substation & Transformer Engineering",
      "Power Electronics & Variable Frequency Drives",
      "Smart Grid Automation & Energy Management"
    ],
    employers: [
      "Ceylon Electricity Board (CEB)",
      "Lanka Electricity Company (LECO)",
      "LTL Holdings",
      "DIMO Energy",
      "Haycarb Green Energy",
      "Vega Innovations (Electric Vehicles)"
    ],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Electrical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Electrical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Ruhuna", slug: "university-of-ruhuna", degreeName: "B.Sc. Eng (Hons) in Electrical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Jaffna", slug: "university-of-jaffna", degreeName: "B.Sc. Eng (Hons) in Electrical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Electrical & Electronic Engineering", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 130k – 380k+ / mo (2026 avg)",
    badge: "Power & Grid Systems",
    zScoreTarget: "Moratuwa: ~1.96+, Peradeniya: ~1.84+, Ruhuna: ~1.71+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Teaches electricity tariff structures, generation costs per kWh, and renewable energy capital investment payback.",
        sinhalaReason: "විදුලි ගාස්තු ක්‍රම, කිලෝවොට් පැයකට වැයවන පිරිවැය සහ පුනර්ජනනීය බලශක්ති ආයෝජන ප්‍රතිලාභ තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature or Art",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
        reason: "Wiring schematic drafting and international IEC/IEEE standard compliance documentation.",
        sinhalaReason: "පරිපථ සටහන් ඇඳීම සහ IEC/IEEE ජාත්‍යන්තර ප්‍රමිති ලේඛන අධ්‍යයනයට උපකාරී වේ."
      },
      basket3: {
        subject: "Design, Electrical & Electronic Technology or ICT",
        sinhalaSubject: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ ICT",
        reason: "Ohm's law, AC/DC waveforms, semiconductor diodes, circuit breadboarding, and multimeter usage.",
        sinhalaReason: "ඕම්ගේ නියමය, AC/DC තරංග, අර්ධ සන්නායක, පරිපථ පුවරු සහ මල්ටිමීටර භාවිතය පිළිබඳ මූලික දැනුම සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Phasors & Differential Equations",
        sinhalaBadge: "කලනය සහ කලාවැකි වලට අත්‍යවශ්‍යයි",
        reason: "Complex numbers, phasors, and differential equations form the language of AC power analysis.",
        sinhalaReason: "සංකීර්ණ සංඛ්‍යා සහ අවකල සමීකරණ AC විදුලිබල විශ්ලේෂණයේ මූලික පදනම වේ."
      }
    },
    keyToolsAndProjects: ["MATLAB / Simulink power simulation", "ETAP electrical power grid modeling", "Microcontroller grid synchronizer", "Solar inverter PCB assembly", "High-voltage protection relay testing"],
    industryRoleTitle: "Power Systems / Electrical Grid Engineer",
    charteredTitle: "Chartered Electrical Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 4. SOFTWARE & COMPUTER SYSTEMS ENGINEERING ────────────────────────────
  {
    id: "software-engineering",
    category: "computing",
    iconName: "Cpu",
    titleEn: "Software & Computer Systems Engineering",
    titleSi: "මෘදුකාංග සහ පරිගණක පද්ධති ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Computer Science & Engineering · 4 Years",
    summaryEn: "Design mission-critical enterprise software platforms, microservice architectures, cloud backends, operating systems, and full-stack solutions.",
    summarySi: "මෘදුකාංග (Software), ක්ලවුඩ් පද්ධති, කාවැද්දූ හාඩ්වෙයාර් (Embedded Systems) සහ මහා පරිමාණ පරිගණක පද්ධති ඉංජිනේරු මට්ටමින් නිර්මාණය කිරීම.",
    specialisations: [
      "Distributed Cloud Architecture & Microservices",
      "Full-Stack Web & Enterprise API Platforms",
      "Operating Systems & Low-Level Systems Programming",
      "High-Performance Database & Concurrency Engines",
      "Mobile App Platforms & Secure Architecture"
    ],
    employers: [
      "WSO2",
      "Sysco LABS Sri Lanka",
      "IFS World Operations",
      "London Stock Exchange Group (LSEG)",
      "Virtusa",
      "99x",
      "Axiata Digital Labs",
      "Synopsys Sri Lanka"
    ],
    universities: [
      { name: "University of Moratuwa (CSE)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Computer Science & Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya (CE)", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Ruhuna (DEIE)", slug: "university-of-ruhuna", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Jaffna (CE)", slug: "university-of-jaffna", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Software Engineering", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 180k – 550k+ / mo (2026 avg)",
    badge: "High Tech Growth",
    zScoreTarget: "Moratuwa CSE: ~2.15+, Peradeniya CE: ~1.90+, Ruhuna DEIE: ~1.78+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry / ICT)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies (ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය)",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Crucial for SaaS unit economics, software project cost estimation, and tech startup capital metrics.",
        sinhalaReason: "SaaS ආදායම් ආකෘති, මෘදුකාංග ව්‍යාපෘති අයවැය සහ ටෙක් ස්ටාර්ට්අප් මූල්‍ය කටයුතු තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature (ඉංග්‍රීසි සාහිත්‍යය) or Art",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
        reason: "English Literature sharpens code documentation and technical rhetoric; Art builds UI visual spatial layout.",
        sinhalaReason: "ඉංග්‍රීසි සාහිත්‍යය මඟින් ලේඛනගත කිරීමේ ප්‍රවීණතාවයද, චිත්‍ර කලාව මඟින් පරිශීලක අතුරුමුහුණත් (UI) සැලසුම්කරණයද ගොඩනංවයි."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT (තොරතුරු හා සන්නිවේදන තාක්ෂණය)",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Covers algorithmic thinking, binary logic, HTML/CSS, databases, and Python/flowchart programming.",
        sinhalaReason: "ක්‍රමලේඛන තර්කනය, ඇල්ගොරිතම, දත්ත සමුදාය සහ පයිතන් ක්‍රමලේඛනය පිළිබඳ මුල් පදනම ලබාදේ."
      },
      additionalMaths: {
        recommended: true,
        badge: "Highly Recommended for Algorithmic Complexity",
        sinhalaBadge: "ඇල්ගොරිතම සහ ගණිතයට ඉතා නිර්දේශිතයි",
        reason: "Discrete math, Big-O complexity, and matrices rely heavily on strong algebra and quadratic equations.",
        sinhalaReason: "Big-O සංකීර්ණතාව, න්‍යාස සහ වීජ ගණිතය මෘදුකාංග ඉංජිනේරු විද්‍යාවට අතිශය තීරණාත්මක වේ."
      }
    },
    keyToolsAndProjects: ["Java / Python / TypeScript / Go", "Docker & Kubernetes microservices", "PostgreSQL / Redis distributed databases", "Full-stack cloud web app on GitHub", "Algorithm contest problems (LeetCode/HackerRank)"],
    industryRoleTitle: "Software Systems Architect / Tech Lead",
    charteredTitle: "Chartered Software Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 5. CLOUD & DEVOPS ENGINEERING ─────────────────────────────────────────
  {
    id: "cloud-engineering",
    category: "computing",
    iconName: "Cloud",
    titleEn: "Cloud & DevOps Systems Engineering",
    titleSi: "ක්ලවුඩ් සහ DevOps පද්ධති ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Computer Systems / Cloud Engineering · 4 Years",
    summaryEn: "Architect resilient high-availability AWS/Azure/GCP cloud environments, automated CI/CD container clusters, and microservice orchestration.",
    summarySi: "AWS, Azure හෝ Google Cloud ජාල සැලසුම් කිරීම, Kubernetes කන්ටේනර් පද්ධති සහ මෘදුකාංග ස්වයංක්‍රීයව deploy කිරීම.",
    specialisations: [
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Kubernetes & Container Orchestration",
      "Infrastructure as Code (Terraform & Ansible)",
      "Site Reliability Engineering (SRE) & Observability",
      "Serverless Computing & Cloud FinOps"
    ],
    employers: ["Sysco LABS", "WSO2", "Dialog Axiata", "Axiata Digital Labs", "IFS World Operations", "Virtusa"],
    universities: [
      { name: "University of Moratuwa (CSE)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Computer Science & Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya (CE)", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. (Hons) in Computer Systems & Network Engineering", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 245k – 650k+ / mo (2026 avg)",
    badge: "Cloud Infrastructure",
    zScoreTarget: "Moratuwa CSE: ~2.15+, Peradeniya CE: ~1.88+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, ICT)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Covers Cloud FinOps, AWS monthly billing, ROI optimization, and enterprise infrastructure budgets.",
        sinhalaReason: "Cloud FinOps, AWS මාසික බිල්පත් පාලනය සහ යටිතල පහසුකම් පිරිවැය කළමනාකරණයට වැදගත් වේ."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Crucial for writing disaster recovery incident post-mortems and global cloud architecture specifications.",
        sinhalaReason: "හදිසි බිඳවැටීම් වාර්තා (incident post-mortems) සහ ගෝලීය ක්ලවුඩ් පිරිවිතර ලිවීමට අවශ්‍ය වේ."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Covers Linux shell concepts, networking, IP addressing, DNS protocols, and basic virtualization.",
        sinhalaReason: "ලිනක්ස් මෙහෙයුම් පද්ධති, ජාලකරණය, IP ලිපින, DNS සහ අතථ්‍යකරණය (virtualization) පිළිබඳ පදනම සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Recommended for Network Graph Theory",
        sinhalaBadge: "ජාලකරණ ගණිතයට නිර්දේශිතයි",
        reason: "Queueing theory, probability of server uptime (99.999% SLA), and graph network routing.",
        sinhalaReason: "සේවාදායක විශ්වාසනීයත්ව සම්භාවිතාව (99.999% SLA) සහ ජාලකරණ රවුටින් ගණනය කිරීමට උපකාරී වේ."
      }
    },
    keyToolsAndProjects: ["Terraform Infrastructure as Code", "Kubernetes cluster on AWS EKS", "GitHub Actions CI/CD pipeline", "Prometheus & Grafana monitoring stack", "Linux Bash & Python automation"],
    industryRoleTitle: "Lead Cloud Architect / Principal SRE",
    charteredTitle: "Chartered Computer Systems Engineer (CEng MIE-SL)"
  },

  // ─── 6. CYBERSECURITY & NETWORK DEFENSE ────────────────────────────────────
  {
    id: "cybersecurity-engineering",
    category: "computing",
    iconName: "Shield",
    titleEn: "Cybersecurity & Network Defense Engineering",
    titleSi: "සයිබර් ආරක්ෂණ සහ ජාල ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Cybersecurity / Computer Systems · 4 Years",
    summaryEn: "Defend enterprise networks, banking mainframes, and government digital infrastructure from ransomware, zero-day exploits, and cyber espionage.",
    summarySi: "බැංකු, විදුලි සංදේශ ජාල සහ රාජ්‍ය ඩිජිටල් පද්ධති සයිබර් ප්‍රහාරවලින් සහ හැකර්වරුන්ගෙන් ආරක්ෂා කිරීම.",
    specialisations: [
      "Ethical Hacking & Penetration Testing",
      "Security Operations Center (SOC) & Threat Hunting",
      "Cryptography & Zero Trust Network Architecture",
      "Cloud Security & DevSecOps Automated Scanning",
      "Digital Forensics & Incident Response"
    ],
    employers: ["Virtusa", "Dialog Axiata", "SLT-MOBITEL", "Commercial Bank of Ceylon", "Hatton National Bank", "Sri Lanka CERT"],
    universities: [
      { name: "University of Moratuwa (CSE)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Computer Science & Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. (Hons) in Information Technology (Cyber Security)", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" },
      { name: "General Sir John Kotelawala Defence University", slug: "general-sir-john-kotelawala-defence-university", degreeName: "B.Sc. (Hons) in Computer Engineering", faculty: "Faculty of Computing", type: "DEFENCE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 210k – 600k+ / mo (2026 avg)",
    badge: "Critical Defense",
    zScoreTarget: "Moratuwa CSE: ~2.15+, KDU: ~1.75+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, ICT)",
    olGuidance: {
      basket1: {
        subject: "Civic Education (පුරවැසි අධ්‍යාපනය)",
        sinhalaSubject: "පුරවැසි අධ්‍යාපනය",
        reason: "Covers the Sri Lanka Computer Crimes Act, Personal Data Protection Act, privacy laws, and ethical legal frameworks.",
        sinhalaReason: "ශ්‍රී ලංකා පරිගණක අපරාධ පනත, පුද්ගල දත්ත ආරක්ෂණ පනත සහ සයිබර් ආචාරධර්ම තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Essential for rigorous statutory audit evidence, penetration test reporting, and executive risk debriefs.",
        sinhalaReason: "ආරක්ෂණ විගණන වාර්තා, Penetration test වාර්තා සහ විධායක මට්ටමේ අවදානම් විශ්ලේෂණ ලේඛන ලිවීමට අවශ්‍ය වේ."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Provides foundational networking: TCP/IP stack, packet routing, firewalls, and cryptographic hashing basics.",
        sinhalaReason: "TCP/IP ප්‍රොටෝකෝල, පැකට් රවුටින්, ෆයර්වෝල් සහ ගුප්තකේතන (Cryptography) මූලිකාංග උගන්වයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Modern Cryptography",
        sinhalaBadge: "නූතන ගුප්තකේතනයට අත්‍යවශ්‍යයි",
        reason: "Modular arithmetic, prime number theory, and discrete algebra are the core mathematical engine of RSA and ECC encryption.",
        sinhalaReason: "ප්‍රථමක සංඛ්‍යා න්‍යාය, මොඩියුලර් ගණිතය සහ විවික්ත වීජ ගණිතය RSA හා ECC ආරක්ෂණ සංකේතාංකනයට අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Kali Linux / Metasploit penetration testing", "Wireshark packet forensic analysis", "Wazuh / Splunk SOC threat dashboard", "Burp Suite web application security audits", "Python automated vulnerability scanner"],
    industryRoleTitle: "Chief Information Security Officer (CISO) / Lead Security Architect",
    charteredTitle: "Chartered Security Systems Engineer (CEng MIE-SL)"
  },

  // ─── 7. AI & MACHINE LEARNING ENGINEERING ──────────────────────────────────
  {
    id: "ai-engineering",
    category: "computing",
    iconName: "Brain",
    titleEn: "AI & Machine Learning Systems Engineering",
    titleSi: "කෘත්‍රිම බුද්ධි සහ මැෂින් ලර්නින් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Artificial Intelligence / Computer Science · 4 Years",
    summaryEn: "Train generative AI models, deep neural networks, computer vision algorithms, and natural language processing pipelines at scale.",
    summarySi: "Generative AI, ChatGPT වැනි භාෂා මොඩල (LLMs), පරිගණක දෘෂ්ටිය (Computer Vision) සහ ස්වයංක්‍රීය බුද්ධිමය පද්ධති ඉංජිනේරු මට්ටමින් නිර්මාණය.",
    specialisations: [
      "Deep Learning & Transformer Architectures",
      "Large Language Models (LLMs) & Generative AI",
      "Computer Vision & Autonomous Sensing",
      "MLOps & Scalable Cloud Model Inference",
      "Reinforcement Learning & Robotics AI"
    ],
    employers: ["Sysco LABS", "WSO2", "Virtusa", "Synopsys Sri Lanka", "London Stock Exchange Group (LSEG)", "AI Startups"],
    universities: [
      { name: "University of Moratuwa (CSE / AI)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Artificial Intelligence / CSE", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya (CE)", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. (Hons) in Information Technology (Data Science & AI)", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 260k – 750k+ / mo (2026 avg)",
    badge: "Next-Gen Tech",
    zScoreTarget: "Moratuwa CSE/AI: ~2.18+, Peradeniya CE: ~1.90+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry / ICT)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Teaches enterprise automation ROI, AI implementation costs, and business process re-engineering.",
        sinhalaReason: "ව්‍යාපාර ක්‍රියාවලි ස්වයංක්‍රීයකරණයේ මූල්‍ය ප්‍රතිලාභ සහ AI ආයෝජන පිරිවැය තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Essential for natural language semantics, syntactic parsing, linguistic prompt engineering, and paper research.",
        sinhalaReason: "ස්වාභාවික භාෂා සැකසුම (NLP), වාක්‍ය ව්‍යුහය, ප්‍රොම්ප්ට් ඉංජිනේරුකරණය සහ පර්යේෂණ පත්‍රිකා කියවීමට අත්‍යවශ්‍ය වේ."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Introduces algorithmic logic, data array indexing, binary representation, and Python programming foundations.",
        sinhalaReason: "පයිතන් ක්‍රමලේඛනය, දත්ත අරාවන්, ඇල්ගොරිතම සහ ද්විමය ගණිතය පිළිබඳ ශක්තිමත් පදනමක් ලබාදේ."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Linear Algebra & Calculus",
        sinhalaBadge: "රේඛීය වීජ ගණිතය සහ කලනයට අත්‍යවශ්‍යයි",
        reason: "Neural network backpropagation relies entirely on multivariable differential calculus and matrix algebra.",
        sinhalaReason: "කෘත්‍රිම ස්නායුක ජාල (Neural Networks) පුහුණු කිරීමේදී බහු විචල්‍ය කලනය සහ න්‍යාස වීජ ගණිතය අත්‍යවශ්‍යම පදනමයි."
      }
    },
    keyToolsAndProjects: ["PyTorch / TensorFlow deep learning models", "Hugging Face transformers & LLM fine-tuning", "OpenCV computer vision real-time detector", "MLflow / Kubeflow model training pipeline", "Vector database (Pinecone/Milvus) RAG system"],
    industryRoleTitle: "Principal AI / Machine Learning Architect",
    charteredTitle: "Chartered AI Systems Engineer (CEng MIE-SL)"
  },

  // ─── 8. UI/UX & DIGITAL PRODUCT ENGINEERING ────────────────────────────────
  {
    id: "uiux-engineering",
    category: "computing",
    iconName: "Palette",
    titleEn: "UI / UX & Digital Product Engineering",
    titleSi: "UI / UX සහ ඩිජිටල් නිෂ්පාදන ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng / B.Sc. (Hons) in Digital Product Engineering · 4 Years",
    summaryEn: "Engineer intuitive human-computer interfaces, design system architectures, responsive web apps, and human-centered digital experiences.",
    summarySi: "Mobile apps සහ websites මිනිසුන්ට පහසුවෙන් පාවිච්චි කරන්න පුළුවන් ආකාරයට design systems සහ අන්තර්ක්‍රියාකාරී පරිශීලක අතුරුමුහුණත් නිර්මාණය.",
    specialisations: [
      "Enterprise Design Systems Architecture",
      "Human-Computer Interaction (HCI) & UX Research",
      "Interactive Frontend Engineering (React, Next.js, Flutter)",
      "Digital Accessibility (WCAG 2.2) & Usability Engineering",
      "Mobile Product Prototyping & Micro-interactions"
    ],
    employers: ["99x", "Sysco LABS", "Arimac", "Virtusa", "Axiata Digital Labs", "Global Product Firms"],
    universities: [
      { name: "University of Moratuwa (CSE / Design)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) / B.Des in Design", faculty: "Faculty of Architecture / Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. (Hons) in Interactive Media / Software Engineering", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" },
      { name: "University of Sri Jayewardenepura", slug: "university-of-sri-jayewardenepura", degreeName: "B.Sc. (Hons) in Computing", faculty: "Faculty of Computing", type: "STATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 140k – 420k+ / mo (2026 avg)",
    badge: "Product Experience",
    zScoreTarget: "Moratuwa CSE/Design: ~1.85+, USJ: ~1.70+, SLIIT: 3 S passes",
    alStream: "Physical Science, Technology, or Arts / Commerce with ICT",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Teaches conversion funnel analytics, user acquisition costs, and digital commercial viability.",
        sinhalaReason: "පරිශීලක හැසිරීම් විශ්ලේෂණය, ඩිජිටල් නිෂ්පාදන අලෙවිය සහ වාණිජ සාර්ථකත්වය තක්සේරු කිරීමට උපකාරී වේ."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව)",
        sinhalaSubject: "චිත්‍ර කලාව",
        reason: "Crucial for color harmony, typography, visual hierarchy, layout balance, and responsive design aesthetics.",
        sinhalaReason: "වර්ණ සංයෝජනය, අකුරු හැඩතල (Typography), දෘශ්‍ය සමතුලිතතාවය සහ නිර්මාණශීලී සෞන්දර්යය ගොඩනංවයි."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Direct foundation in HTML semantics, CSS flexbox/grid, JavaScript DOM manipulation, and responsive web layouts.",
        sinhalaReason: "HTML, CSS සහ ජාවාස්ක්‍රිප්ට් හරහා අන්තර්ක්‍රියාකාරී වෙබ් අතුරුමුහුණත් ගොඩනැගීමේ ප්‍රායෝගික පදනම සපයයි."
      },
      additionalMaths: {
        recommended: false,
        badge: "Beneficial for Animation Curves",
        sinhalaBadge: "චලන සජීවීකරණයට හිතකරයි",
        reason: "Cubic bezier animation easing curves and spatial coordinate transforms benefit from basic trigonometry.",
        sinhalaReason: "UI සජීවීකරණයේ චලන වක්‍ර (Cubic bezier) සහ ඛණ්ඩාංක ජ්‍යාමිතිය තේරුම් ගැනීමට උපකාරී වේ."
      }
    },
    keyToolsAndProjects: ["Figma enterprise design system", "React / Next.js responsive component library", "Tailwind CSS & Framer Motion interactive UI", "User usability test session video analysis", "WCAG 2.2 accessibility compliance audit"],
    industryRoleTitle: "Lead Product Designer / Principal UI Engineer",
    charteredTitle: "Chartered Digital Systems Engineer (CEng MIE-SL)"
  },

  // ─── 9. BIG DATA & SYSTEMS ANALYTICS ───────────────────────────────────────
  {
    id: "data-engineering",
    category: "computing",
    iconName: "Database",
    titleEn: "Big Data & Systems Analytics Engineering",
    titleSi: "මහා දත්ත සහ පද්ධති විශ්ලේෂණ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Data Science & Systems Engineering · 4 Years",
    summaryEn: "Build petabyte-scale data pipelines, distributed data lakehouses, real-time streaming engines, and high-speed analytical databases.",
    summarySi: "විශාල දත්ත පද්ධති (Big Data), Real-time දත්ත විශ්ලේෂණය සහ ස්මාර්ට් දත්ත ගබඩා ගොඩනැගීම.",
    specialisations: [
      "Distributed Data Lakehouse Architecture",
      "Real-Time Streaming Pipelines (Kafka & Flink)",
      "Cloud Data Warehousing (Snowflake & BigQuery)",
      "Advanced SQL & Analytical Data Modeling",
      "Data Quality, Governance & Security"
    ],
    employers: ["Dialog Axiata", "Sysco LABS", "IFS World Operations", "Virtusa", "London Stock Exchange Group (LSEG)", "Commercial Bank of Ceylon"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Computer Science & Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Computer Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. (Hons) in Data Science", faculty: "Faculty of Computing", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 170k – 480k+ / mo (2026 avg)",
    badge: "Big Data Engine",
    zScoreTarget: "Moratuwa CSE: ~2.15+, Peradeniya: ~1.88+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry / ICT)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Core understanding of corporate financial metrics, KPIs, ledger databases, and business intelligence reporting.",
        sinhalaReason: "ව්‍යාපාරික දර්ශක (KPIs), ලෙජර දත්ත සමුදාය සහ ආයතනික තොරතුරු විශ්ලේෂණය තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Communicating complex analytical data models clearly to corporate boardroom stakeholders and decision makers.",
        sinhalaReason: "සංකීර්ණ දත්ත ආකෘති සහ සංඛ්‍යානමය තොරතුරු විධායක මණ්ඩලයට සරලව ඉදිරිපත් කිරීමේ භාෂා ප්‍රවීණතාවය දියුණු කරයි."
      },
      basket3: {
        subject: "Information & Communication Technology - ICT",
        sinhalaSubject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)",
        reason: "Relational database tables, SQL queries, entity-relationship diagrams, and spreadsheet data manipulation.",
        sinhalaReason: "දත්ත සමුදාය (Databases), SQL විධාන, සම්බන්ධතා රූප සටහන් සහ පැතුරුම්පත් දත්ත හැසිරවීමේ මූලිකාංග උගන්වයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Probability & Matrices",
        sinhalaBadge: "සම්භාවිතාව සහ න්‍යාස සඳහා අත්‍යවශ්‍යයි",
        reason: "Combinatorics, joint probability distributions, and matrix transforms power modern big data analytical algorithms.",
        sinhalaReason: "සම්භාවිතා ව්‍යාප්ති, සංයෝජන සහ න්‍යාස ගණනය කිරීම් මහා දත්ත ඇල්ගොරිතම සඳහා අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Apache Spark distributed processing", "Apache Kafka real-time event pipeline", "Snowflake / BigQuery analytics data warehouse", "dbt (data build tool) transformation models", "Python / SQL automated ETL data pipeline"],
    industryRoleTitle: "Lead Data Architect / Principal Big Data Engineer",
    charteredTitle: "Chartered Data Systems Engineer (CEng MIE-SL)"
  },

  // ─── 10. ELECTRONIC & TELECOMMUNICATIONS ───────────────────────────────────
  {
    id: "telecom-engineering",
    category: "computing",
    iconName: "Radio",
    titleEn: "Electronic & Telecommunication Engineering",
    titleSi: "විද්‍යුත් සහ විදුලි සංදේශ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Electronic & Telecommunication Engineering · 4 Years",
    summaryEn: "Architect 5G/6G mobile communication networks, optical fiber undersea links, digital signal processing, satellite payloads, and RF microwave transmission.",
    summarySi: "5G/6G සන්නිවේදන ජාල, ඔප්ටිකල් ෆයිබර්, සැටලයිට් සන්නිවේදනය සහ ඩිජිටල් සිග්නල් සැකසුම් පද්ධති නිර්මාණය.",
    specialisations: [
      "5G & Future 6G Cellular Mobile Networks",
      "Optical Fiber Communications & Dense WDM",
      "RF & Microwave Antenna Systems",
      "Digital Signal Processing (DSP) & Radar",
      "Satellite Payloads & Terrestrial Microwave Links"
    ],
    employers: ["Dialog Axiata", "SLT-MOBITEL", "Huawei Technologies Lanka", "Ericsson Sri Lanka", "Telecommunications Regulatory Commission (TRCSL)", "ZTE Corporation"],
    universities: [
      { name: "University of Moratuwa (ENTC)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Electronic & Telecommunication Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Ruhuna (DEIE)", slug: "university-of-ruhuna", degreeName: "B.Sc. Eng (Hons) in Electrical & Information Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Electrical & Electronic Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Electronic Engineering", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 135k – 400k+ / mo (2026 avg)",
    badge: "Telecom & IoT Leaders",
    zScoreTarget: "Moratuwa ENTC: ~2.10+, Ruhuna: ~1.78+, Peradeniya: ~1.85+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers line-of-sight propagation, terrain elevation shadowing, and cell tower geospatial coverage maps.",
        sinhalaReason: "භූමි විෂමතා, සංඥා ගමන් මාර්ග සහ සන්නිවේදන කුළුණු ස්ථානගත කිරීමේ සිතියම්කරණය තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket2: {
        subject: "English Literature or Music",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ සංගීතය",
        reason: "Music covers harmonic frequencies, pitch resonance, and acoustic wave vibrations; English covers ITU standards.",
        sinhalaReason: "සංගීතය මඟින් සංඛ්‍යාත, තරංග අනුනාදය සහ ශබ්ද තරංග පිළිබඳ දැනුමද, ඉංග්‍රීසි මඟින් ITU ප්‍රමිති අධ්‍යයනයද ලබාදේ."
      },
      basket3: {
        subject: "Design, Electrical & Electronic Technology or ICT",
        sinhalaSubject: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ ICT",
        reason: "Covers radio transmitters, semiconductor diodes, transistors, circuit oscillators, and modulation basics.",
        sinhalaReason: "ගුවන්විදුලි සම්ප්‍රේෂක, ට්‍රාන්සිස්ටර, දෝලක පරිපථ සහ මොඩියුලේෂන් මූලධර්ම පිළිබඳ ප්‍රායෝගික දැනුම සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Fourier & Wave Equations",
        sinhalaBadge: "ෆූරියර් විශ්ලේෂණය සහ තරංග සමීකරණ වලට අත්‍යවශ්‍යයි",
        reason: "Trigonometric sinusoidal functions and Fourier series are the fundamental mathematical language of telecommunications.",
        sinhalaReason: "ත්‍රිකෝණමිතික සයින් තරංග සහ ෆූරියර් ශ්‍රේණි විදුලි සංදේශ තරංග සම්ප්‍රේෂණයේ ප්‍රධානතම භාෂාවයි."
      }
    },
    keyToolsAndProjects: ["MATLAB / Simulink communication system simulation", "Software Defined Radio (SDR) receiver project", "Optical spectrum analyzer fiber testing", "RF spectrum analyzer cell tower drive test", "Embedded microcontroller IoT telemetry rig"],
    industryRoleTitle: "Principal Telecommunications / RF Systems Engineer",
    charteredTitle: "Chartered Electronic & Telecom Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 11. MECHATRONICS & ROBOTICS ───────────────────────────────────────────
  {
    id: "mechatronics-engineering",
    category: "mechanical",
    iconName: "Bot",
    titleEn: "Mechatronics & Robotics Engineering",
    titleSi: "මෙකට්‍රොනික්ස් සහ රොබෝ තාක්ෂණ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Mechatronics Engineering · 4 Years",
    summaryEn: "Synthesize mechanical mechanisms, microcontrollers, computer vision, and AI to engineer autonomous industrial robots and automated smart production lines.",
    summarySi: "රොබෝ තාක්ෂණය, කර්මාන්තශාලා ස්වයංක්‍රීයකරණය, පරිගණක දෘෂ්ටි සංවේදක සහ කෘත්‍රිම බුද්ධිය එක් කර නව පද්ධති නිර්මාණය.",
    specialisations: [
      "Industrial Robotics & Kinematic Arm Control",
      "PLC, SCADA & Factory Industrial Automation",
      "Embedded Microcontrollers (ARM / STM32 / ESP32)",
      "Autonomous Mobile Robots (AMRs) & Robot Operating System (ROS)",
      "Computer Vision & Edge Sensor Integration"
    ],
    employers: ["MAS Matrix", "Brandix Apparel Solutions", "Camso Loadstar", "Unilever Sri Lanka", "Ansell Lanka", "Nestlé Lanka"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Mechanical / Mechatronics Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Sri Jayewardenepura", slug: "university-of-sri-jayewardenepura", degreeName: "B.Sc. Eng (Hons) in Mechanical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Mechatronics Engineering", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" },
      { name: "CINEC Campus", degreeName: "B.Sc. Eng (Hons) in Mechatronics", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" },
      { name: "General Sir John Kotelawala Defence University", slug: "general-sir-john-kotelawala-defence-university", degreeName: "B.Sc. Eng (Hons) in Mechatronic Engineering", faculty: "Faculty of Engineering", type: "DEFENCE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 130k – 380k+ / mo (2026 avg)",
    badge: "Industry 4.0 Robotics",
    zScoreTarget: "Moratuwa: ~1.95+, USJ: ~1.75+, KDU: ~1.70+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry / ICT)",
    olGuidance: {
      basket1: {
        subject: "Business & Accounting Studies",
        sinhalaSubject: "ව්‍යාපාර හා ගිණුම්කරණ අධ්‍යයනය",
        reason: "Cost-benefit analysis of robotic factory lines versus manual labor payrolls and automation payback periods.",
        sinhalaReason: "කර්මාන්තශාලා ස්වයංක්‍රීයකරණයෙන් ශ්‍රම පිරිවැය ඉතිරිවීම සහ ආයෝජන ප්‍රතිලාභ ගණනය කිරීමට උපකාරී වේ."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව)",
        sinhalaSubject: "චිත්‍ර කලාව",
        reason: "Essential for 3D conceptual modeling of robotic chassis, linkage joints, and industrial enclosure designs.",
        sinhalaReason: "රොබෝ චැසි, සන්ධි සහ බාහිර කවරයන්ගේ ත්‍රිමාණ ආකෘති සැලසුම් කිරීමට උපකාරී වේ."
      },
      basket3: {
        subject: "Design & Technology - D&T or ICT",
        sinhalaSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T) හෝ ICT",
        reason: "Hands-on experience with sensor electronics, servomotors, stepper drives, and microcontroller code.",
        sinhalaReason: "සර්වෝ මෝටර්, ස්ටෙපර් ඩ්‍රයිව්, සංවේදක පරිපථ සහ මයික්‍රොකොන්ට්‍රෝලර් ක්‍රමලේඛනය ප්‍රායෝගිකව උගන්වයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Kinematics & Coordinate Transforms",
        sinhalaBadge: "රොබෝ චාලක විද්‍යාවට අත්‍යවශ්‍යයි",
        reason: "Forward and inverse robot arm kinematics rely heavily on matrices and trigonometric coordinate rotations.",
        sinhalaReason: "රොබෝ අත්වල චාලක විද්‍යාව (Kinematics) සහ ඛණ්ඩාංක භ්‍රමණ ගණනය කිරීමට න්‍යාස සහ ත්‍රිකෝණමිතිය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Robot Operating System (ROS 2)", "SolidWorks 3D CAD modeling", "Siemens S7 PLC & ladder logic programming", "STM32 microcontroller C/C++ firmware", "Autonomous mobile robot (AMR) with LiDAR SLAM"],
    industryRoleTitle: "Lead Robotics & Automation Engineer",
    charteredTitle: "Chartered Mechatronics Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 12. CHEMICAL & PROCESS ENGINEERING ────────────────────────────────────
  {
    id: "chemical-engineering",
    category: "specialized",
    iconName: "FlaskConical",
    titleEn: "Chemical & Process Engineering",
    titleSi: "රසායනික සහ ක්‍රියාවලි ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Chemical & Process Engineering · 4 Years",
    summaryEn: "Convert raw natural materials into valuable petroleum fuels, polymers, rubber products, pharmaceuticals, activated carbon, and eco-friendly consumer goods.",
    summarySi: "තෙල් පිරිපහදු, ඖෂධ, පොලිමර් සහ රබර් නිෂ්පාදන, සක්‍රිය කාබන් සහ ආහාර සැකසුම් කර්මාන්ත සඳහා රසායනික ක්‍රියාවලි සැලසුම් කිරීම.",
    specialisations: [
      "Petroleum Refining & Natural Gas Processing",
      "Polymer, Rubber & Latex Industrial Processing",
      "Pharmaceutical Manufacturing & Drug Synthesis",
      "Reaction Kinetics & Industrial Reactor Design",
      "Industrial Effluent & Wastewater Treatment"
    ],
    employers: ["Ceylon Petroleum Corporation (CPC)", "Ansell Lanka", "Haycarb PLC", "Unilever Sri Lanka", "DSI Samson Group", "Link Natural Products"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Chemical & Process Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "University of Peradeniya", slug: "university-of-peradeniya", degreeName: "B.Sc. Eng (Hons) in Chemical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 125k – 360k+ / mo (2026 avg)",
    badge: "Process & Export Industry",
    zScoreTarget: "Moratuwa: ~1.92+, Peradeniya: ~1.82+",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers mineral resources, rubber plantations, oil reserves, and environmental industrial waste dispersion.",
        sinhalaReason: "ඛනිජ සම්පත්, රබර් වතුකරය, ඛනිජ තෙල් සංචිත සහ කාර්මික අපද්‍රව්‍ය පරිසරයට මුදාහැරීමේ බලපෑම් උගන්වයි."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Interpreting international chemical safety data sheets (MSDS) and ISO 14001 environmental standards.",
        sinhalaReason: "රසායනික ආරක්ෂණ දත්ත පත්‍රිකා (MSDS) සහ ISO 14001 පාරිසරික ප්‍රමිති තේරුම් ගැනීමට උපකාරී වේ."
      },
      basket3: {
        subject: "Agriculture & Food Technology or ICT",
        sinhalaSubject: "කෘෂිකර්මය හා ආහාර තාක්ෂණය හෝ ICT",
        reason: "Provides early practical exposure to plant biochemistry, food preservation, and fermentation technology.",
        sinhalaReason: "ජෛව රසායනය, ආහාර කල්තබා ගැනීම සහ පැසවීම් තාක්ෂණය පිළිබඳ මුල් ප්‍රායෝගික අවබෝධයක් ලබාදේ."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Reaction Kinetics Differential Equations",
        sinhalaBadge: "ප්‍රතික්‍රියා චාලක අවකල සමීකරණ වලට අත්‍යවශ්‍යයි",
        reason: "Mass and energy balances and non-linear reaction rates demand advanced calculus and integration.",
        sinhalaReason: "ස්කන්ධ හා ශක්ති සමතුලිතතා සහ ප්‍රතික්‍රියා සීඝ්‍රතා ගණනයට අවකලනය හා අනුකලනය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Aspen Plus / HYSYS process simulation", "Chemical pilot plant distillation column", "Effluent wastewater bioreactor design", "Rubber vulcanization compound testing", "ISO 9001 quality assurance protocol"],
    industryRoleTitle: "Lead Chemical Process / Refinery Operations Engineer",
    charteredTitle: "Chartered Chemical Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 13. BIOMEDICAL ENGINEERING ────────────────────────────────────────────
  {
    id: "biomedical-engineering",
    category: "specialized",
    iconName: "HeartPulse",
    titleEn: "Biomedical Engineering",
    titleSi: "ජෛව වෛද්‍ය ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Biomedical Engineering · 4 Years",
    summaryEn: "Pioneer healthcare technology by engineering clinical hospital instruments, MRI/CT scanners, patient monitoring units, smart prosthetics, and artificial organs.",
    summarySi: "රෝහල් උපකරණ, MRI/CT ස්කෑනර්, රෝගී නිරීක්ෂණ පද්ධති සහ කෘත්‍රිම අවයව වැනි වෛද්‍ය තාක්ෂණික විසඳුම් සැලසුම් කිරීම.",
    specialisations: [
      "Medical Diagnostic Imaging (MRI, CT, Ultrasound)",
      "Biosignal Processing (ECG, EEG, EMG)",
      "Prosthetics, Orthotics & Biomechanics",
      "Clinical Hospital Instrumentation Maintenance",
      "Implantable Medical Devices & Biomaterials"
    ],
    employers: ["Ministry of Health Teaching Hospitals", "Asiri Health Group", "Nawaloka Hospitals", "Premium International Lanka", "Biomedite Healthcare", "Global MedTech MNCs"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Biomedical Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "SLIIT", slug: "sliit", degreeName: "B.Sc. Eng (Hons) in Electrical & Electronic (Biomedical)", faculty: "Faculty of Engineering", type: "PRIVATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 125k – 370k+ / mo (2026 avg)",
    badge: "Healthcare & Tech Fusion",
    zScoreTarget: "Moratuwa: ~1.95+, SLIIT: 3 S passes in Maths",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Civic Education or Geography",
        sinhalaSubject: "පුරවැසි අධ්‍යාපනය හෝ භූගෝල විද්‍යාව",
        reason: "Covers medical ethics, hospital regulations, patient privacy rights, and national healthcare systems.",
        sinhalaReason: "වෛද්‍ය ආචාරධර්ම, රෝහල් නීතිරීති සහ රෝගී අයිතිවාසිකම් පිළිබඳ දැනුම සපයයි."
      },
      basket2: {
        subject: "English Literature or Art",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය හෝ චිත්‍ර කලාව",
        reason: "English for medical equipment international manuals; Art for human anatomical sketching.",
        sinhalaReason: "වෛද්‍ය උපකරණ ජාත්‍යන්තර අත්පොත් අධ්‍යයනයට ඉංග්‍රීසිද, මිනිස් සිරුරේ ව්‍යුහ විද්‍යාත්මක චිත්‍ර ඇඳීමට චිත්‍ර කලාවද වැදගත් වේ."
      },
      basket3: {
        subject: "Health & Physical Education (සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය)",
        sinhalaSubject: "සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය",
        reason: "Direct foundation in human musculoskeletal systems, cardiovascular physiology, and clinical sanitation.",
        sinhalaReason: "මිනිස් සිරුරේ පද්ධති, හෘද වාහිනී ක්‍රියාකාරිත්වය සහ සෞඛ්‍යාරක්ෂාව පිළිබඳ ඍජු පදනම සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Biosignal FFT & Filtering",
        sinhalaBadge: "ජෛව සංඥා සැකසුම් ගණිතයට අත්‍යවශ්‍යයි",
        reason: "ECG and EEG digital signal filtering relies on Fourier transforms and trigonometric calculus.",
        sinhalaReason: "ECG සහ EEG වැනි හෘද හා මොළයේ සංඥා ඩිජිටල්ව පෙරීම (Filtering) සඳහා ෆූරියර් කලනය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["MATLAB biosignal ECG filter simulation", "Arduino pulse oximeter & heart rate sensor", "LabVIEW clinical instrumentation interface", "Prosthetic bionic hand 3D printed mechanism", "Hospital biomedical safety calibration testing"],
    industryRoleTitle: "Lead Clinical Biomedical / Medical Device Systems Engineer",
    charteredTitle: "Chartered Biomedical Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 14. MARINE ENGINEERING ────────────────────────────────────────────────
  {
    id: "marine-engineering",
    category: "specialized",
    iconName: "Ship",
    titleEn: "Marine Engineering & Naval Architecture",
    titleSi: "නාවික සහ සාගර ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Marine Engineering · 4 Years",
    summaryEn: "Design ocean-going cargo vessels, supervise giant diesel marine propulsion engines, manage shipyard dry-docks, and maintain offshore maritime energy platforms.",
    summarySi: "නැව් සැලසුම් කිරීම, සාගර යාත්‍රා එන්ජින් පද්ධති නඩත්තුව, නැව් තටාකාංගන සහ වරාය යන්ත්‍රෝපකරණ ක්‍රියාත්මක කිරීම.",
    specialisations: [
      "Naval Architecture & Hull Hydrodynamics",
      "Marine Giant 2-Stroke Diesel Propulsion Engines",
      "Shipyard Dry-Dock Overhaul & Surveying",
      "Offshore Oil & Wind Marine Structures",
      "Marine Electrical, Automation & Bridge Controls"
    ],
    employers: ["Colombo Dockyard PLC", "Walkers Shipyard", "Sri Lanka Ports Authority (SLPA)", "International Merchant Navies (USD tax-free contracts)"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Marine Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" },
      { name: "CINEC Campus", degreeName: "B.Sc. Eng (Hons) in Marine Engineering", faculty: "Faculty of Maritime Sciences", type: "PRIVATE", duration: "4 Years" },
      { name: "General Sir John Kotelawala Defence University", slug: "general-sir-john-kotelawala-defence-university", degreeName: "B.Sc. Eng (Hons) in Marine Engineering", faculty: "Faculty of Engineering", type: "DEFENCE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 150k – 450k+ / mo (USD at sea)",
    badge: "Global Maritime Careers",
    zScoreTarget: "Moratuwa: ~1.85+, CINEC/KDU: ~1.65+",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers ocean currents, trade winds, sea floor topography, international maritime boundaries, and tropical storms.",
        sinhalaReason: "සාගර ජල ධාරා, සුළං රටා, සාගර පතුලේ සැකැස්ම සහ ජාත්‍යන්තර සමුද්‍රීය සීමා පිළිබඳ දැනුම ලබාදේ."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Mandatory IMO standard maritime English communication, marine surveyor inspection logs, and vessel certificates.",
        sinhalaReason: "ජාත්‍යන්තර සමුද්‍රීය සංවිධානයේ (IMO) ඉංග්‍රීසි ප්‍රමිතීන් සහ නැව් පරීක්ෂණ වාර්තා ලිවීමට අවශ්‍ය වේ."
      },
      basket3: {
        subject: "Design, Electrical & Electronic Technology or D&T",
        sinhalaSubject: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ D&T",
        reason: "Shipboard auxiliary machinery, diesel engine fuel injectors, refrigeration compressors, and electrical switchboards.",
        sinhalaReason: "නැව් ඩීසල් එන්ජින්, ශීතකරණ පද්ධති සහ නැව් විදුලිබල පුවරු පිළිබඳ මූලික අවබෝධයක් සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Hydrodynamics & Hull Stability",
        sinhalaBadge: "නැව් ස්ථායිතාව සහ ජල ගති විද්‍යාවට අත්‍යවශ්‍යයි",
        reason: "Ship buoyancy, metacenter calculations, and hydrodynamic wave resistance demand advanced calculus.",
        sinhalaReason: "නැව්වල උත්ප්ලාවකතාව, ස්ථායිතා කේන්ද්‍රය (Metacenter) සහ ජල තරංග ප්‍රතිරෝධ ගණනයට අතිරේක ගණිතය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Maxsurf naval architecture hull stability modeling", "Marine 2-stroke diesel engine teardown & overhaul", "Shipyard dry-dock ultrasonic thickness testing", "Auxiliary boiler & seawater pump maintenance", "IMO STCW Continuous Discharge Certificate (CDC) training"],
    industryRoleTitle: "Chief Marine Engineer / Shipyard Project Manager",
    charteredTitle: "Chartered Marine Engineer (CEng CMarEng MIMarEST / FIE-SL)"
  },

  // ─── 15. MATERIALS SCIENCE & ENGINEERING ───────────────────────────────────
  {
    id: "materials-engineering",
    category: "specialized",
    iconName: "Layers",
    titleEn: "Materials Science & Engineering",
    titleSi: "ද්‍රව්‍ය විද්‍යා සහ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Materials Science & Engineering · 4 Years",
    summaryEn: "Synthesize high-strength ceramics, composite polymers, metallurgy alloys, and carbon nanomaterials for aerospace, building, and industrial exports.",
    summarySi: "අධි තාක්ෂණික සෙරමික්, මිශ්‍ර ලෝහ, පොලිමර් සහ නැනෝ තාක්ෂණික ද්‍රව්‍ය පර්යේෂණ කර කාර්මික නිෂ්පාදන සඳහා යොදාගැනීම.",
    specialisations: [
      "Advanced Metallurgy & Alloy Heat Treatment",
      "Ceramics, Glass & Refractory Engineering",
      "Composite Carbon Fibres & Polymer Synthesis",
      "Materials Failure Analysis & Fracture Mechanics",
      "Nanotechnology & Semiconductor Thin Films"
    ],
    employers: ["Noritake Lanka Porcelain", "Lanka Walltiles", "Ceylon Steel Corporation", "Camso Loadstar", "DSI Samson Group", "Sri Lanka Institute of Nanotechnology (SLINTEC)"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Materials Science & Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 115k – 320k+ / mo (2026 avg)",
    badge: "Advanced Materials & R&D",
    zScoreTarget: "Moratuwa: ~1.88+",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers Sri Lankan vein graphite, mineral beach sands (ilmenite, rutile, zircon), and clay quarry geology.",
        sinhalaReason: "ශ්‍රී ලංකාවේ මිනිරන්, ඛනිජ වැලි (ඉල්මනයිට්, රූටයිල්, සර්කෝන්) සහ මැටි නිධි පිළිබඳ භූගෝලීය පසුබිම උගන්වයි."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව)",
        sinhalaSubject: "චිත්‍ර කලාව",
        reason: "Ceramic glaze development, crystal lattice crystal structures, and industrial design aesthetics.",
        sinhalaReason: "සෙරමික් ඔප දැමීම, ස්ඵටික දැලිස ව්‍යුහ සහ කාර්මික නිමාවේ සෞන්දර්යය වටහා ගැනීමට උපකාරී වේ."
      },
      basket3: {
        subject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය)",
        sinhalaSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)",
        reason: "Hands-on experience with metals, wood, plastics, heat treatments, casting, and tensile strength.",
        sinhalaReason: "ලෝහ, ප්ලාස්ටික්, තාප පිරියම් කිරීම් සහ ද්‍රව්‍යවල ආතන්ය ශක්තිය පිළිබඳ මූලික පදනම සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Solid State Physics",
        sinhalaBadge: "ඝන තත්ව භෞතික විද්‍යාවට අත්‍යවශ්‍යයි",
        reason: "Bragg diffraction vectors and Hooke's tensor stress-strain relationships demand solid linear algebra.",
        sinhalaReason: "ද්‍රව්‍යවල ආතති-වික්‍රියා සම්බන්ධතා සහ ස්ඵටික විවර්තන ගණනය කිරීමට වීජ ගණිතය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Scanning Electron Microscope (SEM) analysis", "Instron tensile & compressive strength tester", "Ceramic high-temperature sintering furnace", "Graphene composite polymer synthesis", "Metallurgical grain boundary microscopy"],
    industryRoleTitle: "Lead Materials Research & Development Engineer",
    charteredTitle: "Chartered Materials Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 16. MINING & EARTH RESOURCES ──────────────────────────────────────────
  {
    id: "mining-engineering",
    category: "specialized",
    iconName: "Pickaxe",
    titleEn: "Mining & Earth Resources Engineering",
    titleSi: "පතල් සහ පාංශු සම්පත් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Earth Resources Engineering · 4 Years",
    summaryEn: "Extract Sri Lanka's high-purity vein graphite, mineral sands, gemstones, and limestone through underground tunneling, rock blasting, and mineral processing.",
    summarySi: "ශ්‍රී ලංකාවේ මිනිරන්, ඛනිජ වැලි, මැණික් සහ හුණුගල් සම්පත් නිරීක්ෂණය, භූගත උමං කැණීම් සහ පතල් ඉංජිනේරු මෙහෙයුම්.",
    specialisations: [
      "Underground Tunneling & Rock Mechanics",
      "Mineral Sand & Industrial Ore Processing",
      "Geophysical Exploration & Precious Gemology",
      "Mine Shaft Ventilation & Subterranean Safety",
      "Quarry Blasting & Environmental Rehabilitation"
    ],
    employers: ["Geological Survey & Mines Bureau (GSMB)", "Bogala Graphite Lanka PLC", "Lanka Mineral Sands (Pulmoddai)", "INSEE Cement (Siam City Lanka)", "Kahatagaha Graphite Lanka"],
    universities: [
      { name: "University of Moratuwa", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Earth Resources Engineering", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 120k – 350k+ / mo (2026 avg)",
    badge: "Unique Mineral Wealth",
    zScoreTarget: "Moratuwa: ~1.85+",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Direct foundation in Sri Lankan geology, rock formations (igneous, metamorphic), fault lines, and mineral strata.",
        sinhalaReason: "ශ්‍රී ලංකාවේ භූ විද්‍යාව, පාෂාණ වර්ග (විපරීත, ආග්නේය), භූ පැලුම් සහ ඛනිජ ස්ථර පිළිබඳ ඍජු පදනම සපයයි."
      },
      basket2: {
        subject: "Art (චිත්‍ර කලාව)",
        sinhalaSubject: "චිත්‍ර කලාව",
        reason: "Geological field cross-section sketching, rock stratum mapping, and gemstone color hue evaluation.",
        sinhalaReason: "භූ විද්‍යාත්මක හරස්කඩ සටහන් ඇඳීම සහ මැණික් වර්ගවල වර්ණ තත්ත්ව ඇගයීමට උපකාරී වේ."
      },
      basket3: {
        subject: "Design & Technology - D&T (නිර්මාණකරණය හා තාක්ෂණවේදය)",
        sinhalaSubject: "නිර්මාණකරණය හා තාක්ෂණවේදය (D&T)",
        reason: "Covers mechanical rock drilling tools, timber mine shoring, ventilation blowers, and safety equipment.",
        sinhalaReason: "පතල් විදින මෙවලම්, උමං ආරක්ෂිත ආධාරක (shoring) සහ වාතාශ්‍ර පද්ධති පිළිබඳ මූලික අවබෝධය සපයයි."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for 3D Rock Stress Tensors",
        sinhalaBadge: "පාෂාණ ආතති න්‍යාස වලට අත්‍යවශ්‍යයි",
        reason: "Underground rock pressure, tunnel roof collapse mechanics, and blast wave propagation demand trigonometry and vectors.",
        sinhalaReason: "භූගත පාෂාණ පීඩනය, උමං කඩාවැටීම් ආතති සහ පිපිරුම් තරංග ගණනයට දෛශික හා ත්‍රිකෝණමිතිය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["Underground mine 3D CAD modeling (Surpac)", "Rock core compressive strength load testing", "Vein graphite flotation separation pilot test", "Mine seismograph blast vibration monitoring", "Pulmoddai heavy mineral sand magnetic separation"],
    industryRoleTitle: "Lead Mining Engineer / Mine General Manager",
    charteredTitle: "Chartered Earth Resources & Mining Engineer (CEng FIE-SL / MIE-SL)"
  },

  // ─── 17. AERONAUTICAL & AEROSPACE ENGINEERING ──────────────────────────────
  {
    id: "aeronautical-engineering",
    category: "specialized",
    iconName: "Plane",
    titleEn: "Aeronautical & Aerospace Engineering",
    titleSi: "ගගනගාමී සහ ගුවන්යානා ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) in Aeronautical Engineering · 4 Years",
    summaryEn: "Oversee commercial airliner airframes, jet turbine propulsion engines, avionics navigation systems, and international flight airworthiness certification.",
    summarySi: "ගුවන්යානා එන්ජින්, ගගන යාන්ත්‍ර විද්‍යාව, ඒවියොනික්ස් නාවික පද්ධති සහ ගුවන්යානා නඩත්තු (MRO) මෙහෙයුම්.",
    specialisations: [
      "Aerodynamics & High-Speed Flight Dynamics",
      "Gas Turbine Jet Engines & Rocket Propulsion",
      "Avionics, Fly-by-Wire & Flight Deck Radar",
      "Airframe Structural Integrity & Fatigue Analysis",
      "Aircraft Maintenance (MRO) & Airworthiness Certification"
    ],
    employers: ["SriLankan Airlines Engineering (MRO)", "FitsAir", "Sri Lanka Air Force (SLAF)", "Civil Aviation Authority of Sri Lanka (CAASL)", "International Airlines MRO Hubs (Emirates, Qatar, Singapore Airlines)"],
    universities: [
      { name: "General Sir John Kotelawala Defence University", slug: "general-sir-john-kotelawala-defence-university", degreeName: "B.Sc. Eng (Hons) in Aeronautical Engineering", faculty: "Faculty of Engineering", type: "DEFENCE", duration: "4 Years" },
      { name: "University of Moratuwa (Aero Pathway)", slug: "university-of-moratuwa", degreeName: "B.Sc. Eng (Hons) in Mechanical / Aerospace", faculty: "Faculty of Engineering", type: "STATE", duration: "4 Years" }
    ],
    salaryLkr: "LKR 140k – 420k+ / mo (2026 avg)",
    badge: "Aviation & MRO Sector",
    zScoreTarget: "Moratuwa: ~1.95+, KDU: ~1.75+",
    alStream: "Physical Science (Combined Mathematics, Physics, Chemistry)",
    olGuidance: {
      basket1: {
        subject: "Geography (භූගෝල විද්‍යාව)",
        sinhalaSubject: "භූගෝල විද්‍යාව",
        reason: "Covers atmospheric layers, jet streams, Coriolis navigation effect, global coordinates, and air pressure zones.",
        sinhalaReason: "වායුගෝලීය ස්ථර, ජෙට් ප්‍රවාහ, ගුවන් ගමන් අක්ෂාංශ-දේශාංශ සහ පීඩන කලාප පිළිබඳ පදනම සපයයි."
      },
      basket2: {
        subject: "English Literature",
        sinhalaSubject: "ඉංග්‍රීසි සාහිත්‍යය",
        reason: "Mandatory ICAO/FAA airworthiness manuals, aircraft maintenance logbooks, and international civil aviation law.",
        sinhalaReason: "ජාත්‍යන්තර ගුවන් සේවා නඩත්තු අත්පොත් (AMM) සහ ගුවන් නීති රෙගුලාසි කියවා තේරුම් ගැනීමට අත්‍යවශ්‍ය වේ."
      },
      basket3: {
        subject: "Design, Electrical & Electronic Technology or ICT",
        sinhalaSubject: "විද්‍යුත් හා ඉලෙක්ට්‍රොනික තාක්ෂණවේදය හෝ ICT",
        reason: "Covers aircraft cockpit avionics, radar antennas, fly-by-wire servos, and flight instrumentation.",
        sinhalaReason: "ගුවන්යානා ඒවියොනික්ස්, රේඩාර් ඇන්ටනා සහ පියාසර පරිගණක පද්ධති පිළිබඳ මූලික අවබෝධය ලබාදේ."
      },
      additionalMaths: {
        recommended: true,
        badge: "Essential for Navier-Stokes Fluid Dynamics",
        sinhalaBadge: "වායු ගති විද්‍යාව සහ කලනයට අත්‍යවශ්‍යයි",
        reason: "Aerodynamic lift, drag coefficients, and supersonic shockwaves demand advanced differential calculus and vectors.",
        sinhalaReason: "ගුවන්යානා තෙරපුම, එසවුම් බලය (Lift & Drag) සහ සුපර්සොනික් කම්පන තරංග ගණනයට කලනය අත්‍යවශ්‍ය වේ."
      }
    },
    keyToolsAndProjects: ["ANSYS Fluent aerodynamic wing CFD simulation", "Jet turbine gas flow thermodynamics calculation", "Airframe composite tensile fatigue testing", "Aircraft avionics autopilot circuit simulation", "CAASL Part-66 aircraft maintenance logbook"],
    industryRoleTitle: "Lead Aeronautical / Fleet Airworthiness Engineer",
    charteredTitle: "Chartered Aeronautical Engineer (CEng FRAeS / FIE-SL)"
  }
];

export function getEngineeringDiscipline(idOrSlug: string): EngineeringDiscipline | undefined {
  if (!idOrSlug) return undefined;
  const normalized = idOrSlug.trim().toLowerCase();
  return (
    ENGINEERING_DISCIPLINES.find((d) => d.id === normalized) ||
    ENGINEERING_DISCIPLINES.find((d) => d.titleEn.toLowerCase().includes(normalized)) ||
    ENGINEERING_DISCIPLINES.find((d) => d.specialisations.some((s) => s.toLowerCase().includes(normalized)))
  );
}

export function getAllEngineeringDisciplines(): EngineeringDiscipline[] {
  return ENGINEERING_DISCIPLINES;
}

