
export interface Herb {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  uses: string[];
  preparation: string;
  imageUrl: string;
  benefits: string[];
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
  benefits?: string;
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
}
