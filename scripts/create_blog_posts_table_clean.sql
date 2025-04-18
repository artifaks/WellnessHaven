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

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published blog posts" 
  ON public.blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage blog posts" 
  ON public.blog_posts
  USING (auth.role() = 'authenticated');

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

INSERT INTO public.blog_posts (
  title,
  slug,
  content,
  excerpt,
  featured_image,
  author,
  tags,
  is_published,
  reading_time_minutes
) VALUES
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

Growing your own herbs at home is a rewarding experience that provides fresh flavors for cooking and natural remedies for common ailments. Here are some essential herbs that every home gardener should consider planting.

## 1. Basil

Basil is a versatile herb that adds wonderful flavor to many dishes, especially Italian cuisine. It''s also known for its anti-inflammatory and antibacterial properties.

**Growing tips:**
- Requires full sun (6-8 hours daily)
- Keep soil consistently moist but not waterlogged
- Pinch off flower buds to encourage leaf growth
- Harvest from the top down, taking a few leaves at a time

## 2. Rosemary

Rosemary is a woody, perennial herb with fragrant, evergreen, needle-like leaves. It''s used in cooking, for its health benefits, and even as a natural insect repellent.

**Growing tips:**
- Thrives in full sun
- Prefers well-draining soil
- Drought-tolerant once established
- Can be grown in containers or in the ground

## 3. Mint

Mint is one of the easiest herbs to grow—sometimes too easy! It''s refreshing in teas, cocktails, and many dishes.

**Growing tips:**
- Grows well in partial shade
- Keep soil moist
- Plant in containers to prevent spreading
- Harvest regularly to encourage new growth

## 4. Thyme

Thyme is a low-growing, woody perennial that''s excellent for ground cover, rock gardens, or as a border plant. Its tiny leaves pack a lot of flavor.

**Growing tips:**
- Needs full sun
- Prefers well-draining soil
- Drought-tolerant
- Trim after flowering to maintain shape

## 5. Cilantro/Coriander

Cilantro leaves and coriander seeds come from the same plant but offer different flavors. This herb is essential in many cuisines worldwide.

**Growing tips:**
- Grows best in cool weather
- Plant in partial shade in warmer climates
- Sow seeds every few weeks for continuous harvest
- Let some plants flower and go to seed for coriander

Start with these five herbs, and you''ll have a wonderful foundation for your home herb garden!',
    'Learn which herbs are essential for your home garden, with tips on how to grow them successfully and use them in your kitchen and home remedies.',
    'https://images.unsplash.com/photo-1599934548022-9a9767b50dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Michael Chen',
    ARRAY['gardening', 'herbs', 'basil', 'rosemary', 'mint', 'thyme', 'cilantro'],
    true,
    5
  ),
  (
    'Adaptogens: Ancient Herbs for Modern Stress',
    'adaptogens-ancient-herbs-modern-stress',
    '# Adaptogens: Ancient Herbs for Modern Stress

In our fast-paced, high-stress world, adaptogens offer a natural way to help our bodies resist and recover from various stressors. These powerful herbs and mushrooms have been used for centuries in traditional Chinese and Ayurvedic medicine.

## What Are Adaptogens?

Adaptogens are non-toxic plants that help the body resist physical, chemical, and biological stressors. They work by targeting the hypothalamic-pituitary-adrenal (HPA) axis and the sympathoadrenal system, both of which are involved in the body''s response to stress.

## Top Adaptogenic Herbs

### Ashwagandha

Often called "Indian ginseng," ashwagandha is one of the most powerful adaptogens. It helps:

- Reduce cortisol levels
- Combat anxiety and depression
- Boost brain function
- Increase energy and stamina
- Support immune function

### Rhodiola Rosea

This herb grows in cold, mountainous regions and has been used for centuries to:

- Fight fatigue
- Improve mental performance
- Enhance physical endurance
- Reduce symptoms of depression
- Support heart health

### Holy Basil (Tulsi)

Revered in India as "The Incomparable One," holy basil:

- Reduces stress and anxiety
- Lowers inflammation
- Protects against infection
- Lowers blood sugar and cholesterol
- Supports respiratory health

### Reishi Mushroom

Known as the "mushroom of immortality" in Chinese medicine, reishi:

- Boosts immune function
- Fights fatigue
- Reduces stress and anxiety
- Supports heart health
- May have anti-cancer properties

## How to Incorporate Adaptogens Into Your Routine

Adaptogens can be consumed in various forms:

1. **Teas and infusions** - A gentle way to introduce adaptogens
2. **Tinctures** - Concentrated liquid extracts
3. **Powders** - Add to smoothies, coffee, or other beverages
4. **Capsules** - Convenient for consistent dosing
5. **Whole foods** - Some adaptogens can be cooked with or eaten raw

Remember that adaptogens work gradually over time. Consistent use for at least 2-3 weeks is typically needed before noticing benefits. Always consult with a healthcare provider before starting any new supplement regimen, especially if you have existing health conditions or take medications.',
    'Discover how adaptogenic herbs like ashwagandha, rhodiola, and holy basil can help your body manage stress and improve overall wellbeing in today''s hectic world.',
    'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2670&auto=format&fit=crop',
    'Sarah Johnson',
    ARRAY['adaptogens', 'stress', 'energy', 'ashwagandha', 'tulsi', 'rhodiola'],
    true,
    10
  );
