import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

/** Hero cinematico della Home: titolo, sottotitolo, doppia CTA e visual generato. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />

      <div className="section-container relative grid gap-12 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-electric-300">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Racconto storie visive che restano impresse.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            Foto, video e immagini create per brand e progetti editoriali, con un’estetica cinematografica e
            riconoscibile. Scopri i lavori nel portfolio o raccontami la tua idea.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/portfolio" size="lg">
              Esplora il portfolio
            </Button>
            <Button href="/contatti" variant="secondary" size="lg">
              Richiedi informazioni
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/hero/hero-main.svg"
            alt={`Visual rappresentativo del lavoro di ${siteConfig.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
