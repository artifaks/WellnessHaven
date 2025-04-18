-- This script inserts a single test blog post into the database
-- Run this in the Supabase SQL Editor to add a test post

INSERT INTO public.blog_posts (
  title,
  slug,
  content,
  excerpt,
  featured_image,
  author,
  published_at,
  tags,
  is_published,
  reading_time_minutes
) VALUES (
  'Test Blog Post - Please Verify',
  'test-blog-post-please-verify',
  '# Test Blog Post

This is a test blog post to verify that the blog system is working correctly.

## Testing Features

- Markdown formatting
- Database connectivity
- Frontend display

If you can see this post on the blog page, then everything is working correctly!',
  'This is a test post to verify that the blog system is working correctly.',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'System Admin',
  now(),
  ARRAY['test', 'verification'],
  true,
  2
);
