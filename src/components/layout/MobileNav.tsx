'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  items: NavItem[];
}

/** Menu di navigazione per schermi piccoli: bottone hamburger + pannello a scomparsa. */
export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione'}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700"
      >
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-t border-neutral-200 bg-white/98 backdrop-blur-xl"
        >
          <nav aria-label="Navigazione principale (mobile)" className="section-container flex flex-col gap-1 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                  pathname === item.href ? 'text-teal-600' : 'text-neutral-800 hover:text-neutral-950'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
