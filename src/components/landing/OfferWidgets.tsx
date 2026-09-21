'use client';

import { useEffect, useState } from 'react';
import { borsaOffer } from '@/content/borsa';

const endsAt = new Date(borsaOffer.endsAt).getTime();
const endLabel = new Date(endsAt).toLocaleDateString('it-IT', {
  day: 'numeric',
  month: 'long',
  timeZone: 'Europe/Rome',
});

/** Millisecondi rimasti alla fine dell'offerta; null finché non siamo sul client (evita mismatch di idratazione). */
function useOfferTimeLeft() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const remaining = Math.max(0, endsAt - Date.now());
      setLeft(remaining);
      return remaining;
    };
    if (tick() === 0) return;
    const id = setInterval(() => {
      if (tick() === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function AnnounceBar() {
  const left = useOfferTimeLeft();
  if (left === 0) return null;
  return (
    <div className="announce">
      Novità · Offerta di lancio{' '}
      <b>
        €{borsaOffer.price} invece di €{borsaOffer.fullPrice}
      </b>{' '}
      + spedizione gratuita fino al {endLabel}
    </div>
  );
}

export function OfferCard() {
  const left = useOfferTimeLeft();
  const expired = left === 0;
  const seconds = Math.floor((left ?? 0) / 1000);
  const units = [
    { label: 'giorni', value: Math.floor(seconds / 86400) },
    { label: 'ore', value: Math.floor((seconds % 86400) / 3600) },
    { label: 'minuti', value: Math.floor((seconds % 3600) / 60) },
    { label: 'secondi', value: seconds % 60 },
  ];

  return (
    <div className="offer-card">
      <p className="label">L&apos;offerta termina tra</p>
      <div className="countdown" role="timer" aria-live="off">
        {units.map((unit) => (
          <div key={unit.label}>
            <b>{left === null ? '--' : pad(unit.value)}</b>
            <small>{unit.label}</small>
          </div>
        ))}
      </div>
      {expired && (
        <p className="expired-msg" style={{ display: 'block' }}>
          L&apos;offerta di lancio è terminata. Il prezzo è tornato al listino.
        </p>
      )}
      <div className="price">
        <span className="now">€{expired ? borsaOffer.fullPrice : borsaOffer.price}</span>
        {!expired && <span className="was">€{borsaOffer.fullPrice}</span>}
      </div>
      {!expired && <span className="save">Risparmi €{borsaOffer.fullPrice - borsaOffer.price}</span>}
      <a className="btn btn-primary btn-lg" href={borsaOffer.checkoutUrl}>
        Ordina {borsaOffer.productName} ora
      </a>
      <p className="fine">Pagamento sicuro · Spedizione in 24/48h</p>
    </div>
  );
}

/** Barra fissa in basso su mobile: visibile solo tra l'hero e la sezione offerta. */
export function StickyCta() {
  const left = useOfferTimeLeft();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.lp .hero');
    const offer = document.getElementById('offerta');
    if (!hero || !offer) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setShow(hero.getBoundingClientRect().bottom < 0 && offer.getBoundingClientRect().top > window.innerHeight);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const price = left === 0 ? borsaOffer.fullPrice : borsaOffer.price;

  return (
    <div className={`sticky-cta${show ? ' show' : ''}`} aria-hidden={!show}>
      <div>
        <b>€{price}</b>
        {left === 0 ? borsaOffer.productName : 'Offerta di lancio'}
      </div>
      <a className="btn btn-primary" href="#offerta" tabIndex={show ? 0 : -1}>
        Acquista ora
      </a>
    </div>
  );
}
