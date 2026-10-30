"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Building2,
  Cpu,
  Zap,
  Cog,
  Radio,
  Bot,
  FlaskConical,
  HeartPulse,
  Ship,
  Layers,
  Pickaxe,
  Plane,
  Cloud,
  Shield,
  Brain,
  Palette,
  Database,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  DollarSign,
  Compass,
} from "lucide-react";

type Discipline = {
  id: string;
  category: "civil" | "mechanical" | "computing" | "specialized";
  icon: typeof Building2;
  titleEn: string;
  titleSi: string;
  degree: string;
  summaryEn: string;
  summarySi: string;
  specialisations: string[];
  employers: string[];
  universities: { name: string; slug?: string }[];
  salaryLkr: string;
  badge: string;
};

const disciplines: Discipline[] = [
  {
    id: "civil-engineering",
    category: "civil",
    icon: Building2,
    titleEn: "Civil Engineering",
    titleSi: "සිවිල් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Design, construct, and sustain major infrastructure: bridges, multi-storey buildings, highways, reservoirs, coastal dams, and water networks.",
    summarySi: "පාලම්, අධිවේගී මාර්ග, ගොඩනැගිලි, ජලාශ සහ වරාය වැනි රටේ ප්‍රධාන යටිතල පහසුකම් සැලසුම් කර ඉදිකිරීම.",
    specialisations: ["Structural Engineering", "Geotechnical & Soil Mechanics", "Hydraulics & Water Resources", "Transportation & Highways", "Environmental Engineering"],
    employers: ["Access Engineering PLC", "Maga Engineering", "ICC", "CECB", "Road Development Authority (RDA)", "National Water Board (NWSDB)"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
      { name: "Ruhuna", slug: "university-of-ruhuna" },
      { name: "Jaffna", slug: "university-of-jaffna" },
      { name: "South Eastern", slug: "south-eastern-university-of-sri-lanka" },
      { name: "Sri Jayewardenepura", slug: "university-of-sri-jayewardenepura" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 120k – 380k+ / mo (2026 avg)",
    badge: "Infrastructure Pillar",
  },
  {
    id: "mechanical-engineering",
    category: "mechanical",
    icon: Cog,
    titleEn: "Mechanical Engineering",
    titleSi: "යාන්ත්‍රික ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Develop, analyze, and automate thermal machines, industrial production systems, automotive powertrains, HVAC climate units, and energy equipment.",
    summarySi: "යන්ත්‍ර සූත්‍ර, කර්මාන්තශාලා ස්වයංක්‍රීයකරණය, මෝටර් රථ පද්ධති සහ බලශක්ති තාක්ෂණය සැලසුම් කර ක්‍රියාත්මක කිරීම.",
    specialisations: ["Thermodynamics & Fluid Power", "Manufacturing & CAD/CAM", "Automotive Systems", "HVAC & Building Services", "Energy Engineering & Powerplants"],
    employers: ["MAS Holdings", "Brandix", "DIMO", "Toyota Lanka", "Ceylon Electricity Board (CEB)", "Unilever Sri Lanka", "Hayleys"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
      { name: "Ruhuna", slug: "university-of-ruhuna" },
      { name: "Jaffna", slug: "university-of-jaffna" },
      { name: "South Eastern", slug: "south-eastern-university-of-sri-lanka" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 125k – 360k+ / mo (2026 avg)",
    badge: "Core Engineering Field",
  },
  {
    id: "electrical-engineering",
    category: "mechanical",
    icon: Zap,
    titleEn: "Electrical & Electronic Engineering",
    titleSi: "විදුලි සහ ඉලෙක්ට්‍රොනික ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Power nation-building electrical grids, renewable solar/wind installations, high-voltage transformers, electric vehicle systems, and industrial drives.",
    summarySi: "ජාතික විදුලිබල පද්ධති, සූර්ය හා සුළං බලශක්ති ව්‍යාපෘති, ස්මාර්ට් ග්‍රිඩ් සහ ඉහළ වෝල්ටීයතා පද්ධති මෙහෙයවීම.",
    specialisations: ["Power Systems & High Voltage", "Renewable Energy (Solar/Wind)", "Electric Drives & Power Electronics", "Smart Grid Automation", "Industrial Controls"],
    employers: ["Ceylon Electricity Board (CEB)", "LECO", "LTL Holdings", "DIMO Energy", "Haycarb", "Vega Innovations"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
      { name: "Ruhuna", slug: "university-of-ruhuna" },
      { name: "Jaffna", slug: "university-of-jaffna" },
      { name: "South Eastern", slug: "south-eastern-university-of-sri-lanka" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 130k – 380k+ / mo (2026 avg)",
    badge: "Power & Grid Systems",
  },
  {
    id: "software-engineering",
    category: "computing",
    icon: Cpu,
    titleEn: "Software & Computer Systems Engineering",
    titleSi: "මෘදුකාංග සහ පරිගණක පද්ධති ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Design mission-critical enterprise software platforms, microservice architectures, cloud backends, operating systems, and full-stack solutions.",
    summarySi: "මෘදුකාංග (Software), ක්ලවුඩ් පද්ධති, කාවැද්දූ හාඩ්වෙයාර් (Embedded Systems) සහ මහා පරිමාණ පරිගණක පද්ධති ඉංජිනේරු මට්ටමින් නිර්මාණය කිරීම.",
    specialisations: ["Software Architecture & Microservices", "Full-Stack Web & API Platforms", "Operating Systems & Embedded Firmware", "Distributed Systems & Scalability", "Enterprise SaaS Systems"],
    employers: ["WSO2", "Sysco LABS", "IFS", "99x", "Virtusa", "Synopsys Sri Lanka", "Axiata Digital Labs", "London Stock Exchange Group (LSEG)"],
    universities: [
      { name: "Moratuwa (CSE)", slug: "university-of-moratuwa" },
      { name: "Peradeniya (CE)", slug: "university-of-peradeniya" },
      { name: "Ruhuna (DEIE)", slug: "university-of-ruhuna" },
      { name: "Jaffna (CE)", slug: "university-of-jaffna" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 180k – 550k+ / mo (2026 avg)",
    badge: "High Tech Growth",
  },
  {
    id: "cloud-engineering",
    category: "computing",
    icon: Cloud,
    titleEn: "Cloud & DevOps Systems Engineering",
    titleSi: "ක්ලවුඩ් සහ DevOps පද්ධති ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Architect resilient high-availability AWS/Azure/GCP cloud environments, automated CI/CD container clusters, and microservice orchestration.",
    summarySi: "AWS, Azure හෝ Google Cloud ජාල සැලසුම් කිරීම, Kubernetes කන්ටේනර් පද්ධති සහ මෘදුකාංග ස්වයංක්‍රීයව deploy කිරීම.",
    specialisations: ["Cloud Architecture & Multi-Cloud", "Kubernetes & Docker Containerization", "CI/CD & Infrastructure as Code (Terraform)", "Site Reliability Engineering (SRE)", "Serverless Computing"],
    employers: ["Sysco LABS", "WSO2", "Dialog Axiata", "Axiata Digital Labs", "IFS", "Virtusa"],
    universities: [
      { name: "Moratuwa (CSE)", slug: "university-of-moratuwa" },
      { name: "Peradeniya (CE)", slug: "university-of-peradeniya" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 245k – 650k+ / mo (2026 avg)",
    badge: "Cloud Infrastructure",
  },
  {
    id: "cybersecurity-engineering",
    category: "computing",
    icon: Shield,
    titleEn: "Cybersecurity & Network Security Engineering",
    titleSi: "සයිබර් ආරක්ෂණ සහ ජාල ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Defend enterprise networks, banking mainframes, and government digital infrastructure from ransomware, zero-day exploits, and cyber espionage.",
    summarySi: "බැංකු, විදුලි සංදේශ ජාල සහ රාජ්‍ය ඩිජිටල් පද්ධති සයිබර් ප්‍රහාරවලින් සහ හැකර්වරුන්ගෙන් ආරක්ෂා කිරීම.",
    specialisations: ["Ethical Hacking & Penetration Testing", "Security Operations Center (SOC)", "Cryptography & Zero Trust Architecture", "Cloud Security & DevSecOps", "Network Defense & Forensics"],
    employers: ["Virtusa", "Dialog Axiata", "SLT-MOBITEL", "Commercial Bank", "Hatton National Bank", "Sri Lanka CERT"],
    universities: [
      { name: "Moratuwa (CSE)", slug: "university-of-moratuwa" },
      { name: "SLIIT", slug: "sliit" },
      { name: "KDU", slug: "general-sir-john-kotelawala-defence-university" },
    ],
    salaryLkr: "LKR 210k – 600k+ / mo (2026 avg)",
    badge: "Critical Defense",
  },
  {
    id: "ai-engineering",
    category: "computing",
    icon: Brain,
    titleEn: "AI & Machine Learning Systems Engineering",
    titleSi: "කෘත්‍රිම බුද්ධි සහ මැෂින් ලර්නින් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Train generative AI models, deep neural networks, computer vision algorithms, and natural language processing pipelines at scale.",
    summarySi: "Generative AI, ChatGPT වැනි භාෂා මොඩල (LLMs), පරිගණක දෘෂ්ටිය (Computer Vision) සහ ස්වයංක්‍රීය බුද්ධිමය පද්ධති ඉංජිනේරු මට්ටමින් නිර්මාණය.",
    specialisations: ["Deep Learning & Neural Networks", "Large Language Models (LLMs) & NLP", "Computer Vision & Edge AI", "MLOps & Model Deployment", "Reinforcement Learning"],
    employers: ["Virtusa", "Sysco LABS", "WSO2", "Synopsys", "London Stock Exchange Group (LSEG)", "AI Startups"],
    universities: [
      { name: "Moratuwa (CSE / AI)", slug: "university-of-moratuwa" },
      { name: "Peradeniya (CE)", slug: "university-of-peradeniya" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 260k – 750k+ / mo (2026 avg)",
    badge: "Next-Gen Tech",
  },
  {
    id: "uiux-engineering",
    category: "computing",
    icon: Palette,
    titleEn: "UI / UX & Digital Product Engineering",
    titleSi: "UI / UX සහ ඩිජිටල් නිෂ්පාදන ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng / Computing (Hons) · 4 Years",
    summaryEn: "Engineer intuitive human-computer interfaces, design system architectures, responsive web apps, and human-centered digital experiences.",
    summarySi: "Mobile apps සහ websites මිනිසුන්ට පහසුවෙන් පාවිච්චි කරන්න පුළුවන් ආකාරයට design systems සහ අන්තර්ක්‍රියාකාරී පරිශීලක අතුරුමුහුණත් නිර්මාණය.",
    specialisations: ["Design Systems Architecture", "User Experience (UX) Research", "Interactive Frontend Engineering", "Usability Engineering & Accessibility", "Mobile App Product Design"],
    employers: ["99x", "Sysco LABS", "Arimac", "Virtusa", "Axiata Digital Labs", "Global Product Firms"],
    universities: [
      { name: "Moratuwa (CSE / Design)", slug: "university-of-moratuwa" },
      { name: "SLIIT", slug: "sliit" },
      { name: "USJ", slug: "university-of-sri-jayewardenepura" },
    ],
    salaryLkr: "LKR 140k – 420k+ / mo (2026 avg)",
    badge: "Product Experience",
  },
  {
    id: "data-engineering",
    category: "computing",
    icon: Database,
    titleEn: "Big Data & Systems Analytics Engineering",
    titleSi: "මහා දත්ත සහ පද්ධති විශ්ලේෂණ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Build petabyte-scale data pipelines, distributed data lakehouses, real-time streaming engines, and high-speed analytical databases.",
    summarySi: "විශාල දත්ත පද්ධති (Big Data), Real-time දත්ත විශ්ලේෂණය සහ ස්මාර්ට් දත්ත ගබඩා ගොඩනැගීම.",
    specialisations: ["Data Lakehouse Architecture", "Real-Time Streaming (Kafka/Flink)", "Distributed SQL & NoSQL Systems", "ETL/ELT Data Pipelines", "Cloud Data Warehouses (Snowflake/BigQuery)"],
    employers: ["Dialog Axiata", "Sysco LABS", "IFS", "Virtusa", "London Stock Exchange Group (LSEG)", "Commercial Bank"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
      { name: "Ruhuna", slug: "university-of-ruhuna" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 170k – 480k+ / mo (2026 avg)",
    badge: "Big Data Engine",
  },
  {
    id: "telecom-engineering",
    category: "computing",
    icon: Radio,
    titleEn: "Electronic & Telecommunication Engineering",
    titleSi: "විද්‍යුත් සහ විදුලි සංදේශ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Architect 5G/6G mobile communication networks, optical fiber undersea links, digital signal processing, satellite payloads, and RF microwave transmission.",
    summarySi: "5G/6G සන්නිවේදන ජාල, ඔප්ටිකල් ෆයිබර්, සැටලයිට් සන්නිවේදනය සහ ඩිජිටල් සිග්නල් සැකසුම් පද්ධති නිර්මාණය.",
    specialisations: ["5G/6G Cellular Networks", "Optical Fiber Communications", "RF & Microwave Engineering", "Digital Signal Processing (DSP)", "Satellite & Antenna Systems"],
    employers: ["Dialog Axiata", "SLT-MOBITEL", "Huawei Sri Lanka", "Ericsson", "TRCSL", "ZTE Sri Lanka"],
    universities: [
      { name: "Moratuwa (ENTC)", slug: "university-of-moratuwa" },
      { name: "Ruhuna (DEIE)", slug: "university-of-ruhuna" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 135k – 400k+ / mo (2026 avg)",
    badge: "Telecom & IoT Leaders",
  },
  {
    id: "mechatronics-engineering",
    category: "mechanical",
    icon: Bot,
    titleEn: "Mechatronics & Robotics Engineering",
    titleSi: "මෙකට්‍රොනික්ස් සහ රොබෝ තාක්ෂණ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Synthesize mechanical mechanisms, microcontrollers, computer vision, and AI to engineer autonomous industrial robots and automated smart production lines.",
    summarySi: "රොබෝ තාක්ෂණය, කර්මාන්තශාලා ස්වයංක්‍රීයකරණය, පරිගණක දෘෂ්ටි සංවේදක සහ කෘත්‍රිම බුද්ධිය එක් කර නව පද්ධති නිර්මාණය.",
    specialisations: ["Industrial Robotics & Kinematics", "PLC & SCADA Automation", "Sensors, Actuators & Vision", "Control Theory & Microcontrollers", "Autonomous Vehicles"],
    employers: ["MAS Matrix", "Brandix Apparel Solutions", "Camso Loadstar", "Unilever", "Ansell Lanka", "Nestlé Sri Lanka"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Sri Jayewardenepura", slug: "university-of-sri-jayewardenepura" },
      { name: "SLIIT", slug: "sliit" },
      { name: "CINEC Campus" },
      { name: "KDU", slug: "general-sir-john-kotelawala-defence-university" },
    ],
    salaryLkr: "LKR 130k – 380k+ / mo (2026 avg)",
    badge: "Industry 4.0 Robotics",
  },
  {
    id: "chemical-engineering",
    category: "specialized",
    icon: FlaskConical,
    titleEn: "Chemical & Process Engineering",
    titleSi: "රසායනික සහ ක්‍රියාවලි ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Convert raw natural materials into valuable petroleum fuels, polymers, rubber products, pharmaceuticals, activated carbon, and eco-friendly consumer goods.",
    summarySi: "තෙල් පිරිපහදු, ඖෂධ, පොලිමර් සහ රබර් නිෂ්පාදන, සක්‍රිය කාබන් සහ ආහාර සැකසුම් කර්මාන්ත සඳහා රසායනික ක්‍රියාවලි සැලසුම් කිරීම.",
    specialisations: ["Petroleum Refining & Petrochemicals", "Polymer & Rubber Technology", "Food & Pharmaceutical Processing", "Reaction Kinetics & Reactor Design", "Effluent & Water Treatment"],
    employers: ["Ceylon Petroleum Corporation (CPC)", "Ansell Lanka", "Haycarb PLC", "Unilever Sri Lanka", "DSI Rubber", "Link Natural"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "Peradeniya", slug: "university-of-peradeniya" },
    ],
    salaryLkr: "LKR 125k – 360k+ / mo (2026 avg)",
    badge: "Process & Export Industry",
  },
  {
    id: "biomedical-engineering",
    category: "specialized",
    icon: HeartPulse,
    titleEn: "Biomedical Engineering",
    titleSi: "ජෛව වෛද්‍ය ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Pioneer healthcare technology by engineering clinical hospital instruments, MRI/CT scanners, patient monitoring units, smart prosthetics, and artificial organs.",
    summarySi: "රෝහල් උපකරණ, MRI/CT ස්කෑනර්, රෝගී නිරීක්ෂණ පද්ධති සහ කෘත්‍රිම අවයව වැනි වෛද්‍ය තාක්ෂණික විසඳුම් සැලසුම් කිරීම.",
    specialisations: ["Medical Imaging Systems (MRI/CT)", "Biosignal Processing", "Prosthetics & Biomechanics", "Clinical Healthcare Instrumentation", "Implantable Medical Devices"],
    employers: ["Ministry of Health Hospitals", "Asiri Health", "Nawaloka Hospitals", "Premium International", "Biomedite", "Overseas Medical Tech"],
    universities: [
      { name: "Moratuwa (Biomedical)", slug: "university-of-moratuwa" },
      { name: "SLIIT", slug: "sliit" },
    ],
    salaryLkr: "LKR 125k – 370k+ / mo (2026 avg)",
    badge: "Healthcare & Tech Fusion",
  },
  {
    id: "marine-engineering",
    category: "specialized",
    icon: Ship,
    titleEn: "Marine Engineering & Naval Architecture",
    titleSi: "නාවික සහ සාගර ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Design ocean-going cargo vessels, supervise giant diesel marine propulsion engines, manage shipyard dry-docks, and maintain offshore maritime energy platforms.",
    summarySi: "නැව් සැලසුම් කිරීම, සාගර යාත්‍රා එන්ජින් පද්ධති නඩත්තුව, නැව් තටාකාංගන සහ වරාය යන්ත්‍රෝපකරණ ක්‍රියාත්මක කිරීම.",
    specialisations: ["Naval Architecture & Hydrodynamics", "Marine Diesel Propulsion Plants", "Shipyard Dry-Dock Repairs", "Offshore Structures & Cranes", "Marine Electrical & Automation"],
    employers: ["Colombo Dockyard PLC", "Walkers Shipyard", "Sri Lanka Ports Authority (SLPA)", "International Merchant Navies (USD Contracts)"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
      { name: "CINEC Campus" },
      { name: "KDU", slug: "general-sir-john-kotelawala-defence-university" },
    ],
    salaryLkr: "LKR 150k – 450k+ / mo (USD at sea)",
    badge: "Global Maritime Careers",
  },
  {
    id: "materials-engineering",
    category: "specialized",
    icon: Layers,
    titleEn: "Materials Science & Engineering",
    titleSi: "ද්‍රව්‍ය විද්‍යා සහ ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Synthesize high-strength ceramics, composite polymers, metallurgy alloys, and carbon nanomaterials for aerospace, building, and industrial exports.",
    summarySi: "අධි තාක්ෂණික සෙරමික්, මිශ්‍ර ලෝහ, පොලිමර් සහ නැනෝ තාක්ෂණික ද්‍රව්‍ය පර්යේෂණ කර කාර්මික නිෂ්පාදන සඳහා යොදාගැනීම.",
    specialisations: ["Metallurgy & Alloy Development", "Ceramics & Glass Engineering", "Polymers & Composite Fibres", "Failure Analysis & Quality Assurance", "Nanotechnology & Smart Coatings"],
    employers: ["Noritake Lanka Porcelain", "Lanka Walltiles", "Ceylon Steel Corporation", "Camso Loadstar", "DSI", "Research Institutes (SLINTEC)"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
    ],
    salaryLkr: "LKR 115k – 320k+ / mo (2026 avg)",
    badge: "Advanced Materials & R&D",
  },
  {
    id: "mining-engineering",
    category: "specialized",
    icon: Pickaxe,
    titleEn: "Mining & Earth Resources Engineering",
    titleSi: "පතල් සහ පාංශු සම්පත් ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Extract Sri Lanka's high-purity vein graphite, mineral sands, gemstones, and limestone through underground tunneling, rock blasting, and mineral processing.",
    summarySi: "ශ්‍රී ලංකාවේ මිනිරන්, ඛනිජ වැලි, මැණික් සහ හුණුගල් සම්පත් නිරීක්ෂණය, භූගත උමං කැණීම් සහ පතල් ඉංජිනේරු මෙහෙයුම්.",
    specialisations: ["Rock Mechanics & Tunneling", "Mineral Sand & Ore Processing", "Geophysical Exploration & Gemology", "Underground Mine Ventilation & Safety", "Quarry & Blasting Engineering"],
    employers: ["Geological Survey & Mines Bureau (GSMB)", "Bogala Graphite Lanka PLC", "Lanka Mineral Sands (Pulmoddai)", "INSEE Cement (Siam City)", "Kahatagaha Graphite"],
    universities: [
      { name: "Moratuwa", slug: "university-of-moratuwa" },
    ],
    salaryLkr: "LKR 120k – 350k+ / mo (2026 avg)",
    badge: "Unique Mineral Wealth",
  },
  {
    id: "aeronautical-engineering",
    category: "specialized",
    icon: Plane,
    titleEn: "Aeronautical & Aerospace Engineering",
    titleSi: "ගගනගාමී සහ ගුවන්යානා ඉංජිනේරු විද්‍යාව",
    degree: "B.Sc. Eng (Hons) · 4 Years",
    summaryEn: "Oversee commercial airliner airframes, jet turbine propulsion engines, avionics navigation systems, and international flight airworthiness certification.",
    summarySi: "ගුවන්යානා එන්ජින්, ගගන යාන්ත්‍ර විද්‍යාව, ඒවියොනික්ස් නාවික පද්ධති සහ ගුවන්යානා නඩත්තු (MRO) මෙහෙයුම්.",
    specialisations: ["Aerodynamics & Flight Dynamics", "Aircraft Gas Turbines & Jet Propulsion", "Avionics & Cockpit Navigation", "Airframe Structural Integrity", "MRO Certification & Airworthiness"],
    employers: ["SriLankan Airlines Engineering (MRO)", "FitsAir", "Sri Lanka Air Force", "Civil Aviation Authority (CAASL)", "International Airlines MRO"],
    universities: [
      { name: "KDU", slug: "general-sir-john-kotelawala-defence-university" },
      { name: "Moratuwa (Aero pathway)", slug: "university-of-moratuwa" },
    ],
    salaryLkr: "LKR 140k – 420k+ / mo (2026 avg)",
    badge: "Aviation & MRO Sector",
  },
];

export function EngineeringFields() {
  const locale = useLocale();
  const isSi = locale === "si";
  const [activeFilter, setActiveFilter] = useState<"all" | "civil" | "mechanical" | "computing" | "specialized">("all");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>("software-engineering");

  const filtered = disciplines.filter((d) => activeFilter === "all" || d.category === activeFilter);
  const activeItem = disciplines.find((d) => d.id === selectedDiscipline) || disciplines[0];

  const filterTabs = [
    { key: "all", label: isSi ? `සියලු අංශ (${disciplines.length})` : `All Disciplines (${disciplines.length})` },
    { key: "computing", label: isSi ? "Software & IT ක්ෂේත්‍ර" : "Software, Cloud & Tech" },
    { key: "civil", label: isSi ? "සිවිල් & ඉදිකිරීම්" : "Infrastructure & Built" },
    { key: "mechanical", label: isSi ? "යාන්ත්‍රික & බලශක්ති" : "Machinery & Power" },
    { key: "specialized", label: isSi ? "විශේෂඥ ඉංජිනේරු අංශ" : "High-Tech & Specialized" },
  ];

  return (
    <div className="engineering-fields-experience section-block">
      {/* Overview Banner */}
      <section className="glass-panel" style={{ padding: "28px 24px", marginBottom: "32px", borderRadius: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span className="eyebrow-pill" style={{ margin: 0 }}>
            <Award size={15} /> {isSi ? "IESL & Washington Accord පිළිගත්" : "Washington Accord & IESL Accredited"}
          </span>
          <span className="eyebrow-pill" style={{ margin: 0, background: "rgba(22, 101, 52, 0.1)", color: "#166534" }}>
            <CheckCircle2 size={15} /> {isSi ? "ශ්‍රී ලංකාවේ සියලුම ඉංජිනේරු අංශ 17" : "All 17 Engineering & Tech Branches"}
          </span>
        </div>
        <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "10px 0 12px", color: "var(--forest)" }}>
          {isSi
            ? "ශ්‍රී ලංකාවේ සියලුම ඉංජිනේරු සහ තාක්ෂණික විශේෂඥ අංශ"
            : "All Engineering Disciplines & Tech Specialisations in Sri Lanka"}
        </h2>
        <p className="muted" style={{ fontSize: "14.5px", lineHeight: 1.6, maxWidth: "880px", margin: 0 }}>
          {isSi
            ? "මෘදුකාංග, ක්ලවුඩ්, AI, හාඩ්වෙයාර්, සිවිල්, යාන්ත්‍රික ඇතුළු සියලුම තාක්ෂණික අංශ ඉංජිනේරු ක්ෂේත්‍රය යටතට අයත් වේ. උසස් පෙළ ගණිත අංශයෙන් ඇතුළත් වන සිසුන් මූලික ඉංජිනේරු විද්‍යාව හැදෑරීමෙන් පසු තම විශේෂඥ අංශය තෝරා ගනී."
            : "All technical, software, cloud, cybersecurity, AI, hardware, civil, mechanical, and industrial engineering branches are unified under the Engineering discipline. Undergraduates begin with foundational physical science and engineering mathematics before advancing to their specialized engineering domains."}
        </p>
      </section>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`glass-button ${activeFilter === tab.key ? "selected" : ""}`}
            style={{
              padding: "9px 18px",
              borderRadius: "14px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              background: activeFilter === tab.key ? "var(--forest)" : "rgba(255, 255, 255, 0.7)",
              color: activeFilter === tab.key ? "#ffffff" : "var(--forest)",
              borderColor: activeFilter === tab.key ? "var(--forest)" : "rgba(255, 255, 255, 0.9)",
              transition: "all 0.2s ease",
            }}
            onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Discipline Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px", marginBottom: "40px" }}>
        {filtered.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === activeItem.id;
          return (
            <div
              key={item.id}
              className={`glass-panel ${isSelected ? "highlighted-card" : ""}`}
              style={{
                padding: "20px",
                borderRadius: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                border: isSelected ? "2px solid #ab8327" : "1px solid rgba(255,255,255,0.7)",
                boxShadow: isSelected ? "0 12px 28px rgba(171, 131, 39, 0.16)" : "var(--glass-shadow-sm)",
                transition: "all 0.25s var(--ease-spring)",
              }}
              onClick={() => setSelectedDiscipline(item.id)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(250,225,154,0.35))",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--forest)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <Icon size={24} />
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(171, 131, 39, 0.12)",
                    color: "#8a6311",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 2px", color: "var(--forest)" }}>
                {item.titleEn}
              </h3>
              <p style={{ fontSize: "12.5px", color: "var(--muted-ink)", margin: "0 0 10px", fontWeight: 500 }}>
                {item.titleSi}
              </p>

              <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#334155", margin: "0 0 14px", flexGrow: 1 }}>
                {item.summaryEn}
              </p>

              {/* Specialisation pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
                {item.specialisations.slice(0, 3).map((spec) => (
                  <span
                    key={spec}
                    style={{
                      fontSize: "10.5px",
                      padding: "3px 8px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      color: "#475569",
                    }}
                  >
                    {spec}
                  </span>
                ))}
                {item.specialisations.length > 3 && (
                  <span style={{ fontSize: "10.5px", padding: "3px 8px", color: "var(--muted-ink)" }}>
                    +{item.specialisations.length - 3} more
                  </span>
                )}
              </div>

              {/* Salary & degree */}
              <div
                style={{
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11.5px",
                }}
              >
                <span style={{ fontWeight: 600, color: "#ab8327", display: "flex", alignItems: "center", gap: "4px" }}>
                  <DollarSign size={13} /> {item.salaryLkr}
                </span>
                <span style={{ color: "var(--muted-ink)", fontSize: "11px" }}>{item.degree}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Spotlight on Selected Discipline */}
      {activeItem && (
        <section
          className="glass-panel"
          style={{
            padding: "30px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,249,235,0.85))",
            border: "1px solid rgba(250,225,154,0.8)",
            boxShadow: "0 16px 36px rgba(128,96,40,0.1)",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span className="eyebrow-pill" style={{ margin: 0 }}>
              <Sparkles size={14} /> {isSi ? "ක්ෂේත්‍රය පිළිබඳ ගැඹුරු විමසුම" : "In-Depth Field Spotlight"}
            </span>
            <span style={{ fontSize: "12px", color: "var(--muted-ink)" }}>
              {activeItem.degree}
            </span>
          </div>

          <h2 style={{ fontSize: "26px", fontWeight: 700, margin: "6px 0 2px", color: "var(--forest)" }}>
            {isSi ? activeItem.titleSi : activeItem.titleEn}
          </h2>
          <p style={{ fontSize: "15px", color: "#64748b", margin: "0 0 16px", fontWeight: 500 }}>
            {isSi ? activeItem.titleEn : activeItem.titleSi}
          </p>

          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "#334155", marginBottom: "22px" }}>
            {isSi ? activeItem.summarySi : `${activeItem.summaryEn} ${activeItem.summarySi}`}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {/* Core Specialisations */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <BookOpen size={16} /> {isSi ? "ප්‍රධාන අධ්‍යයන විෂයයන් සහ මොඩියුල" : "Key Study Areas & Modules"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#475569" }}>
                {activeItem.specialisations.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Top Employers */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Briefcase size={16} /> {isSi ? "ශ්‍රී ලංකාවේ ප්‍රමුඛ සේවා යෝජකයින්" : "Top Employers in Sri Lanka"}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#475569" }}>
                {activeItem.employers.map((emp) => (
                  <li key={emp}>{emp}</li>
                ))}
              </ul>
            </div>

            {/* Where to Study */}
            <div className="glass-panel" style={{ padding: "18px", borderRadius: "16px", background: "rgba(255,255,255,0.8)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--forest)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                <GraduationCap size={16} /> {isSi ? "මෙම ක්ෂේත්‍රය පවතින විශ්වවිද්‍යාල" : "Universities Offering This Field"}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {activeItem.universities.map((uni) => (
                  uni.slug ? (
                    <Link
                      key={uni.name}
                      href={`/universities/${uni.slug}`}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(22, 101, 52, 0.08)",
                        color: "var(--forest)",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {uni.name} <ArrowRight size={11} />
                    </Link>
                  ) : (
                    <span
                      key={uni.name}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(0, 0, 0, 0.05)",
                        color: "#475569",
                        fontWeight: 500,
                      }}
                    >
                      {uni.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px dashed rgba(171, 131, 39, 0.3)", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/build-your-path?career=engineer"
              className="glass-button gold-glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "14px",
                fontWeight: 700,
                fontSize: "13.5px",
              }}
            >
              <span>
                {isSi
                  ? `${activeItem.titleSi} ඉලක්ක කරගත් Roadmap එක හදන්න`
                  : `Build Your Engineering Roadmap (${activeItem.titleEn})`}
              </span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      {/* Roadmap: How to Become an Engineer in Sri Lanka */}
      <section className="section-block">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 32px" }}>
          <span className="eyebrow-pill">
            <Compass size={14} /> {isSi ? "වෘත්තීය ගමන් මග" : "Professional Journey"}
          </span>
          <h2 style={{ fontSize: "28px", fontWeight: 700, margin: "10px 0 8px", color: "var(--forest)" }}>
            {isSi ? "වරලත් ඉංජිනේරුවරයෙකු (CEng) වීමේ නිල පියවර" : "Pathway to Becoming a Chartered Engineer (CEng)"}
          </h2>
          <p className="muted" style={{ fontSize: "14.5px" }}>
            {isSi
              ? "ශ්‍රී ලංකා ඉංජිනේරු ආයතනය (IESL) සහ Washington Accord විසින් පිළිගත් නිල පියවරෙන් පියවර මාර්ගය."
              : "The official step-by-step pathway in Sri Lanka accredited by the Institution of Engineers, Sri Lanka (IESL) and the Washington Accord."}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>01</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              G.C.E. A/L Physical Science
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Combined Mathematics, Physics, and Chemistry or ICT. Pass all 3 subjects and obtain the required Z-score for state university admission or private degree entry.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>02</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              4-Year B.Sc. Engineering Degree
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Complete an IESL-recognized 4-year honours degree (Washington Accord accredited) including a 6-month industrial internship and a final-year research capstone.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>03</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              Associate Member (AMIE SL)
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Register as an Associate Member of the Institution of Engineers, Sri Lanka (AMIE SL) upon graduation, starting your documented professional logbook.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "22px", borderRadius: "18px" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: "#ab8327", marginBottom: "8px" }}>04</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--forest)", margin: "0 0 6px" }}>
              Chartered Engineer (CEng / IntPE)
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#475569", margin: 0 }}>
              Complete 3–4 years of mentored engineering practice, pass the IESL Professional Review Examination (PRE), and earn the globally recognized CEng credential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
