
import { Heart, Brain, Coffee, Lungs, Flower, Droplet, Apple, Activity, User, UserFemale } from "lucide-react";

interface CategoryItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const HerbCategoryGuide = () => {
  const categories: CategoryItem[] = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "cardiovascular health and circulation",
      color: "bg-red-400",
    },
    {
      icon: <Apple className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "digestive function and gut health",
      color: "bg-emerald-500",
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "men's health and vitality",
      color: "bg-blue-400",
    },
    {
      icon: <UserFemale className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "women's health and hormonal balance",
      color: "bg-pink-400",
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "cognitive function and mental clarity",
      color: "bg-purple-400",
    },
    {
      icon: <Coffee className="h-6 w-6 text-white" />,
      title: "Traditional",
      description: "therapeutic tea blends and infusions",
      color: "bg-teal-400",
    },
    {
      icon: <Droplet className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "liver function and detoxification",
      color: "bg-green-400",
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "joint mobility, bone strength, and musculoskeletal health",
      color: "bg-cyan-500",
    },
    {
      icon: <Lungs className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "respiratory function and lung health",
      color: "bg-sky-400",
    },
    {
      icon: <Flower className="h-6 w-6 text-white" />,
      title: "Herbs that support",
      description: "skin health and healing",
      color: "bg-rose-400",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-4 font-serif text-xl font-semibold text-herb-700">Herb Category Color Guide</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 rounded-lg p-3 shadow-sm ${category.color} text-white`}
          >
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              {category.icon}
            </div>
            <div>
              <p className="text-xs font-medium">{category.title}</p>
              <p className="text-sm font-semibold">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerbCategoryGuide;
