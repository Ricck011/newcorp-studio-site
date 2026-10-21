/* Pedro Henrique · sites e sistemas. JavaScript puro, sem dependências. */
(() => {
  const WA = '5511988681657';
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const smooth = (p, e0, e1) => { const t = clamp((p - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  // todas as leituras de scroll rodam juntas, uma vez por quadro
  const scrollFns = [];
  const onScrollFrame = (f) => scrollFns.push(f);
  let scrollQueued = false;
  addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; for (const f of scrollFns) f(); });
  }, { passive: true });

  /* ---------- links de WhatsApp ---------- */
  $$('[data-wa]').forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* ---------- abertura (no máximo 3 s) ---------- */
  const loader = $('#loader');
  const pctEl = $('#pct');
  const bar = $('#pctbar');
  const t0 = performance.now();
  let real = 0;          // progresso real dos recursos críticos
  const marks = { fonts: false, poster: false };
  const bump = () => { real = (marks.fonts ? 0.5 : 0) + (marks.poster ? 0.5 : 0); };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { marks.fonts = true; bump(); });
  const preload = new Image();
  preload.onload = preload.onerror = () => { marks.poster = true; bump(); };
  preload.src = matchMedia('(max-width: 720px)').matches ? 'assets/hero-mobile.jpg' : 'assets/hero-poster.jpg';

  let loaded = false;
  let loadK = 0;          // rampa única de montagem da faixa 1
  function finishLoad() {
    if (loaded) return;
    loaded = true;
    loader.classList.add('out');
    document.body.classList.remove('loading');
    setTimeout(() => loader.remove(), 1100);
    const s = performance.now();
    const ramp = (now) => {
      loadK = clamp((now - s - 350) / 1100, 0, 1);
      updateCaptions(shown, true);
      if (loadK < 1) requestAnimationFrame(ramp);
    };
    requestAnimationFrame(ramp);
  }
  if (RM.matches) { loader.remove(); document.body.classList.remove('loading'); loaded = true; loadK = 1; }
  else {
    let shownPct = 0;
    const tickLoad = (now) => {
      const el = now - t0;
      // o tempo puxa o número, o progresso real libera o fim; teto duro de 3 s
      const timeP = clamp(el / 2400, 0, 1);
      const target = el >= 3000 ? 1 : Math.min(timeP, real >= 1 ? 1 : 0.9);
      shownPct += (target - shownPct) * 0.12;
      if (target === 1 && shownPct > 0.995) shownPct = 1;
      const v = Math.round(shownPct * 100);
      if (pctEl.textContent !== v + '%') pctEl.textContent = v + '%';
      bar.style.setProperty('--p', shownPct.toFixed(3));
      if (shownPct >= 1) setTimeout(finishLoad, 180);
      else requestAnimationFrame(tickLoad);
    };
    requestAnimationFrame(tickLoad);
  }

  /* ---------- navegação ---------- */
  const nav = $('#nav');
  const menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  $$('#menu a').forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));
  const dock = $('#dock');
  const dockBtn = $('.btn', dock);
  const contato = $('#contato');
  let lastY = 0, navSolid = null, navHide = null, dockOn = null;
  function onPageScroll() {
    const y = scrollY;
    const solid = y > 40;
    const hide = y > 500 && y > lastY && !nav.classList.contains('open');
    if (solid !== navSolid) { nav.classList.toggle('solid', solid); navSolid = solid; }
    if (hide !== navHide) { nav.classList.toggle('hide', hide); navHide = hide; }
    const heroEl = getComputedStyle($('#hero')).display !== 'none' ? $('#hero') : $('.static-hero');
    const heroEnd = heroEl.offsetTop + heroEl.offsetHeight - innerHeight * 0.4;
    const cr = contato.getBoundingClientRect();
    const on = y > heroEnd && cr.top > innerHeight * 0.6;
    if (on !== dockOn) {
      dock.classList.toggle('show', on);
      dock.setAttribute('aria-hidden', String(!on));
      dockBtn.tabIndex = on ? 0 : -1;
      dockOn = on;
    }
    lastY = y;
  }
  onScrollFrame(onPageScroll);
  onPageScroll();

  /* ---------- fundos das seções: andam mais devagar que a rolagem ---------- */
  const bgs = $$('.sec-bg');
  const bgFine = matchMedia('(min-width: 981px) and (pointer: fine)');
  function updateBgs() {
    const on = bgFine.matches && !RM.matches;
    for (const b of bgs) {
      if (!on) { if (b.style.transform) b.style.transform = ''; continue; }
      const r = b.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) continue;
      const mid = r.top + r.height / 2 - innerHeight / 2;
      b.style.transform = `translate3d(0,${(mid * -0.08).toFixed(1)}px,0)`;
    }
  }
  onScrollFrame(updateBgs);
  updateBgs();

  /* ---------- entradas ao rolar ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
      const g = e.target.closest('.rv-group');
      if (g && !g.dataset.timer) g.dataset.timer = setTimeout(() => g.classList.add('done'), 1600);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  $$('.rv').forEach((el) => io.observe(el));

  /* ---------- contadores ---------- */
  const counters = $$('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target, to = +el.dataset.count;
      if (RM.matches || to === 0) { el.textContent = to; return; }
      const s = performance.now();
      const step = (now) => {
        const t = clamp((now - s) / 1600, 0, 1);
        const v = Math.round(to * (1 - Math.pow(1 - t, 4)));
        if (el.textContent !== String(v)) el.textContent = v;
        if (t < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));

  const FINE = matchMedia('(hover: hover) and (pointer: fine)');
  // inclinação 3D que segue o mouse (só com mouse de verdade)
  function mouseTilt(area, target) {
    if (!FINE.matches) return;
    let raf = null, mx = 0, my = 0;
    area.addEventListener('pointermove', (e) => {
      const r = area.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(() => { raf = null; if (RM.matches) return; target.style.setProperty('--mx', mx.toFixed(3)); target.style.setProperty('--my', my.toFixed(3)); });
    });
    area.addEventListener('pointerleave', () => { target.style.setProperty('--mx', 0); target.style.setProperty('--my', 0); });
  }

  /* ---------- 01. fotos com profundidade ---------- */
  const about = $('#quem');
  const depthEls = $$('[data-depth]', about);
  function updateAbout() {
    if (RM.matches) return;
    const r = about.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const off = (r.top + r.height / 2) - innerHeight / 2;
    depthEls.forEach((el) => { el.style.transform = `translate3d(0,${(off * +el.dataset.depth).toFixed(1)}px,0)`; });
  }
  onScrollFrame(updateAbout);
  updateAbout();

  /* ---------- faixa de ramos: anda sozinha e acelera com o scroll ---------- */
  const mq = $('#mq');
  let mqX = 0, mqV = 0, mqLastY = scrollY, mqOn = false, mqRaf = null, mqT = 0;
  function mqTick(now) {
    const dt = Math.min(50, now - (mqT || now)); mqT = now;
    const dy = scrollY - mqLastY; mqLastY = scrollY;
    mqV += (Math.abs(dy) * 0.6 - mqV) * 0.1;
    mqX -= (0.04 * dt) + mqV * 0.5;
    const half = mq.scrollWidth / 2;
    if (-mqX >= half) mqX += half;
    mq.style.transform = `translate3d(${mqX.toFixed(1)}px,0,0)`;
    mqRaf = mqOn ? requestAnimationFrame(mqTick) : null;
  }
  new IntersectionObserver(([e]) => {
    mqOn = e.isIntersecting && !RM.matches;
    if (mqOn && !mqRaf) { mqT = 0; mqLastY = scrollY; mqRaf = requestAnimationFrame(mqTick); }
  }).observe(mq);

  /* ---------- 02. o site se montando em 3D ---------- */
  const build = $('#sites');
  const buildPin = $('.build-pin', build);
  const b3d = $('#b3d');
  const bSteps = $$('#buildSteps li');
  const bBar = $('#buildBar');
  let bLast = -1, bLastE = -1, bAuto = false;
  function paintBuild(p) {
    const e = 1 - smooth(p, 0.04, 0.78);
    if (Math.abs(e - bLastE) > 0.002) { b3d.style.setProperty('--e', e.toFixed(3)); bLastE = e; }
    bBar.parentElement.style.setProperty('--p', p.toFixed(3));
    const step = p < 0.2 ? 0 : p < 0.42 ? 1 : p < 0.64 ? 2 : 3;
    if (step !== bLast) {
      [1, 2, 3].forEach((i) => b3d.classList.toggle('s' + i, step >= i));
      bSteps.forEach((li) => li.classList.toggle('on', +li.dataset.i <= step));
      bLast = step;
    }
  }
  const buildPinned = () => getComputedStyle(buildPin).position === 'sticky';
  function updateBuild() {
    if (RM.matches || !buildPinned()) return;
    const r = build.getBoundingClientRect();
    paintBuild(clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1));
  }
  onScrollFrame(updateBuild);
  addEventListener('resize', () => { if (!buildPinned() && !bAuto) paintBuild(1); updateBuild(); });
  // sem tela presa (celular): monta sozinho quando aparece
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting || buildPinned() || RM.matches) return;
    obs.disconnect(); bAuto = true;
    const s = performance.now();
    const run = (now) => { const p = clamp((now - s) / 4200, 0, 1); paintBuild(p); if (p < 1) requestAnimationFrame(run); };
    requestAnimationFrame(run);
  }, { threshold: 0.35 }).observe($('#buildScene'));
  paintBuild(0);
  updateBuild();
  mouseTilt($('#buildScene'), b3d);

  /* ---------- 03. o sistema funcionando (em loop só quando visível) ---------- */
  const s3d = $('#s3d');
  const tiles = $$('.tile', s3d);
  let sysTimer = null, sysPh = 0;
  const sysTick = () => {
    sysPh = (sysPh + 1) % 6;
    const ph = Math.min(sysPh, 4);
    s3d.dataset.ph = ph;
    tiles.forEach((t) => t.classList.toggle('on', (+t.dataset.n === 0 && ph >= 1 && ph <= 2) || (+t.dataset.n === 1 && ph === 3) || (+t.dataset.n === 2 && ph === 4)));
  };
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !RM.matches) { if (!sysTimer) { sysTick(); sysTimer = setInterval(sysTick, 1300); } }
    else { clearInterval(sysTimer); sysTimer = null; }
  }).observe(s3d);
  mouseTilt($('#sysScene'), s3d);

  /* ---------- 04. antes e depois ---------- */
  const cmp = $('#cmp');
  const cmpRange = $('#cmpRange');
  let cmpTouched = false;
  const setCmp = (v) => cmp.style.setProperty('--x', v + '%');
  cmpRange.addEventListener('input', () => { cmpTouched = true; setCmp(cmpRange.value); });
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting || RM.matches) return;
    obs.disconnect();
    const s = performance.now();
    const hint = (now) => {
      if (cmpTouched) return;
      const t = clamp((now - s) / 2600, 0, 1);
      const v = 40 + Math.sin(t * Math.PI * 2) * 22 * (1 - t);
      setCmp(v.toFixed(1)); cmpRange.value = Math.round(v);
      if (t < 1) requestAnimationFrame(hint);
    };
    requestAnimationFrame(hint);
  }, { threshold: 0.6 }).observe(cmp);

  /* ---------- monte o seu ---------- */
  const RAMOS = {
    barbearia: { bg: '#141210', ink: '#E8DCC8', acc: '#C8963E', cta: 'Agendar', t: 'Corte com hora marcada.', s: 'Horários, preços e localização num lugar só.' },
    clinica: { bg: '#F5FAF7', ink: '#0F3D2E', acc: '#1A7F52', cta: 'Consulta', t: 'Cuidado perto de você.', s: 'Especialidades, convênios e horários livres da semana.' },
    loja: { bg: '#F3EEE8', ink: '#2B2420', acc: '#9A4F37', cta: 'Catálogo', t: 'As novidades da semana chegaram.', s: 'Veja as peças e peça direto pelo WhatsApp.' },
    servico: { bg: '#0E1A2B', ink: '#F2F4F7', acc: '#3D8BFF', cta: 'Orçamento', t: 'Serviço bem feito, no dia combinado.', s: 'Mande uma foto e receba o orçamento no mesmo dia.' },
    comida: { bg: '#1A0F0B', ink: '#F6E7D8', acc: '#E0582B', cta: 'Pedir', t: 'Do forno para a sua mesa.', s: 'Cardápio do dia, horário e entrega no bairro.' },
  };
  const pv = $('#preview');
  // seção retirada do site em 20/10/2026; o código fica para se ela voltar
  if (pv) {
  const nameIn = $('#bizName');
  let ramo = 'barbearia';
  const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '') || 'seunegocio';
  function paint(animate) {
    const r = RAMOS[ramo];
    const name = nameIn.value.trim() || 'Seu negócio';
    const apply = () => {
      pv.style.setProperty('--pv-bg', r.bg);
      pv.style.setProperty('--pv-ink', r.ink);
      pv.style.setProperty('--pv-acc', r.acc);
      $('#pvName').textContent = name;
      $('#pvCta').textContent = r.cta;
      $('#pvTitle').textContent = r.t;
      $('#pvSub').textContent = r.s;
      $('#pvUrl').textContent = slug(nameIn.value.trim()) + '.com.br';
      pv.classList.remove('swap');
    };
    if (animate && !RM.matches) { pv.classList.add('swap'); setTimeout(apply, 260); } else apply();
  }
  $$('.chips button').forEach((b) => b.addEventListener('click', () => {
    ramo = b.dataset.ramo;
    $$('.chips button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    paint(true);
  }));
  let typeT;
  nameIn.addEventListener('input', () => { clearTimeout(typeT); typeT = setTimeout(() => paint(false), 120); });
  const makeLink = $('[data-wa-make]');
  const updateMakeLink = () => {
    const n = nameIn.value.trim();
    makeLink.href = waLink(`Oi, Pedro! Montei uma prévia no seu site${n ? ' para ' + n : ''} (${$('.chips [aria-pressed="true"]').textContent}). Quero ver a primeira tela de verdade.`);
    makeLink.target = '_blank'; makeLink.rel = 'noopener';
  };
  makeLink.addEventListener('pointerdown', updateMakeLink);
  makeLink.addEventListener('focus', updateMakeLink);
  updateMakeLink();
  paint(false);
  mouseTilt($('.preview-wrap'), pv);
  }

  /* ---------- mini vídeos que andam com o scroll ---------- */
  // computador com mouse: o vídeo segue a rolagem; celular: toca em loop; movimento reduzido: só a imagem
  const scrubVids = $$('video.scrub').map((v) => ({ v, sec: v.closest('.reel'), on: false, loaded: false, shown: 0, busy: false, next: null }));
  const scrubMode = () => FINE.matches && innerWidth > 720 && !RM.matches;
  const isScrub = (s) => !!s.sec && scrubMode();
  function loadVid(s) {
    if (s.loaded || RM.matches) return;
    s.loaded = true;
    s.v.src = s.v.dataset.src;
    s.v.preload = 'auto';
    s.v.addEventListener('seeked', () => { s.busy = false; if (s.next !== null) { const t = s.next; s.next = null; seekVid(s, t); } });
    s.v.addEventListener('loadedmetadata', kickScrub);
    if (!isScrub(s)) { s.v.loop = true; if (s.on) s.v.play().catch(() => {}); }
  }
  function seekVid(s, t) {
    if (!s.v.duration) return;
    if (s.busy) { s.next = t; return; }
    s.busy = true; s.v.currentTime = t;
  }
  const lazyIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { loadVid(scrubVids.find((s) => s.v === e.target)); lazyIO.unobserve(e.target); } }), { rootMargin: '900px 0px' });
  const visIO = new IntersectionObserver((es) => es.forEach((e) => {
    const s = scrubVids.find((x) => x.v === e.target);
    s.on = e.isIntersecting;
    if (!isScrub(s) && s.loaded) { if (s.on) s.v.play().catch(() => {}); else s.v.pause(); }
    if (s.on) kickScrub();
  }));
  scrubVids.forEach((s) => { lazyIO.observe(s.v); visIO.observe(s.v); });
  let scrubRaf = null, scrubT = 0;
  function scrubTick(now) {
    const dt = Math.min(100, now - (scrubT || now)); scrubT = now;
    let moving = false;
    scrubVids.forEach((s) => {
      if (!s.on || !s.v.duration || !isScrub(s)) return;
      const r = s.sec.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1);
      const vo = (1 - 0.65 * smooth(p, 0.5, 1)).toFixed(3);
      if (vo !== s.vo) { s.v.style.setProperty('--vo', vo); s.vo = vo; }
      const target = p * s.v.duration * 0.999;
      s.shown += (target - s.shown) * (1 - Math.pow(1 - 0.3, dt / 16.667));
      if (Math.abs(target - s.shown) > 0.004) moving = true; else s.shown = target;
      if (Math.abs(s.v.currentTime - s.shown) > 0.02) seekVid(s, s.shown);
    });
    scrubRaf = moving ? requestAnimationFrame(scrubTick) : null;
    if (!moving) scrubT = 0;
  }
  function kickScrub() { if (scrubMode() && !scrubRaf) scrubRaf = requestAnimationFrame(scrubTick); }
  onScrollFrame(kickScrub);

  /* ---------- barra de progresso da página ---------- */
  const prog = $('#progress');
  let progLast = -1;
  function updateProgress() {
    const p = clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight), 0, 1);
    if (Math.abs(p - progLast) > 0.001) { prog.style.setProperty('--sp', p.toFixed(4)); progLast = p; }
  }
  onScrollFrame(updateProgress);
  updateProgress();

  /* ---------- títulos entram palavra por palavra ---------- */
  $$('main h2').forEach((h) => {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(part); return; }
            const w = document.createElement('span'); w.className = 'hw'; w.textContent = part; frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(h);
    $$('.hw', h).forEach((w, i) => w.style.setProperty('--i', i));
    h.classList.add('h-split');
  });
  const hIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); hIO.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
  $$('.h-split').forEach((h) => hIO.observe(h));

  /* ---------- luz que segue o mouse e botões magnéticos ---------- */
  if (FINE.matches) {
    // borda que acende do lado do mouse (ideia do "Glowing Effect" do 21st.dev, refeita sem React)
    const glows = $$('.plan, .fundador, .step, .quote, .cta form');
    glows.forEach((c) => c.classList.add('glow'));
    let gx = 0, gy = 0, gQueued = false;
    const paintGlow = () => {
      gQueued = false;
      for (const c of glows) {
        const r = c.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        const near = gx > r.left - 80 && gx < r.right + 80 && gy > r.top - 80 && gy < r.bottom + 80;
        c.style.setProperty('--go', near && !RM.matches ? 1 : 0);
        if (near) c.style.setProperty('--ga', (Math.atan2(gy - (r.top + r.height / 2), gx - (r.left + r.width / 2)) * 180 / Math.PI + 90).toFixed(1));
      }
    };
    addEventListener('pointermove', (e) => { gx = e.clientX; gy = e.clientY; if (!gQueued) { gQueued = true; requestAnimationFrame(paintGlow); } }, { passive: true });
    $$('.btn-accent').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        if (RM.matches) return;
        const r = b.getBoundingClientRect();
        b.style.translate = `${((e.clientX - r.left) / r.width - 0.5) * 8}px ${((e.clientY - r.top) / r.height - 0.5) * 6}px`;
      });
      b.addEventListener('pointerleave', () => { b.style.translate = ''; });
    });
  }

  /* ---------- teste "qual plano é pra você" ---------- */
  const quiz = $('#quiz');
  if (quiz) {
    quiz.hidden = false; // sem JavaScript o teste não aparece; os planos continuam ali
    const ans = {};
    const res = $('#quizRes');
    const cards = $$('[data-plan]');
    $$('button[data-q]', quiz).forEach((b) => b.addEventListener('click', () => {
      const q = b.dataset.q;
      $$(`button[data-q="${q}"]`, quiz).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      ans[q] = +b.dataset.v;
      if (Object.keys(ans).length < 3) return;
      const premium = ans[2] === 1 || ans[3] === 1;
      const nome = premium ? 'Premium' : 'Essencial';
      const porque = premium
        ? (ans[3] === 1 ? 'Você quer o texto de venda pronto e um visual só seu.' : 'Para ficar acima dos concorrentes, o visual exclusivo faz a diferença.')
        : 'Você quer ser achado e chamado logo, e já sabe o que falar.';
      res.innerHTML = '';
      const p = document.createElement('p');
      p.innerHTML = `<strong></strong> `;
      p.firstChild.textContent = `Plano ${nome}.`;
      p.append(porque);
      const a = document.createElement('a');
      a.className = 'btn btn-accent';
      a.href = waLink(`Oi, Pedro! Fiz o teste no site e deu plano ${nome}. Quero ver a primeira tela.`);
      a.target = '_blank'; a.rel = 'noopener';
      a.textContent = `Quero o ${nome}, primeira tela grátis`;
      res.append(p, a);
      cards.forEach((c) => c.classList.toggle('pick', c.dataset.plan === nome.toLowerCase()));
    }));
  }

  /* ---------- dúvidas (uma aberta por vez) ---------- */
  $$('.qa button').forEach((btn) => btn.addEventListener('click', () => {
    const item = btn.closest('.qa');
    const open = !item.classList.contains('open');
    $$('.qa.open').forEach((o) => { o.classList.remove('open'); $('button', o).setAttribute('aria-expanded', 'false'); });
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }));

  /* ---------- inclinação dos projetos ---------- */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('[data-tilt]').forEach((el) => {
      const site = $('.site', el);
      el.addEventListener('pointermove', (e) => {
        if (RM.matches) return;
        const r = site.getBoundingClientRect();
        site.style.setProperty('--rx', ((0.5 - (e.clientY - r.top) / r.height) * 6).toFixed(2) + 'deg');
        site.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 6).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', () => { site.style.setProperty('--rx', '0deg'); site.style.setProperty('--ry', '0deg'); });
    });
  }

  /* ---------- linha que se traça no processo ---------- */
  const trace = $('#tracePath');
  const traceSec = $('#processo');
  let traceLast = '';
  function updateTrace() {
    const r = traceSec.getBoundingClientRect();
    const p = RM.matches ? 1 : clamp((innerHeight * 0.8 - r.top) / r.height, 0, 1);
    const v = (1 - p).toFixed(3);
    if (v !== traceLast) { trace.style.strokeDashoffset = v; traceLast = v; }
  }
  onScrollFrame(updateTrace);
  updateTrace();

  /* ---------- formulário final: abre o WhatsApp ---------- */
  $('#leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.reportValidity()) return;
    const msg = `Oi, Pedro! Meu nome é ${f.nome.value.trim()}, sou do negócio ${f.negocio.value.trim()}. Preciso de: ${f.ramo.value}.`;
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ================= hero de scroll ================= */
  const hero = $('#hero');
  const stage = $('#stage');
  const video = $('#video');
  const ring = $('#ring');
  const cue = $('#cue');
  const posterLayer = $('.poster', stage);
  // tela grande recebe 1600 px; o resto, 1280 px. Acima disso a busca de quadro pesa e a rolagem engasga
  const BIG = innerWidth * (devicePixelRatio || 1) > 1800;
  const VIDEO_URL = BIG ? 'assets/hero-scrub-1600.mp4' : 'assets/hero-scrub-1280.mp4';
  const VIDEO_BYTES = BIG ? 6850810 : 4826681;
  // versão nítida: só aparece quando a rolagem para, então o peso dela não trava o movimento
  const videoHi = $('#videoHi');
  const HI_URL = BIG ? 'assets/hero-sharp-2560.mp4' : 'assets/hero-sharp-1920.mp4';
  let hiReady = false, hiTimer = null;
  function hideHi() { clearTimeout(hiTimer); if (videoHi.classList.contains('on')) videoHi.classList.remove('on'); }
  function scheduleHi() {
    if (!hiReady) return;
    clearTimeout(hiTimer);
    hiTimer = setTimeout(() => {
      const t = lastSeekT;
      if (rafId !== null || t < 0) return;
      const show = () => { if (rafId === null && lastSeekT === t) videoHi.classList.add('on'); };
      if (Math.abs(videoHi.currentTime - t) < 0.01) { show(); return; }
      videoHi.addEventListener('seeked', show, { once: true });
      videoHi.currentTime = t;
    }, 160);
  }
  async function loadHi() {
    try {
      const res = await fetch(HI_URL, { priority: 'low' });
      if (!res.ok) return;
      const blob = await res.blob();
      videoHi.preload = 'auto';
      videoHi.src = URL.createObjectURL(blob);
      videoHi.load();
      videoHi.addEventListener('canplay', () => { hiReady = true; if (rafId === null) scheduleHi(); }, { once: true });
    } catch (e) { /* fica só a versão leve */ }
  }

  // divisão em palavras, com semente fixa
  function rng(seed) { let s = seed >>> 0; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
  $$('[data-split]').forEach((band, bi) => {
    const r = rng(17 + bi);
    $$('.big, .small:not(.stage2)', band).forEach((el) => {
      const text = el.textContent;
      const words = text.split(' ');
      el.textContent = '';
      // leitor de tela lê a frase inteira; as palavras soltas ficam escondidas dele
      const sr = document.createElement('span');
      sr.className = 'sr';
      sr.textContent = text;
      el.append(sr);
      words.forEach((w, i) => {
        const s = document.createElement('span');
        s.className = 'w';
        s.setAttribute('aria-hidden', 'true');
        s.textContent = w;
        s.style.setProperty('--th', (i / words.length * 0.45 + r() * 0.05).toFixed(3));
        el.append(s, i < words.length - 1 ? ' ' : '');
      });
    });
  });

  const bands = $$('.band', stage).map((el) => ({
    el, a: +el.dataset.a, b: +el.dataset.b, ramp: el.dataset.ramp ? +el.dataset.ramp : null, op: -1, k: -1,
  }));
  const first = bands[0], last = bands[bands.length - 1];

  let target = 0, shown = 0, rafId = null, lastTick = 0, heroOnScreen = true, heroVo = '';
  function heroProgress() {
    const r = hero.getBoundingClientRect();
    return clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1);
  }
  function updateCaptions(p, force) {
    bands.forEach((bd) => {
      const f = Math.min(0.02, (bd.b - bd.a) / 3);
      let op = (bd === first ? 1 : smooth(p, bd.a, bd.a + f)) * (bd === last ? 1 : 1 - smooth(p, bd.b - f, bd.b));
      let k = clamp((p - bd.a) / (bd.ramp || Math.min(0.025, (bd.b - bd.a) * 0.35)), 0, 1);
      if (bd === first) { k = Math.max(k, loadK); op *= loadK > 0 ? 1 : 0; }
      if (bd === last && p < bd.a) op = 0;
      if (force || Math.abs(op - bd.op) > 0.004) { bd.el.style.opacity = op.toFixed(3); bd.op = op; bd.el.style.pointerEvents = op > 0.5 ? 'auto' : 'none'; }
      if (force || Math.abs(k - bd.k) > 0.008) { bd.el.style.setProperty('--k', k.toFixed(3)); bd.k = k; }
    });
    const cueOn = p < 0.04;
    if (cue.dataset.on !== String(cueOn)) { cue.style.opacity = cueOn ? 1 : 0; cue.dataset.on = cueOn; }
  }

  let seekBusy = false, pendingTime = null, lastSeekT = -1;
  function requestSeek(t) {
    if (!video.duration) return;
    t = Math.round(t * 24) / 24; // o vídeo tem 24 quadros por segundo: só busca quando o quadro muda
    if (seekBusy) { pendingTime = t; return; }
    if (t === lastSeekT) return;
    lastSeekT = t;
    seekBusy = true;
    video.currentTime = t;
  }
  video.addEventListener('seeked', () => {
    seekBusy = false;
    if (pendingTime !== null) { const t = pendingTime; pendingTime = null; requestSeek(t); }
  });
  video.addEventListener('error', () => { seekBusy = false; pendingTime = null; failVideo(); });

  function tick(now) {
    const dt = Math.min(100, now - (lastTick || now));
    lastTick = now;
    shown += (target - shown) * (1 - Math.pow(1 - 0.3, dt / 16.667));
    if (Math.abs(target - shown) < 0.0005) { shown = target; rafId = null; lastTick = 0; scheduleHi(); }
    else { rafId = requestAnimationFrame(tick); hideHi(); }
    requestSeek(shown * (video.duration || 0) * 0.999);
    updateCaptions(shown);
    const vo = (1 - 0.6 * smooth(shown, 0.84, 1)).toFixed(3);
    if (vo !== heroVo) { stage.style.setProperty('--vo', vo); heroVo = vo; }
  }
  function onScroll() {
    target = heroProgress();
    if (rafId === null && heroOnScreen) rafId = requestAnimationFrame(tick);
  }
  new IntersectionObserver(([e]) => { heroOnScreen = e.isIntersecting; if (heroOnScreen) onScroll(); }).observe(hero);

  let heroInit = false;
  function initHeroOnce() {
    if (heroInit) return;
    heroInit = true;
    posterLayer.style.backgroundImage = "url('assets/hero-poster.jpg')";
    let started = false;
    const startBlob = () => { if (started) return; started = true; loadHeroBlob().catch(failVideo); };
    const pi = new Image();
    pi.onload = pi.onerror = startBlob;
    pi.src = 'assets/hero-poster.jpg';
    setTimeout(startBlob, 4000);
  }
  async function loadHeroBlob() {
    const ctrl = new AbortController();
    let wd = setTimeout(() => ctrl.abort(), 20000);
    const res = await fetch(VIDEO_URL, { priority: 'low', signal: ctrl.signal });
    if (!res.ok) throw new Error('video ' + res.status);
    const total = Number(res.headers.get('Content-Length')) || VIDEO_BYTES;
    const reader = res.body.getReader();
    const chunks = [];
    let got = 0, lastRing = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      clearTimeout(wd); wd = setTimeout(() => ctrl.abort(), 20000);
      chunks.push(value); got += value.length;
      const frac = Math.min(1, got / total), now = performance.now();
      if (now - lastRing > 100 || frac === 1) { lastRing = now; ring.style.setProperty('--ld', Math.round(126 * (1 - frac))); }
    }
    clearTimeout(wd);
    ring.style.setProperty('--ld', 0);
    // junta tudo num bloco só: o vídeo lê um pedaço contínuo e busca quadros mais rápido
    const all = new Uint8Array(got);
    let off = 0;
    for (const c of chunks) { all.set(c, off); off += c.length; }
    chunks.length = 0;
    video.preload = 'auto'; // com 'none' o navegador lê o arquivo aos pedaços a cada busca e a rolagem engasga
    video.src = URL.createObjectURL(new Blob([all], { type: 'video/mp4' }));
    video.load();
    video.addEventListener('canplay', () => {
      requestSeek(heroProgress() * video.duration * 0.999);
      stage.classList.add('video-ready');
      setTimeout(() => stage.classList.add('fading'), 700);
      loadHi();
    }, { once: true });
  }
  function failVideo() {
    stage.classList.add('video-failed');
    video.style.display = 'none';
    videoHi.style.display = 'none';
    ring.style.display = 'none';
    posterLayer.style.backgroundImage = "url('assets/hero-ending.jpg')";
  }

  const GATES = [
    '(max-width: 720px)',
    '(orientation: portrait) and (max-width: 1024px)',
    '(orientation: portrait) and (pointer: coarse)',
    '(orientation: landscape) and (pointer: coarse) and (max-height: 560px)',
    '(prefers-reduced-motion: reduce)',
  ];
  let scrubOn = false;
  function enableScrub() {
    if (scrubOn) return; scrubOn = true;
    initHeroOnce();
    addEventListener('scroll', onScroll, { passive: true });
    bands.forEach((b) => { b.op = -1; b.k = -1; });
    unpinFinalStates();
    shown = target = heroProgress();
    updateCaptions(shown, true);
    onScroll();
  }
  function disableScrub() {
    if (!scrubOn) return; scrubOn = false;
    removeEventListener('scroll', onScroll);
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  }
  function applyHeroMode() { GATES.some((q) => matchMedia(q).matches) ? disableScrub() : enableScrub(); }
  const MQLS = GATES.map((q) => matchMedia(q));
  MQLS.forEach((m) => m.addEventListener('change', applyHeroMode));

  /* ---------- movimento reduzido ao vivo ---------- */
  function pinToFinalStates() {
    paintBuild(1);
    counters.forEach((c) => { c.textContent = c.dataset.count; });
    clearInterval(sysTimer); sysTimer = null; s3d.dataset.ph = 4; tiles.forEach((t) => t.classList.add('on'));
    $$('.rv, .h-split').forEach((el) => el.classList.add('in'));
    scrubVids.forEach((s) => { s.v.pause(); });
    depthEls.forEach((el) => { el.style.transform = ''; });
    trace.style.strokeDashoffset = 0;
  }
  function unpinFinalStates() {
    if (RM.matches) return;
    bLast = -1; updateBuild(); updateTrace(); updateAbout();
  }
  RM.addEventListener('change', (e) => { if (e.matches) pinToFinalStates(); applyHeroMode(); });
  if (RM.matches) pinToFinalStates();
  applyHeroMode();

  /* ---------- pausa em aba escondida ---------- */
  document.addEventListener('visibilitychange', () => document.body.classList.toggle('paused', document.hidden));
})();
