
import { useState, useEffect } from "react";
import { BookOpen, ChevronRight, Tag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Ebook } from "@/types";
import Layout from "@/components/Layout";
import CheckoutButton from "@/components/stripe/CheckoutButton";
import { toast } from "sonner";

// Import Stripe Elements
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/integrations/stripe/config";

// Import the ebooks service
import { fetchEbooks, fetchEbooksByCategory } from "@/services/ebooks";

const EbooksContent = () => {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Fetch ebooks from Supabase when component mounts
  useEffect(() => {
    const loadEbooks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEbooks();
        setEbooks(data);
        
        // Extract unique categories from the ebooks
        const uniqueCategories = Array.from(
          new Set(data.flatMap((ebook) => ebook.tags))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error loading ebooks:', error);
        toast.error('Failed to load ebooks. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadEbooks();
  }, []);
  
  // Function to load ebooks by category
  const loadEbooksByCategory = async (category: string) => {
    if (category === 'all') {
      const data = await fetchEbooks();
      setEbooks(data);
      return;
    }
    
    const data = await fetchEbooksByCategory(category);
    setEbooks(data);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setIsLoading(true);
    loadEbooksByCategory(category)
      .catch(error => {
        console.error('Error loading ebooks by category:', error);
        toast.error('Failed to load ebooks for this category.');
      })
      .finally(() => setIsLoading(false));
  };
  
  const openEbookDetail = (ebook: Ebook) => {
    setSelectedEbook(ebook);
  };

  const handlePurchase = (ebook: Ebook) => {
    // This function is now handled by the CheckoutButton component
    toast.info(`Preparing checkout for "${ebook.title}"...`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Herbal Wisdom Ebooks
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Explore our collection of premium ebooks on medicinal herbs and wellness
          </p>
        </div>

        {/* Featured Ebooks Section */}
        <section className="mb-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-herb-700">
            Featured Ebooks
          </h2>
          
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <div className="flex flex-col items-center">
                <Loader2 className="mb-2 h-8 w-8 animate-spin text-herb-600" />
                <p className="text-herb-600">Loading featured ebooks...</p>
              </div>
            </div>
          ) : ebooks.length === 0 ? (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-herb-600">No ebooks available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ebooks.slice(0, 3).map((ebook) => (
                <Card 
                  key={ebook.id} 
                  className="overflow-hidden shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={ebook.imageUrl}
                      alt={ebook.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="font-serif text-xl font-semibold">{ebook.title}</p>
                      <p className="font-sans text-sm">{ebook.author}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="mb-3 line-clamp-2 font-sans text-sm text-herb-700">
                      {ebook.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {ebook.tags.slice(0, 2).map((tag, index) => (
                        <Badge 
                          key={index} 
                          className="bg-herb-100 text-herb-700 hover:bg-herb-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium text-herb-800">
                        ${ebook.price.toFixed(2)}
                      </span>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => openEbookDetail(ebook)}
                          className="text-herb-600 hover:bg-herb-50 hover:text-herb-700"
                        >
                          <BookOpen className="mr-1 h-4 w-4" />
                          Details
                        </Button>
                        <CheckoutButton 
                          ebook={ebook}
                          size="sm" 
                          className="bg-herb-600 text-white hover:bg-herb-700"
                        >
                          Buy
                        </CheckoutButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-herb-300 text-herb-700 hover:bg-herb-100"
              onClick={() => document.getElementById("all-ebooks")?.scrollIntoView({ behavior: "smooth" })}
            >
              View All Ebooks
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Browse by Category Section */}
        <section id="all-ebooks" className="mb-12 scroll-mt-20">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-herb-700">
            Browse by Category
          </h2>
          
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="mb-6 flex w-full justify-start overflow-x-auto bg-herb-100">
              <TabsTrigger value="all" className="font-sans">All Ebooks</TabsTrigger>
              {categories.slice(0, 5).map((category) => (
                <TabsTrigger key={category} value={category} className="font-sans">
                  {typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : category}
                </TabsTrigger>
              ))}
            </TabsList>

            {isLoading ? (
              <div className="flex h-64 w-full items-center justify-center">
                <div className="flex flex-col items-center">
                  <Loader2 className="mb-2 h-8 w-8 animate-spin text-herb-600" />
                  <p className="text-herb-600">Loading ebooks...</p>
                </div>
              </div>
            ) : ebooks.length === 0 ? (
              <div className="flex h-64 w-full items-center justify-center">
                <p className="text-herb-600">No ebooks found. Please check back later.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ebooks.map((ebook) => (
                  <Card 
                    key={ebook.id} 
                    className="overflow-hidden shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={ebook.imageUrl}
                        alt={ebook.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-1 font-serif text-lg font-semibold text-herb-800 line-clamp-1">
                        {ebook.title}
                      </h3>
                      <p className="mb-2 font-sans text-sm text-herb-600">
                        {ebook.author}
                      </p>
                      <p className="mb-3 line-clamp-2 font-sans text-xs text-herb-700">
                        {ebook.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-medium text-herb-800">
                          ${ebook.price.toFixed(2)}
                        </span>
                        <Button 
                          size="sm" 
                          onClick={() => openEbookDetail(ebook)}
                          className="bg-herb-600 text-white hover:bg-herb-700"
                        >
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </Tabs>
        </section>

        {/* Ebook Detail Dialog */}
        <Dialog open={!!selectedEbook} onOpenChange={(open) => !open && setSelectedEbook(null)}>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
            {selectedEbook && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-herb-800">{selectedEbook.title}</DialogTitle>
                  <DialogDescription className="font-sans text-herb-600">
                    By {selectedEbook.author}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-6 pt-2 md:grid-cols-2">
                  <div className="aspect-[3/4] overflow-hidden rounded-md">
                    <img
                      src={selectedEbook.imageUrl}
                      alt={selectedEbook.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-herb-700">Description</h3>
                      <p className="font-sans text-herb-600">{selectedEbook.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-herb-700">Tags</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {selectedEbook.tags.map((tag, index) => (
                          <Badge 
                            key={index}
                            className="bg-herb-100 font-sans text-herb-700"
                          >
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between border-t border-herb-100 pt-4">
                        <div>
                          <span className="block font-sans text-sm text-herb-600">Price:</span>
                          <span className="font-serif text-2xl font-semibold text-herb-800">
                            ${selectedEbook.price.toFixed(2)}
                          </span>
                        </div>
                        
                        <CheckoutButton
                          ebook={selectedEbook}
                          className="bg-herb-600 text-white hover:bg-herb-700"
                        >
                          Purchase Ebook
                        </CheckoutButton>
                      </div>
                    </div>
                  </div>
                </div>
                
                <DialogFooter className="mt-4 border-t border-herb-100 pt-4 flex-col items-start space-y-2">
                  <p className="font-sans text-xs text-herb-500">
                    All ebooks are delivered as PDF files. After purchase, you'll receive download instructions via email.
                  </p>
                  <div className="w-full rounded-md bg-amber-50 p-3 border border-amber-200">
                    <p className="font-sans text-xs font-medium text-amber-800">
                      <strong>No Refund Policy:</strong> Due to the digital nature of our products, all purchases are final and non-refundable. 
                      By completing your purchase, you acknowledge that you understand and agree to this policy.
                    </p>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

// Wrap the EbooksContent component with Stripe Elements
const Ebooks = () => {
  return (
    <Elements stripe={stripePromise}>
      <EbooksContent />
    </Elements>
  );
};

export default Ebooks;
