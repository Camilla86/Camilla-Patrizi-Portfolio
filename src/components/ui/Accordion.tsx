'use client';

import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
}

/** Accordion FAQ accessibile: aria-expanded, aria-controls, apertura via tastiera nativa (button). */
export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-slate-100 transition-colors hover:text-electric-300"
              >
                {item.question}
                <ChevronDown
                  className={cn('h-5 w-5 shrink-0 text-slate-500 transition-transform', isOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 text-sm leading-relaxed text-slate-400"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
