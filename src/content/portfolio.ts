import type { PortfolioItem } from '@/types';

// Contenuti demo del portfolio. Sostituisci testi, date e percorsi immagine/video
// con quelli reali del content creator prima della messa online.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'campagna-ss-25-flou',
    title: 'Campagna SS25 — Flou',
    excerpt: 'Direzione creativa e scatti per la campagna primavera/estate del brand Flou.',
    description:
      'Una campagna fotografica pensata per raccontare la nuova collezione SS25 attraverso una luce naturale morbida e composizioni minimali. Il lavoro ha incluso moodboard, scouting location e post-produzione color grading.',
    categorySlug: 'moda-editoriale',
    mediaType: 'foto',
    coverImage: '/images/portfolio/campagna-ss-25-flou-1.svg',
    gallery: ['/images/portfolio/campagna-ss-25-flou-1.svg', '/images/portfolio/campagna-ss-25-flou-2.svg'],
    tags: ['campagna', 'moda', 'editoriale'],
    date: '2026-05-12',
    location: 'Milano, Italia',
  },
  {
    slug: 'editoriale-vogue-notte',
    title: 'Editoriale Notturno per Vogue Italia',
    excerpt: 'Serie editoriale ispirata all\'estetica cinematografica urbana notturna.',
    description:
      'Editoriale realizzato per un magazine di moda, incentrato su luci al neon e atmosfere notturne. Un lavoro di squadra con stylist e make-up artist per un risultato dal forte impatto visivo.',
    categorySlug: 'moda-editoriale',
    mediaType: 'foto',
    coverImage: '/images/portfolio/editoriale-vogue-notte-1.svg',
    gallery: ['/images/portfolio/editoriale-vogue-notte-1.svg', '/images/portfolio/editoriale-vogue-notte-2.svg'],
    tags: ['editoriale', 'notturno', 'moda'],
    date: '2026-03-02',
    location: 'Milano, Italia',
  },
  {
    slug: 'backstage-defile-milano',
    title: 'Backstage Défilé Milano',
    excerpt: 'Video backstage dietro le quinte della settimana della moda di Milano.',
    description:
      'Un video documentario girato dietro le quinte di una sfilata durante la Milano Fashion Week, tra prove abito, trucco e i minuti prima dell\'ingresso in passerella.',
    categorySlug: 'moda-editoriale',
    mediaType: 'video',
    coverImage: '/images/portfolio/backstage-defile-milano-1.svg',
    videoUrl: '/videos/backstage-defile-milano.mp4',
    gallery: ['/images/portfolio/backstage-defile-milano-1.svg', '/images/portfolio/backstage-defile-milano-2.svg'],
    tags: ['backstage', 'video', 'fashion week'],
    date: '2026-02-18',
    location: 'Milano, Italia',
  },
  {
    slug: 'spot-brand-aurora',
    title: 'Spot Brand — Aurora Skincare',
    excerpt: 'Spot pubblicitario da 30 secondi per il lancio di una linea skincare.',
    description:
      'Concept, ripresa e montaggio di uno spot pubblicitario per il lancio prodotto di un brand skincare, con un linguaggio visivo pulito e luminoso coerente con l\'identità del brand.',
    categorySlug: 'brand-lifestyle',
    mediaType: 'video',
    coverImage: '/images/portfolio/spot-brand-aurora-1.svg',
    videoUrl: '/videos/spot-brand-aurora.mp4',
    gallery: ['/images/portfolio/spot-brand-aurora-1.svg', '/images/portfolio/spot-brand-aurora-2.svg'],
    tags: ['brand', 'spot', 'skincare'],
    date: '2026-06-01',
    location: 'Torino, Italia',
  },
  {
    slug: 'lifestyle-mattina-brand-x',
    title: 'Lifestyle Mattina — Brand X',
    excerpt: 'Serie fotografica lifestyle per una routine mattutina sponsorizzata.',
    description:
      'Set fotografico realizzato in un appartamento luminoso per raccontare una routine mattutina in collaborazione con un brand di prodotti per la casa.',
    categorySlug: 'brand-lifestyle',
    mediaType: 'foto',
    coverImage: '/images/portfolio/lifestyle-mattina-brand-x-1.svg',
    gallery: [
      '/images/portfolio/lifestyle-mattina-brand-x-1.svg',
      '/images/portfolio/lifestyle-mattina-brand-x-2.svg',
    ],
    tags: ['lifestyle', 'brand', 'casa'],
    date: '2026-04-20',
    location: 'Bologna, Italia',
  },
  {
    slug: 'unboxing-tech-brand',
    title: 'Unboxing Creativo — Tech Brand',
    excerpt: 'Video unboxing stilizzato per il lancio di un nuovo dispositivo tech.',
    description:
      'Un video unboxing curato nei minimi dettagli, con inquadrature macro e sound design dedicato, pensato per i canali social del brand.',
    categorySlug: 'brand-lifestyle',
    mediaType: 'video',
    coverImage: '/images/portfolio/unboxing-tech-brand-1.svg',
    videoUrl: '/videos/unboxing-tech-brand.mp4',
    gallery: ['/images/portfolio/unboxing-tech-brand-1.svg', '/images/portfolio/unboxing-tech-brand-2.svg'],
    tags: ['unboxing', 'tech', 'video'],
    date: '2025-12-10',
    location: 'Milano, Italia',
  },
  {
    slug: 'islanda-luci-boreali',
    title: 'Islanda — Luci del Nord',
    excerpt: 'Serie fotografica notturna dedicata all\'aurora boreale islandese.',
    description:
      'Un viaggio di dieci giorni in Islanda per catturare l\'aurora boreale e i paesaggi vulcanici, tra lunghe esposizioni e temperature sotto zero.',
    categorySlug: 'viaggio',
    mediaType: 'foto',
    coverImage: '/images/portfolio/islanda-luci-boreali-1.svg',
    gallery: ['/images/portfolio/islanda-luci-boreali-1.svg', '/images/portfolio/islanda-luci-boreali-2.svg'],
    tags: ['viaggio', 'natura', 'notturna'],
    date: '2026-01-15',
    location: 'Islanda',
  },
  {
    slug: 'marocco-deserto-agafay',
    title: 'Marocco — Deserto di Agafay',
    excerpt: 'Documentario breve girato nel deserto di Agafay al tramonto.',
    description:
      'Un cortometraggio che racconta il silenzio e i colori del deserto di Agafay, tra dune, luce dorata e culture locali.',
    categorySlug: 'viaggio',
    mediaType: 'video',
    coverImage: '/images/portfolio/marocco-deserto-agafay-1.svg',
    videoUrl: '/videos/marocco-deserto-agafay.mp4',
    gallery: ['/images/portfolio/marocco-deserto-agafay-1.svg', '/images/portfolio/marocco-deserto-agafay-2.svg'],
    tags: ['viaggio', 'documentario', 'deserto'],
    date: '2025-11-05',
    location: 'Marrakech, Marocco',
  },
  {
    slug: 'giappone-kyoto-autunno',
    title: 'Kyoto in Autunno',
    excerpt: 'Serie fotografica tra templi e foglie rosse nella stagione dei momiji.',
    description:
      'Un racconto per immagini della città di Kyoto durante il momiji, la stagione delle foglie rosse, tra templi storici e giardini zen.',
    categorySlug: 'viaggio',
    mediaType: 'foto',
    coverImage: '/images/portfolio/giappone-kyoto-autunno-1.svg',
    gallery: ['/images/portfolio/giappone-kyoto-autunno-1.svg', '/images/portfolio/giappone-kyoto-autunno-2.svg'],
    tags: ['viaggio', 'giappone', 'autunno'],
    date: '2026-05-30',
    location: 'Kyoto, Giappone',
  },
  {
    slug: 'ritratto-serie-identita',
    title: 'Serie "Identità"',
    excerpt: 'Serie di ritratti autoriali sul tema dell\'identità personale.',
    description:
      'Un progetto personale di ritrattistica in bianco e nero che esplora il tema dell\'identità attraverso sguardi e luce drammatica.',
    categorySlug: 'ritratto',
    mediaType: 'foto',
    coverImage: '/images/portfolio/ritratto-serie-identita-1.svg',
    gallery: ['/images/portfolio/ritratto-serie-identita-1.svg', '/images/portfolio/ritratto-serie-identita-2.svg'],
    tags: ['ritratto', 'progetto personale', 'bianco e nero'],
    date: '2026-06-20',
    location: 'Firenze, Italia',
  },
  {
    slug: 'ritratto-ai-sogni-urbani',
    title: 'Sogni Urbani',
    excerpt: 'Serie di immagini create digitalmente ispirate agli skyline metropolitani.',
    description:
      'Una serie di immagini create con strumenti digitali, che reinterpretano gli skyline urbani in chiave onirica, unendo fotografia e composizione generativa.',
    categorySlug: 'ritratto',
    mediaType: 'immagine-creata',
    coverImage: '/images/portfolio/ritratto-ai-sogni-urbani-1.svg',
    gallery: [
      '/images/portfolio/ritratto-ai-sogni-urbani-1.svg',
      '/images/portfolio/ritratto-ai-sogni-urbani-2.svg',
    ],
    tags: ['immagine creata', 'urbano', 'sperimentale'],
    date: '2026-04-02',
  },
  {
    slug: 'visioni-future-ai',
    title: 'Visioni Future',
    excerpt: 'Serie concettuale di immagini create sul tema del futuro e della tecnologia.',
    description:
      'Un progetto sperimentale di immagini create digitalmente per esplorare visivamente il rapporto tra essere umano e tecnologia in chiave futuristica.',
    categorySlug: 'ritratto',
    mediaType: 'immagine-creata',
    coverImage: '/images/portfolio/visioni-future-ai-1.svg',
    gallery: ['/images/portfolio/visioni-future-ai-1.svg', '/images/portfolio/visioni-future-ai-2.svg'],
    tags: ['immagine creata', 'futuro', 'concettuale'],
    date: '2026-02-28',
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getRelatedPortfolioItems(item: PortfolioItem, limit = 3): PortfolioItem[] {
  return portfolioItems
    .filter((candidate) => candidate.slug !== item.slug && candidate.categorySlug === item.categorySlug)
    .slice(0, limit);
}
