import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { buildMetadata, breadcrumbJsonLd, blogPostingJsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  return (
    <article className="section-container py-16">
      <JsonLd data={[blogPostingJsonLd(post), breadcrumbJsonLd(breadcrumbItems)]} />

      <Breadcrumb items={breadcrumbItems} />

      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-wide text-slate-500">{formatDate(post.date)}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">{post.excerpt}</p>
      </header>

      <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose prose-invert mx-auto mt-12 max-w-3xl prose-headings:tracking-tight prose-a:text-electric-300">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
