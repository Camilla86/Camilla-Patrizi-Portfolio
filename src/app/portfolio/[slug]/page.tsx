import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Play, MapPin, CalendarDays } from 'lucide-react';
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
    ...(category ? [{ label: category.name, href: `/categorie/${category.slug}` }] : []),
    { label: item.title },
  ];

  return (
    <div>
      <JsonLd data={[portfolioItemJsonLd(item), breadcrumbJsonLd(breadcrumbItems)]} />

      <div className="section-container py-16">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10">
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
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                    <Play className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </span>
              )}
            </div>

            {item.mediaType === 'video' && (
              <p className="mt-3 text-xs text-slate-500">
                Anteprima placeholder: sostituisci con il file video reale in <code>/public/videos</code>.
              </p>
            )}

            {item.gallery.length > 1 && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {item.gallery.slice(1).map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
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
          </div>

          <div>
            <Badge>{mediaTypeLabel(item.mediaType)}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.title}</h1>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {formatDate(item.date)}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {item.location}
                </span>
              )}
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-300">{item.description}</p>

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
