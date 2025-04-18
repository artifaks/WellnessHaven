import { Herb } from "@/types";
import { herbs } from "@/data/herbs";
import fs from 'fs';
import path from 'path';

// Define our specialized collections
const collections = {
  // Health-focused collections
  "Immune Support": ["immune", "antiviral", "antibacterial", "infection"],
  "Digestive Health": ["digest", "stomach", "intestin", "bowel", "liver", "gallbladder", "bile", "nausea"],
  "Respiratory Health": ["respiratory", "lung", "bronch", "asthma", "breath", "cough", "cold", "flu", "sinus"],
  "Heart & Circulation": ["heart", "cardio", "circulation", "blood pressure", "cholesterol", "vascular"],
  "Women's Health": ["women", "menstrual", "menopause", "fertility", "pregnancy", "labor", "breast", "uterine"],
  "Men's Health": ["men", "prostate", "testosterone", "libido", "erectile", "sperm"],
  "Brain & Nervous System": ["brain", "nervous", "cognitive", "memory", "focus", "concentration", "anxiety", "depression", "mood", "stress"],
  "Joint & Muscle": ["joint", "muscle", "arthritis", "inflammation", "pain", "rheumatism", "gout"],
  "Skin Health": ["skin", "acne", "eczema", "psoriasis", "rash", "wound", "burn", "scar"],
  "Sleep & Relaxation": ["sleep", "insomnia", "relax", "calm", "anxiety", "stress", "tension"],
  
  // Traditional medicine systems
  "Ayurvedic Herbs": ["ayurved", "ashwagandha", "turmeric", "tulsi", "ginger", "triphala", "shatavari", "brahmi", "neem"],
  "Traditional Chinese": ["chinese", "ginseng", "astragalus", "dong quai", "goji", "schisandra", "he shou wu", "cordyceps", "reishi"],
  "Native American": ["native american", "echinacea", "goldenseal", "black cohosh", "yarrow", "elder"],
  "European Traditional": ["european", "chamomile", "valerian", "milk thistle", "st. john's wort", "feverfew", "nettle"],
  "African Traditional": ["african", "devil's claw", "rooibos", "kanna", "griffonia", "yohimbe"],
  
  // Functional collections
  "Adaptogenic Herbs": ["adaptogen", "stress", "adrenal", "fatigue", "energy", "stamina", "ashwagandha", "rhodiola", "eleuthero", "holy basil", "schisandra"],
  "Antioxidant Rich": ["antioxidant", "free radical", "aging", "longevity", "green tea", "turmeric", "goji", "acai"],
  "Anti-inflammatory": ["inflamm", "arthritis", "pain", "turmeric", "ginger", "boswellia", "devil's claw"],
  "Detoxification": ["detox", "cleanse", "liver", "kidney", "blood", "lymph", "milk thistle", "dandelion", "burdock"],
  
  // Preparation types
  "Culinary Herbs": ["culinary", "cooking", "spice", "flavor", "basil", "oregano", "thyme", "rosemary", "sage", "mint", "cinnamon", "ginger"],
  "Tea Herbs": ["tea", "infusion", "decoction", "chamomile", "mint", "lemon balm", "rooibos", "hibiscus"]
};

// Define common health conditions that herbs may help with
const conditions = {
  "Stress & Anxiety": ["stress", "anxiety", "nervous", "tension", "calm", "relax"],
  "Depression & Mood": ["depression", "mood", "serotonin", "dopamine"],
  "Insomnia & Sleep Issues": ["sleep", "insomnia", "restless", "sedative"],
  "Digestive Disorders": ["digest", "ibs", "crohn", "colitis", "constipation", "diarrhea", "bloating", "gas"],
  "Inflammation": ["inflammation", "inflammatory", "arthritis", "pain", "swelling"],
  "High Blood Pressure": ["blood pressure", "hypertension", "cardiovascular"],
  "High Cholesterol": ["cholesterol", "lipid", "triglyceride"],
  "Diabetes & Blood Sugar": ["diabetes", "blood sugar", "insulin", "glucose"],
  "Immune Deficiency": ["immune", "infection", "virus", "bacteria", "cold", "flu"],
  "Allergies": ["allergy", "allergic", "histamine", "sinus", "hay fever"],
  "Skin Conditions": ["skin", "acne", "eczema", "psoriasis", "dermatitis"],
  "Headaches & Migraines": ["headache", "migraine", "tension headache"],
  "Menstrual Issues": ["menstrual", "period", "pms", "cramp", "heavy bleeding"],
  "Menopausal Symptoms": ["menopause", "hot flash", "night sweat", "hormone"],
  "Prostate Issues": ["prostate", "bph", "urinary", "frequent urination"],
  "Fatigue & Low Energy": ["fatigue", "energy", "exhaustion", "chronic fatigue", "adrenal"],
  "Cognitive Decline": ["cognitive", "memory", "alzheimer", "dementia", "brain fog"],
  "Joint Pain": ["joint", "arthritis", "rheumatism", "gout"],
  "Respiratory Conditions": ["respiratory", "asthma", "bronchitis", "copd", "cough"]
};

