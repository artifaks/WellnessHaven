import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  EyeIcon, 
  Filter, 
  ArrowUpDown,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import AdminLayout from "@/components/admin/AdminLayout";
import { fetchBlogPosts, deleteBlogPost, BlogPost } from "@/services/blog";
import { toast } from "sonner";

const BlogDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof BlogPost>("published_at");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  
  useEffect(() => {
    loadPosts();
  }, []);
  
  useEffect(() => {
    filterAndSortPosts();
  }, [posts, searchQuery, sortField, sortDirection, statusFilter]);
  
  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchBlogPosts(true); // true to include drafts
      setPosts(data);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setIsLoading(false);
    }
  };
  
  const filterAndSortPosts = () => {
    let filtered = [...posts];
    
    // Apply status filter
    if (statusFilter === "published") {
      filtered = filtered.filter(post => post.is_published);
    } else if (statusFilter === "draft") {
      filtered = filtered.filter(post => !post.is_published);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.author.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB)
          : fieldB.localeCompare(fieldA);
      }
      
      // Handle dates
      if (sortField === 'published_at' || sortField === 'updated_at') {
        const dateA = new Date(fieldA as string).getTime();
        const dateB = new Date(fieldB as string).getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
      
      // Handle booleans
      if (typeof fieldA === 'boolean' && typeof fieldB === 'boolean') {
        return sortDirection === 'asc'
          ? (fieldA ? 1 : 0) - (fieldB ? 1 : 0)
          : (fieldB ? 1 : 0) - (fieldA ? 1 : 0);
      }
      
      return 0;
    });
    
    setFilteredPosts(filtered);
  };
  
  const handleSort = (field: keyof BlogPost) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  const handleDelete = async () => {
    if (!deletePostId) return;
    
    try {
      await deleteBlogPost(deletePostId);
      setPosts(posts.filter(post => post.id !== deletePostId));
      toast.success('Blog post deleted successfully');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Failed to delete blog post');
    } finally {
      setDeletePostId(null);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="font-serif text-2xl font-bold text-herb-800">
            Blog Posts
          </h1>
          
          <Button
            onClick={() => navigate('/admin/blog/new')}
            className="bg-herb-600 hover:bg-herb-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm gap-2">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-herb-200"
            />
            <Button variant="outline" className="border-herb-200">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-herb-200">
                  <Filter className="mr-2 h-4 w-4" />
                  {statusFilter === 'all' ? 'All Posts' : 
                   statusFilter === 'published' ? 'Published' : 'Drafts'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setStatusFilter('all')}>
                  All Posts
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('published')}>
                  Published
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter('draft')}>
                  Drafts
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="rounded-md border border-herb-200">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">
                  <Button 
                    variant="ghost" 
                    className="flex items-center p-0 hover:bg-transparent"
                    onClick={() => handleSort('title')}
                  >
                    Title
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button 
                    variant="ghost" 
                    className="flex items-center p-0 hover:bg-transparent"
                    onClick={() => handleSort('author')}
                  >
                    Author
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button 
                    variant="ghost" 
                    className="flex items-center p-0 hover:bg-transparent"
                    onClick={() => handleSort('published_at')}
                  >
                    Date
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24 float-right" /></TableCell>
                  </TableRow>
                ))
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">
                      {post.title}
                      <div className="mt-1 flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>{formatDate(post.published_at)}</TableCell>
                    <TableCell>
                      {post.is_published ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Published
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-800">
                          <XCircle className="mr-1 h-3 w-3" />
                          Draft
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          title="View post"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                          title="Edit post"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeletePostId(post.id)}
                          className="text-red-500 hover:text-red-700"
                          title="Delete post"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No blog posts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <AlertDialog open={!!deletePostId} onOpenChange={(open) => !open && setDeletePostId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post
              and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default BlogDashboard;
