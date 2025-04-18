import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';

// Helper function to safely cast Supabase query results to the expected type
// This is a temporary solution until the blog_posts table is properly created in Supabase
function safelyAssertType<T>(data: any): T {
  return data as T;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  is_published: boolean;
  reading_time_minutes: number;
}

// Mock data to use until the database table is created
const mockBlogPosts: BlogPost[] = [
  {
    id: '999',
    title: 'NEW TEST POST - The Benefits of Herbal Teas',
    slug: 'new-test-post-benefits-herbal-teas',
    content: '# The Benefits of Herbal Teas\n\nHerbal teas offer numerous health benefits and have been used for centuries in traditional medicine.\n\n## Popular Herbal Teas\n\n- Chamomile: Helps with sleep and relaxation\n- Peppermint: Aids digestion and freshens breath\n- Ginger: Reduces nausea and inflammation\n- Echinacea: Boosts immune system\n\n## How to Brew the Perfect Cup\n\n1. Use fresh, filtered water\n2. Heat to appropriate temperature (usually 200-212°F)\n3. Steep for 5-7 minutes\n4. Enjoy!',
    excerpt: 'Explore the wonderful world of herbal teas and their many health benefits.',
    featured_image: 'https://images.unsplash.com/photo-1597481499750-3f530a3b6c18?q=80&w=2670&auto=format&fit=crop',
    author: 'Test User',
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    tags: ['herbal tea', 'health', 'wellness'],
    is_published: true,
    reading_time_minutes: 3
  },
  {
    id: '1',
    title: 'The Healing Power of Chamomile Tea',
    slug: 'healing-power-chamomile-tea',
    content: '# The Healing Power of Chamomile Tea\n\nChamomile tea is one of the most ancient medicinal herbs known to mankind. Its history dates back to ancient Egypt, where it was used to honor the gods due to its healing properties.\n\n## What Makes Chamomile Special?\n\nChamomile contains apigenin, an antioxidant that binds to certain receptors in your brain that may decrease anxiety and initiate sleep. This herb has been used for centuries as a natural remedy for several health conditions, including:\n\n- Reducing anxiety and promoting relaxation\n- Improving sleep quality\n- Treating digestive issues\n- Reducing inflammation\n- Alleviating menstrual pain\n\n## How to Prepare the Perfect Cup\n\nTo get the most benefit from chamomile tea, proper preparation is key:\n\n1. Use 1-2 teaspoons of dried chamomile flowers per cup of water\n2. Heat water to just below boiling (about 200°F)\n3. Steep the flowers for 5-7 minutes\n4. Strain and enjoy\n\nFor enhanced effects, you can add a teaspoon of honey and a slice of lemon.',
    excerpt: 'Discover the ancient healing properties of chamomile tea, from improving sleep quality to reducing anxiety and inflammation.',
    featured_image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2670&auto=format&fit=crop',
    author: 'Emma Green',
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['chamomile', 'tea', 'sleep', 'anxiety', 'herbal remedies'],
    is_published: true,
    reading_time_minutes: 6
  },
  {
    id: '2',
    title: 'Herbal Teas for Seasonal Allergies: Natural Relief',
    slug: 'herbal-teas-seasonal-allergies',
    content: '# Herbal Teas for Seasonal Allergies: Natural Relief\n\nAs flowers bloom and pollen fills the air, millions of people suffer from seasonal allergies. While over-the-counter medications can provide relief, many people are turning to natural remedies like herbal teas to ease their symptoms.\n\n## Why Herbal Teas Work\n\nMany herbs contain natural antihistamine, anti-inflammatory, and immune-boosting properties that can help alleviate allergy symptoms without the drowsiness often associated with conventional medications.\n\n## Top Herbal Teas for Allergy Relief\n\n### 1. Nettle Leaf Tea\n\nStinging nettle has natural antihistamine properties and can help reduce inflammation in the nasal passages. Studies have shown that nettle can help inhibit the body\'s ability to produce histamine in response to allergens.\n\n**How to prepare:** Steep 1 tablespoon of dried nettle leaves in hot water for 10-15 minutes. Drink 2-3 cups daily during allergy season.',
    excerpt: 'Find natural relief from seasonal allergies with these powerful herbal teas. Discover how nettle, butterbur, rooibos, and ginger teas can reduce symptoms.',
    featured_image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2670&auto=format&fit=crop',
    author: 'Dr. Michael Chen',
    published_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['allergies', 'nettle', 'rooibos', 'ginger', 'natural remedies'],
    is_published: true,
    reading_time_minutes: 8
  },
  {
    id: '3',
    title: '5 Adaptogenic Herbs to Combat Stress and Boost Energy',
    slug: '5-adaptogenic-herbs-stress-energy',
    content: '# 5 Adaptogenic Herbs to Combat Stress and Boost Energy\n\nIn our fast-paced world, stress has become a constant companion for many. Adaptogens—non-toxic plants that help the body resist physical, chemical, and biological stressors—offer a natural solution to restore balance and enhance energy levels.\n\n## What Are Adaptogens?\n\nAdaptogens are a unique class of healing plants that help balance, restore, and protect the body. As the name suggests, they help your body adapt to stress by modulating your response to it. These herbs have been used for centuries in Chinese and Ayurvedic healing traditions.\n\n## Top 5 Adaptogenic Herbs\n\n### 1. Ashwagandha (Withania somnifera)\n\n**Benefits:** Often called "Indian ginseng," ashwagandha is renowned for its ability to reduce cortisol levels, improve resistance to stress, and combat anxiety and depression. It may also improve brain function and help fight inflammation.',
    excerpt: 'Discover the power of adaptogenic herbs to help your body resist stress, boost energy levels, and restore balance.',
    featured_image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2670&auto=format&fit=crop',
    author: 'Sarah Johnson',
    published_at: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['adaptogens', 'stress', 'energy', 'ashwagandha', 'tulsi', 'rhodiola'],
    is_published: true,
    reading_time_minutes: 10
  }
];

