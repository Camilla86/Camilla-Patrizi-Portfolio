import { permanentRedirect } from 'next/navigation';

// La navigazione per categoria è ora integrata nei filtri del Portfolio: redirect verso /portfolio.
export default function CategoriesRedirect() {
  permanentRedirect('/portfolio');
}
