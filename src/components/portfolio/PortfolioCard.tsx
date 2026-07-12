import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { PortfolioItem } from '@/types';
import { mediaTypeLabel } from '@/lib/utils';

interface PortfolioCardProps {
  item: PortfolioItem;
  priority?: boolean;
}

/** Card di un pezzo di portfolio, usata nel catalogo, nelle categorie e nei correlati. */
export function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-colors hover:border-electric-400/50"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.mediaType === 'video' && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur">
            <Play className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="p-5">
        <Badge>{mediaTypeLabel(item.mediaType)}</Badge>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{item.excerpt}</p>
      </div>
    </Link>
  );
}
