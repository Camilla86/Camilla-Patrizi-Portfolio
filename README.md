# Portfolio — Camilla Patrizi

Sito portfolio per una digital strategist & AI consultant — Next.js 14 (App Router), TypeScript, Tailwind CSS.
Design moderno con palette **bianco + teal + nero**, tipografia pulita e sezioni ad alto contrasto.

## Architettura del progetto

- **Framework**: Next.js 14 (App Router), rendering statico dove possibile (SSG) e dinamico per le rotte con query string (filtri portfolio, form contatti).
- **Contenuti**: tipizzati in `src/content/*.ts` (nessun CMS esterno), pensati per essere sostituiti facilmente con i dati reali.
- **Design system**: Tailwind CSS con palette bianco/teal/neutral-900 (nero), componenti UI riutilizzabili in `src/components/ui`.
- **SEO**: metadata per pagina, Open Graph, Twitter Card, Schema.org (Person, WebSite, BreadcrumbList, CreativeWork/VideoObject, Service), sitemap e robots generati dinamicamente.
- **Accessibilità**: skip link, focus visibile, contrasti conformi a WCAG AA, markup semantico (nav, landmark, aria-*).

## Struttura cartelle

```
src/
  app/                     # Pagine (App Router)
    page.tsx               # Home
    chi-sono/               # Chi sono
    servizi/                # Competenze & Servizi (6 aree di competenza)
    portfolio/               # Elenco case study (ricerca, filtri, paginazione)
      [slug]/                # Dettaglio case study (sfida/approccio/risultati, correlati)
    contatti/                # Contatti + form "Richiedi informazioni"
    privacy-policy/
    cookie-policy/
    api/contact/route.ts    # API route per l'invio del form contatti
    sitemap.ts / robots.ts
    blog/, faq/, categorie/, chi-siamo/  # Rotte legacy: redirect permanenti verso le nuove pagine
  components/
    layout/                 # Header, Footer, MobileNav, SkipLink
    sections/                # Hero, AboutTeaser, CTASection, FeaturedPortfolio, BentoGrid
    portfolio/                # PortfolioCard, PortfolioGrid, PortfolioFilters, RelatedPortfolio
    ui/                      # Button, Badge, Breadcrumb, Pagination, SearchInput, SortSelect
    forms/ContactForm.tsx
    seo/JsonLd.tsx
  content/                  # Dati del sito (site, categories/servizi, portfolio)
  lib/                      # utils, seo, contact-schema
  types/                    # Tipi condivisi
public/
  images/                  # Placeholder SVG (servizi, portfolio, hero, og)
  favicon/
```

## Competenze / Servizi (fonte unica: `src/content/categories.ts`)

Le stesse 6 aree sono usate sia come categorie di filtro del Portfolio sia come contenuto della pagina `/servizi`:

1. Progetti Video Social
2. Landing Page
3. Analisi Competitor
4. Analisi Società
5. Workflow Integrato AI
6. Mini App & Tool Digitali

Ogni case study in `src/content/portfolio.ts` include: cliente, settore, strumenti usati, sfida, approccio, risultati misurabili, galleria immagini e un CTA "Richiedi informazioni" che precompila il form contatti con il riferimento al progetto (`/contatti?rif=slug`) o al servizio (`/contatti?servizio=slug`).

## Requisiti

- Node.js 18.18+ o 20+
- npm 9+

## Installazione

```bash
npm install
```

## Configurazione (opzionale)

Il form contatti può inviare email reali tramite [Resend](https://resend.com). Crea un file `.env.local` nella root:

```bash
RESEND_API_KEY=la_tua_chiave_resend
CONTACT_TO_EMAIL=email-dove-ricevere-i-messaggi@esempio.com
```

Se `RESEND_API_KEY` non è impostata, il form funziona comunque: i messaggi vengono registrati nel log del server e l'utente vede comunque la conferma di invio (utile in sviluppo/demo).

Imposta anche l'URL pubblico del sito per SEO/Open Graph/sitemap:

```bash
NEXT_PUBLIC_SITE_URL=https://www.tuodominio.it
```

## Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build di produzione

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Sostituire i contenuti media (IMPORTANTE)

Questo ambiente non dispone di un generatore di immagini fotorealistiche: le cartelle in `public/images/*`
contengono **placeholder SVG** al posto di foto/screenshot reali. Prima della messa online:

1. Sostituisci i file in `public/images/hero`, `public/images/servizi`, `public/images/portfolio`, `public/images/og`
   con le immagini reali (stesso nome file o aggiorna i riferimenti in `src/content/*.ts`).
2. Aggiungi eventuali video reali in `public/videos` e aggiorna i campi `videoUrl` in `src/content/portfolio.ts`.
3. Aggiorna i testi placeholder (bio, case study, metriche) in `src/content/*.ts` con i contenuti definitivi.
4. Aggiorna link social e dati di contatto in `src/content/site.ts`.

## Note

- Le rotte `/blog`, `/faq`, `/categorie` e `/chi-siamo` non fanno più parte della navigazione principale (non
  richieste dal progetto attuale): restano come **redirect permanenti** verso le pagine corrispondenti, per non
  rompere eventuali link esterni già indicizzati. I relativi contenuti sorgente restano nel repository come
  riferimento ma non sono collegati da nessuna pagina.
- La navigazione per categoria è integrata nei filtri della pagina `/portfolio` (`?categoria=slug`).

## Deploy

Il progetto è pronto per il deploy su [Vercel](https://vercel.com) (build Next.js nativa) o qualsiasi hosting Node.js compatibile. Imposta le stesse variabili d'ambiente descritte sopra nella piattaforma di hosting.
