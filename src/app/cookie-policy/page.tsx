import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description: `Informativa sull'utilizzo dei cookie sul sito di ${siteConfig.name}.`,
  path: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]} />

      <div className="prose max-w-3xl prose-headings:tracking-tight prose-headings:text-neutral-950 prose-p:text-neutral-700 prose-a:text-teal-600">
        <h1>Cookie Policy</h1>
        <p>
          Questa pagina descrive le tipologie di cookie utilizzati dal sito di {siteConfig.name} e le modalità
          di gestione delle preferenze da parte dell’utente.
        </p>

        <h2>Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell’utente, dove
          vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
        </p>

        <h2>Cookie tecnici</h2>
        <p>
          Il Sito utilizza esclusivamente cookie tecnici, necessari al corretto funzionamento delle pagine (ad
          esempio per ricordare le preferenze di navigazione durante la sessione). Questi cookie non richiedono
          il consenso preventivo dell’utente ai sensi della normativa vigente.
        </p>

        <h2>Cookie di terze parti</h2>
        <p>
          Il Sito non utilizza cookie di profilazione o di tracciamento pubblicitario di terze parti.
        </p>

        <h2>Come gestire i cookie dal browser</h2>
        <p>
          È possibile gestire o disattivare i cookie in qualsiasi momento tramite le impostazioni del proprio
          browser. Si segnala che la disattivazione dei cookie tecnici potrebbe compromettere alcune
          funzionalità del Sito.
        </p>

        <h2>Contatti</h2>
        <p>
          Per qualsiasi domanda relativa a questa Cookie Policy è possibile scrivere a{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </div>
  );
}
