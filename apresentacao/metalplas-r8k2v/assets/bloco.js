/* Metalplas, prompt mestre 07: a roda nova (GLB v2) num bloco que serpenteia pelo site e a linha do tempo com rolagem lateral.
   O bloco é fixo na tela; a cada quadro o JS lê onde estão os "pontos de pouso" ([data-pouso]) e o move de um para o outro
   em S (x suave, y linear) quando a página passa de uma seção para a próxima. A roda abre ao longo da linha do tempo e se fecha no catálogo. */
import './roda-bloco.js';

const { montaCena, THREE, cfg } = window.MPRoda;
cfg.base = new URL('./', import.meta.url).href;

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lim = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const suave = (t) => { t = lim(t); return t * t * (3 - 2 * t); };
const faixa = (p, a, b) => lim((p - a) / (b - a));

/* ---------- peças (mesmos textos e ordem da roda do site React) ---------- */
const PECAS = [
  { id: 'calota', zoom: 0.62, nome: 'Calota de centro', texto: 'Fecha o centro da roda e leva a marca. É a nossa linha principal, com mais de 270 modelos no catálogo.', nossa: true },
  { id: 'capas', zoom: 0.62, nome: 'Capa de parafuso', texto: 'Cobre as porcas, protege da sujeira e completa o acabamento.', nossa: true },
  { id: 'porcas', zoom: 0.66, nome: 'Porcas', texto: 'Prendem a roda no cubo.' },
  { id: 'roda', zoom: 1, nome: 'Roda e pneu', texto: 'Roda esportiva de liga leve com pneu de perfil baixo.' },
  { id: 'anel', zoom: 0.62, nome: 'Anel centralizador', texto: 'Ajusta o furo da roda ao cubo do carro para a roda ficar centrada e sem vibração.', nossa: true },
  { id: 'espacador', zoom: 0.66, nome: 'Espaçador de roda', texto: 'Afasta a roda do cubo para ajustar a posição dela no carro.', nossa: true },
  { id: 'disco', zoom: 0.8, nome: 'Disco de freio e pinça', texto: 'O disco gira com a roda; a pinça aperta o disco para frear.' },
  { id: 'cubo', zoom: 0.75, nome: 'Cubo de roda', texto: 'Fica preso ao carro; é nele que a roda é parafusada.' },
];
const GIRO = [0.14, 0.3], EXPLODE_DE = 0.28, PASSO = 0.068, DURA = 0.13;
const Q_HERO = 0.15, Q_TL0 = 0.2, Q_TL1 = 0.9, Q_FIM = 0.12;

/* ---------- DOM do bloco ---------- */
const bloco = document.createElement('aside');
bloco.className = 'rodabloco';
bloco.setAttribute('aria-label', 'Roda em 3D, peça por peça');
bloco.innerHTML = `
  <div class="rb-quadro">
    <img class="rb-foto" src="${cfg.base}roda-foto-nova.webp" alt="Roda esportiva de malha com lábio cromado e calota com o emblema mp" width="928" height="1152">
    <canvas class="rb-tela" width="520" height="520" aria-hidden="true"></canvas>
    <span class="rb-rotulo" aria-hidden="true"></span>
  </div>
  <div class="rb-legenda" aria-live="off">
    <div class="rb-regua" aria-hidden="true">${PECAS.map((p) => `<i class="${p.nossa ? 'nossa' : ''}"></i>`).join('')}</div>
    <p class="rb-nome"></p>
    <p class="rb-texto"></p>
  </div>`;
document.body.append(bloco);
const tela = bloco.querySelector('.rb-tela');
const foto = bloco.querySelector('.rb-foto');
const rotulo = bloco.querySelector('.rb-rotulo');
const regua = [...bloco.querySelectorAll('.rb-regua i')];
const nomeEl = bloco.querySelector('.rb-nome');
const textoEl = bloco.querySelector('.rb-texto');

/* ---------- pontos de pouso e seções ---------- */
const pousos = [...document.querySelectorAll('[data-pouso]')];
const secAbertura = document.querySelector('.abertura');
const secTraj = document.getElementById('trajetoria');

/* ---------- cena 3D ---------- */
let cena = null;
try {
  cena = montaCena(tela, matchMedia('(max-width: 899px)').matches);
} catch (e) {
  cena = null; // sem WebGL: fica só a foto
}

let alvoQ = 0, atualQ = 0, sujo = true, forcada = null, forcadaTimer = 0, intro = RM ? 1 : 0, introT0 = 0;
const v3 = cena ? new THREE.Vector3() : null;
let quadros = null;

