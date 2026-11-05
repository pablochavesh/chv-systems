/*!
 * CHV SYSTEMS — Futuristic Maximalist Grid Shutter Loader v3.0
 * Apertura mecánica ultrarrápida (0.65s) por paneles de color sólido y tipografía monumental.
 * Cero wireframes 3D lentos; respeta prefers-reduced-motion y ?loader=off.
 */
(function () {
  'use strict';

  var script = document.currentScript || {};
  var ds = script.dataset || {};
  var BRAND = ds.brand || 'CHV SYSTEMS';
  var MIN_MS = parseInt(ds.min, 10) || 620;
  var MAX_MS = parseInt(ds.max, 10) || 2200;

  var revealCbs = [];
  var doneCbs = [];
  var state = { revealed: false, done: false };
  var forceFinish = false;

  window.CHVLoader = {
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

  try {
    if (param !== 'on' && sessionStorage.getItem('chv-shutter-seen')) {
      skip();
      return;
    }
    sessionStorage.setItem('chv-shutter-seen', '1');
  } catch (e) {}

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { skip(); return; }

  var css = [
    'html.chv-loading,html.chv-loading body{overflow:hidden!important}',
    '#chv-loader{position:fixed;inset:0;z-index:2147483000;display:grid;grid-template-rows:1fr auto 1fr;background:#08090E;color:#F7F6F0;font-family:"Unbounded","Big Shoulders Display",system-ui,sans-serif;border:6px solid #C9FF1F;transition:clip-path .52s cubic-bezier(.76,0,.24,1);clip-path:inset(0 0 0 0)}',
    '#chv-loader *{box-sizing:border-box;margin:0;padding:0}',
    '#chv-loader.is-exit{clip-path:inset(0 0 100% 0);pointer-events:none}',
    '#chv-loader .cl-band-top{display:grid;grid-template-columns:1fr 1fr;border-bottom:3px solid #08090E;background:#08090E;gap:3px}',
    '#chv-loader .cl-cell-a{background:#C589FF;color:#08090E;padding:18px 24px;font-size:12px;font-weight:800;letter-spacing:.05em;display:flex;align-items:flex-start;justify-content:space-between;text-transform:uppercase}',
    '#chv-loader .cl-cell-b{background:#FF441F;color:#08090E;padding:18px 24px;font-size:12px;font-weight:800;letter-spacing:.05em;display:flex;align-items:flex-start;justify-content:flex-end;text-transform:uppercase}',
    '#chv-loader .cl-center{background:#08090E;padding:28px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center}',
    '#chv-loader .cl-title{font-size:clamp(2rem,6vw,4.2rem);font-weight:900;letter-spacing:-.03em;line-height:.95;text-transform:uppercase;color:#F7F6F0}',
    '#chv-loader .cl-title span{background:#C9FF1F;color:#08090E;padding:0 12px;display:inline-block}',
    '#chv-loader .cl-bar-wrap{width:min(360px,82vw);height:14px;border:2px solid #F7F6F0;background:#0F121C;padding:2px}',
    '#chv-loader .cl-bar-fill{height:100%;width:100%;background:#C9FF1F;transform:scaleX(0);transform-origin:left center;transition:transform .06s linear}',
    '#chv-loader .cl-band-bot{display:grid;grid-template-columns:1.4fr .6fr;border-top:3px solid #08090E;background:#08090E;gap:3px}',
    '#chv-loader .cl-cell-c{background:#C9FF1F;color:#08090E;padding:18px 24px;font-size:12px;font-weight:800;letter-spacing:.04em;display:flex;align-items:flex-end;text-transform:uppercase}',
    '#chv-loader .cl-cell-d{background:#6FD4FF;color:#08090E;padding:18px 24px;font-size:13px;font-weight:900;display:flex;align-items:flex-end;justify-content:flex-end;font-variant-numeric:tabular-nums}'
  ].join('');

  var style = document.createElement('style');
  style.id = 'chv-loader-style';
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'chv-loader';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-label', 'Cargando ' + BRAND);
  root.innerHTML =
    '<div class="cl-band-top" aria-hidden="true">' +
      '<div class="cl-cell-a"><span>CHV SYSTEMS</span><span>CR · USA</span></div>' +
      '<div class="cl-cell-b"><span>0.4S ENGINE</span></div>' +
    '</div>' +
    '<div class="cl-center">' +
      '<div class="cl-title">CHV <span>SYSTEMS</span></div>' +
      '<div class="cl-bar-wrap" aria-hidden="true"><div class="cl-bar-fill" id="clBarFill"></div></div>' +
    '</div>' +
    '<div class="cl-band-bot" aria-hidden="true">' +
      '<div class="cl-cell-c">WEB DESIGN &amp; DEVELOPMENT</div>' +
      '<div class="cl-cell-d" id="clPctNum">00%</div>' +
    '</div>';

  document.documentElement.classList.add('chv-loading');
  (document.body || document.documentElement).appendChild(root);

  var barEl = root.querySelector('#clBarFill');
  var pctEl = root.querySelector('#clPctNum');
  var start = performance.now();
  var pageLoaded = document.readyState === 'complete';
  var finished = false;

  window.addEventListener('load', function () { pageLoaded = true; });

  function complete() {
    if (finished) return;
    finished = true;
    if (barEl) barEl.style.transform = 'scaleX(1)';
    if (pctEl) pctEl.textContent = '100%';
    document.documentElement.classList.remove('chv-loading');
    root.classList.add('is-exit');
    state.revealed = true;
    fire(revealCbs, 'chv:loader-reveal');

    setTimeout(function () {
      root.remove();
      style.remove();
      state.done = true;
      fire(doneCbs, 'chv:loader-done');
    }, 560);
  }

  setTimeout(complete, MAX_MS);

  function tick(now) {
    if (finished) return;
    var elapsed = now - start;
    var pct = Math.min(100, Math.round((elapsed / MIN_MS) * 100));
    if (barEl) barEl.style.transform = 'scaleX(' + (pct / 100).toFixed(3) + ')';
    if (pctEl) pctEl.textContent = (pct < 10 ? '0' : '') + pct + '%';

    if ((pageLoaded && elapsed >= MIN_MS) || forceFinish || elapsed >= MAX_MS) {
      complete();
      return;
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
