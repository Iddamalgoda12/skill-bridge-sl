// Sri Lanka Comprehensive Career Details Data Model
// Verified data sourced from UGC Handbooks, Professional Bodies (SLMC, IESL, IQSSL, SLIA, CA Sri Lanka, CAASL),
// and national employment compensation surveys.

export interface SalaryLevel {
  min: number;
  max: number;
  label: string;
}

export interface CareerSalary {
  entryLevel: SalaryLevel;
  midLevel: SalaryLevel;
  seniorLevel: SalaryLevel;
  govSector: string;
  privateSector: string;
  overseasOpportunities: string;
  factors: string[];
  source: string;
  lastUpdated: string;
}

export interface CareerEducation {
  olRequirements: string;
  alStream: string;
  zScoreRange: string;
  entranceExams: string;
  alternativePathways: string[];
  competitionNote: string;
}

export interface CareerUniversity {
  name: string;
  slug: string;
  type: string;
  degreeName: string;
  faculty: string;
  duration: string;
  accreditation?: string;
  websiteUrl?: string;
}

export interface CareerRoadmapStep {
  step: number;
  title: string;
  timeline: string;
  description: string;
  milestone?: string;
}

export interface SkillItem {
  name: string;
  type?: string;
  description: string;
}

export interface CareerSkills {
  technical: SkillItem[];
  soft: SkillItem[];
  importantSchoolSubjects: string[];
  recommendedProjects: string[];
}

export interface SelfAssessmentQuestion {
  question: string;
  trait: string;
}

export interface CareerSuitability {
  traits: string[];
  challenges: string[];
  selfAssessmentQuestions: SelfAssessmentQuestion[];
}

export interface CareerFutureOutlook {
  trendSummary: string;
  aiImpact: string;
  growingSpecializations: string[];
  globalDemand: string;
  challenges: string[];
}

export interface RelatedCareerItem {
  slug: string;
  title: string;
  category?: string;
}

export interface CareerRoleOverview {
  whatTheyDo: string;
  whyItMatters: string;
  dailyResponsibilities: string[];
  workEnvironment: string;
  lifestyleAndBalance: string;
  typicalEmployers: string[];
  sriLankanSuccessStory: string;
}

export interface CareerDetail {
  slug: string;
  title: string;
  sinhalaTitle: string;
  category: string;
  tagline: string;
  heroImage: string;
  roleOverview: CareerRoleOverview;
  salary: CareerSalary;
  education: CareerEducation;
  universities: CareerUniversity[];
  roadmap: CareerRoadmapStep[];
  skills: CareerSkills;
  suitability: CareerSuitability;
  futureOutlook: CareerFutureOutlook;
  relatedCareers: (RelatedCareerItem | string)[];
}

export const careerDetails: Record<string, CareerDetail> = {
  "doctor": {
    "slug": "doctor",
    "title": "Medical Doctor (MBBS)",
    "sinhalaTitle": "වෛද්‍යවරයා / ශල්‍ය වෛද්‍යවරයා",
    "category": "Healthcare",
    "tagline": "Save lives, diagnose illnesses, and advance clinical healthcare across Sri Lanka's hospitals and clinics.",
    "heroImage": "/images/careers/doctor.jpg",
    "roleOverview": {
      "whatTheyDo": "Medical doctors examine patients, diagnose complex illnesses, prescribe life-saving treatments, perform medical procedures, and lead healthcare teams in state tertiary hospitals, rural clinics, and private medical centres.",
      "whyItMatters": "Doctors form the core pillar of Sri Lanka's free universal healthcare system. From eradicating malaria and managing epidemics to performing advanced cardiac surgeries, doctors safeguard national well-being and life expectancy.",
      "dailyResponsibilities": [
        "Conduct patient ward rounds, clinical examinations, and emergency triage in state and private hospitals.",
        "Interpret diagnostic imaging (MRI, CT, X-rays), electrocardiograms (ECGs), and laboratory pathology reports.",
        "Formulate comprehensive treatment plans, prescribe medications, and perform clinical emergency procedures.",
        "Communicate with patients and families regarding diagnoses, surgical risks, and preventative health guidance.",
        "Participate in continuing medical education (CME), clinical audits, and medical research trials."
      ],
      "workEnvironment": "Fast-paced, demanding hospital wards, emergency departments, outpatient clinics (OPD), and surgical operating theatres. Involves rotational 24-hour on-call shifts, night duties, and weekend coverage.",
      "lifestyleAndBalance": "Intense commitment, especially during internship and postgraduate residency years. Substantial social respect, strong job security, and options for private practice after government hours.",
      "typicalEmployers": [
        "Ministry of Health (National Hospital Colombo, Teaching Hospitals)",
        "Provincial & Base Hospitals",
        "Private Hospital Groups (Asiri, Lanka Hospitals, Nawaloka, Durdans)",
        "WHO & International Medical NGOs"
      ],
      "sriLankanSuccessStory": "A student from a rural district in Kurunegala secures an A/L merit seat at the Faculty of Medicine, University of Colombo, completes their 1-year internship at Kandy National Hospital, and progresses through PGIM to become a Consultant Cardiologist operating private clinics and leading national health policy."
    },
    "salary": {
      "entryLevel": {
        "min": 115000,
        "max": 155000,
        "label": "LKR 115k – 155k / month"
      },
      "midLevel": {
        "min": 240000,
        "max": 420000,
        "label": "LKR 240k – 420k / month"
      },
      "seniorLevel": {
        "min": 550000,
        "max": 1500000,
        "label": "LKR 550k – 1.5M+ / month"
      },
      "govSector": "Govt Medical Officer (Grade II) begins at ~LKR 110,000–145,000 base + DAT (Disturbance, Availability, Transport) allowance and extra duty payments. Grade I and Specialist Medical Officers receive consolidated scales up to LKR 280,000+ basic + allowances.",
      "privateSector": "Private hospital consultation fees and private channelling practices allow experienced specialists to earn LKR 600,000 to over 2 Million monthly depending on patient volume and location.",
      "overseasOpportunities": "Sri Lankan MBBS graduates with AMC (Australia), GMC PLAB/UKMLA (United Kingdom), or USMLE (USA) qualifications command lucrative overseas hospital salaries ranging from £65,000–£120,000 in the UK or $150,000–$350,000 in Australia and the US.",
      "factors": [
        "Postgraduate specialization (MD through PGIM)",
        "Sub-specialty (Cardiology, Neurosurgery, Oncology)",
        "Private channelling practice location (Colombo vs outstation)",
        "Years of clinical experience"
      ],
      "source": "Ministry of Health Sri Lanka Gazettes, GMOA Salary Surveys & PGIM Handbook",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes with Credit (C) passes in Science, Mathematics, English Language, and First Language at G.C.E. O/L.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "Colombo: ~2.18+, Gampaha: ~2.15+, Kandy: ~2.10+, Galle: ~2.05+, Jaffna: ~1.98+, Monaragala: ~1.85+ (UGC District Quota System).",
      "entranceExams": "UGC national university selection strictly based on A/L Z-score. Foreign medical graduates must pass the ERPM (Examination for Registration to Practice Medicine) conducted by the SLMC.",
      "alternativePathways": [
        "Enroll in an SLMC-recognized foreign medical degree (e.g., Belarus, Russia, China, Malaysia) and pass the ERPM licensing examination upon return.",
        "Enroll in the MBBS programme at General Sir John Kotelawala Defence University (KDU) as a civilian day-scholar or officer cadet.",
        "Pursue Allied Health Sciences (B.Sc. Nursing, Physiotherapy, B.Sc. Medical Laboratory Science, B.Pharm) at state or non-state universities."
      ],
      "competitionNote": "Fiercely competitive: approximately 35,000 students sit the A/L Bio Science stream annually, with only the top ~2,200 securing state medical faculty placements."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
        "faculty": "Faculty of Medicine (Est. 1870)",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO, GMC (UK), AMC (Australia)",
        "websiteUrl": "https://med.cmb.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "MBBS",
        "faculty": "Faculty of Medicine",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO, GMC",
        "websiteUrl": "https://med.pdn.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "MBBS",
        "faculty": "Faculty of Medicine (Karapitiya)",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO",
        "websiteUrl": "https://med.ruh.ac.lk"
      },
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "MBBS",
        "faculty": "Faculty of Medical Sciences",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO",
        "websiteUrl": "https://medical.sjp.ac.lk"
      },
      {
        "name": "University of Kelaniya",
        "slug": "kelaniya",
        "type": "Government (UGC)",
        "degreeName": "MBBS",
        "faculty": "Faculty of Medicine (Ragama)",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO",
        "websiteUrl": "https://medicine.kln.ac.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Semi-Government / Defence",
        "degreeName": "MBBS (Cadets & Day-Scholars)",
        "faculty": "Faculty of Medicine & UHKDU Werahera",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC, WHO",
        "websiteUrl": "https://medicine.kdu.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "G.C.E. O/L Foundation",
        "timeline": "Age 15–16",
        "description": "Pass O/L with distinction grades in Science, Mathematics, and English Language.",
        "milestone": "Minimum 6 Credits incl. Math & Science"
      },
      {
        "step": 2,
        "title": "A/L Bio Science Mastery",
        "timeline": "Age 17–19",
        "description": "Study Biology, Chemistry, and Physics. Achieve a top district Z-score (typically > 2.05).",
        "milestone": "3 A/B Passes with high Z-score"
      },
      {
        "step": 3,
        "title": "Undergraduate MBBS Degree",
        "timeline": "5 Years",
        "description": "Undergo pre-clinical, para-clinical, and clinical hospital rotations at a recognized medical faculty.",
        "milestone": "Conferment of MBBS Degree"
      },
      {
        "step": 4,
        "title": "Mandatory Medical Internship",
        "timeline": "1 Year",
        "description": "Complete 12 months of rotational clinical training (Medicine, Surgery, Paediatrics, Gyn/Obs) in an accredited teaching hospital.",
        "milestone": "Full SLMC Registration (Doctor Title)"
      },
      {
        "step": 5,
        "title": "Medical Officer (MO) Service",
        "timeline": "Years 2–5",
        "description": "Serve in government base/provincial hospitals, gain broad procedural acumen, and sit PGIM selection exams.",
        "milestone": "Grade II / Grade I MO Promotion"
      },
      {
        "step": 6,
        "title": "Postgraduate Specialization (MD)",
        "timeline": "Years 5–10+",
        "description": "Enroll in the Postgraduate Institute of Medicine (PGIM), complete residency and foreign training fellowship to qualify as a Consultant.",
        "milestone": "Board-Certified Consultant Specialist"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Clinical Diagnosis & Pathology",
          "type": "technical",
          "description": "Evaluating complex symptoms, differential diagnosis, and laboratory biomarker evaluation."
        },
        {
          "name": "Emergency Resuscitation & Triage",
          "type": "technical",
          "description": "Performing advanced cardiac life support (ACLS), intubation, and acute trauma management."
        },
        {
          "name": "Pharmacology & Therapeutics",
          "type": "technical",
          "description": "Mastery of drug mechanisms, contraindications, dosage calculations, and antibiotic stewardship."
        },
        {
          "name": "Surgical & Minor Procedures",
          "type": "technical",
          "description": "Suturing, cannulation, lumbar punctures, catheterization, and sterile surgical assistance."
        }
      ],
      "soft": [
        {
          "name": "Deep Empathy & Bedside Manner",
          "type": "soft",
          "description": "Connecting compassionately with anxious patients and distressed family members."
        },
        {
          "name": "High-Pressure Decision Making",
          "type": "soft",
          "description": "Maintaining composure and clarity during emergency cardiac arrests and life-or-death situations."
        },
        {
          "name": "Clear Ethical Communication",
          "type": "soft",
          "description": "Delivering sensitive diagnoses, obtaining informed consent, and coordinating multi-doctor care teams."
        }
      ],
      "importantSchoolSubjects": [
        "Biology (Cell Biology, Genetics, Physiology)",
        "Chemistry (Organic & Biochemistry)",
        "Physics (Fluid dynamics, Radiation, Optics)",
        "English Language"
      ],
      "recommendedProjects": [
        "Volunteering at local hospital blood donation camps or Red Cross clinics",
        "Participating in Sri Lanka Biology Olympiad",
        "Shadowing family physicians or attending St. John Ambulance First Aid courses"
      ]
    },
    "suitability": {
      "traits": [
        "You possess a genuine desire to alleviate human suffering and heal the sick.",
        "You can remain calm, analytical, and functional after long, sleepless nights.",
        "You enjoy lifelong academic learning and staying updated on modern medical breakthroughs.",
        "You have strong hand-eye coordination and attention to clinical detail."
      ],
      "challenges": [
        "Gruelling 24-to-36-hour hospital on-call shifts during early training years.",
        "Emotional toll of patient loss, critical illnesses, and high-stakes clinical liability.",
        "Postings to remote district hospitals away from major urban hubs in early career stages."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can handle seeing blood, bodily fluids, and severe injuries without panicking or fainting.",
          "trait": "Clinical Resilience"
        },
        {
          "question": "I am willing to dedicate at least 6–8 years of intensive study before earning a full professional income.",
          "trait": "Long-Term Dedication"
        },
        {
          "question": "I can explain complex scientific ideas simply to anxious people from all walks of life.",
          "trait": "Empathetic Communication"
        },
        {
          "question": "I can remain calm and focused when someone's life depends on a fast, accurate decision.",
          "trait": "Crisis Composure"
        },
        {
          "question": "I enjoy solving biology and physiology mysteries like a scientific detective.",
          "trait": "Diagnostic Curiosity"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Demand for medical doctors in Sri Lanka remains chronically high due to an aging population, rising non-communicable diseases (diabetes, cardiovascular conditions, cancer), and continuous doctor migration overseas.",
      "aiImpact": "AI diagnostic imaging (radiology/pathology) and automated electronic medical records will augment clinical decisions, allowing doctors to focus more on patient interaction, complex ethical reasoning, and surgical precision.",
      "growingSpecializations": [
        "Geriatric Medicine (Elderly Care)",
        "Interventional Cardiology",
        "Medical Oncology & Genomics",
        "Emergency Medicine & Trauma Surgery",
        "Public Health Informatics"
      ],
      "globalDemand": "Unprecedented global demand in the UK National Health Service (NHS), Australia, New Zealand, Canada, and the Middle East, offering fast-track permanent residency visas for licensed doctors.",
      "challenges": [
        "Doctor retention in Sri Lanka amidst economic challenges",
        "Overcrowded state hospital wards and resource constraints",
        "Long training pipeline to achieve senior consultant status"
      ]
    },
    "relatedCareers": [
      {
        "slug": "dentist",
        "title": "Dental Surgeon",
        "category": "Healthcare"
      },
      {
        "slug": "veterinarian",
        "title": "Veterinary Surgeon",
        "category": "Healthcare"
      },
      {
        "slug": "ayurvedic-doctor",
        "title": "Ayurvedic Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      }
    ]
  },
  "engineer": {
    "slug": "engineer",
    "title": "Chartered Engineer",
    "sinhalaTitle": "වෘත්තීය ඉංජිනේරුවරයා (Civil / Mech / Elec)",
    "category": "Engineering",
    "tagline": "Design modern infrastructure, renewable energy grids, robotics, and industrial technology shaping Sri Lanka's future.",
    "heroImage": "/images/careers/engineer.jpg",
    "roleOverview": {
      "whatTheyDo": "Engineers apply mathematics, physics, and computational sciences to conceive, design, build, and optimize physical and digital systems — from towering high-rises, expressways, and sea ports to renewable solar grids, automated factories, and aerospace components.",
      "whyItMatters": "Engineers are the physical builders of civilizations. In Sri Lanka, engineers drive national mega-projects (Colombo Port City, Moragahakanda, highway networks), maintain energy security at the CEB, and power high-tech manufacturing exports (MAS, Brandix, Hayleys).",
      "dailyResponsibilities": [
        "Formulate structural, electrical, or mechanical engineering designs using CAD and finite element analysis (FEA) software.",
        "Inspect construction sites, manufacturing assembly lines, and electrical substations for quality and safety compliance.",
        "Calculate bills of quantities (BOQs), material specifications, project cost estimates, and procurement schedules.",
        "Collaborate with architects, quantity surveyors, project managers, and environmental authorities.",
        "Diagnose mechanical failures, power transmission grid faults, and implement industrial automation."
      ],
      "workEnvironment": "Split between modern design consultancies (air-conditioned engineering offices, computer workstations) and rugged field environments (construction sites, industrial factories, power stations, ports).",
      "lifestyleAndBalance": "Structured 45-hour work weeks in corporate and design consultancy roles, with periodic demanding project milestone sprints and on-site oversight during concrete pours or commissioning.",
      "typicalEmployers": [
        "Access Engineering · Maga Engineering · ICC",
        "Ceylon Electricity Board (CEB) · Sri Lanka Telecom (SLT)",
        "Central Engineering Consultancy Bureau (CECB) · RDA",
        "MAS Holdings · Brandix · Unilever Sri Lanka",
        "Global Engineering Consultancies (Arup, WSP, Jacobs)"
      ],
      "sriLankanSuccessStory": "An A/L physical science graduate from Galle enters University of Moratuwa Civil Engineering, leads a bridge construction project at Access Engineering, gains IESL Charter (CEng), and progresses to Regional Project Director overseeing international infrastructure tenders across South Asia."
    },
    "salary": {
      "entryLevel": {
        "min": 90000,
        "max": 165000,
        "label": "LKR 90k – 165k / month"
      },
      "midLevel": {
        "min": 220000,
        "max": 450000,
        "label": "LKR 220k – 450k / month"
      },
      "seniorLevel": {
        "min": 500000,
        "max": 1600000,
        "label": "LKR 500k – 1.6M+ / month"
      },
      "govSector": "Public sector engineering officers at CEB, CECB, RDA, and Irrigation Department start at executive salary scales of LKR 85,000–120,000 + allowances, reaching LKR 250,000+ for Chief Engineers.",
      "privateSector": "Top private construction giants, manufacturing conglomerates (MAS, Brandix), and multinational consultancies pay LKR 120,000–180,000 for fresh graduates and over LKR 600,000–1,200,000 for Chartered Chief Engineers and Project Managers.",
      "overseasOpportunities": "IESL Washington Accord accredited engineers have immediate mutual recognition in Australia, UK, Canada, and the Gulf (Dubai, Qatar, Saudi Arabia), earning USD $3,500 to $10,000/month (LKR 1M–3M/mo tax-free).",
      "factors": [
        "Chartered Engineer (CEng) status from IESL",
        "Washington Accord degree accreditation",
        "Mega-project management experience (FIDIC contracts)",
        "Sub-specialty (structural, MEP, mechatronics)"
      ],
      "source": "Institution of Engineers Sri Lanka (IESL), Construction Industry Development Authority (CIDA) & Top Employer Surveys",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit (C) passes in Mathematics, Science, and English.",
      "alStream": "Physical Science Stream (Combined Mathematics, Physics, Chemistry or Information Technology)",
      "zScoreRange": "Moratuwa: ~2.10+, Peradeniya: ~1.95+, Ruhuna: ~1.85+, Jaffna: ~1.75+, South Eastern: ~1.65+, Sri Jayewardenepura: ~1.80+.",
      "entranceExams": "UGC merit and district allocation for state universities. Private and defence routes require institutional aptitude interviews.",
      "alternativePathways": [
        "IESL College of Engineering (Graduate Diploma / Associate Membership leading to Charter).",
        "Non-state engineering programmes accredited by IESL (SLIIT, SLTC, KDU, CINEC).",
        "NVQ Level 5 & 6 Higher National Diplomas (HND at SLIATE, NDT at Moratuwa, NDES at Katunayake, German Tech) leading to B.Tech at UNIVOTEC."
      ],
      "competitionNote": "State engineering admission is highly competitive; approximately 35,000 students sit A/L Physical Science, with ~2,800 state faculty seats available islandwide."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Engineering (Hons)",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk/eng"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Engineering (Hons)",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://eng.pdn.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Engineering (Hons)",
        "faculty": "Faculty of Engineering (Hapugala)",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://eng.ruh.ac.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Semi-Government / Defence",
        "degreeName": "B.Sc. (Hons) in Engineering",
        "faculty": "Faculty of Engineering (Ratmalana)",
        "duration": "4 Years",
        "accreditation": "IESL Recognized",
        "websiteUrl": "https://engineering.kdu.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in Civil / EEE / Mechanical",
        "faculty": "Faculty of Engineering (Malabe)",
        "duration": "4 Years",
        "accreditation": "IESL Recognized",
        "websiteUrl": "https://engineering.sliit.lk"
      },
      {
        "name": "SLTC Research University",
        "slug": "sltc",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in Engineering",
        "faculty": "School of Engineering (Padukka)",
        "duration": "4 Years",
        "accreditation": "Washington Accord Aligned",
        "websiteUrl": "https://sltc.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "G.C.E. O/L STEM Strengths",
        "timeline": "Age 15–16",
        "description": "Attain 'A' grades in Mathematics and Science, building a solid analytical foundation.",
        "milestone": "O/L Distinction in Math & Science"
      },
      {
        "step": 2,
        "title": "A/L Physical Science Stream",
        "timeline": "Age 17–19",
        "description": "Excel in Combined Maths, Physics, and Chemistry/ICT to achieve a competitive engineering Z-score.",
        "milestone": "Z-score qualifying for accredited B.Sc. Eng"
      },
      {
        "step": 3,
        "title": "Undergraduate B.Sc. Engineering",
        "timeline": "4 Years",
        "description": "Complete rigorous engineering coursework, laboratory practicums, and 6-month industrial internship.",
        "milestone": "B.Sc. Eng (Hons) Degree Award"
      },
      {
        "step": 4,
        "title": "Associate Membership & Junior Practice",
        "timeline": "Years 1–3",
        "description": "Register as an Associate Member of IESL (AMIE-SL) and work as a site, design, or project engineer.",
        "milestone": "Completion of 3 Years Monitored Training"
      },
      {
        "step": 5,
        "title": "IESL Professional Review Examination",
        "timeline": "Year 4–5",
        "description": "Submit engineering design reports, professional logbooks, and pass the IESL technical interview.",
        "milestone": "Chartered Engineer (CEng) & MIE-SL Status"
      },
      {
        "step": 6,
        "title": "Senior Engineering Leadership",
        "timeline": "Years 6–15+",
        "description": "Direct major capital infrastructure, oversee corporate operations, or lead international engineering consultancies.",
        "milestone": "Chief Engineer / Project Director / Partner"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Mathematical Modeling & Physics",
          "type": "technical",
          "description": "Applying calculus, differential equations, and mechanics to structural and physical systems."
        },
        {
          "name": "Computer-Aided Design (CAD & BIM)",
          "type": "technical",
          "description": "Mastery of AutoCAD, Revit, SolidWorks, MATLAB, and structural analysis tools (ETABS, SAP2000)."
        },
        {
          "name": "Project Engineering & Estimation",
          "type": "technical",
          "description": "Bill of Quantities (BOQ), tender bidding, project scheduling (Primavera P6), and quality assurance."
        },
        {
          "name": "Systems Safety & Regulations",
          "type": "technical",
          "description": "Ensuring strict adherence to British/Euro Standards, CIDA regulations, and occupational safety (OSHA)."
        }
      ],
      "soft": [
        {
          "name": "Complex Problem Deconstruction",
          "type": "soft",
          "description": "Breaking massive physical challenges down into solvable, measurable engineering components."
        },
        {
          "name": "Cross-Disciplinary Teamwork",
          "type": "soft",
          "description": "Leading diverse teams of technicians, contractors, quantity surveyors, and architects on site."
        },
        {
          "name": "Project Cost & Time Discipline",
          "type": "soft",
          "description": "Keeping multi-million-rupee civil and mechanical undertakings strictly on budget and on schedule."
        }
      ],
      "importantSchoolSubjects": [
        "Combined Mathematics (Calculus, Trigonometry, Statics, Dynamics)",
        "Physics (Mechanics, Electricity, Thermodynamics)",
        "Chemistry / ICT",
        "Technical Drawing"
      ],
      "recommendedProjects": [
        "Building robotics kits or Arduino sensor circuits",
        "Entering national school inventions competitions (SLIC Sahasak Nimavum)",
        "Participating in Sri Lanka Physics Olympiad"
      ]
    },
    "suitability": {
      "traits": [
        "You are naturally curious about how bridges stand, engines run, or electronic circuits process signals.",
        "You enjoy working with precise numbers, mathematics, and technical drawings.",
        "You like splitting your time between intellectual office design and real-world practical site work.",
        "You have strong spatial awareness and can visualize 3D systems in your head."
      ],
      "challenges": [
        "High legal and financial liability for design errors or structural safety failures.",
        "Exposure to outdoor weather, dust, and noisy construction environments during site phases.",
        "Steep mathematical workload during university degree years."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I enjoy solving difficult maths and physics problems that require step-by-step logic.",
          "trait": "Mathematical Mindset"
        },
        {
          "question": "I like taking physical machines, electronics, or objects apart to understand how they work.",
          "trait": "Mechanical Curiosity"
        },
        {
          "question": "I would feel proud looking at a real bridge, skyscraper, or factory and knowing I helped build it.",
          "trait": "Tangible Impact"
        },
        {
          "question": "I am comfortable working outdoors on construction sites and dealing with practical builders.",
          "trait": "Site Adaptability"
        },
        {
          "question": "I double-check measurements and calculations because I hate sloppy errors.",
          "trait": "Precision Discipline"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The engineering sector is pivoting rapidly toward renewable energy transitions (solar/wind/green hydrogen), smart automated factories, climate-resilient civil infrastructure, and electric mobility.",
      "aiImpact": "Generative CAD, automated structural topology optimization, and AI predictive maintenance will accelerate routine engineering calculations, empowering engineers to focus on higher-level architecture and safety.",
      "growingSpecializations": [
        "Renewable Energy & Smart Grid Engineering",
        "Robotics & Industrial Automation (Mechatronics)",
        "Environmental & Coastal Resilient Engineering",
        "Biomedical Equipment Engineering",
        "Data Centre & Mission-Critical Facilities Engineering"
      ],
      "globalDemand": "Massive global engineering shortage across Australia (Engineers Australia fast-track PR), Canada, Germany, and the Gulf Cooperation Council (GCC) for Washington Accord graduates.",
      "challenges": [
        "Fluctuations in local construction sector investment cycles",
        "Rising material costs requiring creative value-engineering",
        "Mandate to integrate carbon-neutral and eco-friendly green materials"
      ]
    },
    "relatedCareers": [
      {
        "slug": "software-engineer",
        "title": "Software Engineer",
        "category": "Technology"
      },
      {
        "slug": "quantity-surveyor",
        "title": "Quantity Surveyor",
        "category": "Construction"
      },
      {
        "slug": "architect",
        "title": "Architect",
        "category": "Creative"
      },
      {
        "slug": "marine-officer",
        "title": "Marine Officer",
        "category": "Maritime"
      },
      {
        "slug": "air-traffic-controller",
        "title": "Air Traffic Controller",
        "category": "Aviation"
      }
    ]
  },
  "software-engineer": {
    "slug": "software-engineer",
    "title": "Software Engineer & Tech Lead",
    "sinhalaTitle": "මෘදුකාංග ඉංජිනේරුවරයා",
    "category": "Technology",
    "tagline": "Architect high-scale cloud platforms, enterprise mobile apps, and cutting-edge AI systems powering global software giants.",
    "heroImage": "/images/careers/software-engineer.jpg",
    "roleOverview": {
      "whatTheyDo": "Software engineers conceive, architect, code, test, and deploy software applications, distributed cloud services, mobile platforms, and AI systems that solve complex problems for millions of users worldwide.",
      "whyItMatters": "Sri Lanka's IT export industry is a top foreign exchange earner, valued at over $1.5 Billion. From enterprise middleware (WSO2) and stock exchange engines (LSEG) to Silicon Valley tech startups, Sri Lankan engineers build software used by Fortune 500 corporations globally.",
      "dailyResponsibilities": [
        "Write clean, modular, and maintainable code in modern languages (TypeScript, Java, Go, Python, C++, Rust).",
        "Design scalable distributed cloud architectures on AWS, GCP, or Azure using microservices and containers.",
        "Conduct rigorous peer code reviews, optimize algorithmic performance, and maintain automated CI/CD pipelines.",
        "Collaborate closely with UI/UX designers, product managers, and QA engineers in agile daily standups.",
        "Investigate production bugs, monitor distributed telemetry, and implement cybersecurity protocols."
      ],
      "workEnvironment": "Flexible modern tech offices, collaborative innovation campuses (TRACE Expert City, Orion City), with widespread options for full remote work and hybrid international setups.",
      "lifestyleAndBalance": "High flexibility with remote working, ergonomic perks, casual office culture, and global freelance mobility. Demanding sprint deadlines and periodic production release cycles.",
      "typicalEmployers": [
        "WSO2 · Virtusa · IFS Sri Lanka · Sysco LABS",
        "London Stock Exchange Group (LSEG) · MillenniumIT ESP",
        "Axiata Digital Labs · 99x · Calcey · Zone24x7",
        "Global Tech Startups (US / UK / Europe / Australia Remote)",
        "Direct Freelance & SaaS Entrepreneurship"
      ],
      "sriLankanSuccessStory": "An A/L student from Matara studies Computer Science at UCSC, joins WSO2 as an associate engineer, contributes to open-source cloud architectures, and advances within 6 years to Principal Architect commanding global USD remote consulting contracts."
    },
    "salary": {
      "entryLevel": {
        "min": 100000,
        "max": 200000,
        "label": "LKR 100k – 200k / month"
      },
      "midLevel": {
        "min": 280000,
        "max": 650000,
        "label": "LKR 280k – 650k / month"
      },
      "seniorLevel": {
        "min": 700000,
        "max": 2500000,
        "label": "LKR 700k – 2.5M+ / month"
      },
      "govSector": "State IT and digital transformation roles (ICTA, government bank IT divisions) start at LKR 90,000–140,000, scaling to LKR 300,000+ for senior systems architects.",
      "privateSector": "Premier Colombo tech firms pay competitive market salaries pegged to USD or inflation-adjusted, with fresh graduates starting at LKR 120,000–220,000, Senior Engineers earning LKR 500,000–900,000, and Tech Leads / Architects reaching LKR 1.2M–2.5M+.",
      "overseasOpportunities": "Vast global remote employment options: Sri Lankan developers working remotely for US, European, or Australian firms earn USD $2,000 to $8,000/month (LKR 600,000–2.4M/mo) while living in Sri Lanka.",
      "factors": [
        "System architecture and cloud mastery",
        "Open-source contributions and portfolio",
        "Algorithmic problem-solving (LeetCode / Codeforces)",
        "Experience with AI/ML, distributed systems, or high-throughput financial backends"
      ],
      "source": "SLASSCOM National IT-BPM Salary Survey 2026 & Sri Lanka Tech Salaries Benchmark",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit (C) passes in Mathematics and English Language.",
      "alStream": "Physical Science, Technology, or ANY A/L Stream (Computing accepts all streams across non-state universities and open admissions).",
      "zScoreRange": "Moratuwa CSE: ~2.15+, UCSC Computer Science: ~1.85+, Kelaniya Software Engineering: ~1.80+, Moratuwa IT: ~1.75+.",
      "entranceExams": "UGC merit selection for state universities; SLIIT / IIT / NSBM / Horizon aptitude tests for direct non-state entry.",
      "alternativePathways": [
        "Enrol in internal British honours degrees at IIT (University of Westminster) or SLIIT (Curtin University / internal).",
        "Pursue Bachelor of Information Technology (BIT) external degree from UCSC or University of Moratuwa BIT.",
        "Complete self-taught software portfolios, coding bootcamps, and open-source contributions directly entering the tech workforce."
      ],
      "competitionNote": "State university Computer Science is highly competitive, but the non-state and external degree ecosystem offers wide, merit-based entry for all hardworking students."
    },
    "universities": [
      {
        "name": "University of Colombo (UCSC)",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Computer Science / Software Engineering",
        "faculty": "UCSC (School of Computing)",
        "duration": "4 Years",
        "accreditation": "CSSL / BCS / UGC",
        "websiteUrl": "https://ucsc.cmb.ac.lk"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Eng (Hons) in Computer Science & Engineering",
        "faculty": "Faculty of Engineering / Faculty of IT",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord / CSSL",
        "websiteUrl": "https://cse.mrt.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in IT (Software Engineering)",
        "faculty": "Faculty of Computing (Malabe)",
        "duration": "4 Years",
        "accreditation": "BCS (UK) / CSSL / UGC",
        "websiteUrl": "https://computing.sliit.lk"
      },
      {
        "name": "Informatics Institute of Technology (IIT)",
        "slug": "iit",
        "type": "Non-State / Private",
        "degreeName": "B.Eng. (Hons) in Software Engineering",
        "faculty": "School of Computing (Univ of Westminster)",
        "duration": "4 Years (incl. 1 Yr Internship)",
        "accreditation": "BCS / Engineering Council UK",
        "websiteUrl": "https://www.iit.ac.lk"
      },
      {
        "name": "NSBM Green University",
        "slug": "nsbm",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in Software Engineering",
        "faculty": "Faculty of Computing (Pitipana)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized / Plymouth",
        "websiteUrl": "https://www.nsbm.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Logic & Mathematics",
        "timeline": "Age 15–16",
        "description": "Master analytical problem solving, English fluency, and write your first programs in Python or JavaScript.",
        "milestone": "O/L Credit in Math & English"
      },
      {
        "step": 2,
        "title": "A/L & Computer Science Fundamentals",
        "timeline": "Age 17–19",
        "description": "Study A/L (Maths, Science, or Tech stream). Practice data structures and algorithms on HackerRank.",
        "milestone": "A/L completion & Personal GitHub Portfolio"
      },
      {
        "step": 3,
        "title": "Undergraduate Computing Degree",
        "timeline": "3–4 Years",
        "description": "Pursue an accredited B.Sc. in Software Engineering or Computer Science. Build full-stack web and mobile apps.",
        "milestone": "Degree Conferment & Academic Projects"
      },
      {
        "step": 4,
        "title": "Software Engineering Internship",
        "timeline": "6–12 Months",
        "description": "Work inside a leading tech firm (WSO2, IFS, Virtusa, LSEG), deploying code to production systems.",
        "milestone": "Successful Paid Industry Internship"
      },
      {
        "step": 5,
        "title": "Associate & Senior Software Engineer",
        "timeline": "Years 1–5",
        "description": "Master distributed cloud systems, lead feature releases, mentor junior developers, and drive technical design.",
        "milestone": "Promotion to Senior Software Engineer"
      },
      {
        "step": 6,
        "title": "Tech Lead / Principal Architect / CTO",
        "timeline": "Years 6–12+",
        "description": "Architect enterprise software used by millions, lead engineering teams, or launch your own global tech startup.",
        "milestone": "Software Architect / Director of Engineering"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Object-Oriented & Functional Programming",
          "type": "technical",
          "description": "Deep expertise in languages like TypeScript, Java, Python, Go, and C#."
        },
        {
          "name": "Data Structures & Algorithmic Complexity",
          "type": "technical",
          "description": "Mastery of trees, graphs, dynamic programming, and Big-O space/time optimization."
        },
        {
          "name": "Cloud Architecture & DevOps",
          "type": "technical",
          "description": "Deploying scalable systems using Docker, Kubernetes, AWS, Terraform, and CI/CD pipelines."
        },
        {
          "name": "Database & Distributed Systems",
          "type": "technical",
          "description": "Designing relational SQL databases (PostgreSQL) and NoSQL stores (Redis, MongoDB, Kafka)."
        }
      ],
      "soft": [
        {
          "name": "Continuous Self-Learning",
          "type": "soft",
          "description": "Rapidly learning new frameworks, libraries, and language paradigms as tech changes."
        },
        {
          "name": "Clear Technical Communication",
          "type": "soft",
          "description": "Explaining complex architectural decisions to non-technical business clients and product owners."
        },
        {
          "name": "Tenacious Debugging Mindset",
          "type": "soft",
          "description": "Patiently hunting down elusive race conditions and memory leaks without getting frustrated."
        }
      ],
      "importantSchoolSubjects": [
        "Information & Communication Technology (ICT)",
        "Combined Mathematics",
        "Physics",
        "English Language"
      ],
      "recommendedProjects": [
        "Build and deploy a full-stack web app on Vercel or Render",
        "Contribute to open-source software on GitHub",
        "Participate in national hackathons (IEEEXtreme, MoraXtreme, HackaDev)"
      ]
    },
    "suitability": {
      "traits": [
        "You love building things on a computer and seeing code instantly spring to life on screen.",
        "You get absorbed in solving logical puzzles and figuring out why something isn't working.",
        "You are excited by the freedom of remote work and continuous learning.",
        "You enjoy learning independently through online docs, YouTube tutorials, and documentation."
      ],
      "challenges": [
        "Long hours sitting in front of multi-monitor workstations.",
        "Tech stacks evolve rapidly; what you learn today may be replaced in 4 years.",
        "High mental fatigue during deep debugging and critical production bug incidents."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can spend hours focused on my laptop trying to fix a stubborn bug without giving up.",
          "trait": "Persistent Problem-Solving"
        },
        {
          "question": "I am excited to build useful digital tools, mobile apps, or games that people use.",
          "trait": "Creator Drive"
        },
        {
          "question": "I don't need a teacher to tell me everything; I enjoy Googling and teaching myself new tech.",
          "trait": "Autonomous Learner"
        },
        {
          "question": "I understand that learning in IT never stops, and I look forward to that challenge.",
          "trait": "Adaptable Mindset"
        },
        {
          "question": "I value the flexibility of working from home and collaborating with international teams.",
          "trait": "Global Workplace Fit"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Software development continues to expand across every human sector — finance, healthcare, autonomous vehicles, retail, and education. Engineers who master AI-assisted development and distributed cloud will be in massive demand.",
      "aiImpact": "AI tools (GitHub Copilot, LLMs) write boilerplate code rapidly. The software engineer's role is shifting toward high-level system architecture, cybersecurity, domain modeling, and AI orchestration.",
      "growingSpecializations": [
        "AI Systems & LLM Engineering",
        "Cloud Security & DevSecOps",
        "Full-Stack Microservices & Distributed Computing",
        "Embedded IoT & Robotics Firmware",
        "Data Platform Engineering"
      ],
      "globalDemand": "Highest global remote demand of any profession; Sri Lankan engineers can work for Silicon Valley, London, or Singapore without leaving home.",
      "challenges": [
        "Junior developer competition for entry-level roles",
        "Need to demonstrate strong portfolio beyond just a university degree",
        "Burnout from non-stop sprint deadlines if boundaries aren't set"
      ]
    },
    "relatedCareers": [
      {
        "slug": "engineer",
        "title": "Chartered Engineer",
        "category": "Engineering"
      },
      {
        "slug": "digital-marketer",
        "title": "Digital Marketer",
        "category": "Creative"
      },
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      },
      {
        "slug": "graphic-designer",
        "title": "UI/UX Designer",
        "category": "Creative"
      },
      {
        "slug": "air-traffic-controller",
        "title": "Air Traffic Controller",
        "category": "Skilled Trades"
      }
    ]
  },
  "ayurvedic-doctor": {
    "slug": "ayurvedic-doctor",
    "title": "Ayurvedic Medical Doctor (BAMS)",
    "sinhalaTitle": "ආයුර්වේද වෛද්‍යවරයා",
    "category": "Healthcare",
    "tagline": "Heal patients through classical Ayurveda, Hela Veda indigenous pharmacology, and luxury wellness tourism.",
    "heroImage": "/images/careers/ayurvedic-doctor.jpg",
    "roleOverview": {
      "whatTheyDo": "Ayurvedic doctors practice holistic healthcare by diagnosing imbalances in the body's doshas (Vata, Pitta, Kapha), prescribing herbal pharmacological formulas, and administering classical Panchakarma cleansing therapies, acupuncture, and natural wellness protocols.",
      "whyItMatters": "Sri Lanka possesses an unbroken 3,000-year-old Hela Veda tradition. Ayurvedic doctors preserve our natural pharmacological biodiversity, treat chronic illnesses (arthritis, skin conditions, metabolic disorders), and anchor Sri Lanka's booming global health wellness tourism industry.",
      "dailyResponsibilities": [
        "Diagnose physical and systemic ailments through classical Nadi Pariksha (pulse examination) and clinical investigation.",
        "Formulate and prescribe traditional herbal decoctions (Kashaya), oils, and botanical medicines.",
        "Administer Panchakarma therapies: Vamana, Virechana, Nasya, Basti, and Shirodhara treatments.",
        "Advise patients on lifestyle adjustments, therapeutic diets (Ahara), and yogic mindfulness.",
        "Direct research on herbal pharmacology, botanical conservation, and clinical trials."
      ],
      "workEnvironment": "Government Ayurvedic Teaching Hospitals, provincial dispensaries, private Ayurvedic clinics, pharmaceutical manufacturing laboratories, and high-end eco-wellness resorts.",
      "lifestyleAndBalance": "Balanced working hours in dispensaries and wellness clinics. Relaxed, peaceful clinical environment compared to western emergency wards, with high patient gratitude.",
      "typicalEmployers": [
        "Department of Ayurveda (Teaching Hospital Borella, Yakkala)",
        "Provincial Ayurvedic Hospitals & Rural Dispensaries",
        "Ayurvedic Pharmaceuticals (Siddhalepa, Link Natural, Hela Veda)",
        "Luxury Wellness Resorts (Santani, Barberyn, Heritance Maha Gedara)"
      ],
      "sriLankanSuccessStory": "A graduate from GWUIM Gampaha joins a government Ayurvedic hospital, establishes a private clinical sanctuary treating chronic joint diseases, and consults for international luxury wellness resorts catering to European wellness travellers."
    },
    "salary": {
      "entryLevel": {
        "min": 85000,
        "max": 130000,
        "label": "LKR 85k – 130k / month"
      },
      "midLevel": {
        "min": 170000,
        "max": 320000,
        "label": "LKR 170k – 320k / month"
      },
      "seniorLevel": {
        "min": 380000,
        "max": 1100000,
        "label": "LKR 380k – 1.1M+ / month"
      },
      "govSector": "Government Ayurvedic Medical Officers start at ~LKR 85,000–120,000 including allowances, scaling to LKR 220,000+ for Medical Superintendents and Senior Specialists.",
      "privateSector": "Private clinical consultation, retail Ayurvedic medicines, and foreign tourist wellness packages yield LKR 300,000 to over 1 Million monthly for reputed physicians.",
      "overseasOpportunities": "Rising international demand in Germany, Switzerland, Japan, and the UK for licensed Ayurvedic physicians, acupuncture practitioners, and wellness spa directors.",
      "factors": [
        "Clinical reputation and patient word-of-mouth",
        "Specialization in Panchakarma, fracture care (Kedum-Bidum), or acupuncture",
        "Affiliation with luxury tourist wellness centres"
      ],
      "source": "Department of Ayurveda Sri Lanka & Ayurvedic Medical Council Records",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit (C) passes in Science, Mathematics, First Language, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics or Agricultural Science)",
      "zScoreRange": "Colombo BAMS: ~1.45 - 1.65+, Gampaha BAMS: ~1.40 - 1.60+ (UGC Merit & District Quotas).",
      "entranceExams": "UGC national admission based on A/L Bio Science Z-score.",
      "alternativePathways": [
        "Enroll in external Ayurvedic medical diplomas recognized by the Ayurvedic Medical Council.",
        "Pursue Bachelor of Science in Herbal Pharmacy or Health Tourism at GWUIM.",
        "Traditional apprenticeship under registered hereditary ancestral physicians (Veda Mahaththaya) leading to Council registration."
      ],
      "competitionNote": "Moderately competitive; offers an excellent direct clinical medical career path for Bio Science students just below the MBBS cutoff."
    },
    "universities": [
      {
        "name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "slug": "wickramarachchi",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
        "faculty": "Faculty of Indigenous Medicine (Yakkala)",
        "duration": "6 Years (incl. Internship)",
        "accreditation": "Ayurvedic Medical Council Sri Lanka",
        "websiteUrl": "https://gwu.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "BAMS / BUMS (Unani Medicine)",
        "faculty": "Institute of Indigenous Medicine (Rajagiriya)",
        "duration": "6 Years (incl. Internship)",
        "accreditation": "Ayurvedic Medical Council",
        "websiteUrl": "https://iim.cmb.ac.lk"
      },
      {
        "name": "Eastern University, Sri Lanka",
        "slug": "eastern",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Siddha Medicine & Surgery (BSMS)",
        "faculty": "Trincomalee Campus / Siddha Medicine",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "Ayurvedic Medical Council",
        "websiteUrl": "https://esn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Languages",
        "timeline": "Age 15–16",
        "description": "Pass O/L with credits in Science, Sinhala/Tamil, and English.",
        "milestone": "O/L Pass with Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Bio Science Stream",
        "timeline": "Age 17–19",
        "description": "Achieve 3 passes in Biology, Chemistry, and Physics/Agri with a qualifying Z-score.",
        "milestone": "Z-score qualifying for BAMS"
      },
      {
        "step": 3,
        "title": "Undergraduate BAMS Degree",
        "timeline": "5 Years",
        "description": "Study classical Sanskrit texts, Dravyaguna (pharmacognosy), anatomy, pathology, and Panchakarma.",
        "milestone": "BAMS Academic Completion"
      },
      {
        "step": 4,
        "title": "Clinical Internship",
        "timeline": "1 Year",
        "description": "Complete mandatory rotational clinical training in government Ayurvedic Teaching Hospitals.",
        "milestone": "Ayurvedic Medical Council Registration"
      },
      {
        "step": 5,
        "title": "Clinical Practice & Dispensing",
        "timeline": "Years 1–5",
        "description": "Serve in government dispensaries or establish private clinics formulating personalized herbal remedies.",
        "milestone": "Established Clinical Physician"
      },
      {
        "step": 6,
        "title": "Senior Consultant / Wellness Director",
        "timeline": "Years 6–15+",
        "description": "Lead hospital departments, direct luxury wellness retreats, or export natural botanical remedies globally.",
        "milestone": "Chief Ayurvedic Physician / Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Nadi Pariksha & Pulse Diagnosis",
          "type": "technical",
          "description": "Detecting deep constitutional doshic imbalances through tactile radial pulse reading."
        },
        {
          "name": "Herbal Pharmacognosy & Formulation",
          "type": "technical",
          "description": "Identifying botanical herbs, preparing Arishta, Asava, Taila, and medicinal pastes."
        },
        {
          "name": "Panchakarma Protocol Design",
          "type": "technical",
          "description": "Executing therapeutic detox procedures safely adapted to individual patient vitality."
        }
      ],
      "soft": [
        {
          "name": "Holistic Patient Listening",
          "type": "soft",
          "description": "Understanding patient emotional stress, daily dietary habits, and mental triggers."
        },
        {
          "name": "Traditional Ethical Dedication",
          "type": "soft",
          "description": "Upholding the noble compassionate oaths of classical Ayurvedic medical ethics."
        }
      ],
      "importantSchoolSubjects": [
        "Biology",
        "Chemistry",
        "Sinhala / Tamil Literature",
        "Sanskrit (optional advantageous)"
      ],
      "recommendedProjects": [
        "Herbal garden cultivation and native medicinal plant identification",
        "Volunteering with Ayurvedic health camps",
        "Studying traditional Hela Veda home remedies"
      ]
    },
    "suitability": {
      "traits": [
        "You are passionate about natural healing, herbs, and ancient Sri Lankan cultural heritage.",
        "You believe true healing treats the whole human being — mind, body, and spirit.",
        "You enjoy working directly with patients in a calm, non-rushed clinical setting."
      ],
      "challenges": [
        "Memorizing extensive classical Sanskrit slokas and botanical nomenclature.",
        "Overcoming public bias favouring fast-acting western pharmaceuticals for acute illnesses."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am fascinated by how native plants and herbs can heal physical illnesses naturally.",
          "trait": "Natural Medicine Passion"
        },
        {
          "question": "I enjoy listening patiently to patients talk about their lifestyle and emotional health.",
          "trait": "Holistic Empathy"
        },
        {
          "question": "I appreciate ancient traditions and want to preserve Sri Lanka's heritage.",
          "trait": "Cultural Stewardship"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Global wellness tourism is growing at over 12% annually. Sri Lanka is positioned as a world-leading destination for authentic Ayurvedic rejuvenation, attracting affluent international travellers.",
      "aiImpact": "AI is assisting in herbal chemical compound screening, standardizing natural active ingredient extraction, and validating ancient remedies with scientific clinical proof.",
      "growingSpecializations": [
        "Eco-Wellness Resort Direction",
        "Ayurvedic Cosmeceuticals & Skin Therapy",
        "Acupuncture & Chronic Pain Management",
        "Herbal Pharmaceutical Manufacturing"
      ],
      "globalDemand": "Growing demand for qualified Ayurvedic doctors in Europe, Japan, Australia, and North America in holistic integrative medicine clinics.",
      "challenges": [
        "Depletion of rare wild medicinal herbs requiring sustainable cultivated farming",
        "Maintaining strict quality control against counterfeit herbal products"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      },
      {
        "slug": "physiotherapist",
        "title": "Physiotherapist",
        "category": "Healthcare"
      },
      {
        "slug": "ecotourism-naturalist",
        "title": "Eco-Tourism Naturalist",
        "category": "Hospitality"
      }
    ]
  },
  "dentist": {
    "slug": "dentist",
    "title": "Dental Surgeon (BDS)",
    "sinhalaTitle": "දන්ත වෛද්‍යවරයා / දන්ත ශල්‍ය වෛද්‍යවරයා",
    "category": "Healthcare",
    "tagline": "Restore healthy smiles, perform oral maxillofacial surgeries, and lead clinical dental healthcare.",
    "heroImage": "/images/careers/dentist.jpg",
    "roleOverview": {
      "whatTheyDo": "Dental surgeons diagnose, prevent, and treat oral cavity diseases, teeth and gum infections, perform complex oral maxillofacial surgeries, extract teeth, place implants, and correct malaligned jaws and teeth (orthodontics).",
      "whyItMatters": "Oral health is critically tied to cardiovascular health and quality of life. Dental surgeons relieve acute toothache, restore masticatory function, treat oral cancer (a leading cancer in Sri Lanka), and give people self-confidence through beautiful smiles.",
      "dailyResponsibilities": [
        "Perform dental restorations (fillings), root canal treatments (RCT), crown and bridge prosthetics.",
        "Administer local anaesthesia, perform surgical tooth extractions and wisdom teeth impaction surgery.",
        "Screen patients for precancerous oral lesions, leukoplakia, and oral squamous cell carcinomas.",
        "Take and interpret intraoral digital radiographs (X-rays) and 3D Cone Beam CT scans.",
        "Fit and adjust orthodontic braces, clear aligners, and dental prostheses."
      ],
      "workEnvironment": "Sterile, modern dental operatories equipped with ergonomic dental chairs, ultrasonic scalers, digital sensors, and high-speed rotary handpieces.",
      "lifestyleAndBalance": "Excellent work-life balance compared to general medicine. Very few emergency overnight hospital calls, standard daytime clinic appointments, and lucrative private practice potential.",
      "typicalEmployers": [
        "Ministry of Health (Dental Institute Colombo, General Hospital Dental Units)",
        "Faculty of Dental Sciences Teaching Hospital (Peradeniya)",
        "Private Hospitals & Dental Clinics",
        "Private Dental Practice Ownership"
      ],
      "sriLankanSuccessStory": "A dental graduate from University of Peradeniya completes hospital internship at Colombo Dental Institute, opens a modern private dental clinic in Kandy specializing in cosmetic veneers and implants, and builds an autonomous, highly respected practice."
    },
    "salary": {
      "entryLevel": {
        "min": 110000,
        "max": 150000,
        "label": "LKR 110k – 150k / month"
      },
      "midLevel": {
        "min": 230000,
        "max": 420000,
        "label": "LKR 230k – 420k / month"
      },
      "seniorLevel": {
        "min": 500000,
        "max": 1400000,
        "label": "LKR 500k – 1.4M+ / month"
      },
      "govSector": "Government Dental Surgeons start at Grade II scales (~LKR 110,000–145,000 + allowances), scaling to senior dental specialist brackets.",
      "privateSector": "Private clinical procedures (root canals, crowns, implants, aligners) generate substantial fee-for-service revenue, commonly LKR 400,000 to over 1.2 Million monthly.",
      "overseasOpportunities": "Licensed Sri Lankan BDS graduates who pass foreign licensure exams (ADC in Australia, ORE in the UK, NDEB in Canada) earn upwards of $120,000 to $250,000 annually.",
      "factors": [
        "Private practice location and patient volume",
        "Specialist credentials in Orthodontics, Oral Surgery, or Prosthodontics",
        "Advanced cosmetic and implant skill"
      ],
      "source": "Sri Lanka Dental Association (SLDA) & Ministry of Health Gazettes",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "Peradeniya BDS: ~1.88 - 2.05+ (Second only to MBBS in Bio Science cutoffs).",
      "entranceExams": "UGC national allocation based strictly on A/L Z-score.",
      "alternativePathways": [
        "Pursue recognized foreign BDS degree in Australia, India, or Malaysia and pass the ERPDS exam conducted by the SLMC.",
        "Study Dental Technology or Dental Nursing diploma pathways."
      ],
      "competitionNote": "Very competitive; Peradeniya is Sri Lanka's sole state dental faculty, admitting only ~100 top undergraduates nationwide each year."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Dental Surgery (BDS)",
        "faculty": "Faculty of Dental Sciences (Sole State Dental School)",
        "duration": "5 Years + 1 Year Internship",
        "accreditation": "SLMC / WHO / GMC",
        "websiteUrl": "https://dental.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science Excellence",
        "timeline": "Age 15–16",
        "description": "Achieve high distinction grades in Science and Mathematics.",
        "milestone": "O/L Distinction in Math & Science"
      },
      {
        "step": 2,
        "title": "A/L Bio Science Scoring",
        "timeline": "Age 17–19",
        "description": "Attain a top district Z-score in Biology, Chemistry, and Physics.",
        "milestone": "Z-score qualifying for BDS (~1.90+)"
      },
      {
        "step": 3,
        "title": "Undergraduate BDS Degree",
        "timeline": "5 Years",
        "description": "Complete preclinical simulations, phantom head labs, and clinical patient care at Dental Hospital Peradeniya.",
        "milestone": "BDS Degree Conferment"
      },
      {
        "step": 4,
        "title": "Dental Internship",
        "timeline": "1 Year",
        "description": "Complete mandatory rotational clinical training in government teaching hospital dental clinics.",
        "milestone": "Full SLMC Dental License"
      },
      {
        "step": 5,
        "title": "Private Practice & Hospital Service",
        "timeline": "Years 1–5",
        "description": "Practice as a Dental Surgeon, master modern rotary endodontics, or launch your own dental surgery.",
        "milestone": "Independent Dental Practice"
      },
      {
        "step": 6,
        "title": "Postgraduate Specialization (MS / MD)",
        "timeline": "Years 5–10+",
        "description": "Specialize via PGIM in Orthodontics, Restorative Dentistry, or Oral & Maxillofacial Surgery.",
        "milestone": "Consultant Dental Surgeon"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Fine Manual Dexterity",
          "type": "technical",
          "description": "Micro-precision hand movements operating within the tiny millimeter tolerances of the mouth."
        },
        {
          "name": "Endodontics & Prosthetics",
          "type": "technical",
          "description": "Root canal therapy, crowns, bridges, and digital intraoral 3D scanning."
        },
        {
          "name": "Local Anaesthesia & Pain Management",
          "type": "technical",
          "description": "Administering nerve blocks gently and managing dental anxiety."
        }
      ],
      "soft": [
        {
          "name": "Gentle Reassurance",
          "type": "soft",
          "description": "Calming nervous and frightened patients (especially children) in the dental chair."
        },
        {
          "name": "Visual & Aesthetic Eye",
          "type": "soft",
          "description": "Appreciating tooth symmetry, shade matching, and facial aesthetic proportions."
        }
      ],
      "importantSchoolSubjects": [
        "Biology",
        "Chemistry",
        "Physics",
        "Art / Sculpting (beneficial for manual dexterity)"
      ],
      "recommendedProjects": [
        "Model crafting, painting, or sculpting to train finger dexterity",
        "Volunteering at dental hygiene school awareness drives"
      ]
    },
    "suitability": {
      "traits": [
        "You have steady hands and enjoy meticulous fine-detail craftsmanship.",
        "You want a medical career with regular daytime working hours and high autonomy.",
        "You love transforming a patient's pain into relief and giving them a confident smile."
      ],
      "challenges": [
        "Ergonomic neck, back, and wrist strain from bending over dental chairs for hours.",
        "Dealing with anxious, needle-phobic patients who dread visiting the dentist."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I have very steady hands and enjoy doing delicate, precise work with small instruments.",
          "trait": "Manual Dexterity"
        },
        {
          "question": "I like the idea of running my own independent clinic with predictable working hours.",
          "trait": "Autonomy Desire"
        },
        {
          "question": "I can stay gentle and calm when people around me are nervous or frightened.",
          "trait": "Patient Calming"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Demand for cosmetic dentistry (clear aligners, veneers, teeth whitening) and dental implants is rising rapidly among urban Sri Lankans.",
      "aiImpact": "3D intraoral digital scanners, CAD/CAM chairside milling of ceramic crowns in minutes, and AI caries detection on X-rays are transforming dental clinics.",
      "growingSpecializations": [
        "Cosmetic Dentistry & Smile Design",
        "Clear Aligner Orthodontics",
        "Dental Implantology",
        "Pediatric Dentistry"
      ],
      "globalDemand": "Consistently ranked as one of the top quality-of-life healthcare professions globally with high migration prospects.",
      "challenges": [
        "High upfront capital investment for modern dental operatory equipment and X-ray systems"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "veterinarian",
        "title": "Veterinary Surgeon",
        "category": "Healthcare"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      }
    ]
  },
  "veterinarian": {
    "slug": "veterinarian",
    "title": "Veterinary Surgeon (BVSc)",
    "sinhalaTitle": "පශු වෛද්‍යවරයා / සත්ත්ව ශල්‍ය වෛද්‍යවරයා",
    "category": "Healthcare",
    "tagline": "Protect domestic pets, farm livestock, and endangered wildlife through skilled animal medicine and surgery.",
    "heroImage": "/images/careers/veterinarian.jpg",
    "roleOverview": {
      "whatTheyDo": "Veterinarians diagnose and treat illnesses in animals, perform surgeries, manage vaccination schedules, oversee livestock breeding, and protect national public health by preventing zoonotic diseases (rabies, bird flu, tuberculosis) from transmitting to humans.",
      "whyItMatters": "Sri Lanka's food security depends directly on veterinarians guarding dairy, poultry, and egg farming. Furthermore, vets provide critical care for thousands of beloved family pets and treat wild Asian elephants injured in human-elephant conflict.",
      "dailyResponsibilities": [
        "Examine dogs, cats, farm livestock, and wildlife, taking vital signs and running blood diagnostics.",
        "Perform soft tissue and orthopedic surgeries: spaying, neutering, tumor removals, and fracture pinning.",
        "Supervise artificial insemination, herd vaccination, and nutrition management on dairy and poultry farms.",
        "Administer emergency triage for wild elephants, leopards, and sea turtles alongside Department of Wildlife rangers.",
        "Enforce food safety inspection on commercial meat, poultry, and dairy production facilities."
      ],
      "workEnvironment": "Modern veterinary companion animal hospitals, government livestock breeding stations, commercial poultry farms, rural field calls, and national wildlife reserves.",
      "lifestyleAndBalance": "Diverse and active work. Highly rewarding for animal lovers, with occasional emergency night calls for calving or injured animals.",
      "typicalEmployers": [
        "Department of Animal Production and Health (DAPH)",
        "Department of Wildlife Conservation (DWC)",
        "Private Pet Hospitals & Veterinary Clinics",
        "Commercial Livestock Companies (CIC, Bairaha, Crysbro, Pelwatte Dairy)"
      ],
      "sriLankanSuccessStory": "A BVSc graduate from Peradeniya joins the Wildlife Department, leads elephant rehabilitation efforts in Udawalawe Elephant Transit Home, and operates a thriving weekend small-animal clinic in Colombo."
    },
    "salary": {
      "entryLevel": {
        "min": 90000,
        "max": 140000,
        "label": "LKR 90k – 140k / month"
      },
      "midLevel": {
        "min": 180000,
        "max": 340000,
        "label": "LKR 180k – 340k / month"
      },
      "seniorLevel": {
        "min": 420000,
        "max": 1200000,
        "label": "LKR 420k – 1.2M+ / month"
      },
      "govSector": "Government Veterinary Officers at DAPH start at executive salary scales of ~LKR 90,000–125,000 + allowances, reaching LKR 240,000+ for provincial directors.",
      "privateSector": "Urban pet clinics in Colombo, Kandy, and Galle charging consultation, surgery, and vaccination fees generate LKR 300,000 to over 1 Million monthly.",
      "overseasOpportunities": "Huge global shortage of veterinarians in Australia, New Zealand, UK, and Canada, where qualified vets earn $85,000 to $160,000 annually.",
      "factors": [
        "Companion animal pet practice vs rural livestock",
        "Surgical specialty and diagnostic equipment (ultrasound, digital X-ray)",
        "Corporate poultry/dairy consulting contracts"
      ],
      "source": "Sri Lanka Veterinary Association (SLVA) & DAPH Annual Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "Peradeniya BVSc: ~1.65 - 1.85+ depending on district quota.",
      "entranceExams": "UGC merit and district allocation strictly based on A/L Z-score.",
      "alternativePathways": [
        "Pursue foreign veterinary degrees (e.g., India, Bangladesh, Philippines) recognized by the Veterinary Council of Sri Lanka.",
        "Complete Animal Husbandry or Livestock Technician diplomas at Sri Lanka School of Agriculture (Kundasale)."
      ],
      "competitionNote": "Peradeniya operates Sri Lanka's sole Faculty of Veterinary Medicine, admitting around ~120 students per year."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Veterinary Science (BVSc)",
        "faculty": "Faculty of Veterinary Medicine & Animal Science",
        "duration": "5 Years",
        "accreditation": "Veterinary Council of Sri Lanka / RCVS UK Aligned",
        "websiteUrl": "https://vet.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science Foundation",
        "timeline": "Age 15–16",
        "description": "Excel in Science and Mathematics at G.C.E. O/L.",
        "milestone": "O/L Pass with Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Pass Biology, Chemistry, and Physics with a competitive Z-score.",
        "milestone": "Z-score qualifying for BVSc"
      },
      {
        "step": 3,
        "title": "Undergraduate BVSc Degree",
        "timeline": "5 Years",
        "description": "Study animal anatomy, pathology, pharmacology, and clinical veterinary surgery at Peradeniya.",
        "milestone": "BVSc Degree Award"
      },
      {
        "step": 4,
        "title": "Veterinary Council Registration",
        "timeline": "Post-Graduation",
        "description": "Register with the Veterinary Council of Sri Lanka to gain official license to practice.",
        "milestone": "Registered Veterinary Surgeon (VS)"
      },
      {
        "step": 5,
        "title": "Government / Private Practice",
        "timeline": "Years 1–5",
        "description": "Work as a government veterinary surgeon, join a corporate dairy/poultry farm, or open a companion pet clinic.",
        "milestone": "Established Veterinary Surgeon"
      },
      {
        "step": 6,
        "title": "Specialization & Clinic Ownership",
        "timeline": "Years 6–15+",
        "description": "Complete postgraduate training, lead wildlife conservation projects, or expand a multi-doctor veterinary hospital.",
        "milestone": "Veterinary Director / Specialist"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Veterinary Clinical Surgery",
          "type": "technical",
          "description": "Performing sterile abdominal surgeries, orthopedic pinning, and wound reconstruction on diverse animal species."
        },
        {
          "name": "Comparative Anatomy & Pathology",
          "type": "technical",
          "description": "Understanding the unique physiology and drug tolerances of dogs, cats, cows, horses, and wildlife."
        },
        {
          "name": "Zoonotic Disease Prevention",
          "type": "technical",
          "description": "Controlling rabies, leptospirosis, and avian influenza through biosecurity and vaccination."
        }
      ],
      "soft": [
        {
          "name": "Compassion for Animals",
          "type": "soft",
          "description": "Gentle, non-threatening handling of scared, aggressive, or injured animals."
        },
        {
          "name": "Client Empathy",
          "type": "soft",
          "description": "Communicating with emotional pet owners during difficult illnesses and end-of-life care."
        }
      ],
      "importantSchoolSubjects": [
        "Biology",
        "Chemistry",
        "Physics",
        "Agriculture"
      ],
      "recommendedProjects": [
        "Volunteering at animal welfare shelters (Embark, Animal SOS Sri Lanka)",
        "Visiting dairy farms or shadowing local veterinary surgeons"
      ]
    },
    "suitability": {
      "traits": [
        "You have an undeniable love for animals and feel passionate about protecting them.",
        "You don't mind dirty, messy, and physical work with animals of all sizes.",
        "You are observant because your patients cannot speak to tell you where it hurts."
      ],
      "challenges": [
        "Risk of animal bites, scratches, and physical kicks from frightened livestock.",
        "Emotional heartbreak when treating severe neglect, abuse, or incurable animal diseases."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am not afraid of handling sick, dirty, or uncooperative animals.",
          "trait": "Animal Handling Courage"
        },
        {
          "question": "I can handle unpleasant smells and physical outdoor work without feeling disgusted.",
          "trait": "Field Resilience"
        },
        {
          "question": "I am deeply observant and notice subtle changes in how animals behave.",
          "trait": "Observational Diagnostic"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The pet care economy in urban Sri Lanka is expanding rapidly with pet owners willing to invest significantly in advanced veterinary healthcare, surgeries, and nutrition.",
      "aiImpact": "AI diagnostic imaging for pet ultrasound and X-rays is assisting veterinarians in rapid tumor and fracture detection.",
      "growingSpecializations": [
        "Companion Animal Orthopedics",
        "Wildlife & Conservation Medicine",
        "Commercial Poultry & Dairy Health Management",
        "Veterinary Dermatology"
      ],
      "globalDemand": "Massive global veterinary shortage in Australia, Canada, the UK, and New Zealand with immediate skilled migration pathways.",
      "challenges": [
        "Shortage of specialized animal medications during foreign exchange constraints"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "wildlife-conservationist",
        "title": "Wildlife Conservationist",
        "category": "Education"
      },
      {
        "slug": "agricultural-scientist",
        "title": "Agricultural Scientist",
        "category": "Education"
      },
      {
        "slug": "marine-biologist",
        "title": "Marine Biologist",
        "category": "Education"
      }
    ]
  },
  "pharmacist": {
    "slug": "pharmacist",
    "title": "Registered Pharmacist (B.Pharm)",
    "sinhalaTitle": "ඖෂධවේදියා / ඖෂධ සංයෝජකයා",
    "category": "Healthcare",
    "tagline": "Ensure medication safety, formulate pharmaceuticals, and guide patient therapeutic drug regimens.",
    "heroImage": "/images/careers/pharmacist.jpg",
    "roleOverview": {
      "whatTheyDo": "Pharmacists are healthcare professionals specializing in the safe dispensation, formulation, and clinical monitoring of medications. They review prescriptions for drug interactions, advise patients on dosages, manage pharmaceutical supply chains, and lead quality assurance in pharmaceutical manufacturing plants.",
      "whyItMatters": "Medicines cure illnesses only when dispensed accurately. Pharmacists prevent fatal drug-drug interactions, control antibiotic resistance, and ensure that Sri Lanka's healthcare system and local drug manufacturing plants (SPMC) maintain WHO-compliant medication standards.",
      "dailyResponsibilities": [
        "Dispense prescribed medications, calculate dosages, and check for contraindications or adverse drug interactions.",
        "Counsel patients on proper administration schedules, food interactions, and side-effect management.",
        "Supervise compounding of specialized sterile intravenous mixtures, ointments, and oral suspensions.",
        "Oversee cold-chain storage of temperature-sensitive biologics, insulins, and vaccines.",
        "Conduct quality assurance testing and GMP compliance in pharmaceutical manufacturing facilities."
      ],
      "workEnvironment": "Hospital pharmacies, retail community pharmacies, clinical research centres, and pharmaceutical factories (SPMC, Hemas, Astron, GlaxoSmithKline).",
      "lifestyleAndBalance": "Clean, structured, and professional indoor environment. Regular shift hours with minimal physical hazard.",
      "typicalEmployers": [
        "Ministry of Health (State Hospitals & Base Hospital Pharmacies)",
        "State Pharmaceuticals Corporation (SPC / Rajya Osu Sala)",
        "Private Hospital Pharmacies (Asiri, Lanka Hospitals, Nawaloka)",
        "Pharmaceutical Manufacturers (Astron, Hemas, SPMC)",
        "Community Pharmacy Chains (Healthguard, Union Chemists)"
      ],
      "sriLankanSuccessStory": "A B.Pharm graduate from University of Colombo joins the State Pharmaceuticals Manufacturing Corporation (SPMC), oversees solid dosage manufacturing, and becomes Head of Quality Assurance ensuring national self-reliance in essential medicines."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 120000,
        "label": "LKR 75k – 120k / month"
      },
      "midLevel": {
        "min": 150000,
        "max": 280000,
        "label": "LKR 150k – 280k / month"
      },
      "seniorLevel": {
        "min": 320000,
        "max": 850000,
        "label": "LKR 320k – 850k / month"
      },
      "govSector": "Government Pharmacists start on paramedical salary scales (~LKR 70,000–95,000 + allowances), scaling to LKR 180,000+ for Chief Pharmacists.",
      "privateSector": "Private community pharmacies, pharmaceutical marketing, and manufacturing QA managers earn LKR 180,000–350,000, with pharmaceutical heads and chain directors exceeding LKR 750,000.",
      "overseasOpportunities": "Strong global demand in Australia, UK (GPhC registration), Canada, and the Gulf, with overseas earnings ranging from £45,000 to $95,000/year.",
      "factors": [
        "SLMC Registered Pharmacist license",
        "B.Pharm degree vs apprentice diploma",
        "Pharmaceutical manufacturing and regulatory affairs experience"
      ],
      "source": "Pharmaceutical Society of Sri Lanka (PSSL) & Ministry of Health",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "Colombo / Ruhuna / USJ / Peradeniya B.Pharm: ~1.55 - 1.75+.",
      "entranceExams": "UGC merit and district allocation for B.Pharm; or External Pharmacist Examination conducted by the Ceylon Medical College Council (CMCC / SLMC).",
      "alternativePathways": [
        "Sit the External Pharmacist Examination (CMCC / SLMC Apprentice Course) while apprenticing under a licensed pharmacist.",
        "Pursue Bachelor of Science in Herbal Pharmacy at GWUIM.",
        "Enrol in private pharmaceutical science diplomas leading to international top-up degrees."
      ],
      "competitionNote": "State B.Pharm degrees require strong A/L results, while the CMCC external apprentice route offers a recognized path for students with basic A/L science passes."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Pharmacy (B.Pharm Hons)",
        "faculty": "Faculty of Medicine (Allied Health)",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://med.cmb.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Pharm (Hons)",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.ruh.ac.lk"
      },
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Pharm (Hons)",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://health.sjp.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Pharm (Hons)",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Chemistry & Math",
        "timeline": "Age 15–16",
        "description": "Attain credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Credit Pass"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Pass Chemistry, Biology, and Physics with a competitive Z-score.",
        "milestone": "A/L Bio Science Pass"
      },
      {
        "step": 3,
        "title": "Undergraduate B.Pharm Degree",
        "timeline": "4 Years",
        "description": "Study medicinal chemistry, pharmacology, pharmaceutics, and clinical hospital pharmacy.",
        "milestone": "B.Pharm Degree Award"
      },
      {
        "step": 4,
        "title": "SLMC Pharmacist Registration",
        "timeline": "Post-Graduation",
        "description": "Complete mandatory practical training and register with the Sri Lanka Medical Council.",
        "milestone": "Registered Pharmacist License"
      },
      {
        "step": 5,
        "title": "Hospital / Industry Practice",
        "timeline": "Years 1–5",
        "description": "Work in hospital dispensary, retail pharmacy chain, or pharmaceutical manufacturing quality control.",
        "milestone": "Senior Pharmacist"
      },
      {
        "step": 6,
        "title": "Regulatory & Production Leadership",
        "timeline": "Years 6–12+",
        "description": "Lead pharmaceutical regulatory affairs, direct drug formulation lines, or open an independent pharmacy chain.",
        "milestone": "Chief Pharmacist / QA Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Pharmacology & Drug Interactions",
          "type": "technical",
          "description": "Understanding pharmacokinetics, drug half-lives, clearance, and receptor affinities."
        },
        {
          "name": "Sterile Compounding & Dispensing",
          "type": "technical",
          "description": "Accurately preparing sterile solutions and dosage forms without contamination."
        },
        {
          "name": "Good Manufacturing Practices (GMP)",
          "type": "technical",
          "description": "Complying with international pharmaceutical manufacturing and regulatory safety guidelines."
        }
      ],
      "soft": [
        {
          "name": "Zero-Error Precision",
          "type": "soft",
          "description": "Meticulous verification of drug names, dosages, and patient identities."
        },
        {
          "name": "Patient Consultation Clarity",
          "type": "soft",
          "description": "Explaining complex medication instructions simply and reassuringly to patients."
        }
      ],
      "importantSchoolSubjects": [
        "Chemistry (Organic & Physical Chemistry)",
        "Biology",
        "Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Touring local pharmaceutical manufacturing plants (SPMC / Astron)",
        "Volunteering with community drug awareness and anti-narcotic campaigns"
      ]
    },
    "suitability": {
      "traits": [
        "You are naturally meticulous, detail-oriented, and double-check instructions.",
        "You love chemistry and understanding how molecules affect human biology.",
        "You want a healthcare career focused on science without performing surgeries or drawing blood."
      ],
      "challenges": [
        "Zero margin for error; dispensing the wrong dose or drug can be life-threatening.",
        "Repetitive standing and continuous inventory tracking."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am extremely careful and double-check labels, numbers, and instructions.",
          "trait": "Detail Precision"
        },
        {
          "question": "I enjoy organic chemistry and understanding chemical formulations.",
          "trait": "Chemical Curiosity"
        },
        {
          "question": "I prefer a clean, orderly clinical environment rather than surgical emergency rooms.",
          "trait": "Structured Clinical Preference"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Sri Lanka is actively investing in domestic pharmaceutical self-sufficiency, building dedicated pharma manufacturing zones in Hambantota (Mirijjawila) and Horana.",
      "aiImpact": "Automated dispensing robotics and AI drug-interaction screening will assist pharmacists, freeing time for high-value clinical consultations and personalized medicine.",
      "growingSpecializations": [
        "Clinical Oncology Pharmacy",
        "Pharmaceutical Regulatory Affairs & Patent Law",
        "Industrial QA & Formulation Science",
        "Radiopharmacy"
      ],
      "globalDemand": "Steady global migration opportunities in Australia, New Zealand, Canada, and the UK.",
      "challenges": [
        "Currency exchange volatility affecting imported active pharmaceutical ingredients (APIs)"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      },
      {
        "slug": "ayurvedic-doctor",
        "title": "Ayurvedic Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "food-scientist",
        "title": "Food Scientist",
        "category": "Education"
      }
    ]
  },
  "physiotherapist": {
    "slug": "physiotherapist",
    "title": "Chartered Physiotherapist (B.Sc. PT)",
    "sinhalaTitle": "භෞතචිකිත්සකවරයා",
    "category": "Healthcare",
    "tagline": "Restore physical mobility, rehabilitate stroke and trauma patients, and optimize elite athletic performance.",
    "heroImage": "/images/careers/physiotherapist.jpg",
    "roleOverview": {
      "whatTheyDo": "Physiotherapists help patients recover movement and physical function compromised by illness, injury, surgery, or disability. Using manual therapy, therapeutic exercise, electrotherapy, and biomechanical analysis, they treat sports injuries, stroke paralysis, spinal conditions, and pediatric developmental delays.",
      "whyItMatters": "Physiotherapists give people their independence back. Whether helping a stroke survivor walk again, rehabilitating an accident victim, or keeping national athletes (like Sri Lanka Cricket players) at peak physical performance, they restore quality of life.",
      "dailyResponsibilities": [
        "Evaluate patient posture, joint mobility, muscle strength, gait patterns, and neurological reflexes.",
        "Design customized rehabilitation exercise regimens, manual joint mobilizations, and soft tissue release.",
        "Apply therapeutic modalities: ultrasound therapy, TENS electrical stimulation, dry needling, and heat/ice packs.",
        "Rehabilitate post-operative orthopedic patients (hip/knee replacements, ACL ligament repairs).",
        "Educate patients on ergonomic lifting, posture correction, and fall prevention."
      ],
      "workEnvironment": "State and private hospital physiotherapy units, specialized rehabilitation centres, private sports clinics, and athletic training facilities.",
      "lifestyleAndBalance": "Active, physically engaging work. Standard daytime hours, very few emergencies, and excellent flexibility for private clinic appointments.",
      "typicalEmployers": [
        "Ministry of Health (National Hospital Colombo, Teaching Hospitals)",
        "Sri Lanka Cricket (SLC) & National Sports Teams",
        "Private Hospitals (Asiri, Nawaloka, Lanka Hospitals)",
        "Private Physiotherapy & Sports Rehabilitation Clinics"
      ],
      "sriLankanSuccessStory": "A graduate from University of Peradeniya joins the National Hospital rehabilitation unit, completes specialized sports physiotherapy training, and becomes the Lead Physiotherapist for national cricket and track-and-field squads."
    },
    "salary": {
      "entryLevel": {
        "min": 70000,
        "max": 110000,
        "label": "LKR 70k – 110k / month"
      },
      "midLevel": {
        "min": 150000,
        "max": 270000,
        "label": "LKR 150k – 270k / month"
      },
      "seniorLevel": {
        "min": 350000,
        "max": 900000,
        "label": "LKR 350k – 900k / month"
      },
      "govSector": "Government Physiotherapists start at paramedical scales (~LKR 70,000–95,000 + allowances), scaling to senior supervisory grades.",
      "privateSector": "Private clinical sessions (LKR 2,000–4,500 per 45-minute consultation) allow experienced physiotherapists to earn LKR 250,000 to over 800,000 monthly.",
      "overseasOpportunities": "Huge global demand in the UK (NHS Band 5–7 £28k–£45k), Australia (APRAH registered $75k–$110k), and Canada, with fast-track migration routes.",
      "factors": [
        "SLMC Registration as a Physiotherapist",
        "Sports rehabilitation and manual therapy credentials",
        "Private clinic ownership or home-visit consultations"
      ],
      "source": "Sri Lanka Society of Physiotherapy (SLSP) & Ministry of Health",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "Colombo / Peradeniya / Ruhuna B.Sc. Physiotherapy: ~1.45 - 1.65+.",
      "entranceExams": "UGC national selection based on A/L Bio Science Z-score.",
      "alternativePathways": [
        "Pursue external diplomas recognized by the Ministry of Health or foreign physiotherapy degree transfer options.",
        "Study Sports Science and Physical Education degrees (Sabaragamuwa / Kelaniya)."
      ],
      "competitionNote": "State university seats are limited to ~120 students per year across Colombo, Peradeniya, and Ruhuna, making it competitive but accessible for dedicated Bio students."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Physiotherapy",
        "faculty": "Faculty of Medicine (Allied Health)",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://med.cmb.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Physiotherapy",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.pdn.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Physiotherapy",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.ruh.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Biology",
        "timeline": "Age 15–16",
        "description": "Pass O/L with credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Attain qualifying Z-score in Biology, Chemistry, and Physics.",
        "milestone": "Z-score qualifying for B.Sc. PT"
      },
      {
        "step": 3,
        "title": "Undergraduate B.Sc. PT",
        "timeline": "4 Years",
        "description": "Study biomechanics, kinesiology, neuro-rehabilitation, and clinical hospital rotations.",
        "milestone": "B.Sc. (Hons) Degree Award"
      },
      {
        "step": 4,
        "title": "SLMC Registration",
        "timeline": "Post-Graduation",
        "description": "Register with the Sri Lanka Medical Council as a Licensed Physiotherapist.",
        "milestone": "SLMC License to Practice"
      },
      {
        "step": 5,
        "title": "Clinical Practice & Sports Rehab",
        "timeline": "Years 1–5",
        "description": "Practice in hospital rehabilitation wards, sports clubs, or establish a private physio studio.",
        "milestone": "Senior Physiotherapist"
      },
      {
        "step": 6,
        "title": "Specialist Practice / Sports Director",
        "timeline": "Years 6–12+",
        "description": "Lead specialized rehabilitation clinics, consult for national athletic teams, or migrate internationally.",
        "milestone": "Consultant Physiotherapist / Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Biomechanical & Gait Analysis",
          "type": "technical",
          "description": "Assessing joint alignment, muscle imbalances, and kinetic movement patterns."
        },
        {
          "name": "Manual Joint Mobilization",
          "type": "technical",
          "description": "Applying manual spinal mobilizations, passive stretching, and trigger point myofascial therapy."
        },
        {
          "name": "Neuro-Rehabilitation",
          "type": "technical",
          "description": "Facilitating neuroplasticity and motor recovery in stroke, Parkinson's, and spinal cord patients."
        }
      ],
      "soft": [
        {
          "name": "Motivational Coaching",
          "type": "soft",
          "description": "Encouraging patients to push through discomfort and persist through long rehabilitation journeys."
        },
        {
          "name": "Physical Stamina",
          "type": "soft",
          "description": "Supporting, lifting, and transferring patients during therapeutic exercises."
        }
      ],
      "importantSchoolSubjects": [
        "Biology (Musculoskeletal & Nervous Systems)",
        "Physics (Mechanics, Lever Systems, Force Vectors)",
        "English"
      ],
      "recommendedProjects": [
        "Assisting school sports teams with stretching and injury rehabilitation",
        "Volunteering with paralysis and elder care rehabilitation charities"
      ]
    },
    "suitability": {
      "traits": [
        "You are active, energetic, and dislike sitting at a desk all day.",
        "You love sports, human anatomy, and movement mechanics.",
        "You have strong hands and enjoy tactile, hands-on physical therapy."
      ],
      "challenges": [
        "Physical strain on the therapist's own back and joints when lifting heavy patients.",
        "Patience required when dealing with slow recovery in severe neurological trauma."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would rather be moving around helping people exercise than sitting at a computer all day.",
          "trait": "Active Physical Preference"
        },
        {
          "question": "I am fascinated by how muscles, joints, and ligaments work together in sports.",
          "trait": "Kinesiology Interest"
        },
        {
          "question": "I have the patience to celebrate small improvements over months of rehabilitation.",
          "trait": "Rehabilitation Patience"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Sri Lanka's rapidly aging demographic and growing participation in urban gym culture and recreational sports are creating unprecedented demand for private physiotherapy.",
      "aiImpact": "Motion-capture computer vision cameras and wearable sensor suits are helping physiotherapists track millimeter-precise rehabilitation progress at home.",
      "growingSpecializations": [
        "Sports Injury & Orthopedic Rehabilitation",
        "Neurological Stroke Rehabilitation",
        "Cardiopulmonary ICU Physiotherapy",
        "Geriatric Fall Prevention"
      ],
      "globalDemand": "Extremely high global shortage in Australia, Canada, the UK, and Europe with streamlined skilled migration visas.",
      "challenges": [
        "Need for greater public awareness distinguishing certified physiotherapists from unqualified masseurs"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "nurse",
        "title": "Registered Nurse",
        "category": "Healthcare"
      },
      {
        "slug": "dentist",
        "title": "Dental Surgeon",
        "category": "Healthcare"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      }
    ]
  },
  "nurse": {
    "slug": "nurse",
    "title": "Registered Professional Nurse (B.Sc. Nursing)",
    "sinhalaTitle": "ලියාපදිංචි වෘත්තීය හෙද නිලධාරියා",
    "category": "Healthcare",
    "tagline": "Provide expert clinical care, monitor critical patient vitals, and serve as the compassionate heartbeat of hospitals.",
    "heroImage": "/images/careers/nurse.jpg",
    "roleOverview": {
      "whatTheyDo": "Registered nurses provide round-the-clock clinical care, administer medications, monitor vital signs, assist surgeons in operating theatres, care for critically ill patients in ICUs, and provide compassionate comfort and patient education.",
      "whyItMatters": "Nurses spend more time with hospitalized patients than any other healthcare professional. Their clinical vigilance catches deteriorating conditions early, prevents complications, and provides the emotional support that helps patients heal and survive.",
      "dailyResponsibilities": [
        "Administer intravenous medications, blood transfusions, injections, and complex wound dressings.",
        "Continuously monitor vital signs (blood pressure, ECG, oxygen saturation, temperature) and report abnormalities.",
        "Manage specialized ICU equipment: mechanical ventilators, dialysis machines, and infusion pumps.",
        "Prepare surgical operating theatres, maintain sterile instruments, and scrub in for surgical operations.",
        "Comfort anxious patients, guide families, and coordinate discharge care plans."
      ],
      "workEnvironment": "Hospital inpatient wards, intensive care units (ICU), surgical operating theatres, emergency casualty departments, and specialized dialysis units.",
      "lifestyleAndBalance": "Shift work including day, evening, and overnight shifts. High team camaraderie, profound personal satisfaction, and unmatched global career mobility.",
      "typicalEmployers": [
        "Ministry of Health (National Hospital, Teaching Hospitals islandwide)",
        "Private Hospitals (Asiri Health, Lanka Hospitals, Nawaloka, Kings Hospital)",
        "Overseas National Health Services (UK NHS, Australian Health, New Zealand, Gulf)",
        "Specialized Oncology (Apeksha Hospital Maharagama) & Cardiac Centres"
      ],
      "sriLankanSuccessStory": "A student from Kandy completes a B.Sc. Nursing degree at University of Peradeniya, masters cardiac ICU nursing at Asiri Surgical Hospital, and passes the UK OET/OSCE exams to become a Senior Clinical Nurse Specialist in London."
    },
    "salary": {
      "entryLevel": {
        "min": 65000,
        "max": 95000,
        "label": "LKR 65k – 95k / month"
      },
      "midLevel": {
        "min": 130000,
        "max": 220000,
        "label": "LKR 130k – 220k / month"
      },
      "seniorLevel": {
        "min": 280000,
        "max": 580000,
        "label": "LKR 280k – 580k / month"
      },
      "govSector": "Government Nursing Officers start at ~LKR 65,000–85,000 + uniform and night duty allowances and overtime (OT), reaching LKR 160,000+ for Nursing Sisters and Matrons.",
      "privateSector": "Private hospitals pay competitive packages for ICU and Theatre certified nurses, ranging from LKR 90,000–180,000 + allowances.",
      "overseasOpportunities": "Highest international migration demand of any healthcare profession: Sri Lankan nurses passing OET/IELTS easily secure UK NHS jobs starting at £28,000–£36,000/year (LKR 900k–1.2M/mo) with sponsored visas, or Australian hospital posts earning AUD $75,000–$95,000.",
      "factors": [
        "ICU, Theatre, or Dialysis specialization certifications",
        "English proficiency (OET / IELTS for overseas licensure)",
        "B.Sc. Nursing degree vs 3-year diploma"
      ],
      "source": "Government Nursing Officers Association (GNOA) & UK NHS International Recruitment",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science or Physical Science Stream",
      "zScoreRange": "State University B.Sc. Nursing: ~1.25 - 1.55+; Ministry of Health Nursing Training Schools (NTS 3-year diploma): A/L passes in Science stream.",
      "entranceExams": "UGC merit selection for B.Sc. Nursing; Ministry of Health competitive selection for NTS Government Nursing Training Schools.",
      "alternativePathways": [
        "Enroll in the 3-Year Government Nursing Training School (NTS) diploma (free tuition + government trainee allowance).",
        "Study B.Sc. Nursing at KDU, OUSL, or international partner programmes at SLIIT.",
        "Complete nursing foundation diplomas leading to registered foreign degrees."
      ],
      "competitionNote": "Thousands of seats are available through government NTS schools and university B.Sc. Nursing faculties, making this one of the most accessible and secure medical career paths."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Nursing",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLNC / UGC / International Recognition",
        "websiteUrl": "https://ahs.pdn.ac.lk"
      },
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Nursing",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLNC / UGC",
        "websiteUrl": "https://health.sjp.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Nursing",
        "faculty": "Faculty of Medicine (Allied Health)",
        "duration": "4 Years",
        "accreditation": "SLNC / UGC",
        "websiteUrl": "https://med.cmb.ac.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Semi-Government / Defence",
        "degreeName": "B.Sc. (Hons) in Nursing",
        "faculty": "Faculty of Allied Health Sciences & UHKDU",
        "duration": "4 Years",
        "accreditation": "SLNC Recognized",
        "websiteUrl": "https://kdu.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & English",
        "timeline": "Age 15–16",
        "description": "Pass O/L with strong credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Science Stream",
        "timeline": "Age 17–19",
        "description": "Pass Biology, Chemistry, and Physics with qualifying marks.",
        "milestone": "A/L Science Pass"
      },
      {
        "step": 3,
        "title": "Nursing Degree / NTS Diploma",
        "timeline": "3–4 Years",
        "description": "Complete intensive classroom physiology and hospital bedside clinical training rotations.",
        "milestone": "Degree / Diploma Completion"
      },
      {
        "step": 4,
        "title": "Nursing Council Registration",
        "timeline": "Post-Graduation",
        "description": "Register with the Sri Lanka Nursing Council (SLNC) to receive your official registration number.",
        "milestone": "Registered Nurse (RN) License"
      },
      {
        "step": 5,
        "title": "Hospital Service & Specialization",
        "timeline": "Years 1–5",
        "description": "Work in teaching hospitals, gaining expertise in ICU, Neonatal, Theatre, or Cardiac nursing.",
        "milestone": "Senior Staff Nurse"
      },
      {
        "step": 6,
        "title": "Nursing Leadership / Overseas Career",
        "timeline": "Years 6–12+",
        "description": "Advance to Ward Sister, Nurse Manager, or migrate to lucrative nursing careers in the UK, Australia, or Canada.",
        "milestone": "Nurse Manager / Clinical Specialist"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Intravenous Therapy & Medication Administration",
          "type": "technical",
          "description": "Safely inserting cannulas, administering IV infusions, and monitoring drug reactions."
        },
        {
          "name": "Critical Care Monitoring (ICU)",
          "type": "technical",
          "description": "Managing arterial lines, central venous lines, ventilators, and cardiac monitors."
        },
        {
          "name": "Aseptic Wound Care",
          "type": "technical",
          "description": "Sterile dressing of surgical incisions, trauma wounds, and diabetic ulcers."
        }
      ],
      "soft": [
        {
          "name": "Deep Compassion & Patience",
          "type": "soft",
          "description": "Comforting vulnerable patients in pain and distress with dignity and respect."
        },
        {
          "name": "Grace Under Pressure",
          "type": "soft",
          "description": "Moving quickly and methodically during sudden medical emergencies and cardiac arrests."
        }
      ],
      "importantSchoolSubjects": [
        "Biology",
        "Chemistry",
        "English Language",
        "General Science"
      ],
      "recommendedProjects": [
        "St. John Ambulance or Red Cross first aid certified training",
        "Volunteering at elderly care homes or community medical clinics"
      ]
    },
    "suitability": {
      "traits": [
        "You have a caring, compassionate heart and want to comfort people when they are most vulnerable.",
        "You are physically resilient and can handle standing and moving during hospital shifts.",
        "You want a healthcare profession with guaranteed jobs in Sri Lanka and immense overseas demand."
      ],
      "challenges": [
        "Night duty and rotational shifts including weekends and public holidays.",
        "Physical demands of patient lifting and moving.",
        "Emotional stress of critical patient illnesses."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I feel genuine satisfaction when taking care of someone who is sick or hurt.",
          "trait": "Caregiving Nature"
        },
        {
          "question": "I am not squeamish about bodily fluids, cleaning wounds, or clinical environments.",
          "trait": "Clinical Tolerance"
        },
        {
          "question": "I want a career that gives me a fast, reliable pathway to work in countries like the UK or Australia.",
          "trait": "Global Mobility Goal"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The global nursing shortage is estimated at over 6 million professionals. Countries like the UK, Australia, New Zealand, and Canada actively recruit and sponsor Sri Lankan nurses.",
      "aiImpact": "Electronic health charts and smart bedside vitals monitors will reduce tedious paperwork, giving nurses more time for direct patient bedside care.",
      "growingSpecializations": [
        "Critical Care & Intensive Care (ICU)",
        "Oncology & Palliative Care",
        "Cardiac Catheterization Nursing",
        "Pediatric & Neonatal Nursing"
      ],
      "globalDemand": "Unrivalled international migration prospects with permanent residency fast-tracks for registered nurses globally.",
      "challenges": [
        "Workplace fatigue during peak hospital admission seasons"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "physiotherapist",
        "title": "Physiotherapist",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      }
    ]
  },
  "tea-plantation-manager": {
    "slug": "tea-plantation-manager",
    "title": "Tea Plantation Manager / Planter",
    "sinhalaTitle": "තේ වතු කළමනාකරු / වැවිලිකරු",
    "category": "Business",
    "tagline": "Direct world-renowned Ceylon tea estates, manage agro-processing factories, and live in breathtaking high-elevation colonial bungalows.",
    "heroImage": "/images/careers/tea-plantation-manager.jpg",
    "roleOverview": {
      "whatTheyDo": "Tea plantation managers supervise the cultivation, harvesting, processing, and commercial management of world-famous Ceylon tea estates across Nuwara Eliya, Dimbula, Uva, and Ruhuna. They lead thousands of estate workers, operate manufacturing factories, and oversee global exports.",
      "whyItMatters": "Ceylon Tea is Sri Lanka's crown agricultural jewel, generating over $1.3 Billion annually and employing roughly 10% of the island's workforce. Plantation managers maintain the global prestige of Ceylon black, green, and artisanal specialty teas.",
      "dailyResponsibilities": [
        "Conduct morning field inspections (muster) assessing tea bush plucking, soil erosion, and shade tree management.",
        "Oversee tea factory processing: withering, rolling, fermentation/oxidation, drying, grading, and tea tasting.",
        "Manage estate workforce labor relations, worker welfare, housing, and healthcare communities.",
        "Direct environmental sustainability: Rainforest Alliance, Fairtrade, and organic agricultural certifications.",
        "Coordinate weekly Colombo tea auction catalogs with brokers (Forbes & Walker, John Keells PLC)."
      ],
      "workEnvironment": "Picturesque misty mountain estates in the central highlands and lush low-country plantations. High autonomy, horseback/4x4 field travel, and heritage colonial bungalow living.",
      "lifestyleAndBalance": "Distinctive planters' club lifestyle (Radella, Dimbula Athletic Club), colonial bungalows with company cooks and drivers, early morning field starts, and strong outdoor camaraderie.",
      "typicalEmployers": [
        "Regional Plantation Companies (Hayleys Plantations, Kelani Valley, Dilmah, Maskeliya, Talawakelle)",
        "Tea Smallholders Development Authority (TSHDA)",
        "Tea Research Institute of Sri Lanka (TRI - Talawakelle)",
        "Artisanal Single-Estate Tea Brands"
      ],
      "sriLankanSuccessStory": "A school-leaver passionate about agriculture enters as a 'Creeper' (trainee planter), masters tea tasting and plucking management, advances to Senior Assistant, and by age 34 becomes Estate Superintendent of a premier 800-hectare Nuwara Eliya estate."
    },
    "salary": {
      "entryLevel": {
        "min": 80000,
        "max": 135000,
        "label": "LKR 80k – 135k / month + perks"
      },
      "midLevel": {
        "min": 220000,
        "max": 420000,
        "label": "LKR 220k – 420k / month + bungalow"
      },
      "seniorLevel": {
        "min": 500000,
        "max": 1300000,
        "label": "LKR 500k – 1.3M+ / month + bonus"
      },
      "govSector": "State-managed estates (SLSPC / JEDB / TRI) pay executive scales LKR 80,000–140,000 + housing and field transport.",
      "privateSector": "Premier public-quoted Regional Plantation Companies (RPCs) offer competitive executive compensation + fully furnished heritage bungalow, domestic staff, 4x4 company vehicle, and annual crop profit-share bonuses.",
      "overseasOpportunities": "Opportunities to manage tea and coffee plantations in Kenya, Rwanda, Uganda, and India, where Ceylon planters are prized for their century-old agricultural acumen.",
      "factors": [
        "Estate acreage and annual leaf yield",
        "Tea auction price performance (Top-of-Sale records)",
        "Cost-of-production management efficiency"
      ],
      "source": "Planters' Association of Ceylon (PA) & National Institute of Plantation Management (NIPM)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in English, Mathematics, and Science.",
      "alStream": "ANY A/L Stream (Agriculture, Bio Science, Commerce, or Arts with strong sports/leadership background).",
      "zScoreRange": "Wayamba / Uva Wellassa B.Sc. in Plantation Management: ~1.20 - 1.45+.",
      "entranceExams": "Direct selection by RPC plantation companies based on personality, sports/cadeting background, and interviews.",
      "alternativePathways": [
        "National Institute of Plantation Management (NIPM) Diploma in Plantation Management (Athurugiriya).",
        "Direct entry as a Trainee Planter ('Creeper') right after A/L through Regional Plantation Companies.",
        "Aquinas College or Sri Lanka School of Agriculture diplomas."
      ],
      "competitionNote": "Values leadership, physical fitness, school prefectship/cadeting/rugby, and outdoor command as much as academic grades."
    },
    "universities": [
      {
        "name": "Wayamba University of Sri Lanka",
        "slug": "wayamba",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Plantation Management",
        "faculty": "Faculty of Agriculture & Plantation Management",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://fapm.wyb.ac.lk"
      },
      {
        "name": "Uva Wellassa University",
        "slug": "uvawellassa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Tea Technology & Value Addition",
        "faculty": "Faculty of Animal Science & Export Agriculture",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://www.uwu.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Agricultural Resource Management",
        "faculty": "Faculty of Agriculture (Mapalana)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://agri.ruh.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L & Sports Leadership",
        "timeline": "Age 15–16",
        "description": "Excel in sports, cadeting, or school leadership while maintaining good academic passes.",
        "milestone": "O/L Pass & Sports Colours"
      },
      {
        "step": 2,
        "title": "A/L Completion",
        "timeline": "Age 17–19",
        "description": "Pass A/L in any stream. Develop strong English communication and outdoor resilience.",
        "milestone": "A/L Completion"
      },
      {
        "step": 3,
        "title": "Plantation Degree / Creeper Training",
        "timeline": "3–4 Years",
        "description": "Pursue a degree in Plantation Management or join an RPC as a Trainee Planter ('Creeper').",
        "milestone": "NIPM Diploma / Degree Award"
      },
      {
        "step": 4,
        "title": "Assistant Superintendent",
        "timeline": "Years 1–4",
        "description": "Manage a division (200–400 hectares), oversee daily plucking gangs, and run night factory shifts.",
        "milestone": "Senior Assistant Planter"
      },
      {
        "step": 5,
        "title": "Estate Superintendent (Manager)",
        "timeline": "Years 5–10",
        "description": "Take overall command of an entire tea plantation, factory, human resources, and financial budgets.",
        "milestone": "Estate Superintendent / Manager"
      },
      {
        "step": 6,
        "title": "General Manager / Plantation Director",
        "timeline": "Years 10–20+",
        "description": "Lead corporate plantation operations across multiple estates, directing global export strategies.",
        "milestone": "Director of Plantations / CEO"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Agronomy & Bush Physiology",
          "type": "technical",
          "description": "Managing pruning cycles, soil nutrition, leaf plucking standards, and vegetative propagation."
        },
        {
          "name": "Factory Manufacture & Tea Tasting",
          "type": "technical",
          "description": "Controlling withering moisture loss, rolling, fermentation, and palate-testing dry leaf liquors."
        },
        {
          "name": "Estate Labor Law & Welfare",
          "type": "technical",
          "description": "Navigating collective agreements, labor regulations, workers' councils, and social development."
        }
      ],
      "soft": [
        {
          "name": "Outdoor Command & Leadership",
          "type": "soft",
          "description": "Managing hundreds of field workers with firmness, empathy, and decisive leadership."
        },
        {
          "name": "Crisis & Weather Resilience",
          "type": "soft",
          "description": "Handling heavy monsoons, landslides, factory machinery breakdowns, and harvest gluts calmly."
        }
      ],
      "importantSchoolSubjects": [
        "Agriculture / Biology",
        "Commerce / Business Studies",
        "English Language",
        "Geography"
      ],
      "recommendedProjects": [
        "Visiting tea research stations and working tea factories",
        "Captaining school sports teams or leading Scout/Cadet troops"
      ]
    },
    "suitability": {
      "traits": [
        "You love the outdoors, fresh mountain air, hills, and physical activity.",
        "You dislike being trapped behind an office computer screen all day.",
        "You have strong leadership presence and command respect from diverse teams."
      ],
      "challenges": [
        "Living in remote highland locations away from major urban shopping malls and entertainment.",
        "Early mornings (5:30 AM muster roll-call) and unpredictable monsoon weather."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would rather walk through tea fields and hills than sit in a cubicle all day.",
          "trait": "Outdoor Love"
        },
        {
          "question": "I am confident directing and motivating groups of workers respectfully.",
          "trait": "Field Command"
        },
        {
          "question": "I enjoy the peaceful nature and cooler climate of Sri Lanka's central highlands.",
          "trait": "Highland Living"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The tea industry is rapidly modernizing with mechanical harvesting shears, automated factory temperature sensors, drip fertigation, and high-margin specialty artisan white and golden tips.",
      "aiImpact": "Drones and AI multispectral imaging analyze bush health, soil nitrogen levels, and yield forecasting from the sky.",
      "growingSpecializations": [
        "Specialty & Artisanal Tea Crafting",
        "Organic & Regenerative Agriculture",
        "Carbon Credit & Forestry Management on Estates",
        "Tea Tourism & Heritage Homestays"
      ],
      "globalDemand": "Global appreciation for premium single-origin Ceylon teas ensures enduring managerial demand.",
      "challenges": [
        "Labor shortages in traditional estate regions driving the urgent need for smart mechanization"
      ]
    },
    "relatedCareers": [
      {
        "slug": "agricultural-scientist",
        "title": "Agricultural Scientist",
        "category": "Education"
      },
      {
        "slug": "environmental-officer",
        "title": "Environmental Officer",
        "category": "Education"
      },
      {
        "slug": "hospitality-manager",
        "title": "Hospitality Manager",
        "category": "Hospitality"
      },
      {
        "slug": "logistics-manager",
        "title": "Logistics Manager",
        "category": "Business"
      }
    ]
  },
  "wildlife-conservationist": {
    "slug": "wildlife-conservationist",
    "title": "Wildlife Conservationist & Ecologist",
    "sinhalaTitle": "වනජීවී සංරක්ෂණ නිලධාරියා / පරිසරවේදියා",
    "category": "Education",
    "tagline": "Protect endangered Asian elephants, leopards, and virgin rainforests while managing human-wildlife coexistence.",
    "heroImage": "/images/careers/wildlife-conservationist.jpg",
    "roleOverview": {
      "whatTheyDo": "Wildlife conservationists protect endangered species, monitor biodiversity in national parks and reserves, conduct wildlife censuses, implement humane human-elephant coexistence solutions (electric fencing, bio-corridors), and combat illegal poaching and deforestation.",
      "whyItMatters": "Sri Lanka is one of the world's 36 recognized biodiversity hotspots, home to endemic leopards, Asian elephants, sloth bears, and unique amphibians. Conservationists safeguard our natural heritage against habitat fragmentation and extinction.",
      "dailyResponsibilities": [
        "Track wildlife populations using camera traps, GPS radio collars, and environmental DNA (eDNA).",
        "Design and maintain community-managed electric fences to prevent human-elephant conflict (HEC).",
        "Rehabilitate orphaned and injured animals at the Elephant Transit Home (ETH Udawalawe).",
        "Conduct ecological field surveys in Sinharaja, Yala, Wilpattu, and Horton Plains.",
        "Draft conservation policy whitepapers, environmental impact assessments (EIAs), and grant proposals."
      ],
      "workEnvironment": "Tropical rainforests, dry-zone scrub jungles, wildlife national parks, research field stations, and environmental policy offices.",
      "lifestyleAndBalance": "Rugged, purpose-driven lifestyle. Involves camping, off-road expeditions, and night animal tracking, balanced with scientific paper writing.",
      "typicalEmployers": [
        "Department of Wildlife Conservation (DWC)",
        "Wildlife and Nature Protection Society (WNPS)",
        "WWF, IUCN, UNDP & International Conservation Bodies",
        "Centre for Conservation and Research (CCR)",
        "Eco-Tourism & Corporate Sustainability Foundations (Dilmah Conservation)"
      ],
      "sriLankanSuccessStory": "A zoology graduate from University of Colombo joins a field research team studying Sri Lankan leopard genetics in Yala, partners with international grant agencies, and establishes an innovative community compensation model reducing human-carnivore conflict."
    },
    "salary": {
      "entryLevel": {
        "min": 70000,
        "max": 115000,
        "label": "LKR 70k – 115k / month"
      },
      "midLevel": {
        "min": 140000,
        "max": 270000,
        "label": "LKR 140k – 270k / month"
      },
      "seniorLevel": {
        "min": 320000,
        "max": 750000,
        "label": "LKR 320k – 750k+ / month"
      },
      "govSector": "DWC wildlife officers and research officers receive government technical scales LKR 65,000–110,000 + field hazard allowances.",
      "privateSector": "International conservation foundations (IUCN, WWF, UNDP) and corporate sustainability funds offer competitive project compensation ranging LKR 180,000–500,000.",
      "overseasOpportunities": "Global conservation research fellowships, National Geographic expeditions, and international biodiversity consultancy positions earning USD $35,000–$75,000/year.",
      "factors": [
        "International grant writing success",
        "Published ecological research papers",
        "GIS mapping and wildlife tracking expertise"
      ],
      "source": "Department of Wildlife Conservation (DWC) & IUCN Sri Lanka Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics/Agri)",
      "zScoreRange": "Colombo / USJ / Ruhuna / Peradeniya B.Sc. Zoology & Wildlife: ~1.40 - 1.65+.",
      "entranceExams": "UGC national university selection based on A/L Bio Science.",
      "alternativePathways": [
        "Enroll in environmental diplomas at Open University (OUSL).",
        "Field research volunteering with registered conservation NGOs (WNPS, FOGSL) leading to technical posts.",
        "Study forestry and natural resources degrees at University of Sri Jayewardenepura."
      ],
      "competitionNote": "Accessible for Bio Science students with a genuine passion for field biology and environmental stewardship."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Zoology & Environment",
        "faculty": "Faculty of Science",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.cmb.ac.lk"
      },
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Forestry & Environmental Science",
        "faculty": "Faculty of Applied Sciences",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://applied.sjp.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Zoology",
        "faculty": "Faculty of Science",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Nature Passion",
        "timeline": "Age 15–16",
        "description": "Excel in Science and English; participate in school environmental pioneer clubs.",
        "milestone": "O/L Science Credit Pass"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Pass Biology, Chemistry, and Physics. Join birdwatching and nature societies.",
        "milestone": "A/L Bio Science Pass"
      },
      {
        "step": 3,
        "title": "Undergraduate Zoology / Ecology Degree",
        "timeline": "4 Years",
        "description": "Complete degree in Zoology, Environmental Science, or Wildlife Management, conducting field dissertations.",
        "milestone": "B.Sc. (Hons) Degree Award"
      },
      {
        "step": 4,
        "title": "Field Research & Project Officer",
        "timeline": "Years 1–3",
        "description": "Join DWC, IUCN, or WNPS executing field monitoring, camera trapping, and community surveys.",
        "milestone": "Certified Field Ecologist"
      },
      {
        "step": 5,
        "title": "Senior Conservationist / Scientist",
        "timeline": "Years 4–8",
        "description": "Publish peer-reviewed conservation papers, secure international research grants, and lead habitat restoration.",
        "milestone": "Principal Conservation Biologist"
      },
      {
        "step": 6,
        "title": "Program Director / Policy Leader",
        "timeline": "Years 8–15+",
        "description": "Direct national wildlife reserves, shape parliamentary biodiversity policy, or lead international conservation NGOs.",
        "milestone": "Director of Wildlife Conservation"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "GIS & Spatial Habitat Mapping",
          "type": "technical",
          "description": "Using QGIS and ArcGIS to map elephant migration corridors and forest encroachment."
        },
        {
          "name": "Wildlife Camera Trapping & Telemetry",
          "type": "technical",
          "description": "Setting up motion-sensor cameras, tagging species, and analyzing GPS movement data."
        },
        {
          "name": "Environmental Impact Assessment (EIA)",
          "type": "technical",
          "description": "Evaluating ecological damage from highways, dams, and construction projects."
        }
      ],
      "soft": [
        {
          "name": "Community Diplomacy",
          "type": "soft",
          "description": "Listening empathetically to angry farmers facing crop damage while protecting wild elephants."
        },
        {
          "name": "Field Endurance",
          "type": "soft",
          "description": "Trekking through rain, mud, leeches, and heat without complaint during field surveys."
        }
      ],
      "importantSchoolSubjects": [
        "Biology (Ecology, Genetics, Taxonomy)",
        "Chemistry",
        "Geography",
        "English Language"
      ],
      "recommendedProjects": [
        "Participating in Sri Lanka Asian Elephant census drives",
        "Joining Field Ornithology Group of Sri Lanka (FOGSL) bird ringing expeditions"
      ]
    },
    "suitability": {
      "traits": [
        "You feel a deep, burning passion to protect wild animals and virgin forests from destruction.",
        "You are fearless and comfortable camping in the jungle and trekking in wild terrain.",
        "You want a meaningful career dedicated to saving species rather than maximizing corporate profits."
      ],
      "challenges": [
        "Physical danger from wild animals (charging elephants, venomous snakes) and poachers.",
        "Frustration when commercial development encroaches on protected wildlife habitats."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would rather sleep in a jungle tent tracking animals than in a 5-star luxury hotel.",
          "trait": "Jungle Affinity"
        },
        {
          "question": "I feel deeply distressed when I hear about deforestation and animal cruelty.",
          "trait": "Conservation Drive"
        },
        {
          "question": "I can handle uncomfortable field conditions (mosquitoes, rain, mud, leeches).",
          "trait": "Field Toughness"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Biodiversity protection and climate resilience are now international economic mandates. Global carbon credits and nature-based solution funds are directing billions toward tropical biodiversity hotspots like Sri Lanka.",
      "aiImpact": "AI audio listening arrays (bioacoustics) and drone thermal cameras now automatically detect gunshots, chainsaws, and animal movement in real time.",
      "growingSpecializations": [
        "Human-Elephant Conflict (HEC) Mitigation Engineering",
        "Bioacoustics & AI Wildlife Monitoring",
        "Rainforest Carbon Credit Verification",
        "Marine & Coastal Wildlife Protection"
      ],
      "globalDemand": "Global conservation organizations (WWF, Wildlife Conservation Society, National Geographic) recruit field biologists worldwide.",
      "challenges": [
        "Competing demands between human agriculture expansion and wildlife territory"
      ]
    },
    "relatedCareers": [
      {
        "slug": "veterinarian",
        "title": "Veterinary Surgeon",
        "category": "Healthcare"
      },
      {
        "slug": "marine-biologist",
        "title": "Marine Biologist",
        "category": "Education"
      },
      {
        "slug": "environmental-officer",
        "title": "Environmental Officer",
        "category": "Education"
      },
      {
        "slug": "ecotourism-naturalist",
        "title": "Eco-Tourism Naturalist",
        "category": "Hospitality"
      }
    ]
  },
  "marine-biologist": {
    "slug": "marine-biologist",
    "title": "Marine Biologist & Oceanographer",
    "sinhalaTitle": "සාගර ජීව විද්‍යාඥයා / සමුද්‍ර විද්‍යාඥයා",
    "category": "Education",
    "tagline": "Explore Indian Ocean coral reefs, study blue whales, and champion sustainable maritime marine ecosystems.",
    "heroImage": "/images/careers/marine-biologist.jpg",
    "roleOverview": {
      "whatTheyDo": "Marine biologists study marine organisms, their underwater habitats, and oceanic ecological interactions. They dive on shallow coral reefs, monitor offshore blue whale populations, study deep-sea fisheries, analyze ocean acidification, and conserve mangrove coastal buffers.",
      "whyItMatters": "Sri Lanka is an island with an ocean Exclusive Economic Zone (EEZ) nearly 8 times larger than its landmass. Marine biologists guard our marine food supply, protect endangered sea turtles, and explore the vast untapped wealth of the Indian Ocean blue economy.",
      "dailyResponsibilities": [
        "Conduct underwater scientific scuba diving surveys on coral reef health and fish biodiversity.",
        "Acoustically track blue whale and dolphin migration corridors along Southern and Eastern shipping lanes.",
        "Monitor water quality, ocean salinity, temperature anomalies, and microplastic contamination.",
        "Research commercially valuable fish stocks (tuna, mackerel) to advise national sustainable fishing quotas.",
        "Collaborate with international oceanographic institutions on climate change and marine protected areas (MPAs)."
      ],
      "workEnvironment": "Coastal marine laboratories, research ships at sea, diving sites on coral reefs, mangrove estuaries, and oceanographic data stations.",
      "lifestyleAndBalance": "Exciting, aquatic outdoor lifestyle. Significant time spent on boats and underwater diving, balanced with microscope laboratory analysis.",
      "typicalEmployers": [
        "National Aquatic Resources Research and Development Agency (NARA)",
        "Ocean University of Sri Lanka (OCUSL)",
        "Oceanswell (founded by Dr. Asha de Vos) · Blue Resources Trust",
        "Department of Fisheries & Aquatic Resources",
        "International Marine Conservation Foundations"
      ],
      "sriLankanSuccessStory": "Inspired by local whale sightings off Mirissa, a student studies marine science at University of Ruhuna, earns PADI scientific diving certification, joins NARA, and works with global oceanographers to reroute international shipping traffic saving blue whales from ship strikes."
    },
    "salary": {
      "entryLevel": {
        "min": 80000,
        "max": 125000,
        "label": "LKR 80k – 125k / month"
      },
      "midLevel": {
        "min": 160000,
        "max": 290000,
        "label": "LKR 160k – 290k / month"
      },
      "seniorLevel": {
        "min": 350000,
        "max": 800000,
        "label": "LKR 350k – 800k+ / month"
      },
      "govSector": "NARA research officers start at ~LKR 80,000–120,000 + sea allowances, scaling to LKR 220,000+ for Senior Research Fellows.",
      "privateSector": "Private marine consultancies, luxury dive expedition operations, and international NGO research projects pay LKR 180,000–450,000.",
      "overseasOpportunities": "International marine research fellowships in Australia (Great Barrier Reef), Maldives, Hawaii, and UK universities offering $45,000–$90,000 annually.",
      "factors": [
        "Scientific SCUBA certification (PADI / CMAS)",
        "Oceanographic data modeling (R / Python)",
        "Experience with offshore research vessels"
      ],
      "source": "NARA Annual Reports & Sri Lanka Association for Fisheries and Aquatic Resources (SLAFAR)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics/Agri)",
      "zScoreRange": "Ruhuna / Ocean University / Wayamba Marine Science: ~1.30 - 1.55+.",
      "entranceExams": "UGC national university selection; swimming proficiency recommended.",
      "alternativePathways": [
        "Enroll in B.Sc. Marine Science or Ocean Engineering at Ocean University of Sri Lanka (Crow Island).",
        "Earn PADI Rescue Diver / Divemaster certifications and transition into marine fieldwork.",
        "Study coastal aquaculture diplomas at NAQDA."
      ],
      "competitionNote": "A niche, highly rewarding specialty for students who love the sea and water sports."
    },
    "universities": [
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Fisheries & Marine Sciences",
        "faculty": "Faculty of Fisheries & Marine Sciences (Oceanfront Campus)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://fish.ruh.ac.lk"
      },
      {
        "name": "Ocean University of Sri Lanka",
        "slug": "ocean",
        "type": "Government (Maritime)",
        "degreeName": "B.Sc. (Hons) in Marine Fisheries & Oceanography",
        "faculty": "Faculty of Fisheries & Ocean Sciences",
        "duration": "4 Years",
        "accreditation": "UGC / Ministry of Education",
        "websiteUrl": "https://ocu.ac.lk"
      },
      {
        "name": "Wayamba University of Sri Lanka",
        "slug": "wayamba",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Aquaculture & Fisheries",
        "faculty": "Faculty of Livestock, Fisheries & Nutrition",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://flfn.wyb.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L & Swimming Skills",
        "timeline": "Age 15–16",
        "description": "Pass O/L with science credits and learn confident open-water swimming.",
        "milestone": "O/L Pass & Swimming Competence"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Excel in Biology and Chemistry, qualifying for university marine degree pathways.",
        "milestone": "A/L Bio Science Pass"
      },
      {
        "step": 3,
        "title": "Marine Science Degree",
        "timeline": "4 Years",
        "description": "Study oceanography, marine ecology, and coastal management at Ruhuna or Ocean University.",
        "milestone": "B.Sc. (Hons) Marine Science"
      },
      {
        "step": 4,
        "title": "SCUBA Diving & Field Research",
        "timeline": "Years 1–2",
        "description": "Obtain scientific diving credentials and join research expeditions tracking coral bleaching and cetaceans.",
        "milestone": "PADI Divemaster / Research Officer"
      },
      {
        "step": 5,
        "title": "Marine Research Scientist",
        "timeline": "Years 3–7",
        "description": "Lead NARA or NGO projects, publish marine papers, and advise national fisheries policy.",
        "milestone": "Senior Oceanographer"
      },
      {
        "step": 6,
        "title": "Lead Scientist / Marine Director",
        "timeline": "Years 8–15+",
        "description": "Head national oceanographic institutes, direct international marine expeditions, or lead global conservation teams.",
        "milestone": "Director General (NARA / International)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Scientific SCUBA Diving",
          "type": "technical",
          "description": "Navigating underwater, conducting benthic transects, and operating underwater camera gear."
        },
        {
          "name": "Oceanographic Water Sampling",
          "type": "technical",
          "description": "Operating Niskin bottles, CTD profilers, plankton nets, and spectrophotometric water testing."
        },
        {
          "name": "Acoustic Cetacean Monitoring",
          "type": "technical",
          "description": "Deploying hydrophones to detect blue whale and sperm whale vocalizations."
        }
      ],
      "soft": [
        {
          "name": "Sea Resilience",
          "type": "soft",
          "description": "Comfortable working on rolling boats in rough seas without debilitating motion sickness."
        },
        {
          "name": "Passionate Science Advocacy",
          "type": "soft",
          "description": "Educating coastal fishing communities and the general public on marine conservation."
        }
      ],
      "importantSchoolSubjects": [
        "Biology (Marine Zoology, Ecology)",
        "Chemistry (Ocean Chemistry)",
        "Physics (Wave Mechanics, Optics)",
        "English"
      ],
      "recommendedProjects": [
        "Swimming and lifesaving certifications",
        "Participating in coastal beach cleanups and coral nursery restoration projects"
      ]
    },
    "suitability": {
      "traits": [
        "You are completely at home in the ocean, love swimming, and are captivated by sea creatures.",
        "You don't get seasick easily on small research boats.",
        "You want to help save our oceans from coral bleaching, plastic waste, and overfishing."
      ],
      "challenges": [
        "Working in harsh offshore maritime conditions with strong currents and intense sun exposure.",
        "Limited government institutional research budgets requiring grant self-sufficiency."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am a strong swimmer and feel comfortable in deep open ocean water.",
          "trait": "Ocean Affinity"
        },
        {
          "question": "I am fascinated by marine life like whales, coral reefs, and sharks.",
          "trait": "Marine Passion"
        },
        {
          "question": "I can spend days living on a boat doing scientific experiments.",
          "trait": "Expedition Resilience"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The Indian Ocean Blue Economy is Sri Lanka's largest untapped asset. Global climate negotiations prioritize ocean carbon sequestration (Blue Carbon - mangroves and seagrass beds).",
      "aiImpact": "AI automated satellite imagery and underwater drones (ROVs) now track coral reef bleaching and illegal fishing vessels across hundreds of square miles.",
      "growingSpecializations": [
        "Blue Carbon & Mangrove Ecosystem Accounting",
        "Marine Protected Area (MPA) Design",
        "Microplastic Pollution Remediation",
        "Artisanal Fishery Quota Management"
      ],
      "globalDemand": "Strong international demand across island nations (Maldives, Seychelles, Pacific islands) and Australian marine research institutes.",
      "challenges": [
        "Rapid ocean warming and marine heatwaves threatening Sri Lanka's coral barriers"
      ]
    },
    "relatedCareers": [
      {
        "slug": "aquaculture-specialist",
        "title": "Aquaculture Specialist",
        "category": "Education"
      },
      {
        "slug": "wildlife-conservationist",
        "title": "Wildlife Conservationist",
        "category": "Education"
      },
      {
        "slug": "environmental-officer",
        "title": "Environmental Officer",
        "category": "Education"
      },
      {
        "slug": "marine-officer",
        "title": "Marine Officer",
        "category": "Maritime"
      }
    ]
  },
  "agricultural-scientist": {
    "slug": "agricultural-scientist",
    "title": "Agricultural Scientist & Agronomist",
    "sinhalaTitle": "කෘෂි විද්‍යාඥයා",
    "category": "Education",
    "tagline": "Innovate climate-smart crops, optimize organic fertilization, and pioneer modern precision hydroponic farming in Sri Lanka.",
    "heroImage": "/images/careers/agricultural-scientist.jpg",
    "roleOverview": {
      "whatTheyDo": "Agricultural scientists research crop genetics, soil chemistry, plant pathology, precision irrigation, and pest management. They breed high-yielding rice varieties, develop drought-tolerant vegetables, and design automated smart-farming greenhouse systems.",
      "whyItMatters": "Food security and national sovereignty start with agriculture. Sri Lanka's agricultural scientists at the Rice Research and Development Institute (RRDI Bathalagoda) and Tea Research Institute (TRI) created the high-yielding crop varieties that feed 22 million citizens every single day.",
      "dailyResponsibilities": [
        "Conduct hybrid seed breeding and genetic crop improvement trials.",
        "Analyze soil micronutrient profiles, organic compost efficacy, and microbiological soil health.",
        "Design precision drip-irrigation and climate-controlled greenhouse setups.",
        "Diagnose crop fungal and viral diseases, formulating integrated pest management (IPM) solutions.",
        "Educate commercial farmers on modern agro-machinery and regenerative agriculture."
      ],
      "workEnvironment": "Agronomy research fields, plant tissue culture laboratories, greenhouses, rural farm extensions, and modern agri-business headquarters.",
      "lifestyleAndBalance": "Balanced blend of laboratory science and open-air field trials. Meaningful connection to farmers and nature.",
      "typicalEmployers": [
        "Department of Agriculture Sri Lanka (RRDI, HORDI)",
        "Tea, Rubber & Coconut Research Institutes (TRI, RRI, CRI)",
        "Agri-Business Corporations (CIC Agri, Hayleys Agriculture, Baurs, DIMO)",
        "Commercial Hydroponic & Poly-tunnel Export Greenhouses"
      ],
      "sriLankanSuccessStory": "A graduate from University of Peradeniya Faculty of Agriculture conducts post-graduate research on salt-tolerant traditional paddy varieties, and establishes a high-tech automated vertical hydroponic strawberry and bell-pepper export venture in Nuwara Eliya."
    },
    "salary": {
      "entryLevel": {
        "min": 80000,
        "max": 125000,
        "label": "LKR 80k – 125k / month"
      },
      "midLevel": {
        "min": 160000,
        "max": 310000,
        "label": "LKR 160k – 310k / month"
      },
      "seniorLevel": {
        "min": 380000,
        "max": 950000,
        "label": "LKR 380k – 950k+ / month"
      },
      "govSector": "Agricultural Research Officers (SLARhS) at Dept. of Agriculture start at ~LKR 80,000–120,000 + allowances.",
      "privateSector": "Private agricultural chemical, seed technology, and agri-tech export firms pay senior agronomists LKR 200,000–500,000, with general managers and export directors reaching LKR 900,000+.",
      "overseasOpportunities": "Substantial research and farm consulting demand in Australia, New Zealand, Canada, and the Netherlands for specialized crop and soil scientists.",
      "factors": [
        "Expertise in precision agriculture and protected culture (greenhouses)",
        "Plant genetics or seed breeding track record",
        "Commercial crop yield optimization experience"
      ],
      "source": "Department of Agriculture Sri Lanka & Sri Lanka Institute of Agriculture (SLIAg)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream or Biosystems Technology Stream",
      "zScoreRange": "Peradeniya / Ruhuna / Wayamba / Eastern / Rajarata B.Sc. Agriculture: ~1.25 - 1.55+.",
      "entranceExams": "UGC national university selection based on A/L Z-score.",
      "alternativePathways": [
        "Sri Lanka School of Agriculture (Kundasale, Pelwehera, Angunakolapelessa) 2-Year Higher National Diploma in Agriculture.",
        "Bachelor of Biosystems Technology (BBST) at regional state universities.",
        "Aquinas College Diploma in Agriculture."
      ],
      "competitionNote": "Multiple state university faculties offer over 1,500 seats islandwide, making it very accessible for Bio and Technology stream students."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Agricultural Technology & Management",
        "faculty": "Faculty of Agriculture",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://agri.pdn.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Agricultural Resource Management",
        "faculty": "Faculty of Agriculture (Mapalana)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://agri.ruh.ac.lk"
      },
      {
        "name": "Wayamba University of Sri Lanka",
        "slug": "wayamba",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Agriculture",
        "faculty": "Faculty of Agriculture & Plantation Management",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://fapm.wyb.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Agriculture",
        "timeline": "Age 15–16",
        "description": "Pass O/L with strong credits in Science and Mathematics.",
        "milestone": "O/L Science Pass"
      },
      {
        "step": 2,
        "title": "A/L Bio / Technology Stream",
        "timeline": "Age 17–19",
        "description": "Pass Biology, Chemistry, and Physics or Agriculture/Biosystems Technology.",
        "milestone": "A/L Qualifying Z-Score"
      },
      {
        "step": 3,
        "title": "Undergraduate B.Sc. Agriculture",
        "timeline": "4 Years",
        "description": "Study crop science, soil chemistry, farm mechanization, and complete a residential farm practicum.",
        "milestone": "B.Sc. (Hons) Agriculture Degree"
      },
      {
        "step": 4,
        "title": "Research Officer / Agronomist",
        "timeline": "Years 1–3",
        "description": "Join the Department of Agriculture, a research institute, or a commercial agribusiness enterprise.",
        "milestone": "Certified Professional Agronomist"
      },
      {
        "step": 5,
        "title": "Senior Scientist / Farm Manager",
        "timeline": "Years 4–8",
        "description": "Lead major crop trials, develop commercial hybrid seeds, or manage high-yield export greenhouses.",
        "milestone": "Senior Agricultural Scientist"
      },
      {
        "step": 6,
        "title": "Director of Agriculture / Agri-Tech Entrepreneur",
        "timeline": "Years 8–15+",
        "description": "Direct national agricultural research institutions or build a commercial precision-farming enterprise.",
        "milestone": "Director General / Agri-Tech CEO"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Soil Chemistry & Nutrition Profiling",
          "type": "technical",
          "description": "Analyzing soil NPK, electrical conductivity (EC), pH, and organic matter balances."
        },
        {
          "name": "Protected Agriculture & Hydroponics",
          "type": "technical",
          "description": "Configuring automated greenhouse climate control, fertigation, and substrate management."
        },
        {
          "name": "Integrated Pest Management (IPM)",
          "type": "technical",
          "description": "Controlling insect pests and crop blights using biological controls and minimal chemical inputs."
        }
      ],
      "soft": [
        {
          "name": "Farmer Communication & Empathy",
          "type": "soft",
          "description": "Translating scientific botanical research into practical, clear Sinhala/Tamil instructions for farmers."
        },
        {
          "name": "Experimentation Patience",
          "type": "soft",
          "description": "Patiently waiting for crop seasonal growth cycles to yield statistical field trial data."
        }
      ],
      "importantSchoolSubjects": [
        "Agriculture / Biology",
        "Chemistry",
        "Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Building a home hydroponic or drip-irrigation vegetable plot",
        "Visiting local Department of Agriculture research stations"
      ]
    },
    "suitability": {
      "traits": [
        "You love growing plants and seeing seeds blossom into abundant harvests.",
        "You are motivated by the challenge of feeding people and solving food security.",
        "You enjoy splitting your work between laboratory science and field cultivation."
      ],
      "challenges": [
        "Field research subject to unpredictable monsoon rains, droughts, and pests.",
        "Resistance among traditional farmers toward adopting modern scientific agricultural methods."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I enjoy planting seeds, caring for crops, and watching them grow.",
          "trait": "Green Thumb Passion"
        },
        {
          "question": "I am interested in how technology can make food production cleaner and more efficient.",
          "trait": "Agri-Tech Innovation"
        },
        {
          "question": "I enjoy spending time outdoors in nature and talking with farmers.",
          "trait": "Farmer Connection"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Precision agriculture (IoT soil sensors, drone spraying, automated poly-tunnels) is transforming Sri Lankan farming from traditional manual labor into high-tech, profitable science.",
      "aiImpact": "Computer vision models on smartphones now instantly identify crop leaf diseases and recommend targeted organic solutions within seconds.",
      "growingSpecializations": [
        "Controlled Environment Agriculture (CEA & Vertical Farming)",
        "Genomic Seed Breeding & Climate Resilient Strains",
        "Organic Bio-Fertilizer Formulation",
        "Agri-Robotics & Drone Spraying"
      ],
      "globalDemand": "Global demand for food security specialists across Australia, New Zealand, Canada, and Africa.",
      "challenges": [
        "Adapting Sri Lankan crop cycles to unpredictable monsoon timing caused by global climate change"
      ]
    },
    "relatedCareers": [
      {
        "slug": "tea-plantation-manager",
        "title": "Tea Plantation Manager",
        "category": "Business"
      },
      {
        "slug": "food-scientist",
        "title": "Food Scientist",
        "category": "Education"
      },
      {
        "slug": "environmental-officer",
        "title": "Environmental Officer",
        "category": "Education"
      },
      {
        "slug": "aquaculture-specialist",
        "title": "Aquaculture Specialist",
        "category": "Education"
      }
    ]
  },
  "aquaculture-specialist": {
    "slug": "aquaculture-specialist",
    "title": "Aquaculture Specialist & Seafood Producer",
    "sinhalaTitle": "ජලජීවී වගා විශේෂඥයා",
    "category": "Education",
    "tagline": "Cultivate high-value black tiger prawns, offshore sea bass cages, and export ornamental aquatic species.",
    "heroImage": "/images/careers/aquaculture-specialist.jpg",
    "roleOverview": {
      "whatTheyDo": "Aquaculture specialists breed, rear, and harvest fish, crustaceans, and aquatic plants in controlled freshwater, brackish-water, and marine environments. They operate commercial prawn hatcheries, deep-sea fish cages, tilapia farming ponds, and ornamental fish breeding facilities for high-value export.",
      "whyItMatters": "Wild ocean fisheries are reaching global depletion limits. Aquaculture produces over 50% of the world's seafood. In Sri Lanka, brackish-water shrimp farming in Puttalam and Batticaloa generates over $75 Million in high-margin foreign exchange, while ornamental fish farming supports thousands of rural families.",
      "dailyResponsibilities": [
        "Manage recirculating aquaculture systems (RAS), water oxygenation, bio-filtration, and salinity balances.",
        "Formulate and optimize high-protein aquatic feed schedules for optimal fish and shrimp growth rates.",
        "Diagnose and control viral and bacterial aquatic diseases (White Spot Disease, Vibrio infections).",
        "Supervise artificial breeding, larval hatching, and broodstock genetics in hatchery tanks.",
        "Ensure compliance with international seafood export safety standards (HACCP, EU export approvals)."
      ],
      "workEnvironment": "Coastal shrimp farms, marine sea cage platforms (Trincomalee/Mannar), freshwater fish breeding ponds, and water quality testing laboratories.",
      "lifestyleAndBalance": "Active, waterfront outdoor environment. High commercial independence and exceptional export entrepreneurship potential.",
      "typicalEmployers": [
        "National Aquaculture Development Authority (NAQDA)",
        "Commercial Prawn Export Giants (Taprobane Seafood Group, Oceanpick)",
        "Ornamental Fish Export Farms (Lanka Aquarium)",
        "Private Aquaculture Farm Ownership"
      ],
      "sriLankanSuccessStory": "A graduate from Ocean University of Sri Lanka masters sea-cage aquaculture, joins Oceanpick's offshore Barramundi fish farm in Trincomalee, and advances to Hatchery Director overseeing pristine open-ocean sea bass exports to five-star hotels across Asia."
    },
    "salary": {
      "entryLevel": {
        "min": 85000,
        "max": 135000,
        "label": "LKR 85k – 135k / month"
      },
      "midLevel": {
        "min": 180000,
        "max": 340000,
        "label": "LKR 180k – 340k / month"
      },
      "seniorLevel": {
        "min": 400000,
        "max": 1100000,
        "label": "LKR 400k – 1.1M+ / month"
      },
      "govSector": "NAQDA aquaculture extension and research officers start at LKR 75,000–110,000 + allowances.",
      "privateSector": "Commercial shrimp farm managers and seafood export QA directors earn LKR 200,000–450,000, with enterprise farm owners generating multi-million rupee seasonal harvest profits.",
      "overseasOpportunities": "Very high international demand in Norway, Scotland, Australia, and the Middle East for offshore cage and Recirculating Aquaculture System (RAS) engineers.",
      "factors": [
        "Survival and feed conversion ratios (FCR) of fish/shrimp crops",
        "Water quality and disease prevention mastery",
        "HACCP export certification knowledge"
      ],
      "source": "NAQDA Annual Reports & Seafood Exporters Association of Sri Lanka",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream or Biosystems Technology Stream",
      "zScoreRange": "Ocean University / Ruhuna / Wayamba B.Sc. Aquaculture: ~1.25 - 1.50+.",
      "entranceExams": "UGC national selection or Ocean University direct institutional application.",
      "alternativePathways": [
        "NAQDA National Vocational Qualification (NVQ Level 5) Aquaculture Technician Diploma.",
        "Ocean University of Sri Lanka regional diplomas in Tangalle or Batticaloa.",
        "Direct commercial training at commercial prawn hatcheries."
      ],
      "competitionNote": "A practical, commercially lucrative science path with lower A/L cutoff bars than medicine, but massive earning potential."
    },
    "universities": [
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Fisheries & Marine Sciences",
        "faculty": "Faculty of Fisheries & Marine Sciences",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://fish.ruh.ac.lk"
      },
      {
        "name": "Ocean University of Sri Lanka",
        "slug": "ocean",
        "type": "Government (Maritime)",
        "degreeName": "B.Sc. (Hons) in Aquaculture & Seafood Tech",
        "faculty": "Faculty of Fisheries & Ocean Sciences",
        "duration": "4 Years",
        "accreditation": "UGC / Ministry of Education",
        "websiteUrl": "https://ocu.ac.lk"
      },
      {
        "name": "Wayamba University of Sri Lanka",
        "slug": "wayamba",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Aquaculture & Fisheries",
        "faculty": "Faculty of Livestock, Fisheries & Nutrition",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://flfn.wyb.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Math",
        "timeline": "Age 15–16",
        "description": "Excel in Science and Mathematics, building an understanding of chemistry and biology.",
        "milestone": "O/L Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Bio / Technology",
        "timeline": "Age 17–19",
        "description": "Pass Biology, Chemistry, or Biosystems Technology at A/L.",
        "milestone": "A/L Pass"
      },
      {
        "step": 3,
        "title": "Undergraduate Aquaculture Degree",
        "timeline": "4 Years",
        "description": "Study fish nutrition, aquatic disease management, hatchery engineering, and water chemistry.",
        "milestone": "B.Sc. Aquaculture Degree"
      },
      {
        "step": 4,
        "title": "Farm Supervisor / Hatchery Biologist",
        "timeline": "Years 1–3",
        "description": "Manage water chemistry, shrimp larval stages, and feed schedules on commercial farms.",
        "milestone": "Certified Hatchery Manager"
      },
      {
        "step": 5,
        "title": "Production Manager / Consultant",
        "timeline": "Years 4–8",
        "description": "Lead multi-acre coastal aquaculture projects, oversee seafood cold-chain processing, and meet export compliance.",
        "milestone": "Aquaculture Production Manager"
      },
      {
        "step": 6,
        "title": "Aquaculture Director / Export Entrepreneur",
        "timeline": "Years 8–15+",
        "description": "Direct commercial seafood conglomerates or build an independent high-yield shrimp/fish export enterprise.",
        "milestone": "Aquaculture CEO / Seafood Exporter"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Water Quality Chemistry & Biofiltration",
          "type": "technical",
          "description": "Monitoring dissolved oxygen, ammonia, nitrates, pH, and managing biological filtration."
        },
        {
          "name": "Aquatic Pathology & Biosecurity",
          "type": "technical",
          "description": "Detecting microsporidia, viral white spot, and maintaining strict hatchery quarantine protocols."
        },
        {
          "name": "Feed Formulation & FCR Optimization",
          "type": "technical",
          "description": "Balancing protein, lipids, and vitamins to achieve maximum weight gain per kilogram of feed."
        }
      ],
      "soft": [
        {
          "name": "24/7 Production Vigilance",
          "type": "soft",
          "description": "Remaining alert because a sudden midnight aerator power failure can suffocate an entire pond."
        },
        {
          "name": "Commercial Entrepreneurship",
          "type": "soft",
          "description": "Understanding global seafood pricing, harvest timing, and export customs logistics."
        }
      ],
      "importantSchoolSubjects": [
        "Biology",
        "Chemistry",
        "Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Setting up freshwater aquarium fish breeding at home",
        "Visiting NAQDA research centres and coastal prawn farms"
      ]
    },
    "suitability": {
      "traits": [
        "You love water, fish, marine life, and outdoor waterfront living.",
        "You are commercially minded and want a science career that leads directly to profitable business ownership.",
        "You are attentive and don't mind monitoring pumps and water chemistry carefully."
      ],
      "challenges": [
        "Risk of sudden crop loss if viral disease outbreaks are not contained immediately.",
        "Remote coastal living near lagoons and estuaries away from major urban cities."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would enjoy running a commercial fish or shrimp farm that exports seafood globally.",
          "trait": "Aquaculture Ambition"
        },
        {
          "question": "I am fascinated by how fish and prawns grow and breed in controlled environments.",
          "trait": "Aquatic Biology Interest"
        },
        {
          "question": "I can handle the responsibility of monitoring live animal systems 24/7.",
          "trait": "Operational Vigilance"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Aquaculture is the fastest-growing food production sector in the world. Sri Lanka is expanding offshore marine fish farming (sea bass, pompano) and organic mud crab fattening.",
      "aiImpact": "Underwater cameras powered by AI computer vision now count fish populations, estimate average weight, and trigger automated feeding pellets with zero waste.",
      "growingSpecializations": [
        "Recirculating Aquaculture Systems (RAS - Zero Water Discharge)",
        "Offshore Deep-Water Sea Cage Farming",
        "Ornamental Fish Genetic Breeding",
        "Seaweed & Algae Carbon Farming"
      ],
      "globalDemand": "Huge demand for aquaculture engineers in Australia, Norway, Canada, and Saudi Arabia's mega Red Sea aquaculture projects.",
      "challenges": [
        "Managing coastal lagoon pollution and climate-induced water temperature swings"
      ]
    },
    "relatedCareers": [
      {
        "slug": "marine-biologist",
        "title": "Marine Biologist",
        "category": "Education"
      },
      {
        "slug": "agricultural-scientist",
        "title": "Agricultural Scientist",
        "category": "Education"
      },
      {
        "slug": "food-scientist",
        "title": "Food Scientist",
        "category": "Education"
      },
      {
        "slug": "environmental-officer",
        "title": "Environmental Officer",
        "category": "Education"
      }
    ]
  },
  "environmental-officer": {
    "slug": "environmental-officer",
    "title": "Environmental Officer & ESG Consultant",
    "sinhalaTitle": "පරිසර නිලධාරියා / තිරසාර උපදේශකයා",
    "category": "Education",
    "tagline": "Audit industrial pollution, enforce environmental protection laws, and lead corporate ESG sustainability.",
    "heroImage": "/images/careers/environmental-officer.jpg",
    "roleOverview": {
      "whatTheyDo": "Environmental officers monitor air, water, and soil pollution, ensure industrial compliance with Central Environmental Authority (CEA) regulations, conduct Environmental Impact Assessments (EIAs), and lead corporate Environmental, Social, and Governance (ESG) sustainability initiatives in manufacturing conglomerates.",
      "whyItMatters": "As Sri Lanka industrializes and faces climate vulnerability, environmental officers ensure factories don't poison rivers (like the Kelani River), promote zero-landfill manufacturing, and help Sri Lankan apparel and tea exports meet stringent EU Green Deal standards.",
      "dailyResponsibilities": [
        "Inspect industrial factories, effluent treatment plants (ETP), and emissions chimneys for legal compliance.",
        "Conduct water quality laboratory testing for chemical biological oxygen demand (BOD/COD) and heavy metals.",
        "Calculate corporate greenhouse gas (GHG) carbon footprints and design carbon-neutral roadmaps.",
        "Conduct Environmental Impact Assessments (EIAs) for new highways, power plants, and tourism resorts.",
        "Train factory workers on hazardous chemical handling, waste segregation, and ISO 14001 environmental management."
      ],
      "workEnvironment": "Mix of laboratory testing rooms, government regulatory offices, industrial manufacturing zones (Katunayake, Biyagama EPZ), and field inspection sites.",
      "lifestyleAndBalance": "Regular daytime hours with high social authority and respect. Strong corporate growth as global brands mandate ESG compliance.",
      "typicalEmployers": [
        "Central Environmental Authority (CEA)",
        "Forest Department & Marine Environment Protection Authority (MEPA)",
        "Apparel & Manufacturing Giants (MAS Holdings, Brandix, Hayleys, Hirdaramani)",
        "Environmental Consulting Firms & UN Agencies"
      ],
      "sriLankanSuccessStory": "A graduate in Environmental Science from University of Sri Jayewardenepura joins Brandix as an environmental officer, leads the conversion of their Seeduwa factory into the world's first LEED Platinum certified green apparel plant, and becomes Chief Sustainability Officer."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 120000,
        "label": "LKR 75k – 120k / month"
      },
      "midLevel": {
        "min": 160000,
        "max": 300000,
        "label": "LKR 160k – 300k / month"
      },
      "seniorLevel": {
        "min": 360000,
        "max": 900000,
        "label": "LKR 360k – 900k+ / month"
      },
      "govSector": "CEA and municipal environmental officers start at government technical scales of LKR 70,000–105,000 + allowances.",
      "privateSector": "Corporate sustainability managers in export manufacturing (apparel, tea, rubber) and ESG consulting earn LKR 180,000–450,000, with Group Sustainability Heads exceeding LKR 800,000.",
      "overseasOpportunities": "High international demand in Europe, Australia, Canada, and Singapore for certified carbon auditors, ESG reporting experts, and life-cycle assessment (LCA) specialists.",
      "factors": [
        "ISO 14001 Lead Auditor & LEED certification",
        "Experience with EU Corporate Sustainability Due Diligence Directive (CSDDD)",
        "Industrial chemical effluent treatment mastery"
      ],
      "source": "Central Environmental Authority (CEA) & Institute of Environmental Professionals Sri Lanka (IEPSL)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science, Physical Science, or Biosystems Technology Stream",
      "zScoreRange": "USJ / Colombo / Peradeniya / Kelaniya Environmental Science: ~1.30 - 1.55+.",
      "entranceExams": "UGC national selection based on A/L Z-score.",
      "alternativePathways": [
        "B.Sc. in Environmental Studies at Open University of Sri Lanka (OUSL).",
        "National Institute of Occupational Safety and Health (NIOSH) diplomas.",
        "Engineering degrees with environmental specialization."
      ],
      "competitionNote": "Moderate competition; state university environmental programs are expanding rapidly to meet corporate demand."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Forestry & Environmental Science",
        "faculty": "Faculty of Applied Sciences",
        "duration": "4 Years",
        "accreditation": "UGC / IEPSL",
        "websiteUrl": "https://applied.sjp.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Environmental Science",
        "faculty": "Faculty of Science",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.cmb.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Environmental Science",
        "faculty": "Faculty of Science",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Geography",
        "timeline": "Age 15–16",
        "description": "Pass O/L with credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Pass"
      },
      {
        "step": 2,
        "title": "A/L Science Stream",
        "timeline": "Age 17–19",
        "description": "Pass A/L in Bio Science, Physical Science, or Technology stream.",
        "milestone": "A/L Qualifying Z-Score"
      },
      {
        "step": 3,
        "title": "Undergraduate Environmental Degree",
        "timeline": "4 Years",
        "description": "Study pollution chemistry, ecology, environmental law, and wastewater engineering.",
        "milestone": "B.Sc. Environmental Degree"
      },
      {
        "step": 4,
        "title": "Environmental Officer / Auditor",
        "timeline": "Years 1–3",
        "description": "Join CEA or an industrial manufacturing facility monitoring emissions and compliance.",
        "milestone": "Certified Environmental Officer"
      },
      {
        "step": 5,
        "title": "Sustainability Manager / ESG Consultant",
        "timeline": "Years 4–8",
        "description": "Lead corporate decarbonization, renewable energy integration, and global supply chain audits.",
        "milestone": "Senior Sustainability Manager"
      },
      {
        "step": 6,
        "title": "Chief Sustainability Officer (CSO)",
        "timeline": "Years 8–15+",
        "description": "Direct environmental strategy across multinational conglomerates or lead national environmental policy.",
        "milestone": "Chief Sustainability Officer / CEA Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Effluent & Wastewater Treatment (ETP)",
          "type": "technical",
          "description": "Operating chemical coagulation, dissolved air flotation, and biological activated sludge plants."
        },
        {
          "name": "Carbon Footprinting & GHG Accounting",
          "type": "technical",
          "description": "Calculating Scope 1, 2, and 3 emissions under the GHG Protocol and ISO 14064 standards."
        },
        {
          "name": "Environmental Impact Assessment (EIA)",
          "type": "technical",
          "description": "Conducting multidisciplinary ecological, hydrological, and social baseline impact assessments."
        }
      ],
      "soft": [
        {
          "name": "Regulatory Firmness & Integrity",
          "type": "soft",
          "description": "Upholding strict environmental laws without yielding to commercial or political pressure."
        },
        {
          "name": "Corporate Persuasion",
          "type": "soft",
          "description": "Convincing business directors that investing in green sustainability saves money in the long run."
        }
      ],
      "importantSchoolSubjects": [
        "Chemistry (Environmental & Analytical Chemistry)",
        "Biology",
        "Physics",
        "English"
      ],
      "recommendedProjects": [
        "Conducting a home or school plastic waste audit and recycling drive",
        "Volunteering with beach cleanup groups or river water quality monitoring"
      ]
    },
    "suitability": {
      "traits": [
        "You are deeply concerned about pollution, global warming, and industrial waste.",
        "You want a modern corporate career with strong environmental purpose.",
        "You enjoy analyzing chemical water and air test results scientifically."
      ],
      "challenges": [
        "Encountering resistance from factory owners when issuing non-compliance pollution notices.",
        "Inspecting smelly wastewater treatment plants and chemical storage areas."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am passionate about stopping industrial pollution in rivers and air.",
          "trait": "Environmental Advocacy"
        },
        {
          "question": "I want to help companies make their factories green and sustainable.",
          "trait": "Green Corporate Vision"
        },
        {
          "question": "I have the courage to stand up for environmental rules even when people push back.",
          "trait": "Ethical Integrity"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The European Union's Carbon Border Adjustment Mechanism (CBAM) and Corporate Sustainability Due Diligence Directive (CSDDD) mandate that all Sri Lankan exporters prove zero deforestation, zero toxic wastewater, and carbon reduction.",
      "aiImpact": "IoT chimney sensors and satellite pollution imagery now continuously track real-time factory emissions, creating automated alerts for environmental officers.",
      "growingSpecializations": [
        "Corporate ESG Reporting & GRI Compliance",
        "Carbon Credit Accounting & Offsetting",
        "Circular Economy & Zero Waste Engineering",
        "Industrial Water Reclamation & Zero Liquid Discharge (ZLD)"
      ],
      "globalDemand": "Massive global demand across Europe, Canada, Australia, and Singapore for certified ESG and sustainability leaders.",
      "challenges": [
        "Balancing urgent economic job creation with strict environmental protection"
      ]
    },
    "relatedCareers": [
      {
        "slug": "wildlife-conservationist",
        "title": "Wildlife Conservationist",
        "category": "Education"
      },
      {
        "slug": "engineer",
        "title": "Chartered Engineer",
        "category": "Engineering"
      },
      {
        "slug": "agricultural-scientist",
        "title": "Agricultural Scientist",
        "category": "Education"
      },
      {
        "slug": "marine-biologist",
        "title": "Marine Biologist",
        "category": "Education"
      }
    ]
  },
  "food-scientist": {
    "slug": "food-scientist",
    "title": "Food Scientist & Product Developer",
    "sinhalaTitle": "ආහාර විද්‍යාඥයා / ආහාර තාක්ෂණවේදියා",
    "category": "Education",
    "tagline": "Innovate delicious snack recipes, assure nutritional safety, and direct state-of-the-art food manufacturing lines.",
    "heroImage": "/images/careers/food-scientist.jpg",
    "roleOverview": {
      "whatTheyDo": "Food scientists apply chemistry, microbiology, and process engineering to develop new food and beverage products, extend shelf-life safely, ensure microbiological safety, and design healthy nutritional formulas in modern commercial food factories.",
      "whyItMatters": "From iconic Munchee biscuits and Maliban treats to Ceylon tea drinks, Elephant House ginger beer, and canned tuna, food scientists ensure that millions of packages consumed daily are tasty, nutritious, and 100% free from deadly foodborne pathogens.",
      "dailyResponsibilities": [
        "Formulate and prototype new snack foods, dairy drinks, sauces, and confectionery products in test kitchens.",
        "Perform microbiological testing for salmonella, E. coli, yeasts, and molds in food quality laboratories.",
        "Calibrate food sensory taste panels analyzing flavor notes, texture crunch, mouthfeel, and color stability.",
        "Optimize industrial baking ovens, pasteurizers, spray dryers, and automated packaging lines.",
        "Enforce food safety regulations: SLS standards, ISO 22000, HACCP, and Halal/Kosher certifications."
      ],
      "workEnvironment": "Food product development kitchens, sensory testing labs, cleanroom microbiological laboratories, and high-speed industrial food factories.",
      "lifestyleAndBalance": "Structured, clean, and delicious work environment! Regular corporate hours with tasting sessions as part of daily work.",
      "typicalEmployers": [
        "Ceylon Biscuits Limited (CBL - Munchee)",
        "Maliban Biscuit Manufactories",
        "Nestlé Lanka PLC · Fonterra Brands Lanka",
        "Ceylon Cold Stores (Elephant House / Keells)",
        "Tea and Beverage Exporters (Dilmah, Lion Brewery, Renuka Foods)"
      ],
      "sriLankanSuccessStory": "A food science graduate from University of Sri Jayewardenepura joins CBL (Munchee), leads the research team that invents an export-grade low-glycemic, natural prebiotic biscuit, and advances to Head of Research & Development."
    },
    "salary": {
      "entryLevel": {
        "min": 85000,
        "max": 135000,
        "label": "LKR 85k – 135k / month"
      },
      "midLevel": {
        "min": 170000,
        "max": 320000,
        "label": "LKR 170k – 320k / month"
      },
      "seniorLevel": {
        "min": 400000,
        "max": 1050000,
        "label": "LKR 400k – 1.05M+ / month"
      },
      "govSector": "SLSI (Sri Lanka Standards Institution) and Government Analyst Dept food scientists start at LKR 75,000–110,000 + allowances.",
      "privateSector": "Top private FMCG food and beverage corporations pay competitive compensation, with R&D and QA managers earning LKR 200,000–450,000 and Head of Operations exceeding LKR 900,000.",
      "overseasOpportunities": "Substantial global career prospects in Australia, New Zealand, Canada, and the UK with global food conglomerates (Unilever, Nestlé, Mondelez, Danone).",
      "factors": [
        "New product development (NPD) commercial launch success",
        "HACCP & ISO 22000 Lead Auditor credentials",
        "Sensory science and flavor chemistry expertise"
      ],
      "source": "Institute of Food Science and Technology Sri Lanka (IFSTSL) & FMCG Industry Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream or Physical Science Stream",
      "zScoreRange": "USJ / Peradeniya / Wayamba / Sabaragamuwa Food Science: ~1.40 - 1.65+.",
      "entranceExams": "UGC national selection based on A/L Z-score.",
      "alternativePathways": [
        "B.Tech in Food Process Technology at UNIVOTEC (Ratmalana).",
        "Diplomas in Food Technology from National Institute of Business Management (NIBM).",
        "Sri Lanka Institute of Textile and Apparel (SLITA) or technical college certifications."
      ],
      "competitionNote": "Popular and rewarding science path offering immediate corporate employment in Sri Lanka's resilient FMCG food manufacturing industry."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Food Science & Technology",
        "faculty": "Faculty of Applied Sciences",
        "duration": "4 Years",
        "accreditation": "UGC / IFSTSL",
        "websiteUrl": "https://applied.sjp.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Food Science & Technology",
        "faculty": "Faculty of Agriculture",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://agri.pdn.ac.lk"
      },
      {
        "name": "Wayamba University of Sri Lanka",
        "slug": "wayamba",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Food Science & Nutrition",
        "faculty": "Faculty of Livestock, Fisheries & Nutrition",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://flfn.wyb.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Chemistry",
        "timeline": "Age 15–16",
        "description": "Pass O/L with credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Pass"
      },
      {
        "step": 2,
        "title": "A/L Science Stream",
        "timeline": "Age 17–19",
        "description": "Pass Biology or Maths, Chemistry, and Physics with qualifying Z-scores.",
        "milestone": "A/L Qualifying Z-Score"
      },
      {
        "step": 3,
        "title": "Undergraduate Food Science Degree",
        "timeline": "4 Years",
        "description": "Study food chemistry, microbiology, food preservation, packaging tech, and sensory evaluation.",
        "milestone": "B.Sc. Food Science Degree"
      },
      {
        "step": 4,
        "title": "QA Executive / Food Technologist",
        "timeline": "Years 1–3",
        "description": "Work in commercial factory quality assurance, testing batches, and maintaining SLS standards.",
        "milestone": "Certified Food Quality Auditor"
      },
      {
        "step": 5,
        "title": "R&D Scientist / Brand Developer",
        "timeline": "Years 4–8",
        "description": "Formulate breakthrough new recipes, run sensory consumer trials, and launch successful new supermarket products.",
        "milestone": "Senior R&D Food Scientist"
      },
      {
        "step": 6,
        "title": "Head of R&D / Operations Director",
        "timeline": "Years 8–15+",
        "description": "Direct national product pipelines across food conglomerates or launch a commercial food export brand.",
        "milestone": "Director of R&D / General Manager"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Food Microbiology & Shelf-Life Testing",
          "type": "technical",
          "description": "Culturing food pathogens, calculating microbial lethality curves, and determining safe expiration dates."
        },
        {
          "name": "Sensory Science & Texture Profiling",
          "type": "technical",
          "description": "Conducting blind taste panels, triangle testing, and utilizing rheological texture analyzers."
        },
        {
          "name": "Food Preservation & Retort Processing",
          "type": "technical",
          "description": "Aseptic canning, freeze-drying, modified atmosphere packaging (MAP), and pasteurization."
        }
      ],
      "soft": [
        {
          "name": "Creative Flavor Curiosity",
          "type": "soft",
          "description": "Experimenting fearlessly with culinary ingredients, natural spices, and flavor pairings."
        },
        {
          "name": "Uncompromising Quality Integrity",
          "type": "soft",
          "description": "Refusing to release any food batch that fails microbiological safety, protecting consumers."
        }
      ],
      "importantSchoolSubjects": [
        "Chemistry (Organic Chemistry, Food Macromolecules)",
        "Biology (Microbiology)",
        "Physics",
        "English"
      ],
      "recommendedProjects": [
        "Baking, fermenting bread or yogurt at home and documenting microbial changes",
        "Touring commercial bakeries, dairies, and tea packaging factories"
      ]
    },
    "suitability": {
      "traits": [
        "You are curious about food, cooking, flavors, and how packaged foods are made.",
        "You love applied biology and chemistry where you can actually eat and taste the results.",
        "You are organized, clean, and value hygienic safety."
      ],
      "challenges": [
        "High pressure when managing production lines where spoiled raw ingredients mean millions in losses.",
        "Balancing healthy nutritional ideals with commercial consumer demands for sweetness and fat."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am fascinated by how snacks and drinks are formulated, packaged, and preserved.",
          "trait": "Food Science Curiosity"
        },
        {
          "question": "I have an observant palate and notice subtle differences in food taste and texture.",
          "trait": "Sensory Awareness"
        },
        {
          "question": "I take food safety and hygiene very seriously.",
          "trait": "Hygienic Discipline"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Massive global and local consumer shift toward functional foods (immune-boosting ingredients, prebiotic snacks, low-sugar alternatives, plant-based dairy substitutes).",
      "aiImpact": "AI flavor profiling algorithms and molecular gastrosimulation tools now predict consumer taste preferences and optimize flavor formulations in days rather than months.",
      "growingSpecializations": [
        "Plant-Based Protein & Dairy Alternatives",
        "Functional Foods & Nutraceuticals",
        "Sustainable Biodegradable Food Packaging",
        "Flavors & Fragrance Chemistry"
      ],
      "globalDemand": "Consistently high employment demand in Australia, New Zealand, Canada, and Europe in multinational food giants.",
      "challenges": [
        "Strict international pesticide residue and heavy metal export limits requiring advanced testing"
      ]
    },
    "relatedCareers": [
      {
        "slug": "agricultural-scientist",
        "title": "Agricultural Scientist",
        "category": "Education"
      },
      {
        "slug": "biomedical-scientist",
        "title": "Biomedical Scientist",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      },
      {
        "slug": "tea-plantation-manager",
        "title": "Tea Plantation Manager",
        "category": "Business"
      }
    ]
  },
  "biomedical-scientist": {
    "slug": "biomedical-scientist",
    "title": "Biomedical Scientist & Diagnostic Geneticist",
    "sinhalaTitle": "ජෛව වෛද්‍ය විද්‍යාඥයා",
    "category": "Healthcare",
    "tagline": "Uncover microscopic pathogens, run automated PCR DNA sequencing, and power precision clinical medicine.",
    "heroImage": "/images/careers/biomedical-scientist.jpg",
    "roleOverview": {
      "whatTheyDo": "Biomedical scientists perform advanced diagnostic laboratory tests, analyze human tissue biopsies, run real-time PCR genetic tests, screen for leukemia and blood disorders, and research novel therapeutic treatments in clinical hospital and research laboratories.",
      "whyItMatters": "Over 70% of all medical diagnoses in modern hospitals rely directly on laboratory results provided by biomedical scientists. During pandemics (like COVID-19 or dengue outbreaks), biomedical scientists identify the viral variants, track mutations, and save thousands of lives.",
      "dailyResponsibilities": [
        "Execute molecular genetic diagnostics: DNA extraction, real-time RT-PCR, and next-generation sequencing (NGS).",
        "Analyze full blood counts (FBC), peripheral blood smears, and bone marrow biopsies for blood cancers.",
        "Conduct clinical microbiology cultures to identify antibiotic-resistant superbugs (MRSA).",
        "Operate high-throughput automated biochemical analyzers measuring organ function biomarkers.",
        "Perform cross-matching and antibody screening for urgent hospital blood transfusions."
      ],
      "workEnvironment": "Sterile clinical diagnostic laboratories, molecular biology cleanrooms, automated hospital testing wings, and research institutes (Medical Research Institute - MRI Colombo).",
      "lifestyleAndBalance": "Structured laboratory shifts. Low emotional patient confrontation compared to bedside doctors, with clean, air-conditioned, high-tech instrument surroundings.",
      "typicalEmployers": [
        "Ministry of Health (National Hospital, Teaching Hospitals, MRI Colombo)",
        "Private Hospital Diagnostic Laboratories (Asiri Labs, Lanka Hospitals, Nawaloka)",
        "Specialized Genetic Centers (Asiri Center for Genomic Science)",
        "Research Institutes (National Institute of Infectious Diseases - IDH)"
      ],
      "sriLankanSuccessStory": "A biomedical science graduate from University of Peradeniya joins the Medical Research Institute (MRI), leads national dengue viral serotyping research, and earns a collaborative international fellowship in molecular immunology."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 120000,
        "label": "LKR 75k – 120k / month"
      },
      "midLevel": {
        "min": 160000,
        "max": 280000,
        "label": "LKR 160k – 280k / month"
      },
      "seniorLevel": {
        "min": 350000,
        "max": 800000,
        "label": "LKR 350k – 800k+ / month"
      },
      "govSector": "Government Medical Laboratory Scientists / Research Officers start at ~LKR 70,000–95,000 + allowances, reaching LKR 180,000+ for Senior Technologists.",
      "privateSector": "Private hospital lab chains (Asiri, Nawaloka, Durdans) pay competitive salaries for molecular and histopathology specialists, with Lab Managers and Directors earning LKR 300,000–750,000.",
      "overseasOpportunities": "Huge global demand in the UK NHS (HCPC registered Biomedical Scientists £30k–£55k), Australia (AIMS certified), and Canada, with fast-track medical visas.",
      "factors": [
        "SLMC Registered Medical Laboratory Technologist (MLT) license",
        "Molecular biology and PCR proficiency",
        "Histopathology and cytology biopsy screening experience"
      ],
      "source": "Sri Lanka Medical Laboratory Scientists Association & UK Institute of Biomedical Science (IBMS)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Science, Mathematics, and English.",
      "alStream": "Biological Science Stream (Biology, Chemistry, Physics)",
      "zScoreRange": "State Universities B.Sc. MLS (Colombo, Peradeniya, Ruhuna, USJ, Jaffna): ~1.50 - 1.70+.",
      "entranceExams": "UGC national selection based on A/L Bio Science Z-score.",
      "alternativePathways": [
        "Ministry of Health 2-Year MLT Diploma (Medical Research Institute / Teaching Hospitals).",
        "Non-state B.Sc. Biomedical Science degrees (KDU, BMS, SLIIT, Horizon).",
        "IBMS (UK) accredited degrees via transnational British institutions."
      ],
      "competitionNote": "A premier laboratory science career with high demand across both state and private healthcare networks."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Medical Laboratory Science (MLS)",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.pdn.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Medical Laboratory Science",
        "faculty": "Faculty of Medicine (Allied Health)",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://med.cmb.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Medical Laboratory Science",
        "faculty": "Faculty of Allied Health Sciences",
        "duration": "4 Years",
        "accreditation": "SLMC / UGC",
        "websiteUrl": "https://ahs.ruh.ac.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Semi-Government / Defence",
        "degreeName": "B.Sc. (Hons) in Medical Laboratory Science",
        "faculty": "Faculty of Allied Health Sciences & UHKDU",
        "duration": "4 Years",
        "accreditation": "SLMC Recognized",
        "websiteUrl": "https://kdu.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Science & Biology",
        "timeline": "Age 15–16",
        "description": "Pass O/L with strong credits in Science, Mathematics, and English.",
        "milestone": "O/L Science Credits"
      },
      {
        "step": 2,
        "title": "A/L Bio Science",
        "timeline": "Age 17–19",
        "description": "Excel in Biology and Chemistry with a qualifying Z-score.",
        "milestone": "A/L Qualifying Z-Score"
      },
      {
        "step": 3,
        "title": "Undergraduate B.Sc. MLS Degree",
        "timeline": "4 Years",
        "description": "Study haematology, clinical biochemistry, medical microbiology, histopathology, and molecular genetics.",
        "milestone": "B.Sc. (Hons) MLS Degree"
      },
      {
        "step": 4,
        "title": "SLMC Registration",
        "timeline": "Post-Graduation",
        "description": "Register with the Sri Lanka Medical Council as a Licensed Medical Laboratory Scientist.",
        "milestone": "Registered Biomedical Scientist"
      },
      {
        "step": 5,
        "title": "Diagnostic Specialist",
        "timeline": "Years 1–5",
        "description": "Operate hospital pathology labs, run genetic PCR sequencing, and identify antibiotic resistances.",
        "milestone": "Senior Diagnostic Scientist"
      },
      {
        "step": 6,
        "title": "Laboratory Director / Research Lead",
        "timeline": "Years 6–15+",
        "description": "Direct hospital diagnostic laboratories, lead infectious disease research, or migrate internationally.",
        "milestone": "Chief Laboratory Scientist / Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Molecular Diagnostics & PCR",
          "type": "technical",
          "description": "Executing real-time quantitative PCR, primer design, and genetic mutation detection."
        },
        {
          "name": "Clinical Haematology & Smear Morphology",
          "type": "technical",
          "description": "Differentiating atypical leukocytes, blast cells, leukemia markers, and anemia under oil-immersion microscopy."
        },
        {
          "name": "Automated Biochemistry Automation",
          "type": "technical",
          "description": "Operating automated spectrophotometric analyzers, immunoassays, and quality calibration curves."
        }
      ],
      "soft": [
        {
          "name": "Uncompromising Laboratory Precision",
          "type": "soft",
          "description": "Meticulous sample tracking to ensure no patient specimens are ever swapped or contaminated."
        },
        {
          "name": "Inquisitive Diagnostic Mind",
          "type": "soft",
          "description": "Investigating unusual laboratory anomalies that could indicate rare medical emergencies."
        }
      ],
      "importantSchoolSubjects": [
        "Biology (Cell Biology, Genetics, Microbiology)",
        "Chemistry (Biochemistry)",
        "Physics",
        "English"
      ],
      "recommendedProjects": [
        "Touring medical diagnostic laboratories and blood banks",
        "Attending science exhibitions on DNA and genetics"
      ]
    },
    "suitability": {
      "traits": [
        "You love high-tech lab equipment, microscopes, and genetics.",
        "You want to save lives in healthcare without interacting directly with bedside patient trauma.",
        "You are precise, methodical, and care deeply about scientific accuracy."
      ],
      "challenges": [
        "Working with potentially infectious bodily fluids requiring strict biosafety protocols.",
        "High pressure for fast turnaround times during urgent hospital ICU emergencies."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would love working in a high-tech lab using microscopes and DNA machines.",
          "trait": "Lab Science Passion"
        },
        {
          "question": "I am meticulous about following strict step-by-step scientific protocols.",
          "trait": "Protocol Discipline"
        },
        {
          "question": "I prefer working behind the scenes analyzing data rather than interacting with patients.",
          "trait": "Diagnostic Focus"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Personalized medicine, cancer genetic sequencing, and liquid biopsies are rapidly expanding in Sri Lanka's healthcare sector, creating high demand for molecular diagnostic scientists.",
      "aiImpact": "AI computer vision models now assist in scanning thousands of blood smear microscope fields in seconds, flagging abnormal cancer cells for scientist verification.",
      "growingSpecializations": [
        "Molecular Oncology & Cancer Genetics",
        "Immunology & Flow Cytometry",
        "Infectious Disease Molecular Epidemiology",
        "Assisted Reproductive Technology (Embryology)"
      ],
      "globalDemand": "Extremely high migration demand in the UK (NHS Biomedical Scientist shortage), Australia, and Canada.",
      "challenges": [
        "Keeping pace with rapidly evolving genetic testing technologies and expensive reagents"
      ]
    },
    "relatedCareers": [
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "pharmacist",
        "title": "Pharmacist",
        "category": "Healthcare"
      },
      {
        "slug": "food-scientist",
        "title": "Food Scientist",
        "category": "Education"
      },
      {
        "slug": "physiotherapist",
        "title": "Physiotherapist",
        "category": "Healthcare"
      }
    ]
  },
  "gemologist": {
    "slug": "gemologist",
    "title": "Gemologist & Gemstone Valuer",
    "sinhalaTitle": "මැණික් විද්‍යාඥයා / මැණික් තක්සේරුකරු",
    "category": "Skilled Trades",
    "tagline": "Grade world-famous Ceylon blue sapphires, identify heat-treatments, and unlock millions in Sri Lanka's gemstone trade.",
    "heroImage": "/images/careers/gemologist.jpg",
    "roleOverview": {
      "whatTheyDo": "Gemologists inspect, identify, grade, and scientifically authenticate precious and semi-precious gemstones. Utilizing optical refractometers, polariscopes, spectroscopes, and Raman lasers, they distinguish natural Ceylon sapphires from synthetics, detect heat and beryllium diffusion treatments, and calculate multi-million rupee market valuations.",
      "whyItMatters": "Sri Lanka is known globally as the 'Island of Gems' (Ratna-Dweepa). World-famous treasures like Princess Diana's blue sapphire engagement ring and royal crown jewels originated here. Gemologists protect international buyers from fraud, certify luxury exports, and fuel a multi-million dollar trade centered in Ratnapura and Beruwala.",
      "dailyResponsibilities": [
        "Examine gemstones under gemological stereo-microscopes to identify diagnostic natural inclusions (silk, rutile needles, liquid veils).",
        "Measure refractive index (RI), specific gravity (SG), and pleochroism using precision optical instruments.",
        "Detect artificial thermal enhancement (traditional blowpipe vs electric furnace heat treatment) and color diffusion.",
        "Issue internationally accredited gemstone certification reports (NGJA, GIA, SSEF aligned).",
        "Advise international gemstone traders, high-end jewelers, and auction houses on rough-to-cut valuation."
      ],
      "workEnvironment": "Specialized gem testing laboratories, bustling gem trading hubs (Ratnapura Gem Market, Beruwala China Fort), luxury jewelry ateliers, and international trade fairs (Hong Kong, Tucson, Geneva).",
      "lifestyleAndBalance": "Glamorous, high-value commercial trade. Opportunities to travel to international luxury jewellery hubs, work with million-dollar stones, and build deep commercial networks.",
      "typicalEmployers": [
        "National Gem and Jewellery Authority (NGJA)",
        "International Gem Testing Laboratories (Gubelin, SSEF, GIA, EGL)",
        "High-End Luxury Jewelers (Tijany, Careems, Zam Gems, Colombo Jewellery Stores)",
        "Independent Gemstone Trading & Export Enterprises"
      ],
      "sriLankanSuccessStory": "A geology graduate from University of Peradeniya completes the NGJA Gemology Diploma, opens a private gemological testing laboratory in Beruwala, and becomes an internationally sought-after sapphire treatment authenticator consulting for Swiss auction houses."
    },
    "salary": {
      "entryLevel": {
        "min": 90000,
        "max": 160000,
        "label": "LKR 90k – 160k / month"
      },
      "midLevel": {
        "min": 220000,
        "max": 480000,
        "label": "LKR 220k – 480k / month"
      },
      "seniorLevel": {
        "min": 600000,
        "max": 2500000,
        "label": "LKR 600k – 2.5M+ / month"
      },
      "govSector": "NGJA gemologists and government valuers start at ~LKR 85,000–130,000 + allowances.",
      "privateSector": "Private gem lab authenticators and commercial gem trading valuers earn LKR 200,000–600,000 base + substantial valuation fees and commission percentages on high-value sapphire sales, reaching LKR 2 Million+ monthly.",
      "overseasOpportunities": "Vast demand in Bangkok (Asia's gem trading hub), Dubai, Hong Kong, Antwerp, and New York for certified gemologists (FGA / GG).",
      "factors": [
        "Gemmological Association of Great Britain (FGA) or GIA Graduate Gemologist (GG) credentials",
        "Sharp eye for subtle sapphire color tones (Cornflower Blue, Royal Blue, Padparadscha)",
        "Reputation and credibility in Ratnapura and international gem exchanges"
      ],
      "source": "National Gem and Jewellery Authority (NGJA) & Sri Lanka Gem and Jewellery Association (SLGJA)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics, Science, and English.",
      "alStream": "Physical Science, Bio Science, or ANY A/L Stream (Gemology is accessible to all students with passion for stones).",
      "zScoreRange": "Peradeniya / Moratuwa B.Sc. Geology & Earth Resources: ~1.40 - 1.65+.",
      "entranceExams": "NGJA Diploma selection interviews or direct enrollment in FGA / GIA professional qualification courses.",
      "alternativePathways": [
        "National Gem and Jewellery Authority (NGJA) Diploma in Gemology (Colombo & Ratnapura).",
        "Gemmological Association of Great Britain (FGA) certification conducted in Sri Lanka.",
        "Apprenticeship under master gem cutters and traders in Ratnapura."
      ],
      "competitionNote": "Values visual observation, optical scientific curiosity, and commercial honesty; accessible to students from any academic background."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Geology",
        "faculty": "Faculty of Science (Dept of Geology)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.pdn.ac.lk"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Eng (Hons) in Earth Resources Engineering",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L & Visual Observation",
        "timeline": "Age 15–16",
        "description": "Pass O/L with science and maths. Train your eye on natural mineral crystals.",
        "milestone": "O/L Completion"
      },
      {
        "step": 2,
        "title": "A/L Science / Any Stream",
        "timeline": "Age 17–19",
        "description": "Pass A/L. Develop strong English communication and optical physics interest.",
        "milestone": "A/L Pass"
      },
      {
        "step": 3,
        "title": "Gemology Diploma / Geology Degree",
        "timeline": "2–4 Years",
        "description": "Attain NGJA Diploma in Gemology, FGA (UK), or B.Sc. in Geology at Peradeniya.",
        "milestone": "FGA / NGJA Gemologist Diploma"
      },
      {
        "step": 4,
        "title": "Laboratory Authenticator / Grader",
        "timeline": "Years 1–3",
        "description": "Operate optical refractometers, identify microscopic inclusions, and issue certificate reports.",
        "milestone": "Certified Gemologist"
      },
      {
        "step": 5,
        "title": "Senior Gem Valuer / Trader",
        "timeline": "Years 4–8",
        "description": "Valuate high-value rough sapphires, detect advanced beryllium diffusion, and trade on global gem bourses.",
        "milestone": "Master Gemstone Valuer"
      },
      {
        "step": 6,
        "title": "Chief Gemologist / Jewelry Mogul",
        "timeline": "Years 8–20+",
        "description": "Direct international gemological laboratories or build an internationally acclaimed luxury gemstone export house.",
        "milestone": "Gem Lab Director / Export CEO"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Optical Spectroscopy & Refractometry",
          "type": "technical",
          "description": "Using refractometers and spectroscope absorption lines to identify mineral species accurately."
        },
        {
          "name": "Inclusion Microscopy Analysis",
          "type": "technical",
          "description": "Distinguishing natural inclusions (zircon halos, rutile silk) from synthetic flux or flame fusion bubbles."
        },
        {
          "name": "Color Grading & Valuations",
          "type": "technical",
          "description": "Grading sapphire color purity, saturation (Royal Blue, Padparadscha), clarity, and carat weight."
        }
      ],
      "soft": [
        {
          "name": "Uncompromising Trust & Integrity",
          "type": "soft",
          "description": "Upholding absolute honesty in certification where millions of rupees depend on your opinion."
        },
        {
          "name": "Commercial Negotiation Savvy",
          "type": "soft",
          "description": "Navigating high-stakes, fast-moving gem trading floors with astute financial calculation."
        }
      ],
      "importantSchoolSubjects": [
        "Physics (Optics, Light Refraction, Crystallography)",
        "Chemistry",
        "Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Visiting the Ratnapura Gem Museum and daily morning gem street exchange",
        "Collecting and examining mineral quartz and tourmaline specimens under magnifying loupes"
      ]
    },
    "suitability": {
      "traits": [
        "You are captivated by the sparkling beauty and colors of natural gemstones and crystals.",
        "You have keen eyesight and love examining fine details under microscopes and 10x loupes.",
        "You are commercially astute and excited by high-value international luxury trade."
      ],
      "challenges": [
        "High commercial risk; misidentifying a synthetic stone as natural can cause massive financial losses.",
        "Navigating cutthroat trading markets requiring strong discernment and street-smart negotiation."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am fascinated by jewels, sapphires, and precious mineral crystals.",
          "trait": "Gemological Wonder"
        },
        {
          "question": "I have sharp eyesight and love looking closely at microscopic details.",
          "trait": "Microscopic Focus"
        },
        {
          "question": "I have high integrity and believe trust is the most important asset in business.",
          "trait": "Professional Integrity"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Ethical, traceable, conflict-free gemstones with verifiable origin (Ceylon Sapphires) command record premiums in luxury jewelry markets worldwide.",
      "aiImpact": "Advanced Raman spectroscopy and laser-induced breakdown spectroscopy (LIBS) now provide computerized chemical fingerprints verifying gemstone geological origin.",
      "growingSpecializations": [
        "Padparadscha & Color-Change Sapphire Certification",
        "Advanced Thermal & Irradiation Treatment Detection",
        "Rough Stone Yield Modeling (3D Laser Scanning)",
        "Auction House Jewelry Valuation"
      ],
      "globalDemand": "Unmatched global career portability: Ceylon gemologists are renowned worldwide in Bangkok, Geneva, Hong Kong, and New York.",
      "challenges": [
        "Combating increasingly sophisticated laboratory-grown synthetic sapphires and emeralds"
      ]
    },
    "relatedCareers": [
      {
        "slug": "fashion-designer",
        "title": "Fashion Designer",
        "category": "Creative"
      },
      {
        "slug": "architect",
        "title": "Architect",
        "category": "Creative"
      },
      {
        "slug": "engineer",
        "title": "Chartered Engineer",
        "category": "Engineering"
      },
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      }
    ]
  },
  "accountant": {
    "slug": "accountant",
    "title": "Chartered Accountant (CA / CIMA / ACCA)",
    "sinhalaTitle": "වරලත් ගණකාධිකාරීවරයා",
    "category": "Business",
    "tagline": "Master financial intelligence, direct corporate audits, and guide multi-billion rupee boardroom decisions.",
    "heroImage": "/images/careers/accountant.jpg",
    "roleOverview": {
      "whatTheyDo": "Chartered Accountants analyze financial data, conduct statutory audits, design tax strategies, direct corporate financial reporting, and serve as trusted strategic advisors to CEOs, boardrooms, and regulatory bodies in Sri Lanka and globally.",
      "whyItMatters": "No business operates without financial stewardship. Chartered accountants ensure corporate transparency, protect shareholder capital, optimize corporate tax efficiency, and guide multinational conglomerates (John Keells, Hayleys, MAS, Dialog) through major mergers and acquisitions.",
      "dailyResponsibilities": [
        "Prepare statutory financial statements in compliance with Sri Lanka Accounting Standards (SLFRS/LKAS) and IFRS.",
        "Conduct internal and external audits, forensic financial investigations, and risk assessments.",
        "Formulate annual corporate budgets, financial forecasts, and cost-control mechanisms.",
        "Structure corporate tax planning strategies in line with Inland Revenue Department (IRD) regulations.",
        "Advise executive board directors on capital investments, business acquisitions, and dividend policies."
      ],
      "workEnvironment": "Prestigious corporate headquarters, Big Four audit firms (PwC, KPMG, Ernst & Young, Deloitte), commercial banks, and multinational finance hubs.",
      "lifestyleAndBalance": "High corporate prestige and professional authority. Intense work during quarterly financial closings and audit seasons, balanced by exceptional career advancement speed.",
      "typicalEmployers": [
        "The Big Four Audit Firms (KPMG, PwC, EY, Deloitte)",
        "Premier Conglomerates (John Keells Holdings, Hayleys, Hemas, Aitken Spence)",
        "Banking & Finance Institutions (Commercial Bank, HNB, Sampath, BOC)",
        "Apparel & Tech Multinationals (MAS, Brandix, WSO2, LSEG)"
      ],
      "sriLankanSuccessStory": "A student from Kandy studies A/L Commerce, pursues CA Sri Lanka alongside a B.Sc. in Accounting from USJ, completes audit training at KPMG Colombo, and by age 32 becomes Chief Financial Officer (CFO) of a leading export conglomerate."
    },
    "salary": {
      "entryLevel": {
        "min": 85000,
        "max": 150000,
        "label": "LKR 85k – 150k / month"
      },
      "midLevel": {
        "min": 220000,
        "max": 480000,
        "label": "LKR 220k – 480k / month"
      },
      "seniorLevel": {
        "min": 600000,
        "max": 2000000,
        "label": "LKR 600k – 2.0M+ / month"
      },
      "govSector": "Government Accountants (Sri Lanka Accountants' Service - SLAcS) start at ~LKR 85,000–120,000 + executive allowances, scaling to LKR 220,000+ for Ministry Chief Accountants.",
      "privateSector": "Chartered Accountants in private conglomerates, multinational shared services, and banking earn LKR 250,000–550,000 as Managers, while CFOs, Partners, and Finance Directors earn LKR 800,000 to over 2.5 Million monthly + profit bonuses.",
      "overseasOpportunities": "CA Sri Lanka, CIMA, and ACCA qualifications are globally recognized in the UK, Australia (CPA mutual recognition), Canada, and the Gulf (Dubai, Qatar, Saudi Arabia), earning USD $4,000–$12,000/month tax-free.",
      "factors": [
        "Chartered qualification (ACA / FCMA / FCCA)",
        "Big Four audit firm training pedigree",
        "Experience with ERP systems (SAP, Oracle, NetSuite) and international taxation"
      ],
      "source": "Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) & CIMA Salary Benchmarks",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics and English.",
      "alStream": "Commerce Stream or ANY A/L Stream (Maths, Science, Arts students can freely enter professional accounting).",
      "zScoreRange": "USJ / Colombo / Kelaniya B.Sc. Accounting: ~1.75 - 2.05+ (Highest cutoffs in Commerce stream).",
      "entranceExams": "UGC university selection for state degrees; or direct registration with CA Sri Lanka, CIMA (UK), or ACCA (UK) right after O/L or A/L.",
      "alternativePathways": [
        "Direct registration with CA Sri Lanka (starting from Executive level).",
        "CIMA (Chartered Institute of Management Accountants UK) or ACCA pathways.",
        "AAT Sri Lanka (Association of Accounting Technicians) providing fast-track entry to CA Sri Lanka."
      ],
      "competitionNote": "Multiple pathways to qualify; even students who miss state university entry can become Chartered Accountants via CA Sri Lanka or CIMA."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Accounting",
        "faculty": "Faculty of Management Studies & Commerce",
        "duration": "4 Years",
        "accreditation": "CA Sri Lanka / CIMA / ACCA Accredited",
        "websiteUrl": "https://mgt.sjp.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.B.A. (Hons) in Accounting",
        "faculty": "Faculty of Management & Finance",
        "duration": "4 Years",
        "accreditation": "CA Sri Lanka / CIMA Exemptions",
        "websiteUrl": "https://mgmt.cmb.ac.lk"
      },
      {
        "name": "University of Kelaniya",
        "slug": "kelaniya",
        "type": "Government (UGC)",
        "degreeName": "B.B.M. (Hons) in Accountancy",
        "faculty": "Faculty of Commerce & Management Studies",
        "duration": "4 Years",
        "accreditation": "UGC / CA Sri Lanka",
        "websiteUrl": "https://fcms.kln.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.B.A. (Hons) in Accounting & Finance",
        "faculty": "SLIIT Business School",
        "duration": "4 Years",
        "accreditation": "CIMA / ACCA Aligned",
        "websiteUrl": "https://business.sliit.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Mathematics & Commerce",
        "timeline": "Age 15–16",
        "description": "Attain 'A' passes in Mathematics, English, and Business & Accounting.",
        "milestone": "O/L Distinction in Math"
      },
      {
        "step": 2,
        "title": "A/L Commerce Stream & AAT",
        "timeline": "Age 17–19",
        "description": "Pass A/L Accounting, Economics, and Business Studies (or start AAT/CIMA foundational exams).",
        "milestone": "A/L Commerce Pass / AAT Final"
      },
      {
        "step": 3,
        "title": "Professional Exams (CA / CIMA) & Degree",
        "timeline": "3–4 Years",
        "description": "Pass CA Sri Lanka Executive/Business levels or CIMA strategic level while pursuing an accounting degree.",
        "milestone": "Completion of Professional Exam Levels"
      },
      {
        "step": 4,
        "title": "Big Four Audit Articleship",
        "timeline": "3 Years",
        "description": "Complete mandatory practical training at a certified audit firm (KPMG, PwC, EY, Deloitte).",
        "milestone": "Chartered Accountant (ACA / ACMA)"
      },
      {
        "step": 5,
        "title": "Financial Controller / Audit Manager",
        "timeline": "Years 1–5",
        "description": "Lead financial audits, corporate tax structuring, and management reporting in leading firms.",
        "milestone": "Senior Finance Manager"
      },
      {
        "step": 6,
        "title": "CFO / Audit Partner / Board Director",
        "timeline": "Years 6–15+",
        "description": "Drive corporate mergers, global strategy, and financial leadership as Chief Financial Officer.",
        "milestone": "Chief Financial Officer (CFO) / Partner"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Financial Reporting (SLFRS / IFRS)",
          "type": "technical",
          "description": "Deep mastery of international financial reporting standards and revenue recognition."
        },
        {
          "name": "Corporate Taxation & IRD Compliance",
          "type": "technical",
          "description": "Navigating corporate income tax, VAT, transfer pricing, and RAMIS online tax filing."
        },
        {
          "name": "ERP Systems & Financial Modeling",
          "type": "technical",
          "description": "Advanced financial modeling in Excel, SAP FICO, Oracle ERP, and PowerBI dashboards."
        }
      ],
      "soft": [
        {
          "name": "Uncompromising Ethical Integrity",
          "type": "soft",
          "description": "Refusing to compromise on financial truth and transparency under corporate executive pressure."
        },
        {
          "name": "Executive Boardroom Presence",
          "type": "soft",
          "description": "Presenting complex numbers, risk metrics, and strategic budgets clearly to company directors."
        }
      ],
      "importantSchoolSubjects": [
        "Business & Accounting",
        "Economics",
        "Combined Mathematics / Commercial Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Serving as school commerce society treasurer",
        "Entering national accounting quizzes and CA Sri Lanka student competitions"
      ]
    },
    "suitability": {
      "traits": [
        "You are naturally comfortable with numbers, balance sheets, and financial logic.",
        "You are organized, meticulous, and spot errors that others miss.",
        "You want a rock-solid, highly respected profession that offers a guaranteed fast-track to corporate boardroom leadership."
      ],
      "challenges": [
        "High pressure during quarterly fiscal closings and intense tax filing deadlines.",
        "Rigorous professional exam pass rates requiring disciplined night and weekend study."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I enjoy working with financial calculations, budgets, and investments.",
          "trait": "Financial Analytical"
        },
        {
          "question": "I am meticulous and notice when numbers don't balance correctly.",
          "trait": "Accuracy Discipline"
        },
        {
          "question": "I aspire to become a corporate leader (CFO or Director) in a major company.",
          "trait": "Executive Ambition"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Routine bookkeeping and data entry are automated by AI. Chartered Accountants are evolving into high-level strategic business partners, ESG carbon auditors, and forensic risk advisors.",
      "aiImpact": "AI automation handles invoice reconciliation and routine ledgers instantly, allowing accountants to focus on strategic capital allocation, tax optimization, and business forecasting.",
      "growingSpecializations": [
        "Forensic Accounting & Fraud Investigation",
        "ESG & Corporate Sustainability Auditing",
        "International Cross-Border Taxation",
        "Financial Technology (FinTech) Regulatory Advisory"
      ],
      "globalDemand": "Massive global demand across the UK, Australia, New Zealand, Canada, and the Gulf for qualified Chartered Accountants.",
      "challenges": [
        "Need to master automated data analytics tools (Python, PowerBI, SQL) alongside traditional accounting"
      ]
    },
    "relatedCareers": [
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      },
      {
        "slug": "banker",
        "title": "Banking Officer",
        "category": "Business"
      },
      {
        "slug": "quantity-surveyor",
        "title": "Quantity Surveyor",
        "category": "Business"
      },
      {
        "slug": "lawyer",
        "title": "Lawyer",
        "category": "Legal"
      }
    ]
  },
  "financial-analyst": {
    "slug": "financial-analyst",
    "title": "Financial Analyst & Investment Banker",
    "sinhalaTitle": "මූල්‍ය විශ්ලේෂකයා / ආයෝජන බැංකුකරු",
    "category": "Business",
    "tagline": "Analyze equity stocks, model company valuations, and direct multimillion-dollar investment portfolios.",
    "heroImage": "/images/careers/financial-analyst.jpg",
    "roleOverview": {
      "whatTheyDo": "Financial analysts research macro-economic trends, evaluate company earnings, build discounted cash flow (DCF) valuation models, analyze Colombo Stock Exchange (CSE) equities, and advise pension funds, high-net-worth investors, and corporate investment banks on where to allocate capital.",
      "whyItMatters": "Capital drives all economic expansion. Financial analysts ensure that money flows into the most productive businesses, analyze government treasury bonds, guide sovereign debt restructuring, and help ordinary Sri Lankans grow their savings through mutual funds and stocks.",
      "dailyResponsibilities": [
        "Build dynamic 3-statement financial valuation models in Excel forecasting revenue and cash flows.",
        "Track Colombo Stock Exchange (CSE) equity price movements, corporate earnings, and Central Bank interest rate policies.",
        "Author equity research reports with clear 'Buy / Hold / Sell' recommendations for investors.",
        "Structure corporate initial public offerings (IPOs), debenture issuances, and venture capital deals.",
        "Monitor global commodities (crude oil, gold, tea prices, exchange rates) affecting local corporate profit margins."
      ],
      "workEnvironment": "Fast-paced investment banking offices, trading floors, asset management companies, stockbrokerages, and global financial telemetry centers (LSEG Colombo).",
      "lifestyleAndBalance": "Dynamic, intellectually stimulating, and market-driven. High reward for sharp analytical foresight, with work hours aligned to market trading sessions.",
      "typicalEmployers": [
        "Investment Banks & Brokers (CAL, NDB Capital, Acuity Partners, CT CLSA)",
        "London Stock Exchange Group (LSEG Colombo)",
        "Asset Management Funds (Ceylon Asset Management, Guardian Fund, JB Securities)",
        "Central Bank of Sri Lanka (CBSL) & Commercial Banks"
      ],
      "sriLankanSuccessStory": "A finance graduate from University of Colombo earns the CFA Charter, joins CAL (Capital Alliance) as a junior equity research analyst, accurately predicts banking sector equity rebounds, and advances to Head of Equity Research managing billions in fund allocations."
    },
    "salary": {
      "entryLevel": {
        "min": 110000,
        "max": 190000,
        "label": "LKR 110k – 190k / month"
      },
      "midLevel": {
        "min": 280000,
        "max": 580000,
        "label": "LKR 280k – 580k / month"
      },
      "seniorLevel": {
        "min": 700000,
        "max": 2200000,
        "label": "LKR 700k – 2.2M+ / month"
      },
      "govSector": "Central Bank of Sri Lanka (CBSL Staff Officer Class I) and state investment bodies start at LKR 120,000–165,000 + substantial housing and low-interest loan benefits.",
      "privateSector": "Premier investment banks, asset managers, and LSEG pay fresh analysts LKR 130,000–220,000, with Senior Analysts and Fund Managers earning LKR 500,000–900,000, and Managing Directors exceeding LKR 2 Million + annual deal bonuses.",
      "overseasOpportunities": "Vast global demand for CFA charterholders in Singapore, Dubai (DIFC), London, and New York, earning USD $80,000 to $200,000+ annually.",
      "factors": [
        "Chartered Financial Analyst (CFA) credential",
        "Financial modeling and Bloomberg terminal mastery",
        "Track record of accurate equity recommendations and profitable fund management"
      ],
      "source": "CFA Society Sri Lanka & Colombo Stock Exchange (CSE) Salary Surveys",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics and English.",
      "alStream": "Commerce, Physical Science (Maths), or ANY A/L Stream with high numerical capability.",
      "zScoreRange": "Colombo / USJ / Kelaniya B.Sc. in Finance: ~1.75 - 2.05+.",
      "entranceExams": "UGC university selection; or CFA Program (Levels I, II, III) enrollment upon reaching final year of university or working.",
      "alternativePathways": [
        "Pursue CFA (Chartered Financial Analyst) directly alongside any undergraduate degree.",
        "CIMA (Chartered Institute of Management Accountants UK) with finance specialization.",
        "B.Sc. in Finance at SLIIT, NSBM, or external university programs."
      ],
      "competitionNote": "Highly merit-driven; investment banks care intensely about raw financial modeling capability, critical logic, and market passion."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.B.A. (Hons) in Finance",
        "faculty": "Faculty of Management & Finance (CFA Affiliate)",
        "duration": "4 Years",
        "accreditation": "CFA Institute University Affiliate",
        "websiteUrl": "https://mgmt.cmb.ac.lk"
      },
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Finance",
        "faculty": "Faculty of Management Studies & Commerce",
        "duration": "4 Years",
        "accreditation": "CFA Affiliate / UGC",
        "websiteUrl": "https://mgt.sjp.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.B.A. (Hons) in Business Analytics / Finance",
        "faculty": "SLIIT Business School",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://business.sliit.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Mathematics & Economics",
        "timeline": "Age 15–16",
        "description": "Pass O/L with distinctions in Mathematics and English.",
        "milestone": "O/L Distinction in Math"
      },
      {
        "step": 2,
        "title": "A/L Commerce / Maths",
        "timeline": "Age 17–19",
        "description": "Excel in Economics, Accounting, or Combined Maths. Follow daily Colombo Stock Exchange news.",
        "milestone": "A/L Commerce / Maths Pass"
      },
      {
        "step": 3,
        "title": "Undergraduate Finance Degree",
        "timeline": "3–4 Years",
        "description": "Study corporate finance, portfolio theory, derivatives, and register for CFA Level I.",
        "milestone": "B.Sc. Finance Degree Award"
      },
      {
        "step": 4,
        "title": "Junior Equity / Credit Analyst",
        "timeline": "Years 1–3",
        "description": "Join an investment bank or LSEG building DCF models and publishing equity research.",
        "milestone": "CFA Level I & II Passes"
      },
      {
        "step": 5,
        "title": "Senior Analyst / Portfolio Manager",
        "timeline": "Years 4–8",
        "description": "Manage multi-million rupee mutual funds, structure corporate debt offerings, and pass CFA Level III.",
        "milestone": "Chartered Financial Analyst (CFA) Charter"
      },
      {
        "step": 6,
        "title": "Chief Investment Officer (CIO) / Partner",
        "timeline": "Years 8–15+",
        "description": "Direct overall investment strategy for major asset management firms or manage sovereign investment portfolios.",
        "milestone": "Chief Investment Officer / Managing Director"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Discounted Cash Flow (DCF) Modeling",
          "type": "technical",
          "description": "Forecasting multi-year revenue, WACC, terminal values, and intrinsic share valuations in Excel."
        },
        {
          "name": "Macro-Economic & Central Bank Analysis",
          "type": "technical",
          "description": "Interpreting yield curves, inflation metrics, treasury bill auctions, and exchange rate volatility."
        },
        {
          "name": "Financial Statement Forensic Deconstruction",
          "type": "technical",
          "description": "Analyzing footnotes, cash flow quality, debt covenants, and working capital cycles."
        }
      ],
      "soft": [
        {
          "name": "Intellectual Independence",
          "type": "soft",
          "description": "Thinking contrary to the herd and spotting undervalued investments before the broader market does."
        },
        {
          "name": "Crisp Executive Storytelling",
          "type": "soft",
          "description": "Condensing hundreds of pages of complex balance sheet data into clear 2-page investment theses."
        }
      ],
      "importantSchoolSubjects": [
        "Mathematics",
        "Economics",
        "Business & Accounting",
        "English"
      ],
      "recommendedProjects": [
        "Simulating a mock stock portfolio on the Colombo Stock Exchange (CSE)",
        "Reading annual reports of companies like John Keells, Commercial Bank, and MAS"
      ]
    },
    "suitability": {
      "traits": [
        "You love financial markets, business news, and understanding why companies succeed or fail.",
        "You enjoy building complex spreadsheets, calculating formulas, and working with data.",
        "You thrive in fast-paced, high-stakes environments where intellectual accuracy is rewarded."
      ],
      "challenges": [
        "Volatile market fluctuations that can test your investment thesis and emotional discipline.",
        "Intense, demanding work sprints when closing major corporate capital deals or IPOs."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I follow business news and enjoy learning why companies succeed or go bankrupt.",
          "trait": "Market Curiosity"
        },
        {
          "question": "I am confident building complex spreadsheets and working with financial data.",
          "trait": "Quantitative Comfort"
        },
        {
          "question": "I can stay calm and rational when stock markets fluctuate emotionally.",
          "trait": "Emotional Discipline"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "As Sri Lanka recovers economically, debt restructuring, capital market deepening, and private equity investments are driving record demand for elite financial analysts.",
      "aiImpact": "Algorithmic quantitative trading and AI financial scraping automate data gathering, elevating the analyst's role into qualitative strategic judgment and corporate negotiation.",
      "growingSpecializations": [
        "Quantitative Trading & Algorithmic Finance",
        "ESG & Sustainable Green Bond Structuring",
        "Private Equity & Venture Capital Valuation",
        "Distressed Debt & Corporate Restructuring"
      ],
      "globalDemand": "CFA charterholders enjoy premier global career mobility across Singapore, Dubai, London, and New York.",
      "challenges": [
        "Adapting to rapid changes in global interest rate policies and emerging geopolitical tensions"
      ]
    },
    "relatedCareers": [
      {
        "slug": "accountant",
        "title": "Chartered Accountant",
        "category": "Business"
      },
      {
        "slug": "banker",
        "title": "Banking Officer",
        "category": "Business"
      },
      {
        "slug": "digital-marketer",
        "title": "Digital Marketer",
        "category": "Creative"
      },
      {
        "slug": "software-engineer",
        "title": "Software Engineer",
        "category": "Technology"
      }
    ]
  },
  "banker": {
    "slug": "banker",
    "title": "Commercial & Corporate Banker",
    "sinhalaTitle": "බැංකු නිලධාරියා",
    "category": "Business",
    "tagline": "Fuel Sri Lanka's trade, manage retail and corporate lending, and build a trusted career in commercial banking.",
    "heroImage": "/images/careers/banker.jpg",
    "roleOverview": {
      "whatTheyDo": "Bankers manage financial transactions, evaluate personal and corporate loan applications, provide trade finance (letters of credit) for importers and exporters, manage customer wealth, and uphold Central Bank prudential lending regulations.",
      "whyItMatters": "Banks form the circulatory system of the Sri Lankan economy. Commercial bankers enable entrepreneurs to launch factories, families to buy homes, and tea/garment exporters to finance global trade shipments securely.",
      "dailyResponsibilities": [
        "Evaluate creditworthiness, collateral, and business cash flows for SME and corporate loan facilities.",
        "Process international trade documentation: Letters of Credit (LCs), shipping guarantees, and forex conversions.",
        "Manage customer branch banking, digital banking adoption, and high-net-worth wealth advisory.",
        "Enforce Anti-Money Laundering (AML) and Know Your Customer (KYC) regulatory compliance.",
        "Oversee branch operations, cash balances, ATM networks, and audit reconciliation."
      ],
      "workEnvironment": "Modern air-conditioned bank branch networks, corporate headquarters along Colombo's financial district, and regional business centres.",
      "lifestyleAndBalance": "Prestigious, stable corporate career. Standard daytime banking hours, with evening closures for branch reconciliation.",
      "typicalEmployers": [
        "Leading Commercial Banks (Commercial Bank, HNB, Sampath Bank, Seylan Bank)",
        "State Banking Giants (Bank of Ceylon - BOC, People's Bank, NSB)",
        "International Banks (Standard Chartered, HSBC, Citibank)",
        "Development & Specialized Banks (NDB, DFCC, Pan Asia)"
      ],
      "sriLankanSuccessStory": "A commerce student joins Commercial Bank as an Executive Trainee, passes the Institute of Bankers of Sri Lanka (IBSL) exams, manages credit facilities in a major regional branch, and advances to Chief Operating Officer (COO)."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 125000,
        "label": "LKR 75k – 125k / month"
      },
      "midLevel": {
        "min": 170000,
        "max": 340000,
        "label": "LKR 170k – 340k / month"
      },
      "seniorLevel": {
        "min": 400000,
        "max": 1200000,
        "label": "LKR 400k – 1.2M+ / month"
      },
      "govSector": "State commercial banks (BOC, People's Bank, NSB) offer structured salary scales starting at LKR 70,000–100,000 + exceptional subsidized staff housing loans, medical insurance, and pensions.",
      "privateSector": "Private commercial banks pay LKR 80,000–135,000 for Executive Trainees, LKR 200,000–380,000 for Branch Managers, and LKR 600,000 to over 1.5 Million for Senior Vice Presidents and C-suite executives.",
      "overseasOpportunities": "Opportunities across the Gulf (Dubai, Qatar, Oman) and UK/Australia in retail banking, trade finance, and compliance operations.",
      "factors": [
        "Institute of Bankers of Sri Lanka (IBSL) DBF / AIB certification",
        "Branch deposit mobilization and loan portfolio quality",
        "Corporate and trade finance expertise"
      ],
      "source": "Institute of Bankers of Sri Lanka (IBSL) & Commercial Bank Annual Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics and English.",
      "alStream": "ANY A/L Stream (Commerce, Maths, Arts, Science, or Technology).",
      "zScoreRange": "State University Management degrees: ~1.50 - 1.85+; or direct entry as an Executive Trainee with competitive A/L passes.",
      "entranceExams": "Bank Executive Trainee national competitive examinations and aptitude tests.",
      "alternativePathways": [
        "Institute of Bankers of Sri Lanka (IBSL) Certificate in Banking and Finance (CBF) and Diploma (DBF).",
        "Direct entry as a Banking Associate / Cashier right after A/L.",
        "Degrees in Banking & Finance at state or non-state universities."
      ],
      "competitionNote": "Extremely popular due to high job stability, prestigious banking culture, and exceptional subsidized staff loan privileges."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Banking & Finance",
        "faculty": "Faculty of Management Studies & Commerce",
        "duration": "4 Years",
        "accreditation": "IBSL / UGC",
        "websiteUrl": "https://mgt.sjp.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.B.A. (Hons) in Finance & Banking",
        "faculty": "Faculty of Management & Finance",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://mgmt.cmb.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.B.A. (Hons) in Business Management",
        "faculty": "SLIIT Business School",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://business.sliit.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Mathematics & English",
        "timeline": "Age 15–16",
        "description": "Attain strong credits in Mathematics and English Language.",
        "milestone": "O/L Math Credit Pass"
      },
      {
        "step": 2,
        "title": "A/L Completion & Banking Exams",
        "timeline": "Age 17–19",
        "description": "Pass A/L in any stream. Start IBSL Certificate in Banking and Finance (CBF).",
        "milestone": "A/L Pass & IBSL Enrollment"
      },
      {
        "step": 3,
        "title": "University Degree / Banking Diploma",
        "timeline": "3–4 Years",
        "description": "Complete degree in Banking/Management or complete IBSL Diploma in Banking & Finance (DBF).",
        "milestone": "Degree / DBF Completion"
      },
      {
        "step": 4,
        "title": "Executive Trainee / Banking Officer",
        "timeline": "Years 1–3",
        "description": "Pass bank entrance exams, join a leading commercial bank, and master credit and forex.",
        "milestone": "Confirmed Bank Officer"
      },
      {
        "step": 5,
        "title": "Branch Manager / Credit Head",
        "timeline": "Years 4–8",
        "description": "Lead branch banking operations, manage multi-billion rupee deposit books, and disburse corporate loans.",
        "milestone": "Branch Manager (AVP Level)"
      },
      {
        "step": 6,
        "title": "Vice President / Corporate Banking Head",
        "timeline": "Years 8–18+",
        "description": "Lead nationwide corporate lending, retail banking, or become Managing Director/CEO of a commercial bank.",
        "milestone": "Deputy General Manager / CEO"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Credit Risk & Balance Sheet Appraisal",
          "type": "technical",
          "description": "Assessing borrower financial solvency, debt service coverage ratio (DSCR), and collateral security."
        },
        {
          "name": "Trade Finance & Letters of Credit (LC)",
          "type": "technical",
          "description": "Managing UCP 600 international trade rules, bill discounting, and foreign currency hedging."
        },
        {
          "name": "Banking Regulatory Compliance (CBSL)",
          "type": "technical",
          "description": "Enforcing statutory reserve ratios (SRR), capital adequacy, and anti-money laundering (AML) laws."
        }
      ],
      "soft": [
        {
          "name": "Relationship Building & Trust",
          "type": "soft",
          "description": "Cultivating long-term client trust with retail depositors and major corporate business owners."
        },
        {
          "name": "Negotiation & Persuasion",
          "type": "soft",
          "description": "Structuring mutually profitable loan terms while protecting the bank's capital safety."
        }
      ],
      "importantSchoolSubjects": [
        "Business & Accounting",
        "Economics",
        "Mathematics",
        "English"
      ],
      "recommendedProjects": [
        "Serving as a student banking unit officer at school (e.g., student savings bank)",
        "Participating in financial literacy and commerce day competitions"
      ]
    },
    "suitability": {
      "traits": [
        "You value financial stability, structured corporate culture, and career prestige.",
        "You enjoy interacting with people, analyzing business plans, and managing money.",
        "You are honest, reliable, and have unshakeable ethical standards."
      ],
      "challenges": [
        "Pressure to meet quarterly targets for deposit mobilization and loan disbursement.",
        "Strict personal legal liability for financial negligence or procedural compliance lapses."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I value job security, subsidized home loans, and a structured banking career.",
          "trait": "Stability Preference"
        },
        {
          "question": "I enjoy meeting diverse business owners and understanding their business models.",
          "trait": "Commercial Curiosity"
        },
        {
          "question": "I have high integrity and handle money with absolute honesty.",
          "trait": "Fiduciary Integrity"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Digital banking, automated loan scoring, and QR-based mobile payments (LankaQR) are transforming banking into a high-tech digital advisory service.",
      "aiImpact": "AI automated credit scoring engines evaluate customer creditworthiness in seconds, freeing bankers to focus on relationship banking and complex corporate deals.",
      "growingSpecializations": [
        "Digital Banking & FinTech Partnerships",
        "SME & Green Energy Climate Lending",
        "Treasury & Foreign Exchange Trading",
        "Anti-Money Laundering & Financial Crime Investigation"
      ],
      "globalDemand": "Opportunities across Middle Eastern financial centers (Dubai, Doha, Riyadh) for experienced trade finance and credit risk officers.",
      "challenges": [
        "Adapting to FinTech non-bank competitors and digital micro-lending apps"
      ]
    },
    "relatedCareers": [
      {
        "slug": "accountant",
        "title": "Chartered Accountant",
        "category": "Business"
      },
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      },
      {
        "slug": "hr-manager",
        "title": "HR Manager",
        "category": "Business"
      },
      {
        "slug": "lawyer",
        "title": "Lawyer",
        "category": "Legal"
      }
    ]
  },
  "hr-manager": {
    "slug": "hr-manager",
    "title": "Human Resources Director (HR)",
    "sinhalaTitle": "මානව සම්පත් කළමනාකරු",
    "category": "Business",
    "tagline": "Cultivate top workplace talent, champion organizational culture, and shape employee leadership in top corporations.",
    "heroImage": "/images/careers/hr-manager.jpg",
    "roleOverview": {
      "whatTheyDo": "Human Resources (HR) managers oversee an organization's most valuable asset: its people. They direct talent recruitment, employee training, performance evaluations, executive compensation, labor law compliance, and workplace culture across corporate enterprises.",
      "whyItMatters": "Companies succeed or fail based on their people. In Sri Lanka's massive apparel (MAS, Brandix) and technology (WSO2, IFS) sectors, HR leaders create world-class working conditions, foster gender equity, retain elite talent, and drive corporate profitability.",
      "dailyResponsibilities": [
        "Lead executive recruitment pipelines, talent headhunting, and onboarding programmes.",
        "Design competitive compensation, employee health insurance, and performance bonus structures.",
        "Conduct organizational training, leadership development, and employee upskilling workshops.",
        "Resolve workplace disputes, grievance handling, and enforce Sri Lankan labor law regulations.",
        "Drive workplace diversity, inclusion, mental wellness, and hybrid remote work policies."
      ],
      "workEnvironment": "Modern corporate offices, manufacturing industrial complexes (EPZs), tech innovation campuses, and multinational corporate headquarters.",
      "lifestyleAndBalance": "Balanced corporate lifestyle. People-centric, engaging, and dynamic work with high executive boardroom visibility.",
      "typicalEmployers": [
        "Apparel Manufacturing Giants (MAS Holdings, Brandix, Hirdaramani)",
        "Conglomerates (John Keells Holdings, Hayleys, Hemas)",
        "Telecommunications & Tech (Dialog, SLT-Mobitel, WSO2)",
        "Multinationals (Unilever Sri Lanka, Nestlé, Standard Chartered)"
      ],
      "sriLankanSuccessStory": "A commerce graduate from University of Sri Jayewardenepura completes the CIPM Chartered qualification, joins MAS Holdings as an HR Executive, pioneers progressive female leadership programs, and rises to Chief Human Resources Officer (CHRO)."
    },
    "salary": {
      "entryLevel": {
        "min": 80000,
        "max": 130000,
        "label": "LKR 80k – 130k / month"
      },
      "midLevel": {
        "min": 180000,
        "max": 350000,
        "label": "LKR 180k – 350k / month"
      },
      "seniorLevel": {
        "min": 500000,
        "max": 1400000,
        "label": "LKR 500k – 1.4M+ / month"
      },
      "govSector": "Public sector personnel and administrative service officers start at LKR 75,000–105,000 + allowances.",
      "privateSector": "Premier private conglomerates pay HR Executives LKR 90,000–140,000, HR Managers LKR 220,000–400,000, and Group HR Directors / CHROs LKR 800,000 to over 1.8 Million monthly.",
      "overseasOpportunities": "Opportunities across the Gulf (UAE, Qatar), Singapore, and Australia for certified strategic HR and organizational development leaders.",
      "factors": [
        "Chartered Institute of Personnel Management (CIPM) Chartered status",
        "Mastery of Sri Lankan industrial dispute and labor laws (Shop and Office Act)",
        "Talent analytics and modern digital HR software (Workday, SuccessFactors)"
      ],
      "source": "Chartered Institute of Personnel Management (CIPM) Sri Lanka & Corporate Surveys",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in English and Mathematics.",
      "alStream": "ANY A/L Stream (Commerce, Arts, Science, or Technology).",
      "zScoreRange": "USJ / Colombo / Kelaniya B.Sc. HRM: ~1.60 - 1.90+.",
      "entranceExams": "UGC university selection; or direct enrollment in CIPM professional qualification courses right after O/L or A/L.",
      "alternativePathways": [
        "Chartered Institute of Personnel Management (CIPM) Chartered Qualification in Human Resource Management (CQHRM).",
        "National Institute of Business Management (NIBM) Higher National Diploma in HRM.",
        "Non-state B.Sc. in Human Resource Management (SLIIT, NSBM, Horizon)."
      ],
      "competitionNote": "Multiple flexible pathways; CIPM professional qualifications allow students from any school background to reach senior HR leadership."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Human Resource Management",
        "faculty": "Faculty of Management Studies & Commerce (Pioneer in HRM)",
        "duration": "4 Years",
        "accreditation": "CIPM / UGC",
        "websiteUrl": "https://mgt.sjp.ac.lk"
      },
      {
        "name": "University of Kelaniya",
        "slug": "kelaniya",
        "type": "Government (UGC)",
        "degreeName": "B.B.M. (Hons) in Human Resource Management",
        "faculty": "Faculty of Commerce & Management Studies",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://fcms.kln.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.B.A. (Hons) in Human Capital Management",
        "faculty": "SLIIT Business School",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://business.sliit.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L English & Communication",
        "timeline": "Age 15–16",
        "description": "Excel in English, Social Studies, and school debate/leadership societies.",
        "milestone": "O/L English Distinction"
      },
      {
        "step": 2,
        "title": "A/L Completion & CIPM Entry",
        "timeline": "Age 17–19",
        "description": "Pass A/L in any stream. Start CIPM Certificate / Diploma in HRM.",
        "milestone": "A/L Completion & CIPM Enrollment"
      },
      {
        "step": 3,
        "title": "Undergraduate HRM Degree / CQHRM",
        "timeline": "3–4 Years",
        "description": "Study organizational behavior, labor law, compensation design, and strategic human capital.",
        "milestone": "Degree / CQHRM Completion"
      },
      {
        "step": 4,
        "title": "HR Executive / Talent Specialist",
        "timeline": "Years 1–3",
        "description": "Join a leading company managing employee onboarding, talent sourcing, and welfare initiatives.",
        "milestone": "Chartered Member (CIPM)"
      },
      {
        "step": 5,
        "title": "HR Business Partner (HRBP) / Manager",
        "timeline": "Years 4–8",
        "description": "Align talent strategy with business profit goals, manage industrial relations, and lead retention.",
        "milestone": "Senior HR Manager"
      },
      {
        "step": 6,
        "title": "Chief Human Resources Officer (CHRO)",
        "timeline": "Years 8–15+",
        "description": "Sit on corporate executive boards shaping nationwide organizational culture and leadership succession.",
        "milestone": "Chief Human Resources Officer (CHRO)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Sri Lankan Labor Law & Industrial Relations",
          "type": "technical",
          "description": "Mastery of the Shop and Office Employees Act, Industrial Disputes Act, and EPF/ETF regulations."
        },
        {
          "name": "HR Analytics & Workforce Planning",
          "type": "technical",
          "description": "Analyzing employee retention metrics, cost-per-hire, productivity KPIs, and attrition patterns."
        },
        {
          "name": "Performance & Compensation Structuring",
          "type": "technical",
          "description": "Designing equitable pay grading bands, 360-degree performance appraisals, and executive stock options."
        }
      ],
      "soft": [
        {
          "name": "High Emotional Intelligence (EQ)",
          "type": "soft",
          "description": "Listening empathetically to employee grievances while balancing corporate business objectives."
        },
        {
          "name": "Conflict De-escalation & Mediation",
          "type": "soft",
          "description": "Resolving heated workplace conflicts and labor union negotiations diplomatically and peacefully."
        }
      ],
      "importantSchoolSubjects": [
        "English Language & Literature",
        "Business Studies",
        "Economics",
        "Psychology / Sociology"
      ],
      "recommendedProjects": [
        "Serving as school prefect council head or organizing committee lead",
        "Attending CIPM National HR Conference student sessions"
      ]
    },
    "suitability": {
      "traits": [
        "You are an empathetic 'people person' who loves helping others grow, learn, and succeed.",
        "You are a skilled communicator, natural mediator, and diplomatic listener.",
        "You want a corporate business career that combines psychology, management, and leadership."
      ],
      "challenges": [
        "Handling difficult employee terminations, layoffs, or disciplinary inquiries compassionately yet firmly.",
        "Balancing the competing needs of frontline workers and bottom-line corporate executives."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I enjoy listening to people and helping them resolve personal or team conflicts.",
          "trait": "Empathy & Mediation"
        },
        {
          "question": "I am fascinated by what motivates people to do their best work in teams.",
          "trait": "Organizational Psychology"
        },
        {
          "question": "I can deliver difficult feedback honestly without being cruel or disrespectful.",
          "trait": "Diplomatic Communication"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The transition to hybrid remote work, digital nomadism, and the rise of AI tools make human workplace culture, mental well-being, and talent retention the top corporate priority.",
      "aiImpact": "AI automated resume screening and chatbot HR assistants handle basic queries, allowing HR leaders to focus on employee empathy, culture building, and leadership development.",
      "growingSpecializations": [
        "Employee Experience (EX) & Mental Wellbeing Design",
        "People Analytics & Predictive Retention",
        "Diversity, Equity & Inclusion (DEI) Leadership",
        "Remote & Distributed Team Culture Engineering"
      ],
      "globalDemand": "Growing global demand for strategic People & Culture leaders across multinational enterprises.",
      "challenges": [
        "Managing employee burnout in high-pressure 24/7 digital workplaces"
      ]
    },
    "relatedCareers": [
      {
        "slug": "accountant",
        "title": "Chartered Accountant",
        "category": "Business"
      },
      {
        "slug": "banker",
        "title": "Banking Officer",
        "category": "Business"
      },
      {
        "slug": "hospitality-manager",
        "title": "Hospitality Manager",
        "category": "Hospitality"
      },
      {
        "slug": "lawyer",
        "title": "Lawyer",
        "category": "Legal"
      }
    ]
  },
  "lawyer": {
    "slug": "lawyer",
    "title": "Attorney-at-Law & Legal Counsel",
    "sinhalaTitle": "නීතිඥවරයා / ජනාධිපති නීතිඥවරයා",
    "category": "Legal",
    "tagline": "Champion justice, litigate in the Supreme Court, and structure multi-million-dollar corporate contracts.",
    "heroImage": "/images/careers/lawyer.jpg",
    "roleOverview": {
      "whatTheyDo": "Attorneys-at-Law provide legal counsel, represent clients in civil, criminal, commercial, and appellate courts, draft binding contracts, negotiate corporate mergers, and defend fundamental human rights under the Constitution of Sri Lanka.",
      "whyItMatters": "The rule of law and an independent judiciary are the bedrock of democracy, commerce, and human freedom. In Sri Lanka, lawyers protect citizen liberties, litigate environmental protection writs, and structure foreign direct investments (like Colombo Port City laws).",
      "dailyResponsibilities": [
        "Draft legal pleadings, motions, plaints, affidavits, and appellate briefs for court submission.",
        "Appear before the Supreme Court, Court of Appeal, High Courts, and District Courts advocating for clients.",
        "Review and negotiate commercial contracts, real estate deeds, joint-venture agreements, and IP licensing.",
        "Conduct deep legal research analyzing statutory acts, Supreme Court precedents (NLR / SLR), and English common law.",
        "Advise corporate boards on regulatory compliance, labor disputes, and anti-corruption regulations."
      ],
      "workEnvironment": "Law chambers, judicial courthouses (Hulftsdorp Colombo, District Courts islandwide), corporate law firms, and legal consultation suites.",
      "lifestyleAndBalance": "Intellectually rigorous, articulate, and prestigious. High independence for private practitioners, with intense courtroom debate and late-night case law preparation.",
      "typicalEmployers": [
        "Private Legal Practice & Chambers",
        "Premier Corporate Law Firms (F.J. & G. de Saram, Julius & Creasy, Nithya Partners, Tiruchelvam Associates)",
        "Attorney General's Department (State Counsel / DSG / AG)",
        "Commercial Banks & Corporate In-House Legal Units (Dialog, JKH)"
      ],
      "sriLankanSuccessStory": "A law student graduates with an LL.B from University of Colombo, passes Sri Lanka Law College examinations, apprentices under a senior President's Counsel at Hulftsdorp, establishes a premier commercial litigation chamber, and is appointed President's Counsel (PC)."
    },
    "salary": {
      "entryLevel": {
        "min": 60000,
        "max": 130000,
        "label": "LKR 60k – 130k / month"
      },
      "midLevel": {
        "min": 200000,
        "max": 550000,
        "label": "LKR 200k – 550k / month"
      },
      "seniorLevel": {
        "min": 750000,
        "max": 3500000,
        "label": "LKR 750k – 3.5M+ / month"
      },
      "govSector": "State Counsel at the Attorney General's Department start on gazetted legal executive scales LKR 85,000–120,000 + allowances, reaching LKR 280,000+ for Senior State Counsel.",
      "privateSector": "Corporate legal counsel in conglomerates and banks earn LKR 250,000–600,000. Successful private litigation counsel charge LKR 50,000 to over LKR 300,000 per courtroom appearance, allowing top President's Counsel to earn LKR 2 Million to over 5 Million monthly.",
      "overseasOpportunities": "Opportunities in international commercial arbitration, maritime law, and corporate finance across Singapore, Dubai, London, and human rights bodies (UN, ICC).",
      "factors": [
        "Enrollment as an Attorney-at-Law of the Supreme Court of Sri Lanka",
        "Courtroom trial advocacy reputation and eloquence",
        "Specialization in Commercial, Admiralty, or Intellectual Property Law"
      ],
      "source": "Bar Association of Sri Lanka (BASL) & Legal Profession Benchmark Surveys",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in English and First Language.",
      "alStream": "ANY A/L Stream (Arts, Commerce, Science, Maths, or Technology).",
      "zScoreRange": "University of Colombo / Peradeniya / Jaffna LL.B: ~1.85 - 2.15+ (Highest cutoffs in Arts/Open stream).",
      "entranceExams": "Sri Lanka Law College General Entrance Examination (General Knowledge, Language, Aptitude) or UGC LL.B allocation.",
      "alternativePathways": [
        "Sri Lanka Law College Entrance Examination (direct pathway for A/L graduates from any stream).",
        "KDU Bachelor of Laws (LL.B.) programme.",
        "University of London LL.B. external degree (at Horizon, Royal Institute, CfPS) followed by Law College final exams."
      ],
      "competitionNote": "Highly competitive, but the Law College entrance exam provides an open, fair opportunity for anyone with A/L passes regardless of school Z-score."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Laws (LL.B. Hons)",
        "faculty": "Faculty of Law (Premier State Law School)",
        "duration": "4 Years",
        "accreditation": "Supreme Court / BASL Recognized",
        "websiteUrl": "https://law.cmb.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Laws (LL.B. Hons)",
        "faculty": "Faculty of Arts (Dept of Law)",
        "duration": "4 Years",
        "accreditation": "BASL Recognized",
        "websiteUrl": "https://arts.pdn.ac.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Semi-Government / Defence",
        "degreeName": "Bachelor of Laws (LL.B.)",
        "faculty": "Faculty of Law (Ratmalana)",
        "duration": "4 Years",
        "accreditation": "BASL Recognized",
        "websiteUrl": "https://law.kdu.ac.lk"
      },
      {
        "name": "Horizon Campus",
        "slug": "horizon",
        "type": "Non-State / Private",
        "degreeName": "Bachelor of Laws (LL.B. - University of London)",
        "faculty": "Faculty of Law (Knowledge City Malabe)",
        "duration": "3 Years",
        "accreditation": "University of London Recognized Centre",
        "websiteUrl": "https://horizoncampus.edu.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L English & Logic",
        "timeline": "Age 15–16",
        "description": "Attain distinctions in English and First Language; cultivate reading and public speaking.",
        "milestone": "O/L English Distinction"
      },
      {
        "step": 2,
        "title": "A/L Completion & Law Selection",
        "timeline": "Age 17–19",
        "description": "Pass A/L in any stream. Either achieve a top state LL.B. Z-score or sit the Law College Entrance Exam.",
        "milestone": "A/L Pass / Law College Selection"
      },
      {
        "step": 3,
        "title": "LL.B. Degree / Law College Course",
        "timeline": "3–4 Years",
        "description": "Study constitutional law, criminal law, Roman-Dutch law, contract law, and jurisprudence.",
        "milestone": "LL.B. Degree / Law College Finals"
      },
      {
        "step": 4,
        "title": "Practical Apprenticeship (Devilling)",
        "timeline": "6–12 Months",
        "description": "Serve under an established senior Attorney-at-Law or President's Counsel in court chambers.",
        "milestone": "Supreme Court Bar Enrollment Oath"
      },
      {
        "step": 5,
        "title": "Junior Counsel / Corporate Associate",
        "timeline": "Years 1–5",
        "description": "Draft court plaints, appear in District/Magistrate courts, or structure corporate commercial transactions.",
        "milestone": "Independent Legal Counsel"
      },
      {
        "step": 6,
        "title": "Senior Partner / President's Counsel (PC)",
        "timeline": "Years 6–20+",
        "description": "Lead high-stakes Supreme Court constitutional challenges or head a major corporate law firm.",
        "milestone": "President's Counsel (PC) / Senior Partner"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Constitutional & Roman-Dutch Legal Principles",
          "type": "technical",
          "description": "Deep understanding of Sri Lankan common law, customary laws (Thesawalamai, Kandyan), and statutory interpretation."
        },
        {
          "name": "Courtroom Cross-Examination & Trial Advocacy",
          "type": "technical",
          "description": "Mastering the Art of cross-examining witnesses, introducing evidentiary exhibits, and presenting legal precedents."
        },
        {
          "name": "Commercial Contract Drafting",
          "type": "technical",
          "description": "Drafting airtight commercial clauses, indemnities, dispute resolution mechanics, and non-disclosure agreements."
        }
      ],
      "soft": [
        {
          "name": "Articulate Persuasive Rhetoric",
          "type": "soft",
          "description": "Constructing clear, compelling verbal arguments that persuade judges and juries beyond reasonable doubt."
        },
        {
          "name": "Analytical Critical Scrutiny",
          "type": "soft",
          "description": "Detecting hidden loopholes, conflicting witness statements, and flawed legal reasoning instantaneously."
        }
      ],
      "importantSchoolSubjects": [
        "English Language & Literature",
        "Logic & Scientific Method",
        "Political Science",
        "Sinhala / Tamil / History"
      ],
      "recommendedProjects": [
        "Joining school debating and Model United Nations (MUN) teams",
        "Visiting the Supreme Court and Hulftsdorp court complex to observe real trials"
      ]
    },
    "suitability": {
      "traits": [
        "You love reading, analyzing words, debating ideas, and constructing logical arguments.",
        "You have a strong moral compass and care deeply about justice, fairness, and human rights.",
        "You are fearless and comfortable speaking persuasively in front of judges and crowded courtrooms."
      ],
      "challenges": [
        "Modest initial income during the junior apprenticeship ('devilling') phase before building private clientele.",
        "Stressful adversarial courtroom confrontations and heavy reading workloads."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I love arguing logically, analyzing both sides of an issue, and finding flaws in arguments.",
          "trait": "Debate & Argumentation"
        },
        {
          "question": "I am an avid reader who can digest hundreds of pages of dense text without getting tired.",
          "trait": "Reading Stamina"
        },
        {
          "question": "I feel passionate about standing up for people whose rights are being violated.",
          "trait": "Justice Champion"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Corporate legal practice is booming in Sri Lanka with Port City special economic zone regulations, cross-border intellectual property, foreign direct investments, and commercial dispute arbitration.",
      "aiImpact": "AI legal search engines scan decades of Sri Lanka Law Reports (SLR) in seconds, allowing lawyers to focus on courtroom emotional persuasion, witness strategy, and complex negotiations.",
      "growingSpecializations": [
        "Commercial & Investment Arbitration",
        "Intellectual Property & Technology Law",
        "Admiralty & Maritime Law (Colombo Port Hub)",
        "Environmental Writs & Human Rights Litigation"
      ],
      "globalDemand": "Opportunities in international commercial arbitration centers in Singapore, London, and Dubai for bilingual legal minds.",
      "challenges": [
        "Digital transformation of court filing records moving from paper to e-filing systems"
      ]
    },
    "relatedCareers": [
      {
        "slug": "accountant",
        "title": "Chartered Accountant",
        "category": "Business"
      },
      {
        "slug": "banker",
        "title": "Banking Officer",
        "category": "Business"
      },
      {
        "slug": "hr-manager",
        "title": "HR Manager",
        "category": "Business"
      },
      {
        "slug": "university-lecturer",
        "title": "University Lecturer",
        "category": "Education"
      }
    ]
  },
  "teacher": {
    "slug": "teacher",
    "title": "School Teacher & Education Leader",
    "sinhalaTitle": "ගුරුවරයා / ගුරු උපදේශකයා",
    "category": "Education",
    "tagline": "Inspire the next generation, ignite curious young minds, and shape the human future of Sri Lanka.",
    "heroImage": "/images/careers/teacher.jpg",
    "roleOverview": {
      "whatTheyDo": "School teachers educate children and teenagers across primary, junior secondary, and Advanced Level grades. They create engaging lesson plans, explain complex concepts simply, mentor student character, assess academic progress, and guide extracurricular clubs in government, private, and international schools.",
      "whyItMatters": "Teachers build all other professions. Every doctor, engineer, scientist, and pilot was once inspired by a dedicated school teacher. In Sri Lanka, dedicated teachers in national schools (Royal, Ananda, Visakha, Trinity, St. Thomas') and rural village schools nurture national talent and social mobility.",
      "dailyResponsibilities": [
        "Deliver creative, interactive classroom lessons in line with the national curriculum.",
        "Design assignments, grade examination papers, and provide constructive academic feedback.",
        "Identify learning difficulties and provide remedial support to struggling students.",
        "Direct student extracurricular societies: drama, debating, science clubs, and school sports.",
        "Communicate with parents regarding student academic progress and emotional wellbeing."
      ],
      "workEnvironment": "Vibrant school classrooms, science laboratories, computer rooms, and school assembly halls. Energetic and lively youthful surroundings.",
      "lifestyleAndBalance": "Predictable school hours (7:30 AM to 1:30 PM), full school holidays (August, December, April vacations), high family-friendly work-life balance, and profound social honor.",
      "typicalEmployers": [
        "Ministry of Education (National & Provincial Government Schools)",
        "National Colleges of Education (NCOE - Vidya Pitha)",
        "Private & Semi-Government Schools (St. Thomas', Trinity, Ladies' College)",
        "Leading International Schools (Gateway, Lyceum, Colombo International School)"
      ],
      "sriLankanSuccessStory": "An A/L science student enters the National College of Education (NCOE - Pasdunrata), becomes a teacher in a rural Hambantota school, introduces fun visual science experiments, coaches the school debate team to a national championship, and rises to Principal of a premier national school."
    },
    "salary": {
      "entryLevel": {
        "min": 60000,
        "max": 90000,
        "label": "LKR 60k – 90k / month"
      },
      "midLevel": {
        "min": 110000,
        "max": 185000,
        "label": "LKR 110k – 185k / month"
      },
      "seniorLevel": {
        "min": 240000,
        "max": 500000,
        "label": "LKR 240k – 500k+ / month"
      },
      "govSector": "Sri Lanka Teachers' Service (SLTS) Grade III starts at ~LKR 55,000–75,000 + allowances, progressing to Grade I (~LKR 120,000) and Principal Service (SLPS) scales exceeding LKR 180,000 + pension.",
      "privateSector": "Premier private and international schools pay LKR 75,000–160,000 for subject teachers and over LKR 300,000 for Sectional Heads and Vice Principals.",
      "overseasOpportunities": "Supplementary income through private and group tuition classes commonly generates LKR 150,000 to over LKR 800,000 monthly for reputed A/L and O/L subject masters in Sri Lanka. Teaching opportunities in the Maldives, Middle East, and UK (shortage subjects: Maths/Science).",
      "factors": [
        "Subject specialization (A/L Combined Maths, Physics, Chemistry, English command premium)",
        "B.Ed. or Postgraduate Diploma in Education (PGDE)",
        "Reputation and pass-rate of student batches"
      ],
      "source": "Ministry of Education Sri Lanka (SLTS Gazettes) & International School Salary Scales",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics, English, and First Language.",
      "alStream": "ANY A/L Stream relevant to the teaching subject (Science, Maths, Commerce, Arts, or Technology).",
      "zScoreRange": "State University B.Ed. degrees: ~1.20 - 1.50+; NCOE (Vidya Pitha) selection: competitive district A/L passes.",
      "entranceExams": "National College of Education (NCOE) islandwide selection exam and interview.",
      "alternativePathways": [
        "National Colleges of Education (NCOE - 3-Year Teacher Training Diploma with full state boarding allowance).",
        "Bachelor of Education (B.Ed. Hons) at Open University of Sri Lanka (OUSL), Horizon Campus, or University of Colombo.",
        "Direct teaching in international schools with any recognized subject bachelor's degree followed by a PGDE."
      ],
      "competitionNote": "NCOE admissions are very competitive due to direct permanent government teacher appointment upon graduation."
    },
    "universities": [
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Education (B.Ed. Hons)",
        "faculty": "Faculty of Education (Sole State University Faculty of Education)",
        "duration": "4 Years",
        "accreditation": "Ministry of Education Recognized",
        "websiteUrl": "https://edu.cmb.ac.lk"
      },
      {
        "name": "The Open University of Sri Lanka",
        "slug": "ousl",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Education (B.Ed.)",
        "faculty": "Faculty of Education (Nawala)",
        "duration": "4 Years",
        "accreditation": "UGC / Distance Education",
        "websiteUrl": "https://ou.ac.lk"
      },
      {
        "name": "Horizon Campus",
        "slug": "horizon",
        "type": "Non-State / Private",
        "degreeName": "B.Ed. (Hons) in English / Science / Primary",
        "faculty": "Faculty of Education (Knowledge City Malabe)",
        "duration": "4 Years",
        "accreditation": "UGC Approved / IFSLS Loan Eligible",
        "websiteUrl": "https://horizoncampus.edu.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Broad Foundation",
        "timeline": "Age 15–16",
        "description": "Attain strong credits across languages, science, and mathematics.",
        "milestone": "O/L Pass with Credits"
      },
      {
        "step": 2,
        "title": "A/L Subject Specialization",
        "timeline": "Age 17–19",
        "description": "Excel in your chosen A/L stream (Science, Maths, Commerce, or Arts) to master subject depth.",
        "milestone": "A/L Success"
      },
      {
        "step": 3,
        "title": "NCOE Diploma / B.Ed. Degree",
        "timeline": "3–4 Years",
        "description": "Complete teacher pedagogy, child psychology, curriculum design, and classroom practicum.",
        "milestone": "NCOE Diploma / B.Ed. Degree Award"
      },
      {
        "step": 4,
        "title": "Teacher Appointment",
        "timeline": "Year 1",
        "description": "Receive formal government or private school appointment and take charge of your first classroom.",
        "milestone": "Confirmed School Teacher"
      },
      {
        "step": 5,
        "title": "Senior Teacher / Subject Master",
        "timeline": "Years 3–8",
        "description": "Train student cohorts to achieve top island rankings at O/L or A/L, and earn a PGDE.",
        "milestone": "Grade I Teacher / Subject Coordinator"
      },
      {
        "step": 6,
        "title": "School Principal / Director of Education",
        "timeline": "Years 8–20+",
        "description": "Pass the Sri Lanka Principals' Service (SLPS) exam to head a major national school or lead educational policy.",
        "milestone": "National School Principal"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Pedagogy & Interactive Lesson Design",
          "type": "technical",
          "description": "Structuring lessons that cater to diverse visual, auditory, and kinesthetic learning styles."
        },
        {
          "name": "Classroom Management & Engagement",
          "type": "technical",
          "description": "Maintaining a disciplined, respectful, and joyful learning atmosphere with 40+ energetic students."
        },
        {
          "name": "Formative Assessment & Exam Strategy",
          "type": "technical",
          "description": "Designing diagnostic quizzes and training students in high-scoring past-paper examination techniques."
        }
      ],
      "soft": [
        {
          "name": "Infinite Patience & Encouragement",
          "type": "soft",
          "description": "Believing in struggling students when they have lost faith in their own capabilities."
        },
        {
          "name": "Charismatic Storytelling & Energy",
          "type": "soft",
          "description": "Making even the driest mathematical formula or historical date feel exciting and memorable."
        }
      ],
      "importantSchoolSubjects": [
        "Your chosen teaching subject (Maths, Science, Commerce, Arts, English)",
        "First Language",
        "General Science"
      ],
      "recommendedProjects": [
        "Tutoring younger siblings or neighbors in difficult school subjects",
        "Volunteering with Sunday school (Daham Pasala) or youth reading clubs"
      ]
    },
    "suitability": {
      "traits": [
        "You love explaining things to people and feel pure joy when someone's eyes light up understanding a concept.",
        "You enjoy the energetic company of children, teenagers, and young minds.",
        "You value school holidays, family work-life balance, and making a lasting human impact."
      ],
      "challenges": [
        "Managing occasional unruly students or demanding parents.",
        "Grading stacks of term-test exam papers and administrative recordkeeping."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I feel immense satisfaction when I explain a difficult concept and someone finally understands it.",
          "trait": "Teaching Joy"
        },
        {
          "question": "I have the patience to repeat an explanation five different ways without getting annoyed.",
          "trait": "Pedagogical Patience"
        },
        {
          "question": "I value having generous school holidays to spend time with family and pursue hobbies.",
          "trait": "Lifestyle Balance Fit"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Interactive digital smart boards, blended online learning, and bilingual English-medium education are expanding across Sri Lankan schools.",
      "aiImpact": "AI automates routine grading and lesson worksheet creation, allowing teachers to focus entirely on human mentorship, empathy, character building, and critical thinking.",
      "growingSpecializations": [
        "Special Needs & Inclusive Education (SEN)",
        "STEM & Robotics School Education",
        "English Language Teaching (ELT)",
        "Digital EdTech Curriculum Integration"
      ],
      "globalDemand": "Global shortage of qualified Science, Mathematics, and Special Education teachers in the UK, Australia, and New Zealand.",
      "challenges": [
        "Modernizing the exam-centric rote-learning culture into creative problem solving"
      ]
    },
    "relatedCareers": [
      {
        "slug": "university-lecturer",
        "title": "University Lecturer",
        "category": "Education"
      },
      {
        "slug": "hr-manager",
        "title": "HR Manager",
        "category": "Business"
      },
      {
        "slug": "wildlife-conservationist",
        "title": "Wildlife Conservationist",
        "category": "Education"
      },
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      }
    ]
  },
  "university-lecturer": {
    "slug": "university-lecturer",
    "title": "University Lecturer & Professor",
    "sinhalaTitle": "විශ්වවිද්‍යාල ආචාර්යවරයා / මහාචාර්යවරයා",
    "category": "Education",
    "tagline": "Pioneer groundbreaking scientific research, mentor elite undergraduates, and command supreme academic honor.",
    "heroImage": "/images/careers/university-lecturer.jpg",
    "roleOverview": {
      "whatTheyDo": "University lecturers teach undergraduate and postgraduate degree courses, conduct pioneering academic research, author peer-reviewed scholarly papers, secure international research grants, and mentor the next generation of engineers, doctors, scientists, and business leaders.",
      "whyItMatters": "Universities are the intellectual brain trust of a country. University professors at Sri Lanka's 17 state universities discover new medical treatments, design national engineering standards, advise government economic committees, and place Sri Lanka on the global academic map.",
      "dailyResponsibilities": [
        "Deliver university lecture courses, laboratory practicums, and advanced postgraduate seminars.",
        "Supervise undergraduate final-year research dissertations and postgraduate M.Phil / Ph.D. candidates.",
        "Design and grade semester examinations, continuous assessments, and curriculum syllabi.",
        "Author scholarly papers for high-impact international journals (Elsevier, Springer, IEEE, Nature).",
        "Serve on national university senate committees, editorial boards, and government advisory panels."
      ],
      "workEnvironment": "Picturesque university campus quadrangles, advanced faculty research laboratories, academic libraries, and international academic conference halls.",
      "lifestyleAndBalance": "High intellectual freedom, immense societal respect, flexible scheduling around teaching timetables, and periodic overseas sabbatical research leave.",
      "typicalEmployers": [
        "17 National State Universities (Colombo, Peradeniya, Moratuwa, Ruhuna, USJ, Kelaniya, etc.)",
        "Specialized & Defence Universities (KDU, Ocean University, UNIVOTEC)",
        "Premier Non-State Universities (SLIIT, NSBM, SLTC, Horizon, IIT)",
        "International Universities across Europe, Australia, and North America"
      ],
      "sriLankanSuccessStory": "A student graduates with First-Class Honours in Engineering from University of Moratuwa, joins as a Temporary Lecturer, earns a fully funded Commonwealth PhD scholarship to the University of Cambridge, returns to Moratuwa as Senior Lecturer, and becomes a globally cited Professor of Artificial Intelligence."
    },
    "salary": {
      "entryLevel": {
        "min": 120000,
        "max": 185000,
        "label": "LKR 120k – 185k / month"
      },
      "midLevel": {
        "min": 280000,
        "max": 480000,
        "label": "LKR 280k – 480k / month"
      },
      "seniorLevel": {
        "min": 520000,
        "max": 1200000,
        "label": "LKR 520k – 1.2M+ / month"
      },
      "govSector": "State University Lecturers (Probationary) start at ~LKR 115,000–160,000 including Academic Allowance (MCA) and research allowances. Senior Lecturer Grade I and Chairs of Professor receive consolidated scales up to LKR 400,000–650,000 basic + allowances, duty-free vehicle permits (when active), and academic sabbatical rights.",
      "privateSector": "Premier non-state universities pay competitive market packages for senior faculty and Deans, ranging from LKR 250,000–600,000+.",
      "overseasOpportunities": "Sabbatical leave and visiting professorships at international universities (UK, Australia, US, Singapore) pay USD $6,000 to $15,000/month, alongside lucrative corporate consultancy contracts.",
      "factors": [
        "Doctorate (Ph.D. / D.Phil) credential from a world top-tier university",
        "Citation index (H-index) and high-impact journal publications",
        "External corporate consultancy and patent commercialization"
      ],
      "source": "University Grants Commission (UGC Sri Lanka Circulars) & FUTA Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Distinction passes at O/L in Mathematics, English, and First Language.",
      "alStream": "ANY A/L Stream with high academic excellence.",
      "zScoreRange": "Competitive university entry; followed by a First-Class Honours or Second-Class Upper Division degree.",
      "entranceExams": "Rigorous university faculty board interviews based on academic transcripts and publications.",
      "alternativePathways": [
        "Achieve a First-Class Honours degree in a non-state university and pursue a foreign Master's/Ph.D.",
        "Transition into academia after a distinguished industry research career with patents."
      ],
      "competitionNote": "Very high academic bar: probationary lecturer posts strictly mandate a First-Class or Upper-Second Honours degree, with subsequent confirmation requiring an earned Ph.D."
    },
    "universities": [
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. / BA Honours (First Class Route)",
        "faculty": "All 9 Faculties",
        "duration": "4 Years (First Degree) + Ph.D.",
        "accreditation": "UGC National State University",
        "websiteUrl": "https://www.pdn.ac.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. / B.B.A. / MBBS Honours",
        "faculty": "All Faculties",
        "duration": "4–5 Years + Postgraduate",
        "accreditation": "UGC National State University",
        "websiteUrl": "https://cmb.ac.lk"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. Eng (Hons) (First Class Route)",
        "faculty": "Faculty of Engineering / Architecture / IT",
        "duration": "4 Years + Ph.D.",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "Academic School Excellence",
        "timeline": "Age 15–16",
        "description": "Excel academically at O/L with top distinction grades across all subjects.",
        "milestone": "Top O/L Distinction Record"
      },
      {
        "step": 2,
        "title": "A/L Top Z-Score",
        "timeline": "Age 17–19",
        "description": "Attain a high district Z-score securing admission to your dream university faculty.",
        "milestone": "A/L State University Selection"
      },
      {
        "step": 3,
        "title": "First-Class Honours Degree",
        "timeline": "4 Years",
        "description": "Rank at the top of your undergraduate batch, achieving First-Class Honours (GPA > 3.70).",
        "milestone": "First-Class Honours Degree"
      },
      {
        "step": 4,
        "title": "Temporary Lecturer / Research Assistant",
        "timeline": "Years 1–2",
        "description": "Join the university department, teach tutorial classes, and publish your first research paper.",
        "milestone": "Probationary Lecturer Appointment"
      },
      {
        "step": 5,
        "title": "Earn Ph.D. on Overseas Scholarship",
        "timeline": "Years 3–7",
        "description": "Secure a funded doctoral scholarship (Commonwealth, Fulbright, DAAD) and earn your doctorate abroad.",
        "milestone": "Doctor of Philosophy (Ph.D.) Conferment"
      },
      {
        "step": 6,
        "title": "Senior Lecturer to Professor & Chair",
        "timeline": "Years 8–20+",
        "description": "Return to Sri Lanka as Senior Lecturer, produce world-renowned research, and achieve Chair of Professor.",
        "milestone": "Full Professor / Dean / Vice-Chancellor"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Advanced Scientific Research Methodology",
          "type": "technical",
          "description": "Formulating novel hypotheses, experimental design, statistical modeling, and data synthesis."
        },
        {
          "name": "Scholarly Authoring & Peer Review",
          "type": "technical",
          "description": "Writing rigorously cited academic manuscripts for high-impact international journals."
        },
        {
          "name": "Grant Writing & Research Fundraising",
          "type": "technical",
          "description": "Securing international research funding from NSF, NRC, and global scientific foundations."
        }
      ],
      "soft": [
        {
          "name": "Inspiring Oratory & Lecturing",
          "type": "soft",
          "description": "Commanding the attention of 300+ undergraduates in vast university lecture amphitheatres."
        },
        {
          "name": "Mentorship & Academic Nurturing",
          "type": "soft",
          "description": "Guiding young students through intellectual hurdles, thesis writing, and career choices."
        }
      ],
      "importantSchoolSubjects": [
        "Your chosen academic discipline",
        "English Language (vital for scholarly writing)",
        "Logic & Research Statistics"
      ],
      "recommendedProjects": [
        "Writing independent scientific essays and submitting to school science journals",
        "Achieving top national medals in Chemistry, Biology, or Physics Olympiads"
      ]
    },
    "suitability": {
      "traits": [
        "You have an insatiable intellectual curiosity and love diving deeply into theories and books.",
        "You want a career of supreme social honor, intellectual freedom, and scholarly discovery.",
        "You are patient, self-directed, and enjoy lifelong research."
      ],
      "challenges": [
        "Rigorous academic competition; only 1–2 top graduates per batch are recruited as probationary lecturers.",
        "The demanding multi-year commitment required to research and defend a Ph.D. dissertation."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I would love to be called 'Dr.' or 'Professor' and spend my life discovering new knowledge.",
          "trait": "Scholarly Aspiration"
        },
        {
          "question": "I enjoy reading complex academic research papers and learning theories deeply.",
          "trait": "Intellectual Curiosity"
        },
        {
          "question": "I have the discipline to study and research independently for years without supervision.",
          "trait": "Autonomous Scholarly Drive"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Sri Lanka's university system is expanding postgraduate research programs and industry-collaborative incubators to commercialize national inventions.",
      "aiImpact": "AI literature review tools and automated data analytics accelerate research discovery, elevating professors into thought leaders, ethical philosophers, and interdisciplinary synthesizers.",
      "growingSpecializations": [
        "Artificial Intelligence & Machine Learning Research",
        "Renewable Energy & Battery Chemistry",
        "Biomedical Genomics & Tropical Disease Immunology",
        "Development Economics & Public Policy"
      ],
      "globalDemand": "Distinguished academics are universally mobile, easily securing visiting professorships worldwide.",
      "challenges": [
        "Brain drain of young academic talent requiring improved local research funding"
      ]
    },
    "relatedCareers": [
      {
        "slug": "teacher",
        "title": "School Teacher",
        "category": "Education"
      },
      {
        "slug": "engineer",
        "title": "Chartered Engineer",
        "category": "Engineering"
      },
      {
        "slug": "doctor",
        "title": "Medical Doctor",
        "category": "Healthcare"
      },
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      }
    ]
  },
  "hospitality-manager": {
    "slug": "hospitality-manager",
    "title": "General Manager - Luxury Resorts",
    "sinhalaTitle": "හෝටල් හා සංචාරක කළමනාකරු",
    "category": "Hospitality",
    "tagline": "Direct world-renowned luxury resort destinations, curate bespoke guest experiences, and lead Sri Lanka's tourism economy.",
    "heroImage": "/images/careers/hospitality-manager.jpg",
    "roleOverview": {
      "whatTheyDo": "Hospitality managers oversee all operations of luxury hotels, beachfront resorts, eco-lodges, and fine-dining restaurants. They direct guest relations, food and beverage operations, housekeeping, resort marketing, revenue management, and lead hundreds of service staff.",
      "whyItMatters": "Tourism is Sri Lanka's third-largest foreign currency earner, bringing in billions of dollars and showcasing our world-famous hospitality. Resort general managers ensure international guests (from Europe, Asia, Americas) experience the very best of Sri Lanka's culture, cuisine, and nature.",
      "dailyResponsibilities": [
        "Direct hotel departments: Front Office, Food & Beverage (F&B), Housekeeping, Spa, and Engineering.",
        "Greet VIP guests, ambassadors, and international celebrities, ensuring flawless bespoke hospitality.",
        "Optimize resort revenue management: seasonal room pricing, occupancy rates, and global OTA listings (Booking.com, Agoda).",
        "Ensure five-star culinary standards across fine-dining restaurants and banquet halls.",
        "Manage hotel budgets, cost of sales, staff training, and eco-sustainability certifications."
      ],
      "workEnvironment": "Breathtaking beachfront resort properties (Bentota, Tangalle, Pasikudah), heritage colonial tea bungalows (Hatton), and luxury five-star city hotels (Colombo).",
      "lifestyleAndBalance": "Glamorous, social, and dynamic environment. High luxury resort living perks, excellent international networking, and global hospitality mobility.",
      "typicalEmployers": [
        "Premier Sri Lankan Hotel Chains (Jetwing Hotels, Cinnamon Hotels & Resorts, Aitken Spence)",
        "Luxury Boutique Collections (Resplendent Ceylon - Ceylon Tea Trails, Cape Weligama)",
        "International 5-Star Hotel Brands (Shangri-La, Anantara, Marriott, Hilton Colombo)",
        "International Luxury Resorts across the Maldives, Seychelles, and Dubai"
      ],
      "sriLankanSuccessStory": "A student completes the SLITHM 3-year Management Diploma, trains as a management trainee at Jetwing Vil Uyana, masters luxury eco-hospitality, and becomes General Manager of a premier beachfront resort in Mirissa at age 33."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 130000,
        "label": "LKR 75k – 130k / mo + Service Charge"
      },
      "midLevel": {
        "min": 200000,
        "max": 420000,
        "label": "LKR 200k – 420k / mo + SC + Accommodation"
      },
      "seniorLevel": {
        "min": 600000,
        "max": 2200000,
        "label": "LKR 600k – 2.2M+ / mo + Expat Perks"
      },
      "govSector": "Sri Lanka Tourism Development Authority (SLTDA) and SLITHM management roles start at LKR 80,000–120,000 + allowances.",
      "privateSector": "Base salary + monthly Service Charge distribution (which adds LKR 40,000–120,000 extra during peak tourist season) + free full-board luxury resort accommodation. Resort GMs earn LKR 800,000 to over 2 Million monthly.",
      "overseasOpportunities": "Vast demand in the Maldives (where thousands of Sri Lankan hoteliers work in USD-earning resort roles), Dubai, Qatar, and cruise lines.",
      "factors": [
        "Sri Lanka Institute of Tourism & Hotel Management (SLITHM) credentials",
        "Guest satisfaction scores (TripAdvisor / Booking.com ratings)",
        "Experience with luxury 5-star international hotel chain standards"
      ],
      "source": "Hotels Association of Sri Lanka (THASL) & SLITHM Industry Surveys",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in English.",
      "alStream": "ANY A/L Stream (Arts, Commerce, Science, or Technology).",
      "zScoreRange": "Sabaragamuwa / Rajarata / Uva Wellassa B.Sc. Hospitality Management: ~1.20 - 1.45+.",
      "entranceExams": "SLITHM National Hotel School Entrance Examination and personality interview.",
      "alternativePathways": [
        "Sri Lanka Institute of Tourism & Hotel Management (SLITHM) 3-Year Diploma in Hotel Management (Colombo, Kandy, Bandarawela, Anuradhapura, Galle).",
        "SLIIT Business School B.Sc. in Hospitality & Tourism Management.",
        "Direct entry into hotel management trainee programs right after A/L."
      ],
      "competitionNote": "Values charisma, fluent English, warm social grace, and genuine passion for guest service over pure exam theory."
    },
    "universities": [
      {
        "name": "Sabaragamuwa University of Sri Lanka",
        "slug": "sabaragamuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Tourism Management",
        "faculty": "Faculty of Management Studies (Belihuloya)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://www.sab.ac.lk"
      },
      {
        "name": "Rajarata University of Sri Lanka",
        "slug": "rajarata",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Hospitality Management",
        "faculty": "Faculty of Management Studies",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://www.rjt.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in Hospitality & Tourism",
        "faculty": "SLIIT Business School (Malabe)",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://business.sliit.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L English Fluency",
        "timeline": "Age 15–16",
        "description": "Attain distinction in English; cultivate polished social etiquette and manners.",
        "milestone": "O/L English Distinction"
      },
      {
        "step": 2,
        "title": "A/L Completion & SLITHM Entry",
        "timeline": "Age 17–19",
        "description": "Pass A/L in any stream. Pass SLITHM Hotel School entrance exam.",
        "milestone": "A/L Pass / SLITHM Selection"
      },
      {
        "step": 3,
        "title": "Hotel Management Diploma / Degree",
        "timeline": "3–4 Years",
        "description": "Study culinary operations, front office, wine & beverage, and hotel finance, completing resort internships.",
        "milestone": "SLITHM Diploma / Degree Award"
      },
      {
        "step": 4,
        "title": "Management Trainee / Department Manager",
        "timeline": "Years 1–3",
        "description": "Lead Front Office, F&B, or Guest Relations in a premier 5-star resort.",
        "milestone": "Department Head (F&B / Front Office)"
      },
      {
        "step": 5,
        "title": "Resident Manager / Operations Director",
        "timeline": "Years 4–8",
        "description": "Supervise all daily hotel operations, driving revenue and guest satisfaction reviews.",
        "milestone": "Resident Manager / EAM"
      },
      {
        "step": 6,
        "title": "Resort General Manager (GM)",
        "timeline": "Years 8–18+",
        "description": "Assume full executive leadership of an iconic luxury resort property in Sri Lanka or the Maldives.",
        "milestone": "Resort General Manager (GM)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Hotel Revenue & Yield Management",
          "type": "technical",
          "description": "Optimizing RevPAR (Revenue Per Available Room), ADR, and dynamic seasonal pricing algorithms."
        },
        {
          "name": "Food & Beverage (F&B) Management",
          "type": "technical",
          "description": "Menu engineering, wine pairing, food cost controls, and international sanitary standards."
        },
        {
          "name": "Property Management Systems (PMS)",
          "type": "technical",
          "description": "Mastery of Opera PMS, Fidelio, channel managers, and guest reservation databases."
        }
      ],
      "soft": [
        {
          "name": "Impeccable Social Grace & Warmth",
          "type": "soft",
          "description": "Radiating genuine warmth, polished charm, and attentiveness to guests from around the globe."
        },
        {
          "name": "Crisis & Complaint Mastery",
          "type": "soft",
          "description": "Turning an unhappy, complaining guest into a lifelong passionate advocate through calm, generous resolution."
        }
      ],
      "importantSchoolSubjects": [
        "English Language & Literature",
        "Foreign Languages (French, German, Mandarin beneficial)",
        "Commerce / Economics",
        "Geography"
      ],
      "recommendedProjects": [
        "Learning conversational French, German, or Japanese",
        "Volunteering with organizing major school dinners, award nights, or cultural festivals"
      ]
    },
    "suitability": {
      "traits": [
        "You are naturally charming, social, extroverted, and love making people feel welcomed.",
        "You enjoy fine dining, luxury aesthetics, beautiful resort architecture, and travel.",
        "You are energetic, poised, and thrive in an active, round-the-clock social environment."
      ],
      "challenges": [
        "Working during holiday seasons (Christmas, New Year) when hotels are at peak occupancy.",
        "Handling demanding, high-maintenance guests with endless patience and poise."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I genuinely enjoy meeting people from different countries and making them happy.",
          "trait": "Hospitality Heart"
        },
        {
          "question": "I appreciate luxury resort aesthetics, fine food, and elegant environments.",
          "trait": "Luxury Aesthetic Sense"
        },
        {
          "question": "I can stay calm, polite, and charming even when dealing with rude or difficult people.",
          "trait": "Diplomatic Composure"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Sri Lanka is experiencing a massive tourism resurgence. Affluent experiential travellers demand authentic wellness retreats, eco-villas, and Michelin-caliber local culinary arts.",
      "aiImpact": "AI chatbots handle routine room service requests and bookings, while human hotel managers focus on bespoke emotional connections, private excursions, and unique guest memories.",
      "growingSpecializations": [
        "Eco-Resort & Sustainable Hospitality Direction",
        "Wellness & Ayurvedic Retreat Management",
        "Boutique Luxury Villa Hospitality",
        "Experiential Adventure & Culinary Tourism"
      ],
      "globalDemand": "Unrivalled career mobility in the Maldives, Dubai, Qatar, Southeast Asia, and luxury cruise ships.",
      "challenges": [
        "Managing resort operations smoothly during economic and geopolitical tourism cycles"
      ]
    },
    "relatedCareers": [
      {
        "slug": "ecotourism-naturalist",
        "title": "Eco-Tourism Naturalist",
        "category": "Hospitality"
      },
      {
        "slug": "tea-plantation-manager",
        "title": "Tea Plantation Manager",
        "category": "Business"
      },
      {
        "slug": "hr-manager",
        "title": "HR Manager",
        "category": "Business"
      },
      {
        "slug": "digital-marketer",
        "title": "Digital Marketer",
        "category": "Creative"
      }
    ]
  },
  "logistics-manager": {
    "slug": "logistics-manager",
    "title": "Logistics & Supply Chain Director",
    "sinhalaTitle": "සැපයුම් දාම හා සැපයුම් කළමනාකරු",
    "category": "Business",
    "tagline": "Orchestrate global shipping fleets, transshipment port cargo, and multimodal supply chains connecting East and West.",
    "heroImage": "/images/careers/logistics-manager.jpg",
    "roleOverview": {
      "whatTheyDo": "Logistics and supply chain managers plan, execute, and monitor the movement of raw materials, finished products, and maritime cargo across global supply chains. They coordinate ocean shipping vessels, customs clearance, warehouse distribution, freight forwarding, and international air cargo.",
      "whyItMatters": "Sri Lanka sits at the primary maritime crossroads of the Indian Ocean, just 10 nautical miles off the world's busiest east-west shipping lane. Colombo Port is a top-25 global transshipment hub. Logistics managers ensure international commerce, fuel, medical supplies, and exports flow seamlessly without delay.",
      "dailyResponsibilities": [
        "Negotiate freight rates and cargo container bookings with global shipping lines (Maersk, MSC, CMA CGM).",
        "Optimize warehouse inventory, automated order fulfillment, and RFID tracking systems.",
        "Manage customs documentation, tariff codes (HS Codes), and international trade compliance.",
        "Oversee Colombo Port container terminal throughput (CWIT, CICT, JCT) and intermodal rail transport.",
        "Design supply chain contingency plans mitigating global canal disruptions, fuel surcharges, and port strikes."
      ],
      "workEnvironment": "Modern logistics corporate offices, maritime shipping agency suites, automated distribution warehouses, and busy ocean container terminals.",
      "lifestyleAndBalance": "Fast-moving, globally synchronized work. Operates across international time zones with deep involvement in world trade events.",
      "typicalEmployers": [
        "Global Logistics Giants (DHL Global Forwarding, Expeditors, DB Schenker)",
        "Sri Lankan Conglomerate Logistics (Hayleys Advantis, Aitken Spence Logistics, John Keells Logistics)",
        "Shipping Line Agencies (Ceyline, McLarens, Colombo Dockyard)",
        "Export Manufacturing Supply Chains (MAS, Brandix)"
      ],
      "sriLankanSuccessStory": "A student completes a B.Sc. in Supply Chain Management at University of Moratuwa, joins Hayleys Advantis as an operations executive, masters international freight forwarding, and becomes Managing Director of regional 3PL logistics."
    },
    "salary": {
      "entryLevel": {
        "min": 85000,
        "max": 145000,
        "label": "LKR 85k – 145k / month"
      },
      "midLevel": {
        "min": 200000,
        "max": 420000,
        "label": "LKR 200k – 420k / month"
      },
      "seniorLevel": {
        "min": 550000,
        "max": 1600000,
        "label": "LKR 550k – 1.6M+ / month"
      },
      "govSector": "Sri Lanka Ports Authority (SLPA) and customs executive officers start at ~LKR 85,000–125,000 + port operational allowances.",
      "privateSector": "Private freight forwarders and 3PL supply chain conglomerates pay competitive salaries, with Senior Managers earning LKR 300,000–600,000 and Supply Chain Directors exceeding LKR 1.5 Million monthly.",
      "overseasOpportunities": "Vast global demand across major shipping hubs in Singapore, Dubai (Jebel Ali), Rotterdam, and Hong Kong earning USD $65,000–$140,000 annually.",
      "factors": [
        "Chartered Institute of Logistics and Transport (CILT UK) accreditation",
        "Experience with SAP MM / supply chain ERPs",
        "Cold-chain and customs clearance expertise"
      ],
      "source": "Chartered Institute of Logistics and Transport (CILT Sri Lanka) & CASA Reports",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 Passes at O/L with Credit passes in Mathematics and English.",
      "alStream": "ANY A/L Stream (Commerce, Maths, Science, or Technology).",
      "zScoreRange": "Moratuwa / Ocean University B.Sc. in Transport & Logistics: ~1.65 - 1.95+.",
      "entranceExams": "UGC university selection; or direct CILT UK professional qualification registration.",
      "alternativePathways": [
        "Chartered Institute of Logistics and Transport (CILT UK) International Diploma.",
        "B.Sc. in Maritime Logistics at Ocean University or CINEC Campus.",
        "National Institute of Business Management (NIBM) Logistics Diploma."
      ],
      "competitionNote": "Directly benefits from Sri Lanka's strategic geographical location as a global maritime hub; strong job market demand."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Transport & Logistics Management (TLM)",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "CILT (UK) Accredited / UGC",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "Ocean University of Sri Lanka",
        "slug": "ocean",
        "type": "Government (Maritime)",
        "degreeName": "B.Sc. (Hons) in Maritime Transportation & Logistics",
        "faculty": "Faculty of Management & Social Sciences",
        "duration": "4 Years",
        "accreditation": "CILT / Ministry of Education",
        "websiteUrl": "https://ocu.ac.lk"
      },
      {
        "name": "CINEC Campus",
        "slug": "cinec",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in International Transportation & Logistics",
        "faculty": "Faculty of Management & Social Sciences",
        "duration": "4 Years",
        "accreditation": "CILT (UK) Accredited",
        "websiteUrl": "https://www.cinec.edu"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L Mathematics & Geography",
        "timeline": "Age 15–16",
        "description": "Pass O/L with distinctions in Mathematics, English, and Geography.",
        "milestone": "O/L Math & English Credit"
      },
      {
        "step": 2,
        "title": "A/L Completion & CILT Enrollment",
        "timeline": "Age 17–19",
        "description": "Pass A/L in Commerce, Maths, or any stream. Begin CILT foundation courses.",
        "milestone": "A/L Pass"
      },
      {
        "step": 3,
        "title": "Undergraduate Logistics Degree",
        "timeline": "3–4 Years",
        "description": "Study supply chain modeling, port operations, maritime law, and air cargo logistics.",
        "milestone": "B.Sc. Logistics Degree Award"
      },
      {
        "step": 4,
        "title": "Logistics Executive / Operations Planner",
        "timeline": "Years 1–3",
        "description": "Manage shipping lines, freight tenders, and warehouse storage at a top 3PL company.",
        "milestone": "Chartered Member (CMILT)"
      },
      {
        "step": 5,
        "title": "Supply Chain Manager / Port Logistics Head",
        "timeline": "Years 4–8",
        "description": "Direct global supply chains, negotiate million-dollar shipping contracts, and cut lead times.",
        "milestone": "Senior Logistics Manager"
      },
      {
        "step": 6,
        "title": "Chief Supply Chain Officer (CSCO) / Managing Director",
        "timeline": "Years 8–18+",
        "description": "Direct multinational freight forwarders, run container shipping agencies, or shape national port strategy.",
        "milestone": "Managing Director / CSCO"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Global Freight Forwarding & Incoterms",
          "type": "technical",
          "description": "Mastery of Incoterms 2020 (FOB, CIF, DDP), bill of lading contracts, and multimodal transit routes."
        },
        {
          "name": "Supply Chain Network Optimization",
          "type": "technical",
          "description": "Using quantitative modeling to reduce transit lead times, safety stock holding costs, and fuel consumption."
        },
        {
          "name": "Port Container Operations & Customs Laws",
          "type": "technical",
          "description": "Understanding terminal operating systems (TOS), crane productivity, ASYCUDA customs clearance, and bonded warehouses."
        }
      ],
      "soft": [
        {
          "name": "Global Time-Zone Coordination",
          "type": "soft",
          "description": "Smoothly managing communications across US, European, and Asian shipping partners simultaneously."
        },
        {
          "name": "Crisis Problem Solving",
          "type": "soft",
          "description": "Rerouting vital shipments instantly when storms, canal blockages, or geopolitical crises shut down shipping lanes."
        }
      ],
      "importantSchoolSubjects": [
        "Mathematics",
        "Economics",
        "Geography (World Trade Routes)",
        "English"
      ],
      "recommendedProjects": [
        "Touring the Colombo Port container terminals and air cargo villages",
        "Analyzing how a consumer product (like an iPhone or Ceylon tea) travels from factory to supermarket shelf"
      ]
    },
    "suitability": {
      "traits": [
        "You are fascinated by global trade, massive container ships, airplanes, and international logistics.",
        "You enjoy solving complex routing puzzles and keeping systems running on time.",
        "You want a dynamic career connected directly to Sri Lanka's premier geographic strength as an ocean hub."
      ],
      "challenges": [
        "High pressure when critical shipments face customs delays or demurrage penalties.",
        "Dealing with global supply chain shocks (fuel price spikes, canal blockages, strikes)."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I am fascinated by how goods move across oceans and countries to reach store shelves.",
          "trait": "Global Trade Curiosity"
        },
        {
          "question": "I am organized, punctual, and hate delays and inefficiencies.",
          "trait": "Punctuality & Efficiency"
        },
        {
          "question": "I can handle fast-moving situations where multiple things happen at once.",
          "trait": "Operational Multitasking"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "The Colombo Port City and new deep-water container terminals (West Container Terminal - Adani/JKH) are cementing Sri Lanka as South Asia's preeminent maritime mega-hub.",
      "aiImpact": "AI predictive shipping algorithms now anticipate port congestion, automate customs risk screening, and calculate fuel-optimal ocean routes.",
      "growingSpecializations": [
        "Cold-Chain Pharmaceutical Logistics",
        "Green Shipping & Decarbonized Maritime Transport",
        "E-Commerce Automated Warehousing (Robotics)",
        "Port & Intermodal Rail Integration"
      ],
      "globalDemand": "Huge global demand for supply chain directors in Singapore, Dubai, Rotterdam, and Australia.",
      "challenges": [
        "Digitalizing legacy customs paperwork into paperless blockchain bills of lading"
      ]
    },
    "relatedCareers": [
      {
        "slug": "marine-officer",
        "title": "Marine Officer",
        "category": "Maritime"
      },
      {
        "slug": "airline-pilot",
        "title": "Airline Pilot",
        "category": "Skilled Trades"
      },
      {
        "slug": "air-traffic-controller",
        "title": "Air Traffic Controller",
        "category": "Skilled Trades"
      },
      {
        "slug": "accountant",
        "title": "Chartered Accountant",
        "category": "Business"
      }
    ]
  },
  "airline-pilot": {
    "slug": "airline-pilot",
    "title": "Commercial Airline Pilot",
    "sinhalaTitle": "වාණිජ ගුවන් නියමුවා",
    "category": "Aviation",
    "tagline": "Command modern commercial jetliners, navigate international flight corridors, and fly across the globe.",
    "heroImage": "/images/careers/airline-pilot.jpg",
    "roleOverview": {
      "whatTheyDo": "Commercial airline pilots command multi-engine passenger and cargo aircraft across domestic and international skyways. Collaborating with First Officers and air traffic controllers, pilots calculate fuel and weight balances, execute precise instrument takeoffs and landings, monitor advanced avionics, and maintain supreme safety of hundreds of passengers.",
      "whyItMatters": "Aviation is the lifeline of Sri Lanka's multi-billion dollar tourism sector and global trade. Airline pilots shoulder direct responsibility for human lives, flying wide-body jetliners through changing weather systems and connecting the island with worldwide economic capitals.",
      "dailyResponsibilities": [
        "Conduct exterior walkaround pre-flight aircraft inspections and review technical logbooks.",
        "Calculate takeoff performance, minimum diversion fuels, and review airway weather charts and NOTAMs.",
        "Program Flight Management Computers (FMC) and coordinate taxi and takeoff clearances with ATC.",
        "Pilot aircraft during manual climb, cruise, descent, and ILS instrument approach landings.",
        "Complete voyage debriefs, defect logging, and customs and immigration flight documentation."
      ],
      "workEnvironment": "Modern high-tech glass cockpits (Airbus A330/A320, Boeing 737), international airport transit lounges, and global luxury hotel layovers across continents.",
      "lifestyleAndBalance": "Exciting international lifestyle with flight duty periods governed by CAASL regulations. Roster schedules include night flights, layovers in foreign cities, and long block leaves.",
      "typicalEmployers": [
        "SriLankan Airlines (National Carrier)",
        "FitsAir (International & Domestic Carrier)",
        "Cinnamon Air (Domestic Seaplane Operator)",
        "Middle Eastern Airlines (Emirates, Qatar Airways, flydubai, Etihad)"
      ],
      "sriLankanSuccessStory": "A student passionate about aviation joins a local flying school at Ratmalana, logs 200 flight hours on Cessna 172s, joins SriLankan Airlines as an A320 First Officer, and by age 34 earns the four stripes of a wide-body Airbus A330 Captain."
    },
    "salary": {
      "entryLevel": {
        "min": 250000,
        "max": 450000,
        "label": "LKR 250k – 450k / month"
      },
      "midLevel": {
        "min": 650000,
        "max": 1200000,
        "label": "LKR 650k – 1.2M / month"
      },
      "seniorLevel": {
        "min": 1500000,
        "max": 3500000,
        "label": "LKR 1.5M – 3.5M+ / month"
      },
      "govSector": "Cadet Pilots and Junior First Officers at national carrier start around LKR 250,000–450,000 + flight hour allowances, while Senior Captains earn LKR 1.8M–3.2M monthly.",
      "privateSector": "FitsAir, Cinnamon Air, and corporate charters offer competitive LKR packages with attractive flight allowances.",
      "overseasOpportunities": "Vast global demand across Middle Eastern (Emirates, Qatar, flydubai) and Asian carriers paying USD $7,000–$16,000/month tax-free with complimentary housing and education allowances.",
      "factors": [
        "Logged flight hours (Jet turbine time)",
        "Type ratings held (A320/A330/B777/B787)",
        "Airline tier and international routes"
      ],
      "source": "Civil Aviation Authority of Sri Lanka (CAASL) & Airline Pilot Guild Wage Benchmarks",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English, Mathematics, and Science in a single sitting.",
      "alStream": "Physical Science (Combined Maths & Physics) preferred, though any A/L stream with required passes is accepted by CAASL.",
      "zScoreRange": "State university degrees (KDU Aeronautical Studies) require Z-score ~1.20–1.45. Flying schools require private cadet tuition fees.",
      "entranceExams": "CAASL Class 1 Aviation Medical (rigorous vision, hearing, ECG) + pilot aptitude screening (COMPASS test).",
      "alternativePathways": [
        "Private flight training (PPL -> CPL/IR with Multi-Engine rating) at approved Sri Lankan ATOs (Fairway Aviation, Asian Aviation Centre, Skyline).",
        "Sri Lanka Air Force (SLAF) commissioned pilot pathway followed by civil conversion.",
        "Overseas flying schools in the USA, Australia, or Philippines followed by CAASL license validation."
      ],
      "competitionNote": "Private training requires high financial capital ($40k-$65k USD). First-time airline cadet entry exams are highly competitive."
    },
    "universities": [
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Government (Defence)",
        "degreeName": "B.Sc. in Aviation Studies / Aeronautical Engineering",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / CAASL Approved",
        "websiteUrl": "https://kdu.ac.lk"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Mechanical Engineering (Aeronautical Stream)",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "CINEC Campus",
        "slug": "cinec",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. in Aviation Operations / EASA Part-66",
        "faculty": "Faculty of Aviation",
        "duration": "3 - 4 Years",
        "accreditation": "CAASL Approved",
        "websiteUrl": "https://cinec.edu"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "O/L & A/L Science & Medical",
        "timeline": "Age 16–18",
        "description": "Pass A/L with Physics and Mathematics. Clear the CAASL Class 1 Aviation Medical Examination.",
        "milestone": "Class 1 Medical Fitness"
      },
      {
        "step": 2,
        "title": "Private Pilot License (PPL)",
        "timeline": "6–9 Months",
        "description": "Complete ground school theory and 40–50 flight hours including solo cross-country navigation.",
        "milestone": "PPL License Issued"
      },
      {
        "step": 3,
        "title": "Commercial Pilot License (CPL/IR/ME)",
        "timeline": "12–18 Months",
        "description": "Log 200 total hours, pass instrument rating and twin-engine ratings, and pass 14 ATPL theory exams.",
        "milestone": "Frozen ATPL & CPL/IR"
      },
      {
        "step": 4,
        "title": "Airline Cadet & Type Rating",
        "timeline": "6 Months",
        "description": "Pass airline COMPASS psychometric tests, simulator checks, and complete A320 or ATR-72 Type Rating.",
        "milestone": "Type Rated First Officer"
      },
      {
        "step": 5,
        "title": "Senior First Officer (Line Flying)",
        "timeline": "3–6 Years",
        "description": "Fly scheduled international routes, accumulate 1,500+ jet flight hours, and unfreeze full ATPL.",
        "milestone": "Senior First Officer"
      },
      {
        "step": 6,
        "title": "Airline Captain (Command)",
        "timeline": "7–10+ Years",
        "description": "Pass airline command course, assume full legal command of jetliners, and qualify as Flight Instructor.",
        "milestone": "Four-Stripe Captain"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Glass Cockpit Avionics & FMS",
          "type": "technical",
          "description": "Programming Flight Management Guidance Systems and monitoring digital flight displays."
        },
        {
          "name": "Precision Instrument Approach (ILS/RNAV)",
          "type": "technical",
          "description": "Executing zero-visibility instrument runway approaches under tight crosswinds."
        },
        {
          "name": "Aviation Meteorology & Radar Interpretation",
          "type": "technical",
          "description": "Deciphering Doppler weather radar to avoid severe convective storm cells and clear-air turbulence."
        }
      ],
      "soft": [
        {
          "name": "Crisis Composure & Stress Control",
          "type": "soft",
          "description": "Maintaining total emotional stability and methodical checklist execution during inflight anomalies."
        },
        {
          "name": "Crew Resource Management (CRM)",
          "type": "soft",
          "description": "Fostering open cockpit communication, cross-checking parameters, and empowering co-pilots."
        }
      ],
      "importantSchoolSubjects": [
        "Physics",
        "Combined Mathematics",
        "General English",
        "Geography"
      ],
      "recommendedProjects": [
        "Flight simulator practice (X-Plane, Microsoft Flight Simulator)",
        "Joining the Air Cadet Wing of National Cadet Corps (NCC)"
      ]
    },
    "suitability": {
      "traits": [
        "You stay calm, methodical, and procedure-focused during high-pressure situations.",
        "You have sharp situational awareness, mental arithmetic, and multi-tasking reflexes.",
        "You desire an exciting international career flying across the world."
      ],
      "challenges": [
        "Substantial initial training costs and financial investment.",
        "Strict six-monthly simulator flight checks and annual medical checks.",
        "Irregular sleep cycles and prolonged periods away from home."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can follow strict procedural checklists calmly when unexpected alarms occur.",
          "trait": "Crisis Calmness"
        },
        {
          "question": "I have excellent spatial awareness and enjoy mental math and navigation.",
          "trait": "Spatial Mental Aptitude"
        },
        {
          "question": "I am comfortable with irregular working hours, night flights, and traveling.",
          "trait": "Lifestyle Adaptability"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Rapid expansion of commercial airline fleets in India, the Gulf, and Southeast Asia ensures a multi-decade global shortage of qualified airline pilots.",
      "aiImpact": "Autoland and autopilot systems handle cruise phases, but human commanders remain legally and operationally indispensable for safety-critical choices and emergency recovery.",
      "growingSpecializations": [
        "Ultra-Long-Haul Wide-Body International Flights",
        "Aviation Safety & Flight Data Monitoring (FDM)",
        "Flight Simulator Training Instructor (TRI/TRE)"
      ],
      "globalDemand": "Unprecedented pilot recruitment drives across Middle East, Indian, and Southeast Asian airlines.",
      "challenges": [
        "Adapting to advanced next-generation flight deck automation and recurring competency assessments"
      ]
    },
    "relatedCareers": [
      {
        "slug": "air-traffic-controller",
        "title": "Air Traffic Controller",
        "category": "Aviation"
      },
      {
        "slug": "marine-officer",
        "title": "Merchant Navy Officer",
        "category": "Maritime"
      },
      {
        "slug": "engineer",
        "title": "Engineer",
        "category": "Engineering"
      }
    ]
  },
  "air-traffic-controller": {
    "slug": "air-traffic-controller",
    "title": "Air Traffic Controller (ATCO)",
    "sinhalaTitle": "ගුවන් ගමනාගමන පාලක",
    "category": "Aviation",
    "tagline": "Direct international air corridors, manage runway traffic, and ensure collision-free skyways across Colombo airspace.",
    "heroImage": "/images/careers/air-traffic-controller.jpg",
    "roleOverview": {
      "whatTheyDo": "Air Traffic Controllers coordinate the safe, orderly, and expeditious movement of aircraft within Sri Lanka's national airspace and international Flight Information Region (FIR). Operating from control towers and radar control centres, they issue flight paths, headings, and speed clearances to prevent collisions.",
      "whyItMatters": "Colombo Oceanic Airspace covers vast nautical miles over the Indian Ocean connecting Europe, the Middle East, Southeast Asia, and Australia. Controllers ensure flawless separation of hundreds of daily flights with zero margin for error.",
      "dailyResponsibilities": [
        "Monitor surveillance radar screens, flight data strips, and ADS-B transponder displays.",
        "Issue mandatory take-off, landing, and taxi instructions to aircraft at BIA Katunayake and Ratmalana.",
        "Guide inbound flights onto runway approach localizers while maintaining mandatory vertical and lateral separation.",
        "Reroute flights around severe tropical thunderstorm convective cells and turbulence.",
        "Coordinate oceanic handovers with adjacent control centres in Chennai, Male, and Jakarta."
      ],
      "workEnvironment": "High-security control towers with 360-degree aerodrome views and radar control suites at Katunayake and Ratmalana.",
      "lifestyleAndBalance": "Structured 24/7 shift rosters with mandatory rest intervals. Demanding mental focus on duty, balanced by generous off-duty recovery hours.",
      "typicalEmployers": [
        "Airport & Aviation Services (Sri Lanka) Ltd - AASL (Exclusive National Employer)",
        "Overseas Civil Aviation Authorities (Dubai, Doha, Singapore)"
      ],
      "sriLankanSuccessStory": "A Physical Science graduate from Peradeniya passes the AASL ATCO national selection exam, trains at the Civil Aviation Training Centre Ratmalana, and today controls Colombo Oceanic radar traffic safely separating international flights."
    },
    "salary": {
      "entryLevel": {
        "min": 150000,
        "max": 250000,
        "label": "LKR 150k – 250k / month"
      },
      "midLevel": {
        "min": 350000,
        "max": 600000,
        "label": "LKR 350k – 600k / month"
      },
      "seniorLevel": {
        "min": 750000,
        "max": 1200000,
        "label": "LKR 750k – 1.2M+ / month"
      },
      "govSector": "AASL executive salary scales provide LKR 150,000–350,000 for junior rated controllers, scaling to LKR 700,000–1,200,000+ with aviation technical allowances, night shift weightings, and bonuses.",
      "privateSector": "Solely a state service in Sri Lanka via AASL.",
      "overseasOpportunities": "Licensed Sri Lankan controllers are highly recruited by Gulf civil aviation authorities (UAE, Qatar, Saudi Arabia, Bahrain) earning tax-free USD $7,000–$14,000/month.",
      "factors": [
        "Ratings held (Aerodrome, Approach Radar, Area Control Radar)",
        "Shift hours and console duty time",
        "Aviation safety rating checks"
      ],
      "source": "Airport & Aviation Services (Sri Lanka) Ltd & SLATCA Salary Survey",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English, Mathematics, and Science in a single sitting.",
      "alStream": "Physical Science (Combined Maths & Physics) or recognized B.Sc. in Physical Science/Engineering.",
      "zScoreRange": "State recruitment requires a B.Sc. Degree (Physical Science / Engineering / Mathematics) from a UGC-recognized university.",
      "entranceExams": "Gazetted AASL National Competitive Examination (English, Mathematics, Spatial Aptitude) + CAASL Class 3 Aviation Medical.",
      "alternativePathways": [
        "Direct recruitment by AASL advertised in the Government Gazette for Science/Engineering graduates.",
        "Air Force Air Traffic Control specialization transitioning into civil aviation licensing."
      ],
      "competitionNote": "Intake takes place every 2–3 years based on national airspace requirements, with thousands of science graduates competing for ~20 cadet slots."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Engineering / IT",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. in Physical Science / Physics & Mathematics",
        "faculty": "Faculty of Science",
        "duration": "3 - 4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://science.cmb.ac.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. in Physical Science",
        "faculty": "Faculty of Science",
        "duration": "3 - 4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sci.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "B.Sc. in Physical Science or Engineering",
        "timeline": "Age 19–23",
        "description": "Graduate with a strong degree in Physical Science, Mathematics, Physics, or Engineering.",
        "milestone": "B.Sc. Degree Completed"
      },
      {
        "step": 2,
        "title": "AASL Gazetted Selection Exam",
        "timeline": "6–12 Months",
        "description": "Clear the nationwide written examination, spatial reasoning test, voice test, and Class 3 medical.",
        "milestone": "AASL Cadet Selection"
      },
      {
        "step": 3,
        "title": "CATC Institutional Training",
        "timeline": "18 Months",
        "description": "Undergo ICAO 051/052/054 training in air law, navigation, meteorology, and tower simulator checks at Ratmalana.",
        "milestone": "CATC Diploma Awarded"
      },
      {
        "step": 4,
        "title": "Aerodrome Control Rating (Tower)",
        "timeline": "2–3 Years",
        "description": "Control live runway and aerodrome traffic at Katunayake or Ratmalana under supervision to earn ADC rating.",
        "milestone": "Aerodrome Controller License"
      },
      {
        "step": 5,
        "title": "Radar Approach & Area Ratings",
        "timeline": "3–6 Years",
        "description": "Earn Approach Radar (APS) and Area Control (ACS) ratings managing high-density Colombo Oceanic airspace.",
        "milestone": "Radar Controller License"
      },
      {
        "step": 6,
        "title": "Chief Controller / Airspace Manager",
        "timeline": "8–15+ Years",
        "description": "Direct national air traffic management, design PBN routes, and instruct international ICAO trainees.",
        "milestone": "Senior Watch Supervisor"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Radar Vectoring & Aircraft Separation",
          "type": "technical",
          "description": "Applying standard ICAO vertical (1,000 ft) and lateral (5 NM) distance separation in real time."
        },
        {
          "name": "Standard ICAO Radio Telephony",
          "type": "technical",
          "description": "Issuing concise, standardized verbal clearances and strictly verifying pilot readbacks."
        },
        {
          "name": "Aviation Weather & Microburst Assessment",
          "type": "technical",
          "description": "Interpreting Doppler weather radar and pilot windshear reports to divert aircraft safely."
        }
      ],
      "soft": [
        {
          "name": "Rapid Multi-Variable Decision Making",
          "type": "soft",
          "description": "Making instantaneous, error-free judgment calls under dynamic air traffic conditions."
        },
        {
          "name": "High 3D Spatial Imagination",
          "type": "soft",
          "description": "Mentally tracking multiple aircraft traveling at 500+ knots across converging 3D trajectories."
        }
      ],
      "importantSchoolSubjects": [
        "Combined Mathematics",
        "Physics",
        "English Language",
        "Information Technology"
      ],
      "recommendedProjects": [
        "Air traffic tracking on Flightradar24 / VATSIM simulation",
        "Chess and rapid mental math puzzles"
      ]
    },
    "suitability": {
      "traits": [
        "You have outstanding 3D spatial awareness and rapid mental arithmetic reflexes.",
        "You stay cool, decisive, and authoritative when under intense time pressure.",
        "You want a high-paying, prestigious state aviation career with exceptional job security."
      ],
      "challenges": [
        "High-stress responsibility with zero tolerance for errors.",
        "Continuous shift work including overnight duties, weekends, and holidays.",
        "Infrequent recruitment intakes by AASL."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can visualize the positions and speeds of moving objects easily in my mind.",
          "trait": "Spatial Mental Modeling"
        },
        {
          "question": "I stay completely focused and calm when several people are asking for urgent decisions.",
          "trait": "Pressure Decision Making"
        },
        {
          "question": "I can communicate clearly, precisely, and assertively without hesitation.",
          "trait": "Clear Voice Communication"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Growth in international transit overflights through Colombo oceanic airspace ensures continuous demand for skilled radar controllers.",
      "aiImpact": "Automated trajectory safety alerts support controllers, but human controllers hold sole legal authority for airspace separation.",
      "growingSpecializations": [
        "Performance-Based Navigation (PBN) Airspace Design",
        "Unmanned Drone Traffic Management (UTM)",
        "Search & Rescue (SAR) Air Operations"
      ],
      "globalDemand": "High demand across the Middle East (Dubai, Doha) offering tax-free expatriate contracts for experienced Sri Lankan controllers.",
      "challenges": [
        "Adapting to satellite-based surveillance (ADS-B) and automated digital data-link communication"
      ]
    },
    "relatedCareers": [
      {
        "slug": "airline-pilot",
        "title": "Commercial Airline Pilot",
        "category": "Aviation"
      },
      {
        "slug": "marine-officer",
        "title": "Merchant Navy Officer",
        "category": "Maritime"
      },
      {
        "slug": "engineer",
        "title": "Engineer",
        "category": "Engineering"
      }
    ]
  },
  "marine-officer": {
    "slug": "marine-officer",
    "title": "Merchant Navy Officer / Ship Captain",
    "sinhalaTitle": "වෙළඳ නාවික නිලධාරියා / නැව් කපිතාන්",
    "category": "Maritime",
    "tagline": "Command giant container ships and oil tankers across international oceans, powering global trade.",
    "heroImage": "/images/careers/marine-officer.jpg",
    "roleOverview": {
      "whatTheyDo": "Merchant Navy Deck Officers navigate and operate commercial cargo vessels, ultra-large container ships, and gas tankers across the world's oceans. Progressing from Third Officer to Ship Captain (Master Mariner), they maintain navigational watch, oversee cargo loading, calculate vessel stability, and ensure maritime safety at sea.",
      "whyItMatters": "Over 90% of global trade moves by sea. Sri Lanka's position along the East-West shipping line makes seafaring a premier foreign exchange earner. Deck officers command ships valued over $150M carrying billions of dollars in international cargo.",
      "dailyResponsibilities": [
        "Maintain navigational bridge watch using radar, ARPA, ECDIS electronic charts, and compass bearings.",
        "Calculate passage plans, tidal predictions, ocean current drifts, and weather routing.",
        "Supervise the safe loading, stowage, and discharge of hazardous containerized and bulk cargo.",
        "Direct fire-fighting, abandon ship safety drills, and SOLAS/MARPOL maritime environmental compliance.",
        "Manage multinational crew operations, customs declarations, and port clearance documentation."
      ],
      "workEnvironment": "Modern ship navigation bridges, cargo control rooms, open ocean environments, and global international ports from Singapore to Rotterdam. Contracts last 4 to 6 months at sea.",
      "lifestyleAndBalance": "Watchkeeping shifts (4 hours on / 8 hours off) at sea, followed by 2 to 3 months of continuous paid holiday leave at home in Sri Lanka between voyage contracts.",
      "typicalEmployers": [
        "Global Container Lines (Maersk, MSC, CMA CGM, Evergreen)",
        "International Tanker & Bulk Fleets (Hafnia, Wallem, Anglo-Eastern)",
        "Sri Lanka Ports Authority - SLPA (Shore Harbour Pilots)"
      ],
      "sriLankanSuccessStory": "A cadet from Matara completes pre-sea training at CINEC, sails as a Deck Cadet on European container vessels, earns his Master Mariner license, and now commands ultra-large container ships while also serving as a visiting marine lecturer."
    },
    "salary": {
      "entryLevel": {
        "min": 350000,
        "max": 650000,
        "label": "LKR 350k – 650k / month ($1,200 - $2,200 USD)"
      },
      "midLevel": {
        "min": 850000,
        "max": 1800000,
        "label": "LKR 850k – 1.8M / month ($2,800 - $6,000 USD)"
      },
      "seniorLevel": {
        "min": 2500000,
        "max": 5000000,
        "label": "LKR 2.5M – 5.0M+ / month ($8,000 - $15,000+ USD)"
      },
      "govSector": "Shore-based SLPA Marine Pilots and Harbour Masters earn LKR 450,000–1,200,000+ monthly with port performance allowances.",
      "privateSector": "Almost all sea-going officers work for foreign-flagged shipping companies earning tax-free US Dollar salaries paid directly into foreign currency bank accounts in Sri Lanka.",
      "overseasOpportunities": "Global maritime industry faces an ongoing shortage of certified deck officers. Complete worldwide mobility on European, Japanese, and Singaporean vessels.",
      "factors": [
        "Certificate of Competency (CoC) grade (OOW, Chief Mate, Master Mariner)",
        "Vessel type (Chemical/LNG/LPG tankers pay highest danger bonuses)",
        "Gross tonnage of vessel"
      ],
      "source": "Merchant Shipping Secretariat (MSS) & International Maritime Organization (IMO) Wage Guidelines",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English, Mathematics, and Science in a single sitting.",
      "alStream": "Physical Science (Combined Maths & Physics) or Bio Science with Physics pass.",
      "zScoreRange": "Ocean University state degree: Z-score ~0.90–1.20. Private cadet academies require clearing aptitude exams and STCW medical.",
      "entranceExams": "STCW Maritime Medical Examination (Ishihara colour vision test, audiometry, fitness test).",
      "alternativePathways": [
        "Pre-Sea Deck Cadet Training at CINEC Campus (Malabe).",
        "B.Sc. in Nautical Science at Ocean University of Sri Lanka (OCUSL).",
        "Mercantile Marine Management & Mahapola Ports Academy maritime courses."
      ],
      "competitionNote": "Strict medical standards: colour blindness or uncorrected eye deficiencies disqualify applicants. Strong physical stamina required."
    },
    "universities": [
      {
        "name": "Ocean University of Sri Lanka",
        "slug": "ocean-university",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. in Nautical Science / Marine Engineering",
        "faculty": "Faculty of Fisheries and Ocean Sciences",
        "duration": "4 Years",
        "accreditation": "Merchant Shipping Secretariat Approved",
        "websiteUrl": "https://ocu.ac.lk"
      },
      {
        "name": "CINEC Campus",
        "slug": "cinec",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. in Nautical Science / STCW Cadet Programme",
        "faculty": "Faculty of Maritime Sciences",
        "duration": "3 - 4 Years",
        "accreditation": "DNV Certified / MSS Sri Lanka",
        "websiteUrl": "https://cinec.edu"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Transport & Logistics Management",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "CILT Accredited",
        "websiteUrl": "https://uom.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "A/L Science & Maritime Medical",
        "timeline": "Age 18–19",
        "description": "Pass A/L in Science stream and clear the mandatory STCW seafarer medical examination with normal colour vision.",
        "milestone": "Medical Fitness Certificate"
      },
      {
        "step": 2,
        "title": "Pre-Sea Cadet Training",
        "timeline": "12–18 Months",
        "description": "Complete institutional academics covering chartwork, navigation rules, ship stability, and STCW basic safety.",
        "milestone": "Pre-Sea Cadet Diploma"
      },
      {
        "step": 3,
        "title": "Cadet Sea Service (Sea Time)",
        "timeline": "12–18 Months",
        "description": "Serve aboard international merchant vessels, maintain navigation watches, and complete the Training Record Book.",
        "milestone": "Qualifying Sea Time Completed"
      },
      {
        "step": 4,
        "title": "Officer of the Watch (OOW / 3rd Officer)",
        "timeline": "2–4 Years",
        "description": "Pass Merchant Shipping Secretariat Class 3 CoC exams. Sail as Third and Second Officer navigating ocean passages.",
        "milestone": "Class 3 CoC License"
      },
      {
        "step": 5,
        "title": "Chief Mate (First Mate)",
        "timeline": "3–5 Years",
        "description": "Pass Class 2 CoC oral and written examinations. Oversee cargo operations, ship stability, and deck crew.",
        "milestone": "Class 2 Chief Mate CoC"
      },
      {
        "step": 6,
        "title": "Master Mariner / Ship Captain",
        "timeline": "7–10+ Years",
        "description": "Attain Class 1 Master Unlimited license. Command mega container ships or step ashore as Harbour Pilot or Marine Superintendent.",
        "milestone": "Master Mariner (Ship's Captain)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Electronic Chart Display & Information Systems (ECDIS)",
          "type": "technical",
          "description": "Operating digital vector navigation charts, GPS waypoint tracking, and anti-grounding safety depth contours."
        },
        {
          "name": "Ship Stability & Ballast Calculation",
          "type": "technical",
          "description": "Calculating metacenter heights (GM), trim, list, and stress moments to guarantee seaworthiness in rough seas."
        },
        {
          "name": "International Collision Regulations (COLREGs)",
          "type": "technical",
          "description": "Executing split-second course corrections in compliance with maritime right-of-way rules."
        }
      ],
      "soft": [
        {
          "name": "Mental Resilience & Self-Reliance",
          "type": "soft",
          "description": "Maintaining peak morale and focus during 5 months of isolation at sea away from home."
        },
        {
          "name": "Cross-Cultural Shipboard Leadership",
          "type": "soft",
          "description": "Directing and inspiring multinational maritime crews of diverse backgrounds safely."
        }
      ],
      "importantSchoolSubjects": [
        "Combined Mathematics",
        "Physics",
        "English Language",
        "Geography"
      ],
      "recommendedProjects": [
        "Sailing, rowing, sea cadet corps (NCC Naval Wing)",
        "Astronomy, celestial coordinates, and maritime navigation map reading"
      ]
    },
    "suitability": {
      "traits": [
        "You are adventurous, physically tough, and love the open ocean.",
        "You are disciplined, respect maritime hierarchy, and take safety protocols seriously.",
        "You want to earn high US Dollar tax-free income while traveling to global ports."
      ],
      "challenges": [
        "Prolonged absence from family, friends, and social life during sea contracts.",
        "Rough ocean weather, monsoons, and extreme motion at sea.",
        "High legal and environmental responsibility under international maritime law."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can comfortably live and work at sea for 5 consecutive months without severe homesickness.",
          "trait": "Seafaring Independence"
        },
        {
          "question": "I have perfect colour vision and enjoy technical navigation and compass calculations.",
          "trait": "Navigational Aptitude"
        },
        {
          "question": "I am disciplined and follow strict safety procedures in high-risk environments.",
          "trait": "Safety Discipline"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Global commercial fleet expansion and green decarbonization (LNG, green methanol, ammonia) create intense demand for skilled officers.",
      "aiImpact": "Shore-monitored autonomous technologies assist navigation, but international treaties require certified human Master Mariners for legal seaworthiness and emergency command.",
      "growingSpecializations": [
        "LNG & Dual-Fuel Tanker Operations",
        "Dynamic Positioning (DP) for Offshore Energy Vessels",
        "Harbour Marine Pilot & Port Operations"
      ],
      "globalDemand": "Global container lines actively sponsor Sri Lankan deck officers due to exceptional maritime competence and English fluency.",
      "challenges": [
        "Mastering complex green fuel protocols and maritime environmental zero-carbon standards"
      ]
    },
    "relatedCareers": [
      {
        "slug": "airline-pilot",
        "title": "Commercial Airline Pilot",
        "category": "Aviation"
      },
      {
        "slug": "logistics-manager",
        "title": "Supply Chain & Logistics Manager",
        "category": "Business"
      },
      {
        "slug": "engineer",
        "title": "Engineer",
        "category": "Engineering"
      }
    ]
  },
  "quantity-surveyor": {
    "slug": "quantity-surveyor",
    "title": "Chartered Quantity Surveyor (ChQS / MRICS)",
    "sinhalaTitle": "ප්‍රමාණ මිනුම්වේදියා",
    "category": "Built Environment",
    "tagline": "Manage multi-billion rupee construction budgets, procurement, and contracts, ensuring projects finish on time and on budget.",
    "heroImage": "/images/careers/quantity-surveyor.jpg",
    "roleOverview": {
      "whatTheyDo": "Chartered Quantity Surveyors are construction economists and commercial managers who control the financial, legal, and contractual aspects of building and civil engineering projects. Working for developers, consultancies, or major contractors, they prepare Bills of Quantities (BOQ), value work progress, manage variation claims, and administer contracts from design to completion.",
      "whyItMatters": "Infrastructure and high-rise developments involve billions of rupees. Quantity Surveyors ensure every rupee is accounted for, preventing cost overruns, resolving contractor disputes, and safeguarding project feasibility.",
      "dailyResponsibilities": [
        "Extract accurate material quantities from architectural blueprints and 3D BIM models using CostX and PlanSwift.",
        "Prepare comprehensive Bills of Quantities (BOQ), tender documents, and commercial contracts.",
        "Evaluate contractor bids, conduct financial negotiations, and award procurement packages.",
        "Perform monthly site measurements and certify interim contractor payment certificates (IPC).",
        "Assess delay claims, variation orders, price fluctuations, and manage dispute resolution under FIDIC contracts."
      ],
      "workEnvironment": "Modern commercial office spaces, client boardrooms, and construction sites (skyscrapers, highways, airports, Colombo Port City). Regular site visits across Sri Lanka and overseas.",
      "lifestyleAndBalance": "Structured business hours with peak workloads during tender submission deadlines and monthly commercial valuations.",
      "typicalEmployers": [
        "Leading Construction Contractors (Access Engineering, MAGA, Sanken, ICC)",
        "Cost Consulting Consultancies (Rider Levett Bucknall, CECB, Currie & Brown)",
        "State Infrastructure Bodies (RDA, UDA, CIDA)",
        "Middle Eastern Giga-Projects (NEOM, Red Sea, Dubai, Qatar)"
      ],
      "sriLankanSuccessStory": "A student from Kurunegala excels in A/L Maths, earns a B.Sc. in Quantity Surveying from University of Moratuwa, qualifies as AIQSSL and MRICS, and by age 30 manages a $200M commercial tower development in Dubai."
    },
    "salary": {
      "entryLevel": {
        "min": 90000,
        "max": 160000,
        "label": "LKR 90k – 160k / month"
      },
      "midLevel": {
        "min": 220000,
        "max": 480000,
        "label": "LKR 220k – 480k / month"
      },
      "seniorLevel": {
        "min": 600000,
        "max": 1800000,
        "label": "LKR 600k – 1.8M+ / month"
      },
      "govSector": "CECB, RDA, and UDA offer government executive scales from LKR 85,000–180,000 + project allowances.",
      "privateSector": "Private contractors and commercial consultancies offer LKR 120,000–450,000+ for project QSs, while Commercial Directors earn LKR 700,000–1,500,000.",
      "overseasOpportunities": "Sri Lankan Chartered QSs with RICS qualifications are legendary in Dubai, Qatar, Saudi Arabia, the UK, and Australia, earning tax-free USD $4,000–$12,000/month.",
      "factors": [
        "Chartered status (AIQSSL / MRICS)",
        "Mastery of 5D BIM and measurement software (CostX)",
        "Experience with FIDIC contract administration and claims"
      ],
      "source": "Institute of Quantity Surveyors Sri Lanka (IQSSL) & RICS Global Remuneration Guide",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English, Mathematics, and Science in a single sitting.",
      "alStream": "Physical Science (Combined Maths, Physics, Chemistry) or Arts/Commerce with Mathematics.",
      "zScoreRange": "University of Moratuwa B.Sc. (Hons) QS is among the highest cutoffs in Sri Lanka: ~1.75–2.05+.",
      "entranceExams": "UGC university admission selection for state universities.",
      "alternativePathways": [
        "B.Sc. (Hons) in Quantity Surveying at SLIIT (accredited by RICS).",
        "B.Sc. Quantity Surveying degrees via foreign university partnerships (ICBT / BCAS / CSCT).",
        "IQSSL Graduate Diploma in Quantity Surveying leading to professional membership."
      ],
      "competitionNote": "State intake at Moratuwa is highly competitive. Private university routes must be verified for IQSSL and RICS accreditation for direct chartered status."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Quantity Surveying",
        "faculty": "Faculty of Architecture / Dept of Building Economics",
        "duration": "4 Years",
        "accreditation": "IQSSL / RICS (UK) / PAQS Accredited",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) in Quantity Surveying",
        "faculty": "School of Architecture / LJMU UK",
        "duration": "3 - 4 Years",
        "accreditation": "RICS Accredited / UGC Recognized",
        "websiteUrl": "https://sliit.lk"
      },
      {
        "name": "General Sir John Kotelawala Defence University",
        "slug": "kdu",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Quantity Surveying",
        "faculty": "Faculty of Built Environment & Spatial Sciences",
        "duration": "4 Years",
        "accreditation": "IQSSL Recognized",
        "websiteUrl": "https://kdu.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "A/L Combined Mathematics",
        "timeline": "Age 17–19",
        "description": "Excel in A/L Physical Science stream with top grades in Combined Mathematics and Physics.",
        "milestone": "A/L Pass & High Z-Score"
      },
      {
        "step": 2,
        "title": "B.Sc. (Hons) in Quantity Surveying",
        "timeline": "4 Years",
        "description": "Complete RICS-accredited degree in construction law, measurement, estimating, and 6–12 months industrial training.",
        "milestone": "B.Sc. (Hons) Degree"
      },
      {
        "step": 3,
        "title": "Graduate Quantity Surveyor",
        "timeline": "1–2 Years",
        "description": "Join a leading construction contractor or consultancy, prepare BOQs, check subcontractor invoices, and track site costs.",
        "milestone": "Graduate QS Placement"
      },
      {
        "step": 4,
        "title": "Assessment of Professional Competence (APC)",
        "timeline": "2–3 Years",
        "description": "Log structured professional development diary, clear IQSSL and RICS professional interviews to earn charter.",
        "milestone": "Chartered QS (AIQSSL / MRICS)"
      },
      {
        "step": 5,
        "title": "Senior Commercial Manager",
        "timeline": "4–8 Years",
        "description": "Manage multi-million dollar contracts across Port City or Gulf mega-projects, specializing in claims and dispute defense.",
        "milestone": "Commercial Manager"
      },
      {
        "step": 6,
        "title": "Director / Commercial Arbitrator",
        "timeline": "10+ Years",
        "description": "Lead commercial consultancy divisions, advise mega infrastructure funds, or serve as an accredited international arbitrator.",
        "milestone": "Director / Fellow (FRICS)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Digital 5D BIM & Takeoff Software",
          "type": "technical",
          "description": "Automated measurement and cost modeling using CostX, PlanSwift, and Cubicost."
        },
        {
          "name": "FIDIC Contract Administration & Law",
          "type": "technical",
          "description": "Drafting and administering FIDIC 1999/2017 conditions of contract, variation claims, and extension of time (EOT)."
        },
        {
          "name": "Life-Cycle Costing & Value Engineering",
          "type": "technical",
          "description": "Evaluating initial capital costs versus operating maintenance expenses to maximize client investment value."
        }
      ],
      "soft": [
        {
          "name": "Sharp Commercial & Financial Negotiation",
          "type": "soft",
          "description": "Negotiating multimillion-rupee variation claims firmly and professionally with contractors."
        },
        {
          "name": "Meticulous Contractual Scrutiny",
          "type": "soft",
          "description": "Spotting subtle legal ambiguities, risks, and pricing anomalies in complex contractual documents."
        }
      ],
      "importantSchoolSubjects": [
        "Combined Mathematics",
        "Physics",
        "Business & Accounting",
        "English Language"
      ],
      "recommendedProjects": [
        "Spreadsheet budgeting models for house construction",
        "Student membership in IQSSL student chapter"
      ]
    },
    "suitability": {
      "traits": [
        "You enjoy analyzing blueprints, calculating material costs, and managing budgets.",
        "You have sharp commercial acumen and attention to legal contract wording.",
        "You want an internationally portable career in Dubai, the UK, Australia, or Singapore."
      ],
      "challenges": [
        "High commercial stakes where single calculation errors cause huge project losses.",
        "Adversarial commercial disputes between contractors and clients.",
        "Demanding deadlines during major competitive tender bids."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I enjoy working with construction plans, calculating quantities, and financial estimates.",
          "trait": "Quantitative Estimation"
        },
        {
          "question": "I can read complex legal agreements carefully and catch subtle errors.",
          "trait": "Contractual Attention"
        },
        {
          "question": "I am assertive and confident when negotiating financial numbers with contractors.",
          "trait": "Commercial Negotiation"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Global boom in smart infrastructure, green building retrofits, and giga-projects ensures strong long-term demand for Chartered Quantity Surveyors.",
      "aiImpact": "AI automates routine 2D drawing measurement, freeing Quantity Surveyors to focus on high-value contract negotiation, risk strategy, and dispute resolution.",
      "growingSpecializations": [
        "Embodied Carbon & Green Building Cost Modeling",
        "5D BIM Digital Cost Management",
        "Construction Dispute Arbitration & Expert Witness"
      ],
      "globalDemand": "Huge demand across Saudi Arabia (NEOM, Red Sea Project), the UK, and Australia for Sri Lankan RICS-qualified professionals.",
      "challenges": [
        "Mastering sustainability carbon metrics and digital integrated project delivery (IPD)"
      ]
    },
    "relatedCareers": [
      {
        "slug": "architect",
        "title": "Architect",
        "category": "Built Environment"
      },
      {
        "slug": "engineer",
        "title": "Engineer",
        "category": "Engineering"
      },
      {
        "slug": "financial-analyst",
        "title": "Financial Analyst",
        "category": "Business"
      }
    ]
  },
  "architect": {
    "slug": "architect",
    "title": "Chartered Architect (AIA / SLIA / RIBA)",
    "sinhalaTitle": "වාස්තු විද්‍යාඥයා",
    "category": "Built Environment",
    "tagline": "Envision, conceptualize, and design breathtaking, sustainable spaces, transforming landscapes into architectural masterpieces.",
    "heroImage": "/images/careers/architect.jpg",
    "roleOverview": {
      "whatTheyDo": "Architects are licensed design professionals who blend artistic imagination, spatial aesthetics, structural engineering, and human psychology to conceptualize and detail the built environment. From private tropical villas and boutique eco-resorts to high-rise commercial towers and civic complexes, architects guide projects from preliminary sketches to construction supervision.",
      "whyItMatters": "Sri Lanka holds a legendary architectural tradition, from ancient Anuradhapura to Geoffrey Bawa's world-renowned 'Tropical Modernism'. Architects design spaces that enrich human lives while pioneering climate-resilient, passive-cooled, zero-carbon buildings suited to the tropics.",
      "dailyResponsibilities": [
        "Meet clients to establish design briefs, spatial functions, and lifestyle aspirations.",
        "Conduct solar path, wind flow, topographical, and microclimate site analyses.",
        "Develop conceptual sketches, 3D digital BIM models, and architectural renderings in Revit and Lumion.",
        "Coordinate structural, MEP (mechanical/electrical), and interior details with specialist engineers.",
        "Inspect active building construction sites to ensure design fidelity, craftsmanship, and building code compliance."
      ],
      "workEnvironment": "Design studios and ateliers with drafting tables, 3D printers, and digital workstations, combined with frequent visits to active construction sites and client meetings.",
      "lifestyleAndBalance": "Creative, intellectually fulfilling workflow with intense design sprints before competition submissions, client presentations, and municipal planning approvals.",
      "typicalEmployers": [
        "Leading Architectural Practices (Surath Wickramasinghe Associates, MICD, Kahawita De Silva)",
        "Urban Development Authority (UDA) & CECB",
        "Hospitality & Resort Developers (Resplendent Ceylon, Jetwing)",
        "International Ateliers (Singapore, Dubai, London)"
      ],
      "sriLankanSuccessStory": "An architecture graduate from University of Moratuwa establishes a design practice in Colombo, creates an award-winning eco-resort in the Southern coast that integrates seamlessly into the rocky landscape, and receives the SLIA Design Excellence Award."
    },
    "salary": {
      "entryLevel": {
        "min": 75000,
        "max": 140000,
        "label": "LKR 75k – 140k / month"
      },
      "midLevel": {
        "min": 190000,
        "max": 420000,
        "label": "LKR 190k – 420k / month"
      },
      "seniorLevel": {
        "min": 550000,
        "max": 1500000,
        "label": "LKR 550k – 1.5M+ / month (Or 4%-8% Project Design Fees)"
      },
      "govSector": "State architects in UDA, CECB, and Provincial Councils earn LKR 80,000–170,000 + executive allowances.",
      "privateSector": "Private architectural practices pay LKR 90,000–380,000. Established chartered architects running their own studios charge 4%–8% of total project construction cost, yielding millions in design commissions per project.",
      "overseasOpportunities": "Graduates with RIBA Part 1 & 2 validation from Moratuwa and CSA work at premier design firms in Singapore, Dubai, London, and Melbourne earning $4,000–$10,000 USD monthly.",
      "factors": [
        "Chartered status: Associate Member of Sri Lanka Institute of Architects (AIA - SLIA)",
        "Strength of design portfolio and award recognition",
        "BIM proficiency (Revit, Rhino, Grasshopper)"
      ],
      "source": "Sri Lanka Institute of Architects (SLIA) Scale of Professional Charges & ARB Gazette",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English, Mathematics, and Science in a single sitting.",
      "alStream": "ANY Stream (Physical Science, Bio Science, Arts, Commerce, or Technology) eligible for Moratuwa Architecture Aptitude Test.",
      "zScoreRange": "University of Moratuwa B.Arch requires passing the competitive national Architecture Aptitude Test + qualifying Z-score.",
      "entranceExams": "National Architecture Aptitude Test conducted by University of Moratuwa (Freehand drawing, spatial perception, creative aesthetics).",
      "alternativePathways": [
        "City School of Architecture (CSA) Colombo (SLIA Parts I & II and RIBA validated degree pathways).",
        "SLIIT School of Architecture in partnership with Liverpool John Moores University (B.Sc. Architecture / M.Arch).",
        "SLIA direct professional examinations (Parts I, II, and III)."
      ],
      "competitionNote": "Thousands sit the Moratuwa aptitude exam for ~60 seats. Applicants must show genuine freehand sketching ability and spatial perception."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Architecture (B.Arch - 5 Years) / B.Sc. Architecture",
        "faculty": "Faculty of Architecture / Dept of Architecture",
        "duration": "5 Years",
        "accreditation": "SLIA Parts I & II / RIBA Part 1 & 2 / CAA Accredited",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.Sc. (Hons) Architecture / Master of Architecture (M.Arch)",
        "faculty": "School of Architecture / LJMU UK",
        "duration": "3 - 5 Years",
        "accreditation": "SLIA Recognized / UGC Recognized",
        "websiteUrl": "https://sliit.lk"
      },
      {
        "name": "University of Peradeniya",
        "slug": "peradeniya",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Civil Engineering (Structural & Environmental)",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://eng.pdn.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "Pass A/L & Architecture Aptitude Exam",
        "timeline": "Age 18–19",
        "description": "Pass A/L in any stream and clear the national University of Moratuwa or CSA Architecture Aptitude Exam.",
        "milestone": "Aptitude Exam Passed"
      },
      {
        "step": 2,
        "title": "B.Sc. in Architecture (SLIA Part I)",
        "timeline": "3 Years",
        "description": "Complete foundational studio design projects, building technology, history of architecture, and environmental physics.",
        "milestone": "SLIA Part I / B.Sc. Degree"
      },
      {
        "step": 3,
        "title": "Practical Training Year & M.Arch (Part II)",
        "timeline": "2–3 Years",
        "description": "Complete 1 year of formal internship at a chartered practice, followed by the B.Arch or M.Arch master's thesis.",
        "milestone": "SLIA Part II / Master of Architecture"
      },
      {
        "step": 4,
        "title": "Chartered Examination (SLIA Part III)",
        "timeline": "2 Years Post-Grad",
        "description": "Log 24 months of registered professional office practice and clear the SLIA Part III examinations to earn AIA charter.",
        "milestone": "Chartered Architect (AIA)"
      },
      {
        "step": 5,
        "title": "Project Architect & Practice Partner",
        "timeline": "4–8 Years",
        "description": "Lead luxury residential, hospitality, and civic building projects independently, coordinating contractor teams.",
        "milestone": "Senior Design Associate"
      },
      {
        "step": 6,
        "title": "Principal Architect & Fellow (FIA)",
        "timeline": "10+ Years",
        "description": "Found your own architectural studio, win national design competitions, and shape Sri Lanka's architectural skyline.",
        "milestone": "Studio Founder / Fellow (FIA)"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "BIM & 3D Parametric Modeling",
          "type": "technical",
          "description": "Expert design in Autodesk Revit, Rhino 3D, Grasshopper, and ArchiCAD."
        },
        {
          "name": "Tropical Passive Environmental Design",
          "type": "technical",
          "description": "Designing courtyard ventilation, solar shading, rain harvesting, and thermal comfort without heavy AC."
        },
        {
          "name": "Building Regulations & UDA Codes",
          "type": "technical",
          "description": "Navigating municipal zoning laws, fire safety requirements, and planning council approvals."
        }
      ],
      "soft": [
        {
          "name": "Visual Storytelling & Client Presentation",
          "type": "soft",
          "description": "Articulating spatial concepts and evocative lifestyle visions persuasively to clients."
        },
        {
          "name": "Constructive Design Critique Resilience",
          "type": "soft",
          "description": "Welcoming criticism from design juries and iterating designs patiently to achieve perfection."
        }
      ],
      "importantSchoolSubjects": [
        "Art / Freehand Drawing",
        "Combined Mathematics",
        "Physics",
        "English Literature"
      ],
      "recommendedProjects": [
        "Sketching historic temples, colonial buildings, and nature",
        "Building physical scale models using balsa wood and card"
      ]
    },
    "suitability": {
      "traits": [
        "You have a vivid spatial imagination and love drawing, designing, and building things.",
        "You are observant of how spaces make people feel, move, and interact.",
        "You appreciate Sri Lanka's tropical climate, natural beauty, and rich cultural heritage."
      ],
      "challenges": [
        "Demanding studio deadlines and sleepless nights crafting models and drawings.",
        "Subjective critiques during design reviews requiring thick skin and resilience.",
        "Bureaucratic delays securing building permits and planning approvals."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I love sketching buildings, exploring interior spaces, and imagining better designs.",
          "trait": "Spatial Design Passion"
        },
        {
          "question": "I can handle spending days working on a design and revising it after constructive critique.",
          "trait": "Creative Persistence"
        },
        {
          "question": "I am passionate about blending artistic beauty with eco-friendly sustainable engineering.",
          "trait": "Sustainable Design Mindset"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Expanding tourism, boutique hotel developments, and demand for sustainable urban living ensure healthy career growth for creative architects.",
      "aiImpact": "Generative AI accelerates mood boarding, but human architects remain essential for spatial psychology, tropical craft, and site-specific cultural sensitivity.",
      "growingSpecializations": [
        "Tropical Passive & Net-Zero Carbon Architecture",
        "Luxury Boutique Hospitality Resort Design",
        "Heritage Conservation & Adaptive Reuse"
      ],
      "globalDemand": "Sri Lankan tropical modernism is internationally celebrated; architects are actively hired for resort projects in the Maldives, Bali, Thailand, and the Seychelles.",
      "challenges": [
        "Balancing artistic design ambitions with strict construction budget constraints"
      ]
    },
    "relatedCareers": [
      {
        "slug": "quantity-surveyor",
        "title": "Quantity Surveyor",
        "category": "Built Environment"
      },
      {
        "slug": "engineer",
        "title": "Engineer",
        "category": "Engineering"
      },
      {
        "slug": "fashion-designer",
        "title": "Fashion Designer",
        "category": "Creative"
      }
    ]
  },
  "fashion-designer": {
    "slug": "fashion-designer",
    "title": "Fashion & Apparel Designer",
    "sinhalaTitle": "විලාසිතා සහ ඇඟලුම් නිර්මාණකරු",
    "category": "Creative",
    "tagline": "Design cutting-edge apparel collections, pioneer sustainable textiles, and innovate for world-class fashion brands.",
    "heroImage": "/images/careers/fashion-designer.jpg",
    "roleOverview": {
      "whatTheyDo": "Fashion and Apparel Designers conceptualize, illustrate, and engineer clothing, activewear, and runway collections. In Sri Lanka, designers work both in luxury designer brands and within Sri Lanka's world-leading apparel manufacturing giants (MAS Holdings, Brandix, Hirdaramani) creating innovative activewear, lingerie, and performance garments for Victoria's Secret, Nike, Lululemon, and Ralph Lauren.",
      "whyItMatters": "Apparel is Sri Lanka's #1 merchandise export earner, generating over $5 Billion USD annually. By transforming the sector from basic contract assembly into original design manufacturing (ODM) and circular zero-waste fashion, designers drive Sri Lanka's economic engine.",
      "dailyResponsibilities": [
        "Conduct fashion trend forecasting, analyze global runway trends, and develop seasonal concept mood boards.",
        "Create digital garment sketches and 3D digital prototypes using CLO 3D and Browzwear.",
        "Select sustainable textiles, innovative recycled fibres, trims, and performance fabrics.",
        "Prepare detailed technical tech-packs with precise measurements, seam specifications, and stitch details.",
        "Work closely with sample machinists, fit models, and wash specialists to refine garment drape and fit."
      ],
      "workEnvironment": "Vibrant design studios, textile testing labs, fashion runways, and high-tech corporate apparel innovation hubs (MAS Silueta, Brandix InQube). Regular travel to European and US fashion capitals.",
      "lifestyleAndBalance": "Dynamic, trend-paced creative career with intense sprints ahead of seasonal collections and Colombo Fashion Week (CFW).",
      "typicalEmployers": [
        "Apparel Manufacturing Giants (MAS Holdings, Brandix, Hirdaramani, Star Garments)",
        "Independent Fashion Ateliers & Boutiques (PR Sri Lanka, The Design Collective)",
        "Colombo Fashion Week Designer Labels",
        "International Fashion Brands (Nike, Lululemon, Calvin Klein)"
      ],
      "sriLankanSuccessStory": "A designer from Colombo graduates from Moratuwa or AOD, launches an eponymous sustainable label utilizing traditional Sri Lankan handlooms and batik, debuts at Colombo Fashion Week, and showcases at Berlin Fashion Week."
    },
    "salary": {
      "entryLevel": {
        "min": 70000,
        "max": 130000,
        "label": "LKR 70k – 130k / month"
      },
      "midLevel": {
        "min": 180000,
        "max": 380000,
        "label": "LKR 180k – 380k / month"
      },
      "seniorLevel": {
        "min": 500000,
        "max": 1200000,
        "label": "LKR 500k – 1.2M+ / month (Or Label Profits)"
      },
      "govSector": "Limited government roles (SLITA textile officers: LKR 65,000–120,000).",
      "privateSector": "Apparel corporations (MAS, Brandix) offer packages from LKR 90,000 for trainees up to LKR 600,000–1,200,000+ for Design Directors with overseas travel. Independent fashion label founders earn variable profits upwards of LKR 400,000 to over 1.5M monthly.",
      "overseasOpportunities": "Sri Lankan technical apparel and activewear designers are in high demand in London, Germany, New York, Vietnam, and Bangladesh.",
      "factors": [
        "Proficiency in 3D digital fashion software (CLO 3D, Browzwear)",
        "Creative design portfolio strength and commercial viability",
        "Expertise in technical activewear and sustainable textiles"
      ],
      "source": "Joint Apparel Association Forum (JAAF) & AOD / Moratuwa Alumni Employment Records",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English Language and Mathematics.",
      "alStream": "ANY Stream (Arts, Commerce, Science, or Technology) eligible for University of Moratuwa Fashion Aptitude Test or private design colleges.",
      "zScoreRange": "University of Moratuwa B.Des Fashion Design requires passing the competitive national Fashion Aptitude Test + qualifying Z-score.",
      "entranceExams": "University of Moratuwa Fashion Design Aptitude Exam (creative drawing, aesthetic sensibility, colour theory).",
      "alternativePathways": [
        "BA (Hons) Fashion & Textile Design at Academy of Design (AOD) affiliated with Northumbria University UK.",
        "BA (Hons) Fashion Design at Raffles Design Institute Colombo.",
        "Sri Lanka Institute of Textile & Apparel (SLITA) Diplomas in Clothing Design & Technology."
      ],
      "competitionNote": "Fierce competition for ~50 state seats at Moratuwa. Strong visual portfolio showing hand sketches, colour harmonies, and fabric ideas is vital."
    },
    "universities": [
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "Bachelor of Design (B.Des) in Fashion Design & Product Development",
        "faculty": "Faculty of Architecture / Dept of Textile & Apparel",
        "duration": "4 Years",
        "accreditation": "UGC Recognized / Textile Institute (UK)",
        "websiteUrl": "https://uom.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "BA in Creative Design / Digital Media",
        "faculty": "Faculty of Humanities and Sciences",
        "duration": "3 - 4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sliit.lk"
      },
      {
        "name": "University of Moratuwa",
        "slug": "moratuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Textile & Apparel Engineering",
        "faculty": "Faculty of Engineering",
        "duration": "4 Years",
        "accreditation": "IESL / Washington Accord",
        "websiteUrl": "https://uom.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "Pass A/L & Build Design Portfolio",
        "timeline": "Age 17–19",
        "description": "Complete A/L in any stream. Develop an original visual sketchbook with garment concepts, fabric swatches, and clear the design aptitude exam.",
        "milestone": "Aptitude Exam Passed"
      },
      {
        "step": 2,
        "title": "Degree in Fashion Design",
        "timeline": "3–4 Years",
        "description": "Master flat pattern drafting, garment construction, textile science, circular fashion, and 3D digital garment modeling in CLO 3D.",
        "milestone": "B.Des / BA Degree"
      },
      {
        "step": 3,
        "title": "Graduation Runway & Industry Internship",
        "timeline": "Final Year",
        "description": "Debut graduate collection at Moratuwa Grad Show or Sri Lanka Design Festival. Complete a 6-month design internship at MAS or Brandix.",
        "milestone": "Industry Placement"
      },
      {
        "step": 4,
        "title": "Apparel Brand Designer",
        "timeline": "2–4 Years",
        "description": "Design core seasonal apparel for global activewear and lifestyle labels (Nike, Victoria's Secret), mastering technical tech-packs.",
        "milestone": "Product Designer"
      },
      {
        "step": 5,
        "title": "Senior Designer / Label Launch",
        "timeline": "4–8 Years",
        "description": "Debut independent collections at Colombo Fashion Week (CFW), incorporating Sri Lankan handloom and batik into modern luxury wear.",
        "milestone": "CFW Runway Debut"
      },
      {
        "step": 6,
        "title": "Creative Director / Global Brand Lead",
        "timeline": "8–12+ Years",
        "description": "Lead design direction for international apparel corporations or expand an exported designer fashion label globally.",
        "milestone": "Creative Director / Founder"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "3D Digital Fashion Simulation (CLO 3D / Browzwear)",
          "type": "technical",
          "description": "Virtual 3D pattern cutting, avatar fitting, and photorealistic digital draping."
        },
        {
          "name": "Digital Vector Illustration (Adobe Illustrator)",
          "type": "technical",
          "description": "Drafting precise vector flats, tech-packs, colour palettes, and print repeats."
        },
        {
          "name": "Textile Chemistry & Circular Sustainability",
          "type": "technical",
          "description": "Understanding fabric compositions, recycled polymers, zero-waste cutting, and natural dyes."
        }
      ],
      "soft": [
        {
          "name": "Intuitive Trend Forecasting & Aesthetic Vision",
          "type": "soft",
          "description": "Predicting emerging global youth styles, silhouette evolutions, and cultural movements."
        },
        {
          "name": "Commercial Reality & Cost Awareness",
          "type": "soft",
          "description": "Translating high-fashion creative concepts into commercially manufacturable garments within cost limits."
        }
      ],
      "importantSchoolSubjects": [
        "Art / Freehand Drawing",
        "Home Science / Textiles",
        "English Language",
        "Information Technology"
      ],
      "recommendedProjects": [
        "Customizing vintage clothing and sewing original garments",
        "Following international runway collections (Vogue Runway, WGSN)"
      ]
    },
    "suitability": {
      "traits": [
        "You are artistic, expressive, and fascinated by textiles, colours, and personal style.",
        "You have an intuitive eye for silhouettes, proportions, and tactile fabrics.",
        "You are excited to design clothing manufactured for world-leading brands."
      ],
      "challenges": [
        "Fast-paced seasonal collection deadlines and intense creative pressure.",
        "Competitive retail apparel market requiring sharp business acumen.",
        "Need for continuous technological upskilling in 3D digital apparel software."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I love paying attention to what people wear and imagining how to redesign outfits.",
          "trait": "Fashion Observation"
        },
        {
          "question": "I am excited by designing garments using 3D digital software like CLO 3D.",
          "trait": "Digital Apparel Aptitude"
        },
        {
          "question": "I am passionate about eco-friendly fashion and ethical circular textiles.",
          "trait": "Sustainable Ethics"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Accelerated shift toward 3D digital virtual prototyping and sustainable circular fashion makes tech-savvy fashion designers highly sought after in Sri Lanka.",
      "aiImpact": "Generative AI produces preliminary mood board motifs, but human designers are essential for tactile touch, ergonomic stretch fits, and emotional brand resonance.",
      "growingSpecializations": [
        "3D Digital Fashion & Virtual Prototyping",
        "Circular & Zero-Waste Textile Innovation",
        "Technical Performance Activewear Design"
      ],
      "globalDemand": "Sri Lankan technical apparel designers hold key creative positions at Nike, Lululemon, Adidas, and global retail brands across Asia and the West.",
      "challenges": [
        "Rapid transition away from physical sampling to purely digital 3D design workflows"
      ]
    },
    "relatedCareers": [
      {
        "slug": "architect",
        "title": "Architect",
        "category": "Built Environment"
      },
      {
        "slug": "digital-marketer",
        "title": "Digital Marketer",
        "category": "Marketing"
      },
      {
        "slug": "hr-manager",
        "title": "Human Resources Manager",
        "category": "Business"
      }
    ]
  },
  "digital-marketer": {
    "slug": "digital-marketer",
    "title": "Digital Marketing Strategist / Growth Lead",
    "sinhalaTitle": "ඩිජිටල් අලෙවිකරණ විශේෂඥයා",
    "category": "Marketing",
    "tagline": "Architect data-driven ad campaigns, scale online brand revenue, and lead multi-channel growth across digital ecosystems.",
    "heroImage": "/images/careers/digital-marketer.jpg",
    "roleOverview": {
      "whatTheyDo": "Digital Marketing Strategists and Growth Leads direct the online customer acquisition, conversion, and brand scaling for modern businesses. Managing Search Engine Optimization (SEO), paid advertising (Meta Ads, Google Ads), email automation, conversion optimization (CRO), and content marketing, they analyze real-time data to maximize Return on Ad Spend (ROAS).",
      "whyItMatters": "Every modern enterprise—from Sri Lankan banking conglomerates and hotel chains to international SaaS startups and e-commerce brands—depends on digital channels for customer growth. Digital marketers transform marketing budgets into predictable, measurable revenue.",
      "dailyResponsibilities": [
        "Launch and optimize paid performance ad campaigns across Meta Ads, Google Ads, TikTok, and LinkedIn.",
        "Execute technical and programmatic SEO strategies to secure top organic search rankings on Google.",
        "Build automated customer nurture email flows and retention funnels using HubSpot, Klaviyo, and Brevo.",
        "Analyze web traffic, user drop-offs, and conversion funnels using Google Analytics 4 (GA4) and Mixpanel.",
        "Run multivariate A/B tests on landing pages, headlines, and ad creatives to maximize conversion rates."
      ],
      "workEnvironment": "Modern tech hubs, creative digital agencies, corporate boardrooms, and high-flexibility remote home offices serving overseas international clients.",
      "lifestyleAndBalance": "Metric-driven, dynamic workflow. High remote flexibility with intense sprints during product launches, seasonal campaigns, and Black Friday sales.",
      "typicalEmployers": [
        "Leading Digital & Advertising Agencies (Ogilvy, Dentsu, Roar Digital, Loops)",
        "Top Conglomerates & Banks (Commercial Bank, Dialog Axiata, John Keells)",
        "High-Growth Tech Startups & International SaaS Brands",
        "Global Remote Freelance Clients (Upwork, US/UK/Australia)"
      ],
      "sriLankanSuccessStory": "A university graduate from Kelaniya masters SEO and performance media buying, runs ad funnels for international software brands, and builds a remote digital agency from Colombo earning six-figure USD revenue."
    },
    "salary": {
      "entryLevel": {
        "min": 65000,
        "max": 120000,
        "label": "LKR 65k – 120k / month"
      },
      "midLevel": {
        "min": 160000,
        "max": 350000,
        "label": "LKR 160k – 350k / month"
      },
      "seniorLevel": {
        "min": 450000,
        "max": 1200000,
        "label": "LKR 450k – 1.2M+ / month (Or $2k–$6k USD Remote)"
      },
      "govSector": "Limited government roles (Digital media officers: LKR 60,000–110,000).",
      "privateSector": "Local agencies and corporate enterprises pay LKR 80,000–300,000 for mid-level leads. Exceptional potential for remote foreign consulting for US/UK/Australian brands earning $1,500–$5,000 USD monthly from Sri Lanka.",
      "overseasOpportunities": "One of the most remote-friendly professions on earth. Full global work portability without needing work visas.",
      "factors": [
        "Proven track record of generating positive ROAS and revenue growth",
        "Technical skills (GA4, Google Tag Manager, Python for SEO, SQL, CRO)",
        "International client communication fluency"
      ],
      "source": "Sri Lanka Institute of Marketing (SLIM) & CIM (UK) Benchmark Compensation Data",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English Language and Mathematics.",
      "alStream": "ANY Stream (Commerce, Arts, Science, or Technology) eligible.",
      "zScoreRange": "State university degrees in Marketing (USJ, Colombo, Kelaniya) require Commerce Z-score ~1.55–1.85.",
      "entranceExams": "UGC university admission selection for state universities.",
      "alternativePathways": [
        "Professional qualification via Chartered Institute of Marketing (CIM UK) or Sri Lanka Institute of Marketing (SLIM).",
        "B.Sc. / BBA in Marketing at SLIIT, NSBM, or foreign university affiliations.",
        "Industry certifications: Google Skillshop, Meta Certified Media Buying Professional, HubSpot Inbound."
      ],
      "competitionNote": "While degrees provide solid foundations, real-world campaign portfolios, live ad spend results, and verifiable ROI carry far higher weight in modern hiring."
    },
    "universities": [
      {
        "name": "University of Sri Jayewardenepura",
        "slug": "jayewardenepura",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Marketing Management",
        "faculty": "Faculty of Management Studies & Commerce",
        "duration": "4 Years",
        "accreditation": "UGC / CIM (UK) Accredited",
        "websiteUrl": "https://mgt.sjp.ac.lk"
      },
      {
        "name": "University of Kelaniya",
        "slug": "kelaniya",
        "type": "Government (UGC)",
        "degreeName": "B.B.M. (Hons) in Digital Marketing / Marketing",
        "faculty": "Faculty of Commerce & Management Studies",
        "duration": "4 Years",
        "accreditation": "UGC / SLIM Accredited",
        "websiteUrl": "https://fcms.kln.ac.lk"
      },
      {
        "name": "SLIIT",
        "slug": "sliit",
        "type": "Non-State / Private",
        "degreeName": "B.B.A. (Hons) in Marketing Management / Digital Business",
        "faculty": "SLIIT Business School",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://business.sliit.lk"
      },
      {
        "name": "University of Colombo",
        "slug": "colombo",
        "type": "Government (UGC)",
        "degreeName": "B.B.A. (Hons) in Marketing",
        "faculty": "Faculty of Management & Finance",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://mgmt.cmb.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "Pass A/L & Free Certifications",
        "timeline": "Age 18–19",
        "description": "Pass A/L and complete recognized free online credentials in Google Search Ads, GA4, and HubSpot Inbound.",
        "milestone": "Google / Meta Certified"
      },
      {
        "step": 2,
        "title": "Marketing Degree or CIM / SLIM",
        "timeline": "3–4 Years",
        "description": "Complete a degree in Marketing, Digital Business, or CIM (UK). Learn market segmentation, branding, and consumer behavior.",
        "milestone": "Degree / CIM Completed"
      },
      {
        "step": 3,
        "title": "Agency Media Buyer / SEO Associate",
        "timeline": "1–2 Years",
        "description": "Work in a fast-paced agency managing live ad budgets, writing high-converting copy, and optimizing website funnels.",
        "milestone": "Live Campaign Portfolio"
      },
      {
        "step": 4,
        "title": "Performance Marketing Lead",
        "timeline": "2–4 Years",
        "description": "Master paid acquisition at scale. Optimize Customer Acquisition Cost (CAC) against Customer Lifetime Value (LTV).",
        "milestone": "Senior Growth Specialist"
      },
      {
        "step": 5,
        "title": "Head of Digital / Growth Director",
        "timeline": "4–8 Years",
        "description": "Lead marketing teams, manage six-figure monthly ad budgets for global brands, and scale SaaS/e-commerce businesses.",
        "milestone": "Head of Marketing"
      },
      {
        "step": 6,
        "title": "Chief Marketing Officer (CMO) / Founder",
        "timeline": "8–12+ Years",
        "description": "Direct global brand strategy, found an international boutique marketing consultancy, or advise venture-backed tech startups.",
        "milestone": "CMO / Agency Founder"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Performance Advertising (Meta Ads, Google Ads)",
          "type": "technical",
          "description": "Managing paid ad spend, bid strategies, audience retargeting, and Conversion API (CAPI)."
        },
        {
          "name": "Technical SEO & Search Analytics",
          "type": "technical",
          "description": "Mastering Semrush, Ahrefs, crawl budgets, schema markup, and programmatic content ranking."
        },
        {
          "name": "Web Analytics & Event Tracking (GA4 & GTM)",
          "type": "technical",
          "description": "Setting up custom event triggers in Google Tag Manager and Looker Studio client dashboards."
        }
      ],
      "soft": [
        {
          "name": "Consumer Psychology & Direct Response Copy",
          "type": "soft",
          "description": "Understanding cognitive buying triggers and writing persuasive, action-driving ad copy."
        },
        {
          "name": "Agile Data-Driven Experimentation",
          "type": "soft",
          "description": "Rapidly testing hypotheses, analyzing statistical significance, and discarding failed ad angles."
        }
      ],
      "importantSchoolSubjects": [
        "Business Studies",
        "English Language",
        "Information Technology",
        "Mathematics"
      ],
      "recommendedProjects": [
        "Building and ranking a niche blog on Google",
        "Running small test ad campaigns on Instagram to sell a product"
      ]
    },
    "suitability": {
      "traits": [
        "You are curious about why people buy things and how emotions drive consumer decisions.",
        "You enjoy looking at data dashboards, metrics, and testing what works best.",
        "You want a high-paying, remote-friendly career serving international clients."
      ],
      "challenges": [
        "Continuous platform algorithm updates (Google core updates, Meta privacy rules).",
        "High pressure linked directly to daily ad spend return and lead targets.",
        "Need for relentless self-education in new AI and marketing automation tools."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I find myself analyzing why certain online ads grab my attention and persuade me.",
          "trait": "Marketing Curiosity"
        },
        {
          "question": "I enjoy analyzing data charts and testing variations to see what performs better.",
          "trait": "Data Experimentation"
        },
        {
          "question": "I want the freedom to work remotely for international clients from Sri Lanka.",
          "trait": "Remote Work Mindset"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Massive global e-commerce and AI-powered personalization fuel ongoing demand for data-driven performance marketers.",
      "aiImpact": "AI creates ad variants and handles routine bid adjustments, making strategic positioning, brand storytelling, and data architecture the highest-paid skills.",
      "growingSpecializations": [
        "AI Marketing & Automated Predictive Personalization",
        "First-Party Data Strategy & Privacy-First Tracking",
        "B2B SaaS Product-Led Growth (PLG)"
      ],
      "globalDemand": "Global companies actively seek remote performance marketers and SEO engineers, offering high USD compensation without leaving Sri Lanka.",
      "challenges": [
        "Adapting to cookieless tracking and stringent international data privacy regulations"
      ]
    },
    "relatedCareers": [
      {
        "slug": "software-engineer",
        "title": "Software Engineer",
        "category": "Technology"
      },
      {
        "slug": "fashion-designer",
        "title": "Fashion Designer",
        "category": "Creative"
      },
      {
        "slug": "hr-manager",
        "title": "Human Resources Manager",
        "category": "Business"
      }
    ]
  },
  "ecotourism-naturalist": {
    "slug": "ecotourism-naturalist",
    "title": "Ecotourism Specialist & Field Naturalist",
    "sinhalaTitle": "පාරිසරික සංචාරක විශේෂඥයා / ස්වභාවවේදියා",
    "category": "Tourism",
    "tagline": "Guide wilderness expeditions, champion wildlife conservation, and curate sustainable eco-lodge experiences across Sri Lanka's biodiversity hotspots.",
    "heroImage": "/images/careers/ecotourism-naturalist.jpg",
    "roleOverview": {
      "whatTheyDo": "Ecotourism Specialists and Field Naturalists design, lead, and manage sustainable wildlife expeditions, marine safaris, and nature excursions for eco-conscious international travellers. Stationed at premier wildlife reserves (Yala, Wilpattu, Sinharaja, Minneriya) and luxury eco-lodges, they interpret animal behaviours, lead guided birding and leopard tracking safaris, deliver educational evening conservation lectures, and ensure that tourism directly funds forest protection and rural community livelihoods.",
      "whyItMatters": "Sri Lanka is recognized by Conservation International as one of the world's 36 global biodiversity hotspots. Ecotourism converts wildlife conservation from a cost into an economic asset, providing vital foreign exchange while safeguarding leopards, Asian elephants, blue whales, and endemic rainforest species.",
      "dailyResponsibilities": [
        "Lead 4x4 wildlife tracking safaris and interpretive rainforest walking expeditions for foreign and local guests.",
        "Identify and interpret endemic flora, bird songs, mammal tracks, and herpetofauna in natural habitats.",
        "Deliver captivating multimedia evening lectures on elephant social behaviour, leopard ecology, and marine biology.",
        "Conduct wildlife population monitoring, camera-trapping surveys, and contribute sightings data to national databases.",
        "Collaborate with eco-lodge management to implement zero-plastic, solar-energy, and regenerative tourism practices."
      ],
      "workEnvironment": "Sri Lanka's national parks (Yala, Wilpattu, Udawalawe), UNESCO World Heritage rainforests (Sinharaja, Knuckles), whale-watching oceans (Mirissa, Trincomalee), and luxury eco-resorts (Jetwing Vil Uyana, Cinnamon Wild, Wild Coast Tented Lodge).",
      "lifestyleAndBalance": "Early morning and late afternoon safari drives during peak wildlife activity. Immersive, nature-based living away from crowded urban cities.",
      "typicalEmployers": [
        "Luxury Safari & Eco-Lodges (Resplendent Ceylon, Jetwing, Cinnamon Nature Trails, Aitken Spence)",
        "Specialized Wildlife Tour Companies (Walkers Tours, Eco Team, Sri Lanka Big Game Safaris)",
        "International Wildlife Media & NGOs (IUCN, UNDP, BBC Natural History Unit Fixers)"
      ],
      "sriLankanSuccessStory": "A passionate young birdwatcher studies Zoology, completes SLTDA naturalist licensing, leads VIP wildlife photography expeditions in Yala, and authors a recognized field guide on Sri Lankan endemic birds while directing wildlife experiences for a luxury safari lodge."
    },
    "salary": {
      "entryLevel": {
        "min": 55000,
        "max": 95000,
        "label": "LKR 55k – 95k / month + Tips"
      },
      "midLevel": {
        "min": 130000,
        "max": 250000,
        "label": "LKR 130k – 250k / month + Tips"
      },
      "seniorLevel": {
        "min": 320000,
        "max": 650000,
        "label": "LKR 320k – 650k+ / month + Generous Foreign Tips"
      },
      "govSector": "Wildlife Department Range Officers: LKR 60,000–110,000.",
      "privateSector": "Premier hotel chains (Jetwing, Cinnamon, Resplendent Ceylon) offer basic pay plus free lodging, meals, safari allowances, and substantial foreign guest tips ($500–$1,500 USD monthly during peak safari seasons).",
      "overseasOpportunities": "Top Sri Lankan naturalists are regularly hired as safari expedition guides in the Maldives, East Africa (Kenya, Tanzania), Madagascar, and aboard polar expedition cruise ships.",
      "factors": [
        "SLTDA National Tour Guide / Site Guide License",
        "Specialized wildlife expertise (ornithology, cetacean biology, photography)",
        "Foreign language fluency (English, German, French)"
      ],
      "source": "Sri Lanka Tourism Development Authority (SLTDA) & Field Ornithology Group of Sri Lanka (FOGSL)",
      "lastUpdated": "October 2026"
    },
    "education": {
      "olRequirements": "Minimum 6 passes at O/L with Credits in English Language and Science.",
      "alStream": "Biological Science (Bio, Chemistry, Agri/Physics) or Arts with Geography.",
      "zScoreRange": "State university degrees in Tourism Management or Environmental Science require Z-score ~1.20–1.50.",
      "entranceExams": "SLTDA National Tour Guide / Field Naturalist Examination and interview.",
      "alternativePathways": [
        "SLITHM (Sri Lanka Institute of Tourism & Hotel Management) Tour Guide Training certification.",
        "Field Ornithology Group of Sri Lanka (FOGSL) bird identification and ecology courses.",
        "Young Zoologists' Association (YZA) field ecology diploma at Dehiwala Zoo."
      ],
      "competitionNote": "While degrees in zoology or tourism provide scientific depth, genuine wildlife passion, field tracking ability, charismatic storytelling, and English fluency are decisive."
    },
    "universities": [
      {
        "name": "Uva Wellassa University",
        "slug": "uva-wellassa",
        "type": "Government (UGC)",
        "degreeName": "B.B.M. (Hons) in Hospitality, Tourism and Events Management",
        "faculty": "Faculty of Management",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://uwu.ac.lk"
      },
      {
        "name": "Rajarata University of Sri Lanka",
        "slug": "rajarata",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Applied Biology / Environmental Science",
        "faculty": "Faculty of Applied Sciences",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://rjt.ac.lk"
      },
      {
        "name": "University of Ruhuna",
        "slug": "ruhuna",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. in Zoology (Ecology & Marine Biology)",
        "faculty": "Faculty of Science",
        "duration": "3 - 4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://ruh.ac.lk"
      },
      {
        "name": "Sabaragamuwa University of Sri Lanka",
        "slug": "sabaragamuwa",
        "type": "Government (UGC)",
        "degreeName": "B.Sc. (Hons) in Tourism Management / Eco-Tourism",
        "faculty": "Faculty of Management Studies",
        "duration": "4 Years",
        "accreditation": "UGC Recognized",
        "websiteUrl": "https://sab.ac.lk"
      }
    ],
    "roadmap": [
      {
        "step": 1,
        "title": "A/L Science & Field Birdwatching",
        "timeline": "Age 17–19",
        "description": "Complete A/L in Bio Science or Arts. Join youth wildlife societies, birdwatching field camps, and learn bird calls and tracks.",
        "milestone": "A/L Pass & Field Knowledge"
      },
      {
        "step": 2,
        "title": "University Degree or SLITHM Licensure",
        "timeline": "3–4 Years",
        "description": "Complete a degree in Environmental Science, Zoology, or Eco-Tourism, or earn the SLTDA National Tour Guide certification.",
        "milestone": "SLTDA Guide License / B.Sc."
      },
      {
        "step": 3,
        "title": "Trainee Field Naturalist",
        "timeline": "1–2 Years",
        "description": "Join an eco-lodge or wildlife safari camp in Yala, Udawalawe, or Sinharaja. Conduct daily game drives and night nature walks.",
        "milestone": "Resident Naturalist Placement"
      },
      {
        "step": 4,
        "title": "Senior Safari Naturalist",
        "timeline": "2–5 Years",
        "description": "Lead specialist birding and wildlife photography expeditions. Train safari drivers in ethical wildlife viewing protocols.",
        "milestone": "Senior Naturalist"
      },
      {
        "step": 5,
        "title": "Head of Naturalist Operations",
        "timeline": "5–8 Years",
        "description": "Direct naturalist teams across luxury safari lodges, spearhead biodiversity restoration, and human-elephant conflict mitigation.",
        "milestone": "Head of Sustainability"
      },
      {
        "step": 6,
        "title": "Expedition Leader & Conservation Entrepreneur",
        "timeline": "8–15+ Years",
        "description": "Guide international film crews (BBC, Netflix Wildlife), found bespoke eco-safari companies, or consult for protected area management.",
        "milestone": "Expedition Leader / Founder"
      }
    ],
    "skills": {
      "technical": [
        {
          "name": "Field Species Identification",
          "type": "technical",
          "description": "Identifying hundreds of birds by flight pattern and call, plus reptiles, mammals, and endemic flora."
        },
        {
          "name": "Animal Tracking & Behaviour Reading",
          "type": "technical",
          "description": "Reading alarm calls, pugmarks, scrape marks, and predicting predator movements in the wild."
        },
        {
          "name": "Wildlife Photography & Optics Operation",
          "type": "technical",
          "description": "Operating telephoto spotting scopes and camera equipment to capture rare wildlife encounters for guests."
        }
      ],
      "soft": [
        {
          "name": "Captivating Storytelling & Guest Engagement",
          "type": "soft",
          "description": "Explaining complex jungle ecology simply and entertainingly to international travellers."
        },
        {
          "name": "Ethical Conservation Stewardship",
          "type": "soft",
          "description": "Strictly enforcing animal distance and welfare protocols, resisting tourist pressure to crowd wildlife."
        }
      ],
      "importantSchoolSubjects": [
        "Biology / Environmental Science",
        "Geography",
        "English Language",
        "General Science"
      ],
      "recommendedProjects": [
        "Birdwatching camps and submitting sightings to eBird Sri Lanka",
        "Volunteering at wildlife rehabilitation or turtle conservation centres"
      ]
    },
    "suitability": {
      "traits": [
        "You are deeply in love with nature, wildlife, and outdoor wilderness exploration.",
        "You are charismatic, friendly, and enjoy speaking with international travellers.",
        "You enjoy peaceful rural living close to national parks and pristine forests."
      ],
      "challenges": [
        "Working outdoors in intense heat, dust, rain, and humidity.",
        "Living away from urban cities and family during long safari seasons.",
        "Safety risks working around wild elephants, leopards, and venomous snakes."
      ],
      "selfAssessmentQuestions": [
        {
          "question": "I can happily wake up at 5:00 AM to spend hours tracking wildlife in dusty or rainy conditions.",
          "trait": "Wilderness Physical Stamina"
        },
        {
          "question": "I love learning about animal behaviour, identifying bird species, and rainforest ecology.",
          "trait": "Naturalist Observation"
        },
        {
          "question": "I am eager and confident to share stories about Sri Lankan nature with international guests.",
          "trait": "Storytelling & Hospitality"
        }
      ]
    },
    "futureOutlook": {
      "trendSummary": "Global shift toward high-value regenerative eco-tourism makes skilled, educated field naturalists highly valued in Sri Lanka.",
      "aiImpact": "AI assists in photo identification of wildlife, but human naturalists provide irreplaceable sensory tracking, safety intuition, and memorable storytelling.",
      "growingSpecializations": [
        "Marine Mammal & Pelagic Ocean Safari Guide",
        "Wildlife Documentary Expedition Fixer",
        "Regenerative Carbon-Offset Eco-Lodge Assessor"
      ],
      "globalDemand": "Luxury safari operators in East Africa, the Maldives, and polar expedition ships actively recruit English-speaking naturalists.",
      "challenges": [
        "Safeguarding natural habitats against climate change and over-commercialization"
      ]
    },
    "relatedCareers": [
      {
        "slug": "wildlife-conservationist",
        "title": "Wildlife Conservationist",
        "category": "Science"
      },
      {
        "slug": "marine-biologist",
        "title": "Marine Biologist",
        "category": "Science"
      },
      {
        "slug": "hospitality-manager",
        "title": "Hospitality & Hotel Manager",
        "category": "Business"
      }
    ]
  }
};

export function getCareerDetail(slug: string): CareerDetail | undefined {
  return careerDetails[slug];
}

export function getAllCareerSlugs(): string[] {
  return Object.keys(careerDetails);
}
