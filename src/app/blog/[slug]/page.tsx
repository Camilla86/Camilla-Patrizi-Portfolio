import { permanentRedirect } from 'next/navigation';

// Il Blog non fa parte del nuovo perimetro del sito: redirect verso il Portfolio.
export default function BlogPostRedirect() {
  permanentRedirect('/portfolio');
}
