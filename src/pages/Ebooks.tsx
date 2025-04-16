
import { useState } from "react";
import { ShoppingCart, BookOpen, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Ebook } from "@/types";
import { ebooks } from "@/data/ebooks";
import Layout from "@/components/Layout";

const Ebooks = () => {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  
  const openEbookDetail = (ebook: Ebook) => {
    setSelectedEbook(ebook);
  };

  const handlePurchase = (ebook: Ebook) => {
    alert(`Purchase flow for "${ebook.title}" would be implemented here.`);
  };

  // Group ebooks by tags for categorization
  const categories = Array.from(
    new Set(ebooks.flatMap((ebook) => ebook.tags))
  );

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
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase(ebook)}
                        className="bg-herb-600 text-white hover:bg-herb-700"
                      >
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Buy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
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
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 flex w-full justify-start overflow-x-auto bg-herb-100">
              <TabsTrigger value="all" className="font-sans">All Ebooks</TabsTrigger>
              {categories.slice(0, 5).map((category) => (
                <TabsTrigger key={category} value={category} className="font-sans">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
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
            </TabsContent>

            {categories.slice(0, 5).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {ebooks
                    .filter((ebook) => ebook.tags.includes(category))
                    .map((ebook) => (
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
              </TabsContent>
            ))}
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
                        
                        <Button
                          onClick={() => handlePurchase(selectedEbook)}
                          className="bg-herb-600 text-white hover:bg-herb-700"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Purchase Ebook
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <DialogFooter className="mt-4 border-t border-herb-100 pt-4">
                  <p className="font-sans text-xs text-herb-500">
                    All ebooks are delivered as PDF files. After purchase, you'll receive download instructions via email.
                  </p>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Ebooks;
