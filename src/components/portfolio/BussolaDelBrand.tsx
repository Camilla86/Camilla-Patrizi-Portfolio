// Contenuto del case study "Bussola del Brand": mappa mentale a 8 aree + schede domanda/risposta.
// Applicato a un caso reale (NaturaSì Bistrot / Vegan&More), fornito dalla professionista.

const AREE = [
  {
    tag: 'Missione — perché esisti',
    domanda: 'Se il tuo locale chiudesse domani, cosa perderebbe davvero il quartiere?',
    emerso:
      "Offrire pasti semplici e genuini, con ingredienti biologici, per chi cerca un'alimentazione consapevole in ogni momento della giornata.",
  },
  {
    tag: 'Visione — dove vuoi arrivare',
    domanda: 'Tra 5 anni, come vuoi che le persone parlino del tuo locale quando lo consigliano a un amico?',
    emerso: 'Diventare il punto di riferimento locale per chi vuole mangiare sano in modo informale e sostenibile.',
  },
  {
    tag: 'Valori',
    domanda: 'Quali sono le 3-4 cose su cui non sei disposto a scendere a compromessi, anche se costasse di più?',
    emerso: 'Genuinità, sostenibilità, accoglienza, salute, comunità — tradotti in gesti concreti, non in slogan.',
  },
  {
    tag: 'Proposta di valore',
    domanda: "Perché uno dovrebbe scegliere te invece del bar sotto casa, o di un altro locale bio della zona?",
    emerso: "Un ambiente dove il bio non è un'etichetta ma un modo per sentirsi parte di qualcosa.",
  },
  {
    tag: 'Pubblico',
    domanda: "Chi è il cliente che oggi ti fa dire 'questo è esattamente il mio pubblico'? Descrivilo come una persona reale.",
    emerso: "Una persona curiosa, attenta a ciò che mangia ma non rigida: entra per mangiare bene, torna perché si è sentita bene.",
  },
  {
    tag: 'Tono di voce',
    domanda: 'Se il tuo locale fosse una persona, come parlerebbe?',
    emerso: 'Con calore, semplicità e una punta di ironia: competente, mai presuntuosa.',
  },
  {
    tag: 'Posizionamento — sguardo critico',
    domanda: "Qual è il punto debole più probabile della tua proposta, quello che un concorrente onesto ti farebbe notare per primo?",
    emerso: "Il rischio di voler essere tante cose insieme — risolto scegliendo un'identità chiara invece di inseguire tutti.",
  },
  {
    tag: 'Ambizioni strategiche',
    domanda: "Nei prossimi 12 mesi, qual è l'unico risultato che renderebbe quest'anno un successo?",
    emerso: "Ampliare l'accoglienza — più posti, un dehors — per far arrivare più persone e più visibilità.",
  },
];

// Nodi disposti su un ottagono attorno al centro (viewBox 800x800, centro 400,400, raggio 270).
const NODES = [
  { x: 400, y: 130, label: ['Missione'] },
  { x: 591, y: 209, label: ['Visione'] },
  { x: 670, y: 400, label: ['Valori'] },
  { x: 591, y: 591, label: ['Proposta', 'di valore'] },
  { x: 400, y: 670, label: ['Pubblico'] },
  { x: 209, y: 591, label: ['Tono di', 'voce'] },
  { x: 130, y: 400, label: ['Posiziona-', 'mento'] },
  { x: 209, y: 209, label: ['Ambizioni', 'strategiche'] },
];

