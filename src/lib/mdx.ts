import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { BlogPost, BlogPostMeta } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function readAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/** Elenco di tutti gli articoli del blog (solo metadati), ordinati dal più recente. */
export function getAllBlogPosts(): BlogPostMeta[] {
  return readAllSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        coverImage: data.coverImage as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Articolo completo (metadati + contenuto MDX grezzo) dato lo slug. */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    content,
  };
}
