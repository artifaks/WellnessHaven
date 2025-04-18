import { Herb } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const herbEmojis = {
  "Mint": "🌿",
  "Lavender": "💜",
  "Chamomile": "🌼",
  "Echinacea": "🌱",
  "Ginger": "🌶️",
  "Turmeric": "🟡",
  "Valerian": "💤",
  "Ginseng": "💪",
  "Rosemary": "🌹",
  "Thyme": "🍃",
  "St. John's Wort": "☀️",
  "Ashwagandha": "🧘",
  "Peppermint": "🍃",
  "Elderberry": "🫐",
  "Sage": "🧠",
  "Aloe Vera": "🌵",
  "Garlic": "🧄",
  "Ginkgo": "🍂",
  "Green Tea": "🍵",
  "Holy Basil": "🙏",
  "Lemon Balm": "🍋",
  "Licorice": "🪄",
  "Milk Thistle": "🌼",
  "Nettle": "🌱",
  "Oregano": "🍕",
  "Passionflower": "🌺",
  "Rhodiola": "🏔️",
  "Saffron": "💛",
  "Saw Palmetto": "🌴",
  "Schisandra": "🍒",
  "Feverfew": "🌡️",
  "Marshmallow": "🫧",
  "Calendula": "🌞",
  "Cinnamon": "🧰",
  "Clove": "🦷",
  "Dandelion": "🌼",
  "Eucalyptus": "🌲",
  "Evening Primrose": "🌙",
  "Fennel": "🌱",
  "Black Cohosh": "🌑",
  "Blue Cohosh": "🔵",
  "Cayenne": "🔥",
  "Dong Quai": "🌸",
  "Goldenseal": "💰",
  "Hawthorn": "❤️",
  "Kava Kava": "🏝️",
  "Red Raspberry Leaf": "🍃",
  "Tea Tree": "🌳",
  "Wild Yam": "🍠",
  "Yarrow": "❄️",
  "Black Pepper": "⚫",
  "Cardamom": "💫",
  "Comfrey": "🩹",
  "Cranberry": "🔴",
  "Hops": "🍺",
  "Horsetail": "🐎",
  "Juniper": "🌲",
  "Maca": "🥔",
  "Meadowsweet": "🌼",
  "Mullein": "🧣",
  "Rhubarb": "🫨",
  "Slippery Elm": "🌳",
  "Skullcap": "🧢",
  "Ginkgo Biloba": "🍃",
  "Astragalus": "🧬",
  "Burdock Root": "🌾",
  "Red Clover": "🍀",
  "Plantain": "🍃",
  "Reishi Mushroom": "🍄",
  "Linden": "🌳",
  "Borage": "💙",
  "Cat's Claw": "🐱",
  "Chickweed": "🌱",
  "Fenugreek": "🌿",
  "Gentian": "💫",
  "Irish Moss": "🌊",
  "Jasmine": "👑",
  "Marshmallow Root": "🦷",
  "Parsley": "🌿",
  "Raspberry Leaf": "🍓",
  "Sarsaparilla": "🥤",
  "Shepherd's Purse": "👝",
  "Stevia": "🍬",
  "Uva Ursi": "🍇",
  "White Willow Bark": "🌳"
};

const colorVariants = [
  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800" },
  { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800" },
  { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-800" },
  { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-800" },
  { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800" },
  { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-800" },
];

interface HerbCardProps {
  herb: Herb;
  onClick: () => void;
}

const HerbCard = ({ herb, onClick }: HerbCardProps) => {
  // Generate a consistent color variant based on the herb's name
  const colorIndex = herb.name.charCodeAt(0) % colorVariants.length;
  const { bg, border, text } = colorVariants[colorIndex];

  // Get emoji for the herb, default to a generic herb emoji if not found
  const herbEmoji = herbEmojis[herb.name] || '🌿';
  
  // Check if the herb has special features to highlight
  const hasDetailedPreparation = herb.detailedPreparation && Object.keys(herb.detailedPreparation).length > 0;
  const hasConditions = herb.conditions && herb.conditions.length > 0;
  const hasCollections = herb.collections && herb.collections.length > 0;
  const hasWarnings = herb.warnings && herb.warnings.length > 0;
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer 
        ${bg} ${border} border relative`}
      onClick={onClick}
    >
      {/* Special badges for herbs with enhanced content */}
      <div className="absolute top-0 right-0 flex">
        {hasDetailedPreparation && (
          <div className="bg-blue-500 text-white text-[0.6rem] px-1 py-0.5 rounded-bl-md" title="Has detailed preparation instructions">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        {hasConditions && (
          <div className="bg-green-500 text-white text-[0.6rem] px-1 py-0.5" title="Has health conditions information">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        )}
        {hasWarnings && (
          <div className="bg-red-500 text-white text-[0.6rem] px-1 py-0.5 rounded-br-md" title="Has important warnings">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="relative aspect-square overflow-hidden flex items-center justify-center text-4xl p-2 group">
        <span className="transform transition-transform group-hover:scale-125">{herbEmoji}</span>
        {hasCollections && (
          <div className="absolute bottom-1 left-1 bg-purple-100 text-purple-800 text-[0.6rem] px-1.5 py-0.5 rounded-full border border-purple-200">
            Collection
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <h3 className={`font-serif text-base font-semibold ${text} flex items-center gap-1`}>
          {herb.name}
        </h3>
        <p className="mb-2 font-sans text-xs italic text-herb-600">
          {herb.scientificName}
        </p>
        <p className="line-clamp-2 mb-2 font-sans text-xs text-herb-700">
          {herb.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {herb.uses.slice(0, 2).map((use, index) => (
            <Badge 
              key={index} 
              className={`${bg} ${text} hover:opacity-80 text-[0.6rem] px-1.5 py-0.5`}
            >
              {use}
            </Badge>
          ))}
          {herb.uses.length > 2 && (
            <Badge className={`${bg} ${text} hover:opacity-80 text-[0.6rem] px-1.5 py-0.5`}>
              +{herb.uses.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HerbCard;
