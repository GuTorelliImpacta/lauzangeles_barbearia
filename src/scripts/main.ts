// Melhoria progressiva: nada aqui é necessário para ler o conteúdo ou agendar.
type Horario = { dia: string; abre: number; fecha: number };

const root = document.documentElement;
root.classList.add('js');
const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Eventos de conversão: dispara só se um coletor estiver presente (sem cookies, sem terceiros por padrão). */
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  const nome = el.dataset.track!;
  (window as unknown as { va?: (...a: unknown[]) => void }).va?.('event', { name: nome });
  document.dispatchEvent(new CustomEvent('lauz:track', { detail: nome }));
});

/* Entrada das seções */
const alvos = document.querySelectorAll<HTMLElement>('[data-reveal], .texto > *');
if (reduzido || !('IntersectionObserver' in window)) {
  alvos.forEach((a) => a.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  alvos.forEach((a) => io.observe(a));
}

/* Aberto agora (horário de São Paulo) e dia atual na tabela */
const jsonEl = document.getElementById('horarios-json');
const horarios: Horario[] | null = jsonEl ? JSON.parse(jsonEl.textContent ?? 'null') : null;
const DIAS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
function agoraSP() {
  const p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t: string) => p.find((x) => x.type === t)!.value;
  return { dia: DIAS[get('weekday')], min: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
}
function atualizaStatus() {
  const hs: Horario[] | null = horarios ?? (window as unknown as { __h?: Horario[] }).__h ?? null;
  const { dia, min } = agoraSP();
  document.querySelectorAll<HTMLElement>('[data-horas] [data-dia]').forEach((el) => {
    if (Number(el.dataset.dia) === dia) el.setAttribute('aria-current', 'date');
    else el.removeAttribute('aria-current');
  });
  const alvo = document.querySelector<HTMLElement>('[data-status]');
  if (!alvo || !hs) return;
  const h = hs[dia];
  if (min >= h.abre * 60 && min < h.fecha * 60) {
    alvo.innerHTML = `<b>Aberto agora</b>, fecha às ${h.fecha}h.`;
  } else {
    const prox = min < h.abre * 60 ? { nome: 'hoje', h: h.abre } : { nome: hs[(dia + 1) % 7].dia.toLowerCase(), h: hs[(dia + 1) % 7].abre };
    alvo.innerHTML = `<b>Fechado agora</b>, abre ${prox.nome === 'hoje' ? 'hoje' : prox.nome} às ${prox.h}h.`;
  }
}
if (horarios) (window as unknown as { __h?: Horario[] }).__h = horarios;
atualizaStatus();
setInterval(atualizaStatus, 60_000);

/* Galeria de uma moldura: as fotos se alternam; toque avança */
document.querySelectorAll<HTMLElement>('[data-espaco]').forEach((bloco) => {
  const moldura = bloco.querySelector<HTMLElement>('.moldura');
  const fotos = moldura ? [...moldura.querySelectorAll<HTMLImageElement>('img')] : [];
  const legenda = bloco.querySelector<HTMLElement>('[data-legenda]');
  if (!moldura || fotos.length < 2) return;
  const textos = ['O salão: neon, madeira, couro e o carro vermelho.', 'Espelhos com lâmpadas e a bandeira de São Paulo.'];
  bloco.classList.add('js');
  let i = 0;
  const mostra = (n: number) => {
    i = n % fotos.length;
    fotos.forEach((f, k) => f.classList.toggle('on', k === i));
    if (legenda) legenda.textContent = textos[i] ?? '';
  };
  mostra(0);
  let t: number | undefined;
  const inicia = () => { if (!reduzido) t = window.setInterval(() => mostra(i + 1), 5500); };
  const para = () => window.clearInterval(t);
  inicia();
  document.addEventListener('visibilitychange', () => (document.hidden ? para() : (para(), inicia())));
  const avanca = () => { para(); mostra(i + 1); inicia(); };
  moldura.addEventListener('click', avanca);
  moldura.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); avanca(); } });
});
