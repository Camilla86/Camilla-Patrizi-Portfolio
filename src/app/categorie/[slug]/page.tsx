import { permanentRedirect } from 'next/navigation';

// La navigazione per categoria è ora integrata nei filtri del Portfolio: redirect con il filtro preselezionato.
export default function CategoryRedirect({ params }: { params: { slug: string } }) {
  permanentRedirect(`/portfolio?categoria=${params.slug}`);
}
