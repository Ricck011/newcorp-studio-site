/* Metalplas, primeira tela: lista de produtos e carregamento da roda em 3D. */
(() => {
  const botoes = [...document.querySelectorAll('.linha button')];
  const escolher = (id) => {
    botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.peca === id)));
    dispatchEvent(new CustomEvent('metalplas:peca', { detail: id }));
  };
  botoes.forEach((b) => {
    b.addEventListener('click', () => escolher(b.getAttribute('aria-pressed') === 'true' ? null : b.dataset.peca));
    b.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') escolher(b.dataset.peca); });
  });

  // o 3D só vem para tela grande; no celular fica a imagem parada, que abre mais rápido
  const grande = matchMedia('(min-width: 900px)');
  if (!grande.matches) return;
  const carregar = () => import('./abertura3d.js').catch(() => {});
  if (document.readyState === 'complete') setTimeout(carregar, 0);
  else addEventListener('load', () => ('requestIdleCallback' in window ? requestIdleCallback(carregar, { timeout: 1200 }) : setTimeout(carregar, 200)));
})();
