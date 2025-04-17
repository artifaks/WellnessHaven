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
  "Linden": "🌳"
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

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer 
        ${bg} ${border} border`}
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden flex items-center justify-center text-4xl p-2">
        <span>{herbEmoji}</span>
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
