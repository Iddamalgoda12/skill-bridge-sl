// Sri Lanka Universities Comprehensive Profile Dataset (26 UGC & Leading Higher Education Institutions)
// Authentic historical, faculty, degree pathway, facility, and admissions dataset for SkillBridge SL.

export interface PhotoItem {
  id: string;
  src: string;
  badge?: string;
  title: string;
  desc: string;
  aspect?: string;
  location: string;
  credit: string;
  badgeKey?: string;
  titleKey?: string;
  descKey?: string;
}

export interface FacultyItem {
  id: string;
  name: string;
  campusZone?: string;
  location: string;
  established: string;
  website: string;
  stream: string;
  departments: string[];
  tone: string;
  description: string;
}

export interface DegreeItem {
  name: string;
  tag?: string;
}

export interface DegreeGroupItem {
  id: string;
  title: string;
  faculty: string;
  tone: string;
  degrees: DegreeItem[];
}

export interface FacilityItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
  image: string;
  tone: string;
}

export interface AdmissionsData {
  isGovernment: boolean;
  eyebrow: string;
  title: string;
  description: string;
  step1Title: string;
  step1Desc: string;
  step1Tags: string[];
  step2Title: string;
  step2Desc: string;
  quotaMerit: string;
  quotaDistrict: string;
  quotaSpecial: string;
  quotaNote?: string;
  step3Title: string;
  step3Desc: string;
  portalUrl: string;
  portalLabel: string;
}

export interface OfficialLinkItem {
  label: string;
  url: string;
  description: string;
}

export interface PillarItem {
  title: string;
  subtitle: string;
  desc: string;
}

export interface HeritageData {
  eyebrow: string;
  title: string;
  description: string;
  landmarkTitle: string;
  landmarkDesc: string;
  image: string;
  imageBadge: string;
  pillars: PillarItem[];
}

export interface UniversityDetail {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  stateLabel: string;
  motto: string;
  crest: string;
  location: string;
  province: string;
  areas: string[];
  website: string;
  metrics: {
    faculties: string;
    founded: string;
    campus: string;
    type: string;
  };
  rankings: {
    nationalValue: string;
    nationalLabel: string;
    worldValue: string;
    worldLabel: string;
    source: string;
    note: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    tagline: string;
  };
  heritage: HeritageData;
  gallery: PhotoItem[];
  faculties: FacultyItem[];
  degreeGroups: DegreeGroupItem[];
  facilities: FacilityItem[];
  admissions: AdmissionsData;
  officialLinks: OfficialLinkItem[];
}

