// Tipi condivisi per i contenuti del sito.

export type MediaType = 'foto' | 'video' | 'immagine-creata';

export interface PortfolioItem {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  categorySlug: string;
  mediaType: MediaType;
  coverImage: string;
  /** Presente solo per i pezzi con mediaType === 'video'. */
  videoUrl?: string;
  gallery: string[];
  tags: string[];
  date: string; // ISO 8601
  location?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string; // ISO 8601
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string; // MDX grezzo
}

export interface NavItem {
  label: string;
  href: string;
}

export type SortOption = 'recenti' | 'meno-recenti' | 'alfabetico';
