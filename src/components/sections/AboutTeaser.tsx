import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

/** Teaser "Chi sono" mostrato in Home, con rimando alla pagina completa. */
export function AboutTeaser() {
  return (
    <section className="border-t border-white/5 bg-navy-900/40">
      <div className="section-container grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/hero/chi-siamo.svg"
            alt={`Ritratto di ${siteConfig.name}`}
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-electric-300">Chi sono</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {siteConfig.name}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
            Content creator specializzata in fotografia, video e immagini create. Da anni collaboro con brand
            e magazine per costruire narrazioni visive coerenti, eleganti e riconoscibili.
          </p>
          <div className="mt-8">
            <Button href="/chi-siamo" variant="secondary">
              Scopri di più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
