/* Metalplas. Entrada em 3D: o conjunto da roda se monta com a rolagem.
   Peças desenhadas em código (three.js), sem foto nem vídeo. */

const hero = document.getElementById('hero');
const cena = document.getElementById('cena');
if (hero && cena && getComputedStyle(hero).display !== 'none') iniciar();

// three.js só é baixado no computador, quando a entrada em 3D aparece
async function iniciar() {
  let THREE, RoomEnvironment;
  try {
    THREE = await import('three');
    ({ RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js'));
  } catch (e) { return; }
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { return; } // sem WebGL: fica o desenho em SVG
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.domElement.className = 'gl';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  cena.append(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffe2a0, 2.4); rim.position.set(-5, 3, -2); scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.15));

  /* ---------- materiais ---------- */
  const M = {
    aro: new THREE.MeshPhysicalMaterial({ color: 0xc9ced3, metalness: 1, roughness: 0.22, clearcoat: 0.6, clearcoatRoughness: 0.15, side: THREE.DoubleSide }),
    aroEscuro: new THREE.MeshStandardMaterial({ color: 0x3a3f45, metalness: 1, roughness: 0.35, side: THREE.DoubleSide }),
    pneu: new THREE.MeshStandardMaterial({ color: 0x17191b, metalness: 0, roughness: 0.92, side: THREE.DoubleSide }),
    banda: new THREE.MeshStandardMaterial({ color: 0x111214, metalness: 0, roughness: 0.95 }),
    disco: new THREE.MeshStandardMaterial({ color: 0x9a9fa5, metalness: 1, roughness: 0.42 }),
    chapeu: new THREE.MeshStandardMaterial({ color: 0x5d6268, metalness: 0.9, roughness: 0.55 }),
    pinca: new THREE.MeshPhysicalMaterial({ color: 0xc0151b, metalness: 0.2, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.1 }),
    cubo: new THREE.MeshStandardMaterial({ color: 0x6f757b, metalness: 1, roughness: 0.4 }),
    prisioneiro: new THREE.MeshStandardMaterial({ color: 0xb8bdc2, metalness: 1, roughness: 0.25 }),
    aluminio: new THREE.MeshStandardMaterial({ color: 0xdfe3e6, metalness: 1, roughness: 0.18 }),
    polimero: new THREE.MeshStandardMaterial({ color: 0x1b1d20, metalness: 0, roughness: 0.6 }),
    cromo: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.06 }),
  };

  const BOLT_R = 0.14;
  const bolts = [...Array(5)].map((_, i) => { const a = i / 5 * Math.PI * 2 + Math.PI / 2; return [Math.cos(a) * BOLT_R, Math.sin(a) * BOLT_R]; });
  const furo = (x, y, r) => { const h = new THREE.Path(); h.absarc(x, y, r, 0, Math.PI * 2, true); return h; };
  const extrude = (shape, depth, bevel = 0.006, curve = 48) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: curve });
    g.translate(0, 0, -depth / 2);
    return g;
  };
  const cilindro = (r, h, seg = 64) => { const g = new THREE.CylinderGeometry(r, r, h, seg); g.rotateX(Math.PI / 2); return g; };
  const lathe = (pts, seg = 128) => { const g = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg); g.rotateX(Math.PI / 2); return g; };

  /* ---------- peças ---------- */
  // 1. cubo de roda com prisioneiros
  const cubo = new THREE.Group();
  const corpo = new THREE.Mesh(cilindro(0.11, 0.16), M.cubo); corpo.position.z = -0.1; cubo.add(corpo);
  const flange = new THREE.Mesh(cilindro(0.2, 0.026), M.cubo); flange.position.z = -0.02; cubo.add(flange);
  const ponta = new THREE.Mesh(cilindro(0.055, 0.06), M.prisioneiro); ponta.position.z = 0.02; cubo.add(ponta);
  bolts.forEach(([x, y]) => { const s = new THREE.Mesh(cilindro(0.014, 0.12, 16), M.prisioneiro); s.position.set(x, y, 0.04); cubo.add(s); });

  // 2. disco de freio ventilado e furado + pinça
  const freio = new THREE.Group();
  const giraFreio = new THREE.Group(); freio.add(giraFreio);
  const sDisco = new THREE.Shape(); sDisco.absarc(0, 0, 0.5, 0, Math.PI * 2, false);
  sDisco.holes.push(furo(0, 0, 0.2));
  for (let i = 0; i < 30; i++) { const a = i / 30 * Math.PI * 2; const r = i % 2 ? 0.33 : 0.41; sDisco.holes.push(furo(Math.cos(a) * r, Math.sin(a) * r, 0.013)); }
  const disco = new THREE.Mesh(extrude(sDisco, 0.05, 0.004, 64), M.disco); disco.position.z = -0.16; giraFreio.add(disco);
  const sChapeu = new THREE.Shape(); sChapeu.absarc(0, 0, 0.205, 0, Math.PI * 2, false); sChapeu.holes.push(furo(0, 0, 0.06)); bolts.forEach(([x, y]) => sChapeu.holes.push(furo(x, y, 0.016)));
  const chapeu = new THREE.Mesh(extrude(sChapeu, 0.11, 0.004), M.chapeu); chapeu.position.z = -0.09; giraFreio.add(chapeu);
  const sPinca = new THREE.Shape();
  const a0 = THREE.MathUtils.degToRad(28), a1 = THREE.MathUtils.degToRad(92);
  sPinca.absarc(0, 0, 0.585, a0, a1, false); sPinca.absarc(0, 0, 0.36, a1, a0, true);
  const pinca = new THREE.Mesh(extrude(sPinca, 0.13, 0.025, 32), M.pinca); pinca.position.z = -0.16; freio.add(pinca);
  const sPonte = new THREE.Shape(); sPonte.absarc(0, 0, 0.6, a0 + 0.12, a1 - 0.12, false); sPonte.absarc(0, 0, 0.52, a1 - 0.12, a0 + 0.12, true);
  const ponte = new THREE.Mesh(extrude(sPonte, 0.17, 0.02, 24), M.pinca); ponte.position.z = -0.16; freio.add(ponte);

  // 3. espaçador de alumínio
  const sEsp = new THREE.Shape(); sEsp.absarc(0, 0, 0.205, 0, Math.PI * 2, false); sEsp.holes.push(furo(0, 0, 0.068)); bolts.forEach(([x, y]) => sEsp.holes.push(furo(x, y, 0.018)));
  const espacador = new THREE.Mesh(extrude(sEsp, 0.034, 0.004), M.aluminio);

  // 4. anel centralizador
  const sAnel = new THREE.Shape(); sAnel.absarc(0, 0, 0.066, 0, Math.PI * 2, false); sAnel.holes.push(furo(0, 0, 0.056));
  const anel = new THREE.Group();
  anel.add(new THREE.Mesh(extrude(sAnel, 0.03, 0.002), M.polimero));
  const sAba = new THREE.Shape(); sAba.absarc(0, 0, 0.069, 0, Math.PI * 2, false); sAba.holes.push(furo(0, 0, 0.06));
  const aba = new THREE.Mesh(extrude(sAba, 0.006, 0.001), M.polimero); aba.position.z = 0.016; anel.add(aba);

  // 5. roda: aro, raios, pneu com banda
  const roda = new THREE.Group();
  roda.add(new THREE.Mesh(lathe([[0.64, -0.44], [0.71, -0.45], [0.72, -0.42], [0.67, -0.39], [0.66, -0.05], [0.69, 0.04], [0.73, 0.08], [0.72, 0.1], [0.66, 0.085]]), M.aro));
  roda.add(new THREE.Mesh(lathe([[0.645, -0.43], [0.645, 0.08]], 96), M.aroEscuro));
  const sFace = new THREE.Shape(); sFace.absarc(0, 0, 0.665, 0, Math.PI * 2, false);
  sFace.holes.push(furo(0, 0, 0.07));
  bolts.forEach(([x, y]) => sFace.holes.push(furo(x, y, 0.024)));
  for (let i = 0; i < 5; i++) {
    const c = i / 5 * Math.PI * 2 + Math.PI / 2 + Math.PI / 5;
    const h = new THREE.Path();
    h.absarc(0, 0, 0.6, c + 0.36, c - 0.36, true);
    h.absarc(0, 0, 0.25, c - 0.24, c + 0.24, false);
    h.closePath();
    sFace.holes.push(h);
  }
  const face = new THREE.Mesh(extrude(sFace, 0.05, 0.014, 96), M.aro); face.position.z = 0.04; roda.add(face);
  const sMiolo = new THREE.Shape(); sMiolo.absarc(0, 0, 0.25, 0, Math.PI * 2, false); sMiolo.holes.push(furo(0, 0, 0.07)); bolts.forEach(([x, y]) => sMiolo.holes.push(furo(x, y, 0.024)));
  const miolo = new THREE.Mesh(extrude(sMiolo, 0.03, 0.01), M.aroEscuro); miolo.position.z = 0.072; roda.add(miolo);
  const perfil = [[0.7, -0.44]];
  for (let t = -95; t <= 95; t += 5) { const r = Math.cos(THREE.MathUtils.degToRad(t)); perfil.push([Math.max(0.7, 0.84 + 0.16 * r), -0.18 + 0.29 * Math.sin(THREE.MathUtils.degToRad(t))]); }
  perfil.push([0.7, 0.1]);
  roda.add(new THREE.Mesh(lathe(perfil), M.pneu));
  const N = 72;
  const blocos = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.05, 0.12), M.banda, N * 2);
  const o = new THREE.Object3D();
  for (let i = 0; i < N * 2; i++) {
    const fila = i % 2, a = (Math.floor(i / 2) + fila * 0.5) / N * Math.PI * 2;
    o.position.set(Math.cos(a) * 0.995, Math.sin(a) * 0.995, fila ? -0.27 : -0.09);
    o.rotation.set(0, 0, a);
    o.updateMatrix(); blocos.setMatrixAt(i, o.matrix);
  }
  roda.add(blocos);

  // 6. capas de parafuso cromadas
  const capas = new THREE.Group();
  bolts.forEach(([x, y]) => {
    const c = new THREE.Group();
    const hexa = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.036, 6), M.cromo); hexa.rotation.x = Math.PI / 2; c.add(hexa);
    const topo = new THREE.Mesh(new THREE.SphereGeometry(0.026, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.cromo); topo.rotation.x = Math.PI / 2; topo.position.z = 0.018; c.add(topo);
    c.position.set(x, y, 0); capas.add(c);
  });

  // 7. calota de centro com emblema
  const calota = new THREE.Group();
  calota.add(new THREE.Mesh(lathe([[0, 0.034], [0.055, 0.034], [0.075, 0.026], [0.088, 0.012], [0.092, 0], [0.07, -0.01]], 96), M.cromo));
  const tela = document.createElement('canvas'); tela.width = tela.height = 256;
  const cx = tela.getContext('2d');
  cx.fillStyle = '#121416'; cx.beginPath(); cx.arc(128, 128, 126, 0, Math.PI * 2); cx.fill();
  cx.strokeStyle = '#f2b705'; cx.lineWidth = 12; cx.beginPath(); cx.arc(128, 128, 104, 0, Math.PI * 2); cx.stroke();
  cx.strokeStyle = '#ffffff'; cx.lineWidth = 20; cx.lineJoin = 'round'; cx.lineCap = 'round';
  cx.beginPath(); cx.moveTo(84, 168); cx.lineTo(84, 92); cx.lineTo(128, 140); cx.lineTo(172, 92); cx.lineTo(172, 168); cx.stroke();
  const emb = new THREE.CanvasTexture(tela); emb.colorSpace = THREE.SRGBColorSpace; emb.anisotropy = 8;
  const emblema = new THREE.Mesh(new THREE.CircleGeometry(0.052, 64), new THREE.MeshPhysicalMaterial({ map: emb, metalness: 0.3, roughness: 0.25, clearcoat: 1 }));
  emblema.position.z = 0.0345; calota.add(emblema);

  /* ---------- montagem: posição final e posição explodida no eixo ---------- */
  const conjunto = new THREE.Group(); scene.add(conjunto);
  const gira = new THREE.Group(); conjunto.add(gira);
  const pecas = [
    { obj: cubo, z0: -0.07, z1: -2.3 },
    { obj: freio, z0: 0, z1: -1.62, fixo: true },
    { obj: espacador, z0: -0.026, z1: -1.02, vitrine: [-1.28, 0.0, 0.9], esc: 1.1 },
    { obj: anel, z0: 0.0, z1: -0.66, vitrine: [-0.86, 0.0, 0.9], esc: 2.1 },
    { obj: roda, z0: 0.0, z1: 0.0 },
    { obj: capas, z0: 0.11, z1: 0.6, vitrine: [-0.47, 0.0, 0.9], esc: 1.15 },
    { obj: calota, z0: 0.1, z1: 1.05, vitrine: [-0.04, 0.0, 0.9], esc: 1.8 },
  ];
  pecas.forEach((pc) => (pc.fixo ? conjunto : gira).add(pc.obj));
  // o disco gira com a roda; a pinça fica parada
  const discoGira = giraFreio;

  /* ---------- rolagem ---------- */
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const smooth = (p, e0, e1) => { const t = clamp((p - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
  const alvo = { e: 1, v: 0, r: 1, s: 0 }, atual = { e: 1, v: 0, r: 1, s: 0 };
  const progresso = () => { const r = hero.getBoundingClientRect(); return clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1); };
  const lerA = () => {
    const p = progresso();
    // 1: tudo separado; 2: o conjunto se fecha e as peças Metalplas ficam na frente; 3: elas entram no lugar
    alvo.e = 1 - smooth(p, 0.22, 0.46);
    alvo.v = smooth(p, 0.28, 0.44) * (1 - smooth(p, 0.64, 0.84));
    alvo.r = 1 - smooth(p, 0.2, 0.92);
    alvo.s = smooth(p, 0.8, 1) * Math.PI * 2;
  };

  const DESLOCA = 0.5; // a roda anda para a direita enquanto as peças Metalplas ficam na frente
  let azAgora = 0;
  function aplicar() {
    azAgora = THREE.MathUtils.degToRad(12 + 44 * atual.r);
    pecas.forEach((pc) => {
      const z = pc.z0 + (pc.z1 - pc.z0) * atual.e;
      if (!pc.vitrine) { pc.obj.position.z = z; return; }
      const v = atual.v;
      pc.obj.position.set((pc.vitrine[0] - DESLOCA) * v, pc.vitrine[1] * v, z + (pc.vitrine[2] - z) * v);
      pc.obj.scale.setScalar(1 + (pc.esc - 1) * v);
      pc.obj.rotation.y = azAgora * 0.9 * v;
    });
    conjunto.position.x = DESLOCA * atual.v;
    gira.rotation.z = -atual.s;
    discoGira.rotation.z = -atual.s;
    const az = azAgora;
    const el = THREE.MathUtils.degToRad(6 + 16 * atual.r);
    const dist = 4.6 + 1.9 * atual.r + 0.7 * atual.v;
    const tz = -0.62 * atual.e;
    camera.position.set(Math.sin(az) * Math.cos(el) * dist, Math.sin(el) * dist, tz + Math.cos(az) * Math.cos(el) * dist);
    camera.lookAt(0, -0.14 * atual.r, tz);
  }

  function tamanho() {
    const b = renderer.domElement.getBoundingClientRect();
    renderer.setSize(b.width, b.height, false);
    camera.aspect = b.width / Math.max(1, b.height);
    camera.updateProjectionMatrix();
    pedir();
  }

  let raf = 0;
  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  function quadro() {
    raf = 0;
    let mexeu = false;
    for (const k of ['e', 'v', 'r', 's']) {
      const d = alvo[k] - atual[k];
      if (Math.abs(d) > 0.0004) { atual[k] += RM.matches ? d : d * 0.14; mexeu = true; } else atual[k] = alvo[k];
    }
    aplicar();
    renderer.render(scene, camera);
    if (mexeu) pedir();
  }
  function pedir() { if (!raf) raf = requestAnimationFrame(quadro); }

  let visivel = true;
  new IntersectionObserver(([e]) => { visivel = e.isIntersecting; if (visivel) { lerA(); pedir(); } }).observe(hero);
  addEventListener('scroll', () => { if (!visivel) return; lerA(); pedir(); }, { passive: true });
  new ResizeObserver(tamanho).observe(cena);
  lerA();
  Object.assign(atual, alvo);
  tamanho();
  cena.classList.add('gl-on');
  // para gerar a imagem parada do celular
  window.__roda = { renderer, scene, camera, pecas, atual, aplicar };
}
