/* Componentes do 21st.dev convertidos para HTML puro. Acrescenta as camadas e liga o mouse.
   Basta incluir depois do HTML: <script src="componentes-21st.js" defer></script> */
(() => {
  const fino = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Shimmer Button: reflexo que varre + luz que segue o mouse (escreve em variável CSS, sem redesenhar nada)
  document.querySelectorAll('.c21-brilho').forEach((b) => {
    if (b.querySelector(':scope > .c21-reflexo')) return;
    const luz = document.createElement('span'); luz.className = 'c21-luz'; luz.setAttribute('aria-hidden', 'true');
    const reflexo = document.createElement('span'); reflexo.className = 'c21-reflexo'; reflexo.setAttribute('aria-hidden', 'true');
    b.prepend(luz, reflexo);
    if (!fino) return;
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--glow-x', `${e.clientX - r.left}px`);
      b.style.setProperty('--glow-y', `${e.clientY - r.top}px`);
      b.style.setProperty('--glow-opacity', '1');
    });
    b.addEventListener('pointerleave', () => b.style.setProperty('--glow-opacity', '0'));
  });

  // Spotlight: luz suave e borda acesa do lado do mouse; toque não liga
  document.querySelectorAll('.c21-holofote').forEach((c) => {
    if (c.querySelector(':scope > .c21-holo-luz')) return;
    const luz = document.createElement('span'); luz.className = 'c21-holo-luz'; luz.setAttribute('aria-hidden', 'true');
    const anel = document.createElement('span'); anel.className = 'c21-holo-anel'; anel.setAttribute('aria-hidden', 'true');
    c.prepend(luz, anel);
    let quadro = 0;
    c.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      cancelAnimationFrame(quadro);
      quadro = requestAnimationFrame(() => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--spotlight-x', `${e.clientX - r.left}px`);
        c.style.setProperty('--spotlight-y', `${e.clientY - r.top}px`);
      });
    });
  });
})();
