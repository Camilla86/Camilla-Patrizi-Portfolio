// Tipi condivisi per i contenuti del sito.

export type MediaType = 'video' | 'landing' | 'analisi' | 'workflow' | 'app';

export type ProjectCategorySlug =
  | 'video-social'
  | 'landing-page'
  | 'analisi-competitor'
  | 'analisi-societa'
  | 'workflow-ai'
  | 'mini-app-tool';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  excerpt: string;
  /** Sintesi dell'obiettivo del progetto (case study). */
  challenge: string;
  /** Approccio e processo seguito per raggiungere il risultato. */
  approach: string;
  /** Risultati misurabili ottenuti (case study). */
  results: CaseStudyMetric[];
  categorySlug: ProjectCategorySlug;
  mediaType: MediaType;
  client: string;
  sector: string;
  tools: string[];
  coverImage: string;
  gallery: string[];
  videoUrl?: string;
  tags: string[];
  date: string; // ISO 8601
  duration: string;
}

export interface Category {
  slug: ProjectCategorySlug;
  name: string;
  shortName: string;
  description: string;
  coverImage: string;
  icon: string;
  /** Cosa include il servizio, mostrato nella pagina Competenze/Servizi. */
  deliverables: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type SortOption = 'recenti' | 'meno-recenti' | 'alfabetico';
