import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import type { BlogPostMeta } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPostMeta;
  priority?: boolean;
}

/** Card di anteprima di un articolo del blog. */
export function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-colors hover:border-electric-400/50"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-slate-500">{formatDate(post.date)}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
