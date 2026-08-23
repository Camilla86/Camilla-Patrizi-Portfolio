import Image from 'next/image';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Chi sono',
  description: `Scopri il percorso e il metodo di lavoro di ${siteConfig.name}, digital strategist specializzata in contenuti social, landing page, analisi e workflow AI.`,
  path: '/chi-sono',
});

const VALUES = [
  {
    title: 'Metodo',
    description: 'Ogni progetto parte da un obiettivo chiaro e da un\'analisi dei dati, non da intuizioni casuali.',
  },
  {
    title: 'Collaborazione',
    description: 'Lavoro a stretto contatto con brand e team per costruire soluzioni davvero su misura.',
  },
  {
    title: 'Risultati misurabili',
    description: 'Ogni case study include metriche concrete: quello che conta è l\'impatto reale del lavoro.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="section-container py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Chi sono' }]} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{siteConfig.tagline}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Lavoro all&apos;incrocio tra contenuti digitali e strategia: video social, landing page e analisi
              di mercato, uniti a workflow costruiti con l&apos;intelligenza artificiale per rendere ogni
              processo più veloce ed efficace.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Ogni progetto, che sia un video, una landing page o un&apos;analisi competitor, nasce dalla stessa
              domanda: qual è il risultato concreto che vogliamo ottenere? Da lì costruisco un piano chiaro,
              misurabile e realizzabile nei tempi previsti.
            </p>
            <div className="mt-8">
              <Button href="/portfolio" variant="secondary">
                Vedi il portfolio
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-stroke lg:justify-self-end">
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
              <h2 className="font-display text-lg italic text-text-primary">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
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
