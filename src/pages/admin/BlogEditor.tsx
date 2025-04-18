import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Save, 
  ArrowLeft, 
  Image as ImageIcon,
  Tag as TagIcon,
  Calendar,
  Clock,
  Eye,
  Upload,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import AdminLayout from "@/components/admin/AdminLayout";
import { 
  fetchBlogPostById, 
  createBlogPost, 
  updateBlogPost, 
  BlogPost 
} from "@/services/blog";
import { uploadImage } from "@/services/storage";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Define form schema with Zod
const blogPostSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  slug: z.string()
    .min(5, { message: "Slug must be at least 5 characters" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { 
      message: "Slug must contain only lowercase letters, numbers, and hyphens" 
    }),
  content: z.string().min(50, { message: "Content must be at least 50 characters" }),
  excerpt: z.string().min(20, { message: "Excerpt must be at least 20 characters" }),
  featured_image: z.string().url({ message: "Featured image must be a valid URL" }).optional(),
  author: z.string().min(2, { message: "Author name is required" }),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
  is_published: z.boolean().default(false),
  reading_time_minutes: z.number().min(1).max(60)
});

type BlogFormValues = z.infer<typeof blogPostSchema>;

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [newTag, setNewTag] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  
  // Initialize form with react-hook-form
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      featured_image: "",
      author: "",
      tags: [],
      is_published: false,
      reading_time_minutes: 5
    }
  });
  
  // Load existing post if editing
  useEffect(() => {
    if (id) {
      loadBlogPost(id);
    }
  }, [id]);
  
  const loadBlogPost = async (postId: string) => {
    try {
      setIsLoading(true);
      const post = await fetchBlogPostById(postId);
      
      if (!post) {
        toast.error('Blog post not found');
        navigate('/admin/blog');
        return;
      }
      
      // Reset form with post data
      form.reset({
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt,
        featured_image: post.featured_image,
        author: post.author,
        tags: post.tags,
        is_published: post.is_published,
        reading_time_minutes: post.reading_time_minutes
      });
    } catch (error) {
      console.error('Error loading blog post:', error);
      toast.error('Failed to load blog post');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Generate slug from title
  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')  // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
      .trim();
  }, []);
  
  // Handle title change to auto-generate slug if slug is empty
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue('title', title);
    
    // Only auto-generate slug if it's a new post or slug is empty
    if (!id || !form.getValues('slug')) {
      const slug = generateSlug(title);
      form.setValue('slug', slug);
    }
  };
  
  // Add a new tag
  const handleAddTag = () => {
    if (!newTag.trim()) return;
    
    const currentTags = form.getValues('tags');
    const normalizedTag = newTag.toLowerCase().trim();
    
    // Check if tag already exists
    if (currentTags.includes(normalizedTag)) {
      toast.error('Tag already exists');
      return;
    }
    
    form.setValue('tags', [...currentTags, normalizedTag]);
    setNewTag("");
  };
  
  // Remove a tag
  const handleRemoveTag = (tagToRemove: string) => {
    const currentTags = form.getValues('tags');
    form.setValue('tags', currentTags.filter(tag => tag !== tagToRemove));
  };
  
  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setUploadingImage(true);
      const imageUrl = await uploadImage(file, 'blog-images');
      
      // Insert image markdown at cursor position
      const textarea = document.getElementById('content') as HTMLTextAreaElement;
      if (textarea) {
        const cursorPos = textarea.selectionStart;
        const textBefore = form.getValues('content').substring(0, cursorPos);
        const textAfter = form.getValues('content').substring(cursorPos);
        const imageMarkdown = `![${file.name}](${imageUrl})`;
        
        form.setValue('content', `${textBefore}${imageMarkdown}${textAfter}`);
      } else {
        // If can't insert at cursor, append to end
        const currentContent = form.getValues('content');
        const imageMarkdown = `\n\n![${file.name}](${imageUrl})`;
        form.setValue('content', currentContent + imageMarkdown);
      }
      
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploadingImage(false);
      // Clear the input
      e.target.value = '';
    }
  };
  
  // Set featured image
  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setUploadingImage(true);
      const imageUrl = await uploadImage(file, 'blog-featured-images');
      form.setValue('featured_image', imageUrl);
      toast.success('Featured image uploaded successfully');
    } catch (error) {
      console.error('Error uploading featured image:', error);
      toast.error('Failed to upload featured image');
    } finally {
      setUploadingImage(false);
      // Clear the input
      e.target.value = '';
    }
  };
  
  // Calculate reading time based on content length
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    form.setValue('reading_time_minutes', readingTime);
  };
  
  // Handle form submission
  const onSubmit = async (values: BlogFormValues) => {
    try {
      setIsSaving(true);
      
      // Ensure all required fields are provided with non-optional values
      const postData = {
        title: values.title || 'Untitled Post',
        slug: values.slug || `post-${Date.now()}`,
        content: values.content || '',
        excerpt: values.excerpt || '',
        featured_image: values.featured_image || '',
        author: values.author || 'Admin',
        tags: values.tags || [],
        reading_time_minutes: values.reading_time_minutes || 5,
        is_published: typeof values.is_published === 'boolean' ? values.is_published : false,
        published_at: new Date().toISOString()
      };
      
      if (id) {
        // Update existing post
        await updateBlogPost(id, postData);
        toast.success('Blog post updated successfully');
      } else {
        // Create new post
        await createBlogPost(postData);
        toast.success('Blog post created successfully');
      }
      
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast.error('Failed to save blog post');
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate('/admin/blog')}
              className="p-0 hover:bg-transparent"
            >
              <ArrowLeft className="h-5 w-5 text-herb-600" />
            </Button>
            <h1 className="font-serif text-2xl font-bold text-herb-800">
              {id ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
          </div>
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={isSaving}
              onClick={() => form.handleSubmit(onSubmit)()}
              className="border-herb-300 text-herb-700 hover:bg-herb-50"
            >
              Save as Draft
            </Button>
            <Button
              type="button"
              disabled={isSaving}
              onClick={() => {
                form.setValue('is_published', true);
                form.handleSubmit(onSubmit)();
              }}
              className="bg-herb-600 hover:bg-herb-700"
            >
              {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {id ? 'Update & Publish' : 'Publish Post'}
            </Button>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Main content - 2/3 width */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Post Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter post title" 
                              {...field} 
                              onChange={handleTitleChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="url-friendly-post-name" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            This will be used in the URL: /blog/your-slug
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Brief summary of the post (shown in listings)" 
                              {...field} 
                              rows={3}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <FormLabel htmlFor="content">Content</FormLabel>
                        <div className="flex items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="relative border-herb-200"
                            disabled={uploadingImage}
                          >
                            {uploadingImage ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <>
                                <ImageIcon className="mr-1 h-3 w-3" />
                                Insert Image
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="absolute inset-0 cursor-pointer opacity-0"
                                  onChange={handleImageUpload}
                                  disabled={uploadingImage}
                                />
                              </>
                            )}
                          </Button>
                          
                          <div className="flex border rounded-md overflow-hidden">
                            <Button 
                              type="button"
                              variant={activeTab === "write" ? "default" : "ghost"}
                              size="sm"
                              onClick={() => setActiveTab("write")}
                              className={`rounded-none ${activeTab === "write" ? "bg-herb-600" : ""}`}
                            >
                              Write
                            </Button>
                            <Button 
                              type="button"
                              variant={activeTab === "preview" ? "default" : "ghost"}
                              size="sm"
                              onClick={() => setActiveTab("preview")}
                              className={`rounded-none ${activeTab === "preview" ? "bg-herb-600" : ""}`}
                            >
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="rounded-md border border-herb-200">
                                {activeTab === "write" ? (
                                  <Textarea 
                                    id="content"
                                    placeholder="Write your post content in Markdown..." 
                                    {...field} 
                                    className="min-h-[400px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    onChange={(e) => {
                                      field.onChange(e);
                                      calculateReadingTime(e.target.value);
                                    }}
                                  />
                                ) : (
                                  <div className="prose prose-herb max-w-none p-4 min-h-[400px] overflow-auto">
                                    {field.value ? (
                                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {field.value}
                                      </ReactMarkdown>
                                    ) : (
                                      <p className="text-herb-400 italic">
                                        Preview will appear here...
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar - 1/3 width */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Post Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="is_published"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-herb-200 p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Publish</FormLabel>
                            <FormDescription>
                              Make this post visible to the public
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="author"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author</FormLabel>
                          <FormControl>
                            <Input placeholder="Author name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="reading_time_minutes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reading Time (minutes)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="1"
                              max="60"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <FormLabel>Tags</FormLabel>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {form.watch('tags').map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary"
                            className="bg-herb-100 text-herb-700"
                          >
                            {tag}
                            <button
                              type="button"
                              className="ml-1 rounded-full text-herb-500 hover:text-herb-700"
                              onClick={() => handleRemoveTag(tag)}
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Input
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag"
                          className="border-herb-200"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddTag();
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddTag}
                          className="border-herb-200"
                        >
                          <TagIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      {form.formState.errors.tags && (
                        <p className="mt-1 text-xs text-red-500">
                          {form.formState.errors.tags.message}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="featured_image"
                      render={({ field }) => (
                        <FormItem>
                          {field.value && (
                            <div className="mb-4 overflow-hidden rounded-md">
                              <img
                                src={field.value}
                                alt="Featured"
                                className="h-auto w-full object-cover"
                              />
                            </div>
                          )}
                          <FormControl>
                            <div className="flex flex-col gap-2">
                              <Input
                                placeholder="Image URL"
                                {...field}
                                className="border-herb-200"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                className="relative border-herb-200"
                                disabled={uploadingImage}
                              >
                                {uploadingImage ? (
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                  <>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Upload Image
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="absolute inset-0 cursor-pointer opacity-0"
                                      onChange={handleFeaturedImageUpload}
                                      disabled={uploadingImage}
                                    />
                                  </>
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-herb-200 p-4">
                      <h3 className="mb-2 font-serif text-lg font-semibold text-herb-800">
                        {form.watch('title') || 'Post Title'}
                      </h3>
                      <p className="mb-3 text-sm text-herb-600">
                        {form.watch('excerpt') || 'Post excerpt will appear here...'}
                      </p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {form.watch('tags').map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            className="border-herb-100 bg-herb-50 text-xs text-herb-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-herb-500">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {new Date().toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {form.watch('reading_time_minutes') || 0} min read
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-herb-200"
                      onClick={() => {
                        if (form.watch('title') && form.watch('slug')) {
                          window.open(`/blog/${form.watch('slug')}`, '_blank');
                        } else {
                          toast.error('Title and slug are required to preview');
                        }
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Post
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
