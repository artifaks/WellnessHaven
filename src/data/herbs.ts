
import { Herb } from "@/types";

export const herbs: Herb[] = [
// Duplicate ID check (temporary, for debugging)
// Uncomment and run with ts-node or in your app to see duplicate IDs
// (() => {
//   const idSet = new Set();
//   herbs.forEach(h => {
//     if (idSet.has(h.id)) {
//       console.log('Duplicate ID:', h.id, h.name);
//     }
//     idSet.add(h.id);
//   });
// })();

  {
    id: "1",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "Echinacea is a flowering plant used to boost the immune system and fight infections. Native to North America, it has been used in traditional medicine for centuries.",
    uses: ["Immune support", "Cold and flu prevention", "Wound healing"],
    preparation: "Echinacea can be consumed as a tea, tincture, or in capsule form. For tea, steep 1-2 teaspoons of dried herb in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1550679566-43a082207f5d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune system", "Reduces inflammation", "May shorten duration of colds and flu", "Contains antioxidants"],
    category: "Immune system",
    collections: ["Immune Support", "Native American", "Respiratory Health", "Anti-inflammatory", "Tea Herbs"],
    conditions: ["Immune Deficiency", "Respiratory Conditions", "Inflammation", "Allergies"],
    warnings: ["Consult with a healthcare professional before use, especially if pregnant, nursing, or taking medications.", "May cause allergic reactions in people allergic to plants in the daisy family."],
    dosage: {
      adult: "300-500mg capsules 3 times daily or 2-3ml of tincture 3 times daily.",
      child: "Half the adult dose for children 6-12 years. Not recommended for children under 6 without professional guidance.",
      elderly: "Standard adult dose, but start with a lower dose and assess tolerance.",
      pregnant: "Not recommended during pregnancy or breastfeeding without professional guidance.",
      maximum: "Do not use for more than 10 consecutive days, as prolonged use may suppress immune function."
    },
    detailedPreparation: {
      decoction: "Not typically prepared as a decoction as this may damage the active compounds.",
      tincture: "Combine 1 part dried Echinacea root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-3ml up to 3 times daily.",
      capsules: "Standard dose is 300-500mg of dried herb or extract, taken 3 times daily at the first sign of cold or flu.",
      tea: "Steep 1-2 teaspoons of dried herb in 8oz hot water for 10-15 minutes. Drink 3 cups daily at the onset of symptoms."
    }
  },
  {
    id: "2",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "Chamomile is a gentle herb known for its calming effects. It has been used for centuries in traditional medicine for its anti-inflammatory and mild sedative properties.",
    uses: ["Sleep aid", "Digestive support", "Anxiety relief", "Skin care"],
    preparation: "For tea, steep 1 tablespoon of dried chamomile flowers in hot water for 5-10 minutes. Can also be used in tinctures or as a topical preparation.",
    imageUrl: "https://images.unsplash.com/photo-1586802978403-6406fb3ddfff?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Supports digestive health", "Reduces inflammation", "May improve sleep quality"],
    category: "Nervous system",
    collections: ["Sleep & Relaxation", "Digestive Health", "European Traditional", "Tea Herbs", "Skin Health"],
    conditions: ["Stress & Anxiety", "Insomnia & Sleep Issues", "Digestive Disorders", "Inflammation", "Skin Conditions"],
    warnings: ["May cause allergic reactions in people allergic to plants in the daisy family, including ragweed.", "Consult with a healthcare professional before use if taking blood thinners or sedative medications."],
    dosage: {
      adult: "1-3 cups of tea daily, 1-4ml of tincture 3 times daily, or as directed on supplement packaging.",
      child: "Weak tea (half the adult strength) may be given to children over 2 years for occasional use. Consult a pediatrician first.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Generally considered safe in moderate amounts during pregnancy, but consult with a healthcare provider first.",
      maximum: "No established maximum dose, but excessive amounts may cause drowsiness."
    },
    detailedPreparation: {
      tea: "Steep 1 tablespoon of dried chamomile flowers in 8oz hot (not boiling) water for 5-10 minutes. For a stronger effect, cover while steeping. Strain and add honey if desired.",
      tincture: "Combine 1 part dried chamomile flowers with 5 parts 40% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-4ml up to 3 times daily.",
      oil: "Infuse dried chamomile flowers in a carrier oil like olive or jojoba oil for 2-4 weeks. Strain and use topically for skin conditions or massage.",
      poultice: "Mix ground dried flowers with enough warm water to make a paste. Apply directly to skin irritations, minor wounds, or inflamed areas."
    }
  },
  {
    id: "3",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "Lavender is known for its distinctive floral aroma and calming properties. It's widely used in aromatherapy and traditional medicine for stress relief and skin care.",
    uses: ["Stress relief", "Sleep improvement", "Headache relief", "Skin care"],
    preparation: "Lavender can be used as an essential oil for aromatherapy, brewed as a tea, or applied topically in diluted form for skin issues.",
    imageUrl: "https://images.unsplash.com/photo-1595925863703-f04bf7df3026?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety and stress", "Improves sleep quality", "Has antiseptic properties", "Soothes skin irritations"],
    category: "Nervous system",
    collections: ["Sleep & Relaxation", "European Traditional", "Skin Health", "Culinary Herbs", "Aromatherapy"],
    conditions: ["Stress & Anxiety", "Insomnia & Sleep Issues", "Headaches & Migraines", "Skin Conditions"],
    warnings: ["May cause skin irritation in some individuals when applied topically.", "Essential oil should always be diluted before topical use and never ingested."],
    dosage: {
      adult: "1-2 cups of tea daily, 1-4 drops of essential oil in diffuser, or as directed on supplement packaging.",
      child: "Diluted essential oil may be used for aromatherapy. Tea should be given in small amounts and only to older children.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Tea is generally considered safe during pregnancy, but essential oil should be used with caution and only after consulting a healthcare provider.",
      maximum: "No established maximum dose for tea, but essential oil should be used sparingly and always diluted."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried lavender flowers in 8oz hot water for 5-7 minutes. Strain and add honey if desired. Drink 1-2 cups daily for relaxation or before bedtime for sleep support.",
      oil: "For massage oil, add 5-10 drops of lavender essential oil to 1 ounce of carrier oil like jojoba or sweet almond. For bath, add 5-7 drops to warm bathwater.",
      poultice: "Mix dried lavender flowers with enough warm water to make a paste. Apply to temples for headache relief or to minor skin irritations.",
      tincture: "Combine 1 part dried lavender flowers with 5 parts 40% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml up to 3 times daily."
    }
  },
  {
    id: "4",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    description: "Turmeric is a bright yellow spice with powerful anti-inflammatory and antioxidant properties. It has been used in Ayurvedic medicine for thousands of years.",
    uses: ["Pain relief", "Inflammation reduction", "Digestive aid", "Immune support"],
    preparation: "Can be used as a spice in cooking, taken as a supplement, or prepared as golden milk by mixing with warm milk and other spices.",
    imageUrl: "https://images.unsplash.com/photo-1589740986324-2297effe9f36?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Contains powerful antioxidants", "May improve brain function", "Supports joint health"],
    category: "Joint health",
    collections: ["Anti-inflammatory", "Ayurvedic Herbs", "Digestive Health", "Joint & Muscle", "Culinary Herbs"],
    conditions: ["Inflammation", "Joint Pain", "Digestive Disorders", "Cognitive Decline", "High Cholesterol"],
    warnings: ["May interact with blood thinners and increase bleeding risk.", "May lower blood sugar and should be used with caution by diabetics.", "Avoid before surgery due to blood-thinning effects."],
    dosage: {
      adult: "500-2000mg of turmeric or 400-600mg of curcumin (extract) daily, divided into 1-3 doses.",
      child: "Not typically recommended for children except in culinary amounts.",
      elderly: "Start with lower doses (500mg) and increase gradually if needed.",
      pregnant: "Safe in food amounts, but medicinal doses should be avoided during pregnancy and breastfeeding.",
      maximum: "Do not exceed 8000mg of turmeric or 1500mg of curcumin extract daily."
    },
    detailedPreparation: {
      tea: "Simmer 1 teaspoon of turmeric powder with 1/4 teaspoon of black pepper in 2 cups of water for 10 minutes. Strain and add honey and lemon to taste.",
      capsules: "Standard dose is 500mg capsules, taken 1-3 times daily with food. Look for products with added black pepper (piperine) for better absorption.",
      oil: "Mix 1 tablespoon of turmeric powder with 3 tablespoons of a carrier oil like coconut or sesame oil. Can be applied to joints or used in cooking.",
      decoction: "Golden Milk: Simmer 1 teaspoon turmeric powder, 1/4 teaspoon black pepper, 1/2 teaspoon cinnamon, and a small piece of ginger in 2 cups of milk or plant milk for 10 minutes. Strain and add honey to taste."
    }
  },
  {
    id: "5",
    name: "Peppermint",
    scientificName: "Mentha × piperita",
    description: "Peppermint is an aromatic herb known for its refreshing flavor and digestive benefits. It contains menthol, which gives it cooling and soothing properties.",
    uses: ["Digestive aid", "Headache relief", "Breath freshener", "Cold relief"],
    preparation: "Peppermint can be brewed as a tea, used as an essential oil, or taken in capsule form for digestive issues.",
    imageUrl: "https://images.unsplash.com/photo-1628556270448-4d4e4148e8cc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves digestive discomfort", "Reduces nausea", "Alleviates tension headaches", "Freshens breath"],
    category: "Digestive system",
    collections: ["Digestive Health", "European Traditional", "Tea Herbs", "Culinary Herbs", "Aromatherapy"],
    conditions: ["Digestive Disorders", "Headaches & Migraines", "Respiratory Conditions", "Nausea", "IBS"],
    warnings: ["May worsen acid reflux or GERD symptoms in some individuals.", "Not recommended for infants or very young children.", "May interact with certain medications including cyclosporine and some diabetes drugs."],
    dosage: {
      adult: "1-2 cups of tea daily, 1-2 enteric-coated capsules (250-500mg) 2-3 times daily, or 1-2 drops of essential oil in diffuser.",
      child: "Diluted tea for children over 6. Essential oil should be used with caution and only in diffuser, not topically on children.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Tea is generally considered safe during pregnancy in moderate amounts, but peppermint supplements should be avoided.",
      maximum: "Do not exceed 4-5 cups of tea daily or 6 capsules per day."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried peppermint leaves in 8oz hot water for 5-7 minutes. Strain and drink after meals for digestive support or at onset of headache. Can be sweetened with honey if desired.",
      tincture: "Combine 1 part dried peppermint leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml up to 3 times daily.",
      oil: "For headache relief, dilute 1-2 drops of peppermint essential oil in 1 teaspoon of carrier oil and apply to temples (avoid eye area). For diffuser, use 3-5 drops.",
      capsules: "Enteric-coated peppermint oil capsules (250-500mg) can be taken 2-3 times daily between meals for IBS or digestive discomfort."
    }
  },
  {
    id: "6",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    description: "Ginger is a pungent, spicy root with powerful medicinal properties. It has been used in traditional medicine systems for thousands of years to treat various ailments.",
    uses: ["Nausea relief", "Digestive support", "Pain management", "Immune support"],
    preparation: "Ginger can be used fresh, dried, powdered, or as an oil or juice. It can be added to food, brewed as tea, or taken as a supplement.",
    imageUrl: "https://images.unsplash.com/photo-1593493651723-f84099b523cd?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves nausea and morning sickness", "Reduces muscle pain and soreness", "Has anti-inflammatory effects", "Supports digestive health"],
    category: "Digestive health",
    collections: ["Digestive Health", "Anti-inflammatory", "Ayurvedic Herbs", "Culinary Herbs", "Tea Herbs"],
    conditions: ["Nausea", "Digestive Disorders", "Inflammation", "Joint Pain", "Motion Sickness", "Morning Sickness"],
    warnings: ["May increase bile production and should be used with caution in people with gallstones.", "May interact with blood thinners, diabetes medications, and high blood pressure medications.", "Large amounts may cause heartburn in some individuals."],
    dosage: {
      adult: "1-4g of fresh root daily, 0.25-1g of dried powder 3 times daily, or 1-2 cups of tea daily.",
      child: "Small amounts in food are safe for children. For medicinal use in children over 6, use 1/4 to 1/2 the adult dose.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Generally considered safe during pregnancy, especially for morning sickness (typically 250mg 4 times daily).",
      maximum: "Do not exceed 4g of dried ginger per day, as higher doses may cause digestive discomfort."
    },
    detailedPreparation: {
      tea: "Simmer 1-inch piece of fresh ginger (sliced or grated) in 2 cups of water for 10-15 minutes. Strain and add honey and lemon to taste. For nausea, sip slowly throughout the day.",
      tincture: "Combine 1 part fresh grated ginger with 2 parts 80-100 proof alcohol. Let sit for 6-8 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml up to 3 times daily.",
      capsules: "Dried ginger powder capsules (typically 500-1000mg) can be taken 2-3 times daily with food.",
      decoction: "For stronger medicinal effects, simmer 2 tablespoons fresh grated ginger in 3 cups water for 15-20 minutes until reduced by 1/3. Strain and drink 1/2 cup as needed for nausea or inflammation."
    }
  },
  {
    id: "7",
    name: "Valerian",
    scientificName: "Valeriana officinalis",
    description: "Valerian is a herb native to Europe and Asia, known for its sedative effects. It has been used since ancient times to promote relaxation and sleep.",
    uses: ["Sleep aid", "Anxiety relief", "Stress management", "Menstrual cramp relief"],
    preparation: "Valerian is commonly consumed as a tea, tincture, or in capsule form. For tea, steep 1 teaspoon of dried root in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1568636678306-f8336e6a342b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves sleep quality", "Reduces anxiety", "May help with menstrual cramps", "Promotes relaxation"],
    category: "Nervous system",
    collections: ["Sleep & Relaxation", "European Traditional", "Nervous System Herbs", "Women's Health", "Tea Herbs"],
    conditions: ["Insomnia & Sleep Issues", "Stress & Anxiety", "Menstrual Issues", "Restlessness", "Nervous Tension"],
    warnings: [
      "May cause drowsiness and should not be combined with alcohol, sedatives, or sleep medications.",
      "Should not be taken before driving or operating heavy machinery.",
      "Discontinue use 2 weeks before surgery due to potential interaction with anesthesia.",
      "May cause morning drowsiness if taken at night for sleep."
    ],
    dosage: {
      adult: "300-600mg of dried valerian root extract 1-2 hours before bedtime, or 2-3g of dried root as tea.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Start with a lower dose (300mg) and assess tolerance before increasing.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data.",
      maximum: "Do not exceed 900mg per day of extract or 15g per day of dried herb."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried valerian root in 8oz hot water for 10-15 minutes. The tea has a strong, unpleasant odor but can be improved with honey and lemon. Drink 30-60 minutes before bedtime for sleep support.",
      tincture: "Combine 1 part dried valerian root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 30-60 minutes before bedtime.",
      capsules: "Standardized extract capsules (typically 300-600mg) can be taken 1-2 hours before bedtime for sleep, or smaller doses (300mg) can be taken 2-3 times daily for anxiety.",
      decoction: "Not recommended for valerian as boiling can damage some of the active compounds."
    }
  },
  {
    id: "8",
    name: "Elderberry",
    scientificName: "Sambucus nigra",
    description: "Elderberry is a dark purple berry that has been used in folk medicine for centuries. It's packed with antioxidants and vitamins that may boost your immune system.",
    uses: ["Immune support", "Cold and flu relief", "Sinus infection relief", "General wellness"],
    preparation: "Elderberry can be consumed as a syrup, tincture, tea, or in lozenge form. Commercial preparations are widely available.",
    imageUrl: "https://images.unsplash.com/photo-1606559099461-e9d7b4e2f67b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "Rich in antioxidants", "May shorten duration of colds", "Supports respiratory health"],
    category: "Immune system",
    collections: ["Immune Support", "European Traditional", "Respiratory Health", "Antioxidant Rich", "Berry Herbs"],
    conditions: ["Immune Deficiency", "Cold and Flu", "Respiratory Conditions", "Sinus Infections", "Viral Infections"],
    warnings: [
      "Raw, unripe elderberries contain a chemical that can cause nausea, vomiting, and diarrhea.",
      "Elderberry may interact with immune-suppressing drugs and diuretics.",
      "Not recommended for children under 12 without professional guidance.",
      "Discontinue use 2 weeks before surgery due to potential immune system effects."
    ],
    dosage: {
      adult: "15ml (1 tablespoon) of standardized elderberry syrup 4 times daily during illness, or 1 teaspoon daily for prevention.",
      child: "Children over 12 can take half the adult dose. For younger children, consult a healthcare provider.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Limited data on safety during pregnancy and breastfeeding. Consult healthcare provider before use.",
      maximum: "Do not exceed 60ml (4 tablespoons) of elderberry syrup per day during acute illness."
    },
    detailedPreparation: {
      syrup: "Combine 1 cup dried elderberries with 3 cups water. Bring to a boil, reduce heat, and simmer for 30-45 minutes until liquid is reduced by half. Strain, add 1 cup honey while still warm, and mix well. Store in refrigerator for up to 3 months.",
      tea: "Steep 1-2 teaspoons of dried elderberries or elderflowers in 8oz hot water for 10-15 minutes. Strain and add honey if desired. Drink up to 3 cups daily during illness.",
      tincture: "Combine 1 part dried elderberries with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water up to 4 times daily.",
      decoction: "Simmer 2 tablespoons dried elderberries in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup 2-3 times daily during illness."
    }
  },
  {
    id: "9",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "Ashwagandha is an adaptogenic herb used in Ayurvedic medicine. It helps the body manage stress and promotes overall wellness.",
    uses: ["Stress management", "Energy enhancement", "Immune support", "Sleep improvement"],
    preparation: "Commonly taken as a powder mixed with warm milk or water, or in capsule form. Typical dose is 300-500mg twice daily.",
    imageUrl: "https://images.unsplash.com/photo-1605126947724-36e35aa47ff6?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "May improve brain function", "Supports adrenal health", "May enhance physical performance"],
    category: "Adaptogenic",
    collections: ["Adaptogenic Herbs", "Ayurvedic Herbs", "Sleep & Relaxation", "Brain & Nervous System", "Men's Health"],
    conditions: ["Stress & Anxiety", "Fatigue & Low Energy", "Insomnia & Sleep Issues", "Cognitive Decline", "Thyroid Issues"],
    warnings: [
      "May interact with thyroid medications, sedatives, and immunosuppressants.",
      "Not recommended for those with autoimmune conditions like rheumatoid arthritis or lupus.",
      "May increase testosterone levels and should be used with caution in hormone-sensitive conditions.",
      "Can cause digestive upset in some individuals when taken on an empty stomach.",
      "Should be discontinued at least 2 weeks before scheduled surgery."
    ],
    dosage: {
      adult: "300-600mg of standardized root extract daily, divided into two doses. Start with a lower dose and gradually increase.",
      child: "Not generally recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Start with 300mg daily and assess tolerance before increasing. May be particularly beneficial for cognitive support and sleep.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to its potential hormonal effects.",
      maximum: "Do not exceed 1000mg daily of standardized extract. Discontinue use 2 weeks before surgery due to potential sedative effects."
    },
    detailedPreparation: {
      tea: "Traditional method: Simmer 1 teaspoon of ashwagandha root powder in 1 cup of water for 10 minutes. Strain and add honey and milk to taste. Drink 1-2 cups daily.",
      capsules: "Standardized root extract capsules (typically 300-500mg) can be taken 1-2 times daily with meals. Look for products standardized to contain at least 1-5% withanolides.",
      decoction: "Ashwagandha Milk (traditional): Simmer 1 teaspoon ashwagandha powder in 1 cup milk with a pinch of cardamom for 5-10 minutes. Add honey to taste. Drink before bedtime for improved sleep.",
      oil: "For external use, ashwagandha oil can be massaged into the scalp to promote hair health or onto joints for pain relief. Mix 1 tablespoon ashwagandha powder with 1/2 cup sesame oil and warm gently."
    }
  },
  {
    id: "10",
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    description: "St. John's Wort is a yellow-flowering plant that has been used for centuries for mental health conditions and wound healing.",
    uses: ["Mood support", "Wound healing", "Menopausal symptom relief", "Nerve pain relief"],
    preparation: "Available as tea, capsules, or tinctures. For tea, steep 1-2 teaspoons of dried herb in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1550656958-58b8e9df9e11?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May improve mood", "Contains anti-inflammatory compounds", "Supports nervous system health", "Has antiviral properties"],
    category: "Nervous system",
    collections: ["Brain & Nervous System", "European Traditional", "Women's Health", "Emotional balance herbs", "Anti-inflammatory"],
    conditions: ["Depression & Mood", "Menopausal Symptoms", "Nerve Pain", "Wound Healing", "Seasonal Affective Disorder"],
    warnings: [
      "May interact with many medications including antidepressants, birth control pills, blood thinners, and others.",
      "Can cause photosensitivity (increased sensitivity to sunlight).",
      "Should not be used with prescription antidepressants or other serotonergic drugs.",
      "May reduce the effectiveness of some medications including chemotherapy, HIV drugs, and organ transplant medications.",
      "Not recommended for use during pregnancy or breastfeeding."
    ],
    dosage: {
      adult: "300-900mg of standardized extract (0.3% hypericin) daily, divided into 3 doses, or 2-4g of dried herb as tea 2-3 times daily.",
      child: "Not recommended for children under 18 without professional guidance.",
      elderly: "Start with lower doses (300mg daily) and increase gradually if needed.",
      pregnant: "Not recommended during pregnancy or breastfeeding.",
      maximum: "Do not exceed 1800mg of standardized extract daily. Effects may take 4-6 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried herb in 8oz hot water for 10 minutes. Strain and drink up to 3 times daily. The tea has a slightly bitter taste that can be improved with honey.",
      tincture: "Standard dose is 2-4ml (40-80 drops) of tincture in water, taken 3 times daily. Look for tinctures standardized to contain 0.3% hypericin.",
      capsules: "Standardized extract capsules (typically 300mg) can be taken 3 times daily with meals. Look for products standardized to 0.3% hypericin or 3-5% hyperforin.",
      oil: "St. John's Wort oil (red oil) can be made by infusing the flowers in olive oil for 2-6 weeks in sunlight until the oil turns red. Apply topically to wounds, bruises, or areas of nerve pain."
    }
  },
  {
    id: "11",
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    description: "Rosemary is an aromatic herb with needle-like leaves, known for its cognitive and digestive benefits. It has been used in traditional medicine for centuries.",
    uses: ["Memory enhancement", "Hair growth", "Digestion support", "Antioxidant"],
    preparation: "Can be used fresh or dried in cooking, steeped as a tea, or infused in oil for topical applications.",
    imageUrl: "https://images.unsplash.com/photo-1558583055-d7ac93102eb6?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory and concentration", "Contains antioxidants", "Supports digestive health", "May promote hair growth"],
    category: "Cognitive health",
    collections: ["Brain & Nervous System", "European Traditional", "Culinary Herbs", "Aromatherapy", "Antioxidant Rich"],
    conditions: ["Cognitive Decline", "Poor Circulation", "Hair Loss", "Digestive Disorders", "Muscle Pain"],
    warnings: [
      "Large amounts may cause vomiting, spasms, or pulmonary edema in some individuals.",
      "May interact with blood thinners, ACE inhibitors, diuretics, and lithium.",
      "May stimulate menstruation and should be avoided in pregnancy.",
      "May lower blood sugar levels and should be used with caution by diabetics."
    ],
    dosage: {
      adult: "4-6g of dried herb daily as tea, 2-4ml of liquid extract 2-3 times daily, or 2-5 drops of essential oil in diffuser.",
      child: "Not recommended in medicinal amounts for children under 12. Culinary use is generally safe.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals and may be particularly beneficial for memory support.",
      pregnant: "Not recommended during pregnancy as it may stimulate menstruation. Culinary amounts are generally considered safe.",
      maximum: "Do not exceed 6g of dried herb or 6ml of liquid extract daily. Essential oil should never be taken internally."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried rosemary leaves in 8oz hot water for 5-10 minutes. Strain and add honey if desired. Drink 1-2 cups daily for cognitive benefits.",
      tincture: "Combine 1 part dried rosemary with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water up to 3 times daily.",
      oil: "For hair growth and scalp health: Infuse 2-3 sprigs of fresh rosemary in 1 cup of olive or coconut oil for 2-4 weeks. Strain and massage into scalp 2-3 times weekly, leave on for at least 30 minutes before washing.",
      decoction: "For stronger medicinal effects, simmer 1 tablespoon dried rosemary in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup 2-3 times daily for memory enhancement."
    }
  },
  {
    id: "12",
    name: "Milk Thistle",
    scientificName: "Silybum marianum",
    description: "Milk Thistle is a flowering herb known for its liver-protective properties. It has been used for over 2,000 years for liver and gallbladder disorders.",
    uses: ["Liver support", "Detoxification", "Digestive health", "Skin health"],
    preparation: "Available as capsules, tablets, tinctures, or tea. For tea, steep 1 teaspoon of crushed seeds in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1573931584943-aaa33f0b1b61?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects liver cells", "Supports detoxification", "Has antioxidant properties", "May help with skin conditions"],
    category: "Liver health",
    collections: ["Detoxification", "European Traditional", "Digestive Health", "Antioxidant Rich", "Skin Health"],
    conditions: ["Liver Damage", "Cirrhosis", "Hepatitis", "Gallbladder Disorders", "Skin Conditions", "Fatty Liver Disease"],
    warnings: [
      "May cause allergic reactions in people allergic to plants in the daisy family.",
      "May have a mild laxative effect in some individuals.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "May interact with certain medications that are processed by the liver."
    ],
    dosage: {
      adult: "140-800mg of standardized extract (containing 70-80% silymarin) daily, divided into 2-3 doses.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Limited data on safety during pregnancy and breastfeeding. Consult healthcare provider before use.",
      maximum: "Do not exceed 1500mg of standardized extract daily without medical supervision."
    },
    detailedPreparation: {
      tea: "Crush 1 teaspoon of milk thistle seeds (use a coffee grinder or mortar and pestle) and steep in 8oz hot water for 10-15 minutes. Strain and drink up to 3 times daily. The tea has a slightly bitter taste that can be improved with honey or lemon.",
      tincture: "Combine 1 part crushed milk thistle seeds with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 2-3 times daily.",
      capsules: "Standardized extract capsules (typically 140-200mg) can be taken 2-3 times daily with meals. Look for products standardized to contain 70-80% silymarin.",
      decoction: "Not typically prepared as a decoction as the active compounds are not as water-soluble. Tincture or standardized extracts are more effective."
    }
  },
  {
    id: "13",
    name: "Nettle",
    scientificName: "Urtica dioica",
    description: "Nettle, also known as stinging nettle, is a plant used for centuries in traditional medicine. It's rich in nutrients and has multiple health benefits.",
    uses: ["Allergy relief", "Inflammation reduction", "Prostate health", "Joint pain relief"],
    preparation: "Can be consumed as tea, taken as capsules, or cooked and eaten as food. For tea, steep 1-2 teaspoons dried leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1566355503125-e82431c8b386?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in nutrients", "May reduce inflammation", "May help with seasonal allergies", "Supports prostate health"],
    category: "Urinary system",
    collections: ["Men's Health", "European Traditional", "Tea Herbs", "Joint & Muscle", "Anti-inflammatory"],
    conditions: ["Allergies", "Joint Pain", "Prostate Issues", "Urinary Tract Infections", "Anemia", "Seasonal Allergic Rhinitis"],
    warnings: [
      "Fresh nettle leaves can cause skin irritation due to the stinging hairs. Always use gloves when handling fresh plant.",
      "May interact with blood pressure medications, blood thinners, and diuretics.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "May stimulate uterine contractions and should be avoided during pregnancy."
    ],
    dosage: {
      adult: "2-4g of dried leaves as tea 3 times daily, 300-500mg of standardized extract 2-3 times daily, or 2-5ml of tincture 3 times daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Not recommended during pregnancy as it may stimulate uterine contractions.",
      maximum: "Do not exceed 12g of dried herb or 15ml of tincture daily."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried nettle leaves in 8oz hot water for 5-10 minutes. Strain and drink up to 3 times daily. For allergy relief, drink 1 cup daily for at least 2-3 months before allergy season begins.",
      tincture: "Combine 1 part dried nettle leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-5ml (40-100 drops) in water 3 times daily.",
      capsules: "Standardized extract capsules (typically 300-500mg) can be taken 2-3 times daily with meals.",
      decoction: "For stronger mineral extraction, simmer 1 tablespoon dried nettle leaves or roots in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup 2-3 times daily. Particularly good for joint pain and prostate health."
    }
  },
  {
    id: "14",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    description: "Dandelion is a flowering plant used in traditional medicine for centuries. The entire plant, from root to flower, has medicinal properties.",
    uses: ["Liver support", "Digestion aid", "Diuretic", "Skin conditions"],
    preparation: "Roots can be roasted and used as a coffee substitute, leaves can be eaten in salads, or made into tea. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1588092746681-45095cf2425a?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver health", "Acts as a natural diuretic", "Contains antioxidants", "Rich in vitamins and minerals"],
    category: "Liver health",
    collections: ["Detoxification", "European Traditional", "Tea Herbs", "Digestive Health", "Liver Support"],
    conditions: ["Liver Congestion", "Water Retention", "Digestive Disorders", "Skin Conditions", "Urinary Tract Infections"],
    warnings: [
      "May cause allergic reactions in people allergic to plants in the daisy family (ragweed, chrysanthemums, marigolds).",
      "May interact with certain medications including diuretics, lithium, and some antibiotics.",
      "May increase the production of stomach acid and should be avoided by those with acid reflux or ulcers.",
      "May increase the risk of bleeding when taken with blood-thinning medications."
    ],
    dosage: {
      adult: "Root: 2-8g dried root daily as tea or 3-5ml of tincture 3 times daily. Leaf: 4-10g dried leaf as tea or 4-10ml of leaf tincture daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals, but start with lower doses due to potential diuretic effect.",
      pregnant: "Limited data on safety during pregnancy. The diuretic effect may be undesirable during pregnancy. Consult healthcare provider.",
      maximum: "Do not exceed 30g of dried herb or 10ml of root tincture daily."
    },
    detailedPreparation: {
      tea: "For leaf tea: Steep 1-2 teaspoons of dried dandelion leaves in 8oz hot water for 5-10 minutes. For root tea: Simmer 1-2 teaspoons of dried, chopped root in 8oz water for 10-15 minutes. Drink up to 3 times daily.",
      tincture: "For root tincture: Combine 1 part dried, chopped dandelion root with 5 parts 40-50% alcohol. For leaf tincture: Combine 1 part dried dandelion leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles.",
      decoction: "For stronger liver support: Simmer 1 tablespoon dried dandelion root in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup 2-3 times daily.",
      syrup: "For a liver-supportive syrup: Simmer 1 cup of dandelion root in 2 cups of water until reduced by half. Strain and add 1 cup of honey or maple syrup. Simmer on low heat until thickened. Take 1 teaspoon daily as a liver tonic."
    }
  },
  {
    id: "15",
    name: "Holy Basil",
    scientificName: "Ocimum sanctum",
    description: "Holy Basil, or Tulsi, is a sacred plant in Ayurvedic medicine with adaptogenic properties. It helps the body adapt to stress and promotes overall wellness.",
    uses: ["Stress management", "Immune support", "Respiratory health", "Blood sugar regulation"],
    preparation: "Can be consumed as tea, taken as capsules, or used fresh in cooking. For tea, steep 1 teaspoon of dried herb in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1622467827417-5a86dd4ab5c5?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "Supports immune function", "Has anti-inflammatory properties", "May help regulate blood sugar"],
    category: "Adaptogenic",
    collections: ["Brain & Nervous System", "Ayurvedic Herbs", "Tea Herbs", "Adaptogenic Herbs", "Immune Support"],
    conditions: ["Anxiety & Stress", "Cognitive Function", "Respiratory Infections", "Diabetes", "Inflammation", "Metabolic Syndrome"],
    warnings: [
      "May slow blood clotting and should be discontinued 2 weeks before scheduled surgery.",
      "May interact with diabetes medications and cause blood sugar to go too low.",
      "May interact with medications that decrease the immune system.",
      "May have mild blood-thinning effects and should be used with caution alongside anticoagulant medications."
    ],
    dosage: {
      adult: "1-2g of dried herb as tea 2-3 times daily, 300-2000mg of dried herb in capsule form daily (divided doses), or 2-3ml of tincture 2-3 times daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Limited data on safety during pregnancy. Traditionally used during labor in some cultures, but consult healthcare provider before use.",
      maximum: "Do not exceed 6g of dried herb or 9ml of tincture daily."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried holy basil leaves in 8oz hot water for 5-10 minutes. Strain and add honey if desired. Drink 2-3 cups daily for stress management and cognitive support. For respiratory health, add a slice of ginger.",
      tincture: "Combine 1 part dried holy basil leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-3ml (40-60 drops) in water 2-3 times daily.",
      capsules: "Standardized extract capsules (typically 300-500mg) can be taken 2-3 times daily with meals.",
      oil: "For topical use on skin conditions or stress-related headaches: Infuse 1/2 cup dried holy basil in 1 cup sesame or coconut oil over low heat for 4 hours. Strain and store in dark bottles. Apply to temples, forehead, or affected areas as needed."
    }
  },
  {
    id: "16",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "Lemon balm is a lemon-scented herb from the mint family known for its calming effects on the nervous system and digestive tract.",
    uses: ["Anxiety relief", "Sleep improvement", "Digestive support", "Cold sore treatment"],
    preparation: "Can be consumed as tea, taken as capsules or tinctures, or used in cooking. For tea, steep 1-2 teaspoons of dried herb in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1589365252845-092198ba5811?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "May improve sleep quality", "Supports digestive health", "Has antiviral properties"],
    category: "Nervous system",
    collections: ["Brain & Nervous System", "European Traditional", "Tea Herbs", "Sleep & Relaxation", "Digestive Health"],
    conditions: ["Anxiety & Stress", "Insomnia", "Digestive Disorders", "Herpes Simplex", "Cognitive Decline", "Headaches"],
    warnings: [
      "May cause drowsiness and should not be combined with sedative medications or alcohol.",
      "May interact with thyroid medications and thyroid conditions.",
      "May interact with medications that are broken down by the liver.",
      "May increase the effects of GABA in the brain and should be used with caution alongside anti-anxiety medications."
    ],
    dosage: {
      adult: "1.5-4.5g of dried herb as tea 2-3 times daily, 300-1200mg in capsule form daily (divided doses), or 2-6ml of tincture 3 times daily.",
      child: "For children 6-12: 1/2 the adult dose. For children under 6, consult a healthcare provider.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals and may be particularly beneficial for sleep and cognitive support.",
      pregnant: "Generally considered safe in moderate amounts during pregnancy, but consult healthcare provider before use.",
      maximum: "Do not exceed 4.5g of dried herb per dose or 13.5g per day. For extract standardized to 5% rosmarinic acid, do not exceed 500mg per day."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried lemon balm leaves in 8oz hot water for 5-10 minutes. Cover while steeping to prevent volatile oils from escaping. Strain and add honey if desired. Drink 2-3 cups daily for anxiety or 1 cup before bedtime for sleep support.",
      tincture: "Combine 1 part dried lemon balm leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-6ml (40-120 drops) in water 3 times daily.",
      capsules: "Standardized extract capsules (typically 300-500mg) can be taken 2-3 times daily with meals. Look for products standardized to contain at least 5% rosmarinic acid.",
      oil: "For cold sores and herpes outbreaks: Infuse 1/2 cup dried lemon balm in 1 cup olive oil over low heat for 4 hours. Strain and store in dark bottles. Apply directly to affected areas 2-4 times daily at the first sign of an outbreak."
    }
  },
  {
    id: "17",
    name: "Rhodiola",
    scientificName: "Rhodiola rosea",
    description: "Rhodiola is an adaptogenic herb that grows in cold regions of Europe and Asia. It has been used in traditional medicine to combat fatigue and increase energy.",
    uses: ["Energy enhancement", "Stress management", "Mental performance", "Physical endurance"],
    preparation: "Usually taken as capsules, tablets, or tinctures. Standard dosage is 200-600mg per day of a standardized extract.",
    imageUrl: "https://images.unsplash.com/photo-1533514114760-4389f572ae3c?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces fatigue", "Enhances mental performance", "Helps manage stress", "May improve physical performance"],
    category: "Adaptogenic",
    collections: ["Adaptogenic Herbs", "European Traditional", "Brain & Nervous System", "Athletic Performance", "Stress Relief"],
    conditions: ["Chronic Fatigue", "Stress & Burnout", "Depression", "Cognitive Decline", "Altitude Sickness", "Exercise Recovery"],
    warnings: [
      "May interact with medications for depression, including MAOIs, SSRIs, and other antidepressants.",
      "May stimulate the immune system and should be used with caution by those with autoimmune disorders.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "Should be avoided by people with bipolar disorder as it may trigger manic episodes."
    ],
    dosage: {
      adult: "200-600mg of standardized extract (containing 3% rosavins and 1% salidroside) daily, preferably taken in the morning.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Start with lower doses (100-200mg daily) and increase gradually if needed.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data.",
      maximum: "Do not exceed 680mg of standardized extract daily. Effects may take 1-3 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "Rhodiola tea is less common but can be prepared by simmering 1 teaspoon of dried, chopped root in 8oz water for 10-15 minutes. The tea has a bitter taste that can be improved with honey and lemon. Not as effective as standardized extracts.",
      tincture: "Standard dose is 2-3ml (40-60 drops) of tincture in water, taken 1-2 times daily, preferably in the morning. Look for tinctures standardized to contain 3% rosavins and 1% salidroside.",
      capsules: "Standardized extract capsules (typically 100-200mg) can be taken 1-3 times daily, with the first dose in the morning and the last dose no later than early afternoon to avoid sleep disruption.",
      decoction: "For a stronger preparation: Simmer 1 tablespoon chopped rhodiola root in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup in the morning. Not recommended in the evening as it may interfere with sleep."
    }
  },
  {
    id: "18",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "Calendula, or pot marigold, is a flowering herb used for centuries for its anti-inflammatory and skin-healing properties.",
    uses: ["Skin healing", "Inflammation reduction", "Wound care", "Digestive support"],
    preparation: "Can be used as a tea, tincture, oil infusion, or topical salve. For tea, steep 1-2 teaspoons of dried flowers in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1596746336161-302673307cc8?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes skin healing", "Reduces inflammation", "Has antimicrobial properties", "Supports digestive health"],
    category: "Skin health",
    collections: ["Skin Health", "European Traditional", "First Aid Herbs", "Anti-inflammatory", "Women's Health"],
    conditions: ["Wounds & Burns", "Skin Inflammation", "Eczema", "Diaper Rash", "Minor Infections", "Digestive Inflammation"],
    warnings: [
      "May cause allergic reactions in people allergic to plants in the daisy family (ragweed, chrysanthemums, marigolds).",
      "Topical applications may cause contact dermatitis in sensitive individuals.",
      "Not recommended for internal use during pregnancy due to its emmenagogue effects.",
      "May interact with sedative medications and increase drowsiness."
    ],
    dosage: {
      adult: "Tea: 1-2g of dried flowers steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Topical: Apply salve or oil as needed.",
      child: "For topical use, dilute preparations are generally safe for children. For internal use in children under 12, consult a healthcare provider.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Not recommended for internal use during pregnancy. Topical use should be discussed with healthcare provider.",
      maximum: "Do not exceed 8g of dried herb or 12ml of tincture daily for internal use."
    },
    detailedPreparation: {
      tea: "Steep 1-2 teaspoons of dried calendula flowers in 8oz hot water for 10-15 minutes. Strain and drink up to 3 times daily for digestive inflammation or immune support. The tea has a slightly bitter, earthy taste.",
      tincture: "Combine 1 part dried calendula flowers with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily.",
      oil: "For skin healing: Infuse 1 cup dried calendula flowers in 2 cups olive or coconut oil over very low heat for 4-8 hours until the oil takes on a deep golden color. Strain and store in dark bottles. Apply directly to skin irritations, wounds, or use as a base for salves.",
      poultice: "For direct wound application: Grind dried calendula flowers to a powder and mix with enough warm water to create a paste. Apply directly to wounds, burns, or rashes, cover with a clean cloth, and leave for 1-2 hours. Alternatively, wrap fresh flowers in a thin cloth, crush slightly, and apply."
    }
  },
  {
    id: "19",
    name: "Licorice Root",
    scientificName: "Glycyrrhiza glabra",
    description: "Licorice root is one of the oldest and most widely used herbs in traditional medicine, particularly for digestive and respiratory issues.",
    uses: ["Digestive support", "Respiratory health", "Adrenal support", "Sore throat relief"],
    preparation: "Available as tea, tincture, powder, or capsules. For tea, steep 1-2 teaspoons of dried root in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestive tract", "Supports respiratory health", "Has anti-inflammatory properties", "May support adrenal function"],
    category: "Digestive health",
    collections: ["Digestive Health", "Respiratory Support", "Adaptogenic Herbs", "Ayurvedic Herbs", "Traditional Chinese Medicine"],
    conditions: ["Acid Reflux", "Peptic Ulcers", "Sore Throat", "Bronchitis", "Adrenal Fatigue", "Inflammatory Conditions"],
    warnings: [
      "May cause serious side effects including increased blood pressure, decreased potassium levels, fluid retention, and heart problems when used in large amounts or long-term.",
      "Should not be used by people with high blood pressure, kidney disease, liver disease, or heart disease.",
      "Should not be used during pregnancy as it may increase the risk of preterm labor.",
      "May interact with many medications including diuretics, corticosteroids, and medications for high blood pressure."
    ],
    dosage: {
      adult: "For DGL (deglycyrrhizinated licorice): 380-1140mg 3 times daily before meals. For whole root: 1-5g of dried root daily as tea, or 2-5ml of tincture 3 times daily.",
      child: "Not recommended for children without professional guidance. DGL may be safer for children under supervision.",
      elderly: "Use with caution in elderly individuals due to increased risk of side effects. DGL is preferred for elderly.",
      pregnant: "Not recommended during pregnancy as it may increase the risk of preterm labor.",
      maximum: "Do not exceed 7g of dried root or 15ml of tincture daily. Do not use for more than 4-6 weeks without medical supervision."
    },
    detailedPreparation: {
      tea: "For digestive support: Simmer 1-2 teaspoons of dried licorice root in 8oz water for 5-10 minutes. Strain and drink up to 3 times daily. For respiratory support, combine with marshmallow root and thyme. The tea has a naturally sweet taste.",
      tincture: "Combine 1 part dried licorice root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-5ml (40-100 drops) in water 3 times daily.",
      decoction: "For stronger medicinal effects: Simmer 1 tablespoon dried licorice root in 2 cups water for 15-20 minutes until reduced by half. Strain and drink 1/4 cup 2-3 times daily. Good for sore throats and respiratory conditions.",
      syrup: "For cough relief: Simmer 1/2 cup dried licorice root in 2 cups water for 30 minutes until reduced by half. Strain and add 1 cup of honey. Simmer on low heat until thickened. Take 1 teaspoon as needed for coughs or sore throat."
    }
  },
  {
    id: "20",
    name: "Hawthorn",
    scientificName: "Crataegus species",
    description: "Hawthorn is a flowering shrub that has been used for centuries to support heart health and cardiovascular function.",
    uses: ["Heart health", "Blood pressure support", "Anxiety relief", "Digestive aid"],
    preparation: "Available as tea, tincture, capsules, or liquid extract. For tea, steep 1-2 teaspoons of dried berries, leaves, or flowers in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1601836119168-dc779af1ad56?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart function", "May help regulate blood pressure", "Has antioxidant properties", "May reduce anxiety"],
    category: "Heart health",
    collections: ["Heart Herbs", "European Traditional", "Cardiovascular Support", "Antioxidant Rich", "Nervine Herbs"],
    conditions: ["Congestive Heart Failure", "Hypertension", "Angina", "Arrhythmia", "Atherosclerosis", "Anxiety"],
    warnings: [
      "May interact with cardiovascular medications including beta-blockers, calcium channel blockers, and digoxin.",
      "May potentiate the effects of blood pressure medications and cause hypotension.",
      "May interact with medications that are broken down by the liver.",
      "Should be discontinued 1-2 weeks before surgery due to potential effects on blood pressure."
    ],
    dosage: {
      adult: "Standardized extract (1.8% vitexin-4'-rhamnoside or 10% procyanidins): 160-900mg daily in divided doses. Tincture: 5ml (100 drops) 2-3 times daily. Tea: 1-2 cups daily.",
      child: "Not recommended for children without professional guidance.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals and may be particularly beneficial for age-related cardiovascular concerns.",
      pregnant: "Limited data on safety during pregnancy and breastfeeding. Consult healthcare provider before use.",
      maximum: "Do not exceed 1800mg of standardized extract daily. Effects may take 4-8 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For berries: Simmer 1-2 teaspoons of dried hawthorn berries in 8oz water for 10-15 minutes. For leaves and flowers: Steep 1-2 teaspoons in 8oz hot water for 10 minutes. Strain and drink 1-2 cups daily for cardiovascular support. The tea has a pleasant, slightly sweet taste.",
      tincture: "Combine 1 part dried hawthorn berries (or 1/2 part each berries and flowering tops) with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 5ml (100 drops) in water 2-3 times daily.",
      capsules: "Standardized extract capsules (typically 300-500mg) can be taken 2-3 times daily with meals. Look for products standardized to contain 1.8% vitexin-4'-rhamnoside or 10% procyanidins.",
      syrup: "For a heart-supportive syrup: Simmer 1 cup of hawthorn berries in 2 cups of water until reduced by half. Strain and add 1 cup of honey. Simmer on low heat until thickened. Take 1 teaspoon 2-3 times daily as a heart tonic."
    }
  },
  {
    id: "21",
    name: "Marshmallow Root",
    scientificName: "Althaea officinalis",
    description: "Marshmallow root is a perennial herb that has been used for centuries to treat digestive, respiratory, and skin conditions due to its mucilage content.",
    uses: ["Digestive soothing", "Respiratory support", "Skin healing", "Urinary tract health"],
    preparation: "Can be consumed as tea, capsules, or tincture. For cold infusion, soak 1-2 tablespoons of dried root in cold water overnight.",
    imageUrl: "https://images.unsplash.com/photo-1523050313178-d53a6a9b573f?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes mucous membranes", "Reduces inflammation", "Supports respiratory health", "May help with urinary tract issues"],
    category: "Digestive health",
    collections: ["Stomach Herbs", "European Traditional", "Digestive Health", "Respiratory Support", "Demulcent Herbs"],
    conditions: ["Gastritis", "Acid Reflux", "Dry Cough", "Sore Throat", "Urinary Tract Infections", "Irritable Bowel Syndrome"],
    warnings: [
      "May slow the absorption of other medications taken at the same time due to its mucilage content.",
      "Take other medications at least 2 hours before or after taking marshmallow root.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "Rarely causes allergic reactions in individuals sensitive to plants in the Malvaceae family."
    ],
    dosage: {
      adult: "Tea/Cold Infusion: 2-5g of dried root 3 times daily. Tincture: 5-15ml (1-3 teaspoons) 3 times daily. Capsules: 400-1600mg 3 times daily.",
      child: "For children 6-12: 1/2 the adult dose. For children under 6, consult a healthcare provider. Cold infusion is generally preferred for children.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding, but consult healthcare provider before use.",
      maximum: "Do not exceed 15g of dried root or 15ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For digestive or respiratory support: Hot infusion is less preferred as heat can damage mucilage. If using hot method, steep 1-2 teaspoons of dried root in 8oz warm (not boiling) water for 10-15 minutes. Strain and drink up to 3 times daily.",
      decoction: "For a stronger preparation: Simmer 1 tablespoon dried marshmallow root in 2 cups cold water for 10-15 minutes on very low heat. Strain and drink 1/2 cup 2-3 times daily. Good for irritated digestive tract.",
      tincture: "Combine 1 part dried marshmallow root with 5 parts 25-30% alcohol (lower alcohol percentage preserves mucilage). Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 5-15ml (1-3 teaspoons) in water 3 times daily.",
      capsules: "For maximum mucilage extraction: Cold infusion method - Add 2 tablespoons of dried root to 1 quart of cold water. Let steep for 8 hours or overnight in the refrigerator. Strain and drink throughout the day. This method extracts more mucilage than hot preparations and is ideal for soothing irritated tissues."
    }
  },
  {
    id: "22",
    name: "Astragalus",
    scientificName: "Astragalus membranaceus",
    description: "Astragalus is a fundamental herb in traditional Chinese medicine, known for its immune-boosting and adaptogenic properties.",
    uses: ["Immune support", "Energy enhancement", "Stress management", "Cardiovascular support"],
    preparation: "Available as tea, tincture, capsules, or in soups. For tea, simmer 3-6 grams of dried root in water for 20-30 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1546092714-83f77286aee1?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens immune system", "Has adaptogenic properties", "Supports heart health", "May increase energy levels"],
    category: "Immune system",
    collections: ["Immune Support", "Traditional Chinese Medicine", "Adaptogenic Herbs", "Cardiovascular Support", "Longevity Herbs"],
    conditions: ["Frequent Infections", "Fatigue", "Stress", "Heart Disease", "Diabetes", "Cancer Support"],
    warnings: [
      "May interact with medications that suppress the immune system.",
      "May increase the effects of blood-thinning medications and herbs.",
      "Should be avoided by people with autoimmune diseases as it may stimulate the immune system.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood sugar and blood pressure."
    ],
    dosage: {
      adult: "Root: 4-7g daily as tea or decoction. Extract standardized to contain 0.4% 4'-hydroxy-3'-methoxyisoflavone 7-sug: 250-500mg 3-4 times daily. Tincture: 3-5ml 3 times daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals and may be particularly beneficial for immune support.",
      pregnant: "Limited data on safety during pregnancy and breastfeeding. Consult healthcare provider before use.",
      maximum: "Do not exceed 30g of dried root or 15ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For immune support: Simmer 3-6g (approximately 1-2 tablespoons) of dried astragalus root slices in 2 cups of water for 20-30 minutes. Strain and drink 1 cup 1-2 times daily. The tea has a slightly sweet, earthy taste.",
      decoction: "For stronger medicinal effects: Simmer 10-15g dried astragalus root in 3 cups water for 30-45 minutes until reduced to about 1 cup. Strain and drink 1/3 cup 3 times daily. This method is traditionally used in Chinese medicine for deeper immune support.",
      tincture: "Combine 1 part dried astragalus root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 3-5ml (60-100 drops) in water 3 times daily.",
      capsules: "Standardized extract capsules (typically 400-500mg) can be taken 3-4 times daily with meals. Look for products standardized to contain 0.4% 4'-hydroxy-3'-methoxyisoflavone 7-sug or 70% polysaccharides."
    }
  },
  {
    id: "23",
    name: "Feverfew",
    scientificName: "Tanacetum parthenium",
    description: "Feverfew is a flowering plant that has been used for centuries to prevent migraines and reduce fever, as its name suggests.",
    uses: ["Migraine prevention", "Headache relief", "Fever reduction", "Anti-inflammatory"],
    preparation: "Available as capsules, tablets, or liquid extracts. Fresh leaves can also be chewed (though they're bitter and may cause mouth sores).",
    imageUrl: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May prevent migraines", "Reduces inflammation", "May help with arthritis pain", "Has antispasmodic properties"],
    category: "Pain relief",
    collections: ["European Traditional", "Pain Relief", "Anti-inflammatory", "Headache & Migraine", "Women's Health"],
    conditions: ["Migraines", "Tension Headaches", "Arthritis", "Fever", "Menstrual Pain", "Inflammatory Conditions"],
    warnings: [
      "May cause mouth ulcers and irritation when fresh leaves are chewed.",
      "May interact with blood-thinning medications and should be discontinued 2 weeks before surgery.",
      "Should not be used during pregnancy as it may affect uterine contractions.",
      "Sudden discontinuation after regular use may cause a return of symptoms with increased intensity."
    ],
    dosage: {
      adult: "Standardized extract (containing 0.2-0.4% parthenolide): 50-100mg daily. Fresh leaves: 1-4 leaves daily. Dried herb: 50-200mg daily.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals, but start with lower doses.",
      pregnant: "Not recommended during pregnancy as it may affect uterine contractions and blood flow to the fetus.",
      maximum: "Do not exceed 200mg of dried herb or 4 fresh leaves daily. Standardized extracts should not exceed manufacturer's recommendations."
    },
    detailedPreparation: {
      tea: "For migraine prevention: Steep 1-2 teaspoons of dried feverfew leaves in 8oz hot water for 5-10 minutes. Strain and drink 1 cup daily. The tea is very bitter and may be improved with honey and lemon. Note: Some active compounds may be degraded in hot water.",
      tincture: "Combine 1 part dried feverfew leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 20-40 drops in water 1-2 times daily for migraine prevention.",
      capsules: "Standardized extract capsules (typically 25-50mg) can be taken 2 times daily with meals. Look for products standardized to contain 0.2-0.4% parthenolide, the active compound.",
      poultice: "For localized pain and inflammation: Crush fresh feverfew leaves into a paste and apply directly to affected areas. Cover with a clean cloth and leave for 20-30 minutes. Use caution as skin irritation may occur in sensitive individuals."
    }
  },
  {
    id: "24",
    name: "Passionflower",
    scientificName: "Passiflora incarnata",
    description: "Passionflower is a climbing vine that has been used traditionally for anxiety, insomnia, and seizures. It has a calming effect on the nervous system.",
    uses: ["Anxiety relief", "Sleep improvement", "Stress reduction", "Pain management"],
    preparation: "Available as tea, tincture, capsules, or liquid extract. For tea, steep 1-2 teaspoons of dried herb in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1567324216289-97a767d5869e?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Improves sleep quality", "Has mild sedative effects", "May help with pain management"],
    category: "Nervous system",
    collections: ["Sleep & Relaxation", "European Traditional", "Native American", "Nervine Herbs", "Pain Relief"],
    conditions: ["Anxiety", "Insomnia", "Nervous Tension", "Restlessness", "Withdrawal Symptoms", "Neuralgia"],
    warnings: [
      "May cause drowsiness and should not be combined with sedative medications, alcohol, or other sleep-inducing herbs.",
      "May interact with medications for anxiety, insomnia, and seizures.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential sedative effects.",
      "May increase the effects of blood pressure medications and cause hypotension."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons (2-4g) of dried herb steeped in hot water 2-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Extract (standardized to 2.6% flavonoids): 250-600mg daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for elderly with sleep disturbances.",
      pregnant: "Not recommended during pregnancy due to potential uterine-stimulating effects. Limited data on safety during breastfeeding.",
      maximum: "Do not exceed 12g of dried herb, 12ml of tincture, or 900mg of standardized extract daily."
    },
    detailedPreparation: {
      tea: "For anxiety or insomnia: Steep 1-2 teaspoons of dried passionflower herb in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 2-3 times daily for anxiety, or 1 cup 30-60 minutes before bedtime for sleep support. The tea has a pleasant, mild flavor that can be enhanced with honey or lemon.",
      tincture: "Combine 1 part dried passionflower herb with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for anxiety or 30-60 minutes before bedtime for sleep.",
      capsules: "Standardized extract capsules (typically 250-300mg) can be taken 2-3 times daily with meals. Look for products standardized to contain 2.6% flavonoids or 0.8% isovitexin.",
      syrup: "For a pleasant-tasting sleep aid: Simmer 30g dried passionflower in 500ml water for 20 minutes. Strain and add 250g honey or maple syrup. Simmer on low heat until thickened. Take 1-2 teaspoons 30 minutes before bedtime. Can be combined with lemon balm and chamomile for enhanced effects."
    }
  },
  {
    id: "25",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description: "Aloe vera is a succulent plant species known for its medicinal properties, particularly for skin conditions and digestive health.",
    uses: ["Skin healing", "Digestive support", "Burn treatment", "Wound care"],
    preparation: "The gel can be applied directly to skin, consumed as juice, or taken as capsules. Fresh gel can be scooped from cut leaves.",
    imageUrl: "https://images.unsplash.com/photo-1577017040065-650ee4d43339?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes and heals skin", "Reduces inflammation", "Supports digestive health", "Has antibacterial properties"],
    category: "Skin health",
    collections: ["Skin Health", "First Aid Herbs", "Digestive Health", "Anti-inflammatory", "Household Remedies"],
    conditions: ["Burns", "Sunburn", "Wounds", "Eczema", "Psoriasis", "Constipation", "Irritable Bowel Syndrome"],
    warnings: [
      "Topical use may cause skin irritation or allergic reaction in sensitive individuals. Always test on a small area first.",
      "Oral consumption may cause abdominal cramps, diarrhea, or electrolyte imbalances in some individuals.",
      "Should not be consumed by people with intestinal disorders such as Crohn's disease or ulcerative colitis.",
      "Should not be used during pregnancy as it may stimulate uterine contractions or by breastfeeding mothers as it may cause gastrointestinal distress in infants."
    ],
    dosage: {
      adult: "Topical: Apply gel directly to affected area 2-3 times daily. Oral: 30-50ml of aloe juice daily, or 100-200mg of dried extract 2-3 times daily.",
      child: "Topical: Generally safe for external use on children. Oral: Not recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals. May be particularly beneficial for skin conditions and constipation in elderly.",
      pregnant: "Not recommended for internal use during pregnancy. External use is generally considered safe but consult healthcare provider.",
      maximum: "Do not exceed 100ml of aloe juice or 600mg of dried extract daily for internal use."
    },
    detailedPreparation: {
      tea: "Aloe is rarely prepared as a traditional tea. For digestive support, 1-2 tablespoons of pure aloe juice can be added to herbal teas after they have cooled slightly.",
      tincture: "Aloe is not commonly prepared as an alcohol-based tincture due to its high water content. Commercial extracts are typically glycerites or water-based.",
      capsules: "Dried aloe extract capsules (typically 100-200mg) can be taken 2-3 times daily with meals for digestive support. Look for products that specify the aloin content (should be less than 10ppm for safety).",
      oil: "For skin healing: Cut open a fresh aloe leaf and scoop out the clear gel. Blend 1/4 cup of fresh aloe gel with 1/2 cup of jojoba or olive oil until well combined. Apply to skin as needed for burns, sunburn, or dry skin conditions. Store in refrigerator for up to 1 week."
    }
  },
  {
    id: "26",
    name: "Black Cohosh",
    scientificName: "Actaea racemosa",
    description: "Black cohosh is a flowering plant native to North America, traditionally used by Native Americans for women's health issues and rheumatism.",
    uses: ["Menopause symptom relief", "Hormone balance", "Menstrual support", "Joint pain relief"],
    preparation: "Available as capsules, tablets, tinctures, or tea. For tea, steep 1 teaspoon of dried root in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May reduce hot flashes", "Supports hormonal balance", "May help with menstrual discomfort", "Has anti-inflammatory properties"],
    category: "Women's health",
    collections: ["Women's Herbs", "Native American", "Hormonal Balance", "Menopause Support", "Anti-inflammatory"],
    conditions: ["Menopausal Symptoms", "Hot Flashes", "Night Sweats", "Menstrual Cramps", "Premenstrual Syndrome", "Rheumatism"],
    warnings: [
      "May cause digestive upset, headache, dizziness, or liver problems in some individuals.",
      "Should not be used by people with hormone-sensitive conditions such as breast, uterine, or ovarian cancer.",
      "Should not be used during pregnancy or breastfeeding.",
      "May interact with medications for high blood pressure, blood thinners, and hormone therapies."
    ],
    dosage: {
      adult: "Standardized extract (2.5% triterpene glycosides): 40-80mg daily. Dried root: 40-200mg daily. Tincture: 2-4ml (40-80 drops) 2-3 times daily.",
      child: "Not recommended for children.",
      elderly: "Standard adult dose is generally appropriate for elderly women, but start with lower doses and increase gradually.",
      pregnant: "Not recommended during pregnancy or breastfeeding.",
      maximum: "Do not exceed 200mg of dried root or 6ml of tincture daily. Long-term use (beyond 6 months) is not recommended without medical supervision."
    },
    detailedPreparation: {
      tea: "For menopausal symptoms: Simmer 1 teaspoon of dried black cohosh root in 8oz water for 10-15 minutes (decoction method). Strain and drink 1 cup 2-3 times daily. The tea has a bitter taste that can be improved with honey and cinnamon. Note: Tea is less effective than standardized extracts for hormonal support.",
      tincture: "Combine 1 part dried black cohosh root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 2-3 times daily for menopausal symptoms.",
      capsules: "Standardized extract capsules (typically 20-40mg) can be taken 2 times daily with meals. Look for products standardized to contain 2.5% triterpene glycosides. This is the most reliable form for consistent results.",
      decoction: "For stronger medicinal effects: Simmer 1 tablespoon dried black cohosh root in 2 cups water for 15-20 minutes until reduced by half. Strain and drink 1/3 cup 3 times daily. This preparation is particularly helpful for joint pain and rheumatic conditions."
    }
  },
  {
    id: "27",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    description: "Oregano is an herb from the mint family known for its potent antimicrobial and antioxidant properties, as well as its use in cooking.",
    uses: ["Immune support", "Respiratory health", "Digestive aid", "Antimicrobial"],
    preparation: "Can be used fresh or dried in cooking, steeped as tea, or taken as oil of oregano in capsules or liquid form.",
    imageUrl: "https://images.unsplash.com/photo-1600620970790-2ed4fe87f360?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Contains antioxidants", "Supports respiratory health", "May help with digestive issues"],
    category: "Immune system",
    collections: ["Immune Support", "Respiratory Support", "Culinary Herbs", "Mediterranean Herbs", "Antimicrobial"],
    conditions: ["Common Cold", "Bronchitis", "Sinus Infections", "Digestive Disorders", "Bacterial Infections", "Fungal Infections"],
    warnings: [
      "Oil of oregano is highly concentrated and should be diluted before use. May cause skin irritation if applied undiluted.",
      "May interact with blood-thinning medications and increase risk of bleeding.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "Should not be used in high medicinal doses during pregnancy as it may stimulate uterine contractions."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 2-3 times daily. Oil of oregano: 2-3 drops of diluted oil (in carrier oil) 3 times daily, or 150-600mg in capsule form daily.",
      child: "Tea: Safe in culinary amounts. For medicinal use in children over 5: 1/2 teaspoon steeped in hot water 1-2 times daily. Oil of oregano is not recommended for children under 12.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Safe in culinary amounts. Medicinal doses and oil of oregano should be avoided during pregnancy and breastfeeding.",
      maximum: "Do not exceed 6g of dried herb or 600mg of oregano oil capsules daily. Oil of oregano should be used for no more than 2 weeks continuously."
    },
    detailedPreparation: {
      tea: "For respiratory support: Steep 1-2 teaspoons of dried oregano leaves in 8oz hot water for 5-10 minutes. Cover while steeping to prevent volatile oils from escaping. Strain and add honey if desired. Drink 1 cup 2-3 times daily during infections. The tea has a strong, aromatic flavor.",
      tincture: "Combine 1 part dried oregano leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 3 times daily for immune support or during infections.",
      capsules: "Dried oregano capsules (typically 500mg) can be taken 2 times daily with meals. Oil of oregano capsules (typically 150mg) can be taken 1-2 times daily with meals for acute infections.",
      oil: "For topical use against fungal infections: Dilute 1 drop of oregano essential oil in 1 teaspoon of carrier oil (olive or coconut). Apply to affected areas 2-3 times daily. For sore throats, add 1-2 drops to warm water and gargle (do not swallow)."
    }
  },
  {
    id: "28",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "Saw palmetto is a palm-like plant native to North America, traditionally used for urinary and reproductive issues, particularly in men.",
    uses: ["Prostate health", "Urinary function", "Hair loss prevention", "Hormonal balance"],
    preparation: "Available as capsules, tablets, liquid extract, or tea. Standard dose is 160mg twice daily of standardized extract.",
    imageUrl: "https://images.unsplash.com/photo-1559924508-a3a2140fe012?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate health", "May improve urinary flow", "May help prevent hair loss", "Has anti-inflammatory properties"],
    category: "Men's health",
    collections: ["Men's Herbs", "Native American", "Prostate Support", "Hormonal Balance", "Hair Health"],
    conditions: ["Benign Prostatic Hyperplasia (BPH)", "Urinary Tract Symptoms", "Male Pattern Baldness", "Hormonal Imbalance", "Prostatitis"],
    warnings: [
      "May cause digestive upset, headache, dizziness, or decreased libido in some individuals.",
      "May interact with hormone therapies, blood thinners, and medications for enlarged prostate.",
      "May affect PSA (prostate-specific antigen) test results. Inform healthcare providers before testing.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood clotting."
    ],
    dosage: {
      adult: "Standardized extract (85-95% fatty acids and sterols): 160mg twice daily or 320mg once daily. Liquid extract: 1-2ml (20-40 drops) 2-3 times daily.",
      child: "Not recommended for children.",
      elderly: "Standard adult dose is generally appropriate for elderly men and may be particularly beneficial for age-related prostate concerns.",
      pregnant: "Not applicable for pregnant women. Not traditionally used for women's health conditions.",
      maximum: "Do not exceed 320mg of standardized extract or 6ml of liquid extract daily. Effects may take 4-6 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For prostate support: Steep 1-2 teaspoons of dried saw palmetto berries in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a strong, earthy taste that can be improved with honey. Note: Tea is less effective than standardized extracts for prostate support as the active compounds are not very water-soluble.",
      tincture: "Combine 1 part dried saw palmetto berries with 5 parts 60-70% alcohol (higher alcohol percentage needed to extract fat-soluble compounds). Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 2-3 times daily.",
      capsules: "Standardized extract capsules (typically 160mg) can be taken 2 times daily with meals. Look for products standardized to contain 85-95% fatty acids and sterols. This is the most reliable form for consistent results.",
      oil: "For topical use in hair loss: Some commercial preparations combine saw palmetto extract with carrier oils for scalp application. Apply as directed on the product, typically massaging into the scalp once daily. Results may take 3-6 months to become noticeable."
    }
  },
  {
    id: "29",
    name: "Skullcap",
    scientificName: "Scutellaria lateriflora",
    description: "Skullcap is a flowering plant used in traditional medicine for anxiety, nervous tension, and convulsions. It has a calming effect on the nervous system.",
    uses: ["Anxiety relief", "Sleep improvement", "Nervous tension", "Headache relief"],
    preparation: "Available as tea, tincture, capsules, or extract. For tea, steep 1-2 teaspoons of dried herb in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "May reduce anxiety", "Improves sleep quality", "Has antispasmodic properties"],
    category: "Nervous system",
    collections: ["Brain & Nervous System", "Native American", "Sleep & Relaxation", "Nervine Herbs", "Stress Relief"],
    conditions: ["Anxiety", "Insomnia", "Nervous Tension", "Headaches", "Muscle Spasms", "Seizure Disorders"],
    warnings: [
      "May cause drowsiness and should not be combined with sedative medications, alcohol, or other sleep-inducing herbs.",
      "May interact with medications for anxiety, insomnia, and seizures.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential sedative effects.",
      "Rare cases of liver damage have been reported with some skullcap products (though often due to adulteration with germander)."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons (1-2g) of dried herb steeped in hot water 2-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Extract: 250-500mg 3 times daily.",
      child: "Not recommended for children under 12 without professional guidance. For children 12-18, half the adult dose may be appropriate.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for elderly with anxiety or sleep disturbances.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For anxiety or insomnia: Steep 1-2 teaspoons of dried skullcap herb in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 2-3 times daily for anxiety, or 1 cup 30-60 minutes before bedtime for sleep support. The tea has a slightly bitter taste that can be improved with honey and lemon balm.",
      tincture: "Combine 1 part dried skullcap herb with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for anxiety or 30-60 minutes before bedtime for sleep.",
      capsules: "Dried herb capsules (typically 400-500mg) can be taken 3 times daily with meals. For standardized extracts, follow manufacturer's recommendations.",
      decoction: "For stronger nervous system support: Simmer 1 tablespoon dried skullcap in 2 cups water for 15 minutes. Strain and drink 1/2 cup 2-3 times daily. This preparation is particularly helpful for tension headaches and muscle spasms."
    }
  },
  {
    id: "30",
    name: "Ginkgo Biloba",
    scientificName: "Ginkgo biloba",
    description: "Ginkgo biloba is one of the oldest living tree species, used in traditional Chinese medicine for thousands of years. It's known for improving blood flow and cognitive function.",
    uses: ["Cognitive enhancement", "Circulation improvement", "Memory support", "Tinnitus relief"],
    preparation: "Available as capsules, tablets, liquid extracts, or tea. Standard dose is 120-240mg of standardized extract daily.",
    imageUrl: "https://images.unsplash.com/photo-1631528754096-1047b0302be2?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves blood circulation", "Enhances cognitive function", "Contains antioxidants", "May help with tinnitus"],
    category: "Cognitive health",
    collections: ["Brain & Nervous System", "Traditional Chinese Medicine", "Cardiovascular Support", "Antioxidant Rich", "Longevity Herbs"],
    conditions: ["Cognitive Decline", "Memory Loss", "Tinnitus", "Peripheral Vascular Disease", "Vertigo", "Age-Related Macular Degeneration"],
    warnings: [
      "May increase risk of bleeding when combined with blood-thinning medications or herbs.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood clotting.",
      "May cause digestive upset, headache, dizziness, or allergic skin reactions in some individuals.",
      "May interact with medications for seizures, diabetes, and psychiatric conditions."
    ],
    dosage: {
      adult: "Standardized extract (24% flavone glycosides, 6% terpene lactones): 120-240mg daily, divided into 2-3 doses. Leaf tea: 3-4g dried leaf daily.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals and may be particularly beneficial for age-related cognitive decline.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data and potential effects on blood flow.",
      maximum: "Do not exceed 240mg of standardized extract daily. Effects may take 4-6 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For cognitive support: Steep 1-2 teaspoons of dried ginkgo leaves in 8oz hot water for 10 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a slightly bitter taste that can be improved with honey and lemon. Note: Tea is less standardized and may contain variable amounts of active compounds compared to extracts.",
      tincture: "Combine 1 part dried ginkgo leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily. Commercial tinctures are more reliable for consistent dosing.",
      capsules: "Standardized extract capsules (typically 60-120mg) can be taken 2 times daily with meals. Look for products standardized to contain 24% flavone glycosides and 6% terpene lactones. This is the most reliable form for consistent results.",
      decoction: "Not traditionally prepared as a decoction as the active compounds may be degraded by prolonged heat. Infusion (tea) or standardized extracts are preferred methods."
    }
  },
  {
    id: "31",
    name: "Mullein",
    scientificName: "Verbascum thapsus",
    description: "Mullein is a biennial plant with soft, woolly leaves and tall flowering stalks. It has been used traditionally for respiratory conditions and ear infections.",
    uses: ["Respiratory support", "Ear health", "Lymphatic support", "Skin care"],
    preparation: "The leaves can be made into tea, tinctures, or oil infusions. For tea, steep 1-2 teaspoons of dried leaf in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1567334726983-84df9c86e689?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes respiratory tract", "Supports ear health", "Has mild expectorant properties", "Helps with lymphatic drainage"],
    category: "Respiratory health",
    collections: ["Respiratory Support", "European Traditional", "Native American", "First Aid Herbs", "Ear Health"],
    conditions: ["Cough", "Bronchitis", "Ear Infections", "Asthma", "Sore Throat", "Lymphatic Congestion"],
    warnings: [
      "The tiny hairs on the leaves may cause throat irritation if not properly filtered from tea.",
      "Rarely causes contact dermatitis in sensitive individuals.",
      "Seeds contain rotenone and other compounds that should not be consumed.",
      "May interact with diabetes medications and lithium."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried leaves steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Ear oil: 2-3 drops in affected ear 2-3 times daily.",
      child: "Tea: 1/2-1 teaspoon dried leaves steeped in hot water 2-3 times daily for children over 5. Ear oil: 1-2 drops in affected ear 2 times daily (consult healthcare provider first).",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding, but consult healthcare provider before use.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For respiratory support: Steep 1-2 teaspoons of dried mullein leaves in 8oz hot water for 10-15 minutes. Strain through a fine cloth or coffee filter to remove the tiny hairs that can irritate the throat. Drink 1 cup 3 times daily for coughs, bronchitis, or congestion. Add honey and lemon for taste and additional soothing effects.",
      tincture: "Combine 1 part dried mullein leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain through a fine cloth. Take 2-4ml (40-80 drops) in water 3 times daily for respiratory conditions.",
      oil: "For ear infections: Infuse 1 cup of mullein flowers in 1/2 cup olive oil over very low heat for 3-4 hours or in a sunny window for 1-2 weeks. Strain through cheesecloth. Store in dark bottles. Warm slightly and place 2-3 drops in affected ear, keeping head tilted for 5 minutes. Can be combined with garlic for enhanced antimicrobial effects.",
      poultice: "For skin conditions or external inflammation: Grind dried mullein leaves to a powder and mix with enough warm water to create a paste. Apply directly to affected areas, cover with a clean cloth, and leave for 1-2 hours. Alternatively, wrap fresh leaves in a thin cloth, crush slightly, and apply."
    }
  },
  {
    id: "32",
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    description: "Yarrow is a flowering plant known for its feathery leaves and clusters of small flowers. It has been used for centuries to stop bleeding, reduce fever, and aid digestion.",
    uses: ["Wound healing", "Fever reduction", "Digestive support", "Menstrual regulation"],
    preparation: "Can be used as tea, tincture, or poultice. For tea, steep 1-2 teaspoons of dried herb in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1598511726623-d2e9996e8a69?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stops bleeding", "Reduces inflammation", "Supports digestion", "Has antimicrobial properties"],
    category: "First aid",
    collections: ["First Aid Herbs", "European Traditional", "Native American", "Women's Health", "Digestive Health"],
    conditions: ["Wounds", "Fever", "Digestive Disorders", "Heavy Menstruation", "Inflammation", "Hypertension"],
    warnings: [
      "May cause allergic reactions in people allergic to plants in the daisy family (ragweed, chrysanthemums, marigolds).",
      "May increase photosensitivity in some individuals.",
      "May interact with blood-thinning medications, blood pressure medications, and lithium.",
      "Should be used with caution during pregnancy as it may affect uterine tone."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Poultice: Apply to wounds as needed.",
      child: "Tea: 1/2-1 teaspoon dried herb steeped in hot water 1-2 times daily for children over 5. External applications generally safe under supervision.",
      elderly: "Standard adult dose is generally well-tolerated by elderly individuals.",
      pregnant: "Not recommended during pregnancy except under professional guidance. May stimulate menstrual flow.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For fever or digestive support: Steep 1-2 teaspoons of dried yarrow flowers and leaves in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 3 times daily. For fever, drink hot to promote sweating. For digestive issues, drink 30 minutes before meals. The tea has a bitter, aromatic taste that can be improved with honey and mint.",
      tincture: "Combine 1 part dried yarrow herb with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for internal use, or apply directly to wounds to stop bleeding.",
      poultice: "For wounds and bleeding: Crush fresh yarrow leaves and flowers (or rehydrate dried herb with a small amount of hot water) until they form a paste. Apply directly to wounds, cuts, or bruises to stop bleeding and promote healing. Cover with a clean cloth and change every 2-4 hours.",
      oil: "For inflammatory skin conditions: Infuse 1 cup of dried yarrow in 2 cups olive oil over very low heat for 3-4 hours or in a sunny window for 2 weeks. Strain through cheesecloth. Store in dark bottles. Apply to inflamed skin, bruises, or varicose veins 2-3 times daily."
    }
  },
  {
    id: "33",
    name: "Burdock Root",
    scientificName: "Arctium lappa",
    description: "Burdock is a biennial plant with large leaves and burr-like flowers. Its root has been used in traditional medicine for detoxification and skin conditions.",
    uses: ["Skin health", "Detoxification", "Digestive support", "Blood purification"],
    preparation: "Can be consumed as tea, tincture, or added to soups. For tea, simmer 1-2 teaspoons of dried root in water for 15-20 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1628955889369-979f9973a77e?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Improves skin conditions", "Aids digestion", "Has antioxidant properties"],
    category: "Detoxification",
    collections: ["Detoxification", "Traditional Chinese Medicine", "Japanese Traditional", "Skin Health", "Digestive Health"],
    conditions: ["Acne", "Eczema", "Psoriasis", "Digestive Disorders", "Liver Congestion", "Lymphatic Stagnation"],
    warnings: [
      "May cause allergic reactions in people allergic to plants in the daisy family (ragweed, chrysanthemums, marigolds).",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "May interact with diuretic medications and blood thinners.",
      "Should be avoided before surgery due to potential effects on blood glucose levels."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried root simmered in water for 15-20 minutes, 2-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Dried root: 1-2g three times daily.",
      child: "Not typically recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally appropriate, though starting with lower doses may be advisable.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data.",
      maximum: "Do not exceed 6g of dried root or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For skin conditions or detoxification: Simmer 1-2 teaspoons of dried burdock root in 2 cups water for 15-20 minutes (decoction method). Strain and drink 1 cup 2-3 times daily. The tea has an earthy, slightly bitter taste that can be improved with honey and cinnamon. For enhanced detoxification effects, combine with dandelion root.",
      tincture: "Combine 1 part dried burdock root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for skin conditions or liver support.",
      decoction: "For stronger medicinal effects: Simmer 1 tablespoon dried burdock root in 3 cups water for 20-30 minutes until reduced by one-third. Strain and drink 1/2 cup 3 times daily. This stronger preparation is particularly helpful for chronic skin conditions and deep detoxification.",
      syrup: "As a medicinal food preparation: Simmer 1 cup chopped burdock root in 2 cups water for 30 minutes until reduced by half. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 1 month. Take 1 tablespoon daily for skin and digestive support. Burdock can also be sliced thinly and added to soups, stews, and stir-fries. In Japanese cuisine (where it's known as gobo), it's often sautéed with carrots and sesame oil."
    }
  },
  {
    id: "34",
    name: "Red Clover",
    scientificName: "Trifolium pratense",
    description: "Red clover is a flowering plant rich in isoflavones. It has been used traditionally for women's health, skin conditions, and respiratory issues.",
    uses: ["Women's health", "Skin support", "Respiratory health", "Blood cleansing"],
    preparation: "Can be consumed as tea, tincture, or in capsule form. For tea, steep 1-2 teaspoons of dried flowers in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1568397284298-5bd87e327dd1?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports hormonal balance", "May help with menopausal symptoms", "Improves skin health", "Supports respiratory function"],
    category: "Women's health",
    collections: ["Women's Herbs", "European Traditional", "Skin Health", "Respiratory Support", "Blood Purifiers"],
    conditions: ["Menopausal Symptoms", "Hormonal Imbalance", "Eczema", "Psoriasis", "Bronchitis", "Lymphatic Congestion"],
    warnings: [
      "May interact with hormone therapies, birth control, blood thinners, and medications for breast cancer.",
      "Not recommended for those with hormone-sensitive conditions such as endometriosis, uterine fibroids, or certain cancers.",
      "May enhance the effects of blood-thinning medications.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood clotting."
    ],
    dosage: {
      adult: "Tea: 1-3 teaspoons dried flowers steeped in hot water 2-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Standardized extract: 40-160mg daily of isoflavones.",
      child: "Not typically recommended for children, especially girls, due to phytoestrogen content.",
      elderly: "Standard adult dose is generally appropriate for elderly women and may be particularly beneficial for menopausal and post-menopausal symptoms.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to hormonal effects.",
      maximum: "Do not exceed 160mg of isoflavones or 12ml of tincture daily. Effects may take 2-3 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For menopausal support: Steep 1-3 teaspoons of dried red clover blossoms in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a slightly sweet, pleasant taste. For enhanced hormonal support, combine with sage or black cohosh. For skin conditions, drink 3 cups daily for at least 3 weeks.",
      tincture: "Combine 1 part dried red clover blossoms with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for hormonal balance or skin conditions.",
      capsules: "Standardized extract capsules (typically 40mg isoflavones) can be taken 1-4 times daily with meals. Look for products standardized to contain isoflavones. This is the most reliable form for consistent hormonal support.",
      syrup: "For children's respiratory support (over 6 years): Simmer 1 cup dried red clover blossoms in 2 cups water for 20 minutes until reduced by half. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 1 month. Give 1 teaspoon 2-3 times daily for coughs and bronchial conditions."
    }
  },
  {
    id: "35",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    description: "Thyme is an aromatic herb with small, fragrant leaves. It has been used for centuries for its antiseptic properties and respiratory benefits.",
    uses: ["Respiratory support", "Immune enhancement", "Antimicrobial", "Digestive aid"],
    preparation: "Can be used fresh or dried in cooking, steeped as tea, or used as an essential oil in diluted form.",
    imageUrl: "https://images.unsplash.com/photo-1589881920074-caa368296a2f?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports respiratory health", "Soothes coughs", "Aids digestion"],
    category: "Respiratory health",
    collections: ["Respiratory Support", "Mediterranean Traditional", "Culinary Herbs", "Antimicrobial", "Essential Oils"],
    conditions: ["Cough", "Bronchitis", "Sore Throat", "Digestive Disorders", "Bacterial Infections", "Fungal Infections"],
    warnings: [
      "Essential oil should never be consumed internally and must be properly diluted for topical use.",
      "May interact with blood-thinning medications and certain antidepressants.",
      "May stimulate menstrual flow and should be used with caution during pregnancy.",
      "Can cause contact dermatitis in sensitive individuals when used topically."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 2-3 times daily. Tincture: 1-2ml (20-40 drops) 3 times daily. Culinary: As desired in cooking.",
      child: "Tea: 1/2-1 teaspoon dried herb steeped in hot water 1-2 times daily for children over 5. Honey-thyme syrup: 1/2-1 teaspoon as needed for cough.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals.",
      pregnant: "Culinary amounts are safe during pregnancy, but medicinal amounts should be avoided as they may stimulate menstrual flow.",
      maximum: "Do not exceed 6g of dried herb or 6ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For respiratory infections: Steep 1-2 teaspoons of dried thyme in 8oz hot water for 10-15 minutes, covered to retain essential oils. Strain and drink 1 cup 2-3 times daily. Add honey and lemon for sore throat or cough. The tea has a strong, aromatic flavor with notes of camphor and mint.",
      tincture: "Combine 1 part dried thyme with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 3 times daily for respiratory or digestive support.",
      syrup: "For cough relief: Simmer 1/4 cup dried thyme in 1 cup water for 15 minutes. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 3 months. Take 1 teaspoon every 2-3 hours for acute cough, or 3 times daily for chronic cough.",
      oil: "For topical infections: Infuse 1 cup dried thyme in 2 cups olive oil over very low heat for 3-4 hours. Strain through cheesecloth. Store in dark bottles. Apply to fungal skin infections 2-3 times daily. Can also be used as a chest rub for respiratory congestion when combined with eucalyptus essential oil."
    }
  },
  {
    id: "36",
    name: "Plantain",
    scientificName: "Plantago major",
    description: "Plantain is a common lawn plant with broad leaves. It has been used traditionally for wound healing, skin irritations, and digestive issues.",
    uses: ["Wound healing", "Skin soothing", "Digestive support", "Respiratory health"],
    preparation: "Fresh leaves can be applied directly to wounds, dried for tea, or made into a salve. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1542483110-82a2790bc74a?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Natural antimicrobial", "Soothes skin inflammation", "Supports digestive health", "Helps with respiratory conditions"],
    category: "First aid",
    collections: ["First Aid Herbs", "Weeds as Medicine", "Native American", "Skin Health", "Digestive Health"],
    conditions: ["Wounds", "Insect Bites", "Skin Irritations", "Digestive Inflammation", "Respiratory Irritation", "Urinary Tract Infections"],
    warnings: [
      "Rarely causes allergic reactions in sensitive individuals.",
      "May interact with blood-thinning medications and lithium.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "May increase the effects of diuretic medications."
    ],
    dosage: {
      adult: "Tea: 1-3 teaspoons dried herb steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Fresh leaf poultice: Apply as needed to wounds or bites.",
      child: "Tea: 1/2-1 teaspoon dried herb steeped in hot water 1-2 times daily for children over 5. External applications generally safe under supervision.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding in moderate amounts, but consult healthcare provider before use.",
      maximum: "Do not exceed 9g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For digestive or respiratory inflammation: Steep 1-3 teaspoons of dried plantain leaves in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 3 times daily. The tea has a mild, slightly earthy taste. For digestive issues, drink 30 minutes before meals. For respiratory conditions, add honey for additional soothing effects.",
      tincture: "Combine 1 part dried plantain leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for internal use, or apply directly to insect bites or minor wounds.",
      poultice: "For wounds, bites, or skin irritations: Crush fresh plantain leaves (or rehydrate dried leaves with a small amount of hot water) until they form a paste. Apply directly to affected areas, cover with a clean cloth, and change every 2-4 hours. For drawing out splinters or stingers, apply the poultice and secure with a bandage overnight.",
      oil: "For skin conditions and wound healing: Infuse 1 cup of dried plantain leaves in 2 cups olive oil over very low heat for 3-4 hours or in a sunny window for 2 weeks. Strain through cheesecloth. Store in dark bottles. Apply to minor wounds, insect bites, rashes, or eczema 2-3 times daily. Can be solidified into a salve by adding 1/4 cup beeswax to 1 cup of strained oil and heating until melted."
    }
  },
  {
    id: "37",
    name: "Borage",
    scientificName: "Borago officinalis",
    description: "Borage is a flowering herb with star-shaped blue flowers. It has been used traditionally for its anti-inflammatory properties and as a source of gamma-linolenic acid.",
    uses: ["Skin health", "Anti-inflammatory", "Adrenal support", "Mood enhancement"],
    preparation: "The leaves and flowers can be consumed fresh in salads, steeped as tea, or used to make infused oil. For tea, steep 1-2 teaspoons of dried herb in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1560850038-f95de6e715b3?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in essential fatty acids", "Supports skin health", "Has anti-inflammatory properties", "May support adrenal function"],
    category: "Skin health",
    collections: ["Skin Health", "European Traditional", "Culinary Herbs", "Mood Support", "Anti-inflammatory"],
    conditions: ["Eczema", "Dermatitis", "Rheumatoid Arthritis", "Adrenal Fatigue", "Depression", "Premenstrual Syndrome"],
    warnings: [
      "Contains pyrrolizidine alkaloids that may be harmful to the liver when consumed in large amounts or for extended periods.",
      "Should be avoided during pregnancy and breastfeeding due to potential hormonal effects.",
      "May interact with blood-thinning medications and medications that affect the liver.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood clotting."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 2-3 times daily. Tincture: 1-2ml (20-40 drops) 3 times daily. Seed oil (GLA): 500-1000mg daily.",
      child: "Not recommended for children due to pyrrolizidine alkaloid content. Borage seed oil may be used externally for skin conditions under supervision.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for inflammatory conditions common in elderly individuals.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to pyrrolizidine alkaloid content and potential hormonal effects.",
      maximum: "Do not exceed 4g of dried herb or 6ml of tincture daily. Limit internal use to 4-8 weeks at a time, followed by a break."
    },
    detailedPreparation: {
      tea: "For mood support or inflammation: Steep 1-2 teaspoons of dried borage leaves and flowers in 8oz hot water for 10 minutes. Strain carefully to remove any fine hairs. Drink 1 cup 2-3 times daily. The tea has a mild, cucumber-like flavor. Note: Long-term internal use is not recommended due to pyrrolizidine alkaloids.",
      tincture: "Combine 1 part dried borage herb with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-2ml (20-40 drops) in water 3 times daily for adrenal support or inflammation. Limit use to 4-8 weeks at a time.",
      oil: "For skin conditions: Infuse 1 cup of dried borage flowers in 2 cups olive oil over very low heat for 3-4 hours or in a sunny window for 2 weeks. Strain through cheesecloth. Store in dark bottles. Apply to eczema, dermatitis, or dry skin 2-3 times daily. Commercial borage seed oil (rich in GLA) can also be applied directly to skin or taken in capsule form for internal use.",
      capsules: "Borage seed oil capsules (typically 1000mg) can be taken once daily with food. Look for products that specify they are free of pyrrolizidine alkaloids. This is the safest form for internal use, particularly for inflammatory conditions and hormonal balance."
    }
  },
  {
    id: "38",
    name: "Cat's Claw",
    scientificName: "Uncaria tomentosa",
    description: "Cat's Claw is a woody vine native to the Amazon rainforest. Its bark and root have been used in traditional medicine for immune support and inflammation reduction.",
    uses: ["Immune support", "Anti-inflammatory", "Arthritis relief", "Digestive aid"],
    preparation: "Available as capsules, tablets, tinctures, or tea. For tea, simmer 1 teaspoon of dried bark in water for 15-20 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1603478614550-fc162e5d3e3d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "Reduces inflammation", "Supports joint health", "Has antioxidant properties"],
    category: "Immune system",
    collections: ["Immune Support", "Amazonian Traditional", "Anti-inflammatory", "Joint Health", "Digestive Health"],
    conditions: ["Rheumatoid Arthritis", "Osteoarthritis", "Inflammatory Bowel Disease", "Viral Infections", "Lyme Disease", "Gastric Ulcers"],
    warnings: [
      "May enhance the effects of blood-thinning medications and should be discontinued 2 weeks before surgery.",
      "May interact with medications that suppress the immune system, blood pressure medications, and hormone therapies.",
      "Should be avoided during pregnancy and breastfeeding due to potential effects on hormones and the uterus.",
      "May lower blood pressure and blood sugar levels, requiring monitoring in susceptible individuals."
    ],
    dosage: {
      adult: "Tea: 1 teaspoon dried bark simmered in water for 15-20 minutes, 1-3 times daily. Tincture: 1-4ml (20-80 drops) 3 times daily. Standardized extract: 250-500mg 3 times daily.",
      child: "Not recommended for children under 12 without professional guidance.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for inflammatory conditions common in elderly individuals.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to potential effects on hormones and the uterus.",
      maximum: "Do not exceed 3g of dried bark or 12ml of tincture daily. Effects may take 2-4 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For immune support or inflammation: Simmer 1 teaspoon of dried cat's claw bark in 8oz water for 15-20 minutes (decoction method). Strain and drink 1 cup 1-3 times daily. The tea has a bitter, woody taste that can be improved with honey and cinnamon. For enhanced immune support, combine with echinacea or elderberry.",
      tincture: "Combine 1 part dried cat's claw bark with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 1-4ml (20-80 drops) in water 3 times daily for immune support or inflammatory conditions.",
      capsules: "Standardized extract capsules (typically 250-500mg) can be taken 3 times daily with meals. Look for products standardized to contain 3% alkaloids and 15% polyphenols. This is the most reliable form for consistent results, particularly for inflammatory conditions.",
      decoction: "For stronger medicinal effects: Simmer 1 tablespoon dried cat's claw bark in 3 cups water for 20-30 minutes until reduced by one-third. Strain and drink 1/2 cup 3 times daily. This stronger preparation is particularly helpful for chronic inflammatory conditions and autoimmune support."
    }
  },
  {
    id: "39",
    name: "Chickweed",
    scientificName: "Stellaria media",
    description: "Chickweed is a common garden weed with small white star-shaped flowers. It has been used traditionally for skin conditions, digestive issues, and as a cooling herb.",
    uses: ["Skin conditions", "Cooling effect", "Digestive support", "Eye health"],
    preparation: "Can be eaten fresh in salads, made into tea, or used as a poultice. For tea, steep 1-2 teaspoons of dried herb in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1600106621183-82aa7cd8581a?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Cools and soothes skin", "Rich in vitamins and minerals", "Has anti-inflammatory properties", "Supports digestive health"],
    category: "Skin health",
    collections: ["Skin Health", "Weeds as Medicine", "European Traditional", "Cooling Herbs", "Digestive Health"],
    conditions: ["Eczema", "Psoriasis", "Rashes", "Itching", "Minor Burns", "Digestive Inflammation", "Conjunctivitis"],
    warnings: [
      "Rarely causes allergic reactions in sensitive individuals.",
      "May enhance the effects of blood-thinning medications and lithium.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "Should be harvested from areas free of pesticides and pollutants."
    ],
    dosage: {
      adult: "Tea: 1-3 teaspoons dried herb steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Fresh herb: 1-2 tablespoons in salads daily.",
      child: "Tea: 1/2-1 teaspoon dried herb steeped in hot water 1-2 times daily for children over 5. External applications generally safe under supervision.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding in moderate amounts, but consult healthcare provider before use.",
      maximum: "Do not exceed 9g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For cooling inflammation: Steep 1-3 teaspoons of dried chickweed in 8oz hot water for 10 minutes. Strain and drink 1 cup 3 times daily. The tea has a mild, pleasant taste similar to corn silk. For digestive issues, drink 30 minutes before meals. For skin conditions, drink 3 cups daily while also applying externally.",
      tincture: "Combine 1 part fresh chickweed (or 1/2 part dried) with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for internal use, or apply directly to itchy skin conditions.",
      poultice: "For skin irritations or minor burns: Crush fresh chickweed (or rehydrate dried herb with a small amount of hot water) until it forms a paste. Apply directly to affected areas, cover with a clean cloth, and change every 2-4 hours. For drawing out splinters or reducing inflammation, apply and secure with a bandage.",
      oil: "For itchy skin conditions: Infuse 1 cup of dried chickweed in 2 cups olive oil over very low heat for 3-4 hours or in a sunny window for 2 weeks. Strain through cheesecloth. Store in dark bottles. Apply to eczema, psoriasis, or other itchy skin conditions 2-3 times daily. Can be solidified into a salve by adding 1/4 cup beeswax to 1 cup of strained oil and heating until melted."
    }
  },
  {
    id: "40",
    name: "Fenugreek",
    scientificName: "Trigonella foenum-graecum",
    description: "Fenugreek is an herb with small leaflets and distinctive yellow-brown seeds. It has been used in traditional medicine for digestive issues, blood sugar management, and to support nursing mothers.",
    uses: ["Lactation support", "Blood sugar management", "Digestive aid", "Cholesterol support"],
    preparation: "Seeds can be sprouted, used whole or ground in cooking, or steeped as tea. For tea, use 1 teaspoon of seeds in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1593477187573-c7aa313bc772?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May increase milk production", "Supports blood sugar balance", "Aids digestion", "Rich in nutrients"],
    category: "Women's health",
    collections: ["Women's Herbs", "Men's Herbs", "Indian Traditional", "Middle Eastern", "Culinary Herbs", "Digestive Health"],
    conditions: ["Low Milk Production", "Type 2 Diabetes", "High Cholesterol", "Low Testosterone", "Loss of Appetite", "Digestive Inflammation"],
    warnings: [
      "May cause uterine contractions and should be avoided during pregnancy except under professional guidance.",
      "May enhance the effects of blood-thinning and diabetes medications, requiring dose adjustments.",
      "Can cause maple syrup odor in urine, sweat, and breast milk.",
      "May cause digestive upset, allergic reactions, or hypoglycemia in sensitive individuals."
    ],
    dosage: {
      adult: "Seeds: 1-2 teaspoons (5-10g) whole or ground seeds 2-3 times daily. Capsules: 500-1000mg 3 times daily. Tea: 1 teaspoon seeds steeped in hot water 3 times daily.",
      child: "Not recommended for children except under professional guidance.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. Monitor blood sugar levels closely in diabetic individuals.",
      pregnant: "Not recommended during pregnancy due to potential uterine stimulation. Safe during breastfeeding and often used to increase milk production.",
      maximum: "Do not exceed 6g of seeds per dose or 18g daily. Effects on milk production may take 24-72 hours to become noticeable."
    },
    detailedPreparation: {
      tea: "For lactation support: Steep 1 teaspoon of fenugreek seeds in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 3 times daily. The tea has a bitter, maple-like flavor that can be improved with honey and lemon. For enhanced lactation support, combine with blessed thistle. For blood sugar management, drink 30 minutes before meals.",
      tincture: "Combine 1 part fenugreek seeds with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for digestive support or hormonal balance.",
      capsules: "Standardized seed extract capsules (typically 500-1000mg) can be taken 3 times daily with meals. This is the most convenient form for consistent dosing, particularly for blood sugar management and cholesterol support.",
      syrup: "For men's health and testosterone support: Simmer 1/4 cup crushed fenugreek seeds in 2 cups water for 15 minutes until reduced by half. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 3 months. Take 1 tablespoon twice daily. Can be combined with other men's herbs like tribulus or ashwagandha for enhanced effects."
    }
  },
  {
    id: "41",
    name: "Comfrey",
    scientificName: "Symphytum officinale",
    description: "Comfrey is a perennial herb with large, hairy leaves and bell-shaped flowers. It has been used traditionally for wound healing, bone health, and respiratory issues.",
    uses: ["Wound healing", "Bone and joint support", "Skin conditions", "Anti-inflammatory"],
    preparation: "Primarily used externally as a poultice, salve, or oil. Internal use is not recommended due to potential liver toxicity.",
    imageUrl: "https://images.unsplash.com/photo-1590172109361-fb0926e841cd?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes tissue regeneration", "Supports bone and joint health", "Soothes skin irritations", "Contains allantoin for cell proliferation"],
    category: "First aid",
    collections: ["First Aid Herbs", "European Traditional", "External Use Only", "Skin Health", "Bone & Joint Support"],
    conditions: ["Sprains", "Bruises", "Fractures", "Wounds", "Arthritis", "Skin Ulcers", "Eczema"],
    warnings: [
      "Contains pyrrolizidine alkaloids that are toxic to the liver. NOT recommended for internal use.",
      "Should not be applied to deep wounds or broken skin as rapid healing may trap bacteria and cause infection.",
      "Should not be used for more than 4-6 weeks externally without a break.",
      "Not recommended for pregnant or breastfeeding women, even externally."
    ],
    dosage: {
      adult: "External use only: Apply poultice, salve, or oil to affected areas 2-3 times daily. Do not use on broken skin or deep wounds.",
      child: "External use only under supervision: Apply poultice, salve, or oil to affected areas 1-2 times daily. Do not use on broken skin or deep wounds.",
      elderly: "External use only: Apply poultice, salve, or oil to affected areas 1-2 times daily. May be particularly beneficial for arthritic joints.",
      pregnant: "Not recommended during pregnancy or breastfeeding, even for external use, due to potential absorption of pyrrolizidine alkaloids.",
      maximum: "External use only. Limit application to 4-6 weeks at a time, followed by a break."
    },
    detailedPreparation: {
      poultice: "For sprains, bruises, or closed fractures: Crush fresh comfrey leaves (or rehydrate dried leaves with a small amount of hot water) until they form a paste. Apply directly to affected areas, cover with a clean cloth, and secure with a bandage. Change every 4-6 hours. Do not apply to broken skin or open wounds as rapid healing may trap bacteria.",
      oil: "For joint pain and inflammation: Infuse 1 cup of dried comfrey leaves and root in 2 cups olive oil over very low heat for 3-4 hours. Strain through cheesecloth. Store in dark bottles. Apply to arthritic joints, sprains, or bruises 2-3 times daily. Can be solidified into a salve by adding 1/4 cup beeswax to 1 cup of strained oil and heating until melted.",
      tincture: "For external use only: Combine 1 part dried comfrey leaves and root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Apply directly to bruises, sprains, or arthritic joints. Can also be diluted in water to make a compress for larger areas.",
      decoction: "For external wash only: Simmer 1 tablespoon dried comfrey root in 2 cups water for 15-20 minutes. Strain and allow to cool to a comfortable temperature. Use as a wash for skin conditions or as a soak for sprains and strains. Never consume internally."
    }
  },
  {
    id: "42",
    name: "Slippery Elm",
    scientificName: "Ulmus rubra",
    description: "Slippery Elm is a tree native to North America with reddish-brown bark. The inner bark has been used traditionally for digestive issues, respiratory conditions, and wound healing.",
    uses: ["Digestive soothing", "Respiratory support", "Wound healing", "Throat comfort"],
    preparation: "Available as powder, capsules, lozenges, or tea. For tea, mix 1-2 teaspoons of powdered bark with water to form a paste, then add to hot water.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes mucous membranes", "Creates protective coating for digestive tract", "Rich in nutrients", "Eases sore throats"],
    category: "Digestive health",
    collections: ["Stomach Herbs", "Native American", "Digestive Health", "Respiratory Support", "First Aid Herbs"],
    conditions: ["Gastritis", "Acid Reflux", "Irritable Bowel Syndrome", "Sore Throat", "Cough", "Inflammatory Bowel Disease", "Diarrhea"],
    warnings: [
      "May slow absorption of medications if taken at the same time. Take at least 2 hours apart from medications.",
      "Can cause allergic reactions in people with elm allergies.",
      "Powder can cause respiratory irritation if inhaled.",
      "May lower blood sugar levels and should be used with caution by diabetics."
    ],
    dosage: {
      adult: "Powder: 1-2 teaspoons mixed with water 1-3 times daily. Capsules: 400-500mg 3-4 times daily. Lozenges: 1 lozenge as needed for sore throat.",
      child: "Powder: 1/4-1/2 teaspoon mixed with water 1-2 times daily for children over 2. Lozenges: For children over 6 who can safely use lozenges.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for digestive issues common in elderly.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding, but consult healthcare provider before use.",
      maximum: "Do not exceed 6 teaspoons of powder or 2000mg in capsules daily."
    },
    detailedPreparation: {
      tea: "For digestive soothing: Mix 1-2 teaspoons of slippery elm powder with a small amount of cold water to form a paste. Gradually add 8oz hot water while stirring to prevent clumping. Drink 1 cup 1-3 times daily, preferably between meals for digestive issues or before bed for acid reflux. The tea has a mild, slightly sweet taste with a mucilaginous texture. Can be flavored with honey and cinnamon.",
      capsules: "Powdered bark capsules (typically 400-500mg) can be taken 3-4 times daily with water. This is a convenient form for those who dislike the mucilaginous texture of the tea. Take between meals for digestive issues or 30 minutes before meals for acid reflux.",
      poultice: "For wounds or skin inflammation: Mix slippery elm powder with enough warm water to create a thick paste. Apply directly to affected areas, cover with a clean cloth, and leave for 1-2 hours. Particularly helpful for minor burns, boils, or abscesses.",
      syrup: "For sore throat and cough: Mix 1/4 cup slippery elm powder with 1 cup cold water to form a paste. Gradually add 1 cup hot water while stirring. Simmer on low heat for 5 minutes, then add 1 cup honey and 1 tablespoon lemon juice. Store refrigerated for up to 2 weeks. Take 1-2 tablespoons as needed for sore throat or cough."
    }
  }
,
  // --- Added from Herb Harmony Visualizer ---
  {
    id: "43",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "Ashwagandha is an adaptogenic herb used in Ayurvedic medicine to help the body manage stress, improve energy, and support cognitive function.",
    uses: ["Stress reduction", "Cognitive support", "Energy boost", "Hormonal balance"],
    preparation: "Commonly taken as capsules, powder, or tea. For tea, simmer 1 teaspoon of dried root in water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "Supports brain health", "Boosts energy", "Balances hormones"],
    category: "Brain",
    collections: ["Brain & Nervous System", "Ayurvedic", "Adaptogenic", "Men's Herbs", "Women's Health"],
    conditions: ["Anxiety", "Stress", "Insomnia", "Cognitive Decline", "Fatigue", "Thyroid Disorders", "Low Testosterone"],
    warnings: [
      "May interact with medications for thyroid disorders, diabetes, high blood pressure, and immunosuppressants.",
      "May increase the effects of sedatives and anti-anxiety medications.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on anesthesia.",
      "May cause digestive upset, drowsiness, or lower blood pressure in some individuals."
    ],
    dosage: {
      adult: "Root powder: 1-6g daily, divided into 2-3 doses. Standardized extract: 300-600mg daily. Tea: 1 teaspoon dried root simmered in water, 1-2 times daily.",
      child: "Not typically recommended for children under 12 without professional guidance.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for age-related cognitive decline.",
      pregnant: "Not recommended during pregnancy due to potential uterine-stimulating effects. Use with caution during breastfeeding.",
      maximum: "Do not exceed 6g of root powder or 600mg of standardized extract daily. Effects may take 2-4 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For stress reduction and energy: Simmer 1 teaspoon of dried ashwagandha root in 8oz water for 10-15 minutes. Strain and drink 1 cup 1-2 times daily. The tea has a strong, earthy taste that can be improved with honey, cinnamon, and a splash of milk. Best taken in the morning for energy or early evening for stress relief, but not right before bed as it may be stimulating for some people.",
      tincture: "Combine 1 part dried ashwagandha root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 2-3 times daily for stress management or hormonal balance.",
      capsules: "Standardized extract capsules (typically 300-600mg) can be taken 1-2 times daily with meals. Look for products standardized to contain 1-5% withanolides. This is the most convenient form for consistent dosing and avoiding the strong taste of the herb.",
      decoction: "For deeper nervous system support: Simmer 1 tablespoon ashwagandha root in 3 cups water for 20-30 minutes until reduced by one-third. Strain and drink 1/2 cup 2 times daily. Can be combined with other adaptogens like holy basil or rhodiola for enhanced effects. For a traditional Ayurvedic preparation, simmer with milk instead of water and add cardamom, cinnamon, and honey."
    }
  },
  {
    id: "44",
    name: "Holy Basil",
    scientificName: "Ocimum sanctum",
    description: "Holy Basil, or Tulsi, is revered in Ayurvedic medicine for its adaptogenic and anti-inflammatory properties, supporting the mind and body.",
    uses: ["Stress relief", "Immune support", "Respiratory health", "Blood sugar regulation"],
    preparation: "Used fresh or dried in teas, tinctures, or capsules. For tea, steep 1 tablespoon of leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress", "Supports immune function", "Balances blood sugar", "Anti-inflammatory"],
    category: "Brain",
    collections: ["Brain & Nervous System", "Ayurvedic", "Adaptogenic", "Respiratory Support", "Herbal Teas"],
    conditions: ["Anxiety", "Stress", "Type 2 Diabetes", "Common Cold", "Respiratory Infections", "Inflammation", "Fever"],
    warnings: [
      "May interact with blood-thinning medications and medications for diabetes.",
      "May decrease fertility and should be used with caution by those trying to conceive.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood clotting.",
      "May cause nausea or diarrhea in sensitive individuals when taken in large amounts."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried leaves steeped in hot water 2-3 times daily. Tincture: 2-3ml (40-60 drops) 3 times daily. Capsules: 300-600mg 2 times daily.",
      child: "Tea: 1/2-1 teaspoon dried leaves steeped in hot water 1-2 times daily for children over 5. Honey can be added for taste and additional benefits.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for age-related stress and inflammation.",
      pregnant: "Not recommended during pregnancy due to potential effects on fertility and uterine stimulation. Use with caution during breastfeeding.",
      maximum: "Do not exceed 6g of dried herb or 9ml of tincture daily. Effects may take 2-4 weeks to become noticeable for chronic conditions."
    },
    detailedPreparation: {
      tea: "For stress reduction and immune support: Steep 1-2 teaspoons of dried holy basil leaves in 8oz hot water for 5-10 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a pleasant, slightly spicy flavor with notes of clove. Can be enhanced with honey and lemon. For respiratory conditions, drink hot with added ginger and honey.",
      tincture: "Combine 1 part dried holy basil leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-3ml (40-60 drops) in water 3 times daily for stress management or immune support.",
      capsules: "Standardized extract capsules (typically 300-600mg) can be taken 2 times daily with meals. This is a convenient form for consistent dosing, particularly for blood sugar management and chronic stress.",
      syrup: "For respiratory support and cough: Simmer 1/4 cup dried holy basil leaves in 2 cups water for 15 minutes until reduced by half. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 3 months. Take 1 tablespoon 3 times daily for coughs, colds, or respiratory infections."
    }
  },
  {
    id: "45",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "Lemon Balm is a calming herb known for its mild sedative effects and ability to support cognitive function and mood.",
    uses: ["Anxiety relief", "Sleep aid", "Cognitive support", "Digestive aid"],
    preparation: "Used as tea, tincture, or in capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Improves sleep", "Supports memory", "Soothes digestion"],
    category: "Brain",
    collections: ["Brain & Nervous System", "European Traditional", "Herbal Teas", "Sleep & Relaxation", "Digestive Health"],
    conditions: ["Anxiety", "Insomnia", "Stress", "Cognitive Decline", "Digestive Disorders", "Herpes Simplex", "Headaches"],
    warnings: [
      "May interact with sedative medications, thyroid medications, and HIV medications.",
      "May cause increased drowsiness when combined with other sedative herbs or medications.",
      "May interfere with concentration when taken in large amounts during the day.",
      "May affect thyroid function when used in very large amounts or for extended periods."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried leaves steeped in hot water 2-3 times daily. Tincture: 2-3ml (40-60 drops) 3 times daily. Capsules: 300-600mg 2-3 times daily.",
      child: "Tea: 1/2-1 teaspoon dried leaves steeped in hot water 1-2 times daily for children over 5. Particularly helpful for restlessness and difficulty sleeping.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for age-related anxiety and sleep disturbances.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding in moderate amounts, but consult healthcare provider before use.",
      maximum: "Do not exceed 6g of dried herb or 9ml of tincture daily. Effects may be felt within 30-60 minutes for acute anxiety or sleep support."
    },
    detailedPreparation: {
      tea: "For anxiety or sleep support: Steep 1-2 teaspoons of dried lemon balm leaves in 8oz hot water for 10 minutes, covered to retain essential oils. Strain and drink 1 cup 2-3 times daily for anxiety, or 1 cup 30-60 minutes before bedtime for sleep. The tea has a pleasant, lemony flavor that can be enhanced with honey. For enhanced calming effects, combine with chamomile or lavender.",
      tincture: "Combine 1 part dried lemon balm leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-3ml (40-60 drops) in water 3 times daily for anxiety or stress management, or 30-60 minutes before bedtime for sleep support.",
      capsules: "Standardized extract capsules (typically 300-600mg) can be taken 2-3 times daily with meals. Look for products standardized to contain at least 5% rosmarinic acid. This is a convenient form for consistent dosing, particularly for cognitive support.",
      oil: "For herpes simplex or cold sores: Infuse 1 cup of dried lemon balm leaves in 2 cups olive oil over very low heat for 3-4 hours. Strain through cheesecloth. Store in dark bottles. Apply directly to cold sores or herpes lesions 3-4 times daily at the first sign of an outbreak. Can also be used as a massage oil for stress relief."
    }
  },
  {
    id: "46",
    name: "Periwinkle",
    scientificName: "Vinca minor",
    description: "Periwinkle contains vincamine, which supports healthy blood flow to the brain and may aid memory and cognitive function.",
    uses: ["Cognitive enhancement", "Memory support", "Circulation"],
    preparation: "Used in standardized extracts or teas. For tea, steep 1 teaspoon of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports memory", "Improves circulation to the brain", "May enhance cognition"],
    category: "Brain",
    collections: ["Brain & Nervous System", "European Traditional", "Cardiovascular Support", "Cognitive Enhancement", "Medicinal Alkaloids"],
    conditions: ["Cognitive Decline", "Memory Loss", "Poor Circulation", "Tinnitus", "Vertigo", "Vascular Dementia"],
    warnings: [
      "Contains potent alkaloids that can be toxic in high doses. Use only under professional guidance.",
      "May interact with blood pressure medications, blood thinners, and medications for diabetes.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood pressure and clotting.",
      "Not recommended for self-medication due to narrow therapeutic window and potential toxicity."
    ],
    dosage: {
      adult: "Standardized extract (vincamine): 15-30mg daily, divided into 2-3 doses. Tea: 1 teaspoon dried leaves steeped in hot water once daily (not recommended as primary treatment).",
      child: "Not recommended for children due to potent alkaloid content and lack of safety data.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for age-related cognitive decline and circulatory issues.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to potential effects on uterine tone and lack of safety data.",
      maximum: "Do not exceed 60mg of vincamine daily. Use only under professional guidance. Effects may take 2-4 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For mild cognitive support: Steep 1 teaspoon of dried periwinkle leaves in 8oz hot water for 10 minutes. Strain carefully and drink 1 cup once daily. The tea has a slightly bitter taste. Note: Tea is NOT recommended as primary treatment for cognitive conditions due to variable alkaloid content and potential toxicity. Standardized extracts are preferred for therapeutic use.",
      tincture: "Not recommended for home preparation due to variable alkaloid content and potential toxicity. Commercial standardized extracts of vincamine are preferred for therapeutic use.",
      capsules: "Standardized extract capsules (typically containing 5-10mg vincamine per capsule) can be taken 2-3 times daily with meals. This is the safest and most reliable form for consistent dosing of this potent herb. Only use products from reputable manufacturers that standardize for vincamine content.",
      decoction: "Not traditionally prepared as a decoction due to potential toxicity with concentrated preparations. Standardized extracts are the preferred method of administration for therapeutic effects."
    }
  },
  {
    id: "47",
    name: "Gotu Kola",
    scientificName: "Centella asiatica",
    description: "Gotu Kola is a traditional herb used for its ability to enhance cognitive function, support circulation, and promote calmness.",
    uses: ["Cognitive support", "Wound healing", "Stress relief", "Circulation"],
    preparation: "Consumed as tea, tincture, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory", "Reduces anxiety", "Supports circulation", "Promotes healing"],
    category: "Brain",
    collections: ["Brain & Nervous System", "Ayurvedic", "Traditional Chinese Medicine", "Skin Health", "Cardiovascular Support"],
    conditions: ["Cognitive Decline", "Anxiety", "Varicose Veins", "Venous Insufficiency", "Wound Healing", "Scar Tissue", "Cellulite"],
    warnings: [
      "May interact with medications for diabetes, high cholesterol, and sedatives.",
      "May cause skin irritation in sensitive individuals when applied topically.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood sugar and sedation.",
      "Long-term use may cause sensitivity to sunlight in some individuals."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 2-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Standardized extract: 60-120mg (containing 40% asiaticoside, 29-30% asiatic acid, 29-30% madecassic acid) 2-3 times daily.",
      child: "Not typically recommended for children under 12 without professional guidance.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for age-related cognitive decline and circulatory issues.",
      pregnant: "Not recommended during pregnancy due to insufficient safety data. Use with caution during breastfeeding.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily. Effects on cognitive function may take 4-6 weeks to become noticeable."
    },
    detailedPreparation: {
      tea: "For cognitive support and anxiety: Steep 1-2 teaspoons of dried gotu kola leaves in 8oz hot water for 10 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a mild, slightly bitter taste that can be improved with honey and lemon. For enhanced cognitive effects, combine with rosemary or bacopa.",
      tincture: "Combine 1 part dried gotu kola leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for cognitive support or circulatory issues.",
      capsules: "Standardized extract capsules (typically 60-120mg) can be taken 2-3 times daily with meals. Look for products standardized to contain triterpenoid compounds (asiaticoside, asiatic acid, madecassic acid). This is a convenient form for consistent dosing, particularly for long-term cognitive support.",
      poultice: "For wound healing and scar reduction: Crush fresh gotu kola leaves (or rehydrate dried leaves with a small amount of hot water) until they form a paste. Apply directly to wounds, scars, or areas with varicose veins, cover with a clean cloth, and change twice daily. For enhanced healing effects, mix with a small amount of honey before applying."
    }
  },
  {
    id: "48",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "Rosemary is an aromatic herb that supports memory, focus, and overall brain health.",
    uses: ["Memory support", "Focus", "Antioxidant", "Hair health"],
    preparation: "Used fresh or dried in cooking, teas, or as essential oil. For tea, steep 1 teaspoon of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory", "Improves concentration", "Antioxidant-rich", "Supports hair growth"],
    category: "Brain",
    collections: ["Brain & Nervous System", "Mediterranean Traditional", "Culinary Herbs", "Essential Oils", "Hair Health"],
    conditions: ["Memory Loss", "Poor Concentration", "Mental Fatigue", "Hair Loss", "Muscle Pain", "Digestive Discomfort"],
    warnings: [
      "Essential oil should never be consumed internally and must be properly diluted for topical use.",
      "May interact with blood-thinning medications, lithium, ACE inhibitors, and diuretics.",
      "High doses may cause seizures in susceptible individuals.",
      "Should be used with caution during pregnancy as it may stimulate menstruation in large amounts."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 1-3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Culinary: As desired in cooking.",
      child: "Tea: 1/2 teaspoon dried herb steeped in hot water once daily for children over 5. Culinary amounts are generally safe for children.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for age-related memory issues.",
      pregnant: "Culinary amounts are safe during pregnancy, but medicinal amounts should be avoided as they may stimulate menstrual flow.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For memory and concentration: Steep 1-2 teaspoons of dried rosemary leaves in 8oz hot water for 10 minutes, covered to retain essential oils. Strain and drink 1 cup 1-3 times daily. The tea has a strong, aromatic, resinous flavor. For enhanced cognitive effects, add a small piece of ginger and honey.",
      tincture: "Combine 1 part dried rosemary leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for cognitive support or memory enhancement.",
      oil: "For hair growth and scalp health: Infuse 1 cup of dried rosemary in 2 cups olive oil over very low heat for 3-4 hours. Strain through cheesecloth. Store in dark bottles. Massage into scalp 2-3 times weekly, leave for 30-60 minutes, then wash out. Can also be used as a massage oil for muscle pain. For aromatherapy benefits, add 3-5 drops of rosemary essential oil to a diffuser to enhance concentration during study or work.",
      decoction: "For stronger medicinal effects: Simmer 1 tablespoon dried rosemary in 2 cups water for 15-20 minutes. Strain and drink 1/2 cup 2 times daily. This stronger preparation is particularly helpful for digestive issues and as a memory tonic. Can also be used as a hair rinse after shampooing to strengthen hair and stimulate growth."
    }
  },
  {
    id: "49",
    name: "Cordyceps",
    scientificName: "Cordyceps militaris",
    description: "Cordyceps is a medicinal fungus known for boosting energy, stamina, and brain function.",
    uses: ["Energy boost", "Cognitive support", "Athletic performance", "Immune support"],
    preparation: "Taken as capsules, powders, or tinctures. For tea, steep 1 teaspoon of dried fungus in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts energy", "Enhances brain function", "Supports immunity", "Improves stamina"],
    category: "Brain",
    collections: ["Brain & Nervous System", "Men's Herbs", "Traditional Chinese Medicine", "Adaptogenic", "Medicinal Mushrooms"],
    conditions: ["Fatigue", "Low Libido", "Athletic Recovery", "Cognitive Decline", "Respiratory Weakness", "Immune Deficiency"],
    warnings: [
      "May interact with blood-thinning medications, immunosuppressants, and diabetes medications.",
      "May increase bleeding risk and should be discontinued 2 weeks before scheduled surgery.",
      "May cause digestive upset, dry mouth, or nosebleeds in sensitive individuals.",
      "Should be used with caution by those with autoimmune conditions as it stimulates immune function."
    ],
    dosage: {
      adult: "Powder: 1-3g daily. Standardized extract: 400-800mg daily, divided into 2 doses. Tincture: 2-4ml (40-80 drops) 2 times daily.",
      child: "Not typically recommended for children under 12 without professional guidance.",
      elderly: "Start with lower doses (half the adult dose) and increase gradually if needed. May be particularly beneficial for age-related fatigue and immune support.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to insufficient safety data.",
      maximum: "Do not exceed 3g of powder or 9ml of tincture daily. Effects on energy and stamina may be noticed within 1-2 weeks, while cognitive benefits may take 4-6 weeks."
    },
    detailedPreparation: {
      tea: "For energy and immune support: Simmer 1-2 teaspoons of dried cordyceps in 8oz water for 15-20 minutes. Strain and drink 1 cup 1-2 times daily. The tea has an earthy, slightly bitter taste that can be improved with honey and ginger. Note: Many of the beneficial compounds in cordyceps are not very water-soluble, so tea is less potent than other forms.",
      tincture: "Combine 1 part dried cordyceps with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 2 times daily for energy, stamina, or cognitive support.",
      capsules: "Standardized extract capsules (typically 400-500mg) can be taken 1-2 times daily with meals. Look for products standardized to contain at least 20-40% polysaccharides and 0.2-0.5% cordycepin. This is the most convenient and reliable form for consistent dosing.",
      decoction: "For men's health and libido: Simmer 3g dried cordyceps with 6g dried goji berries in 3 cups water for 30 minutes until reduced by half. Strain and drink 1/2 cup 2 times daily. This traditional Chinese preparation is particularly helpful for supporting male reproductive health, energy, and stamina. Can be combined with other adaptogenic herbs like ashwagandha for enhanced effects."
    }
  },
  {
    id: "50",
    name: "Skullcap",
    scientificName: "Scutellaria lateriflora",
    description: "Skullcap is a calming herb that supports relaxation, sleep, and nervous system health.",
    uses: ["Relaxation", "Sleep support", "Anxiety relief", "Nervous system tonic"],
    preparation: "Used as tea, tincture, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Supports restful sleep", "Eases anxiety", "Tonic for nerves"],
    category: "Brain"
  },
  {
    id: "51",
    name: "Marshmallow Root",
    scientificName: "Althaea officinalis",
    description: "Marshmallow Root is a soothing herb for the digestive tract, throat, and skin.",
    uses: ["Digestive soothing", "Throat comfort", "Skin health", "Respiratory support"],
    preparation: "Used as tea, tincture, or capsules. For tea, steep 1-2 teaspoons of dried root in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestion", "Eases sore throat", "Supports skin healing", "Calms respiratory tract"],
    category: "Stomach",
    collections: ["Stomach Herbs", "European Traditional", "Digestive Health", "Respiratory Support", "Demulcents"],
    conditions: ["Gastritis", "Acid Reflux", "Irritable Bowel Syndrome", "Sore Throat", "Dry Cough", "Urinary Tract Inflammation", "Minor Burns"],
    warnings: [
      "May slow absorption of medications if taken at the same time. Take at least 2 hours apart from medications.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "May cause low blood pressure in sensitive individuals when used in large amounts.",
      "Rarely causes allergic reactions in people sensitive to plants in the Malvaceae family."
    ],
    dosage: {
      adult: "Cold infusion: 1-2 tablespoons dried root in 1 quart cold water, steeped 4-8 hours, 1 cup 3-4 times daily. Tincture: 2-5ml (40-100 drops) 3 times daily. Capsules: 400-500mg 3 times daily.",
      child: "Cold infusion: 1/4-1/2 cup for children over 2, 3 times daily. Particularly helpful for sore throat and digestive upset.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for dry, irritated conditions common in elderly.",
      pregnant: "Generally considered safe during pregnancy and breastfeeding, but consult healthcare provider before use.",
      maximum: "Do not exceed 15g of dried root or 15ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For digestive or respiratory soothing: Cold infusion method is preferred to extract mucilage. Place 1-2 tablespoons dried marshmallow root in 1 quart cold water, cover, and let sit for 4-8 hours or overnight in the refrigerator. Strain and drink 1 cup 3-4 times daily. The infusion has a mild, slightly sweet taste with a slippery texture. For throat soothing, add honey and a squeeze of lemon.",
      tincture: "Combine 1 part dried marshmallow root with 5 parts 25-30% alcohol (lower alcohol percentage to extract more mucilage). Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-5ml (40-100 drops) in water 3 times daily for digestive or urinary tract soothing.",
      capsules: "Powdered root capsules (typically 400-500mg) can be taken 3 times daily with plenty of water. This is a convenient form but may not contain as much mucilage as cold infusions.",
      poultice: "For skin inflammation or minor burns: Mix powdered marshmallow root with enough warm water to create a thick paste. Apply directly to affected areas, cover with a clean cloth, and leave for 1-2 hours. Reapply as needed. Can be combined with calendula for enhanced healing effects."
    }
  },
  {
    id: "52",
    name: "Meadowsweet",
    scientificName: "Filipendula ulmaria",
    description: "Meadowsweet is a gentle herb used for digestive comfort and pain relief.",
    uses: ["Digestive aid", "Pain relief", "Anti-inflammatory", "Fever reduction"],
    preparation: "Used as tea, tincture, or capsules. For tea, steep 1-2 teaspoons of dried flowers in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes stomach", "Reduces pain", "Anti-inflammatory", "Lowers fever"],
    category: "Stomach",
    collections: ["Stomach Herbs", "European Traditional", "Digestive Health", "Pain Relief", "Fever Reducers"],
    conditions: ["Gastritis", "Acid Reflux", "Heartburn", "Ulcers", "Arthritis", "Headache", "Fever"],
    warnings: [
      "Contains salicylates (similar to aspirin) and should be avoided by those with aspirin allergies.",
      "Should not be used with blood-thinning medications, as it may enhance their effects.",
      "May interact with medications for gout, diabetes, and kidney disease.",
      "Should be avoided during pregnancy and by children under 16 due to theoretical risk of Reye's syndrome (similar to aspirin)."
    ],
    dosage: {
      adult: "Tea: 1-2 teaspoons dried herb steeped in hot water 3 times daily. Tincture: 2-4ml (40-80 drops) 3 times daily. Capsules: 300-500mg 3 times daily.",
      child: "Not recommended for children under 16 due to salicylate content and theoretical risk of Reye's syndrome.",
      elderly: "Standard adult dose is generally appropriate for elderly individuals. May be particularly beneficial for arthritis and digestive issues common in elderly.",
      pregnant: "Not recommended during pregnancy due to salicylate content and potential effects on the developing fetus.",
      maximum: "Do not exceed 6g of dried herb or 12ml of tincture daily."
    },
    detailedPreparation: {
      tea: "For digestive comfort or pain relief: Steep 1-2 teaspoons of dried meadowsweet flowers and leaves in 8oz hot water for 10 minutes. Strain and drink 1 cup 3 times daily, preferably 30 minutes before meals for digestive issues. The tea has a pleasant, sweet aroma with a slightly bitter taste that can be improved with honey. For enhanced digestive effects, combine with chamomile or peppermint.",
      tincture: "Combine 1 part dried meadowsweet flowers and leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 3 times daily for pain relief, fever reduction, or digestive support.",
      capsules: "Dried herb capsules (typically 300-500mg) can be taken 3 times daily with meals. This is a convenient form for consistent dosing, particularly for chronic pain or digestive issues.",
      syrup: "For sore throat or fever: Simmer 1/4 cup dried meadowsweet in 2 cups water for 15 minutes until reduced by half. Strain, add 1 cup honey, and simmer for another 10 minutes. Store refrigerated for up to 3 months. Take 1 tablespoon 3 times daily for sore throat, fever, or pain relief. Particularly helpful for children over 16 who cannot tolerate the taste of the tea."
    }
  },
    // --- Additional Brain Herbs ---
  {
    id: "53",
    name: "Bacopa Monnieri",
    scientificName: "Bacopa monnieri",
    description: "Bacopa is a traditional Ayurvedic herb used to enhance memory, focus, and cognitive longevity.",
    uses: ["Memory enhancement", "Focus", "Cognitive longevity"],
    preparation: "Taken as capsules, powder, or tea. For tea, steep 1-2 teaspoons of dried herb in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory", "Protects brain cells", "Reduces anxiety"],
    category: "Brain"
  },
  {
    id: "54",
    name: "Ginkgo Biloba",
    scientificName: "Ginkgo biloba",
    description: "Ginkgo is one of the oldest living tree species, known for improving circulation to the brain and supporting memory.",
    uses: ["Memory support", "Circulation", "Focus"],
    preparation: "Used as capsules, extract, or tea. For tea, steep 1 teaspoon of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts memory", "Improves blood flow", "Antioxidant effects"],
    category: "Brain"
  },
  {
    id: "55",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "Lion's Mane is a medicinal mushroom that supports nerve growth and cognitive clarity.",
    uses: ["Cognitive clarity", "Nerve health", "Focus"],
    preparation: "Used as capsules, tincture, or cooked in food. For tea, steep dried mushroom in hot water for 15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports nerve growth", "Improves focus", "May reduce mild symptoms of anxiety and depression"],
    category: "Brain"
  },
  // --- Additional Stomach Herbs ---
  {
    id: "56",
    name: "Peppermint",
    scientificName: "Mentha piperita",
    description: "Peppermint is a cooling herb widely used for digestive comfort and to relieve nausea.",
    uses: ["Digestive aid", "Nausea relief", "Soothing cramps"],
    preparation: "Used as tea, oil, or fresh leaves. For tea, steep 1 tablespoon of leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestion", "Relieves nausea", "Eases cramps"],
    category: "Stomach"
  },
  {
    id: "57",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "Fennel seeds are used to relieve bloating and support healthy digestion.",
    uses: ["Bloating relief", "Digestive support", "Breath freshener"],
    preparation: "Chew seeds after meals, or steep 1 teaspoon in hot water for tea.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves bloating", "Freshens breath", "Aids digestion"],
    category: "Stomach"
  },
  {
    id: "58",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    description: "Ginger root is a warming herb used for nausea, digestion, and inflammation.",
    uses: ["Nausea relief", "Digestive aid", "Anti-inflammatory"],
    preparation: "Used as tea, tincture, or fresh in food. For tea, simmer 1 teaspoon of fresh or dried root in water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Eases nausea", "Reduces inflammation", "Supports digestion"],
    category: "Stomach"
  },
  // --- Additional Heart Herbs ---
  {
    id: "59",
    name: "Hawthorn",
    scientificName: "Crataegus monogyna",
    description: "Hawthorn is a classic heart tonic, supporting healthy blood pressure and circulation.",
    uses: ["Heart tonic", "Blood pressure support", "Circulation"],
    preparation: "Used as tea, tincture, or capsules. For tea, steep berries or leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart health", "Improves circulation", "Balances blood pressure"],
    category: "Heart"
  },
  {
    id: "60",
    name: "Olive Leaf",
    scientificName: "Olea europaea",
    description: "Olive leaf is rich in antioxidants and supports cardiovascular health.",
    uses: ["Blood pressure support", "Antioxidant", "Heart tonic"],
    preparation: "Used as tea, extract, or capsules. For tea, steep 1 teaspoon of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Lowers blood pressure", "Protects blood vessels", "Antioxidant-rich"],
    category: "Heart"
  },
  {
    id: "61",
    name: "Motherwort",
    scientificName: "Leonurus cardiaca",
    description: "Motherwort is a calming heart tonic, used to support emotional and cardiovascular health.",
    uses: ["Heart tonic", "Calming", "Menstrual support"],
    preparation: "Used as tea or tincture. For tea, steep aerial parts in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms the heart", "Supports circulation", "Eases menstrual discomfort"],
    category: "Heart"
  },
  // --- Additional Women's Herbs ---
  {
    id: "62",
    name: "Red Clover",
    scientificName: "Trifolium pratense",
    description: "Red Clover is used for hormonal balance, menopausal support, and skin health in women.",
    uses: ["Hormonal balance", "Menopausal support", "Skin health"],
    preparation: "Used as tea, tincture, or capsules. For tea, steep 1-2 teaspoons of dried flowers in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Supports skin health", "Eases menopausal symptoms"],
    category: "Women's"
  },
  {
    id: "63",
    name: "Dong Quai",
    scientificName: "Angelica sinensis",
    description: "Dong Quai is a traditional Chinese herb for women's reproductive and hormonal health.",
    uses: ["Hormonal support", "Menstrual regulation", "Blood tonic"],
    preparation: "Used as tea, tincture, or capsules. For tea, simmer root in water for 15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Regulates menstrual cycles", "Supports blood health", "Balances hormones"],
    category: "Women's"
  },
  {
    id: "64",
    name: "Raspberry Leaf",
    scientificName: "Rubus idaeus",
    description: "Raspberry Leaf is a classic uterine tonic for women's reproductive health, especially in pregnancy.",
    uses: ["Uterine tonic", "Pregnancy support", "Menstrual support"],
    preparation: "Used as tea or tincture. For tea, steep 1-2 teaspoons of dried leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Tones uterus", "Eases menstrual cramps", "Supports pregnancy"],
    category: "Women's"
  },
  // --- Additional Men's Herbs ---
  {
    id: "65",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "Saw Palmetto is used for prostate health and hormonal balance in men.",
    uses: ["Prostate support", "Hormonal balance", "Urinary health"],
    preparation: "Used as capsules, extract, or tea. For tea, steep berries in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate health", "Balances hormones", "Improves urinary flow"],
    category: "Men's"
  },
  {
    id: "66",
    name: "Pine Pollen",
    scientificName: "Pinus massoniana",
    description: "Pine Pollen is a natural source of phytoandrogens, supporting vitality and hormone balance in men.",
    uses: ["Hormonal support", "Vitality boost", "Immune support"],
    preparation: "Used as powder in smoothies or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts vitality", "Supports hormone balance", "Strengthens immunity"],
    category: "Men's"
  },
  {
    id: "67",
    name: "Nettle Root",
    scientificName: "Urtica dioica root",
    description: "Nettle Root is used for prostate and urinary health in men, as well as hormonal support.",
    uses: ["Prostate support", "Urinary health", "Hormonal balance"],
    preparation: "Used as capsules, extract, or tea. For tea, steep root in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate health", "Improves urinary function", "Balances hormones"],
    category: "Men's"
  },
  // --- Additional Herbal Teas ---
  {
    id: "68",
    name: "Peppermint Tea",
    scientificName: "Mentha piperita",
    description: "Peppermint Tea is a refreshing herbal tea that soothes digestion and uplifts the senses.",
    uses: ["Digestive aid", "Nausea relief", "Refreshing drink"],
    preparation: "Steep 1 tablespoon of dried or fresh peppermint leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestion", "Relieves nausea", "Uplifts mood"],
    category: "Herbal teas"
  },
  {
    id: "69",
    name: "Chamomile Tea",
    scientificName: "Matricaria chamomilla",
    description: "Chamomile Tea is a gentle, calming beverage used to support sleep, relaxation, and digestion.",
    uses: ["Sleep aid", "Digestive support", "Relaxation"],
    preparation: "Steep 1 tablespoon of dried chamomile flowers in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Improves sleep", "Soothes digestion"],
    category: "Herbal teas"
  },
  {
    id: "70",
    name: "Hibiscus Tea",
    scientificName: "Hibiscus sabdariffa",
    description: "Hibiscus Tea is a tart, ruby-red herbal tea rich in antioxidants and vitamin C.",
    uses: ["Antioxidant support", "Blood pressure support", "Refreshing drink"],
    preparation: "Steep 1-2 teaspoons of dried hibiscus flowers in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Supports blood pressure", "Boosts vitamin C"],
    category: "Herbal teas"
  },
  // --- More Brain Herbs ---
  {
    id: "71",
    name: "Blue Vervain",
    scientificName: "Verbena hastata",
    description: "Blue Vervain is a nervine herb used to calm the mind, relieve tension, and support mental clarity.",
    uses: ["Stress relief", "Mental clarity", "Nervous tension"],
    preparation: "Steep 1-2 teaspoons of dried flowering tops in hot water for 10 minutes to make a tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves stress", "Calms nerves", "Supports clear thinking"],
    category: "Brain"
  },
  {
    id: "72",
    name: "Schisandra Berry",
    scientificName: "Schisandra chinensis",
    description: "Schisandra is an adaptogen known for improving concentration, endurance, and resistance to stress.",
    uses: ["Concentration", "Endurance", "Stress adaptation"],
    preparation: "Berries can be steeped as tea, made into tincture, or consumed as powder/capsules.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves focus", "Increases stamina", "Protects the brain from stress"],
    category: "Brain"
  },
  // --- More Stomach Herbs ---
  {
    id: "73",
    name: "Artichoke Leaf",
    scientificName: "Cynara scolymus",
    description: "Artichoke leaf supports liver and digestive health, aiding in bile production and fat digestion.",
    uses: ["Liver support", "Digestive aid", "Cholesterol balance"],
    preparation: "Steep 1-2 teaspoons of dried leaf in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports liver function", "May lower cholesterol"],
    category: "Stomach"
  },
  {
    id: "74",
    name: "Dandelion Root",
    scientificName: "Taraxacum officinale",
    description: "Dandelion root is a classic digestive and liver tonic, supporting detoxification and regularity.",
    uses: ["Digestive tonic", "Liver support", "Detoxification"],
    preparation: "Simmer 1 tablespoon of dried root in water for 15 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes healthy digestion", "Supports liver detox", "Acts as a mild laxative"],
    category: "Stomach"
  },
  // --- More Heart Herbs ---
  {
    id: "75",
    name: "Cayenne Pepper",
    scientificName: "Capsicum annuum",
    description: "Cayenne is a circulatory stimulant that supports healthy blood flow and heart vitality.",
    uses: ["Circulation", "Heart health", "Pain relief"],
    preparation: "Add a pinch of dried powder to food or tea, or use as a tincture (start with small amounts).",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stimulates circulation", "Supports heart health", "May reduce pain"],
    category: "Heart"
  },
  {
    id: "76",
    name: "Garlic",
    scientificName: "Allium sativum",
    description: "Garlic is renowned for its cardiovascular benefits, including supporting healthy blood pressure and cholesterol.",
    uses: ["Blood pressure support", "Cholesterol balance", "Immune boost"],
    preparation: "Eat raw, cooked, or as capsules/extract. For tea, steep crushed garlic in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Lowers blood pressure", "Balances cholesterol", "Supports immunity"],
    category: "Heart"
  },
  // --- More Women's Herbs ---
  {
    id: "77",
    name: "Cramp Bark",
    scientificName: "Viburnum opulus",
    description: "Cramp Bark is used to ease menstrual cramps and support uterine relaxation.",
    uses: ["Menstrual cramp relief", "Uterine tonic", "Muscle relaxation"],
    preparation: "Simmer 1-2 teaspoons of dried bark in water for 15 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Eases cramps", "Relaxes muscles", "Supports uterine health"],
    category: "Women's"
  },
  {
    id: "78",
    name: "Lady's Mantle",
    scientificName: "Alchemilla vulgaris",
    description: "Lady's Mantle is a traditional European herb for women's reproductive health and menstrual comfort.",
    uses: ["Menstrual support", "Reproductive health", "Astringent"],
    preparation: "Steep 1-2 teaspoons of dried leaf in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports menstrual cycles", "Astringent for tissues", "Promotes reproductive health"],
    category: "Women's"
  },
  // --- More Men's Herbs ---
  {
    id: "79",
    name: "Maca Root",
    scientificName: "Lepidium meyenii",
    description: "Maca is a Peruvian adaptogen for male vitality, energy, and hormonal balance.",
    uses: ["Energy boost", "Hormonal support", "Libido enhancement"],
    preparation: "Consume as powder in smoothies, capsules, or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts energy", "Balances hormones", "Enhances libido"],
    category: "Men's"
  },
  {
    id: "80",
    name: "Sarsaparilla",
    scientificName: "Smilax ornata",
    description: "Sarsaparilla is used for hormone balance, skin health, and as a general tonic for men.",
    uses: ["Hormonal support", "Skin health", "Tonic"],
    preparation: "Simmer 1-2 teaspoons of dried root in water for 15 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Supports skin health", "Acts as a tonic"],
    category: "Men's"
  },
  // --- More Herbal Teas ---
  {
    id: "81",
    name: "Lemon Balm Tea",
    scientificName: "Melissa officinalis",
    description: "Lemon Balm Tea is a gentle, calming beverage for relaxation and digestive comfort.",
    uses: ["Relaxation", "Digestive aid", "Mood support"],
    preparation: "Steep 1-2 teaspoons of dried lemon balm leaves in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nerves", "Soothes digestion", "Uplifts mood"],
    category: "Herbal teas"
  },
  {
    id: "82",
    name: "Rooibos Tea",
    scientificName: "Aspalathus linearis",
    description: "Rooibos Tea is a caffeine-free South African herbal tea rich in antioxidants and minerals.",
    uses: ["Antioxidant support", "Hydration", "Relaxation"],
    preparation: "Steep 1-2 teaspoons of dried rooibos in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Caffeine-free", "Supports relaxation"],
    category: "Herbal teas"
  },
  // --- Even More Brain Herbs ---
  {
    id: "83",
    name: "Tulsi (Holy Basil)",
    scientificName: "Ocimum tenuiflorum",
    description: "Tulsi is a revered adaptogen in Ayurveda, known for its ability to enhance mental clarity and resilience to stress.",
    uses: ["Stress resilience", "Mental clarity", "Immune support"],
    preparation: "Steep fresh or dried leaves in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress", "Enhances cognition", "Supports immune system"],
    category: "Brain"
  },
  {
    id: "84",
    name: "Sage",
    scientificName: "Salvia officinalis",
    description: "Sage is valued for its memory-enhancing and neuroprotective properties, as well as its culinary uses.",
    uses: ["Memory support", "Antioxidant", "Cognitive enhancement"],
    preparation: "Steep 1 teaspoon of dried leaves in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory", "Protects brain cells", "Antioxidant-rich"],
    category: "Brain"
  },
  // --- Even More Stomach Herbs ---
  {
    id: "85",
    name: "Caraway",
    scientificName: "Carum carvi",
    description: "Caraway seeds are used to relieve bloating, gas, and support overall digestive health.",
    uses: ["Bloating relief", "Gas relief", "Digestive support"],
    preparation: "Chew seeds after meals, or steep 1 teaspoon in hot water for tea.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves gas", "Eases bloating", "Aids digestion"],
    category: "Stomach"
  },
  {
    id: "86",
    name: "Chamomile",
    scientificName: "Matricaria recutita",
    description: "Chamomile is a gentle herb used for soothing digestion, calming nerves, and promoting restful sleep.",
    uses: ["Digestive soothing", "Sleep aid", "Calming nerves"],
    preparation: "Steep 1 tablespoon of dried flowers in hot water for 5-10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestion", "Promotes relaxation", "Eases stomach upset"],
    category: "Stomach"
  },
  // --- Even More Heart Herbs ---
  {
    id: "87",
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    description: "Yarrow is a circulatory tonic used to support blood vessel health and regulate blood flow.",
    uses: ["Circulation", "Blood vessel health", "Wound healing"],
    preparation: "Steep 1-2 teaspoons of dried flowering tops in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports circulation", "Strengthens blood vessels", "Promotes healing"],
    category: "Heart"
  },
  {
    id: "88",
    name: "Red Sage (Danshen)",
    scientificName: "Salvia miltiorrhiza",
    description: "Red Sage is used in traditional Chinese medicine to support heart health and healthy blood flow.",
    uses: ["Heart health", "Blood flow support", "Antioxidant"],
    preparation: "Simmer root in water for 15 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart function", "Improves blood flow", "Rich in antioxidants"],
    category: "Heart"
  },
  // --- Even More Women's Herbs ---
  {
    id: "89",
    name: "Chasteberry",
    scientificName: "Vitex agnus-castus",
    description: "Chasteberry is a classic herb for supporting female hormonal balance and menstrual regularity.",
    uses: ["Hormonal balance", "Menstrual support", "PMS relief"],
    preparation: "Used as tincture, capsules, or tea. For tea, steep 1 teaspoon of dried berries in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Eases PMS symptoms", "Regulates menstrual cycles"],
    category: "Women's"
  },
  {
    id: "90",
    name: "Motherwort",
    scientificName: "Leonurus cardiaca",
    description: "Motherwort is a calming uterine tonic for women, supporting emotional and reproductive health.",
    uses: ["Uterine tonic", "Calming", "Menstrual support"],
    preparation: "Steep aerial parts in hot water for 10 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nerves", "Supports uterine health", "Eases menstrual discomfort"],
    category: "Women's"
  },
  // --- Even More Men's Herbs ---
  {
    id: "91",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "Ashwagandha is an adaptogen that supports male vitality, energy, and hormonal balance.",
    uses: ["Energy boost", "Hormonal support", "Stress relief"],
    preparation: "Take as capsules, powder, or tea. For tea, simmer 1 teaspoon of dried root in water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts energy", "Balances hormones", "Reduces stress"],
    category: "Men's"
  },
  {
    id: "92",
    name: "Tribulus",
    scientificName: "Tribulus terrestris",
    description: "Tribulus is used to support testosterone levels, libido, and athletic performance in men.",
    uses: ["Testosterone support", "Libido enhancement", "Athletic performance"],
    preparation: "Take as capsules, tincture, or tea. For tea, steep 1 teaspoon of dried fruit in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports testosterone", "Enhances libido", "Boosts athletic performance"],
    category: "Men's"
  },
  // --- Even More Herbal Teas ---
  {
    id: "93",
    name: "Elderflower Tea",
    scientificName: "Sambucus nigra",
    description: "Elderflower Tea is a fragrant herbal tea known for its immune-boosting and respiratory-supportive properties.",
    uses: ["Immune support", "Respiratory health", "Refreshing drink"],
    preparation: "Steep 1-2 teaspoons of dried elderflowers in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immunity", "Soothes respiratory tract", "Delicate floral flavor"],
    category: "Herbal teas"
  },
  {
    id: "94",
    name: "Rose Hip Tea",
    scientificName: "Rosa canina",
    description: "Rose Hip Tea is a tangy, vitamin C-rich herbal tea that supports immunity and skin health.",
    uses: ["Vitamin C boost", "Immune support", "Skin health"],
    preparation: "Steep 1-2 teaspoons of dried rose hips in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in vitamin C", "Supports immunity", "Promotes healthy skin"],
    category: "Herbal teas"
  },
  // --- Rare & Exotic Brain Herbs ---
  {
    id: "95",
    name: "Celastrus paniculatus (Intellect Tree)",
    scientificName: "Celastrus paniculatus",
    description: "Known as the 'Elixir of Life' in Ayurveda, this rare seed is used to enhance memory, clarity, and cognitive function.",
    uses: ["Memory enhancement", "Cognitive support", "Mental clarity"],
    preparation: "Seeds are chewed, or oil is used as a supplement. Can be made into tincture or tea.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Sharpens memory", "Improves focus", "Neuroprotective effects"],
    category: "Brain"
  },
  {
    id: "96",
    name: "Rhodiola rosea",
    scientificName: "Rhodiola rosea",
    description: "A rare adaptogen from Arctic regions, Rhodiola is used to boost mental performance and resilience to stress.",
    uses: ["Mental stamina", "Stress adaptation", "Fatigue reduction"],
    preparation: "Take as capsules, tincture, or tea. Steep 1 teaspoon of dried root in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts mental energy", "Reduces fatigue", "Enhances resilience to stress"],
    category: "Brain"
  },
  // --- Rare & Exotic Stomach Herbs ---
  {
    id: "97",
    name: "Galangal",
    scientificName: "Alpinia galanga",
    description: "A Southeast Asian root related to ginger, galangal is used for digestive health and as a culinary spice.",
    uses: ["Digestive tonic", "Anti-nausea", "Appetite stimulant"],
    preparation: "Slice fresh or dried root for tea, or use in soups and curries.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Reduces nausea", "Stimulates appetite"],
    category: "Stomach"
  },
  {
    id: "98",
    name: "Baobab",
    scientificName: "Adansonia digitata",
    description: "Baobab fruit, native to Africa, is rich in fiber and prebiotics, supporting gut health and digestion.",
    uses: ["Prebiotic support", "Digestive health", "Immune support"],
    preparation: "Powdered fruit is stirred into water, juice, or smoothies.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Feeds good gut bacteria", "High in vitamin C", "Boosts immunity"],
    category: "Stomach"
  },
  // --- Rare & Exotic Heart Herbs ---
  {
    id: "99",
    name: "Saffron",
    scientificName: "Crocus sativus",
    description: "One of the world's rarest and most expensive spices, saffron supports mood, circulation, and heart health.",
    uses: ["Mood elevation", "Heart health", "Antioxidant"],
    preparation: "Infuse a few strands in hot water or milk for tea, or use in food.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Supports circulation", "Rich in antioxidants"],
    category: "Heart"
  },
  {
    id: "100",
    name: "Guduchi (Tinospora cordifolia)",
    scientificName: "Tinospora cordifolia",
    description: "A rare Ayurvedic herb, Guduchi is used to support the immune system and cardiovascular health.",
    uses: ["Immune support", "Heart tonic", "Detoxification"],
    preparation: "Stems are decocted for tea, or used as powder/capsules.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens immunity", "Supports heart function", "Detoxifies the body"],
    category: "Heart"
  },
  // --- Rare & Exotic Women's Herbs ---
  {
    id: "101",
    name: "Shatavari",
    scientificName: "Asparagus racemosus",
    description: "A rare Ayurvedic root, Shatavari is considered the queen of women's herbs for reproductive and hormonal health.",
    uses: ["Hormonal balance", "Fertility support", "Menopausal comfort"],
    preparation: "Take as powder, capsules, or tea. Steep 1 teaspoon of dried root in hot water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Supports fertility", "Eases menopause symptoms"],
    category: "Women's"
  },
  {
    id: "102",
    name: "Dong Quai",
    scientificName: "Angelica sinensis",
    description: "A traditional Chinese herb, Dong Quai is rare outside Asia and used for women's reproductive and blood health.",
    uses: ["Blood tonic", "Menstrual regulation", "Hormonal balance"],
    preparation: "Simmer root in water for 15 minutes for tea, or use as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Builds blood", "Regulates cycles", "Balances hormones"],
    category: "Women's"
  },
  // --- Rare & Exotic Men's Herbs ---
  {
    id: "103",
    name: "Tongkat Ali",
    scientificName: "Eurycoma longifolia",
    description: "A rare Southeast Asian root, Tongkat Ali is used to support male vitality, testosterone, and athletic performance.",
    uses: ["Testosterone support", "Energy boost", "Athletic performance"],
    preparation: "Take as capsules, tincture, or tea. Simmer root in water for 15 minutes for tea.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts testosterone", "Enhances energy", "Improves performance"],
    category: "Men's"
  },
  {
    id: "104",
    name: "Muira Puama",
    scientificName: "Ptychopetalum olacoides",
    description: "A rare Amazonian herb, Muira Puama is known as 'potency wood' for its support of male vitality and libido.",
    uses: ["Libido support", "Energy boost", "Cognitive function"],
    preparation: "Used as tincture, capsules, or decoction. Simmer bark in water for 15 minutes for tea.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances libido", "Boosts energy", "Supports brain health"],
    category: "Men's"
  },
  // --- Rare & Exotic Herbal Teas ---
  {
    id: "105",
    name: "Butterfly Pea Flower Tea",
    scientificName: "Clitoria ternatea",
    description: "A striking blue tea from Southeast Asia, Butterfly Pea Flower Tea is rich in antioxidants and supports cognitive health.",
    uses: ["Antioxidant support", "Cognitive health", "Mood enhancement"],
    preparation: "Steep 1-2 teaspoons of dried flowers in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Supports brain health", "Beautiful blue color"],
    category: "Herbal teas"
  },
  {
    id: "106",
    name: "Yerba Maté",
    scientificName: "Ilex paraguariensis",
    description: "A traditional South American beverage, Yerba Maté is energizing and rich in polyphenols and nutrients.",
    uses: ["Energy boost", "Antioxidant support", "Digestive aid"],
    preparation: "Steep dried leaves in hot (not boiling) water for 3-5 minutes, traditionally drunk from a gourd.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts energy", "Rich in antioxidants", "Supports digestion"],
    category: "Herbal teas"
  },
  // --- Ultra Rare & Unique Brain Herbs ---
  {
    id: "107",
    name: "Bacopa Monnieri",
    scientificName: "Bacopa monnieri",
    description: "A revered herb in Ayurveda, Bacopa is used to enhance memory, learning, and cognitive function, especially in students.",
    uses: ["Memory enhancement", "Learning support", "Cognitive function"],
    preparation: "Steep leaves in hot water for tea, or use as capsules or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory", "Reduces anxiety", "Supports brain health"],
    category: "Brain"
  },
  {
    id: "108",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "A rare medicinal mushroom, Lion's Mane is prized for its neuroregenerative and cognitive-enhancing properties.",
    uses: ["Nerve regeneration", "Cognitive support", "Mood balance"],
    preparation: "Cook fresh or dried, make tea, or use as capsules/extract.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes nerve growth", "Enhances cognition", "Supports mood"],
    category: "Brain"
  },
  // --- Ultra Rare & Unique Stomach Herbs ---
  {
    id: "109",
    name: "Mastic Gum",
    scientificName: "Pistacia lentiscus",
    description: "A resin from the Greek mastic tree, used for centuries to support gut health and combat ulcers.",
    uses: ["Gut healing", "Ulcer relief", "Digestive support"],
    preparation: "Chew resin or dissolve in warm water for a digestive tonic.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Heals stomach lining", "Reduces ulcers", "Improves digestion"],
    category: "Stomach"
  },
  {
    id: "110",
    name: "Yacon Root",
    scientificName: "Smallanthus sonchifolius",
    description: "A South American tuber, Yacon root is rich in prebiotics and supports healthy gut flora and digestion.",
    uses: ["Prebiotic support", "Digestive health", "Blood sugar balance"],
    preparation: "Eat raw, cooked, or as syrup. Can also be dried for tea.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Feeds good gut bacteria", "Regulates blood sugar", "Aids digestion"],
    category: "Stomach"
  },
  // --- Ultra Rare & Unique Heart Herbs ---
  {
    id: "111",
    name: "Hawthorn Berry",
    scientificName: "Crataegus monogyna",
    description: "Hawthorn is a key herb in Western herbalism for supporting heart health, circulation, and blood pressure.",
    uses: ["Heart tonic", "Circulation support", "Blood pressure balance"],
    preparation: "Steep berries in hot water for tea, or use as tincture/extract.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart function", "Improves circulation", "Balances blood pressure"],
    category: "Heart"
  },
  {
    id: "112",
    name: "Motherwort (Leonurus sibiricus)",
    scientificName: "Leonurus sibiricus",
    description: "A rare cousin of common motherwort, used in Asia for heart and nervous system support.",
    uses: ["Heart tonic", "Nervous system support", "Calming"],
    preparation: "Steep aerial parts in hot water for tea, or use as tincture.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart", "Calms nerves", "Regulates blood pressure"],
    category: "Heart"
  },
  // --- Ultra Rare & Unique Women's Herbs ---
  {
    id: "113",
    name: "Blue Cohosh",
    scientificName: "Caulophyllum thalictroides",
    description: "A rare woodland herb used traditionally for menstrual and childbirth support in women.",
    uses: ["Menstrual support", "Labor preparation", "Hormonal balance"],
    preparation: "Steep root in hot water for tea, or use as tincture (under supervision).",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Eases menstrual pain", "Prepares for childbirth", "Balances hormones"],
    category: "Women's"
  },
  {
    id: "114",
    name: "Red Clover",
    scientificName: "Trifolium pratense",
    description: "A wild meadow herb, Red Clover is rich in phytoestrogens and supports hormonal balance in women.",
    uses: ["Hormonal balance", "Menopausal support", "Detoxification"],
    preparation: "Steep flowers in hot water for tea, or use as tincture.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Supports menopause", "Detoxifies blood"],
    category: "Women's"
  },
  // --- Ultra Rare & Unique Men's Herbs ---
  {
    id: "115",
    name: "Catuaba Bark",
    scientificName: "Erythroxylum catuaba",
    description: "A rare Brazilian herb, Catuaba is traditionally used to support male libido, energy, and nervous system health.",
    uses: ["Libido support", "Energy boost", "Nervous system support"],
    preparation: "Simmer bark in water for tea, or use as tincture.",
    imageUrl: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances libido", "Boosts energy", "Supports nerves"],
    category: "Men's"
  },
  {
    id: "116",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "A palm native to the southeastern U.S., Saw Palmetto is used for prostate health and male hormonal balance.",
    uses: ["Prostate health", "Hormonal support", "Urinary tract support"],
    preparation: "Take as capsules, tincture, or tea (steep berries in hot water).",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate", "Balances hormones", "Improves urinary health"],
    category: "Men's"
  },
  // --- Ultra Rare & Unique Herbal Teas ---
  {
    id: "117",
    name: "Lapacho (Pau d'Arco) Tea",
    scientificName: "Tabebuia impetiginosa",
    description: "A South American tree bark tea, Lapacho is prized for its immune and antimicrobial benefits.",
    uses: ["Immune support", "Antimicrobial", "Detoxification"],
    preparation: "Simmer bark in water for 15 minutes for tea.",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immunity", "Fights microbes", "Detoxifies body"],
    category: "Herbal teas"
  },
  {
    id: "118",
    name: "Jiaogulan Tea",
    scientificName: "Gynostemma pentaphyllum",
    description: "Called the 'herb of immortality' in China, Jiaogulan tea is a rare adaptogen for vitality, longevity, and cardiovascular health.",
    uses: ["Vitality", "Longevity", "Heart health"],
    preparation: "Steep dried leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases vitality", "Supports heart", "Promotes longevity"],
    category: "Herbal teas"
  },
  {
    id: "119",
    name: "Chaga Mushroom",
    scientificName: "Inonotus obliquus",
    description: "A parasitic fungus that grows on birch trees in cold climates, Chaga is revered in Siberian folk medicine for its immune-boosting and antioxidant properties.",
    uses: ["Immune support", "Antioxidant", "Anti-inflammatory"],
    preparation: "Simmer chunks in water for 30+ minutes to make tea or extract.",
    imageUrl: "https://images.unsplash.com/photo-1590590014879-3f0a2c8e1f25?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Powerful antioxidant", "Supports immune system", "May inhibit cancer growth"],
    category: "Immune system"
  },
  {
    id: "120",
    name: "Reishi Mushroom",
    scientificName: "Ganoderma lucidum",
    description: "Known as the 'mushroom of immortality' in ancient Chinese medicine, Reishi has been used for over 2,000 years to promote longevity and overall wellness.",
    uses: ["Immune modulation", "Stress reduction", "Sleep improvement"],
    preparation: "Available as powder, capsules, or tea. For tea, simmer slices for 1-2 hours.",
    imageUrl: "https://images.unsplash.com/photo-1589908213782-01d3ec2b6a0f?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Adaptogenic", "Supports immune function", "May improve sleep quality"],
    category: "Adaptogenic"
  },
  {
    id: "121",
    name: "Moringa",
    scientificName: "Moringa oleifera",
    description: "Often called the 'miracle tree,' Moringa is one of the most nutrient-dense plants on earth, containing essential vitamins, minerals, and all nine essential amino acids.",
    uses: ["Nutritional supplement", "Energy boost", "Anti-inflammatory"],
    preparation: "Leaves can be consumed fresh, dried as powder, or as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Extremely nutritious", "Rich in antioxidants", "May lower blood sugar"],
    category: "Nutritional"
  },
  {
    id: "122",
    name: "Schisandra Berry",
    scientificName: "Schisandra chinensis",
    description: "Known as 'five flavor berry' in Chinese medicine because it contains all five basic flavors: sweet, salty, bitter, sour, and pungent. It's a powerful adaptogen.",
    uses: ["Liver protection", "Stress management", "Energy enhancement"],
    preparation: "Can be consumed as dried berries, powder, tea, or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1596591868231-05e808fd7891?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Increases endurance", "Improves concentration"],
    category: "Adaptogenic"
  },
  {
    id: "123",
    name: "He Shou Wu",
    scientificName: "Polygonum multiflorum",
    description: "A renowned herb in Traditional Chinese Medicine, He Shou Wu is named after a man whose gray hair reportedly turned black after taking the herb. It's used for longevity and vitality.",
    uses: ["Hair health", "Longevity", "Liver and kidney support"],
    preparation: "Usually prepared as a tonic, decoction, or taken as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May prevent premature graying", "Supports liver and kidneys", "Enhances vitality"],
    category: "Longevity"
  },
  {
    id: "124",
    name: "Kava Kava",
    scientificName: "Piper methysticum",
    description: "A plant native to the South Pacific islands, Kava has been used ceremonially for centuries for its calming effects on the mind and body.",
    uses: ["Anxiety relief", "Sleep support", "Muscle relaxation"],
    preparation: "Traditionally prepared by grinding the root and mixing with water. Modern forms include capsules and tinctures.",
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1f704a975661?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Reduces anxiety", "May improve sleep quality"],
    category: "Nervous system"
  },
  {
    id: "125",
    name: "Uva Ursi",
    scientificName: "Arctostaphylos uva-ursi",
    description: "Also known as bearberry, Uva Ursi has been used for centuries in herbal medicine for urinary tract health. Its name comes from Latin meaning 'bear's grape'.",
    uses: ["Urinary tract support", "Bladder health", "Anti-inflammatory"],
    preparation: "Typically consumed as tea or in capsule form. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary tract health", "Has diuretic properties", "Contains antimicrobial compounds"],
    category: "Urinary system"
  },
  {
    id: "126",
    name: "Guduchi",
    scientificName: "Tinospora cordifolia",
    description: "A prominent herb in Ayurvedic medicine, Guduchi is known as 'Amrita' or the herb of immortality. It's a powerful immunomodulator and adaptogen.",
    uses: ["Immune enhancement", "Detoxification", "Anti-inflammatory"],
    preparation: "Available as powder, juice, or capsules. Traditionally taken with honey or as decoction.",
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1f704a975661?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immunity", "Supports liver function", "Helps manage stress"],
    category: "Adaptogenic"
  },
  {
    id: "127",
    name: "Dragon's Blood",
    scientificName: "Croton lechleri",
    description: "A bright red resin harvested from the Croton lechleri tree in the Amazon rainforest. It has been used by indigenous peoples for centuries for its powerful healing properties.",
    uses: ["Wound healing", "Skin protection", "Digestive support"],
    preparation: "Applied topically as a resin or taken internally as tincture or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1f704a975661?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Accelerates wound healing", "Has antiviral properties", "Soothes digestive inflammation"],
    category: "Skin health"
  },
  {
    id: "128",
    name: "Cat's Claw",
    scientificName: "Uncaria tomentosa",
    description: "A woody vine native to the Amazon rainforest, named for its hook-like thorns. It has been used by indigenous peoples for its immune-boosting and anti-inflammatory properties.",
    uses: ["Immune support", "Joint health", "Digestive health"],
    preparation: "Available as tea, capsules, or tincture. For tea, simmer 1 teaspoon of bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1f704a975661?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Supports immune function", "May help with arthritis"],
    category: "Immune system"
  },
  {
    id: "129",
    name: "Blue Lotus",
    scientificName: "Nymphaea caerulea",
    description: "Sacred to ancient Egyptians, Blue Lotus was used in religious ceremonies and as a medicinal plant. It has mild psychoactive properties and was used for its calming effects.",
    uses: ["Relaxation", "Sleep improvement", "Meditation aid"],
    preparation: "Flowers can be steeped as tea, smoked, or made into a wine infusion.",
    imageUrl: "https://images.unsplash.com/photo-1567591370633-c6d5b3c5e194?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "May improve sleep", "Enhances meditation"],
    category: "Nervous system"
  },
  {
    id: "130",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    description: "A staple herb in Ayurvedic medicine, Brahmi has been used for centuries to enhance memory, intellect, and cognitive function. It's considered one of the most powerful brain tonics in herbal medicine.",
    uses: ["Memory enhancement", "Cognitive support", "Stress reduction", "Longevity"],
    preparation: "Can be consumed as a powder mixed with warm milk or water, as capsules, or as a tincture.",
    imageUrl: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and learning", "Reduces anxiety", "Supports longevity", "Neuroprotective"],
    category: "Brain"
  },
  {
    id: "131",
    name: "Cordyceps",
    scientificName: "Cordyceps sinensis",
    description: "A rare fungus that grows on caterpillar larvae in the high mountain regions of China. It has been used in Traditional Chinese Medicine to enhance energy, endurance, and brain function.",
    uses: ["Energy enhancement", "Cognitive function", "Athletic performance", "Immune support"],
    preparation: "Available as powder, capsules, or tinctures. Can be added to soups, teas, or smoothies.",
    imageUrl: "https://images.unsplash.com/photo-1589908213782-01d3ec2b6a0f?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves oxygen utilization", "Enhances mental clarity", "Boosts energy levels", "Supports brain health"],
    category: "Brain"
  },
  {
    id: "132",
    name: "Triphala",
    scientificName: "Combination of three fruits",
    description: "A traditional Ayurvedic formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki. It's renowned for its gentle yet effective cleansing and rejuvenating effects on the digestive system.",
    uses: ["Digestive cleansing", "Detoxification", "Colon health", "Nutrient absorption"],
    preparation: "Typically taken as powder mixed with warm water before bed, or as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Cleanses digestive tract", "Improves nutrient absorption", "Supports elimination", "Balances gut bacteria"],
    category: "Stomach"
  },
  {
    id: "133",
    name: "Bitter Melon",
    scientificName: "Momordica charantia",
    description: "A tropical vine with distinctive warty fruit, used in traditional medicine systems across Asia, Africa, and the Caribbean for digestive health and blood sugar regulation.",
    uses: ["Blood sugar regulation", "Digestive support", "Liver health", "Weight management"],
    preparation: "Can be consumed as fresh juice, cooked as a vegetable, or taken as capsules or tea.",
    imageUrl: "https://images.unsplash.com/photo-1562155847-c05f7386b204?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Aids digestion", "Supports liver function", "Has antimicrobial properties"],
    category: "Stomach"
  },
  {
    id: "134",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    description: "Also known as Indian Gooseberry, Amla is one of the richest natural sources of vitamin C and a cornerstone of Ayurvedic medicine for heart and vascular health.",
    uses: ["Heart health", "Immune support", "Antioxidant", "Longevity"],
    preparation: "Can be consumed fresh, dried, as juice, powder, or in formulations like Chyawanprash.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens heart muscle", "Supports healthy cholesterol", "Powerful antioxidant", "Enhances circulation"],
    category: "Heart"
  },
  {
    id: "135",
    name: "Coleus",
    scientificName: "Coleus forskohlii",
    description: "A member of the mint family native to India, Coleus has been used in Ayurvedic medicine for heart health, particularly for its ability to support healthy blood pressure and cardiovascular function.",
    uses: ["Heart support", "Blood pressure regulation", "Weight management", "Respiratory health"],
    preparation: "Typically taken as standardized extract in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood pressure", "Enhances cardiovascular function", "May help with weight management", "Supports respiratory health"],
    category: "Heart"
  },
  {
    id: "136",
    name: "Dong Quai",
    scientificName: "Angelica sinensis",
    description: "Known as 'female ginseng' in Traditional Chinese Medicine, Dong Quai has been used for thousands of years to support women's reproductive health and hormonal balance.",
    uses: ["Hormonal balance", "Menstrual support", "Menopausal relief", "Blood building"],
    preparation: "Available as tea, tincture, or capsules. Often combined with other herbs in formulations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances female hormones", "Relieves menstrual discomfort", "Supports healthy circulation", "Nourishes blood"],
    category: "Women's"
  },
  {
    id: "137",
    name: "Chasteberry",
    scientificName: "Vitex agnus-castus",
    description: "A Mediterranean shrub whose berries have been used since ancient Greek times to support women's reproductive health, particularly for hormone balance and menstrual regularity.",
    uses: ["Hormone balance", "PMS relief", "Menstrual regularity", "Fertility support"],
    preparation: "Typically taken as capsules, tincture, or tea. For tea, steep 1 teaspoon of dried berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances female hormones", "Reduces PMS symptoms", "Supports menstrual regularity", "May enhance fertility"],
    category: "Women's"
  },
  {
    id: "138",
    name: "Tongkat Ali",
    scientificName: "Eurycoma longifolia",
    description: "A tall, slender evergreen shrub native to Southeast Asia, Tongkat Ali has been used traditionally to enhance male vitality, energy, and hormonal health.",
    uses: ["Male vitality", "Hormonal balance", "Energy enhancement", "Sports performance"],
    preparation: "Typically taken as standardized extract in capsule form or as a tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports testosterone levels", "Enhances energy and stamina", "May improve sports performance", "Supports male reproductive health"],
    category: "Men's"
  },
  {
    id: "139",
    name: "Shilajit",
    scientificName: "Asphaltum punjabianum",
    description: "A rare exudate that forms in high mountain rocks, particularly in the Himalayas. It has been used in Ayurvedic medicine for thousands of years as a rejuvenator for men's health and vitality.",
    uses: ["Male vitality", "Energy enhancement", "Reproductive health", "Anti-aging"],
    preparation: "Traditionally dissolved in warm milk or water and taken in the morning.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances energy and stamina", "Supports reproductive health", "Rich in fulvic acid and minerals", "Supports cellular function"],
    category: "Men's"
  },
  {
    id: "140",
    name: "Pu-erh Tea",
    scientificName: "Camellia sinensis var. assamica",
    description: "A fermented tea from Yunnan, China that improves with age like fine wine. It undergoes a unique microbial fermentation process that gives it distinct earthy flavors and health benefits.",
    uses: ["Digestive aid", "Cholesterol management", "Weight support", "Energy"],
    preparation: "Steep aged tea cakes or loose leaves in hot water for 3-5 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports healthy metabolism", "May lower cholesterol", "Provides smooth, sustained energy"],
    category: "Herbal teas"
  },
  {
    id: "141",
    name: "Yerba Mate",
    scientificName: "Ilex paraguariensis",
    description: "A traditional South American drink made from the leaves of the holly tree. It provides a unique balance of stimulation and nutrition, containing caffeine, theobromine, and theophylline.",
    uses: ["Energy enhancement", "Mental clarity", "Nutritional support", "Weight management"],
    preparation: "Traditionally prepared in a gourd with a metal straw (bombilla), but can also be steeped like regular tea.",
    imageUrl: "https://images.unsplash.com/photo-1599565253376-a517e6186fea?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Provides balanced energy", "Enhances mental focus", "Rich in nutrients and antioxidants", "Supports healthy metabolism"],
    category: "Herbal teas"
  },
  {
    id: "142",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "A distinctive mushroom with cascading white tendrils that resembles a lion's mane. It has been used in traditional Chinese medicine for centuries and is gaining popularity for its cognitive benefits.",
    uses: ["Cognitive enhancement", "Nerve regeneration", "Mood support", "Immune support"],
    preparation: "Can be consumed as food, tea, powder, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1589908213782-01d3ec2b6a0f?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports nerve growth factor", "Enhances cognitive function", "May help with anxiety and depression", "Supports immune system"],
    category: "Brain"
  },
  {
    id: "143",
    name: "Gotu Kola",
    scientificName: "Centella asiatica",
    description: "A small herbaceous plant native to Asia, Gotu Kola has been used for thousands of years in Ayurvedic and Traditional Chinese Medicine for brain health and longevity.",
    uses: ["Cognitive enhancement", "Wound healing", "Vein health", "Stress reduction"],
    preparation: "Can be consumed as tea, tincture, or in capsule form. Fresh leaves can be added to salads.",
    imageUrl: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and cognition", "Improves circulation", "Reduces anxiety", "Supports wound healing"],
    category: "Brain"
  },
  {
    id: "144",
    name: "Slippery Elm",
    scientificName: "Ulmus rubra",
    description: "A tree native to North America whose inner bark has been used by Native Americans for centuries for digestive health and soothing mucous membranes.",
    uses: ["Digestive soothing", "Throat relief", "Wound healing", "Inflammatory bowel support"],
    preparation: "Inner bark is powdered and can be mixed with water to form a mucilage, or taken as lozenges or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestive tract", "Forms protective coating on mucous membranes", "Relieves heartburn", "Supports bowel regularity"],
    category: "Stomach"
  },
  {
    id: "145",
    name: "Gentian Root",
    scientificName: "Gentiana lutea",
    description: "One of the most bitter herbs known, Gentian has been used in European herbal medicine for centuries to stimulate digestion and liver function.",
    uses: ["Digestive stimulation", "Appetite enhancement", "Liver support", "Fever reduction"],
    preparation: "Typically used as a tincture or in bitter formulations. A few drops before meals is traditional.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stimulates digestive enzymes", "Enhances appetite", "Supports liver function", "Helps with nutrient absorption"],
    category: "Stomach"
  },
  {
    id: "146",
    name: "Arjuna",
    scientificName: "Terminalia arjuna",
    description: "A large evergreen tree native to India, Arjuna bark has been used in Ayurvedic medicine for centuries specifically for heart health and cardiac support.",
    uses: ["Heart strengthening", "Cholesterol management", "Blood pressure support", "Cardiac function"],
    preparation: "Typically taken as powder mixed with warm milk or water, or as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens heart muscle", "Supports healthy cholesterol", "Maintains blood pressure", "Protects cardiac tissue"],
    category: "Heart"
  },
  {
    id: "147",
    name: "Dan Shen",
    scientificName: "Salvia miltiorrhiza",
    description: "Also known as Red Sage, Dan Shen is one of the most important herbs in Traditional Chinese Medicine for cardiovascular health and blood circulation.",
    uses: ["Heart health", "Blood circulation", "Blood pressure regulation", "Stress reduction"],
    preparation: "Available as tea, tincture, or in capsule form. Often used in TCM formulations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves circulation", "Supports heart function", "Reduces inflammation", "May help prevent blood clots"],
    category: "Heart"
  },
  {
    id: "148",
    name: "Shatavari",
    scientificName: "Asparagus racemosus",
    description: "A species of asparagus native to India and the Himalayas, Shatavari is considered the queen of herbs in Ayurvedic medicine for women's health throughout all stages of life.",
    uses: ["Female reproductive health", "Hormonal balance", "Lactation support", "Menopausal relief"],
    preparation: "Typically taken as powder mixed with warm milk or water, or as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances female hormones", "Supports reproductive system", "Enhances lactation", "Nourishes and rejuvenates"],
    category: "Women's",
    collections: ["Women's Herbs", "Ayurvedic", "Adaptogenic", "Reproductive Health", "Lactation Support"],
    conditions: ["Hormonal Imbalance", "Menopause", "Low Milk Production", "PMS", "Infertility", "Vaginal Dryness", "Urinary Tract Infections"],
    warnings: [
      "May cause digestive upset in sensitive individuals.",
      "May enhance the effects of estrogen and should be used with caution by those with hormone-sensitive conditions.",
      "May lower blood sugar levels and should be used with caution by diabetics.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood sugar."
    ],
    dosage: {
      adult: "Powder: 1-2 teaspoons (3-6g) twice daily with warm milk or water. Capsules: 500mg 2-3 times daily. Tincture: 30-60 drops 2-3 times daily.",
      child: "Not typically recommended for children except under professional guidance.",
      elderly: "Standard adult dose is generally appropriate for elderly women. May be particularly beneficial for post-menopausal dryness and urinary tract health.",
      pregnant: "Generally considered safe during pregnancy in moderate amounts, and often used to prevent miscarriage in Ayurvedic medicine, but consult healthcare provider before use.",
      maximum: "Do not exceed 12g of powder or 3000mg in capsules daily. Effects on hormonal balance may take 2-3 months to become noticeable."
    },
    detailedPreparation: {
      tea: "For hormonal balance: Simmer 1 teaspoon of shatavari powder in 8oz milk (preferably organic) for 5-10 minutes. Add honey and a pinch of cardamom to taste. Drink 1 cup 1-2 times daily. This traditional Ayurvedic preparation is called 'Shatavari Ksheerpak' and is particularly beneficial for female reproductive health and hormonal balance.",
      tincture: "Combine 1 part dried shatavari root with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 30-60 drops in water 2-3 times daily for hormonal support or menopausal symptoms.",
      capsules: "Standardized extract capsules (typically 500mg) can be taken 2-3 times daily with meals. This is a convenient form for consistent dosing, particularly for long-term hormonal support.",
      decoction: "For lactation support: Simmer 1 tablespoon shatavari root in 3 cups water for 20-30 minutes until reduced by one-third. Strain and drink 1/2 cup 2-3 times daily. For enhanced effects, add 1 teaspoon fennel seeds and 1/2 teaspoon fenugreek seeds to the decoction. This preparation is particularly effective for increasing breast milk production in nursing mothers."
    }
  },
  {
    id: "149",
    name: "Evening Primrose",
    scientificName: "Oenothera biennis",
    description: "A wildflower native to North America whose seed oil is rich in gamma-linolenic acid (GLA), an essential fatty acid with numerous benefits for women's health.",
    uses: ["Hormonal balance", "PMS relief", "Skin health", "Breast pain relief"],
    preparation: "Typically taken as oil in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces PMS symptoms", "Supports hormonal balance", "Improves skin health", "May help with breast tenderness"],
    category: "Women's",
    collections: ["Women's Herbs", "Native American", "Essential Fatty Acids", "Skin Health", "Hormonal Support"],
    conditions: ["PMS", "Menopause", "Breast Pain", "Eczema", "Acne", "Rheumatoid Arthritis", "Endometriosis"],
    warnings: [
      "May interact with blood-thinning medications, anti-seizure medications, and psychiatric medications.",
      "May increase bleeding risk and should be discontinued 2 weeks before scheduled surgery.",
      "May cause headache, nausea, or digestive upset in sensitive individuals.",
      "Should be used with caution by those with epilepsy or schizophrenia as it may increase the risk of seizures."
    ],
    dosage: {
      adult: "Oil capsules: 500-1000mg 2-3 times daily, containing 8-10% GLA. For skin conditions, can also be applied topically.",
      child: "Not typically recommended for children except under professional guidance.",
      elderly: "Standard adult dose is generally appropriate for elderly women. May be particularly beneficial for inflammatory conditions common in elderly.",
      pregnant: "Not recommended during pregnancy due to potential uterine-stimulating effects. Use with caution during breastfeeding.",
      maximum: "Do not exceed 3000mg daily. Effects on hormonal symptoms may take 2-3 months to become noticeable."
    },
    detailedPreparation: {
      capsules: "Evening primrose oil capsules (typically 500-1000mg) can be taken 2-3 times daily with meals. Look for products that specify GLA content (8-10%). This is the most common and convenient form, particularly for hormonal support and PMS relief. For best absorption, take with a small amount of fat-containing food.",
      oil: "For skin conditions: Pure evening primrose oil can be applied directly to areas affected by eczema, psoriasis, or acne 2-3 times daily. For enhanced effects, mix 10 drops of evening primrose oil with 1 tablespoon of jojoba or rosehip oil before applying. Can also be used as a massage oil for breast tenderness by gently massaging into breast tissue.",
      tincture: "Though less common than oil preparations, evening primrose tincture can be made by combining 1 part fresh evening primrose flowers and leaves with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-3ml (40-60 drops) in water 3 times daily for hormonal support.",
      tea: "For mild hormonal support: Steep 1-2 teaspoons of dried evening primrose flowers and leaves in 8oz hot water for 10 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a mild, pleasant taste. Note: The tea does not contain significant amounts of GLA (found in the seeds) and is less effective than oil preparations for hormonal issues."
    }
  },
  {
    id: "150",
    name: "Tribulus",
    scientificName: "Tribulus terrestris",
    description: "A small flowering plant that grows in many tropical and moderate areas worldwide. It has been used in traditional medicine systems, particularly Ayurveda, for male vitality and hormonal health.",
    uses: ["Male vitality", "Hormonal support", "Athletic performance", "Libido enhancement"],
    preparation: "Typically taken as capsules or tablets of standardized extract.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports testosterone levels", "Enhances physical performance", "Improves libido", "Supports reproductive health"],
    category: "Men's",
    collections: ["Men's Herbs", "Ayurvedic", "Traditional Chinese Medicine", "Athletic Performance", "Reproductive Health"],
    conditions: ["Low Testosterone", "Erectile Dysfunction", "Low Libido", "Infertility", "Muscle Recovery", "Urinary Tract Disorders"],
    warnings: [
      "May interact with medications for diabetes, high blood pressure, and heart conditions.",
      "May enhance the effects of testosterone replacement therapy or other hormone treatments.",
      "Should be discontinued 2 weeks before scheduled surgery due to potential effects on blood sugar and blood pressure.",
      "Not recommended for those with hormone-sensitive conditions such as breast, uterine, or prostate cancer."
    ],
    dosage: {
      adult: "Standardized extract (containing 40-45% saponins): 250-750mg 2-3 times daily. For athletic performance, take 30-60 minutes before exercise.",
      child: "Not recommended for children or adolescents due to hormonal effects.",
      elderly: "Start with lower doses (250mg once daily) and increase gradually if needed. May be particularly beneficial for age-related testosterone decline.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to hormonal effects.",
      maximum: "Do not exceed 1500mg daily of standardized extract. Effects on hormonal balance may take 2-4 weeks to become noticeable."
    },
    detailedPreparation: {
      capsules: "Standardized extract capsules (typically 250-500mg) can be taken 2-3 times daily with meals. Look for products standardized to contain 40-45% steroidal saponins or 60% total saponins. This is the most common and convenient form, particularly for hormonal support and athletic performance. For best results, take consistently for at least 8-12 weeks.",
      tincture: "Combine 1 part dried tribulus fruit with 5 parts 40-50% alcohol. Let sit for 4-6 weeks, shaking daily. Strain and store in dark bottles. Take 2-4ml (40-80 drops) in water 2-3 times daily for hormonal support or before exercise for performance enhancement.",
      tea: "For mild effects: Steep 1-2 teaspoons of crushed tribulus fruit in 8oz hot water for 10-15 minutes. Strain and drink 1 cup 2-3 times daily. The tea has a bitter taste that can be improved with honey and lemon. Note: The tea is less potent than standardized extracts and may not provide significant hormonal benefits.",
      decoction: "For traditional Ayurvedic preparation: Simmer 1 tablespoon crushed tribulus fruit in 2 cups water for 15-20 minutes until reduced by half. Strain and drink 1/2 cup twice daily. For enhanced effects, add 1 teaspoon ashwagandha powder and 1/2 teaspoon ginger to the decoction. This preparation is particularly helpful for reproductive health and urinary tract support."
    }
  },
  {
    id: "151",
    name: "Pine Pollen",
    scientificName: "Various Pinus species",
    description: "The male spore of pine trees, Pine Pollen has been used in Traditional Chinese Medicine for thousands of years as a powerful superfood and adaptogen, particularly beneficial for men.",
    uses: ["Hormonal balance", "Energy enhancement", "Anti-aging", "Immune support"],
    preparation: "Available as powder, tincture, or capsules. Powder can be added to smoothies or foods.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Contains natural androgens", "Rich in vitamins and minerals", "Supports endocrine system", "Has antioxidant properties"],
    category: "Men's",
    collections: ["Men's Herbs", "Traditional Chinese Medicine", "Superfoods", "Adaptogens", "Endocrine Support"],
    conditions: ["Low Testosterone", "Andropause", "Fatigue", "Immune Deficiency", "Inflammatory Conditions", "Aging"],
    warnings: [
      "May cause allergic reactions in people with pine allergies or pollen allergies.",
      "May enhance the effects of hormone therapy and should be used with caution by those on hormone treatments.",
      "Tinctures contain alcohol and should be avoided by those with alcohol sensitivities or liver conditions.",
      "Not recommended for those with hormone-sensitive conditions such as prostate cancer."
    ],
    dosage: {
      adult: "Powder: 1/2-1 teaspoon (1-2g) daily. Tincture: 10-20 drops 1-2 times daily. Capsules: 500-1000mg daily.",
      child: "Not recommended for children or adolescents due to hormonal effects.",
      elderly: "Start with lower doses (1/4 teaspoon powder or 5-10 drops tincture) and increase gradually if needed. May be particularly beneficial for age-related testosterone decline.",
      pregnant: "Not recommended during pregnancy or breastfeeding due to hormonal effects.",
      maximum: "Do not exceed 2 teaspoons of powder or 40 drops of tincture daily. Effects on hormonal balance may take 2-4 weeks to become noticeable."
    },
    detailedPreparation: {
      capsules: "Pine pollen capsules (typically 500mg) can be taken 1-2 times daily with meals. This is a convenient form for consistent dosing, particularly for those who dislike the taste of the powder. Capsules contain cell-wall broken pine pollen for better absorption, but are less potent than tinctures for hormonal effects.",
      tincture: "Pine pollen tincture is the most potent form for hormonal support, as alcohol extraction makes the androgens more bioavailable. Take 10-20 drops under the tongue 1-2 times daily for maximum absorption. Hold for 30 seconds before swallowing. Tinctures are particularly effective for low testosterone, andropause, and libido enhancement.",
      tea: "For mild effects and general nutrition: Steep 1 teaspoon of pine pollen powder in 8oz hot (not boiling) water for 5-10 minutes. Strain if desired and drink 1 cup daily. The tea has a mild, slightly sweet pine taste. Note: Heat may degrade some of the androgens, making this preparation less effective for hormonal support.",
      decoction: "For general health and nutrition: Mix 1/2-1 teaspoon pine pollen powder into smoothies, yogurt, oatmeal, or other foods. For enhanced effects, combine with 1/2 teaspoon each of ashwagandha and maca powder. Pine pollen powder has a mild, slightly sweet and earthy taste that blends well with most foods. For maximum hormonal benefits, consume raw rather than heated."
    }
  },
  {
    id: "152",
    name: "Guayusa",
    scientificName: "Ilex guayusa",
    description: "A holly tree native to the Amazon rainforest, Guayusa leaves have been brewed by indigenous peoples for thousands of years as a stimulating tea that provides balanced, clean energy.",
    uses: ["Energy enhancement", "Mental clarity", "Antioxidant", "Digestive support"],
    preparation: "Leaves are steeped in hot water to make tea, traditionally consumed early in the morning.",
    imageUrl: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Provides smooth energy without jitters", "Contains L-theanine for focus", "Rich in antioxidants", "Supports metabolism"],
    category: "Herbal teas"
  },
  {
    id: "153",
    name: "Chanca Piedra",
    scientificName: "Phyllanthus niruri",
    description: "A tropical plant whose name means 'stone breaker' in Spanish, referring to its traditional use for kidney stones and gallstones. It has been used in Ayurvedic and Amazonian medicine.",
    uses: ["Kidney support", "Liver health", "Gallstone prevention", "Digestive aid"],
    preparation: "Typically consumed as tea, tincture, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports kidney function", "May help dissolve stones", "Protects liver", "Has anti-inflammatory properties"],
    category: "Urinary system"
  },
  {
    id: "154",
    name: "Corn Silk",
    scientificName: "Zea mays",
    description: "The silky threads from corn ears have been used in traditional medicine around the world for urinary tract health and as a gentle diuretic.",
    uses: ["Urinary tract support", "Gentle diuretic", "Kidney health", "Blood pressure support"],
    preparation: "Can be dried and steeped as tea, or taken as tincture or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes urinary tract", "Supports kidney function", "Reduces water retention", "Has anti-inflammatory properties"],
    category: "Urinary system"
  },
  {
    id: "155",
    name: "Andrographis",
    scientificName: "Andrographis paniculata",
    description: "Known as 'King of Bitters' in Ayurvedic medicine, Andrographis has been used for centuries in Asian traditional medicine systems for immune support and respiratory health.",
    uses: ["Immune enhancement", "Respiratory support", "Fever reduction", "Digestive aid"],
    preparation: "Available as tablets, capsules, or tincture. Can also be prepared as tea, though it's extremely bitter.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "Reduces inflammation", "Supports respiratory health", "Has antimicrobial properties"],
    category: "Immune system"
  },
  {
    id: "156",
    name: "Olive Leaf",
    scientificName: "Olea europaea",
    description: "Leaves from the olive tree have been used medicinally in the Mediterranean region for thousands of years, particularly for immune support and cardiovascular health.",
    uses: ["Immune support", "Cardiovascular health", "Blood pressure regulation", "Antioxidant"],
    preparation: "Available as tea, tincture, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports healthy blood pressure", "Rich in antioxidants", "May help lower cholesterol"],
    category: "Immune system"
  },
  {
    id: "157",
    name: "Schizandra Berry",
    scientificName: "Schisandra chinensis",
    description: "Known as 'five flavor berry' in Chinese medicine because it contains all five basic flavors: sweet, salty, bitter, sour, and pungent. It's a powerful adaptogen used for thousands of years.",
    uses: ["Stress management", "Liver protection", "Energy enhancement", "Skin health"],
    preparation: "Can be consumed as dried berries, powder, tea, or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Helps body adapt to stress", "Protects liver cells", "Enhances physical performance", "Improves skin quality"],
    category: "Adaptogenic"
  },
  {
    id: "158",
    name: "Eleuthero",
    scientificName: "Eleutherococcus senticosus",
    description: "Also known as Siberian Ginseng, Eleuthero is a woody shrub native to Northeast Asia. It has been used in traditional Chinese medicine as an adaptogen to increase energy and vitality.",
    uses: ["Energy enhancement", "Stress management", "Immune support", "Athletic performance"],
    preparation: "Available as tea, tincture, or in capsule form. Root is the part typically used.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stamina and endurance", "Helps body adapt to stress", "Supports immune function", "Enhances mental performance"],
    category: "Adaptogenic"
  },
  {
    id: "159",
    name: "Kava",
    scientificName: "Piper methysticum",
    description: "A plant native to the South Pacific islands, Kava has been used ceremonially for centuries for its calming effects on the mind and body without impairing cognitive function.",
    uses: ["Anxiety relief", "Sleep support", "Muscle relaxation", "Social relaxant"],
    preparation: "Traditionally prepared by grinding the root and mixing with water. Modern forms include capsules and tinctures.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety without sedation", "Promotes relaxation", "Supports healthy sleep", "Relieves muscle tension"],
    category: "Nervous system"
  },
  {
    id: "160",
    name: "California Poppy",
    scientificName: "Eschscholzia californica",
    description: "The state flower of California, this bright orange poppy has been used by Native Americans for its gentle sedative and analgesic properties, supporting the nervous system.",
    uses: ["Sleep support", "Anxiety relief", "Pain management", "Relaxation"],
    preparation: "Available as tea, tincture, or in capsule form. Above-ground parts are used.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes restful sleep", "Eases anxiety and nervous tension", "Has mild analgesic properties", "Gentle enough for children"],
    category: "Nervous system"
  },
  {
    id: "161",
    name: "Sea Buckthorn",
    scientificName: "Hippophae rhamnoides",
    description: "A deciduous shrub native to Europe and Asia, Sea Buckthorn berries and oil have been used for thousands of years for skin health and tissue regeneration.",
    uses: ["Skin healing", "Mucous membrane support", "Digestive health", "Cardiovascular support"],
    preparation: "Berries can be consumed as juice or oil. Oil can be applied topically or taken internally.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in omega fatty acids", "Supports skin regeneration", "Protects mucous membranes", "Has antioxidant properties"],
    category: "Skin health"
  },
  {
    id: "162",
    name: "Helichrysum",
    scientificName: "Helichrysum italicum",
    description: "Also known as Immortelle or Everlasting, Helichrysum is a flowering plant used in Mediterranean traditional medicine for skin healing and regeneration.",
    uses: ["Skin healing", "Scar reduction", "Anti-aging", "Wound care"],
    preparation: "Essential oil is most commonly used, diluted in carrier oil for topical application.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes tissue regeneration", "Reduces scarring", "Has anti-inflammatory properties", "Supports skin elasticity"],
    category: "Skin health"
  },
  {
    id: "163",
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    description: "Also known as Holy Basil, Tulsi is one of the most sacred plants in India and a cornerstone of Ayurvedic medicine. It's revered as an adaptogen that helps the body and mind adapt to stress.",
    uses: ["Stress management", "Respiratory support", "Immune enhancement", "Spiritual practice"],
    preparation: "Can be consumed as tea, taken as capsules, or used fresh in cooking.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "Supports respiratory health", "Boosts immune function", "Has antimicrobial properties"],
    category: "Spiritual"
  },
  {
    id: "164",
    name: "White Sage",
    scientificName: "Salvia apiana",
    description: "A sacred plant used by Native American tribes for purification ceremonies and spiritual practices. Its aromatic leaves are burned for smudging to clear negative energy.",
    uses: ["Spiritual cleansing", "Meditation aid", "Energy clearing", "Respiratory support"],
    preparation: "Dried leaves are bundled and burned for smudging, or can be used as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Clears negative energy", "Enhances meditation", "Purifies spaces", "Has antimicrobial properties when burned"],
    category: "Spiritual"
  },
  {
    id: "165",
    name: "Palo Santo",
    scientificName: "Bursera graveolens",
    description: "A sacred wood from South America used by indigenous shamans for spiritual purification and energy clearing. Its name means 'holy wood' in Spanish.",
    uses: ["Energy clearing", "Meditation enhancement", "Spiritual practice", "Aromatherapy"],
    preparation: "Small pieces of wood are burned for their aromatic smoke, or oil can be used in diffusers.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Clears negative energy", "Enhances spiritual connection", "Uplifts mood", "Creates sacred space"],
    category: "Spiritual"
  },
  {
    id: "166",
    name: "Milk Thistle",
    scientificName: "Silybum marianum",
    description: "A flowering herb with distinctive white-veined leaves, Milk Thistle has been used for over 2,000 years for liver protection and detoxification support.",
    uses: ["Liver protection", "Detoxification", "Antioxidant", "Digestive support"],
    preparation: "Seeds are used to make capsules, tinctures, or tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects liver cells", "Supports detoxification", "Has antioxidant properties", "Helps regenerate liver tissue"],
    category: "Liver health"
  },
  {
    id: "167",
    name: "Artichoke Leaf",
    scientificName: "Cynara scolymus",
    description: "Beyond its use as a food, artichoke leaf has been used medicinally in European traditions for liver support, digestion, and cholesterol management.",
    uses: ["Liver support", "Digestive aid", "Cholesterol management", "Antioxidant"],
    preparation: "Available as tea, tincture, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stimulates bile flow", "Supports liver function", "May lower cholesterol", "Aids digestion"],
    category: "Liver health"
  },
  {
    id: "168",
    name: "Boswellia",
    scientificName: "Boswellia serrata",
    description: "Also known as Indian Frankincense, Boswellia is a resin extracted from the Boswellia tree. It has been used in Ayurvedic medicine for thousands of years for joint health and inflammation management.",
    uses: ["Joint support", "Anti-inflammatory", "Pain management", "Respiratory support"],
    preparation: "Typically taken as capsules or tablets of standardized extract.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Supports joint mobility", "May help with arthritis", "Soothes respiratory tract"],
    category: "Joint health"
  },
  {
    id: "169",
    name: "Devil's Claw",
    scientificName: "Harpagophytum procumbens",
    description: "A plant native to southern Africa, Devil's Claw gets its name from the tiny hooks that cover its fruit. It has been used traditionally for joint health and pain management.",
    uses: ["Joint support", "Pain relief", "Anti-inflammatory", "Digestive aid"],
    preparation: "Available as capsules, tablets, tincture, or tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces joint pain", "Supports mobility", "Has anti-inflammatory properties", "May help with back pain"],
    category: "Joint health"
  },
  {
    id: "170",
    name: "Horsetail",
    scientificName: "Equisetum arvense",
    description: "One of the oldest plants on earth, Horsetail is rich in silica and has been used traditionally for bone, hair, and nail health, as well as urinary tract support.",
    uses: ["Bone strength", "Hair and nail health", "Urinary tract support", "Wound healing"],
    preparation: "Available as tea, tincture, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in silica", "Supports bone density", "Strengthens hair and nails", "Has diuretic properties"],
    category: "Bone health"
  },
  {
    id: "171",
    name: "Oatstraw",
    scientificName: "Avena sativa",
    description: "The green tops and stems of the common oat plant, Oatstraw has been used in traditional European medicine for bone health, nervous system support, and as a gentle restorative tonic.",
    uses: ["Bone health", "Nervous system support", "Stress reduction", "Skin health"],
    preparation: "Can be consumed as tea, tincture, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in minerals for bone health", "Nourishes nervous system", "Reduces stress and anxiety", "Supports skin health"],
    category: "Bone health"
  },
  {
    id: "172",
    name: "Mullein",
    scientificName: "Verbascum thapsus",
    description: "A tall plant with soft, woolly leaves that has been used for centuries in European and Native American traditions for respiratory health and ear infections.",
    uses: ["Respiratory support", "Ear health", "Lymphatic drainage", "Cough relief"],
    preparation: "Leaves can be made into tea, tinctures, or smoked. Flowers are infused in oil for ear drops.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes respiratory tract", "Supports ear health", "Helps clear mucus", "Calms irritated tissues"],
    category: "Respiratory"
  },
  {
    id: "173",
    name: "Elecampane",
    scientificName: "Inula helenium",
    description: "A tall flowering plant native to Europe and Asia, Elecampane root has been used since ancient times for respiratory conditions and digestive support.",
    uses: ["Respiratory support", "Digestive aid", "Antimicrobial", "Expectorant"],
    preparation: "Root is used to make tea, tincture, or syrup. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lung function", "Helps clear mucus", "Soothes coughs", "Aids digestion"],
    category: "Respiratory"
  },
  {
    id: "174",
    name: "Gymnema",
    scientificName: "Gymnema sylvestre",
    description: "Known as 'sugar destroyer' in Hindi, Gymnema has been used in Ayurvedic medicine for thousands of years to support healthy blood sugar levels and reduce sugar cravings.",
    uses: ["Blood sugar support", "Weight management", "Diabetes support", "Sugar craving reduction"],
    preparation: "Typically taken as capsules, tablets, or tea. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "May reduce sugar cravings", "Supports pancreatic function", "Aids in weight management"],
    category: "Diabetes support"
  },
  {
    id: "175",
    name: "Cinnamon",
    scientificName: "Cinnamomum verum",
    description: "Beyond its use as a spice, true cinnamon (Ceylon cinnamon) has been used medicinally for thousands of years, particularly for blood sugar regulation and digestive support.",
    uses: ["Blood sugar support", "Digestive aid", "Antimicrobial", "Anti-inflammatory"],
    preparation: "Can be used as a spice in cooking, steeped as tea, or taken in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Aids digestion", "Has antimicrobial properties", "Rich in antioxidants"],
    category: "Diabetes support"
  },
  {
    id: "176",
    name: "Astragalus",
    scientificName: "Astragalus membranaceus",
    description: "A fundamental herb in Traditional Chinese Medicine, Astragalus root has been used for centuries to strengthen the body's vital energy (Qi) and support immune function.",
    uses: ["Immune enhancement", "Energy support", "Longevity", "Stress resistance"],
    preparation: "Root can be simmered in soups, made into tea, or taken as capsules or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens immune system", "Supports energy levels", "Enhances stress resistance", "Promotes longevity"],
    category: "Longevity"
  },
  {
    id: "177",
    name: "Fo-Ti",
    scientificName: "Polygonum multiflorum",
    description: "Also known as He Shou Wu, Fo-Ti is a renowned longevity herb in Traditional Chinese Medicine, used for thousands of years to support vitality, hair health, and aging gracefully.",
    uses: ["Longevity", "Hair health", "Liver and kidney support", "Blood building"],
    preparation: "Typically prepared as a tonic, decoction, or taken as capsules. Traditionally prepared with black beans.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy aging", "May prevent premature graying", "Nourishes blood", "Supports liver and kidneys"],
    category: "Longevity"
  },
  {
    id: "178",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "A bright orange-yellow flowering plant also known as pot marigold, Calendula has been used for centuries for its skin-healing, anti-inflammatory, and antimicrobial properties.",
    uses: ["Skin healing", "Wound care", "Anti-inflammatory", "Lymphatic support"],
    preparation: "Flowers can be made into tea, tincture, oil infusion, or salve. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes skin healing", "Reduces inflammation", "Has antimicrobial properties", "Supports lymphatic system"],
    category: "Children's herbs"
  },
  {
    id: "179",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "A gentle flowering herb with apple-like fragrance, Chamomile has been used for thousands of years as a mild sedative for children and adults, and to soothe digestive discomfort.",
    uses: ["Sleep support", "Digestive aid", "Anxiety relief", "Skin soothing"],
    preparation: "Flowers are steeped as tea, made into tincture, or used in baths. Safe for children in appropriate doses.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Soothes digestive upset", "Calms nervous tension", "Gentle enough for children"],
    category: "Children's herbs"
  },
  {
    id: "180",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "A licorice-flavored herb used since ancient times for digestive support, particularly for infants and children with colic or digestive discomfort.",
    uses: ["Digestive aid", "Colic relief", "Anti-bloating", "Milk production"],
    preparation: "Seeds can be chewed, made into tea, or used in cooking. For tea, crush seeds slightly and steep in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves gas and bloating", "Soothes digestive spasms", "May help with colic", "Supports healthy digestion"],
    category: "Children's herbs"
  },
  {
    id: "181",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "Beyond its culinary uses, Rosemary has been used medicinally for thousands of years for cognitive enhancement, circulation, and as a natural preservative.",
    uses: ["Memory enhancement", "Circulation support", "Hair health", "Antimicrobial"],
    preparation: "Can be used fresh or dried in cooking, steeped as tea, or infused in oil for topical applications.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves memory and concentration", "Enhances circulation", "Supports hair growth", "Has antimicrobial properties"],
    category: "Culinary medicinal"
  },
  {
    id: "182",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    description: "A common culinary herb with powerful medicinal properties, Thyme has been used since ancient times for respiratory conditions, infections, and digestive support.",
    uses: ["Respiratory support", "Antimicrobial", "Digestive aid", "Immune enhancement"],
    preparation: "Can be used fresh or dried in cooking, steeped as tea, or used as an essential oil in diluted form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Has antimicrobial properties", "Aids digestion", "Boosts immune function"],
    category: "Culinary medicinal"
  },
  {
    id: "183",
    name: "Sage",
    scientificName: "Salvia officinalis",
    description: "A culinary and medicinal herb used since ancient times for cognitive support, menopausal symptoms, and as an antimicrobial for throat and mouth conditions.",
    uses: ["Cognitive support", "Menopausal symptom relief", "Throat health", "Antimicrobial"],
    preparation: "Can be used fresh or dried in cooking, steeped as tea, or used as a gargle for sore throats.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports brain function", "Reduces excessive sweating", "Soothes sore throats", "Has antimicrobial properties"],
    category: "Culinary medicinal"
  },
  {
    id: "184",
    name: "Maca",
    scientificName: "Lepidium meyenii",
    description: "A root vegetable native to the high Andes of Peru, Maca has been used for thousands of years as a food and medicine for energy, endurance, and hormonal balance.",
    uses: ["Energy enhancement", "Hormonal balance", "Fertility support", "Stress management"],
    preparation: "Typically consumed as powder added to foods or beverages, or taken in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Supports hormonal balance", "May enhance fertility", "Helps body adapt to stress"],
    category: "Superfoods"
  },
  {
    id: "185",
    name: "Spirulina",
    scientificName: "Arthrospira platensis",
    description: "A blue-green algae that has been consumed for centuries, Spirulina is one of the most nutrient-dense foods on the planet, rich in protein, vitamins, minerals, and antioxidants.",
    uses: ["Nutritional support", "Immune enhancement", "Detoxification", "Energy support"],
    preparation: "Available as powder, tablets, or capsules. Powder can be added to smoothies, juices, or foods.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Highly nutritious", "Rich in protein", "Contains antioxidants", "Supports immune function"],
    category: "Superfoods"
  },
  {
    id: "186",
    name: "Chlorella",
    scientificName: "Chlorella vulgaris",
    description: "A freshwater green algae that is one of the most studied superfoods, known for its detoxification properties, nutrient density, and immune-supporting benefits.",
    uses: ["Detoxification", "Immune support", "Nutritional enhancement", "Heavy metal binding"],
    preparation: "Available as powder, tablets, or capsules. Powder can be added to smoothies, juices, or foods.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Binds to heavy metals", "Rich in chlorophyll", "Supports immune function", "Highly nutritious"],
    category: "Superfoods"
  },
  {
    id: "187",
    name: "Rooibos",
    scientificName: "Aspalathus linearis",
    description: "A red bush tea from South Africa that has been consumed for centuries. It's naturally caffeine-free and rich in antioxidants, making it suitable for all ages.",
    uses: ["Antioxidant", "Digestive support", "Skin health", "Relaxation"],
    preparation: "Leaves are steeped in hot water to make tea, which can be enjoyed hot or cold.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Caffeine-free", "Supports digestive health", "May improve skin conditions"],
    category: "African herbs"
  },
  {
    id: "188",
    name: "Devil's Claw",
    scientificName: "Harpagophytum procumbens",
    description: "A plant native to southern Africa, Devil's Claw has been used in traditional African medicine for centuries for pain relief, particularly for arthritis and back pain.",
    uses: ["Pain relief", "Anti-inflammatory", "Joint support", "Digestive aid"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Relieves joint pain", "Supports mobility", "May help with digestive issues"],
    category: "African herbs"
  },
  {
    id: "189",
    name: "Buchu",
    scientificName: "Agathosma betulina",
    description: "A flowering plant native to South Africa, Buchu has been used by indigenous peoples for centuries for urinary tract health, digestive support, and as an anti-inflammatory.",
    uses: ["Urinary tract support", "Anti-inflammatory", "Digestive aid", "Kidney health"],
    preparation: "Leaves are used to make tea or tinctures. For tea, steep 1 teaspoon of dried leaves in hot water for 5-10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary tract health", "Has diuretic properties", "Reduces inflammation", "Aids digestion"],
    category: "African herbs"
  },
  {
    id: "190",
    name: "Lemon Myrtle",
    scientificName: "Backhousia citriodora",
    description: "A flowering plant native to Australia, Lemon Myrtle has been used by Aboriginal peoples for its antimicrobial properties, immune support, and for its uplifting citrus aroma.",
    uses: ["Antimicrobial", "Immune support", "Mood enhancement", "Digestive aid"],
    preparation: "Leaves can be used to make tea, in cooking, or as an essential oil.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports immune function", "Uplifts mood", "Aids digestion"],
    category: "Australian herbs"
  },
  {
    id: "191",
    name: "Kakadu Plum",
    scientificName: "Terminalia ferdinandiana",
    description: "A small fruit native to Australia that contains the highest recorded natural amount of vitamin C of any food in the world. It has been used by Aboriginal peoples for thousands of years.",
    uses: ["Immune support", "Antioxidant", "Skin health", "Anti-inflammatory"],
    preparation: "Available as powder, capsules, or in skincare products. Powder can be added to foods or beverages.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Extremely high in vitamin C", "Powerful antioxidant", "Supports immune function", "Promotes skin health"],
    category: "Australian herbs"
  },
  {
    id: "192",
    name: "Black Seed",
    scientificName: "Nigella sativa",
    description: "Also known as Black Cumin, this seed has been used in Middle Eastern and Asian traditional medicine for over 2,000 years. Prophet Muhammad reportedly called it 'a cure for every disease except death.''",
    uses: ["Immune support", "Respiratory health", "Digestive aid", "Anti-inflammatory"],
    preparation: "Seeds can be consumed whole, ground, or pressed into oil. Can be added to foods or taken as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "Supports respiratory health", "Has antimicrobial properties", "Reduces inflammation"],
    category: "Middle Eastern herbs"
  },
  {
    id: "193",
    name: "Sumac",
    scientificName: "Rhus coriaria",
    description: "A tangy, crimson spice common in Middle Eastern cuisine that has been used medicinally for thousands of years for its antioxidant and antimicrobial properties.",
    uses: ["Antioxidant", "Digestive aid", "Blood sugar support", "Antimicrobial"],
    preparation: "Ground berries are used as a spice in cooking or can be steeped as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Supports healthy digestion", "May help regulate blood sugar", "Has antimicrobial properties"],
    category: "Middle Eastern herbs"
  },
  {
    id: "194",
    name: "Za'atar",
    scientificName: "Origanum syriacum",
    description: "Both an herb and a spice blend, Za'atar has been used in the Middle East since Biblical times. The herb itself is a species of oregano/thyme native to the region.",
    uses: ["Cognitive enhancement", "Immune support", "Digestive aid", "Respiratory health"],
    preparation: "Fresh herb can be used in cooking or as tea. The spice blend (herb mixed with sumac, sesame seeds, and salt) is used on foods.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports brain function", "Has antimicrobial properties", "Aids digestion", "Rich in antioxidants"],
    category: "Middle Eastern herbs"
  },
  {
    id: "195",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "A flowering plant native to North America that has been used by Native American tribes for centuries to treat infections, wounds, and as a general immune support.",
    uses: ["Immune enhancement", "Cold and flu prevention", "Wound healing", "Anti-inflammatory"],
    preparation: "Root, leaves, and flower can be used to make tea, tinctures, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "May shorten duration of colds", "Supports wound healing", "Reduces inflammation"],
    category: "Native American herbs"
  },
  {
    id: "196",
    name: "Yerba Mansa",
    scientificName: "Anemopsis californica",
    description: "A sacred plant used by Native American tribes of the Southwest for respiratory, digestive, and inflammatory conditions. Its name means 'tame herb' in Spanish.",
    uses: ["Respiratory support", "Digestive aid", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Root is used to make tea, tinctures, or poultices. For tea, simmer 1 teaspoon of dried root in water for 15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Soothes digestive tract", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Native American herbs"
  },
  {
    id: "197",
    name: "Osha Root",
    scientificName: "Ligusticum porteri",
    description: "A sacred herb used by Native American tribes of the Rocky Mountains for respiratory conditions, immune support, and to increase circulation.",
    uses: ["Respiratory support", "Immune enhancement", "Circulation improvement", "Sore throat relief"],
    preparation: "Root can be chewed fresh, made into tea, tincture, or syrup.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lung function", "Boosts immune response", "Increases circulation", "Soothes sore throats"],
    category: "Native American herbs"
  },
  {
    id: "198",
    name: "Bilberry",
    scientificName: "Vaccinium myrtillus",
    description: "A European relative of the blueberry that has been used since the Middle Ages for eye health. During World War II, British Royal Air Force pilots reportedly ate bilberry jam to improve their night vision.",
    uses: ["Eye health", "Vision support", "Circulation improvement", "Antioxidant"],
    preparation: "Berries can be consumed fresh, dried, or as extract in capsules or tablets.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "May improve night vision", "Strengthens capillaries", "Rich in antioxidants"],
    category: "Eye health"
  },
  {
    id: "199",
    name: "Eyebright",
    scientificName: "Euphrasia officinalis",
    description: "A small annual plant native to Europe that has been used since the Middle Ages specifically for eye conditions. Its name reflects its traditional use.",
    uses: ["Eye health", "Allergy relief", "Inflammation reduction", "Respiratory support"],
    preparation: "Herb is used to make tea, tinctures, or eye washes (under professional guidance only).",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "Reduces eye inflammation", "May help with allergies", "Soothes irritated eyes"],
    category: "Eye health"
  },
  {
    id: "200",
    name: "Goji Berry",
    scientificName: "Lycium barbarum",
    description: "A bright orange-red berry that has been used in Traditional Chinese Medicine for over 2,000 years. It's particularly valued for eye health, immune support, and longevity.",
    uses: ["Eye health", "Immune support", "Antioxidant", "Longevity"],
    preparation: "Berries can be consumed dried, in teas, or added to foods and smoothies.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects eye health", "Rich in antioxidants", "Supports immune function", "May enhance longevity"],
    category: "Eye health"
  },
  {
    id: "201",
    name: "Bhringraj",
    scientificName: "Eclipta alba",
    description: "Known as the 'king of hair' in Ayurvedic medicine, Bhringraj has been used for centuries to promote hair growth, prevent premature graying, and support liver health.",
    uses: ["Hair growth", "Premature graying prevention", "Liver support", "Skin health"],
    preparation: "Herb can be made into oil for topical application, or consumed as powder, tea, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes hair growth", "Prevents premature graying", "Supports liver function", "Nourishes hair follicles"],
    category: "Hair health"
  },
  {
    id: "202",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    description: "Also known as Indian Gooseberry, Amla is one of the richest natural sources of vitamin C and has been used in Ayurvedic medicine for thousands of years for hair health and overall vitality.",
    uses: ["Hair strength", "Premature graying prevention", "Immune support", "Digestive aid"],
    preparation: "Fruit can be consumed fresh, dried, as juice, powder, or oil. Oil is applied topically for hair.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens hair follicles", "Prevents premature graying", "Rich in vitamin C", "Nourishes scalp"],
    category: "Hair health"
  },
  {
    id: "203",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "A palm native to the southeastern United States that has been used by Native Americans for urinary and reproductive health. It's particularly known for supporting hair health in men.",
    uses: ["Hair loss prevention", "Prostate health", "Hormonal balance", "Urinary support"],
    preparation: "Berries are used to make capsules, tablets, tinctures, or tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May prevent hair loss", "Supports prostate health", "Balances hormones", "Improves urinary flow"],
    category: "Hair health"
  },
  {
    id: "204",
    name: "Neem",
    scientificName: "Azadirachta indica",
    description: "A tree native to India that has been used in Ayurvedic medicine for thousands of years. It's known as the 'village pharmacy' due to its numerous medicinal properties, particularly for oral health.",
    uses: ["Oral health", "Skin conditions", "Blood purification", "Antimicrobial"],
    preparation: "Twigs are traditionally used as toothbrushes. Leaves and bark can be made into tea, powder, or oil.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports oral health", "Has antimicrobial properties", "Reduces inflammation", "Purifies blood"],
    category: "Oral health"
  },
  {
    id: "205",
    name: "Myrrh",
    scientificName: "Commiphora myrrha",
    description: "A resin from a thorny tree native to the Middle East and Northeast Africa. It has been used for thousands of years for oral health, wound healing, and in religious ceremonies.",
    uses: ["Oral health", "Wound healing", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Resin can be made into tincture, powder, or oil. Tincture is often used for gum health.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports gum health", "Heals mouth ulcers", "Has antimicrobial properties", "Reduces oral inflammation"],
    category: "Oral health"
  },
  {
    id: "206",
    name: "Licorice Root",
    scientificName: "Glycyrrhiza glabra",
    description: "One of the most widely used herbs in traditional medicine systems worldwide. For oral health, it's known for its antimicrobial properties and ability to soothe irritated tissues.",
    uses: ["Oral health", "Digestive support", "Respiratory aid", "Adrenal support"],
    preparation: "Root can be chewed, made into tea, tincture, or powder. Powder can be used in toothpaste or mouthwash.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes irritated gums", "Has antimicrobial properties", "Freshens breath", "Reduces oral inflammation"],
    category: "Oral health"
  },
  {
    id: "207",
    name: "Valerian",
    scientificName: "Valeriana officinalis",
    description: "A flowering plant native to Europe and Asia that has been used since ancient Greek and Roman times as a sleep aid and anxiety reliever.",
    uses: ["Sleep improvement", "Anxiety relief", "Stress reduction", "Muscle relaxation"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves sleep quality", "Reduces time to fall asleep", "Calms nervous system", "Relieves anxiety"],
    category: "Sleep herbs"
  },
  {
    id: "208",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "A fragrant flowering plant native to the Mediterranean region that has been used for centuries for its calming, sedative effects and pleasant aroma.",
    uses: ["Sleep improvement", "Anxiety relief", "Headache relief", "Skin care"],
    preparation: "Flowers can be made into tea, tincture, or essential oil. Oil can be diffused or applied topically (diluted).",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes restful sleep", "Reduces anxiety", "Calms nervous system", "Relieves headaches"],
    category: "Sleep herbs"
  },
  {
    id: "209",
    name: "Hops",
    scientificName: "Humulus lupulus",
    description: "Best known as a bittering agent in beer, hops have been used medicinally since the 9th century for sleep, anxiety, and digestive issues. The sedative properties were discovered when hop pickers would become sleepy during harvest.",
    uses: ["Sleep improvement", "Anxiety relief", "Digestive aid", "Menopausal support"],
    preparation: "Flowers are used to make tea, tinctures, or capsules. Often combined with valerian for sleep.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves sleep quality", "Reduces restlessness", "Calms nervous system", "Supports healthy digestion"],
    category: "Sleep herbs"
  },
  {
    id: "210",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "One of the most important herbs in Ayurvedic medicine, used for over 3,000 years. Its name means 'smell of the horse,' referring to both its smell and its ability to impart the strength of a stallion.",
    uses: ["Stress reduction", "Energy enhancement", "Immune support", "Cognitive function"],
    preparation: "Root is used to make powder, capsules, or tinctures. Traditionally mixed with warm milk and honey.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "Balances stress hormones", "Enhances energy and stamina", "Supports immune function"],
    category: "Stress management"
  },
  {
    id: "211",
    name: "Holy Basil",
    scientificName: "Ocimum sanctum",
    description: "Also known as Tulsi, Holy Basil is one of the most sacred plants in India. It has been used for over 3,000 years in Ayurvedic medicine as an adaptogen to help the body adapt to stress.",
    uses: ["Stress reduction", "Immune support", "Respiratory health", "Cognitive function"],
    preparation: "Leaves can be chewed fresh, made into tea, or taken as capsules or tincture.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress and anxiety", "Balances stress hormones", "Enhances mental clarity", "Supports immune function"],
    category: "Stress management"
  },
  {
    id: "212",
    name: "Cat's Claw",
    scientificName: "Uncaria tomentosa",
    description: "A woody vine native to the Amazon rainforest with hook-like thorns resembling a cat's claw. It has been used by indigenous peoples of the Amazon for centuries for immune support and inflammation.",
    uses: ["Immune enhancement", "Anti-inflammatory", "Joint support", "Digestive aid"],
    preparation: "Inner bark is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune function", "Reduces inflammation", "Supports joint health", "Aids digestion"],
    category: "South American herbs"
  },
  {
    id: "213",
    name: "Maca",
    scientificName: "Lepidium meyenii",
    description: "A root vegetable native to the high Andes of Peru that has been cultivated for over 3,000 years. It was traditionally used by indigenous peoples for energy, fertility, and as a high-altitude adaptogen.",
    uses: ["Energy enhancement", "Hormonal balance", "Fertility support", "Adaptogenic"],
    preparation: "Root is dried and ground into powder, which can be added to foods or beverages, or taken as capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Supports hormonal balance", "May enhance fertility", "Helps body adapt to stress"],
    category: "South American herbs"
  },
  {
    id: "214",
    name: "Pau d'Arco",
    scientificName: "Tabebuia impetiginosa",
    description: "A canopy tree native to the Amazon rainforest whose inner bark has been used by indigenous peoples for centuries for its powerful antimicrobial and immune-supporting properties.",
    uses: ["Immune support", "Antimicrobial", "Anti-inflammatory", "Detoxification"],
    preparation: "Inner bark is used to make tea, tinctures, or capsules. For tea, simmer 1-2 teaspoons of bark in water for 20 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports immune function", "Reduces inflammation", "Aids detoxification"],
    category: "South American herbs"
  },
  {
    id: "215",
    name: "Soursop",
    scientificName: "Annona muricata",
    description: "A fruit-bearing tree native to the Caribbean and parts of South America. The leaves, fruit, and seeds have been used in traditional Caribbean medicine for various health conditions.",
    uses: ["Immune support", "Digestive aid", "Relaxation", "Skin health"],
    preparation: "Leaves are used to make tea, fruit is eaten fresh or made into juice, and seeds are sometimes used medicinally.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Aids digestion", "Promotes relaxation", "Rich in antioxidants"],
    category: "Caribbean herbs"
  },
  {
    id: "216",
    name: "Cerasee",
    scientificName: "Momordica charantia",
    description: "Also known as Bitter Melon, this climbing vine is widely used in Caribbean traditional medicine for blood sugar regulation, digestive issues, and skin conditions.",
    uses: ["Blood sugar support", "Digestive aid", "Skin conditions", "Detoxification"],
    preparation: "Leaves and fruit are used to make tea, tinctures, or eaten as food. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Aids digestion", "Cleanses blood", "Supports skin health"],
    category: "Caribbean herbs"
  },
  {
    id: "217",
    name: "Fever Grass",
    scientificName: "Cymbopogon citratus",
    description: "Also known as Lemongrass, this aromatic tropical plant is a staple in Caribbean traditional medicine for fevers, digestive issues, and relaxation.",
    uses: ["Fever reduction", "Digestive aid", "Relaxation", "Antimicrobial"],
    preparation: "Stalks and leaves are used to make tea or added to soups and baths. For tea, steep fresh or dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces fever", "Calms digestive system", "Promotes relaxation", "Has antimicrobial properties"],
    category: "Caribbean herbs"
  },
  {
    id: "218",
    name: "Kava",
    scientificName: "Piper methysticum",
    description: "A shrub native to the Pacific Islands that has been used ceremonially for thousands of years. The root is known for its relaxing and socializing effects without impairing cognitive function.",
    uses: ["Anxiety relief", "Relaxation", "Social ritual", "Sleep support"],
    preparation: "Root is traditionally prepared by grinding and mixing with water, creating a beverage consumed in social settings. Modern preparations include capsules and tinctures.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes relaxation", "Enhances social connection", "Supports sleep"],
    category: "Pacific Island herbs"
  },
  {
    id: "219",
    name: "Noni",
    scientificName: "Morinda citrifolia",
    description: "A tree native to Southeast Asia and Australia that has spread throughout the Pacific Islands. Its fruit has been used in traditional Polynesian medicine for over 2,000 years.",
    uses: ["Immune support", "Pain relief", "Digestive aid", "Skin conditions"],
    preparation: "Fruit is consumed fresh, as juice, or fermented. Leaves can be made into tea or applied topically.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Reduces inflammation", "Aids digestion", "Rich in antioxidants"],
    category: "Pacific Island herbs"
  },
  {
    id: "220",
    name: "Coconut",
    scientificName: "Cocos nucifera",
    description: "Often called the 'tree of life' in Pacific Island cultures, every part of the coconut palm has traditional medicinal uses, from the fruit to the leaves to the bark.",
    uses: ["Hydration", "Digestive aid", "Skin health", "Wound healing"],
    preparation: "Water is consumed fresh, meat can be eaten or pressed into oil, husks can be used for various purposes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Provides hydration", "Supports digestive health", "Nourishes skin", "Contains healthy fats"],
    category: "Pacific Island herbs"
  },
  {
    id: "221",
    name: "Hawthorn",
    scientificName: "Crataegus species",
    description: "A flowering shrub native to temperate regions of the Northern Hemisphere. It has been used in traditional European, Chinese, and Native American medicine for heart health for centuries.",
    uses: ["Heart support", "Blood pressure regulation", "Cholesterol management", "Anxiety relief"],
    preparation: "Berries, leaves, and flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens heart muscle", "Supports healthy blood pressure", "Improves circulation", "Calms nervous system"],
    category: "Cardiovascular health"
  },
  {
    id: "222",
    name: "Garlic",
    scientificName: "Allium sativum",
    description: "One of the oldest cultivated plants in the world, garlic has been used medicinally for thousands of years across numerous cultures, particularly for cardiovascular health.",
    uses: ["Heart health", "Immune support", "Antimicrobial", "Blood pressure regulation"],
    preparation: "Cloves can be consumed raw, cooked, aged, or as supplements. For medicinal purposes, raw garlic is often most potent.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart health", "Lowers cholesterol", "Regulates blood pressure", "Has antimicrobial properties"],
    category: "Cardiovascular health"
  },
  {
    id: "223",
    name: "Motherwort",
    scientificName: "Leonurus cardiaca",
    description: "A flowering plant in the mint family whose Latin name 'cardiaca' refers to its traditional use for heart conditions. It has been used in European and Chinese medicine for centuries.",
    uses: ["Heart support", "Anxiety relief", "Menstrual regulation", "Blood pressure support"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms heart palpitations", "Reduces anxiety", "Supports healthy blood pressure", "Eases menstrual cramps"],
    category: "Cardiovascular health"
  },
  {
    id: "224",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "A flowering plant in the daisy family that has been used for centuries for its skin-healing and anti-inflammatory properties. It's one of the most versatile herbs for skin conditions.",
    uses: ["Skin healing", "Wound care", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Flowers are used to make oils, salves, creams, or tinctures for topical application. Can also be used as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes wound healing", "Soothes skin inflammation", "Has antimicrobial properties", "Supports tissue regeneration"],
    category: "Skin conditions"
  },
  {
    id: "225",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description: "A succulent plant species that has been used for thousands of years across many cultures for its skin-healing and soothing properties. Ancient Egyptians called it the 'plant of immortality.''",
    uses: ["Skin healing", "Burn treatment", "Moisturizing", "Digestive support"],
    preparation: "Gel from inside the leaves is applied topically for skin conditions or consumed for internal benefits.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes burns and skin irritations", "Promotes wound healing", "Moisturizes skin", "Has anti-inflammatory properties"],
    category: "Skin conditions"
  },
  {
    id: "226",
    name: "Tea Tree",
    scientificName: "Melaleuca alternifolia",
    description: "A small tree native to Australia whose leaves have been used by Aboriginal peoples for centuries for their powerful antimicrobial and skin-healing properties.",
    uses: ["Skin infections", "Acne treatment", "Fungal infections", "Wound care"],
    preparation: "Leaves are distilled to produce essential oil, which is diluted and applied topically. Never consumed internally.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Treats acne", "Combats fungal infections", "Supports wound healing"],
    category: "Skin conditions"
  },
  {
    id: "227",
    name: "Cordyceps",
    scientificName: "Cordyceps sinensis",
    description: "A rare fungus that grows on caterpillar larvae in the high mountain regions of China. It has been used in Traditional Chinese Medicine for centuries to enhance energy, endurance, and athletic performance.",
    uses: ["Energy enhancement", "Athletic performance", "Oxygen utilization", "Respiratory support"],
    preparation: "Traditionally consumed as tea or in soups. Modern preparations include capsules, tablets, or powder.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Improves oxygen utilization", "Enhances athletic performance", "Supports respiratory function"],
    category: "Athletic performance"
  },
  {
    id: "228",
    name: "Rhodiola",
    scientificName: "Rhodiola rosea",
    description: "A flowering plant that grows in cold, mountainous regions of Europe and Asia. It has been used for centuries as an adaptogen to enhance physical endurance and combat fatigue.",
    uses: ["Energy enhancement", "Stress resistance", "Mental performance", "Physical endurance"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Enhances physical performance", "Improves mental focus", "Reduces fatigue"],
    category: "Athletic performance"
  },
  {
    id: "229",
    name: "Eleuthero",
    scientificName: "Eleutherococcus senticosus",
    description: "Also known as Siberian Ginseng, this shrub native to Northeast Asia has been used in Traditional Chinese Medicine for thousands of years to increase energy, endurance, and stamina.",
    uses: ["Energy enhancement", "Stress resistance", "Athletic performance", "Immune support"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases endurance", "Enhances recovery", "Improves oxygen utilization", "Supports immune function"],
    category: "Athletic performance"
  },
  {
    id: "230",
    name: "Beet Root",
    scientificName: "Beta vulgaris",
    description: "A root vegetable that has gained popularity among athletes for its ability to enhance endurance and performance through improving blood flow and oxygen delivery to muscles.",
    uses: ["Athletic performance", "Endurance enhancement", "Blood pressure support", "Liver support"],
    preparation: "Root can be consumed fresh, as juice, powder, or in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves endurance", "Enhances oxygen delivery", "Supports healthy blood pressure", "Rich in nitrates"],
    category: "Athletic performance"
  },
  {
    id: "231",
    name: "Muira Puama",
    scientificName: "Ptychopetalum olacoides",
    description: "A small tree native to the Amazon rainforest, also known as 'potency wood.' It has been used by indigenous peoples for centuries for energy, stamina, and as an aphrodisiac.",
    uses: ["Energy enhancement", "Male vitality", "Libido support", "Nervous system support"],
    preparation: "Bark and root are used to make tea, tinctures, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Supports male reproductive health", "Enhances libido", "Supports nervous system"],
    category: "Men's"
  },
  {
    id: "232",
    name: "Saffron",
    scientificName: "Crocus sativus",
    description: "One of the world's most expensive spices, saffron has been used in Persian medicine for over 3,000 years for mood enhancement, women's health, and as a culinary delicacy.",
    uses: ["Mood enhancement", "Women's health", "Digestive aid", "Antioxidant"],
    preparation: "Stigmas (threads) are used in cooking, teas, or as supplements. For tea, steep a few threads in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Supports menstrual health", "Rich in antioxidants", "Aids digestion"],
    category: "Persian medicine"
  },
  {
    id: "233",
    name: "Boswellia",
    scientificName: "Boswellia serrata",
    description: "Also known as Frankincense, this aromatic resin has been used in Middle Eastern and North African traditional medicine for thousands of years for inflammation, respiratory conditions, and spiritual practices.",
    uses: ["Anti-inflammatory", "Respiratory support", "Joint health", "Spiritual practice"],
    preparation: "Resin can be burned as incense, made into tea, or taken as capsules or tinctures.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Supports respiratory health", "Eases joint pain", "Enhances spiritual practices"],
    category: "Middle Eastern herbs"
  },
  {
    id: "234",
    name: "Barberry",
    scientificName: "Berberis vulgaris",
    description: "A shrub whose berries and root bark have been used in Persian and Middle Eastern medicine for thousands of years, particularly for liver health, digestive issues, and infections.",
    uses: ["Liver support", "Digestive aid", "Antimicrobial", "Blood sugar regulation"],
    preparation: "Berries can be consumed fresh or dried. Root bark is used to make tea, tinctures, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Aids digestion", "Has antimicrobial properties", "May help regulate blood sugar"],
    category: "Persian medicine"
  },
  {
    id: "235",
    name: "Damiana",
    scientificName: "Turnera diffusa",
    description: "A small shrub native to the southern United States, Mexico, and Central America. It has been used by indigenous peoples for centuries as a reproductive tonic and aphrodisiac.",
    uses: ["Women's reproductive health", "Hormonal balance", "Mood enhancement", "Aphrodisiac"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports reproductive health", "Balances hormones", "Improves mood", "Enhances libido"],
    category: "Women's reproductive health"
  },
  {
    id: "236",
    name: "Red Raspberry Leaf",
    scientificName: "Rubus idaeus",
    description: "The leaves of the red raspberry plant have been used for centuries by Native American women and in Western herbalism as a tonic for the female reproductive system, particularly during pregnancy.",
    uses: ["Pregnancy support", "Menstrual regulation", "Uterine tonic", "Labor preparation"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Tones uterine muscles", "Eases menstrual cramps", "Rich in minerals", "May ease labor"],
    category: "Women's reproductive health"
  },
  {
    id: "237",
    name: "Chaste Tree Berry",
    scientificName: "Vitex agnus-castus",
    description: "A small tree native to the Mediterranean region whose berries have been used since ancient Greek times to support women's reproductive health, particularly for hormone balance.",
    uses: ["Hormonal balance", "PMS relief", "Menstrual regulation", "Fertility support"],
    preparation: "Berries are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Reduces PMS symptoms", "Regulates menstrual cycle", "May support fertility"],
    category: "Women's reproductive health"
  },
  {
    id: "238",
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    description: "A flowering plant with bright yellow flowers that has been used since ancient Greek times for mood disorders, wound healing, and nerve pain. It's one of the most well-studied herbs for emotional well-being.",
    uses: ["Mood enhancement", "Anxiety relief", "Wound healing", "Nerve pain relief"],
    preparation: "Flowering tops are used to make tea, tinctures, oils, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Reduces anxiety", "Supports nervous system", "Promotes wound healing"],
    category: "Emotional well-being"
  },
  {
    id: "239",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "A lemon-scented herb in the mint family that has been used since ancient Greek and Roman times for its calming effects on the nervous system and its ability to lift the spirits.",
    uses: ["Anxiety relief", "Sleep support", "Mood enhancement", "Digestive aid"],
    preparation: "Leaves are used to make tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Improves mood", "Supports healthy sleep", "Aids digestion"],
    category: "Emotional well-being"
  },
  {
    id: "240",
    name: "Mimosa",
    scientificName: "Albizia julibrissin",
    description: "Also known as the 'happiness tree' or 'collective happiness bark' in Traditional Chinese Medicine, the bark and flowers have been used for centuries to lift the spirits and calm the mind.",
    uses: ["Mood enhancement", "Grief support", "Anxiety relief", "Sleep support"],
    preparation: "Bark and flowers are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Lifts mood", "Eases grief", "Calms nervous system", "Supports healthy sleep"],
    category: "Emotional well-being"
  },
  {
    id: "241",
    name: "Schisandra",
    scientificName: "Schisandra chinensis",
    description: "A woody vine native to forests of Northern China and Russia whose berries are known as 'five flavor fruit' in Traditional Chinese Medicine because they contain all five basic flavors.",
    uses: ["Stress relief", "Liver support", "Energy enhancement", "Longevity"],
    preparation: "Berries are used to make tea, tinctures, or capsules. For tea, simmer 1-2 teaspoons of dried berries in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress", "Supports liver function", "Increases energy and stamina", "Enhances mental performance"],
    category: "Adaptogenic"
  },
  {
    id: "242",
    name: "Reishi Mushroom",
    scientificName: "Ganoderma lucidum",
    description: "Known as the 'mushroom of immortality' in Traditional Chinese Medicine, Reishi has been used for over 2,000 years to promote longevity, support immune function, and reduce stress.",
    uses: ["Immune support", "Stress reduction", "Sleep improvement", "Longevity"],
    preparation: "Mushroom is dried and used to make tea, tinctures, or capsules. For tea, simmer slices for 1-2 hours.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Reduces stress", "Improves sleep quality", "Has anti-aging properties"],
    category: "Adaptogenic"
  },
  {
    id: "243",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "A unique-looking mushroom with cascading white tendrils that has been used in Traditional Chinese Medicine for centuries for cognitive health and nervous system support.",
    uses: ["Cognitive enhancement", "Nerve regeneration", "Digestive support", "Immune enhancement"],
    preparation: "Mushroom can be consumed as food, tea, or in capsule or tincture form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports brain function", "May stimulate nerve growth", "Improves digestion", "Enhances immune function"],
    category: "Brain"
  },
  {
    id: "244",
    name: "Eyebright",
    scientificName: "Euphrasia officinalis",
    description: "A small annual plant native to Europe that has been used since the Middle Ages specifically for eye conditions. Its name reflects its traditional use.",
    uses: ["Eye health", "Allergy relief", "Sinus support", "Respiratory health"],
    preparation: "Aerial parts are used to make tea, tinctures, or eye washes (under professional guidance only).",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "Relieves eye irritation", "May help with allergies", "Supports respiratory system"],
    category: "Eye health"
  },
  {
    id: "245",
    name: "Bilberry",
    scientificName: "Vaccinium myrtillus",
    description: "A European relative of the blueberry that has been used since the Middle Ages for eye health. During World War II, British Royal Air Force pilots reportedly ate bilberry jam to improve their night vision.",
    uses: ["Eye health", "Vision support", "Circulation improvement", "Antioxidant"],
    preparation: "Berries can be consumed fresh, dried, or as extract in capsules or tablets.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "May improve night vision", "Strengthens capillaries", "Rich in antioxidants"],
    category: "Eye health"
  },
  {
    id: "246",
    name: "Ginkgo Biloba",
    scientificName: "Ginkgo biloba",
    description: "One of the oldest living tree species, dating back over 200 million years. Its leaves have been used in Traditional Chinese Medicine for thousands of years for cognitive health and circulation.",
    uses: ["Cognitive enhancement", "Circulation improvement", "Memory support", "Eye health"],
    preparation: "Leaves are used to make standardized extracts, teas, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves blood flow to the brain", "Enhances memory and cognition", "Supports eye health", "Has antioxidant properties"],
    category: "Brain"
  },
  {
    id: "247",
    name: "Bacopa",
    scientificName: "Bacopa monnieri",
    description: "Also known as Brahmi, this creeping herb has been used in Ayurvedic medicine for thousands of years as a brain tonic to enhance memory, learning, and concentration.",
    uses: ["Cognitive enhancement", "Memory support", "Stress reduction", "Longevity"],
    preparation: "Whole plant is used to make tea, tinctures, or capsules. Often taken with ghee in traditional preparations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and learning", "Reduces anxiety", "Supports brain function", "Has adaptogenic properties"],
    category: "Brain"
  },
  {
    id: "248",
    name: "Periwinkle",
    scientificName: "Vinca minor",
    description: "A flowering plant that has been used in traditional European medicine for centuries. It contains vinpocetine, which has been studied for its effects on cognitive function and cerebral blood flow.",
    uses: ["Cognitive enhancement", "Circulation improvement", "Memory support", "Headache relief"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. Modern preparations often use isolated vinpocetine.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves cerebral blood flow", "Enhances memory and cognition", "Supports brain metabolism", "May help with tinnitus"],
    category: "Brain"
  },
  {
    id: "249",
    name: "Sage",
    scientificName: "Salvia officinalis",
    description: "An aromatic herb that has been used since ancient Roman times for its cognitive-enhancing and memory-preserving properties. Its name comes from the Latin 'salvare,' meaning 'to save' or 'to heal.'",
    uses: ["Cognitive enhancement", "Memory support", "Menopausal symptom relief", "Antimicrobial"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or in tinctures and capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and cognition", "Reduces excessive sweating", "Has antimicrobial properties", "Supports oral health"],
    category: "Brain"
  },
  {
    id: "250",
    name: "Cardamom",
    scientificName: "Elettaria cardamomum",
    description: "A spice native to the Indian subcontinent and Indonesia that has been used in Ayurvedic and traditional Arabic medicine for thousands of years for digestive health and as a breath freshener.",
    uses: ["Digestive aid", "Breath freshener", "Antimicrobial", "Aphrodisiac"],
    preparation: "Pods or seeds are used in cooking, as tea, or ground into powder.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Freshens breath", "Has antimicrobial properties", "May support cardiovascular health"],
    category: "Stomach"
  },
  {
    id: "251",
    name: "Meadowsweet",
    scientificName: "Filipendula ulmaria",
    description: "A flowering plant native to Europe and Asia that has been used for centuries for pain relief, particularly for digestive discomfort. It contains natural salicylates, the compounds from which aspirin was derived.",
    uses: ["Pain relief", "Digestive aid", "Anti-inflammatory", "Fever reduction"],
    preparation: "Flowers and leaves are used to make tea, tinctures, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestive discomfort", "Reduces inflammation", "Relieves pain", "Supports healthy digestion"],
    category: "Stomach"
  },
  {
    id: "252",
    name: "Rooibos",
    scientificName: "Aspalathus linearis",
    description: "A broom-like member of the legume family native to South Africa. It has been used by indigenous peoples for centuries and is now popular worldwide as a caffeine-free tea with high antioxidant content.",
    uses: ["Antioxidant", "Sleep support", "Digestive aid", "Skin health"],
    preparation: "Leaves are fermented and dried to make tea. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Caffeine-free", "Supports digestive health", "May benefit skin conditions"],
    category: "African herbs"
  },
  {
    id: "253",
    name: "Devil's Claw",
    scientificName: "Harpagophytum procumbens",
    description: "A plant native to southern Africa whose root has been used by indigenous peoples for centuries for pain relief, particularly for arthritis and digestive issues.",
    uses: ["Pain relief", "Anti-inflammatory", "Digestive aid", "Fever reduction"],
    preparation: "Root is dried and used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Relieves pain", "Supports digestive health", "May lower fever"],
    category: "African herbs"
  },
  {
    id: "254",
    name: "Baobab",
    scientificName: "Adansonia digitata",
    description: "Known as the 'tree of life' in Africa, this iconic tree produces fruit with exceptionally high vitamin C content. It has been used in traditional African medicine for centuries for numerous health benefits.",
    uses: ["Immune support", "Digestive aid", "Energy enhancement", "Skin health"],
    preparation: "Fruit pulp is dried and powdered, which can be added to foods or beverages, or made into a paste for topical application.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in vitamin C", "Supports immune function", "Aids digestion", "Provides sustained energy"],
    category: "African herbs"
  },
  {
    id: "255",
    name: "Buchu",
    scientificName: "Agathosma betulina",
    description: "A flowering plant native to South Africa that has been used by indigenous peoples for centuries for urinary tract health, digestive issues, and as an anti-inflammatory.",
    uses: ["Urinary tract support", "Digestive aid", "Anti-inflammatory", "Diuretic"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary tract health", "Aids digestion", "Reduces inflammation", "Has diuretic properties"],
    category: "African herbs"
  },
  {
    id: "256",
    name: "Lemon Myrtle",
    scientificName: "Backhousia citriodora",
    description: "A flowering plant native to Australia with leaves that have the highest natural concentration of citral of any plant in the world. It has been used by Aboriginal peoples for its antimicrobial and mood-enhancing properties.",
    uses: ["Antimicrobial", "Mood enhancement", "Digestive aid", "Skin health"],
    preparation: "Leaves are used to make tea, essential oil, or as a spice in cooking. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Uplifts mood", "Aids digestion", "Supports skin health"],
    category: "Australian herbs"
  },
  {
    id: "257",
    name: "Kakadu Plum",
    scientificName: "Terminalia ferdinandiana",
    description: "A small fruit native to Australia that has the highest natural vitamin C content of any food in the world. It has been used by Aboriginal peoples for thousands of years for immune support and as a food source.",
    uses: ["Immune support", "Antioxidant", "Skin health", "Anti-inflammatory"],
    preparation: "Fruit is consumed fresh, dried, or as powder, extract, or in skincare products.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Extremely high in vitamin C", "Rich in antioxidants", "Supports immune function", "Promotes skin health"],
    category: "Australian herbs"
  },
  {
    id: "258",
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    description: "A tall tree native to Australia whose leaves have been used by Aboriginal peoples for thousands of years for respiratory conditions, wound healing, and fever reduction.",
    uses: ["Respiratory support", "Wound healing", "Fever reduction", "Antimicrobial"],
    preparation: "Leaves are used to make essential oil, tea, or steam inhalations. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Opens respiratory passages", "Has antimicrobial properties", "Reduces fever", "Promotes wound healing"],
    category: "Respiratory health"
  },
  {
    id: "259",
    name: "Mullein",
    scientificName: "Verbascum thapsus",
    description: "A biennial plant native to Europe and Asia that has been used for centuries for respiratory conditions. Its soft, fuzzy leaves were traditionally used to line shoes for warmth and comfort.",
    uses: ["Respiratory support", "Cough relief", "Ear health", "Lymphatic support"],
    preparation: "Leaves and flowers are used to make tea, tinctures, or oil infusions. For tea, steep 1-2 teaspoons of dried herb in hot water and strain well.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes respiratory tissues", "Relieves cough", "Supports ear health", "Supports lymphatic drainage"],
    category: "Respiratory health"
  },
  {
    id: "260",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient Egyptian, Greek, and Roman times for respiratory conditions, digestive issues, and as a culinary herb.",
    uses: ["Respiratory support", "Antimicrobial", "Digestive aid", "Antioxidant"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports respiratory health", "Aids digestion", "Rich in antioxidants"],
    category: "Respiratory health"
  },
  {
    id: "261",
    name: "Elecampane",
    scientificName: "Inula helenium",
    description: "A tall flowering plant native to Europe and Asia that has been used since ancient Greek and Roman times for respiratory conditions, particularly for wet, productive coughs.",
    uses: ["Respiratory support", "Cough relief", "Digestive aid", "Antimicrobial"],
    preparation: "Root is used to make tea, tinctures, or syrups. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lung function", "Helps expel mucus", "Has antimicrobial properties", "Aids digestion"],
    category: "Respiratory health"
  },
  {
    id: "262",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "A daisy-like plant that has been used since ancient Egyptian times for its calming and anti-inflammatory properties. It's one of the most popular herbs for children due to its gentle nature and pleasant taste.",
    uses: ["Calming", "Sleep support", "Digestive aid", "Skin soother"],
    preparation: "Flowers are used to make tea, tinctures, or oil infusions. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Promotes sleep", "Soothes digestive system", "Reduces inflammation"],
    category: "Children's health"
  },
  {
    id: "263",
    name: "Catnip",
    scientificName: "Nepeta cataria",
    description: "A member of the mint family that has been used for centuries for its calming effects on children. While it excites cats, it has the opposite effect on humans, particularly children.",
    uses: ["Calming", "Sleep support", "Fever reduction", "Digestive aid"],
    preparation: "Leaves and flowering tops are used to make tea, tinctures, or baths. For tea, steep 1 teaspoon of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Promotes sleep", "May reduce fever", "Soothes digestive system"],
    category: "Children's health"
  },
  {
    id: "264",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient times for digestive issues, particularly for infants and children with colic or gas.",
    uses: ["Digestive aid", "Colic relief", "Anti-inflammatory", "Breath freshener"],
    preparation: "Seeds are used to make tea, tinctures, or added to food. For tea, steep 1 teaspoon of crushed seeds in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves gas and bloating", "Soothes colic in infants", "Reduces inflammation", "Freshens breath"],
    category: "Children's health"
  },
  {
    id: "265",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "A flowering plant in the daisy family that has been used for centuries for skin conditions, particularly for children due to its gentle nature and effectiveness for diaper rash, cuts, and scrapes.",
    uses: ["Skin healing", "Diaper rash", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Flowers are used to make oil infusions, salves, creams, or washes for topical application.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes wound healing", "Soothes diaper rash", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Children's health"
  },
  {
    id: "266",
    name: "Marshmallow Root",
    scientificName: "Althaea officinalis",
    description: "A perennial herb native to Europe, Western Asia, and Northern Africa that has been used since ancient Egyptian times for its soothing mucilage content, particularly for dry, irritated tissues.",
    uses: ["Respiratory support", "Digestive soother", "Urinary tract support", "Skin soother"],
    preparation: "Root is used to make cold infusions, teas, or syrups. For cold infusion, soak 1 tablespoon of dried root in cold water overnight.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes irritated tissues", "Forms protective layer on mucous membranes", "Relieves dry cough", "Calms digestive tract"],
    category: "Respiratory health"
  },
  {
    id: "267",
    name: "Plantain",
    scientificName: "Plantago major",
    description: "A common 'weed' found worldwide that has been used by numerous cultures for centuries for wound healing, respiratory conditions, and digestive issues. Not related to the banana-like fruit of the same name.",
    uses: ["Wound healing", "Respiratory support", "Digestive aid", "Insect bite relief"],
    preparation: "Leaves are used fresh as poultice, or dried for tea, tinctures, or salves. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Draws out toxins", "Soothes respiratory tissues", "Aids digestion", "Relieves insect bites and stings"],
    category: "Children's health"
  },
  {
    id: "268",
    name: "Slippery Elm",
    scientificName: "Ulmus rubra",
    description: "A tree native to North America whose inner bark has been used by Native American peoples for centuries for its soothing, mucilaginous properties for respiratory, digestive, and urinary conditions.",
    uses: ["Respiratory support", "Digestive soother", "Urinary tract support", "Wound healing"],
    preparation: "Inner bark is powdered and used to make tea, lozenges, poultices, or gruel. For tea, mix 1 teaspoon of powder in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes irritated tissues", "Forms protective layer on mucous membranes", "Relieves cough", "Calms digestive tract"],
    category: "Respiratory health"
  },
  {
    id: "269",
    name: "Moringa",
    scientificName: "Moringa oleifera",
    description: "A fast-growing tree native to India, also known as the 'miracle tree' or 'drumstick tree.' It has been used in traditional medicine for thousands of years and is exceptionally nutrient-dense.",
    uses: ["Nutritional supplement", "Energy enhancement", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Leaves, seeds, and pods are used in cooking, as tea, or in powder or capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Extremely nutrient-dense", "Rich in antioxidants", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Adaptogenic"
  },
  {
    id: "270",
    name: "Passionflower",
    scientificName: "Passiflora incarnata",
    description: "A climbing vine native to the southeastern United States that has been used by Native American peoples for centuries for anxiety, insomnia, and seizures. Its name comes from Spanish missionaries who saw symbols of Christ's passion in its unique flowers.",
    uses: ["Anxiety relief", "Sleep support", "Pain relief", "Nervous system support"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes sleep", "Calms nervous system", "May relieve pain"],
    category: "Emotional well-being"
  },
  {
    id: "271",
    name: "Wild Cherry Bark",
    scientificName: "Prunus serotina",
    description: "The inner bark of the wild cherry tree, native to North America. It has been used by Native American peoples for centuries for respiratory conditions, particularly for dry, irritating coughs.",
    uses: ["Cough relief", "Respiratory support", "Fever reduction", "Digestive aid"],
    preparation: "Inner bark is used to make tea, syrups, or tinctures. For tea, simmer 1 teaspoon of dried bark in water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Suppresses cough", "Soothes respiratory tissues", "May reduce fever", "Has mild sedative properties"],
    category: "Respiratory health"
  },
  {
    id: "272",
    name: "Siberian Ginseng",
    scientificName: "Eleutherococcus senticosus",
    description: "A woody shrub native to Siberia, northern China, Korea, and Japan. It has been used in traditional Russian and Chinese medicine for thousands of years as an adaptogen to increase energy, stamina, and resistance to stress.",
    uses: ["Energy enhancement", "Stress resistance", "Immune support", "Athletic performance"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Enhances stress resistance", "Supports immune function", "Improves athletic performance"],
    category: "Siberian herbs"
  },
  {
    id: "273",
    name: "Chaga Mushroom",
    scientificName: "Inonotus obliquus",
    description: "A fungus that grows primarily on birch trees in cold climates like Siberia, northern Canada, and Alaska. It has been used in traditional Russian and Eastern European medicine for centuries for immune support and overall health.",
    uses: ["Immune support", "Antioxidant", "Anti-inflammatory", "Digestive aid"],
    preparation: "Mushroom chunks are used to make tea, tinctures, or extracts. For tea, simmer small pieces in water for 1-3 hours.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Rich in antioxidants", "Reduces inflammation", "Supports digestive health"],
    category: "Siberian herbs"
  },
  {
    id: "274",
    name: "Sea Buckthorn",
    scientificName: "Hippophae rhamnoides",
    description: "A deciduous shrub native to cold regions of Europe and Asia, including Siberia. Its bright orange berries have been used in traditional Russian, Mongolian, and Tibetan medicine for thousands of years for numerous health benefits.",
    uses: ["Skin health", "Digestive aid", "Cardiovascular support", "Immune enhancement"],
    preparation: "Berries are consumed fresh, as juice, oil, or in capsules. Oil can be applied topically for skin conditions.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in omega fatty acids", "Supports skin health", "Aids digestion", "Supports cardiovascular health"],
    category: "Siberian herbs"
  },
  {
    id: "275",
    name: "Rhodiola Rosea",
    scientificName: "Rhodiola rosea",
    description: "A flowering plant that grows in cold, mountainous regions of Europe and Asia, including Siberia. It has been used in traditional Russian medicine for centuries as an adaptogen to enhance physical and mental performance and combat fatigue.",
    uses: ["Energy enhancement", "Stress resistance", "Mental performance", "Mood support"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Enhances mental performance", "Improves mood", "Reduces fatigue"],
    category: "Siberian herbs"
  },
  {
    id: "276",
    name: "Lingonberry",
    scientificName: "Vaccinium vitis-idaea",
    description: "A small evergreen shrub native to the forests of Scandinavia and Russia. Its red berries have been used in traditional Nordic medicine and cuisine for centuries for urinary tract health and as a preservative.",
    uses: ["Urinary tract support", "Antioxidant", "Anti-inflammatory", "Digestive aid"],
    preparation: "Berries are consumed fresh, dried, as juice, jam, or in supplements.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary tract health", "Rich in antioxidants", "Reduces inflammation", "Aids digestion"],
    category: "Scandinavian herbs"
  },
  {
    id: "277",
    name: "Birch",
    scientificName: "Betula pendula",
    description: "A deciduous tree native to northern Europe and Asia. Its leaves, bark, and sap have been used in traditional Scandinavian and Russian medicine for centuries for detoxification, urinary tract health, and skin conditions.",
    uses: ["Detoxification", "Urinary tract support", "Skin health", "Joint support"],
    preparation: "Leaves are used to make tea, bark is used for extracts, and sap is consumed as a spring tonic.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports detoxification", "Has diuretic properties", "Promotes skin health", "Supports joint function"],
    category: "Scandinavian herbs"
  },
  {
    id: "278",
    name: "Cloudberry",
    scientificName: "Rubus chamaemorus",
    description: "A low-growing plant native to the bogs and marshes of Scandinavia, Russia, and Canada. Its amber-colored berries have been used in traditional Nordic medicine for centuries for their high vitamin C content and digestive benefits.",
    uses: ["Immune support", "Digestive aid", "Antioxidant", "Skin health"],
    preparation: "Berries are consumed fresh, as jam, liqueur, or in supplements.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in vitamin C", "Supports immune function", "Aids digestion", "Promotes skin health"],
    category: "Scandinavian herbs"
  },
  {
    id: "279",
    name: "Juniper",
    scientificName: "Juniperus communis",
    description: "An evergreen coniferous shrub native to the Northern Hemisphere, including Scandinavia. Its berries have been used in traditional Nordic medicine for centuries for urinary tract health, digestive issues, and as a flavoring for gin.",
    uses: ["Urinary tract support", "Digestive aid", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Berries are used to make tea, tinctures, or as a spice in cooking. For tea, steep 1 teaspoon of crushed berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary tract health", "Aids digestion", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Scandinavian herbs"
  },
  {
    id: "280",
    name: "Neem",
    scientificName: "Azadirachta indica",
    description: "A fast-growing tree native to the Indian subcontinent that has been used in Ayurvedic medicine for thousands of years, particularly for oral health. Every part of the tree has medicinal properties.",
    uses: ["Oral health", "Skin conditions", "Antimicrobial", "Blood purification"],
    preparation: "Twigs are used as natural toothbrushes (miswak), leaves are used to make tea, oil, or paste for topical application.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes oral health", "Has antimicrobial properties", "Supports skin health", "Purifies blood"],
    category: "Dental health"
  },
  {
    id: "281",
    name: "Myrrh",
    scientificName: "Commiphora myrrha",
    description: "A small thorny tree native to the Arabian Peninsula and Northeast Africa whose resin has been used for thousands of years in traditional medicine, particularly for oral health and wound healing.",
    uses: ["Oral health", "Wound healing", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Resin is used to make tinctures, mouthwashes, or toothpastes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes gum health", "Has antimicrobial properties", "Reduces inflammation", "Supports wound healing"],
    category: "Dental health"
  },
  {
    id: "282",
    name: "Clove",
    scientificName: "Syzygium aromaticum",
    description: "The aromatic flower buds of a tree native to the Maluku Islands in Indonesia. They have been used for thousands of years in traditional medicine, particularly for dental pain due to their natural anesthetic properties.",
    uses: ["Dental pain relief", "Antimicrobial", "Digestive aid", "Anti-inflammatory"],
    preparation: "Buds are used whole, ground, or as essential oil. For toothache, apply oil directly to the affected area or chew on a whole bud.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves dental pain", "Has antimicrobial properties", "Aids digestion", "Reduces inflammation"],
    category: "Dental health"
  },
  {
    id: "283",
    name: "Licorice Root",
    scientificName: "Glycyrrhiza glabra",
    description: "A perennial herb native to southern Europe and parts of Asia that has been used in traditional medicine for thousands of years for numerous health benefits, including oral health.",
    uses: ["Oral health", "Digestive aid", "Respiratory support", "Adrenal support"],
    preparation: "Root is used to make tea, tinctures, or chewed directly. For tea, simmer 1 teaspoon of dried root in water for 10 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes oral health", "Soothes digestive system", "Supports respiratory function", "Supports adrenal glands"],
    category: "Dental health"
  },
  {
    id: "284",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    description: "Also known as Indian Gooseberry, this fruit has been used in Ayurvedic medicine for thousands of years, particularly for hair health. It's one of the richest natural sources of vitamin C.",
    uses: ["Hair health", "Immune support", "Digestive aid", "Anti-aging"],
    preparation: "Fruit is consumed fresh, dried, as juice, powder, or oil. For hair, oil can be applied topically or powder mixed with water as a paste.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens hair", "Prevents premature graying", "Rich in vitamin C", "Supports digestive health"],
    category: "Hair health"
  },
  {
    id: "285",
    name: "Bhringraj",
    scientificName: "Eclipta alba",
    description: "A herb native to India, China, Thailand, and Brazil that has been used in Ayurvedic medicine for thousands of years as a premier treatment for hair health, often called the 'king of hair.'",
    uses: ["Hair health", "Liver support", "Skin conditions", "Anti-aging"],
    preparation: "Leaves are used to make oil infusions, paste, or taken internally as powder or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes hair growth", "Prevents premature graying", "Supports liver function", "Rejuvenates skin"],
    category: "Hair health"
  },
  {
    id: "286",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "A small palm native to the southeastern United States that has been used by Native American peoples for centuries for urinary and reproductive health, including hair loss prevention.",
    uses: ["Hair health", "Prostate health", "Urinary tract support", "Hormonal balance"],
    preparation: "Berries are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May prevent hair loss", "Supports prostate health", "Supports urinary tract health", "Helps balance hormones"],
    category: "Hair health"
  },
  {
    id: "287",
    name: "Horsetail",
    scientificName: "Equisetum arvense",
    description: "One of the oldest plants on earth, dating back to prehistoric times. It has been used in traditional European medicine for centuries for its high silica content, which benefits hair, skin, and nails.",
    uses: ["Hair health", "Nail strength", "Urinary tract support", "Wound healing"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens hair and nails", "Rich in silica", "Supports urinary tract health", "Promotes wound healing"],
    category: "Hair health"
  },
  {
    id: "288",
    name: "Arnica",
    scientificName: "Arnica montana",
    description: "A flowering plant native to the mountains of Europe and Siberia that has been used in traditional medicine for centuries for bruises, sprains, and muscle soreness. It's one of the most popular homeopathic remedies.",
    uses: ["Pain relief", "Bruise treatment", "Anti-inflammatory", "Muscle recovery"],
    preparation: "Flowers are used to make topical creams, gels, or oils. Never consumed internally except in highly diluted homeopathic preparations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces pain", "Speeds bruise healing", "Reduces inflammation", "Supports muscle recovery"],
    category: "Siberian herbs"
  },
  {
    id: "289",
    name: "Angelica",
    scientificName: "Angelica archangelica",
    description: "A biennial plant native to northern Europe and Siberia that has been used in traditional Scandinavian, Russian, and Sami medicine for centuries for digestive issues, respiratory conditions, and women's health.",
    uses: ["Digestive aid", "Respiratory support", "Women's health", "Circulation improvement"],
    preparation: "Root, seeds, and leaves are used to make tea, tinctures, or added to food. For tea, steep 1 teaspoon of dried root in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports respiratory health", "Balances women's hormones", "Improves circulation"],
    category: "Scandinavian herbs"
  },
  {
    id: "290",
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    description: "A flowering plant native to temperate regions of the Northern Hemisphere, including Scandinavia and Siberia. It has been used in traditional medicine for thousands of years for wound healing, fever reduction, and women's health.",
    uses: ["Wound healing", "Fever reduction", "Women's health", "Digestive aid"],
    preparation: "Aerial parts are used to make tea, tinctures, or poultices. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stops bleeding", "Reduces fever", "Regulates menstrual cycle", "Aids digestion"],
    category: "Scandinavian herbs"
  },
  {
    id: "291",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "An aromatic evergreen shrub native to the Mediterranean region that has been used since ancient times for numerous health benefits, including hair health and cognitive enhancement.",
    uses: ["Hair health", "Cognitive enhancement", "Digestive aid", "Antimicrobial"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or infused in oil for topical application. For hair, oil can be massaged into scalp.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stimulates hair growth", "Enhances memory and cognition", "Aids digestion", "Has antimicrobial properties"],
    category: "Hair health"
  },
  {
    id: "292",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    description: "A flowering plant in the ginger family native to the Indian subcontinent and Southeast Asia. Its rhizome has been used in Ayurvedic and traditional Chinese medicine for thousands of years, particularly for its anti-inflammatory properties.",
    uses: ["Joint health", "Anti-inflammatory", "Digestive aid", "Antioxidant"],
    preparation: "Rhizome is used fresh, dried and ground into powder, or as extracts. Often combined with black pepper to enhance absorption.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Supports joint health", "Aids digestion", "Rich in antioxidants"],
    category: "Joint health"
  },
  {
    id: "293",
    name: "Boswellia",
    scientificName: "Boswellia serrata",
    description: "A tree native to India, North Africa, and the Middle East whose resin has been used in Ayurvedic medicine for thousands of years, particularly for inflammatory conditions like arthritis.",
    uses: ["Joint health", "Anti-inflammatory", "Respiratory support", "Pain relief"],
    preparation: "Resin is used to make extracts, capsules, or topical preparations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Relieves joint pain", "Supports respiratory health", "Improves mobility"],
    category: "Joint health"
  },
  {
    id: "294",
    name: "White Willow Bark",
    scientificName: "Salix alba",
    description: "The bark of the white willow tree, which has been used in traditional medicine for thousands of years for pain relief. It contains salicin, a compound similar to aspirin.",
    uses: ["Pain relief", "Fever reduction", "Anti-inflammatory", "Headache relief"],
    preparation: "Bark is used to make tea, tinctures, or capsules. For tea, simmer 1-2 teaspoons of dried bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves pain", "Reduces inflammation", "Lowers fever", "Natural alternative to aspirin"],
    category: "Joint health"
  },
  {
    id: "295",
    name: "Tart Cherry",
    scientificName: "Prunus cerasus",
    description: "A species of cherry native to Europe and Asia that has been used in traditional medicine for gout and arthritis due to its anti-inflammatory properties and ability to lower uric acid levels.",
    uses: ["Joint health", "Gout relief", "Sleep support", "Recovery aid"],
    preparation: "Fruit is consumed fresh, dried, as juice, or in supplement form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Lowers uric acid levels", "Supports healthy sleep", "Aids in muscle recovery"],
    category: "Joint health"
  },
  {
    id: "296",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    description: "A flowering plant whose rhizome is widely used as a spice and in traditional medicine. It has been used for thousands of years in various cultures for its anti-inflammatory and digestive properties.",
    uses: ["Joint health", "Digestive aid", "Anti-inflammatory", "Nausea relief"],
    preparation: "Rhizome is used fresh, dried, as tea, or in capsules. For tea, steep slices of fresh ginger in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Aids digestion", "Relieves nausea", "Warms the body"],
    category: "Joint health"
  },
  {
    id: "297",
    name: "Astragalus",
    scientificName: "Astragalus membranaceus",
    description: "A flowering plant in the legume family native to China, Mongolia, and Korea. Its root has been used in Traditional Chinese Medicine for thousands of years as an immune tonic and energy enhancer.",
    uses: ["Immune support", "Energy enhancement", "Stress resistance", "Longevity"],
    preparation: "Root is used to make tea, soups, tinctures, or capsules. For tea, simmer 1-2 teaspoons of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens immune system", "Increases energy and stamina", "Enhances stress resistance", "Supports longevity"],
    category: "Immune support"
  },
  {
    id: "298",
    name: "Elderberry",
    scientificName: "Sambucus nigra",
    description: "A flowering plant native to Europe, North America, and parts of Asia whose berries have been used in traditional medicine for centuries for immune support, particularly during cold and flu season.",
    uses: ["Immune support", "Cold and flu relief", "Antioxidant", "Anti-inflammatory"],
    preparation: "Berries are used to make syrups, teas, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "May shorten duration of colds", "Rich in antioxidants", "Reduces inflammation"],
    category: "Immune support"
  },
  {
    id: "299",
    name: "Andrographis",
    scientificName: "Andrographis paniculata",
    description: "A plant native to South Asian countries that has been used in Ayurvedic and traditional Chinese medicine for centuries for immune support and to reduce the severity and duration of cold symptoms.",
    uses: ["Immune support", "Cold and flu relief", "Anti-inflammatory", "Liver support"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "May reduce severity of colds", "Reduces inflammation", "Supports liver function"],
    category: "Immune support"
  },
  {
    id: "300",
    name: "Olive Leaf",
    scientificName: "Olea europaea",
    description: "The leaf of the olive tree, which has been used in Mediterranean traditional medicine for centuries for immune support and to fight infections due to its powerful antimicrobial properties.",
    uses: ["Immune support", "Antimicrobial", "Cardiovascular support", "Antioxidant"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Has antimicrobial properties", "Supports cardiovascular health", "Rich in antioxidants"],
    category: "Immune support"
  },
  {
    id: "301",
    name: "Lemongrass",
    scientificName: "Cymbopogon citratus",
    description: "A tall, perennial grass native to tropical regions of Asia. It has been used in traditional medicine in Southeast Asia for centuries for its digestive, anti-inflammatory, and fever-reducing properties.",
    uses: ["Digestive aid", "Fever reduction", "Relaxation", "Antimicrobial"],
    preparation: "Stalks are used to make tea, in cooking, or as essential oil. For tea, steep fresh or dried stalks in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Reduces fever", "Promotes relaxation", "Has antimicrobial properties"],
    category: "Southeast Asian herbs"
  },
  {
    id: "302",
    name: "Galangal",
    scientificName: "Alpinia galanga",
    description: "A rhizome in the ginger family native to Southeast Asia. It has been used in traditional medicine in Thailand, Indonesia, and Malaysia for centuries for digestive issues, respiratory conditions, and as an aphrodisiac.",
    uses: ["Digestive aid", "Respiratory support", "Aphrodisiac", "Anti-inflammatory"],
    preparation: "Rhizome is used fresh in cooking, as tea, or in capsules. For tea, simmer slices of fresh or dried galangal in water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports respiratory health", "May enhance libido", "Reduces inflammation"],
    category: "Southeast Asian herbs"
  },
  {
    id: "303",
    name: "Pandan",
    scientificName: "Pandanus amaryllifolius",
    description: "A tropical plant native to Southeast Asia whose aromatic leaves have been used in traditional medicine and cuisine for centuries for their flavor and medicinal properties.",
    uses: ["Relaxation", "Fever reduction", "Digestive aid", "Hair health"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as hair rinse. For tea, steep fresh or dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "May reduce fever", "Aids digestion", "Strengthens hair"],
    category: "Southeast Asian herbs"
  },
  {
    id: "304",
    name: "Kaffir Lime",
    scientificName: "Citrus hystrix",
    description: "A citrus fruit native to tropical Southeast Asia whose leaves and fruit have been used in traditional medicine and cuisine for centuries for their digestive, skin, and oral health benefits.",
    uses: ["Digestive aid", "Skin health", "Oral health", "Insect repellent"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or in hair and skin care. Fruit rind is used in cooking or for its essential oil.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Promotes skin health", "Supports oral health", "Repels insects"],
    category: "Southeast Asian herbs"
  },
  {
    id: "305",
    name: "Dong Quai",
    scientificName: "Angelica sinensis",
    description: "A herb native to China, Korea, and Japan that has been used in Traditional Chinese Medicine for thousands of years, particularly for women's health. It's often called 'female ginseng.'",
    uses: ["Women's health", "Blood tonic", "Circulation improvement", "Hormonal balance"],
    preparation: "Root is used to make tea, soups, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports women's reproductive health", "Builds blood", "Improves circulation", "Balances hormones"],
    category: "East Asian herbs"
  },
  {
    id: "306",
    name: "He Shou Wu",
    scientificName: "Polygonum multiflorum",
    description: "A vine native to China that has been used in Traditional Chinese Medicine for thousands of years for longevity, hair health, and as a blood and liver tonic.",
    uses: ["Hair health", "Longevity", "Blood tonic", "Liver support"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes hair growth", "Supports longevity", "Builds blood", "Supports liver function"],
    category: "East Asian herbs"
  },
  {
    id: "307",
    name: "Jujube",
    scientificName: "Ziziphus jujuba",
    description: "A small deciduous tree native to China whose fruit has been used in Traditional Chinese Medicine for thousands of years as a blood tonic, digestive aid, and to calm the mind.",
    uses: ["Sleep support", "Digestive aid", "Blood tonic", "Stress reduction"],
    preparation: "Fruit is consumed fresh, dried, as tea, or in formulas. For tea, simmer a few dried fruits in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes restful sleep", "Aids digestion", "Builds blood", "Calms the mind"],
    category: "East Asian herbs"
  },
  {
    id: "308",
    name: "Schisandra",
    scientificName: "Schisandra chinensis",
    description: "A woody vine native to forests of Northern China and Russia whose berries are known as 'five flavor fruit' in Traditional Chinese Medicine because they contain all five basic flavors.",
    uses: ["Liver support", "Stress resistance", "Energy enhancement", "Longevity"],
    preparation: "Berries are used to make tea, tinctures, or capsules. For tea, simmer 1-2 teaspoons of dried berries in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Enhances stress resistance", "Increases energy and stamina", "Promotes longevity"],
    category: "East Asian herbs"
  },
  {
    id: "309",
    name: "Cat's Claw",
    scientificName: "Uncaria tomentosa",
    description: "A woody vine native to the Amazon rainforest with hook-like thorns resembling a cat's claw. It has been used by indigenous peoples of the Amazon for centuries for immune support and inflammation.",
    uses: ["Joint health", "Immune support", "Anti-inflammatory", "Digestive aid"],
    preparation: "Inner bark is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports joint health", "Strengthens immune system", "Reduces inflammation", "Aids digestion"],
    category: "Joint health"
  },
  {
    id: "310",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for immune support and to fight infections.",
    uses: ["Immune support", "Cold and flu prevention", "Wound healing", "Anti-inflammatory"],
    preparation: "Root, leaves, and flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "May prevent or shorten colds", "Promotes wound healing", "Reduces inflammation"],
    category: "Immune support"
  },
  {
    id: "311",
    name: "Medicinal Mushroom Blend",
    scientificName: "Various species",
    description: "A blend of medicinal mushrooms including Reishi, Shiitake, Maitake, Turkey Tail, and Chaga, each with unique immune-supporting properties. These mushrooms have been used in traditional medicine systems around the world for thousands of years.",
    uses: ["Immune support", "Adaptogenic", "Antioxidant", "Longevity"],
    preparation: "Mushrooms are dried and used to make tea, tinctures, or capsules. For tea, simmer a blend of dried mushrooms in water for 20-30 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens immune system", "Enhances stress resistance", "Rich in antioxidants", "Supports longevity"],
    category: "Immune support"
  },
  {
    id: "312",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    description: "A flowering plant native to Eurasia that has been used in traditional medicine around the world for centuries for liver and kidney support. Every part of the plant is medicinal, from the roots to the flowers.",
    uses: ["Liver support", "Kidney health", "Digestive aid", "Skin conditions"],
    preparation: "Roots are roasted for tea or tinctures, leaves are eaten fresh in salads or made into tea, flowers are used for wine or infused honey.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Acts as a gentle diuretic", "Aids digestion", "Rich in vitamins and minerals"],
    category: "Liver support"
  },
  {
    id: "313",
    name: "Milk Thistle",
    scientificName: "Silybum marianum",
    description: "A flowering plant native to Mediterranean regions that has been used for over 2,000 years for liver support. Its active compound, silymarin, is known for its liver-protective properties.",
    uses: ["Liver support", "Detoxification", "Antioxidant", "Digestive aid"],
    preparation: "Seeds are used to make tea, tinctures, or capsules. For tea, crush 1 teaspoon of seeds and steep in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects liver cells", "Supports detoxification", "Rich in antioxidants", "Aids digestion"],
    category: "Liver support"
  },
  {
    id: "314",
    name: "Artichoke Leaf",
    scientificName: "Cynara scolymus",
    description: "A thistle-like plant native to the Mediterranean region that has been used since ancient Roman times for liver support, digestion, and as a natural diuretic.",
    uses: ["Liver support", "Digestive aid", "Cholesterol management", "Diuretic"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Aids digestion", "May lower cholesterol", "Acts as a gentle diuretic"],
    category: "Liver support"
  },
  {
    id: "315",
    name: "Yellow Dock",
    scientificName: "Rumex crispus",
    description: "A perennial flowering plant native to Europe and Western Asia that has been used in traditional medicine for centuries for liver support, skin conditions, and as a blood purifier.",
    uses: ["Liver support", "Skin conditions", "Blood purification", "Iron absorption"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Promotes skin health", "Purifies blood", "Enhances iron absorption"],
    category: "Liver support"
  },
  {
    id: "316",
    name: "Burdock Root",
    scientificName: "Arctium lappa",
    description: "A biennial plant native to Europe and Asia that has been used in traditional medicine for centuries for liver support, skin conditions, and as a blood purifier.",
    uses: ["Liver support", "Skin conditions", "Blood purification", "Lymphatic support"],
    preparation: "Root is used to make tea, tinctures, or added to soups. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Promotes skin health", "Purifies blood", "Supports lymphatic system"],
    category: "Liver support"
  },
  {
    id: "317",
    name: "Corn Silk",
    scientificName: "Zea mays",
    description: "The silky threads from corn ears that have been used in traditional medicine around the world for centuries for urinary and kidney support due to their gentle diuretic properties.",
    uses: ["Kidney health", "Urinary tract support", "Diuretic", "Anti-inflammatory"],
    preparation: "Silk is used to make tea, tinctures, or capsules. For tea, steep 2 teaspoons of dried silk in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports kidney function", "Soothes urinary tract", "Acts as a gentle diuretic", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "318",
    name: "Goldenrod",
    scientificName: "Solidago species",
    description: "A flowering plant native to North America and Europe that has been used in traditional medicine for centuries for kidney and urinary tract support, despite its undeserved reputation as an allergen.",
    uses: ["Kidney health", "Urinary tract support", "Anti-inflammatory", "Wound healing"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports kidney function", "Soothes urinary tract", "Reduces inflammation", "Promotes wound healing"],
    category: "Kidney health"
  },
  {
    id: "319",
    name: "Uva Ursi",
    scientificName: "Arctostaphylos uva-ursi",
    description: "A small evergreen shrub native to North America and Europe that has been used in traditional medicine for centuries for urinary tract and kidney support due to its antimicrobial properties.",
    uses: ["Kidney health", "Urinary tract support", "Antimicrobial", "Anti-inflammatory"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports kidney function", "Has antimicrobial properties", "Soothes urinary tract", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "320",
    name: "Marshmallow Root",
    scientificName: "Althaea officinalis",
    description: "A perennial herb native to Europe, Western Asia, and Northern Africa that has been used since ancient Egyptian times for its soothing mucilage content, which benefits the urinary tract and kidneys.",
    uses: ["Kidney health", "Urinary tract support", "Digestive soother", "Respiratory support"],
    preparation: "Root is used to make cold infusions, teas, or capsules. For cold infusion, soak 1 tablespoon of dried root in cold water overnight.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes urinary tract", "Forms protective layer on mucous membranes", "Calms digestive tract", "Supports respiratory health"],
    category: "Kidney health"
  },
  {
    id: "321",
    name: "Nettle",
    scientificName: "Urtica dioica",
    description: "A flowering plant native to Europe, Asia, and North America that has been used in traditional medicine for centuries for its high mineral content and support for kidney function and overall health.",
    uses: ["Kidney health", "Allergy relief", "Nutritive", "Anti-inflammatory"],
    preparation: "Leaves are used to make tea, tinctures, capsules, or eaten as food. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports kidney function", "Rich in minerals", "May relieve allergies", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "322",
    name: "Noni",
    scientificName: "Morinda citrifolia",
    description: "A tree native to Southeast Asia and Australia that has spread throughout the Pacific Islands. Its fruit has been used in traditional Polynesian medicine for over 2,000 years for numerous health benefits.",
    uses: ["Immune support", "Pain relief", "Anti-inflammatory", "Digestive aid"],
    preparation: "Fruit is consumed fresh, as juice, or fermented. Leaves can be made into tea or applied topically.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Relieves pain", "Reduces inflammation", "Aids digestion"],
    category: "Polynesian herbs"
  },
  {
    id: "323",
    name: "Kava",
    scientificName: "Piper methysticum",
    description: "A shrub native to the Pacific Islands that has been used ceremonially for thousands of years. The root is known for its relaxing and socializing effects without impairing cognitive function.",
    uses: ["Anxiety relief", "Sleep support", "Social ritual", "Pain relief"],
    preparation: "Root is traditionally prepared by grinding and mixing with water, creating a beverage consumed in social settings. Modern preparations include capsules and tinctures.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes relaxation", "Enhances social connection", "May relieve pain"],
    category: "Polynesian herbs"
  },
  {
    id: "324",
    name: "Awa",
    scientificName: "Piper methysticum",
    description: "The Hawaiian name for Kava, this plant has been used in traditional Hawaiian medicine for centuries for physical and mental relaxation, as well as for ceremonial purposes.",
    uses: ["Relaxation", "Ceremony", "Pain relief", "Social ritual"],
    preparation: "Root is traditionally prepared by grinding and mixing with water in a special bowl called an 'apu'. The resulting beverage is consumed in social or ceremonial settings.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes relaxation", "Enhances social connection", "May relieve pain", "Supports cultural traditions"],
    category: "Polynesian herbs"
  },
  {
    id: "325",
    name: "Olena",
    scientificName: "Curcuma longa",
    description: "The Hawaiian name for turmeric, this rhizome has been used in traditional Hawaiian medicine for centuries for inflammation, wound healing, and digestive issues.",
    uses: ["Anti-inflammatory", "Wound healing", "Digestive aid", "Immune support"],
    preparation: "Rhizome is used fresh, dried and ground into powder, or as juice. Often applied topically for skin conditions or consumed internally.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Promotes wound healing", "Aids digestion", "Supports immune function"],
    category: "Polynesian herbs"
  },
  {
    id: "326",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used in traditional medicine since ancient Greek and Roman times for respiratory conditions, digestive issues, and as an antimicrobial.",
    uses: ["Respiratory support", "Digestive aid", "Antimicrobial", "Anti-inflammatory"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Aids digestion", "Has antimicrobial properties", "Reduces inflammation"],
    category: "Mediterranean herbs"
  },
  {
    id: "327",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "An aromatic evergreen shrub native to the Mediterranean region that has been used since ancient Greek and Roman times for memory enhancement, digestive issues, and as a culinary herb.",
    uses: ["Cognitive enhancement", "Digestive aid", "Antimicrobial", "Circulatory support"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and cognition", "Aids digestion", "Has antimicrobial properties", "Improves circulation"],
    category: "Mediterranean herbs"
  },
  {
    id: "328",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient Egyptian, Greek, and Roman times for respiratory conditions, digestive issues, and as an antimicrobial.",
    uses: ["Respiratory support", "Digestive aid", "Antimicrobial", "Antioxidant"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Aids digestion", "Has antimicrobial properties", "Rich in antioxidants"],
    category: "Mediterranean herbs"
  },
  {
    id: "329",
    name: "Sage",
    scientificName: "Salvia officinalis",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient Roman times for its cognitive-enhancing, antimicrobial, and menopausal symptom-relieving properties.",
    uses: ["Cognitive enhancement", "Menopausal symptom relief", "Antimicrobial", "Digestive aid"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and cognition", "Reduces excessive sweating", "Has antimicrobial properties", "Aids digestion"],
    category: "Mediterranean herbs"
  },
  {
    id: "330",
    name: "Bay Laurel",
    scientificName: "Laurus nobilis",
    description: "An aromatic evergreen tree native to the Mediterranean region whose leaves have been used since ancient Greek and Roman times for digestive issues, respiratory conditions, and as a culinary herb.",
    uses: ["Digestive aid", "Respiratory support", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Leaves are used fresh or dried in cooking, as tea, or as essential oil. For tea, steep 1-2 leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports respiratory health", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Mediterranean herbs"
  },
  {
    id: "331",
    name: "Olive Leaf",
    scientificName: "Olea europaea",
    description: "The leaf of the olive tree, which has been used in Mediterranean traditional medicine for centuries for immune support, cardiovascular health, and to fight infections due to its powerful antimicrobial properties.",
    uses: ["Immune support", "Cardiovascular support", "Antimicrobial", "Antioxidant"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Supports cardiovascular health", "Has antimicrobial properties", "Rich in antioxidants"],
    category: "Mediterranean herbs"
  },
  {
    id: "332",
    name: "Valerian",
    scientificName: "Valeriana officinalis",
    description: "A flowering plant native to Europe and Asia that has been used since ancient Greek and Roman times for sleep support, anxiety relief, and as a muscle relaxant.",
    uses: ["Sleep support", "Anxiety relief", "Muscle relaxation", "Stress reduction"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes sleep", "Reduces anxiety", "Relaxes muscles", "Calms nervous system"],
    category: "Sleep support"
  },
  {
    id: "333",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "A daisy-like plant that has been used since ancient Egyptian times for its calming and anti-inflammatory properties. It's one of the most popular herbs for sleep support due to its gentle nature.",
    uses: ["Sleep support", "Anxiety relief", "Digestive aid", "Skin soother"],
    preparation: "Flowers are used to make tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes sleep", "Reduces anxiety", "Soothes digestive system", "Calms nervous system"],
    category: "Sleep support"
  },
  {
    id: "334",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "An aromatic shrub native to the Mediterranean region that has been used since ancient Roman times for its calming, sleep-promoting, and antimicrobial properties.",
    uses: ["Sleep support", "Anxiety relief", "Headache relief", "Skin soother"],
    preparation: "Flowers are used to make tea, tinctures, essential oil, or sachets. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes sleep", "Reduces anxiety", "Relieves headaches", "Soothes skin"],
    category: "Sleep support"
  },
  {
    id: "335",
    name: "Passionflower",
    scientificName: "Passiflora incarnata",
    description: "A climbing vine native to the southeastern United States that has been used by Native American peoples for centuries for anxiety, insomnia, and seizures.",
    uses: ["Sleep support", "Anxiety relief", "Pain relief", "Menopausal symptom relief"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes sleep", "Reduces anxiety", "May relieve pain", "Calms nervous system"],
    category: "Sleep support"
  },
  {
    id: "336",
    name: "California Poppy",
    scientificName: "Eschscholzia californica",
    description: "A flowering plant native to the United States and Mexico that has been used by Native American peoples for centuries for sleep support, anxiety relief, and pain management.",
    uses: ["Sleep support", "Anxiety relief", "Pain relief", "Nervous system support"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes sleep", "Reduces anxiety", "Relieves pain", "Supports nervous system"],
    category: "Sleep support"
  },
  {
    id: "337",
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    description: "A flowering plant with bright yellow flowers that has been used since ancient Greek times for mood disorders, wound healing, and nerve pain. It's one of the most well-studied herbs for nerve health.",
    uses: ["Nerve health", "Mood enhancement", "Wound healing", "Anti-inflammatory"],
    preparation: "Flowering tops are used to make tea, tinctures, oils, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports nerve function", "Improves mood", "Promotes wound healing", "Reduces inflammation"],
    category: "Nerve health"
  },
  {
    id: "338",
    name: "Skullcap",
    scientificName: "Scutellaria lateriflora",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for nerve support, anxiety relief, and as a mild sedative.",
    uses: ["Nerve health", "Anxiety relief", "Sleep support", "Muscle tension relief"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports nerve function", "Reduces anxiety", "Promotes sleep", "Relieves muscle tension"],
    category: "Nerve health"
  },
  {
    id: "339",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "A unique-looking mushroom with cascading white tendrils that has been used in Traditional Chinese Medicine for centuries for cognitive health and nervous system support.",
    uses: ["Nerve health", "Cognitive enhancement", "Digestive support", "Immune enhancement"],
    preparation: "Mushroom can be consumed as food, tea, or in capsule or tincture form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["May stimulate nerve growth", "Supports brain function", "Improves digestion", "Enhances immune function"],
    category: "Nerve health"
  },
  {
    id: "340",
    name: "Oatstraw",
    scientificName: "Avena sativa",
    description: "The green tops of the common oat plant that have been used in traditional medicine for centuries for nerve support, anxiety relief, and as a general tonic for the nervous system.",
    uses: ["Nerve health", "Anxiety relief", "Stress reduction", "Nutritive"],
    preparation: "Green tops are used to make tea, tinctures, or capsules. For tea, steep 1-2 tablespoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports nerve function", "Reduces anxiety", "Rich in minerals", "Nourishes nervous system"],
    category: "Nerve health"
  },
  {
    id: "341",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "A small shrub native to India, the Middle East, and parts of Africa that has been used in Ayurvedic medicine for over 3,000 years as an adaptogen to enhance energy, reduce stress, and support overall health.",
    uses: ["Stress reduction", "Energy enhancement", "Sleep support", "Immune support"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress", "Increases energy", "Promotes sleep", "Supports immune function"],
    category: "Indian herbs"
  },
  {
    id: "342",
    name: "Tulsi",
    scientificName: "Ocimum sanctum",
    description: "Also known as Holy Basil, this aromatic plant is native to India and has been used in Ayurvedic medicine for over 3,000 years as an adaptogen, for respiratory conditions, and as a sacred religious plant.",
    uses: ["Stress reduction", "Respiratory support", "Immune enhancement", "Digestive aid"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces stress", "Supports respiratory health", "Enhances immune function", "Aids digestion"],
    category: "Indian herbs"
  },
  {
    id: "343",
    name: "Shatavari",
    scientificName: "Asparagus racemosus",
    description: "A species of asparagus native to India, Nepal, and Sri Lanka that has been used in Ayurvedic medicine for thousands of years, particularly for women's health and as a rejuvenative tonic.",
    uses: ["Women's health", "Digestive aid", "Immune support", "Adaptogenic"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports women's reproductive health", "Aids digestion", "Enhances immune function", "Balances hormones"],
    category: "Indian herbs"
  },
  {
    id: "344",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    description: "A creeping herb native to wetlands of India that has been used in Ayurvedic medicine for thousands of years as a brain tonic to enhance memory, learning, and concentration.",
    uses: ["Cognitive enhancement", "Memory support", "Anxiety relief", "Adaptogenic"],
    preparation: "Whole plant is used to make tea, tinctures, or capsules. Often taken with ghee in traditional preparations.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances memory and learning", "Reduces anxiety", "Supports brain function", "Has adaptogenic properties"],
    category: "Indian herbs"
  },
  {
    id: "345",
    name: "Triphala",
    scientificName: "Combination of three fruits",
    description: "A traditional Ayurvedic formula consisting of three fruits: Amalaki, Bibhitaki, and Haritaki. It has been used in Ayurvedic medicine for thousands of years, particularly for digestive health and gentle detoxification.",
    uses: ["Digestive aid", "Detoxification", "Eye health", "Immune support"],
    preparation: "Fruits are dried, powdered, and combined in equal parts. Can be taken as tea, tablets, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports digestive health", "Gentle detoxification", "Nourishes tissues", "Rich in antioxidants"],
    category: "Indian herbs"
  },
  {
    id: "346",
    name: "Gokshura",
    scientificName: "Tribulus terrestris",
    description: "A flowering plant native to warm temperate and tropical regions that has been used in Ayurvedic medicine for thousands of years, particularly for urinary health, vitality, and as a rejuvenative tonic.",
    uses: ["Urinary health", "Male vitality", "Cardiovascular support", "Joint health"],
    preparation: "Fruit and root are used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried herb in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary health", "Enhances vitality", "Supports cardiovascular function", "Supports joint health"],
    category: "Indian herbs"
  },
  {
    id: "347",
    name: "Rhodiola",
    scientificName: "Rhodiola rosea",
    description: "A flowering plant that grows in cold, mountainous regions of Europe and Asia, including the Himalayas. It has been used in Tibetan medicine for centuries as an adaptogen to enhance physical and mental performance.",
    uses: ["Energy enhancement", "Stress resistance", "Altitude sickness", "Cognitive enhancement"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Enhances stress resistance", "Helps with altitude adjustment", "Improves mental performance"],
    category: "Tibetan herbs"
  },
  {
    id: "348",
    name: "Cordyceps",
    scientificName: "Ophiocordyceps sinensis",
    description: "A rare fungus that grows on caterpillar larvae in the high mountain regions of Tibet and China. It has been used in Tibetan and Chinese medicine for centuries to enhance energy, endurance, and lung capacity.",
    uses: ["Energy enhancement", "Respiratory support", "Immune support", "Sexual vitality"],
    preparation: "Fungus is used to make tea, tinctures, or capsules. Modern preparations often use cultivated varieties.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy and stamina", "Supports lung function", "Enhances immune function", "Supports sexual health"],
    category: "Tibetan herbs"
  },
  {
    id: "349",
    name: "Tibetan Gentian",
    scientificName: "Gentiana tibetica",
    description: "A flowering plant native to the Tibetan plateau that has been used in Tibetan medicine for centuries for digestive issues, liver support, and to reduce inflammation.",
    uses: ["Digestive aid", "Liver support", "Anti-inflammatory", "Fever reduction"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried root in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports liver function", "Reduces inflammation", "May lower fever"],
    category: "Tibetan herbs"
  },
  {
    id: "350",
    name: "Tibetan Sea Buckthorn",
    scientificName: "Hippophae rhamnoides",
    description: "A deciduous shrub native to the Tibetan plateau and Himalayan regions whose bright orange berries have been used in Tibetan medicine for centuries for numerous health benefits.",
    uses: ["Skin health", "Digestive aid", "Cardiovascular support", "Immune enhancement"],
    preparation: "Berries are consumed fresh, as juice, oil, or in capsules. Oil can be applied topically for skin conditions.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in omega fatty acids", "Supports skin health", "Aids digestion", "Supports cardiovascular health"],
    category: "Tibetan herbs"
  },
  {
    id: "351",
    name: "Padma 28",
    scientificName: "Herbal formula",
    description: "A complex herbal formula from Tibetan medicine containing 20+ ingredients, including Iceland moss, cardamom, and neem fruit. It has been used in Tibetan medicine for centuries and has been the subject of numerous scientific studies.",
    uses: ["Immune support", "Circulation improvement", "Anti-inflammatory", "Antioxidant"],
    preparation: "Formula is traditionally prepared as a powder and taken with warm water, now available as tablets or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Improves circulation", "Reduces inflammation", "Rich in antioxidants"],
    category: "Tibetan herbs"
  },
  {
    id: "352",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "A flowering plant in the daisy family that has been used for centuries for its skin-healing and anti-inflammatory properties. It's one of the most versatile herbs for skin conditions.",
    uses: ["Skin healing", "Wound care", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Flowers are used to make oils, salves, creams, or tinctures for topical application. Can also be used as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes wound healing", "Soothes skin inflammation", "Has antimicrobial properties", "Supports tissue regeneration"],
    category: "Skin health"
  },
  {
    id: "353",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description: "A succulent plant species that has been used for thousands of years across many cultures for its skin-healing and soothing properties. Ancient Egyptians called it the 'plant of immortality.'",
    uses: ["Skin healing", "Burn treatment", "Moisturizing", "Digestive support"],
    preparation: "Gel from inside the leaves is applied topically for skin conditions or consumed for internal benefits.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes burns and skin irritations", "Promotes wound healing", "Moisturizes skin", "Has anti-inflammatory properties"],
    category: "Skin health"
  },
  {
    id: "354",
    name: "Comfrey",
    scientificName: "Symphytum officinale",
    description: "A perennial herb native to Europe that has been used for centuries for its wound-healing properties due to its high content of allantoin, which promotes cell proliferation.",
    uses: ["Skin healing", "Wound care", "Bone and tissue repair", "Anti-inflammatory"],
    preparation: "Leaves and roots are used to make oils, salves, or poultices for external use only. Not recommended for internal use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Accelerates wound healing", "Supports bone and tissue repair", "Reduces inflammation", "Contains allantoin for cell regeneration"],
    category: "Skin health"
  },
  {
    id: "355",
    name: "Plantain",
    scientificName: "Plantago major",
    description: "A common 'weed' found worldwide that has been used by numerous cultures for centuries for wound healing, skin conditions, and digestive issues. Not related to the banana-like fruit of the same name.",
    uses: ["Skin healing", "Wound care", "Insect bite relief", "Digestive aid"],
    preparation: "Leaves are used fresh as poultice, or dried for tea, tinctures, or salves. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Draws out toxins", "Promotes wound healing", "Relieves insect bites and stings", "Soothes digestive tract"],
    category: "Skin health"
  },
  {
    id: "356",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    description: "A flowering plant whose rhizome is widely used as a spice and in traditional medicine. It has been used for thousands of years in various cultures for its digestive, anti-inflammatory, and warming properties.",
    uses: ["Digestive aid", "Nausea relief", "Anti-inflammatory", "Circulation improvement"],
    preparation: "Rhizome is used fresh, dried, as tea, or in capsules. For tea, steep slices of fresh ginger in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Relieves nausea", "Reduces inflammation", "Warms the body"],
    category: "Digestive support"
  },
  {
    id: "357",
    name: "Peppermint",
    scientificName: "Mentha × piperita",
    description: "A hybrid mint plant that has been used for thousands of years for its digestive, respiratory, and pain-relieving properties. It's one of the most widely used digestive herbs worldwide.",
    uses: ["Digestive aid", "IBS relief", "Headache relief", "Respiratory support"],
    preparation: "Leaves are used fresh or dried for tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves digestive discomfort", "Reduces IBS symptoms", "Relieves headaches", "Opens respiratory passages"],
    category: "Digestive support"
  },
  {
    id: "358",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient times for digestive issues, particularly for gas, bloating, and colic in infants.",
    uses: ["Digestive aid", "Gas relief", "Colic relief", "Breath freshener"],
    preparation: "Seeds are used to make tea, tinctures, or added to food. For tea, steep 1 teaspoon of crushed seeds in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves gas and bloating", "Soothes digestive tract", "Reduces colic in infants", "Freshens breath"],
    category: "Digestive support"
  },
  {
    id: "359",
    name: "Slippery Elm",
    scientificName: "Ulmus rubra",
    description: "A tree native to North America whose inner bark has been used by Native American peoples for centuries for its soothing, mucilaginous properties for digestive, respiratory, and urinary conditions.",
    uses: ["Digestive soother", "Cough relief", "Urinary tract support", "Wound healing"],
    preparation: "Inner bark is powdered and used to make tea, lozenges, poultices, or gruel. For tea, mix 1 teaspoon of powder in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestive tract", "Forms protective layer on mucous membranes", "Relieves cough", "Promotes wound healing"],
    category: "Digestive support"
  },
  {
    id: "360",
    name: "Marshmallow Root",
    scientificName: "Althaea officinalis",
    description: "A perennial herb native to Europe, Western Asia, and Northern Africa that has been used since ancient Egyptian times for its soothing mucilage content, which benefits the digestive tract.",
    uses: ["Digestive soother", "Respiratory support", "Urinary tract support", "Skin soother"],
    preparation: "Root is used to make cold infusions, teas, or capsules. For cold infusion, soak 1 tablespoon of dried root in cold water overnight.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes digestive tract", "Forms protective layer on mucous membranes", "Relieves dry cough", "Calms urinary tract"],
    category: "Digestive support"
  },
  {
    id: "361",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for immune support, wound healing, and to fight infections.",
    uses: ["Immune support", "Wound healing", "Cold and flu prevention", "Anti-inflammatory"],
    preparation: "Root, leaves, and flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports immune function", "Promotes wound healing", "May prevent or shorten colds", "Reduces inflammation"],
    category: "Native American herbs"
  },
  {
    id: "362",
    name: "Black Cohosh",
    scientificName: "Actaea racemosa",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for women's health, particularly for menopause and menstrual issues.",
    uses: ["Women's health", "Menopausal symptom relief", "Menstrual support", "Anti-inflammatory"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces menopausal symptoms", "Supports menstrual health", "Reduces inflammation", "May relieve pain"],
    category: "Native American herbs"
  },
  {
    id: "363",
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    description: "A flowering plant native to temperate regions of the Northern Hemisphere that has been used by Native American peoples for centuries for wound healing, fever reduction, and digestive issues.",
    uses: ["Wound healing", "Fever reduction", "Digestive aid", "Menstrual support"],
    preparation: "Aerial parts are used to make tea, tinctures, or poultices. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stops bleeding", "Reduces fever", "Aids digestion", "Supports menstrual health"],
    category: "Native American herbs"
  },
  {
    id: "364",
    name: "Osha Root",
    scientificName: "Ligusticum porteri",
    description: "A perennial herb native to the Rocky Mountains that has been used by Native American peoples for centuries for respiratory conditions, immune support, and digestive issues.",
    uses: ["Respiratory support", "Immune enhancement", "Digestive aid", "Altitude sickness"],
    preparation: "Root is used to make tea, tinctures, or chewed directly. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Enhances immune function", "Aids digestion", "Helps with altitude adjustment"],
    category: "Native American herbs"
  },
  {
    id: "365",
    name: "White Sage",
    scientificName: "Salvia apiana",
    description: "An evergreen perennial shrub native to the southwestern United States and northwestern Mexico that has been used by Native American peoples for centuries for purification, respiratory conditions, and in spiritual ceremonies.",
    uses: ["Spiritual cleansing", "Respiratory support", "Antimicrobial", "Digestive aid"],
    preparation: "Leaves are used to make tea, tinctures, or burned as smudge sticks. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports spiritual practices", "Supports respiratory health", "Has antimicrobial properties", "Aids digestion"],
    category: "Native American herbs"
  },
  {
    id: "366",
    name: "Moringa",
    scientificName: "Moringa oleifera",
    description: "A fast-growing tree native to India but now cultivated across Africa. It has been used in traditional African medicine for centuries for its exceptional nutritional content and numerous health benefits.",
    uses: ["Nutritional supplement", "Energy enhancement", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Leaves, seeds, and pods are used in cooking, as tea, or in powder or capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Extremely nutrient-dense", "Increases energy", "Reduces inflammation", "Has antimicrobial properties"],
    category: "African herbs"
  },
  {
    id: "367",
    name: "Baobab",
    scientificName: "Adansonia digitata",
    description: "Known as the 'tree of life' in Africa, this iconic tree produces fruit with exceptionally high vitamin C content. It has been used in traditional African medicine for centuries for numerous health benefits.",
    uses: ["Immune support", "Digestive aid", "Energy enhancement", "Skin health"],
    preparation: "Fruit pulp is dried and powdered, which can be added to foods or beverages, or made into a paste for topical application.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in vitamin C", "Supports immune function", "Aids digestion", "Provides sustained energy"],
    category: "African herbs"
  },
  {
    id: "368",
    name: "Kola Nut",
    scientificName: "Cola acuminata",
    description: "A caffeine-containing nut native to tropical Africa that has been used in traditional African medicine for centuries for energy, digestive issues, and as a ceremonial offering.",
    uses: ["Energy enhancement", "Digestive aid", "Respiratory support", "Ceremonial"],
    preparation: "Nuts are chewed fresh or dried, or used to make tea, tinctures, or extracts.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy", "Aids digestion", "Supports respiratory health", "Contains caffeine and theobromine"],
    category: "African herbs"
  },
  {
    id: "369",
    name: "Bitter Melon",
    scientificName: "Momordica charantia",
    description: "A tropical vine native to Africa and Asia that has been used in traditional African medicine for centuries for blood sugar regulation, digestive issues, and skin conditions.",
    uses: ["Blood sugar support", "Digestive aid", "Skin conditions", "Immune support"],
    preparation: "Fruit is consumed fresh, dried, as juice, or in capsule form. Leaves can be made into tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Aids digestion", "Promotes skin health", "Enhances immune function"],
    category: "African herbs"
  },
  {
    id: "370",
    name: "Devil's Claw",
    scientificName: "Harpagophytum procumbens",
    description: "A plant native to southern Africa whose root has been used by indigenous peoples for centuries for pain relief, particularly for arthritis and digestive issues.",
    uses: ["Pain relief", "Anti-inflammatory", "Digestive aid", "Fever reduction"],
    preparation: "Root is dried and used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves pain", "Reduces inflammation", "Supports digestive health", "May lower fever"],
    category: "African herbs"
  },
  {
    id: "371",
    name: "Rooibos",
    scientificName: "Aspalathus linearis",
    description: "A broom-like member of the legume family native to South Africa. It has been used by indigenous peoples for centuries and is now popular worldwide as a caffeine-free tea with high antioxidant content.",
    uses: ["Antioxidant", "Sleep support", "Digestive aid", "Skin health"],
    preparation: "Leaves are fermented and dried to make tea. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Rich in antioxidants", "Caffeine-free", "Supports digestive health", "May benefit skin conditions"],
    category: "African herbs"
  },
  {
    id: "372",
    name: "Milk Thistle",
    scientificName: "Silybum marianum",
    description: "A flowering herb native to Mediterranean regions that has been used for over 2,000 years for its powerful liver-protective and regenerative properties. The active compound silymarin is concentrated in the seeds.",
    uses: ["Liver protection", "Liver detoxification", "Antioxidant", "Digestive support"],
    preparation: "Seeds are used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of crushed seeds in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects liver cells", "Supports liver regeneration", "Aids detoxification", "Rich in antioxidants"],
    category: "Liver support"
  },
  {
    id: "373",
    name: "Dandelion Root",
    scientificName: "Taraxacum officinale",
    description: "A common flowering plant found worldwide that has been used in traditional medicine for centuries for its liver-supporting, diuretic, and digestive properties.",
    uses: ["Liver support", "Diuretic", "Digestive aid", "Skin conditions"],
    preparation: "Root is dried and roasted to make tea or tinctures. For tea, simmer 1-2 teaspoons of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Promotes bile flow", "Gentle diuretic", "Aids digestion"],
    category: "Liver support"
  },
  {
    id: "374",
    name: "Artichoke Leaf",
    scientificName: "Cynara scolymus",
    description: "A thistle-like plant native to the Mediterranean region that has been used since ancient Egyptian and Roman times for its liver-protective, digestive, and cholesterol-lowering properties.",
    uses: ["Liver support", "Digestive aid", "Cholesterol management", "Antioxidant"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Increases bile flow", "Aids digestion", "May lower cholesterol"],
    category: "Liver support"
  },
  {
    id: "375",
    name: "Schisandra",
    scientificName: "Schisandra chinensis",
    description: "A woody vine native to Northern China and Russia that has been used in traditional Chinese medicine for centuries for its liver-protective, adaptogenic, and longevity-promoting properties.",
    uses: ["Liver support", "Adaptogen", "Antioxidant", "Longevity"],
    preparation: "Berries are used to make tea, tinctures, or capsules. For tea, simmer 1-2 teaspoons of dried berries in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Protects liver cells", "Supports detoxification", "Increases stress resistance", "Contains all five flavors"],
    category: "Liver support"
  },
  {
    id: "376",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    description: "A flowering plant in the ginger family native to Southeast Asia that has been used in Ayurvedic and traditional Chinese medicine for thousands of years for its powerful anti-inflammatory and liver-protective properties.",
    uses: ["Liver support", "Anti-inflammatory", "Antioxidant", "Digestive aid"],
    preparation: "Rhizome is used fresh, dried, as tea, or in capsules. For tea, simmer 1 teaspoon of powder in water with black pepper for better absorption.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports liver function", "Reduces inflammation", "Rich in antioxidants", "Aids digestion"],
    category: "Liver support"
  },
  {
    id: "377",
    name: "Cranberry",
    scientificName: "Vaccinium macrocarpon",
    description: "A low-growing shrub native to North America that has been used by Native American peoples for centuries for urinary tract health, particularly for preventing and treating urinary tract infections.",
    uses: ["Urinary tract support", "Kidney health", "Antioxidant", "Anti-inflammatory"],
    preparation: "Berries are consumed fresh, as juice, or in capsules. For juice, use unsweetened cranberry juice diluted with water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Prevents UTI adhesion", "Supports urinary health", "Rich in antioxidants", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "378",
    name: "Corn Silk",
    scientificName: "Zea mays",
    description: "The silky, thread-like styles from the female flower of maize that have been used in traditional medicine across many cultures for urinary tract health, particularly for their diuretic and soothing properties.",
    uses: ["Urinary tract support", "Kidney health", "Diuretic", "Anti-inflammatory"],
    preparation: "Silks are dried and used to make tea or tinctures. For tea, steep 2 teaspoons of dried silk in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Gentle diuretic", "Soothes urinary tract", "Supports kidney function", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "379",
    name: "Uva Ursi",
    scientificName: "Arctostaphylos uva-ursi",
    description: "A small evergreen shrub native to North America and Europe that has been used by indigenous peoples for centuries for urinary tract health, particularly for its antimicrobial and diuretic properties.",
    uses: ["Urinary tract support", "Kidney health", "Antimicrobial", "Diuretic"],
    preparation: "Leaves are used to make tea or tinctures. For tea, steep 1-2 teaspoons of dried leaves in hot water. Not for long-term use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Antimicrobial for UTIs", "Supports urinary health", "Gentle diuretic", "Contains arbutin"],
    category: "Kidney health"
  },
  {
    id: "380",
    name: "Nettle Leaf",
    scientificName: "Urtica dioica",
    description: "A flowering plant found worldwide that has been used in traditional medicine for centuries for its diuretic, anti-inflammatory, and nutritive properties, particularly beneficial for kidney and urinary tract health.",
    uses: ["Kidney health", "Urinary tract support", "Nutritive", "Anti-inflammatory"],
    preparation: "Leaves are used to make tea, tinctures, or consumed as food. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Gentle diuretic", "Mineral-rich", "Supports kidney function", "Reduces inflammation"],
    category: "Kidney health"
  },
  {
    id: "381",
    name: "Goldenrod",
    scientificName: "Solidago spp.",
    description: "A flowering plant native to North America and Europe that has been used in traditional medicine for centuries for its diuretic, anti-inflammatory, and antimicrobial properties, particularly beneficial for kidney and urinary tract health.",
    uses: ["Kidney health", "Urinary tract support", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Aerial parts are used to make tea or tinctures. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Gentle diuretic", "Soothes urinary tract", "Reduces inflammation", "Has antimicrobial properties"],
    category: "Kidney health"
  },
  {
    id: "382",
    name: "Cat's Claw",
    scientificName: "Uncaria tomentosa",
    description: "A woody vine native to the Amazon rainforest that has been used by indigenous peoples of South America for centuries for its immune-enhancing, anti-inflammatory, and antioxidant properties.",
    uses: ["Immune support", "Anti-inflammatory", "Antioxidant", "Digestive aid"],
    preparation: "Inner bark is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Reduces inflammation", "Rich in antioxidants", "Supports digestive health"],
    category: "South American herbs"
  },
  {
    id: "383",
    name: "Maca",
    scientificName: "Lepidium meyenii",
    description: "A root vegetable native to the high Andes of Peru that has been used by indigenous peoples for thousands of years for its energy-enhancing, hormone-balancing, and nutritive properties.",
    uses: ["Energy enhancement", "Hormone balance", "Nutritive", "Adaptogen"],
    preparation: "Root is dried and powdered, which can be added to foods or beverages, or taken in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy", "Supports hormone balance", "Nutrient-dense", "Enhances stamina"],
    category: "South American herbs"
  },
  {
    id: "384",
    name: "Pau d'Arco",
    scientificName: "Tabebuia impetiginosa",
    description: "A canopy tree native to the Amazon rainforest whose inner bark has been used by indigenous peoples of South America for centuries for its antimicrobial, anti-inflammatory, and immune-enhancing properties.",
    uses: ["Immune support", "Antimicrobial", "Anti-inflammatory", "Antioxidant"],
    preparation: "Inner bark is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried bark in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Enhances immune function", "Reduces inflammation", "Rich in antioxidants"],
    category: "South American herbs"
  },
  {
    id: "385",
    name: "Yerba Mate",
    scientificName: "Ilex paraguariensis",
    description: "A species of holly native to South America whose leaves have been consumed as a beverage by indigenous peoples for centuries for its energizing, nutritive, and digestive properties.",
    uses: ["Energy enhancement", "Nutritive", "Digestive aid", "Mental clarity"],
    preparation: "Leaves are dried and used to make tea. Traditionally prepared in a gourd with a metal straw called a bombilla.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy", "Rich in nutrients", "Aids digestion", "Enhances mental focus"],
    category: "South American herbs"
  },
  {
    id: "386",
    name: "Suma",
    scientificName: "Pfaffia paniculata",
    description: "A root native to the Amazon rainforest that has been used by indigenous peoples of South America for centuries for its adaptogenic, energy-enhancing, and hormone-balancing properties. Often called 'Brazilian ginseng.'",
    uses: ["Adaptogen", "Energy enhancement", "Hormone balance", "Immune support"],
    preparation: "Root is dried and used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Enhances energy", "Supports hormone balance", "Enhances immune function"],
    category: "South American herbs"
  },
  {
    id: "387",
    name: "Black Seed",
    scientificName: "Nigella sativa",
    description: "A flowering plant native to South and Southwest Asia that has been used in traditional Middle Eastern medicine for over 2,000 years for its immune-enhancing, anti-inflammatory, and respiratory properties.",
    uses: ["Immune support", "Respiratory support", "Anti-inflammatory", "Digestive aid"],
    preparation: "Seeds are used whole, ground, or as oil. Can be added to food, made into tea, or taken in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Supports respiratory health", "Reduces inflammation", "Aids digestion"],
    category: "Middle Eastern herbs"
  },
  {
    id: "388",
    name: "Za'atar",
    scientificName: "Origanum syriacum",
    description: "A culinary herb native to the Middle East that has been used in traditional medicine for centuries for its respiratory, digestive, and antimicrobial properties. Often mixed with sumac, sesame seeds, and salt as a spice blend.",
    uses: ["Respiratory support", "Digestive aid", "Antimicrobial", "Antioxidant"],
    preparation: "Leaves are used fresh or dried, added to food, or made into tea. For tea, steep 1 teaspoon of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Aids digestion", "Has antimicrobial properties", "Rich in antioxidants"],
    category: "Middle Eastern herbs"
  },
  {
    id: "389",
    name: "Myrrh",
    scientificName: "Commiphora myrrha",
    description: "A resin from a small, thorny tree native to the Arabian Peninsula and Northeast Africa that has been used in traditional Middle Eastern medicine for thousands of years for its antimicrobial, anti-inflammatory, and wound-healing properties.",
    uses: ["Wound healing", "Antimicrobial", "Anti-inflammatory", "Oral health"],
    preparation: "Resin is used to make tinctures, mouthwashes, or applied topically. For mouthwash, dilute tincture in water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes wound healing", "Has antimicrobial properties", "Reduces inflammation", "Supports oral health"],
    category: "Middle Eastern herbs"
  },
  {
    id: "390",
    name: "Frankincense",
    scientificName: "Boswellia sacra",
    description: "A resin from a tree native to the Arabian Peninsula and Northeast Africa that has been used in traditional Middle Eastern medicine for thousands of years for its anti-inflammatory, immune-enhancing, and respiratory properties.",
    uses: ["Anti-inflammatory", "Immune support", "Respiratory support", "Spiritual"],
    preparation: "Resin is used to make tinctures, burned as incense, or applied topically in oil form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Enhances immune function", "Supports respiratory health", "Supports spiritual practices"],
    category: "Middle Eastern herbs"
  },
  {
    id: "391",
    name: "Saffron",
    scientificName: "Crocus sativus",
    description: "A flowering plant native to Southwest Asia whose stigmas have been used in traditional Middle Eastern medicine for thousands of years for its mood-enhancing, antioxidant, and digestive properties.",
    uses: ["Mood enhancement", "Antioxidant", "Digestive aid", "Women's health"],
    preparation: "Stigmas are used to make tea, added to food, or taken in capsule form. For tea, steep a few threads in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Rich in antioxidants", "Aids digestion", "Supports menstrual health"],
    category: "Middle Eastern herbs"
  },
  {
    id: "392",
    name: "Hawthorn",
    scientificName: "Crataegus spp.",
    description: "A flowering shrub or small tree native to temperate regions of the Northern Hemisphere that has been used in traditional European medicine for centuries for its cardiovascular benefits, particularly for heart function and circulation.",
    uses: ["Heart health", "Circulation support", "Blood pressure regulation", "Antioxidant"],
    preparation: "Berries, leaves, and flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart function", "Improves circulation", "Helps regulate blood pressure", "Rich in antioxidants"],
    category: "Cardiovascular herbs"
  },
  {
    id: "393",
    name: "Garlic",
    scientificName: "Allium sativum",
    description: "A bulbous plant related to onions that has been used in traditional medicine across many cultures for thousands of years for its cardiovascular, antimicrobial, and immune-enhancing properties.",
    uses: ["Heart health", "Immune support", "Antimicrobial", "Blood pressure regulation"],
    preparation: "Bulbs are consumed fresh, dried, as powder, or in capsule form. For medicinal use, consume 1-2 cloves daily.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart health", "Enhances immune function", "Has antimicrobial properties", "Helps regulate blood pressure"],
    category: "Cardiovascular herbs"
  },
  {
    id: "394",
    name: "Motherwort",
    scientificName: "Leonurus cardiaca",
    description: "A flowering plant in the mint family native to Europe and Asia that has been used in traditional medicine for centuries for its cardiovascular, nervous system, and women's health benefits.",
    uses: ["Heart health", "Nervous system support", "Women's health", "Antioxidant"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried herb in hot water. Has a bitter taste.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart function", "Calms nervous system", "Supports menstrual health", "Has antioxidant properties"],
    category: "Cardiovascular herbs"
  },
  {
    id: "395",
    name: "Ginkgo",
    scientificName: "Ginkgo biloba",
    description: "One of the oldest living tree species on Earth, native to China, that has been used in traditional Chinese medicine for thousands of years for its circulation-enhancing, cognitive, and antioxidant properties.",
    uses: ["Circulation support", "Cognitive enhancement", "Antioxidant", "Eye health"],
    preparation: "Leaves are used to make standardized extracts, tinctures, or capsules. Not typically used as tea due to need for standardization.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves circulation", "Enhances cognitive function", "Rich in antioxidants", "Supports eye health"],
    category: "Cardiovascular herbs"
  },
  {
    id: "396",
    name: "Bilberry",
    scientificName: "Vaccinium myrtillus",
    description: "A small shrub native to Europe whose berries have been used in traditional medicine for centuries for their circulation-enhancing, eye health, and antioxidant properties.",
    uses: ["Eye health", "Circulation support", "Antioxidant", "Blood vessel strength"],
    preparation: "Berries are consumed fresh, dried, as juice, or in extract form. For tea, steep 1-2 teaspoons of dried berries in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "Improves circulation", "Rich in antioxidants", "Strengthens blood vessels"],
    category: "Eye health herbs"
  },
  {
    id: "397",
    name: "Eyebright",
    scientificName: "Euphrasia officinalis",
    description: "A small annual plant native to Europe that has been used in traditional medicine since the Middle Ages for its eye health benefits, particularly for conjunctivitis, eye strain, and eye inflammation.",
    uses: ["Eye health", "Anti-inflammatory", "Astringent", "Antimicrobial"],
    preparation: "Aerial parts are used to make tea, tinctures, or eyewashes. For eyewash, use cooled tea that has been carefully strained through a coffee filter.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes eye irritation", "Reduces eye inflammation", "Has astringent properties", "Has antimicrobial properties"],
    category: "Eye health herbs"
  },
  {
    id: "398",
    name: "Goji Berry",
    scientificName: "Lycium barbarum",
    description: "A bright orange-red berry from a shrub native to China that has been used in traditional Chinese medicine for thousands of years for its eye health, immune-enhancing, and longevity-promoting properties.",
    uses: ["Eye health", "Immune support", "Antioxidant", "Longevity"],
    preparation: "Berries are consumed dried, in juice, or in extract form. Can be added to foods or steeped as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports eye health", "Enhances immune function", "Rich in antioxidants", "Promotes longevity"],
    category: "Eye health herbs"
  },
  {
    id: "399",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used since ancient times for eye health, digestive issues, and respiratory conditions. The seeds and essential oil are particularly beneficial for eye health.",
    uses: ["Eye health", "Digestive aid", "Respiratory support", "Lactation support"],
    preparation: "Seeds are used to make tea, eyewashes, or compresses. For eyewash, use cooled tea that has been carefully strained.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes eye irritation", "Reduces eye inflammation", "Aids digestion", "Supports respiratory health"],
    category: "Eye health herbs"
  },
  {
    id: "400",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "An aromatic evergreen shrub native to the Mediterranean region that has been used in traditional medicine for centuries for its hair health, cognitive, circulatory, and digestive benefits.",
    uses: ["Hair health", "Cognitive enhancement", "Circulation support", "Digestive aid"],
    preparation: "Leaves are used to make tea, hair rinses, or infused oils. For hair rinse, steep 2-3 tablespoons of dried herb in hot water, cool, and strain.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Stimulates hair growth", "Enhances cognitive function", "Improves circulation", "Aids digestion"],
    category: "Hair health herbs"
  },
  {
    id: "401",
    name: "Nettle",
    scientificName: "Urtica dioica",
    description: "A flowering plant found worldwide that has been used in traditional medicine for centuries for its hair health, nutritive, diuretic, and anti-inflammatory properties.",
    uses: ["Hair health", "Nutritive", "Diuretic", "Anti-inflammatory"],
    preparation: "Leaves are used to make tea, hair rinses, or consumed as food. For hair rinse, steep 2-3 tablespoons of dried herb in hot water, cool, and strain.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens hair", "Mineral-rich", "Gentle diuretic", "Reduces inflammation"],
    category: "Hair health herbs"
  },
  {
    id: "402",
    name: "Horsetail",
    scientificName: "Equisetum arvense",
    description: "A primitive vascular plant that has been used in traditional medicine for centuries for its hair, skin, and nail health benefits due to its high silica content.",
    uses: ["Hair health", "Nail health", "Skin health", "Diuretic"],
    preparation: "Aerial parts are used to make tea, hair rinses, or capsules. For hair rinse, steep 2-3 tablespoons of dried herb in hot water, cool, and strain.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens hair and nails", "Rich in silica", "Supports skin health", "Gentle diuretic"],
    category: "Hair health herbs"
  },
  {
    id: "403",
    name: "Sage",
    scientificName: "Salvia officinalis",
    description: "An aromatic herb native to the Mediterranean region that has been used in traditional medicine for centuries for its hair health, antimicrobial, cognitive, and digestive benefits.",
    uses: ["Hair health", "Antimicrobial", "Cognitive enhancement", "Digestive aid"],
    preparation: "Leaves are used to make tea, hair rinses, or infused oils. For hair rinse, steep 2-3 tablespoons of dried herb in hot water, cool, and strain.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Darkens gray hair", "Has antimicrobial properties", "Enhances cognitive function", "Aids digestion"],
    category: "Hair health herbs"
  },
  {
    id: "404",
    name: "Noni",
    scientificName: "Morinda citrifolia",
    description: "A small evergreen tree native to Southeast Asia and Australasia that has been used in traditional Polynesian medicine for over 2,000 years for its immune-enhancing, anti-inflammatory, and digestive properties.",
    uses: ["Immune support", "Anti-inflammatory", "Digestive aid", "Skin health"],
    preparation: "Fruit is consumed fresh, as juice, or in extract form. Has a strong, unpleasant smell and taste.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Reduces inflammation", "Aids digestion", "Supports skin health"],
    category: "Polynesian herbs"
  },
  {
    id: "405",
    name: "Kava",
    scientificName: "Piper methysticum",
    description: "A small shrub native to the South Pacific islands that has been used in traditional Polynesian medicine for centuries for its calming, anxiolytic, and muscle-relaxing properties.",
    uses: ["Anxiety relief", "Sleep support", "Muscle relaxation", "Ceremonial"],
    preparation: "Root is traditionally prepared by grinding and mixing with water, or can be used as tincture or capsules. Use with caution due to potential liver concerns.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes sleep", "Relaxes muscles", "Supports ceremonial practices"],
    category: "Polynesian herbs"
  },
  {
    id: "406",
    name: "Tamanu",
    scientificName: "Calophyllum inophyllum",
    description: "A tropical tree native to Southeast Asia and the Pacific Islands that has been used in traditional Polynesian medicine for centuries for its skin-healing, anti-inflammatory, and antimicrobial properties.",
    uses: ["Skin healing", "Wound care", "Anti-inflammatory", "Antimicrobial"],
    preparation: "Oil from the nuts is applied topically for skin conditions or wounds.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes wound healing", "Reduces inflammation", "Has antimicrobial properties", "Supports skin regeneration"],
    category: "Polynesian herbs"
  },
  {
    id: "407",
    name: "Kukui",
    scientificName: "Aleurites moluccanus",
    description: "A flowering tree native to the Pacific Islands that has been used in traditional Hawaiian medicine for centuries for its skin-healing, laxative, and oral health properties. The state tree of Hawaii.",
    uses: ["Skin health", "Laxative", "Oral health", "Ceremonial"],
    preparation: "Oil from the nuts is applied topically for skin conditions. Roasted nuts were traditionally used for oral health.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Moisturizes skin", "Gentle laxative", "Supports oral health", "Supports ceremonial practices"],
    category: "Polynesian herbs"
  },
  {
    id: "408",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    description: "An aromatic herb native to the Mediterranean region that has been used in traditional medicine since ancient Egyptian, Greek, and Roman times for its respiratory, antimicrobial, and digestive properties.",
    uses: ["Respiratory support", "Antimicrobial", "Digestive aid", "Antioxidant"],
    preparation: "Leaves are used fresh or dried, as tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Has antimicrobial properties", "Aids digestion", "Rich in antioxidants"],
    category: "Mediterranean herbs"
  },
  {
    id: "409",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used in traditional medicine for centuries for its powerful antimicrobial, respiratory, and digestive properties.",
    uses: ["Antimicrobial", "Respiratory support", "Digestive aid", "Antioxidant"],
    preparation: "Leaves are used fresh or dried, as tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Supports respiratory health", "Aids digestion", "Rich in antioxidants"],
    category: "Mediterranean herbs"
  },
  {
    id: "410",
    name: "Bay Laurel",
    scientificName: "Laurus nobilis",
    description: "An aromatic evergreen tree native to the Mediterranean region that has been used in traditional medicine since ancient Greek and Roman times for its digestive, respiratory, and joint health properties.",
    uses: ["Digestive aid", "Respiratory support", "Joint health", "Antimicrobial"],
    preparation: "Leaves are used fresh or dried, as tea, in cooking, or as essential oil. For tea, steep 1-2 leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports respiratory health", "Reduces joint inflammation", "Has antimicrobial properties"],
    category: "Mediterranean herbs"
  },
  {
    id: "411",
    name: "Olive Leaf",
    scientificName: "Olea europaea",
    description: "A small evergreen tree native to the Mediterranean region that has been used in traditional medicine since ancient Egyptian times for its cardiovascular, antimicrobial, and antioxidant properties.",
    uses: ["Heart health", "Antimicrobial", "Antioxidant", "Blood pressure regulation"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart health", "Has antimicrobial properties", "Rich in antioxidants", "Helps regulate blood pressure"],
    category: "Mediterranean herbs"
  },
  {
    id: "412",
    name: "Mullein",
    scientificName: "Verbascum thapsus",
    description: "A biennial plant native to Europe, Asia, and North Africa that has been used in traditional medicine for centuries for its respiratory, ear health, and lymphatic properties. Its soft, fuzzy leaves were traditionally used as lamp wicks.",
    uses: ["Respiratory support", "Ear health", "Lymphatic support", "Cough relief"],
    preparation: "Leaves and flowers are used to make tea, tinctures, or oil infusions. For tea, steep 1-2 teaspoons of dried herb in hot water and strain well to remove tiny hairs.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Soothes respiratory tract", "Supports ear health", "Promotes lymphatic drainage", "Relieves cough"],
    category: "Respiratory herbs"
  },
  {
    id: "413",
    name: "Elecampane",
    scientificName: "Inula helenium",
    description: "A tall perennial plant native to Europe and Asia that has been used in traditional medicine since ancient Greek and Roman times for its respiratory, digestive, and antimicrobial properties.",
    uses: ["Respiratory support", "Digestive aid", "Antimicrobial", "Expectorant"],
    preparation: "Root is used to make tea, tinctures, or syrups. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lung function", "Aids digestion", "Has antimicrobial properties", "Helps expel mucus"],
    category: "Respiratory herbs"
  },
  {
    id: "414",
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    description: "A tall evergreen tree native to Australia that has been used in traditional Aboriginal medicine for thousands of years for its respiratory, antimicrobial, and pain-relieving properties.",
    uses: ["Respiratory support", "Antimicrobial", "Pain relief", "Fever reduction"],
    preparation: "Leaves are used to make tea, steam inhalations, or essential oil. For steam inhalation, add a few drops of essential oil to hot water and inhale the steam.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Opens respiratory passages", "Has antimicrobial properties", "Relieves pain", "Reduces fever"],
    category: "Respiratory herbs"
  },
  {
    id: "415",
    name: "Wild Cherry Bark",
    scientificName: "Prunus serotina",
    description: "A deciduous tree native to North America that has been used by Native American peoples for centuries for its respiratory, cough-suppressing, and sedative properties.",
    uses: ["Respiratory support", "Cough relief", "Sedative", "Digestive aid"],
    preparation: "Bark is used to make tea, tinctures, or syrups. For tea, simmer 1 teaspoon of dried bark in water for 10-15 minutes. Not for long-term use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Suppresses cough", "Calms nervous system", "Aids digestion", "Contains cyanogenic glycosides"],
    category: "Respiratory herbs"
  },
  {
    id: "416",
    name: "Hyssop",
    scientificName: "Hyssopus officinalis",
    description: "A semi-evergreen perennial herb native to Southern Europe, the Middle East, and the region surrounding the Caspian Sea that has been used in traditional medicine since biblical times for its respiratory, digestive, and wound-healing properties.",
    uses: ["Respiratory support", "Digestive aid", "Wound healing", "Antiviral"],
    preparation: "Aerial parts are used to make tea, tinctures, or steam inhalations. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Aids digestion", "Promotes wound healing", "Has antiviral properties"],
    category: "Respiratory herbs"
  },
  {
    id: "417",
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    description: "A flowering plant native to Europe and Asia that has been used in traditional medicine for centuries for its mood-enhancing, anti-inflammatory, and wound-healing properties. One of the most well-studied herbs for depression.",
    uses: ["Mood enhancement", "Anti-inflammatory", "Wound healing", "Nerve support"],
    preparation: "Aerial parts are used to make tea, tinctures, or infused oils. For tea, steep 1-2 teaspoons of dried herb in hot water. May interact with medications.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Reduces inflammation", "Promotes wound healing", "Supports nerve function"],
    category: "Mental health herbs"
  },
  {
    id: "418",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "A perennial herb in the mint family native to Southern Europe that has been used in traditional medicine since ancient Greek times for its calming, cognitive, antiviral, and digestive properties.",
    uses: ["Anxiety relief", "Cognitive enhancement", "Antiviral", "Digestive aid"],
    preparation: "Leaves are used to make tea, tinctures, or essential oil. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Enhances cognitive function", "Has antiviral properties", "Aids digestion"],
    category: "Mental health herbs"
  },
  {
    id: "419",
    name: "Bacopa",
    scientificName: "Bacopa monnieri",
    description: "A perennial creeping herb native to wetlands of India that has been used in Ayurvedic medicine for thousands of years for its cognitive, adaptogenic, and anxiolytic properties.",
    uses: ["Cognitive enhancement", "Adaptogen", "Anxiety relief", "Memory support"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Increases stress resistance", "Reduces anxiety", "Supports memory"],
    category: "Mental health herbs"
  },
  {
    id: "420",
    name: "Passionflower",
    scientificName: "Passiflora incarnata",
    description: "A perennial climbing vine native to the southeastern United States that has been used by Native American peoples for centuries for its calming, sedative, and anxiolytic properties.",
    uses: ["Anxiety relief", "Sleep support", "Pain relief", "Antispasmodic"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes sleep", "Relieves pain", "Relaxes muscles"],
    category: "Mental health herbs"
  },
  {
    id: "421",
    name: "Blue Lily",
    scientificName: "Nymphaea caerulea",
    description: "A water lily native to Egypt that has been used in traditional Egyptian medicine for thousands of years for its mood-enhancing, aphrodisiac, and sedative properties.",
    uses: ["Mood enhancement", "Aphrodisiac", "Sleep support", "Spiritual"],
    preparation: "Flowers are used to make tea, tinctures, or smoked. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Enhances libido", "Promotes sleep", "Supports spiritual practices"],
    category: "Mental health herbs"
  },
  {
    id: "422",
    name: "Lemon Myrtle",
    scientificName: "Backhousia citriodora",
    description: "A flowering tree native to Australia that has been used in traditional Aboriginal medicine for centuries for its antimicrobial, antifungal, and digestive properties. Has the highest citral content of any plant in the world.",
    uses: ["Antimicrobial", "Antifungal", "Digestive aid", "Immune support"],
    preparation: "Leaves are used to make tea, essential oil, or added to food. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Combats fungal infections", "Aids digestion", "Enhances immune function"],
    category: "Australian Aboriginal herbs"
  },
  {
    id: "423",
    name: "Kakadu Plum",
    scientificName: "Terminalia ferdinandiana",
    description: "A small tree native to Australia that has been used in traditional Aboriginal medicine for centuries for its immune-enhancing, antioxidant, and skin health properties. Contains the highest natural concentration of vitamin C of any known plant in the world.",
    uses: ["Immune support", "Antioxidant", "Skin health", "Anti-inflammatory"],
    preparation: "Fruit is consumed fresh, dried, as powder, or in extract form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Extremely rich in vitamin C", "Supports skin health", "Reduces inflammation"],
    category: "Australian Aboriginal herbs"
  },
  {
    id: "424",
    name: "Bush Tomato",
    scientificName: "Solanum centrale",
    description: "A small shrub native to the central deserts of Australia that has been used in traditional Aboriginal medicine for centuries for its nutritive, digestive, and pain-relieving properties.",
    uses: ["Nutritive", "Digestive aid", "Pain relief", "Anti-inflammatory"],
    preparation: "Fruit is consumed dried, as powder, or added to food.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Nutrient-dense", "Aids digestion", "Relieves pain", "Reduces inflammation"],
    category: "Australian Aboriginal herbs"
  },
  {
    id: "425",
    name: "Wattleseed",
    scientificName: "Acacia spp.",
    description: "Seeds from various Acacia species native to Australia that have been used in traditional Aboriginal medicine for centuries for their nutritive, digestive, and blood sugar-regulating properties.",
    uses: ["Nutritive", "Digestive aid", "Blood sugar support", "Protein source"],
    preparation: "Seeds are roasted and ground, then used to make tea or added to food.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Nutrient-dense", "Aids digestion", "Supports healthy blood sugar", "Rich in protein"],
    category: "Australian Aboriginal herbs"
  },
  {
    id: "426",
    name: "Angelica",
    scientificName: "Angelica archangelica",
    description: "A biennial plant native to subarctic regions of Europe that has been used in traditional Nordic medicine for centuries for its digestive, respiratory, circulatory, and women's health properties.",
    uses: ["Digestive aid", "Respiratory support", "Circulation support", "Women's health"],
    preparation: "Root, seeds, and leaves are used to make tea, tinctures, or added to food. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Supports respiratory health", "Improves circulation", "Supports menstrual health"],
    category: "Nordic herbs"
  },
  {
    id: "427",
    name: "Birch",
    scientificName: "Betula spp.",
    description: "A deciduous tree native to northern temperate and boreal climates that has been used in traditional Nordic medicine for centuries for its diuretic, anti-inflammatory, and skin health properties.",
    uses: ["Diuretic", "Anti-inflammatory", "Skin health", "Joint health"],
    preparation: "Bark, leaves, and sap are used to make tea, tinctures, or topical applications. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Gentle diuretic", "Reduces inflammation", "Supports skin health", "Supports joint health"],
    category: "Nordic herbs"
  },
  {
    id: "428",
    name: "Lingonberry",
    scientificName: "Vaccinium vitis-idaea",
    description: "A small evergreen shrub native to boreal forests of the Northern Hemisphere that has been used in traditional Nordic medicine for centuries for its urinary tract, antioxidant, and anti-inflammatory properties.",
    uses: ["Urinary tract support", "Antioxidant", "Anti-inflammatory", "Digestive aid"],
    preparation: "Berries and leaves are used to make tea, juice, or added to food. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports urinary health", "Rich in antioxidants", "Reduces inflammation", "Aids digestion"],
    category: "Nordic herbs"
  },
  {
    id: "429",
    name: "Juniper",
    scientificName: "Juniperus communis",
    description: "A coniferous evergreen shrub native to the Northern Hemisphere that has been used in traditional Nordic medicine for centuries for its diuretic, antimicrobial, and digestive properties.",
    uses: ["Diuretic", "Antimicrobial", "Digestive aid", "Joint health"],
    preparation: "Berries are used to make tea, tinctures, or added to food. For tea, crush 1 teaspoon of dried berries and steep in hot water. Not for long-term use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Gentle diuretic", "Has antimicrobial properties", "Aids digestion", "Supports joint health"],
    category: "Nordic herbs"
  },
  {
    id: "430",
    name: "Clove",
    scientificName: "Syzygium aromaticum",
    description: "Aromatic flower buds from an evergreen tree native to the Maluku Islands in Indonesia that have been used in traditional medicine across many cultures for thousands of years for their dental, digestive, and antimicrobial properties.",
    uses: ["Dental health", "Digestive aid", "Antimicrobial", "Pain relief"],
    preparation: "Buds are used whole, ground, as tea, or as essential oil. For toothache, apply a small amount of clove oil to the affected area.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Relieves tooth pain", "Aids digestion", "Has antimicrobial properties", "Contains eugenol"],
    category: "Dental health herbs"
  },
  {
    id: "431",
    name: "Myrrh",
    scientificName: "Commiphora myrrha",
    description: "A resin from a small, thorny tree native to the Arabian Peninsula and Northeast Africa that has been used in traditional medicine for thousands of years for its oral health, antimicrobial, and wound-healing properties.",
    uses: ["Dental health", "Antimicrobial", "Wound healing", "Anti-inflammatory"],
    preparation: "Resin is used to make tinctures, mouthwashes, or toothpastes. For mouthwash, dilute tincture in water and rinse.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports gum health", "Has antimicrobial properties", "Promotes wound healing", "Reduces inflammation"],
    category: "Dental health herbs"
  },
  {
    id: "432",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    description: "A small palm tree native to the southeastern United States that has been used by Native American peoples for centuries for its men's health benefits, particularly for prostate and urinary health.",
    uses: ["Prostate health", "Urinary health", "Hair loss prevention", "Hormone balance"],
    preparation: "Berries are used to make standardized extracts, tinctures, or capsules. Not typically used as tea due to need for standardization.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate health", "Improves urinary flow", "May prevent hair loss", "Helps balance hormones"],
    category: "Men's health herbs"
  },
  {
    id: "433",
    name: "Nettle Root",
    scientificName: "Urtica dioica",
    description: "The root of the common stinging nettle plant that has been used in traditional European medicine for centuries for its men's health benefits, particularly for prostate and urinary health.",
    uses: ["Prostate health", "Urinary health", "Anti-inflammatory", "Allergies"],
    preparation: "Root is used to make tea, tinctures, or capsules. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports prostate health", "Improves urinary flow", "Reduces inflammation", "May help with allergies"],
    category: "Men's health herbs"
  },
  {
    id: "434",
    name: "Tribulus",
    scientificName: "Tribulus terrestris",
    description: "A flowering plant native to warm temperate and tropical regions that has been used in traditional Chinese and Ayurvedic medicine for centuries for its men's health benefits, particularly for libido and testosterone support.",
    uses: ["Libido enhancement", "Testosterone support", "Athletic performance", "Urinary health"],
    preparation: "Aerial parts and fruit are used to make standardized extracts, tinctures, or capsules.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances libido", "Supports testosterone production", "May improve athletic performance", "Supports urinary health"],
    category: "Men's health herbs"
  },
  {
    id: "435",
    name: "Muira Puama",
    scientificName: "Ptychopetalum olacoides",
    description: "A small tree native to the Amazon rainforest that has been used by indigenous peoples of South America for centuries for its men's health benefits, particularly for libido and erectile function.",
    uses: ["Libido enhancement", "Erectile support", "Nerve tonic", "Adaptogen"],
    preparation: "Bark and root are used to make tinctures or capsules. Not typically used as tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances libido", "Supports erectile function", "Supports nervous system", "Increases stress resistance"],
    category: "Men's health herbs"
  },
  {
    id: "436",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "A flowering plant in the daisy family native to Europe and Western Asia that has been used in traditional medicine for centuries for its calming, digestive, and anti-inflammatory properties, particularly beneficial for children.",
    uses: ["Calming", "Digestive aid", "Sleep support", "Anti-inflammatory"],
    preparation: "Flowers are used to make tea, tinctures, or baths. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Aids digestion", "Promotes sleep", "Reduces inflammation"],
    category: "Children's health herbs"
  },
  {
    id: "437",
    name: "Catnip",
    scientificName: "Nepeta cataria",
    description: "A perennial herb in the mint family native to Europe and Asia that has been used in traditional medicine for centuries for its calming, digestive, and fever-reducing properties, particularly beneficial for children.",
    uses: ["Calming", "Digestive aid", "Fever reduction", "Sleep support"],
    preparation: "Aerial parts are used to make tea, tinctures, or baths. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Aids digestion", "Reduces fever", "Promotes sleep"],
    category: "Children's health herbs"
  },
  {
    id: "438",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "A perennial herb in the mint family native to Southern Europe that has been used in traditional medicine since ancient Greek times for its calming, antiviral, and digestive properties, particularly beneficial for children.",
    uses: ["Calming", "Antiviral", "Digestive aid", "Sleep support"],
    preparation: "Leaves are used to make tea, tinctures, or baths. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Calms nervous system", "Has antiviral properties", "Aids digestion", "Promotes sleep"],
    category: "Children's health herbs"
  },
  {
    id: "439",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    description: "An aromatic herb native to the Mediterranean region that has been used in traditional medicine since ancient times for its digestive, respiratory, and lactation-supporting properties, particularly beneficial for infants and children.",
    uses: ["Digestive aid", "Colic relief", "Respiratory support", "Lactation support"],
    preparation: "Seeds are used to make tea, tinctures, or added to food. For tea, steep 1 teaspoon of crushed seeds in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Relieves colic in infants", "Supports respiratory health", "Enhances milk production"],
    category: "Children's health herbs"
  },
  {
    id: "440",
    name: "Copal",
    scientificName: "Protium copal",
    description: "A tree native to Central America that produces a resin that has been used in traditional Mayan and Aztec medicine for centuries for its respiratory, antimicrobial, and spiritual properties.",
    uses: ["Respiratory support", "Antimicrobial", "Spiritual", "Pain relief"],
    preparation: "Resin is burned as incense, or used to make tinctures or topical applications.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Has antimicrobial properties", "Supports spiritual practices", "Relieves pain"],
    category: "Central American herbs"
  },
  {
    id: "441",
    name: "Chaya",
    scientificName: "Cnidoscolus aconitifolius",
    description: "A leafy vegetable native to Mexico that has been used in traditional Mayan medicine for centuries for its nutritive, blood sugar-regulating, and kidney-supporting properties.",
    uses: ["Nutritive", "Blood sugar support", "Kidney health", "Digestive aid"],
    preparation: "Leaves are cooked and consumed as food, or made into tea. Must be cooked before consumption to neutralize toxic compounds.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Nutrient-dense", "Supports healthy blood sugar", "Supports kidney function", "Aids digestion"],
    category: "Central American herbs"
  },
  {
    id: "442",
    name: "Annatto",
    scientificName: "Bixa orellana",
    description: "A shrub native to Central and South America that has been used in traditional Mayan and Aztec medicine for centuries for its antimicrobial, antioxidant, and digestive properties.",
    uses: ["Antimicrobial", "Antioxidant", "Digestive aid", "Wound healing"],
    preparation: "Seeds are used to make tea, tinctures, or added to food as a spice and colorant.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Rich in antioxidants", "Aids digestion", "Promotes wound healing"],
    category: "Central American herbs"
  },
  {
    id: "443",
    name: "Guayusa",
    scientificName: "Ilex guayusa",
    description: "A tree native to the Amazon rainforest that has been used by indigenous peoples of Central and South America for centuries for its energizing, antioxidant, and digestive properties.",
    uses: ["Energy enhancement", "Antioxidant", "Digestive aid", "Mental clarity"],
    preparation: "Leaves are used to make tea. Traditionally consumed in the early morning as a communal activity.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases energy", "Rich in antioxidants", "Aids digestion", "Enhances mental focus"],
    category: "Central American herbs"
  },
  {
    id: "444",
    name: "Horsetail",
    scientificName: "Equisetum arvense",
    description: "A primitive vascular plant that has been used in traditional medicine for centuries for its bone, skin, and nail health benefits due to its high silica content.",
    uses: ["Bone health", "Skin health", "Nail health", "Diuretic"],
    preparation: "Aerial parts are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports bone strength", "Supports skin health", "Strengthens nails", "Gentle diuretic"],
    category: "Bone health herbs"
  },
  {
    id: "445",
    name: "Oatstraw",
    scientificName: "Avena sativa",
    description: "The green tops of the common oat plant that have been used in traditional medicine for centuries for their bone, nervous system, and skin health benefits due to their high mineral content.",
    uses: ["Bone health", "Nervous system support", "Skin health", "Nutritive"],
    preparation: "Green tops are used to make tea, tinctures, or baths. For tea, steep 1-2 tablespoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports bone strength", "Calms nervous system", "Supports skin health", "Mineral-rich"],
    category: "Bone health herbs"
  },
  {
    id: "446",
    name: "Comfrey",
    scientificName: "Symphytum officinale",
    description: "A perennial herb native to Europe that has been used in traditional medicine for centuries for its bone, tissue repair, and wound-healing properties due to its high content of allantoin, which promotes cell proliferation.",
    uses: ["Bone health", "Tissue repair", "Wound healing", "Anti-inflammatory"],
    preparation: "Leaves and roots are used to make poultices or infused oils for external use only. Not recommended for internal use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports bone healing", "Accelerates tissue repair", "Promotes wound healing", "Reduces inflammation"],
    category: "Bone health herbs"
  },
  {
    id: "447",
    name: "Alfalfa",
    scientificName: "Medicago sativa",
    description: "A perennial flowering plant in the legume family that has been used in traditional medicine for centuries for its bone, nutritive, and detoxifying properties due to its high mineral and chlorophyll content.",
    uses: ["Bone health", "Nutritive", "Detoxification", "Hormone balance"],
    preparation: "Leaves are used to make tea, tinctures, or consumed as food. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports bone strength", "Nutrient-dense", "Supports detoxification", "Supports hormone balance"],
    category: "Bone health herbs"
  },
  {
    id: "448",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    description: "A flowering plant in the ginger family native to Southeast Asia that has been used in traditional Ayurvedic and Chinese medicine for thousands of years for its anti-inflammatory, antioxidant, and digestive properties.",
    uses: ["Anti-inflammatory", "Antioxidant", "Digestive aid", "Joint health"],
    preparation: "Rhizome is used fresh, dried, as powder, or in extract form. Often combined with black pepper to enhance absorption.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces inflammation", "Rich in antioxidants", "Aids digestion", "Supports joint health"],
    category: "Culinary medicinal herbs"
  },
  {
    id: "449",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    description: "A flowering plant whose rhizome is widely used as a spice and in traditional medicine across many cultures for thousands of years for its digestive, anti-inflammatory, and circulatory properties.",
    uses: ["Digestive aid", "Anti-inflammatory", "Circulation support", "Nausea relief"],
    preparation: "Rhizome is used fresh, dried, as powder, or in extract form. Can be added to food or made into tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Aids digestion", "Reduces inflammation", "Improves circulation", "Relieves nausea"],
    category: "Culinary medicinal herbs"
  },
  {
    id: "450",
    name: "Garlic",
    scientificName: "Allium sativum",
    description: "A bulbous plant related to onions that has been used in traditional medicine across many cultures for thousands of years for its cardiovascular, antimicrobial, and immune-enhancing properties.",
    uses: ["Heart health", "Antimicrobial", "Immune support", "Blood pressure regulation"],
    preparation: "Bulbs are consumed fresh, dried, as powder, or in extract form. For medicinal use, consume 1-2 cloves daily.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports heart health", "Has antimicrobial properties", "Enhances immune function", "Helps regulate blood pressure"],
    category: "Culinary medicinal herbs"
  },
  {
    id: "451",
    name: "Cinnamon",
    scientificName: "Cinnamomum verum",
    description: "An aromatic spice derived from the inner bark of several tree species from the genus Cinnamomum that has been used in traditional medicine across many cultures for thousands of years for its blood sugar-regulating, antimicrobial, and digestive properties.",
    uses: ["Blood sugar support", "Antimicrobial", "Digestive aid", "Anti-inflammatory"],
    preparation: "Bark is used as powder, sticks, or in extract form. Can be added to food or made into tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Has antimicrobial properties", "Aids digestion", "Reduces inflammation"],
    category: "Culinary medicinal herbs"
  },
  {
    id: "452",
    name: "Red Raspberry Leaf",
    scientificName: "Rubus idaeus",
    description: "A leaf from the raspberry plant that has been used in traditional medicine for centuries for its women's reproductive health benefits, particularly during pregnancy and for menstrual support.",
    uses: ["Pregnancy support", "Menstrual support", "Uterine tonic", "Nutritive"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Strengthens uterus", "Eases menstrual cramps", "Nutrient-dense", "Supports pregnancy"],
    category: "Women's reproductive health"
  },
  {
    id: "453",
    name: "Vitex",
    scientificName: "Vitex agnus-castus",
    description: "A deciduous shrub native to the Mediterranean region that has been used in traditional medicine for thousands of years for its women's reproductive health benefits, particularly for hormone balance and menstrual regularity.",
    uses: ["Hormone balance", "Menstrual support", "PMS relief", "Fertility support"],
    preparation: "Berries are used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Balances hormones", "Regulates menstrual cycle", "Reduces PMS symptoms", "Supports fertility"],
    category: "Women's reproductive health"
  },
  {
    id: "454",
    name: "Black Cohosh",
    scientificName: "Actaea racemosa",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for its women's reproductive health benefits, particularly for menopause and menstrual issues.",
    uses: ["Menopausal support", "Menstrual support", "Hormone balance", "Anti-inflammatory"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Not recommended for long-term use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces menopausal symptoms", "Eases menstrual cramps", "Balances hormones", "Reduces inflammation"],
    category: "Women's reproductive health"
  },
  {
    id: "455",
    name: "Dong Quai",
    scientificName: "Angelica sinensis",
    description: "A herb native to China that has been used in traditional Chinese medicine for thousands of years for its women's reproductive health benefits, particularly for menstrual regularity and blood building.",
    uses: ["Menstrual support", "Blood building", "Hormone balance", "Circulation support"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Often combined with other herbs in formulas.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Regulates menstrual cycle", "Builds blood", "Balances hormones", "Improves circulation"],
    category: "Women's reproductive health"
  },
  {
    id: "456",
    name: "Cordyceps",
    scientificName: "Cordyceps sinensis",
    description: "A fungus that parasitizes insect larvae, native to high mountain regions of Tibet and China, that has been used in traditional Chinese medicine for centuries for its energy-enhancing, endurance, and lung capacity properties.",
    uses: ["Athletic performance", "Energy enhancement", "Lung capacity", "Immune support"],
    preparation: "Fruiting body is used to make standardized extracts, tinctures, or capsules. Wild-harvested is rare and expensive; most supplements use cultivated varieties.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances endurance", "Increases energy", "Improves oxygen utilization", "Supports immune function"],
    category: "Athletic performance herbs"
  },
  {
    id: "457",
    name: "Eleuthero",
    scientificName: "Eleutherococcus senticosus",
    description: "A small woody shrub native to Northeastern Asia that has been used in traditional Chinese medicine for centuries for its energy-enhancing, endurance, and adaptogenic properties.",
    uses: ["Athletic performance", "Energy enhancement", "Stress resistance", "Immune support"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances endurance", "Increases energy", "Improves stress resistance", "Supports immune function"],
    category: "Athletic performance herbs"
  },
  {
    id: "458",
    name: "Maca",
    scientificName: "Lepidium meyenii",
    description: "A root vegetable native to the high Andes of Peru that has been used by indigenous peoples for thousands of years for its energy-enhancing, endurance, and hormone-balancing properties.",
    uses: ["Athletic performance", "Energy enhancement", "Hormone balance", "Libido enhancement"],
    preparation: "Root is dried and powdered, which can be added to foods or beverages, or taken in capsule form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances endurance", "Increases energy", "Balances hormones", "Enhances libido"],
    category: "Athletic performance herbs"
  },
  {
    id: "459",
    name: "Beetroot",
    scientificName: "Beta vulgaris",
    description: "A root vegetable that has gained popularity in recent years for its athletic performance benefits, particularly for its ability to enhance nitric oxide production and improve oxygen utilization.",
    uses: ["Athletic performance", "Cardiovascular support", "Blood building", "Liver support"],
    preparation: "Root is consumed fresh, as juice, or in powder or extract form. For athletic performance, consume 2-3 hours before exercise.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances nitric oxide production", "Improves oxygen utilization", "Builds blood", "Supports liver function"],
    category: "Athletic performance herbs"
  },
  {
    id: "460",
    name: "Ashitaba",
    scientificName: "Angelica keiskei",
    description: "A perennial herb native to Japan that has been used in traditional Japanese medicine for centuries for its longevity, digestive, and regenerative properties. Known as 'tomorrow's leaf' because it regenerates quickly when picked.",
    uses: ["Longevity", "Digestive aid", "Regenerative", "Antioxidant"],
    preparation: "Leaves and stems are consumed fresh, dried, as tea, or in powder or extract form.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes longevity", "Aids digestion", "Supports cellular regeneration", "Rich in antioxidants"],
    category: "Japanese herbs"
  },
  {
    id: "461",
    name: "Shiso",
    scientificName: "Perilla frutescens",
    description: "A herb in the mint family native to East Asia that has been used in traditional Japanese medicine for centuries for its respiratory, allergic, and digestive properties.",
    uses: ["Respiratory support", "Allergy relief", "Digestive aid", "Antimicrobial"],
    preparation: "Leaves are consumed fresh, dried, as tea, or in extract form. Often used in Japanese cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports respiratory health", "Relieves allergies", "Aids digestion", "Has antimicrobial properties"],
    category: "Japanese herbs"
  },
  {
    id: "462",
    name: "Wasabi",
    scientificName: "Wasabia japonica",
    description: "A plant native to Japan that has been used in traditional Japanese medicine for centuries for its antimicrobial, digestive, and detoxifying properties.",
    uses: ["Antimicrobial", "Digestive aid", "Detoxification", "Anti-inflammatory"],
    preparation: "Rhizome is grated fresh or used in powder or extract form. Often used in Japanese cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Has antimicrobial properties", "Aids digestion", "Supports detoxification", "Reduces inflammation"],
    category: "Japanese herbs"
  },
  {
    id: "463",
    name: "Matcha",
    scientificName: "Camellia sinensis",
    description: "A finely ground powder of specially grown and processed green tea leaves, traditionally consumed in Japanese tea ceremonies, that has been used for centuries for its cognitive, antioxidant, and calming properties.",
    uses: ["Cognitive enhancement", "Antioxidant", "Calming", "Energy enhancement"],
    preparation: "Powder is whisked with hot water and consumed as tea. Traditional preparation involves specific tools and techniques.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Rich in antioxidants", "Promotes calm alertness", "Increases energy"],
    category: "Japanese herbs"
  },
  {
    id: "464",
    name: "Red Clover",
    scientificName: "Trifolium pratense",
    description: "A flowering plant native to Europe, Western Asia, and northwest Africa that has been used in traditional medicine for centuries for its lymphatic, respiratory, and women's health properties.",
    uses: ["Lymphatic support", "Respiratory support", "Women's health", "Skin health"],
    preparation: "Flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lymphatic drainage", "Supports respiratory health", "Contains phytoestrogens", "Promotes skin health"],
    category: "Lymphatic herbs"
  },
  {
    id: "465",
    name: "Calendula",
    scientificName: "Calendula officinalis",
    description: "A flowering plant in the daisy family native to southern Europe that has been used in traditional medicine for centuries for its lymphatic, skin, and wound-healing properties.",
    uses: ["Lymphatic support", "Skin health", "Wound healing", "Anti-inflammatory"],
    preparation: "Flowers are used to make tea, tinctures, or topical applications. For tea, steep 1-2 teaspoons of dried flowers in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lymphatic drainage", "Promotes skin health", "Accelerates wound healing", "Reduces inflammation"],
    category: "Lymphatic herbs"
  },
  {
    id: "466",
    name: "Cleavers",
    scientificName: "Galium aparine",
    description: "An annual herbaceous plant native to Europe, North Africa, and Asia that has been used in traditional medicine for centuries for its lymphatic, urinary, and skin health properties.",
    uses: ["Lymphatic support", "Urinary health", "Skin health", "Detoxification"],
    preparation: "Aerial parts are used to make tea, tinctures, or poultices. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports lymphatic drainage", "Supports urinary health", "Promotes skin health", "Supports detoxification"],
    category: "Lymphatic herbs"
  },
  {
    id: "467",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "A flowering plant native to North America that has been used by Native American peoples for centuries for its immune-enhancing, lymphatic, and antimicrobial properties.",
    uses: ["Immune support", "Lymphatic support", "Antimicrobial", "Wound healing"],
    preparation: "Root, leaves, and flowers are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Supports lymphatic drainage", "Has antimicrobial properties", "Promotes wound healing"],
    category: "Lymphatic herbs"
  },
  {
    id: "468",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "A small evergreen shrub native to India, the Middle East, and parts of Africa that has been used in Ayurvedic medicine for thousands of years for its adaptogenic, stress-reducing, and energy-enhancing properties.",
    uses: ["Adaptogen", "Stress relief", "Energy enhancement", "Immune support"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Reduces anxiety", "Enhances energy", "Supports immune function"],
    category: "Adaptogenic herbs"
  },
  {
    id: "469",
    name: "Rhodiola",
    scientificName: "Rhodiola rosea",
    description: "A perennial flowering plant native to wild Arctic regions of Europe, Asia, and North America that has been used in traditional medicine for centuries for its adaptogenic, energy-enhancing, and cognitive properties.",
    uses: ["Adaptogen", "Energy enhancement", "Cognitive enhancement", "Stress relief"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Enhances energy", "Improves cognitive function", "Reduces fatigue"],
    category: "Adaptogenic herbs"
  },
  {
    id: "470",
    name: "Holy Basil",
    scientificName: "Ocimum sanctum",
    description: "A aromatic plant native to the Indian subcontinent that has been used in Ayurvedic medicine for thousands of years for its adaptogenic, stress-reducing, and immune-enhancing properties.",
    uses: ["Adaptogen", "Stress relief", "Immune support", "Respiratory support"],
    preparation: "Leaves are used to make tea, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Reduces anxiety", "Enhances immune function", "Supports respiratory health"],
    category: "Adaptogenic herbs"
  },
  {
    id: "471",
    name: "Schisandra",
    scientificName: "Schisandra chinensis",
    description: "A woody vine native to forests of Northern China and the Russian Far East that has been used in traditional Chinese medicine for centuries for its adaptogenic, liver-protective, and energy-enhancing properties.",
    uses: ["Adaptogen", "Liver support", "Energy enhancement", "Stress relief"],
    preparation: "Berries are used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Supports liver function", "Enhances energy", "Improves mental performance"],
    category: "Adaptogenic herbs"
  },
  {
    id: "472",
    name: "Ginkgo Biloba",
    scientificName: "Ginkgo biloba",
    description: "One of the oldest living tree species on Earth, native to China, that has been used in traditional Chinese medicine for thousands of years for its cognitive, circulatory, and antioxidant properties.",
    uses: ["Cognitive enhancement", "Circulation support", "Antioxidant", "Memory support"],
    preparation: "Leaves are used to make standardized extracts, tinctures, or capsules. Not typically used as tea due to need for standardization.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Improves circulation", "Rich in antioxidants", "Supports memory"],
    category: "Brain health herbs"
  },
  {
    id: "473",
    name: "Bacopa",
    scientificName: "Bacopa monnieri",
    description: "A perennial creeping herb native to wetlands of India that has been used in Ayurvedic medicine for thousands of years for its cognitive, memory, and adaptogenic properties.",
    uses: ["Cognitive enhancement", "Memory support", "Adaptogen", "Anxiety relief"],
    preparation: "Aerial parts are used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Improves memory", "Increases stress resistance", "Reduces anxiety"],
    category: "Brain health herbs"
  },
  {
    id: "474",
    name: "Lion's Mane Mushroom",
    scientificName: "Hericium erinaceus",
    description: "An edible mushroom native to North America, Europe, and Asia that has gained popularity in recent years for its cognitive, nerve-regenerative, and digestive properties.",
    uses: ["Cognitive enhancement", "Nerve health", "Digestive aid", "Immune support"],
    preparation: "Fruiting body is used to make standardized extracts, tinctures, or capsules. Can also be consumed as food.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Supports nerve regeneration", "Aids digestion", "Supports immune function"],
    category: "Brain health herbs"
  },
  {
    id: "475",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    description: "An aromatic evergreen shrub native to the Mediterranean region that has been used in traditional medicine for centuries for its cognitive, circulatory, and digestive properties.",
    uses: ["Cognitive enhancement", "Circulation support", "Digestive aid", "Antimicrobial"],
    preparation: "Leaves are used fresh or dried, as tea, tinctures, or essential oil. For tea, steep 1 teaspoon of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances cognitive function", "Improves circulation", "Aids digestion", "Has antimicrobial properties"],
    category: "Brain health herbs"
  },
  {
    id: "476",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    description: "A flowering plant found worldwide that has been used in traditional medicine for centuries for its detoxifying, liver-supporting, and diuretic properties.",
    uses: ["Detoxification", "Liver support", "Diuretic", "Digestive aid"],
    preparation: "Root, leaves, and flowers are used to make tea, tinctures, or consumed as food. For tea, steep 1-2 teaspoons of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports detoxification", "Supports liver function", "Gentle diuretic", "Aids digestion"],
    category: "Detoxification herbs"
  },
  {
    id: "477",
    name: "Milk Thistle",
    scientificName: "Silybum marianum",
    description: "A flowering herb native to Mediterranean regions that has been used for over 2,000 years for its powerful liver-protective, detoxifying, and regenerative properties.",
    uses: ["Detoxification", "Liver protection", "Antioxidant", "Digestive aid"],
    preparation: "Seeds are used to make standardized extracts, tinctures, or capsules. For tea, simmer 1 teaspoon of crushed seeds in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports detoxification", "Protects liver cells", "Rich in antioxidants", "Aids digestion"],
    category: "Detoxification herbs"
  },
  {
    id: "478",
    name: "Burdock Root",
    scientificName: "Arctium lappa",
    description: "A biennial plant native to Europe and Asia that has been used in traditional medicine for centuries for its detoxifying, blood-purifying, and skin health properties.",
    uses: ["Detoxification", "Blood purification", "Skin health", "Digestive aid"],
    preparation: "Root is used to make tea, tinctures, or consumed as food. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports detoxification", "Purifies blood", "Promotes skin health", "Aids digestion"],
    category: "Detoxification herbs"
  },
  {
    id: "479",
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    description: "An annual herb in the family Apiaceae that has gained popularity in recent years for its detoxifying, heavy metal-chelating, and digestive properties.",
    uses: ["Detoxification", "Heavy metal chelation", "Digestive aid", "Antimicrobial"],
    preparation: "Leaves are consumed fresh, dried, as juice, or in extract form. Often used in cooking.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports detoxification", "Binds to heavy metals", "Aids digestion", "Has antimicrobial properties"],
    category: "Detoxification herbs"
  },
  {
    id: "480",
    name: "Chaga",
    scientificName: "Inonotus obliquus",
    description: "A fungus that grows primarily on birch trees in cold climates that has been used in traditional Russian and Eastern European medicine for centuries for its immune-enhancing, antioxidant, and digestive properties.",
    uses: ["Immune support", "Antioxidant", "Digestive aid", "Anti-inflammatory"],
    preparation: "Fungus is used to make tea, tinctures, or extracts. For tea, simmer small pieces in water for 30+ minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Enhances immune function", "Extremely rich in antioxidants", "Aids digestion", "Reduces inflammation"],
    category: "Russian herbs"
  },
  {
    id: "481",
    name: "Sea Buckthorn",
    scientificName: "Hippophae rhamnoides",
    description: "A deciduous shrub native to cold-temperate regions of Europe and Asia that has been used in traditional Russian and Scandinavian medicine for centuries for its nutritive, skin health, and digestive properties.",
    uses: ["Nutritive", "Skin health", "Digestive aid", "Cardiovascular support"],
    preparation: "Berries and oil are consumed fresh, as juice, or in extract form. Oil can be applied topically for skin conditions.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Nutrient-dense", "Promotes skin health", "Aids digestion", "Supports heart health"],
    category: "Russian herbs"
  },
  {
    id: "482",
    name: "Rhodiola",
    scientificName: "Rhodiola rosea",
    description: "A perennial flowering plant native to wild Arctic regions of Europe, Asia, and North America that has been used in traditional Russian medicine for centuries for its adaptogenic, energy-enhancing, and cognitive properties.",
    uses: ["Adaptogen", "Energy enhancement", "Cognitive enhancement", "Stress relief"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Enhances energy", "Improves cognitive function", "Reduces fatigue"],
    category: "Russian herbs"
  },
  {
    id: "483",
    name: "Siberian Ginseng",
    scientificName: "Eleutherococcus senticosus",
    description: "A small woody shrub native to Northeastern Asia that has been used in traditional Russian medicine for centuries for its adaptogenic, energy-enhancing, and immune-supporting properties.",
    uses: ["Adaptogen", "Energy enhancement", "Immune support", "Stress relief"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Increases stress resistance", "Enhances energy", "Supports immune function", "Reduces fatigue"],
    category: "Russian herbs"
  },
  {
    id: "484",
    name: "Clove",
    scientificName: "Syzygium aromaticum",
    description: "Aromatic flower buds from an evergreen tree native to the Maluku Islands in Indonesia that have been used in traditional medicine across many cultures for thousands of years for their oral health, digestive, and antimicrobial properties.",
    uses: ["Oral health", "Digestive aid", "Antimicrobial", "Pain relief"],
    preparation: "Buds are used whole, ground, as tea, or as essential oil. For toothache, apply a small amount of clove oil to the affected area.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports oral health", "Relieves tooth pain", "Has antimicrobial properties", "Contains eugenol"],
    category: "Oral health herbs"
  },
  {
    id: "485",
    name: "Myrrh",
    scientificName: "Commiphora myrrha",
    description: "A resin from a small, thorny tree native to the Arabian Peninsula and Northeast Africa that has been used in traditional medicine for thousands of years for its oral health, antimicrobial, and wound-healing properties.",
    uses: ["Oral health", "Antimicrobial", "Wound healing", "Anti-inflammatory"],
    preparation: "Resin is used to make tinctures, mouthwashes, or toothpastes. For mouthwash, dilute tincture in water and rinse.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports oral health", "Has antimicrobial properties", "Promotes wound healing", "Reduces inflammation"],
    category: "Oral health herbs"
  },
  {
    id: "486",
    name: "Neem",
    scientificName: "Azadirachta indica",
    description: "A fast-growing tree native to the Indian subcontinent that has been used in Ayurvedic medicine for thousands of years for its oral health, antimicrobial, and skin health properties.",
    uses: ["Oral health", "Antimicrobial", "Skin health", "Digestive aid"],
    preparation: "Twigs are traditionally used as toothbrushes (datun). Leaves and oil can be used in toothpastes, mouthwashes, or applied topically.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports oral health", "Has antimicrobial properties", "Promotes skin health", "Aids digestion"],
    category: "Oral health herbs"
  },
  {
    id: "487",
    name: "Licorice Root",
    scientificName: "Glycyrrhiza glabra",
    description: "A perennial herb native to Southern Europe and parts of Asia that has been used in traditional medicine for thousands of years for its oral health, respiratory, and digestive properties.",
    uses: ["Oral health", "Respiratory support", "Digestive aid", "Anti-inflammatory"],
    preparation: "Root is used to make tea, tinctures, or lozenges. For tea, simmer 1 teaspoon of dried root in water for 10-15 minutes. Not for long-term use or high blood pressure.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports oral health", "Soothes respiratory tract", "Aids digestion", "Reduces inflammation"],
    category: "Oral health herbs"
  },
  {
    id: "488",
    name: "Bladderwrack",
    scientificName: "Fucus vesiculosus",
    description: "A seaweed found on the coasts of the North Sea, the western Baltic Sea, and the Atlantic and Pacific Oceans that has been used in traditional medicine for centuries for its thyroid-supporting, weight management, and digestive properties.",
    uses: ["Thyroid support", "Weight management", "Digestive aid", "Skin health"],
    preparation: "Dried seaweed is used to make tea, tinctures, or capsules. For tea, steep 1 teaspoon of dried herb in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports thyroid function", "Rich in iodine", "Aids digestion", "Promotes skin health"],
    category: "Thyroid support herbs"
  },
  {
    id: "489",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    description: "A small evergreen shrub native to India, the Middle East, and parts of Africa that has been used in Ayurvedic medicine for thousands of years for its adaptogenic, thyroid-supporting, and stress-reducing properties.",
    uses: ["Thyroid support", "Adaptogen", "Stress relief", "Energy enhancement"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports thyroid function", "Increases stress resistance", "Reduces anxiety", "Enhances energy"],
    category: "Thyroid support herbs"
  },
  {
    id: "490",
    name: "Guggul",
    scientificName: "Commiphora wightii",
    description: "A flowering plant native to India, Bangladesh, and Pakistan that has been used in Ayurvedic medicine for thousands of years for its thyroid-supporting, weight management, and cholesterol-lowering properties.",
    uses: ["Thyroid support", "Weight management", "Cholesterol management", "Anti-inflammatory"],
    preparation: "Resin is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports thyroid function", "Aids weight management", "Helps lower cholesterol", "Reduces inflammation"],
    category: "Thyroid support herbs"
  },
  {
    id: "491",
    name: "Coleus",
    scientificName: "Coleus forskohlii",
    description: "A tropical perennial plant native to India, Nepal, Thailand, and parts of Southeast Asia that has been used in Ayurvedic medicine for centuries for its thyroid-supporting, weight management, and cardiovascular properties.",
    uses: ["Thyroid support", "Weight management", "Cardiovascular support", "Respiratory support"],
    preparation: "Root is used to make standardized extracts, tinctures, or capsules. Works best when taken consistently over time.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports thyroid function", "Aids weight management", "Supports heart health", "Supports respiratory health"],
    category: "Thyroid support herbs"
  },
  {
    id: "492",
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    description: "A flowering plant native to Europe and Asia that has been used in traditional medicine for centuries for its mood-enhancing, anti-inflammatory, and wound-healing properties. One of the most well-studied herbs for depression.",
    uses: ["Emotional balance", "Anti-inflammatory", "Wound healing", "Nerve support"],
    preparation: "Aerial parts are used to make standardized extracts, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried herb in hot water. May interact with medications.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Reduces inflammation", "Promotes wound healing", "Supports nerve function"],
    category: "Emotional balance herbs"
  },
  {
    id: "493",
    name: "Kava",
    scientificName: "Piper methysticum",
    description: "A small shrub native to the South Pacific islands that has been used in traditional Polynesian medicine for centuries for its calming, anxiolytic, and muscle-relaxing properties.",
    uses: ["Emotional balance", "Anxiety relief", "Sleep support", "Muscle relaxation"],
    preparation: "Root is traditionally prepared by grinding and mixing with water, or can be used as tincture or capsules. Use with caution due to potential liver concerns.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Reduces anxiety", "Promotes emotional stability", "Supports sleep", "Relaxes muscles"],
    category: "Emotional balance herbs"
  },
  {
    id: "494",
    name: "Black Walnut",
    scientificName: "Juglans nigra",
    description: "A deciduous tree native to eastern North America that has been used in traditional medicine for centuries for its antiparasitic, antifungal, and digestive properties.",
    uses: ["Parasite cleansing", "Antifungal", "Digestive aid", "Skin health"],
    preparation: "Green hulls are used to make tinctures or capsules. Not typically used as tea due to strong taste.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Combats intestinal parasites", "Has antifungal properties", "Aids digestion", "Promotes skin health"],
    category: "Antiparasitic herbs"
  },
  {
    id: "495",
    name: "Wormwood",
    scientificName: "Artemisia absinthium",
    description: "A perennial herb native to temperate regions of Europe, Asia, and northern Africa that has been used in traditional medicine for centuries for its antiparasitic, digestive, and liver-supporting properties.",
    uses: ["Parasite cleansing", "Digestive aid", "Liver support", "Antimicrobial"],
    preparation: "Aerial parts are used to make tinctures or capsules. For tea, steep 1/2 teaspoon of dried herb in hot water. Very bitter taste. Not for long-term use.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Combats intestinal parasites", "Stimulates digestion", "Supports liver function", "Has antimicrobial properties"],
    category: "Antiparasitic herbs"
  },
  {
    id: "496",
    name: "Reishi Mushroom",
    scientificName: "Ganoderma lucidum",
    description: "A woody fungus native to Asia that has been used in traditional Chinese medicine for thousands of years for its longevity, immune-enhancing, and adaptogenic properties. Known as the 'mushroom of immortality.'",
    uses: ["Longevity", "Immune support", "Adaptogen", "Liver support"],
    preparation: "Fruiting body is used to make tea, tinctures, or extracts. For tea, simmer small pieces in water for 30+ minutes.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes longevity", "Enhances immune function", "Increases stress resistance", "Supports liver function"],
    category: "Longevity herbs"
  },
  {
    id: "497",
    name: "He Shou Wu",
    scientificName: "Polygonum multiflorum",
    description: "A flowering plant native to China that has been used in traditional Chinese medicine for centuries for its longevity, hair health, and blood-building properties.",
    uses: ["Longevity", "Hair health", "Blood building", "Liver support"],
    preparation: "Root is traditionally prepared by cooking with black beans, then used to make tea, tinctures, or capsules. Use with caution due to potential liver concerns.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Promotes longevity", "Supports hair health", "Builds blood", "Supports liver function"],
    category: "Longevity herbs"
  },
  {
    id: "498",
    name: "Griffonia",
    scientificName: "Griffonia simplicifolia",
    description: "A woody climbing shrub native to West and Central Africa that has been used in traditional African medicine for centuries for its mood-enhancing, sleep-supporting, and digestive properties.",
    uses: ["Mood enhancement", "Sleep support", "Digestive aid", "Pain relief"],
    preparation: "Seeds are used to make standardized extracts, tinctures, or capsules. Rich source of 5-HTP, a precursor to serotonin.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Improves mood", "Promotes sleep", "Aids digestion", "Relieves pain"],
    category: "African herbs"
  },
  {
    id: "499",
    name: "Gymnema",
    scientificName: "Gymnema sylvestre",
    description: "A woody climbing shrub native to the tropical forests of India, Africa, and Australia that has been used in Ayurvedic medicine for thousands of years for its blood sugar-regulating and weight management properties.",
    uses: ["Blood sugar support", "Weight management", "Digestive aid", "Cholesterol management"],
    preparation: "Leaves are used to make standardized extracts, tinctures, or capsules. For tea, steep 1-2 teaspoons of dried leaves in hot water.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Reduces sugar cravings", "Aids digestion", "Helps lower cholesterol"],
    category: "Blood sugar herbs"
  },
  {
    id: "500",
    name: "Cinnamon",
    scientificName: "Cinnamomum verum",
    description: "An aromatic spice derived from the inner bark of several tree species from the genus Cinnamomum that has been used in traditional medicine across many cultures for thousands of years for its blood sugar-regulating, antimicrobial, and digestive properties.",
    uses: ["Blood sugar support", "Antimicrobial", "Digestive aid", "Anti-inflammatory"],
    preparation: "Bark is used as powder, sticks, or in extract form. Can be added to food or made into tea.",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Supports healthy blood sugar", "Has antimicrobial properties", "Aids digestion", "Reduces inflammation"],
    category: "Blood sugar herbs"
  }
];
