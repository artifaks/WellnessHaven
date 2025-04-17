
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
  // Add more mappings as needed
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
      <div className="relative aspect-square overflow-hidden flex items-center justify-center text-6xl p-4">
        <span>{herbEmoji}</span>
      </div>
      <CardContent className="p-4">
        <h3 className={`font-serif text-xl font-semibold ${text} flex items-center gap-2`}>
          {herb.name}
        </h3>
        <p className="mb-3 font-sans text-sm italic text-herb-600">
          {herb.scientificName}
        </p>
        <p className="line-clamp-2 mb-3 font-sans text-sm text-herb-700">
          {herb.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {herb.uses.slice(0, 3).map((use, index) => (
            <Badge 
              key={index} 
              className={`${bg} ${text} hover:opacity-80`}
            >
              {use}
            </Badge>
          ))}
          {herb.uses.length > 3 && (
            <Badge className={`${bg} ${text} hover:opacity-80`}>
              +{herb.uses.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HerbCard;
