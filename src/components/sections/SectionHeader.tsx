'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  subtext: string;
  cta?: { href: string; label: string };
}

/** Intestazione di sezione riutilizzabile: eyebrow, titolo, sottotesto, CTA opzionale — con reveal al viewport. */
export function SectionHeader({ eyebrow, heading, subtext, cta }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-wrap items-end justify-between gap-6"
    >
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</span>
        </div>
        <h2 className="font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-md text-sm text-muted">{subtext}</p>
      </div>
      {cta && (
        <Button href={cta.href} variant="secondary" className="hidden md:inline-flex">
          {cta.label}
        </Button>
      )}
    </motion.div>
  );
}
