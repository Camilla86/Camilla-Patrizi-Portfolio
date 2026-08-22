import { permanentRedirect } from 'next/navigation';

// Le FAQ non fanno parte del nuovo perimetro del sito: redirect verso Competenze & Servizi.
export default function FaqRedirect() {
  permanentRedirect('/servizi');
}
