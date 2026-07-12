import Image from 'next/image';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Chi sono',
  description: `Scopri il percorso e i valori di ${siteConfig.name}, content creator specializzata in fotografia, video e immagini create.`,
  path: '/chi-siamo',
});

const VALUES = [
  {
    title: 'Cura visiva',
    description: 'Ogni progetto nasce da una direzione estetica precisa, curata nei minimi dettagli.',
  },
  {
    title: 'Collaborazione',
    description: 'Lavoro a stretto contatto con brand e team creativi per risultati davvero su misura.',
  },
  {
    title: 'Coerenza',
    description: 'Uno stile riconoscibile che accompagna ogni formato: foto, video e immagini create.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="section-container py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Chi sono' }]} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-lg text-electric-300">{siteConfig.tagline}</p>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Da oltre dieci anni racconto storie attraverso immagini in movimento e ferme. Il mio percorso è
              iniziato nella fotografia editoriale, per poi ampliarsi al video e, più di recente, alle immagini
              create digitalmente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Ogni progetto, che sia una campagna per un brand o un racconto di viaggio personale, nasce dalla
              stessa domanda: quale storia voglio far vivere a chi guarda? Da lì costruisco un linguaggio
              visivo coerente, elegante e riconoscibile.
            </p>
            <div className="mt-8">
              <Button href="/portfolio" variant="secondary">
                Vedi il portfolio
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 lg:justify-self-end">
            <Image
              src="/images/hero/chi-siamo.svg"
              alt={`Ritratto di ${siteConfig.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CTASection
        title="Parliamo del tuo progetto"
        description="Che tu rappresenti un brand o abbia un'idea personale, sono felice di ascoltarla."
      />
    </div>
  );
}
