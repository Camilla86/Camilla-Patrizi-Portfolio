'use client';

import type { SortOption } from '@/types';

const SORT_LABELS: Record<SortOption, string> = {
  recenti: 'Più recenti',
  'meno-recenti': 'Meno recenti',
  alfabetico: 'Ordine alfabetico',
};

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

/** Selettore di ordinamento per il catalogo portfolio. */
export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div>
      <label htmlFor="portfolio-sort" className="sr-only">
        Ordina i risultati
      </label>
      <select
        id="portfolio-sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-teal-500 focus:bg-white"
      >
        {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
          <option key={option} value={option}>
            {SORT_LABELS[option]}
          </option>
        ))}
      </select>
    </div>
  );
}
