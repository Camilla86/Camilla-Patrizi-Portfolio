import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Informativa sul trattamento dei dati personali raccolti tramite il sito di ${siteConfig.name}.`,
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <div className="prose max-w-3xl prose-headings:tracking-tight prose-headings:text-neutral-950 prose-p:text-neutral-700 prose-a:text-teal-600">
        <h1>Privacy Policy</h1>
        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che
          visitano e interagiscono con il sito di {siteConfig.name} (“il Sito”), in conformità al Regolamento
          (UE) 2016/679 (GDPR) e alla normativa italiana applicabile in materia di protezione dei dati
          personali.
        </p>

        <h2>Titolare del trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati è {siteConfig.name}, contattabile all’indirizzo email{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>Dati raccolti</h2>
        <p>
          Attraverso il form contatti presente nella pagina “Contatti”, il Sito raccoglie i seguenti dati
          personali forniti volontariamente dall’utente: nome, indirizzo email, eventuale riferimento al
          progetto e contenuto del messaggio.
        </p>

        <h2>Finalità del trattamento</h2>
        <p>
          I dati raccolti tramite il form contatti sono utilizzati esclusivamente per rispondere alle richieste
          di informazioni inviate dall’utente e per la gestione di eventuali collaborazioni professionali.
        </p>

        <h2>Base giuridica</h2>
        <p>
          Il trattamento si basa sul consenso dell’utente, espresso tramite l’invio volontario del form, e
          sull’esecuzione di misure precontrattuali richieste dall’interessato stesso.
        </p>

        <h2>Modalità e durata del trattamento</h2>
        <p>
          I dati sono trattati con strumenti informatici e conservati per il tempo strettamente necessario a
          gestire la richiesta ricevuta, salvo obblighi di legge che richiedano una conservazione più lunga.
        </p>

        <h2>Comunicazione a terzi</h2>
        <p>
          I dati possono essere trattati da fornitori terzi che agiscono come responsabili del trattamento (ad
          esempio il servizio utilizzato per l’invio delle email dal form contatti), nel rispetto delle
          garanzie previste dal GDPR.
        </p>

        <h2>Diritti dell’interessato</h2>
        <p>
          In qualsiasi momento l’utente può richiedere l’accesso, la rettifica, la cancellazione dei propri
          dati, la limitazione del trattamento o opporsi allo stesso, scrivendo all’indirizzo email indicato
          sopra.
        </p>

        <h2>Aggiornamenti dell’informativa</h2>
        <p>
          La presente informativa può essere aggiornata periodicamente. Si consiglia di consultarla con
          regolarità.
        </p>
      </div>
    </div>
  );
}
