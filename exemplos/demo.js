/* sites de exemplo: todo botão de ação leva ao WhatsApp do Pedro, citando o exemplo visto */
(() => {
  const WA = '5511988681657';
  const nome = document.body.dataset.demo || 'de exemplo';
  const link = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
  document.querySelectorAll('[data-cta]').forEach((a) => {
    a.href = link(`Oi, Pedro! Vi o site de exemplo ${nome} e quero um assim para o meu negócio.`);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.r').forEach((el) => io.observe(el));
  const y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
