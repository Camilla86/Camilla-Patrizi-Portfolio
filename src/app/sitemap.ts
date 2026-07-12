import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { portfolioItems } from '@/content/portfolio';
import { categories } from '@/content/categories';
import { getAllBlogPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/portfolio',
    '/categorie',
    '/chi-siamo',
    '/blog',
    '/contatti',
    '/faq',
    '/privacy-policy',
    '/cookie-policy',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${siteConfig.url}/portfolio/${item.slug}`,
    lastModified: item.date,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/categorie/${category.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...categoryRoutes, ...blogRoutes];
}
