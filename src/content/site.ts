import type { NavItem } from '@/types';

// Dati globali del sito: sostituisci con le informazioni reali della professionista.
export const siteConfig = {
  name: 'Camilla Patrizi',
  tagline: 'Digital Strategist & AI Consultant',
  description:
    'Portfolio di Camilla Patrizi: video social, landing page, analisi competitor e società, workflow integrati con l\'intelligenza artificiale e mini app su misura per brand e professionisti.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.camillapatrizi-portfolio.it',
  locale: 'it_IT',
  email: 'c.patrizi@hotmail.com',
  social: {
    instagram: 'https://instagram.com/camillapatrizi',
    youtube: 'https://youtube.com/@camillapatrizi',
    tiktok: 'https://tiktok.com/@camillapatrizi',
    linkedin: 'https://linkedin.com/in/camillapatrizi',
  },
} as const;

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Competenze', href: '/servizi' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contatti', href: '/contatti' },
];

export const footerLegalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];
