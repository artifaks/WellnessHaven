-- Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  reading_time_minutes INTEGER DEFAULT 0
);

-- Add RLS policies
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy for public access (read-only for published posts)
CREATE POLICY "Public can view published blog posts" 
  ON public.blog_posts
  FOR SELECT
  USING (is_published = true);

-- Policy for authenticated users (admin can do everything)
CREATE POLICY "Authenticated users can manage all blog posts" 
  ON public.blog_posts
  FOR ALL
  TO authenticated
  USING (true);

-- Add some sample blog posts
INSERT INTO public.blog_posts (title, slug, content, excerpt, featured_image, author, tags, is_published, reading_time_minutes)
VALUES
  (
    'The Benefits of Chamomile Tea',
    'benefits-of-chamomile-tea',
    '# The Benefits of Chamomile Tea

Chamomile tea is one of the most ancient medicinal herbs known to mankind. Its popularity extends around the world, and it has been used for a variety of healing applications.

## Promotes Sleep and Treats Insomnia

Chamomile contains an antioxidant called apigenin, which binds to certain receptors in your brain that may decrease anxiety and initiate sleep. Studies have shown that chamomile tea may improve the quality of sleep and reduce the time it takes to fall asleep.

## Reduces Stress and Anxiety

The same compounds that help chamomile tea induce sleep also work to reduce stress and anxiety. Regular consumption of chamomile tea may significantly reduce anxiety symptoms.

## Improves Digestive Health

Chamomile tea has anti-inflammatory properties that may help soothe the stomach lining and reduce pain associated with various gastrointestinal conditions. It may also help prevent diarrhea and stomach ulcers.

## Boosts Immune System

Chamomile tea contains phenolic compounds that help strengthen the immune system and protect against bacterial infections. Regular consumption may help prevent colds and fight infections.

## How to Prepare Chamomile Tea

1. Boil water in a kettle or pot
2. Place a chamomile tea bag or 1 tablespoon of dried chamomile flowers in a cup
3. Pour the boiling water over the tea bag or flowers
4. Cover and steep for 5 minutes
5. Remove the tea bag or strain the flowers
6. Add honey or lemon if desired

Enjoy the soothing benefits of this wonderful herbal tea!',
    'Discover the calming and healing properties of chamomile tea, from improving sleep quality to reducing anxiety and boosting your immune system.',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Sarah Johnson',
    ARRAY['chamomile', 'tea', 'sleep', 'anxiety', 'wellness'],
    true,
    4
  ),
  (
    'Essential Herbs for Your Home Garden',
    'essential-herbs-home-garden',
    '# Essential Herbs for Your Home Garden

Growing your own herbs at home is a rewarding experience that provides fresh flavors for your cooking and natural remedies for common ailments. Here are some essential herbs that every home gardener should consider planting.

## Basil

Basil is a versatile culinary herb that adds flavor to many dishes, particularly Italian cuisine. It''s also known for its anti-inflammatory and antioxidant properties.

**Growing Tips:**
- Requires full sun (6-8 hours daily)
- Keep soil consistently moist but not waterlogged
- Pinch off flower buds to encourage leaf growth

## Rosemary

Rosemary is a fragrant herb with needle-like leaves that adds a distinct flavor to meats and roasted vegetables. It contains compounds that may improve memory and concentration.

**Growing Tips:**
- Thrives in full sun
- Prefers well-draining soil
- Drought-tolerant once established

## Mint

Mint is a vigorous herb that''s perfect for teas, desserts, and cocktails. It has digestive benefits and can help alleviate nausea and headaches.

**Growing Tips:**
- Grows well in partial shade
- Keep soil moist
- Plant in containers to prevent spreading

## Lavender

Lavender is known for its calming scent and beautiful purple flowers. It can be used in teas, baked goods, and aromatherapy.

**Growing Tips:**
- Needs full sun
- Requires excellent drainage
- Don''t overwater

## Thyme

Thyme is a low-growing herb with tiny, fragrant leaves. It''s excellent in soups, stews, and with roasted meats. Thyme has antimicrobial properties and may help with coughs and sore throats.

**Growing Tips:**
- Thrives in full sun
- Tolerates drought
- Prefers lean, well-draining soil

Start with these five herbs, and you''ll have a wonderful foundation for your home herb garden!',
    'Learn which herbs are essential for your home garden, with tips on growing conditions and the health benefits each herb provides.',
    'https://images.unsplash.com/photo-1599934548022-9a9767b50dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Michael Chen',
    ARRAY['gardening', 'herbs', 'basil', 'rosemary', 'mint', 'lavender', 'thyme'],
    true,
    5
  ),
  (
    'Herbal Remedies for Common Cold',
    'herbal-remedies-common-cold',
    '# Herbal Remedies for the Common Cold

When you''re feeling under the weather with a cold, herbal remedies can provide natural relief for symptoms and support your immune system. Here are some effective herbal approaches to fighting the common cold.

## Echinacea

Echinacea is one of the most popular herbs for preventing and treating colds. Research suggests it can reduce the duration and severity of cold symptoms by boosting white blood cell production.

**How to Use:**
- Take as a tincture, capsule, or tea at the first sign of symptoms
- Continue for 7-10 days
- Not recommended for long-term use

## Elderberry

Elderberry has powerful antiviral properties that can help fight cold viruses. Studies show it may reduce the duration of colds by up to 4 days.

**How to Use:**
- Take as syrup, gummies, or tea
- Follow package directions for dosage
- Safe for children in appropriate doses

## Ginger

Ginger has anti-inflammatory and antioxidant properties that can help soothe a sore throat and reduce congestion.

**How to Use:**
- Make fresh ginger tea by steeping sliced ginger in hot water
- Add honey and lemon for additional benefits
- Drink 2-3 cups daily while symptoms persist

## Garlic

Garlic contains allicin, a compound with antimicrobial properties that may help fight cold viruses and bacteria.

**How to Use:**
- Eat 1-2 raw garlic cloves daily (chopped or crushed)
- Add to soups and other dishes
- Take odorless garlic supplements if preferred

## Thyme

Thyme is excellent for respiratory infections due to its expectorant and antimicrobial properties.

**How to Use:**
- Make thyme tea by steeping 1 teaspoon dried thyme in hot water
- Add honey to soothe a sore throat
- Drink 2-3 times daily

Remember that while these herbal remedies can be helpful, it''s important to rest, stay hydrated, and consult with a healthcare provider if symptoms are severe or persistent.',
    'Discover natural herbal remedies that can help alleviate symptoms of the common cold and support your immune system during illness.',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Emma Wilson',
    ARRAY['cold remedies', 'echinacea', 'elderberry', 'ginger', 'garlic', 'thyme', 'immune support'],
    true,
    6
  );

-- Create storage buckets for blog images
-- Note: This needs to be done in the Supabase dashboard or using the Supabase CLI
-- Create two buckets: 'blog-images' and 'blog-featured-images'
