import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogPosts } from '@/lib/mdx';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Riflessioni, dietro le quinte e consigli pratici sul mestiere di content creator.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="section-container py-16">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Blog</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
        Storie dietro i progetti, consigli pratici e riflessioni sul mestiere di content creator.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} priority={index < 3} />
        ))}
      </div>
    </div>
  );
}
