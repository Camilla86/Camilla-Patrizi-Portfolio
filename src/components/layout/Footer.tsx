import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';
import { footerLegalNav, mainNav, siteConfig } from '@/content/site';

/** Footer del sito: nav secondaria, social, link legali, copyright. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su Instagram`}
              className="text-slate-400 transition-colors hover:text-electric-300"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su YouTube`}
              className="text-slate-400 transition-colors hover:text-electric-300"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su TikTok`}
              className="text-slate-400 transition-colors hover:text-electric-300"
            >
              <Music2 className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${siteConfig.name} su LinkedIn`}
              className="text-slate-400 transition-colors hover:text-electric-300"
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
                <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-electric-300">
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
                <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-electric-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-electric-300">
              {siteConfig.email}
            </a>
          </p>
        </nav>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="section-container text-xs text-slate-500">
          © {year} {siteConfig.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
