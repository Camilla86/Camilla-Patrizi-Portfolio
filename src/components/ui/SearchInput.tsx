'use client';

import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/** Campo di ricerca testuale accessibile per il catalogo portfolio. */
export function SearchInput({ value, onChange, placeholder = 'Cerca nel portfolio…' }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
        aria-hidden="true"
      />
      <label htmlFor="portfolio-search" className="sr-only">
        Cerca nel portfolio
      </label>
      <input
        id="portfolio-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-teal-500 focus:bg-white"
      />
    </div>
  );
}
