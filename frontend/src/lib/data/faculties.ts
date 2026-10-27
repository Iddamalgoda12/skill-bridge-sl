import assets from "@/lib/design/assets.json";

export interface FacultyData {
  id: "engineering" | "medicine" | "science" | "agriculture" | "management" | "humanities" | "fisheries" | "allied" | "technology" | "graduate";
  icon: string;
  tone: string;
  campusZone: "matara" | "galle" | "kamburupitiya";
  location: string;
  established: number | string;
  website: string;
  stream: string;
  departments: string[];
}

// Titles and blurbs live in the message files under universityDetail.faculties.<id>.
export const faculties: FacultyData[] = [
  {
    id: "engineering",
    icon: assets.university.imgIconLayers,
    tone: "tone-ice",
    campusZone: "galle",
    location: "Hapugala, Galle",
    established: 1999,
    website: "https://www.eng.ruh.ac.lk",
    stream: "Physical Science (Combined Maths, Physics, Chemistry / ICT)",
    departments: [
      "Civil & Environmental Engineering",
      "Electrical & Information Engineering",
      "Mechanical & Manufacturing Engineering",
      "Computer Engineering",
      "Interdisciplinary Studies",
    ],
  },
  {
    id: "medicine",
    icon: assets.university.imgIconStethoscope,
    tone: "tone-peach",
    campusZone: "galle",
    location: "Karapitiya, Galle",
    established: 1980,
    website: "https://www.med.ruh.ac.lk",
    stream: "Biological Science (Biology, Chemistry, Physics)",
    departments: [
      "Anatomy, Physiology & Biochemistry",
      "Medicine, Surgery & Paediatrics",
      "Obstetrics & Gynaecology, Psychiatry",
      "Clinical Training: National Hospital Galle (Karapitiya)",
    ],
  },
  {
    id: "science",
    icon: assets.university.imgIconCpu,
    tone: "tone-mint",
    campusZone: "matara",
    location: "Wellamadama, Matara",
    established: 1978,
    website: "https://www.sci.ruh.ac.lk",
    stream: "Physical Science & Biological Science",
    departments: [
      "Mathematics & Computer Science",
      "Physics & Electronics",
      "Chemistry",
      "Botany & Zoology",
    ],
  },
  {
    id: "management",
    icon: assets.university.imgIconBriefcase,
    tone: "tone-lavender",
    campusZone: "matara",
    location: "Wellamadama, Matara",
    established: 2003,
    website: "https://www.mgt.ruh.ac.lk",
    stream: "Commerce & Direct A/L Entry",
    departments: [
      "Accounting & Finance",
      "Management & Entrepreneurship",
      "Marketing",
      "Human Resource Management",
    ],
  },
  {
    id: "fisheries",
    icon: assets.university.imgIconFish,
    tone: "tone-ice",
    campusZone: "matara",
    location: "Wellamadama, Matara (Oceanfront)",
    established: 2005,
    website: "https://www.fish.ruh.ac.lk",
    stream: "Biological Science & Physical Science",
    departments: [
      "Fisheries & Aquaculture",
      "Limnology & Water Technology",
      "Oceanography & Marine Geology",
      "Coastal Marine Research Stations",
    ],
  },
  {
    id: "technology",
    icon: assets.university.imgIconCpu,
    tone: "",
    campusZone: "kamburupitiya",
    location: "Kamburupitiya, Matara",
    established: 2016,
    website: "https://www.tec.ruh.ac.lk",
    stream: "Technology Stream (ET / BST / ICT)",
    departments: [
      "Engineering Technology",
      "Biosystems Technology",
      "Information & Communication Technology (ICT)",
      "Multidisciplinary Technology Studies",
    ],
  },
  {
    id: "agriculture",
    icon: assets.university.imgIconLeaf,
    tone: "tone-mint",
    campusZone: "kamburupitiya",
    location: "Mapalana, Kamburupitiya",
    established: 1978,
    website: "https://www.agri.ruh.ac.lk",
    stream: "Biological Science",
    departments: [
      "Agricultural Resource Management & Technology",
      "Agribusiness Management & Economics",
      "Green Technology & Farm Machinery",
      "Food Science & Soil Systems",
    ],
  },
  {
    id: "allied",
    icon: assets.university.imgIconGraduation1,
    tone: "tone-mint",
    campusZone: "galle",
    location: "Karapitiya / Uluwitike, Galle",
    established: 2007,
    website: "https://www.ahs.ruh.ac.lk",
    stream: "Biological Science",
    departments: [
      "Department of Nursing",
      "Department of Pharmacy",
      "Department of Medical Laboratory Science (MLS)",
    ],
  },
  {
    id: "humanities",
    icon: assets.university.imgIconUsers,
    tone: "tone-peach",
    campusZone: "matara",
    location: "Wellamadama, Matara",
    established: 1978,
    website: "https://www.hss.ruh.ac.lk",
    stream: "Arts",
    departments: [
      "Economics & Public Policy",
      "History, Archaeology & Geography",
      "Sociology & Social Work",
      "Sinhala, English & Linguistics",
    ],
  },
  {
    id: "graduate",
    icon: assets.university.imgIconBook,
    tone: "tone-lavender",
    campusZone: "matara",
    location: "Wellamadama, Matara",
    established: "Postgraduate Hub",
    website: "https://www.fgs.ruh.ac.lk",
    stream: "University Graduates (BSc / BA / MBBS)",
    departments: [
      "MPhil & PhD Research Programs",
      "Multidisciplinary Master’s Degrees",
      "Postgraduate Diplomas",
    ],
  },
];

// Group titles are translated (universityDetail.degreeGroups.<id>); degree names are official programme titles.
export const degreeGroups = [
  { id: "engineering", icon: assets.university.imgIconLayers1, tone: "tone-ice", degrees: ["BSc Engineering", "Civil & Environmental", "Computer Engineering", "Electrical & Information", "Marine & Naval Architecture", "Mechanical & Manufacturing"] },
  { id: "health", icon: assets.university.imgIconStethoscope1, tone: "tone-peach", degrees: ["MBBS Medicine", "Pharmacy", "Medical Laboratory Science", "Nursing"] },
  { id: "science", icon: assets.university.imgIconCpu1, tone: "tone-mint", degrees: ["BSc Biological Science", "BSc Physical Science", "Computer Science", "Financial Mathematics & Industrial Statistics"] },
  { id: "technology", icon: assets.university.imgIconCpu, tone: "", degrees: ["Engineering Technology (Hons)", "Information & Communication Technology (Hons)", "Biosystems Technology (Hons)"] },
  { id: "agriculture", icon: assets.university.imgIconLeaf1, tone: "tone-mint", degrees: ["Agricultural Resource Management & Technology", "Agribusiness Management", "Green Technology"] },
  { id: "other", icon: assets.university.imgIconBook1, tone: "tone-lavender", degrees: ["Arts / Humanities", "Management / BBA", "Fisheries & Marine Sciences", "Marine & Fresh Water Sciences", "Postgraduate study via FGS"] },
] as const;
