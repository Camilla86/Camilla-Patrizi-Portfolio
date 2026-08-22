'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { contactSchema } from '@/lib/contact-schema';
import { getCategoryBySlug } from '@/content/categories';
import { getPortfolioItemBySlug } from '@/content/portfolio';

type Status = 'idle' | 'loading' | 'success' | 'error';

/** Form di contatto: valida i dati, li invia all'API route e mostra lo stato in modo accessibile. */
export function ContactForm() {
  const searchParams = useSearchParams();
  const rifSlug = searchParams.get('rif');
  const servizioSlug = searchParams.get('servizio');
  const riferimentoIniziale =
    (rifSlug && getPortfolioItemBySlug(rifSlug)?.title) ||
    (servizioSlug && getCategoryBySlug(servizioSlug)?.name) ||
    '';

  const [status, setStatus] = useState<Status>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      riferimento: formData.get('riferimento'),
      messaggio: formData.get('messaggio'),
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errors[String(issue.path[0])] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) throw new Error('Invio non riuscito');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setFormError('Non è stato possibile inviare il messaggio. Riprova tra qualche minuto.');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="glass-card p-8 text-center">
        <p className="text-lg font-semibold text-neutral-950">Messaggio inviato!</p>
        <p className="mt-2 text-sm text-neutral-600">Grazie per avermi scritto, ti risponderò al più presto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="nome" className="mb-2 block text-sm font-medium text-neutral-800">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          aria-invalid={Boolean(fieldErrors.nome)}
          aria-describedby={fieldErrors.nome ? 'nome-error' : undefined}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:bg-white"
        />
        {fieldErrors.nome && (
          <p id="nome-error" className="mt-1.5 text-sm text-red-600">
            {fieldErrors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:bg-white"
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-600">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="riferimento" className="mb-2 block text-sm font-medium text-neutral-800">
          Riferimento progetto o servizio <span className="text-neutral-400">(opzionale)</span>
        </label>
        <input
          id="riferimento"
          name="riferimento"
          type="text"
          defaultValue={riferimentoIniziale}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:bg-white"
        />
      </div>

      <div>
        <label htmlFor="messaggio" className="mb-2 block text-sm font-medium text-neutral-800">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          required
          aria-invalid={Boolean(fieldErrors.messaggio)}
          aria-describedby={fieldErrors.messaggio ? 'messaggio-error' : undefined}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-teal-500 focus:bg-white"
        />
        {fieldErrors.messaggio && (
          <p id="messaggio-error" className="mt-1.5 text-sm text-red-600">
            {fieldErrors.messaggio}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="text-sm text-red-600">
          {formError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? 'Invio in corso…' : 'Invia messaggio'}
      </Button>
    </form>
  );
}
