import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** Etichetta compatta per categoria/tipo di media/tag. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-electric-400/30 bg-electric-500/10 px-3 py-1 text-xs font-medium tracking-wide text-electric-300',
        className
      )}
    >
      {children}
    </span>
  );
}
