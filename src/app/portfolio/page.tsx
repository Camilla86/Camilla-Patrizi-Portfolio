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
    'Catalogo completo dei lavori: foto, video e immagini create. Cerca, filtra per categoria o tipo di media e ordina i progetti.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]} />

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
        Una selezione di progetti fotografici, video e immagini create. Usa la ricerca e i filtri per trovare il
        lavoro che ti interessa.
      </p>

      <div className="mt-10">
        <Suspense fallback={<p className="text-slate-500">Caricamento portfolio…</p>}>
          <PortfolioGrid items={portfolioItems} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
