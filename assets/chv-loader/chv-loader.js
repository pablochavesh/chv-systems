/*!
 * CHV SYSTEMS — Premium 3D Volumetric & HUD Loader v2.0
 * Pantalla de carga 3D autónoma con núcleo geométrico en tiempo real, telemetría y cortina arquitectónica.
 *
 * Uso (pegar justo después de <body>):
 *   <script src="assets/chv-loader/chv-loader.js"></script>
 *
 * Opciones (atributos data-* en la etiqueta <script>):
 *   data-enabled="false"                     Desactiva el loader (también ?loader=off / ?loader=on en la URL)
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
  var forceFinish = false;

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
    setTimeout(function () {
      fire(revealCbs, 'chv:loader-reveal');
      fire(doneCbs, 'chv:loader-done');
    }, 0);
  }

  var param = null;
  try { param = new URLSearchParams(location.search).get('loader'); } catch (e) {}
  var enabled = param ? param !== 'off' : ds.enabled !== 'false';
  if (!enabled) { skip(); return; }

  if (ONCE && param !== 'on') {
    try {
      if (sessionStorage.getItem('chv-loader-seen')) { skip(); return; }
      sessionStorage.setItem('chv-loader-seen', '1');
    } catch (e) {}
  }

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) MIN_MS = Math.min(MIN_MS, 650);

  if (!document.querySelector('link[href*="Plus+Jakarta+Sans"]')) {
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap';
    document.head.appendChild(font);
  }

  var R = 92;
  var C = +(2 * Math.PI * R).toFixed(2);

  var css = [
    'html.chv-loading,html.chv-loading body{overflow:hidden!important}',
    '#chv-loader{--o:#FF7029;--a:#FF9E2C;--c:#38BDF8;--v:#8B5CF6;position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:#03060E;color:#F8FAFC;',
    'font-family:"Plus Jakarta Sans",system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;will-change:transform,clip-path;',
    'transition:transform 1.1s cubic-bezier(.78,0,.18,1),opacity .65s ease}',
    '#chv-loader *{box-sizing:border-box;margin:0;padding:0}',
    '#chv-loader.is-exit{transform:translate3d(0,-102%,0)}',

    /* Ambient 3D Stage & Grid */
    '#chv-loader .cl-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden}',
    '#chv-loader .cl-canvas-bg{position:absolute;inset:0;width:100%;height:100%;opacity:.92}',
    '#chv-loader .cl-grid{position:absolute;inset:-20%;background-image:linear-gradient(rgba(56,189,248,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.045) 1px,transparent 1px);',
    'background-size:64px 64px;transform:perspective(700px) rotateX(58deg) translateY(18%);transform-origin:50% 100%;',
    '-webkit-mask-image:radial-gradient(ellipse 60% 50% at 50% 65%,#000 15%,transparent 75%);mask-image:radial-gradient(ellipse 60% 50% at 50% 65%,#000 15%,transparent 75%)}',
    '#chv-loader .cl-glow{position:absolute;left:50%;top:46%;width:min(820px,135vw);aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;',
    'background:radial-gradient(circle at 50% 50%,rgba(255,112,41,.17) 0%,rgba(56,189,248,.11) 36%,rgba(139,92,246,.08) 54%,transparent 72%);animation:cl-breathe 4s ease-in-out infinite}',

    /* Corner HUD Telemetry */
    '#chv-loader .cl-hud{position:absolute;inset:clamp(16px,3vw,32px);pointer-events:none;display:flex;flex-direction:column;justify-content:space-between;font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.14em;color:rgba(148,163,184,.65);text-transform:uppercase}',
    '#chv-loader .cl-hud-row{display:flex;justify-content:space-between;align-items:center;gap:12px}',
    '#chv-loader .cl-hud-pill{display:inline-flex;align-items:center;gap:8px;padding:5px 11px;border-radius:999px;background:rgba(12,18,36,.72);border:1px solid rgba(255,255,255,.08);color:#CBD5E1}',
    '#chv-loader .cl-hud-dot{width:6px;height:6px;border-radius:50%;background:#FF7029;box-shadow:0 0 10px #FF7029;animation:cl-blink 1.2s infinite}',
    '@media (max-width:560px){#chv-loader .cl-hud-hide-sm{display:none}}',

    /* Central Stage */
    '#chv-loader .cl-stage{position:relative;z-index:2;max-width:100%;display:flex;flex-direction:column;align-items:center;gap:clamp(24px,4.2vh,38px);padding:0 18px;',
    'transition:transform .85s cubic-bezier(.68,0,.26,1),opacity .65s ease,filter .65s ease}',
    '#chv-loader.is-leaving .cl-stage{transform:scale(1.06) translateY(-18px);opacity:0;filter:blur(10px)}',

    /* 3D Gyroscope + Ring Assembly */
    '#chv-loader .cl-ring{position:relative;width:clamp(190px,38vw,250px);aspect-ratio:1;opacity:0;transform:scale(.84);animation:cl-pop .9s .05s cubic-bezier(.16,1,.3,1) forwards}',
    '#chv-loader .cl-core-canvas{position:absolute;inset:-14%;width:128%;height:128%;pointer-events:none}',
    '#chv-loader .cl-ring>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}',
    '#chv-loader .cl-spin{transform-origin:110px 110px;animation:cl-rot 3.2s linear infinite}',
    '#chv-loader .cl-spin-rev{transform-origin:110px 110px;animation:cl-rot 12s linear infinite reverse}',
    '#chv-loader .cl-track{fill:none;stroke:rgba(255,255,255,.07);stroke-width:1.75}',
    '#chv-loader .cl-ticks{fill:none;stroke:rgba(56,189,248,.24);stroke-width:4.5;stroke-dasharray:1.2 7.8}',
    '#chv-loader .cl-comet{fill:none;stroke:url(#cl-comet-g);stroke-width:1.8;stroke-linecap:round}',
    '#chv-loader .cl-progress{fill:none;stroke:url(#cl-grad);stroke-width:3.2;stroke-linecap:round;stroke-dasharray:' + C + ';stroke-dashoffset:' + C + ';',
    'filter:drop-shadow(0 0 8px rgba(255,112,41,.65)) drop-shadow(0 0 18px rgba(56,189,248,.35))}',
    '#chv-loader .cl-head{transform-origin:110px 110px}',
    '#chv-loader .cl-head circle{fill:#FFF7ED;filter:drop-shadow(0 0 5px #FF9E2C) drop-shadow(0 0 12px #FF7029)}',
    '#chv-loader .cl-head.is-hidden{opacity:0}',

    /* Center Emblem + Counter */
    '#chv-loader .cl-core{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;pointer-events:none}',
    '#chv-loader .cl-logo{width:24%;height:auto;overflow:visible;filter:drop-shadow(0 0 12px rgba(255,112,41,.45))}',
    '#chv-loader .cl-logo path{fill:none;stroke:url(#cl-grad-logo);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60;stroke-dashoffset:60;',
    'animation:cl-draw 1.25s cubic-bezier(.65,0,.35,1) forwards}',
    '#chv-loader .cl-logo path:nth-child(2){animation-delay:.2s}',
    '#chv-loader .cl-logo path:nth-child(3){animation-delay:.38s}',
    '#chv-loader .cl-pct{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:13px;font-weight:600;letter-spacing:.18em;color:rgba(248,250,252,.65);',
    'font-variant-numeric:tabular-nums;opacity:0;animation:cl-fade .5s .45s ease forwards}',
    '#chv-loader .cl-pct b{font-weight:600;color:#F8FAFC;font-size:15px}',

    /* Completion Shockwave */
    '#chv-loader .cl-flash{position:absolute;inset:-15%;border-radius:50%;opacity:0;pointer-events:none;',
    'background:radial-gradient(circle,rgba(255,158,44,.5) 0%,rgba(56,189,248,.24) 42%,transparent 70%)}',
    '#chv-loader.is-complete .cl-flash{animation:cl-flash .85s ease-out forwards}',
    '#chv-loader.is-complete .cl-ring{animation:cl-pulse .85s cubic-bezier(.16,1,.3,1) forwards}',

    /* Typography & Telemetry Bar */
    '#chv-loader .cl-text{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center}',
    '#chv-loader .cl-brand{display:flex;font-size:clamp(1.75rem,6vw,2.75rem);font-weight:800;letter-spacing:-.03em;line-height:1;white-space:nowrap;perspective:500px}',
    '#chv-loader .cl-brand span{display:inline-block;opacity:0;transform:translateY(55%) rotateX(-75deg);filter:blur(8px);transform-origin:50% 100%;',
    'animation:cl-letter .85s cubic-bezier(.16,1,.3,1) forwards}',
    '#chv-loader .cl-brand .cl-sp{width:.32em}',
    '#chv-loader .cl-brand .cl-g{color:#FF7029;text-shadow:0 0 28px rgba(255,112,41,.45)}',
    '#chv-loader .cl-rule-wrap{width:min(260px,62vw);height:2px;background:rgba(255,255,255,.07);border-radius:999px;overflow:hidden;position:relative}',
    '#chv-loader .cl-rule-bar{height:100%;width:0%;background:linear-gradient(90deg,#FF7029,#FF9E2C,#38BDF8);box-shadow:0 0 12px #FF7029;transition:width .08s linear}',
    '#chv-loader .cl-tag{--ls:.46em;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:clamp(9.5px,2.4vw,11px);font-weight:500;text-transform:uppercase;',
    'letter-spacing:var(--ls);padding-left:var(--ls);color:rgba(148,163,184,.92);opacity:0;animation:cl-track 1.1s .95s cubic-bezier(.16,1,.3,1) forwards}',
    '#chv-loader .cl-status{font-family:"JetBrains Mono",monospace;font-size:10px;letter-spacing:.14em;color:#38BDF8;text-transform:uppercase;min-height:1.4em;opacity:.9}',

    /* Bottom Curtain Plasma Edge */
    '#chv-loader .cl-edge{position:absolute;left:0;right:0;bottom:0;height:3px;background:linear-gradient(90deg,transparent,#FF7029 22%,#FF9E2C 50%,#38BDF8 78%,transparent);',
    'box-shadow:0 0 28px 3px rgba(255,112,41,.65),0 0 64px 8px rgba(56,189,248,.35);opacity:0;transition:opacity .3s ease}',
    '#chv-loader.is-exit .cl-edge{opacity:1}',

    '@keyframes cl-rot{to{transform:rotate(360deg)}}',
    '@keyframes cl-fade{to{opacity:1}}',
    '@keyframes cl-pop{to{opacity:1;transform:scale(1)}}',
    '@keyframes cl-draw{to{stroke-dashoffset:0}}',
    '@keyframes cl-blink{0%,100%{opacity:1}50%{opacity:.3}}',
    '@keyframes cl-breathe{0%,100%{opacity:.78;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.07)}}',
    '@keyframes cl-letter{to{opacity:1;transform:none;filter:blur(0)}}',
    '@keyframes cl-track{from{opacity:0;letter-spacing:.06em;filter:blur(4px)}to{opacity:1;letter-spacing:var(--ls);filter:blur(0)}}',
    '@media (max-width:480px){#chv-loader .cl-tag{--ls:.24em}}',
    '@keyframes cl-flash{0%{opacity:0;transform:scale(.65)}35%{opacity:1}100%{opacity:0;transform:scale(1.55)}}',
    '@keyframes cl-pulse{0%{transform:scale(1)}30%{transform:scale(1.06)}100%{transform:scale(1)}}',

    '@media (prefers-reduced-motion:reduce){#chv-loader,#chv-loader *{animation-duration:.01ms!important;animation-delay:0s!important;transition-duration:.01ms!important}',
    '#chv-loader.is-exit{transform:none;opacity:0;transition:opacity .35s ease!important}}'
  ].join('');

  var style = document.createElement('style');
  style.id = 'chv-loader-style';
  style.textContent = css;
  document.head.appendChild(style);

  function letters(text) {
    var words = text.trim().split(/\s+/);
    var out = '';
    var idx = 0;
    words.forEach(function (word, w) {
      if (w > 0) { out += '<span class="cl-sp" style="animation-delay:' + (0.45 + idx * 0.04).toFixed(3) + 's"></span>'; idx++; }
      var accentWord = words.length > 1 && w === words.length - 1;
      var chars = Array.from(word);
      chars.forEach(function (ch) {
        var st = 'animation-delay:' + (0.45 + idx * 0.04).toFixed(3) + 's';
        out += '<span' + (accentWord ? ' class="cl-g"' : '') + ' style="' + st + '">' + escapeHtml(ch) + '</span>';
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
    '<div class="cl-bg" aria-hidden="true">' +
      '<div class="cl-grid"></div>' +
      '<div class="cl-glow"></div>' +
    '</div>' +
    '<div class="cl-hud" aria-hidden="true">' +
      '<div class="cl-hud-row">' +
        '<span class="cl-hud-pill"><span class="cl-hud-dot"></span>CHV CORE ENGINE v2.6</span>' +
        '<span class="cl-hud-hide-sm">COSTA RICA · CR-SJO // LATENCY 0.4MS</span>' +
      '</div>' +
      '<div class="cl-hud-row">' +
        '<span class="cl-hud-hide-sm">WEBGL 3D PIPELINE // ACTIVE</span>' +
        '<span id="cl-hud-coords">SYS.NODE: 09.9281° N, 84.0907° W</span>' +
      '</div>' +
    '</div>' +
    '<div class="cl-stage">' +
      '<div class="cl-ring" aria-hidden="true">' +
        '<canvas class="cl-core-canvas" id="clCoreCanvas" width="320" height="320"></canvas>' +
        '<div class="cl-flash"></div>' +
        '<svg viewBox="0 0 220 220">' +
          '<defs>' +
            '<linearGradient id="cl-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7029"/><stop offset=".5" stop-color="#FF9E2C"/><stop offset="1" stop-color="#38BDF8"/></linearGradient>' +
            '<linearGradient id="cl-grad-logo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB86B"/><stop offset="1" stop-color="#38BDF8"/></linearGradient>' +
            '<linearGradient id="cl-comet-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#38BDF8" stop-opacity="0"/><stop offset="1" stop-color="#7DD3FC" stop-opacity=".95"/></linearGradient>' +
          '</defs>' +
          '<g class="cl-spin-rev"><circle class="cl-ticks" cx="110" cy="110" r="76"/></g>' +
          '<circle class="cl-track" cx="110" cy="110" r="' + R + '"/>' +
          '<g class="cl-spin"><circle class="cl-comet" cx="110" cy="110" r="102" stroke-dasharray="78 560" /></g>' +
          '<circle class="cl-progress" cx="110" cy="110" r="' + R + '" transform="rotate(-90 110 110)"/>' +
          '<g class="cl-head is-hidden"><circle cx="110" cy="' + (110 - R) + '" r="3.5"/></g>' +
        '</svg>' +
        '<div class="cl-core">' +
          '<svg class="cl-logo" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>' +
          '<div class="cl-pct"><b>000</b>%</div>' +
        '</div>' +
      '</div>' +
      '<div class="cl-text">' +
        '<div class="cl-brand" aria-hidden="true">' + letters(BRAND) + '</div>' +
        '<div class="cl-rule-wrap" aria-hidden="true"><div class="cl-rule-bar" id="clRuleBar"></div></div>' +
        '<div class="cl-tag">' + escapeHtml(TAGLINE) + '</div>' +
        '<div class="cl-status" id="clStatusText" aria-hidden="true">INICIALIZANDO MOTOR 3D &amp; INTERFAZ...</div>' +
      '</div>' +
    '</div>' +
    '<div class="cl-edge" aria-hidden="true"></div>';

  document.documentElement.classList.add('chv-loading');
  (document.body || document.documentElement).appendChild(root);

  var progressEl = root.querySelector('.cl-progress');
  var headEl = root.querySelector('.cl-head');
  var pctEl = root.querySelector('.cl-pct b');
  var ruleBarEl = root.querySelector('#clRuleBar');
  var statusEl = root.querySelector('#clStatusText');
  var coreCanvas = root.querySelector('#clCoreCanvas');
  var coreCtx = coreCanvas ? coreCanvas.getContext('2d') : null;

  // ---------------------------------------------------------------- Real-Time 3D Geodesic / Gyroscopic Core on Canvas
  var icoVerts = [];
  var icoEdges = [];
  (function initGeometry() {
    var phi = (1 + Math.sqrt(5)) / 2;
    var raw = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];
    icoVerts = raw.map(function (v) {
      var l = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
      return [v[0]/l, v[1]/l, v[2]/l];
    });
    for (var i = 0; i < icoVerts.length; i++) {
      for (var j = i + 1; j < icoVerts.length; j++) {
        var dx = icoVerts[i][0] - icoVerts[j][0];
        var dy = icoVerts[i][1] - icoVerts[j][1];
        var dz = icoVerts[i][2] - icoVerts[j][2];
        var d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d < 1.15) icoEdges.push([i, j]);
      }
    }
  })();

  function render3DCore(now, prog) {
    if (!coreCtx || reduced) return;
    var cw = coreCanvas.width;
    var ch = coreCanvas.height;
    var cx = cw / 2;
    var cy = ch / 2;
    coreCtx.clearRect(0, 0, cw, ch);

    var speed = 0.0011 + (prog / 100) * 0.0018;
    var ax = now * speed;
    var ay = now * speed * 1.35;
    var az = now * 0.0007;

    var cosX = Math.cos(ax), sinX = Math.sin(ax);
    var cosY = Math.cos(ay), sinY = Math.sin(ay);
    var cosZ = Math.cos(az), sinZ = Math.sin(az);

    function project(x, y, z, scale) {
      // Rotate X
      var y1 = y * cosX - z * sinX;
      var z1 = y * sinX + z * cosX;
      // Rotate Y
      var x2 = x * cosY + z1 * sinY;
      var z2 = -x * sinY + z1 * cosY;
      // Rotate Z
      var x3 = x2 * cosZ - y1 * sinZ;
      var y3 = x2 * sinZ + y1 * cosZ;
      var fov = 260 / (260 + z2 * scale);
      return {
        x: cx + x3 * scale * fov,
        y: cy + y3 * scale * fov,
        z: z2,
        fov: fov
      };
    }

    // Draw 2 tilted 3D Gyroscopic Orbital Rings
    for (var ringIdx = 0; ringIdx < 2; ringIdx++) {
      coreCtx.beginPath();
      var rScale = ringIdx === 0 ? 94 : 112;
      var tilt = ringIdx === 0 ? 0.65 : -0.58;
      var segs = 48;
      for (var s = 0; s <= segs; s++) {
        var theta = (s / segs) * Math.PI * 2;
        var rx = Math.cos(theta);
        var ry = Math.sin(theta) * Math.cos(tilt);
        var rz = Math.sin(theta) * Math.sin(tilt);
        var pt = project(rx, ry, rz, rScale);
        if (s === 0) coreCtx.moveTo(pt.x, pt.y);
        else coreCtx.lineTo(pt.x, pt.y);
      }
      coreCtx.strokeStyle = ringIdx === 0 ? 'rgba(255, 112, 41, 0.22)' : 'rgba(56, 189, 248, 0.2)';
      coreCtx.lineWidth = 1.1;
      coreCtx.stroke();
    }

    // Project and draw 3D Icosahedron wireframe inside the ring
    var meshScale = 52 + Math.sin(now * 0.003) * 3;
    var projVerts = icoVerts.map(function (v) {
      return project(v[0], v[1], v[2], meshScale);
    });

    icoEdges.forEach(function (e) {
      var p1 = projVerts[e[0]];
      var p2 = projVerts[e[1]];
      var depthAlpha = Math.max(0.08, Math.min(0.55, ((p1.z + p2.z) * 0.5 + 1.2) * 0.26));
      coreCtx.beginPath();
      coreCtx.moveTo(p1.x, p1.y);
      coreCtx.lineTo(p2.x, p2.y);
      coreCtx.strokeStyle = 'rgba(56, 189, 248, ' + depthAlpha.toFixed(3) + ')';
      coreCtx.lineWidth = 1;
      coreCtx.stroke();
    });

    projVerts.forEach(function (p) {
      var alpha = Math.max(0.2, Math.min(0.9, (p.z + 1.1) * 0.45));
      coreCtx.fillStyle = p.z > 0.2 ? 'rgba(255, 158, 44, ' + alpha.toFixed(2) + ')' : 'rgba(56, 189, 248, ' + alpha.toFixed(2) + ')';
      coreCtx.beginPath();
      coreCtx.arc(p.x, p.y, 1.8 * p.fov, 0, Math.PI * 2);
      coreCtx.fill();
    });
  }

  // ---------------------------------------------------------------- Progress & Telemetry Loop
  var start = performance.now();
  var pageLoaded = document.readyState === 'complete';
  var shown = 0;
  var finished = false;
  var last = start;

  window.addEventListener('load', function () { pageLoaded = true; });

  setTimeout(function () {
    if (!finished) { finished = true; shown = 100; render(100, performance.now()); complete(); }
  }, MAX_MS + 1500);

  function frame(now) {
    if (finished) return;
    var elapsed = now - start;
    var dt = Math.min(now - last, 250);
    last = now;
    var ready = (pageLoaded && elapsed >= MIN_MS) || forceFinish || elapsed >= MAX_MS;

    var t = Math.min(elapsed / MIN_MS, 1);
    var target = ready ? 100 : (pageLoaded ? 94 : 88) * (1 - Math.pow(1 - t, 3));
    shown += (target - shown) * (1 - Math.exp(-dt * (ready ? 0.01 : 0.0055)));
    if (ready && 100 - shown < 0.45) shown = 100;

    render(shown, now);

    if (shown >= 100) {
      if (!finished) { finished = true; complete(); }
      return;
    }
    requestAnimationFrame(frame);
  }

  function render(p, now) {
    progressEl.style.strokeDashoffset = (C * (1 - p / 100)).toFixed(2);
    headEl.style.transform = 'rotate(' + (p * 3.6).toFixed(2) + 'deg)';
    if (p > 1.5 && p < 99.5) headEl.classList.remove('is-hidden'); else headEl.classList.add('is-hidden');
    var n = Math.round(p);
    pctEl.textContent = (n < 10 ? '00' : n < 100 ? '0' : '') + n;
    if (ruleBarEl) ruleBarEl.style.width = p.toFixed(1) + '%';
    if (statusEl) {
      if (n < 30) statusEl.textContent = 'INICIALIZANDO MOTOR 3D & GEOMETRÍA...';
      else if (n < 65) statusEl.textContent = 'SINCRONIZANDO MÓDULOS DE SISTEMA...';
      else if (n < 95) statusEl.textContent = 'OPTIMIZANDO RENDERIZADO 60FPS...';
      else statusEl.textContent = 'SISTEMA LISTO · LANZANDO EXPERIENCIA';
    }
    render3DCore(now || performance.now(), p);
  }

  function complete() {
    root.classList.add('is-complete');
    root.setAttribute('aria-label', BRAND + ' cargado');

    setTimeout(function () { root.classList.add('is-leaving'); }, reduced ? 40 : 480);

    setTimeout(function () {
      document.documentElement.classList.remove('chv-loading');
      root.classList.add('is-exit');
      state.revealed = true;
      fire(revealCbs, 'chv:loader-reveal');
    }, reduced ? 90 : 980);

    setTimeout(function () {
      root.remove();
      style.remove();
      state.done = true;
      fire(doneCbs, 'chv:loader-done');
    }, reduced ? 550 : 2150);
  }

  requestAnimationFrame(frame);
})();