/**
 * Fetch all published blog posts
 * @param includeUnpublished If true, includes draft posts (admin only)
 */
export const fetchBlogPosts = async (includeUnpublished = false): Promise<BlogPost[]> => {
  try {
    console.log('Fetching blog posts from Supabase, includeUnpublished:', includeUnpublished);
    
    // Disable caching by setting cache control to no-cache
    const headers = {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    };
    
    // Type assertion to bypass TypeScript errors until the table is created in Supabase
    let query = supabase
      .from('blog_posts' as any)
      .select('*')
      .order('published_at', { ascending: false });
    
    if (!includeUnpublished) {
      query = query.eq('is_published', true);
    }
    
    const { data, error } = await query;

    if (error) {
      console.error('Error fetching from Supabase:', error);
      
      // Fall back to mock data if there's an error
      const sortedMockPosts = [...mockBlogPosts].sort((a, b) => 
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
      return includeUnpublished ? sortedMockPosts : sortedMockPosts.filter(post => post.is_published);
    }

    // Process and log the data from Supabase
    if (data && data.length > 0) {
      console.log('Supabase returned blog posts:', data.length);
      
      // Safely log titles without causing TypeScript errors
      try {
        const titles = data.map((post: any) => post.title || 'Untitled').join(', ');
        console.log('Blog post titles:', titles);
      } catch (e) {
        console.log('Could not extract blog post titles');
      }
      
      // Always use the data from Supabase if it exists
      return safelyAssertType<BlogPost[]>(data);
    }
    
    // If no data from Supabase, log a warning and return mock data
    console.warn('No blog posts found in Supabase, using mock data');
    return includeUnpublished ? mockBlogPosts : mockBlogPosts.filter(post => post.is_published);
  } catch (error) {
    console.error('Unexpected error fetching blog posts:', error);
    
    // Fall back to mock data in case of unexpected errors
    const sortedMockPosts = [...mockBlogPosts].sort((a, b) => 
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
    return includeUnpublished ? sortedMockPosts : sortedMockPosts.filter(post => post.is_published);
  }
};

/**
 * Fetch a single blog post by slug
 */
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned (post not found)
        const mockPost = mockBlogPosts.find(post => post.slug === slug && post.is_published);
        return mockPost || null;
      }
      console.warn('Using mock data due to Supabase error:', error);
      return mockBlogPosts.find(post => post.slug === slug && post.is_published) || null;
    }

    return (safelyAssertType<BlogPost>(data) || mockBlogPosts.find(post => post.slug === slug && post.is_published) || null);
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    const mockPost = mockBlogPosts.find(post => post.slug === slug && post.is_published);
    return mockPost || null;
  }
};

/**
 * Fetch a single blog post by ID (admin only)
 */
export const fetchBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned (post not found)
        const mockPost = mockBlogPosts.find(post => post.id === id);
        return mockPost || null;
      }
      console.warn('Using mock data due to Supabase error:', error);
      return mockBlogPosts.find(post => post.id === id) || null;
    }

    return (safelyAssertType<BlogPost>(data) || mockBlogPosts.find(post => post.id === id) || null);
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    const mockPost = mockBlogPosts.find(post => post.id === id);
    return mockPost || null;
  }
};

/**
 * Fetch blog posts by tag
 */
export const fetchBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .select('*')
      .eq('is_published', true)
      .contains('tags', [tag])
      .order('published_at', { ascending: false });

    if (error) {
      console.warn('Using mock data due to Supabase error:', error);
      return mockBlogPosts.filter(post => post.is_published && post.tags.includes(tag));
    }

    return safelyAssertType<BlogPost[]>(data) || mockBlogPosts.filter(post => post.is_published && post.tags.includes(tag));
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    return mockBlogPosts.filter(post => post.is_published && post.tags.includes(tag));
  }
};

