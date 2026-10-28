/* Metalplas: fases do desenvolvimento (abas) e formulário que monta a mensagem de WhatsApp. Textos do brandbook 4.0 e do institucional. */
(() => {
  const WA = '551144482670';
  const FASES = [
    { nome: 'Ideia', etapas: [
      { t: 'Conversa inicial', d: 'Você conta a aplicação, a referência ou o desafio. Entendemos a roda e a marca.' },
      { t: 'Projeto da peça', d: 'Desenho e modelo 3D com as medidas de encaixe e o acabamento desejado.' },
      { t: 'Prova em impressão 3D', d: 'Uma peça impressa para conferir forma e encaixe antes do molde.', aprov: true },
    ] },
    { nome: 'Ferramental', etapas: [
      { t: 'Projeto do molde', d: 'O molde de injeção é projetado a partir da peça aprovada.' },
      { t: 'Ferramentaria', d: 'Construção do molde.' },
      { t: 'Try-out', d: 'O teste do ferramental, com produção das primeiras peças para avaliação.' },
    ] },
    { nome: 'Acabamento', etapas: [
      { t: 'Try-out com acabamento', d: 'Primeiras peças com pintura, cromado ou emblema para aprovação final.', aprov: true },
      { t: 'Ajustes', d: 'Correções que a aprovação pedir.' },
    ] },
    { nome: 'Produção', etapas: [
      { t: 'Produção', d: 'Fabricação da peça aprovada.' },
      { t: 'Conferência e entrega', d: 'Peças conferidas e enviadas pelo caminho combinado.' },
    ] },
  ];
  let n = 0;
  FASES.forEach((f) => f.etapas.forEach((e) => { e.n = ++n; }));

  const abas = document.getElementById('fases');
  const painel = document.getElementById('etapas');
  if (abas && painel) {
    const pinta = (i) => {
      [...abas.children].forEach((b, k) => b.setAttribute('aria-selected', String(k === i)));
      document.getElementById('painel-etapas').setAttribute('aria-label', FASES[i].nome);
      painel.innerHTML = FASES[i].etapas.map((e) => `
        <li class="etapa"><span class="n">${String(e.n).padStart(2, '0')}/10</span>
          <div><h3>${e.t}${e.aprov ? ' <em class="aprov">aprovação</em>' : ''}</h3><p>${e.d}</p></div></li>`).join('');
    };
    abas.innerHTML = FASES.map((f, i) => `<button class="fase" role="tab" type="button" aria-selected="false"><small>0${i + 1}</small>${f.nome}</button>`).join('');
    [...abas.children].forEach((b, i) => b.addEventListener('click', () => pinta(i)));
    pinta(0);
  }

  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const nome = String(f.get('nome') || '').trim();
      const empresa = String(f.get('empresa') || '').trim();
      const assunto = String(f.get('assunto') || '');
      const msg = String(f.get('mensagem') || '').trim();
      const erro = document.getElementById('form-erro');
      if (!nome || !empresa) { erro.textContent = 'Preencha seu nome e a empresa.'; return; }
      erro.textContent = '';
      const texto = `Olá! Sou ${nome}, da ${empresa}. Assunto: ${assunto}.${msg ? ' ' + msg : ''}`;
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    });
  }
})();
