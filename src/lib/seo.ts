import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import type { PortfolioItem } from '@/types';
import type { BreadcrumbEntry } from '@/components/ui/Breadcrumb';

/** Costruisce un oggetto Metadata Next.js coerente per una pagina interna. */
export function buildMetadata(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const { title, description, path, image = '/images/og/default.svg' } = options;
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

/** Schema.org CreativeWork per una scheda di case study del portfolio. */
export function portfolioItemJsonLd(item: PortfolioItem) {
  const commonFields = {
    '@context': 'https://schema.org',
    '@type': item.mediaType === 'video' ? 'VideoObject' : 'CreativeWork',
    name: item.title,
    description: item.excerpt,
    image: `${siteConfig.url}${item.coverImage}`,
    datePublished: item.date,
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    about: item.sector,
  };

  if (item.mediaType === 'video') {
    return {
      ...commonFields,
      thumbnailUrl: `${siteConfig.url}${item.coverImage}`,
      uploadDate: item.date,
      ...(item.videoUrl ? { contentUrl: `${siteConfig.url}${item.videoUrl}` } : {}),
    };
  }

  return commonFields;
}

/** Schema.org Service, per la pagina Competenze/Servizi. */
export function serviceJsonLd(options: { name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: options.name,
    description: options.description,
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
