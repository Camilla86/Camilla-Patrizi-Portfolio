import { permanentRedirect } from 'next/navigation';

// Vecchio percorso sostituito da /chi-sono: redirect permanente per non rompere link esterni.
export default function ChiSiamoRedirect() {
  permanentRedirect('/chi-sono');
}
