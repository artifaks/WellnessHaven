import { Herb } from "@/types";

// This is a sample enhanced herb with all the new detailed information
export const enhancedHerb: Herb = {
  id: "501",
  name: "Ashwagandha",
  scientificName: "Withania somnifera",
  description: "Ashwagandha is an adaptogenic herb that has been used in Ayurvedic medicine for over 3,000 years. It helps the body resist physiological and psychological stress, improves cognitive function, and supports overall vitality.",
  uses: ["Stress reduction", "Immune support", "Energy enhancement", "Sleep improvement"],
  preparation: "Can be consumed as a powder, capsule, tincture, or tea. Traditionally mixed with warm milk and honey.",
  imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
  benefits: ["Reduces stress and anxiety", "Improves cognitive function", "Enhances physical performance", "Supports immune system", "Balances hormones"],
  category: "Adaptogenic herbs",
  
  // New detailed preparation instructions
  detailedPreparation: {
    decoction: "For a traditional decoction, simmer 1 teaspoon of ashwagandha root in 2 cups of water for 15 minutes. Strain and drink 1 cup twice daily.",
    tincture: "Standard tincture dosage is 2-4ml (40-80 drops) taken 2-3 times daily. For sleep support, take 30-60 minutes before bedtime.",
    capsules: "Standardized root extract capsules typically contain 300-500mg. Take 1-2 capsules twice daily with meals.",
    tea: "Add 1 teaspoon of ashwagandha powder to hot water or milk. Add honey or cinnamon to improve the taste. Drink 1-2 cups daily.",
    poultice: "Mix ashwagandha powder with enough water to form a paste. Apply to affected areas for joint pain or inflammation.",
    oil: "Ashwagandha oil (made by infusing the herb in a carrier oil like sesame) can be massaged into the skin, particularly at the temples and feet before bedtime for improved sleep."
  },
  
  // Dosage information
  dosage: {
    adult: "300-600mg of standardized root extract daily, divided into two doses. Start with a lower dose and gradually increase.",
    child: "Not generally recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
    elderly: "Start with 300mg daily and assess tolerance before increasing. May be particularly beneficial for cognitive support and sleep.",
    pregnant: "Not recommended during pregnancy or breastfeeding due to its potential hormonal effects.",
    maximum: "Do not exceed 1000mg daily of standardized extract. Discontinue use 2 weeks before surgery due to potential sedative effects."
  },
  
  // Health conditions this herb is beneficial for
  conditions: [
    "Anxiety and stress",
    "Insomnia",
    "Hypothyroidism",
    "Adrenal fatigue",
    "Low testosterone",
    "Cognitive decline",
    "Inflammatory conditions",
    "Immune deficiency"
  ],
  
  // Contraindications and warnings
  warnings: [
    "May interact with thyroid medications, sedatives, and immunosuppressants",
    "Not recommended for those with autoimmune conditions like rheumatoid arthritis or lupus",
    "May increase testosterone levels and should be used with caution in hormone-sensitive conditions",
    "Can cause digestive upset in some individuals when taken on an empty stomach",
    "Should be discontinued at least 2 weeks before scheduled surgery"
  ],
  
  // Collections this herb belongs to
  collections: [
    "Ayurvedic Classics",
    "Stress Management",
    "Sleep Support",
    "Men's Vitality",
    "Brain Health"
  ],
  
  // Additional visual elements
  additionalImages: [
    "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500"
  ],
  
  // Scientific research references
  research: [
    "Chandrasekhar K, et al. (2012). A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults. Indian Journal of Psychological Medicine, 34(3), 255-262.",
    "Choudhary D, et al. (2017). Efficacy and Safety of Ashwagandha (Withania somnifera) Root Extract in Improving Memory and Cognitive Functions. Journal of Dietary Supplements, 14(6), 599-612.",
    "Lopresti AL, et al. (2019). An investigation into the stress-relieving and pharmacological actions of an ashwagandha (Withania somnifera) extract: A randomized, double-blind, placebo-controlled study. Medicine, 98(37), e17186."
  ]
};

// Example of how to update existing herbs with enhanced information
export const enhanceExistingHerb = (herb: Herb): Herb => {
  // This function could be used to add enhanced information to existing herbs
  return {
    ...herb,
    detailedPreparation: {
      decoction: `For a traditional decoction, simmer 1 teaspoon of ${herb.name.toLowerCase()} in 2 cups of water for 15 minutes. Strain and drink 1 cup twice daily.`,
      tincture: `Standard tincture dosage is 2-4ml (40-80 drops) taken 2-3 times daily.`,
      capsules: `Standardized extract capsules typically contain 300-500mg. Take 1-2 capsules twice daily with meals.`,
    },
    dosage: {
      adult: "Follow package instructions or consult with a healthcare professional for appropriate dosing.",
      maximum: "Do not exceed recommended dosage. Discontinue use if adverse reactions occur."
    },
    conditions: herb.uses.map(use => use),
    warnings: [
      "Consult with a healthcare professional before use, especially if pregnant, nursing, or taking medications.",
      "Keep out of reach of children."
    ],
    collections: [herb.category || "General Herbs"]
  };
};
