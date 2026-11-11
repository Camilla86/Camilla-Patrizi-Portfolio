import type { PortfolioItem } from '@/types';

// Case study del portfolio. Sostituisci testi, metriche e percorsi immagine/video
// con i contenuti reali prima della messa online (vedi README).
export const portfolioItems: PortfolioItem[] = [
  {
    // La landing è un file statico: public/sciarpa-cachemire-personalizzata/index.html
    slug: 'sciarpa-cachemire-personalizzata',
    title: 'Landing Page — Sciarpa Cachemire Personalizzata',
    excerpt: 'Landing page prodotto per una sciarpa in cachemire personalizzabile con iniziali o monogramma, con anteprima della personalizzazione.',
    challenge:
      'Presentare un accessorio premium personalizzabile con un tono elegante e sobrio, portare l\'utente verso la personalizzazione senza forzature e collegare la pagina al servizio di personalizzazione e ai prodotti correlati, senza claim non verificabili.',
    approach:
      'Ho costruito una pagina editoriale mobile-first: hero con CTA, cinque punti di valore, galleria prodotto, varianti con anteprima di colore e iniziali, blocco di compatibilità con link interno al servizio, occasioni d\'uso, cross-sell, FAQ e CTA finale. SEO on-page con title, meta description e dati strutturati Product e FAQ.',
    results: [
      { label: 'Sezioni della pagina', value: '9' },
      { label: 'Approccio', value: 'Mobile-first' },
      { label: 'Dati strutturati', value: 'Product + FAQ' },
    ],
    categorySlug: 'landing-page',
    mediaType: 'landing',
    client: 'Brand di maglieria in cachemire',
    sector: 'Moda & E-commerce',
    tools: ['HTML', 'CSS', 'JavaScript', 'Schema.org'],
    coverImage: '/images/portfolio/sciarpa-cachemire-personalizzata-.jpg',
    gallery: [
      '/images/portfolio/sciarpa-cachemire-personalizzata-.jpg',
      '/images/portfolio/sciarpa-cachemire-personalizzata-2.jpg',
    ],
    liveUrl: '/sciarpa-cachemire-personalizzata/',
    tags: ['landing page', 'e-commerce', 'SEO on-page'],
    date: '2026-10-29',
    duration: 'Su misura',
  },
  {
    // Il dettaglio di questo progetto è la landing stessa: src/app/portfolio/borsa-3in1/page.tsx
    // (la rotta statica ha la precedenza su portfolio/[slug]).
    slug: 'borsa-3in1',
    title: 'Landing Page — Lancio borsa 3 in 1 MooBag',
    excerpt: 'Landing page di lancio per una borsa fasciatoio che diventa lettino portatile, con offerta a tempo limitato.',
    challenge:
      'Lanciare un prodotto nuovo e poco noto, una borsa che è insieme fasciatoio e lettino, spiegandone in pochi secondi i tre usi e spingendo all\'acquisto durante il periodo di lancio.',
    approach:
      'Ho costruito una pagina in 5 blocchi: hero con promessa e CTA, tre punti di forza con immagini lifestyle, recensioni, offerta con conto alla rovescia e chiamata all\'azione finale. Design mobile-first con barra di acquisto fissa su smartphone.',
    results: [
      { label: 'Sezioni della pagina', value: '5' },
      { label: 'Approccio', value: 'Mobile-first' },
      { label: 'Offerta di lancio', value: 'Con timer a scadenza' },
    ],
    categorySlug: 'landing-page',
    mediaType: 'landing',
    client: 'Lancio prodotto MooBag',
    sector: 'Puericultura & E-commerce',
    tools: ['Next.js', 'React', 'CSS'],
    coverImage: '/images/borsa-3in1/bag-baby-park.webp',
    gallery: [
      '/images/borsa-3in1/bag-baby-park.webp',
      '/images/borsa-3in1/bag-beach-changing.webp',
      '/images/borsa-3in1/bag-interior-straps.webp',
    ],
    tags: ['landing page', 'lancio prodotto', 'conversione'],
    date: '2026-09-21',
    duration: 'Su misura',
  },
  {
    slug: 'serie-reel-lancio-aurora-skincare',
    title: 'Creazione contenuti digitali',
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
    mediaType: 'landing',
    client: 'Aurora Skincare',
    sector: 'Beauty & Cosmetica',
    tools: ['Adobe Premiere Pro', 'CapCut', 'Meta Business Suite'],
    coverImage: '/images/portfolio/360view-di-una-borsa-saint-laurent.png',
    gallery: [
      '/images/portfolio/360view-di-una-borsa-saint-laurent.png',
      '/images/portfolio/Firefly_Gemini%20Flash.png',
      '/images/portfolio/Firefly_Gemini%20Flash_-cinematic%20di%20una%20borsa%20Gucci%20622443.png',
      '/images/portfolio/Gemini_Generated_Image_8crpgp8crpgp8crp.jpg',
      '/images/portfolio/Gemini_Generated_Image_gza210gza210gza2.jpg',
      '/images/portfolio/Gemini_Generated_Image_q2izd1q2izd1q2iz.jpg',
      '/images/portfolio/cinematic-di-un-profumo-dior.png',
      '/images/portfolio/image-1793310824091.jpg',
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
    title: 'Strategia digital marketing',
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
    title: 'App Mia Agenda',
    excerpt: 'Prototipo demo di gestionale per ufficio: appuntamenti, messaggi, documenti e dati, in due aree — cliente e operatore.',
    challenge:
      'Molti uffici (studi professionali, segreterie) gestiscono appuntamenti, messaggi e documenti dei clienti in modo manuale e dispersivo, tra telefonate, email e fogli separati.',
    approach:
      'Ho progettato un prototipo dimostrativo con due aree: una per il cliente/paziente, per prenotare appuntamenti, ricevere promemoria e scrivere all\'ufficio; una per l\'operatore, con calendario, messaggi, rubrica clienti, bacheca interna, gestione documenti e una dashboard con report scaricabile.',
    results: [
      { label: 'Aree dell\'app', value: 'Cliente + Operatore' },
      { label: 'Funzioni', value: '7 sezioni operative' },
      { label: 'Tipo', value: 'Prototipo dimostrativo' },
    ],
    categorySlug: 'mini-app-tool',
    mediaType: 'app',
    client: 'Uffici e studi professionali',
    sector: 'Gestionale & Produttività',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/portfolio/analisi-digitale-studio-professionale-1.svg',
    gallery: [
      '/images/portfolio/analisi-digitale-studio-professionale-1.svg',
      '/images/portfolio/analisi-digitale-studio-professionale-2.svg',
    ],
    linkHref: '/agenda',
    tags: ['app', 'gestionale', 'prototipo'],
    date: '2026-01-15',
    duration: 'Su misura',
  },
  {
    slug: 'workflow-ai-produzione-contenuti-editoriali',
    title: 'Insegnante di contenuti',
    excerpt: 'Progettazione Strategica di Content Didattico & Schede Gioco — Format Didattici Interattivi: Imparare Giocando.',
    challenge:
      'L\'obiettivo pedagogico era aumentare l\'attenzione e la retention dei concetti chiave per un target di scuola primaria, supportando anche il lavoro di docenti e genitori nello studio a casa. Le schede didattiche tradizionali, passive e poco coinvolgenti, non bastavano più a tenere viva l\'attenzione.',
    approach:
      'Ho sviluppato Format Didattici Interattivi: Imparare Giocando — Progettazione Strategica di Content Didattico & Schede Gioco, trasformando argomenti come storia e scienze in percorsi di gioco con domande, sfide e ricompense. Il formato a gioco funziona meglio della solita scheda passiva perché richiede un ruolo attivo: per avanzare bisogna ricordare e applicare l\'informazione, rinforzando la memorizzazione invece di limitarsi a leggerla una volta.',
    results: [
      { label: 'Tempo di produzione', value: '-52%' },
      { label: 'Contenuti pubblicati/mese', value: 'da 8 a 18' },
      { label: 'Formazione al team', value: '2 sessioni pratiche' },
    ],
    categorySlug: 'workflow-ai',
    mediaType: 'workflow',
    client: 'Docenti e genitori',
    sector: 'Formazione e didattica',
    tools: ['Canva', 'Claude', 'Google Slides'],
    coverImage: '/images/portfolio/La%20Rivoluzione%20Francese_%20Gioco%20Storico.png',
    gallery: [
      '/images/portfolio/La%20Rivoluzione%20Francese_%20Gioco%20Storico.png',
      '/images/portfolio/Infografica%20educativa%20sulla%20fotosintesi.png',
    ],
    tags: ['workflow', 'automazione', 'intelligenza artificiale'],
    date: '2025-12-10',
    duration: '4 settimane',
  },
  {
    slug: 'mini-app-calcolo-preventivi-fotografia',
    title: 'Modelle AI',
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

/** Slug dei progetti che hanno una pagina dedicata in src/app/portfolio/<slug> invece del template [slug]. */
export const customPageSlugs: string[] = ['borsa-3in1'];

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
