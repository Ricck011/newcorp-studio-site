/* Metalplas. Primeira tela: o conjunto da roda abre em vista explodida, como num catálogo técnico.
   Uma animação só, na chegada. Depois a pessoa gira arrastando e escolhe a peça na lista. */
import * as THREE from './vendor/three.module.min.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import { montarPecas } from './pecas.js';

const palco = document.getElementById('palco');
const RM = matchMedia('(prefers-reduced-motion: reduce)');

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (e) { renderer = null; }

if (renderer) iniciar();

function iniciar() {
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  const tela = renderer.domElement;
  tela.className = 'palco-gl';
  tela.setAttribute('aria-hidden', 'true');
  palco.append(tela);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2, 5, 4); scene.add(key);
  const fill = new THREE.DirectionalLight(0xdfe7ff, 0.6); fill.position.set(-4, 1, 2); scene.add(fill);

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 60);
  const { conjunto, gira, giraFreio, pecas, emblema } = montarPecas(THREE);
  const marca = new Image();
  marca.onload = () => {
    const w = 170, h = w * marca.height / marca.width;
    emblema.cx.drawImage(marca, 128 - w / 2, 128 - h / 2 - 4, w, h);
    emblema.textura.needsUpdate = true;
    pedir();
  };
  marca.src = new URL('./emblema-mp.webp', import.meta.url).href;
  scene.add(conjunto);

  // sombra de contato no chão, para a peça não flutuar no vazio
  const sc = document.createElement('canvas'); sc.width = sc.height = 128;
  const g = sc.getContext('2d');
  const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  rg.addColorStop(0, 'rgba(20,28,36,.26)'); rg.addColorStop(1, 'rgba(20,28,36,0)');
  g.fillStyle = rg; g.fillRect(0, 0, 128, 128);
  const sombra = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  sombra.rotation.x = -Math.PI / 2; sombra.position.y = -1.04;
  scene.add(sombra);

  // vista explodida de catálogo: mais junta que a do site anterior, para caber numa tela
  const EXPLODE = { cubo: -2.45, freio: -1.95, espacador: -1.38, anel: -0.95, roda: 0, capas: 0.58, calota: 1.02 };
  // as peças Metalplas crescem um pouco na vista explodida, como o detalhe ampliado de um catálogo
  const LUPA = { espacador: 1.45, anel: 2.2, capas: 1.45, calota: 2.0 };
  pecas.forEach((p) => { p.z1 = EXPLODE[p.id]; });

  const MP = ['calota', 'anel', 'capas', 'espacador'];
  const cotas = Object.fromEntries(MP.map((id) => [id, palco.querySelector(`[data-cota="${id}"]`)]));

  const estado = { e: 0, az: 0, el: 4, dist: 5.6, arr: 0, sel: null, puxa: {} };
  const alvo = { e: 0.0, az: 0, el: 4, dist: 5.6, arr: 0, puxa: {} };
  MP.forEach((id) => { estado.puxa[id] = 0; alvo.puxa[id] = 0; });

  const v = new THREE.Vector3();
  function aplicar() {
    const e = estado.e;
    pecas.forEach((p) => {
      const pux = estado.puxa[p.id] || 0;
      p.obj.position.z = p.z0 + (p.z1 - p.z0) * e + (p.z1 >= 0 ? 0.22 : -0.22) * pux * e + (p.z1 === 0 ? 0 : 0);
      p.obj.position.y = 0.16 * pux;
      p.obj.scale.setScalar((1 + ((LUPA[p.id] || 1) - 1) * e) * (1 + 0.12 * pux));
      // na vista explodida as peças Metalplas viram a face para quem olha
      if (LUPA[p.id]) p.obj.rotation.y = THREE.MathUtils.degToRad(estado.az + estado.arr) * 0.85 * e;
    });
    gira.rotation.z = 0; giraFreio.rotation.z = 0;
    const az = THREE.MathUtils.degToRad(estado.az + estado.arr);
    const el = THREE.MathUtils.degToRad(estado.el);
    const foco = -0.7 * e;
    camera.position.set(Math.sin(az) * Math.cos(el) * estado.dist, Math.sin(el) * estado.dist, foco + Math.cos(az) * Math.cos(el) * estado.dist);
    camera.lookAt(0, -0.05, foco);
    sombra.position.z = foco;
    sombra.scale.set(1.7, 1.5 + 2.2 * e, 1);
  }

  // etiquetas presas às peças Metalplas
  const caixa = { w: 1, h: 1 };
  function etiquetas() {
    MP.forEach((id) => {
      const el = cotas[id]; if (!el) return;
      const p = pecas.find((x) => x.id === id);
      p.obj.getWorldPosition(v);
      v.y += p.raio * p.obj.scale.x;
      v.project(camera);
      const x = (v.x * 0.5 + 0.5) * caixa.w, y = (-v.y * 0.5 + 0.5) * caixa.h;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      el.style.opacity = el.classList.contains('on') && estado.e > 0.6 ? 1 : 0;
    });
  }

  function tamanho() {
    const b = palco.getBoundingClientRect();
    caixa.w = b.width; caixa.h = b.height;
    renderer.setSize(b.width, b.height, false);
    camera.aspect = b.width / Math.max(1, b.height);
    // a cena anda um pouco para a direita, para a calota não encostar no texto
    camera.setViewOffset(b.width, b.height, -b.width * 0.07, 0, b.width, b.height);
    camera.updateProjectionMatrix();
    pedir();
  }

  let raf = 0;
  function quadro() {
    raf = 0;
    let mexeu = false;
    const passo = (k, o = estado, a = alvo, f = 0.12) => {
      const d = a[k] - o[k];
      if (Math.abs(d) > 0.0005) { o[k] += RM.matches ? d : d * f; mexeu = true; } else o[k] = a[k];
    };
    ['e', 'az', 'el', 'dist'].forEach((k) => passo(k, estado, alvo, 0.06));
    passo('arr', estado, alvo, 0.18);
    MP.forEach((id) => passo(id, estado.puxa, alvo.puxa, 0.14));
    aplicar();
    renderer.render(scene, camera);
    etiquetas();
    if (mexeu) pedir();
  }
  function pedir() { if (!raf) raf = requestAnimationFrame(quadro); }

  // chegada: a roda montada de frente abre em vista explodida
  function abrir() {
    Object.assign(alvo, { e: 1, az: 64, el: 15, dist: 9.0 });
    palco.classList.add('abriu');
    pedir();
  }

  // arrastar para girar
  let arrastando = false, x0 = 0, base = 0;
  tela.addEventListener('pointerdown', (ev) => { arrastando = true; x0 = ev.clientX; base = alvo.arr; tela.setPointerCapture(ev.pointerId); palco.classList.add('arrastou'); });
  tela.addEventListener('pointermove', (ev) => {
    if (!arrastando) return;
    alvo.arr = Math.max(-40, Math.min(40, base + (ev.clientX - x0) * 0.25));
    pedir();
  });
  const soltar = () => { arrastando = false; };
  tela.addEventListener('pointerup', soltar);
  tela.addEventListener('pointercancel', soltar);

  // escolha na lista de produtos
  addEventListener('metalplas:peca', (ev) => {
    const id = ev.detail;
    MP.forEach((k) => { alvo.puxa[k] = k === id ? 1 : 0; });
    MP.forEach((k) => cotas[k] && cotas[k].classList.toggle('on', k === id));
    pedir();
  });

  new ResizeObserver(tamanho).observe(palco);
  tamanho();
  aplicar(); renderer.render(scene, camera);
  palco.classList.add('gl-pronto');
  if (RM.matches) { Object.assign(estado, { e: 1, az: 64, el: 15, dist: 9.0 }); abrir(); }
  else setTimeout(abrir, 350);

  // gancho para gerar as imagens paradas (celular e imagem de compartilhamento)
  window.__abertura = { renderer, scene, camera, estado, aplicar, tamanho };
}
