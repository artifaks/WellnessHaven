import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  published_at: string;
  author: string;
}

const DebugBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Direct query to Supabase using type assertion to bypass TypeScript errors
      const { data, error } = await supabase
        .from('blog_posts' as any)
        .select('id, title, slug, is_published, published_at, author')
        .order('published_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      // Type assertion to safely cast the data
      // First convert to unknown, then to BlogPost[] to satisfy TypeScript
      const typedData = (data || []) as unknown as BlogPost[];
      setPosts(typedData);
      toast.success(`Found ${data?.length || 0} blog posts in Supabase`);
    } catch (err: any) {
      console.error('Error fetching posts:', err);
      setError(err.message || 'Failed to fetch blog posts');
      toast.error(`Error: ${err.message || 'Failed to fetch blog posts'}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Debug Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Direct Supabase Query Results</h2>
              <Button 
                onClick={fetchPosts} 
                disabled={isLoading}
                variant="outline"
              >
                {isLoading ? 'Loading...' : 'Refresh'}
              </Button>
            </div>
            
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
                <p className="font-medium">Error:</p>
                <p>{error}</p>
              </div>
            )}
            
            {posts.length === 0 && !isLoading && !error ? (
              <div className="rounded-md bg-amber-50 p-4 text-amber-700">
                <p>No blog posts found in Supabase database.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="p-2 text-left">ID</th>
                      <th className="p-2 text-left">Title</th>
                      <th className="p-2 text-left">Slug</th>
                      <th className="p-2 text-left">Author</th>
                      <th className="p-2 text-left">Published</th>
                      <th className="p-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id} className="border-b">
                        <td className="p-2">{post.id.substring(0, 8)}...</td>
                        <td className="p-2">{post.title}</td>
                        <td className="p-2">{post.slug}</td>
                        <td className="p-2">{post.author}</td>
                        <td className="p-2">
                          <span className={`inline-block rounded-full px-2 py-1 text-xs ${post.is_published ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {post.is_published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="p-2">
                          {new Date(post.published_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default DebugBlogPosts;