export const universityDetails: Record<string, UniversityDetail> = {
  "colombo": {
    "slug": "colombo",
    "name": "University of Colombo",
    "shortName": "UOC",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Buddhih Sarvatra Bhrajate (Wisdom Shines Everywhere)",
    "crest": "/images/universities/crests/colombo.png",
    "location": "Kumaratunga Munidasa Mawatha, Colombo 03",
    "province": "Western Province",
    "areas": [
      "Medicine",
      "Science",
      "Law",
      "Management",
      "Technology",
      "Computing"
    ],
    "website": "https://cmb.ac.lk",
    "metrics": {
      "faculties": "9 Faculties & UCSC",
      "founded": "1870 / 1921",
      "campus": "Colombo 03 (Metropolitan)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "1st",
      "nationalLabel": "SRI LANKA",
      "worldValue": "1,482",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Sri Lanka's #1 ranked university for academic prestige, citations impact, and international research collaborations."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOC",
      "title": "Sri Lanka's Oldest Metropolitan Seat of Higher Learning",
      "description": "Tracing its illustrious lineage back to the Ceylon Medical College established in 1870 and University College Colombo in 1921, the University of Colombo is internationally recognized as Sri Lanka's premier metropolitan university. Located in the diplomatic heart of Colombo, UOC trains the nation's foremost leaders in medicine, law, natural sciences, technology, and economic policy.",
      "tagline": "National flagship public university • Heritage colonial campus in Colombo 03"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Centuries of Academic Prestige & Colonial Landmarks",
      "description": "Spread along scenic Kumaratunga Munidasa Mawatha in Cinnamon Gardens, the Colombo campus harmoniously blends grand neoclassical British colonial architecture with state-of-the-art computational and biomedical laboratories.",
      "landmarkTitle": "College House & King George Hall (KG Hall)",
      "landmarkDesc": "College House, the historic administrative seat of Sri Lankan university education, stands alongside the iconic King George Hall—a venerable venue where the nation's key historical assemblies and convocations have taken place.",
      "image": "/images/universities/gallery/colombo/photo2.jpg",
      "imageBadge": "King George Hall & College House",
      "pillars": [
        {
          "title": "Oldest Medical School in South Asia",
          "desc": "The Faculty of Medicine (founded 1870) has trained generations of world-renowned clinicians, medical researchers, and health leaders.",
          "subtitle": ""
        },
        {
          "title": "National Pioneer in Law & Computing",
          "desc": "Home to Sri Lanka's premier state Faculty of Law and the University of Colombo School of Computing (UCSC), which introduced the internet to Sri Lanka.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/colombo.jpg",
        "badge": "Main Campus",
        "title": "University of Colombo Main Academic Gate",
        "desc": "The grand ceremonial entrance on Kumaratunga Munidasa Mawatha, Colombo 03.",
        "aspect": "16/10",
        "location": "Colombo 03",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/colombo/photo2.jpg",
        "badge": "Landmark",
        "title": "College House & King George Hall",
        "desc": "The colonial administration building and historic convocation auditorium.",
        "aspect": "4/3",
        "location": "Cinnamon Gardens, Colombo",
        "credit": "Wikimedia Commons / Educational Archives"
      },
      {
        "id": "science",
        "src": "/images/universities/gallery/colombo/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Science & UCSC Complex",
        "desc": "State-of-the-art physics, chemistry, and computing lecture complexes.",
        "aspect": "4/3",
        "location": "Thurstan Road, Colombo 03",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/colombo/photo4.jpg",
        "badge": "Campus Life",
        "title": "Shaded Avenues & Reading Pavilions",
        "desc": "Tree-lined boulevards connecting the Faculties of Arts, Law, and Science.",
        "aspect": "16/9",
        "location": "Colombo 03",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/colombo/photo5.jpg",
        "badge": "Research Hub",
        "title": "Colombo Central Library & Digital Repositories",
        "desc": "Houses over 250,000+ volumes, rare Ceyloniana collections, and digital journals.",
        "aspect": "4/3",
        "location": "Colombo 03",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "colombo-08",
        "location": "Kynsey Road, Colombo 08",
        "established": "1870",
        "website": "https://med.cmb.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Anatomy, Physiology & Biochemistry",
          "Clinical Medicine & Paediatrics",
          "Surgery & Obstetrics",
          "National Hospital of Sri Lanka Clinical Training"
        ],
        "tone": "tone-peach",
        "description": "South Asia's second-oldest medical school, providing MBBS training at National Hospital of Sri Lanka."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "colombo-03",
        "location": "Thurstan Road, Colombo 03",
        "established": "1942",
        "website": "https://science.cmb.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Department of Mathematics",
          "Department of Physics & Electronics",
          "Department of Chemistry",
          "Department of Plant Sciences",
          "Department of Zoology & Environment"
        ],
        "tone": "tone-mint",
        "description": "Flagship pure and applied science faculty leading national research in quantum physics, nanomaterials, and molecular biology."
      },
      {
        "id": "law",
        "name": "Faculty of Law",
        "campusZone": "colombo-03",
        "location": "Philip Gunewardena Mawatha, Colombo 03",
        "established": "1947",
        "website": "https://law.cmb.ac.lk",
        "stream": "Arts / Open A/L Entry with High Z-Score",
        "departments": [
          "Public & International Law",
          "Private & Comparative Law",
          "Commercial Law",
          "Human Rights Center"
        ],
        "tone": "tone-lavender",
        "description": "The only dedicated state university Faculty of Law in Sri Lanka, producing the nation's chief justices, attorney generals, and legal scholars."
      },
      {
        "id": "ucsc",
        "name": "School of Computing (UCSC)",
        "campusZone": "colombo-03",
        "location": "Reid Avenue, Colombo 07",
        "established": "1967",
        "website": "https://ucsc.cmb.ac.lk",
        "stream": "Physical Science (Combined Maths) / Direct A/L Entry",
        "departments": [
          "Computation & Intelligent Systems",
          "Communication & Media Technologies",
          "Information Systems",
          "Advanced Digital Media Lab"
        ],
        "tone": "tone-ice",
        "description": "Sri Lanka's foremost centre of computing excellence, offering BCS, CS, Software Engineering, and external BIT degrees."
      },
      {
        "id": "management",
        "name": "Faculty of Management & Finance",
        "campusZone": "colombo-03",
        "location": "Colombo 03",
        "established": "1979",
        "website": "https://mgmt.cmb.ac.lk",
        "stream": "Commerce Stream (Accounting, Econ, Business)",
        "departments": [
          "Accounting",
          "Finance",
          "Marketing",
          "Human Resource Management",
          "Management & Organization Studies"
        ],
        "tone": "tone-peach",
        "description": "Premier metropolitan business school with extensive corporate partnerships in the Colombo financial district."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "colombo-03",
        "location": "Colombo 03 & Welisara",
        "established": "2016",
        "website": "https://tech.cmb.ac.lk",
        "stream": "Technology Stream (Engineering Tech / Bio Tech / ICT)",
        "departments": [
          "Engineering Technology (ET)",
          "Biosystems Technology (BST)",
          "Information & Communication Technology (ICT)",
          "Agricultural Technology"
        ],
        "tone": "tone-ice",
        "description": "Specialized faculty focused on applied industrial technology, robotics, smart agriculture, and cyber technology."
      },
      {
        "id": "arts",
        "name": "Faculty of Arts",
        "campusZone": "colombo-03",
        "location": "Colombo 03",
        "established": "1921",
        "website": "https://arts.cmb.ac.lk",
        "stream": "Arts & Humanities",
        "departments": [
          "Economics & Public Policy",
          "International Relations",
          "Sociology",
          "English & Modern Languages",
          "History & Archaeology"
        ],
        "tone": "tone-mint",
        "description": "Largest humanities faculty in the island, addressing governance, diplomatic studies, and social development."
      }
    ],
    "degreeGroups": [
      {
        "id": "medicine-health",
        "title": "Medicine, Healthcare & Clinical Sciences",
        "faculty": "Faculty of Medicine",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC Accredited)"
          },
          {
            "name": "BSc (Hons) in Physiotherapy (4 Years)"
          },
          {
            "name": "BSc (Hons) in Medical Laboratory Science (4 Years)"
          }
        ]
      },
      {
        "id": "computing-ai",
        "title": "Computing, Software Engineering & AI",
        "faculty": "School of Computing (UCSC) & Science",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Software Engineering (4 Years)"
          },
          {
            "name": "BSc (Hons) in Information Systems (4 Years)"
          },
          {
            "name": "Bachelor of Information Technology - BIT External (3 Years)"
          }
        ]
      },
      {
        "id": "law-jurisprudence",
        "title": "Law & Jurisprudence",
        "faculty": "Faculty of Law",
        "tone": "tone-lavender",
        "degrees": [
          {
            "name": "Bachelor of Laws - LL.B (Hons) (4 Years - Direct qualification for Attorney-at-Law)"
          },
          {
            "name": "LL.M Master of Laws Postgraduate Programme"
          }
        ]
      },
      {
        "id": "sciences-maths",
        "title": "Natural, Computational & Biological Sciences",
        "faculty": "Faculty of Science",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics & Computational Physics (4 Years)"
          },
          {
            "name": "BSc (Hons) in Mathematics & Statistics (4 Years)"
          },
          {
            "name": "BSc (Hons) in Molecular Biology & Plant Biotechnology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Biochemistry & Cell Biology (4 Years)"
          }
        ]
      },
      {
        "id": "business-finance",
        "title": "Management, Banking & Corporate Finance",
        "faculty": "Faculty of Management & Finance",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BBA (Hons) in Accounting (4 Years - CIMA / ACCA / CA Sri Lanka Accredited)"
          },
          {
            "name": "BBA (Hons) in Finance (4 Years - CFA Institute University Affiliate)"
          },
          {
            "name": "BBA (Hons) in Marketing (4 Years)"
          },
          {
            "name": "BBA (Hons) in Human Resource Management (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "University of Colombo Central Library",
        "desc": "Houses over 250,000+ volumes, extensive legal libraries, e-journal subscriptions (IEEE, ScienceDirect), and silent study pods.",
        "badge": "250,000+ Volumes",
        "image": "/images/universities/gallery/colombo/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "UOC Gymnasium & Colombo Sports Grounds",
        "desc": "Full-size cricket grounds, synthetic tennis courts, indoor badminton courts, martial arts dojos, and modern fitness center.",
        "badge": "Colts Grounds & Gym",
        "image": "/images/universities/cards/colombo.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "labs",
        "title": "Advanced Biomedical & Nanotechnology Laboratories",
        "desc": "Equipped with high-resolution electron microscopes, genomic sequencers, and computing server clusters.",
        "badge": "High-Tech Labs",
        "image": "/images/universities/gallery/colombo/photo3.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "auditorium",
        "title": "New Arts Theatre & King George Hall",
        "desc": "Acoustically engineered historic auditoriums hosting state debates, cultural dramas, international symposia, and university convocations.",
        "badge": "1,200 Capacity",
        "image": "/images/universities/gallery/colombo/photo2.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Colombo",
      "description": "Admission to undergraduate degree programmes at the University of Colombo is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores and the national admission policy.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant stream (Physical Science, Bio Science, Commerce, Arts, or Technology) in a single sitting, with passes in Common General Paper and English.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Arts",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by UGC policy: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Colombo courses (Medicine, Law, UCSC, Engineering Tech) carry the highest national Z-score cutoffs in Sri Lanka.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university admission choices through the official UGC online portal following the release of annual cut-off marks.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOC Official Web Portal",
        "url": "https://cmb.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University of Colombo Central Library",
        "url": "https://lib.cmb.ac.lk",
        "description": "Online Public Access Catalogue (OPAC), e-theses, and digital journals."
      },
      {
        "label": "School of Computing (UCSC) LMS",
        "url": "https://ucsc.cmb.ac.lk",
        "description": "Student virtual learning environment, course notes, and assignments."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "peradeniya": {
    "slug": "peradeniya",
    "name": "University of Peradeniya",
    "shortName": "UOP",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Sarvasva Locanam Sastram (Knowledge is the Eye of All)",
    "crest": "/images/universities/crests/peradeniya.png",
    "location": "Peradeniya, Kandy",
    "province": "Central Province",
    "areas": [
      "Engineering",
      "Medicine",
      "Science",
      "Agriculture",
      "Dental",
      "Veterinary"
    ],
    "website": "https://www.pdn.ac.lk",
    "metrics": {
      "faculties": "9 Faculties",
      "founded": "1942",
      "campus": "Peradeniya, Kandy (700 Hectares)",
      "type": "National Residential University"
    },
    "rankings": {
      "nationalValue": "2nd",
      "nationalLabel": "SRI LANKA",
      "worldValue": "1,620",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Leading in national research citations, agricultural patents, engineering innovations, and residential student community."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOP",
      "title": "The Grand Residential Sanctuary of Sri Lankan Scholarship",
      "description": "Nestled in the lush foothills of the Hanthana Mountain Range and skirted by the Mahaweli River, the University of Peradeniya is celebrated worldwide as one of the most picturesque residential campuses on earth. Created under the visionary guidance of Sir Ivor Jennings and architect Shirley de Alwis, Peradeniya is home to Sri Lanka's oldest engineering faculty and the nation's only dental and veterinary medicine faculties.",
      "tagline": "Sri Lanka's premier residential university • Hanthana mountain campus across 700 hectares"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Hanthana Mountain Views & Shirley de Alwis Kandyan Architecture",
      "description": "Master-planned in the 1940s to embody ancient Sri Lankan monastic universities, Peradeniya integrates traditional Kandyan moonstones, granite pillars, and sweeping eaves into an open valley landscape crossed by the famous Akbar Bridge.",
      "landmarkTitle": "The Senate Building & Sarachchandra Open Air Theatre (Wala)",
      "landmarkDesc": "The Senate Building, flanked by Kandyan granite colonnades, serves as the ceremonial heart, while the 'Wala' open-air theatre is revered as the birthplace of modern Sri Lankan drama, where Ediriweera Sarachchandra staged Maname in 1956.",
      "image": "/images/universities/gallery/peradeniya/photo2.jpg",
      "imageBadge": "Akbar Bridge & Mahaweli River",
      "pillars": [
        {
          "title": "Only Dental & Veterinary Faculties in Sri Lanka",
          "desc": "Peradeniya is the sole national center for educating dentists (BDS) and veterinary surgeons (BVSc) in the state university system.",
          "subtitle": ""
        },
        {
          "title": "Pioneer State Engineering Faculty",
          "desc": "The Faculty of Engineering (founded 1950) is the cradle of Sri Lanka's civil, electrical, mechanical, and computer engineering leadership.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/peradeniya.jpg",
        "badge": "Main Campus",
        "title": "University of Peradeniya Senate Complex",
        "desc": "The iconic Kandyan-style administration building overlooking the Hanthana hills.",
        "aspect": "16/10",
        "location": "Peradeniya, Kandy",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/peradeniya/photo2.jpg",
        "badge": "Landmark",
        "title": "Akbar Bridge Across the Mahaweli",
        "desc": "The historic engineering bridge linking the main campus with the university railway station.",
        "aspect": "4/3",
        "location": "Peradeniya, Kandy",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "engineering",
        "src": "/images/universities/gallery/peradeniya/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Engineering Valley Blocks",
        "desc": "Multi-tier engineering laboratories and lecture halls nestled in the green valley.",
        "aspect": "4/3",
        "location": "Peradeniya, Kandy",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/peradeniya/photo4.jpg",
        "badge": "Campus Life",
        "title": "Galaha Road Jacaranda Avenues",
        "desc": "Canopies of purple blossoms along the famous residential university walkways.",
        "aspect": "16/9",
        "location": "Peradeniya, Kandy",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/peradeniya/photo5.jpg",
        "badge": "Research Hub",
        "title": "Peradeniya Central Library & Palm Leaf Manuscripts",
        "desc": "The largest academic library in Sri Lanka, safeguarding over 800,000+ volumes and ancient palm-leaf Ola manuscripts.",
        "aspect": "4/3",
        "location": "Peradeniya, Kandy",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "peradeniya-valley",
        "location": "Peradeniya",
        "established": "1950",
        "website": "https://eng.pdn.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Civil Engineering",
          "Electrical & Electronic Engineering",
          "Mechanical Engineering",
          "Computer Engineering",
          "Chemical & Process Engineering"
        ],
        "tone": "tone-ice",
        "description": "Sri Lanka's oldest and premier engineering faculty, Washington Accord accredited with state-of-the-art hydraulics and computing labs."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "peradeniya",
        "location": "Peradeniya",
        "established": "1962",
        "website": "https://med.pdn.ac.lk",
        "stream": "Biological Science (Bio, Chem, Phys)",
        "departments": [
          "Anatomy",
          "Physiology",
          "Medicine",
          "Surgery",
          "Paediatrics",
          "Teaching Hospital Peradeniya Training"
        ],
        "tone": "tone-peach",
        "description": "Internationally accredited medical school training elite doctors at Teaching Hospital Peradeniya."
      },
      {
        "id": "dental",
        "name": "Faculty of Dental Sciences",
        "campusZone": "peradeniya",
        "location": "Peradeniya",
        "established": "1986",
        "website": "https://dental.pdn.ac.lk",
        "stream": "Biological Science (Bio, Chem, Phys)",
        "departments": [
          "Oral Medicine & Periodontology",
          "Prosthetic Dentistry",
          "Oral & Maxillofacial Surgery",
          "Community Dental Health"
        ],
        "tone": "tone-peach",
        "description": "The only institution providing Bachelor of Dental Surgery (BDS) degrees in Sri Lanka, paired with the state-of-the-art Dental Hospital."
      },
      {
        "id": "veterinary",
        "name": "Faculty of Veterinary Medicine & Animal Science",
        "campusZone": "peradeniya",
        "location": "Peradeniya",
        "established": "1947",
        "website": "https://vet.pdn.ac.lk",
        "stream": "Biological Science (Bio, Chem, Phys)",
        "departments": [
          "Veterinary Clinical Studies",
          "Veterinary Pathobiology",
          "Basic Veterinary Sciences",
          "Farm Animal Production & Health"
        ],
        "tone": "tone-mint",
        "description": "Sri Lanka's exclusive state faculty educating veterinary surgeons (BVSc) and wildlife conservation specialists."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture",
        "campusZone": "peradeniya-dodangolla",
        "location": "Peradeniya & Dodangolla",
        "established": "1947",
        "website": "https://agri.pdn.ac.lk",
        "stream": "Biological Science / Agriculture Stream",
        "departments": [
          "Agricultural Biology",
          "Agricultural Engineering",
          "Crop Science",
          "Food Science & Technology",
          "Soil Science",
          "Animal Science"
        ],
        "tone": "tone-mint",
        "description": "Pioneering faculty in food security, sustainable tropical crops, climate-smart farming, and food science."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "peradeniya",
        "location": "Peradeniya",
        "established": "1942",
        "website": "https://sci.pdn.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Chemistry",
          "Physics",
          "Mathematics & Statistics",
          "Molecular Biology & Biotechnology",
          "Geology",
          "Botany & Zoology"
        ],
        "tone": "tone-ice",
        "description": "Renowned for pioneering research in earth geology, synthetic chemistry, and biotechnology."
      }
    ],
    "degreeGroups": [
      {
        "id": "engineering-tech",
        "title": "Engineering Disciplines (Washington Accord)",
        "faculty": "Faculty of Engineering",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Civil Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Electrical & Electronic (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Mechanical Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Computer Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Chemical & Process Engineering (4 Years)"
          }
        ]
      },
      {
        "id": "health-dental-vet",
        "title": "Medicine, Dental Surgery & Veterinary Science",
        "faculty": "Faculties of Medicine, Dental & Veterinary",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC)"
          },
          {
            "name": "BDS Bachelor of Dental Surgery (5 Years - Sole State Degree)"
          },
          {
            "name": "BVSc Bachelor of Veterinary Science (5 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Nursing (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physiotherapy (4 Years)"
          }
        ]
      },
      {
        "id": "agri-food",
        "title": "Agriculture, Animal Science & Food Innovation",
        "faculty": "Faculty of Agriculture",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Agricultural Technology & Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Food Science & Technology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Animal Science & Fisheries (4 Years)"
          }
        ]
      },
      {
        "id": "natural-sciences",
        "title": "Pure, Applied & Computational Sciences",
        "faculty": "Faculty of Science",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Molecular Biology & Biotechnology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Geology (4 Years - Sole State Honours in Geology)"
          },
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Statistics & Operations Research (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "University of Peradeniya Central Library",
        "desc": "The largest university library in Sri Lanka, holding over 800,000+ volumes, ancient Ola leaf manuscripts, and extensive research archives.",
        "badge": "800,000+ Volumes",
        "image": "/images/universities/gallery/peradeniya/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "Peradeniya Sports Pavilion & 400m Track",
        "desc": "Olympic-standard athletic track, full-size rugby and cricket grounds, indoor sports complex, and gymnasium.",
        "badge": "Campus Stadium",
        "image": "/images/universities/cards/peradeniya.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "theatre",
        "title": "Sarachchandra Open Air Theatre (Wala)",
        "desc": "World-famous acoustic natural amphitheater nestled beneath trees, staging iconic Sinhala dramas and musical festivals.",
        "badge": "Open-Air Amphitheatre",
        "image": "/images/universities/gallery/peradeniya/photo4.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "hospital",
        "title": "Peradeniya Teaching Hospital & Dental Hospital",
        "desc": "Tertiary clinical teaching facilities offering students hands-on clerkships in surgery, paediatrics, and specialised maxillo-facial dental care.",
        "badge": "Teaching Hospitals",
        "image": "/images/universities/gallery/peradeniya/photo3.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Peradeniya",
      "description": "Undergraduate admission to the University of Peradeniya is regulated centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores and the national district admission policy.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant A/L streams (Physical Science, Bio Science, Agriculture, Arts, or Commerce) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Agriculture Stream",
        "Arts",
        "Management"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university places are apportioned as: 40% All-Island Merit, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Engineering, Medicine, Dental Surgery, and Veterinary Science require high national Z-score cutoffs.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOP Official Web Portal",
        "url": "https://www.pdn.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University of Peradeniya Library Network",
        "url": "https://lib.pdn.ac.lk",
        "description": "OPAC catalogue, digital repository, and historical archives."
      },
      {
        "label": "Faculty of Engineering Portal",
        "url": "https://eng.pdn.ac.lk",
        "description": "Engineering departments, research labs, and academic calendar."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "moratuwa": {
    "slug": "moratuwa",
    "name": "University of Moratuwa",
    "shortName": "UOM",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Vidyeva Sarvadhanam (Knowledge is the Greatest Wealth)",
    "crest": "/images/universities/crests/moratuwa.png",
    "location": "Katubedda, Moratuwa",
    "province": "Western Province",
    "areas": [
      "Engineering",
      "IT",
      "Architecture",
      "Business",
      "Medicine"
    ],
    "website": "https://uom.lk",
    "metrics": {
      "faculties": "5 Faculties",
      "founded": "1893 / 1972",
      "campus": "Katubedda, Moratuwa (Lakeside)",
      "type": "National Technological University"
    },
    "rankings": {
      "nationalValue": "3rd",
      "nationalLabel": "SRI LANKA",
      "worldValue": "1,980",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Top national rank for Graduate Employability, Tech Innovation, Google Summer of Code (GSoC) world championships, and patent filings."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOM",
      "title": "Sri Lanka's Premier Technological and Engineering Powerhouse",
      "description": "Tracing its roots to the Ceylon Technical College established in 1893, the University of Moratuwa (UOM) is internationally celebrated as the technological backbone of Sri Lanka. Renowned for world-class engineering, computer science, architecture, and quantity surveying, UOM graduates lead Silicon Valley tech firms, multinational engineering consultancies, and national infrastructure projects.",
      "tagline": "Technological excellence • World-class engineering, computing & design hub"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "The Crucible of Sri Lankan Technology & Architecture",
      "description": "Situated on a tranquil lakeside campus in Katubedda, Moratuwa, UOM is the birthplace of Sri Lanka's software industry, high-voltage electrical grid innovations, and RIBA-accredited architecture.",
      "landmarkTitle": "The Engineering Quadrangle & Sentosa Lawn",
      "landmarkDesc": "The historic Engineering Quadrangle, surrounded by precision robotics laboratories and architectural drawing studios, has fostered generations of world-leading inventors and industry pioneers.",
      "image": "/images/universities/gallery/moratuwa/photo2.jpg",
      "imageBadge": "Engineering Quadrangle & Sentosa Lawn",
      "pillars": [
        {
          "title": "World Champions in Google Summer of Code",
          "desc": "UOM holds the world record as the single most successful university globally in Google Summer of Code (GSoC).",
          "subtitle": ""
        },
        {
          "title": "Mother of Sri Lankan Software Startups",
          "desc": "Incubator of legendary software enterprises, unicorns, and national telecommunications infrastructure.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/moratuwa.jpg",
        "badge": "Main Campus",
        "title": "University of Moratuwa Main Entrance",
        "desc": "The primary technological academic complex at Katubedda, Moratuwa.",
        "aspect": "16/10",
        "location": "Katubedda, Moratuwa",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/moratuwa/photo2.jpg",
        "badge": "Landmark",
        "title": "The Engineering Quadrangle & Sentosa Lawn",
        "desc": "The heart of engineering student culture, innovation hackathons, and gatherings.",
        "aspect": "4/3",
        "location": "Katubedda, Moratuwa",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "faculties",
        "src": "/images/universities/gallery/moratuwa/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Information Technology Complex",
        "desc": "High-performance compute clusters, AI laboratories, and smart lecture theatres.",
        "aspect": "4/3",
        "location": "Katubedda, Moratuwa",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "architecture",
        "src": "/images/universities/gallery/moratuwa/photo4.jpg",
        "badge": "Design Studios",
        "title": "Faculty of Architecture Studios",
        "desc": "Natural light design ateliers for architectural design, town planning, and quantity surveying.",
        "aspect": "16/9",
        "location": "Katubedda, Moratuwa",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/moratuwa/photo5.jpg",
        "badge": "Research Hub",
        "title": "UOM Central Library & Tech Innovation Center",
        "desc": "Modern digital resource center with high-speed campus WiFi, IEEE Xplore access, and group study pods.",
        "aspect": "4/3",
        "location": "Katubedda, Moratuwa",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "katubedda",
        "location": "Katubedda, Moratuwa",
        "established": "1972",
        "website": "https://uom.lk/eng",
        "stream": "Physical Science (Combined Maths - High Z-Score)",
        "departments": [
          "Computer Science & Engineering (CSE)",
          "Electronic & Telecommunication (ENTC)",
          "Civil Engineering",
          "Mechanical Engineering",
          "Biomedical Engineering",
          "Chemical & Process Engineering",
          "Materials Science & Engineering",
          "Textile & Apparel Engineering"
        ],
        "tone": "tone-ice",
        "description": "Sri Lanka's highest ranked engineering faculty, fully Washington Accord accredited with global recognition."
      },
      {
        "id": "it",
        "name": "Faculty of Information Technology",
        "campusZone": "katubedda",
        "location": "Katubedda, Moratuwa",
        "established": "2001",
        "website": "https://uom.lk/itfac",
        "stream": "Physical Science / Open A/L Entry with Maths",
        "departments": [
          "Information Technology",
          "Computational Mathematics",
          "Interdisciplinary Studies",
          "Artificial Intelligence Center"
        ],
        "tone": "tone-ice",
        "description": "Dedicated IT faculty producing elite software architects, data scientists, and AI researchers."
      },
      {
        "id": "architecture",
        "name": "Faculty of Architecture",
        "campusZone": "katubedda",
        "location": "Katubedda, Moratuwa",
        "established": "1972",
        "website": "https://uom.lk/arch",
        "stream": "A/L Any Stream + Aptitude Test (Architecture / QS)",
        "departments": [
          "Architecture (RIBA Accredited)",
          "Quantity Surveying (RICS Accredited)",
          "Town & Country Planning",
          "Building Economics",
          "Integrated Design"
        ],
        "tone": "tone-lavender",
        "description": "The nation's flagship school of built environment, accredited by the Royal Institute of British Architects (RIBA) and RICS."
      },
      {
        "id": "business",
        "name": "Faculty of Business",
        "campusZone": "katubedda",
        "location": "Katubedda, Moratuwa",
        "established": "2017",
        "website": "https://uom.lk/fob",
        "stream": "Commerce & Physical Science Streams",
        "departments": [
          "Industrial Management",
          "Decision Sciences",
          "Management of Technology",
          "Accounting & Finance"
        ],
        "tone": "tone-peach",
        "description": "Tech-driven business faculty blending quantitative analytics, fintech, and supply chain engineering."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "kalutara",
        "location": "Nagoda, Kalutara",
        "established": "2020",
        "website": "https://uom.lk/med",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Clinical Medicine",
          "Surgery",
          "Medical Technology & Innovation",
          "Nagoda General Hospital Training"
        ],
        "tone": "tone-peach",
        "description": "Sri Lanka's newest state medical faculty, emphasizing modern biomedical technology and digital health."
      }
    ],
    "degreeGroups": [
      {
        "id": "engineering-washington",
        "title": "Engineering (Washington Accord / IESL Accredited)",
        "faculty": "Faculty of Engineering",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Computer Science & Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Electronic & Telecommunication (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Civil Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Mechanical Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Biomedical Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Chemical & Process (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Materials Science (4 Years)"
          }
        ]
      },
      {
        "id": "it-ai",
        "title": "Information Technology, Software & Artificial Intelligence",
        "faculty": "Faculty of Information Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Information Technology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Information Technology & Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Artificial Intelligence (4 Years)"
          }
        ]
      },
      {
        "id": "architecture-qs",
        "title": "Architecture & Built Environment (RIBA & RICS Accredited)",
        "faculty": "Faculty of Architecture",
        "tone": "tone-lavender",
        "degrees": [
          {
            "name": "B.Arch Bachelor of Architecture (5 Years - RIBA Part I & II)"
          },
          {
            "name": "BSc (Hons) in Quantity Surveying (4 Years - RICS Accredited)"
          },
          {
            "name": "BSc (Hons) in Facilities Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Town & Country Planning (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "University of Moratuwa Central Library",
        "desc": "Three-story modern technological library with dedicated e-resource labs, research carrels, and 200,000+ technical volumes.",
        "badge": "200,000+ Volumes",
        "image": "/images/universities/gallery/moratuwa/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "UOM Indoor Sports Complex & Gymnasium",
        "desc": "Equipped with international-standard indoor badminton courts, basketball courts, table tennis arenas, and fitness center.",
        "badge": "Indoor Complex",
        "image": "/images/universities/cards/moratuwa.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "labs",
        "title": "High-Voltage & Robotics Research Centers",
        "desc": "Specialized high-voltage testing laboratories, autonomous robotics arena, wind tunnel, and drone development centers.",
        "badge": "Robotics & Labs",
        "image": "/images/universities/gallery/moratuwa/photo3.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "sentosa",
        "title": "Sentosa Innovation Lawn & Lakeside Pavilion",
        "desc": "Landscaped social and ideation hub overlooking the Bolgoda Lake, where startup founders and student societies convene.",
        "badge": "Lakeside Campus",
        "image": "/images/universities/gallery/moratuwa/photo2.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Moratuwa",
      "description": "Admission to undergraduate degree programmes at the University of Moratuwa is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in Physical Science stream (Combined Maths, Physics, Chemistry / ICT) for Engineering and IT. Architecture and Design require passing the national aptitude test.",
      "step1Tags": [
        "Physical Science",
        "Engineering Stream",
        "Architecture Aptitude",
        "Information Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by UGC policy: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "UOM Engineering (CSE and ENTC) consistently demands the highest Z-scores in the island.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOM Official Web Portal",
        "url": "https://uom.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University of Moratuwa Library",
        "url": "https://www.lib.mrt.ac.lk",
        "description": "OPAC catalogue, digital research repositories, and e-journals."
      },
      {
        "label": "Faculty of Engineering",
        "url": "https://uom.lk/eng",
        "description": "Engineering departments, Washington Accord accreditations, and lab directory."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "jayewardenepura": {
    "slug": "jayewardenepura",
    "name": "University of Sri Jayewardenepura",
    "shortName": "USJ",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Vijja Uppatatam Settha (Among Things that Arise, Knowledge is the Greatest)",
    "crest": "/images/universities/crests/jayewardenepura.png",
    "location": "Gangodawila, Nugegoda",
    "province": "Western Province",
    "areas": [
      "Management",
      "Medicine",
      "Science",
      "Technology",
      "Engineering",
      "Humanities"
    ],
    "website": "https://www.sjp.ac.lk",
    "metrics": {
      "faculties": "11 Faculties",
      "founded": "1859 / 1958",
      "campus": "Gangodawila, Nugegoda (Vibrant Urban)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "4th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "2,210",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Leading business school in Sri Lanka (FMSC), pioneer in Medical Immunology & Dengue Research (AICBU), and largest student body."
    },
    "overview": {
      "eyebrow": "GET TO KNOW USJ",
      "title": "Sri Lanka's Grand Center of Management & Medical Innovation",
      "description": "Originating from the historic Vidyodaya Pirivena founded in 1859 by the Venerable Hikkaduwe Sri Sumangala Thero, the University of Sri Jayewardenepura (USJ) was elevated to full university status in 1958. Today, it stands as the vibrant academic powerhouse of suburban Colombo, boasting over 15,000 undergraduates, the nation's premier Faculty of Management Studies and Commerce, and globally acclaimed dengue and allergy research centers.",
      "tagline": "National flagship university • Premier business school & medical research center"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Vidyodaya Academic Heritage & Cultural Renaissance",
      "description": "Steeped in the Buddhist scholarly renaissance of the 19th century, USJ balances its spiritual cultural heritage with modern biomedical research institutes and bustling collegiate campus life in Gangodawila.",
      "landmarkTitle": "The Sri Sumangala Building & Bandaranayake Hall",
      "landmarkDesc": "The monumental Sri Sumangala Building, named after the university's venerable founder, stands as an iconic architectural beacon overlooking the main Gangodawila quadrangle.",
      "image": "/images/universities/gallery/jayewardenepura/photo2.jpg",
      "imageBadge": "Sri Sumangala Building",
      "pillars": [
        {
          "title": "Cradle of Sri Lankan Business Leaders",
          "desc": "The Faculty of Management Studies & Commerce has produced the overwhelming majority of Sri Lankan CEOs, CFOs, and chartered accountants.",
          "subtitle": ""
        },
        {
          "title": "World-Class Dengue Research",
          "desc": "Home to the Allergy, Immunology and Cell Biology Unit (AICBU), partnering with Oxford University to pioneer global dengue treatments.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/jayewardenepura.jpg",
        "badge": "Main Campus",
        "title": "University of Sri Jayewardenepura Entrance",
        "desc": "The iconic main gate and grand ceremonial entrance at Gangodawila, Nugegoda.",
        "aspect": "16/10",
        "location": "Gangodawila, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/jayewardenepura/photo2.jpg",
        "badge": "Landmark",
        "title": "The Sri Sumangala Memorial Building",
        "desc": "The iconic administrative and humanities landmark commemorating founder Ven. Hikkaduwe Sri Sumangala Thero.",
        "aspect": "4/3",
        "location": "Gangodawila, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "management",
        "src": "/images/universities/gallery/jayewardenepura/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Management Studies & Commerce",
        "desc": "The multi-tier business complex hosting executive boardrooms and simulation trading floors.",
        "aspect": "4/3",
        "location": "Gangodawila, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/jayewardenepura/photo4.jpg",
        "badge": "Campus Life",
        "title": "Bandaranayake Hall & Campus Grounds",
        "desc": "Central gathering plaza and leafy walkways connecting academic faculties.",
        "aspect": "16/9",
        "location": "Gangodawila, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/jayewardenepura/photo5.jpg",
        "badge": "Research Hub",
        "title": "USJ Central Library & AICBU Research Labs",
        "desc": "Extensive business literature, management archives, and world-class biotechnology cleanrooms.",
        "aspect": "4/3",
        "location": "Gangodawila, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "management",
        "name": "Faculty of Management Studies & Commerce (FMSC)",
        "campusZone": "gangodawila",
        "location": "Gangodawila, Nugegoda",
        "established": "1959",
        "website": "https://mgt.sjp.ac.lk",
        "stream": "Commerce Stream (Accounting, Business, Econ)",
        "departments": [
          "Accounting",
          "Finance",
          "Marketing Management",
          "Human Resource Management",
          "Business Economics",
          "Commerce",
          "Information Technology",
          "Entrepreneurship"
        ],
        "tone": "tone-peach",
        "description": "The pioneer and undisputed leader in management education in Sri Lanka, producing top corporate executives."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medical Sciences",
        "campusZone": "kalubowila",
        "location": "Gangodawila & Kalubowila",
        "established": "1993",
        "website": "https://medical.sjp.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Medicine & Surgery",
          "Paediatrics & Obstetrics",
          "Immunology & Molecular Medicine",
          "Colombo South Teaching Hospital (Kalubowila) Training"
        ],
        "tone": "tone-peach",
        "description": "Top-tier medical faculty home to world-renowned dengue research centers and clinical clerkships."
      },
      {
        "id": "applied-sciences",
        "name": "Faculty of Applied Sciences",
        "campusZone": "gangodawila",
        "location": "Gangodawila, Nugegoda",
        "established": "1962",
        "website": "https://science.sjp.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Computer Science",
          "Chemistry",
          "Physics",
          "Mathematics & Statistics",
          "Food Science & Technology",
          "Forestry & Environmental Science"
        ],
        "tone": "tone-mint",
        "description": "Leading faculty in applied chemistry, polymer science, forestry conservation, and computational software."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "pitipana",
        "location": "Techno Park, Pitipana, Homagama",
        "established": "2016",
        "website": "https://tech.sjp.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology",
          "Information & Communication Technology",
          "Civil & Environmental Tech"
        ],
        "tone": "tone-ice",
        "description": "State-of-the-art technological complex in Homagama focused on industrial IoT, robotics, and food processing."
      },
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "ratmalana",
        "location": "Ratmalana",
        "established": "2016",
        "website": "https://eng.sjp.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Civil Engineering",
          "Electrical & Electronic",
          "Mechanical Engineering",
          "Computer Engineering"
        ],
        "tone": "tone-ice",
        "description": "Modern engineering faculty equipped with robotics, structural test rigs, and automated manufacturing labs."
      },
      {
        "id": "humanities",
        "name": "Faculty of Humanities & Social Sciences",
        "campusZone": "gangodawila",
        "location": "Gangodawila, Nugegoda",
        "established": "1959",
        "website": "https://fhss.sjp.ac.lk",
        "stream": "Arts Stream",
        "departments": [
          "Economics",
          "Languages & Cultural Studies",
          "History & Archaeology",
          "Social Statistics",
          "Geography & GIS"
        ],
        "tone": "tone-lavender",
        "description": "Preserving Sri Lanka's heritage languages, Pali and Buddhist studies, archaeology, and economic policy."
      }
    ],
    "degreeGroups": [
      {
        "id": "business-commerce",
        "title": "Management, Corporate Finance & Accountancy",
        "faculty": "Faculty of Management Studies & Commerce",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BSc (Hons) in Accounting (4 Years - CIMA / ACCA / CA Sri Lanka)"
          },
          {
            "name": "BSc (Hons) in Finance (4 Years - CFA Institute University Partner)"
          },
          {
            "name": "BSc (Hons) in Marketing Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Human Resource Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Business Information Systems (4 Years)"
          },
          {
            "name": "BSc (Hons) in Entrepreneurship (4 Years)"
          }
        ]
      },
      {
        "id": "medicine-immunology",
        "title": "Medicine, Nursing & Health Sciences",
        "faculty": "Faculty of Medical Sciences & Allied Health",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC)"
          },
          {
            "name": "BSc (Hons) in Nursing (4 Years)"
          },
          {
            "name": "BSc (Hons) in Medical Laboratory Science (4 Years)"
          },
          {
            "name": "BPharm (Hons) in Pharmacy (4 Years)"
          }
        ]
      },
      {
        "id": "applied-computing",
        "title": "Applied Sciences, Computing & Food Technology",
        "faculty": "Faculty of Applied Sciences",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Software Engineering (4 Years)"
          },
          {
            "name": "BSc (Hons) in Food Science & Technology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Forestry & Environmental Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Polymer Chemistry (4 Years)"
          }
        ]
      },
      {
        "id": "engineering-technology",
        "title": "Engineering & Technological Innovation",
        "faculty": "Faculties of Engineering & Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Civil / Electrical / Mechanical (4 Years)"
          },
          {
            "name": "Bachelor of Engineering Technology - BET (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Biosystems Technology - BBST (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Information & Communication Technology - BICT (Hons) (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "USJ Central Library & Information Center",
        "desc": "Five-story library facility holding over 300,000+ books, extensive management periodicals, digital thesis vaults, and 24/7 study areas.",
        "badge": "300,000+ Volumes",
        "image": "/images/universities/gallery/jayewardenepura/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "aicbu",
        "title": "Allergy, Immunology & Cell Biology Unit (AICBU)",
        "desc": "Globally renowned research institute leading genomic sequencing, vaccine response trials, and molecular pathology.",
        "badge": "Global Research Center",
        "image": "/images/universities/gallery/jayewardenepura/photo3.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "sports",
        "title": "USJ Sports Complex & Swimming Pool",
        "desc": "Olympic-sized swimming pool, indoor gymnasium, synthetic courts, and grounds for cricket, rugby, and track & field.",
        "badge": "Olympic Pool & Stadium",
        "image": "/images/universities/cards/jayewardenepura.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "bandaranayake",
        "title": "Bandaranayake Convocation Hall",
        "desc": "Spacious ceremonial auditorium hosting convocations, artistic performances, drama festivals, and national conferences.",
        "badge": "Convocation Hall",
        "image": "/images/universities/gallery/jayewardenepura/photo4.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Sri Jayewardenepura",
      "description": "Admission to undergraduate degree programmes at USJ is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Commerce, Physical Science, Bio Science, Arts, or Technology) in a single sitting.",
      "step1Tags": [
        "Commerce Stream",
        "Biological Science",
        "Physical Science",
        "Technology Stream",
        "Arts"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "USJ Management and Medical Sciences demand the most competitive Z-scores among Sri Lankan universities.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "USJ Official Web Portal",
        "url": "https://www.sjp.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Library Portal",
        "url": "https://lib.sjp.ac.lk",
        "description": "OPAC catalogue, digital research repositories, and e-journals."
      },
      {
        "label": "Faculty of Management Studies",
        "url": "https://mgt.sjp.ac.lk",
        "description": "FMSC degree programmes, departments, and corporate linkages."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "kelaniya": {
    "slug": "kelaniya",
    "name": "University of Kelaniya",
    "shortName": "UOK",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Panna Dipa Pajjoto (Wisdom is the Lamp that Illuminates)",
    "crest": "/images/universities/crests/kelaniya.png",
    "location": "Dalugama, Kelaniya",
    "province": "Western Province",
    "areas": [
      "Science",
      "Medicine",
      "Commerce",
      "Humanities",
      "Computing",
      "Social Sciences"
    ],
    "website": "https://www.kln.ac.lk",
    "metrics": {
      "faculties": "7 Faculties",
      "founded": "1875 / 1959",
      "campus": "Dalugama, Kelaniya & Ragama",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "5th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "2,450",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Renowned for pioneering Commerce & Financial Management, Modern Linguistics, Microbiology, and Ragama Clinical Medicine."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOK",
      "title": "A Historic Sanctuary of Ancient Wisdom & Modern Science",
      "description": "Tracing its historic roots to the Vidyalankara Pirivena founded in 1875 by the Venerable Ratmalane Sri Dharmaloka Thero, the University of Kelaniya was established as a state university in 1959. Situated in the historic royal city of Kelaniya just minutes from Colombo, UOK bridges cultural heritage and linguistic scholarship with cutting-edge faculties of Medicine (Ragama), Science, Computing, and Commerce.",
      "tagline": "National public university • Historic Vidyalankara academic seat in Kelaniya & Ragama"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Vidyalankara Cultural Stature & Sri Dharmaloka Hall",
      "description": "The Kelaniya campus reflects Sri Lanka's monastic scholarly heritage, crowned by the grand Sri Dharmaloka Memorial Convocation Hall, peaceful bo-tree courtyards, and palm-lined avenues.",
      "landmarkTitle": "Sri Dharmaloka Memorial Convocation Hall",
      "landmarkDesc": "Named after the revered founder, this massive auditorium serves as the national stage for Buddhist symposia, university convocations, and state literary festivals.",
      "image": "/images/universities/gallery/kelaniya/photo2.jpg",
      "imageBadge": "Sri Dharmaloka Memorial Hall",
      "pillars": [
        {
          "title": "Pioneering Modern Languages & Linguistics",
          "desc": "Sri Lanka's sole state university offering dedicated degrees in Chinese, Japanese, Korean, Russian, German, French, and Hindi.",
          "subtitle": ""
        },
        {
          "title": "Colombo North Teaching Hospital (Ragama)",
          "desc": "The Faculty of Medicine in Ragama operates the premier liver transplant and specialized clinical care center in Sri Lanka.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/kelaniya.jpg",
        "badge": "Main Campus",
        "title": "University of Kelaniya Main Entrance",
        "desc": "The primary academic gate along the Kandy-Colombo highway at Dalugama, Kelaniya.",
        "aspect": "16/10",
        "location": "Kelaniya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/kelaniya/photo2.jpg",
        "badge": "Landmark",
        "title": "Sri Dharmaloka Convocation Hall",
        "desc": "The monumental convocation auditorium holding 2,000+ seats.",
        "aspect": "4/3",
        "location": "Kelaniya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "science",
        "src": "/images/universities/gallery/kelaniya/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Science & Computing Complex",
        "desc": "Advanced chemistry, microbiology, physics, and software engineering laboratories.",
        "aspect": "4/3",
        "location": "Kelaniya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/kelaniya/photo4.jpg",
        "badge": "Campus Life",
        "title": "Palm-Lined Boulevard & Study Squares",
        "desc": "Green pedestrian walkways connecting the humanities and commerce faculties.",
        "aspect": "16/9",
        "location": "Kelaniya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/kelaniya/photo5.jpg",
        "badge": "Research Hub",
        "title": "Kelaniya Central Library & Rare Collections",
        "desc": "Houses over 250,000+ printed volumes, palm leaf manuscripts, and digital journal portals.",
        "aspect": "4/3",
        "location": "Kelaniya",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "ragama",
        "location": "Ragama (Colombo North)",
        "established": "1991",
        "website": "https://medicine.kln.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Clinical Medicine & Surgery",
          "Paediatrics & Obstetrics",
          "Parasitology & Public Health",
          "Colombo North Teaching Hospital (Ragama) Training"
        ],
        "tone": "tone-peach",
        "description": "Accredited medical faculty renowned for gastroenterology, clinical trials, and speech and hearing sciences."
      },
      {
        "id": "commerce",
        "name": "Faculty of Commerce & Management Studies (FCMS)",
        "campusZone": "dalugama",
        "location": "Dalugama, Kelaniya",
        "established": "1995",
        "website": "https://fcms.kln.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Accountancy",
          "Finance",
          "Marketing Management",
          "Human Resource Management",
          "Commerce & Financial Management"
        ],
        "tone": "tone-peach",
        "description": "Premier commerce faculty offering specialized degrees in Forensic Accounting, Banking, and Financial Markets."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "dalugama",
        "location": "Dalugama, Kelaniya",
        "established": "1967",
        "website": "https://science.kln.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Chemistry",
          "Physics & Electronics",
          "Mathematics",
          "Microbiology",
          "Plant & Molecular Biology",
          "Zoology & Environmental Management"
        ],
        "tone": "tone-mint",
        "description": "National leader in Industrial Chemistry, Molecular Biology, Environmental Management, and Applied Microbiology."
      },
      {
        "id": "computing",
        "name": "Faculty of Computing & Technology (FCT)",
        "campusZone": "dalugama",
        "location": "Dalugama & Peliyagoda",
        "established": "2015",
        "website": "https://fct.kln.ac.lk",
        "stream": "Physical Science & Technology Streams",
        "departments": [
          "Computer Systems Engineering",
          "Software Engineering",
          "Applied Computing",
          "Engineering Technology"
        ],
        "tone": "tone-ice",
        "description": "Modern technology complex offering Software Engineering, Cyber Security, and Engineering Technology."
      },
      {
        "id": "humanities",
        "name": "Faculty of Humanities",
        "campusZone": "dalugama",
        "location": "Dalugama, Kelaniya",
        "established": "1959",
        "website": "https://hu.kln.ac.lk",
        "stream": "Arts & Languages",
        "departments": [
          "English & Modern Languages",
          "Linguistics",
          "Sinhala",
          "Pali & Buddhist Studies",
          "Hindi & Sanskrit",
          "Fine Arts"
        ],
        "tone": "tone-lavender",
        "description": "The nation's flagship center for modern international languages, literary analysis, and Buddhist philosophy."
      },
      {
        "id": "social-sciences",
        "name": "Faculty of Social Sciences",
        "campusZone": "dalugama",
        "location": "Dalugama, Kelaniya",
        "established": "1959",
        "website": "https://ss.kln.ac.lk",
        "stream": "Arts Stream",
        "departments": [
          "Economics",
          "Mass Communication",
          "International Studies",
          "Archaeology",
          "Geography & GIS",
          "Library & Information Science"
        ],
        "tone": "tone-mint",
        "description": "Pioneering the nation's leading school of Mass Communication, journalism, and diplomatic studies."
      }
    ],
    "degreeGroups": [
      {
        "id": "health-medicine",
        "title": "Medicine, Speech Therapy & Allied Health",
        "faculty": "Faculty of Medicine",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC)"
          },
          {
            "name": "BSc (Hons) in Speech & Hearing Sciences (4 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Occupational Therapy (4 Years)"
          }
        ]
      },
      {
        "id": "commerce-finance",
        "title": "Commerce, Banking & Forensic Accounting",
        "faculty": "Faculty of Commerce & Management Studies",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BCom (Hons) in Commerce (4 Years)"
          },
          {
            "name": "BBM (Hons) in Accountancy (4 Years - CIMA / ACCA / CA Sri Lanka)"
          },
          {
            "name": "BBM (Hons) in Finance (4 Years)"
          },
          {
            "name": "BBM (Hons) in Marketing (4 Years)"
          },
          {
            "name": "BBM (Hons) in Human Resource Management (4 Years)"
          }
        ]
      },
      {
        "id": "science-microbiology",
        "title": "Biological, Physical & Chemical Sciences",
        "faculty": "Faculty of Science",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Microbiology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Molecular Biology & Plant Biotechnology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Industrial Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Environmental Conservation & Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics & Electronics (4 Years)"
          }
        ]
      },
      {
        "id": "computing-tech",
        "title": "Computing, Software Engineering & Technology",
        "faculty": "Faculty of Computing & Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Software Engineering (4 Years)"
          },
          {
            "name": "Bachelor of Engineering Technology - BET (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Information & Communication Technology - BICT (Hons) (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "University of Kelaniya Central Library",
        "desc": "Comprehensive modern library housing over 250,000+ volumes, ancient Buddhist Ola manuscripts, and high-speed research computer labs.",
        "badge": "250,000+ Volumes",
        "image": "/images/universities/gallery/kelaniya/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "dharmaloka",
        "title": "Sri Dharmaloka Memorial Auditorium",
        "desc": "Acoustically engineered convocation hall seating over 2,000 guests, venue for national cultural drama debuts and convocation ceremonies.",
        "badge": "2,000 Capacity",
        "image": "/images/universities/gallery/kelaniya/photo2.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "sports",
        "title": "Kelaniya Sports Complex & Gymnasium",
        "desc": "Full-size athletic grounds, cricket pavilions, indoor badminton courts, martial arts dojos, and modern gym equipment.",
        "badge": "Sports Pavilion",
        "image": "/images/universities/cards/kelaniya.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "hospital",
        "title": "Colombo North Teaching Hospital (Ragama)",
        "desc": "Comprehensive tertiary healthcare complex where Kelaniya medical students undertake intensive clinical training.",
        "badge": "Teaching Hospital",
        "image": "/images/universities/gallery/kelaniya/photo3.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Kelaniya",
      "description": "Admission to undergraduate degree programmes at the University of Kelaniya is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Commerce, Biological Science, Physical Science, Arts, or Technology) in a single sitting.",
      "step1Tags": [
        "Commerce Stream",
        "Biological Science",
        "Physical Science",
        "Arts",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Medicine (Ragama), Speech & Hearing Sciences, and Software Engineering demand competitive Z-scores.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university admission choices through the official UGC online portal following the release of annual cut-off marks.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOK Official Web Portal",
        "url": "https://www.kln.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Library Portal",
        "url": "https://lib.kln.ac.lk",
        "description": "Online catalogue, digital journals, and research repositories."
      },
      {
        "label": "Faculty of Medicine (Ragama)",
        "url": "https://medicine.kln.ac.lk",
        "description": "Medical degree pathways, clinical units, and hospital departments."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "jaffna": {
    "slug": "jaffna",
    "name": "University of Jaffna",
    "shortName": "UOJ",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Meipporul Kanpathu Arivu (To Discern the Truth in Everything is Wisdom)",
    "crest": "/images/universities/crests/jaffna.png",
    "location": "Thirunelvely, Jaffna",
    "province": "Northern Province",
    "areas": [
      "Medicine",
      "Engineering",
      "Science",
      "Arts",
      "Management",
      "Agriculture"
    ],
    "website": "https://www.jfn.ac.lk",
    "metrics": {
      "faculties": "10 Faculties",
      "founded": "1974",
      "campus": "Thirunelvely & Kilinochchi",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "6th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "2,680",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Premier university of Northern Sri Lanka, recognized for high research output in Clean Energy, Medical sciences, and Tamil literary heritage."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOJ",
      "title": "Northern Sri Lanka's Flagship Beacon of Higher Learning",
      "description": "Established in 1974 at Thirunelvely, the University of Jaffna is the premier center of intellectual life and academic research in Northern Sri Lanka. Offering world-class medical education connected to the Teaching Hospital Jaffna and modern engineering and agricultural complexes at Ariviyal Nagar, Kilinochchi, UOJ is celebrated for clean energy research, agriculture in arid zones, and traditional Tamil arts.",
      "tagline": "National public university • Flagship northern campus at Thirunelvely & Kilinochchi"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Northern Scholarly Legacy & Ramanathan Cultural Academy",
      "description": "Surrounded by palmyrah groves and historic limestone architecture, the Jaffna campus integrates traditional northern cultural values with cutting-edge clean energy, medical, and engineering education.",
      "landmarkTitle": "Kailasapathy Auditorium & Ramanathan Academy",
      "landmarkDesc": "The Kailasapathy Memorial Auditorium commemorates founding president Prof. K. Kailasapathy, while the Ramanathan Academy of Fine Arts at Maruthanarmadam preserves authentic Carnatic music, Bharatanatyam, and traditional temple sculpture.",
      "image": "/images/universities/gallery/jaffna/photo2.jpg",
      "imageBadge": "Kailasapathy Memorial Auditorium",
      "pillars": [
        {
          "title": "Clean Energy & Nanotechnology Hub",
          "desc": "Renowned for pioneering research in solar photovoltaics, advanced energy materials, and wind energy systems.",
          "subtitle": ""
        },
        {
          "title": "Kilinochchi Engineering Complex",
          "desc": "A purpose-built modern engineering and agricultural campus established at Ariviyal Nagar, Kilinochchi.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/jaffna.jpg",
        "badge": "Main Campus",
        "title": "University of Jaffna Main Entrance",
        "desc": "The iconic main gate on Palali Road, Thirunelvely, Jaffna.",
        "aspect": "16/10",
        "location": "Thirunelvely, Jaffna",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/jaffna/photo2.jpg",
        "badge": "Landmark",
        "title": "Selvanayagam Block & Kailasapathy Hall",
        "desc": "The historic lecture and convocation theatre complex in Thirunelvely.",
        "aspect": "4/3",
        "location": "Thirunelvely, Jaffna",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "engineering",
        "src": "/images/universities/gallery/jaffna/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Engineering & Agriculture Complex",
        "desc": "Modern engineering lecture theatres and laboratories at Ariviyal Nagar, Kilinochchi.",
        "aspect": "4/3",
        "location": "Kilinochchi",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/jaffna/photo4.jpg",
        "badge": "Campus Life",
        "title": "Palmyrah Grove Avenues & Central Quadrangle",
        "desc": "Scenic open green lawns connecting the Faculties of Science, Arts, and Management.",
        "aspect": "16/9",
        "location": "Thirunelvely, Jaffna",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/jaffna/photo5.jpg",
        "badge": "Research Hub",
        "title": "Jaffna Central Library & Cultural Archives",
        "desc": "Houses over 200,000+ volumes, historical Ceylon Tamil documents, and digital science repositories.",
        "aspect": "4/3",
        "location": "Thirunelvely, Jaffna",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "thirunelvely",
        "location": "Adiyapatham Road, Thirunelvely",
        "established": "1978",
        "website": "https://med.jfn.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Medicine & Surgery",
          "Paediatrics & Obstetrics",
          "Community Medicine",
          "Teaching Hospital Jaffna Clinical Training"
        ],
        "tone": "tone-peach",
        "description": "Leading northern medical faculty providing clinical training at Teaching Hospital Jaffna."
      },
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "kilinochchi",
        "location": "Ariviyal Nagar, Kilinochchi",
        "established": "2013",
        "website": "https://eng.jfn.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Civil Engineering",
          "Electrical & Electronic",
          "Mechanical Engineering",
          "Computer Engineering",
          "Interdisciplinary Studies"
        ],
        "tone": "tone-ice",
        "description": "IESL-accredited engineering complex renowned for solar energy, structural engineering, and robotics."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "thirunelvely",
        "location": "Thirunelvely, Jaffna",
        "established": "1974",
        "website": "https://sci.jfn.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Physics & Clean Energy Lab",
          "Chemistry",
          "Mathematics & Statistics",
          "Computer Science",
          "Botany & Zoology"
        ],
        "tone": "tone-mint",
        "description": "National pioneer in solar cell research, nanotechnology, and marine fisheries biology."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture",
        "campusZone": "kilinochchi",
        "location": "Ariviyal Nagar, Kilinochchi",
        "established": "1990",
        "website": "https://agri.jfn.ac.lk",
        "stream": "Biological Science & Agriculture",
        "departments": [
          "Agronomy & Dry-Zone Farming",
          "Agricultural Biology",
          "Animal Science",
          "Agricultural Engineering",
          "Food Science"
        ],
        "tone": "tone-mint",
        "description": "Specialized in dry-zone irrigation, drought-resistant crops, and palmyrah bioresource processing."
      },
      {
        "id": "management",
        "name": "Faculty of Management Studies & Commerce",
        "campusZone": "thirunelvely",
        "location": "Thirunelvely, Jaffna",
        "established": "1999",
        "website": "https://mgt.jfn.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Accounting",
          "Financial Management",
          "Marketing",
          "Human Resource Management"
        ],
        "tone": "tone-peach",
        "description": "Premier business school in the northern province preparing executives for national and international firms."
      },
      {
        "id": "arts",
        "name": "Faculty of Arts",
        "campusZone": "thirunelvely",
        "location": "Thirunelvely, Jaffna",
        "established": "1974",
        "website": "https://arts.jfn.ac.lk",
        "stream": "Arts & Humanities",
        "departments": [
          "Tamil",
          "English",
          "History",
          "Sociology",
          "Philosophy",
          "Fine Arts & Music (Ramanathan Academy)"
        ],
        "tone": "tone-lavender",
        "description": "Preserving classical Tamil literature, Carnatic music, Dravidian architecture, and social sciences."
      }
    ],
    "degreeGroups": [
      {
        "id": "health-medicine",
        "title": "Medicine, Nursing & Health Sciences",
        "faculty": "Faculty of Medicine & Allied Health",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC)"
          },
          {
            "name": "BSc (Hons) in Nursing (4 Years)"
          },
          {
            "name": "BSc (Hons) in Medical Laboratory Science (4 Years)"
          },
          {
            "name": "BPharm (Hons) in Pharmacy (4 Years)"
          }
        ]
      },
      {
        "id": "engineering-kilinochchi",
        "title": "Engineering Disciplines (IESL Accredited)",
        "faculty": "Faculty of Engineering",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Civil Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Electrical & Electronic (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Mechanical Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Computer Engineering (4 Years)"
          }
        ]
      },
      {
        "id": "pure-applied-sciences",
        "title": "Natural, Clean Energy & Computational Sciences",
        "faculty": "Faculty of Science",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics (4 Years - Clean Energy Specialization)"
          },
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Mathematics & Statistics (4 Years)"
          }
        ]
      },
      {
        "id": "agriculture-dryzone",
        "title": "Agriculture, Food Science & Animal Production",
        "faculty": "Faculty of Agriculture",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Agriculture (4 Years)"
          },
          {
            "name": "BSc (Hons) in Food Production & Technology (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "University of Jaffna Central Library",
        "desc": "Houses over 200,000+ volumes, digital databases, e-theses repositories, and specialized northern historical collections.",
        "badge": "200,000+ Volumes",
        "image": "/images/universities/gallery/jaffna/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "kailasapathy",
        "title": "Kailasapathy Memorial Auditorium",
        "desc": "Iconic university convocation and cultural theater seating 1,500 people, venue for academic convocations and arts festivals.",
        "badge": "1,500 Capacity",
        "image": "/images/universities/gallery/jaffna/photo2.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "sports",
        "title": "University Sports Pavilion & Grounds",
        "desc": "Equipped with cricket grounds, football pitch, athletic tracks, indoor badminton complex, and fitness gym.",
        "badge": "University Stadium",
        "image": "/images/universities/cards/jaffna.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "kilinochchi-labs",
        "title": "Kilinochchi Engineering & Clean Energy Labs",
        "desc": "Equipped with state-of-the-art materials characterization, high-voltage test rigs, and automated agricultural drone testing.",
        "badge": "Clean Energy Center",
        "image": "/images/universities/gallery/jaffna/photo3.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Jaffna",
      "description": "Admission to undergraduate degree programmes at the University of Jaffna is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Biological Science, Agriculture, Arts, or Commerce) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Arts",
        "Agriculture Stream"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are apportioned as: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Medicine and Engineering demand high Z-scores across all districts.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOJ Official Web Portal",
        "url": "https://www.jfn.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.jfn.ac.lk",
        "description": "Online Public Access Catalogue (OPAC), e-theses, and digital journals."
      },
      {
        "label": "Faculty of Engineering (Kilinochchi)",
        "url": "https://eng.jfn.ac.lk",
        "description": "Engineering departments, labs, and student portal."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "ruhuna": {
    "slug": "ruhuna",
    "name": "University of Ruhuna",
    "shortName": "UOR",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Arambhatha Nikkhamatha (Strive, Go Forth, Conquer)",
    "crest": "/images/universities/crests/ruhuna.png",
    "location": "Wellamadama, Matara",
    "province": "Southern Province",
    "areas": [
      "Engineering",
      "Medicine",
      "Science",
      "Agriculture",
      "Technology",
      "Fisheries"
    ],
    "website": "https://www.ruh.ac.lk",
    "metrics": {
      "faculties": "10 Faculties",
      "founded": "1978",
      "campus": "Wellamadama, Matara (Oceanfront)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "5th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "2,779",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Geoffrey Bawa architectural masterpiece, national leader in Marine Sciences, Coastal Engineering, and Karapitiya Medicine."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOR",
      "title": "Southern Sri Lanka's Flagship University & Oceanfront Academic Center",
      "description": "Established in 1978 and elevated to university status in 1984, the University of Ruhuna serves students across Southern Sri Lanka and the nation through its main oceanfront Wellamadama campus in Matara, its Faculty of Engineering in Hapugala, Galle, its Faculty of Medicine in Karapitiya, Galle, and Agriculture and Technology in Kamburupitiya.",
      "tagline": "National public university • Geoffrey Bawa architectural oceanfront campus"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Geoffrey Bawa Architectural Heritage & Coastal Stature",
      "description": "Designed by world-renowned architect Geoffrey Bawa between 1980 and 1988, the Wellamadama campus is celebrated internationally as a masterpiece of tropical modernism, featuring pavilion corridors built over rolling hills framing vistas of the Indian Ocean.",
      "landmarkTitle": "Rabindranath Tagore Memorial Auditorium",
      "landmarkDesc": "The largest university auditorium in Sri Lanka, gifted in honour of Nobel laureate Rabindranath Tagore, seating 1,500 people with acoustic excellence.",
      "image": "/images/universities/gallery/ruhuna/photo2.jpg",
      "imageBadge": "Geoffrey Bawa Architecture",
      "pillars": [
        {
          "title": "National Pioneer in Fisheries & Marine Science",
          "desc": "Home to Sri Lanka's only dedicated state Faculty of Fisheries & Marine Sciences & Technology.",
          "subtitle": ""
        },
        {
          "title": "Hapugala Engineering & Karapitiya Medicine Hub",
          "desc": "Premier engineering education at Hapugala, Galle and clinical medical clerkships at National Hospital Galle (Karapitiya).",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/ruhuna/hero-aerial.jpg",
        "badge": "Aerial View",
        "title": "Wellamadama Coastal Campus & Indian Ocean",
        "desc": "The main campus is perched on rolling coastal knolls overlooking the Indian Ocean along the Matara-Kataragama road.",
        "aspect": "16/10",
        "location": "Wellamadama, Matara",
        "credit": "Wikimedia Commons · CC BY-SA 3.0"
      },
      {
        "id": "landmark",
        "src": "/images/universities/ruhuna/bawa-architecture.jpg",
        "badge": "Geoffrey Bawa Masterpiece",
        "title": "Tropical Modernist Hillside Pavilions",
        "desc": "World-renowned red-tiled pavilions, natural rock outcrops, and shaded colonnades designed by legendary architect Geoffrey Bawa.",
        "aspect": "4/3",
        "location": "Main Campus, Matara",
        "credit": "Wikimedia Commons · Public Domain"
      },
      {
        "id": "engineering",
        "src": "/images/universities/ruhuna/faculty-engineering.jpg",
        "badge": "Engineering Campus",
        "title": "Faculty of Engineering (Hapugala, Galle)",
        "desc": "Modern multi-tier engineering blocks nestled in the green hills of Hapugala.",
        "aspect": "4/3",
        "location": "Hapugala, Galle",
        "credit": "Wikimedia Commons · CC BY-SA 3.0"
      },
      {
        "id": "walkway",
        "src": "/images/universities/ruhuna/campus-walkway.jpg",
        "badge": "Scenic Campus",
        "title": "Open Courtyards & Ocean Breeze Loggias",
        "desc": "Covered walkways connecting hillsides with natural breeze channels and lush garden courtyards.",
        "aspect": "16/9",
        "location": "Wellamadama, Matara",
        "credit": "Wikimedia Commons · CC BY-SA 3.0"
      },
      {
        "id": "labs",
        "src": "/images/universities/ruhuna/engineering-labs.jpg",
        "badge": "Laboratories",
        "title": "Department of Electrical & Information Engineering",
        "desc": "State-of-the-art computing, telecommunications, and high-voltage laboratories.",
        "aspect": "4/3",
        "location": "Dept. of Electrical & Information Engineering",
        "credit": "Wikimedia Commons · CC BY-SA 3.0"
      }
    ],
    "faculties": [
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "galle",
        "location": "Hapugala, Galle",
        "established": "1999",
        "website": "https://www.eng.ruh.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry / ICT)",
        "departments": [
          "Civil & Environmental Engineering",
          "Electrical & Information Engineering",
          "Mechanical & Manufacturing Engineering",
          "Computer Engineering",
          "Interdisciplinary Studies"
        ],
        "tone": "tone-ice",
        "description": "Premier engineering faculty located in Hapugala, Galle, accredited by IESL."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "galle",
        "location": "Karapitiya, Galle",
        "established": "1980",
        "website": "https://www.med.ruh.ac.lk",
        "stream": "Biological Science (Biology, Chemistry, Physics)",
        "departments": [
          "Anatomy, Physiology & Biochemistry",
          "Medicine, Surgery & Paediatrics",
          "Obstetrics & Gynaecology, Psychiatry",
          "Clinical Training: National Hospital Galle (Karapitiya)"
        ],
        "tone": "tone-peach",
        "description": "Premier medical school with clinical clerkships at National Hospital Galle (Karapitiya)."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "matara",
        "location": "Wellamadama, Matara",
        "established": "1978",
        "website": "https://www.sci.ruh.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Mathematics & Computer Science",
          "Physics & Electronics",
          "Chemistry",
          "Botany & Zoology"
        ],
        "tone": "tone-mint",
        "description": "Leading faculty in coastal ecology, marine natural products, and computational mathematics."
      },
      {
        "id": "fisheries",
        "name": "Faculty of Fisheries & Marine Sciences & Technology",
        "campusZone": "matara",
        "location": "Wellamadama, Matara (Oceanfront)",
        "established": "2005",
        "website": "https://www.fish.ruh.ac.lk",
        "stream": "Biological Science & Physical Science",
        "departments": [
          "Fisheries & Aquaculture",
          "Limnology & Water Technology",
          "Oceanography & Marine Geology",
          "Coastal Marine Research Stations"
        ],
        "tone": "tone-ice",
        "description": "Sri Lanka's only dedicated state faculty of fisheries and marine oceanography."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture",
        "campusZone": "kamburupitiya",
        "location": "Mapalana, Kamburupitiya",
        "established": "1978",
        "website": "https://www.agri.ruh.ac.lk",
        "stream": "Biological Science",
        "departments": [
          "Agricultural Resource Management & Technology",
          "Agribusiness Management & Economics",
          "Green Technology & Farm Machinery",
          "Food Science & Soil Systems"
        ],
        "tone": "tone-mint",
        "description": "Pioneering green agricultural technology, farm machinery, and soil systems."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "kamburupitiya",
        "location": "Kamburupitiya, Matara",
        "established": "2016",
        "website": "https://www.tec.ruh.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology",
          "Information & Communication Technology (ICT)",
          "Multidisciplinary Technology Studies"
        ],
        "tone": "tone-ice",
        "description": "Modern technological complex focused on industrial robotics, precision agriculture, and IoT."
      },
      {
        "id": "management",
        "name": "Faculty of Management & Finance",
        "campusZone": "matara",
        "location": "Wellamadama, Matara",
        "established": "2003",
        "website": "https://www.mgt.ruh.ac.lk",
        "stream": "Commerce & Direct A/L Entry",
        "departments": [
          "Accounting & Finance",
          "Management & Entrepreneurship",
          "Marketing",
          "Human Resource Management"
        ],
        "tone": "tone-lavender",
        "description": "Providing top undergraduate business education with direct linkages to southern regional industries."
      }
    ],
    "degreeGroups": [
      {
        "id": "engineering",
        "title": "Engineering Disciplines (IESL Accredited)",
        "faculty": "Faculty of Engineering",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Civil & Environmental (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Electrical & Information (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Mechanical & Manufacturing (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Computer Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Marine Engineering & Naval Architecture (4 Years)"
          }
        ]
      },
      {
        "id": "health",
        "title": "Medicine, Healthcare & Allied Health",
        "faculty": "Faculties of Medicine & Allied Health",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO / GMC)"
          },
          {
            "name": "BSc (Hons) in Nursing (4 Years)"
          },
          {
            "name": "BSc (Hons) in Medical Laboratory Science (4 Years)"
          },
          {
            "name": "BPharm (Hons) in Pharmacy (4 Years)"
          }
        ]
      },
      {
        "id": "fisheries-marine",
        "title": "Fisheries, Marine Science & Oceanography",
        "faculty": "Faculty of Fisheries & Marine Sciences",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Fisheries & Marine Sciences (4 Years)"
          },
          {
            "name": "BSc (Hons) in Marine & Freshwater Sciences (4 Years)"
          }
        ]
      },
      {
        "id": "sciences-computing",
        "title": "Science, Computing & Financial Mathematics",
        "faculty": "Faculty of Science",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics (4 Years)"
          },
          {
            "name": "BSc (Hons) in Financial Mathematics & Industrial Statistics (4 Years)"
          }
        ]
      },
      {
        "id": "technology-stream",
        "title": "Technology Disciplines (BET & BICT)",
        "faculty": "Faculty of Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "Bachelor of Engineering Technology - BET (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Biosystems Technology - BBST (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Information & Communication Technology - BICT (Hons) (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "tagore",
        "title": "Rabindranath Tagore Memorial Auditorium",
        "desc": "1,500-seat state-of-the-art auditorium built with Indian grant assistance, acoustic architecture, and national convocation venue.",
        "badge": "1,500 Seats",
        "image": "/images/universities/ruhuna/facility-tagore.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "library",
        "title": "University Central Library Network",
        "desc": "Four-story library at Wellamadama plus branch libraries at Galle and Kamburupitiya housing 200,000+ volumes.",
        "badge": "200,000+ Volumes",
        "image": "/images/universities/ruhuna/facility-library.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "Wellamadama Sports Pavilion & Gymnasium",
        "desc": "Full-size athletic grounds, indoor sports pavilion, gymnasium, table tennis arenas, and fitness centers.",
        "badge": "Full Gymnasium",
        "image": "/images/universities/ruhuna/facility-sports.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "marine",
        "title": "Marine Hatcheries & Coastal Research Stations",
        "desc": "Direct oceanfront labs for ocean wave dynamics, coral reef regeneration, and saltwater aquaculture research.",
        "badge": "Coastal Hatcheries",
        "image": "/images/universities/ruhuna/facility-marine.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of Ruhuna",
      "description": "Undergraduate admission to the University of Ruhuna is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores and the national admission policy.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Bio Science, Technology, Commerce, or Arts) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Technology",
        "Commerce",
        "Arts"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "Places are allocated according to UGC national formula: 40% all-island merit, 55% district quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Engineering, Medicine, and Fisheries require high national Z-score cutoffs.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UOR Main Web Portal",
        "url": "https://www.ruh.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.ruh.ac.lk",
        "description": "OPAC catalogue, digital repository, and e-journals."
      },
      {
        "label": "Faculty of Engineering Portal",
        "url": "https://www.eng.ruh.ac.lk",
        "description": "Engineering departments, research labs, and academic calendar."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "ousl": {
    "slug": "ousl",
    "name": "The Open University of Sri Lanka",
    "shortName": "OUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Anavrutha Vidyalaya (Open Learning for All)",
    "crest": "/images/universities/crests/ousl.png",
    "location": "Nawala, Nugegoda",
    "province": "Western Province",
    "areas": [
      "Engineering",
      "Science",
      "Education",
      "Law",
      "Management",
      "Health Sciences"
    ],
    "website": "https://ou.ac.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1980",
      "campus": "Nawala (Main) & 28 Islandwide Centres",
      "type": "National Open & Distance University"
    },
    "rankings": {
      "nationalValue": "7th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,100",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & Commonwealth · 2026",
      "note": "Sri Lanka's sole national open university, educating over 40,000 students via distance learning and hybrid regional campuses."
    },
    "overview": {
      "eyebrow": "GET TO KNOW OUSL",
      "title": "Sri Lanka's National Pioneer in Open & Flexible Higher Education",
      "description": "Established under the Universities Act in 1980, The Open University of Sri Lanka (OUSL) is the premier national institution enabling students and working professionals across all 25 districts to earn fully accredited internal state degrees through blended, online, and distance learning. Operating 9 Regional Centres (including Kandy, Matara, Jaffna, Anuradhapura) and 19 Study Centres, OUSL democratizes access to elite education in engineering, law, nursing, education, and natural sciences.",
      "tagline": "National state university • Flexible learning with 28 regional study centers"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Four Decades of Democratizing Tertiary Education",
      "description": "Situated across a tranquil 36-acre campus in Nawala, Colombo, OUSL pioneered multimedia educational broadcasting, printed self-instructional courseware, and digital LMS networks across Sri Lanka.",
      "landmarkTitle": "Nawala Central Campus & Educational Media Center",
      "landmarkDesc": "The Central Educational Media Production Center and the iconic Nawala spiral administration quadrangle serve as the national hub coordinating island-wide distance education.",
      "image": "/images/universities/gallery/ousl/photo2.jpg",
      "imageBadge": "Nawala Central Complex",
      "pillars": [
        {
          "title": "Accredited Bachelor of Laws (LL.B)",
          "desc": "OUSL's Faculty of Humanities & Social Sciences conducts one of the most respected internal LL.B degree programmes in Sri Lanka.",
          "subtitle": ""
        },
        {
          "title": "Open Degree Routes for Working Professionals",
          "desc": "Offering degree pathways for school leavers as well as diploma holders without career disruption.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/ousl.jpg",
        "badge": "Main Campus",
        "title": "OUSL Nawala Main Campus",
        "desc": "The primary administrative and central faculty complex at Nawala, Nugegoda.",
        "aspect": "16/10",
        "location": "Nawala, Nugegoda",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/ousl/photo2.jpg",
        "badge": "Landmark",
        "title": "Kandy Regional Centre & Media Hub",
        "desc": "The Polgolla Kandy regional center providing lab practicals and student support.",
        "aspect": "4/3",
        "location": "Polgolla, Kandy",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "engineering",
        "src": "/images/universities/gallery/ousl/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Engineering Technology",
        "desc": "Heavy machinery workshops, civil materials testing, and software development labs.",
        "aspect": "4/3",
        "location": "Nawala",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/ousl/photo4.jpg",
        "badge": "Campus Life",
        "title": "Nawala Shaded Study Squares",
        "desc": "Lush garden courtyards where adult learners and students gather for peer tutorials.",
        "aspect": "16/9",
        "location": "Nawala",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/ousl/photo5.jpg",
        "badge": "Research Hub",
        "title": "OUSL Main Digital Library",
        "desc": "Extensive distance learning resources, digital book loaning, and e-learning terminals.",
        "aspect": "4/3",
        "location": "Nawala",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "engineering-tech",
        "name": "Faculty of Engineering Technology",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "1986",
        "website": "https://ou.ac.lk/eng",
        "stream": "Physical Science / Engineering Diplomas",
        "departments": [
          "Civil Engineering",
          "Electrical & Computer Engineering",
          "Mechanical & Manufacturing",
          "Agricultural & Plantation Engineering",
          "Textile & Apparel Technology"
        ],
        "tone": "tone-ice",
        "description": "Conducts Bachelor of Technology (BTech) and Bachelor of Software Engineering (BSE) degrees."
      },
      {
        "id": "natural-sciences",
        "name": "Faculty of Natural Sciences",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "1980",
        "website": "https://ou.ac.lk/natsci",
        "stream": "Physical & Biological Sciences",
        "departments": [
          "Chemistry",
          "Physics",
          "Mathematics",
          "Botany",
          "Zoology"
        ],
        "tone": "tone-mint",
        "description": "Provides BSc degrees with hands-on laboratory sessions conducted across regional centres."
      },
      {
        "id": "humanities-law",
        "name": "Faculty of Humanities & Social Sciences",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "1980",
        "website": "https://ou.ac.lk/hss",
        "stream": "Arts / Open Entry (A/L passes)",
        "departments": [
          "Legal Studies",
          "Social Studies",
          "Language Studies"
        ],
        "tone": "tone-lavender",
        "description": "Home to the premier OUSL Bachelor of Laws (LL.B) and BA in English Studies."
      },
      {
        "id": "health-sciences",
        "name": "Faculty of Health Sciences",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "2015",
        "website": "https://ou.ac.lk/healthsci",
        "stream": "Biological Science & Nursing Diplomas",
        "departments": [
          "Nursing",
          "Pharmacy",
          "Medical Laboratory Sciences",
          "Psychology"
        ],
        "tone": "tone-peach",
        "description": "Upskilling Sri Lankan healthcare workers through BSc Honours in Nursing and MLS."
      },
      {
        "id": "education",
        "name": "Faculty of Education",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "1983",
        "website": "https://ou.ac.lk/education",
        "stream": "Teaching Profession / Graduate Entry",
        "departments": [
          "Early Childhood & Primary",
          "Secondary & Tertiary Education",
          "Special Education"
        ],
        "tone": "tone-mint",
        "description": "Sri Lanka's leading educator of certified school teachers, principals, and curriculum developers."
      },
      {
        "id": "management",
        "name": "Faculty of Management Studies",
        "campusZone": "nawala",
        "location": "Nawala, Nugegoda",
        "established": "2010",
        "website": "https://ou.ac.lk/fms",
        "stream": "Commerce & Open A/L Entry",
        "departments": [
          "Accounting & Finance",
          "Marketing Management",
          "Human Resource Management"
        ],
        "tone": "tone-peach",
        "description": "Offers flexible Bachelor of Management Studies (BMS) and MBA programmes."
      }
    ],
    "degreeGroups": [
      {
        "id": "engineering-software",
        "title": "Engineering Technology & Software Engineering",
        "faculty": "Faculty of Engineering Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "Bachelor of Software Engineering - BSE (Hons) (4 Years)"
          },
          {
            "name": "Bachelor of Technology - BTech (Hons) in Civil (4 Years)"
          },
          {
            "name": "Bachelor of Technology - BTech (Hons) in Electrical & Computer (4 Years)"
          },
          {
            "name": "Bachelor of Technology - BTech (Hons) in Mechanical (4 Years)"
          }
        ]
      },
      {
        "id": "law-legal",
        "title": "Law & Legal Studies",
        "faculty": "Faculty of Humanities & Social Sciences",
        "tone": "tone-lavender",
        "degrees": [
          {
            "name": "Bachelor of Laws - LL.B (Hons) (4 Years - Selection via National Admission Test)"
          },
          {
            "name": "Master of Laws (LL.M)"
          }
        ]
      },
      {
        "id": "nursing-health",
        "title": "Health Sciences & Nursing",
        "faculty": "Faculty of Health Sciences",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BSc (Hons) in Nursing (3-4 Years - Post-RN & Direct)"
          },
          {
            "name": "BSc (Hons) in Medical Laboratory Science (4 Years)"
          },
          {
            "name": "Bachelor of Pharmacy (BPharm Hons) (4 Years)"
          }
        ]
      },
      {
        "id": "natural-sciences-bs",
        "title": "Natural & Applied Sciences",
        "faculty": "Faculty of Natural Sciences",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc Degree in Natural Sciences (Chemistry, Physics, Mathematics, Botany, Zoology)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "OUSL Central Library & Digital Book Vault",
        "desc": "Features over 200,000+ volumes, 24/7 online e-book lending, access to IEEE and JSTOR, and regional study carrels.",
        "badge": "200,000+ Volumes",
        "image": "/images/universities/gallery/ousl/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "centres",
        "title": "Network of 28 Islandwide Regional & Study Centres",
        "desc": "Full-fledged regional campuses with labs, lecture rooms, and counseling centers in Colombo, Kandy, Matara, Jaffna, Batticaloa, etc.",
        "badge": "28 Regional Centers",
        "image": "/images/universities/gallery/ousl/photo2.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "labs",
        "title": "Nawala Science & Technology Engineering Workshops",
        "desc": "Comprehensive engineering machine shops, chemical analysis rooms, electronics bench testing, and computer labs.",
        "badge": "Engineering Workshops",
        "image": "/images/universities/gallery/ousl/photo3.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "media",
        "title": "Educational Media Studio & Digital LMS Center",
        "desc": "Audio-video television broadcast studios producing educational television programmes and online lectures for students nationwide.",
        "badge": "TV & Media Studio",
        "image": "/images/universities/cards/ousl.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "OPEN UNIVERSITY ADMISSIONS",
      "title": "Admissions Guidance for The Open University of Sri Lanka",
      "description": "OUSL provides flexible, open entry pathways. Students can enter directly with G.C.E. A/L passes or through OUSL foundation programmes, without Z-score quotas.",
      "step1Title": "Direct Entry with G.C.E. A/L Passes",
      "step1Desc": "Possess 3 passes in G.C.E. A/L (or Foundation certificate) in relevant discipline. Degree programmes such as LL.B and Software Engineering conduct competitive selection tests.",
      "step1Tags": [
        "Physical Science",
        "Bio Science",
        "Commerce",
        "Arts",
        "Mature / Foundation Entry"
      ],
      "step2Title": "Flexible Learning & Regional Registration",
      "step2Desc": "Register at any of the 9 regional centers closest to your residence. Courses combine printed textbooks, weekly online webinars, and weekend hands-on laboratory sessions.",
      "quotaMerit": "Direct Admission",
      "quotaDistrict": "Islandwide Access",
      "quotaSpecial": "Workplace Blended",
      "quotaNote": "No district quota or age limits. Highly subsidized state university course fees.",
      "step3Title": "Register Online via OUSL Portal",
      "step3Desc": "Submit your application directly online through the OUSL admissions website during open intake seasons.",
      "portalUrl": "https://ou.ac.lk",
      "portalLabel": "OUSL Direct Admissions Portal"
    },
    "officialLinks": [
      {
        "label": "OUSL Official Web Portal",
        "url": "https://ou.ac.lk",
        "description": "Primary university administration, regional centres, and course finder."
      },
      {
        "label": "OUSL Digital Library",
        "url": "https://lib.ou.ac.lk",
        "description": "E-learning books, OPAC catalogue, and past examination papers."
      },
      {
        "label": "OUSL Learn LMS",
        "url": "https://learn.ou.ac.lk",
        "description": "Student virtual learning environment and online submission portal."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National degree recognition and accreditation standards."
      }
    ]
  },
  "eastern": {
    "slug": "eastern",
    "name": "Eastern University, Sri Lanka",
    "shortName": "EUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Eluvom Uyarvom (Let us Arise and Prosper)",
    "crest": "/images/universities/crests/eastern.png",
    "location": "Vantharumoolai, Chenkalady",
    "province": "Eastern Province",
    "areas": [
      "Agriculture",
      "Science",
      "Commerce",
      "Arts",
      "Health Sciences",
      "Technology"
    ],
    "website": "https://www.esn.ac.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1981 / 1986",
      "campus": "Vantharumoolai & Batticaloa",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "9th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,450",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Leading state university in Eastern Sri Lanka, celebrated for agricultural innovation, healthcare education, and cultural harmony."
    },
    "overview": {
      "eyebrow": "GET TO KNOW EUSL",
      "title": "Eastern Sri Lanka's Flagship University & Agricultural Center",
      "description": "Originally founded in 1981 as the Batticaloa University College and elevated to full national university status in 1986, Eastern University, Sri Lanka (EUSL) is situated on a spacious, tranquil campus in Vantharumoolai, 15 km north of Batticaloa. Operating specialized faculties of Agriculture, Science, Commerce, and the Faculty of Health-Care Sciences in Batticaloa town, EUSL is a beacon of progress and multi-ethnic harmony.",
      "tagline": "National state university • Coastal greenery campus at Vantharumoolai & Batticaloa"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Vantharumoolai Agricultural Stature & Heritage Palms",
      "description": "Set amid palm groves and lagoons, EUSL combines traditional agricultural farms with modern clinical complexes and regional environmental research stations.",
      "landmarkTitle": "The Vantharumoolai Central Tower & Nalliah Auditorium",
      "landmarkDesc": "The central administrative clock tower and Nalliah Memorial Auditorium represent the resilience, intellectual pride, and academic service of Eastern Sri Lanka.",
      "image": "/images/universities/gallery/eastern/photo2.jpg",
      "imageBadge": "Faculty of Health-Care Sciences",
      "pillars": [
        {
          "title": "Pioneer in Coastal Agriculture & Livestock",
          "desc": "Faculty of Agriculture operates experimental farms in crop breeding, saline paddy cultivation, and dairy farming.",
          "subtitle": ""
        },
        {
          "title": "Batticaloa Teaching Hospital Clinical Hub",
          "desc": "Faculty of Health-Care Sciences provides MBBS and Nursing training at Teaching Hospital Batticaloa.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/eastern.jpg",
        "badge": "Main Campus",
        "title": "Eastern University Main Entrance",
        "desc": "The primary campus entrance at Vantharumoolai, Chenkalady.",
        "aspect": "16/10",
        "location": "Vantharumoolai, Batticaloa",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "healthcare",
        "src": "/images/universities/gallery/eastern/photo2.jpg",
        "badge": "Medical Complex",
        "title": "Faculty of Health-Care Sciences",
        "desc": "Modern clinical laboratories, anatomy dissection suites, and lecture halls in Batticaloa town.",
        "aspect": "4/3",
        "location": "Batticaloa",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "agriculture",
        "src": "/images/universities/gallery/eastern/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Agriculture & Research Farm",
        "desc": "Greenhouse complexes, agronomy trial grounds, and food science facilities.",
        "aspect": "4/3",
        "location": "Vantharumoolai",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/eastern/photo4.jpg",
        "badge": "Campus Life",
        "title": "Palm Groves & Student Walkways",
        "desc": "Peaceful pathways lined with palmyrah trees connecting science laboratories.",
        "aspect": "16/9",
        "location": "Vantharumoolai",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/eastern/photo5.jpg",
        "badge": "Research Hub",
        "title": "EUSL Central Library",
        "desc": "Houses over 150,000+ volumes, scientific databases, and quiet study carrels.",
        "aspect": "4/3",
        "location": "Vantharumoolai",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "healthcare",
        "name": "Faculty of Health-Care Sciences",
        "campusZone": "batticaloa-town",
        "location": "Batticaloa Town",
        "established": "2005",
        "website": "https://fhcs.esn.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Clinical Sciences",
          "Human Biology",
          "Pathophysiology",
          "Medical Education",
          "Primary Health Care",
          "Teaching Hospital Batticaloa Training"
        ],
        "tone": "tone-peach",
        "description": "Accredited medical faculty producing MBBS doctors and BSc Nursing professionals."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture",
        "campusZone": "vantharumoolai",
        "location": "Vantharumoolai",
        "established": "1981",
        "website": "https://fag.esn.ac.lk",
        "stream": "Biological Science & Agriculture",
        "departments": [
          "Agronomy",
          "Agricultural Biology",
          "Agricultural Chemistry",
          "Agricultural Economics",
          "Animal Science"
        ],
        "tone": "tone-mint",
        "description": "Renowned for dry-zone agro-ecosystem research, livestock management, and coastal farming."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "vantharumoolai",
        "location": "Vantharumoolai",
        "established": "1986",
        "website": "https://fos.esn.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Physics",
          "Chemistry",
          "Mathematics",
          "Computer Science",
          "Zoology",
          "Botany"
        ],
        "tone": "tone-ice",
        "description": "Offers BSc degrees in pure and applied sciences with research in fisheries and materials science."
      },
      {
        "id": "commerce",
        "name": "Faculty of Commerce & Management",
        "campusZone": "vantharumoolai",
        "location": "Vantharumoolai",
        "established": "1986",
        "website": "https://fcm.esn.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Management",
          "Commerce",
          "Economics"
        ],
        "tone": "tone-peach",
        "description": "Educating future business leaders in financial accounting, marketing, and entrepreneurship."
      },
      {
        "id": "arts",
        "name": "Faculty of Arts & Culture",
        "campusZone": "vantharumoolai",
        "location": "Vantharumoolai",
        "established": "1986",
        "website": "https://fac.esn.ac.lk",
        "stream": "Arts & Social Sciences",
        "departments": [
          "Languages",
          "Social Sciences",
          "Fine Arts",
          "Education",
          "Islamic Studies",
          "Geography"
        ],
        "tone": "tone-lavender",
        "description": "Preserving the rich literary, cultural, and historical heritage of the eastern province."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "vantharumoolai",
        "location": "Vantharumoolai",
        "established": "2017",
        "website": "https://fot.esn.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Biosystems Technology",
          "Engineering Technology",
          "Multidisciplinary Technology"
        ],
        "tone": "tone-ice",
        "description": "Focuses on modern post-harvest engineering, renewable solar energy, and information systems."
      }
    ],
    "degreeGroups": [
      {
        "id": "medical-health",
        "title": "Medicine, Nursing & Healthcare",
        "faculty": "Faculty of Health-Care Sciences",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO Accredited)"
          },
          {
            "name": "BSc (Hons) in Nursing (4 Years)"
          }
        ]
      },
      {
        "id": "agri-sciences",
        "title": "Agriculture & Livestock Production",
        "faculty": "Faculty of Agriculture",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Agriculture (4 Years)"
          },
          {
            "name": "BSc (Hons) in Agribusiness Management (4 Years)"
          }
        ]
      },
      {
        "id": "pure-applied-sci",
        "title": "Natural, Physical & Computational Sciences",
        "faculty": "Faculty of Science",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics (4 Years)"
          },
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Mathematics (4 Years)"
          }
        ]
      },
      {
        "id": "commerce-mgmt",
        "title": "Management, Business & Accounting",
        "faculty": "Faculty of Commerce & Management",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BBA (Hons) in Marketing (4 Years)"
          },
          {
            "name": "BBA (Hons) in Human Resource Management (4 Years)"
          },
          {
            "name": "BCom (Hons) in Accounting & Finance (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "Eastern University Central Library",
        "desc": "Houses over 150,000+ volumes, automated catalogue (Koha OPAC), e-journal workstations, and regional thesis archives.",
        "badge": "150,000+ Volumes",
        "image": "/images/universities/gallery/eastern/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "hospital",
        "title": "Teaching Hospital Batticaloa Clinical Center",
        "desc": "Tertiary clinical teaching hospital with state-of-the-art surgical suites, pediatric wards, and emergency care facilities.",
        "badge": "Teaching Hospital",
        "image": "/images/universities/gallery/eastern/photo2.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "farm",
        "title": "Vantharumoolai Agricultural Experimental Farm",
        "desc": "50-acre working research farm with livestock units, crop gene banks, shade-cloth nurseries, and meteorological station.",
        "badge": "50-Acre Farm",
        "image": "/images/universities/gallery/eastern/photo3.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "University Sports Pavilion & Playgrounds",
        "desc": "Cricket grounds, football field, volleyball and netball courts, and indoor sports equipment for student athletes.",
        "badge": "Sports Pavilion",
        "image": "/images/universities/cards/eastern.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for Eastern University, Sri Lanka",
      "description": "Admission to undergraduate degree programmes at EUSL is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Bio Science, Agriculture, Physical Science, Commerce, Arts, or Technology) in a single sitting.",
      "step1Tags": [
        "Biological Science",
        "Agriculture Stream",
        "Physical Science",
        "Commerce",
        "Arts"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "MBBS Medicine and BSc Nursing require competitive Z-scores across national quotas.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "EUSL Official Web Portal",
        "url": "https://www.esn.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "Eastern University Library",
        "url": "https://lib.esn.ac.lk",
        "description": "Online Public Access Catalogue (OPAC) and digital research databases."
      },
      {
        "label": "Faculty of Health-Care Sciences",
        "url": "https://fhcs.esn.ac.lk",
        "description": "Medical degree syllabus, clinical training, and departments."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "rajarata": {
    "slug": "rajarata",
    "name": "Rajarata University of Sri Lanka",
    "shortName": "RUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Hitham Karomi Janathaya (Working for the Welfare of the People)",
    "crest": "/images/universities/crests/rajarata.png",
    "location": "Mihintale, Anuradhapura",
    "province": "North Central Province",
    "areas": [
      "Medicine",
      "Applied Sciences",
      "Management",
      "Agriculture",
      "Technology",
      "Social Sciences"
    ],
    "website": "https://www.rjt.ac.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1995",
      "campus": "Mihintale (Sacred Cradle)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "10th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,650",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Leading state university in the North Central Province, renowned for Archaeology, Dry-Zone Agriculture, and Saliyapura Clinical Medicine."
    },
    "overview": {
      "eyebrow": "GET TO KNOW RUSL",
      "title": "Higher Education in the Sacred Cradle of Sri Lankan Civilization",
      "description": "Established in 1995 and located in the historic sanctuary of Mihintale—the birthplace of Buddhism in Sri Lanka—Rajarata University of Sri Lanka (RUSL) serves students across the dry zone and the island. Operating its main campus in Mihintale, its Faculty of Medicine in Saliyapura (Anuradhapura), and Agriculture in Puliyankulama, RUSL excels in environmental science, clinical healthcare, and heritage archaeology.",
      "tagline": "National state university • Historic sacred city campus in Mihintale & Saliyapura"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Mihintale Sacred Heritage & Ancient Reservoir Culture",
      "description": "Bordering ancient monastic caves, stone stupas, and ancient irrigation tanks, the Mihintale campus provides an inspiring backdrop where ancient civilization meets modern scientific inquiry.",
      "landmarkTitle": "Mihintale Sacred Rock View & Central Administration Complex",
      "landmarkDesc": "The central campus towers directly frame the sacred peak of Mihintale, creating a unique atmosphere of serene scholarship and cultural pride.",
      "image": "/images/universities/gallery/rajarata/photo2.jpg",
      "imageBadge": "Faculty of Applied Sciences",
      "pillars": [
        {
          "title": "Faculty of Medicine at Saliyapura",
          "desc": "One of Sri Lanka's top clinical schools, training doctors at Anuradhapura Teaching Hospital with specialized snakebite and nephrology research.",
          "subtitle": ""
        },
        {
          "title": "Center for Dry-Zone Agricultural Technology",
          "desc": "Pioneering drought-resistant crop breeding, organic pest control, and water conservation technologies.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/rajarata.jpg",
        "badge": "Main Campus",
        "title": "Rajarata University Main Gate",
        "desc": "The primary entrance along the Kandy-Jaffna A9 highway at Mihintale.",
        "aspect": "16/10",
        "location": "Mihintale, Anuradhapura",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "applied-sci",
        "src": "/images/universities/gallery/rajarata/photo2.jpg",
        "badge": "Science Complex",
        "title": "Faculty of Applied Sciences",
        "desc": "Modern research laboratories in chemistry, physics, and biological sciences.",
        "aspect": "4/3",
        "location": "Mihintale",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "grounds",
        "src": "/images/universities/gallery/rajarata/photo3.jpg",
        "badge": "Campus Life",
        "title": "Mihintale Morning Grounds & Shaded Lawns",
        "desc": "Scenic parklands and study courtyards beneath ancient forest trees.",
        "aspect": "4/3",
        "location": "Mihintale",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/rajarata/photo4.jpg",
        "badge": "Walkways",
        "title": "Pedestrian Avenues Connecting Faculties",
        "desc": "Breeze-cooled covered walkways linking lecture halls with the central library.",
        "aspect": "16/9",
        "location": "Mihintale",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/rajarata/photo5.jpg",
        "badge": "Research Hub",
        "title": "RUSL Central Library & Digital Reading Center",
        "desc": "Houses over 150,000+ volumes, ancient historical manuscripts, and scientific journal access.",
        "aspect": "4/3",
        "location": "Mihintale",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "medicine",
        "name": "Faculty of Medicine & Allied Health Sciences",
        "campusZone": "saliyapura",
        "location": "Saliyapura, Anuradhapura",
        "established": "2006",
        "website": "https://med.rjt.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Clinical Medicine & Surgery",
          "Paediatrics & Obstetrics",
          "Community Medicine",
          "Anuradhapura Teaching Hospital Clinical Training"
        ],
        "tone": "tone-peach",
        "description": "Highly regarded medical school leading national research into tropical diseases and renal health."
      },
      {
        "id": "applied-sciences",
        "name": "Faculty of Applied Sciences",
        "campusZone": "mihintale",
        "location": "Mihintale",
        "established": "1995",
        "website": "https://as.rjt.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Physical Sciences",
          "Biological Sciences",
          "Health Promotion",
          "Computing"
        ],
        "tone": "tone-mint",
        "description": "Pioneering the unique BSc (Hons) in Health Promotion and applied software engineering degrees."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture",
        "campusZone": "puliyankulama",
        "location": "Puliyankulama, Anuradhapura",
        "established": "2001",
        "website": "https://agri.rjt.ac.lk",
        "stream": "Biological Science & Agriculture",
        "departments": [
          "Agricultural Systems",
          "Plant Sciences",
          "Soil & Water Resources",
          "Animal & Food Sciences"
        ],
        "tone": "tone-mint",
        "description": "Focused on dry-zone precision irrigation, tank cascade ecosystem preservation, and crop breeding."
      },
      {
        "id": "management",
        "name": "Faculty of Management Studies",
        "campusZone": "mihintale",
        "location": "Mihintale",
        "established": "1995",
        "website": "https://mgt.rjt.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Accountancy & Finance",
          "Business Management",
          "Marketing Management",
          "Tourism & Hospitality"
        ],
        "tone": "tone-peach",
        "description": "Premier business faculty training professionals in tourism economics, banking, and accounting."
      },
      {
        "id": "social-sciences",
        "name": "Faculty of Social Sciences & Humanities",
        "campusZone": "mihintale",
        "location": "Mihintale",
        "established": "1995",
        "website": "https://ssh.rjt.ac.lk",
        "stream": "Arts Stream",
        "departments": [
          "Archaeology & Heritage Management",
          "Social Sciences",
          "Humanities",
          "Environmental Management"
        ],
        "tone": "tone-lavender",
        "description": "National leader in cultural archaeology, heritage tourism, and Buddhist civilization studies."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "mihintale",
        "location": "Mihintale",
        "established": "2016",
        "website": "https://tech.rjt.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology",
          "Information & Communication Technology"
        ],
        "tone": "tone-ice",
        "description": "Modern faculty offering hands-on industrial robotics, biotechnology, and network systems."
      }
    ],
    "degreeGroups": [
      {
        "id": "health-medicine",
        "title": "Medicine & Clinical Sciences",
        "faculty": "Faculty of Medicine & Allied Health Sciences",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC / WHO Accredited)"
          },
          {
            "name": "BSc (Hons) in Health Promotion (4 Years - Pioneering National Degree)"
          }
        ]
      },
      {
        "id": "applied-computing",
        "title": "Applied Sciences & Information Technology",
        "faculty": "Faculty of Applied Sciences",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Information Technology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Applied Biology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Industrial Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Physics (4 Years)"
          }
        ]
      },
      {
        "id": "dryzone-agriculture",
        "title": "Agriculture & Resource Management",
        "faculty": "Faculty of Agriculture",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Agriculture (4 Years)"
          },
          {
            "name": "BSc (Hons) in Food & Agri-Enterprise Management (4 Years)"
          }
        ]
      },
      {
        "id": "business-tourism",
        "title": "Management, Finance & Tourism",
        "faculty": "Faculty of Management Studies",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BSc (Hons) in Accountancy & Finance (4 Years)"
          },
          {
            "name": "BSc (Hons) in Tourism & Hospitality Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Marketing Management (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "Rajarata University Central Library",
        "desc": "Comprehensive modern facility with 150,000+ volumes, ancient Anuradhapura historical archives, and high-speed Wi-Fi research pods.",
        "badge": "150,000+ Volumes",
        "image": "/images/universities/gallery/rajarata/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "hospital",
        "title": "Anuradhapura Teaching Hospital Clinical Training",
        "desc": "One of Sri Lanka's largest provincial tertiary hospitals where Rajarata medical students receive comprehensive surgical and clinical clerkships.",
        "badge": "Teaching Hospital",
        "image": "/images/universities/gallery/rajarata/photo2.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "sports",
        "title": "University Sports Complex & Athletic Grounds",
        "desc": "Large outdoor sports arena accommodating cricket, football, volleyball, athletics, and an equipped gymnasium.",
        "badge": "Sports Pavilion",
        "image": "/images/universities/cards/rajarata.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "herbal",
        "title": "Medicinal Botanical Garden & Agro-Research Plot",
        "desc": "Experimental dry-zone medicinal plant conservation nursery and agronomic research field.",
        "badge": "Research Plot",
        "image": "/images/universities/gallery/rajarata/photo3.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for Rajarata University of Sri Lanka",
      "description": "Admission to undergraduate degree programmes at RUSL is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Biological Science, Physical Science, Commerce, Arts, or Technology) in a single sitting.",
      "step1Tags": [
        "Biological Science",
        "Physical Science",
        "Commerce",
        "Arts",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "MBBS Medicine and BSc Health Promotion require competitive national Z-scores.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "RUSL Official Web Portal",
        "url": "https://www.rjt.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.rjt.ac.lk",
        "description": "Online catalogue, digital research databases, and archives."
      },
      {
        "label": "Faculty of Medicine (Saliyapura)",
        "url": "https://med.rjt.ac.lk",
        "description": "Medical degree syllabus, clinical training units, and hospital departments."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "wayamba": {
    "slug": "wayamba",
    "name": "Wayamba University of Sri Lanka",
    "shortName": "WUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Vidya Bhushanam Janasya (Knowledge is the Adornment of Mankind)",
    "crest": "/images/universities/crests/wayamba.png",
    "location": "Kuliyapitiya & Makandura",
    "province": "North Western Province",
    "areas": [
      "Applied Sciences",
      "Business Studies",
      "Agriculture",
      "Food & Nutrition",
      "Medicine",
      "Technology"
    ],
    "website": "https://www.wyb.ac.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1999",
      "campus": "Kuliyapitiya & Makandura",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "11th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,800",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Sri Lanka's foremost national leader in Food Science, Human Nutrition, Plantation Management, and Applied Electronics."
    },
    "overview": {
      "eyebrow": "GET TO KNOW WUSL",
      "title": "Sri Lanka's Flagship Center for Food Science, Nutrition & Technology",
      "description": "Established in 1999, the Wayamba University of Sri Lanka (WUSL) is situated in the prosperous North Western Province, operating dual thriving campuses at Kuliyapitiya (Main Administration, Applied Sciences, Business Studies, Technology, and Medicine) and Makandura (Agriculture & Plantation Management, Livestock, Fisheries & Nutrition). WUSL is internationally celebrated for pioneer degrees in Food Science, Clinical Nutrition, and Industrial Management.",
      "tagline": "National state university • Specialized food science, agriculture & medical centers"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Coconut Triangle Agro-Industrial Heritage & Technological Focus",
      "description": "Nestled in the heart of Sri Lanka's historic Coconut Triangle, Wayamba combines agro-industrial research farms with modern applied science complexes and advanced clinical medical laboratories.",
      "landmarkTitle": "Kuliyapitiya Central Administrative Complex & Clock Tower",
      "landmarkDesc": "The landmark administrative tower at Kuliyapitiya anchors the university's academic faculties, symbolising educational advancement across the Wayamba province.",
      "image": "/images/universities/gallery/wayamba/photo2.jpg",
      "imageBadge": "Faculty of Agriculture & Plantation Management",
      "pillars": [
        {
          "title": "National Leader in Food Science & Nutrition",
          "desc": "The Faculty of Livestock, Fisheries & Nutrition is Sri Lanka's leading institute for educating accredited clinical dietitians and food scientists.",
          "subtitle": ""
        },
        {
          "title": "Teaching Hospital Kuliyapitiya Medical Hub",
          "desc": "The Faculty of Medicine operates modern clinical clerkships at Teaching Hospital Kuliyapitiya.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/wayamba.jpg",
        "badge": "Main Campus",
        "title": "Wayamba University Main Entrance",
        "desc": "The main ceremonial academic gate at Kuliyapitiya.",
        "aspect": "16/10",
        "location": "Kuliyapitiya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "fapm",
        "src": "/images/universities/gallery/wayamba/photo2.jpg",
        "badge": "Makandura Campus",
        "title": "Faculty of Agriculture & Plantation Management",
        "desc": "Plantation research plots, biotechnology labs, and agronomy pavilions at Makandura.",
        "aspect": "4/3",
        "location": "Makandura, Gonawila",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "science",
        "src": "/images/universities/gallery/wayamba/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Applied Sciences Complex",
        "desc": "Electronics bench testing, computer science labs, and industrial chemistry suites.",
        "aspect": "4/3",
        "location": "Kuliyapitiya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/wayamba/photo4.jpg",
        "badge": "Campus Life",
        "title": "Landscaped Courtyards & Study Pavilions",
        "desc": "Tree-lined green spaces providing students comfortable open-air reading environments.",
        "aspect": "16/9",
        "location": "Kuliyapitiya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/wayamba/photo5.jpg",
        "badge": "Research Hub",
        "title": "WUSL Central Library Network",
        "desc": "Comprehensive technical library holding over 150,000+ volumes and high-speed digital research access.",
        "aspect": "4/3",
        "location": "Kuliyapitiya",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "applied-sciences",
        "name": "Faculty of Applied Sciences",
        "campusZone": "kuliyapitiya",
        "location": "Kuliyapitiya",
        "established": "1999",
        "website": "https://fas.wyb.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Computing & Information Systems",
          "Electronics",
          "Mathematical Sciences",
          "Industrial Management"
        ],
        "tone": "tone-ice",
        "description": "Conducts prestigious BSc (Hons) degrees in Industrial Management and Applied Electronics."
      },
      {
        "id": "business-studies",
        "name": "Faculty of Business Studies & Finance",
        "campusZone": "kuliyapitiya",
        "location": "Kuliyapitiya",
        "established": "1999",
        "website": "https://fbsf.wyb.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Accountancy",
          "Banking & Finance",
          "Business Management",
          "Insurance & Valuation"
        ],
        "tone": "tone-peach",
        "description": "National pioneer in Bachelor of Science degrees in Insurance & Valuation and Banking & Finance."
      },
      {
        "id": "nutrition",
        "name": "Faculty of Livestock, Fisheries & Nutrition",
        "campusZone": "makandura",
        "location": "Makandura, Gonawila",
        "established": "1999",
        "website": "https://flfn.wyb.ac.lk",
        "stream": "Biological Science (Bio, Chem, Phys)",
        "departments": [
          "Applied Nutrition",
          "Food Science & Technology",
          "Livestock & Avian Sciences",
          "Aquaculture & Fisheries"
        ],
        "tone": "tone-mint",
        "description": "Sri Lanka's premier faculty training clinical nutritionists, dietitians, and food process technologists."
      },
      {
        "id": "agriculture",
        "name": "Faculty of Agriculture & Plantation Management",
        "campusZone": "makandura",
        "location": "Makandura, Gonawila",
        "established": "1999",
        "website": "https://fapm.wyb.ac.lk",
        "stream": "Biological Science & Agriculture",
        "departments": [
          "Agronomy & Crop Science",
          "Biotechnology",
          "Horticulture & Landscape",
          "Plantation Management"
        ],
        "tone": "tone-mint",
        "description": "Pioneering sustainable commercial plantation management, tea, rubber, and coconut breeding."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "kuliyapitiya",
        "location": "Labuduwa & Kuliyapitiya",
        "established": "2018",
        "website": "https://fom.wyb.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Anatomy",
          "Physiology",
          "Biochemistry",
          "Clinical Medicine & Surgery",
          "Teaching Hospital Kuliyapitiya Training"
        ],
        "tone": "tone-peach",
        "description": "Accredited medical faculty training physicians at Teaching Hospital Kuliyapitiya."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "kuliyapitiya",
        "location": "Kuliyapitiya",
        "established": "2017",
        "website": "https://fot.wyb.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology",
          "Construction Technology",
          "Mechanical & Manufacturing Tech"
        ],
        "tone": "tone-ice",
        "description": "Equipped with advanced mechanical workshops, materials testing rigs, and automated manufacturing systems."
      }
    ],
    "degreeGroups": [
      {
        "id": "food-nutrition",
        "title": "Food Science, Nutrition & Dietetics",
        "faculty": "Faculty of Livestock, Fisheries & Nutrition",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Food Science & Nutrition (4 Years - Professional Dietetics)"
          },
          {
            "name": "BSc (Hons) in Food Production & Technology Management (4 Years)"
          }
        ]
      },
      {
        "id": "applied-industrial",
        "title": "Applied Sciences & Industrial Management",
        "faculty": "Faculty of Applied Sciences",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Industrial Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Applied Electronics (4 Years)"
          },
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          }
        ]
      },
      {
        "id": "medicine-clinical",
        "title": "Medicine & Clinical Healthcare",
        "faculty": "Faculty of Medicine",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC Accredited)"
          }
        ]
      },
      {
        "id": "banking-valuation",
        "title": "Banking, Finance & Insurance Valuation",
        "faculty": "Faculty of Business Studies & Finance",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BSc (Hons) in Insurance & Valuation (4 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Banking & Finance (4 Years)"
          },
          {
            "name": "BSc (Hons) in Accountancy (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "Wayamba University Central Library",
        "desc": "Modern dual-campus library network at Kuliyapitiya and Makandura holding over 150,000+ volumes and full electronic journal portals.",
        "badge": "150,000+ Volumes",
        "image": "/images/universities/gallery/wayamba/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "hospital",
        "title": "Teaching Hospital Kuliyapitiya Clinical Complex",
        "desc": "Modern clinical teaching hospital featuring specialized coronary care, obstetrics, pediatrics, and surgical suites.",
        "badge": "Teaching Hospital",
        "image": "/images/universities/gallery/wayamba/photo3.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "makandura-farm",
        "title": "Makandura Agro-Biotechnology Experimental Station",
        "desc": "Commercial livestock units, tissue culture laboratories, greenhouses, and aquaculture research ponds.",
        "badge": "Agro-Tech Station",
        "image": "/images/universities/gallery/wayamba/photo2.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "Kuliyapitiya Sports Pavilion & Indoor Stadium",
        "desc": "Large outdoor athletic grounds, cricket pitches, basketball courts, and fully equipped physical fitness gymnasium.",
        "badge": "Sports Stadium",
        "image": "/images/universities/cards/wayamba.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for Wayamba University of Sri Lanka",
      "description": "Admission to undergraduate degree programmes at WUSL is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Biological Science, Commerce, Agriculture, or Technology) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Agriculture Stream",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "MBBS Medicine and BSc Food Science & Nutrition command high Z-scores island-wide.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "WUSL Official Web Portal",
        "url": "https://www.wyb.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "Wayamba University Library",
        "url": "https://lib.wyb.ac.lk",
        "description": "Online catalogue, digital journals, and research publications."
      },
      {
        "label": "Faculty of Livestock & Nutrition",
        "url": "https://flfn.wyb.ac.lk",
        "description": "Food science syllabus, nutrition degrees, and department directory."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "sabaragamuwa": {
    "slug": "sabaragamuwa",
    "name": "Sabaragamuwa University of Sri Lanka",
    "shortName": "SUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Sammā Passanā (Right Understanding & Insight)",
    "crest": "/images/universities/crests/sabaragamuwa.png",
    "location": "Belihuloya",
    "province": "Sabaragamuwa Province",
    "areas": [
      "Geomatics",
      "Applied Sciences",
      "Management",
      "Medicine",
      "Agricultural Sciences",
      "Technology",
      "Social Sciences"
    ],
    "website": "https://www.sab.ac.lk",
    "metrics": {
      "faculties": "8 Faculties",
      "founded": "1995",
      "campus": "Belihuloya (Mountain Highland)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "8th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,250",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Sri Lanka's sole state university offering Surveying & Geomatics (BSc Surveying Sciences), premier in Tourism Management and Mountain Eco-Sciences."
    },
    "overview": {
      "eyebrow": "GET TO KNOW SUSL",
      "title": "Sri Lanka's Mountain Highland Jewel of Surveying & Science",
      "description": "Perched dramatically in the mist-shrouded highlands of Belihuloya at the foothills of World's End and Samanalawewa, the Sabaragamuwa University of Sri Lanka (SUSL) was established in 1995. Globally celebrated as the sole provider of university-level Surveying and Geomatic engineering in Sri Lanka, SUSL combines its alpine natural beauty with cutting-edge faculties of Medicine, Applied Sciences, Food Technology, and Hospitality Management.",
      "tagline": "National state university • Mountain highland campus in scenic Belihuloya"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Belihuloya Alpine Setting & Geomatic Engineering Prestige",
      "description": "Surrounded by waterfalls, pine forests, and mountain peaks, the Belihuloya campus harmonizes environmental serenity with rigorous scientific, surveying, and clinical training.",
      "landmarkTitle": "The Open Amphitheater & Mountain View Plaza",
      "landmarkDesc": "The iconic open-air amphitheater, built against the mountain rock face, serves as the cultural hub where literary festivals, convocations, and student dramas unfold beneath mountain breezes.",
      "image": "/images/universities/gallery/sabaragamuwa/photo2.jpg",
      "imageBadge": "Open Amphitheater & Belihuloya Peaks",
      "pillars": [
        {
          "title": "Exclusive Faculty of Geomatics in Sri Lanka",
          "desc": "SUSL is the sole national institution granting BSc (Hons) in Surveying Sciences, GIS, Photogrammetry, and Hydrography.",
          "subtitle": ""
        },
        {
          "title": "Pioneer in Tourism & Hospitality Management",
          "desc": "Located amid Sri Lanka's prime eco-tourism highlands, producing leaders for five-star hotel chains and national aviation.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/sabaragamuwa.jpg",
        "badge": "Main Campus",
        "title": "Sabaragamuwa University Mountain Campus",
        "desc": "The breathtaking entrance nestled below the Balangoda and World's End mountain ridges.",
        "aspect": "16/10",
        "location": "Belihuloya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "amphitheater",
        "src": "/images/universities/gallery/sabaragamuwa/photo2.jpg",
        "badge": "Landmark",
        "title": "Open Theater of Sabaragamuwa University",
        "desc": "The open-air amphitheatre nestled into natural mountain bedrock.",
        "aspect": "4/3",
        "location": "Belihuloya",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "geomatics",
        "src": "/images/universities/gallery/sabaragamuwa/photo3.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Geomatics & Satellite Stations",
        "desc": "State-of-the-art GNSS satellite receiver labs, remote sensing suites, and digital cartography studios.",
        "aspect": "4/3",
        "location": "Belihuloya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "sports-grounds",
        "src": "/images/universities/gallery/sabaragamuwa/photo4.jpg",
        "badge": "Campus Life",
        "title": "Highland Sports Playground & Track",
        "desc": "Alpine-climate athletic fields with views of the Samanalawewa mountain ranges.",
        "aspect": "16/9",
        "location": "Belihuloya",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/sabaragamuwa/photo5.jpg",
        "badge": "Research Hub",
        "title": "SUSL Central Library & Geo-Spatial Vaults",
        "desc": "Houses over 150,000+ volumes, comprehensive geographic information databases, and digital journals.",
        "aspect": "4/3",
        "location": "Belihuloya",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "geomatics",
        "name": "Faculty of Geomatics",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "1995",
        "website": "https://geomatics.sab.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Surveying & Land Studies",
          "Cartography & Photogrammetry",
          "Remote Sensing & GIS",
          "Hydrography"
        ],
        "tone": "tone-ice",
        "description": "The only faculty in Sri Lanka offering professional Surveying Sciences degrees accredited by the Surveyors Council."
      },
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "ratnapura",
        "location": "Ratnapura & Belihuloya",
        "established": "2018",
        "website": "https://med.sab.ac.lk",
        "stream": "Biological Science (A/L Bio, Chem, Phys)",
        "departments": [
          "Clinical Medicine & Surgery",
          "Paediatrics & Obstetrics",
          "Biochemistry",
          "Teaching Hospital Ratnapura Training"
        ],
        "tone": "tone-peach",
        "description": "Accredited medical faculty with intensive clinical clerkships at Teaching Hospital Ratnapura."
      },
      {
        "id": "applied-sciences",
        "name": "Faculty of Applied Sciences",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "1995",
        "website": "https://appsci.sab.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Food Science & Technology",
          "Natural Resources",
          "Physical Sciences & Electronics",
          "Computing & Information Systems"
        ],
        "tone": "tone-mint",
        "description": "Recognized for pioneering Food Science, Natural Resource Management, and Software Engineering."
      },
      {
        "id": "management",
        "name": "Faculty of Management Studies",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "1995",
        "website": "https://mgt.sab.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Tourism Management",
          "Hospitality Management",
          "Accountancy & Finance",
          "Marketing Management"
        ],
        "tone": "tone-peach",
        "description": "Sri Lanka's premier school for BSc degrees in Tourism Management and Eco-Hospitality."
      },
      {
        "id": "agricultural-sciences",
        "name": "Faculty of Agricultural Sciences",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "1995",
        "website": "https://agri.sab.ac.lk",
        "stream": "Biological Science & Agriculture",
        "departments": [
          "Agribusiness Management",
          "Export Agriculture",
          "Livestock Production"
        ],
        "tone": "tone-mint",
        "description": "Focuses on commercial hill-country agriculture, tea plantation sciences, and export crops."
      },
      {
        "id": "social-sciences",
        "name": "Faculty of Social Sciences & Languages",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "1995",
        "website": "https://ssl.sab.ac.lk",
        "stream": "Arts & Languages",
        "departments": [
          "Languages (English, Sinhala, Tamil, Japanese, Chinese, German)",
          "Social Sciences",
          "Economics & Statistics"
        ],
        "tone": "tone-lavender",
        "description": "Renowned for multilingual translation studies and international diplomacy."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "belihuloya",
        "location": "Belihuloya",
        "established": "2019",
        "website": "https://tech.sab.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology"
        ],
        "tone": "tone-ice",
        "description": "Equipped with precision testing labs in building services, food engineering, and automation."
      }
    ],
    "degreeGroups": [
      {
        "id": "surveying-geomatics",
        "title": "Surveying Sciences, GIS & Remote Sensing",
        "faculty": "Faculty of Geomatics",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Surveying Sciences (Surveying & Mapping) (4 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Surveying Sciences (Photogrammetry & Remote Sensing) (4 Years)"
          },
          {
            "name": "BSc (Hons) in Surveying Sciences (Cartography & GIS) (4 Years)"
          },
          {
            "name": "BSc (Hons) in Surveying Sciences (Hydrographic Surveying) (4 Years)"
          }
        ]
      },
      {
        "id": "medicine-healthcare",
        "title": "Medicine & Clinical Sciences",
        "faculty": "Faculty of Medicine",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "MBBS Doctor of Medicine (5 Years - SLMC Accredited)"
          }
        ]
      },
      {
        "id": "food-natural-sci",
        "title": "Food Science, Computing & Natural Resources",
        "faculty": "Faculty of Applied Sciences",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Food Science & Technology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Computing & Information Systems (4 Years)"
          },
          {
            "name": "BSc (Hons) in Environmental Management & Forestry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Sports Science & Management (4 Years)"
          }
        ]
      },
      {
        "id": "tourism-hospitality",
        "title": "Tourism, Hospitality & Financial Management",
        "faculty": "Faculty of Management Studies",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BSc (Hons) in Tourism Management (4 Years - Premier State Degree)"
          },
          {
            "name": "BSc (Hons) in Hospitality Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Financial Management (4 Years)"
          },
          {
            "name": "BSc (Hons) in Marketing Management (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "Sabaragamuwa University Central Library",
        "desc": "Extensive mountainous library holding over 150,000+ volumes, GIS spatial data repositories, and digital research suites.",
        "badge": "150,000+ Volumes",
        "image": "/images/universities/gallery/sabaragamuwa/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "hospital",
        "title": "Teaching Hospital Ratnapura Medical Complex",
        "desc": "Large provincial tertiary hospital equipped with intensive care units, neurosurgery, and extensive pediatric wards.",
        "badge": "Teaching Hospital",
        "image": "/images/universities/gallery/sabaragamuwa/photo3.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "geomatics-lab",
        "title": "Geodetic Satellite & Photogrammetry Center",
        "desc": "Equipped with geodetic total stations, aerial LiDAR drones, bathymetric sonar rigs, and satellite imaging software.",
        "badge": "Geodetic Center",
        "image": "/images/universities/gallery/sabaragamuwa/photo2.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "sports",
        "title": "Highland Athletic Grounds & Swimming Pool",
        "desc": "Olympic-grade athletic tracks, swimming pool, gymnasium, and sports pavilion situated against scenic mountain cliffs.",
        "badge": "Highland Stadium",
        "image": "/images/universities/gallery/sabaragamuwa/photo4.jpg",
        "tone": "tone-lavender"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for Sabaragamuwa University of Sri Lanka",
      "description": "Admission to undergraduate degree programmes at SUSL is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Biological Science, Commerce, Arts, or Technology) in a single sitting. Surveying Sciences requires Combined Mathematics and Physics.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Arts",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Surveying Sciences and Medicine demand high Z-scores across all districts.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "SUSL Official Web Portal",
        "url": "https://www.sab.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "Sabaragamuwa University Library",
        "url": "https://lib.sab.ac.lk",
        "description": "Online catalogue, digital research databases, and thesis repository."
      },
      {
        "label": "Faculty of Geomatics",
        "url": "https://geomatics.sab.ac.lk",
        "description": "Surveying sciences degree syllabus, GIS labs, and survey field camp info."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "southeastern": {
    "slug": "southeastern",
    "name": "South Eastern University of Sri Lanka",
    "shortName": "SEUSL",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Iqra Bisme Rabbika (Read in the Name of Thy Lord)",
    "crest": "/images/universities/crests/southeastern.png",
    "location": "Oluvil",
    "province": "Eastern Province",
    "areas": [
      "Engineering",
      "Applied Sciences",
      "Management",
      "Technology",
      "Islamic Studies",
      "Arts"
    ],
    "website": "https://www.seu.ac.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1995",
      "campus": "Oluvil (Coastal Oceanfront)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "13th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "4,100",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "Sri Lanka's flagship university for Islamic Studies & Arabic Language, premier coastal Engineering complex at Oluvil, and Applied Sciences at Sammanthurai."
    },
    "overview": {
      "eyebrow": "GET TO KNOW SEUSL",
      "title": "A Vibrant Coastal Seat of Technology, Engineering & Commerce",
      "description": "Established in 1995 on a pristine coastal expanse along the Indian Ocean in Oluvil (Ampara district), the South Eastern University of Sri Lanka (SEUSL) serves as an engine of regional development and academic excellence. Operating its purpose-built Engineering and Technology complex in Oluvil and the Faculty of Applied Sciences in Sammanthurai, SEUSL is celebrated for cutting-edge engineering workshops, coastal biosciences, and the nation's premier Faculty of Islamic Studies & Arabic Language.",
      "tagline": "National state university • Coastal oceanfront engineering campus in Oluvil"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Oluvil Coastal Campus & Oceanfront Engineering Pavilion",
      "description": "Bordering golden beaches and coastal lagoons, the Oluvil campus combines modern architectural blocks with shaded palm avenues and refreshing sea breezes.",
      "landmarkTitle": "The Central Administration Tower & Oluvil Oceanfront Library",
      "landmarkDesc": "The landmark central clock tower and modern three-story library building stand against the ocean horizon, symbolizing enlightened scholarship and regional empowerment.",
      "image": "/images/universities/gallery/southeastern/photo2.jpg",
      "imageBadge": "Faculty of Islamic Studies & Library",
      "pillars": [
        {
          "title": "Faculty of Islamic Studies & Arabic Language",
          "desc": "The only dedicated state faculty in Sri Lanka offering internal degrees in Islamic Banking, Jurisprudence, and Arabic Philology.",
          "subtitle": ""
        },
        {
          "title": "State-of-the-Art Engineering Faculty",
          "desc": "Conducting IESL-accredited engineering degrees with dedicated civil hydraulics, high-voltage, and mechanical machine shops.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/southeastern.jpg",
        "badge": "Main Campus",
        "title": "South Eastern University Main Entrance",
        "desc": "The primary ceremonial gate at Oluvil along the coastal highway.",
        "aspect": "16/10",
        "location": "Oluvil, Ampara",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/southeastern/photo2.jpg",
        "badge": "Landmark",
        "title": "Faculty of Islamic Studies and Arabic Language",
        "desc": "The distinctive Islamic architectural facade and convocation auditorium.",
        "aspect": "4/3",
        "location": "Oluvil",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/southeastern/photo3.jpg",
        "badge": "Research Hub",
        "title": "SEUSL Central Library at Oluvil",
        "desc": "Three-story modern library overlooking the Indian Ocean with extensive digital databases.",
        "aspect": "4/3",
        "location": "Oluvil",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/southeastern/photo4.jpg",
        "badge": "Campus Life",
        "title": "Oluvil Coastal Walkways & Student Plaza",
        "desc": "Breeze-cooled pedestrian boulevards connecting academic lecture complexes.",
        "aspect": "16/9",
        "location": "Oluvil",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "engineering",
        "src": "/images/universities/gallery/southeastern/photo5.jpg",
        "badge": "Faculty Wing",
        "title": "Faculty of Engineering Complex",
        "desc": "Multi-tier engineering laboratories, robotics benches, and computer centers.",
        "aspect": "4/3",
        "location": "Oluvil",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "oluvil",
        "location": "Oluvil",
        "established": "2013",
        "website": "https://eng.seu.ac.lk",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Civil Engineering",
          "Electrical & Telecommunication",
          "Mechanical Engineering",
          "Computer Science & Engineering",
          "Interdisciplinary Studies"
        ],
        "tone": "tone-ice",
        "description": "Conducts IESL-recognized BSc Engineering degrees with modern labs and coastal engineering research."
      },
      {
        "id": "applied-sciences",
        "name": "Faculty of Applied Sciences",
        "campusZone": "sammanthurai",
        "location": "Sammanthurai",
        "established": "1995",
        "website": "https://fas.seu.ac.lk",
        "stream": "Physical Science & Biological Science",
        "departments": [
          "Mathematical Sciences",
          "Physical Sciences",
          "Chemical Sciences",
          "Biological Sciences",
          "Computer Science"
        ],
        "tone": "tone-mint",
        "description": "Located at Sammanthurai, focusing on renewable solar power, biodiversity, and software technology."
      },
      {
        "id": "management",
        "name": "Faculty of Management & Commerce",
        "campusZone": "oluvil",
        "location": "Oluvil",
        "established": "1995",
        "website": "https://fmc.seu.ac.lk",
        "stream": "Commerce Stream",
        "departments": [
          "Accountancy & Finance",
          "Management",
          "Marketing",
          "Human Resource Management"
        ],
        "tone": "tone-peach",
        "description": "Pioneering business education, supply chain logistics, and microfinance in Eastern Sri Lanka."
      },
      {
        "id": "islamic-studies",
        "name": "Faculty of Islamic Studies & Arabic Language",
        "campusZone": "oluvil",
        "location": "Oluvil",
        "established": "1995",
        "website": "https://fia.seu.ac.lk",
        "stream": "Arts / Arabic Stream",
        "departments": [
          "Islamic Studies",
          "Arabic Language",
          "Islamic Banking & Finance"
        ],
        "tone": "tone-lavender",
        "description": "The nation's flagship center for Islamic banking, comparative jurisprudence, and Arabic literature."
      },
      {
        "id": "arts",
        "name": "Faculty of Arts & Culture",
        "campusZone": "oluvil",
        "location": "Oluvil",
        "established": "1995",
        "website": "https://fac.seu.ac.lk",
        "stream": "Arts Stream",
        "departments": [
          "Languages",
          "Social Sciences",
          "Geography",
          "Sociology",
          "Political Science"
        ],
        "tone": "tone-mint",
        "description": "Focusing on inter-community peace building, coastal geography, and socio-economic development."
      },
      {
        "id": "technology",
        "name": "Faculty of Technology",
        "campusZone": "oluvil",
        "location": "Oluvil",
        "established": "2016",
        "website": "https://fot.seu.ac.lk",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Biosystems Technology",
          "Information & Communication Technology"
        ],
        "tone": "tone-ice",
        "description": "Modern technological faculty offering degrees in precision agriculture and software development."
      }
    ],
    "degreeGroups": [
      {
        "id": "engineering-oluvil",
        "title": "Engineering Disciplines (IESL Recognized)",
        "faculty": "Faculty of Engineering",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc Engineering (Hons) in Civil Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Electrical & Telecommunication (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Mechanical Engineering (4 Years)"
          },
          {
            "name": "BSc Engineering (Hons) in Computer Science & Engineering (4 Years)"
          }
        ]
      },
      {
        "id": "islamic-banking",
        "title": "Islamic Banking, Finance & Arabic Language",
        "faculty": "Faculty of Islamic Studies & Arabic Language",
        "tone": "tone-lavender",
        "degrees": [
          {
            "name": "BA (Hons) in Islamic Banking & Finance (4 Years - Sole State Degree)"
          },
          {
            "name": "BA (Hons) in Islamic Studies (4 Years)"
          },
          {
            "name": "BA (Hons) in Arabic Language (4 Years)"
          }
        ]
      },
      {
        "id": "sciences-computing",
        "title": "Applied Sciences & Computing Technology",
        "faculty": "Faculty of Applied Sciences",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science (4 Years)"
          },
          {
            "name": "BSc (Hons) in Applied Biology (4 Years)"
          },
          {
            "name": "BSc (Hons) in Chemistry (4 Years)"
          },
          {
            "name": "BSc (Hons) in Mathematics (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "SEUSL Central Library Network",
        "desc": "Three-story modern facility with 150,000+ volumes, ocean-view study halls, Koha digital catalogue, and electronic journals.",
        "badge": "150,000+ Volumes",
        "image": "/images/universities/gallery/southeastern/photo3.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "engineering-labs",
        "title": "Oluvil Engineering Workstations & Test Pavilions",
        "desc": "Equipped with heavy civil testing rigs, high-voltage transformers, computerized CNC milling machines, and wave tanks.",
        "badge": "Engineering Labs",
        "image": "/images/universities/gallery/southeastern/photo5.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "islamic-centre",
        "title": "Cultural Conference Hall & Auditorium",
        "desc": "Acoustically designed auditorium accommodating 1,200 participants for international symposia, convocations, and cultural assemblies.",
        "badge": "1,200 Seats",
        "image": "/images/universities/gallery/southeastern/photo2.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "sports",
        "title": "Oluvil Sports Complex & Coastal Stadium",
        "desc": "Cricket grounds, football field, volleyball arenas, tennis courts, and fitness gymnasium for student athletes.",
        "badge": "Coastal Stadium",
        "image": "/images/universities/cards/southeastern.jpg",
        "tone": "tone-peach"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for South Eastern University of Sri Lanka",
      "description": "Admission to undergraduate degree programmes at SEUSL is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Bio Science, Commerce, Arts, or Technology) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Arts",
        "Technology"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "Engineering and Islamic Banking & Finance demand high national Z-scores.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "SEUSL Official Web Portal",
        "url": "https://www.seu.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.seu.ac.lk",
        "description": "Online catalogue, digital research databases, and archives."
      },
      {
        "label": "Faculty of Engineering",
        "url": "https://eng.seu.ac.lk",
        "description": "Engineering degree pathways, lab directory, and department news."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "uvpa": {
    "slug": "uvpa",
    "name": "University of the Visual and Performing Arts",
    "shortName": "UVPA",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Sila Samadhi Vijja (Virtue, Meditation & Wisdom)",
    "crest": "/images/universities/crests/uvpa.png",
    "location": "Albert Crescent, Colombo 07",
    "province": "Western Province",
    "areas": [
      "Visual Arts",
      "Dance",
      "Drama",
      "Music",
      "Design"
    ],
    "website": "https://vpa.ac.lk",
    "metrics": {
      "faculties": "3 Specialized Faculties",
      "founded": "1893 / 2005",
      "campus": "Colombo 07 (Cinnamon Gardens)",
      "type": "National Specialized Arts University"
    },
    "rankings": {
      "nationalValue": "14th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "4,300",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & UNESCO · 2026",
      "note": "Sri Lanka's premier and exclusive state university for classical dance, traditional Kandyan drumming, fine arts, sculpture, drama, and ethnomusicology."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UVPA",
      "title": "Sri Lanka's National Sanctuary of Fine Arts, Music & Traditional Dance",
      "description": "Tracing its historic roots to the Government Technical College art classes in 1893 and the legendary Government College of Fine Arts (Heywood Institute) established in 1953, the University of the Visual and Performing Arts (UVPA) was elevated to full national university status in 2005. Located on Albert Crescent in the cultural epicenter of Colombo 07 alongside the National Museum and Nelum Pokuna, UVPA is the supreme national conservatoire training the country's elite painters, sculptors, classical musicians, and choreographers.",
      "tagline": "National state university • Specialized visual & performing arts conservatoire in Colombo 07"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "The Historic Heywood Legacy & National Cultural Renaissance",
      "description": "Situated in leafy Cinnamon Gardens, the UVPA campus resonates with classical rāgas, rhythmic Kandyan drums (Geta Beraya), and the scent of oil paint and clay sculpture studios.",
      "landmarkTitle": "The Panibharatha Dance Theatre & Heywood Fine Arts Studios",
      "landmarkDesc": "Named after the legendary dancer Panibharatha, the central theatre complex and the historic Heywood studios have nurtured Sri Lanka's greatest national artists, painters, and stage icons for over a century.",
      "image": "/images/universities/gallery/uvpa/photo2.jpg",
      "imageBadge": "Heywood Fine Arts Complex",
      "pillars": [
        {
          "title": "Cradle of Sri Lankan Traditional Dance",
          "desc": "Preserving classical Up-Country (Kandyan), Low-Country (Pahatharata), and Sabaragamuwa dance traditions.",
          "subtitle": ""
        },
        {
          "title": "National School of Painting & Sculpture",
          "desc": "Fostering contemporary Sri Lankan painting, traditional Buddhist murals, graphic design, and modern sculpture.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/uvpa.jpg",
        "badge": "Main Campus",
        "title": "UVPA Albert Crescent Main Entrance",
        "desc": "The primary cultural gate at Colombo 07 in Cinnamon Gardens.",
        "aspect": "16/10",
        "location": "Colombo 07",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/uvpa/photo2.jpg",
        "badge": "Landmark",
        "title": "Heywood Fine Arts & Sculpture Pavilions",
        "desc": "The historic artist ateliers where master painters and sculptors instruct undergraduates.",
        "aspect": "4/3",
        "location": "Colombo 07",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "theatre",
        "src": "/images/universities/gallery/uvpa/photo3.jpg",
        "badge": "Performance Center",
        "title": "Panibharatha Dance & Drama Theatres",
        "desc": "Acoustically treated stages with professional lighting rigs for traditional dance recitals and plays.",
        "aspect": "4/3",
        "location": "Colombo 07",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/uvpa/photo4.jpg",
        "badge": "Campus Life",
        "title": "Sculptural Gardens & Art Display Courtyards",
        "desc": "Lush outdoor spaces showcasing student bronze statues, wood carvings, and ceramic installations.",
        "aspect": "16/9",
        "location": "Colombo 07",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/uvpa/photo5.jpg",
        "badge": "Research Hub",
        "title": "UVPA Central Arts & Ethnomusicology Library",
        "desc": "Specialized archives containing rare audio recordings of folk chants, traditional art folios, and art history volumes.",
        "aspect": "4/3",
        "location": "Colombo 07",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "visual-arts",
        "name": "Faculty of Visual Arts",
        "campusZone": "colombo-07",
        "location": "Albert Crescent, Colombo 07",
        "established": "2005",
        "website": "https://vpa.ac.lk/fva",
        "stream": "A/L Any Stream + Practical Aptitude Test",
        "departments": [
          "Painting",
          "Sculpture",
          "Printmaking",
          "Visual Communication Design (Graphic Design)",
          "Ceramics & Textile Art",
          "History & Theory of Art"
        ],
        "tone": "tone-peach",
        "description": "Sri Lanka's foremost fine arts faculty, offering BFA degrees in Painting, Sculpture, and Graphic Design."
      },
      {
        "id": "dance-drama",
        "name": "Faculty of Dance & Drama",
        "campusZone": "colombo-07",
        "location": "Albert Crescent, Colombo 07",
        "established": "2005",
        "website": "https://vpa.ac.lk/fdd",
        "stream": "A/L Any Stream + Practical Performance Test",
        "departments": [
          "Kandyan Dance",
          "Low Country Dance",
          "Sabaragamuwa Dance",
          "Indian Classical Dance (Bharatanatyam / Kathak)",
          "Theatre, Ballet & Modern Dance",
          "Percussion Music (Drumming)"
        ],
        "tone": "tone-lavender",
        "description": "Preserving and innovating Sri Lanka's intangible cultural dance heritage and contemporary theatrical drama."
      },
      {
        "id": "music",
        "name": "Faculty of Music",
        "campusZone": "colombo-07",
        "location": "Albert Crescent, Colombo 07",
        "established": "2005",
        "website": "https://vpa.ac.lk/fom",
        "stream": "A/L Any Stream + Practical Music Test",
        "departments": [
          "North Indian Classical Music (Vocal & Instrumental)",
          "South Indian Classical Music (Carnatic)",
          "Western Music",
          "Applied Music & Sound Engineering",
          "Ethnomusicology"
        ],
        "tone": "tone-mint",
        "description": "Educating professional vocalists, instrumental virtuosos, composers, and digital sound engineers."
      }
    ],
    "degreeGroups": [
      {
        "id": "visual-arts-design",
        "title": "Visual Arts, Painting, Sculpture & Graphic Design",
        "faculty": "Faculty of Visual Arts",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Painting (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Sculpture (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Visual Communication Design (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Textile & Wearable Arts (4 Years)"
          }
        ]
      },
      {
        "id": "dance-drumming-theatre",
        "title": "Traditional Dance, Indigenous Drumming & Drama",
        "faculty": "Faculty of Dance & Drama",
        "tone": "tone-lavender",
        "degrees": [
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Kandyan Dance (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Low Country Dance (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Indigenous Percussion Music / Drumming (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Theatre & Drama (4 Years)"
          }
        ]
      },
      {
        "id": "music-sound",
        "title": "Classical Music, Vocal, Instrumental & Audio",
        "faculty": "Faculty of Music",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in North Indian Classical Vocal (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Sitar, Violin & Flute (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Western Music (4 Years)"
          },
          {
            "name": "Bachelor of Fine Arts - BFA (Hons) in Applied Music & Sound Technology (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "UVPA Central Arts & Audio-Visual Library",
        "desc": "Houses over 100,000+ specialized volumes on world art history, ethnomusicology sound recordings, and exhibition catalogues.",
        "badge": "100,000+ Volumes",
        "image": "/images/universities/gallery/uvpa/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "theatre",
        "title": "Panibharatha Performance Amphitheater",
        "desc": "Acoustically tuned performing arts stage for traditional drumming rituals, Bharatanatyam arangetrams, and theatre productions.",
        "badge": "Performance Stage",
        "image": "/images/universities/gallery/uvpa/photo3.jpg",
        "tone": "tone-lavender"
      },
      {
        "id": "galleries",
        "title": "J.D.A. Perera Art Gallery",
        "desc": "Sri Lanka's largest multi-level public art gallery hosting national exhibitions, international biennales, and student showcases.",
        "badge": "Premier Art Gallery",
        "image": "/images/universities/gallery/uvpa/photo2.jpg",
        "tone": "tone-peach"
      },
      {
        "id": "sound-studios",
        "title": "Digital Audio Recording & Sound Labs",
        "desc": "Equipped with multi-track sound engineering consoles, acoustic vocal booths, and digital music sequencing software.",
        "badge": "Sound Studio",
        "image": "/images/universities/cards/uvpa.jpg",
        "tone": "tone-ice"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for University of the Visual & Performing Arts",
      "description": "Admission to UVPA degree programmes is conducted through the UGC Sri Lanka, requiring passes in G.C.E. A/L together with compulsory practical aptitude and performance tests.",
      "step1Title": "G.C.E. A/L Passes & Aptitude Test Registration",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in any A/L stream (Arts, Science, Commerce, or Technology) and sit for the university practical performance test in visual art, dance, or music.",
      "step1Tags": [
        "Arts Stream",
        "Any A/L Stream",
        "Practical Performance Test",
        "Audition Required"
      ],
      "step2Title": "National Practical Test & Z-Score Evaluation",
      "step2Desc": "Candidates are ranked based on their practical audition score combined with their A/L Z-score according to UGC national admission policy.",
      "quotaMerit": "Practical Audition",
      "quotaDistrict": "Z-Score Quota",
      "quotaSpecial": "Performance Test",
      "quotaNote": "High marks in the university practical test are essential for admission.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course preferences online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UVPA Official Web Portal",
        "url": "https://vpa.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "J.D.A. Perera Art Gallery",
        "url": "https://vpa.ac.lk/jda-gallery",
        "description": "Art exhibitions, contemporary student showcases, and cultural events."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.vpa.ac.lk",
        "description": "Fine arts catalogues, music archives, and thesis portal."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "uvawellassa": {
    "slug": "uvawellassa",
    "name": "Uva Wellassa University",
    "shortName": "UWU",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Value Addition to the National Resource Base",
    "crest": "/images/universities/crests/uvawellassa.png",
    "location": "Passara Road, Badulla",
    "province": "Uva Province",
    "areas": [
      "Science & Technology",
      "Industrial IT",
      "Tea Technology",
      "Export Agriculture",
      "Management"
    ],
    "website": "https://www.uwu.ac.lk",
    "metrics": {
      "faculties": "4 Specialized Faculties",
      "founded": "2005",
      "campus": "Badulla (Green Hillside)",
      "type": "Center of Excellence State University"
    },
    "rankings": {
      "nationalValue": "12th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "3,950",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & QS Asia · 2026",
      "note": "100% English-medium curriculum, #1 for national resource value-addition (Tea, Rubber, Minerals), and high graduate employment."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UWU",
      "title": "Sri Lanka's Center of Excellence for National Resource Value Addition",
      "description": "Established in 2005 on a scenic hillside campus overlooking Badulla, Uva Wellassa University (UWU) was conceptualized as an entrepreneurial 'Center of Excellence'. Operating completely in the English medium across all faculties, UWU pioneered highly targeted undergraduate degrees designed to add immense value to Sri Lanka's mineral, agricultural, aquatic, and technological resource bases, producing versatile innovators and entrepreneurs.",
      "tagline": "National state university • 100% English medium • Entrepreneurial innovation in Badulla"
    },
    "heritage": {
      "eyebrow": "HERITAGE & CAMPUS IDENTITY",
      "title": "Highland Hill Country Campus & Resource Innovation",
      "description": "Surrounded by tea-carpeted mountains, pine groves, and mist-laden valleys in Badulla, the modern UWU campus fosters entrepreneurial ambition and technological invention.",
      "landmarkTitle": "The Central Administrative Tower & Innovation Plaza",
      "landmarkDesc": "The central administrative clock complex stands proudly on the Badulla-Passara ridge, symbolizing modern progressive higher education in Uva Province.",
      "image": "/images/universities/gallery/uvawellassa/photo2.jpg",
      "imageBadge": "Badulla Hillside Campus",
      "pillars": [
        {
          "title": "Pioneer in Tea, Rubber & Mineral Technologies",
          "desc": "Sole university offering specialized BSc degrees in Tea Technology & Value Addition, Palm & Latex Technology, and Mineral Resources.",
          "subtitle": ""
        },
        {
          "title": "100% English Medium & Entrepreneurship",
          "desc": "Every degree embeds intensive business incubation, leadership training, and mandatory industry internships.",
          "subtitle": ""
        }
      ]
    },
    "gallery": [
      {
        "id": "hero",
        "src": "/images/universities/cards/uvawellassa.jpg",
        "badge": "Main Campus",
        "title": "Uva Wellassa University Main Entrance",
        "desc": "The hillside ceremonial entrance on Passara Road, Badulla.",
        "aspect": "16/10",
        "location": "Badulla",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "landmark",
        "src": "/images/universities/gallery/uvawellassa/photo2.jpg",
        "badge": "Landmark",
        "title": "Central Hillside Campus & Administrative Quad",
        "desc": "The modern academic pavilions overlooking the Namunukula mountain range.",
        "aspect": "4/3",
        "location": "Badulla",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "cstlab",
        "src": "/images/universities/gallery/uvawellassa/photo3.jpg",
        "badge": "Innovation Lab",
        "title": "Computer Science & Technology (CST) Labs",
        "desc": "High-tech software engineering, networking, and data science laboratories.",
        "aspect": "4/3",
        "location": "Badulla",
        "credit": "Wikimedia Commons / Archives"
      },
      {
        "id": "walkway",
        "src": "/images/universities/gallery/uvawellassa/photo4.jpg",
        "badge": "Campus Life",
        "title": "Hillside Garden Walkways & Shaded Lawns",
        "desc": "Pleasant cool-climate pathways connecting academic blocks and student hostels.",
        "aspect": "16/9",
        "location": "Badulla",
        "credit": "SkillBridge SL University Archives"
      },
      {
        "id": "library",
        "src": "/images/universities/gallery/uvawellassa/photo5.jpg",
        "badge": "Research Hub",
        "title": "UWU Central Library & E-Learning Center",
        "desc": "Modern digital resource center holding over 100,000+ volumes, IEEE access, and study hubs.",
        "aspect": "4/3",
        "location": "Badulla",
        "credit": "SkillBridge SL University Archives"
      }
    ],
    "faculties": [
      {
        "id": "sci-tech",
        "name": "Faculty of Science & Technology",
        "campusZone": "badulla",
        "location": "Passara Road, Badulla",
        "established": "2005",
        "website": "https://www.uwu.ac.lk/fst",
        "stream": "Physical Science (Combined Maths, Physics, Chemistry)",
        "departments": [
          "Computer Science & Informatics",
          "Applied Earth Sciences",
          "Science & Technology"
        ],
        "tone": "tone-ice",
        "description": "Offers prestigious BSc (Hons) degrees in Computer Science & Technology (CST), Industrial Information Technology (IIT), and Mineral Resources."
      },
      {
        "id": "animal-agri",
        "name": "Faculty of Animal Science & Export Agriculture",
        "campusZone": "badulla",
        "location": "Passara Road, Badulla",
        "established": "2005",
        "website": "https://www.uwu.ac.lk/faea",
        "stream": "Biological Science (Bio, Chem, Phys)",
        "departments": [
          "Animal Science",
          "Export Agriculture"
        ],
        "tone": "tone-mint",
        "description": "Conducts unique degrees in Tea Technology & Value Addition, Palm & Latex Technology, and Aquatic Bioresources."
      },
      {
        "id": "management",
        "name": "Faculty of Management",
        "campusZone": "badulla",
        "location": "Passara Road, Badulla",
        "established": "2005",
        "website": "https://www.uwu.ac.lk/fm",
        "stream": "Commerce & Open A/L Entry",
        "departments": [
          "Management Sciences",
          "Public Administration",
          "Tourism Studies"
        ],
        "tone": "tone-peach",
        "description": "Focusing on Entrepreneurship & Management, Hospitality, Tourism & Events, and Industrial Marketing."
      },
      {
        "id": "technological-studies",
        "name": "Faculty of Technological Studies",
        "campusZone": "badulla",
        "location": "Passara Road, Badulla",
        "established": "2017",
        "website": "https://www.uwu.ac.lk/fts",
        "stream": "Technology Stream (ET / BST / ICT)",
        "departments": [
          "Engineering Technology",
          "Biosystems Technology"
        ],
        "tone": "tone-ice",
        "description": "Conducts Bachelor of Engineering Technology (BET) in Mechatronics and Material Technology."
      }
    ],
    "degreeGroups": [
      {
        "id": "tech-computing",
        "title": "Computer Science, Industrial IT & Software",
        "faculty": "Faculty of Science & Technology",
        "tone": "tone-ice",
        "degrees": [
          {
            "name": "BSc (Hons) in Computer Science & Technology - CST (4 Years)"
          },
          {
            "name": "BSc (Hons) in Industrial Information Technology - IIT (4 Years)"
          },
          {
            "name": "BSc (Hons) in Mineral Resources & Technology (4 Years)"
          }
        ]
      },
      {
        "id": "value-addition-agri",
        "title": "Tea Technology, Latex & Value Addition",
        "faculty": "Faculty of Animal Science & Export Agriculture",
        "tone": "tone-mint",
        "degrees": [
          {
            "name": "BSc (Hons) in Tea Technology & Value Addition (4 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Palm & Latex Technology and Value Addition (4 Years - Sole State Degree)"
          },
          {
            "name": "BSc (Hons) in Export Agriculture (4 Years)"
          },
          {
            "name": "BSc (Hons) in Aquatic Resources Technology (4 Years)"
          }
        ]
      },
      {
        "id": "entrepreneurship-mgmt",
        "title": "Entrepreneurship, Tourism & Hospitality",
        "faculty": "Faculty of Management",
        "tone": "tone-peach",
        "degrees": [
          {
            "name": "BBM (Hons) in Entrepreneurship & Management (4 Years)"
          },
          {
            "name": "BBM (Hons) in Hospitality, Tourism & Events Management (4 Years)"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "library",
        "title": "Uva Wellassa University Central Library",
        "desc": "Contemporary library featuring 100,000+ volumes, automated self-checkout, digital journal repositories, and 24-hour study pods.",
        "badge": "100,000+ Volumes",
        "image": "/images/universities/gallery/uvawellassa/photo5.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "cst-labs",
        "title": "Computer Science & Industrial Robotics Workstations",
        "desc": "High-performance compute clusters, digital prototyping labs, and industrial automation equipment.",
        "badge": "Robotics & CST Labs",
        "image": "/images/universities/gallery/uvawellassa/photo3.jpg",
        "tone": "tone-ice"
      },
      {
        "id": "tea-pilot-plant",
        "title": "Tea & Agro-Processing Pilot Factory",
        "desc": "Operational tea processing line, rubber testing pilot mill, and food sensory analysis laboratory on campus.",
        "badge": "Pilot Factory",
        "image": "/images/universities/gallery/uvawellassa/photo2.jpg",
        "tone": "tone-mint"
      },
      {
        "id": "sports",
        "title": "Badulla Sports Pavilion & Gymnasium",
        "desc": "Full-size athletic grounds, badminton and table tennis halls, outdoor basketball courts, and fitness gym.",
        "badge": "Sports Pavilion",
        "image": "/images/universities/cards/uvawellassa.jpg",
        "tone": "tone-peach"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "Admissions Guidance for Uva Wellassa University",
      "description": "Admission to undergraduate degree programmes at UWU is administered centrally by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level Z-Scores.",
      "step1Title": "G.C.E. A/L Minimum Entry Qualification",
      "step1Desc": "Attain minimum passes (S grades) in three approved subjects in relevant streams (Physical Science, Biological Science, Commerce, or Technology) in a single sitting.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Technology Stream"
      ],
      "step2Title": "National Z-Score Quota Allocation (40 / 55 / 5)",
      "step2Desc": "State university placements are strictly governed by: 40% Merit Island-wide, 55% District Quota representation, and 5% for educationally disadvantaged districts.",
      "quotaMerit": "40% Merit",
      "quotaDistrict": "55% District",
      "quotaSpecial": "5% Disadvantaged",
      "quotaNote": "CST, IIT, and Tea Technology carry competitive national Z-scores.",
      "step3Title": "Submit Online UGC Application",
      "step3Desc": "Submit your university course rankings online through the official UGC Sri Lanka portal.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "UGC Admissions Handbook & Portal"
    },
    "officialLinks": [
      {
        "label": "UWU Official Web Portal",
        "url": "https://www.uwu.ac.lk",
        "description": "Primary university administration, notices, and academic directory."
      },
      {
        "label": "University Central Library",
        "url": "https://lib.uwu.ac.lk",
        "description": "Online catalogue, digital research databases, and archives."
      },
      {
        "label": "Center for Value Addition",
        "url": "https://www.uwu.ac.lk",
        "description": "Industrial patents, student startups, and tea research projects."
      },
      {
        "label": "University Grants Commission (UGC)",
        "url": "https://www.ugc.ac.lk",
        "description": "National admission rules, minimum Z-scores, and academic regulations."
      }
    ]
  },
  "vavuniya": {
    "slug": "vavuniya",
    "name": "University of Vavuniya",
    "shortName": "UOV",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Knowledge Enlightens (Arrive Arivuruttum)",
    "crest": "/images/universities/crests/vavuniya.png",
    "location": "Pampaimadu, Vavuniya",
    "province": "Northern Province",
    "areas": [
      "Applied Science",
      "Business Studies",
      "Technological Studies"
    ],
    "website": "https://vau.ac.lk",
    "metrics": {
      "faculties": "3 Faculties",
      "founded": "2021 (Est. 1997)",
      "campus": "Pampaimadu Eco-Campus (160+ Acres)",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "16th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "5,800",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & UGC Sri Lanka · 2026",
      "note": "Sri Lanka's 17th national state university, established to spearhead scientific, technological, and entrepreneurial empowerment across the Vanni and Northern Dry Zone."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UOV",
      "title": "Northern Sri Lanka's Modern Hub of Applied Sciences & Technology",
      "description": "Originally founded in 1997 as the Vavuniya Campus of the University of Jaffna, the institution was officially elevated by government gazette on August 1, 2021 as the University of Vavuniya — Sri Lanka's 17th independent national state university. Located on an expansive 160-acre green campus in Pampaimadu, the university specializes in Applied Mathematics, Environmental Science, Information Technology, Project Management, and Engineering Technology.",
      "tagline": "A catalyst for regional renaissance, sustainable agriculture, and digital innovation in the Vanni heartland."
    },
    "heritage": {
      "eyebrow": "CAMPUS LEGACY & RENAISSANCE",
      "title": "Rising as a Beacon of Knowledge in the Northern Dry Zone",
      "description": "From its humble beginnings during regional challenges in Kurumankadu to the vast modern masterplanned complex at Pampaimadu, the University of Vavuniya stands as a testament to resilience and educational progress.",
      "landmarkTitle": "Pampaimadu Modern Academic Complex",
      "landmarkDesc": "Surrounded by dry-zone flora and natural water reservoirs, the Pampaimadu campus integrates modern laboratory blocks, high-speed fiber connectivity, and open-air lecture complexes.",
      "image": "/images/universities/gallery/vavuniya/photo1.jpg",
      "imageBadge": "Pampaimadu Eco Campus · Vavuniya",
      "pillars": [
        {
          "title": "1997 Campus Genesis",
          "subtitle": "Affiliated with Jaffna",
          "desc": "Constituted as the Northern Campus of Northern higher education, pioneering degree pathways for students of the Vanni."
        },
        {
          "title": "2021 National Elevation",
          "subtitle": "17th State University",
          "desc": "Elevated to full sovereign university status under the Universities Act No. 16 of 1978 with autonomous Senate and Council."
        },
        {
          "title": "Regional Technology Hub",
          "subtitle": "Dry Zone Innovation",
          "desc": "Leading collaborative industry incubators in agro-technology, renewable dry-zone solar systems, and multilingual software."
        }
      ]
    },
    "gallery": [
      {
        "id": "vavuniya-1",
        "src": "/images/universities/gallery/vavuniya/photo1.jpg",
        "badge": "Main Complex",
        "title": "Pampaimadu Central Faculty Complex",
        "desc": "The primary administrative and faculty quadrangle situated in lush greenery at Pampaimadu.",
        "aspect": "wide",
        "location": "Pampaimadu, Vavuniya",
        "credit": "University of Vavuniya Media Unit"
      },
      {
        "id": "vavuniya-2",
        "src": "/images/universities/gallery/vavuniya/photo2.jpg",
        "badge": "Technology",
        "title": "Faculty of Technological Studies",
        "desc": "Specialized workshops and electronics laboratories fostering hands-on practical engineering technology.",
        "aspect": "tall",
        "location": "Pampaimadu Campus",
        "credit": "UOV Department of Physical Science"
      },
      {
        "id": "vavuniya-3",
        "src": "/images/universities/gallery/vavuniya/photo3.jpg",
        "badge": "Computing",
        "title": "ICT and Software Research Lab",
        "desc": "High-performance computing laboratory supporting big data analysis, machine learning, and bilingual language processing.",
        "aspect": "standard",
        "location": "Applied Science Complex",
        "credit": "UOV IT Centre"
      },
      {
        "id": "vavuniya-4",
        "src": "/images/universities/gallery/vavuniya/photo4.jpg",
        "badge": "Business",
        "title": "Faculty of Business Studies",
        "desc": "Modern conference halls, seminar rooms, and financial modeling labs training regional entrepreneurs.",
        "aspect": "standard",
        "location": "Management Wing",
        "credit": "Faculty of Business Studies UOV"
      },
      {
        "id": "vavuniya-5",
        "src": "/images/universities/gallery/vavuniya/photo5.jpg",
        "badge": "Student Life",
        "title": "Green Commons & Student Union",
        "desc": "Open courtyards and shaded garden pavilions where undergraduate student societies collaborate across communities.",
        "aspect": "standard",
        "location": "Student Commons",
        "credit": "UOV Student Council"
      }
    ],
    "faculties": [
      {
        "id": "applied-science",
        "name": "Faculty of Applied Science",
        "campusZone": "Pampaimadu Campus",
        "location": "Pampaimadu, Vavuniya",
        "established": "1997",
        "website": "https://fas.vau.ac.lk",
        "stream": "Physical Science & IT",
        "departments": [
          "Physical Science",
          "Bio-Science",
          "Computer Science"
        ],
        "tone": "emerald",
        "description": "Delivering cutting-edge degrees in Computer Science, Information Technology, Applied Mathematics & Computing, and Environmental Science."
      },
      {
        "id": "business-studies",
        "name": "Faculty of Business Studies",
        "campusZone": "Park Road & Pampaimadu",
        "location": "Vavuniya",
        "established": "1997",
        "website": "https://fbs.vau.ac.lk",
        "stream": "Commerce & Management",
        "departments": [
          "Accountancy & Finance",
          "Business Management",
          "Human Resource Management"
        ],
        "tone": "amber",
        "description": "Fostering ethical business leadership, entrepreneurship, micro-finance development, and regional marketing strategies."
      },
      {
        "id": "technological-studies",
        "name": "Faculty of Technological Studies",
        "campusZone": "Pampaimadu Campus",
        "location": "Pampaimadu, Vavuniya",
        "established": "2020",
        "website": "https://fts.vau.ac.lk",
        "stream": "Technology",
        "departments": [
          "Information & Communication Technology",
          "Biosystems Technology"
        ],
        "tone": "blue",
        "description": "Empowering A/L Technology stream students with degrees in Information and Communication Technology (BICT Hons) and Biosystems Technology."
      }
    ],
    "degreeGroups": [
      {
        "id": "applied-science-computing",
        "title": "Computing & Applied Sciences",
        "faculty": "Faculty of Applied Science",
        "tone": "emerald",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Computer Science",
            "tag": "High Demand"
          },
          {
            "name": "B.Sc. (Hons) in Information Technology",
            "tag": "Industry Aligned"
          },
          {
            "name": "B.Sc. in Environmental Science",
            "tag": "Eco Research"
          }
        ]
      },
      {
        "id": "management-entrepreneurship",
        "title": "Business Administration & Finance",
        "faculty": "Faculty of Business Studies",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.B.M. (Hons) in Human Resource Management",
            "tag": "Corporate HR"
          },
          {
            "name": "B.B.M. (Hons) in Accounting & Finance",
            "tag": "Chartered Route"
          },
          {
            "name": "B.B.M. (Hons) in Marketing Management",
            "tag": "Enterprise"
          }
        ]
      },
      {
        "id": "technology-degrees",
        "title": "Technological Stream Pathways",
        "faculty": "Faculty of Technological Studies",
        "tone": "blue",
        "degrees": [
          {
            "name": "Bachelor of Information & Communication Tech (BICT Hons)",
            "tag": "NVQ Level 7"
          },
          {
            "name": "Bachelor of Biosystems Technology (BBST Hons)",
            "tag": "Agro-Tech"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "vavuniya-lib",
        "title": "Main University Library",
        "desc": "Holds extensive collections of scientific literature, digital thesis repositories, and high-speed scholarly databases.",
        "badge": "Digital Library",
        "image": "/images/universities/gallery/vavuniya/photo2.jpg",
        "tone": "emerald"
      },
      {
        "id": "vavuniya-hostel",
        "title": "Residential Hostels & Sports Ground",
        "desc": "On-campus hostel facilities for male and female undergraduates alongside cricket, volleyball, and football grounds.",
        "badge": "Residential",
        "image": "/images/universities/gallery/vavuniya/photo4.jpg",
        "tone": "amber"
      },
      {
        "id": "vavuniya-innovation",
        "title": "Regional Incubation Centre",
        "desc": "Mentorship space assisting student entrepreneurs in commercializing agro-tech and software solutions.",
        "badge": "Startup Hub",
        "image": "/images/universities/gallery/vavuniya/photo3.jpg",
        "tone": "blue"
      },
      {
        "id": "vavuniya-medical",
        "title": "University Health & Wellbeing Centre",
        "desc": "Provides primary healthcare, counseling, preventive medicine, and medical screenings for all undergraduates.",
        "badge": "Healthcare",
        "image": "/images/universities/gallery/vavuniya/photo5.jpg",
        "tone": "emerald"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "How to Enter the University of Vavuniya via UGC",
      "description": "Admissions to all undergraduate degree programmes at the University of Vavuniya are strictly administered by the University Grants Commission (UGC) of Sri Lanka based on G.C.E. Advanced Level examination Z-scores.",
      "step1Title": "G.C.E. A/L Examination Requirements",
      "step1Desc": "Candidates must achieve minimum three passes (S) in one sitting across relevant streams (Physical Science, Biological Science, Commerce, or Technology) and meet the minimum Common General Test mark of 30%.",
      "step1Tags": [
        "Physical Science",
        "Biological Science",
        "Commerce",
        "Technology Stream"
      ],
      "step2Title": "UGC District Quota & Merit Allocation",
      "step2Desc": "Places are distributed according to the national 40% all-island merit, 55% district quota, and 5% educationally disadvantaged district quota allocation.",
      "quotaMerit": "40%",
      "quotaDistrict": "55%",
      "quotaSpecial": "5%",
      "quotaNote": "Vavuniya district applicants benefit from regional affirmative quotas alongside open all-island merit rankings.",
      "step3Title": "Registration & Orientation Programme",
      "step3Desc": "Selected candidates receive UGC calling letters, complete registration at Pampaimadu campus, and undergo an intensive English Language and IT immersion course.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "Visit UGC Admission Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://vau.ac.lk",
        "description": "University news, academic faculties, and circulars"
      },
      {
        "label": "Faculty of Applied Science",
        "url": "https://fas.vau.ac.lk",
        "description": "Departments of Computing, Physical, and Bio Science"
      },
      {
        "label": "Faculty of Business Studies",
        "url": "https://fbs.vau.ac.lk",
        "description": "Management, finance, and human resource programmes"
      },
      {
        "label": "UGC Sri Lanka",
        "url": "https://www.ugc.ac.lk",
        "description": "National university admission handbook & Cut-off marks"
      }
    ]
  },
  "wickramarachchi": {
    "slug": "wickramarachchi",
    "name": "Gampaha Wickramarachchi University of Indigenous Medicine",
    "shortName": "GWUIM",
    "type": "Government",
    "stateLabel": "National State University · Sri Lanka",
    "motto": "Arogya Parama Labha (Health is the Supreme Gain)",
    "crest": "/images/universities/crests/wickramarachchi.png",
    "location": "Yakkala, Gampaha",
    "province": "Western Province",
    "areas": [
      "Indigenous Medicine",
      "Ayurveda",
      "Indigenous Health Sciences",
      "Technology",
      "Social Sciences"
    ],
    "website": "https://gwu.ac.lk",
    "metrics": {
      "faculties": "5 Faculties",
      "founded": "2021 (Est. 1929)",
      "campus": "Yakkala Botanical & Ayurvedic Campus",
      "type": "National State University"
    },
    "rankings": {
      "nationalValue": "17th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "6,200",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & WHO Traditional Medicine · 2026",
      "note": "Sri Lanka's sole national university dedicated to classical Ayurveda, Hela Veda indigenous medical sciences, and complementary natural healthcare systems."
    },
    "overview": {
      "eyebrow": "GET TO KNOW GWUIM",
      "title": "Sri Lanka's National Citadel of Indigenous Medicine & Natural Healing",
      "description": "Founded in 1929 by the revered Ayurvedic scholar and philanthropist Panditha G.P. Wickramarachchi as the Gampaha Siddhayurveda Vidyalaya, this historic institution was elevated on March 1, 2021 as Sri Lanka's 16th national state university. Located in Yakkala amidst expansive medicinal herbal gardens, GWUIM leads South Asia in scientific validation of indigenous pharmacology, acupuncture, Panchakarma therapy, and natural wellness.",
      "tagline": "Integrating ancient Ayurvedic wisdom with state-of-the-art biomedical technology and clinical clinical pharmacology."
    },
    "heritage": {
      "eyebrow": "HERITAGE & TRADITION",
      "title": "Nearly a Century of Preserving Ancient Healing Arts",
      "description": "Panditha Wickramarachchi dedicated his private wealth to establish free indigenous medical training for Sri Lankan youth, creating an unbroken lineage of master physicians who serve nationwide.",
      "landmarkTitle": "Ayurveda Teaching Hospital & Botanical Arboretum",
      "landmarkDesc": "The university operates an attached 100-bed Ayurvedic teaching hospital and an herbal garden preserving over 400 rare medicinal flora endemic to Sri Lanka.",
      "image": "/images/universities/gallery/wickramarachchi/photo1.jpg",
      "imageBadge": "Yakkala Heritage Campus · Gampaha",
      "pillars": [
        {
          "title": "1929 Founded by Panditha Wickramarachchi",
          "subtitle": "Philanthropic Origin",
          "desc": "Constituted as the Gampaha Siddhayurveda Vidyalaya to teach classical Sanskrit, Ayurveda, and indigenous medicine."
        },
        {
          "title": "1995 University Institute",
          "subtitle": "Affiliated with Kelaniya",
          "desc": "Affiliated as an autonomous institute of Kelaniya University awarding recognized BAMS degrees."
        },
        {
          "title": "2021 Full University Status",
          "subtitle": "16th National University",
          "desc": "Elevated by parliamentary gazette into a full-fledged independent national university with five specialized faculties."
        }
      ]
    },
    "gallery": [
      {
        "id": "wick-1",
        "src": "/images/universities/gallery/wickramarachchi/photo1.jpg",
        "badge": "Main Complex",
        "title": "GWUIM Senate Quadrangle & Faculty Complex",
        "desc": "Traditional colonial and indigenous Sri Lankan architectural motifs blend across the administrative building in Yakkala.",
        "aspect": "wide",
        "location": "Yakkala Campus",
        "credit": "GWUIM Media Unit"
      },
      {
        "id": "wick-2",
        "src": "/images/universities/gallery/wickramarachchi/photo2.jpg",
        "badge": "Hospital",
        "title": "Ayurveda Teaching Hospital",
        "desc": "Undergraduate clinical wards where medical scholars treat patients with Panchakarma, herbal therapy, and fracture care.",
        "aspect": "tall",
        "location": "Teaching Hospital Yakkala",
        "credit": "GWUIM Clinical Medicine"
      },
      {
        "id": "wick-3",
        "src": "/images/universities/gallery/wickramarachchi/photo3.jpg",
        "badge": "Herbal Garden",
        "title": "Medicinal Botanical Arboretum",
        "desc": "Living laboratory conserving endangered native herbal species used in Ayurvedic pharmaceutical preparations.",
        "aspect": "standard",
        "location": "Arboretum Grounds",
        "credit": "Department of Dravyaguna Vignana"
      },
      {
        "id": "wick-4",
        "src": "/images/universities/gallery/wickramarachchi/photo4.jpg",
        "badge": "Laboratory",
        "title": "Dravyaguna & Herbal Pharmacognosy Lab",
        "desc": "Modern chemical spectroscopy and chromatographic testing validating active bio-compounds in classical herbal formulas.",
        "aspect": "standard",
        "location": "Pharmacology Wing",
        "credit": "Faculty of Indigenous Health Sciences"
      },
      {
        "id": "wick-5",
        "src": "/images/universities/gallery/wickramarachchi/photo5.jpg",
        "badge": "Library",
        "title": "Ola Leaf Manuscript Palm Archives",
        "desc": "Rare library archives containing historical palm-leaf medical manuscripts dating back centuries to royal Sri Lankan physicians.",
        "aspect": "standard",
        "location": "Central Library",
        "credit": "GWUIM Library"
      }
    ],
    "faculties": [
      {
        "id": "indigenous-medicine",
        "name": "Faculty of Indigenous Medicine",
        "campusZone": "Main Campus",
        "location": "Yakkala",
        "established": "1929",
        "website": "https://gwu.ac.lk/fim",
        "stream": "Biological Science",
        "departments": [
          "Ayurveda Basic Principles",
          "Dravyaguna Vignana",
          "Kaya Chikitsa",
          "Shalya Shalakya",
          "Kaumarabhritya"
        ],
        "tone": "emerald",
        "description": "Administering the 6-year Bachelor of Ayurvedic Medicine and Surgery (BAMS) degree, training licensed Ayurvedic doctors."
      },
      {
        "id": "indigenous-health-sciences",
        "name": "Faculty of Indigenous Health Sciences & Technology",
        "campusZone": "Health Sciences Complex",
        "location": "Yakkala",
        "established": "2021",
        "website": "https://gwu.ac.lk/fihst",
        "stream": "Biological Science & Technology",
        "departments": [
          "Yoga & Cultural Science",
          "Herbal Technology",
          "Indigenous Cosmetics Science"
        ],
        "tone": "amber",
        "description": "Pioneering specialized degrees in Yoga Science, Natural Beauty & Cosmetics, and Herbal Pharmaceutical Technology."
      },
      {
        "id": "management-social-sciences",
        "name": "Faculty of Indigenous Social Sciences & Management",
        "campusZone": "Academic Complex",
        "location": "Yakkala",
        "established": "2021",
        "website": "https://gwu.ac.lk/fissm",
        "stream": "Commerce & Arts",
        "departments": [
          "Indigenous Tourism & Hospitality",
          "Health Economics & Management"
        ],
        "tone": "blue",
        "description": "Training professionals in health tourism management, eco-wellness hospitality, and healthcare institutional administration."
      }
    ],
    "degreeGroups": [
      {
        "id": "ayurvedic-medicine",
        "title": "Classical Medicine & Surgery",
        "faculty": "Faculty of Indigenous Medicine",
        "tone": "emerald",
        "degrees": [
          {
            "name": "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
            "tag": "Medical License"
          },
          {
            "name": "B.Sc. (Hons) in Herbal Pharmacy",
            "tag": "Pharmaceutical"
          }
        ]
      },
      {
        "id": "natural-wellness-technology",
        "title": "Wellness Sciences & Technology",
        "faculty": "Faculty of Indigenous Health Sciences",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Health Tourism & Hospitality",
            "tag": "Global Tourism"
          },
          {
            "name": "B.Sc. (Hons) in Yoga & Alternative Healthcare",
            "tag": "Holistic Health"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "wick-hosp",
        "title": "Ayurvedic Teaching Hospital",
        "desc": "Inpatient and outpatient facilities providing hands-on clinical internships across pediatric, orthopedic, and general medicine.",
        "badge": "Hospital",
        "image": "/images/universities/gallery/wickramarachchi/photo2.jpg",
        "tone": "emerald"
      },
      {
        "id": "wick-herbarium",
        "title": "National Herbarium & Pharmacy",
        "desc": "GMP-compliant indigenous medicine production laboratory providing real-world training in botanical drug formulation.",
        "badge": "GMP Facility",
        "image": "/images/universities/gallery/wickramarachchi/photo3.jpg",
        "tone": "amber"
      },
      {
        "id": "wick-yoga",
        "title": "Yoga & Meditation Complex",
        "desc": "Peaceful pavilion complex dedicated to mindful breathwork, therapeutic yoga postures, and clinical meditation research.",
        "badge": "Wellness",
        "image": "/images/universities/gallery/wickramarachchi/photo4.jpg",
        "tone": "blue"
      },
      {
        "id": "wick-lib",
        "title": "Panditha Wickramarachchi Memorial Library",
        "desc": "Treasury of over 50,000 texts in Ayurvedic medicine, Sanskrit, Pali, pharmacology, and modern biomedicine.",
        "badge": "Library",
        "image": "/images/universities/gallery/wickramarachchi/photo5.jpg",
        "tone": "emerald"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "UGC NATIONAL ADMISSIONS",
      "title": "How to Enter GWUIM via UGC",
      "description": "Admissions to BAMS and allied degree programmes are conducted strictly through the University Grants Commission (UGC) of Sri Lanka based on G.C.E. A/L Z-scores.",
      "step1Title": "A/L Bio Science or Allied Stream",
      "step1Desc": "BAMS requires three passes in Chemistry, Biology, and Physics/Agricultural Science at one sitting with minimum 30% in Common General Test.",
      "step1Tags": [
        "Biological Science",
        "Technology",
        "Common General Test"
      ],
      "step2Title": "National Merit & District Allocations",
      "step2Desc": "Admissions follow the national 40% merit, 55% district, and 5% underprivileged quota formula established by the UGC.",
      "quotaMerit": "40%",
      "quotaDistrict": "55%",
      "quotaSpecial": "5%",
      "quotaNote": "Islandwide cutoff scores for BAMS closely follow Western and provincial medical cutoff standards.",
      "step3Title": "Registration & Clinical Swearing-in",
      "step3Desc": "Undergraduates take the traditional Ayurvedic physician oath upon registration before commencing preclinical Sanskrit and anatomy coursework.",
      "portalUrl": "https://www.ugc.ac.lk",
      "portalLabel": "Visit UGC Admission Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://gwu.ac.lk",
        "description": "GWUIM news, faculty events, and official circulars"
      },
      {
        "label": "Faculty of Indigenous Medicine",
        "url": "https://gwu.ac.lk/fim",
        "description": "BAMS curriculum, departments, and hospital guidelines"
      },
      {
        "label": "Ayurveda Teaching Hospital",
        "url": "https://gwu.ac.lk/hospital",
        "description": "Clinical clinics, treatments, and inpatient wards"
      },
      {
        "label": "UGC Sri Lanka",
        "url": "https://www.ugc.ac.lk",
        "description": "University Grants Commission admissions portal"
      }
    ]
  },
  "kdu": {
    "slug": "kdu",
    "name": "General Sir John Kotelawala Defence University",
    "shortName": "KDU",
    "type": "Semi-Government / Defence",
    "stateLabel": "National Defence & State University · Sri Lanka",
    "motto": "For the Motherland Forever",
    "crest": "/images/universities/crests/kdu.png",
    "location": "Kandawala Estate, Ratmalana & Southern Campus Sooriyawewa",
    "province": "Western Province",
    "areas": [
      "Medicine",
      "Engineering",
      "Law",
      "Computing",
      "Management",
      "Defence Studies",
      "Allied Health Sciences"
    ],
    "website": "https://kdu.ac.lk",
    "metrics": {
      "faculties": "10 Faculties",
      "founded": "1981 (University 1988)",
      "campus": "Ratmalana Main & Sooriyawewa Southern",
      "type": "National Defence & State University"
    },
    "rankings": {
      "nationalValue": "4th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "2,400",
      "worldLabel": "GLOBAL POSITION",
      "source": "Times Higher Education & Webometrics · 2026",
      "note": "Sri Lanka's premier defence university, educating both officer cadets and civilian day-scholars across internationally accredited medicine, engineering, computing, and law programmes."
    },
    "overview": {
      "eyebrow": "GET TO KNOW KDU",
      "title": "Sri Lanka's Prestigious Defence & Multidisciplinary National University",
      "description": "Established in 1981 under the Sir John Kotelawala Defence Academy Act and elevated to university status in 1988, KDU was founded on the historic 48-acre Kandawala Walawwa estate bequeathed to the nation by Sri Lanka's third Prime Minister, General Sir John Kotelawala. Today, KDU educates military officer cadets from the Army, Navy, and Air Force alongside thousands of talented civilian day-scholars, featuring an ultra-modern 700-bed University Hospital (UHKDU) in Werahera, an accredited Faculty of Engineering, and the Southern Campus in Sooriyawewa.",
      "tagline": "Uncompromising discipline, world-class academic rigour, and unwavering loyalty to the nation."
    },
    "heritage": {
      "eyebrow": "HISTORIC FOUNDATION",
      "title": "A Statesman's Gift That Forged a World-Class Defence Academy",
      "description": "General Sir John Kotelawala, CH, KBE, donated his private ancestral residence and surrounding estate at Kandawala to provide a unified tri-forces defence academy, ensuring the highest standards of officer education.",
      "landmarkTitle": "Kandawala Walawwa & Heritage Museum",
      "landmarkDesc": "The preserved historic residence of Prime Minister Sir John Kotelawala serves as a living museum of military history, diplomacy, and founding legacy.",
      "image": "/images/universities/gallery/kdu/photo1.jpg",
      "imageBadge": "Kandawala Estate · Ratmalana",
      "pillars": [
        {
          "title": "1980 Historic Bequest",
          "subtitle": "Estate of Sir John",
          "desc": "General Sir John Kotelawala formally deeded his historic 48-acre residence to establish a unified defence academy."
        },
        {
          "title": "1988 University Charter",
          "subtitle": "Act No. 68 of 1981",
          "desc": "Parliament elevated the Academy to a degree-granting National Defence University affiliated with the Commonwealth Universities Association."
        },
        {
          "title": "2009 Civilian Day-Scholars",
          "subtitle": "National Expansion",
          "desc": "Opened competitive degree pathways to qualified civilian fee-levying students, rapidly expanding into Medicine, Engineering, Computing, and Law."
        }
      ]
    },
    "gallery": [
      {
        "id": "kdu-1",
        "src": "/images/universities/gallery/kdu/photo1.jpg",
        "badge": "Main Quadrangle",
        "title": "Ratmalana Main Academic Complex & Parade Grounds",
        "desc": "The central administrative buildings and manicured grounds host national parades, graduations, and international symposia.",
        "aspect": "wide",
        "location": "Ratmalana Main Campus",
        "credit": "KDU Media Centre"
      },
      {
        "id": "kdu-2",
        "src": "/images/universities/gallery/kdu/photo2.jpg",
        "badge": "Hospital",
        "title": "University Hospital KDU (UHKDU Werahera)",
        "desc": "State-of-the-art 700-bed tertiary care teaching hospital featuring advanced cardiac catheterization labs, MRI, and trauma care.",
        "aspect": "tall",
        "location": "Werahera, Boralesgamuwa",
        "credit": "UHKDU"
      },
      {
        "id": "kdu-3",
        "src": "/images/universities/gallery/kdu/photo3.jpg",
        "badge": "Engineering",
        "title": "Faculty of Engineering & Aeronautical Hangars",
        "desc": "IESL-recognized aeronautical, marine, biomedical, civil, and mechanical engineering laboratories.",
        "aspect": "standard",
        "location": "Ratmalana Engineering Wing",
        "credit": "Faculty of Engineering KDU"
      },
      {
        "id": "kdu-4",
        "src": "/images/universities/gallery/kdu/photo4.jpg",
        "badge": "Southern Campus",
        "title": "KDU Southern Campus (Sooriyawewa)",
        "desc": "Sprawling 100-acre modern eco-campus housing Built Environment, Spatial Sciences, and Technology streams.",
        "aspect": "standard",
        "location": "Sooriyawewa, Hambantota",
        "credit": "KDU Southern Campus"
      },
      {
        "id": "kdu-5",
        "src": "/images/universities/gallery/kdu/photo5.jpg",
        "badge": "Cadet Life",
        "title": "Officer Cadet Mess & Gymnasium",
        "desc": "Olympic-standard swimming pool, indoor sports complex, and military obstacle courses nurturing leadership and resilience.",
        "aspect": "standard",
        "location": "Sports Complex Ratmalana",
        "credit": "KDU Physical Education Unit"
      }
    ],
    "faculties": [
      {
        "id": "medicine",
        "name": "Faculty of Medicine",
        "campusZone": "Ratmalana & UHKDU Werahera",
        "location": "Ratmalana",
        "established": "2009",
        "website": "https://medicine.kdu.ac.lk",
        "stream": "Biological Science",
        "departments": [
          "Anatomy",
          "Physiology",
          "Biochemistry",
          "Pathology",
          "Clinical Medicine",
          "Surgery",
          "Pediatrics",
          "Obstetrics"
        ],
        "tone": "emerald",
        "description": "SLMC-accredited MBBS programme conducted at the ultra-modern University Hospital KDU in Werahera."
      },
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "Ratmalana Campus",
        "location": "Ratmalana",
        "established": "1988",
        "website": "https://engineering.kdu.ac.lk",
        "stream": "Physical Science",
        "departments": [
          "Aeronautical",
          "Biomedical",
          "Civil",
          "Electrical & Electronic",
          "Mechanical",
          "Marine",
          "Mechatronics"
        ],
        "tone": "blue",
        "description": "IESL-accredited engineering programmes including Sri Lanka's leading Aeronautical, Marine, and Biomedical engineering specializations."
      },
      {
        "id": "computing",
        "name": "Faculty of Computing",
        "campusZone": "Ratmalana Campus",
        "location": "Ratmalana",
        "established": "2015",
        "website": "https://computing.kdu.ac.lk",
        "stream": "Physical Science & IT",
        "departments": [
          "Computer Science",
          "Software Engineering",
          "Information Technology",
          "Computer Engineering",
          "Data Science"
        ],
        "tone": "purple",
        "description": "Delivering high-demand degrees in Software Engineering, Cybersecurity, Data Science, and Computer Networks."
      },
      {
        "id": "law",
        "name": "Faculty of Law",
        "campusZone": "Ratmalana Campus",
        "location": "Ratmalana",
        "established": "2011",
        "website": "https://law.kdu.ac.lk",
        "stream": "Arts / Any Stream",
        "departments": [
          "Public & International Law",
          "Commercial Law",
          "Private & Military Law"
        ],
        "tone": "amber",
        "description": "Pioneering LL.B. programme renowned for international humanitarian law, maritime law, and commercial litigation."
      }
    ],
    "degreeGroups": [
      {
        "id": "kdu-medicine-health",
        "title": "Medicine & Allied Health Sciences",
        "faculty": "Faculty of Medicine",
        "tone": "emerald",
        "degrees": [
          {
            "name": "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
            "tag": "SLMC Recognized"
          },
          {
            "name": "B.Sc. (Hons) in Nursing",
            "tag": "Clinical Training"
          },
          {
            "name": "B.Sc. (Hons) in Medical Laboratory Science",
            "tag": "Diagnostic Tech"
          }
        ]
      },
      {
        "id": "kdu-engineering-aero",
        "title": "Engineering & Technology",
        "faculty": "Faculty of Engineering",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Aeronautical Engineering",
            "tag": "Aviation Leader"
          },
          {
            "name": "B.Sc. (Hons) in Biomedical Engineering",
            "tag": "Health Tech"
          },
          {
            "name": "B.Sc. (Hons) in Mechatronics Engineering",
            "tag": "Robotics & AI"
          }
        ]
      },
      {
        "id": "kdu-computing-law",
        "title": "Computing & Legal Sciences",
        "faculty": "Faculty of Computing & Faculty of Law",
        "tone": "purple",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Software Engineering",
            "tag": "Industry Placements"
          },
          {
            "name": "Bachelor of Laws (LL.B.)",
            "tag": "High Prestige"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "kdu-uhkdu",
        "title": "University Hospital KDU (UHKDU)",
        "desc": "Ultra-modern tertiary hospital complex featuring robotic surgical units, catheterization suites, and 24/7 emergency response.",
        "badge": "Tertiary Hospital",
        "image": "/images/universities/gallery/kdu/photo2.jpg",
        "tone": "emerald"
      },
      {
        "id": "kdu-hangar",
        "title": "Aeronautical & Marine Labs",
        "desc": "Flight simulation equipment, wind tunnels, and marine engineering test engines for hands-on aerospace instruction.",
        "badge": "Aero Testing",
        "image": "/images/universities/gallery/kdu/photo3.jpg",
        "tone": "blue"
      },
      {
        "id": "kdu-sports",
        "title": "Olympic Sports Complex & Pool",
        "desc": "50-meter swimming pool, fully equipped gymnasium, squash courts, and athletic tracks supporting physical excellence.",
        "badge": "Athletics",
        "image": "/images/universities/gallery/kdu/photo5.jpg",
        "tone": "amber"
      },
      {
        "id": "kdu-library",
        "title": "General Sir John Kotelawala Memorial Library",
        "desc": "Equipped with automated RFID lending, subscriptions to IEEE, ScienceDirect, and classified military strategic databases.",
        "badge": "Library",
        "image": "/images/universities/gallery/kdu/photo1.jpg",
        "tone": "purple"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT & CADET ADMISSIONS",
      "title": "Admission Pathways to KDU (Officer Cadets & Day-Scholars)",
      "description": "General Sir John Kotelawala Defence University conducts independent admissions separate from the UGC quota system, offering seats to Tri-Forces Officer Cadets as well as local and international civilian Day-Scholars.",
      "step1Title": "A/L Minimum Criteria & Aptitude Test",
      "step1Desc": "Applicants must possess at least 3 Simple (S) passes in relevant A/L subjects in one sitting (or London A/L equivalent) and pass the KDU written aptitude examination and English test.",
      "step1Tags": [
        "Local / London A/L",
        "Written Aptitude Test",
        "English Proficiency",
        "Physical Fitness (Cadets)"
      ],
      "step2Title": "Structured Interview & Medical Fitness",
      "step2Desc": "Shortlisted candidates undergo structured personality interviews. Officer cadets must additionally pass rigorous tri-forces medical and physical fitness batteries.",
      "quotaMerit": "Competitive Merit",
      "quotaDistrict": "Islandwide & Overseas",
      "quotaSpecial": "Tri-Forces & Police",
      "quotaNote": "Civilian day-scholars are enrolled on a subsidized fee-levying structure with government interest-free loan facility (IFSLS) eligibility.",
      "step3Title": "Enrollment & Orientation",
      "step3Desc": "Selected scholars receive formal admission letters, undergo leadership and etiquette orientation, and begin coursework in January and July intakes.",
      "portalUrl": "https://enlistment.kdu.ac.lk",
      "portalLabel": "Apply via KDU Enlistment Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://kdu.ac.lk",
        "description": "News, military faculties, and civilian admissions"
      },
      {
        "label": "KDU Enlistment Portal",
        "url": "https://enlistment.kdu.ac.lk",
        "description": "Online application for day-scholars and cadets"
      },
      {
        "label": "University Hospital KDU",
        "url": "https://uhkdu.kdu.ac.lk",
        "description": "Werahera hospital departments and clinical services"
      },
      {
        "label": "KDU Southern Campus",
        "url": "https://southern.kdu.ac.lk",
        "description": "Sooriyawewa spatial sciences and built environment"
      }
    ]
  },
  "univotec": {
    "slug": "univotec",
    "name": "University of Vocational Technology",
    "shortName": "UNIVOTEC",
    "type": "Government / Technical",
    "stateLabel": "National State Technological University · Sri Lanka",
    "motto": "Skill for Life (Vidyaya Janayeth Vibhavam)",
    "crest": "/images/universities/crests/univotec.png",
    "location": "Ratmalana",
    "province": "Western Province",
    "areas": [
      "Industrial Technology",
      "Training Technology",
      "Information & Communication Technology",
      "Education"
    ],
    "website": "https://univotec.ac.lk",
    "metrics": {
      "faculties": "3 Faculties",
      "founded": "2008",
      "campus": "Ratmalana Industrial Complex",
      "type": "National State Technical University"
    },
    "rankings": {
      "nationalValue": "18th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "6,800",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & TVET Sri Lanka · 2026",
      "note": "Sri Lanka's apex state university for TVET and NVQ Level 7 degrees, directly uplifting technical diploma holders to Bachelor of Technology honours qualifications."
    },
    "overview": {
      "eyebrow": "GET TO KNOW UNIVOTEC",
      "title": "Sri Lanka's National Apex for Vocational & Industrial Technology",
      "description": "Established under the Parliamentary Act No. 31 of 2008, the University of Vocational Technology (UNIVOTEC) in Ratmalana was conceived to provide vertical academic progression for diploma holders from National Colleges of Technology, German Tech, CGTTI, SLIATE, and technical colleges. Offering internationally benchmarked Bachelor of Technology (B.Tech) degrees, UNIVOTEC bridges technical craftsmanship with professional engineering and technological management.",
      "tagline": "Empowering the technical youth of Sri Lanka with NVQ Level 7 degree excellence and practical innovation."
    },
    "heritage": {
      "eyebrow": "TVET ELEVATION",
      "title": "Transforming Technical Vocational Education into Degree Heights",
      "description": "For decades, skilled technicians completing NVQ Level 5 and 6 diplomas faced a glass ceiling. UNIVOTEC was forged by visionary educators and industrial leaders to open the doors of university degrees to practical problem solvers.",
      "landmarkTitle": "Ratmalana High-Tech Workshop Complex",
      "landmarkDesc": "Home to industrial-grade CNC machining suites, mechatronics robotics lines, and specialized food testing labs matching contemporary industrial standards.",
      "image": "/images/universities/gallery/univotec/photo1.jpg",
      "imageBadge": "Ratmalana Industrial Campus",
      "pillars": [
        {
          "title": "2008 Parliamentary Act",
          "subtitle": "Act No. 31 of 2008",
          "desc": "Constituted as the apex degree-awarding state university under the Ministry of Skills Development and Vocational Training."
        },
        {
          "title": "NVQ Level 7 Framework",
          "subtitle": "Standard Benchmark",
          "desc": "Formulated the national qualifications framework allowing NDT, NDES, HNDE, and NVQ Level 5/6 holders direct degree entry."
        },
        {
          "title": "Dual-Mode Delivery",
          "subtitle": "Full-Time & Weekend",
          "desc": "Pioneered flexible weekend degree pathways enabling working industry engineers and technicians to study while employed."
        }
      ]
    },
    "gallery": [
      {
        "id": "uni-1",
        "src": "/images/universities/gallery/univotec/photo1.jpg",
        "badge": "Campus Main",
        "title": "UNIVOTEC Ratmalana Administrative Complex",
        "desc": "Modern multi-storey faculty towers and administrative headquarters located along Kandawala Road, Ratmalana.",
        "aspect": "wide",
        "location": "Ratmalana Campus",
        "credit": "UNIVOTEC Media"
      },
      {
        "id": "uni-2",
        "src": "/images/universities/gallery/univotec/photo2.jpg",
        "badge": "Workshops",
        "title": "Mechatronics & CNC Precision Machining Lab",
        "desc": "Heavy industrial CNC lathes, robotic arms, and programmable logic controller (PLC) demonstration stations.",
        "aspect": "tall",
        "location": "Faculty of Industrial Technology",
        "credit": "Department of Mechanical Technology"
      },
      {
        "id": "uni-3",
        "src": "/images/universities/gallery/univotec/photo3.jpg",
        "badge": "ICT Wing",
        "title": "Software Development & Multimedia Studio",
        "desc": "Advanced media animation suites, software development labs, and network virtualization stations.",
        "aspect": "standard",
        "location": "Faculty of ICT",
        "credit": "UNIVOTEC Computing Centre"
      },
      {
        "id": "uni-4",
        "src": "/images/universities/gallery/univotec/photo4.jpg",
        "badge": "Food Tech",
        "title": "Food Process Engineering Quality Lab",
        "desc": "Microbiological safety chambers and sensory analysis suites supporting agricultural value-addition research.",
        "aspect": "standard",
        "location": "Food Technology Wing",
        "credit": "Department of Agriculture & Food Tech"
      },
      {
        "id": "uni-5",
        "src": "/images/universities/gallery/univotec/photo5.jpg",
        "badge": "Auditorium",
        "title": "UNIVOTEC Main Auditorium & Convention Hall",
        "desc": "Venue for national TVET symposia, skills exhibitions, and annual degree convocations.",
        "aspect": "standard",
        "location": "Ratmalana Main Hall",
        "credit": "UNIVOTEC Public Relations"
      }
    ],
    "faculties": [
      {
        "id": "industrial-technology",
        "name": "Faculty of Industrial Technology",
        "campusZone": "Main Workshop Complex",
        "location": "Ratmalana",
        "established": "2008",
        "website": "https://univotec.ac.lk/fit",
        "stream": "Engineering Technology",
        "departments": [
          "Manufacturing Technology",
          "Mechatronics Technology",
          "Building Services Technology",
          "Food Process Technology"
        ],
        "tone": "blue",
        "description": "Awarding Bachelor of Technology degrees in Building Services, Manufacturing, Mechatronics, and Food Process Engineering."
      },
      {
        "id": "information-technology",
        "name": "Faculty of Information & Communication Technology",
        "campusZone": "IT Complex",
        "location": "Ratmalana",
        "established": "2008",
        "website": "https://univotec.ac.lk/fict",
        "stream": "Information Technology",
        "departments": [
          "Software Technology",
          "Network Technology",
          "Multimedia & Web Technology"
        ],
        "tone": "purple",
        "description": "Delivering B.Tech degrees in Software Technology, Network Technology, and Multimedia & Web Development."
      },
      {
        "id": "training-technology",
        "name": "Faculty of Training Technology",
        "campusZone": "Pedagogy Wing",
        "location": "Ratmalana",
        "established": "2008",
        "website": "https://univotec.ac.lk/ftt",
        "stream": "Education & Management",
        "departments": [
          "Education & Training",
          "Management Studies",
          "Language Studies"
        ],
        "tone": "emerald",
        "description": "Training the next generation of TVET lecturers, corporate technical instructors, and industrial training managers."
      }
    ],
    "degreeGroups": [
      {
        "id": "univotec-engineering-tech",
        "title": "Bachelor of Technology (Industrial & Engineering)",
        "faculty": "Faculty of Industrial Technology",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Tech in Mechatronics Technology",
            "tag": "Industrial Automation"
          },
          {
            "name": "B.Tech in Building Services Technology",
            "tag": "HVAC & Facilities"
          },
          {
            "name": "B.Tech in Food Process Technology",
            "tag": "Food Quality"
          }
        ]
      },
      {
        "id": "univotec-ict-software",
        "title": "Bachelor of Technology (ICT & Multimedia)",
        "faculty": "Faculty of ICT",
        "tone": "purple",
        "degrees": [
          {
            "name": "B.Tech in Software Technology",
            "tag": "Enterprise Dev"
          },
          {
            "name": "B.Tech in Network Technology",
            "tag": "Cyber & Cloud"
          },
          {
            "name": "B.Tech in Multimedia & Web Technology",
            "tag": "UI/UX & VFX"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "uni-cnc",
        "title": "Advanced CNC & Mechatronics Center",
        "desc": "Equipped with automated manufacturing lines, pneumatic simulation benches, and industrial robotic arms.",
        "badge": "Advanced Lab",
        "image": "/images/universities/gallery/univotec/photo2.jpg",
        "tone": "blue"
      },
      {
        "id": "uni-cisco",
        "title": "Cisco & Network Systems Lab",
        "desc": "Hands-on enterprise routers, firewall appliances, and server racks preparing students for global networking certifications.",
        "badge": "Networking",
        "image": "/images/universities/gallery/univotec/photo3.jpg",
        "tone": "purple"
      },
      {
        "id": "uni-foodlab",
        "title": "Food Analysis & Microbiological Testing",
        "desc": "Specialized testing facility supporting local agri-business startups and product food preservation experiments.",
        "badge": "Agri Testing",
        "image": "/images/universities/gallery/univotec/photo4.jpg",
        "tone": "emerald"
      },
      {
        "id": "uni-library",
        "title": "UNIVOTEC Central Library",
        "desc": "Houses over 35,000 engineering handbooks, technical standards, and digital access to IEEE Xplore.",
        "badge": "Library",
        "image": "/images/universities/gallery/univotec/photo1.jpg",
        "tone": "amber"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "DIRECT STATE TECHNICAL ADMISSION",
      "title": "How to Apply for UNIVOTEC Degree Programmes",
      "description": "UNIVOTEC conducts independent state admissions welcoming both NVQ Level 5/6 diploma holders (NDT, HNDE, NDES, SLIATE, German Tech) and G.C.E. Advanced Level qualifiers.",
      "step1Title": "Eligibility Pathways (NVQ vs G.C.E. A/L)",
      "step1Desc": "Candidates can qualify through: (A) NVQ Level 5/6 National Diploma in a relevant technology field, or (B) Three passes in G.C.E. A/L in Mathematics, Biological Science, or Engineering/Biosystems Technology.",
      "step1Tags": [
        "NVQ Level 5/6",
        "NDT / HNDE / NDES",
        "G.C.E. A/L Technology",
        "Industry Experience"
      ],
      "step2Title": "Written Aptitude Test & Evaluation",
      "step2Desc": "Eligible applicants sit for a general aptitude and technical comprehension test administered directly by UNIVOTEC in Ratmalana.",
      "quotaMerit": "Direct Merit Exam",
      "quotaDistrict": "Islandwide Access",
      "quotaSpecial": "Working Industry Quota",
      "quotaNote": "Special weekend cohorts are reserved for experienced technicians already contributing to Sri Lankan industries.",
      "step3Title": "Registration & Module Selection",
      "step3Desc": "Selected candidates enroll either as full-time weekday scholars or part-time weekend professionals with tuition subsidized by the state.",
      "portalUrl": "https://univotec.ac.lk/admissions",
      "portalLabel": "Visit UNIVOTEC Admissions"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://univotec.ac.lk",
        "description": "University news, faculties, and degree listings"
      },
      {
        "label": "Admissions Portal",
        "url": "https://univotec.ac.lk/admissions",
        "description": "Application forms for weekday and weekend intakes"
      },
      {
        "label": "Faculty of Industrial Tech",
        "url": "https://univotec.ac.lk/fit",
        "description": "Mechatronics, manufacturing, and food technology"
      },
      {
        "label": "TVEC Sri Lanka",
        "url": "https://www.tvec.gov.lk",
        "description": "Tertiary and Vocational Education Commission NVQ standards"
      }
    ]
  },
  "ocean": {
    "slug": "ocean",
    "name": "Ocean University of Sri Lanka",
    "shortName": "OCUSL",
    "type": "Government / Maritime",
    "stateLabel": "National Maritime & Ocean University · Sri Lanka",
    "motto": "Harnessing the Blue Economy for National Prosperity",
    "crest": "/images/universities/crests/ocean.png",
    "location": "Crow Island, Mattakkuliya, Colombo 15 & Tangalle",
    "province": "Western Province",
    "areas": [
      "Fisheries & Ocean Sciences",
      "Ocean Engineering",
      "Maritime Logistics",
      "Aquaculture",
      "Coastal Management"
    ],
    "website": "https://ocu.ac.lk",
    "metrics": {
      "faculties": "3 Faculties",
      "founded": "2014 (Est. 1999)",
      "campus": "Crow Island Coastal Station & Tangalle",
      "type": "National Maritime & State University"
    },
    "rankings": {
      "nationalValue": "19th",
      "nationalLabel": "SRI LANKA",
      "worldValue": "7,100",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & Maritime Affairs · 2026",
      "note": "Sri Lanka's sole national university dedicated to Ocean Sciences, Blue Economy exploration, Marine Engineering, and global Maritime Port Logistics."
    },
    "overview": {
      "eyebrow": "GET TO KNOW OCUSL",
      "title": "Sri Lanka's National Seat for Ocean Exploration & Maritime Excellence",
      "description": "Originally established in 1999 as the National Institute of Fisheries and Nautical Engineering (NIFNE) and elevated to full national university status by Parliament Act No. 31 of 2014, the Ocean University of Sri Lanka (OCUSL) commands a picturesque coastal campus at Crow Island in Mattakkuliya, Colombo 15. The university leads national research in marine biology, blue economy, marine engineering, aquaculture, naval architecture, and maritime port supply chains.",
      "tagline": "Unlocking the vast economic and scientific potential of Sri Lanka's 500,000 sq km exclusive economic zone."
    },
    "heritage": {
      "eyebrow": "MARITIME TRADITION",
      "title": "Guarding the Waters and Unlocking the Blue Horizon",
      "description": "Strategically positioned at the crossroads of the Indian Ocean, Sri Lanka's maritime destiny requires world-class oceanographers and engineers. OCUSL was chartered to educate the guardians and navigators of our maritime future.",
      "landmarkTitle": "Crow Island Marine Station & Ocean Lab",
      "landmarkDesc": "Directly overlooking the mouth of the Kelani River and the Indian Ocean, the marine station provides undergraduates immediate access to coastal research vessels and open waters.",
      "image": "/images/universities/gallery/ocean/photo1.jpg",
      "imageBadge": "Crow Island · Colombo 15",
      "pillars": [
        {
          "title": "1999 Founded as NIFNE",
          "subtitle": "Fisheries Institute",
          "desc": "Constituted as the apex vocational institute for commercial fisheries, nautical navigation, and boatbuilding."
        },
        {
          "title": "2014 Parliamentary University Act",
          "subtitle": "Act No. 31 of 2014",
          "desc": "Chartered as the Ocean University of Sri Lanka with autonomous power to confer accredited undergraduate and postgraduate degrees."
        },
        {
          "title": "Blue Economy Pioneer",
          "subtitle": "Regional Leadership",
          "desc": "Partnering with NARA, Sri Lanka Ports Authority, and international maritime bodies to explore undersea mineral resources and conservation."
        }
      ]
    },
    "gallery": [
      {
        "id": "oc-1",
        "src": "/images/universities/gallery/ocean/photo1.jpg",
        "badge": "Main Complex",
        "title": "Crow Island Oceanfront Campus",
        "desc": "The main administrative quadrangle situated along the coastal shoreline of Mattakkuliya, Colombo 15.",
        "aspect": "wide",
        "location": "Crow Island, Colombo 15",
        "credit": "Ocean University Media"
      },
      {
        "id": "oc-2",
        "src": "/images/universities/gallery/ocean/photo2.jpg",
        "badge": "Marine Research",
        "title": "Marine Biology & Oceanography Laboratory",
        "desc": "Salinity testing chambers, marine specimen aquaria, and microplastic detection sensors.",
        "aspect": "tall",
        "location": "Faculty of Fisheries & Ocean Sciences",
        "credit": "Department of Oceanography"
      },
      {
        "id": "oc-3",
        "src": "/images/universities/gallery/ocean/photo3.jpg",
        "badge": "Engineering",
        "title": "Naval Architecture & Marine Simulation Facility",
        "desc": "Digital bridge simulator for nautical navigation, hull design modelling, and offshore platform stability analysis.",
        "aspect": "standard",
        "location": "Marine Engineering Wing",
        "credit": "Department of Marine Engineering"
      },
      {
        "id": "oc-4",
        "src": "/images/universities/gallery/ocean/photo4.jpg",
        "badge": "Aquaculture",
        "title": "Tangalle Regional Aquaculture Research Centre",
        "desc": "Commercial shrimp hatcheries, sea bass breeding ponds, and seaweed farming experimental tanks in Southern Sri Lanka.",
        "aspect": "standard",
        "location": "Tangalle Regional Campus",
        "credit": "Aquaculture Research Unit"
      },
      {
        "id": "oc-5",
        "src": "/images/universities/gallery/ocean/photo5.jpg",
        "badge": "Logistics",
        "title": "Port & Maritime Supply Chain Centre",
        "desc": "Simulation suites analyzing Colombo Port container crane productivity, transshipment routes, and international customs.",
        "aspect": "standard",
        "location": "Crow Island Maritime Complex",
        "credit": "Faculty of Management"
      }
    ],
    "faculties": [
      {
        "id": "fisheries-ocean-sciences",
        "name": "Faculty of Fisheries & Ocean Sciences",
        "campusZone": "Crow Island Campus",
        "location": "Colombo 15",
        "established": "2014",
        "website": "https://ocu.ac.lk/ffos",
        "stream": "Biological Science",
        "departments": [
          "Fisheries Science",
          "Aquaculture",
          "Oceanography & Marine Geology",
          "Coastal & Marine Resources Management"
        ],
        "tone": "emerald",
        "description": "Training marine biologists, oceanographers, and sustainable aquaculture entrepreneurs guarding Sri Lanka's marine biodiversity."
      },
      {
        "id": "ocean-engineering",
        "name": "Faculty of Engineering & Technology",
        "campusZone": "Crow Island & Peliyagoda",
        "location": "Colombo",
        "established": "2014",
        "website": "https://ocu.ac.lk/fet",
        "stream": "Physical Science & Technology",
        "departments": [
          "Marine Engineering",
          "Naval Architecture",
          "Offshore Technology"
        ],
        "tone": "blue",
        "description": "Offering specialized degrees in Marine Engineering, Naval Architecture, and Coastal Environmental Technology."
      },
      {
        "id": "maritime-management",
        "name": "Faculty of Management & Social Sciences",
        "campusZone": "Crow Island Campus",
        "location": "Colombo 15",
        "established": "2014",
        "website": "https://ocu.ac.lk/fmss",
        "stream": "Commerce & Any Stream",
        "departments": [
          "Maritime Transportation & Logistics",
          "Marine Tourism",
          "Blue Economy Economics"
        ],
        "tone": "amber",
        "description": "Delivering degrees in Maritime Transportation Management and Logistics, feeding the bustling Colombo transshipment hub."
      }
    ],
    "degreeGroups": [
      {
        "id": "ocean-sciences-aquaculture",
        "title": "Ocean Sciences & Marine Biology",
        "faculty": "Faculty of Fisheries & Ocean Sciences",
        "tone": "emerald",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Marine Fisheries & Oceanography",
            "tag": "Marine Explorer"
          },
          {
            "name": "B.Sc. (Hons) in Aquaculture & Seafood Tech",
            "tag": "Blue Agri"
          }
        ]
      },
      {
        "id": "marine-engineering-nav",
        "title": "Marine Engineering & Naval Architecture",
        "faculty": "Faculty of Engineering & Technology",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Marine Engineering",
            "tag": "Seagoing Officer"
          },
          {
            "name": "B.Tech (Hons) in Maritime Technology",
            "tag": "Offshore & Port"
          }
        ]
      },
      {
        "id": "maritime-logistics",
        "title": "Maritime Logistics & Supply Chain",
        "faculty": "Faculty of Management",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Maritime Transportation & Logistics",
            "tag": "Shipping Leader"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "oc-boat",
        "title": "Coastal Research Vessel & Diving Unit",
        "desc": "Vessel equipped for open-sea plankton trawls, water turbidity profiling, and certified scientific scuba training.",
        "badge": "Research Vessel",
        "image": "/images/universities/gallery/ocean/photo2.jpg",
        "tone": "blue"
      },
      {
        "id": "oc-sim",
        "title": "Nautical Bridge Simulation Lab",
        "desc": "Full-mission navigational ship bridge simulator mimicking navigation through Colombo Port and Malacca Straits.",
        "badge": "Ship Simulator",
        "image": "/images/universities/gallery/ocean/photo3.jpg",
        "tone": "purple"
      },
      {
        "id": "oc-aqua",
        "title": "Hatchery & Wet Laboratory",
        "desc": "Marine organism rearing facilities with recirculating aquaculture systems (RAS) for breeding high-value ornamental and food fish.",
        "badge": "Wet Lab",
        "image": "/images/universities/gallery/ocean/photo4.jpg",
        "tone": "emerald"
      },
      {
        "id": "oc-lib",
        "title": "Maritime Resource & Digital Library",
        "desc": "Nautical charts, IMO publications, sea regulations, and access to Marine Technology Society publications.",
        "badge": "Library",
        "image": "/images/universities/gallery/ocean/photo1.jpg",
        "tone": "amber"
      }
    ],
    "admissions": {
      "isGovernment": true,
      "eyebrow": "DIRECT STATE MARITIME ADMISSION",
      "title": "How to Enter Ocean University of Sri Lanka",
      "description": "Ocean University conducts direct state admissions welcoming G.C.E. Advanced Level graduates across all provinces under state subsidized fee structures.",
      "step1Title": "G.C.E. A/L Minimum Requirements",
      "step1Desc": "Applicants must achieve at least 3 Simple (S) passes in one sitting in Biological Science, Physical Science, Technology, or Commerce streams depending on the chosen degree pathway.",
      "step1Tags": [
        "Biological Science",
        "Physical Science",
        "Technology Stream",
        "Commerce / Arts"
      ],
      "step2Title": "National Aptitude Examination",
      "step2Desc": "Candidates sit for the OCUSL Aptitude Test covering basic science/mathematics, general knowledge on ocean affairs, and English proficiency.",
      "quotaMerit": "Direct Islandwide Merit",
      "quotaDistrict": "Coastal & Inland Provinces",
      "quotaSpecial": "Fisheries Industry Children",
      "quotaNote": "Priority considerations are extended to students from maritime and coastal community backgrounds with passion for marine careers.",
      "step3Title": "Registration & Medical Certification",
      "step3Desc": "Selected marine engineering students undergo maritime medical fitness certifications (including color vision) in line with international maritime standards.",
      "portalUrl": "https://ocu.ac.lk/admissions",
      "portalLabel": "Apply via OCUSL Admissions Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://ocu.ac.lk",
        "description": "University announcements, academic faculties, and news"
      },
      {
        "label": "Admissions Portal",
        "url": "https://ocu.ac.lk/admissions",
        "description": "Annual undergraduate degree applications and gazettes"
      },
      {
        "label": "Faculty of Ocean Sciences",
        "url": "https://ocu.ac.lk/ffos",
        "description": "Marine biology, oceanography, and aquaculture programmes"
      },
      {
        "label": "Ministry of Education",
        "url": "https://www.mohe.gov.lk",
        "description": "Sri Lanka Ministry of Education & Higher Education"
      }
    ]
  },
  "sliit": {
    "slug": "sliit",
    "name": "SLIIT (Sri Lanka Institute of Information Technology)",
    "shortName": "SLIIT",
    "type": "Non-State / UGC Recognized",
    "stateLabel": "Chartered Non-State University · Sri Lanka",
    "motto": "Discover, Create, Inspire",
    "crest": "/images/universities/crests/sliit.png",
    "location": "Malabe Main Campus, Colombo",
    "province": "Western Province",
    "areas": [
      "Computing",
      "Engineering",
      "Business",
      "Humanities & Sciences",
      "Architecture"
    ],
    "website": "https://www.sliit.lk",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1999",
      "campus": "Malabe Flagship (25 Acres) & Metro Colombo",
      "type": "Non-State Degree Awarding Institute"
    },
    "rankings": {
      "nationalValue": "1st (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "2,150",
      "worldLabel": "GLOBAL POSITION",
      "source": "Webometrics & Times Higher Education · 2026",
      "note": "Sri Lanka's highest-ranked non-state university, educating over 15,000 undergraduates with global accreditation (IESL, BCS, AACSB-aligned)."
    },
    "overview": {
      "eyebrow": "GET TO KNOW SLIIT",
      "title": "Sri Lanka's Premier Non-State University for Computing, Tech & Innovation",
      "description": "Established in 1999 under the visionary leadership of Prof. Lakshman Ratnayake and Prof. Lalith Gamage, SLIIT has evolved from a pioneering IT institute into Sri Lanka's largest and most sought-after non-state university. Set across a serene 25-acre landscaped campus in Malabe with regional centres in Colombo, Kandy, and Kurunegala, SLIIT offers UGC-approved internal degrees as well as prestigious international qualifications partnered with Curtin University (Australia), Liverpool John Moores University (UK), and University of Queensland.",
      "tagline": "Shaping digital pioneers, tech entrepreneurs, and corporate leaders across South Asia."
    },
    "heritage": {
      "eyebrow": "INNOVATION & EXCELLENCE",
      "title": "A Quarter-Century of Transforming Sri Lanka's IT Landscape",
      "description": "When Sri Lanka urgently required thousands of high-calibre software professionals to fuel its burgeoning knowledge economy, SLIIT was conceived as a non-profit higher education institution. Over 35,000 graduates now anchor the nation's tech exports and multinational tech hubs.",
      "landmarkTitle": "Malabe Campus Innovation Centre",
      "landmarkDesc": "Features modern glass-clad engineering towers, AI supercomputing labs, a high-tech auditorium, and tree-lined student plazas designed for collaborative learning.",
      "image": "/images/universities/gallery/sliit/photo1.jpg",
      "imageBadge": "Malabe Main Campus · Colombo",
      "pillars": [
        {
          "title": "1999 National Initiative",
          "subtitle": "Pioneering IT Education",
          "desc": "Founded with government backing to bridge the acute talent deficit in Sri Lanka's emerging software and telecom sectors."
        },
        {
          "title": "IESL & Global Accreditations",
          "subtitle": "Engineering & Computing",
          "desc": "First non-state university in Sri Lanka to achieve IESL recognition for engineering degrees and BCS UK accreditation for computing."
        },
        {
          "title": "Global University Alliances",
          "subtitle": "Australia & UK",
          "desc": "Seamless 2+2 and 3+1 dual-degree transfer pathways with world Top 1% institutions including Curtin and Queensland."
        }
      ]
    },
    "gallery": [
      {
        "id": "sliit-1",
        "src": "/images/universities/gallery/sliit/photo1.jpg",
        "badge": "Main Complex",
        "title": "SLIIT Malabe Flagship Academic Tower",
        "desc": "The signature architectural landmark of SLIIT Malabe housing academic faculties and auditoriums.",
        "aspect": "wide",
        "location": "Malabe Campus",
        "credit": "SLIIT Media Unit"
      },
      {
        "id": "sliit-2",
        "src": "/images/universities/gallery/sliit/photo2.jpg",
        "badge": "Computing",
        "title": "Faculty of Computing AI & Robotics Lab",
        "desc": "High-performance computing workstations running neural networks, robotics simulations, and cloud testbeds.",
        "aspect": "tall",
        "location": "Computing Wing",
        "credit": "Faculty of Computing SLIIT"
      },
      {
        "id": "sliit-3",
        "src": "/images/universities/gallery/sliit/photo3.jpg",
        "badge": "Engineering",
        "title": "Faculty of Engineering Heavy Structural Lab",
        "desc": "Material testing frames, civil engineering hydraulics flumes, and electrical automation test benches.",
        "aspect": "standard",
        "location": "Engineering Complex",
        "credit": "Faculty of Engineering SLIIT"
      },
      {
        "id": "sliit-4",
        "src": "/images/universities/gallery/sliit/photo4.jpg",
        "badge": "Business",
        "title": "SLIIT Business School & FinTech Lab",
        "desc": "Real-time stock ticker terminals, Bloomberg simulator pods, and digital marketing command centres.",
        "aspect": "standard",
        "location": "Business School Wing",
        "credit": "SLIIT Business School"
      },
      {
        "id": "sliit-5",
        "src": "/images/universities/gallery/sliit/photo5.jpg",
        "badge": "Student Life",
        "title": "SLIIT Student Commons & Amphitheatre",
        "desc": "The central lifestyle hub featuring cafes, student club rooms, open green lawns, and recreational sports grounds.",
        "aspect": "standard",
        "location": "Student Commons Malabe",
        "credit": "SLIIT Student Council"
      }
    ],
    "faculties": [
      {
        "id": "computing",
        "name": "Faculty of Computing",
        "campusZone": "Malabe Campus & Metro Colombo",
        "location": "Malabe",
        "established": "1999",
        "website": "https://computing.sliit.lk",
        "stream": "Information Technology",
        "departments": [
          "Software Engineering",
          "Computer Systems & Network Engineering",
          "Information Technology",
          "Cyber Security",
          "Data Science",
          "Interactive Media"
        ],
        "tone": "blue",
        "description": "Sri Lanka's largest computing faculty, training elite software developers, data scientists, and cybersecurity analysts."
      },
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "Malabe Campus",
        "location": "Malabe",
        "established": "2006",
        "website": "https://engineering.sliit.lk",
        "stream": "Engineering",
        "departments": [
          "Civil Engineering",
          "Electrical & Electronic Engineering",
          "Mechanical Engineering",
          "Materials Engineering"
        ],
        "tone": "emerald",
        "description": "IESL-recognized engineering qualifications preparing world-ready engineers with extensive practical lab exposure."
      },
      {
        "id": "business-school",
        "name": "SLIIT Business School",
        "campusZone": "Malabe & Metro",
        "location": "Malabe",
        "established": "2004",
        "website": "https://business.sliit.lk",
        "stream": "Business & Management",
        "departments": [
          "Business Analytics",
          "Accounting & Finance",
          "Marketing Management",
          "Human Capital Management",
          "Logistics & Supply Chain"
        ],
        "tone": "amber",
        "description": "Offering contemporary business degrees infusing data analytics and digital business strategy."
      },
      {
        "id": "humanities-sciences",
        "name": "Faculty of Humanities & Sciences",
        "campusZone": "Malabe Campus",
        "location": "Malabe",
        "established": "2018",
        "website": "https://hs.sliit.lk",
        "stream": "Sciences & Education",
        "departments": [
          "Biotechnology",
          "Nursing",
          "Mathematics",
          "Education",
          "Psychology"
        ],
        "tone": "purple",
        "description": "Multidisciplinary education spanning clinical nursing, applied biotechnology, English education, and psychology."
      }
    ],
    "degreeGroups": [
      {
        "id": "sliit-computing-degrees",
        "title": "Computing, Software & Artificial Intelligence",
        "faculty": "Faculty of Computing",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Information Technology (Software Engineering)",
            "tag": "Top Tech Career"
          },
          {
            "name": "B.Sc. (Hons) in Computer Systems & Network Engineering",
            "tag": "Cloud & Telecom"
          },
          {
            "name": "B.Sc. (Hons) in IT (Data Science & AI)",
            "tag": "High Growth"
          }
        ]
      },
      {
        "id": "sliit-engineering-degrees",
        "title": "Chartered Engineering Pathways",
        "faculty": "Faculty of Engineering",
        "tone": "emerald",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Civil Engineering (IESL Accredited)",
            "tag": "IESL Recognized"
          },
          {
            "name": "B.Sc. (Hons) in Electrical & Electronic Engineering",
            "tag": "IESL Recognized"
          },
          {
            "name": "B.Sc. (Hons) in Mechanical Engineering (Mechatronics)",
            "tag": "IESL Recognized"
          }
        ]
      },
      {
        "id": "sliit-business-humanities",
        "title": "Business, Analytics & Allied Sciences",
        "faculty": "SLIIT Business School & Faculty of H&S",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.B.A. (Hons) in Business Analytics",
            "tag": "FinTech Ready"
          },
          {
            "name": "B.Sc. (Hons) in Biotechnology",
            "tag": "Life Sciences"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "sliit-lib",
        "title": "SLIIT Central Digital Library",
        "desc": "Spanning three floors with 40,000 volumes, study pods, and subscriptions to IEEE, ScienceDirect, and ACM Digital.",
        "badge": "Digital Library",
        "image": "/images/universities/gallery/sliit/photo2.jpg",
        "tone": "blue"
      },
      {
        "id": "sliit-hostels",
        "title": "On-Campus Accommodation & Shuttles",
        "desc": "Air-conditioned and standard residential hostel facilities for over 1,000 students alongside campus shuttle buses.",
        "badge": "Residential",
        "image": "/images/universities/gallery/sliit/photo5.jpg",
        "tone": "amber"
      },
      {
        "id": "sliit-sports",
        "title": "Sports Complex & Cricket Oval",
        "desc": "Floodlit cricket ground, FIFA-specification futsal arena, badminton courts, and modern fitness gymnasium.",
        "badge": "Athletics",
        "image": "/images/universities/gallery/sliit/photo4.jpg",
        "tone": "emerald"
      },
      {
        "id": "sliit-incubator",
        "title": "SLIIT Innovate Tech Incubator",
        "desc": "Venture accelerator supporting undergraduate tech startups with seed funding, IP legal advice, and angel investor showcases.",
        "badge": "Incubator",
        "image": "/images/universities/gallery/sliit/photo3.jpg",
        "tone": "purple"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT & SCHOLARSHIP ADMISSIONS",
      "title": "Admission Pathways to SLIIT Degree Programmes",
      "description": "Admissions at SLIIT are handled directly through regular semester intakes in February/March and September/October, open to both Local and London (Edexcel/Cambridge) Advanced Level graduates.",
      "step1Title": "A/L Minimum Passes & Aptitude Test",
      "step1Desc": "Candidates need minimum 3 passes (S) in G.C.E. A/L in a single sitting (or equivalent in London A/L) and must achieve a passing grade in the SLIIT Aptitude Examination.",
      "step1Tags": [
        "Local A/L",
        "London Cambridge / Edexcel",
        "SLIIT Aptitude Test",
        "English Assessment"
      ],
      "step2Title": "Govt Interest-Free Student Loan (IFSLS)",
      "step2Desc": "Eligible Sri Lankan students can study fully government-funded through the Ministry of Education's Interest Free Student Loan Scheme (IFSLS) with zero upfront tuition.",
      "quotaMerit": "Direct Academic Merit",
      "quotaDistrict": "Open Nationwide",
      "quotaSpecial": "Govt IFSLS Loan Scheme",
      "quotaNote": "SLIIT offers substantial merit scholarships covering up to 100% of tuition for top provincial performers.",
      "step3Title": "Registration & Induction Week",
      "step3Desc": "Selected students register online, select internal or foreign partner university transfer tracks, and participate in orientation week.",
      "portalUrl": "https://apply.sliit.lk",
      "portalLabel": "Apply Online via SLIIT Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://www.sliit.lk",
        "description": "Degree programmes, academic faculties, and international pathways"
      },
      {
        "label": "Online Application",
        "url": "https://apply.sliit.lk",
        "description": "Undergraduate admissions application and aptitude test schedule"
      },
      {
        "label": "Ministry IFSLS Loan",
        "url": "https://www.mohe.gov.lk",
        "description": "Government interest-free student loan scheme details"
      },
      {
        "label": "International Partners",
        "url": "https://www.sliit.lk/international",
        "description": "Curtin University, Liverpool John Moores transfer routes"
      }
    ]
  },
  "nsbm": {
    "slug": "nsbm",
    "name": "NSBM Green University",
    "shortName": "NSBM",
    "type": "Non-State / Semi-Government",
    "stateLabel": "Chartered Green University Town · Sri Lanka",
    "motto": "Building the Global Graduate",
    "crest": "/images/universities/crests/nsbm.png",
    "location": "Pitipana, Homagama",
    "province": "Western Province",
    "areas": [
      "Business",
      "Computing",
      "Engineering",
      "Science"
    ],
    "website": "https://www.nsbm.ac.lk",
    "metrics": {
      "faculties": "4 Faculties",
      "founded": "2016 (Est. 2011)",
      "campus": "Pitipana Green University Town (26 Acres)",
      "type": "Self-Financed State-Sponsored University"
    },
    "rankings": {
      "nationalValue": "2nd (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "2,850",
      "worldLabel": "GLOBAL POSITION",
      "source": "GreenMetric World Rankings & UGC · 2026",
      "note": "South Asia's first purpose-built Green University town, certified for environmental sustainability, modern student living, and world-class sports amenities."
    },
    "overview": {
      "eyebrow": "GET TO KNOW NSBM",
      "title": "South Asia's First Purpose-Built Green University Town",
      "description": "Commissioned in October 2016 and operating under the purview of the Ministry of Education, NSBM Green University is an iconic 26-acre academic wonderland nestled in Pitipana, Homagama. Conceived to offer holistic education that balances rigorous academics with sports, performing arts, and environmental consciousness, NSBM educates over 12,000 undergraduates with UGC-approved degrees as well as accredited British and Australian degrees in partnership with the University of Plymouth (UK) and Victoria University (Australia).",
      "tagline": "Fostering well-rounded, socially responsible, and globally employable professionals."
    },
    "heritage": {
      "eyebrow": "A GREEN VISION",
      "title": "Pioneering Sustainable Campus Living in South Asia",
      "description": "Designed from the ground up as a sustainable eco-smart township, NSBM integrates rainwater harvesting, rooftop solar power generation, natural ventilation, and pedestrian-first academic courtyards.",
      "landmarkTitle": "Pitipana Masterplanned Eco-Town",
      "landmarkDesc": "Features modern glass towers, an open-air Greek amphitheatre, Olympic swimming pool, fully automated student apartment towers, and a vibrant shopping concourse.",
      "image": "/images/universities/gallery/nsbm/photo1.jpg",
      "imageBadge": "Pitipana Green Town · Homagama",
      "pillars": [
        {
          "title": "2011 Inception as NIBM School",
          "subtitle": "National Business School",
          "desc": "Conceived under the National Institute of Business Management to modernize higher business and IT studies."
        },
        {
          "title": "2016 Green Campus Commission",
          "subtitle": "South Asian Milestone",
          "desc": "Opened the 26-acre Pitipana campus, setting a benchmark for university infrastructure in Sri Lanka."
        },
        {
          "title": "Global Academic Partnerships",
          "subtitle": "Plymouth & Victoria",
          "desc": "Offers direct dual qualifications and student exchange schemes with leading European and Australian universities."
        }
      ]
    },
    "gallery": [
      {
        "id": "nsbm-1",
        "src": "/images/universities/gallery/nsbm/photo1.jpg",
        "badge": "Main Complex",
        "title": "NSBM Green University Iconic Glass Clocktower",
        "desc": "The central administrative spire and lecture pavilion overlooking the green courtyard and reflection pools.",
        "aspect": "wide",
        "location": "Pitipana Campus",
        "credit": "NSBM Media Crew"
      },
      {
        "id": "nsbm-2",
        "src": "/images/universities/gallery/nsbm/photo2.jpg",
        "badge": "Amphitheatre",
        "title": "Open-Air Greek Amphitheatre",
        "desc": "A monumental open-air arena hosting cultural concerts, drama productions, student convocations, and guest lectures.",
        "aspect": "tall",
        "location": "Central Green Square",
        "credit": "NSBM Student Affairs"
      },
      {
        "id": "nsbm-3",
        "src": "/images/universities/gallery/nsbm/photo3.jpg",
        "badge": "Sports",
        "title": "Olympic Swimming Pool & Gymnasium",
        "desc": "Full-size 50-meter swimming pool, multi-court sports complex, and modern fitness center nurturing student wellness.",
        "aspect": "standard",
        "location": "Recreational Wing",
        "credit": "NSBM Sports Council"
      },
      {
        "id": "nsbm-4",
        "src": "/images/universities/gallery/nsbm/photo4.jpg",
        "badge": "Computing",
        "title": "Faculty of Computing Software Studios",
        "desc": "Ergonomic computing laboratories designed for hackathons, mobile app incubations, and cloud architecture testing.",
        "aspect": "standard",
        "location": "Computing Building",
        "credit": "Faculty of Computing NSBM"
      },
      {
        "id": "nsbm-5",
        "src": "/images/universities/gallery/nsbm/photo5.jpg",
        "badge": "Auditorium",
        "title": "NSBM Grand International Auditorium",
        "desc": "A 1,500-seat state-of-the-art auditorium featuring acoustic architecture for national symposia and awards.",
        "aspect": "standard",
        "location": "Main Auditorium",
        "credit": "NSBM Ceremonials"
      }
    ],
    "faculties": [
      {
        "id": "business",
        "name": "Faculty of Business",
        "campusZone": "Business Complex",
        "location": "Pitipana, Homagama",
        "established": "2016",
        "website": "https://www.nsbm.ac.lk/faculty-of-business",
        "stream": "Business & Management",
        "departments": [
          "Accounting & Finance",
          "Management",
          "Marketing & Tourism",
          "Operations & Logistics",
          "Economics & Statistics"
        ],
        "tone": "amber",
        "description": "Equipping future corporate leaders with strategic acumen, business analytics, and entrepreneurial management."
      },
      {
        "id": "computing",
        "name": "Faculty of Computing",
        "campusZone": "Computing Complex",
        "location": "Pitipana, Homagama",
        "established": "2016",
        "website": "https://www.nsbm.ac.lk/faculty-of-computing",
        "stream": "Computing & IT",
        "departments": [
          "Software Engineering",
          "Computer Security",
          "Data Science",
          "Information Systems",
          "Computer Networks"
        ],
        "tone": "blue",
        "description": "Offering cutting-edge degrees aligned with international technology standards and industrial certifications."
      },
      {
        "id": "engineering",
        "name": "Faculty of Engineering",
        "campusZone": "Engineering Complex",
        "location": "Pitipana, Homagama",
        "established": "2016",
        "website": "https://www.nsbm.ac.lk/faculty-of-engineering",
        "stream": "Engineering & Technology",
        "departments": [
          "Electrical & Electronic",
          "Mechatronics",
          "Civil & Environmental",
          "Interior Design"
        ],
        "tone": "emerald",
        "description": "Preparing industry-ready engineers and designers with hands-on exposure to modern fabrication and prototyping."
      },
      {
        "id": "science",
        "name": "Faculty of Science",
        "campusZone": "Science Complex",
        "location": "Pitipana, Homagama",
        "established": "2021",
        "website": "https://www.nsbm.ac.lk/faculty-of-science",
        "stream": "Biological & Chemical Sciences",
        "departments": [
          "Biomedical Science",
          "Pharmaceutical Science",
          "Nursing & Public Health"
        ],
        "tone": "purple",
        "description": "Advancing clinical, pharmaceutical, and health science careers with specialized laboratories."
      }
    ],
    "degreeGroups": [
      {
        "id": "nsbm-business-degrees",
        "title": "Business Administration & Management",
        "faculty": "Faculty of Business",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.Sc. in Business Management (HRM / Marketing / Logistics)",
            "tag": "Corporate Leadership"
          },
          {
            "name": "B.Sc. in Accounting & Financial Management",
            "tag": "CIMA / ACCA Exemptions"
          },
          {
            "name": "B.Sc. in International Business",
            "tag": "Global Trade"
          }
        ]
      },
      {
        "id": "nsbm-computing-degrees",
        "title": "Computing, Software & Cyber Security",
        "faculty": "Faculty of Computing",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Software Engineering",
            "tag": "Tech Giant Placements"
          },
          {
            "name": "B.Sc. (Hons) in Computer Security",
            "tag": "High Demand"
          },
          {
            "name": "B.Sc. (Hons) in Data Science",
            "tag": "AI & Big Data"
          }
        ]
      },
      {
        "id": "nsbm-engineering-science",
        "title": "Engineering & Health Sciences",
        "faculty": "Faculty of Engineering & Faculty of Science",
        "tone": "emerald",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Biomedical Science",
            "tag": "Clinical Labs"
          },
          {
            "name": "B.Sc. (Hons) in Mechatronics Engineering",
            "tag": "Robotics & IoT"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "nsbm-hostels",
        "title": "Student Apartment Complex",
        "desc": "Modern multi-storey residential halls accommodating 2,000+ students with self-catering kitchens, Wi-Fi, and 24/7 security.",
        "badge": "Student Housing",
        "image": "/images/universities/gallery/nsbm/photo1.jpg",
        "tone": "amber"
      },
      {
        "id": "nsbm-sports",
        "title": "Green Sports Arena & Pool",
        "desc": "Features standard cricket ground, pavilion, basketball courts, and an Olympic swimming pool.",
        "badge": "Sports Arena",
        "image": "/images/universities/gallery/nsbm/photo3.jpg",
        "tone": "emerald"
      },
      {
        "id": "nsbm-library",
        "title": "NSBM Green Library",
        "desc": "Vast multi-tier quiet study areas, collaborative meeting booths, and online access to global scholarly journals.",
        "badge": "Digital Library",
        "image": "/images/universities/gallery/nsbm/photo4.jpg",
        "tone": "blue"
      },
      {
        "id": "nsbm-hub",
        "title": "Student Centre & Commercial Concourse",
        "desc": "Food court with multi-cuisine dining, supermarket, bank branches, and medical center inside campus.",
        "badge": "Lifestyle Hub",
        "image": "/images/universities/gallery/nsbm/photo5.jpg",
        "tone": "purple"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT & IFSLS ENROLLMENT",
      "title": "How to Enroll at NSBM Green University",
      "description": "NSBM welcomes applications for its March and October intakes directly through its admissions portal. Sri Lankan students can also apply under the Government Interest Free Student Loan Scheme (IFSLS).",
      "step1Title": "A/L Results & Entrance Criteria",
      "step1Desc": "Applicants must possess at least 3 Simple (S) passes in Local G.C.E. A/L or Cambridge/Edexcel London A/L examinations.",
      "step1Tags": [
        "Local G.C.E. A/L",
        "London Cambridge / Edexcel",
        "Aptitude Assessment",
        "Direct Interview"
      ],
      "step2Title": "Govt Interest Free Student Loan Scheme (IFSLS)",
      "step2Desc": "Eligible candidates who passed A/L can secure 100% government interest-free financial support through the Ministry of Education IFSLS portal.",
      "quotaMerit": "Direct Admission Merit",
      "quotaDistrict": "Islandwide Intake",
      "quotaSpecial": "Government IFSLS Loan Scheme",
      "quotaNote": "Special merit discounts are awarded to students with 3 'A' grades and outstanding national sports achievements.",
      "step3Title": "Registration & Campus Induction",
      "step3Desc": "Confirmed students complete room reservations for residential halls, collect student ID cards, and participate in the Freshers' Talent Discovery Month.",
      "portalUrl": "https://apply.nsbm.ac.lk",
      "portalLabel": "Apply via NSBM Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://www.nsbm.ac.lk",
        "description": "Programmes, green campus overview, and event updates"
      },
      {
        "label": "Apply Online",
        "url": "https://apply.nsbm.ac.lk",
        "description": "Direct student application portal for March and October intakes"
      },
      {
        "label": "Plymouth Dual Degrees",
        "url": "https://www.nsbm.ac.lk/university-of-plymouth",
        "description": "UK University of Plymouth internal degree awards"
      },
      {
        "label": "Ministry of Education IFSLS",
        "url": "https://www.mohe.gov.lk",
        "description": "Government interest-free loan scheme application guide"
      }
    ]
  },
  "cinec": {
    "slug": "cinec",
    "name": "CINEC Campus",
    "shortName": "CINEC",
    "type": "Non-State / Maritime & Aviation",
    "stateLabel": "Pioneer Maritime & Non-State Campus · Sri Lanka",
    "motto": "Beyond the Horizon (Nelum Kuluna)",
    "crest": "/images/universities/crests/cinec.png",
    "location": "Millennium Drive, IT Park, Malabe",
    "province": "Western Province",
    "areas": [
      "Maritime Sciences",
      "Marine Engineering",
      "Engineering & Tech",
      "Aviation",
      "Logistics",
      "Health Sciences"
    ],
    "website": "https://www.cinec.edu",
    "metrics": {
      "faculties": "6 Faculties",
      "founded": "1990",
      "campus": "Malabe Flagship Campus & Regional Centers",
      "type": "Non-State Degree Awarding Maritime Campus"
    },
    "rankings": {
      "nationalValue": "3rd (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "3,400",
      "worldLabel": "GLOBAL POSITION",
      "source": "DNV ISO 9001, IMO White List & UGC · 2026",
      "note": "Sri Lanka's premier maritime and aviation academy, internationally certified by DNV and IMO, having trained over 20,000 merchant navy officers."
    },
    "overview": {
      "eyebrow": "GET TO KNOW CINEC",
      "title": "Sri Lanka's World-Renowned Maritime, Aviation & Engineering Citadel",
      "description": "Established in 1990 by Captain Ajith Peiris, CINEC Campus in Malabe has risen as South Asia's preeminent maritime training institute and a comprehensive degree-awarding higher education university. Offering UGC-approved internal degrees, international maritime certifications, and academic degrees partnered with the University of Wolverhampton (UK) and Dalian Maritime University (China), CINEC prepares cadets and students for lucrative global careers at sea, in the skies, and on land.",
      "tagline": "Navigating global seas, commanding modern aircraft, and engineering modern industries."
    },
    "heritage": {
      "eyebrow": "MARITIME LEADERSHIP",
      "title": "Over 35 Years of Nautical and Engineering Mastery",
      "description": "From its inception training young Sri Lankan seafarers to commanding high-technology full-mission ship simulators, CINEC has placed certified merchant marine captains and chief engineers on commercial vessels worldwide.",
      "landmarkTitle": "Malabe Maritime Complex & Ship Simulators",
      "landmarkDesc": "Features full-mission 360-degree ship bridge simulators, engine room simulators, aircraft maintenance hangars, and firefighting mock-ups.",
      "image": "/images/universities/gallery/cinec/photo1.jpg",
      "imageBadge": "CINEC Malabe Flagship Campus",
      "pillars": [
        {
          "title": "1990 Maritime Foundation",
          "subtitle": "Capt. Ajith Peiris",
          "desc": "Conceived as Colombo International Nautical and Engineering College, certified to the highest standards of the IMO."
        },
        {
          "title": "Global Seafaring Licensure",
          "subtitle": "Merchant Marine",
          "desc": "Authorized by Sri Lanka Merchant Shipping Secretariat, Australian Maritime Safety Authority (AMSA), and UK MCA."
        },
        {
          "title": "Multidisciplinary Expansion",
          "subtitle": "UGC Recognized Degrees",
          "desc": "Expanded into Engineering, Logistics, Aviation, Health Sciences, Education, and Management."
        }
      ]
    },
    "gallery": [
      {
        "id": "cinec-1",
        "src": "/images/universities/gallery/cinec/photo1.jpg",
        "badge": "Main Complex",
        "title": "CINEC Malabe Campus Flagship Building",
        "desc": "The primary campus facade and administrative atrium located in the Millennium IT corridor in Malabe.",
        "aspect": "wide",
        "location": "Malabe Campus",
        "credit": "CINEC Media"
      },
      {
        "id": "cinec-2",
        "src": "/images/universities/gallery/cinec/photo2.jpg",
        "badge": "Maritime Sim",
        "title": "Full-Mission 360° Navigational Ship Simulator",
        "desc": "State-of-the-art DNV-certified bridge simulator training cadets in adverse sea states, radar navigation, and docking.",
        "aspect": "tall",
        "location": "Faculty of Maritime Sciences",
        "credit": "CINEC Maritime Simulation Center"
      },
      {
        "id": "cinec-3",
        "src": "/images/universities/gallery/cinec/photo3.jpg",
        "badge": "Engineering",
        "title": "Marine Engineering Heavy Engine Room Workshop",
        "desc": "Working cross-section diesel engine plants, boiler trainers, and hydraulic machinery mirroring ocean freighters.",
        "aspect": "standard",
        "location": "Engineering Workshop",
        "credit": "Faculty of Marine Engineering"
      },
      {
        "id": "cinec-4",
        "src": "/images/universities/gallery/cinec/photo4.jpg",
        "badge": "Aviation",
        "title": "Aviation Maintenance Hangar & Avionics",
        "desc": "Aircraft engines, pressurized airframe models, and avionics test benches for aircraft engineering cadets.",
        "aspect": "standard",
        "location": "Aviation Wing",
        "credit": "Department of Aviation CINEC"
      },
      {
        "id": "cinec-5",
        "src": "/images/universities/gallery/cinec/photo5.jpg",
        "badge": "Cadet Life",
        "title": "Merchant Navy Cadet Parade Grounds",
        "desc": "Cadets marching in full maritime uniform during formal sea parade inspection, instilling seafaring discipline.",
        "aspect": "standard",
        "location": "Parade Grounds Malabe",
        "credit": "CINEC Cadet Corps"
      }
    ],
    "faculties": [
      {
        "id": "maritime-sciences",
        "name": "Faculty of Maritime Sciences",
        "campusZone": "Maritime Wing",
        "location": "Malabe",
        "established": "1990",
        "website": "https://www.cinec.edu/faculty-of-maritime-sciences",
        "stream": "Maritime Studies",
        "departments": [
          "Nautical Science",
          "Marine Safety & Security",
          "Navigation & Seamanship"
        ],
        "tone": "blue",
        "description": "Training Deck Cadets and Navigation Officers leading to international Certificate of Competency (CoC) and ship command."
      },
      {
        "id": "marine-engineering",
        "name": "Faculty of Marine Engineering",
        "campusZone": "Engineering Workshops",
        "location": "Malabe",
        "established": "1990",
        "website": "https://www.cinec.edu/faculty-of-marine-engineering",
        "stream": "Marine Engineering",
        "departments": [
          "Marine Engineering",
          "Electro-Technology",
          "Naval Architecture"
        ],
        "tone": "emerald",
        "description": "IESL and DG Shipping accredited programmes training seagoing Chief Engineers and Marine Surveyors."
      },
      {
        "id": "management-social-sciences",
        "name": "Faculty of Management & Social Sciences",
        "campusZone": "Academic Tower",
        "location": "Malabe",
        "established": "2008",
        "website": "https://www.cinec.edu/faculty-of-management",
        "stream": "Logistics & Commerce",
        "departments": [
          "Logistics & Transport",
          "Supply Chain Management",
          "International Business",
          "Banking & Finance"
        ],
        "tone": "amber",
        "description": "Accredited by the Chartered Institute of Logistics and Transport (CILT UK), feeding port logistics and shipping lines."
      },
      {
        "id": "engineering-technology",
        "name": "Faculty of Engineering & Technology",
        "campusZone": "Tech Complex",
        "location": "Malabe",
        "established": "2012",
        "website": "https://www.cinec.edu/faculty-of-engineering",
        "stream": "Engineering",
        "departments": [
          "Civil Engineering",
          "Mechanical Engineering",
          "Automotive Systems",
          "Aviation Maintenance"
        ],
        "tone": "purple",
        "description": "Partnered with University of Wolverhampton for B.Eng. Honours degrees in Mechanical, Civil, and Aeronautical engineering."
      }
    ],
    "degreeGroups": [
      {
        "id": "cinec-maritime-degrees",
        "title": "Merchant Navy & Maritime Command",
        "faculty": "Faculty of Maritime Sciences & Marine Engineering",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Nautical Science (Officer Cadet)",
            "tag": "Seagoing Captain"
          },
          {
            "name": "B.Sc. (Hons) in Marine Engineering (Chief Engineer)",
            "tag": "Seagoing Engineer"
          }
        ]
      },
      {
        "id": "cinec-logistics-aviation",
        "title": "Logistics, Supply Chain & Aviation",
        "faculty": "Faculty of Management & Aviation",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in International Transportation & Logistics",
            "tag": "CILT UK Accredited"
          },
          {
            "name": "B.Sc. (Hons) in Aviation Science (Flight Dispatch)",
            "tag": "Airline Careers"
          },
          {
            "name": "B.Sc. in Supply Chain Management",
            "tag": "Port & Freight"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "cinec-bridge",
        "title": "Transas 360° Ship Bridge Simulator",
        "desc": "One of Asia's most sophisticated navigational simulators, certified by DNV-GL for all classes of commercial vessels.",
        "badge": "Ship Simulator",
        "image": "/images/universities/gallery/cinec/photo2.jpg",
        "tone": "blue"
      },
      {
        "id": "cinec-workshop",
        "title": "Machinery & Engine Test Plant",
        "desc": "Marine boilers, auxiliary generators, steering gear, and reverse osmosis plants for hands-on operational practice.",
        "badge": "Engineering Plant",
        "image": "/images/universities/gallery/cinec/photo3.jpg",
        "tone": "emerald"
      },
      {
        "id": "cinec-safety",
        "title": "Fire Fighting & Survival Training Tank",
        "desc": "Dedicated training complex for STCW basic safety, enclosed space rescue, helicopter underwater escape, and liferafts.",
        "badge": "Survival Center",
        "image": "/images/universities/gallery/cinec/photo4.jpg",
        "tone": "amber"
      },
      {
        "id": "cinec-hostel",
        "title": "Cadet Residential Quarters & Mess",
        "desc": "Strict maritime cadet living quarters instilling teamwork, punctuality, and seafaring command culture.",
        "badge": "Cadet Housing",
        "image": "/images/universities/gallery/cinec/photo5.jpg",
        "tone": "purple"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT CADET & DEGREE ADMISSIONS",
      "title": "How to Join CINEC Campus (Cadets & Civilians)",
      "description": "CINEC conducts rolling admissions for degree and seafaring programmes throughout the year. Government Interest-Free Student Loan Scheme (IFSLS) seats are available for eligible UGC-approved programmes.",
      "step1Title": "A/L Minimum Criteria & Maritime Medicals",
      "step1Desc": "Degrees require minimum 3 passes in G.C.E. A/L or London A/L. Maritime and marine engineering applicants must pass the mandatory DG Shipping medical fitness exam (including 6/6 vision and color perception).",
      "step1Tags": [
        "Local / London A/L",
        "DG Shipping Seafarer Medical",
        "English Proficiency",
        "Aptitude Evaluation"
      ],
      "step2Title": "Govt Interest-Free Student Loan (IFSLS)",
      "step2Desc": "Non-maritime internal UGC degrees in logistics, IT, and management qualify for zero-interest government funding under the Ministry of Education IFSLS scheme.",
      "quotaMerit": "Direct Admission Merit",
      "quotaDistrict": "Islandwide & International",
      "quotaSpecial": "Merchant Shipping Cadet Quota",
      "quotaNote": "Cadets completing sea phases gain guaranteed onboard sea-time placements through CINEC's international crewing network.",
      "step3Title": "Registration & Sea Uniform Issue",
      "step3Desc": "Undergraduates receive uniforms, complete orientation, and commence rigorous academic or nautical training.",
      "portalUrl": "https://www.cinec.edu/apply-now",
      "portalLabel": "Apply via CINEC Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://www.cinec.edu",
        "description": "Courses, faculties, and international accreditations"
      },
      {
        "label": "Online Application",
        "url": "https://www.cinec.edu/apply-now",
        "description": "Application forms for degree and cadet intakes"
      },
      {
        "label": "University of Wolverhampton",
        "url": "https://www.wlv.ac.uk",
        "description": "UK partner university degree options"
      },
      {
        "label": "Merchant Shipping Secretariat",
        "url": "https://www.dgshipping.gov.lk",
        "description": "Seafarer certification and discharge book guidelines"
      }
    ]
  },
  "iit": {
    "slug": "iit",
    "name": "Informatics Institute of Technology",
    "shortName": "IIT",
    "type": "Non-State / British Degrees",
    "stateLabel": "Pioneer British Higher Education Campus · Sri Lanka",
    "motto": "Transforming Futures, Powering the Knowledge Economy",
    "crest": "/images/universities/crests/iit.png",
    "location": "Ramakrishna Road, Wellawatte, Colombo 06",
    "province": "Western Province",
    "areas": [
      "Software Engineering",
      "Computer Science",
      "Artificial Intelligence",
      "Business Information Systems",
      "Cyber Security"
    ],
    "website": "https://www.iit.ac.lk",
    "metrics": {
      "faculties": "2 Schools (Computing & Business)",
      "founded": "1990",
      "campus": "Wellawatte Flagship & City Campus",
      "type": "British Internal Degree-Awarding Institute"
    },
    "rankings": {
      "nationalValue": "4th (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "3,600",
      "worldLabel": "GLOBAL POSITION",
      "source": "University of Westminster (UK) & BCS · 2026",
      "note": "Sri Lanka's premier British degree academy, affiliated with the University of Westminster for over 35 years with 100% graduate employment in top multinational tech companies."
    },
    "overview": {
      "eyebrow": "GET TO KNOW IIT",
      "title": "Sri Lanka's Pioneer in British Degrees & Global Tech Leadership",
      "description": "Founded in 1990 by visionary entrepreneur Dr. Gamini Wickramasinghe, Informatics Institute of Technology (IIT) introduced private British higher education to Sri Lanka. For over 35 unbroken years, IIT has maintained an exclusive partnership with the prestigious University of Westminster (London, UK), conferring 100% internal British Honours degrees. Renowned for its mandatory one-year paid industry placement, IIT graduates boast an astonishing 100% employment rate and dominate national startup innovation.",
      "tagline": "The indisputable benchmark for British software engineering, cybersecurity, and tech entrepreneurship."
    },
    "heritage": {
      "eyebrow": "35 YEARS OF INNOVATION",
      "title": "Forging Sri Lanka's Silicon Valley Trailblazers",
      "description": "IIT was the first private institution in Sri Lanka to offer internationally accredited British IT degrees. IIT students have achieved unprecedented global accolades, including representing Sri Lanka at Microsoft Imagine Cup global finals and winning Google Summer of Code awards.",
      "landmarkTitle": "Wellawatte Campus & Cutting Edge Exhibition",
      "landmarkDesc": "The vibrant Colombo 06 campus hosts the annual 'Cutting Edge' and 'Cutting Edge Business' technology exhibitions showcasing multimillion-rupee startup innovations created by students.",
      "image": "/images/universities/gallery/iit/photo1.jpg",
      "imageBadge": "Wellawatte Flagship Campus · Colombo",
      "pillars": [
        {
          "title": "1990 Historic Inception",
          "subtitle": "Dr. Gamini Wickramasinghe",
          "desc": "Pioneered internal British university degree delivery directly in Colombo with the University of Westminster."
        },
        {
          "title": "1-Year Paid Industry Placement",
          "subtitle": "100% Employment Guarantee",
          "desc": "Every 4-year degree mandates a full year working inside top tier tech firms (WSO2, IFS, Virtusa, London Stock Exchange Group)."
        },
        {
          "title": "Imagine Cup Global Legacy",
          "subtitle": "World Champions",
          "desc": "Multiple global final appearances and international tech entrepreneurship awards over two decades."
        }
      ]
    },
    "gallery": [
      {
        "id": "iit-1",
        "src": "/images/universities/gallery/iit/photo1.jpg",
        "badge": "Main Campus",
        "title": "IIT Wellawatte Flagship Campus Facade",
        "desc": "Located along Ramakrishna Road in Wellawatte, Colombo 06, housing state-of-the-art tech lecture theatres.",
        "aspect": "wide",
        "location": "Wellawatte Campus",
        "credit": "IIT Media Unit"
      },
      {
        "id": "iit-2",
        "src": "/images/universities/gallery/iit/photo2.jpg",
        "badge": "Cutting Edge",
        "title": "Cutting Edge Annual Tech Exhibition",
        "desc": "Undergraduate developers pitching AI inventions, IoT sensors, and mobile solutions to venture capitalists.",
        "aspect": "tall",
        "location": "Exhibition Arena",
        "credit": "IIT Student Council"
      },
      {
        "id": "iit-3",
        "src": "/images/universities/gallery/iit/photo3.jpg",
        "badge": "Computing Lab",
        "title": "Westminster High-Tech Computing Lab",
        "desc": "Mac and Linux workstations running machine learning models, cloud native pipelines, and UI/UX design suites.",
        "aspect": "standard",
        "location": "School of Computing",
        "credit": "School of Computing IIT"
      },
      {
        "id": "iit-4",
        "src": "/images/universities/gallery/iit/photo4.jpg",
        "badge": "Business",
        "title": "School of Business Executive Seminar Suites",
        "desc": "Modern conference rooms hosting corporate workshops, hackathons, and global webinars.",
        "aspect": "standard",
        "location": "School of Business IIT",
        "credit": "IIT School of Business"
      },
      {
        "id": "iit-5",
        "src": "/images/universities/gallery/iit/photo5.jpg",
        "badge": "Student Life",
        "title": "IIT Stage Craft & Cultural Fiesta",
        "desc": "Dynamic student-led drama, musical concerts, gaming tournaments, and sports fixtures fostering camaraderie.",
        "aspect": "standard",
        "location": "Student Commons",
        "credit": "IIT Rotaract & Student Union"
      }
    ],
    "faculties": [
      {
        "id": "school-of-computing",
        "name": "School of Computing",
        "campusZone": "Main Campus",
        "location": "Colombo 06",
        "established": "1990",
        "website": "https://www.iit.ac.lk/school-of-computing",
        "stream": "Computer Science & Software",
        "departments": [
          "Software Engineering",
          "Computer Science",
          "Artificial Intelligence",
          "Cyber Security & Forensics"
        ],
        "tone": "blue",
        "description": "Conferring direct internal degrees from the University of Westminster with BCS and Engineering Council UK accreditation."
      },
      {
        "id": "school-of-business",
        "name": "School of Business",
        "campusZone": "City Campus",
        "location": "Colombo",
        "established": "1998",
        "website": "https://www.iit.ac.lk/school-of-business",
        "stream": "Business & Analytics",
        "departments": [
          "Business Information Systems",
          "Business Analytics",
          "Digital Marketing"
        ],
        "tone": "amber",
        "description": "Bridging corporate management and enterprise technology, producing business analysts and digital strategists."
      }
    ],
    "degreeGroups": [
      {
        "id": "iit-computing-degrees",
        "title": "Westminster British Computing Degrees",
        "faculty": "School of Computing",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Eng. (Hons) in Software Engineering (Univ of Westminster)",
            "tag": "100% Employed"
          },
          {
            "name": "B.Sc. (Hons) in Computer Science (Univ of Westminster)",
            "tag": "Algorithmic Focus"
          },
          {
            "name": "B.Sc. (Hons) in Artificial Intelligence & Data Science",
            "tag": "Next-Gen AI"
          }
        ]
      },
      {
        "id": "iit-business-degrees",
        "title": "Westminster Business Technology Degrees",
        "faculty": "School of Business",
        "tone": "amber",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Business Information Systems (BIS)",
            "tag": "Tech Consultant"
          },
          {
            "name": "B.Sc. (Hons) in Business Data Analytics",
            "tag": "FinTech & BI"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "iit-lab",
        "title": "Westminster Advanced Computing Labs",
        "desc": "High-spec workstations with enterprise IDEs, Git repositories, virtualization tools, and cloud staging setups.",
        "badge": "Tech Lab",
        "image": "/images/universities/gallery/iit/photo3.jpg",
        "tone": "blue"
      },
      {
        "id": "iit-lib",
        "title": "Digital Resource Centre & British Library Links",
        "desc": "Direct electronic access to the University of Westminster library in London, ACM Digital Library, and IEEE Xplore.",
        "badge": "Digital Library",
        "image": "/images/universities/gallery/iit/photo1.jpg",
        "tone": "purple"
      },
      {
        "id": "iit-placement",
        "title": "Industry Placement & Career Development Centre",
        "desc": "Dedicated corporate relations office placing 100% of undergraduates into paid 12-month industrial internships.",
        "badge": "Career Center",
        "image": "/images/universities/gallery/iit/photo4.jpg",
        "tone": "emerald"
      },
      {
        "id": "iit-incubator",
        "title": "IIT Venture Studio & Innovation Lab",
        "desc": "Incubation space where student startup concepts are evaluated, funded, and coached by seasoned tech CEOs.",
        "badge": "Startup Lab",
        "image": "/images/universities/gallery/iit/photo2.jpg",
        "tone": "amber"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT BRITISH DEGREE ADMISSION",
      "title": "How to Enroll at IIT (University of Westminster)",
      "description": "Admissions are conducted directly with intakes in January/February and September/October. Students can apply with Local or London A/L results, or through the IIT Foundation Certificate.",
      "step1Title": "A/L Passes or Foundation Pathway",
      "step1Desc": "Direct entry requires minimum 2 to 3 Simple (S) passes in G.C.E. A/L or London A/L (Edexcel / Cambridge). Students with O/L can enter via the 8-month IIT Foundation Certificate in IT.",
      "step1Tags": [
        "Local A/L",
        "London Cambridge / Edexcel",
        "Foundation Certificate",
        "Direct Aptitude Test"
      ],
      "step2Title": "Govt Interest Free Student Loan Scheme (IFSLS)",
      "step2Desc": "Eligible local A/L students can enroll under the Ministry of Higher Education IFSLS scheme with 100% interest-free government financing.",
      "quotaMerit": "Direct Merit Evaluation",
      "quotaDistrict": "Open Nationwide",
      "quotaSpecial": "Government IFSLS Loan Scheme",
      "quotaNote": "Scholarships are available for top performers at national coding competitions and Olympiads.",
      "step3Title": "Enrollment & Paid Placement Briefing",
      "step3Desc": "Undergraduates receive University of Westminster student registration numbers and begin their British degree journey in Colombo.",
      "portalUrl": "https://www.iit.ac.lk/apply",
      "portalLabel": "Apply via IIT Online Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://www.iit.ac.lk",
        "description": "Degree portfolios, scholarships, and graduate success stories"
      },
      {
        "label": "Apply Online",
        "url": "https://www.iit.ac.lk/apply",
        "description": "Direct application form for upcoming intakes"
      },
      {
        "label": "University of Westminster",
        "url": "https://www.westminster.ac.uk",
        "description": "UK partner university profile and accreditation details"
      },
      {
        "label": "Ministry of Education IFSLS",
        "url": "https://www.mohe.gov.lk",
        "description": "Government interest-free student loan scheme details"
      }
    ]
  },
  "horizon": {
    "slug": "horizon",
    "name": "Horizon Campus",
    "shortName": "HC",
    "type": "Non-State / UGC Recognized",
    "stateLabel": "Chartered Non-State Campus · Sri Lanka",
    "motto": "Inspiring Excellence",
    "crest": "/images/universities/crests/horizon.png",
    "location": "Knowledge City Malabe (KCM), Malabe",
    "province": "Western Province",
    "areas": [
      "Education",
      "Information Technology",
      "Management",
      "Science",
      "Law"
    ],
    "website": "https://horizoncampus.edu.lk",
    "metrics": {
      "faculties": "5 Faculties",
      "founded": "2009",
      "campus": "Knowledge City Malabe (KCM - 15 Acres)",
      "type": "Non-State Degree Awarding Institute"
    },
    "rankings": {
      "nationalValue": "5th (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "4,200",
      "worldLabel": "GLOBAL POSITION",
      "source": "UGC Recognized & Univ of London Recognised Center · 2026",
      "note": "Sri Lanka's premier destination for Teacher Education (B.Ed.), Law (University of London), and IT degrees at Knowledge City Malabe."
    },
    "overview": {
      "eyebrow": "GET TO KNOW HORIZON",
      "title": "A Vibrant Green Seat of Teacher Education, Law & Computing",
      "description": "Established in 2009 by educationist Upul Daranagama, Horizon Campus has grown into a premier non-state university hub located at Knowledge City Malabe (KCM). Horizon is particularly renowned as Sri Lanka's leading private educator of school teachers through its UGC-approved Bachelor of Education (B.Ed.) honours degrees, as well as an official Recognised Teaching Centre for the prestigious University of London LL.B. programme.",
      "tagline": "Nurturing inspired educators, visionary technologists, and astute legal minds."
    },
    "heritage": {
      "eyebrow": "ACADEMIC FLOURISHING",
      "title": "Building a Modern Knowledge City in Malabe",
      "description": "Knowledge City Malabe was designed as a modern integrated education city combining university faculties, sports complexes, hostels, and green eco-gardens.",
      "landmarkTitle": "Knowledge City Malabe (KCM) Academic Spire",
      "landmarkDesc": "Features modern lecture amphitheatres, a dedicated moot court for law students, science laboratories, and high-speed Wi-Fi commons.",
      "image": "/images/universities/gallery/horizon/photo1.jpg",
      "imageBadge": "Knowledge City Malabe (KCM)",
      "pillars": [
        {
          "title": "2009 Foundation",
          "subtitle": "Upul Daranagama",
          "desc": "Established to provide accessible, high quality tertiary education in Malabe."
        },
        {
          "title": "Pioneer in Teacher Education",
          "subtitle": "B.Ed. Honours",
          "desc": "First non-state institute recognized by the Ministry of Education and UGC to award B.Ed. degrees training Sri Lankan school teachers."
        },
        {
          "title": "University of London Recognized",
          "subtitle": "World Class LL.B.",
          "desc": "Recognised Teaching Centre for the world-renowned University of London Bachelor of Laws programme."
        }
      ]
    },
    "gallery": [
      {
        "id": "hor-1",
        "src": "/images/universities/gallery/horizon/photo1.jpg",
        "badge": "Main Complex",
        "title": "Knowledge City Malabe Horizon Complex",
        "desc": "The signature building and green lawns of Horizon Campus situated along Millennium Drive, Malabe.",
        "aspect": "wide",
        "location": "Knowledge City Malabe",
        "credit": "Horizon Media"
      },
      {
        "id": "hor-2",
        "src": "/images/universities/gallery/horizon/photo2.jpg",
        "badge": "Moot Court",
        "title": "Faculty of Law Moot Court Room",
        "desc": "Realistic judicial courtroom where law students simulate appellate hearings and trials.",
        "aspect": "tall",
        "location": "Faculty of Law",
        "credit": "Faculty of Law Horizon"
      },
      {
        "id": "hor-3",
        "src": "/images/universities/gallery/horizon/photo3.jpg",
        "badge": "Education",
        "title": "Faculty of Education Micro-Teaching Lab",
        "desc": "Smart classroom pods with camera tracking where student teachers hone pedagogy and class management.",
        "aspect": "standard",
        "location": "Faculty of Education",
        "credit": "Faculty of Education Horizon"
      },
      {
        "id": "hor-4",
        "src": "/images/universities/gallery/horizon/photo4.jpg",
        "badge": "Computing",
        "title": "Faculty of IT Software Development Lab",
        "desc": "High-speed computing infrastructure supporting software design, cloud applications, and networking.",
        "aspect": "standard",
        "location": "IT Complex",
        "credit": "Faculty of IT Horizon"
      },
      {
        "id": "hor-5",
        "src": "/images/universities/gallery/horizon/photo5.jpg",
        "badge": "Campus Life",
        "title": "KCM Sports & Recreation Complex",
        "desc": "Indoor badminton courts, outdoor basketball arena, and student recreation center.",
        "aspect": "standard",
        "location": "KCM Grounds",
        "credit": "Horizon Student Union"
      }
    ],
    "faculties": [
      {
        "id": "faculty-of-education",
        "name": "Faculty of Education",
        "campusZone": "KCM Campus",
        "location": "Malabe",
        "established": "2014",
        "website": "https://horizoncampus.edu.lk/faculty-of-education",
        "stream": "Teacher Education",
        "departments": [
          "Biological Science Education",
          "Physical Science Education",
          "English Language Teaching",
          "Early Childhood Education"
        ],
        "tone": "emerald",
        "description": "Sri Lanka's leading private faculty awarding UGC-approved B.Ed. (Hons) degrees preparing licensed secondary school educators."
      },
      {
        "id": "faculty-of-law",
        "name": "Faculty of Law",
        "campusZone": "KCM Law Wing",
        "location": "Malabe",
        "established": "2015",
        "website": "https://horizoncampus.edu.lk/faculty-of-law",
        "stream": "Law & Legal Studies",
        "departments": [
          "English & European Law",
          "Commercial Law",
          "Public Law"
        ],
        "tone": "amber",
        "description": "Offering the prestigious University of London LL.B. programme alongside Sri Lanka Law College exam preparation."
      },
      {
        "id": "faculty-of-it",
        "name": "Faculty of Information Technology",
        "campusZone": "KCM Tech Wing",
        "location": "Malabe",
        "established": "2009",
        "website": "https://horizoncampus.edu.lk/faculty-of-information-technology",
        "stream": "Information Technology",
        "departments": [
          "Networking & Mobile Computing",
          "Software Engineering",
          "Business Information Systems"
        ],
        "tone": "blue",
        "description": "Delivering UGC-approved B.Sc. Honours degrees in Information Technology and Software Engineering."
      },
      {
        "id": "faculty-of-management",
        "name": "Faculty of Management",
        "campusZone": "KCM Business Wing",
        "location": "Malabe",
        "established": "2009",
        "website": "https://horizoncampus.edu.lk/faculty-of-management",
        "stream": "Management & Commerce",
        "departments": [
          "Marketing",
          "HRM",
          "Accounting & Finance"
        ],
        "tone": "purple",
        "description": "Offering contemporary business degrees with practical industry internships."
      }
    ],
    "degreeGroups": [
      {
        "id": "horizon-education-degrees",
        "title": "Teacher Education & Pedagogy",
        "faculty": "Faculty of Education",
        "tone": "emerald",
        "degrees": [
          {
            "name": "Bachelor of Education (B.Ed. Hons) in Biological Science",
            "tag": "Licensed Teacher"
          },
          {
            "name": "Bachelor of Education (B.Ed. Hons) in Physical Science",
            "tag": "Secondary Teaching"
          },
          {
            "name": "Bachelor of Education (B.Ed. Hons) in English ELT",
            "tag": "Language Master"
          }
        ]
      },
      {
        "id": "horizon-law-it-degrees",
        "title": "Law & Information Technology",
        "faculty": "Faculty of Law & Faculty of IT",
        "tone": "blue",
        "degrees": [
          {
            "name": "Bachelor of Laws (LL.B. - University of London)",
            "tag": "London Internal"
          },
          {
            "name": "B.Sc. (Hons) in Information Technology",
            "tag": "Tech Degree"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "hor-court",
        "title": "Moot Court Judicial Suite",
        "desc": "Equipped with judge benches, jury and advocate podiums for trial advocacy and legal drafting exercises.",
        "badge": "Moot Court",
        "image": "/images/universities/gallery/horizon/photo2.jpg",
        "tone": "amber"
      },
      {
        "id": "hor-micro",
        "title": "Micro-Teaching Pods",
        "desc": "Specially configured recording studios where student teachers conduct mock lessons with peer evaluation.",
        "badge": "Teaching Labs",
        "image": "/images/universities/gallery/horizon/photo3.jpg",
        "tone": "emerald"
      },
      {
        "id": "hor-sports",
        "title": "KCM Sports Complex & Gym",
        "desc": "Badminton, basketball, table tennis, and cardio fitness facilities promoting an active student lifestyle.",
        "badge": "Sports Complex",
        "image": "/images/universities/gallery/horizon/photo5.jpg",
        "tone": "blue"
      },
      {
        "id": "hor-library",
        "title": "Horizon Central Library",
        "desc": "Over 25,000 reference volumes, dedicated law law report archives, and online access to London University databases.",
        "badge": "Library",
        "image": "/images/universities/gallery/horizon/photo1.jpg",
        "tone": "purple"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT & IFSLS ENROLLMENT",
      "title": "How to Enroll at Horizon Campus",
      "description": "Admissions are conducted twice annually for February and September intakes. UGC-approved degrees in Education, IT, and Management are fully eligible for the Ministry of Education IFSLS student loan scheme.",
      "step1Title": "A/L Minimum Qualifications",
      "step1Desc": "Candidates need minimum 3 Simple (S) passes in G.C.E. A/L in a single sitting or London A/L equivalent. Specific B.Ed. degrees require passes in science or maths subjects.",
      "step1Tags": [
        "Local G.C.E. A/L",
        "London A/L",
        "Direct Interview",
        "IFSLS Loan Option"
      ],
      "step2Title": "Govt Interest Free Student Loan Scheme (IFSLS)",
      "step2Desc": "Sri Lankan students can pursue B.Ed., B.Sc. IT, and B.B.A. programmes with 100% tuition sponsored under the government IFSLS interest-free loan facility.",
      "quotaMerit": "Direct Academic Evaluation",
      "quotaDistrict": "Islandwide Intake",
      "quotaSpecial": "Government IFSLS Loan Scheme",
      "quotaNote": "Special teaching bursaries and sibling discounts are offered across degree courses.",
      "step3Title": "Registration & Induction",
      "step3Desc": "Selected candidates enroll online and attend orientation at the Knowledge City Malabe campus.",
      "portalUrl": "https://horizoncampus.edu.lk/apply-now",
      "portalLabel": "Apply via Horizon Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://horizoncampus.edu.lk",
        "description": "Degree listings, faculty profiles, and student news"
      },
      {
        "label": "Online Application",
        "url": "https://horizoncampus.edu.lk/apply-now",
        "description": "Direct application form for upcoming intakes"
      },
      {
        "label": "University of London Programme",
        "url": "https://london.ac.uk",
        "description": "Details on the University of London LL.B. external pathway"
      },
      {
        "label": "Ministry of Education IFSLS",
        "url": "https://www.mohe.gov.lk",
        "description": "Government interest-free loan scheme requirements"
      }
    ]
  },
  "sltc": {
    "slug": "sltc",
    "name": "SLTC Research University",
    "shortName": "SLTC",
    "type": "Non-State / Research Focused",
    "stateLabel": "Chartered Research University · Sri Lanka",
    "motto": "Live to Learn",
    "crest": "/images/universities/crests/sltc.png",
    "location": "The SLTC Park, Meepe, Padukka & TRACE Maradana",
    "province": "Western Province",
    "areas": [
      "Engineering & Tech",
      "Technology",
      "Computing & IT",
      "Business Studies",
      "Music & Art"
    ],
    "website": "https://sltc.ac.lk",
    "metrics": {
      "faculties": "5 Schools",
      "founded": "2015",
      "campus": "Padukka Research Park (35 Acres) & TRACE City",
      "type": "Non-State Degree Awarding Research University"
    },
    "rankings": {
      "nationalValue": "6th (Non-State)",
      "nationalLabel": "NON-STATE SECTOR",
      "worldValue": "4,500",
      "worldLabel": "GLOBAL POSITION",
      "source": "UGC Recognized & Washington Accord Aligned · 2026",
      "note": "Sri Lanka's first residential research university set on a sprawling 35-acre park, pioneering cutting-edge engineering, telecommunications, and industrial research."
    },
    "overview": {
      "eyebrow": "GET TO KNOW SLTC",
      "title": "Sri Lanka's Premier Residential Research University",
      "description": "Inaugurated in 2015 through the initiative of Sri Lanka Telecom and elevated into an autonomous research university, SLTC is situated on an enchanting 35-acre parkland in Padukka (formerly the Satellite Earth Station). As the nation's first fully residential non-state university campus, SLTC offers Washington Accord-aligned engineering programmes, cutting-edge technology and computing degrees, and a vibrant arts and business faculty, supported by research labs at TRACE Expert City in Colombo.",
      "tagline": "Fostering groundbreaking research, technological innovation, and vibrant campus life."
    },
    "heritage": {
      "eyebrow": "RESEARCH HERITAGE",
      "title": "From Satellite Earth Station to Global Research University",
      "description": "The Padukka campus was historically Sri Lanka's primary satellite communications gateway to the world. Today, those massive parabolic dishes and rolling green hills form the backdrop for national tech breakthroughs.",
      "landmarkTitle": "The SLTC Park & Satellite Grounds",
      "landmarkDesc": "Features 35 acres of lush greenery, research pavilions, modern on-campus student residences, outdoor amphitheatre, and telecommunication laboratories.",
      "image": "/images/universities/gallery/sltc/photo1.jpg",
      "imageBadge": "The SLTC Park · Padukka",
      "pillars": [
        {
          "title": "2015 SLT Initiative",
          "subtitle": "National Telecom Legacy",
          "desc": "Founded with strategic telecommunications backing to create a world-class technology academy in Sri Lanka."
        },
        {
          "title": "Residential Campus Culture",
          "subtitle": "35-Acre Parkland",
          "desc": "Sri Lanka's first non-state university where students live, collaborate, and innovate 24/7 on an expansive campus."
        },
        {
          "title": "TRACE Expert City Innovation",
          "subtitle": "Industry Research",
          "desc": "Active research collaboration hubs at TRACE Expert City Maradana solving high-tech industrial challenges."
        }
      ]
    },
    "gallery": [
      {
        "id": "sltc-1",
        "src": "/images/universities/gallery/sltc/photo1.jpg",
        "badge": "Main Complex",
        "title": "The SLTC Park Administrative Spire",
        "desc": "The central academic and administrative building framed by manicured lawns and historic satellite structures at Padukka.",
        "aspect": "wide",
        "location": "Padukka Campus",
        "credit": "SLTC Media Unit"
      },
      {
        "id": "sltc-2",
        "src": "/images/universities/gallery/sltc/photo2.jpg",
        "badge": "Telecom Lab",
        "title": "RF & Optical Fibre Telecommunications Lab",
        "desc": "Advanced spectrum analyzers, optical splicing gear, and microwave benches for communications engineering.",
        "aspect": "tall",
        "location": "School of Engineering",
        "credit": "School of Engineering SLTC"
      },
      {
        "id": "sltc-3",
        "src": "/images/universities/gallery/sltc/photo3.jpg",
        "badge": "Robotics",
        "title": "Robotics & Embedded Systems Lab",
        "desc": "Prototyping stations, drone flight testing cages, and industrial PLC control kits.",
        "aspect": "standard",
        "location": "Research Complex",
        "credit": "SLTC Research Center"
      },
      {
        "id": "sltc-4",
        "src": "/images/universities/gallery/sltc/photo4.jpg",
        "badge": "Residential",
        "title": "On-Campus Student Hostel Village",
        "desc": "Picturesque residential halls surrounded by hills, providing students a peaceful, immersive university environment.",
        "aspect": "standard",
        "location": "Residential Village",
        "credit": "SLTC Student Services"
      },
      {
        "id": "sltc-5",
        "src": "/images/universities/gallery/sltc/photo5.jpg",
        "badge": "Student Life",
        "title": "SLTC Amphitheatre & Sports Arena",
        "desc": "Open-air theatre and athletic grounds where the student community gathers for concerts, sports tournaments, and festivals.",
        "aspect": "standard",
        "location": "The SLTC Park",
        "credit": "SLTC Sports Council"
      }
    ],
    "faculties": [
      {
        "id": "school-of-engineering",
        "name": "School of Engineering",
        "campusZone": "The SLTC Park",
        "location": "Padukka",
        "established": "2015",
        "website": "https://sltc.ac.lk/school-of-engineering",
        "stream": "Engineering",
        "departments": [
          "Electronics & Telecommunications",
          "Power Systems",
          "Civil Engineering",
          "Mechatronics Engineering"
        ],
        "tone": "blue",
        "description": "Washington Accord-aligned engineering honours degrees preparing students for chartership and research leadership."
      },
      {
        "id": "school-of-technology",
        "name": "School of Technology",
        "campusZone": "The SLTC Park",
        "location": "Padukka",
        "established": "2017",
        "website": "https://sltc.ac.lk/school-of-technology",
        "stream": "Engineering Technology",
        "departments": [
          "Biosystems Technology",
          "Environmental Technology",
          "Agricultural Technology"
        ],
        "tone": "emerald",
        "description": "A/L Technology stream pathways in Biosystems, Environmental, and Agricultural Technology."
      },
      {
        "id": "school-of-it",
        "name": "School of Computing & IT",
        "campusZone": "The SLTC Park & TRACE",
        "location": "Padukka & Colombo",
        "established": "2017",
        "website": "https://sltc.ac.lk/school-of-computing",
        "stream": "Information Technology",
        "departments": [
          "Software Engineering",
          "Cloud Computing",
          "Cybersecurity",
          "Data Science"
        ],
        "tone": "purple",
        "description": "Industry-embedded computing degrees with direct research internships at TRACE Expert City."
      },
      {
        "id": "school-of-business",
        "name": "Business School",
        "campusZone": "Padukka & Colombo",
        "location": "Padukka",
        "established": "2018",
        "website": "https://sltc.ac.lk/business-school",
        "stream": "Business & Management",
        "departments": [
          "Accounting & Finance",
          "Marketing",
          "Supply Chain",
          "Human Resource"
        ],
        "tone": "amber",
        "description": "Modern business degrees blending analytics, entrepreneurship, and global market strategies."
      }
    ],
    "degreeGroups": [
      {
        "id": "sltc-engineering-degrees",
        "title": "Engineering Honours Programmes",
        "faculty": "School of Engineering",
        "tone": "blue",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Electronics & Power Systems",
            "tag": "IESL Aligned"
          },
          {
            "name": "B.Sc. (Hons) in Telecommunications Engineering",
            "tag": "Telecom Leader"
          },
          {
            "name": "B.Sc. (Hons) in Civil Engineering",
            "tag": "Structural Tech"
          }
        ]
      },
      {
        "id": "sltc-computing-tech-degrees",
        "title": "Computing & Engineering Technology",
        "faculty": "School of Computing & School of Technology",
        "tone": "purple",
        "degrees": [
          {
            "name": "B.Sc. (Hons) in Software Engineering",
            "tag": "High Employability"
          },
          {
            "name": "Bachelor of Technology (Hons) in Biosystems Tech",
            "tag": "Agri-Tech & Bio"
          }
        ]
      }
    ],
    "facilities": [
      {
        "id": "sltc-telecom",
        "title": "National Telecommunication Testbed",
        "desc": "Direct connectivity with nationwide fiber trunks, satellite dish testing, and 5G network simulators.",
        "badge": "Telecom Testbed",
        "image": "/images/universities/gallery/sltc/photo2.jpg",
        "tone": "blue"
      },
      {
        "id": "sltc-residence",
        "title": "Residential Parkland Hostels",
        "desc": "Safe, serene on-campus hostel blocks with sports facilities, study pavilions, and canteen halls.",
        "badge": "Residential Village",
        "image": "/images/universities/gallery/sltc/photo4.jpg",
        "tone": "emerald"
      },
      {
        "id": "sltc-trace",
        "title": "TRACE Innovation Centre (Maradana)",
        "desc": "Tech lab located inside Colombo's premier tech park, facilitating collaborative industry-funded projects.",
        "badge": "Innovation Lab",
        "image": "/images/universities/gallery/sltc/photo3.jpg",
        "tone": "purple"
      },
      {
        "id": "sltc-library",
        "title": "SLTC Research Library",
        "desc": "Modern multimedia library with individual study rooms, collaborative lounges, and IEEE access.",
        "badge": "Research Library",
        "image": "/images/universities/gallery/sltc/photo1.jpg",
        "tone": "amber"
      }
    ],
    "admissions": {
      "isGovernment": false,
      "eyebrow": "DIRECT & IFSLS DEGREE INTAKES",
      "title": "How to Enroll at SLTC Research University",
      "description": "Admissions are conducted directly in February and September intakes. Sri Lankan students can also study tuition-free through the Ministry of Higher Education Interest Free Student Loan Scheme (IFSLS).",
      "step1Title": "A/L Minimum Criteria & Aptitude",
      "step1Desc": "Engineering requires 3 passes in Combined Maths, Physics, and Chemistry. Computing and Technology degrees accept passes from any A/L stream or Technology stream.",
      "step1Tags": [
        "Local G.C.E. A/L",
        "London Cambridge / Edexcel",
        "Direct Evaluation",
        "IFSLS Loan Option"
      ],
      "step2Title": "Govt Interest Free Student Loan (IFSLS)",
      "step2Desc": "Eligible Sri Lankan students can apply for government funding under the Ministry's IFSLS scheme covering 100% of course tuition.",
      "quotaMerit": "Direct Academic Evaluation",
      "quotaDistrict": "Open Nationwide",
      "quotaSpecial": "Government IFSLS Loan Scheme",
      "quotaNote": "SLTC offers substantial founder scholarships and merit waivers for students with 3 'A' grades in A/L.",
      "step3Title": "Registration & Residential Room Allocation",
      "step3Desc": "Selected undergraduates receive campus admission packs, select on-campus housing, and commence university studies.",
      "portalUrl": "https://apply.sltc.ac.lk",
      "portalLabel": "Apply via SLTC Admissions Portal"
    },
    "officialLinks": [
      {
        "label": "Official Website",
        "url": "https://sltc.ac.lk",
        "description": "Degree portfolio, research faculties, and campus news"
      },
      {
        "label": "Apply Online",
        "url": "https://apply.sltc.ac.lk",
        "description": "Direct student enrollment for upcoming intakes"
      },
      {
        "label": "School of Engineering",
        "url": "https://sltc.ac.lk/school-of-engineering",
        "description": "Washington Accord aligned engineering specialisms"
      },
      {
        "label": "Ministry of Education IFSLS",
        "url": "https://www.mohe.gov.lk",
        "description": "Government interest-free loan application guidelines"
      }
    ]
  }
};

export function getUniversityDetail(slug: string): UniversityDetail | undefined {
  return universityDetails[slug];
}
