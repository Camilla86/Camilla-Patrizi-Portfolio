import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Play, Building2, CalendarDays, Clock, Wrench } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RelatedPortfolio } from '@/components/portfolio/RelatedPortfolio';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPortfolioItemBySlug, getRelatedPortfolioItems, portfolioItems } from '@/content/portfolio';
import { getCategoryBySlug } from '@/content/categories';
import { buildMetadata, breadcrumbJsonLd, portfolioItemJsonLd } from '@/lib/seo';
import { formatDate, mediaTypeLabel } from '@/lib/utils';

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
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

      <div className="section-container py-16">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-stroke">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              {item.mediaType === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Play className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </span>
              )}
            </div>

            {item.mediaType === 'video' && (
              <p className="mt-3 text-xs text-muted">
                Anteprima placeholder: sostituisci con il file video reale in <code>/public/videos</code>.
              </p>
            )}

            {item.gallery.length > 1 && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {item.gallery.slice(1).map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stroke"
                  >
                    <Image
                      src={src}
                      alt={`${item.title} — immagine aggiuntiva`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

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
                <Building2 className="h-4 w-4 text-text-primary" aria-hidden="true" />
                <dt className="sr-only">Cliente</dt>
                <dd>
                  {item.client} — {item.sector}
                </dd>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarDays className="h-4 w-4 text-text-primary" aria-hidden="true" />
                <dt className="sr-only">Data</dt>
                <dd>{formatDate(item.date)}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-text-primary" aria-hidden="true" />
                <dt className="sr-only">Durata</dt>
                <dd>{item.duration}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
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
