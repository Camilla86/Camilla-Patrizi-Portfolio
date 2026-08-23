import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contatti',
  description: 'Richiedi informazioni su un progetto, un servizio del portfolio o proponi una collaborazione.',
  path: '/contatti',
});

export default function ContactPage() {
  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contatti' }]} />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">Contatti</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Hai un progetto in mente o vuoi maggiori informazioni su un servizio del portfolio? Scrivimi: ti
            risponderò il prima possibile.
          </p>

          <div className="mt-8 space-y-3 text-sm text-text-primary">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-muted"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 transition-colors hover:text-muted"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 transition-colors hover:text-muted"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <Suspense fallback={<p className="text-muted">Caricamento form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
