'use client';

import type { Category, MediaType } from '@/types';
import { mediaTypeLabel } from '@/lib/utils';

const MEDIA_TYPES: MediaType[] = ['foto', 'video', 'immagine-creata'];

interface PortfolioFiltersProps {
  categories: Category[];
  categoryValue: string;
  onCategoryChange: (value: string) => void;
  mediaTypeValue: string;
  onMediaTypeChange: (value: string) => void;
}

/** Filtri per categoria e tipo di media del catalogo portfolio. */
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
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 transition-colors focus:border-electric-400"
        >
          <option value="tutte" className="bg-navy-900">
            Tutte le categorie
          </option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug} className="bg-navy-900">
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filter-tipo" className="sr-only">
          Filtra per tipo di media
        </label>
        <select
          id="filter-tipo"
          value={mediaTypeValue}
          onChange={(e) => onMediaTypeChange(e.target.value)}
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 transition-colors focus:border-electric-400"
        >
          <option value="tutti" className="bg-navy-900">
            Tutti i tipi
          </option>
          {MEDIA_TYPES.map((type) => (
            <option key={type} value={type} className="bg-navy-900">
              {mediaTypeLabel(type)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
