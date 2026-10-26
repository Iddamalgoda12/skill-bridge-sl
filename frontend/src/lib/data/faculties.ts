import assets from "@/lib/design/assets.json";

// Titles and blurbs live in the message files under universityDetail.faculties.<id>.
export const faculties = [
  { id: "engineering", icon: assets.university.imgIconLayers, tone: "tone-ice" },
  { id: "medicine", icon: assets.university.imgIconStethoscope, tone: "tone-peach" },
  { id: "science", icon: assets.university.imgIconCpu, tone: "tone-mint" },
  { id: "agriculture", icon: assets.university.imgIconLeaf, tone: "" },
  { id: "management", icon: assets.university.imgIconBriefcase, tone: "tone-lavender" },
  { id: "humanities", icon: assets.university.imgIconUsers, tone: "tone-peach" },
  { id: "fisheries", icon: assets.university.imgIconFish, tone: "tone-ice" },
  { id: "allied", icon: assets.university.imgIconGraduation1, tone: "tone-mint" },
  { id: "technology", icon: assets.university.imgIconCpu, tone: "" },
  { id: "graduate", icon: assets.university.imgIconBook, tone: "tone-lavender" },
] as const;

// Group titles are translated (universityDetail.degreeGroups.<id>); degree names are official programme titles.
export const degreeGroups = [
  { id: "engineering", icon: assets.university.imgIconLayers1, tone: "tone-ice", degrees: ["BSc Engineering", "Civil & Environmental", "Computer Engineering", "Electrical & Information", "Marine & Naval Architecture", "Mechanical & Manufacturing"] },
  { id: "health", icon: assets.university.imgIconStethoscope1, tone: "tone-peach", degrees: ["MBBS Medicine", "Pharmacy", "Medical Laboratory Science", "Nursing"] },
  { id: "science", icon: assets.university.imgIconCpu1, tone: "tone-mint", degrees: ["BSc Biological Science", "BSc Physical Science", "Computer Science", "Financial Mathematics & Industrial Statistics"] },
  { id: "technology", icon: assets.university.imgIconCpu, tone: "", degrees: ["Engineering Technology (Hons)", "Information & Communication Technology (Hons)", "Biosystems Technology (Hons)"] },
  { id: "agriculture", icon: assets.university.imgIconLeaf1, tone: "tone-mint", degrees: ["Agricultural Resource Management & Technology", "Agribusiness Management", "Green Technology"] },
  { id: "other", icon: assets.university.imgIconBook1, tone: "tone-lavender", degrees: ["Arts / Humanities", "Management / BBA", "Fisheries & Marine Sciences", "Marine & Fresh Water Sciences", "Postgraduate study via FGS"] },
] as const;
