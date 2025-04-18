import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';

// Sample placeholder images for development
const PLACEHOLDER_IMAGES = {
  'blog-images': [
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1599934548022-9a9767b50dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ],
  'blog-featured-images': [
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2670&auto=format&fit=crop'
  ]
};

/**
 * Upload an image to Supabase storage
 * @param file The file to upload
 * @param bucket The storage bucket to upload to (e.g., 'blog-images', 'herb-images')
 * @returns The public URL of the uploaded image
 */
export const uploadImage = async (file: File, bucket: string): Promise<string> => {
  try {
    // In development mode, use placeholder images until Supabase buckets are set up
    if (process.env.NODE_ENV === 'development' || !bucket) {
      console.log('Using placeholder image for development');
      const placeholders = PLACEHOLDER_IMAGES[bucket as keyof typeof PLACEHOLDER_IMAGES] || PLACEHOLDER_IMAGES['blog-images'];
      return placeholders[Math.floor(Math.random() * placeholders.length)];
    }
    
    // Create a unique file name to prevent collisions
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;
    
    // Upload the file to Supabase storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
    
    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);
    
    return publicUrlData.publicUrl;
  } catch (error) {
    console.error('Error in uploadImage:', error);
    // Return a placeholder image in case of error
    const placeholders = PLACEHOLDER_IMAGES[bucket as keyof typeof PLACEHOLDER_IMAGES] || PLACEHOLDER_IMAGES['blog-images'];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  }
};

/**
 * Delete an image from Supabase storage
 * @param url The public URL of the image to delete
 * @param bucket The storage bucket the image is in
 */
export const deleteImage = async (url: string, bucket: string): Promise<void> => {
  try {
    // Extract the file path from the URL
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/');
    const fileName = pathSegments[pathSegments.length - 1];
    
    // Delete the file from Supabase storage
    const { error } = await supabase.storage
      .from(bucket)
      .remove([fileName]);
    
    if (error) {
      console.error('Error deleting image:', error);
      throw new Error('Failed to delete image');
    }
  } catch (error) {
    console.error('Error in deleteImage:', error);
    throw new Error('Failed to delete image');
  }
};
