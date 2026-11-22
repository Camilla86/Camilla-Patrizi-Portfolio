import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Building2, CalendarDays, Clock, Wrench, ArrowUpRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RelatedPortfolio } from '@/components/portfolio/RelatedPortfolio';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  customPageSlugs,
  getPortfolioItemBySlug,
  getRelatedPortfolioItems,
  portfolioItems,
} from '@/content/portfolio';
import { getCategoryBySlug } from '@/content/categories';
import { buildMetadata, breadcrumbJsonLd, portfolioItemJsonLd } from '@/lib/seo';
import { formatDate, mediaTypeLabel } from '@/lib/utils';

// Slug dei progetti le cui immagini vanno mostrate intere (senza ritaglio), perché contengono testo/dettagli importanti.
const SHOW_FULL_IMAGE_SLUGS = ['serie-reel-lancio-aurora-skincare', 'workflow-ai-produzione-contenuti-editoriali'];

export function generateStaticParams() {
  // I progetti con pagina dedicata (es. src/app/portfolio/borsa-3in1) non usano questo template.
  return portfolioItems.filter((item) => !customPageSlugs.includes(item.slug)).map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPortfolioItemBySlug(params.slug);
  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/portfolio/${item.slug}`,
    image: item.coverImage,
  });
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const item = getPortfolioItemBySlug(params.slug);
  if (!item) notFound();

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
          <div>
            <PortfolioGallery item={item} showFullImage={SHOW_FULL_IMAGE_SLUGS.includes(item.slug)} />

            {/* Case study: sfida, approccio e risultati del progetto */}
            <div className="mt-10 space-y-8">
              <div>
                <h2 className="font-display text-xl italic tracking-tight text-text-primary">La sfida</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-xl italic tracking-tight text-text-primary">L&apos;approccio</h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.approach}</p>
              </div>
              <div>
                <h2 className="font-display text-xl italic tracking-tight text-text-primary">I risultati</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {item.results.map((result) => (
                    <div key={result.label} className="glass-card p-5">
                      <p className="font-display text-2xl italic tracking-tight text-text-primary">{result.value}</p>
                      <p className="mt-1 text-sm text-muted">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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

            {item.liveUrl && (
              // <a> e non <Link>: la pagina è un file statico in /public, fuori dal router di Next.
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-text-primary underline decoration-stroke underline-offset-4 transition-colors hover:decoration-text-primary"
              >
                Vedi la landing online
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

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
