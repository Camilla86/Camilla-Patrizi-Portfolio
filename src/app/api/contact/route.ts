import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';
import { siteConfig } from '@/content/site';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Dati non validi.' }, { status: 400 });
  }

  const { nome, email, riferimento, messaggio } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    // Nessuna chiave Resend configurata: registra il messaggio nel log del server
    // così il form resta funzionante in sviluppo/demo senza un provider email reale.
    console.info('[contatti] Nuovo messaggio (RESEND_API_KEY non configurata):', {
      nome,
      email,
      riferimento,
      messaggio,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: `Sito Portfolio <onboarding@resend.dev>`,
      to: toEmail,
      replyTo: email,
      subject: riferimento ? `Nuova richiesta — ${riferimento}` : 'Nuova richiesta dal sito',
      text: `Nome: ${nome}\nEmail: ${email}\nRiferimento: ${riferimento ?? '—'}\n\nMessaggio:\n${messaggio}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contatti] Errore invio email:', error);
    return NextResponse.json({ error: 'Invio non riuscito.' }, { status: 502 });
  }
}
