'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { mainNav, siteConfig } from '@/content/site';
import { MobileNav } from '@/components/layout/MobileNav';
import { cn } from '@/lib/utils';

const initials = siteConfig.name
  .split(' ')
  .map((part) => part[0])
  .join('');

/** Navbar flottante a pillola: logo, link principali, CTA "Contattami". */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = mainNav.filter((item) => item.href !== '/contatti');

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={cn(
          'inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow duration-300',
          scrolled && 'shadow-md shadow-black/20'
        )}
      >
        <Link href="/" aria-label={`${siteConfig.name} — Home`} className="group shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient p-[1.5px] transition-transform duration-200 group-hover:scale-110">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-bg">
              <span className="font-display text-[13px] italic text-text-primary">{initials}</span>
            </span>
          </span>
        </Link>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden="true" />

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm',
                    pathname === item.href
                      ? 'bg-stroke/50 text-text-primary'
                      : 'text-muted hover:bg-stroke/50 hover:text-text-primary'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <span className="mx-1 hidden h-5 w-px bg-stroke md:block" aria-hidden="true" />

        <Link href="/contatti" className="group relative hidden md:inline-flex">
          <span className="absolute -inset-[2px] rounded-full bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-sm font-medium text-text-primary backdrop-blur-md">
            Contattami
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </Link>

        <MobileNav items={mainNav} />
      </div>
    </header>
  );
}
