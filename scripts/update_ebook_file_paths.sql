-- SQL script to update file_path values for existing eBooks
-- This script sets the file_path based on the eBook title
-- Updated with all eBooks from the provided JSON data

-- Update file paths for eBooks with known titles
UPDATE ebooks 
SET file_path = 'Ebooks/Strength Training for Beginners- Building a Foundation for Fitness.pdf' 
WHERE title = 'Strength Training for Beginners- Building a Foundation for Fitness';

UPDATE ebooks 
SET file_path = 'Ebooks/Fasting Facts for Busy Parents- Debunking Common Myths.pdf' 
WHERE title = 'Fasting Facts for Busy Parents- Debunking Common Myths';

UPDATE ebooks 
SET file_path = 'Ebooks/Holistic Wellness Essentials- A Beginner''s Guide to Wellness.pdf' 
WHERE title = 'Holistic Wellness Essentials- A Beginner''s Guide to Wellness';

UPDATE ebooks 
SET file_path = 'Ebooks/Nature''s Pharmacy- The Healing Power of Herbs vs. Modern Vitamins.pdf' 
WHERE title = 'Nature''s Pharmacy- The Healing Power of Herbs vs. Modern Vitamins';

UPDATE ebooks 
SET file_path = 'Ebooks/Unlocking Your Body- Fitness Biohacks for Peak Performance.pdf' 
WHERE title = 'Unlocking Your Body- Fitness Biohacks for Peak Performance';

UPDATE ebooks 
SET file_path = 'Ebooks/Timeless Herbs- Nature''s Path to Graceful Aging.pdf' 
WHERE title = 'Timeless Herbs- Nature''s Path to Graceful Aging';

UPDATE ebooks 
SET file_path = 'Ebooks/Herbal Harmony- Natural Remedies for Common Women''s Ailments.pdf' 
WHERE title = 'Herbal Harmony- Natural Remedies for Common Women''s Ailments';

UPDATE ebooks 
SET file_path = 'Ebooks/Eat Freely- The Intuitive Path to Lasting Weight Loss.pdf' 
WHERE title = 'Eat Freely- The Intuitive Path to Lasting Weight Loss';

UPDATE ebooks 
SET file_path = 'Ebooks/Fit for Life- A Personal Trainer''s Guide to Staying in Shape.pdf' 
WHERE title = 'Fit for Life- A Personal Trainer''s Guide to Staying in Shape';

UPDATE ebooks 
SET file_path = 'Ebooks/Fit in a Flash- 30-Minute HIIT Workouts for Busy Professionals.pdf' 
WHERE title = 'Fit in a Flash- 30-Minute HIIT Workouts for Busy Professionals';

UPDATE ebooks 
SET file_path = 'Ebooks/Five Keys to Wellness- A Guide to Health-Related Fitness.pdf' 
WHERE title = 'Five Keys to Wellness- A Guide to Health-Related Fitness';

UPDATE ebooks 
SET file_path = 'Ebooks/The Healing Power of Herbs- A Guide to Optimal Health.pdf' 
WHERE title = 'The Healing Power of Herbs- A Guide to Optimal Health';

UPDATE ebooks 
SET file_path = 'Ebooks/Nature''s Nutrition- A Complete Guide to Healing Superfoods.pdf' 
WHERE title = 'Nature''s Nutrition- A Complete Guide to Healing Superfoods';

UPDATE ebooks 
SET file_path = 'Ebooks/Fast & Flavorful- Quick Vegan Recipes for Your Hectic Life.pdf' 
WHERE title = 'Fast & Flavorful- Quick Vegan Recipes for Your Hectic Life';

UPDATE ebooks 
SET file_path = 'Ebooks/The Art of Vegan Cooking- Mastering Plant-Based Flavors.pdf' 
WHERE title = 'The Art of Vegan Cooking- Mastering Plant-Based Flavors';

