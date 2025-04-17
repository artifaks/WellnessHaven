import React, { useState } from 'react';
import { ArrowLeft, Heart, Droplet, FileText, History, Leaf, BarChart, Plus } from 'lucide-react';
import { Herb } from "@/types";
import { Link } from "react-router-dom";

interface HerbDetailProps {
  herb: Herb;
  onClose: () => void;
}

const HerbDetail = ({ herb, onClose }: HerbDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get the appropriate icon color based on herb category
  const getCategoryColor = (category?: string) => {
    const lowerCategory = (category || '').toLowerCase();
    if (lowerCategory.includes('heart') || lowerCategory.includes('cardiovascular')) return 'bg-red-400';
    if (lowerCategory.includes('digest')) return 'bg-emerald-500';
    if (lowerCategory.includes('men')) return 'bg-blue-400';
    if (lowerCategory.includes('women')) return 'bg-pink-400';
    if (lowerCategory.includes('brain') || lowerCategory.includes('cognitive')) return 'bg-purple-400';
    if (lowerCategory.includes('tea') || lowerCategory.includes('infusion')) return 'bg-teal-400';
    if (lowerCategory.includes('liver') || lowerCategory.includes('detox')) return 'bg-green-400';
    if (lowerCategory.includes('joint') || lowerCategory.includes('bone')) return 'bg-cyan-500';
    if (lowerCategory.includes('respiratory') || lowerCategory.includes('lung')) return 'bg-sky-400';
    if (lowerCategory.includes('skin')) return 'bg-rose-400';
    return 'bg-herb-600'; // default
  };

  // Generate random benefit percentages for visualization
  const getBenefitPercentages = () => {
    return herb.benefits.map(benefit => {
      return {
        name: benefit,
        percentage: Math.floor(Math.random() * 30) + 60 // Random between 60-90%
      };
    });
  };

  // Create complementary herbs (using static data for example)
  const complementaryHerbs = [
    {
      name: "Ginger",
      description: `Ginger is a warming herb that enhances circulation and can complement ${herb.name}'s properties.`,
      color: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Elderberry",
      description: `Elderberry provides additional antiviral support and works synergistically with ${herb.name}.`,
      color: "bg-purple-100",
      textColor: "text-purple-600"
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

  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-white">
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
          <Leaf className="w-5 h-5 text-herb-600" />
          <span className="ml-1 text-herb-600 font-bold">{herb.name}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Herb Icon Circle */}
          <div className={`rounded-full ${getCategoryColor(herb.category)} w-24 h-24 flex items-center justify-center`}>
            <Leaf className="w-12 h-12 text-white" />
          </div>
          
          {/* Herb Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center mb-1 justify-center md:justify-start">
              <Heart className="w-4 h-4 text-herb-600 mr-1" />
              <span className="text-herb-600 text-sm">
                {herb.category || herb.uses[0]}
              </span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800 mb-1">{herb.name}</h1>
            <p className="text-gray-600 mb-4 italic text-sm">{herb.scientificName}</p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                <Heart className="w-4 h-4 mr-1" />
                <span>Save</span>
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print</span>
              </button>
              <button className="flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b mt-4 overflow-x-auto">
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-gray-800 border-b-2 border-herb-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'preparations' ? 'text-gray-800 border-b-2 border-herb-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('preparations')}
        >
          Preparations
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'history' ? 'text-gray-800 border-b-2 border-herb-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button 
          className={`px-6 py-3 font-medium ${activeTab === 'studies' ? 'text-gray-800 border-b-2 border-herb-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('studies')}
        >
          Scientific Studies
        </button>
      </div>
      
      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <div>
          <div className="flex flex-col md:flex-row gap-6 p-4">
            {/* Health Benefits */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-herb-600 mr-2" />
                <h2 className="text-lg font-bold text-gray-800">Health Benefits</h2>
              </div>
              
              <ul className="space-y-4">
                {herb.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-herb-600 mt-2 mr-2"></div>
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
                <BarChart className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-lg font-bold text-gray-800">Benefits Visualization</h2>
              </div>
              
              <div className="space-y-3">
                {getBenefitPercentages().map((benefit, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{benefit.name}</span>
                      <span>{benefit.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-herb-600 h-2.5 rounded-full" style={{width: `${benefit.percentage}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Traditional Uses */}
          <div className="mt-4 p-4">
            <div className="flex items-center mb-4">
              <History className="w-5 h-5 text-herb-600 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">Traditional Uses</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {herb.uses.map((use, index) => (
                <span key={index} className="bg-herb-100 text-herb-700 px-3 py-1 rounded-full text-sm">
                  {use}
                </span>
              ))}
            </div>
          </div>
          
          {/* Complementary Herbs */}
          <div className="mt-6 p-4">
            <div className="flex items-center mb-4">
              <Plus className="w-5 h-5 text-yellow-500 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">Complementary Herbs</h2>
            </div>
            
            <div className="space-y-4">
              {complementaryHerbs.map((complementaryHerb, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="flex p-3">
                    <div className={`w-12 h-12 ${complementaryHerb.color} rounded-lg flex items-center justify-center`}>
                      <Leaf className={`w-6 h-6 ${complementaryHerb.textColor}`} />
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h3 className="font-medium">{complementaryHerb.name} + {herb.name}</h3>
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
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Common Preparations</h2>
          
          <div className="space-y-4">
            {preparationMethods.map((method, index) => (
              <div key={index} className={`p-3 ${method.color} rounded-lg border ${method.borderColor}`}>
                <div className="flex items-center gap-2">
                  <div className={method.textColor}>
                    {method.icon}
                  </div>
                  <h4 className={`font-medium ${method.titleColor}`}>{method.name}</h4>
                </div>
                <p className={`${method.textColor} text-sm ml-8`}>{method.description}</p>
                <div className="ml-8 mt-2 text-gray-700 text-sm">
                  <p className="font-semibold">Steps:</p>
                  <ol className="list-decimal ml-5 mt-1">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-800 mb-2">Additional Preparation Information</h3>
              <p className="text-gray-700">{herb.preparation}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* History Tab Content */}
      {activeTab === 'history' && (
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Historical Use</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              {herb.name} has been used in traditional medicine for centuries. The historical uses of this herb 
              span across many cultures and time periods.
            </p>
            
            <div className="border-l-4 border-herb-300 pl-4 py-2 bg-herb-50">
              <h3 className="font-medium mb-2">Traditional Use</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {herb.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
            
            <div className="border-l-4 border-herb-300 pl-4 py-2 bg-herb-50">
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
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Scientific Research</h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Active Compounds</h3>
              <p className="text-gray-700 text-sm">
                Scientific research has identified various bioactive compounds in {herb.name} that 
                contribute to its medicinal properties.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Clinical Studies</h3>
              <p className="text-gray-700 text-sm">
                Recent clinical studies have shown promising results for the use of {herb.name} in 
                treating various conditions. Research continues to explore its full potential.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
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
      <div className="mt-6 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">External Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="border rounded-lg p-4 text-center hover:bg-gray-50">
            <span className="block text-blue-600">PubMed Research</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a href="#" className="border rounded-lg p-4 text-center hover:bg-gray-50">
            <span className="block text-blue-600">USDA Plant Database</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a href="#" className="border rounded-lg p-4 text-center hover:bg-gray-50">
            <span className="block text-blue-600">Examine.com</span>
            <svg className="w-4 h-4 text-blue-600 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-6 p-4 text-center text-sm text-gray-500">
        Always consult with a healthcare professional before starting any herbal regimen.
      </div>
    </div>
  );
};

export default HerbDetail;