if (cena) {
  cena.ajusta(520, 520);
  const claro = () => true; // o protótipo estático é claro
  cena.tema(claro());
  cena.pronto.then(() => {
    quadros = [
      { t: EXPLODE_DE, z: 0.9, zoom: 1 },
      ...PECAS.map((p, i) => ({ t: EXPLODE_DE + i * PASSO + DURA * 0.75, z: cena.pecas[i].dz + cena.pecas[i].ancora.z, zoom: p.zoom })),
      { t: 0.9, z: -0.3, zoom: 1 },
    ];
    bloco.classList.add('pronto');
    introT0 = performance.now();
    sujo = true;
  }).catch(() => { cena = null; foto.style.opacity = 1; bloco.classList.add('pronto'); });
  cena.envPronto.then(() => { sujo = true; });
} else {
  bloco.classList.add('pronto');
}

const foco = (q) => {
  if (q <= quadros[0].t) return quadros[0];
  for (let i = 1; i < quadros.length; i++) {
    const a = quadros[i - 1], b = quadros[i];
    if (q <= b.t) { const e = suave((q - a.t) / (b.t - a.t)); return { z: mix(a.z, b.z, e), zoom: mix(a.zoom, b.zoom, e) }; }
  }
  return quadros[quadros.length - 1];
};

function pecaAtiva(q) {
  let a = -1;
  PECAS.forEach((_, i) => { if (q >= EXPLODE_DE + i * PASSO + DURA * 0.4) a = i; });
  return a;
}

