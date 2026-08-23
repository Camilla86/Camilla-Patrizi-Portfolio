import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import type { PortfolioItem } from '@/types';

interface RelatedPortfolioProps {
  items: PortfolioItem[];
}

/** Elenco di pezzi di portfolio correlati, mostrato nella scheda prodotto. */
export function RelatedPortfolio({ items }: RelatedPortfolioProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="section-container py-20">
      <h2 id="related-heading" className="font-display text-2xl italic tracking-tight text-text-primary">
        Progetti correlati
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
