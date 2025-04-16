
import { Herb } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HerbCardProps {
  herb: Herb;
  onClick: () => void;
}

const HerbCard = ({ herb, onClick }: HerbCardProps) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-md"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={herb.imageUrl}
          alt={herb.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-xl font-semibold text-herb-800">
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
              className="bg-herb-100 text-herb-700 hover:bg-herb-200"
            >
              {use}
            </Badge>
          ))}
          {herb.uses.length > 3 && (
            <Badge className="bg-herb-100 text-herb-700 hover:bg-herb-200">
              +{herb.uses.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HerbCard;
