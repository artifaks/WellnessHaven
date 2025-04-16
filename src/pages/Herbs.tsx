
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Herb } from "@/types";
import { herbs } from "@/data/herbs";
import Layout from "@/components/Layout";
import HerbCard from "@/components/HerbCard";
import HerbDetail from "@/components/HerbDetail";

const Herbs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [filteredHerbs, setFilteredHerbs] = useState<Herb[]>(herbs);
  const [activeFilter, setActiveFilter] = useState<string | null>(searchParams.get("use") || null);

  const herbUses = Array.from(new Set(herbs.flatMap(herb => herb.uses)));

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const use = searchParams.get("use") || null;
    
    setSearchTerm(search);
    setActiveFilter(use);
    
    let filtered = herbs;
    
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
  }, [searchParams]);

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
            Medicinal Herb Database
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Explore our collection of healing herbs and their traditional uses
          </p>
        </div>

        {selectedHerb ? (
          <HerbDetail herb={selectedHerb} onClose={closeHerbDetail} />
        ) : (
          <>
            {/* Search and Filter Section */}
            <div className="mb-10 rounded-xl bg-herb-100/70 p-6 shadow-sm">
              <form onSubmit={handleSearch} className="mb-6">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-herb-500" />
                    <Input
                      type="text"
                      placeholder="Search herbs by name or benefit..."
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

              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-herb-700" />
                  <h3 className="font-sans text-sm font-semibold text-herb-700">
                    Filter by Use:
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {herbUses.map((use) => (
                    <Button
                      key={use}
                      variant={activeFilter === use ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilter(use)}
                      className={
                        activeFilter === use
                          ? "bg-herb-600 text-white hover:bg-herb-700"
                          : "border-herb-300 bg-white text-herb-700 hover:bg-herb-100 hover:text-herb-800"
                      }
                    >
                      {use}
                    </Button>
                  ))}
                </div>
              </div>

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

            {/* Herbs Grid */}
            {filteredHerbs.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredHerbs.map((herb) => (
                  <HerbCard 
                    key={herb.id} 
                    herb={herb} 
                    onClick={() => openHerbDetail(herb)} 
                  />
                ))}
              </div>
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
      </div>
    </Layout>
  );
};

export default Herbs;
