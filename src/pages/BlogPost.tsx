import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { fetchBlogPostBySlug, BlogPost as BlogPostType } from "@/services/blog";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        const postData = await fetchBlogPostBySlug(slug);
        
        if (!postData) {
          navigate('/blog', { replace: true });
          toast.error('Blog post not found');
          return;
        }
        
        setPost(postData);
        
        // For now, we'll just simulate related posts
        // In a real app, you'd fetch related posts based on tags
        setRelatedPosts([]);
        
        // Scroll to top
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error loading blog post:', error);
        toast.error('Failed to load blog post. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogPost();
  }, [slug, navigate]);
  
  // Format date
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Share functionality
  const handleShare = async () => {
    if (navigator.share && window.location.href) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copy to clipboard
      if (post && window.location.href) {
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard');
      }
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Skeleton className="mb-6 h-10 w-3/4" />
            <Skeleton className="mb-4 h-6 w-full" />
            <Skeleton className="mb-8 h-6 w-2/3" />
            
            <Skeleton className="mb-8 aspect-video w-full" />
            
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!post) {
    return null; // This should not happen due to the navigation in useEffect
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center text-herb-600 hover:text-herb-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
          
          {/* Article header */}
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-3xl font-bold text-herb-800 md:text-4xl">
              {post.title}
            </h1>
            
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-herb-600">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {formatDate(post.published_at)}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.reading_time_minutes} min read
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="ml-auto flex items-center text-herb-600 hover:text-herb-800"
              >
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
            </div>
            
            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} to={`/blog?tag=${tag}`}>
                  <Badge 
                    variant="outline"
                    className="cursor-pointer border-herb-100 bg-herb-50 text-herb-600 hover:bg-herb-100"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Featured image */}
          {post.featured_image && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={post.featured_image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          
          {/* Article content */}
          <article className="prose prose-herb max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="font-serif text-2xl font-bold text-herb-800 md:text-3xl" {...props} />,
                h2: ({node, ...props}) => <h2 className="font-serif text-xl font-semibold text-herb-700 md:text-2xl" {...props} />,
                h3: ({node, ...props}) => <h3 className="font-serif text-lg font-semibold text-herb-700" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 font-sans text-herb-600" {...props} />,
                ul: ({node, ...props}) => <ul className="mb-4 list-disc pl-6" {...props} />,
                ol: ({node, ...props}) => <ol className="mb-4 list-decimal pl-6" {...props} />,
                li: ({node, ...props}) => <li className="mb-2 font-sans text-herb-600" {...props} />,
                a: ({node, ...props}) => <a className="text-herb-600 underline hover:text-herb-800" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-herb-200 pl-4 italic text-herb-600" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
          
          {/* Author section */}
          <div className="mt-12 rounded-lg bg-herb-50 p-6">
            <h3 className="mb-2 font-serif text-lg font-semibold text-herb-800">
              About the Author
            </h3>
            <p className="font-sans text-herb-600">
              {post.author} is a passionate herbalist and wellness advocate with expertise in natural remedies and holistic health practices.
            </p>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <Separator className="mb-6" />
              <h3 className="mb-6 font-serif text-xl font-semibold text-herb-800">
                Related Articles
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group rounded-lg border border-herb-100 p-4 transition-all hover:border-herb-200 hover:shadow-sm"
                  >
                    <h4 className="mb-2 font-serif text-lg font-medium text-herb-700 group-hover:text-herb-800">
                      {relatedPost.title}
                    </h4>
                    <p className="font-sans text-sm text-herb-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
