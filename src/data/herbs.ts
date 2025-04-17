
import { Herb } from "@/types";

export const herbs: Herb[] = [
  {
    id: "1",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    description: "Echinacea is a flowering plant used to boost the immune system and fight infections. Native to North America, it has been used in traditional medicine for centuries.",
    uses: ["Immune support", "Cold and flu prevention", "Wound healing"],
    preparation: "Echinacea can be consumed as a tea, tincture, or in capsule form. For tea, steep 1-2 teaspoons of dried herb in hot water for 10-15 minutes.",
    imageUrl: "https://images.unsplash.com/photo-1550679566-43a082207f5d?auto=format&fit=crop&q=80&w=500&h=500",
    benefits: ["Boosts immune system", "Reduces inflammation", "May shorten duration of colds and flu", "Contains antioxidants"],
    category: "Immune system"
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
    category: "Nervous system"
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
    category: "Nervous system"
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
    category: "Joint health"
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
    category: "Digestive health"
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
    category: "Digestive health"
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
    category: "Nervous system"
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
    category: "Immune system"
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
    category: "Adaptogenic"
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
    category: "Nervous system"
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
    category: "Cognitive health"
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
    category: "Liver health"
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
    category: "Urinary system"
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
    category: "Liver health"
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
    category: "Adaptogenic"
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
    category: "Nervous system"
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
    category: "Adaptogenic"
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
    category: "Skin health"
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
    category: "Digestive health"
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
    category: "Heart health"
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
    category: "Digestive health"
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
    category: "Immune system"
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
    category: "Pain relief"
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
    category: "Nervous system"
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
    category: "Skin health"
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
    category: "Women's health"
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
    category: "Immune system"
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
    category: "Men's health"
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
    category: "Nervous system"
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
    category: "Cognitive health"
  }
];

