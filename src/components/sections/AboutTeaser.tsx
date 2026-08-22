import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

/** Teaser "Chi sono" mostrato in Home, con rimando alla pagina completa. */
export function AboutTeaser() {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50">
      <div className="section-container grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200">
          <Image
            src="/images/hero/chi-siamo.svg"
            alt={`Ritratto di ${siteConfig.name}`}
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600">Chi sono</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            {siteConfig.name}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-600">
            Digital strategist specializzata in contenuti social, landing page e workflow potenziati dall&apos;AI.
            Aiuto brand e professionisti a trasformare analisi e idee in progetti digitali concreti e misurabili.
          </p>
          <div className="mt-8">
            <Button href="/chi-sono" variant="secondary">
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
