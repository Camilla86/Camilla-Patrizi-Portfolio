'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

// Prototipo dimostrativo "La Mia Agenda": dati solo in memoria, si azzerano al ricaricamento.
// Palette dedicata (blu navy + bianco/crema), diversa dal tema scuro del resto del sito.

type Role = 'cliente' | 'operatore';
type AppointmentStatus = 'in attesa' | 'confermato' | 'rifiutato';

interface Appointment {
  id: string;
  clientName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

interface MessageItem {
  id: string;
  clientName: string;
  from: Role;
  text: string;
}

interface ClientRecord {
  id: string;
  name: string;
  notes: string;
}

interface DocumentItem {
  id: string;
  name: string;
  category: string;
  clientName: string;
}

interface BulletinNote {
  id: string;
  author: string;
  text: string;
}

interface Practice {
  id: string;
  clientName: string;
  type: string;
  note: string;
}

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
const PRACTICE_TYPES = ['Apertura conto', 'Consulenza', 'Reclamo', 'Altro'];
const DOC_CATEGORIES = ['Contratti', 'Moduli', 'Identità', 'Altro'];

let idCounter = 1;
function nextId() {
  idCounter += 1;
  return String(idCounter);
}

function nextDays(count: number) {
  const days: string[] = [];
  const today = new Date();
  for (let i = 0; i < count; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

function formatDateIt(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: 'short' });
}

const DAYS = nextDays(7);

const initialAppointments: Appointment[] = [
  { id: nextId(), clientName: 'Mario Rossi', date: DAYS[2], time: '10:00', status: 'confermato' },
  { id: nextId(), clientName: 'Giulia Bianchi', date: DAYS[4], time: '15:00', status: 'in attesa' },
];

const initialMessages: MessageItem[] = [
  { id: nextId(), clientName: 'Mario Rossi', from: 'cliente', text: "Buongiorno, posso spostare l'appuntamento di un'ora?" },
  { id: nextId(), clientName: 'Mario Rossi', from: 'operatore', text: 'Certo, la contatto a breve per riorganizzarlo.' },
];

const initialClients: ClientRecord[] = [
  { id: nextId(), name: 'Mario Rossi', notes: 'Cliente storico, pratica mutuo in corso.' },
  { id: nextId(), name: 'Giulia Bianchi', notes: 'Nuova cliente, richiesta prima consulenza.' },
];

const initialDocuments: DocumentItem[] = [
  { id: nextId(), name: 'Contratto_MarioRossi.pdf', category: 'Contratti', clientName: 'Mario Rossi' },
];

const initialBulletin: BulletinNote[] = [
  { id: nextId(), author: 'Operatore', text: 'Riunione di team venerdì alle 9:00.' },
];

const initialPractices: Practice[] = [
  { id: nextId(), clientName: 'Mario Rossi', type: 'Apertura conto', note: 'Documenti ricevuti, in verifica.' },
];

// Classi riutilizzate per la palette dedicata (blu navy / bianco / crema).
const card = 'rounded-2xl border border-[#D8D2C2] bg-white p-5 shadow-sm';
const sectionTitle = 'font-display text-xl italic tracking-tight text-[#1E2A44]';
const label = 'text-xs font-semibold uppercase tracking-wide text-[#5B6472]';
const input =
  'mt-1 w-full rounded-xl border border-[#D8D2C2] bg-white px-3 py-2 text-sm text-[#1E2A44] outline-none focus:border-[#1E2A44]';
const primaryBtn =
  'inline-flex items-center justify-center rounded-full bg-[#1E2A44] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#16213A] disabled:cursor-not-allowed disabled:opacity-40';
const ghostBtn =
  'inline-flex items-center justify-center rounded-full border border-[#1E2A44]/30 px-4 py-2 text-sm font-medium text-[#1E2A44] transition-colors hover:bg-[#1E2A44]/5';
const dangerBtn =
  'inline-flex items-center justify-center rounded-full border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50';

function statusBadgeClass(status: AppointmentStatus) {
  if (status === 'confermato') return 'bg-emerald-100 text-emerald-700';
  if (status === 'rifiutato') return 'bg-red-100 text-red-700';
  return 'bg-amber-100 text-amber-700';
}

export function AgendaApp() {
  const [role, setRole] = useState<Role>('cliente');
  const [clientName, setClientName] = useState('Mario Rossi');

  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
  const [clients, setClients] = useState<ClientRecord[]>(initialClients);
  const [documents, setDocuments] = useState<DocumentItem[]>(initialDocuments);
  const [bulletin, setBulletin] = useState<BulletinNote[]>(initialBulletin);
  const [practices, setPractices] = useState<Practice[]>(initialPractices);

  // --- Azioni condivise ---
  function addAppointment(name: string, date: string, time: string) {
    setAppointments((prev) => [...prev, { id: nextId(), clientName: name, date, time, status: 'in attesa' }]);
  }
  function cancelAppointment(id: string) {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  }
  function setAppointmentStatus(id: string, status: AppointmentStatus) {
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }
  function rescheduleAppointment(id: string, date: string, time: string) {
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, date, time, status: 'in attesa' } : a)));
  }
  function addMessage(name: string, from: Role, text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: nextId(), clientName: name, from, text: text.trim() }]);
  }

  return (
    <div className="min-h-screen bg-[#F6F3EC]">
      <div className="relative overflow-hidden border-b border-[#D8D2C2] bg-[#1E2A44]">
        <Image
          src="/images/agenda/reception-ufficio.jpg"
          alt="Reception di un ufficio moderno"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A44] via-[#1E2A44]/95 to-[#1E2A44]/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Prototipo demo</p>
            <h1 className="mt-3 font-display text-4xl italic tracking-tight text-white sm:text-5xl">
              La Mia Agenda
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Gestionale per ufficio: appuntamenti, messaggi, documenti e dati, in due aree — cliente e operatore.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur">
            <button
              type="button"
              onClick={() => setRole('cliente')}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                role === 'cliente' ? 'bg-white text-[#1E2A44]' : 'text-white/70 hover:text-white'
              }`}
            >
              Sono un cliente
            </button>
            <button
              type="button"
              onClick={() => setRole('operatore')}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                role === 'operatore' ? 'bg-white text-[#1E2A44]' : 'text-white/70 hover:text-white'
              }`}
            >
              Sono un operatore
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        {role === 'cliente' ? (
          <ClientPanel
            clientName={clientName}
            setClientName={setClientName}
            appointments={appointments}
            messages={messages}
            onBook={addAppointment}
            onCancel={cancelAppointment}
            onReschedule={rescheduleAppointment}
            onSendMessage={(text) => addMessage(clientName, 'cliente', text)}
          />
        ) : (
          <OperatorPanel
            appointments={appointments}
            onSetStatus={setAppointmentStatus}
            onReschedule={rescheduleAppointment}
            messages={messages}
            onReply={(name, text) => addMessage(name, 'operatore', text)}
            clients={clients}
            setClients={setClients}
            documents={documents}
            setDocuments={setDocuments}
            bulletin={bulletin}
            setBulletin={setBulletin}
            practices={practices}
            setPractices={setPractices}
          />
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AREA CLIENTE
// ---------------------------------------------------------------------------

interface ClientPanelProps {
  clientName: string;
  setClientName: (name: string) => void;
  appointments: Appointment[];
  messages: MessageItem[];
  onBook: (name: string, date: string, time: string) => void;
  onCancel: (id: string) => void;
  onReschedule: (id: string, date: string, time: string) => void;
  onSendMessage: (text: string) => void;
}

function ClientPanel({
  clientName,
  setClientName,
  appointments,
  messages,
  onBook,
  onCancel,
  onReschedule,
  onSendMessage,
}: ClientPanelProps) {
  const [date, setDate] = useState(DAYS[1]);
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [messageText, setMessageText] = useState('');

  const myAppointments = appointments.filter((a) => a.clientName === clientName);
  const myMessages = messages.filter((m) => m.clientName === clientName);

  const takenSlots = appointments.filter((a) => a.date === date).map((a) => a.time);
  const availableSlots = TIME_SLOTS.filter((t) => !takenSlots.includes(t));

  const upcomingReminder = myAppointments
    .filter((a) => a.status === 'confermato')
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))[0];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-3">
        <label className={label}>
          Il tuo nome
          <input
            className={input}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Nome e cognome"
          />
        </label>

        {upcomingReminder && (
          <div className="mt-4 rounded-2xl border border-[#1E2A44]/20 bg-[#1E2A44]/5 px-4 py-3 text-sm text-[#1E2A44]">
            🔔 Promemoria: hai un appuntamento confermato il <strong>{formatDateIt(upcomingReminder.date)}</strong> alle{' '}
            <strong>{upcomingReminder.time}</strong>.
          </div>
        )}
      </div>

      <div className={card}>
        <h2 className={sectionTitle}>Prenota un appuntamento</h2>
        <div className="mt-4 space-y-3">
          <label className={label}>
            Data
            <select className={input} value={date} onChange={(e) => setDate(e.target.value)}>
              {DAYS.map((d) => (
                <option key={d} value={d}>
                  {formatDateIt(d)}
                </option>
              ))}
            </select>
          </label>
          <label className={label}>
            Orario
            <select className={input} value={time} onChange={(e) => setTime(e.target.value)}>
              {availableSlots.length === 0 && <option value="">Nessun orario disponibile</option>}
              {availableSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            disabled={!clientName.trim() || availableSlots.length === 0}
            onClick={() => onBook(clientName, date, time)}
            className={`${primaryBtn} w-full`}
          >
            Prenota
          </button>
        </div>
      </div>

      <div className={card}>
        <h2 className={sectionTitle}>I tuoi appuntamenti</h2>
        <ul className="mt-4 space-y-3">
          {myAppointments.length === 0 && <p className="text-sm text-[#5B6472]">Nessun appuntamento prenotato.</p>}
          {myAppointments.map((a) => (
            <li key={a.id} className="rounded-xl border border-[#D8D2C2] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#1E2A44]">
                  {formatDateIt(a.date)} — {a.time}
                </p>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadgeClass(a.status)}`}>
                  {a.status}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onReschedule(a.id, DAYS[(DAYS.indexOf(a.date) + 1) % DAYS.length], a.time)}
                  className={ghostBtn}
                >
                  Sposta al giorno dopo
                </button>
                <button type="button" onClick={() => onCancel(a.id)} className={dangerBtn}>
                  Cancella
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={card}>
        <h2 className={sectionTitle}>Messaggi con l&apos;ufficio</h2>
        <ul className="mt-4 max-h-56 space-y-2 overflow-y-auto">
          {myMessages.length === 0 && <p className="text-sm text-[#5B6472]">Nessun messaggio.</p>}
          {myMessages.map((m) => (
            <li
              key={m.id}
              className={`rounded-xl px-3 py-2 text-sm ${
                m.from === 'cliente' ? 'bg-[#1E2A44]/5 text-[#1E2A44]' : 'bg-[#F6F3EC] text-[#1E2A44]'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[#5B6472]">
                {m.from === 'cliente' ? 'Tu' : 'Ufficio'}
              </span>
              <p className="mt-0.5">{m.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex gap-2">
          <input
            className={`${input} mt-0`}
            placeholder="Scrivi un messaggio…"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              onSendMessage(messageText);
              setMessageText('');
            }}
            className={primaryBtn}
          >
            Invia
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AREA OPERATORE
// ---------------------------------------------------------------------------

type OperatorTab = 'calendario' | 'messaggi' | 'clienti' | 'bacheca' | 'documenti' | 'dati' | 'dashboard';

interface OperatorPanelProps {
  appointments: Appointment[];
  onSetStatus: (id: string, status: AppointmentStatus) => void;
  onReschedule: (id: string, date: string, time: string) => void;
  messages: MessageItem[];
  onReply: (clientName: string, text: string) => void;
  clients: ClientRecord[];
  setClients: React.Dispatch<React.SetStateAction<ClientRecord[]>>;
  documents: DocumentItem[];
  setDocuments: React.Dispatch<React.SetStateAction<DocumentItem[]>>;
  bulletin: BulletinNote[];
  setBulletin: React.Dispatch<React.SetStateAction<BulletinNote[]>>;
  practices: Practice[];
  setPractices: React.Dispatch<React.SetStateAction<Practice[]>>;
}

const TABS: { id: OperatorTab; label: string }[] = [
  { id: 'calendario', label: 'Calendario' },
  { id: 'messaggi', label: 'Messaggi' },
  { id: 'clienti', label: 'Clienti' },
  { id: 'bacheca', label: 'Bacheca' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'dati', label: 'Raccogli dati' },
  { id: 'dashboard', label: 'Dashboard & Report' },
];

function OperatorPanel(props: OperatorPanelProps) {
  const [tab, setTab] = useState<OperatorTab>('calendario');

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-[#D8D2C2] pb-4">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === t.id ? 'bg-[#1E2A44] text-white' : 'bg-white text-[#1E2A44] hover:bg-[#1E2A44]/5'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === 'calendario' && (
          <CalendarioTab appointments={props.appointments} onSetStatus={props.onSetStatus} onReschedule={props.onReschedule} />
        )}
        {tab === 'messaggi' && <MessaggiTab messages={props.messages} onReply={props.onReply} />}
        {tab === 'clienti' && <ClientiTab clients={props.clients} setClients={props.setClients} />}
        {tab === 'bacheca' && <BachecaTab bulletin={props.bulletin} setBulletin={props.setBulletin} />}
        {tab === 'documenti' && <DocumentiTab documents={props.documents} setDocuments={props.setDocuments} />}
        {tab === 'dati' && <DatiTab practices={props.practices} setPractices={props.setPractices} />}
        {tab === 'dashboard' && <DashboardTab appointments={props.appointments} practices={props.practices} documents={props.documents} />}
      </div>
    </div>
  );
}

function CalendarioTab({
  appointments,
  onSetStatus,
  onReschedule,
}: {
  appointments: Appointment[];
  onSetStatus: (id: string, status: AppointmentStatus) => void;
  onReschedule: (id: string, date: string, time: string) => void;
}) {
  const sorted = [...appointments].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return (
    <div className={card}>
      <h2 className={sectionTitle}>Tutti gli appuntamenti</h2>
      <ul className="mt-4 space-y-3">
        {sorted.length === 0 && <p className="text-sm text-[#5B6472]">Nessun appuntamento in agenda.</p>}
        {sorted.map((a) => (
          <li key={a.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D8D2C2] p-3">
            <div>
              <p className="text-sm font-medium text-[#1E2A44]">
                {formatDateIt(a.date)} — {a.time} · {a.clientName}
              </p>
              <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadgeClass(a.status)}`}>
                {a.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => onSetStatus(a.id, 'confermato')} className={ghostBtn}>
                Conferma
              </button>
              <button type="button" onClick={() => onSetStatus(a.id, 'rifiutato')} className={ghostBtn}>
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => onReschedule(a.id, DAYS[(DAYS.indexOf(a.date) + 1) % DAYS.length], a.time)}
                className={ghostBtn}
              >
                Riprogramma
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MessaggiTab({ messages, onReply }: { messages: MessageItem[]; onReply: (clientName: string, text: string) => void }) {
  const threadNames = Array.from(new Set(messages.map((m) => m.clientName)));
  const [active, setActive] = useState(threadNames[0] ?? '');
  const [reply, setReply] = useState('');
  const thread = messages.filter((m) => m.clientName === active);

  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <div className={card}>
        <h2 className={sectionTitle}>Conversazioni</h2>
        <ul className="mt-3 space-y-1">
          {threadNames.length === 0 && <p className="text-sm text-[#5B6472]">Nessun messaggio.</p>}
          {threadNames.map((name) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => setActive(name)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm ${
                  active === name ? 'bg-[#1E2A44] text-white' : 'text-[#1E2A44] hover:bg-[#1E2A44]/5'
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={card}>
        <h2 className={sectionTitle}>{active || 'Seleziona una conversazione'}</h2>
        <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto">
          {thread.map((m) => (
            <li
              key={m.id}
              className={`rounded-xl px-3 py-2 text-sm ${
                m.from === 'operatore' ? 'bg-[#1E2A44]/5 text-[#1E2A44]' : 'bg-[#F6F3EC] text-[#1E2A44]'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[#5B6472]">
                {m.from === 'operatore' ? 'Tu' : active}
              </span>
              <p className="mt-0.5">{m.text}</p>
            </li>
          ))}
        </ul>
        {active && (
          <div className="mt-3 flex gap-2">
            <input className={`${input} mt-0`} placeholder="Rispondi…" value={reply} onChange={(e) => setReply(e.target.value)} />
            <button
              type="button"
              onClick={() => {
                onReply(active, reply);
                setReply('');
              }}
              className={primaryBtn}
            >
              Invia
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ClientiTab({
  clients,
  setClients,
}: {
  clients: ClientRecord[];
  setClients: React.Dispatch<React.SetStateAction<ClientRecord[]>>;
}) {
  const [newName, setNewName] = useState('');

  return (
    <div className={card}>
      <h2 className={sectionTitle}>Rubrica clienti</h2>
      <div className="mt-4 space-y-4">
        {clients.map((c) => (
          <div key={c.id} className="rounded-xl border border-[#D8D2C2] p-3">
            <p className="text-sm font-semibold text-[#1E2A44]">{c.name}</p>
            <textarea
              className={`${input} mt-2`}
              rows={2}
              value={c.notes}
              onChange={(e) =>
                setClients((prev) => prev.map((x) => (x.id === c.id ? { ...x, notes: e.target.value } : x)))
              }
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input className={`${input} mt-0`} placeholder="Nome nuovo cliente" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button
          type="button"
          disabled={!newName.trim()}
          onClick={() => {
            setClients((prev) => [...prev, { id: nextId(), name: newName.trim(), notes: '' }]);
            setNewName('');
          }}
          className={primaryBtn}
        >
          Aggiungi
        </button>
      </div>
    </div>
  );
}

function BachecaTab({
  bulletin,
  setBulletin,
}: {
  bulletin: BulletinNote[];
  setBulletin: React.Dispatch<React.SetStateAction<BulletinNote[]>>;
}) {
  const [text, setText] = useState('');

  return (
    <div className={card}>
      <h2 className={sectionTitle}>Bacheca interna</h2>
      <ul className="mt-4 space-y-2">
        {bulletin.map((n) => (
          <li key={n.id} className="rounded-xl bg-[#F6F3EC] px-3 py-2 text-sm text-[#1E2A44]">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#5B6472]">{n.author}</span>
            <p className="mt-0.5">{n.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <input className={`${input} mt-0`} placeholder="Nuovo avviso per il team…" value={text} onChange={(e) => setText(e.target.value)} />
        <button
          type="button"
          disabled={!text.trim()}
          onClick={() => {
            setBulletin((prev) => [...prev, { id: nextId(), author: 'Operatore', text: text.trim() }]);
            setText('');
          }}
          className={primaryBtn}
        >
          Pubblica
        </button>
      </div>
    </div>
  );
}

function DocumentiTab({
  documents,
  setDocuments,
}: {
  documents: DocumentItem[];
  setDocuments: React.Dispatch<React.SetStateAction<DocumentItem[]>>;
}) {
  const [category, setCategory] = useState(DOC_CATEGORIES[0]);
  const [clientName, setClientName] = useState('');
  const [search, setSearch] = useState('');

  const filtered = documents.filter(
    (d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={card}>
      <h2 className={sectionTitle}>Documenti</h2>
      <input
        className={`${input} mb-4`}
        placeholder="Cerca per nome o categoria…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {filtered.map((d) => (
          <li key={d.id} className="flex items-center justify-between rounded-xl border border-[#D8D2C2] px-3 py-2 text-sm">
            <span className="text-[#1E2A44]">{d.name}</span>
            <span className="text-xs text-[#5B6472]">
              {d.category} · {d.clientName}
            </span>
          </li>
        ))}
        {filtered.length === 0 && <p className="text-sm text-[#5B6472]">Nessun documento trovato.</p>}
      </ul>

      <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
        <input
          type="file"
          className="text-sm text-[#1E2A44] file:mr-3 file:rounded-full file:border-0 file:bg-[#1E2A44] file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setDocuments((prev) => [...prev, { id: nextId(), name: file.name, category, clientName: clientName || 'Non assegnato' }]);
            e.target.value = '';
          }}
        />
        <select className={`${input} mt-0`} value={category} onChange={(e) => setCategory(e.target.value)}>
          {DOC_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          className={`${input} mt-0`}
          placeholder="Cliente (opzionale)"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      <p className="mt-2 text-xs text-[#5B6472]">Demo: il file non viene realmente caricato, solo il suo nome.</p>
    </div>
  );
}

function DatiTab({
  practices,
  setPractices,
}: {
  practices: Practice[];
  setPractices: React.Dispatch<React.SetStateAction<Practice[]>>;
}) {
  const [name, setName] = useState('');
  const [type, setType] = useState(PRACTICE_TYPES[0]);
  const [note, setNote] = useState('');

  return (
    <div className={card}>
      <h2 className={sectionTitle}>Raccolta dati — nuova pratica</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className={label}>
          Cliente
          <input className={input} value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className={label}>
          Tipo pratica
          <select className={input} value={type} onChange={(e) => setType(e.target.value)}>
            {PRACTICE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className={label}>Note</span>
          <textarea className={input} rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
      </div>
      <button
        type="button"
        disabled={!name.trim()}
        onClick={() => {
          setPractices((prev) => [...prev, { id: nextId(), clientName: name.trim(), type, note }]);
          setName('');
          setNote('');
        }}
        className={`${primaryBtn} mt-4`}
      >
        Salva pratica
      </button>

      <h3 className="mt-6 text-sm font-semibold text-[#1E2A44]">Pratiche registrate</h3>
      <ul className="mt-2 space-y-2">
        {practices.map((p) => (
          <li key={p.id} className="rounded-xl border border-[#D8D2C2] p-3 text-sm">
            <p className="font-medium text-[#1E2A44]">
              {p.clientName} — {p.type}
            </p>
            {p.note && <p className="text-[#5B6472]">{p.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DashboardTab({
  appointments,
  practices,
  documents,
}: {
  appointments: Appointment[];
  practices: Practice[];
  documents: DocumentItem[];
}) {
  const byStatus = useMemo(() => {
    const counts: Record<AppointmentStatus, number> = { 'in attesa': 0, confermato: 0, rifiutato: 0 };
    appointments.forEach((a) => {
      counts[a.status] += 1;
    });
    return counts;
  }, [appointments]);

  const byType = useMemo(() => {
    const counts: Record<string, number> = {};
    practices.forEach((p) => {
      counts[p.type] = (counts[p.type] ?? 0) + 1;
    });
    return counts;
  }, [practices]);

  const maxStatus = Math.max(1, ...Object.values(byStatus));
  const maxType = Math.max(1, ...Object.values(byType));

  function downloadReport() {
    const lines = [
      'Report — La Mia Agenda',
      '',
      'Appuntamenti per stato',
      ...Object.entries(byStatus).map(([k, v]) => `${k};${v}`),
      '',
      'Pratiche per tipo',
      ...Object.entries(byType).map(([k, v]) => `${k};${v}`),
      '',
      `Totale documenti;${documents.length}`,
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report-agenda.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className={card}>
        <h2 className={sectionTitle}>Appuntamenti per stato</h2>
        <div className="mt-4 space-y-3">
          {Object.entries(byStatus).map(([status, count]) => (
            <div key={status}>
              <div className="flex justify-between text-xs text-[#5B6472]">
                <span className="capitalize">{status}</span>
                <span>{count}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-[#F0ECE1]">
                <div
                  className="h-2 rounded-full bg-[#1E2A44]"
                  style={{ width: `${(count / maxStatus) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h2 className={sectionTitle}>Pratiche per tipo</h2>
        <div className="mt-4 space-y-3">
          {Object.keys(byType).length === 0 && <p className="text-sm text-[#5B6472]">Nessuna pratica registrata.</p>}
          {Object.entries(byType).map(([type, count]) => (
            <div key={type}>
              <div className="flex justify-between text-xs text-[#5B6472]">
                <span>{type}</span>
                <span>{count}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-[#F0ECE1]">
                <div className="h-2 rounded-full bg-[#1E2A44]" style={{ width: `${(count / maxType) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} md:col-span-2`}>
        <h2 className={sectionTitle}>Report</h2>
        <p className="mt-2 text-sm text-[#5B6472]">
          Scarica un riepilogo in CSV di appuntamenti, pratiche e documenti.
        </p>
        <button type="button" onClick={downloadReport} className={`${primaryBtn} mt-3`}>
          Genera report CSV
        </button>
      </div>
    </div>
  );
}
