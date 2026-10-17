import assets from "@/lib/design/assets.json";
export const faculties = [
 ["Engineering","engineering · Galle",assets.university.imgIconLayers,"tone-ice"],
 ["Medicine","health sciences · Galle",assets.university.imgIconStethoscope,"tone-peach"],
 ["Science","computing · natural sciences",assets.university.imgIconCpu,"tone-mint"],
 ["Agriculture","farming · green technology",assets.university.imgIconLeaf,""],
 ["Management & Finance","business · management",assets.university.imgIconBriefcase,"tone-lavender"],
 ["Humanities & Social Sciences","arts · social sciences",assets.university.imgIconUsers,"tone-peach"],
 ["Fisheries & Marine Sciences","marine · freshwater",assets.university.imgIconFish,"tone-ice"],
 ["Allied Health Sciences","nursing · pharmacy · MLS",assets.university.imgIconGraduation1,"tone-mint"],
 ["Technology","engineering · ICT · biosystems",assets.university.imgIconCpu,""],
 ["Graduate Studies","postgraduate & research",assets.university.imgIconBook,"tone-lavender"],
];
export const degreeGroups = [
 {title:"Engineering",faculty:"Faculty of Engineering",icon:assets.university.imgIconLayers1,tone:"tone-ice",degrees:["BSc Engineering","Civil & Environmental","Computer Engineering","Electrical & Information","Marine & Naval Architecture","Mechanical & Manufacturing"]},
 {title:"Health & Medicine",faculty:"Medicine + Allied Health",icon:assets.university.imgIconStethoscope1,tone:"tone-peach",degrees:["MBBS Medicine","Pharmacy","Medical Laboratory Science","Nursing"]},
 {title:"Science & Computing",faculty:"Faculty of Science",icon:assets.university.imgIconCpu1,tone:"tone-mint",degrees:["BSc Biological Science","BSc Physical Science","Computer Science","Financial Mathematics & Industrial Statistics"]},
 {title:"Technology",faculty:"Faculty of Technology",icon:assets.university.imgIconCpu,tone:"",degrees:["Engineering Technology (Hons)","Information & Communication Technology (Hons)","Biosystems Technology (Hons)"]},
 {title:"Agriculture",faculty:"Faculty of Agriculture",icon:assets.university.imgIconLeaf1,tone:"tone-mint",degrees:["Agricultural Resource Management & Technology","Agribusiness Management","Green Technology"]},
 {title:"Other disciplines",faculty:"Additional faculties",icon:assets.university.imgIconBook1,tone:"tone-lavender",degrees:["Arts / Humanities","Management / BBA","Fisheries & Marine Sciences","Marine & Fresh Water Sciences","Postgraduate study via FGS"]},
];
