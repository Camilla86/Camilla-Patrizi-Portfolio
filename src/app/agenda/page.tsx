import type { Metadata } from 'next';
import { AgendaApp } from '@/components/agenda/AgendaApp';

export const metadata: Metadata = {
  title: 'La Mia Agenda',
  description: 'Prototipo demo di gestionale per ufficio: appuntamenti, messaggi, documenti e dati.',
  robots: { index: false, follow: false },
};

export default function AgendaPage() {
  return <AgendaApp />;
}
