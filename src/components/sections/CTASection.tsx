import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel?: string;
}

/** Banda CTA finale, riutilizzabile su più pagine, verso il form contatti. */
export function CTASection({
  title,
  description,
  ctaLabel = 'Richiedi informazioni',
}: CTASectionProps) {
  return (
    <section className="border-t border-stroke bg-bg">
      <div className="section-container py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl italic tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/contatti" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