// Common warnings for herbs
const commonWarnings = [
  "Consult with a healthcare professional before use, especially if pregnant, nursing, or taking medications.",
  "Keep out of reach of children.",
  "Discontinue use if adverse reactions occur.",
  "Not recommended during pregnancy or breastfeeding without professional guidance.",
  "May interact with certain medications. Consult your healthcare provider before use.",
  "Store in a cool, dry place away from direct sunlight."
];

// Specific warnings for certain herbs
const specificWarnings: Record<string, string[]> = {
  "St. John's Wort": [
    "May interact with many medications including antidepressants, birth control pills, blood thinners, and others.",
    "Can cause photosensitivity (increased sensitivity to sunlight).",
    "Should not be used with prescription antidepressants or other serotonergic drugs."
  ],
  "Kava": [
    "Has been associated with rare cases of liver damage.",
    "Should not be used with alcohol or other drugs that can affect the liver.",
    "Not recommended for people with liver problems."
  ],
  "Ginkgo Biloba": [
    "May increase risk of bleeding, especially when combined with blood thinners.",
    "Should be discontinued at least 2 weeks before surgery.",
    "May interact with medications for diabetes, seizures, and blood disorders."
  ],
  "Valerian": [
    "May cause drowsiness and should not be combined with alcohol or sedative medications.",
    "Should not be taken before driving or operating heavy machinery.",
    "Discontinue use 2 weeks before surgery due to potential interaction with anesthesia."
  ],
  "Licorice": [
    "Long-term use or high doses may cause high blood pressure, low potassium levels, and fluid retention.",
    "Not recommended for people with heart disease, kidney disease, or high blood pressure.",
    "May interact with diuretics, corticosteroids, and other medications."
  ],
  "Ma Huang (Ephedra)": [
    "Banned in many countries due to cardiovascular risks.",
    "Can cause high blood pressure, heart palpitations, and stroke.",
    "Should not be used by people with heart conditions, high blood pressure, or anxiety disorders."
  ],
  "Comfrey": [
    "Contains pyrrolizidine alkaloids that can cause liver damage.",
    "Should only be used externally and for short periods.",
    "Not recommended for use on broken skin or open wounds."
  ]
};

// Common dosage information
const commonDosage = {
  adult: "Follow package instructions or consult with a healthcare professional for appropriate dosing.",
  child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
  elderly: "Start with a lower dose and assess tolerance before increasing to the standard adult dose.",
  pregnant: "Not recommended during pregnancy or breastfeeding without professional guidance.",
  maximum: "Do not exceed recommended dosage. Discontinue use if adverse reactions occur."
};

// Function to check if a string contains any of the keywords
const containsAny = (text: string, keywords: string[]): boolean => {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
};

// Function to find matching collections for an herb
const findCollections = (herb: Herb): string[] => {
  const matchedCollections: string[] = [];
  
  // Check herb name, description, uses, benefits, and category against collection keywords
  const textToCheck = [
    herb.name,
    herb.description,
    ...(herb.uses || []),
    ...(herb.benefits || []),
    herb.category || ""
  ].join(" ").toLowerCase();
  
  // Check each collection
  Object.entries(collections).forEach(([collectionName, keywords]) => {
    if (keywords.some(keyword => textToCheck.includes(keyword.toLowerCase()))) {
      matchedCollections.push(collectionName);
    }
  });
  
  // Limit to 5 most relevant collections
  return matchedCollections.slice(0, 5);
};

// Function to find matching health conditions for an herb
const findConditions = (herb: Herb): string[] => {
  const matchedConditions: string[] = [];
  
  // Check herb description, uses, and benefits against condition keywords
  const textToCheck = [
    herb.description,
    ...(herb.uses || []),
    ...(herb.benefits || [])
  ].join(" ").toLowerCase();
  
  // Check each condition
  Object.entries(conditions).forEach(([conditionName, keywords]) => {
    if (keywords.some(keyword => textToCheck.includes(keyword.toLowerCase()))) {
      matchedConditions.push(conditionName);
    }
  });
  
  // Limit to 8 most relevant conditions
  return matchedConditions.slice(0, 8);
};

// Function to get warnings for an herb
const getWarnings = (herb: Herb): string[] => {
  // Check if there are specific warnings for this herb
  const herbWarnings = specificWarnings[herb.name] || [];
  
  // Add common warnings
  const warnings = [...herbWarnings];
  
  // Add a common warning if we don't have specific ones
  if (warnings.length === 0) {
    warnings.push(commonWarnings[0]);
  }
  
  return warnings;
};

// Function to enhance an herb with collections, conditions, and warnings
const enhanceHerb = (herb: Herb): Herb => {
  return {
    ...herb,
    collections: findCollections(herb),
    conditions: findConditions(herb),
    warnings: getWarnings(herb),
    dosage: { ...commonDosage }
  };
};

// Enhance all herbs
const enhancedHerbs = herbs.map(enhanceHerb);

// Generate the output file content
const outputContent = `import { Herb } from "@/types";

export const herbs: Herb[] = ${JSON.stringify(enhancedHerbs, null, 2)};
`;

// Write to a new file
fs.writeFileSync(
  path.join(process.cwd(), 'src/data/enhanced-herbs.ts'),
  outputContent
);

console.log(`Enhanced ${enhancedHerbs.length} herbs with collections, conditions, and warnings.`);
console.log('Output written to src/data/enhanced-herbs.ts');
