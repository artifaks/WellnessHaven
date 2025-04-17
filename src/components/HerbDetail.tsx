import React, { useState } from 'react';
import { ArrowLeft, Heart, Droplet, FileText, History, Leaf, BarChart, Plus, Clock, Share, Printer, Bookmark } from 'lucide-react';
import { Herb } from "@/types";
import { Badge } from "@/components/ui/badge";

interface HerbDetailProps {
  herb: Herb;
  onClose: () => void;
}

const HerbDetail = ({ herb, onClose }: HerbDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get the appropriate icon color based on herb category
  const getCategoryColor = (category?: string) => {
    const lowerCategory = (category || '').toLowerCase();
    if (lowerCategory.includes('heart') || lowerCategory.includes('cardiovascular')) return 'bg-red-600';
    if (lowerCategory.includes('digest')) return 'bg-emerald-600';
    if (lowerCategory.includes('men')) return 'bg-blue-600';
    if (lowerCategory.includes('women')) return 'bg-pink-600';
    if (lowerCategory.includes('brain') || lowerCategory.includes('cognitive')) return 'bg-purple-600';
    if (lowerCategory.includes('tea') || lowerCategory.includes('infusion')) return 'bg-teal-600';
    if (lowerCategory.includes('liver') || lowerCategory.includes('detox')) return 'bg-green-600';
    if (lowerCategory.includes('joint') || lowerCategory.includes('bone')) return 'bg-cyan-600';
    if (lowerCategory.includes('respiratory') || lowerCategory.includes('lung')) return 'bg-sky-600';
    if (lowerCategory.includes('skin')) return 'bg-rose-600';
    return 'bg-herb-600'; // default
  };

  const categoryColor = getCategoryColor(herb.category);
  const categoryBgLight = categoryColor.replace('600', '100');
  const categoryTextColor = categoryColor.replace('bg-', 'text-').replace('600', '700');

  // Generate benefit percentages for visualization
  const getBenefitPercentages = () => {
    const basePercentages = {
      "Reduces stress": 61,
      "Supports energy": 86,
      "Hormonal balance": 72,
      "Immune support": 78,
      "Digestive health": 65,
      "Cognitive function": 83,
      "Mood support": 69,
      "Anti-inflammatory": 76,
      "Antioxidant": 81,
      "Sleep quality": 73,
    };

    return herb.benefits.map(benefit => {
      // Check if we have a predefined percentage for this benefit
      const knownPercentage = Object.entries(basePercentages).find(
        ([key]) => key.toLowerCase() === benefit.toLowerCase()
      );
      
      // Use the known percentage or generate a random one between 60-95%
      const percentage = knownPercentage 
        ? knownPercentage[1] 
        : Math.floor(Math.random() * 35) + 60;
        
      return {
        name: benefit,
        percentage: percentage
      };
    });
  };

  // Create complementary herbs with more vibrant colors
  const complementaryHerbs = [
    {
      name: "Ginger",
      description: `Ginger is a warming herb that enhances circulation and can complement ${herb.name}'s properties.`,
      color: "bg-green-100",
      textColor: "text-green-700",
      iconBg: "bg-green-600",
      iconColor: "text-white"
    },
    {
      name: "Elderberry",
      description: `Elderberry provides additional antiviral support and works synergistically with ${herb.name}.`,
      color: "bg-purple-100",
      textColor: "text-purple-700",
      iconBg: "bg-purple-600",
      iconColor: "text-white"
    }
  ];

  // Format preparation methods
  const preparationMethods = [
    {
      name: "Decoction",
      description: "Traditional herbal preparation",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-50",
      borderColor: "border-green-100",
      textColor: "text-green-700",
      titleColor: "text-green-800",
      steps: [
        `Add 1-2 teaspoons of dried ${herb.name.toLowerCase()} to 2 cups of cold water`,
        "Bring to a boil, then reduce heat to simmer",
        "Simmer gently for 15-20 minutes with lid on",
        "Strain and drink 1 cup up to 3 times daily"
      ]
    },
    {
      name: "Tincture",
      description: "Herb extracted in alcohol solution",
      icon: <Droplet className="w-6 h-6" />,
      color: "bg-purple-50",
      borderColor: "border-purple-100",
      textColor: "text-purple-700",
      titleColor: "text-purple-800",
      steps: [
        "Fill a jar 1/3 to 1/2 with dried herb",
        "Cover completely with 80-proof vodka or alcohol",
        "Seal and store in a dark place for 4-6 weeks, shaking daily",
        "Strain through cheesecloth and store in dark bottles",
        "Take 1/4 to 1 teaspoon up to 3 times daily"
      ]
    },
    {
      name: "Capsules",
      description: "Powdered herb in gelatin or vegetable capsules",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-50",
      borderColor: "border-blue-100",
      textColor: "text-blue-700",
      titleColor: "text-blue-800",
      steps: [
        "Typically 300-500mg capsules",
        "Take 1-2 capsules 2-3 times daily",
        "Follow package instructions for specific products",
        "Best taken with meals to prevent stomach upset"
      ]
    }
  ];

  const herbCategory = herb.category || herb.uses[0];

  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
      {/* Navigation Bar */}
      <div className="flex items-center p-4 border-b">
        <button 
          onClick={onClose} 
          className="flex items-center hover:text-herb-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
          <span className="ml-2 text-gray-600">Back to Encyclopedia</span>
        </button>
        <div className="ml-auto flex items-center">
          <Leaf className={`w-5 h-5 ${categoryTextColor}`} />
          <span className={`ml-1 ${categoryTextColor} font-bold`}>{herb.name}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className={`${categoryBgLight} p-6 rounded-t-lg bg-opacity-50`}>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Herb Icon Circle */}
          <div className={`rounded-full ${categoryColor} w-24 h-24 flex items-center justify-center shadow-md`}>
            <Leaf className="w-12 h-12 text-white" />
          </div>
          
          {/* Herb Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center mb-1 justify-center md:justify-start">
              <Badge className={`${categoryBgLight} ${categoryTextColor} border-none`}>
                {herbCategory}
              </Badge>
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-1">{herb.name}</h1>
            <p className="text-gray-600 mb-4 italic text-sm">{herb.scientificName}</p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button className="flex items-center px-3 py-1.5 rounded-full bg-white shadow-sm text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                <Bookmark className="w-4 h-4 mr-1" />
                <span>Save</span>
              </button>
              <button className="flex items-center px-3 py-1.5 rounded-full bg-white shadow-sm text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                <Printer className="w-4 h-4 mr-1" />
                <span>Print</span>
              </button>
              <button className="flex items-center px-3 py-1.5 rounded-full bg-white shadow-sm text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                <Share className="w-4 h-4 mr-1" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b overflow-x-auto">
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'overview' ? `text-gray-800 border-b-2 ${categoryColor.replace('bg-', 'border-')}` : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'preparations' ? `text-gray-800 border-b-2 ${categoryColor.replace('bg-', 'border-')}` : 'text-gray-500'}`}
          onClick={() => setActiveTab('preparations')}
        >
          Preparations
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'history' ? `text-gray-800 border-b-2 ${categoryColor.replace('bg-', 'border-')}` : 'text-gray-500'}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'studies' ? `text-gray-800 border-b-2 ${categoryColor.replace('bg-', 'border-')}` : 'text-gray-500'}`}
          onClick={() => setActiveTab('studies')}
        >
          Scientific Studies
        </button>
      </div>
      
      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <div>
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Health Benefits */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <Heart className={`w-5 h-5 ${categoryTextColor} mr-2`} />
                <h2 className="text-lg font-bold text-gray-800">Health Benefits</h2>
              </div>
              
              <ul className="space-y-3">
                {herb.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full ${categoryColor} mt-2 mr-2`}></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <p className="text-gray-700">{herb.description}</p>
              </div>
            </div>
            
            {/* Benefits Visualization */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <BarChart className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-bold text-gray-800">Benefits Visualization</h2>
              </div>
              
              <div className="space-y-4">
                {getBenefitPercentages().map((benefit, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{benefit.name}</span>
                      <span className="font-medium">{benefit.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${categoryColor} h-2.5 rounded-full`} 
                        style={{width: `${benefit.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Traditional Uses */}
          <div className="mt-2 p-6 bg-gray-50">
            <div className="flex items-center mb-4">
              <History className={`w-5 h-5 ${categoryTextColor} mr-2`} />
              <h2 className="text-lg font-bold text-gray-800">Traditional Uses</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {herb.uses.map((use, index) => (
                <Badge 
                  key={index} 
                  className={`${categoryBgLight} ${categoryTextColor} hover:${categoryBgLight} px-3 py-1.5`}
                >
                  {use}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Complementary Herbs */}
          <div className="mt-2 p-6">
            <div className="flex items-center mb-4">
              <Plus className="w-5 h-5 text-amber-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">Complementary Herbs</h2>
            </div>
            
            <div className="space-y-4">
              {complementaryHerbs.map((complementaryHerb, index) => (
                <div key={index} className={`border rounded-lg overflow-hidden ${complementaryHerb.color} border-transparent shadow-sm`}>
                  <div className="flex p-4">
                    <div className={`w-12 h-12 ${complementaryHerb.iconBg} rounded-lg flex items-center justify-center shadow-sm`}>
                      <Leaf className={`w-6 h-6 ${complementaryHerb.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className={`font-medium ${complementaryHerb.textColor}`}>
                          {complementaryHerb.name} + {herb.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {complementaryHerb.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Preparations Tab Content */}
      {activeTab === 'preparations' && (
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Common Preparations</h2>
          
          <div className="space-y-4">
            {preparationMethods.map((method, index) => (
              <div key={index} className={`p-4 ${method.color} rounded-lg border ${method.borderColor} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <div className={`${method.textColor} bg-white p-2 rounded-full shadow-sm`}>
                    {method.icon}
                  </div>
                  <h4 className={`font-medium ${method.titleColor}`}>{method.name}</h4>
                </div>
                <p className={`${method.textColor} text-sm ml-10`}>{method.description}</p>
                <div className="ml-10 mt-3 text-gray-700 text-sm">
                  <p className="font-semibold">Steps:</p>
                  <ol className="list-decimal ml-5 mt-1 space-y-1">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Additional Preparation Information</h3>
              <p className="text-gray-700">{herb.preparation}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* History Tab Content */}
      {activeTab === 'history' && (
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Historical Use</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              {herb.name} has been used in traditional medicine for centuries. The historical uses of this herb 
              span across many cultures and time periods.
            </p>
            
            <div className={`border-l-4 ${categoryColor.replace('bg-', 'border-')} pl-4 py-3 ${categoryBgLight} rounded-r-lg`}>
              <h3 className="font-medium mb-2">Traditional Use</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {herb.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
            
            <div className={`border-l-4 ${categoryColor.replace('bg-', 'border-')} pl-4 py-3 ${categoryBgLight} rounded-r-lg`}>
              <h3 className="font-medium mb-2">Cultural Significance</h3>
              <p className="text-gray-700">
                Throughout history, {herb.name} has been valued for its medicinal properties and used in various 
                traditional healing systems around the world.
              </p>
            </div>
          </div>
        </div>  
      )}
      
      {/* Scientific Studies Tab Content */}
      {activeTab === 'studies' && (
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Scientific Research</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-2">Active Compounds</h3>
              <p className="text-gray-700 text-sm">
                Scientific research has identified various bioactive compounds in {herb.name} that 
                contribute to its medicinal properties.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-2">Clinical Studies</h3>
              <p className="text-gray-700 text-sm">
                Recent clinical studies have shown promising results for the use of {herb.name} in 
                treating various conditions. Research continues to explore its full potential.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-100 shadow-sm">
              <h3 className="font-medium text-blue-800 mb-2">Mechanism of Action</h3>
              <p className="text-gray-700 text-sm">
                The therapeutic effects of {herb.name} are believed to work through multiple mechanisms, 
                including anti-inflammatory, antimicrobial, and antioxidant pathways.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* External Resources */}
      <div className="mt-2 p-6 bg-gray-50 rounded-b-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-4">External Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="bg-white border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors shadow-sm">
            <span className="block text-blue-600 font-medium">PubMed Research</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a href="#" className="bg-white border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors shadow-sm">
            <span className="block text-blue-600 font-medium">USDA Plant Database</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a href="#" className="bg-white border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors shadow-sm">
            <span className="block text-blue-600 font-medium">Examine.com</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-2 p-4 text-center text-sm text-gray-500 border-t">
        Always consult with a healthcare professional before starting any herbal regimen.
      </div>
    </div>
  );
};

export default HerbDetail;
