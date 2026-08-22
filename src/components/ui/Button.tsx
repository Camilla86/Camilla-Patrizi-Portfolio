import Link from 'next/link';
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const VARIANT_CLASSES = {
  primary:
    'bg-teal-600 text-white hover:bg-teal-500 shadow-[0_0_0_1px_rgba(13,148,136,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.35)]',
  secondary:
    'bg-transparent text-neutral-900 border border-neutral-300 hover:border-teal-500 hover:text-teal-700',
  ghost: 'bg-transparent text-neutral-600 hover:text-neutral-900',
  dark: 'bg-neutral-900 text-white hover:bg-neutral-800',
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
