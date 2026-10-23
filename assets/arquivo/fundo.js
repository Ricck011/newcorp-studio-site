/* NEW CORP · fundo vivo (WebGL puro, sem biblioteca).
   Curvas de nível em aço que correm com a rolagem, dobram perto do mouse e acendem em limão;
   uma lâmina de luz no ângulo do Ápice varre a página conforme se rola. Nas seções claras
   (.light) o mesmo campo vira papel, pixel a pixel, sem corte seco.
   Sem WebGL ou com "reduzir movimento": fica o fundo liso (ou um quadro parado). */
(() => {
  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  const cv = document.createElement('canvas');
  cv.className = 'fundo';
  cv.setAttribute('aria-hidden', 'true');
  const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
  if (!gl) return;
  document.body.prepend(cv);
  document.documentElement.classList.add('fundo-on');

  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FS = `precision mediump float;
uniform vec2 uRes;uniform float uT,uScroll,uVel,uDens,uLime;uniform vec3 uMouse;uniform vec4 uLight;
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*vn(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
float faixa(float y,float t,float b){return smoothstep(t-60.,t+60.,y)*(1.-smoothstep(b-60.,b+60.,y));}
void main(){
  vec2 fc=gl_FragCoord.xy;
  float yTop=uRes.y-fc.y;                       /* y medido do topo da tela, como o CSS */
  vec2 p=fc/uRes.y;
  vec2 q=p*1.6+vec2(0.,uScroll*.00045)+vec2(uT*.012,uT*.008);
  float h=fbm(q);
  /* o mouse levanta o terreno ao redor dele */
  vec2 m=uMouse.xy/uRes.y;float dm=length(p-m);
  h+=.22*exp(-dm*dm*14.)*uMouse.z;
  /* rolar rápido torce as linhas */
  h+=uVel*.0009*sin(p.y*9.+uT*.6);
  float n=h*uDens;
  float d=abs(fract(n)-.5);
  float w=.032+.02*uMouse.z*exp(-dm*dm*10.);
  float linha=1.-smoothstep(w*.6,w,d);
  /* lâmina de luz no ângulo do Ápice que anda com a rolagem */
  float s=dot(p,vec2(.866,.5))-uScroll*.00028;
  float lam=exp(-pow(fract(s*.35)-.5,2.)*90.);
  float perto=exp(-dm*dm*12.)*uMouse.z;
  float acende=clamp(lam*.55*uLime+perto*.9,0.,1.);
  /* claro ou escuro, pixel a pixel, conforme as seções claras na tela */
  float cl=max(faixa(yTop,uLight.x,uLight.y),faixa(yTop,uLight.z,uLight.w));
  vec3 bgE=vec3(.067,.075,.067),bgC=vec3(.925,.929,.910);
  vec3 lnE=vec3(.54,.565,.59),lnC=vec3(.165,.176,.192);
  vec3 limE=vec3(.776,1.,.239),limC=vec3(.498,.722,0.);
  vec3 bg=mix(bgE,bgC,cl),ln=mix(lnE,lnC,cl),li=mix(limE,limC,cl);
  float aL=mix(.10,.075,cl);
  vec3 cor=mix(ln,li,acende);
  vec3 col=mix(bg,cor,linha*(aL+acende*.55));
  /* brilho suave em volta do mouse e vinheta */
  col+=li*perto*.035*(1.-cl);
  vec2 uv=fc/uRes;col*=1.-.18*(1.-cl)*pow(length(uv-.5)*1.25,2.);
  gl_FragColor=vec4(col,1.);
}`;
  const sh = (t, src) => { const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); document.documentElement.classList.remove('fundo-on'); return; }
  gl.useProgram(pr);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = {};
  ['uRes', 'uT', 'uScroll', 'uVel', 'uDens', 'uLime', 'uMouse', 'uLight'].forEach((k) => { U[k] = gl.getUniformLocation(pr, k); });

  // resolução reduzida: é fundo, não precisa de nitidez de texto; poupa a placa de vídeo
  const ESCALA = matchMedia('(pointer: coarse)').matches ? 0.42 : 0.55;
  let W = 0, H = 0;
  function tamanho() {
    W = Math.max(2, Math.round(innerWidth * ESCALA));
    H = Math.max(2, Math.round(innerHeight * ESCALA));
    cv.width = W; cv.height = H;
    gl.viewport(0, 0, W, H);
  }
  tamanho();

  // cada seção pode pedir mais linhas e mais limão: data-fundo="denso" | "noite" | "calmo"
  const MODOS = { calmo: [7, 0.6], denso: [12, 1], noite: [9, 1.4] };
  const secs = [...document.querySelectorAll('main > section')];
  const lights = [...document.querySelectorAll('main .light')];
  let dens = 8, lime = 0.8, alvoD = 8, alvoL = 0.8;
  let vel = 0, lastY = scrollY, mx = innerWidth * 0.7, my = innerHeight * 0.4, mOn = 0, alvoOn = 0, mxS = mx, myS = my;
  let ativo = performance.now();
  const t0 = performance.now();

  function lerSecoes() {
    // seção no meio da tela decide o modo
    const meio = innerHeight / 2;
    for (const s of secs) {
      const r = s.getBoundingClientRect();
      if (r.top <= meio && r.bottom >= meio) {
        const m = MODOS[s.dataset.fundo] || [8, 0.8];
        alvoD = m[0]; alvoL = m[1];
        break;
      }
    }
    // até duas seções claras visíveis viram papel no shader
    const vis = [];
    for (const l of lights) {
      const r = l.getBoundingClientRect();
      if (r.bottom > -80 && r.top < innerHeight + 80) vis.push(r.top, r.bottom);
      if (vis.length === 4) break;
    }
    while (vis.length < 4) vis.push(-9999, -9998);
    return vis.map((v) => v * ESCALA);
  }

  let quadro = null, ultimo = 0;
  function desenhar(now) {
    quadro = null;
    // parado há mais de 2 s: cai para 30 quadros por segundo
    const ocioso = now - ativo > 2000;
    if (ocioso && now - ultimo < 32) { quadro = requestAnimationFrame(desenhar); return; }
    ultimo = now;
    const dy = scrollY - lastY; lastY = scrollY;
    vel += (dy - vel) * 0.12;
    dens += (alvoD - dens) * 0.04; lime += (alvoL - lime) * 0.05;
    mOn += (alvoOn - mOn) * 0.08;
    mxS += (mx - mxS) * 0.12; myS += (my - myS) * 0.12;
    const L = lerSecoes();
    gl.uniform2f(U.uRes, W, H);
    gl.uniform1f(U.uT, RM.matches ? 0 : (now - t0) / 1000);
    gl.uniform1f(U.uScroll, scrollY * ESCALA);
    gl.uniform1f(U.uVel, RM.matches ? 0 : vel);
    gl.uniform1f(U.uDens, dens);
    gl.uniform1f(U.uLime, lime);
    gl.uniform3f(U.uMouse, mxS * ESCALA, (innerHeight - myS) * ESCALA, mOn);
    gl.uniform4f(U.uLight, L[0], L[1], L[2], L[3]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!RM.matches && !document.hidden) quadro = requestAnimationFrame(desenhar);
  }
  const acorda = () => { ativo = performance.now(); if (!quadro) quadro = requestAnimationFrame(desenhar); };

  addEventListener('scroll', acorda, { passive: true });
  addEventListener('resize', () => { tamanho(); acorda(); });
  addEventListener('pointermove', (e) => {
    mx = e.clientX; my = e.clientY;
    alvoOn = e.pointerType === 'touch' ? 0.6 : 1;
    acorda();
  }, { passive: true });
  document.addEventListener('pointerleave', () => { alvoOn = 0; });
  addEventListener('touchend', () => { alvoOn = 0; }, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) acorda(); });
  RM.addEventListener('change', acorda);
  lerSecoes();
  acorda();
})();
