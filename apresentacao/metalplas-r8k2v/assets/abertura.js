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

  // a roda 3D agora vem do bloco (bloco.js)
})();
