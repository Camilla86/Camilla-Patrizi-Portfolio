# Portfolio Content Creator

Sito portfolio per un content creator — Next.js 14 (App Router), TypeScript, Tailwind CSS. Design cinematico "Apple-style" con palette navy/blu elettrico e layout Bento Grid.

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

## Integrazione 21st.dev Magic MCP (generazione componenti UI)

Il progetto include un file [`.mcp.json`](.mcp.json) che registra il server MCP **Magic** di [21st.dev](https://21st.dev), utile per generare/importare componenti React (shadcn/ui + Tailwind) da Claude Code con il comando `/ui`.

Il file `.mcp.json` è pensato per essere condiviso (nessuna chiave al suo interno): usa il placeholder `${TWENTY_FIRST_API_KEY}`. Per usarlo devi fornire la tua chiave API (creata su [21st.dev/magic/console](https://21st.dev/magic/console)) in uno di questi due modi:

**Opzione A — variabile d'ambiente (usa il `.mcp.json` condiviso)**

PowerShell, per la sessione corrente:
```powershell
$env:TWENTY_FIRST_API_KEY = "la-tua-chiave"
```
Oppure in modo permanente per il tuo utente Windows:
```powershell
setx TWENTY_FIRST_API_KEY "la-tua-chiave"
```
(la chiave fornita in questa sessione è già salvata in `.env.local`, file locale non versionato — copiala da lì).

**Opzione B — registrazione locale via CLI (consigliata: la chiave non finisce in nessun file di progetto)**
```bash
claude mcp add --env API_KEY=la-tua-chiave --scope local --transport stdio 21st-dev-magic -- npx -y @21st-dev/magic@latest
```
Questo salva la chiave solo nella tua configurazione utente locale (`~/.claude.json`), mai nel repository.

In entrambi i casi, **riavvia Claude Code** (o riconnetti i server MCP) perché i nuovi strumenti (`/ui` e i tool di generazione/ricerca componenti) diventino disponibili: un server MCP appena configurato non viene caricato nella sessione già in corso.

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

Questo ambiente non dispone di un generatore di immagini fotorealistiche: le cartelle in `public/images/*` e `public/videos/*` contengono **placeholder** (grafiche SVG generate o segnaposto chiaramente etichettati) al posto delle foto/video reali del content creator. Prima della messa online:

1. Sostituisci i file in `public/images/hero`, `public/images/portfolio`, `public/images/blog`, `public/images/categorie`, `public/images/og` con le foto/immagini reali (stesso nome file o aggiorna i riferimenti in `src/content/*.ts`).
2. Aggiungi i video reali in `public/videos` e aggiorna i campi `videoUrl` in `src/content/portfolio.ts`.
3. Aggiorna i testi placeholder (bio, articoli blog, FAQ) in `src/content/*.ts` e `src/content/blog/*.mdx` con i contenuti definitivi.
4. Aggiorna i link social e i dati di contatto in `src/content/site.ts`.

## Deploy

Il progetto è pronto per il deploy su [Vercel](https://vercel.com) (build Next.js nativa) o qualsiasi hosting Node.js compatibile. Imposta le stesse variabili d'ambiente descritte sopra nella piattaforma di hosting.

## Struttura del progetto

Vedi la sezione "Struttura cartelle" nel documento di pianificazione del progetto per il dettaglio completo di cartelle e file.
