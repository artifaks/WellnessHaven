-- SQL script to populate the ebooks table in Supabase
-- Run this in the SQL Editor in your Supabase dashboard

-- First, let's make sure we have the correct table structure
-- If the table doesn't exist yet, create it
CREATE TABLE IF NOT EXISTS public.ebooks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    cover_image TEXT,
    buy_link TEXT,
    category TEXT NOT NULL,
    pages INTEGER NOT NULL,
    publish_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Now, let's insert some sample herbal eBooks
-- You can replace these with your actual eBook data

-- Clear existing data (optional - remove this if you want to keep existing records)
DELETE FROM public.ebooks;

-- Insert new eBook records
INSERT INTO public.ebooks (
    title, 
    author, 
    description, 
    price, 
    cover_image, 
    buy_link, 
    category, 
    pages, 
    publish_date
) VALUES 
(
    'Healing Herbs: A Beginner''s Guide',
    'Dr. Emily Green',
    'A comprehensive introduction to the world of medicinal herbs, covering the basics of herbal medicine, safety guidelines, and 20 essential herbs every beginner should know. This guide includes detailed information on preparation methods, dosages, and historical uses of herbs across different cultures.',
    14.99,
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/healing-herbs-guide',
    'beginner',
    120,
    '2024-01-15'
),
(
    'The Herbal Home Apothecary',
    'Michael Stone',
    'Learn how to create your own medicinal preparations at home. This practical guide covers tinctures, teas, salves, and more, with step-by-step instructions and beautiful illustrations. Includes 50 recipes for common ailments and detailed instructions for setting up your home apothecary.',
    19.99,
    'https://images.unsplash.com/photo-1603475516784-171be8823b76?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/herbal-home-apothecary',
    'preparations',
    185,
    '2024-02-20'
),
(
    'Culinary Herbs for Wellness',
    'Chef Sarah Johnson',
    'Discover how to incorporate healing herbs into your daily meals. With 50 delicious recipes and information on the medicinal properties of common culinary herbs. Learn how to transform your kitchen into a healing space and boost your family''s health through delicious, herb-infused meals.',
    12.99,
    'https://images.unsplash.com/photo-1559682931-3508e7e8c6e6?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/culinary-herbs-wellness',
    'cooking',
    150,
    '2023-11-05'
),
(
    'Herbal Medicine for Stress & Anxiety',
    'Dr. Robert Williams',
    'A practical guide to using herbs for managing stress and anxiety naturally. Covers nervous system support, sleep remedies, and adaptogenic herbs with scientific backing. Includes protocols for different types of anxiety and stress-related conditions with dosage recommendations.',
    17.99,
    'https://images.unsplash.com/photo-1598618253208-d75408cee680?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/herbs-stress-anxiety',
    'anxiety',
    210,
    '2024-03-10'
),
(
    'Growing Medicinal Herbs',
    'Maria Gonzalez',
    'Everything you need to know about cultivating medicinal herbs, from garden planning to harvesting and storage. Includes detailed growing guides for 30 popular medicinal plants. Learn about soil requirements, companion planting, pest management, and sustainable harvesting techniques.',
    15.99,
    'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/growing-medicinal-herbs',
    'gardening',
    230,
    '2023-09-15'
),
(
    'Seasonal Herbalism',
    'Taylor Reed',
    'Align your herbal practice with the seasons. This beautiful guide explores how to use herbs seasonally for optimal wellness throughout the year, with seasonal recipes and rituals. Discover how to attune to nature''s rhythms and harness the power of herbs at their peak potency.',
    16.99,
    'https://images.unsplash.com/photo-1598022124758-99a923ee6048?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/seasonal-herbalism',
    'seasonal',
    175,
    '2024-01-30'
),
(
    'Brain Herbs: Natural Cognitive Support',
    'Dr. James Wilson',
    'Explore the fascinating world of herbs that support brain health and cognitive function. This comprehensive guide covers herbs like Ginkgo, Bacopa, Lion''s Mane, and Gotu Kola, with research-backed information on their effects on memory, focus, and long-term brain health.',
    18.99,
    'https://images.unsplash.com/photo-1546190181-635c4f8b6132?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/brain-herbs',
    'brain',
    195,
    '2024-02-15'
),
(
    'Herbal Remedies for Women',
    'Dr. Lisa Chen',
    'A woman-centered guide to herbal medicine covering reproductive health, hormonal balance, pregnancy, menopause, and more. Features detailed monographs on herbs specifically beneficial for women''s health concerns and practical recipes for different life stages.',
    21.99,
    'https://images.unsplash.com/photo-1591735126219-c068edf9ea24?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/womens-herbal-remedies',
    'women',
    240,
    '2023-12-10'
),
(
    'Herbal Approaches to Heart Health',
    'Dr. Thomas Morgan',
    'Discover natural approaches to cardiovascular wellness through herbs and lifestyle. This evidence-based guide explores herbs like Hawthorn, Motherwort, and Garlic, along with nutritional strategies and gentle exercises to support a healthy heart.',
    19.99,
    'https://images.unsplash.com/photo-1584308878768-57d3e1e47a48?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/heart-herbs',
    'heart',
    185,
    '2024-03-20'
),
(
    'The Art of Herbal Tea Blending',
    'Sophia Martinez',
    'Master the craft of creating delicious and therapeutic herbal tea blends. Learn about flavor profiles, medicinal properties, and the art of balancing herbs for both taste and healing benefits. Includes 40 blend recipes for various health concerns and occasions.',
    13.99,
    'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&q=80&w=500&h=700',
    'https://example.com/download/herbal-tea-blending',
    'tea',
    145,
    '2023-10-25'
);

-- Add RLS policies if needed
ALTER TABLE public.ebooks ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read ebooks
CREATE POLICY "Allow public read access" 
ON public.ebooks 
FOR SELECT 
USING (true);

-- Create a policy that allows only authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to modify" 
ON public.ebooks 
FOR ALL 
USING (auth.role() = 'authenticated');
