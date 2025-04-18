
export interface Herb {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  uses: string[];
  preparation: string;
  imageUrl: string;
  benefits: string[];
  category?: string;
  
  // New fields for enhanced preparation instructions
  detailedPreparation?: {
    decoction?: string;
    tincture?: string;
    capsules?: string;
    tea?: string;
    poultice?: string;
    oil?: string;
    syrup?: string;
  };
  
  // Dosage information
  dosage?: {
    adult?: string;
    child?: string;
    elderly?: string;
    pregnant?: string;
    maximum?: string;
  };
  
  // Health conditions this herb is beneficial for
  conditions?: string[];
  
  // Contraindications and warnings
  warnings?: string[];
  
  // Collections this herb belongs to (for specialized collections)
  collections?: string[];
  
  // Additional visual elements
  additionalImages?: string[];
  
  // Scientific research references
  research?: string[];
}

export interface DatabaseHerb {
  id: string;
  name: string;
  scientific_name: string;
  description: string;
  uses?: string[];
  traditional_uses?: string[];
  preparation_methods?: string;
  image_url?: string;
  benefits?: string[]; // Changed from string to string[]
  category?: string;
  medicinal_properties?: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  imageUrl: string;
  previewUrl?: string;
  tags: string[];
  publishDate?: string;
  pages?: number;
  category?: string;
}
