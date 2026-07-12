import { z } from 'zod';

// Schema di validazione condiviso tra ContactForm (client) e l'API route (server).
export const contactSchema = z.object({
  nome: z.string().trim().min(2, 'Inserisci il tuo nome.').max(100),
  email: z.string().trim().email('Inserisci un indirizzo email valido.'),
  riferimento: z.string().trim().max(100).optional(),
  messaggio: z.string().trim().min(10, 'Il messaggio deve contenere almeno 10 caratteri.').max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
