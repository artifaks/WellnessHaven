-- This script checks what blog posts exist in the database
-- Run this in the Supabase SQL Editor to see all blog posts

-- Query all blog posts
SELECT 
  id, 
  title, 
  slug, 
  is_published, 
  published_at,
  author,
  updated_at
FROM public.blog_posts
ORDER BY published_at DESC;

-- Count of published vs unpublished posts
SELECT 
  is_published, 
  COUNT(*) as post_count
FROM public.blog_posts
GROUP BY is_published;
