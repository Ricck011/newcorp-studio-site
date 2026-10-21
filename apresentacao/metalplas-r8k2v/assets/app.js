/* Metalplas. JavaScript puro, sem dependências. */
(() => {
  // WhatsApp de vendas da fábrica: preencher depois da entrevista (só números, com 55 e DDD)
  const WA = '';
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const smooth = (p, e0, e1) => { const t = clamp((p - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  const FINE = matchMedia('(hover: hover) and (pointer: fine)');

  // todas as leituras de scroll rodam juntas, uma vez por quadro
  const scrollFns = [];
  const onScrollFrame = (f) => scrollFns.push(f);
  let queued = false;
  addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; for (const f of scrollFns) f(); });
  }, { passive: true });

  /* ---------- marcações do protótipo ---------- */
  const alt = $('#alternar-marcas');
  if (alt) {
    try { if (localStorage.getItem('mp-limpo') === '1') document.body.classList.add('limpo'); } catch (e) {}
    const rotulo = () => { alt.textContent = document.body.classList.contains('limpo') ? 'Mostrar marcações' : 'Ocultar marcações'; };
    rotulo();
    alt.addEventListener('click', () => {
      document.body.classList.toggle('limpo');
      try { localStorage.setItem('mp-limpo', document.body.classList.contains('limpo') ? '1' : '0'); } catch (e) {}
      rotulo();
    });
  }

  /* ---------- aviso curto no topo ---------- */
  const aviso = $('#aviso-wa');
  let avisoT;
  const avisar = (txt) => {
    aviso.textContent = txt;
    aviso.hidden = false;
    clearTimeout(avisoT);
    avisoT = setTimeout(() => { aviso.hidden = true; }, 6000);
  };

  /* ---------- menu no celular ---------- */
  const menuBtn = $('#menu-btn');
  const nav = $('#nav');
  menuBtn.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', String(aberto));
    menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) { nav.classList.remove('aberto'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  /* ---------- revelar ao rolar ---------- */
  const revIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('on'); revIO.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rev').forEach((el) => revIO.observe(el));

  /* ---------- entrada: a roda se monta com a rolagem ---------- */
  const hero = $('#hero');
  const cena = $('#cena');
  const legenda = $('#legenda');
  const cue = $('#cue');

  // frases palavra por palavra; o leitor de tela lê a frase inteira
  $$('[data-split] .big, [data-split] .small').forEach((el) => {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    el.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'sr';
    sr.textContent = text;
    el.append(sr);
    words.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w;
      s.style.setProperty('--th', (i / words.length * 0.5).toFixed(3));
      el.append(s, i < words.length - 1 ? ' ' : '');
    });
  });

  const bands = $$('.band', hero).map((el) => ({ el, a: +el.dataset.a, b: +el.dataset.b, op: -1, k: -1 }));
  const first = bands[0], last = bands[bands.length - 1];
  const heroOn = () => getComputedStyle(hero).display !== 'none';

  let pLast = -1;
  function paintHero(p) {
    // explode -> monta entre 4% e 70%; gira de lado -> de frente entre 40% e 88%; a roda gira um pouco no fim
    const e = 1 - smooth(p, 0.04, 0.7);
    const r = 1 - smooth(p, 0.4, 0.88);
    const s = smooth(p, 0.5, 1) * 360;
    cena.style.setProperty('--e', e.toFixed(4));
    cena.style.setProperty('--r', r.toFixed(4));
    cena.style.setProperty('--s', s.toFixed(2));
    legenda.classList.toggle('on', p > 0.3);
    bands.forEach((bd) => {
      const f = Math.min(0.03, (bd.b - bd.a) / 4);
      let op = (bd === first ? 1 : smooth(p, bd.a, bd.a + f)) * (bd === last ? 1 : 1 - smooth(p, bd.b - f, bd.b));
      let k = bd === first ? 1 : clamp((p - bd.a) / 0.12, 0, 1);
      if (Math.abs(op - bd.op) > 0.004) { bd.el.style.opacity = op.toFixed(3); bd.el.style.pointerEvents = op > 0.5 ? 'auto' : 'none'; bd.op = op; }
      if (Math.abs(k - bd.k) > 0.006) { bd.el.style.setProperty('--k', k.toFixed(3)); bd.k = k; }
      bd.el.toggleAttribute('inert', op < 0.5);
    });
    cue.style.opacity = p < 0.04 ? 1 : 0;
  }
  function updateHero() {
    if (!heroOn()) return;
    const rr = hero.getBoundingClientRect();
    const p = clamp(-rr.top / Math.max(1, rr.height - innerHeight), 0, 1);
    if (Math.abs(p - pLast) < 0.0005) return;
    pLast = p;
    paintHero(p);
  }
  // inclinação leve que segue o mouse
  if (FINE.matches && !RM.matches) {
    cena.addEventListener('pointermove', (ev) => {
      const b = cena.getBoundingClientRect();
      const x = (ev.clientX - b.left) / b.width - 0.5, y = (ev.clientY - b.top) / b.height - 0.5;
      cena.style.rotate = `${(-y * 6).toFixed(2)}deg ${(x * 6).toFixed(2)}deg 0`;
    });
    cena.addEventListener('pointerleave', () => { cena.style.rotate = ''; });
  }
  paintHero(0);
  onScrollFrame(updateHero);
  addEventListener('resize', () => { pLast = -1; updateHero(); });
  updateHero();

  /* ---------- faixa rolando (acelera com o scroll) ---------- */
  const mq = $('#mq');
  const trilho = $('.faixa-trilho', mq);
  const lista = $('.faixa-lista', mq);
  const copia = lista.cloneNode(true);
  copia.setAttribute('aria-hidden', 'true');
  trilho.append(copia);
  let mqX = 0, mqV = 0, mqY = scrollY, mqRaf = 0, mqOn = false, mqT = 0;
  const mqTick = (now) => {
    const dt = mqT ? Math.min(50, now - mqT) : 16; mqT = now;
    const dy = Math.abs(scrollY - mqY); mqY = scrollY;
    mqV += (dy * 0.6 - mqV) * 0.1;
    mqX -= (0.05 + mqV * 0.02) * dt;
    const w = lista.offsetWidth;
    if (-mqX >= w) mqX += w;
    trilho.style.transform = `translate3d(${mqX.toFixed(1)}px,0,0)`;
    mqRaf = mqOn ? requestAnimationFrame(mqTick) : 0;
  };
  new IntersectionObserver(([e]) => {
    mqOn = e.isIntersecting && !RM.matches;
    if (mqOn && !mqRaf) { mqT = 0; mqY = scrollY; mqRaf = requestAnimationFrame(mqTick); }
  }).observe(mq);

  /* ---------- catálogo por aplicação (dados de demonstração) ---------- */
  const carros = {
    Volkswagen: ['Gol', 'Polo', 'T-Cross', 'Saveiro', 'Amarok'],
    Fiat: ['Argo', 'Mobi', 'Strada', 'Toro', 'Pulse'],
    Chevrolet: ['Onix', 'Tracker', 'S10', 'Spin', 'Montana'],
    Ford: ['Ka', 'EcoSport', 'Ranger', 'Territory'],
    Toyota: ['Corolla', 'Yaris', 'Hilux', 'Corolla Cross'],
    Hyundai: ['HB20', 'Creta', 'Tucson'],
    Renault: ['Kwid', 'Sandero', 'Duster', 'Oroch'],
    Honda: ['City', 'Civic', 'HR-V', 'WR-V'],
  };
  const marca = $('#b-marca'), modelo = $('#b-modelo'), ano = $('#b-ano'), res = $('#resultado');
  Object.keys(carros).forEach((m) => marca.add(new Option(m, m)));
  const reset = (sel, txt) => { sel.length = 0; sel.add(new Option(txt, '')); };
  marca.addEventListener('change', () => {
    reset(modelo, marca.value ? 'Selecione' : '—');
    reset(ano, '—'); ano.disabled = true;
    (carros[marca.value] || []).forEach((x) => modelo.add(new Option(x, x)));
    modelo.disabled = !marca.value;
  });
  modelo.addEventListener('change', () => {
    reset(ano, modelo.value ? 'Selecione' : '—');
    for (let a = 2026; a >= 2012; a--) ano.add(new Option(a, a));
    ano.disabled = !modelo.value;
  });
  const pecas = [
    ['Calota de centro', 'CL', 0], ['Anel centralizador', 'AN', 1], ['Capas de parafuso', 'CP', 2], ['Espaçador de roda', 'ES', 3],
  ];
  const lays = $$('.produto-img svg');
  $('#busca').addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (!marca.value || !modelo.value || !ano.value) { avisar('Escolha montadora, modelo e ano.'); return; }
    const cod = (marca.value.slice(0, 2) + modelo.value.replace(/\W/g, '').slice(0, 2)).toUpperCase();
    res.textContent = '';
    pecas.forEach(([nome, sig, li], n) => {
      const item = document.createElement('div');
      item.className = 'res-item';
      item.style.animationDelay = n * 70 + 'ms';
      const ico = lays[li] ? lays[li].cloneNode(true) : document.createElement('span');
      const txt = document.createElement('div');
      const b = document.createElement('b'); b.textContent = nome;
      const sm = document.createElement('small'); sm.textContent = `MP-${sig}-${cod}0${n + 1}, ${modelo.value} ${ano.value}`;
      txt.append(b, sm);
      const ok = document.createElement('span'); ok.className = 'ok'; ok.textContent = 'Serve';
      item.append(ico, txt, ok);
      res.append(item);
    });
  });

  /* ---------- antes e depois ---------- */
  const cmp = $('#cmp'), cmpRange = $('#cmpRange');
  let tocou = false;
  const setCmp = (v) => cmp.style.setProperty('--x', v + '%');
  cmpRange.addEventListener('input', () => { tocou = true; setCmp(cmpRange.value); });
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting || RM.matches) return;
    obs.disconnect();
    const s = performance.now();
    const dica = (now) => {
      if (tocou) return;
      const t = clamp((now - s) / 2600, 0, 1);
      const v = 50 + Math.sin(t * Math.PI * 2) * 24 * (1 - t);
      setCmp(v.toFixed(1)); cmpRange.value = Math.round(v);
      if (t < 1) requestAnimationFrame(dica);
    };
    requestAnimationFrame(dica);
  }, { threshold: 0.6 }).observe(cmp);

  /* ---------- dúvidas (uma aberta por vez) ---------- */
  $$('.qa button').forEach((btn) => btn.addEventListener('click', () => {
    const item = btn.closest('.qa');
    const abrir = !item.classList.contains('open');
    $$('.qa.open').forEach((q) => { q.classList.remove('open'); $('button', q).setAttribute('aria-expanded', 'false'); });
    if (abrir) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
  }));

  /* ---------- formulário: monta a mensagem e abre o WhatsApp ---------- */
  const form = $('#form-revenda');
  const erro = $('#form-erro');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.nome.trim() || !d.empresa.trim() || !d.cidade.trim() || !d.tipo) { erro.hidden = false; return; }
    erro.hidden = true;
    let msg = `Olá, Metalplas! Sou ${d.nome.trim()}, da ${d.empresa.trim()} (${d.tipo}), em ${d.cidade.trim()}. Quero ser revenda.`;
    if (d.msg.trim()) msg += ` Tenho interesse em: ${d.msg.trim()}.`;
    if (WA) window.open(waLink(msg), '_blank', 'noopener');
    else avisar('Protótipo: na versão final esta mensagem abre no WhatsApp de vendas. "' + msg + '"');
  });

  /* ---------- barra flutuante: aparece depois da entrada, some perto do formulário ---------- */
  const barra = $('#barra');
  const contato = $('#contato');
  const marco = () => (heroOn() ? hero : $('.hero-parado'));
  onScrollFrame(() => {
    const passou = marco().getBoundingClientRect().bottom < 0;
    const perto = contato.getBoundingClientRect().top < innerHeight * 0.9;
    barra.classList.toggle('on', passou && !perto);
  });

  /* ---------- borda que acende do lado do mouse e botões magnéticos ---------- */
  if (FINE.matches) {
    const glows = $$('.produto, .passo, .busca, .form');
    glows.forEach((c) => c.classList.add('glow'));
    let gx = 0, gy = 0, gq = false;
    const paint = () => {
      gq = false;
      for (const c of glows) {
        const r = c.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        const perto = gx > r.left - 80 && gx < r.right + 80 && gy > r.top - 80 && gy < r.bottom + 80;
        c.style.setProperty('--go', perto && !RM.matches ? 1 : 0);
        if (perto) c.style.setProperty('--ga', (Math.atan2(gy - (r.top + r.height / 2), gx - (r.left + r.width / 2)) * 180 / Math.PI + 90).toFixed(1));
      }
    };
    addEventListener('pointermove', (e) => { gx = e.clientX; gy = e.clientY; if (!gq) { gq = true; requestAnimationFrame(paint); } }, { passive: true });
    $$('.btn-amarelo').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        if (RM.matches) return;
        const r = b.getBoundingClientRect();
        b.style.translate = `${((e.clientX - r.left) / r.width - 0.5) * 8}px ${((e.clientY - r.top) / r.height - 0.5) * 6}px`;
      });
      b.addEventListener('pointerleave', () => { b.style.translate = ''; });
    });
  }
})();
