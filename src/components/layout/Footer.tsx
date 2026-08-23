'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Instagram, Youtube, Linkedin, Music2, ArrowUpRight } from 'lucide-react';
import { footerLegalNav, mainNav, siteConfig } from '@/content/site';

const MARQUEE_TEXT = 'STRATEGIA DIGITALE E AI • ';

/** Footer/contatti: marquee animato, CTA email, social e link legali. */
export function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!marqueeRef.current) return;
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tween = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
      return () => tween.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <footer className="overflow-hidden border-t border-stroke bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <div className="section-container">
        <div className="overflow-hidden">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-4xl italic text-text-primary/10 sm:text-6xl md:text-7xl"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Parliamo del tuo progetto</p>
          <Link href={`mailto:${siteConfig.email}`} className="group relative mt-6 inline-flex">
            <span className="absolute -inset-[2px] rounded-full bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-base font-medium text-bg transition-colors group-hover:bg-bg group-hover:text-text-primary">
              {siteConfig.email}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-stroke pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponibile per nuovi progetti
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su Instagram`}
              className="text-muted transition-colors hover:text-text-primary"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su YouTube`}
              className="text-muted transition-colors hover:text-text-primary"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su TikTok`}
              className="text-muted transition-colors hover:text-text-primary"
            >
              <Music2 className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su LinkedIn`}
              className="text-muted transition-colors hover:text-text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Link legali" className="flex items-center gap-5">
            {mainNav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-muted transition-colors hover:text-text-primary">
                {item.label}
              </Link>
            ))}
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-muted transition-colors hover:text-text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-center text-xs text-muted/70 md:text-left">
          © {year} {siteConfig.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
