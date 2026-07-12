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
    <section className="border-t border-white/5">
      <div className="section-container py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/contatti" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
