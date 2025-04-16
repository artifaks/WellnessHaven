
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Herb, DatabaseHerb } from "@/types";
import { herbs as staticHerbs } from "@/data/herbs";
import Layout from "@/components/Layout";
import HerbDetail from "@/components/HerbDetail";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import HerbCategoryGuide from "@/components/HerbCategoryGuide";
import HerbCategoryAccordion from "@/components/HerbCategoryAccordion";

const Herbs = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [filteredHerbs, setFilteredHerbs] = useState<Herb[]>(staticHerbs);
  const [activeFilter, setActiveFilter] = useState<string | null>(searchParams.get("use") || null);
  const [isLoading, setIsLoading] = useState(false);
  const [allHerbs, setAllHerbs] = useState<Herb[]>(staticHerbs);

  const herbUses = Array.from(new Set(allHerbs.flatMap(herb => herb.uses)));

  // Fetch herbs from Supabase
  useEffect(() => {
    const fetchHerbs = async () => {
      setIsLoading(true);
      
      try {
        const { data: herbsData, error } = await supabase
          .from('herbs_data')
          .select('*');
          
        if (error) {
          throw error;
        }
        
        if (herbsData) {
          // Transform Supabase data to match our Herb interface
          const transformedHerbs: Herb[] = herbsData.map((herb: any) => ({
            id: herb.id,
            name: herb.name,
            scientificName: herb.scientific_name,
            description: herb.description || "No description available",
            uses: herb.uses || herb.traditional_uses || ["General wellness"],
            preparation: herb.preparation_methods || "Various preparation methods available.",
            imageUrl: herb.image_url || "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=500&h=500",
            benefits: Array.isArray(herb.benefits) ? herb.benefits : ["Wellness support"],
            category: herb.category || ""
          }));
          
          // Combine static herbs with database herbs, preferring database versions if there's overlap
          const combinedHerbs = [...staticHerbs];
          
          transformedHerbs.forEach(dbHerb => {
            const existingIndex = combinedHerbs.findIndex(h => 
              h.name.toLowerCase() === dbHerb.name.toLowerCase());
            
            if (existingIndex >= 0) {
              combinedHerbs[existingIndex] = dbHerb;
            } else {
              combinedHerbs.push(dbHerb);
            }
          });
          
          setAllHerbs(combinedHerbs);
        }
      } catch (error) {
        console.error('Error fetching herbs:', error);
        toast({
          title: "Error fetching herbs",
          description: "Could not load herbs from the database. Showing default herbs instead.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchHerbs();
  }, [toast]);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const use = searchParams.get("use") || null;
    
    setSearchTerm(search);
    setActiveFilter(use);
    
    let filtered = allHerbs;
    
    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(
        herb => 
          herb.name.toLowerCase().includes(lowerSearch) || 
          herb.scientificName.toLowerCase().includes(lowerSearch) ||
          herb.benefits.some(benefit => benefit.toLowerCase().includes(lowerSearch))
      );
    }
    
    if (use) {
      filtered = filtered.filter(herb => herb.uses.some(u => u.toLowerCase() === use.toLowerCase()));
    }
    
    setFilteredHerbs(filtered);
  }, [searchParams, allHerbs]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newParams = new URLSearchParams(searchParams);
    if (searchTerm) {
      newParams.set("search", searchTerm);
    } else {
      newParams.delete("search");
    }
    
    setSearchParams(newParams);
  };

  const handleFilter = (use: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (activeFilter === use) {
      newParams.delete("use");
      setActiveFilter(null);
    } else {
      newParams.set("use", use);
      setActiveFilter(use);
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveFilter(null);
    setSearchParams({});
  };

  const openHerbDetail = (herb: Herb) => {
    setSelectedHerb(herb);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeHerbDetail = () => {
    setSelectedHerb(null);
  };

  const hasActiveFilters = searchTerm || activeFilter;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Herbalist Haven Database
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Explore our collection of healing herbs and their traditional uses
          </p>
        </div>

        {selectedHerb ? (
          <HerbDetail herb={selectedHerb} onClose={closeHerbDetail} />
        ) : (
          <>
            <HerbCategoryGuide />

            {/* Search Section */}
            <div className="mb-10 rounded-xl bg-herb-100/70 p-6 shadow-sm">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-herb-500" />
                    <Input
                      type="text"
                      placeholder="Search herbs by name, scientific name, or benefit..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-herb-300 pl-9 font-sans placeholder:text-herb-400 focus-visible:ring-herb-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-herb-600 text-white hover:bg-herb-700 sm:w-auto"
                  >
                    Search
                  </Button>
                </div>
              </form>

              {hasActiveFilters && (
                <div className="flex items-center justify-between border-t border-herb-200 pt-4">
                  <p className="font-sans text-sm text-herb-600">
                    <span className="font-medium">{filteredHerbs.length}</span> herbs found
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="font-sans text-herb-600 hover:bg-herb-200/50 hover:text-herb-700"
                  >
                    <X className="mr-1 h-3 w-3" /> 
                    Clear filters
                  </Button>
                </div>
              )}
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="mb-4 h-10 w-10 animate-spin text-herb-600" />
                <p className="text-herb-600">Loading herbs...</p>
              </div>
            ) : (
              <>
                {/* Herbs Accordion */}
                {filteredHerbs.length > 0 ? (
                  <HerbCategoryAccordion herbs={filteredHerbs} />
                ) : (
                  <div className="mt-8 rounded-lg bg-herb-50 p-8 text-center">
                    <h3 className="font-serif text-xl font-semibold text-herb-800">
                      No herbs found
                    </h3>
                    <p className="mt-2 font-sans text-herb-600">
                      Try adjusting your search terms or filters.
                    </p>
                    <Button
                      onClick={clearFilters}
                      className="mt-4 bg-herb-600 text-white hover:bg-herb-700"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Herbs;
