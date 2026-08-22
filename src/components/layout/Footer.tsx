import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';
import { footerLegalNav, mainNav, siteConfig } from '@/content/site';

/** Footer del sito: nav secondaria, social, link legali, copyright. Superficie scura per bilanciare la palette bianco + teal + nero. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">{siteConfig.tagline}</p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su Instagram`}
              className="text-neutral-400 transition-colors hover:text-teal-400"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su YouTube`}
              className="text-neutral-400 transition-colors hover:text-teal-400"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su TikTok`}
              className="text-neutral-400 transition-colors hover:text-teal-400"
            >
              <Music2 className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su LinkedIn`}
              className="text-neutral-400 transition-colors hover:text-teal-400"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Navigazione footer">
          <p className="text-sm font-semibold text-white">Esplora</p>
          <ul className="mt-4 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-neutral-400 transition-colors hover:text-teal-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informazioni legali">
          <p className="text-sm font-semibold text-white">Legale</p>
          <ul className="mt-4 space-y-2.5">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-neutral-400 transition-colors hover:text-teal-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-500">
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-teal-400">
              {siteConfig.email}
            </a>
          </p>
        </nav>
      </div>

      <div className="border-t border-neutral-800 py-6">
        <p className="section-container text-xs text-neutral-500">
          © {year} {siteConfig.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
