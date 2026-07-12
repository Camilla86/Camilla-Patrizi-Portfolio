import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { BentoGrid, BentoItem, type BentoSize } from '@/components/sections/BentoGrid';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getPortfolioItemBySlug } from '@/content/portfolio';
import { mediaTypeLabel } from '@/lib/utils';

const FEATURED: { slug: string; size: BentoSize }[] = [
  { slug: 'campagna-ss-25-flou', size: 'lg' },
  { slug: 'islanda-luci-boreali', size: 'wide' },
  { slug: 'backstage-defile-milano', size: 'tall' },
  { slug: 'ritratto-ai-sogni-urbani', size: 'sm' },
  { slug: 'spot-brand-aurora', size: 'sm' },
  { slug: 'giappone-kyoto-autunno', size: 'wide' },
];

/** Sezione Home: pezzi di portfolio in evidenza in layout Bento Grid. */
export function FeaturedPortfolio() {
  const items = FEATURED.map(({ slug, size }) => {
    const item = getPortfolioItemBySlug(slug);
    return item ? { item, size } : null;
  }).filter(Boolean) as { item: NonNullable<ReturnType<typeof getPortfolioItemBySlug>>; size: BentoSize }[];

  return (
    <section className="section-container py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-electric-300">In evidenza</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Foto, video e immagini create
          </h2>
        </div>
        <Button href="/portfolio" variant="secondary">
          Vedi tutto il portfolio
        </Button>
      </div>

      <BentoGrid className="mt-10">
        {items.map(({ item, size }) => (
          <BentoItem key={item.slug} size={size}>
            <Link href={`/portfolio/${item.slug}`} className="absolute inset-0">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />

              {item.mediaType === 'video' && (
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Play className="h-4 w-4 text-white" aria-hidden="true" />
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <Badge className="mb-2">{mediaTypeLabel(item.mediaType)}</Badge>
                  <p className="text-lg font-semibold leading-tight text-white">{item.title}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </BentoItem>
        ))}
      </BentoGrid>
    </section>
  );
}
