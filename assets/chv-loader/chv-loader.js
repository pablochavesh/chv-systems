/*!
 * CHV SYSTEMS — Architectural Liquid Glass Veil Loader v4.0
 * Entrada fluida y rápida (~480ms) en cristal ahumado con matiz rubí, sin tecnicismos ni 3D pesado.
 * Respeta prefers-reduced-motion y ?loader=off.
 */
(function () {
  'use strict';

  var script = document.currentScript || {};
  var ds = script.dataset || {};
  var BRAND = ds.brand || 'CHV SYSTEMS';
  var MIN_MS = parseInt(ds.min, 10) || 480;
  var MAX_MS = parseInt(ds.max, 10) || 1800;

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
    if (param !== 'on' && sessionStorage.getItem('chv-glass-seen')) {
      skip();
      return;
    }
    sessionStorage.setItem('chv-glass-seen', '1');
  } catch (e) {}

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { skip(); return; }

  var css = [
    'html.chv-loading,html.chv-loading body{overflow:hidden!important}',
    '#chv-loader{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px;background:radial-gradient(circle at 72% 28%,rgba(225,29,72,.14),transparent 46%),#07070A;color:#F5F6FA;font-family:"Onest","Figtree",system-ui,sans-serif;opacity:1;transform:scale(1);transition:opacity .42s cubic-bezier(.22,1,.36,1),transform .42s cubic-bezier(.22,1,.36,1)}',
    '#chv-loader *{box-sizing:border-box;margin:0;padding:0}',
    '#chv-loader.is-exit{opacity:0;transform:scale(1.02);pointer-events:none}',
    '#chv-loader .cl-glass{position:relative;width:min(380px,88vw);padding:36px 32px 30px;border-radius:28px;background:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.03) 55%,rgba(225,29,72,.07));backdrop-filter:blur(28px) saturate(160%);-webkit-backdrop-filter:blur(28px) saturate(160%);box-shadow:inset 0 1px 0 rgba(255,255,255,.42),inset 0 -1px 0 rgba(255,255,255,.12),0 28px 60px -16px rgba(0,0,0,.75);border:1px solid rgba(255,255,255,.18);display:flex;flex-direction:column;align-items:center;gap:18px;text-align:center}',
    '#chv-loader .cl-mark{width:min(196px,62vw);height:auto;display:block}',
    '#chv-loader .cl-sub{font-size:12px;font-weight:500;letter-spacing:.42em;text-indent:.42em;color:rgba(245,246,250,.76)}',
    '#chv-loader .cl-track{width:100%;height:2px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden}',
    '#chv-loader .cl-fill{height:100%;width:100%;background:linear-gradient(90deg,rgba(255,255,255,.85),#E11D48);transform:scaleX(0);transform-origin:left center;transition:transform .06s linear}'
  ].join('');

  var style = document.createElement('style');
  style.id = 'chv-loader-style';
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'chv-loader';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-label', 'Abriendo ' + BRAND);
  root.innerHTML =
    '<div class="cl-glass">' +
      '<svg class="cl-mark" viewBox="0 0 360 92" fill="none" aria-hidden="true">' +
        '<defs><linearGradient id="clMetal" x1="0" y1="8" x2="0" y2="86" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#C8CBD4"/></linearGradient></defs>' +
        '<path d="M36 12H114L101 29H38C30.8 29 26 33.8 26 41V51C26 58.2 30.8 63 38 63H108V80H36C18.4 80 8 69.6 8 52V40C8 22.4 18.4 12 36 12Z" fill="url(#clMetal)"/>' +
        '<path d="M128 12H146V38H210V12H228V69L210 81V55H146V80H128V12Z" fill="url(#clMetal)"/>' +
        '<path d="M234 12H254L292 61L330 12H350L301 76C296.5 81.8 287.5 81.8 283 76L234 12Z" fill="url(#clMetal)"/>' +
      '</svg>' +
      '<div class="cl-sub">SYSTEMS</div>' +
      '<div class="cl-track" aria-hidden="true"><div class="cl-fill" id="clBarFill"></div></div>' +
    '</div>';

  document.documentElement.classList.add('chv-loading');
  (document.body || document.documentElement).appendChild(root);

  var barEl = root.querySelector('#clBarFill');
  var start = performance.now();
  var pageLoaded = document.readyState === 'complete';
  var finished = false;

  window.addEventListener('load', function () { pageLoaded = true; });

  function complete() {
    if (finished) return;
    finished = true;
    if (barEl) barEl.style.transform = 'scaleX(1)';
    document.documentElement.classList.remove('chv-loading');
    root.classList.add('is-exit');
    state.revealed = true;
    fire(revealCbs, 'chv:loader-reveal');

    setTimeout(function () {
      root.remove();
      style.remove();
      state.done = true;
      fire(doneCbs, 'chv:loader-done');
    }, 450);
  }

  setTimeout(complete, MAX_MS);

  function tick(now) {
    if (finished) return;
    var elapsed = now - start;
    var ratio = Math.min(1, elapsed / MIN_MS);
    if (barEl) barEl.style.transform = 'scaleX(' + ratio.toFixed(3) + ')';

    if ((pageLoaded && elapsed >= MIN_MS) || forceFinish || elapsed >= MAX_MS) {
      complete();
      return;
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
