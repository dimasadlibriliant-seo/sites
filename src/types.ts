export type Language = 'EN' | 'DE' | 'ID';

export interface TimelineEvent {
  year: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'life' | 'work' | 'history';
}

export interface Book {
  id: string;
  title: Record<Language, string>;
  originalTitle: string;
  year: number;
  description: Record<Language, string>;
  coverUrl: string;
  genres: string[];
  quotes: Record<Language, string>[];
}

export interface Quote {
  id: string;
  text: Record<Language, string>;
  source: Record<Language, string>;
}

export interface Article {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  publishedDate: string;
  readTime: string;
  author: string;
  coverUrl: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  imageUrl: string;
  year: string;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}
