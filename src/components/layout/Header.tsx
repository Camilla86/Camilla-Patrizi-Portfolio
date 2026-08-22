'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav, siteConfig } from '@/content/site';
import { MobileNav } from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/** Header sticky con navigazione principale, stato attivo e menu mobile. */
export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
      <div className="section-container relative flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-950">
          {siteConfig.name}
        </Link>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium tracking-tight transition-colors',
                    pathname === item.href ? 'text-teal-600' : 'text-neutral-600 hover:text-neutral-950'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/contatti" size="md">
            Richiedi informazioni
          </Button>
        </div>

        <MobileNav items={mainNav} />
      </div>
    </header>
  );
}
