'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import type { PortfolioItem } from '@/types';

interface PortfolioGalleryProps {
  item: PortfolioItem;
  showFullImage: boolean;
}

/** Immagine principale + galleria del case study, con lightbox: clic su un'immagine per ingrandirla. */
export function PortfolioGallery({ item, showFullImage }: PortfolioGalleryProps) {
  const images = [item.coverImage, ...item.gallery.slice(1)];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openIndex]);

  const imageClassName = `transition-transform duration-300 group-hover:scale-105 ${
    showFullImage ? 'object-contain' : 'object-cover'
  }`;

  const lightbox = openIndex !== null && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={() => setOpenIndex(null)}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — immagine ingrandita`}
    >
      <button
        type="button"
        onClick={() => setOpenIndex(null)}
        aria-label="Chiudi immagine"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[openIndex]}
          alt={`${item.title} — immagine ingrandita`}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpenIndex(0)}
        aria-label={`Ingrandisci l'immagine di ${item.title}`}
        className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-3xl border border-stroke"
      >
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={imageClassName}
        />
        {item.mediaType === 'video' && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <Play className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </span>
        )}
      </button>

      {item.mediaType === 'video' && (
        <p className="mt-3 text-xs text-muted">
          Anteprima placeholder: sostituisci con il file video reale in <code>/public/videos</code>.
        </p>
      )}

      {item.gallery.length > 1 && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {item.gallery.slice(1).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i + 1)}
              aria-label={`Ingrandisci immagine aggiuntiva di ${item.title}`}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-stroke"
            >
              <Image
                src={src}
                alt={`${item.title} — immagine aggiuntiva`}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className={imageClassName}
              />
            </button>
          ))}
        </div>
      )}

      {mounted && createPortal(lightbox, document.body)}
    </div>
  );
}
