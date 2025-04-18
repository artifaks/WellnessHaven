import { useState } from "react";
import { Leaf, Coffee, Clock, Droplet } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TeaRecipe {
  id: string;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  preparation: string[];
  effects: string;
  timing: string;
  color: string;
  bestTime: string;
}

const teaRecipes: TeaRecipe[] = [
  {
    id: "chamomile",
    name: "Chamomile Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//chamomile-tea.jpg",
    description: "A gentle, soothing herbal tea with a mild, apple-like flavor that promotes relaxation and sleep.",
    shortDescription: "Calming herb for restful sleep",
    benefits: [
      "Calming herb for restful sleep",
      "Supports healthy digestion",
      "Gentle and safe for all ages",
      "Traditionally used for relaxation"
    ],
    preparation: [
      "Use 1 tablespoon dried chamomile flowers per cup",
      "Pour boiling water over flowers",
      "Steep covered for 5-10 minutes",
      "Strain and enjoy before bedtime"
    ],
    effects: "Relaxing, Sleep-inducing, Anti-inflammatory",
    timing: "Evening, 30-60 minutes before bedtime",
    color: "#FFD700", // Gold/yellow color
    bestTime: "Evening"
  },
  {
    id: "peppermint",
    name: "Peppermint Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//peppermint-tea.jpg",
    description: "A refreshing, cooling tea with a strong minty flavor that aids digestion and clears the mind.",
    shortDescription: "Cooling and refreshing for digestion",
    benefits: [
      "Soothes digestive discomfort",
      "Relieves headaches and migraines",
      "Clears sinuses and respiratory passages",
      "Refreshes and energizes"
    ],
    preparation: [
      "Use 1-2 teaspoons dried peppermint leaves per cup",
      "Pour hot (not boiling) water over leaves",
      "Steep covered for 5-7 minutes",
      "Strain and enjoy after meals"
    ],
    effects: "Digestive aid, Cooling, Refreshing, Stimulating",
    timing: "After meals or mid-afternoon",
    color: "#4CAF50", // Green color
    bestTime: "After meals or mid-morning for focus"
  },
  {
    id: "ginger",
    name: "Ginger Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ginger-tea.jpg",
    description: "A warming, spicy tea that stimulates circulation, aids digestion, and supports immune function.",
    shortDescription: "Warming and invigorating for immunity",
    benefits: [
      "Reduces nausea and motion sickness",
      "Improves circulation and warms the body",
      "Supports immune system function",
      "Reduces inflammation and joint pain"
    ],
    preparation: [
      "Use 1-inch fresh ginger root, thinly sliced per cup",
      "Pour boiling water over ginger",
      "Steep covered for 10-15 minutes",
      "Add honey and lemon to taste (optional)"
    ],
    effects: "Warming, Anti-inflammatory, Digestive aid, Immune support",
    timing: "Morning or when feeling cold/unwell",
    color: "#FF9800", // Orange color
    bestTime: "Morning"
  },
  {
    id: "lavender",
    name: "Lavender Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//lavender-tea.jpg",
    description: "A fragrant, floral tea with calming properties that reduces anxiety and promotes relaxation.",
    shortDescription: "Aromatic herb for stress relief",
    benefits: [
      "Reduces anxiety and stress",
      "Promotes restful sleep",
      "Eases headaches and tension",
      "Supports emotional balance"
    ],
    preparation: [
      "Use 1-2 teaspoons dried lavender flowers per cup",
      "Pour hot water (just under boiling) over flowers",
      "Steep covered for 5 minutes (longer steeping can make it bitter)",
      "Strain and add honey if desired"
    ],
    effects: "Calming, Relaxing, Mood-balancing",
    timing: "Evening or during stressful situations",
    color: "#9C27B0", // Purple color
    bestTime: "Evening or during stress"
  },
  {
    id: "lemon-balm",
    name: "Lemon Balm Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//lemon-balm-tea.jpg",
    description: "A bright, lemony tea that calms the nervous system while gently lifting the mood.",
    shortDescription: "Citrusy herb for mood enhancement",
    benefits: [
      "Calms anxiety and nervous tension",
      "Improves mood and mental clarity",
      "Supports healthy sleep patterns",
      "Aids digestion and relieves bloating"
    ],
    preparation: [
      "Use 1-2 tablespoons fresh or 1 tablespoon dried lemon balm leaves",
      "Pour boiling water over leaves",
      "Steep covered for 5-10 minutes",
      "Strain and enjoy throughout the day"
    ],
    effects: "Calming, Mood-lifting, Antiviral",
    timing: "Anytime, especially during stressful periods",
    color: "#CDDC39", // Lime color
    bestTime: "Afternoon"
  },
  {
    id: "hibiscus",
    name: "Hibiscus Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//hibiscus-tea.jpg",
    description: "A tart, cranberry-like tea rich in vitamin C that supports cardiovascular health and immune function.",
    shortDescription: "Tart and tangy for heart health",
    benefits: [
      "Helps lower blood pressure",
      "Rich in antioxidants and vitamin C",
      "Supports immune system function",
      "Refreshing and cooling in hot weather"
    ],
    preparation: [
      "Use 2 teaspoons dried hibiscus flowers per cup",
      "Pour boiling water over flowers",
      "Steep for 5-7 minutes",
      "Add honey or stevia to balance tartness if desired"
    ],
    effects: "Cardiovascular support, Cooling, Immune-boosting",
    timing: "Throughout the day, avoid before bedtime",
    color: "#E91E63", // Pink color
    bestTime: "Afternoon"
  },
  {
    id: "rooibos",
    name: "Rooibos Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//rooibos-tea.jpg",
    description: "A naturally sweet, caffeine-free red tea from South Africa with a nutty flavor and numerous health benefits.",
    shortDescription: "Caffeine-free with antioxidant properties",
    benefits: [
      "Naturally caffeine-free and low in tannins",
      "Rich in antioxidants",
      "Supports skin health and reduces allergies",
      "Gentle on the digestive system"
    ],
    preparation: [
      "Use 1-2 teaspoons rooibos tea per cup",
      "Pour boiling water over tea",
      "Steep for 5-7 minutes (longer for stronger flavor)",
      "Enjoy plain or with milk and honey"
    ],
    effects: "Antioxidant, Anti-allergenic, Digestive support",
    timing: "Any time of day, including evening",
    color: "#F44336", // Red color
    bestTime: "Any time"
  },
  {
    id: "tulsi",
    name: "Tulsi (Holy Basil) Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//tulsi-tea.jpg",
    description: "A sacred Ayurvedic herb with adaptogenic properties that help the body respond to stress and support overall wellness.",
    shortDescription: "Adaptogenic herb for stress relief",
    benefits: [
      "Adaptogenic - helps body adapt to stress",
      "Supports respiratory health",
      "Balances energy levels",
      "Enhances mental clarity and focus"
    ],
    preparation: [
      "Use 1-2 teaspoons dried tulsi leaves per cup",
      "Pour boiling water over leaves",
      "Steep covered for 5-10 minutes",
      "Strain and enjoy throughout the day"
    ],
    effects: "Adaptogenic, Balancing, Clarifying",
    timing: "Morning or afternoon",
    color: "#8BC34A", // Light green color
    bestTime: "Morning"
  },
  {
    id: "dandelion",
    name: "Dandelion Root Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//dandelion-tea.jpg",
    description: "A earthy, slightly bitter tea made from roasted dandelion roots that supports liver health and digestion.",
    shortDescription: "Detoxifying herb for liver support",
    benefits: [
      "Supports liver detoxification",
      "Acts as a gentle diuretic",
      "Rich in vitamins and minerals",
      "Aids digestion and reduces bloating"
    ],
    preparation: [
      "Use 1-2 teaspoons roasted dandelion root per cup",
      "Pour boiling water over the roots",
      "Steep for 10-15 minutes",
      "Add cinnamon or honey to improve flavor if desired"
    ],
    effects: "Detoxifying, Cleansing, Nutritive",
    timing: "Morning or before meals",
    color: "#795548", // Brown color
    bestTime: "Morning"
  },
  {
    id: "echinacea",
    name: "Echinacea Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//echinacea-tea.jpg",
    description: "A slightly sweet, floral tea with a tingling sensation that supports immune function and helps fight off infections.",
    shortDescription: "Immune-boosting herb for cold season",
    benefits: [
      "Boosts immune system function",
      "Reduces duration and severity of colds",
      "Anti-inflammatory properties",
      "Supports upper respiratory health"
    ],
    preparation: [
      "Use 1-2 teaspoons dried echinacea (root, leaves, or flowers)",
      "Pour boiling water over herbs",
      "Steep covered for 10-15 minutes",
      "Drink up to 3 cups daily at first sign of illness"
    ],
    effects: "Immune-boosting, Anti-inflammatory, Antimicrobial",
    timing: "Throughout the day when feeling unwell",
    color: "#9C27B0", // Purple color
    bestTime: "At first sign of illness"
  },
  {
    id: "valerian",
    name: "Valerian Root Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//valerian-tea.jpg",
    description: "A earthy, woody tea with potent sedative properties that promotes deep sleep and relieves anxiety.",
    shortDescription: "Powerful sleep aid for insomnia",
    benefits: [
      "Promotes deep, restful sleep",
      "Reduces anxiety and nervous tension",
      "Relieves muscle spasms and cramps",
      "Helps establish healthy sleep patterns"
    ],
    preparation: [
      "Use 1 teaspoon dried valerian root per cup",
      "Pour boiling water over the root",
      "Steep covered for 10-15 minutes",
      "Add honey or lemon to mask the strong taste"
    ],
    effects: "Sedative, Anxiolytic, Muscle relaxant",
    timing: "30-60 minutes before bedtime",
    color: "#673AB7", // Deep purple color
    bestTime: "Before bedtime"
  },
  {
    id: "nettle",
    name: "Nettle Leaf Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//nettle-tea.jpg",
    description: "A grassy, earthy tea packed with minerals and nutrients that supports overall health and reduces inflammation.",
    shortDescription: "Nutrient-rich herb for vitality",
    benefits: [
      "Rich in vitamins and minerals",
      "Supports kidney and urinary tract health",
      "Reduces allergic reactions and inflammation",
      "Helps balance hormones"
    ],
    preparation: [
      "Use 1-2 tablespoons dried nettle leaves per cup",
      "Pour boiling water over leaves",
      "Steep covered for 10-15 minutes",
      "Drink 2-3 cups daily for best results"
    ],
    effects: "Nutritive, Anti-inflammatory, Diuretic",
    timing: "Throughout the day",
    color: "#4CAF50", // Green color
    bestTime: "Morning or afternoon"
  },
  {
    id: "rosehip",
    name: "Rosehip Tea",
    image: "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//rosehip-tea.jpg",
    description: "A tangy, fruity tea extremely high in vitamin C that supports immune function and skin health.",
    shortDescription: "Vitamin C-rich for immune support",
    benefits: [
      "Exceptionally high in vitamin C",
      "Supports collagen production for skin health",
      "Rich in antioxidants",
      "Supports joint health and reduces inflammation"
    ],
    preparation: [
      "Use 1-2 tablespoons dried rosehips per cup",
      "Pour boiling water over rosehips",
      "Steep for 10-15 minutes",
      "Add honey if desired for sweetness"
    ],
    effects: "Immune-boosting, Anti-inflammatory, Skin-supporting",
    timing: "Morning or throughout the day",
    color: "#FF5722", // Orange-red color
    bestTime: "Morning"
  }
];

const TeaRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<TeaRecipe | null>(null);

  const openRecipeModal = (recipe: TeaRecipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-herb-100 to-herb-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold leading-tight text-herb-900 md:text-4xl lg:text-5xl">
              Healing Herbal Teas
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-herb-700">
              Discover the ancient healing powers of herbal teas. From calming chamomile to invigorating 
              peppermint, explore our collection of teas and their unique health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Tea Recipes Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {teaRecipes.map((recipe) => (
              <div 
                key={recipe.id} 
                className="overflow-hidden rounded-xl shadow-md card-hover-animate"
                onClick={() => openRecipeModal(recipe)}
              >
                <div 
                  style={{ backgroundColor: recipe.color }} 
                  className="h-28 flex items-center justify-center p-4"
                >
                  <div className="text-white">
                    <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                        <line x1="6" y1="2" x2="6" y2="4"></line>
                        <line x1="10" y1="2" x2="10" y2="4"></line>
                        <line x1="14" y1="2" x2="14" y2="4"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
                  <p className="mt-2 text-gray-600">{recipe.shortDescription}</p>
                  <div className="mt-4 flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm">Best time: {recipe.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white shadow-xl">
            <div 
              style={{ backgroundColor: selectedRecipe.color }} 
              className="p-4 text-white text-center relative"
            >
              <h2 className="text-2xl font-semibold">{selectedRecipe.name}</h2>
              <button 
                onClick={closeRecipeModal}
                className="absolute right-4 top-4 rounded-md bg-white/20 px-4 py-1 text-sm font-medium text-white hover:bg-white/30"
              >
                Close
              </button>
            </div>
            
            <div className="p-6">
              {/* Health Benefits */}
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <Leaf className="mr-2 h-5 w-5 text-herb-600" />
                  <h3 className="font-medium text-xl text-gray-800">Health Benefits</h3>
                </div>
                <div className="space-y-2">
                  {selectedRecipe.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start rounded-md bg-gray-50 p-3">
                      <svg className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Preparation */}
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <Coffee className="mr-2 h-5 w-5 text-amber-600" />
                  <h3 className="font-medium text-xl text-gray-800">Preparation</h3>
                </div>
                <ol className="ml-6 list-decimal space-y-2 text-gray-700">
                  {selectedRecipe.preparation.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              {/* Effects & Timing */}
              <div>
                <div className="mb-2 flex items-center">
                  <Droplet className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="font-medium text-xl text-gray-800">Effects & Timing</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Effects:</strong> {selectedRecipe.effects}</p>
                  <div className="flex items-start">
                    <Clock className="mr-2 h-5 w-5 text-gray-600" />
                    <p><strong>Best time to consume:</strong> {selectedRecipe.timing}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TeaRecipes;
