import type { Category } from '@/types';

// Le 6 competenze/servizi offerti, usate sia come categorie del Portfolio
// sia come contenuto della pagina Competenze/Servizi (unica fonte di verità).
export const categories: Category[] = [
  {
    slug: 'video-social',
    name: 'Progetti Video Social',
    shortName: 'Video Social',
    description:
      'Video verticali per Instagram Reels, TikTok e YouTube Shorts pensati per fermare lo scroll e generare interazione reale.',
    coverImage: '/images/servizi/video-social.svg',
    icon: 'Clapperboard',
    deliverables: [
      'Concept, copy e storyboard del contenuto',
      'Riprese o montaggio da materiale esistente',
      'Sottotitoli, sound design e formati multipli (9:16, 1:1, 16:9)',
      'Calendario editoriale e indicazioni di pubblicazione',
    ],
  },
  {
    slug: 'landing-page',
    name: 'Landing Page',
    shortName: 'Landing Page',
    description:
      'Landing page rapide, responsive e orientate alla conversione, con copy persuasivo e struttura ottimizzata per il click.',
    coverImage: '/images/servizi/landing-page.svg',
    icon: 'LayoutTemplate',
    deliverables: [
      'Wireframe e design UI coerente col brand',
      'Sviluppo responsive, veloce e accessibile',
      'Copywriting orientato alla conversione',
      'Integrazione form, tracking ed A/B test di base',
    ],
  },
  {
    slug: 'analisi-competitor',
    name: 'Analisi Competitor',
    shortName: 'Analisi Competitor',
    description:
      'Mappatura dei principali competitor: posizionamento, contenuti, canali e strategia digitale, con opportunità concrete da cogliere.',
    coverImage: '/images/servizi/analisi-competitor.svg',
    icon: 'Radar',
    deliverables: [
      'Mappatura dei competitor diretti e indiretti',
      'Analisi di posizionamento, tono di voce e canali',
      'Benchmark di contenuti e performance social',
      'Report con opportunità e raccomandazioni operative',
    ],
  },
  {
    slug: 'analisi-societa',
    name: 'Analisi Società',
    shortName: 'Analisi Società',
    description:
      'Analisi della presenza digitale e del posizionamento di un\'azienda: punti di forza, criticità e priorità di intervento.',
    coverImage: '/images/servizi/analisi-societa.svg',
    icon: 'Building2',
    deliverables: [
      'Audit del sito, dei canali social e della SEO',
      'Analisi del target e del customer journey',
      'Individuazione di criticità e rischi reputazionali',
      'Piano di priorità con roadmap a breve e medio termine',
    ],
  },
  {
    slug: 'workflow-ai',
    name: 'Workflow Integrato AI',
    shortName: 'Workflow AI',
    description:
      'Automazioni e workflow basati su intelligenza artificiale che velocizzano la produzione di contenuti e la gestione operativa.',
    coverImage: '/images/servizi/workflow-ai.svg',
    icon: 'Workflow',
    deliverables: [
      'Mappatura dei processi da automatizzare',
      'Progettazione del workflow con strumenti AI integrati',
      'Collegamento tra tool (contenuti, dati, comunicazione)',
      'Formazione all\'uso e documentazione del workflow',
    ],
  },
  {
    slug: 'mini-app-tool',
    name: 'Mini App & Tool Digitali',
    shortName: 'Mini App & Tool',
    description:
      'Piccole applicazioni e strumenti digitali su misura, pensati per semplificare un\'attività ricorrente o offrire un servizio interattivo.',
    coverImage: '/images/servizi/mini-app-tool.svg',
    icon: 'AppWindow',
    deliverables: [
      'Definizione della funzionalità chiave (MVP)',
      'Interfaccia semplice, veloce e mobile-friendly',
      'Sviluppo e test funzionale',
      'Consegna con documentazione base per l\'uso',
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
