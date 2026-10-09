/*!
 * CHV SYSTEMS — Premium Loader v1.0
 * Pantalla de carga circular autónoma, sin dependencias.
 *
 * Uso (pegar justo después de <body>):
 *   <script src="chv-loader.js"></script>
 *
 * Opciones (atributos data-* en la etiqueta <script>):
 *   data-brand="CHV SYSTEMS"                 Texto principal
 *   data-tagline="Web Design & Development"  Texto secundario
 *   data-min="2400"                          Duración mínima en ms
 *   data-max="9000"                          Tiempo máximo antes de forzar la salida
 *   data-once="session"                      Mostrar solo la primera vez por sesión
 *
 * Eventos / API:
 *   window 'chv:loader-reveal'  → la cortina empieza a subir (ideal para animar el hero)
 *   window 'chv:loader-done'    → el loader ya no existe en el DOM
 *   CHVLoader.onReveal(fn), CHVLoader.onDone(fn), CHVLoader.finish()
 */
(function () {
  'use strict';

  var script = document.currentScript || {};
  var ds = script.dataset || {};
  var BRAND = ds.brand || 'CHV SYSTEMS';
  var TAGLINE = ds.tagline || 'Web Design & Development';
  var MIN_MS = parseInt(ds.min, 10) || 2400;
  var MAX_MS = parseInt(ds.max, 10) || 9000;
  var ONCE = ds.once === 'session';

  var revealCbs = [];
  var doneCbs = [];
  var state = { revealed: false, done: false };

  var api = window.CHVLoader = {
    onReveal: function (fn) { state.revealed ? fn() : revealCbs.push(fn); },
    onDone: function (fn) { state.done ? fn() : doneCbs.push(fn); },
    finish: function () { forceFinish = true; },
    get revealed() { return state.revealed; },
    get done() { return state.done; }
  };

  function fire(list, name) {
    list.splice(0).forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } });
    try { window.dispatchEvent(new CustomEvent(name)); } catch (e) {}
  }

  function skip() {
    state.revealed = state.done = true;
    // Diferido para que los listeners registrados después de este script también se ejecuten
    setTimeout(function () {
      fire(revealCbs, 'chv:loader-reveal');
      fire(doneCbs, 'chv:loader-done');
    }, 0);
  }

  if (ONCE) {
    try {
      if (sessionStorage.getItem('chv-loader-seen')) { skip(); return; }
      sessionStorage.setItem('chv-loader-seen', '1');
    } catch (e) {}
  }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) MIN_MS = Math.min(MIN_MS, 700);

  // ---------------------------------------------------------------- Fuentes
  if (!document.querySelector('link[href*="Plus+Jakarta+Sans"]')) {
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;800&display=swap';
    document.head.appendChild(font);
  }

  // ---------------------------------------------------------------- Estilos
  var R = 88;
  var C = +(2 * Math.PI * R).toFixed(2);

  var css = [
    'html.chv-loading,html.chv-loading body{overflow:hidden!important}',
    '#chv-loader{--o:#FF7029;--a:#FF9E2C;--v:#8B5CF6;--i:#6366F1;position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:#04060B;color:#F8FAFC;',
    'font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;will-change:transform;',
    'transition:transform 1.05s cubic-bezier(.76,0,.24,1)}',
    '#chv-loader *{box-sizing:border-box;margin:0;padding:0}',
    '#chv-loader.is-exit{transform:translate3d(0,-100%,0)}',

    /* Atmósfera */
    '#chv-loader .cl-bg{position:absolute;inset:0;pointer-events:none}',
    '#chv-loader .cl-glow{position:absolute;left:50%;top:50%;width:min(780px,140vw);aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;',
    'background:radial-gradient(circle at 50% 50%,rgba(255,112,41,.16) 0%,rgba(139,92,246,.12) 32%,transparent 68%);animation:cl-breathe 4.5s ease-in-out infinite}',
    '#chv-loader .cl-grid{position:absolute;inset:-1px;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);',
    'background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse 55% 50% at 50% 50%,#000 10%,transparent 75%);mask-image:radial-gradient(ellipse 55% 50% at 50% 50%,#000 10%,transparent 75%)}',
    '#chv-loader .cl-horizon{position:absolute;inset:0;opacity:0;animation:cl-fade 1.6s .3s ease forwards;',
    'background:radial-gradient(ellipse 75% 38% at 50% 100%,rgba(255,112,41,.2) 0%,rgba(139,92,246,.12) 50%,transparent 100%)}',
    '#chv-loader .cl-horizon::after{content:"";position:absolute;left:50%;top:calc(100% - 13vh);width:160vmax;height:160vmax;transform:translateX(-50%);border-radius:50%;',
    'border-top:1px solid rgba(255,158,44,.55);background:#04060B;box-shadow:0 -6px 30px -6px rgba(255,112,41,.45);',
    '-webkit-mask-image:linear-gradient(90deg,transparent 30%,#000 45%,#000 55%,transparent 70%);mask-image:linear-gradient(90deg,transparent 30%,#000 45%,#000 55%,transparent 70%)}',

    /* Escena */
    '#chv-loader .cl-stage{position:relative;max-width:100%;display:flex;flex-direction:column;align-items:center;gap:clamp(28px,5vh,44px);padding:0 16px;',
    'transition:transform .9s cubic-bezier(.65,0,.35,1),opacity .7s ease,filter .7s ease}',
    '#chv-loader.is-leaving .cl-stage{transform:scale(.94) translateY(-14px);opacity:0;filter:blur(8px)}',

    /* Anillo */
    '#chv-loader .cl-ring{position:relative;width:clamp(150px,34vw,200px);aspect-ratio:1;opacity:0;transform:scale(.82);animation:cl-pop 1s .1s cubic-bezier(.16,1,.3,1) forwards}',
    '#chv-loader .cl-ring>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}',
    '#chv-loader .cl-spin{transform-origin:100px 100px;animation:cl-rot 2.6s linear infinite}',
    '#chv-loader .cl-spin-rev{transform-origin:100px 100px;animation:cl-rot 14s linear infinite reverse}',
    '#chv-loader .cl-track{fill:none;stroke:rgba(255,255,255,.07);stroke-width:2}',
    '#chv-loader .cl-ticks{fill:none;stroke:rgba(255,255,255,.18);stroke-width:5;stroke-dasharray:1 8.2}',
    '#chv-loader .cl-comet{fill:none;stroke:url(#cl-comet-g);stroke-width:1.5;stroke-linecap:round}',
    '#chv-loader .cl-progress{fill:none;stroke:url(#cl-grad);stroke-width:3;stroke-linecap:round;stroke-dasharray:' + C + ';stroke-dashoffset:' + C + ';',
    'filter:drop-shadow(0 0 6px rgba(255,112,41,.65)) drop-shadow(0 0 14px rgba(139,92,246,.35))}',
    '#chv-loader .cl-head{transform-origin:100px 100px}',
    '#chv-loader .cl-head circle{fill:#FFE3C4;filter:drop-shadow(0 0 4px #FF9E2C) drop-shadow(0 0 10px #FF7029)}',
    '#chv-loader .cl-head.is-hidden{opacity:0}',

    /* Centro: logo + porcentaje */
    '#chv-loader .cl-core{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}',
    '#chv-loader .cl-logo{width:30%;height:auto;overflow:visible}',
    '#chv-loader .cl-logo path{fill:none;stroke:url(#cl-grad-logo);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60;stroke-dashoffset:60;',
    'animation:cl-draw 1.4s cubic-bezier(.65,0,.35,1) forwards}',
    '#chv-loader .cl-logo path:nth-child(2){animation-delay:.25s}',
    '#chv-loader .cl-logo path:nth-child(3){animation-delay:.45s}',
    '#chv-loader .cl-pct{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:11px;font-weight:500;letter-spacing:.18em;color:rgba(248,250,252,.55);',
    'font-variant-numeric:tabular-nums;opacity:0;animation:cl-fade .6s .6s ease forwards}',
    '#chv-loader .cl-pct b{font-weight:500;color:#F8FAFC}',

    /* Destello final */
    '#chv-loader .cl-flash{position:absolute;inset:-12%;border-radius:50%;opacity:0;pointer-events:none;',
    'background:radial-gradient(circle,rgba(255,158,44,.45) 0%,rgba(139,92,246,.18) 40%,transparent 68%)}',
    '#chv-loader.is-complete .cl-flash{animation:cl-flash .9s ease-out forwards}',
    '#chv-loader.is-complete .cl-ring{animation:cl-pulse .9s cubic-bezier(.16,1,.3,1) forwards}',

    /* Texto */
    '#chv-loader .cl-text{display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center}',
    '#chv-loader .cl-brand{display:flex;font-size:clamp(1.65rem,6.2vw,2.6rem);font-weight:800;letter-spacing:-.02em;line-height:1;white-space:nowrap}',
    '#chv-loader .cl-brand span{display:inline-block;opacity:0;transform:translateY(60%) rotateX(-70deg);filter:blur(10px);transform-origin:50% 100%;',
    'animation:cl-letter .9s cubic-bezier(.16,1,.3,1) forwards}',
    '#chv-loader .cl-brand .cl-sp{width:.3em}',
    '#chv-loader .cl-brand .cl-g{background:linear-gradient(90deg,var(--o),var(--a) 35%,var(--v) 75%,var(--i));-webkit-background-clip:text;background-clip:text;color:transparent}',
    '#chv-loader .cl-rule{width:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,158,44,.7),rgba(139,92,246,.7),transparent);animation:cl-rule 1.1s 1.1s cubic-bezier(.65,0,.35,1) forwards}',
    '#chv-loader .cl-tag{--ls:.55em;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:clamp(9.5px,2.6vw,11.5px);font-weight:400;text-transform:uppercase;',
    'letter-spacing:var(--ls);padding-left:var(--ls);color:rgba(148,163,184,.95);opacity:0;animation:cl-track 1.3s 1.25s cubic-bezier(.16,1,.3,1) forwards}',

    /* Línea luminosa en el borde inferior de la cortina */
    '#chv-loader .cl-edge{position:absolute;left:0;right:0;bottom:0;height:2px;background:linear-gradient(90deg,transparent,var(--o) 25%,var(--a) 50%,var(--v) 75%,transparent);',
    'box-shadow:0 0 24px 2px rgba(255,112,41,.55),0 0 60px 6px rgba(139,92,246,.3);opacity:0;transition:opacity .3s ease}',
    '#chv-loader.is-exit .cl-edge{opacity:1}',

    '@keyframes cl-rot{to{transform:rotate(360deg)}}',
    '@keyframes cl-fade{to{opacity:1}}',
    '@keyframes cl-pop{to{opacity:1;transform:scale(1)}}',
    '@keyframes cl-draw{to{stroke-dashoffset:0}}',
    '@keyframes cl-breathe{0%,100%{opacity:.75;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}}',
    '@keyframes cl-letter{to{opacity:1;transform:none;filter:blur(0)}}',
    '@keyframes cl-rule{to{width:min(220px,50vw)}}',
    '@keyframes cl-track{from{opacity:0;letter-spacing:.05em;filter:blur(4px)}to{opacity:1;letter-spacing:var(--ls);filter:blur(0)}}',
    '@media (max-width:480px){#chv-loader .cl-tag{--ls:.28em}}',
    '@keyframes cl-flash{0%{opacity:0;transform:scale(.6)}35%{opacity:1}100%{opacity:0;transform:scale(1.5)}}',
    '@keyframes cl-pulse{0%{transform:scale(1)}30%{transform:scale(1.06)}100%{transform:scale(1)}}',

    '@media (prefers-reduced-motion:reduce){#chv-loader,#chv-loader *{animation-duration:.01ms!important;animation-delay:0s!important;transition-duration:.01ms!important}',
    '#chv-loader.is-exit{transform:none;opacity:0;transition:opacity .4s ease!important}}'
  ].join('');

  var style = document.createElement('style');
  style.id = 'chv-loader-style';
  style.textContent = css;
  document.head.appendChild(style);

  // ---------------------------------------------------------------- Marcado
  function letters(text) {
    var words = text.trim().split(/\s+/);
    var out = '';
    var idx = 0;
    words.forEach(function (word, w) {
      if (w > 0) { out += '<span class="cl-sp" style="animation-delay:' + (0.75 + idx * 0.045).toFixed(3) + 's"></span>'; idx++; }
      var gradient = words.length > 1 && w === words.length - 1;
      var chars = Array.from(word);
      chars.forEach(function (ch, c) {
        var st = 'animation-delay:' + (0.75 + idx * 0.045).toFixed(3) + 's';
        if (gradient) {
          // Un solo degradado continuo repartido entre las letras de la palabra
          st += ';background-size:' + (chars.length * 100) + '% 100%;background-position:' +
            (chars.length > 1 ? (c / (chars.length - 1)) * 100 : 0) + '% 0';
        }
        out += '<span' + (gradient ? ' class="cl-g"' : '') + ' style="' + st + '">' + escapeHtml(ch) + '</span>';
        idx++;
      });
    });
    return out;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  var root = document.createElement('div');
  root.id = 'chv-loader';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-label', 'Cargando ' + BRAND);
  root.innerHTML =
    '<div class="cl-bg" aria-hidden="true"><div class="cl-grid"></div><div class="cl-glow"></div><div class="cl-horizon"></div></div>' +
    '<div class="cl-stage">' +
      '<div class="cl-ring" aria-hidden="true">' +
        '<div class="cl-flash"></div>' +
        '<svg viewBox="0 0 200 200">' +
          '<defs>' +
            '<linearGradient id="cl-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7029"/><stop offset=".45" stop-color="#FF9E2C"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient>' +
            '<linearGradient id="cl-grad-logo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB86B"/><stop offset="1" stop-color="#A78BFA"/></linearGradient>' +
            '<linearGradient id="cl-comet-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8B5CF6" stop-opacity="0"/><stop offset="1" stop-color="#C4B5FD" stop-opacity=".9"/></linearGradient>' +
          '</defs>' +
          '<g class="cl-spin-rev"><circle class="cl-ticks" cx="100" cy="100" r="72"/></g>' +
          '<circle class="cl-track" cx="100" cy="100" r="' + R + '"/>' +
          '<g class="cl-spin"><circle class="cl-comet" cx="100" cy="100" r="98" stroke-dasharray="70 546" /></g>' +
          '<circle class="cl-progress" cx="100" cy="100" r="' + R + '" transform="rotate(-90 100 100)"/>' +
          '<g class="cl-head is-hidden"><circle cx="100" cy="' + (100 - R) + '" r="3.2"/></g>' +
        '</svg>' +
        '<div class="cl-core">' +
          '<svg class="cl-logo" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>' +
          '<div class="cl-pct"><b>000</b>%</div>' +
        '</div>' +
      '</div>' +
      '<div class="cl-text">' +
        '<div class="cl-brand" aria-hidden="true">' + letters(BRAND) + '</div>' +
        '<div class="cl-rule" aria-hidden="true"></div>' +
        '<div class="cl-tag">' + escapeHtml(TAGLINE) + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="cl-edge" aria-hidden="true"></div>';

  document.documentElement.classList.add('chv-loading');
  (document.body || document.documentElement).appendChild(root);

  var progressEl = root.querySelector('.cl-progress');
  var headEl = root.querySelector('.cl-head');
  var pctEl = root.querySelector('.cl-pct b');

  // ---------------------------------------------------------------- Progreso
  var start = performance.now();
  var pageLoaded = document.readyState === 'complete';
  var forceFinish = false;
  var shown = 0;
  var finished = false;
  var last = start;

  window.addEventListener('load', function () { pageLoaded = true; });

  // Red de seguridad: si requestAnimationFrame se detiene (pestaña oculta, equipo lento), sale igual
  setTimeout(function () {
    if (!finished) { finished = true; shown = 100; render(100); complete(); }
  }, MAX_MS + 1500);

  function frame(now) {
    if (finished) return;
    var elapsed = now - start;
    var dt = Math.min(now - last, 250);
    last = now;
    var ready = (pageLoaded && elapsed >= MIN_MS) || forceFinish || elapsed >= MAX_MS;

    // Mientras la página carga, el objetivo avanza con una curva que se frena cerca del 90%
    var t = Math.min(elapsed / MIN_MS, 1);
    var target = ready ? 100 : (pageLoaded ? 92 : 86) * (1 - Math.pow(1 - t, 3));
    // Suavizado independiente del frame rate (~0.08 / 0.14 por frame a 60 fps)
    shown += (target - shown) * (1 - Math.exp(-dt * (ready ? 0.009 : 0.005)));
    if (ready && 100 - shown < 0.4) shown = 100;

    render(shown);

    if (shown >= 100) {
      if (!finished) { finished = true; complete(); }
      return;
    }
    requestAnimationFrame(frame);
  }

  function render(p) {
    progressEl.style.strokeDashoffset = (C * (1 - p / 100)).toFixed(2);
    headEl.style.transform = 'rotate(' + (p * 3.6).toFixed(2) + 'deg)';
    if (p > 1.5 && p < 99.5) headEl.classList.remove('is-hidden'); else headEl.classList.add('is-hidden');
    var n = Math.round(p);
    pctEl.textContent = (n < 10 ? '00' : n < 100 ? '0' : '') + n;
  }

  function complete() {
    root.classList.add('is-complete');
    root.setAttribute('aria-label', BRAND + ' cargado');

    setTimeout(function () { root.classList.add('is-leaving'); }, reduced ? 50 : 520);

    setTimeout(function () {
      document.documentElement.classList.remove('chv-loading');
      root.classList.add('is-exit');
      state.revealed = true;
      fire(revealCbs, 'chv:loader-reveal');
    }, reduced ? 100 : 1050);

    setTimeout(function () {
      root.remove();
      style.remove();
      state.done = true;
      fire(doneCbs, 'chv:loader-done');
    }, reduced ? 600 : 2200);
  }

  requestAnimationFrame(frame);
})();
