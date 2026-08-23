'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/content/site';

// Le parole ciclano nella frase "Trasformo idee in {parola}." — legate ai servizi reali.
const ROLE_WORDS = ['video che convertono', 'landing page efficaci', 'analisi utili', 'workflow più veloci'];

/** Hero cinematico: nome in grande, frase con parola rotante, CTA, sfondo con gradiente animato. */
export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLE_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, delay: -0.9 }
      );
      return () => tl.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg">
      {/* Sfondo con gradiente animato al posto del video: sostituisci con un video reale (hls.js) quando disponibile. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gradient opacity-[0.07] blur-[120px]" />
        <div className="halftone-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center py-32 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">{siteConfig.tagline}</p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {siteConfig.name}
        </h1>

        <p className="blur-in mb-12 text-lg text-muted md:text-xl">
          Trasformo idee in{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-block font-display italic text-text-primary"
            >
              {ROLE_WORDS[roleIndex]}
            </motion.span>
          </AnimatePresence>
          .
        </p>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4">
          <Button href="/portfolio" size="lg">
            Esplora il portfolio
          </Button>
          <Button href="/contatti" variant="secondary" size="lg">
            Richiedi informazioni
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-down bg-text-primary" />
        </span>
      </div>
    </section>
  );
}
