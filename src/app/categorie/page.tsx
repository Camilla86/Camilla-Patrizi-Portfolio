import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { categories } from '@/content/categories';
import { portfolioItems } from '@/content/portfolio';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Categorie',
  description: 'Esplora il portfolio per categoria: moda ed editoriale, brand e lifestyle, viaggio e ritratto.',
  path: '/categorie',
});

export default function CategoriesPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Categorie' }]} />

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Categorie</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
        Naviga il portfolio a partire dai grandi temi che ne guidano il lavoro creativo.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categories.map((category) => {
          const count = portfolioItems.filter((item) => item.categorySlug === category.slug).length;

          return (
            <Link
              key={category.slug}
              href={`/categorie/${category.slug}`}
              className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-3xl border border-white/10"
            >
              <Image
                src={category.coverImage}
                alt={category.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <div className="relative flex items-end justify-between gap-3 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                  <p className="mt-1 text-sm text-slate-300">
                    {count} {count === 1 ? 'progetto' : 'progetti'}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
