
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
