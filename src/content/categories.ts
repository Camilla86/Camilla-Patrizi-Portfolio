import type { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'moda-editoriale',
    name: 'Moda & Editoriale',
    description:
      'Campagne stagionali, editoriali per magazine e backstage dalle fashion week: uno sguardo cinematografico sulla moda.',
    coverImage: '/images/categorie/moda-editoriale.svg',
  },
  {
    slug: 'brand-lifestyle',
    name: 'Brand & Lifestyle',
    description:
      'Contenuti realizzati in collaborazione con brand: spot, unboxing e narrazioni lifestyle pensate per la conversione.',
    coverImage: '/images/categorie/brand-lifestyle.svg',
  },
  {
    slug: 'viaggio',
    name: 'Viaggio & Paesaggio',
    description: 'Racconti visivi da giro del mondo: paesaggi, culture e luce naturale come protagonisti assoluti.',
    coverImage: '/images/categorie/viaggio.svg',
  },
  {
    slug: 'ritratto',
    name: 'Ritratto',
    description:
      'Ritratti autoriali e immagini create digitalmente, dove fotografia e intelligenza artificiale si incontrano.',
    coverImage: '/images/categorie/ritratto.svg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
