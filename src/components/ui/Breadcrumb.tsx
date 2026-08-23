import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbEntry[];
}

/** Breadcrumb accessibile con nav semantica; l'ultimo elemento è la pagina corrente. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-text-primary">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className="text-text-primary">
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-stroke" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
