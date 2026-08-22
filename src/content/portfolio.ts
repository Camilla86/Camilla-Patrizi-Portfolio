import type { PortfolioItem } from '@/types';

// Case study del portfolio. Sostituisci testi, metriche e percorsi immagine/video
// con i contenuti reali prima della messa online (vedi README).
export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'serie-reel-lancio-aurora-skincare',
    title: 'Serie Reel di lancio — Aurora Skincare',
    excerpt: 'Una serie di 6 Reel verticali per il lancio di una nuova linea skincare, pensati per il mobile-first.',
    challenge:
      'Aurora Skincare doveva lanciare una nuova linea prodotto senza budget per uno spot tradizionale, puntando tutto sui social. Serviva un contenuto in grado di generare attenzione nei primi 2 secondi e spingere al salvataggio del profilo.',
    approach:
      'Ho sviluppato un concept narrativo in 6 episodi, uno per beneficio prodotto, con copy sincronizzato ai sottotitoli e un ritmo di montaggio pensato per il formato verticale. Ogni Reel è stato pubblicato con un piano editoriale su 3 settimane e testato in due varianti di apertura (hook).',
    results: [
      { label: 'Copertura totale', value: '410K visualizzazioni' },
      { label: 'Tasso di interazione', value: '+38% vs media account' },
      { label: 'Nuovi follower', value: '+2.100 in 3 settimane' },
    ],
    categorySlug: 'video-social',
    mediaType: 'video',
    client: 'Aurora Skincare',
    sector: 'Beauty & Cosmetica',
    tools: ['Adobe Premiere Pro', 'CapCut', 'Meta Business Suite'],
    coverImage: '/images/portfolio/serie-reel-lancio-aurora-skincare-1.svg',
    videoUrl: '/videos/serie-reel-lancio-aurora-skincare.mp4',
    gallery: [
      '/images/portfolio/serie-reel-lancio-aurora-skincare-1.svg',
      '/images/portfolio/serie-reel-lancio-aurora-skincare-2.svg',
    ],
    tags: ['reel', 'social video', 'lancio prodotto'],
    date: '2026-05-12',
    duration: '3 settimane',
  },
  {
    slug: 'landing-page-corso-fotografia-digitale',
    title: 'Landing Page — Corso di Fotografia Digitale',
    excerpt: 'Landing page ad alta conversione per la vendita di un corso online, dal wireframe alla pubblicazione.',
    challenge:
      'Un formatore indipendente aveva un corso video pronto ma nessuna pagina in grado di convertire il traffico proveniente dai social in iscrizioni. La pagina esistente era lenta e poco chiara sul valore offerto.',
    approach:
      'Ho progettato una struttura in 7 sezioni (promessa, programma, prova sociale, FAQ, offerta) con copy orientato al beneficio, un design pulito coerente col brand e un form di iscrizione in due passaggi. Sviluppo responsive con attenzione a tempi di caricamento e Core Web Vitals.',
    results: [
      { label: 'Tasso di conversione', value: '6,4%' },
      { label: 'Tempo di caricamento (LCP)', value: '1,2s' },
      { label: 'Iscrizioni nel primo mese', value: '184' },
    ],
    categorySlug: 'landing-page',
    mediaType: 'landing',
    client: 'Formatore indipendente',
    sector: 'Formazione online',
    tools: ['Next.js', 'Tailwind CSS', 'Google Analytics 4'],
    coverImage: '/images/portfolio/landing-page-corso-fotografia-digitale-1.svg',
    gallery: [
      '/images/portfolio/landing-page-corso-fotografia-digitale-1.svg',
      '/images/portfolio/landing-page-corso-fotografia-digitale-2.svg',
    ],
    tags: ['landing page', 'conversione', 'e-learning'],
    date: '2026-03-02',
    duration: '2 settimane',
  },
  {
    slug: 'analisi-competitor-brand-abbigliamento-sostenibile',
    title: 'Analisi Competitor — Brand di abbigliamento sostenibile',
    excerpt: 'Mappatura di 8 competitor diretti per orientare la strategia digitale di un brand emergente.',
    challenge:
      'Un brand emergente di moda sostenibile non aveva una visione chiara di come si posizionavano i competitor sui canali digitali, rischiando di duplicare contenuti già presidiati dal mercato.',
    approach:
      'Ho mappato 8 competitor diretti e indiretti analizzando posizionamento, tono di voce, canali attivi, frequenza di pubblicazione e tipologia di contenuti con maggiore engagement. Il lavoro si è concluso con un report operativo con 3 aree di opportunità immediatamente attivabili.',
    results: [
      { label: 'Competitor analizzati', value: '8' },
      { label: 'Opportunità individuate', value: '12' },
      { label: 'Tempo di consegna', value: '10 giorni lavorativi' },
    ],
    categorySlug: 'analisi-competitor',
    mediaType: 'analisi',
    client: 'Brand moda sostenibile',
    sector: 'Fashion & Sostenibilità',
    tools: ['Similarweb', 'Meta Ad Library', 'Fogli di calcolo condivisi'],
    coverImage: '/images/portfolio/analisi-competitor-brand-abbigliamento-sostenibile-1.svg',
    gallery: [
      '/images/portfolio/analisi-competitor-brand-abbigliamento-sostenibile-1.svg',
      '/images/portfolio/analisi-competitor-brand-abbigliamento-sostenibile-2.svg',
    ],
    tags: ['analisi competitor', 'strategia', 'moda'],
    date: '2026-02-18',
    duration: '10 giorni',
  },
  {
    slug: 'analisi-digitale-studio-professionale',
    title: 'Analisi Società — Studio professionale locale',
    excerpt: 'Audit completo della presenza digitale di uno studio professionale, con piano di priorità a 90 giorni.',
    challenge:
      'Uno studio professionale con una solida reputazione offline non generava contatti dal proprio sito, senza capire dove si perdesse il potenziale flusso di clienti.',
    approach:
      'Ho condotto un audit su sito, SEO tecnica, canali social e customer journey, individuando colli di bottiglia nel funnel di contatto. Il risultato è stato un piano di priorità su 90 giorni, con interventi ordinati per impatto e sforzo richiesto.',
    results: [
      { label: 'Criticità individuate', value: '15' },
      { label: 'Interventi ad alta priorità', value: '5' },
      { label: 'Richieste di contatto', value: '+27% in 90 giorni' },
    ],
    categorySlug: 'analisi-societa',
    mediaType: 'analisi',
    client: 'Studio professionale',
    sector: 'Servizi professionali',
    tools: ['Google Search Console', 'PageSpeed Insights', 'Hotjar'],
    coverImage: '/images/portfolio/analisi-digitale-studio-professionale-1.svg',
    gallery: [
      '/images/portfolio/analisi-digitale-studio-professionale-1.svg',
      '/images/portfolio/analisi-digitale-studio-professionale-2.svg',
    ],
    tags: ['analisi società', 'audit digitale', 'lead generation'],
    date: '2026-01-15',
    duration: '3 settimane',
  },
  {
    slug: 'workflow-ai-produzione-contenuti-editoriali',
    title: 'Workflow AI — Produzione contenuti editoriali',
    excerpt: 'Un workflow integrato con strumenti AI per dimezzare i tempi di produzione dei contenuti editoriali.',
    challenge:
      'Un piccolo team editoriale impiegava troppo tempo a passare manualmente da bozza testuale a contenuto pubblicato su più canali (blog, newsletter, social), con continui colli di bottiglia.',
    approach:
      'Ho progettato un workflow che collega generazione assistita da AI, revisione umana e pubblicazione multicanale, con checkpoint di controllo qualità in ogni fase. Il team ha ricevuto formazione e documentazione per gestire il workflow in autonomia.',
    results: [
      { label: 'Tempo di produzione', value: '-52%' },
      { label: 'Contenuti pubblicati/mese', value: 'da 8 a 18' },
      { label: 'Formazione al team', value: '2 sessioni pratiche' },
    ],
    categorySlug: 'workflow-ai',
    mediaType: 'workflow',
    client: 'Redazione editoriale indipendente',
    sector: 'Editoria digitale',
    tools: ['Claude', 'Zapier', 'Notion'],
    coverImage: '/images/portfolio/workflow-ai-produzione-contenuti-editoriali-1.svg',
    gallery: [
      '/images/portfolio/workflow-ai-produzione-contenuti-editoriali-1.svg',
      '/images/portfolio/workflow-ai-produzione-contenuti-editoriali-2.svg',
    ],
    tags: ['workflow', 'automazione', 'intelligenza artificiale'],
    date: '2025-12-10',
    duration: '4 settimane',
  },
  {
    slug: 'mini-app-calcolo-preventivi-fotografia',
    title: 'Mini App — Calcolo preventivi per servizi fotografici',
    excerpt: 'Un piccolo strumento web che genera preventivi personalizzati in tempo reale per i clienti.',
    challenge:
      'I clienti chiedevano spesso preventivi personalizzati via email, con tempi di risposta lenti e un processo ripetitivo per chi doveva calcolarli manualmente ogni volta.',
    approach:
      'Ho progettato e sviluppato una mini app web con pochi campi essenziali (tipo di servizio, durata, extra) che calcola in tempo reale una stima di preventivo, inviando poi la richiesta dettagliata via email. Interfaccia minimale, veloce anche da mobile.',
    results: [
      { label: 'Tempo medio di risposta', value: 'da 24h a immediato' },
      { label: 'Richieste gestite/mese', value: '+65%' },
      { label: 'Tempo di sviluppo', value: '2 settimane' },
    ],
    categorySlug: 'mini-app-tool',
    mediaType: 'app',
    client: 'Studio fotografico',
    sector: 'Servizi creativi',
    tools: ['Next.js', 'TypeScript', 'Vercel'],
    coverImage: '/images/portfolio/mini-app-calcolo-preventivi-fotografia-1.svg',
    gallery: [
      '/images/portfolio/mini-app-calcolo-preventivi-fotografia-1.svg',
      '/images/portfolio/mini-app-calcolo-preventivi-fotografia-2.svg',
    ],
    tags: ['mini app', 'tool digitale', 'automazione'],
    date: '2026-06-01',
    duration: '2 settimane',
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getRelatedPortfolioItems(item: PortfolioItem, limit = 3): PortfolioItem[] {
  const sameCategory = portfolioItems.filter(
    (candidate) => candidate.slug !== item.slug && candidate.categorySlug === item.categorySlug
  );
  const others = portfolioItems.filter(
    (candidate) => candidate.slug !== item.slug && candidate.categorySlug !== item.categorySlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
