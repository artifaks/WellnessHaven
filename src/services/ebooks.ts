import { supabase } from "@/integrations/supabase/client";
import { Ebook } from "@/types";

// Function to fetch all ebooks from Supabase
export const fetchEbooks = async (): Promise<Ebook[]> => {
  try {
    const { data, error } = await supabase
      .from("ebooks")
      .select("*")
      .order("title");

    if (error) {
      throw error;
    }

    // Transform the Supabase data to match our Ebook type
    return data.map((book) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      imageUrl: book.cover_image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=700",
      previewUrl: book.buy_link || "#",
      tags: [book.category], // Use category as a tag, can be expanded later
      publishDate: book.publish_date,
      pages: book.pages
    }));
  } catch (error) {
    console.error("Error fetching ebooks:", error);
    throw error;
  }
};

// Function to fetch a single ebook by ID
export const fetchEbookById = async (id: string): Promise<Ebook | null> => {
  try {
    const { data, error } = await supabase
      .from("ebooks")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return null;
    }

    // Transform the Supabase data to match our Ebook type
    return {
      id: data.id,
      title: data.title,
      author: data.author,
      description: data.description,
      price: data.price,
      imageUrl: data.cover_image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=700",
      previewUrl: data.buy_link || "#",
      tags: [data.category], // Use category as a tag, can be expanded later
      publishDate: data.publish_date,
      pages: data.pages
    };
  } catch (error) {
    console.error("Error fetching ebook by ID:", error);
    throw error;
  }
};

// Function to fetch ebooks by category
export const fetchEbooksByCategory = async (category: string): Promise<Ebook[]> => {
  try {
    const { data, error } = await supabase
      .from("ebooks")
      .select("*")
      .eq("category", category)
      .order("title");

    if (error) {
      throw error;
    }

    // Transform the Supabase data to match our Ebook type
    return data.map((book) => ({
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      imageUrl: book.cover_image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=700",
      previewUrl: book.buy_link || "#",
      tags: [book.category], // Use category as a tag, can be expanded later
      publishDate: book.publish_date,
      pages: book.pages
    }));
  } catch (error) {
    console.error("Error fetching ebooks by category:", error);
    throw error;
  }
};
