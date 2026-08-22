import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Combina classi Tailwind evitando conflitti (es. px-2 vs px-4). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formatta una data ISO in formato leggibile italiano (es. "12 marzo 2026"). */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const MEDIA_TYPE_LABELS: Record<string, string> = {
  video: 'Video social',
  landing: 'Landing page',
  analisi: 'Analisi',
  workflow: 'Workflow AI',
  app: 'Mini app',
};

/** Etichetta leggibile per un tipo di media del portfolio. */
export function mediaTypeLabel(mediaType: string) {
  return MEDIA_TYPE_LABELS[mediaType] ?? mediaType;
}
