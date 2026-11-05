// Lightbox acessível baseado em <dialog> + visualização da galeria (para mensuração).
const raiz = document.querySelector<HTMLElement>('[data-galeria]');
if (raiz) {
  const dlg = raiz.querySelector<HTMLDialogElement>('[data-lightbox]')!;
  const img = dlg.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const leg = dlg.querySelector<HTMLElement>('[data-lb-leg]')!;
  const botoes = [...raiz.querySelectorAll<HTMLButtonElement>('button.sv-g')];
  let atual = 0;

  const mostra = (n: number) => {
    atual = (n + botoes.length) % botoes.length;
    const b = botoes[atual];
    img.src = b.dataset.grande ?? '';
    img.alt = b.dataset.alt ?? '';
    leg.textContent = b.dataset.legenda ?? '';
  };
  botoes.forEach((b, i) =>
    b.addEventListener('click', () => {
      mostra(i);
      dlg.showModal();
    }),
  );
  dlg.querySelector('[data-lb-fechar]')?.addEventListener('click', () => dlg.close());
  dlg.querySelector('[data-lb-ant]')?.addEventListener('click', () => mostra(atual - 1));
  dlg.querySelector('[data-lb-prox]')?.addEventListener('click', () => mostra(atual + 1));
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') mostra(atual - 1);
    if (e.key === 'ArrowRight') mostra(atual + 1);
  });
  dlg.addEventListener('close', () => { img.removeAttribute('src'); });

  if (botoes.length < 2) dlg.querySelector('.sv-lb__nav')?.setAttribute('hidden', '');

  // Evento de visualização da galeria (uma vez por página)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        document.dispatchEvent(new CustomEvent('lauz:track', { detail: 'view_galeria' }));
        (window as unknown as { va?: (...a: unknown[]) => void }).va?.('event', { name: 'view_galeria' });
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(raiz);
  }
}
