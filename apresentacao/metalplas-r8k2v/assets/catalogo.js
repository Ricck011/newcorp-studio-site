/* Metalplas: catálogo com busca. A lista e as fotos só baixam quando o catálogo chega perto da tela. */
(() => {
  const secao = document.getElementById('catalogo');
  const grade = document.getElementById('grade');
  const mais = document.getElementById('mais');
  const contagem = document.getElementById('contagem');
  const fMarca = document.getElementById('f-marca');
  const fTexto = document.getElementById('f-texto');
  const botoes = [...document.querySelectorAll('#linhas button')];
  const PAGINA = 24;
  let itens = [], filtrados = [], mostrando = 0, linha = '';

  // descrição vem do sistema em maiúsculas; aqui vira texto de leitura, sem mudar sigla, medida e marca
  const SIGLAS = new Set(['VW', 'GM', 'BMW', 'BAR', 'B.A.R.', 'TSW', 'BRW', 'KIA', 'C/', 'S/', 'S/E', 'C/E', 'PCD', 'SUV', 'ABS', 'II', 'III']);
  // cor, acabamento e palavras de ligação ficam minúsculas; marca e modelo de carro ganham maiúscula
  const MINUSCULAS = new Set(['de', 'do', 'da', 'dos', 'das', 'e', 'com', 'sem', 'para', 'centro', 'prata', 'preto', 'preta', 'cromada', 'cromado', 'grafite', 'ouro', 'velho', 'vermelho', 'vermelha', 'azul', 'branco', 'branca', 'verde', 'amarelo', 'laranja', 'fosco', 'fosca', 'brilhante', 'original', 'alta', 'baixa', 'emblema', 'logo', 'aplique', 'acompanha', 'anel', 'sust', 'furação', 'jogo', 'peças', 'unidade', 'copinho', 'ventilador']);
  const bonito = (d) => {
    let t = d.replace(/^C\.R\.?\s/, 'Calota de centro ');
    t = t.split(' ').map((w, i) => {
      const nu = w.toUpperCase();
      if (SIGLAS.has(nu.replace(/[().,]/g, '')) || /\d/.test(w)) return w.replace(/MM\b/g, 'mm');
      const lw = w.toLowerCase();
      const cap = (x) => x.charAt(0).toUpperCase() + x.slice(1);
      if (lw.includes('/') && lw.length > 3) return lw.split('/').map(cap).join('/');
      if (i > 0 && MINUSCULAS.has(lw.replace(/[().,]/g, ''))) return lw;
      return cap(lw);
    }).join(' ');
    return t.replace(/\(([a-zà-ú])/g, (m, c) => '(' + c.toUpperCase());
  };
  const semAcento = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function filtrar() {
    const q = semAcento(fTexto.value.trim());
    const m = fMarca.value;
    filtrados = itens.filter((x) => (!linha || x.l === linha) && (!m || x.m === m) && (!q || x.busca.includes(q)));
    mostrando = 0;
    grade.textContent = '';
    desenhar();
  }

  function desenhar() {
    const fim = Math.min(filtrados.length, mostrando + PAGINA);
    const frag = document.createDocumentFragment();
    for (let i = mostrando; i < fim; i++) {
      const x = filtrados[i];
      const li = document.createElement('li'); li.className = 'item';
      const img = document.createElement('img');
      img.src = 'assets/catalogo/' + x.i; img.width = 220; img.height = 220; img.loading = 'lazy'; img.decoding = 'async';
      img.alt = x.nome;
      const code = document.createElement('code'); code.textContent = x.c;
      const p = document.createElement('p'); p.textContent = x.nome;
      li.append(img, code, p);
      frag.append(li);
    }
    grade.append(frag);
    mostrando = fim;
    if (!filtrados.length) {
      const li = document.createElement('li'); li.className = 'grade-vazia';
      li.textContent = 'Nenhum item com esse filtro. Tente outra marca ou só parte do código.';
      grade.append(li);
    }
    contagem.textContent = filtrados.length ? `Mostrando ${mostrando} de ${filtrados.length} itens.` : '';
    mais.hidden = mostrando >= filtrados.length;
  }

  async function carregar() {
    try {
      const r = await fetch('assets/catalogo.json');
      itens = (await r.json()).map((x) => { const nome = bonito(x.d); return { ...x, nome, busca: semAcento(`${x.c} ${x.d} ${x.m}`) }; });
      filtrar();
    } catch (e) {
      contagem.textContent = 'O catálogo não carregou. Recarregue a página ou ligue para (11) 4448-2670.';
    }
  }

  botoes.forEach((b) => b.addEventListener('click', () => {
    linha = b.dataset.linha;
    botoes.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    filtrar();
  }));
  fMarca.addEventListener('change', filtrar);
  let espera;
  fTexto.addEventListener('input', () => { clearTimeout(espera); espera = setTimeout(filtrar, 160); });
  mais.addEventListener('click', desenhar);

  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); carregar(); } }, { rootMargin: '600px 0px' });
  io.observe(secao);
})();
