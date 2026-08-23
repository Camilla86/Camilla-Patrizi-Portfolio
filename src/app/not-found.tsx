import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="section-container flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Errore 404</p>
      <h1 className="mt-4 font-display text-4xl italic tracking-tight text-text-primary sm:text-5xl">
        Pagina non trovata
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <div className="mt-8">
        <Button href="/" size="lg">
          Torna alla Home
        </Button>
      </div>
    </div>
  );
}
