
import { useState, useRef, useEffect } from "react";
import { Send, HelpCircle, AlertCircle, Leaf, Download, Trash2, History, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChatMessage } from "@/types";
import { herbs } from "@/data/herbs";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { getHerbalResponse } from "@/services/openai";

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

// Type for chat history logs
interface ChatHistoryLog {
  id: string;
  question: string;
  response: string;
  created_at: string;
  user_id: string | null;
}

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
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [chatHistory, setChatHistory] = useState<ChatHistoryLog[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  // Load user session
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserId(session.user.id);
      }
    };
    
    checkUser();
  }, []);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Load chat history when tab changes to history
  useEffect(() => {
    if (activeTab === 'history' && userId) {
      loadChatHistory();
    }
  }, [activeTab, userId]);
  
  // Load chat history from Supabase
  const loadChatHistory = async () => {
    if (!userId) return;
    
    setIsLoadingHistory(true);
    try {
      const { data, error } = await supabase
        .from('herbal_chat_logs')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      if (data) {
        setChatHistory(data as ChatHistoryLog[]);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      toast.error('Failed to load your chat history');
    } finally {
      setIsLoadingHistory(false);
    }
  };
  
  // Simple unique ID generator
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  // Log chat to Supabase for analytics and history
  const logChatToSupabase = async (question: string, response: string) => {
    try {
      await supabase
        .from('herbal_chat_logs')
        .insert({
          question,
          response,
          user_id: userId
        });
    } catch (error) {
      console.error('Error logging chat:', error);
    }
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
    
    try {
      // Get response from OpenAI
      const response = await getHerbalResponse(userMessage.content);
      
      const botResponse: ChatMessage = {
        id: generateId(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      
      // Log chat to Supabase
      logChatToSupabase(userMessage.content, response);
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Fallback to local response if OpenAI fails
      const fallbackResponse = generateHerbResponse(userMessage.content);
      
      const botResponse: ChatMessage = {
        id: generateId(),
        content: fallbackResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      toast.error('Had trouble connecting to AI. Using local response instead.');
      
      // Still log the interaction
      logChatToSupabase(userMessage.content, fallbackResponse);
    } finally {
      setIsTyping(false);
    }
  };
  
  // Export chat as text file
  const exportChat = () => {
    if (messages.length <= 1) {
      toast.error('No conversation to export yet');
      return;
    }
    
    const chatText = messages.map(msg => 
      `${msg.isUser ? 'You' : 'Herbal Assistant'} (${format(new Date(msg.timestamp), 'MMM d, yyyy h:mm a')}):\n${msg.content}\n`
    ).join('\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `herbal-chat-${format(new Date(), 'yyyy-MM-dd')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Chat exported successfully');
  };
  
  // Clear current chat
  const clearChat = () => {
    setMessages([{
      id: "welcome",
      content: "Welcome to Herbal Chat! I'm here to answer your questions about medicinal herbs and natural wellness. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    }]);
    toast.success('Chat cleared');
  };
  
  // Load a previous Q&A pair from history
  const loadFromHistory = (historyItem: ChatHistoryLog) => {
    // Add the question as a user message
    const userMessage: ChatMessage = {
      id: generateId(),
      content: historyItem.question,
      isUser: true,
      timestamp: new Date(),
    };
    
    // Add the response as a bot message
    const botResponse: ChatMessage = {
      id: generateId(),
      content: historyItem.response,
      isUser: false,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setActiveTab('chat');
    toast.success('Added previous conversation to chat');
  };
  
  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-col px-4 py-8 md:px-6">
        <div className="mb-6 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Herbal Chat
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Ask questions about herbs and wellness
          </p>
        </div>
        
        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-4 flex items-center justify-between">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span>Chat</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                <span>History</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={clearChat}
                      disabled={messages.length <= 1}
                      className="h-9 w-9 border-herb-300 text-herb-700 hover:bg-herb-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clear chat</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={exportChat}
                      disabled={messages.length <= 1}
                      className="h-9 w-9 border-herb-300 text-herb-700 hover:bg-herb-100"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Export chat</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar with Information and Suggested Questions */}
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-herb-100/70 p-6 shadow-sm">
                <h2 className="mb-3 font-serif text-xl font-semibold text-herb-800">
                  About Herbal Chat
                </h2>
                <p className="mb-5 font-sans text-base text-herb-700">
                  Our AI assistant can help answer questions about medicinal herbs, 
                  their uses, and preparations.
                </p>
                
                <Alert className="mb-5 bg-lavender-100/50 border-lavender-200 text-lavender-800">
                  <HelpCircle className="h-5 w-5 text-lavender-600" />
                  <AlertTitle className="font-serif text-base font-medium">Try asking about:</AlertTitle>
                  <AlertDescription className="font-sans text-sm">
                    <ul className="mt-2 ml-5 space-y-1 list-disc">
                      <li>Specific herbs and their uses</li>
                      <li>Herbs for common ailments</li>
                      <li>Basic preparation methods</li>
                      <li>General herbal safety</li>
                    </ul>
                  </AlertDescription>
                </Alert>
                
                <div>
                  <h3 className="mb-3 font-serif text-base font-medium text-herb-800 border-b border-herb-200 pb-2">
                    Suggested Questions:
                  </h3>
                  <div className="space-y-3 mt-4">
                    {suggestedQuestions.map((question, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="lg"
                        className="w-full justify-start text-left border-herb-200 bg-white font-sans text-base text-herb-700 hover:bg-herb-50 hover:border-herb-300 py-4 px-5 h-auto whitespace-normal break-words leading-normal overflow-hidden"
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        <span className="line-clamp-2">{question}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <Alert className="mt-6 bg-herb-50/80 border-herb-200 text-herb-700">
                <AlertCircle className="h-5 w-5 text-herb-500" />
                <AlertTitle className="font-serif text-base font-medium">Health Disclaimer</AlertTitle>
                <AlertDescription className="font-sans text-sm">
                  Information provided is for educational purposes only and is not intended as medical advice. 
                  Always consult with a healthcare provider before using herbal remedies.
                </AlertDescription>
              </Alert>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <TabsContent value="chat" className="mt-0">
                {/* Chat Interface */}
                <div className="flex h-[600px] flex-col rounded-xl bg-white shadow-sm">
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
                                {message.content.includes('Had trouble connecting to AI') ? (
                                  <Leaf className="mr-1 h-4 w-4 text-herb-600" />
                                ) : (
                                  <Sparkles className="mr-1 h-4 w-4 text-herb-600" />
                                )}
                                <span className="font-sans text-xs font-semibold text-herb-700">
                                  Herbal Assistant
                                </span>
                                {!message.content.includes('Had trouble connecting to AI') && (
                                  <Badge variant="outline" className="ml-2 bg-herb-50 px-1 py-0 text-[10px] text-herb-600">
                                    AI-powered
                                  </Badge>
                                )}
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
                              <Sparkles className="mr-1 h-4 w-4 text-herb-600" />
                              <span className="font-sans text-xs font-semibold text-herb-700">
                                Herbal Assistant
                              </span>
                              <Badge variant="outline" className="ml-2 bg-herb-50 px-1 py-0 text-[10px] text-herb-600">
                                AI-powered
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500"></div>
                                <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500" style={{ animationDelay: "0.2s" }}></div>
                                <div className="h-2 w-2 animate-bounce rounded-full bg-herb-500" style={{ animationDelay: "0.4s" }}></div>
                              </div>
                              <span className="font-sans text-xs text-herb-500">Thinking about herbs...</span>
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
              </TabsContent>
              
              <TabsContent value="history" className="mt-0">
                <div className="h-[600px] rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-serif text-xl font-semibold text-herb-700">Your Chat History</h2>
                    <Badge variant="outline" className="bg-herb-50 text-herb-600">
                      {chatHistory.length} conversations
                    </Badge>
                  </div>
                  
                  {isLoadingHistory ? (
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="rounded-lg border border-herb-100 p-4">
                          <div className="mb-2 flex justify-between">
                            <Skeleton className="h-4 w-1/3" />
                            <Skeleton className="h-4 w-1/4" />
                          </div>
                          <Skeleton className="mb-2 h-12 w-full" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      ))}
                    </div>
                  ) : chatHistory.length === 0 ? (
                    <div className="flex h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-herb-200 p-8 text-center">
                      <Search className="mb-4 h-12 w-12 text-herb-300" />
                      <h3 className="mb-2 font-serif text-lg font-medium text-herb-700">No chat history yet</h3>
                      <p className="font-sans text-sm text-herb-500">
                        Your conversations will appear here once you start chatting with the Herbal Assistant.
                      </p>
                    </div>
                  ) : (
                    <div className="max-h-[500px] space-y-4 overflow-y-auto pr-2">
                      {chatHistory.map((item) => (
                        <div key={item.id} className="rounded-lg border border-herb-100 p-4 transition-colors hover:border-herb-200 hover:bg-herb-50/50">
                          <div className="mb-2 flex items-center justify-between">
                            <h3 className="font-serif font-medium text-herb-800 line-clamp-1">
                              {item.question}
                            </h3>
                            <span className="font-sans text-xs text-herb-500">
                              {format(new Date(item.created_at), 'MMM d, yyyy')}
                            </span>
                          </div>
                          <p className="mb-3 font-sans text-sm text-herb-600 line-clamp-2">
                            {item.response}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-2 border-herb-300 text-herb-700 hover:bg-herb-100"
                            onClick={() => loadFromHistory(item)}
                          >
                            <Leaf className="mr-2 h-3 w-3" />
                            Add to current chat
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Chat;
