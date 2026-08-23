'use client';

import { useCallback, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SearchInput } from '@/components/ui/SearchInput';
import { SortSelect } from '@/components/ui/SortSelect';
import { Pagination } from '@/components/ui/Pagination';
import { PortfolioFilters } from '@/components/portfolio/PortfolioFilters';
import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import type { Category, PortfolioItem, SortOption } from '@/types';

const PAGE_SIZE = 6;

interface PortfolioGridProps {
  items: PortfolioItem[];
  categories: Category[];
  showCategoryFilter?: boolean;
}

/** Catalogo portfolio interattivo: ricerca, filtri, ordinamento e paginazione con stato in query string. */
export function PortfolioGrid({ items, categories, showCategoryFilter = true }: PortfolioGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [categoria, setCategoria] = useState(searchParams.get('categoria') ?? 'tutte');
  const [tipo, setTipo] = useState(searchParams.get('tipo') ?? 'tutti');
  const [ordina, setOrdina] = useState<SortOption>((searchParams.get('ordina') as SortOption) ?? 'recenti');
  const [pagina, setPagina] = useState(Number(searchParams.get('pagina') ?? '1'));

  const syncUrl = useCallback(
    (next: { q?: string; categoria?: string; tipo?: string; ordina?: string; pagina?: number }) => {
      const params = new URLSearchParams(searchParams.toString());
      const merged = { q: query, categoria, tipo, ordina, pagina, ...next };

      if (merged.q) params.set('q', merged.q);
      else params.delete('q');
      if (merged.categoria && merged.categoria !== 'tutte') params.set('categoria', merged.categoria);
      else params.delete('categoria');
      if (merged.tipo && merged.tipo !== 'tutti') params.set('tipo', merged.tipo);
      else params.delete('tipo');
      if (merged.ordina && merged.ordina !== 'recenti') params.set('ordina', merged.ordina);
      else params.delete('ordina');
      if (merged.pagina && merged.pagina > 1) params.set('pagina', String(merged.pagina));
      else params.delete('pagina');

      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams, query, categoria, tipo, ordina, pagina]
  );

  const updateQuery = (value: string) => {
    setQuery(value);
    setPagina(1);
    syncUrl({ q: value, pagina: 1 });
  };
  const updateCategoria = (value: string) => {
    setCategoria(value);
    setPagina(1);
    syncUrl({ categoria: value, pagina: 1 });
  };
  const updateTipo = (value: string) => {
    setTipo(value);
    setPagina(1);
    syncUrl({ tipo: value, pagina: 1 });
  };
  const updateOrdina = (value: SortOption) => {
    setOrdina(value);
    syncUrl({ ordina: value });
  };
  const updatePagina = (value: number) => {
    setPagina(value);
    syncUrl({ pagina: value });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();

    let result = items.filter((item) => {
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchesCategoria = categoria === 'tutte' || item.categorySlug === categoria;
      const matchesTipo = tipo === 'tutti' || item.mediaType === tipo;
      return matchesQuery && matchesCategoria && matchesTipo;
    });

    result = [...result].sort((a, b) => {
      if (ordina === 'alfabetico') return a.title.localeCompare(b.title, 'it');
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return ordina === 'recenti' ? diff : -diff;
    });

    return result;
  }, [items, query, categoria, tipo, ordina]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const currentPage = Math.min(pagina, totalPages);
  const paginatedItems = filteredItems.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <SearchInput value={query} onChange={updateQuery} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {showCategoryFilter && (
            <PortfolioFilters
              categories={categories}
              categoryValue={categoria}
              onCategoryChange={updateCategoria}
              mediaTypeValue={tipo}
              onMediaTypeChange={updateTipo}
            />
          )}
          {!showCategoryFilter && (
            <div>
              <label htmlFor="filter-tipo-solo" className="sr-only">
                Filtra per tipo di media
              </label>
              <select
                id="filter-tipo-solo"
                value={tipo}
                onChange={(e) => updateTipo(e.target.value)}
                className="rounded-full border border-stroke bg-surface px-4 py-3 text-sm text-text-primary focus:border-text-primary/40"
              >
                <option value="tutti">Tutti i tipi</option>
                <option value="video">Video social</option>
                <option value="landing">Landing page</option>
                <option value="analisi">Analisi</option>
                <option value="workflow">Workflow AI</option>
                <option value="app">Mini app</option>
              </select>
            </div>
          )}
          <SortSelect value={ordina} onChange={updateOrdina} />
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {filteredItems.length} {filteredItems.length === 1 ? 'risultato' : 'risultati'}
      </p>

      {paginatedItems.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((item, index) => (
            <PortfolioCard key={item.slug} item={item} priority={index < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">
          Nessun risultato per i filtri selezionati. Prova a modificare la ricerca.
        </p>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={updatePagina} />
    </div>
  );
}
