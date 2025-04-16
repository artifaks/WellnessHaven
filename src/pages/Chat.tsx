
import { useState, useRef, useEffect } from "react";
import { Send, HelpCircle, AlertCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChatMessage } from "@/types";
import { herbs } from "@/data/herbs";
import Layout from "@/components/Layout";

// Predefined common herbal questions
const suggestedQuestions = [
  "What herbs help with sleep?",
  "Which herbs can boost immunity?",
  "What are good herbs for digestion?",
  "How do I prepare an herbal tea?",
  "Which herbs help with stress and anxiety?",
];

// Simple herbal knowledge base
const herbKeywords: Record<string, string[]> = {
  sleep: ["valerian", "chamomile", "lavender", "passionflower"],
  anxiety: ["lavender", "chamomile", "ashwagandha", "lemon balm"],
  stress: ["ashwagandha", "holy basil", "lavender", "lemon balm"],
  immune: ["echinacea", "elderberry", "astragalus", "reishi"],
  immunity: ["echinacea", "elderberry", "astragalus", "reishi"],
  digestion: ["ginger", "peppermint", "fennel", "chamomile"],
  stomach: ["ginger", "peppermint", "fennel", "chamomile"],
  pain: ["turmeric", "ginger", "willow bark", "devil's claw"],
  inflammatory: ["turmeric", "ginger", "boswellia", "nettle"],
  inflammation: ["turmeric", "ginger", "boswellia", "nettle"],
  heart: ["hawthorn", "garlic", "motherwort", "ginkgo"],
  cardiovascular: ["hawthorn", "garlic", "motherwort", "ginkgo"],
  skin: ["calendula", "aloe vera", "tea tree", "chamomile"],
  energy: ["ginseng", "rhodiola", "green tea", "maca"],
  fatigue: ["ginseng", "rhodiola", "ashwagandha", "eleuthero"],
  depression: ["st. john's wort", "saffron", "lavender", "rhodiola"],
  mood: ["st. john's wort", "saffron", "lavender", "rhodiola"],
};

const generateHerbResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  // Check for general herb information requests
  const herbMatch = herbs.find(h => 
    lowerQuestion.includes(h.name.toLowerCase()) || 
    lowerQuestion.includes(h.scientificName.toLowerCase())
  );
  
  if (herbMatch) {
    return `**${herbMatch.name}** (${herbMatch.scientificName}) is commonly used for ${herbMatch.uses.join(", ")}. ${herbMatch.description} For preparation: ${herbMatch.preparation}`;
  }
  
  // Check for ailment or health concern
  for (const [concern, relatedHerbs] of Object.entries(herbKeywords)) {
    if (lowerQuestion.includes(concern)) {
      const herbsText = relatedHerbs.map(herb => {
        const herbData = herbs.find(h => h.name.toLowerCase() === herb.toLowerCase());
        if (herbData) {
          return `**${herbData.name}**: ${herbData.uses.join(", ")}`;
        }
        return `**${herb}**`;
      }).join("\n\n");
      
      return `For ${concern}, these herbs may be beneficial:\n\n${herbsText}\n\nAlways consult with a healthcare provider before starting any herbal regimen.`;
    }
  }
  
  // Check for preparation questions
  if (lowerQuestion.includes("prepare") || lowerQuestion.includes("tea") || lowerQuestion.includes("tincture")) {
    return "To prepare herbal teas, typically use 1-2 teaspoons of dried herb per cup of hot water and steep for 5-15 minutes.\n\nFor tinctures, a common ratio is 1:5 (herb to liquid) with 25-40% alcohol, steeped for 2-6 weeks. Always research specific herbs as preparation methods can vary significantly.\n\nWould you like information about a specific herb's preparation?";
  }
  
  // Check for safety questions
  if (lowerQuestion.includes("safe") || lowerQuestion.includes("side effect") || lowerQuestion.includes("warning")) {
    return "Herbal remedies, while natural, can have contraindications and side effects. Some herbs may interact with medications or be unsuitable for certain conditions like pregnancy or liver disease.\n\nAlways consult with a qualified healthcare provider before starting any herbal regimen, especially if you have existing health conditions or take medications.\n\nCan I provide information about a specific herb's safety profile?";
  }
  
  // Fallback response
  return "I'm a simple herbal assistant with limited knowledge. I can provide basic information about common medicinal herbs, their uses, and preparation methods. Can you clarify your question about herbs or wellness? You might try asking about specific herbs or health concerns.";
};

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      content: "Welcome to Herbal Chat! I'm here to answer your questions about medicinal herbs and natural wellness. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Simple unique ID generator
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: ChatMessage = {
      id: generateId(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: generateId(),
        content: generateHerbResponse(userMessage.content),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-col px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Herbal Chat
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Ask questions about herbs and wellness
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar with Information and Suggested Questions */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-herb-100/70 p-5 shadow-sm">
              <h2 className="mb-4 font-serif text-xl font-semibold text-herb-700">
                About Herbal Chat
              </h2>
              <p className="mb-4 font-sans text-sm text-herb-600">
                Our simple AI assistant can help answer basic questions about medicinal herbs, 
                their uses, and preparations.
              </p>
              
              <Alert className="mb-4 bg-lavender-100/70 text-lavender-800">
                <HelpCircle className="h-4 w-4" />
                <AlertTitle className="font-serif">Try asking about:</AlertTitle>
                <AlertDescription className="font-sans text-sm">
                  <ul className="mt-2 list-inside list-disc">
                    <li>Specific herbs and their uses</li>
                    <li>Herbs for common ailments</li>
                    <li>Basic preparation methods</li>
                    <li>General herbal safety</li>
                  </ul>
                </AlertDescription>
              </Alert>
              
              <div>
                <h3 className="mb-2 font-serif text-sm font-medium text-herb-700">
                  Suggested Questions:
                </h3>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-herb-300 bg-white font-sans text-sm text-herb-700 hover:bg-herb-200/50"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <Alert className="mt-6 bg-herb-50 text-herb-700">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="font-serif">Health Disclaimer</AlertTitle>
              <AlertDescription className="font-sans text-xs">
                Information provided is for educational purposes only and is not intended as medical advice. 
                Always consult with a healthcare provider before using herbal remedies.
              </AlertDescription>
            </Alert>
          </div>
          
          {/* Chat Interface */}
          <div className="flex h-[600px] flex-col rounded-xl bg-white shadow-sm lg:col-span-3">
            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.isUser
                          ? "bg-herb-600 text-white"
                          : "bg-herb-100 text-herb-800"
                      }`}
                    >
                      {!message.isUser && (
                        <div className="mb-1 flex items-center">
                          <Leaf className="mr-1 h-4 w-4 text-herb-600" />
                          <span className="font-sans text-xs font-semibold text-herb-700">
                            Herbal Assistant
                          </span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap font-sans">
                        {message.content.split('\n').map((line, i) => {
                          // Handle bold text marked with **
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={i} className="mb-1">
                              {parts.map((part, j) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  const text = part.slice(2, -2);
                                  return <strong key={j}>{text}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>
                      <div
                        className={`mt-1 text-right font-sans text-xs ${
                          message.isUser ? "text-herb-100" : "text-herb-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl bg-herb-100 px-4 py-3 text-herb-800">
                      <div className="mb-1 flex items-center">
                        <Leaf className="mr-1 h-4 w-4 text-herb-600" />
                        <span className="font-sans text-xs font-semibold text-herb-700">
                          Herbal Assistant
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500" style={{ animationDelay: "0.2s" }}></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t border-herb-200 p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question about herbs..."
                  className="font-sans placeholder:text-herb-400 focus-visible:ring-herb-500"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-herb-600 text-white hover:bg-herb-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
