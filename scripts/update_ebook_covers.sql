-- SQL script to update ebook cover images in Supabase
-- Run this in the SQL Editor in your Supabase dashboard

-- Example: Update a specific eBook's cover by ID
UPDATE public.ebooks
SET cover_image = 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/healing-herbs-cover.jpg'
WHERE id = 'your-ebook-id';

-- Example: Update a specific eBook's cover by title
UPDATE public.ebooks
SET cover_image = 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/herbal-home-apothecary-cover.jpg'
WHERE title = 'The Herbal Home Apothecary';

-- Example: Update multiple eBooks at once (if you have a consistent naming pattern)
-- This assumes your cover image filenames match your book titles in some way

-- For a book titled "Healing Herbs: A Beginner's Guide"
UPDATE public.ebooks
SET cover_image = 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/healing-herbs-cover.jpg'
WHERE title = 'Healing Herbs: A Beginner''s Guide';

-- For a book titled "Culinary Herbs for Wellness"
UPDATE public.ebooks
SET cover_image = 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/culinary-herbs-cover.jpg'
WHERE title = 'Culinary Herbs for Wellness';

-- For a book titled "Herbal Medicine for Stress & Anxiety"
UPDATE public.ebooks
SET cover_image = 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/ebook-covers/stress-anxiety-cover.jpg'
WHERE title = 'Herbal Medicine for Stress & Anxiety';

-- IMPORTANT: Make sure to:
-- 1. Replace 'your-ebook-id' with the actual ID of your eBook
-- 2. Update the image URLs to match your actual uploaded images
-- 3. Update the book titles to match your actual book titles
-- 4. Use single quotes for string values
-- 5. Escape single quotes in strings by doubling them (e.g., 'Beginner''s Guide')
