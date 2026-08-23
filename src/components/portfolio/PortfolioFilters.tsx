'use client';

import type { Category, MediaType } from '@/types';
import { mediaTypeLabel } from '@/lib/utils';

const MEDIA_TYPES: MediaType[] = ['video', 'landing', 'analisi', 'workflow', 'app'];

interface PortfolioFiltersProps {
  categories: Category[];
  categoryValue: string;
  onCategoryChange: (value: string) => void;
  mediaTypeValue: string;
  onMediaTypeChange: (value: string) => void;
}

/** Filtri per categoria e tipo di progetto del catalogo portfolio. */
export function PortfolioFilters({
  categories,
  categoryValue,
  onCategoryChange,
  mediaTypeValue,
  onMediaTypeChange,
}: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <div>
        <label htmlFor="filter-categoria" className="sr-only">
          Filtra per categoria
        </label>
        <select
          id="filter-categoria"
          value={categoryValue}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-full border border-stroke bg-surface px-4 py-3 text-sm text-text-primary transition-colors focus:border-text-primary/40"
        >
          <option value="tutte">Tutte le categorie</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.shortName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filter-tipo" className="sr-only">
          Filtra per tipo di progetto
        </label>
        <select
          id="filter-tipo"
          value={mediaTypeValue}
          onChange={(e) => onMediaTypeChange(e.target.value)}
          className="rounded-full border border-stroke bg-surface px-4 py-3 text-sm text-text-primary transition-colors focus:border-text-primary/40"
        >
          <option value="tutti">Tutti i tipi</option>
          {MEDIA_TYPES.map((type) => (
            <option key={type} value={type}>
              {mediaTypeLabel(type)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
