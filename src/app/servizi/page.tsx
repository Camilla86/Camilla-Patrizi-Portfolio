import Image from 'next/image';
import type { Metadata } from 'next';
import { Check, Clapperboard, LayoutTemplate, Radar, Building2, Workflow, AppWindow } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { categories } from '@/content/categories';
import { buildMetadata, serviceJsonLd } from '@/lib/seo';
import type { Category } from '@/types';

export const metadata: Metadata = buildMetadata({
  title: 'Competenze & Servizi',
  description:
    'Video social, landing page, analisi competitor e società, workflow integrati con l\'AI e mini app: le competenze e i servizi offerti, con esempi di cosa include ogni progetto.',
  path: '/servizi',
});

const ICONS: Record<string, typeof Clapperboard> = {
  Clapperboard,
  LayoutTemplate,
  Radar,
  Building2,
  Workflow,
  AppWindow,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = ICONS[name] ?? Clapperboard;
  return <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />;
}

function ServiceCard({ category }: { category: Category }) {
  return (
    <article id={category.slug} className="glass-card scroll-mt-24 overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1fr_1.3fr]">
        <div className="relative aspect-[16/10] w-full lg:aspect-auto">
          <Image
            src={category.coverImage}
            alt={category.name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
            <ServiceIcon name={category.icon} />
          </span>
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-neutral-950">{category.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{category.description}</p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
            Cosa include
          </p>
          <ul className="mt-3 space-y-2">
            {category.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2.5 text-sm text-neutral-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                {deliverable}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`/portfolio?categoria=${category.slug}`} variant="secondary" size="md">
              Vedi i progetti
            </Button>
            <Button href={`/contatti?servizio=${category.slug}`} size="md">
              Richiedi informazioni
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={categories.map((category) =>
          serviceJsonLd({ name: category.name, description: category.description })
        )}
      />

      <div className="section-container py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Competenze' }]} />

        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Competenze & Servizi
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
          Sei aree in cui posso supportare brand e professionisti: dalla produzione di contenuti video ai
          workflow potenziati dall&apos;intelligenza artificiale. Ogni servizio è pensato per portare un
          risultato concreto e misurabile.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8">
          {categories.map((category) => (
            <ServiceCard key={category.slug} category={category} />
          ))}
        </div>
      </div>

      <CTASection
        title="Non sai da dove iniziare?"
        description="Raccontami il tuo obiettivo: individuiamo insieme il servizio più adatto al tuo progetto."
      />
    </div>
  );
}
