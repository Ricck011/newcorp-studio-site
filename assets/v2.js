/* NEW CORP · site v2: interações novas (mensagens que chegam, corte diagonal,
   demo "monte o seu site", passagem do vídeo para a demo). Vem depois de app.js. */
(() => {
  const WA = '5511988681657';
  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const RM = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- deslize: rolagem com inércia (Lenis) só no computador com mouse ----------
     o toque do celular continua nativo; com movimento reduzido, nada muda */
  let lenis = null;
  if (window.Lenis && matchMedia('(hover: hover) and (pointer: fine)').matches && !RM.matches) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.9 });
    const gira = (t) => { lenis.raf(t); requestAnimationFrame(gira); };
    requestAnimationFrame(gira);
    // links internos deslizam até o destino em vez de pular
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented) return;
      const id = a.getAttribute('href');
      const alvo = id.length > 1 && document.querySelector(id);
      if (!alvo) return;
      e.preventDefault();
      lenis.scrollTo(alvo, { offset: -72 });
      history.replaceState(null, '', id);
    });
    document.documentElement.classList.add('desliza');
  }

  /* ---------- corte diagonal: imagem entra no ângulo da lâmina ---------- */
  const cutIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    cutIO.unobserve(e.target);
  }), { rootMargin: '0px 0px -12% 0px' });
  $$('.cut').forEach((el) => (RM.matches ? el.classList.add('in') : cutIO.observe(el)));

  /* ---------- mensagens que chegam conforme a rolagem ---------- */
  $$('.chat-live').forEach((chat) => {
    const msgs = $$('.msg', chat);
    msgs.forEach((m) => {
      if (m.classList.contains('msg-out')) {
        const d = document.createElement('span');
        d.className = 'dots'; d.setAttribute('aria-hidden', 'true');
        d.innerHTML = '<i></i><i></i><i></i>';
        m.append(d);
      }
    });
    if (RM.matches) { msgs.forEach((m) => m.classList.add('in')); return; }
    // cada mensagem só chega depois da anterior, mesmo rolando rápido
    let queue = Promise.resolve();
    const show = (m) => {
      queue = queue.then(() => new Promise((ok) => {
        m.classList.add('in');
        if (m.classList.contains('msg-out')) {
          m.classList.add('typing');
          setTimeout(() => { m.classList.remove('typing'); setTimeout(ok, 260); }, 850);
        } else setTimeout(ok, 320);
      }));
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      show(e.target);
    }), { rootMargin: '0px 0px -18% 0px' });
    msgs.forEach((m) => io.observe(m));
  });

  /* ---------- demo: o site montado leva o nome e o ramo do visitante ---------- */
  const RAMOS = {
    barbearia: { nome: 'Barbearia', bg: '#D9DDD8', ink: '#161616', ink2: '#4A4F4C', acc: '#B3261E', accInk: '#FFFFFF', card: '#E7EAE5',
      img: 'exemplos/navalha/foto-hero.webp', t1: 'Corte com hora marcada.', t2: 'Horários, preços e endereço num lugar só.',
      cta: 'Chamar no WhatsApp', pill: 'Agendar', cards: ['Corte · R$ 45', 'Barba · R$ 35', 'Combo · R$ 70'],
      wa: 'Oi! Vi o site. Tem horário amanhã às 18h?' },
    loja: { nome: 'Loja', bg: '#E6E4DF', ink: '#231F20', ink2: '#5A5254', acc: '#5B2E4A', accInk: '#F1F0EC', card: '#F1F0EC',
      img: 'exemplos/atelie-lume/foto-hero.webp', t1: 'Peças que vestem a semana inteira.', t2: 'Novidades toda semana, com pedido pelo WhatsApp.',
      cta: 'Pedir pelo WhatsApp', pill: 'Catálogo', cards: ['Vestidos', 'Camisas', 'Acessórios'],
      wa: 'Oi! Vi o vestido no site. Tem no tamanho M?' },
    clinica: { nome: 'Clínica', bg: '#F5FAF7', ink: '#0F3D2E', ink2: '#3E5F53', acc: '#1A7F52', accInk: '#F5FAF7', card: '#E6F2EC',
      img: 'exemplos/clinica-movere/foto-hero.webp', t1: 'Fisioterapia perto de casa.', t2: 'Especialidades, convênios e horários da semana.',
      cta: 'Marcar pelo WhatsApp', pill: 'Consulta', cards: ['Pilates', 'Ortopedia', 'RPG'],
      wa: 'Oi! Vi o site. Vocês atendem pelo meu convênio?' },
    pintura: { nome: 'Pintura', bg: '#0E1A2B', ink: '#F2F4F7', ink2: '#B8C2D0', acc: '#3D8BFF', accInk: '#0E1A2B', card: '#16263D',
      img: 'exemplos/fonseca-pinturas/foto-hero.webp', t1: 'Parede pronta, casa limpa no fim do dia.', t2: 'Mande a foto do cômodo e receba o orçamento.',
      cta: 'Mandar foto do cômodo', pill: 'Orçamento', cards: ['Interna', 'Externa', 'Textura'],
      wa: 'Oi! Vi o site. Mandei a foto da sala, quanto fica?' },
  };
  const b3d = $('#b3d');
  const nameIn = $('#bizName');
  if (b3d && nameIn) {
    let ramo = 'barbearia';
    const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '') || 'seunegocio';
    // o mesmo texto aparece no navegador e no celular da demo
    const txt = (sel, v) => $$(sel, b3d).forEach((el) => { if (el.textContent !== v) el.textContent = v; });
    const go = $('#demoGo');
    function paint(flash) {
      const r = RAMOS[ramo];
      const name = nameIn.value.trim() || 'Seu negócio';
      const st = b3d.style;
      st.setProperty('--d-bg', r.bg); st.setProperty('--d-ink', r.ink); st.setProperty('--d-ink2', r.ink2);
      st.setProperty('--d-acc', r.acc); st.setProperty('--d-acc-ink', r.accInk); st.setProperty('--d-card', r.card);
      // endereço completo: url() dentro de variável CSS seria lido a partir da pasta do CSS
      st.setProperty('--d-img', `url("${new URL(r.img, location.href).href}")`);
      txt('.w-bar span', slug(nameIn.value.trim()) + '.com.br');
      txt('.logo em', name);
      txt('.t1 em', r.t1); txt('.t2 em', r.t2); txt('.cta em', r.cta); txt('.pill em', r.pill);
      $$('.l-cards em', b3d).forEach((el, i) => { el.textContent = r.cards[i]; });
      txt('.l-phone .cta em', r.cta);
      txt('.wa span', r.wa);
      txt('.g-txt', `${name} · ${r.nome} perto de você`);
      go.href = waLink(`Oi, Pedro! Quero um site para ${nameIn.value.trim() || 'o meu negócio'} (${r.nome.toLowerCase()}).`);
      if (flash && !RM.matches) { b3d.classList.remove('flash'); void b3d.offsetWidth; b3d.classList.add('flash'); }
    }
    $$('.chips button').forEach((b) => b.addEventListener('click', () => {
      ramo = b.dataset.ramo;
      $$('.chips button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      paint(true);
    }));
    let t;
    nameIn.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => paint(true), 140); });
    go.target = '_blank'; go.rel = 'noopener';
    // pré-carrega as 4 fotos quando a demo chega perto, para a troca de ramo não piscar
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      Object.values(RAMOS).forEach((r) => { const i = new Image(); i.src = new URL(r.img, location.href).href; });
    }, { rootMargin: '600px 0px' }).observe(b3d);
    paint(false);
  }

  /* ---------- passagem: a demo sobe por cima do fim do vídeo ---------- */
  const rise = $('.demo-rise');
  const demo = $('.demo');
  if (rise && demo) {
    const wide = matchMedia('(min-width: 981px) and (min-height: 600px)');
    let last = -1;
    const upd = () => {
      if (RM.matches || !wide.matches) { if (last !== 0) { rise.style.setProperty('--rise', 0); last = 0; } return; }
      const top = demo.getBoundingClientRect().top;
      // 1 quando a demo ainda está embaixo da tela; 0 quando o topo dela chega a 10% da altura
      const v = +clamp((top - innerHeight * 0.1) / (innerHeight * 0.9), 0, 1).toFixed(3);
      if (v !== last) { rise.style.setProperty('--rise', v); last = v; }
    };
    let q = false;
    addEventListener('scroll', () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; upd(); }); }, { passive: true });
    addEventListener('resize', upd);
    upd();
  }

  /* ---------- topo das páginas internas se dissolve ao rolar ---------- */
  const ph = $('.page-hero');
  if (ph && !RM.matches) {
    let ultimo = -1;
    const sai = () => {
      const v = +clamp(scrollY / Math.max(1, ph.offsetHeight * 0.9), 0, 1).toFixed(3);
      if (v !== ultimo) { ph.style.setProperty('--sai', v); ultimo = v; }
    };
    addEventListener('scroll', () => requestAnimationFrame(sai), { passive: true });
    sai();
  }

  /* ---------- feixe Site → WhatsApp → Planilha só corre quando está na tela ---------- */
  $$('.fluxo').forEach((f) => new IntersectionObserver(([e]) => f.classList.toggle('in', e.isIntersecting && !RM.matches)).observe(f));

  /* ---------- madrugada: o relógio anda e as notificações chegam conforme a rolagem ---------- */
  const noite = $('#noite');
  if (noite) {
    const hora = $('.tela-hora', noite);
    const dia = $('.tela-dia', noite);
    const notifs = $$('.notif', noite);
    const HORAS = ['23:13', '23:14', '23:15', '23:17', '06:58', '07:00'];
    let passo = -1;
    const pinta = (n) => {
      if (n === passo) return;
      passo = n;
      hora.textContent = HORAS[Math.min(n, HORAS.length - 1)];
      dia.textContent = n >= 5 ? 'Bom dia. Chegou isso enquanto você dormia:' : 'Você está dormindo. O seu site, não.';
      notifs.forEach((el, i) => el.classList.toggle('on', i < n));
    };
    if (RM.matches) pinta(5);
    else {
      const upd = () => {
        const r = noite.getBoundingClientRect();
        // começa quando o topo da seção chega a 70% da tela e termina perto do fim dela
        const p = clamp((innerHeight * 0.7 - r.top) / Math.max(1, r.height * 0.75), 0, 1);
        pinta(Math.round(p * 5));
      };
      addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
      upd();
    }
  }

  /* ---------- calculadora: quanto fica na mesa ---------- */
  const calc = $('#calc');
  if (calc) {
    const brl = (v) => 'R$ ' + Math.round(v).toLocaleString('pt-BR');
    const msg = $('#cMsg'), tk = $('#cTicket'), tx = $('#cTaxa');
    const res = $('#cRes'), ano = $('#cAno'), go = $('#calcGo');
    let mostrado = 0, alvo = 0, raf = null;
    const anima = () => {
      mostrado += (alvo - mostrado) * 0.18;
      if (Math.abs(alvo - mostrado) < 1) mostrado = alvo;
      res.textContent = brl(mostrado);
      raf = mostrado !== alvo ? requestAnimationFrame(anima) : null;
    };
    const conta = () => {
      $('#oMsg').textContent = msg.value;
      $('#oTicket').textContent = brl(+tk.value);
      $('#oTaxa').textContent = tx.value + '%';
      // 4,33 semanas por mês
      alvo = Math.round(+msg.value * 4.33 * (+tx.value / 100) * +tk.value);
      ano.textContent = brl(alvo * 12) + ' por ano';
      go.href = waLink(`Oi, Pedro! Fiz a conta no site: perto de ${brl(alvo)} por mês ficam sem resposta. Quero resolver isso.`);
      if (RM.matches) { mostrado = alvo; res.textContent = brl(alvo); } else if (!raf) raf = requestAnimationFrame(anima);
    };
    go.target = '_blank'; go.rel = 'noopener';
    calc.addEventListener('submit', (e) => e.preventDefault());
    [msg, tk, tx].forEach((i) => i.addEventListener('input', conta));
    conta();
  }

  /* ---------- processo: o passo no meio da tela troca a imagem presa ao lado ---------- */
  const pv2 = $('.pv2');
  if (pv2) {
    const passos = $$('.pv2-passo', pv2);
    const figs = $$('.pv2-midia figure', pv2);
    const conta = $('.pv2-conta b', pv2);
    const ativa = (i) => {
      passos.forEach((p) => p.classList.toggle('on', +p.dataset.i === i));
      figs.forEach((f) => f.classList.toggle('on', +f.dataset.i === i));
      conta.textContent = String(i + 1).padStart(2, '0');
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) ativa(+e.target.dataset.i); }), { rootMargin: '-45% 0px -45% 0px' });
    passos.forEach((p) => io.observe(p));
  }

  /* ---------- contato em 3 passos ---------- */
  const form = $('#leadForm.etapas');
  if (form) {
    const etapas = $$('.etapa', form);
    const dots = $$('.passos i', form);
    const num = $('.passos b', form);
    let at = 0;
    const vai = (n) => {
      at = n;
      etapas.forEach((e, i) => e.classList.toggle('on', i === n));
      dots.forEach((d, i) => d.classList.toggle('on', i <= n));
      num.textContent = n + 1;
      const campo = $('input, select', etapas[n]);
      if (campo) campo.focus({ preventScroll: true });
    };
    const ok = () => $$('input, select', etapas[at]).every((c) => c.reportValidity());
    $$('.prox', form).forEach((b) => b.addEventListener('click', () => { if (ok()) vai(at + 1); }));
    $$('.volta', form).forEach((b) => b.addEventListener('click', () => vai(at - 1)));
    // Enter num campo leva ao próximo passo em vez de enviar pela metade
    form.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' || e.target.tagName !== 'INPUT' || at === etapas.length - 1) return;
      e.preventDefault();
      if (ok()) vai(at + 1);
    });
  }

  /* ---------- celular da entrada: o site de um negócio troca de cara ----------
     computador: preso à rolagem da entrada (cortes a 12, 34, 56 e 78%; some a partir de 92%)
     celular: troca sozinho a cada 3,2 s enquanto está na tela; reduzir movimento: parado na barbearia */
  const CEL_ORDEM = ['barbearia', 'loja', 'clinica', 'pintura'];
  const CEL_NOMES = { barbearia: 'Barbearia do Zé', loja: 'Ateliê Lume', clinica: 'Clínica Movere', pintura: 'Fonseca Pinturas' };
  const celTela = (k, nova) => {
    const t = document.createElement('div');
    if (k === 'rascunho') {
      t.className = 'cel-tela rascunho' + (nova ? ' nova' : '');
      t.style.cssText = '--b:#0E100E;--i:#E9EBE7;--a:#262b26;--at:#E9EBE7;--f:#1c201c';
      t.innerHTML = '<span class="nome">.</span><div class="foto"></div><span class="t1">.</span><span class="t2">.</span><span class="bt">.</span>';
      return t;
    }
    const r = RAMOS[k];
    t.className = 'cel-tela' + (nova ? ' nova' : '');
    t.style.cssText = `--b:${r.bg};--i:${r.ink};--a:${r.acc};--at:${r.accInk};--f:url("${new URL(r.img, location.href).href}")`;
    t.innerHTML = '<span class="nome"></span><div class="foto"></div><span class="t1"></span><span class="t2"></span><span class="bt"></span>';
    $('.nome', t).textContent = CEL_NOMES[k];
    $('.t1', t).textContent = r.t1;
    $('.t2', t).textContent = r.t2;
    $('.bt', t).textContent = r.cta;
    return t;
  };
  const celular = (el) => {
    let atual = null;
    return (k) => {
      if (k === atual) return;
      atual = k;
      const velhas = $$('.cel-tela', el);
      if (RM.matches || !velhas.length) { velhas.forEach((v) => v.remove()); el.append(celTela(k, false)); return; }
      const nova = celTela(k, true);
      el.append(nova);
      requestAnimationFrame(() => requestAnimationFrame(() => nova.classList.add('vai')));
      setTimeout(() => { velhas.forEach((v) => { if (v !== nova) v.remove(); }); nova.classList.remove('nova', 'vai'); }, 700);
    };
  };
  const celPC = $('#celEntrada');
  const heroEl = $('#hero');
  if (celPC && heroEl) {
    const mostra = celular(celPC);
    const CORTES = [0, 0.86, 0.9, 0.94, 0.97]; // o celular entra no fim da entrada e leva para a demo
    const upd = () => {
      if (getComputedStyle(heroEl).display === 'none') return;
      if (RM.matches) { mostra('barbearia'); return; }
      const r = heroEl.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1);
      celPC.classList.toggle('fora', p < 0.82 || p >= 0.995);
      let i = 0;
      CORTES.forEach((c, k) => { if (p >= c) i = k; });
      mostra(i === 0 ? 'rascunho' : CEL_ORDEM[i - 1]);
    };
    addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    addEventListener('resize', upd);
    upd();
  }
  const celM = $('#celEntradaM');
  if (celM) {
    const mostra = celular(celM);
    let k = 0, timer = null;
    mostra(CEL_ORDEM[0]);
    new IntersectionObserver(([e]) => {
      clearInterval(timer); timer = null;
      if (!e.isIntersecting || RM.matches) return;
      timer = setInterval(() => { k = (k + 1) % CEL_ORDEM.length; mostra(CEL_ORDEM[k]); }, 3200);
    }).observe(celM);
  }

  /* ---------- lâmina de luz: atravessa a tela uma vez quando uma seção nova chega (só rolando para baixo) ---------- */
  if (!RM.matches) {
    const lam = document.createElement('div');
    lam.className = 'lamina';
    lam.setAttribute('aria-hidden', 'true');
    lam.innerHTML = '<i></i>';
    document.body.append(lam);
    const faixa = $('i', lam);
    let ultimaVez = 0, ultimoY = scrollY;
    const passa = (sec) => {
      const agora = performance.now();
      if (agora - ultimaVez < 1400) return false;
      ultimaVez = agora;
      lam.classList.toggle('clara', sec.classList.contains('light'));
      lam.classList.remove('passa'); void faixa.offsetWidth; lam.classList.add('passa');
      return true;
    };
    const vistas = new WeakSet();
    const io = new IntersectionObserver((es) => {
      const desce = scrollY >= ultimoY; ultimoY = scrollY;
      es.forEach((e) => {
        if (!e.isIntersecting || !desce || vistas.has(e.target)) return;
        // rolando rápido, duas seções chegam juntas: a segunda espera e passa quando a primeira terminar
        const tenta = () => {
          const r = e.target.getBoundingClientRect();
          if (r.top > innerHeight * 0.55 || r.bottom < innerHeight * 0.45) return; // já saiu do meio da tela
          if (passa(e.target)) vistas.add(e.target); else setTimeout(tenta, 450);
        };
        tenta();
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    // só nas seções mais importantes de cada página (marcadas com data-lamina no HTML)
    $$('main > section[data-lamina]').forEach((s) => io.observe(s));
    faixa.addEventListener('animationend', () => lam.classList.remove('passa'));
  }


  /* ---------- cenas: cada seção tem a sua cena do Flow atrás do conteúdo ----------
     computador com mouse: a cena anda com a rolagem da seção e se inclina um pouco com o mouse;
     celular: a versão vertical toca em loop só quando aparece; movimento reduzido: só o pôster */
  // pôster só quando a cena chega perto: vários pôsteres grandes de uma vez atrasam a primeira tela
  const posterIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.poster = e.target.dataset.poster; posterIO.unobserve(e.target);
  }), { rootMargin: '600px 0px' });
  $$('.cena-v[data-poster]').forEach((v) => posterIO.observe(v));
  const cenas = $$('.cena-v').map((v) => ({ v, sec: v.closest('section'), on: false, loaded: false, shown: 0, busy: false, next: null }));
  if (cenas.length && !RM.matches) {
    const FINO = matchMedia('(hover: hover) and (pointer: fine)');
    const pc = () => FINO.matches && innerWidth > 720;
    const carrega = (c) => {
      if (c.loaded) return;
      const url = pc() ? c.v.dataset.pc : c.v.dataset.m;
      if (!url) return;
      c.loaded = true;
      // topo das páginas internas: a cena toca uma vez ao abrir (não há rolagem antes dela para guiar o vídeo)
      c.abre = pc() && c.sec.classList.contains('page-hero');
      c.scrub = pc() && !c.abre;
      if (c.abre) {
        c.v.preload = 'auto'; c.v.src = url;
        c.v.addEventListener('loadeddata', () => { c.v.classList.add('pronta'); c.v.play().catch(() => {}); }, { once: true });
        c.v.load();
        return;
      }
      c.v.addEventListener('seeked', () => { c.busy = false; if (c.next !== null) { const t = c.next; c.next = null; busca(c, t); } });
      if (c.scrub && c.v.dataset.hi && innerWidth * (devicePixelRatio || 1) > 1800) {
        // tela grande: versão nítida por cima, aparece quando a rolagem para
        c.hi = document.createElement('video');
        c.hi.className = 'cena-v cena-hi';
        c.hi.muted = true; c.hi.playsInline = true; c.hi.preload = 'auto'; c.hi.setAttribute('aria-hidden', 'true'); c.hi.tabIndex = -1;
        c.hi.src = c.v.dataset.hi;
        c.v.after(c.hi);
      }
      if (c.scrub) {
        // arquivo inteiro na memória: buscar quadro a quadro pela rede engasga a rolagem
        fetch(url).then((r) => r.blob()).then((b) => { c.v.src = URL.createObjectURL(b); c.v.load(); c.v.addEventListener('loadeddata', () => { c.v.classList.add('pronta'); chuta(); }, { once: true }); }).catch(() => {});
      } else if (document.readyState !== 'complete') {
        // celular: o vídeo só começa a baixar depois que a página carregou, para não atrasar a primeira tela
        c.loaded = false;
        addEventListener('load', () => carrega(c), { once: true });
      } else {
        c.v.loop = true; c.v.preload = 'auto'; c.v.src = url; c.v.load();
        c.v.addEventListener('loadeddata', () => c.v.classList.add('pronta'), { once: true });
        if (c.on) c.v.play().catch(() => {});
      }
    };
    const busca = (c, t) => {
      if (!c.v.duration) return;
      if (c.busy) { c.next = t; return; }
      c.busy = true; c.v.currentTime = t;
    };
    const perto = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      carrega(cenas.find((c) => c.v === e.target)); perto.unobserve(e.target);
    }), { rootMargin: '1200px 0px' });
    const vista = new IntersectionObserver((es) => es.forEach((e) => {
      const c = cenas.find((x) => x.v === e.target);
      c.on = e.isIntersecting;
      if (c.loaded && !c.scrub && !c.abre) { if (c.on) c.v.play().catch(() => {}); else c.v.pause(); }
      if (c.on) chuta();
    }));
    cenas.forEach((c) => { perto.observe(c.v); vista.observe(c.v); });
    let raf = null, t0 = 0;
    const passo = (now) => {
      const dt = Math.min(100, now - (t0 || now)); t0 = now;
      let anda = false;
      cenas.forEach((c) => {
        if (!c.on || !c.scrub || !c.v.duration) return;
        const r = c.sec.getBoundingClientRect();
        const p = clamp((innerHeight - r.top) / (r.height + innerHeight), 0, 1);
        const alvo = p * c.v.duration * 0.999;
        c.shown += (alvo - c.shown) * (1 - Math.pow(0.8, dt / 16.667));
        if (Math.abs(alvo - c.shown) > 0.004) anda = true; else c.shown = alvo;
        if (Math.abs(c.v.currentTime - c.shown) > 0.02) busca(c, c.shown);
      });
      cenas.forEach((c) => {
        if (!c.hi) return;
        if (anda) { clearTimeout(c.hiT); c.hi.classList.remove('on'); return; }
        clearTimeout(c.hiT);
        c.hiT = setTimeout(() => {
          if (!c.hi.duration) return;
          c.hi.addEventListener('seeked', () => c.hi.classList.add('on'), { once: true });
          c.hi.currentTime = c.shown;
        }, 120);
      });
      raf = anda ? requestAnimationFrame(passo) : null;
      if (!anda) t0 = 0;
    };
    const chuta = () => { if (!raf) raf = requestAnimationFrame(passo); };
    addEventListener('scroll', chuta, { passive: true });
    // inclinação leve com o mouse: a cena acompanha o cursor até 12 px
    let mq = null;
    addEventListener('pointermove', (e) => {
      if (!FINO.matches || mq) return;
      mq = requestAnimationFrame(() => {
        mq = null;
        const x = ((e.clientX / innerWidth) - 0.5) * -24, y = ((e.clientY / innerHeight) - 0.5) * -24;
        cenas.forEach((c) => { if (c.on) { const pin = c.v.parentElement; pin.style.setProperty('--mx', x.toFixed(1) + 'px'); pin.style.setProperty('--my', y.toFixed(1) + 'px'); } });
      });
    }, { passive: true });
  }

  /* ---------- abertura só na primeira visita da sessão ---------- */
  try { sessionStorage.setItem('nc-visto', '1'); } catch (e) { /* sem armazenamento: a abertura volta, sem problema */ }
})();
