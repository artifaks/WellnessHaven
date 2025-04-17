
import { useState } from "react";
import { ChevronDown, Heart, Brain, Coffee, Wind, Flower, Droplet, Apple, Activity, User, CircleUser } from "lucide-react";
import { Herb } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HerbCard from "@/components/HerbCard";

interface CategoryConfig {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  keywords: string[];
}

interface HerbCategoryAccordionProps {
  herbs: Herb[];
  onHerbClick: (herb: Herb) => void;
}

const HerbCategoryAccordion = ({ herbs, onHerbClick }: HerbCategoryAccordionProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  
  const categories: CategoryConfig[] = [
    {
      id: "heart",
      name: "Heart Health",
      color: "bg-red-500",
      icon: <Heart className="h-5 w-5 text-white" />,
      keywords: ["heart", "cardiovascular", "circulation", "blood pressure", "cholesterol", "hawthorn"],
    },
    {
      id: "digestive",
      name: "Digestive Health",
      color: "bg-emerald-500",
      icon: <Apple className="h-5 w-5 text-white" />,
      keywords: ["digestive", "gut", "stomach", "intestine", "digestion", "nausea", "peppermint", "ginger", "fennel", "licorice"],
    },
    {
      id: "mens",
      name: "Men's Health",
      color: "bg-blue-500",
      icon: <User className="h-5 w-5 text-white" />,
      keywords: ["men", "prostate", "testosterone", "male", "saw palmetto", "ginseng", "energy"],
    },
    {
      id: "womens",
      name: "Women's Health",
      color: "bg-pink-500",
      icon: <CircleUser className="h-5 w-5 text-white" />,
      keywords: ["women", "menstrual", "menopause", "female", "hormonal", "fertility", "black cohosh", "evening primrose", "dong quai", "red raspberry"],
    },
    {
      id: "cognitive",
      name: "Brain & Cognitive Health",
      color: "bg-purple-500",
      icon: <Brain className="h-5 w-5 text-white" />,
      keywords: ["brain", "cognitive", "memory", "focus", "mental", "nervous system", "ginkgo", "rosemary", "sage", "bacopa"],
    },
    {
      id: "tea",
      name: "Herbal Teas",
      color: "bg-teal-500",
      icon: <Coffee className="h-5 w-5 text-white" />,
      keywords: ["tea", "infusion", "beverage", "drink", "chamomile", "peppermint", "lavender", "green tea", "lemon balm", "holy basil"],
    },
    {
      id: "liver",
      name: "Liver & Detox",
      color: "bg-green-500",
      icon: <Droplet className="h-5 w-5 text-white" />,
      keywords: ["liver", "detox", "cleanse", "toxin", "milk thistle", "dandelion", "turmeric", "burdock", "schisandra"],
    },
    {
      id: "joint",
      name: "Joint & Bone Health",
      color: "bg-cyan-500",
      icon: <Activity className="h-5 w-5 text-white" />,
      keywords: ["joint", "bone", "arthritis", "muscle", "inflammation", "pain", "turmeric", "ginger", "boswellia", "cayenne"],
    },
    {
      id: "respiratory",
      name: "Respiratory Health",
      color: "bg-sky-500",
      icon: <Wind className="h-5 w-5 text-white" />,
      keywords: ["respiratory", "lung", "breath", "cough", "asthma", "bronchial", "mullein", "thyme", "eucalyptus", "elderberry", "oregano"],
    },
    {
      id: "skin",
      name: "Skin Health",
      color: "bg-rose-500",
      icon: <Flower className="h-5 w-5 text-white" />,
      keywords: ["skin", "complexion", "acne", "eczema", "dermatitis", "wound", "calendula", "aloe vera", "tea tree", "lavender", "chamomile"],
    },
    {
      id: "immune",
      name: "Immune Support",
      color: "bg-amber-500",
      icon: <Activity className="h-5 w-5 text-white" />,
      keywords: ["immune", "antiviral", "antibacterial", "echinacea", "elderberry", "astragalus", "reishi", "garlic"],
    },
    {
      id: "stress",
      name: "Stress & Relaxation",
      color: "bg-indigo-500",
      icon: <Coffee className="h-5 w-5 text-white" />,
      keywords: ["stress", "anxiety", "relaxation", "sleep", "valerian", "chamomile", "lavender", "passionflower", "ashwagandha", "lemon balm", "holy basil", "kava"],
    },
  ];

  // Helper function to categorize herbs with enhanced flexibility
  const categorizeHerbs = (herbs: Herb[], category: CategoryConfig) => {
    // First direct matching by name for specific herbs
    const herbsToInclude = category.keywords.filter(keyword => 
      herbs.some(herb => herb.name.toLowerCase().includes(keyword.toLowerCase()))
    );
    
    return herbs.filter(herb => {
      // Direct herb name match (highest priority)
      if (herbsToInclude.some(keyword => 
        herb.name.toLowerCase().includes(keyword.toLowerCase()))) {
        return true;
      }
      
      // Check if herb category matches
      if (herb.category && category.keywords.some(keyword => 
        herb.category?.toLowerCase().includes(keyword.toLowerCase()))) {
        return true;
      }
      
      // Check if uses include any of the category keywords
      if (herb.uses && herb.uses.some(use => 
        category.keywords.some(keyword => use.toLowerCase().includes(keyword.toLowerCase())))) {
        return true;
      }
      
      // Check if benefits include any of the category keywords
      if (herb.benefits && herb.benefits.some(benefit => 
        category.keywords.some(keyword => benefit.toLowerCase().includes(keyword.toLowerCase())))) {
        return true;
      }
      
      // Check description for keywords
      if (herb.description && category.keywords.some(keyword => 
        herb.description.toLowerCase().includes(keyword.toLowerCase()))) {
        return true;
      }
      
      // For specific categories, do additional checks
      if (category.id === "immune" && herb.benefits && 
          herb.benefits.some(benefit => benefit.toLowerCase().includes("immune"))) {
        return true;
      }
      
      if (category.id === "stress" && herb.benefits && 
          herb.benefits.some(benefit => 
            ["calm", "relax", "stress", "sleep", "anxiety"].some(term => 
              benefit.toLowerCase().includes(term)))) {
        return true;
      }
      
      return false;
    });
  };

  const handleExpandAll = () => {
    setOpenCategories(categories.map(cat => cat.id));
  };

  const handleCollapseAll = () => {
    setOpenCategories([]);
  };

  return (
    <div className="rounded-lg border border-herb-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-herb-600">
          <span className="font-medium">{herbs.length}</span> herbs found
        </p>
        <div className="flex gap-2">
          <button 
            onClick={handleExpandAll}
            className="flex items-center gap-1 rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            <span className="hidden sm:inline">Expand All</span>
            <span className="sm:hidden">Expand</span>
          </button>
          <button 
            onClick={handleCollapseAll}
            className="flex items-center gap-1 rounded-md bg-slate-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            <span className="hidden sm:inline">Collapse All</span>
            <span className="sm:hidden">Collapse</span>
          </button>
        </div>
      </div>

      <Accordion type="multiple" value={openCategories} onValueChange={setOpenCategories} className="space-y-3">
        {categories.map(category => {
          const categoryHerbs = categorizeHerbs(herbs, category);
          if (categoryHerbs.length === 0) return null;
          
          return (
            <AccordionItem 
              key={category.id} 
              value={category.id}
              className={`rounded-lg border-0 ${category.color} overflow-hidden`}
            >
              <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-left text-white no-underline hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm font-medium text-white/80">{categoryHerbs.length} herbs</p>
                  </div>
                </div>
                <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="bg-white pt-4">
                <div className="grid gap-3 p-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {categoryHerbs.map(herb => (
                    <HerbCard 
                      key={herb.id} 
                      herb={herb} 
                      onClick={() => onHerbClick(herb)} 
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default HerbCategoryAccordion;
