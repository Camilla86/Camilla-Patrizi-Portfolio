import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { portfolioItems } from '@/content/portfolio';
import { categories } from '@/content/categories';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio',
  description:
    'Case study di progetti digitali: video social, landing page, analisi competitor e società, workflow AI e mini app. Cerca, filtra e sfoglia i progetti.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]} />

      <h1 className="font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Una selezione di case study: video social, landing page, analisi competitor e società, workflow AI e mini
        app. Usa la ricerca e i filtri per trovare il progetto che ti interessa.
      </p>

      <div className="mt-10">
        <Suspense fallback={<p className="text-muted">Caricamento portfolio…</p>}>
          <PortfolioGrid items={portfolioItems} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