UPDATE ebooks 
SET file_path = 'Ebooks/The 21-Day Intermittent Fasting Challenge- A Step-by-Step Weight Loss Program.pdf' 
WHERE title = 'The 21-Day Intermittent Fasting Challenge- A Step-by-Step Weight Loss Program';

UPDATE ebooks 
SET file_path = 'Ebooks/Nature''s Remedies- Ancient Herbs for Modern Health.pdf' 
WHERE title = 'Nature''s Remedies- Ancient Herbs for Modern Health';

UPDATE ebooks 
SET file_path = 'Ebooks/The Healing Herbarium- Age-Old Remedies for Today''s Ailments.pdf' 
WHERE title = 'The Healing Herbarium- Age-Old Remedies for Today''s Ailments';

UPDATE ebooks 
SET file_path = 'Ebooks/Awakening the Body- Mindful Practices for Holistic Health.pdf' 
WHERE title = 'Awakening the Body- Mindful Practices for Holistic Health';

UPDATE ebooks 
SET file_path = 'Ebooks/Nature''s Elixirs- The Art of Making Herbal Tinctures.pdf' 
WHERE title = 'Nature''s Elixirs- The Art of Making Herbal Tinctures';

UPDATE ebooks 
SET file_path = 'Ebooks/The Herbalist''s Companion- A Field Guide to Medicinal Plants.pdf' 
WHERE title = 'The Herbalist''s Companion- A Field Guide to Medicinal Plants';

UPDATE ebooks 
SET file_path = 'Ebooks/Healing with Herbs- A Beginner''s Guide to Making Herbal Tinctures.pdf' 
WHERE title = 'Healing with Herbs- A Beginner''s Guide to Making Herbal Tinctures';

UPDATE ebooks 
SET file_path = 'Ebooks/Flourish After Fifty- Secrets to Lasting Health and Energy.pdf' 
WHERE title = 'Flourish After Fifty- Secrets to Lasting Health and Energy';

UPDATE ebooks 
SET file_path = 'Ebooks/Boosting Metabolism and Fat Loss.pdf' 
WHERE title = 'Boosting Metabolism and Fat Loss';

UPDATE ebooks 
SET file_path = 'Ebooks/The Ultimate Vegan Cookbook for a Healthier You.pdf' 
WHERE title = 'The Ultimate Vegan Cookbook for a Healthier You';

UPDATE ebooks 
SET file_path = 'Ebooks/The Complete Guide to Intermittent Fasting for Weight Loss.pdf' 
WHERE title = 'The Complete Guide to Intermittent Fasting for Weight Loss';

UPDATE ebooks 
SET file_path = 'ebooks/Fast_and_Flavorful.pdf' 
WHERE title = 'Fast & Flavorful: Quick Vegan Recipes for Your Hectic Life';

UPDATE ebooks 
SET file_path = 'ebooks/Awakening_the_Body.pdf' 
WHERE title = 'Awakening the Body: Mindful Practices for Holistic Health';

UPDATE ebooks 
SET file_path = 'ebooks/Boosting_Metabolism.pdf' 
WHERE title = 'Boosting Metabolism and Fat Loss';

UPDATE ebooks 
SET file_path = 'ebooks/The_Complete_Guide_to_Intermittent_Fasting.pdf' 
WHERE title = 'The Complete Guide to Intermittent Fasting for Weight Loss';

UPDATE ebooks 
SET file_path = 'ebooks/The_Ultimate_Vegan_Cookbook.pdf' 
WHERE title = 'The Ultimate Vegan Cookbook for a Healthier You';

-- For any eBooks with cover images but no file_path, create a file_path based on the title
UPDATE ebooks 
SET file_path = LOWER(REPLACE(REPLACE(REPLACE(REPLACE(title, ' ', '_'), ':', ''), '&', 'and'), '''', '')) || '.pdf'
WHERE file_path IS NULL AND cover_image IS NOT NULL;

-- Verify the updates
SELECT id, title, file_path, cover_image 
FROM ebooks 
ORDER BY title;
