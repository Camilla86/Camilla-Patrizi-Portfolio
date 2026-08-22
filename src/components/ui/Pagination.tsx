'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/** Paginazione accessibile (bottoni con aria-current e aria-label espliciti). */
export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Paginazione risultati" className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Pagina precedente"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-teal-500 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Vai a pagina ${page}`}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors',
            page === currentPage
              ? 'bg-teal-600 text-white'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
          )}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Pagina successiva"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-teal-500 hover:text-teal-700 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
