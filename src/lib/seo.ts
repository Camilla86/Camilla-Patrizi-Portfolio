import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import type { BlogPostMeta, FaqItem, PortfolioItem } from '@/types';
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

export function portfolioItemJsonLd(item: PortfolioItem) {
  const commonFields = {
    '@context': 'https://schema.org',
    name: item.title,
    description: item.excerpt,
    contentUrl: `${siteConfig.url}${item.coverImage}`,
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    datePublished: item.date,
  };

  if (item.mediaType === 'video') {
    return {
      ...commonFields,
      '@type': 'VideoObject',
      thumbnailUrl: `${siteConfig.url}${item.coverImage}`,
      uploadDate: item.date,
      ...(item.videoUrl ? { contentUrl: `${siteConfig.url}${item.videoUrl}` } : {}),
    };
  }

  return {
    ...commonFields,
    '@type': 'ImageObject',
  };
}

export function blogPostingJsonLd(post: BlogPostMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