export function BussolaDelBrand() {
  return (
    <div className="space-y-10">
      <div className="glass-card p-6">
        <h2 className="font-display text-xl italic tracking-tight text-text-primary">Il problema di partenza</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Un bistrot biologico affiliato NaturaSì, con un sottomarchio &quot;Vegan&amp;More&quot; che propone sia
          piatti vegani sia pesce. Il nome stesso conteneva una contraddizione: &quot;Vegan&quot; accanto a
          &quot;pesce&quot; rischiava di non convincere né chi cercava un locale 100% vegano, né chi si aspettava
          un bistrot onnivoro classico.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Prima di scrivere una qualsiasi strategia di comunicazione, serviva capire: chi è davvero questo posto,
          e perché dovrebbe importare a qualcuno?
        </p>
      </div>

      <figure>
        <svg
          viewBox="0 0 800 800"
          role="img"
          aria-label="Mappa mentale con una domanda centrale, chi sei davvero, e otto aree collegate: missione, visione, valori, proposta di valore, pubblico, tono di voce, posizionamento, ambizioni strategiche."
          className="mx-auto w-full max-w-xl"
        >
          {NODES.map((node) => (
            <line
              key={`spoke-${node.x}-${node.y}`}
              x1={400}
              y1={400}
              x2={node.x}
              y2={node.y}
              style={{ stroke: 'hsl(var(--stroke))' }}
              strokeWidth={1.5}
            />
          ))}

          {NODES.map((node) => (
            <circle
              key={`node-${node.x}-${node.y}`}
              cx={node.x}
              cy={node.y}
              r={62}
              style={{ fill: 'hsl(var(--surface))', stroke: 'hsl(var(--stroke))' }}
              strokeWidth={1.5}
            />
          ))}

          <circle
            cx={400}
            cy={400}
            r={88}
            style={{ fill: 'hsl(var(--surface))', stroke: 'hsl(var(--icon))' }}
            strokeWidth={2}
          />

          {NODES.map((node) => (
            <text
              key={`label-${node.x}-${node.y}`}
              x={node.x}
              y={node.label.length > 1 ? node.y - 6 : node.y + 4}
              textAnchor="middle"
              className="font-body text-[13px] font-semibold"
              style={{ fill: 'hsl(var(--text))' }}
            >
              {node.label.map((line, i) => (
                <tspan key={line} x={node.x} dy={i === 0 ? 0 : 16}>
                  {line}
                </tspan>
              ))}
            </text>
          ))}

          <text
            x={400}
            y={393}
            textAnchor="middle"
            className="font-display text-[22px] italic"
            style={{ fill: 'hsl(var(--text))' }}
          >
            <tspan x={400} dy={0}>
              Chi sei,
            </tspan>
            <tspan x={400} dy={26}>
              davvero?
            </tspan>
          </text>
        </svg>
        <figcaption className="mx-auto mt-4 max-w-md text-center text-sm text-muted">
          Le otto aree che una strategia di brand deve attraversare, tutte collegate alla stessa domanda di fondo.
        </figcaption>
      </figure>

      <div className="glass-card p-6">
        <h2 className="font-display text-xl italic tracking-tight text-text-primary">Il metodo dietro la mappa</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Tutta questa mappa nasce da una strategia di comunicazione precisa: sapere dialogare con
          un&apos;intelligenza artificiale attraverso prompt mirati permette di far emergere in profondità
          missione, visione, tono di voce e posizionamento rispetto ai competitor, partendo da poche domande ben
          poste.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl italic tracking-tight text-text-primary">Le domande, area per area</h2>
        <p className="mt-2 text-sm text-muted">Una domanda esempio per ciascuna, e cosa è emerso nel caso reale.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {AREE.map((area) => (
            <div key={area.tag} className="glass-card p-5">
              <span className="inline-block rounded-full border border-stroke px-2.5 py-1 text-[11px] uppercase tracking-wide text-icon">
                {area.tag}
              </span>
              <p className="mt-3 font-display text-lg italic leading-snug text-text-primary">
                &quot;{area.domanda}&quot;
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted">Cosa è emerso</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{area.emerso}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-stroke pt-8">
        <h2 className="font-display text-xl italic tracking-tight text-text-primary">Come si usa</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="glass-card p-5">
            <span className="font-display text-2xl italic text-icon">01</span>
            <p className="mt-2 text-sm text-muted">
              Fase iniziale di ideazione: prima ancora di scrivere un piano marketing, serve chiarezza su chi si è
              davvero.
            </p>
          </div>
          <div className="glass-card p-5">
            <span className="font-display text-2xl italic text-icon">02</span>
            <p className="mt-2 text-sm text-muted">
              Da soli o in team: ogni domanda funziona come riflessione personale o come traccia per un workshop
              condiviso.
            </p>
          </div>
          <div className="glass-card p-5">
            <span className="font-display text-2xl italic text-icon">03</span>
            <p className="mt-2 text-sm text-muted">
              Niente risposte giuste: sono domande aperte, pensate per far emergere contraddizioni prima che
              diventino problemi di comunicazione.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Dalle risposte a queste otto aree nasce la piattaforma di brand completa: scopo, missione, visione,
          valori, promessa, posizionamento, target e tono di voce — pronta per guidare ogni scelta di comunicazione
          successiva, inclusi i contenuti pubblicati sui diversi canali social.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-stroke px-4 py-2 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-icon" aria-hidden="true" />
          Lavoro in corso: questa non è una versione conclusa, ma la base da cui continuare a costruire.
        </div>
      </div>
    </div>
  );
}
