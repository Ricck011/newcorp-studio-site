/* NEW CORP · medição. Só roda no endereço publicado (nunca no teste local).
   Cloudflare Web Analytics: visitas, sem cookie.
   Microsoft Clarity: mapa de calor, gravação de sessão e o evento "whatsapp" a cada clique em botão de WhatsApp.
   Os dois códigos abaixo são públicos (aparecem em qualquer site que usa esses serviços); não são senha. */
(() => {
  const CLOUDFLARE_TOKEN = '';   // painel Cloudflare > Web Analytics > Add a site > token do snippet
  const CLARITY_ID = 'z1gs8u6mx9';       // painel Clarity > Settings > Overview > Project ID
  const PUBLICADO = /(^|\.)corpstorehub\.com$/.test(location.hostname);
  if (!PUBLICADO) return;

  if (CLOUDFLARE_TOKEN) {
    const s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.dataset.cfBeacon = JSON.stringify({ token: CLOUDFLARE_TOKEN });
    document.head.append(s);
  }

  if (CLARITY_ID) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    // carrega no primeiro gesto (rolar, tocar, clicar, teclar): a página abre sem cookie de terceiro
    const GESTOS = ['scroll', 'wheel', 'pointerdown', 'touchstart', 'keydown'];
    const carregar = () => {
      GESTOS.forEach((g) => removeEventListener(g, carregar, true));
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.clarity.ms/tag/' + CLARITY_ID;
      document.head.append(s);
    };
    GESTOS.forEach((g) => addEventListener(g, carregar, { capture: true, passive: true, once: true }));
  }

  // cada clique em WhatsApp vira um evento com a origem do botão (página e texto), para saber qual botão vende
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href*="wa.me"], #leadForm [type=submit]');
    if (!a || !window.clarity) return;
    const origem = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
    window.clarity('event', 'whatsapp');
    window.clarity('set', 'botao_whatsapp', origem);
    window.clarity('set', 'pagina', location.pathname);
  }, { capture: true });
})();
