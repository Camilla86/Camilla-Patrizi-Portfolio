'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  items: NavItem[];
}

/** Menu di navigazione per schermi piccoli: bottone hamburger dentro la pillola + pannello a scomparsa. */
export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Il pannello va portato fuori dalla pillola dell'header: quella ha backdrop-blur,
  // che crea un nuovo contenitore di posizionamento e "intrappola" i figli position:fixed,
  // facendoli allineare alla pillola (stretta) invece che allo schermo.
  useEffect(() => setMounted(true), []);

  const panel = isOpen && (
    <div
      id="mobile-nav-panel"
      className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-surface/95 backdrop-blur-xl md:hidden"
    >
      <nav aria-label="Navigazione principale (mobile)" className="flex flex-col gap-1 p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-current={pathname === item.href ? 'page' : undefined}
            className={cn(
              'rounded-2xl px-4 py-3 text-base font-medium transition-colors',
              pathname === item.href ? 'bg-stroke/50 text-text-primary' : 'text-muted hover:text-text-primary'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione'}
        className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
