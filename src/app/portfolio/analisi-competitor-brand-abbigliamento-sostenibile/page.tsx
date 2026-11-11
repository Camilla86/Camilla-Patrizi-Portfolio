import type { Metadata } from 'next';
import { Building2, CalendarDays, Clock, Wrench } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RelatedPortfolio } from '@/components/portfolio/RelatedPortfolio';
import { BussolaDelBrand } from '@/components/portfolio/BussolaDelBrand';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPortfolioItemBySlug, getRelatedPortfolioItems } from '@/content/portfolio';
import { getCategoryBySlug } from '@/content/categories';
import { buildMetadata, breadcrumbJsonLd, portfolioItemJsonLd } from '@/lib/seo';
import { formatDate, mediaTypeLabel } from '@/lib/utils';

const SLUG = 'analisi-competitor-brand-abbigliamento-sostenibile';

export const metadata: Metadata = (() => {
  const item = getPortfolioItemBySlug(SLUG);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/portfolio/${SLUG}`,
    image: item.coverImage,
  });
})();

export default function BussolaDelBrandPage() {
  const item = getPortfolioItemBySlug(SLUG);
  if (!item) return null;

  const category = getCategoryBySlug(item.categorySlug);
  const related = getRelatedPortfolioItems(item);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    ...(category ? [{ label: category.shortName, href: `/portfolio?categoria=${category.slug}` }] : []),
    { label: item.title },
  ];

  return (
    <div>
      <JsonLd data={[portfolioItemJsonLd(item), breadcrumbJsonLd(breadcrumbItems)]} />

      <div className="section-container pb-16 pt-32">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <BussolaDelBrand />

          <div>
            <Badge>{mediaTypeLabel(item.mediaType)}</Badge>
            <h1 className="mt-4 font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">
              {item.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{item.excerpt}</p>

            <dl className="mt-6 space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-icon" aria-hidden="true" />
                <dt className="sr-only">Cliente</dt>
                <dd>
                  {item.client} — {item.sector}
                </dd>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarDays className="h-4 w-4 text-icon" aria-hidden="true" />
                <dt className="sr-only">Data</dt>
                <dd>{formatDate(item.date)}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-icon" aria-hidden="true" />
                <dt className="sr-only">Durata</dt>
                <dd>{item.duration}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-icon" aria-hidden="true" />
                <dt className="sr-only">Strumenti</dt>
                <dd>{item.tools.join(', ')}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-9">
              <Button href={`/contatti?rif=${item.slug}`} size="lg">
                Richiedi informazioni
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RelatedPortfolio items={related} />
    </div>
  );
}
