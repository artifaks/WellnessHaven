-- This script verifies if the blog_posts table exists and has the correct structure
-- Run this in the Supabase SQL Editor to check if the table was created properly

-- Check if the blog_posts table exists
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public'
   AND table_name = 'blog_posts'
) AS table_exists;

-- Check the structure of the blog_posts table
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM 
  information_schema.columns
WHERE 
  table_schema = 'public' 
  AND table_name = 'blog_posts'
ORDER BY 
  ordinal_position;
