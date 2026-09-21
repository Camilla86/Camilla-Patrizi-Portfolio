import { BorsaLanding } from '@/components/landing/BorsaLanding';
import { buildMetadata } from '@/lib/seo';
import { borsaImages } from '@/content/borsa';

export const metadata = buildMetadata({
  title: 'MooBag 3 in 1: borsa fasciatoio e lettino portatile',
  description:
    'MooBag è la borsa 3 in 1 che diventa in un attimo fasciatoio e lettino portatile. Offerta di lancio a tempo limitato.',
  path: '/portfolio/borsa-3in1',
  image: borsaImages.hero,
});

export default function BorsaPage() {
  return <BorsaLanding />;
}
