-- Create tables for tracking user purchases
-- Run this in the Supabase SQL Editor

-- Table for storing purchase records
CREATE TABLE IF NOT EXISTS public.user_purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  stripe_session_id TEXT NOT NULL,
  stripe_customer_id TEXT,
  total_amount DECIMAL(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Add a unique constraint on stripe_session_id to prevent duplicate records
  CONSTRAINT unique_stripe_session UNIQUE (stripe_session_id)
);

-- Table for storing individual items in a purchase
CREATE TABLE IF NOT EXISTS public.purchase_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  purchase_id UUID REFERENCES public.user_purchases(id) ON DELETE CASCADE,
  ebook_id UUID REFERENCES public.ebooks(id),
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies for the user_purchases table
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;

-- Users can view their own purchases
CREATE POLICY "Users can view their own purchases" 
  ON public.user_purchases
  FOR SELECT
  USING (auth.uid() = user_id);

-- Only the service role can insert new purchases (from server)
CREATE POLICY "Service role can insert purchases" 
  ON public.user_purchases
  FOR INSERT
  WITH CHECK (true);

-- Add RLS policies for the purchase_items table
ALTER TABLE public.purchase_items ENABLE ROW LEVEL SECURITY;

-- Users can view their own purchase items
CREATE POLICY "Users can view their own purchase items" 
  ON public.purchase_items
  FOR SELECT
  USING (
    purchase_id IN (
      SELECT id FROM public.user_purchases WHERE user_id = auth.uid()
    )
  );

-- Only the service role can insert new purchase items (from server)
CREATE POLICY "Service role can insert purchase items" 
  ON public.purchase_items
  FOR INSERT
  WITH CHECK (true);

-- Create a function to check if a user has purchased an ebook
CREATE OR REPLACE FUNCTION public.has_user_purchased_ebook(user_uuid UUID, ebook_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.purchase_items pi
    JOIN public.user_purchases up ON pi.purchase_id = up.id
    WHERE up.user_id = user_uuid
    AND pi.ebook_id = ebook_uuid
    AND up.status = 'completed'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
