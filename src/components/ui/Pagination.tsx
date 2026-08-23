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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-muted transition-colors hover:border-text-primary/40 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30"
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
              ? 'bg-text-primary text-bg'
              : 'text-muted hover:bg-surface hover:text-text-primary'
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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-muted transition-colors hover:border-text-primary/40 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
