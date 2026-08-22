import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { portfolioItems } from '@/content/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/portfolio', '/servizi', '/chi-sono', '/contatti', '/privacy-policy', '/cookie-policy'].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${siteConfig.url}/portfolio/${item.slug}`,
    lastModified: item.date,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
