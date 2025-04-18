import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen, Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/Layout";
import { fetchBlogPosts, fetchBlogTags, BlogPost, subscribeToBlogUpdates } from "@/services/blog";
import { toast } from "sonner";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const tagFilter = searchParams.get("tag");
  
  const loadBlogPosts = async () => {
    try {
      setIsLoading(true);
      const [postsData, tagsData] = await Promise.all([
        fetchBlogPosts(),
        fetchBlogTags()
      ]);
      
      setBlogPosts(postsData);
      setFilteredPosts(postsData);
      setTags(tagsData);
      
      // If there's a tag in the URL, filter by it
      if (tagFilter) {
        setActiveTab("filtered");
        setFilteredPosts(postsData.filter(post => 
          post.tags.includes(tagFilter)
        ));
      }
    } catch (error) {
      console.error('Error loading blog posts:', error);
      toast.error('Failed to load blog posts. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Load blog posts when component mounts or tagFilter changes
  useEffect(() => {
    // Force a fresh load of blog posts every time the component mounts
    loadBlogPosts();
    
    // Set up an interval to refresh blog posts every 30 seconds
    const refreshInterval = setInterval(() => {
      console.log('Refreshing blog posts...');
      loadBlogPosts();
    }, 30000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(refreshInterval);
  }, [tagFilter]);
  
  // Subscribe to blog post updates
  useEffect(() => {
    // Subscribe to blog updates
    const unsubscribe = subscribeToBlogUpdates(() => {
      console.log('Blog updated, refreshing posts...');
      loadBlogPosts();
    });
    
    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setFilteredPosts(blogPosts);
      setActiveTab("all");
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = blogPosts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query) || 
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    setFilteredPosts(results);
    setActiveTab("search");
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Herbal Wisdom Blog
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Discover the latest insights, recipes, and research on herbal medicine
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-herb-200"
            />
            <Button type="submit" className="bg-herb-600 hover:bg-herb-700">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                onClick={() => setActiveTab("filtered")}
              >
                <Badge 
                  variant="outline" 
                  className={`cursor-pointer border-herb-200 ${
                    tagFilter === tag ? 'bg-herb-100 text-herb-800' : 'text-herb-600 hover:bg-herb-50'
                  }`}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              </Link>
            ))}
            {tags.length > 5 && (
              <Badge variant="outline" className="cursor-pointer border-herb-200 text-herb-600 hover:bg-herb-50">
                +{tags.length - 5} more
              </Badge>
            )}
          </div>
        </div>
        
        {/* Blog Posts */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 bg-herb-50 md:w-auto md:grid-cols-3">
            <TabsTrigger value="all" onClick={() => setFilteredPosts(blogPosts)}>
              All Posts
            </TabsTrigger>
            <TabsTrigger value="featured">
              Featured
            </TabsTrigger>
            <TabsTrigger value="filtered" disabled={!tagFilter && activeTab !== "search"}>
              {tagFilter ? `Tag: ${tagFilter}` : searchQuery ? "Search Results" : "Filtered"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {renderBlogPosts(blogPosts, isLoading, formatDate)}
          </TabsContent>
          
          <TabsContent value="featured" className="mt-0">
            {renderBlogPosts(
              blogPosts.filter(post => post.featured_image), 
              isLoading,
              formatDate
            )}
          </TabsContent>
          
          <TabsContent value="filtered" className="mt-0">
            {filteredPosts.length > 0 ? (
              renderBlogPosts(filteredPosts, isLoading, formatDate)
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="mb-4 font-sans text-herb-600">
                  No posts found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setFilteredPosts(blogPosts);
                    setActiveTab("all");
                    setSearchParams({});
                  }}
                  className="border-herb-300 text-herb-700"
                >
                  View all posts
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="search" className="mt-0">
            {filteredPosts.length > 0 ? (
              renderBlogPosts(filteredPosts, isLoading, formatDate)
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="mb-4 font-sans text-herb-600">
                  No posts found matching your search.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setFilteredPosts(blogPosts);
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                  className="border-herb-300 text-herb-700"
                >
                  Clear search
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

// Helper function to render blog posts
const renderBlogPosts = (
  posts: BlogPost[], 
  isLoading: boolean,
  formatDate: (date: string) => string
) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="aspect-video w-full" />
            <CardContent className="p-6">
              <Skeleton className="mb-2 h-6 w-3/4" />
              <Skeleton className="mb-4 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
          <Link to={`/blog/${post.slug}`} className="block">
            {post.featured_image && (
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <CardContent className="p-6">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-herb-500">
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {formatDate(post.published_at)}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {post.reading_time_minutes} min read
                </span>
              </div>
              
              <h2 className="mb-2 font-serif text-xl font-semibold text-herb-800 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="mb-4 font-sans text-sm text-herb-600 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="border-herb-100 bg-herb-50 text-xs text-herb-600"
                  >
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 3 && (
                  <Badge variant="outline" className="border-herb-100 bg-herb-50 text-xs text-herb-600">
                    +{post.tags.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm font-medium text-herb-700">
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
