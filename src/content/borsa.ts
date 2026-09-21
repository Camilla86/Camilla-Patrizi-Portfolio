// Dati della landing page /borsa-3in1: sostituisci con i valori reali del prodotto.
export const borsaOffer = {
  productName: 'MooBag',
  /** Fine dell'offerta di lancio (ora italiana). Dopo questa data la pagina mostra il prezzo pieno. */
  endsAt: '2026-10-05T23:59:59+02:00',
  price: 50,
  fullPrice: 65,
  /** Destinazione dei pulsanti d'acquisto: sostituisci con il link al tuo shop/checkout. */
  checkoutUrl: '/contatti',
} as const;

export const borsaImages = {
  hero: '/images/borsa-3in1/bag-baby-park.webp',
  bag: '/images/borsa-3in1/bag-interior-straps.webp',
  changing: '/images/borsa-3in1/bag-beach-changing.webp',
  bed: '/images/borsa-3in1/bag-baby-park.webp',
} as const;
