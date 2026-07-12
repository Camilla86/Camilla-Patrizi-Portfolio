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
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
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
        className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-electric-400"
      />
    </div>
  );
}
