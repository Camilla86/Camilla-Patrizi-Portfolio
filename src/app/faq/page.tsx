import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqItems } from '@/content/faq';
import { buildMetadata, faqPageJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ',
  description: 'Le domande più frequenti su collaborazioni, tempi di risposta, diritti d\'uso e progetti.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div className="section-container py-16">
      <JsonLd data={faqPageJsonLd(faqItems)} />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Domande frequenti</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
        Le risposte alle domande più comuni su collaborazioni, progetti e contatti.
      </p>

      <div className="mt-10 max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </div>
  );
}
