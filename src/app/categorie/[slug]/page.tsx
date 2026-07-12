import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { JsonLd } from '@/components/seo/JsonLd';
import { categories, getCategoryBySlug } from '@/content/categories';
import { portfolioItems } from '@/content/portfolio';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/categorie/${category.slug}`,
    image: category.coverImage,
  });
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const items = portfolioItems.filter((item) => item.categorySlug === category.slug);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Categorie', href: '/categorie' },
    { label: category.name },
  ];

  return (
    <div className="section-container py-16">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{category.name}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">{category.description}</p>

      <div className="mt-10">
        <Suspense fallback={<p className="text-slate-500">Caricamento…</p>}>
          <PortfolioGrid items={items} categories={categories} showCategoryFilter={false} />
        </Suspense>
      </div>
    </div>
  );
}
