import type { NavItem } from '@/types';

// Dati globali del sito: sostituisci con le informazioni reali del content creator.
export const siteConfig = {
  name: 'Camilla Patrizi',
  tagline: 'Content Creator & Visual Storyteller',
  description:
    'Portfolio di Elena Marchetti: fotografia, video e immagini create per brand e progetti editoriali. Racconti visivi cinematografici con un\'estetica pulita e riconoscibile.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.elenamarchetti.it',
  locale: 'it_IT',
  email: 'ciao@elenamarchetti.it',
  social: {
    instagram: 'https://instagram.com/elenamarchetti',
    youtube: 'https://youtube.com/@elenamarchetti',
    tiktok: 'https://tiktok.com/@elenamarchetti',
    linkedin: 'https://linkedin.com/in/elenamarchetti',
  },
} as const;

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Categorie', href: '/categorie' },
  { label: 'Chi sono', href: '/chi-siamo' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contatti', href: '/contatti' },
];

export const footerLegalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];
