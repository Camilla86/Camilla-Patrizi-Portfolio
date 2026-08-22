import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FeaturedPortfolio } from '@/components/sections/FeaturedPortfolio';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPortfolio />
      <AboutTeaser />
      <CTASection
        title="Hai un progetto in mente?"
        description="Raccontami il tuo obiettivo: che sia un video social, una landing page o un workflow AI, troviamo insieme la strada giusta."
      />
    </>
  );
}
