
import { ArrowLeft, BookOpen } from "lucide-react";
import { Herb } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HerbDetailProps {
  herb: Herb;
  onClose: () => void;
}

const HerbDetail = ({ herb, onClose }: HerbDetailProps) => {
  return (
    <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-md">
      <div className="flex flex-col lg:flex-row">
        {/* Herb Image */}
        <div className="relative aspect-square w-full lg:w-1/3">
          <img
            src={herb.imageUrl}
            alt={herb.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Herb Information */}
        <div className="flex-1 p-6 lg:p-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="mb-4 text-herb-600 hover:bg-herb-100 hover:text-herb-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to all herbs
          </Button>

          <h2 className="font-serif text-3xl font-bold text-herb-800">
            {herb.name}
          </h2>
          <p className="mt-1 font-sans text-lg italic text-herb-600">
            {herb.scientificName}
          </p>

          <div className="mt-6">
            <h3 className="font-serif text-xl font-semibold text-herb-700">
              Description
            </h3>
            <p className="mt-2 font-sans text-herb-600">
              {herb.description}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-xl font-semibold text-herb-700">
              Traditional Uses
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {herb.uses.map((use, index) => (
                <Badge 
                  key={index} 
                  className="bg-herb-100 text-herb-700 hover:bg-herb-200"
                >
                  {use}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-xl font-semibold text-herb-700">
              Preparation
            </h3>
            <p className="mt-2 font-sans text-herb-600">
              {herb.preparation}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-xl font-semibold text-herb-700">
              Benefits
            </h3>
            <ul className="mt-2 list-inside list-disc font-sans text-herb-600">
              {herb.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-herb-100 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-sans text-sm text-herb-500">
                Note: This information is for educational purposes only and is not intended as medical advice.
              </p>
              <Button 
                asChild 
                className="bg-lavender-600 text-white hover:bg-lavender-700"
              >
                <Link to="/chat" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn more in Herbal Chat
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbDetail;
