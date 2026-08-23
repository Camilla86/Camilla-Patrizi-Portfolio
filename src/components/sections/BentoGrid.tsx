import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[240px] sm:[grid-auto-flow:dense] lg:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
}

const SIZE_CLASSES = {
  sm: 'sm:col-span-1 sm:row-span-1',
  wide: 'sm:col-span-2 sm:row-span-1',
  tall: 'sm:col-span-1 sm:row-span-2',
  lg: 'sm:col-span-2 sm:row-span-2',
} as const;

export type BentoSize = keyof typeof SIZE_CLASSES;

interface BentoItemProps {
  size?: BentoSize;
  children: ReactNode;
  className?: string;
}

/** Cella del Bento Grid: dimensione variabile, stile "glass" cinematico. */
export function BentoItem({ size = 'sm', children, className }: BentoItemProps) {
  return (
    <div
      className={cn(
        'group relative min-h-[220px] overflow-hidden rounded-3xl border border-stroke bg-surface',
        SIZE_CLASSES[size],
        className
      )}
    >
      {children}
    </div>
  );
}
