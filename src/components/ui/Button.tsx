import Link from 'next/link';
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const SIZE_CLASSES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
} as const;

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';
type Size = keyof typeof SIZE_CLASSES;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const baseInner = 'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200';

/**
 * Pulsante CTA riutilizzabile: renderizza <Link> se riceve `href`, altrimenti <button>.
 * Le varianti "primary"/"secondary" mostrano un bordo con gradiente accent al passaggio del mouse.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, ...rest } = props;

  const innerClasses = cn(
    baseInner,
    SIZE_CLASSES[size],
    variant === 'primary' && 'bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary',
    variant === 'secondary' && 'border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent',
    variant === 'ghost' && 'bg-transparent text-muted hover:text-text-primary',
    variant === 'dark' && 'bg-surface text-text-primary hover:bg-stroke'
  );

  const showGradientRing = variant === 'primary' || variant === 'secondary';

  // className (es. w-full) va sul contenitore esterno, così si propaga correttamente alla larghezza.
  const wrapperClasses = cn('inline-flex', className);

  const content = showGradientRing ? (
    <span className={cn('group relative inline-flex w-full hover:scale-105 transition-transform duration-200')}>
      <span className="absolute -inset-[2px] rounded-full bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className={cn(innerClasses, 'relative w-full')}>{rest.children}</span>
    </span>
  ) : (
    <span className={cn(innerClasses, 'w-full')}>{rest.children}</span>
  );

  if (rest.href) {
    const { href, children: _children, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={wrapperClasses} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { children: _btnChildren, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={wrapperClasses} {...buttonProps}>
      {content}
    </button>
  );
}
