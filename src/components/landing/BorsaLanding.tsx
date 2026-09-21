import Image from 'next/image';
import { Fraunces, Manrope } from 'next/font/google';
import { borsaImages, borsaOffer } from '@/content/borsa';
import { AnnounceBar, OfferCard, StickyCta } from '@/components/landing/OfferWidgets';
import { Reveal } from '@/components/landing/Reveal';
import './borsa-landing.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const featureSizes = '(min-width: 860px) 560px, 100vw';

/** Landing page di lancio della borsa 3 in 1 (borsa · fasciatoio · lettino). */
export function BorsaLanding() {
  const { productName, checkoutUrl } = borsaOffer;

  return (
    <div className={`lp ${fraunces.variable} ${manrope.variable}`}>
      <AnnounceBar />

      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div>
            <div className="badge">
              <span>NUOVO</span> La borsa 3 in 1 per mamma e papà
            </div>
            <h1 id="hero-title">
              Cambia. Riposa. <em>Parti.</em> Con una sola borsa.
            </h1>
            <p className="lead">
              {productName} è la borsa fasciatoio che in pochi secondi si apre in un comodo lettino portatile. In
              spiaggia, in hotel o a casa dei nonni: tutto quello che serve al tuo bimbo, sempre con te.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary btn-lg" href="#offerta">
                Approfitta dell&apos;offerta di lancio
              </a>
              <a className="btn btn-ghost btn-lg" href="#caratteristiche">
                Scopri come funziona
              </a>
            </div>
            <ul className="trust">
              <li>Spedizione gratuita</li>
              <li>Reso entro 30 giorni</li>
              <li>Interno lavabile</li>
            </ul>
          </div>
          <div className="hero-media">
            <div className="photo">
              <Image
                src={borsaImages.hero}
                alt="Un neonato sorride disteso nella borsa MooBag aperta come lettino, su una coperta al parco"
                fill
                priority
                sizes="(min-width: 900px) 45vw, 100vw"
              />
            </div>
            <div className="sticker" aria-hidden="true">
              <b>3 in 1</b>
              <small>borsa · fasciatoio · lettino</small>
            </div>
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <ul>
          <li>
            <span>①</span>Borsa capiente
          </li>
          <li>
            <span>②</span>Fasciatoio pronto
          </li>
          <li>
            <span>③</span>Lettino portatile
          </li>
        </ul>
      </div>

      {/* 2. Caratteristiche */}
      <section className="block" id="caratteristiche" aria-labelledby="feat-title">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Perché ti cambia la giornata</p>
            <h2 id="feat-title">Tre modi di usarla. Zero cose da ricordare.</h2>
            <p>
              Niente più materassini da portare a parte e zaini che scoppiano: {productName} riunisce tutto in un unico
              oggetto, pensato per le mani impegnate dei genitori.
            </p>
          </Reveal>

          <Reveal as="article" className="feature">
            <div className="f-media zoom">
              <Image
                src={borsaImages.bag}
                alt="MooBag aperta dall'alto: ampio vano rosso con materassino a macchie e tracolle regolabili con moschettoni"
                fill
                sizes={featureSizes}
              />
            </div>
            <div className="f-body">
              <div className="num" aria-hidden="true">
                01
              </div>
              <h3>Una borsa che regge tutto il giorno</h3>
              <p>
                Un grande vano con apertura completa a cerniera: vedi tutto al primo sguardo, non frughi mai più sul
                fondo. L&apos;interno rosso foderato si pulisce con un passaggio di panno umido, anche dopo una giornata
                di sabbia e biberon.
              </p>
              <ul>
                <li>Apertura totale a cerniera, accesso facile a pannolini, salviette e cambio</li>
                <li>Due tracolle regolabili con moschettoni, da spalla o da passeggino</li>
                <li>Rivestimento interno facile da pulire</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="feature flip">
            <div className="f-media">
              <Image
                src={borsaImages.changing}
                alt="Una mamma sorride al suo bimbo mentre lo cambia sul materassino di MooBag, in spiaggia"
                fill
                sizes={featureSizes}
              />
            </div>
            <div className="f-body">
              <div className="num" aria-hidden="true">
                02
              </div>
              <h3>Fasciatoio pronto in tre secondi</h3>
              <p>
                Apri la borsa, appoggia e il piano di cambio è già lì: un materassino imbottito, morbido per il bimbo e
                comodo per la tua schiena. Niente bagni pubblici, niente cambi sulle ginocchia.
              </p>
              <ul>
                <li>Materassino imbottito con fantasia a macchie che nasconde le tracce</li>
                <li>Superficie liscia da igienizzare in un attimo</li>
                <li>Pannello ripiegabile con chiusure a velcro che tiene tutto al suo posto</li>
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="feature">
            <div className="f-media">
              <Image
                src={borsaImages.bed}
                alt="Il bimbo riposa nel lettino MooBag; a destra la stessa borsa chiusa, pronta da portare in spalla"
                fill
                sizes={featureSizes}
              />
            </div>
            <div className="f-body">
              <div className="num" aria-hidden="true">
                03
              </div>
              <h3>Un lettino che viaggia con voi</h3>
              <p>
                Quando è ora del pisolino, la borsa diventa un piccolo nido con sponde morbide: perfetto per il letto
                dell&apos;hotel, il divano dei nonni o un&apos;ombra sulla spiaggia. Il bimbo ritrova il suo posto,
                ovunque siate.
              </p>
              <ul>
                <li>Sponde rialzate che creano uno spazio raccolto e protetto</li>
                <li>Si apre e si richiude in pochi gesti, senza montaggio</li>
                <li>Perfetto per viaggi, vacanze, pisolini fuori casa</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Testimonianze */}
      <section className="block reviews" id="recensioni" aria-labelledby="rev-title">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Parlano i genitori</p>
            <h2 id="rev-title">Le prime che l&apos;hanno provata non tornano indietro.</h2>
          </Reveal>
          <div className="cards">
            <Reveal as="figure" className="card">
              <div className="stars" aria-label="5 stelle su 5">
                ★★★★★
              </div>
              <blockquote>
                “Abbiamo passato dieci giorni al mare con una sola borsa invece di tre. Cambio in spiaggia, pisolino
                all&apos;ombra: mi sembrava di aver barato.”
              </blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  G
                </span>
                <span>
                  <strong>Giulia R.</strong>Mamma di Leo, 8 mesi · <span className="verified">Recensione di esempio</span>
                </span>
              </figcaption>
            </Reveal>
            <Reveal as="figure" className="card">
              <div className="stars" aria-label="5 stelle su 5">
                ★★★★★
              </div>
              <blockquote>
                “Sono un papà molto pratico e mi ha conquistato la semplicità: apri, appoggi, cambi. In hotel è diventata
                il lettino di Sofia. Bellissima anche da vedere.”
              </blockquote>
              <figcaption>
                <span className="avatar b" aria-hidden="true">
                  M
                </span>
                <span>
                  <strong>Marco T.</strong>Papà di Sofia, 1 anno · <span className="verified">Recensione di esempio</span>
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Offerta a tempo limitato */}
      <section className="block offer" id="offerta" aria-labelledby="offer-title">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Offerta di lancio · tempo limitato</p>
            <h2 id="offer-title">
              Solo €{borsaOffer.price} invece di €{borsaOffer.fullPrice}, per chi sale a bordo adesso.
            </h2>
            <p className="sub">
              Per festeggiare l&apos;arrivo di {productName} riserviamo un prezzo speciale al primo lotto. Quando il timer
              arriva a zero, si torna al prezzo pieno.
            </p>
            <ul className="perks">
              <li>Spedizione gratuita in Italia</li>
              <li>Reso gratuito entro 30 giorni</li>
              <li>Garanzia soddisfatti o rimborsati</li>
            </ul>
          </Reveal>
          <Reveal>
            <OfferCard />
          </Reveal>
        </div>
      </section>

      {/* 5. CTA finale */}
      <section className="final" id="ordina" aria-labelledby="final-title">
        <Reveal className="wrap">
          <p className="eyebrow">Pronti a partire?</p>
          <h2 id="final-title">La prossima uscita sarà più leggera. Promesso.</h2>
          <p>
            Una borsa, un fasciatoio, un lettino. Scegli {productName} oggi e parti con tutto quello che serve al tuo
            piccolo.
          </p>
          <a className="btn btn-primary btn-lg" href={checkoutUrl}>
            Acquista {productName} — offerta di lancio
          </a>
          <p className="small">Reso gratuito entro 30 giorni · Se non ti convince, ti rimborsiamo.</p>
        </Reveal>
      </section>

      <p className="demo-note">
        Pagina realizzata come case study di portfolio: prodotto, recensioni, prezzi e condizioni sono di esempio.
      </p>

      <StickyCta />
    </div>
  );
}