let fase = 'abre'; // texto da legenda quando nenhuma peça está em foco
function legenda(ativa) {
  const i = forcada !== null ? PECAS.findIndex((p) => p.id === forcada) : ativa;
  regua.forEach((el, k) => {
    el.classList.toggle('ativa', k === i);
    el.classList.toggle('vista', ativa > 0 && k < ativa && forcada === null);
  });
  if (i >= 0) {
    const p = PECAS[i];
    nomeEl.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span> ${p.nome}${p.nossa ? ' <em>Trabalhamos</em>' : ''}`;
    textoEl.textContent = p.texto;
  } else if (fase === 'fim') {
    nomeEl.textContent = 'Roda montada';
    textoEl.textContent = 'Todas as peças no lugar, prontas para receber a sua marca.';
  } else {
    nomeEl.textContent = 'Roda esportiva em 3D';
    textoEl.textContent = 'Role a página: a roda se abre e mostra cada peça. As que a Metalplas fabrica ganham destaque.';
  }
}

function desenha(q) {
  if (!cena || !quadros) return;
  const explode = PECAS.map((_, i) => faixa(q, EXPLODE_DE + i * PASSO, EXPLODE_DE + i * PASSO + DURA));
  const f = foco(q);
  cena.pose(faixa(q, GIRO[0], GIRO[1]), explode, faixa(q, GIRO[0], EXPLODE_DE + 0.1), f.z, f.zoom);
  const ativa = pecaAtiva(q);
  const idx = forcada !== null ? PECAS.findIndex((p) => p.id === forcada) : ativa;
  cena.destaca(idx, q >= EXPLODE_DE || forcada !== null);
  cena.desenha();
  // rótulo flutuante na peça em foco
  if (idx >= 0 && (explode[idx] > 0.6 || forcada !== null)) {
    const s = cena.projeta(v3, cena.pecas[idx], 520, 520);
    rotulo.textContent = PECAS[idx].nome;
    rotulo.style.transform = `translate(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px)`;
    rotulo.style.opacity = '1';
  } else {
    rotulo.style.opacity = '0';
  }
  foto.style.opacity = String(1 - faixa(q, 0.04, 0.12));
  legenda(ativa);
}

/* ---------- movimento do bloco (S entre os pontos de pouso) ---------- */
const BW = 520, BH = 640;
function lerPouso(el) {
  const r = el.getBoundingClientRect();
  const visivel = r.width > 24 && r.height > 24;
  return { cx: r.left + r.width / 2 + scrollX, cy: r.top + r.height / 2 + scrollY, s: visivel ? Math.min(r.width / BW, r.height / BH, 0.92) : 0, on: visivel ? 1 : 0 };
}

function quadro(agora) {
  requestAnimationFrame(quadro);
  if (document.hidden) return;
  const H = innerHeight;
  const sy = scrollY;
  const pts = pousos.map(lerPouso);
  const s = sy + H / 2;
  let pos, q;
  if (RM || pts.length === 0) {
    pos = pts[0] || { cx: BW / 2, cy: BH / 2, s: 1, on: 1 };
    q = Q_HERO;
  } else {
    const W = 0.38 * H;
    const b1 = secAbertura.getBoundingClientRect().bottom + sy;
    const b2 = secTraj ? secTraj.getBoundingClientRect().bottom + sy : b1 + 4 * H;
    const seg = (a, b, B) => {
      const t = lim((s - (B - W)) / (2 * W));
      const e = suave(t);
      const dir = Math.sign(b.cx - a.cx) || 1;
      return {
        cx: mix(a.cx, b.cx, e) + Math.sin(t * Math.PI * 2) * 0.05 * innerWidth * dir * -1, // x suave + ondulação: desenha o S
        cy: mix(a.cy, b.cy, t),
        s: mix(a.s, b.s, e) * (1 - 0.42 * Math.sin(t * Math.PI)), // encolhe no meio da travessia: passa como uma cobra pelo vão, cobrindo pouco
        on: mix(a.on, b.on, e),
        t,
      };
    };
    const [a0, a1, a2] = [pts[0], pts[1] || pts[0], pts[2] || pts[1] || pts[0]];
    if (s < b1 - W) { pos = a0; q = Q_HERO; fase = 'abre'; }
    else if (s < b1 + W) { pos = seg(a0, a1, b1); q = mix(Q_HERO, Q_TL0, suave((s - (b1 - W)) / (2 * W))); fase = 'abre'; }
    else if (s < b2 - W) { pos = a1; q = mix(Q_TL0, Q_TL1, (s - (b1 + W)) / ((b2 - W) - (b1 + W))); fase = 'abre'; }
    else if (s < b2 + W) { pos = seg(a1, a2, b2); q = mix(Q_TL1, Q_FIM, suave((s - (b2 - W)) / (2 * W))); fase = 'fecha'; }
    else { pos = a2; q = Q_FIM; fase = 'fim'; }
  }
  // entrada: o PNG vira 3D logo que o modelo chega
  if (!RM && cena && introT0) intro = suave((agora - introT0) / 1600);
  alvoQ = q * intro;
  if (Math.abs(alvoQ - atualQ) > 0.0004) { atualQ += (alvoQ - atualQ) * 0.16; sujo = true; } else if (atualQ !== alvoQ) { atualQ = alvoQ; sujo = true; }

  const x = pos.cx - sy * 0 - scrollX - BW / 2;
  const y = pos.cy - sy - BH / 2;
  const escala = Math.max(pos.s, 0.001);
  const giro = pos.t !== undefined ? Math.sin(pos.t * Math.PI) * 3 * (Math.sign(pts[1] ? pts[1].cx - pts[0].cx : 1)) : 0;
  bloco.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${giro.toFixed(2)}deg) scale(${escala.toFixed(3)})`;
  bloco.classList.toggle('oculto', pos.on < 0.5);
  bloco.classList.toggle('sem-legenda', escala < 0.55);
  if (sujo) { sujo = false; desenha(atualQ); }
}
requestAnimationFrame(quadro);
addEventListener('resize', () => { sujo = true; });

/* peças da lista da primeira tela: clicar ou passar o mouse destaca a peça no bloco */
addEventListener('metalplas:peca', (e) => {
  clearTimeout(forcadaTimer);
  forcada = e.detail || null;
  sujo = true;
  if (forcada) forcadaTimer = setTimeout(() => { forcada = null; sujo = true; }, 4000);
});

/* ---------- linha do tempo (rolagem lateral) ---------- */
if (secTraj && !RM) {
  const trilho = secTraj.querySelector('.traj-trilho');
  const eixo = secTraj.querySelector('.traj-eixo i');
  const caixa = secTraj.querySelector('.traj-bloco');
  const marcos = [...secTraj.querySelectorAll('.marco')];
  const atualiza = () => {
    const r = secTraj.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = lim(-r.top / total);
    const max = Math.max(0, trilho.scrollWidth - caixa.clientWidth);
    trilho.style.transform = `translateX(${(-p * max).toFixed(1)}px)`;
    eixo.style.transform = `scaleX(${p.toFixed(4)})`;
    const cr = caixa.getBoundingClientRect();
    let ativo = 0;
    marcos.forEach((m, i) => { if (m.getBoundingClientRect().left < cr.left + cr.width * 0.5) ativo = i; });
    marcos.forEach((m, i) => { m.classList.toggle('ativo', i === ativo); m.classList.toggle('vista', i < ativo); });
  };
  addEventListener('scroll', atualiza, { passive: true });
  addEventListener('resize', atualiza);
  atualiza();
}
