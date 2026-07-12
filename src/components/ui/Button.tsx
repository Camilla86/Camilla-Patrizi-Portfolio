import Link from 'next/link';
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const VARIANT_CLASSES = {
  primary:
    'bg-electric-500 text-white hover:bg-electric-400 shadow-[0_0_0_1px_rgba(47,92,255,0.4)] hover:shadow-[0_0_24px_rgba(47,92,255,0.45)]',
  secondary:
    'bg-transparent text-slate-100 border border-white/20 hover:border-electric-400 hover:text-white',
  ghost: 'bg-transparent text-slate-300 hover:text-white',
} as const;

const SIZE_CLASSES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
} as const;

type Variant = keyof typeof VARIANT_CLASSES;
type Size = keyof typeof SIZE_CLASSES;

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Pulsante CTA riutilizzabile: renderizza <Link> se riceve `href`, altrimenti <button>. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, ...rest } = props;
  const classes = cn(baseClasses, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);

  if (rest.href) {
    const { href, children, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