/**
 * Fetch all unique tags from published blog posts
 */
export const fetchBlogTags = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .select('tags')
      .eq('is_published', true);

    if (error) {
      console.warn('Using mock data due to Supabase error:', error);
      const mockTags = mockBlogPosts
        .filter(post => post.is_published)
        .flatMap(post => post.tags);
      return [...new Set(mockTags)];
    }

    // Extract all tags and remove duplicates
    const allTags = data && data.length > 0
      ? safelyAssertType<{tags: string[]}[]>(data).flatMap(post => post.tags)
      : mockBlogPosts.filter(post => post.is_published).flatMap(post => post.tags);
    
    return [...new Set(allTags)];
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    const mockTags = mockBlogPosts
      .filter(post => post.is_published)
      .flatMap(post => post.tags);
    return [...new Set(mockTags)];
  }
};

/**
 * Create a new blog post (admin only)
 */
// Event bus for blog post updates
type BlogEventListener = () => void;
const blogEventListeners: BlogEventListener[] = [];

// Subscribe to blog post updates
export const subscribeToBlogUpdates = (listener: BlogEventListener) => {
  blogEventListeners.push(listener);
  return () => {
    const index = blogEventListeners.indexOf(listener);
    if (index > -1) {
      blogEventListeners.splice(index, 1);
    }
  };
};

// Notify all subscribers about blog post updates
const notifyBlogUpdated = () => {
  blogEventListeners.forEach(listener => listener());
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'updated_at'>): Promise<BlogPost> => {
  try {
    // Add current timestamp for published_at if not provided
    const postWithTimestamp = {
      ...post,
      published_at: post.published_at || new Date().toISOString()
    };
    
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .insert([postWithTimestamp] as any)
      .select()
      .single();

    if (error) {
      console.warn('Using mock data due to Supabase error:', error);
      
      // Create a mock blog post with the provided data
      const mockPost: BlogPost = {
        id: uuidv4(),
        title: postWithTimestamp.title,
        slug: postWithTimestamp.slug,
        content: postWithTimestamp.content,
        excerpt: postWithTimestamp.excerpt,
        featured_image: postWithTimestamp.featured_image || '',
        author: postWithTimestamp.author,
        published_at: postWithTimestamp.published_at,
        updated_at: new Date().toISOString(),
        tags: postWithTimestamp.tags,
        is_published: postWithTimestamp.is_published,
        reading_time_minutes: postWithTimestamp.reading_time_minutes
      };
      
      // Add to mock data for development
      mockBlogPosts.unshift(mockPost);
      
      // Notify subscribers about the new blog post
      notifyBlogUpdated();
      
      return mockPost;
    }

    // Notify subscribers about the new blog post
    notifyBlogUpdated();
    return safelyAssertType<BlogPost>(data);
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    
    // Create a mock blog post with the provided data
    const mockPost: BlogPost = {
      id: uuidv4(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      featured_image: post.featured_image || '',
      author: post.author,
      published_at: post.published_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: post.tags,
      is_published: post.is_published,
      reading_time_minutes: post.reading_time_minutes
    };
    
    // Add to mock data for development
    mockBlogPosts.unshift(mockPost);
    
    // Notify subscribers about the new blog post
    notifyBlogUpdated();
    
    return mockPost;
  }
};

/**
 * Update an existing blog post (admin only)
 */
export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<BlogPost> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts' as any)
      .update(post)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.warn('Using mock data due to Supabase error:', error);
      
      // Find and update the mock post
      const mockPostIndex = mockBlogPosts.findIndex(p => p.id === id);
      if (mockPostIndex !== -1) {
        const updatedPost = {
          ...mockBlogPosts[mockPostIndex],
          ...post,
          updated_at: new Date().toISOString()
        };
        mockBlogPosts[mockPostIndex] = updatedPost;
        
        // Notify subscribers about the updated blog post
        notifyBlogUpdated();
        
        return updatedPost;
      }
      
      throw new Error('Blog post not found');
    }

    // Notify subscribers about the updated blog post
    notifyBlogUpdated();
    return safelyAssertType<BlogPost>(data);
  } catch (error) {
    console.warn('Using mock data due to error:', error);
    
    // Find and update the mock post
    const mockPostIndex = mockBlogPosts.findIndex(p => p.id === id);
    if (mockPostIndex !== -1) {
      const updatedPost = {
        ...mockBlogPosts[mockPostIndex],
        ...post,
        updated_at: new Date().toISOString()
      };
      mockBlogPosts[mockPostIndex] = updatedPost;
      
      // Notify subscribers about the updated blog post
      notifyBlogUpdated();
      
      return updatedPost;
    }
    
    throw new Error('Failed to update blog post');
  }
};

/**
 * Delete a blog post (admin only)
 */
export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('blog_posts' as any)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      throw new Error('Failed to delete blog post');
    }
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw new Error('Failed to delete blog post');
  }
};
