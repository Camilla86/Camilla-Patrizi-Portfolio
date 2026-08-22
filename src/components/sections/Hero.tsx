import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

/** Hero della Home: titolo, sottotitolo, doppia CTA e visual rappresentativo. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />

      <div className="section-container relative grid gap-12 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Strategie digitali e AI che portano risultati misurabili.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600">
            Video social, landing page, analisi competitor e di società, workflow integrati con l&apos;AI e
            mini app su misura: dall&apos;idea al risultato, con un metodo chiaro e concreto.
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

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200">
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
