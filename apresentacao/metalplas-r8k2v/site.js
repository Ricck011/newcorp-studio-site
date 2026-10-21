// Metalplas — interações do protótipo
(function () {
  // Mostrar ou ocultar as marcações de "preencher"
  var alt = document.getElementById('alternar-marcas');
  if (alt) {
    try { if (localStorage.getItem('mp-limpo') === '1') document.body.classList.add('limpo'); } catch (e) {}
    var rotulo = function () { alt.textContent = document.body.classList.contains('limpo') ? 'Mostrar marcações' : 'Ocultar marcações'; };
    rotulo();
    alt.addEventListener('click', function () {
      document.body.classList.toggle('limpo');
      try { localStorage.setItem('mp-limpo', document.body.classList.contains('limpo') ? '1' : '0'); } catch (e) {}
      rotulo();
    });
  }

  // Menu no celular
  var menuBtn = document.getElementById('menu-btn');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      menuBtn.setAttribute('aria-expanded', aberto);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('aberto'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Revelar ao rolar
  var revs = document.querySelectorAll('.rev');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (itens) {
      itens.forEach(function (i) { if (i.isIntersecting) { i.target.classList.add('on'); io.unobserve(i.target); } });
    }, { threshold: .12 });
    revs.forEach(function (el) { io.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add('on'); });
  }

  // Calota do topo gira com o scroll
  var gira = document.getElementById('calota-gira');
  var calma = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (gira && !calma) {
    var pedido = false;
    window.addEventListener('scroll', function () {
      if (pedido) return;
      pedido = true;
      requestAnimationFrame(function () {
        gira.setAttribute('transform', 'rotate(' + (window.scrollY * 0.25) + ' 100 100)');
        pedido = false;
      });
    }, { passive: true });
  }

  // Catálogo por aplicação (dados de demonstração)
  var carros = {
    'Volkswagen': ['Gol', 'Polo', 'T-Cross', 'Saveiro', 'Amarok'],
    'Fiat': ['Argo', 'Mobi', 'Strada', 'Toro', 'Pulse'],
    'Chevrolet': ['Onix', 'Tracker', 'S10', 'Spin', 'Montana'],
    'Ford': ['Ka', 'EcoSport', 'Ranger', 'Territory'],
    'Toyota': ['Corolla', 'Yaris', 'Hilux', 'Corolla Cross'],
    'Hyundai': ['HB20', 'Creta', 'Tucson'],
    'Renault': ['Kwid', 'Sandero', 'Duster', 'Oroch'],
    'Honda': ['City', 'Civic', 'HR-V', 'WR-V']
  };
  var marca = document.getElementById('b-marca');
  var modelo = document.getElementById('b-modelo');
  var ano = document.getElementById('b-ano');
  var busca = document.getElementById('busca');
  var res = document.getElementById('resultado');
  if (marca && busca) {
    Object.keys(carros).forEach(function (m) { marca.add(new Option(m, m)); });
    marca.addEventListener('change', function () {
      modelo.innerHTML = '<option value="">Selecione</option>';
      ano.innerHTML = '<option value="">—</option>';
      ano.disabled = true;
      (carros[marca.value] || []).forEach(function (x) { modelo.add(new Option(x, x)); });
      modelo.disabled = !marca.value;
    });
    modelo.addEventListener('change', function () {
      ano.innerHTML = '<option value="">Selecione</option>';
      for (var a = 2026; a >= 2012; a--) ano.add(new Option(a, a));
      ano.disabled = !modelo.value;
    });
    busca.addEventListener('submit', function (e) {
      e.preventDefault();
      var cod = (marca.value.slice(0, 2) + modelo.value.slice(0, 2)).toUpperCase();
      var itens = [
        ['p-calota', 'Calota de centro', 'MP-CL-' + cod + '01'],
        ['p-anel', 'Anel centralizador', 'MP-AN-' + cod + '02'],
        ['p-capa', 'Capa de parafuso', 'MP-CP-' + cod + '03'],
        ['p-espacador', 'Espaçador de roda', 'MP-ES-' + cod + '04']
      ];
      res.innerHTML = itens.map(function (i, n) {
        return '<div class="resultado-item" style="animation-delay:' + (n * 70) + 'ms"><svg><use href="#' + i[0] + '"/></svg><div><b>' + i[1] + '</b><small>' + i[2] + ' · ' + modelo.value + ' ' + ano.value + '</small></div><span class="tag">Compatível</span></div>';
      }).join('');
    });
  }

  // Formulário de revenda (demonstração)
  var form = document.getElementById('form-revenda');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('ok-revenda').style.display = 'block';
      form.querySelector('button[type=submit]').disabled = true;
    });
  }
})();
