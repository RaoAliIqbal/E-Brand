/* Storybound House: one animation loop for Lenis and the feather cursor. */
(() => {
  if (window.storyboundMotion) return;
  const style = document.createElement('style');
  style.textContent = `
    html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}
    .lenis.lenis-stopped{overflow:hidden}.lenis [data-lenis-prevent]{overscroll-behavior:contain}
    .sb-cursor{position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:none;overflow:visible;width:0;height:0;pointer-events:none;z-index:2147483647;visibility:hidden}
    .sb-quill,.sb-dot{position:fixed;top:0;left:0;pointer-events:none;will-change:transform}
    .sb-quill{width:28px;height:28px;color:#11594b;filter:drop-shadow(0 1px 1px #fff);transition:color .2s}
    .sb-quill svg{width:28px;height:28px;transform-origin:3px 25px;transition:transform .22s,color .22s}
    .sb-cursor.is-hover .sb-quill{color:#C9A86A}.sb-cursor.is-hover svg{transform:scale(1.5)}
    .sb-dot{width:5px;height:5px;border-radius:50%;background:#C9A86A;opacity:.75}
    @media(min-width:768px) and (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference){html.sb-cursor-ready,html.sb-cursor-ready *{cursor:none!important}}
    .reveal.sb-reveal-pending{opacity:0;translate:0 24px;transition:opacity .7s cubic-bezier(.16,1,.3,1),translate .7s cubic-bezier(.16,1,.3,1)}
    .reveal.sb-reveal-pending.active,.reveal.sb-reveal-pending:focus-within{opacity:1;translate:0 0}
    @media(prefers-reduced-motion:reduce){.reveal.sb-reveal-pending{opacity:1;translate:none;transition:none}}
  `;
  document.head.append(style);
  const layer = document.createElement('div');
  layer.className = 'sb-cursor'; layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = '<span class="sb-dot"></span><span class="sb-quill"><svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M4 23C5 12 13 3 25 2c1 8-5 18-15 19l-6 2Z" fill="currentColor" fill-opacity=".9"/><path d="m3 26 17-18M9 19l-1-7m6 2 6-1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M6 22 20 8" stroke="#fffaf0" stroke-width=".9"/></svg></span>';
  if ('showPopover' in layer) layer.setAttribute('popover', 'manual');
  document.body.append(layer);
  const quill = layer.querySelector('.sb-quill'), dot = layer.querySelector('.sb-dot');
  const fine = matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)');
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  let lenis, frame = 0, active = false, seen = false, dialogOpen = false;
  let x = 0, y = 0, qx = 0, qy = 0, dx = 0, dy = 0;
  let path = location.pathname;
  const publicPage = () => !location.pathname.startsWith('/adminarea');
  const hide = () => { seen = false; layer.style.visibility = 'hidden'; document.documentElement.classList.remove('sb-cursor-ready'); };
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  function scan() {
    if (!publicPage() || reduced.matches) return;
    document.querySelectorAll('main section,.reveal').forEach(section => {
      if (section.closest('dialog') || section.dataset.sbObserved) return;
      section.dataset.sbObserved = 'true';
      section.classList.add('reveal');
      if (section.getBoundingClientRect().top < innerHeight * .92) section.classList.add('active');
      section.classList.add('sb-reveal-pending'); observer.observe(section);
    });
  }
  function sync() {
    if (path !== location.pathname) { path = location.pathname; hide(); if (lenis) lenis.scrollTo(window.scrollY, { immediate: true }); }
    active = fine.matches && !reduced.matches && publicPage();
    if (!active) hide();
    if (!reduced.matches && publicPage() && window.Lenis && !lenis) {
      lenis = new window.Lenis({ duration: 1.2, easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), smoothWheel: true, syncTouch: false, anchors: true, prevent: node => !!node.closest('dialog,[data-lenis-prevent],textarea,select') });
    } else if ((reduced.matches || !publicPage()) && lenis) { lenis.destroy(); lenis = undefined; }
    const open = !!document.querySelector('dialog[open]');
    if (lenis) { if (open) lenis.stop(); else if (dialogOpen) lenis.start(); }
    if (open !== dialogOpen && layer.showPopover && seen) { layer.hidePopover(); layer.showPopover(); }
    dialogOpen = open; scan();
    if (!frame && !document.hidden && (active || lenis)) frame = requestAnimationFrame(tick);
  }
  function tick(time) {
    frame = 0;
    if (document.hidden) return;
    if (lenis) lenis.raf(time);
    if (active && seen) {
      qx += (x - qx) * .15; qy += (y - qy) * .15;
      dx += (qx - dx) * .10; dy += (qy - dy) * .10;
      quill.style.transform = `translate3d(${qx - 3}px,${qy - 25}px,0)`;
      dot.style.transform = `translate3d(${dx - 2.5}px,${dy - 2.5}px,0)`;
    }
    if (active || lenis) frame = requestAnimationFrame(tick);
  }
  const move = e => {
    if (!active || e.pointerType === 'touch') { hide(); return; }
    x = e.clientX; y = e.clientY;
    if (!seen) {
      qx = dx = x; qy = dy = y; seen = true;
      if (layer.showPopover && !layer.matches(':popover-open')) layer.showPopover();
      layer.style.visibility = 'visible'; document.documentElement.classList.add('sb-cursor-ready');
    }
    layer.classList.toggle('is-hover', !!e.target.closest('a,button,.btn,[role="button"]'));
  };
  document.addEventListener('pointermove', move, { passive: true });
  document.documentElement.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  document.addEventListener('visibilitychange', sync);
  fine.addEventListener('change', sync); reduced.addEventListener('change', sync);
  const mutations = new MutationObserver(sync);
  mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['open'] });
  window.addEventListener('popstate', sync);
  window.storyboundMotion = { refresh: sync };
  sync();
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/lenis@1.3.11/dist/lenis.min.js'; script.integrity = 'sha384-kdY9hFBPoAPpxcrLihsO3APivFOxtQwSeYdzFD5CIIfLurwhdMrEHhkQxZJDkxgk'; script.crossOrigin = 'anonymous'; script.async = true;
  script.onload = sync; // Native scrolling remains available if the CDN cannot load.
  document.head.append(script);
})();

/* Public-site copying deterrents. These are not a security boundary. */
(() => {
  const css = document.createElement('style');
  css.textContent = `
    html.sb-public-content-guard body{-webkit-user-select:none;user-select:none}
    html.sb-public-content-guard input,html.sb-public-content-guard textarea,html.sb-public-content-guard select,html.sb-public-content-guard option,html.sb-public-content-guard [contenteditable="true"]{-webkit-user-select:text;user-select:text}
    html.sb-public-content-guard img{-webkit-user-drag:none;user-drag:none}
    .portfolio-watermark{position:relative;isolation:isolate;overflow:hidden}
    .portfolio-watermark::after{content:"© STORYBOUND HOUSE";position:absolute;inset:0;display:grid;place-items:center;color:rgba(255,255,255,.65);text-shadow:0 1px 3px #000;font:600 clamp(9px,1vw,13px)/1.2 Arial,sans-serif;letter-spacing:.12em;rotate:-25deg;pointer-events:none;z-index:2}
    .sb-protection-toast{position:fixed;inset:auto 16px 24px;margin:0 auto;max-width:420px;width:max-content;padding:12px 18px;border:1px solid #c9a86a;border-radius:12px;background:#123b35;color:#fff;font:14px/1.5 Arial,sans-serif;box-shadow:0 8px 30px #0003;z-index:2147483647;pointer-events:none}
  `;
  document.head.append(css);
  const toast = document.createElement('div');
  toast.className = 'sb-protection-toast'; toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite'); toast.hidden = true;
  if ('showPopover' in toast) toast.setAttribute('popover', 'manual');
  document.body.append(toast);
  let timer;
  const enabled = () => !location.pathname.startsWith('/adminarea');
  const editable = node => node instanceof Element && !!node.closest('input,textarea,[contenteditable="true"]');
  function guardPage() {
    document.documentElement.classList.toggle('sb-public-content-guard', enabled());
  }
  function inform() {
    clearTimeout(timer); toast.hidden = false;
    toast.textContent = 'Content protected © Storybound House - Copying disabled';
    if (toast.showPopover && !toast.matches(':popover-open')) toast.showPopover();
    timer = setTimeout(() => { if (toast.hidePopover) toast.hidePopover(); toast.hidden = true; }, 2500);
  }
  function selectionProtected() {
    const selection = getSelection();
    return enabled() && !!selection && !selection.isCollapsed && !editable(document.activeElement);
  }
  for (const type of ['copy', 'cut']) document.addEventListener(type, event => {
    if (enabled() && selectionProtected()) { event.preventDefault(); inform(); }
  });
  document.addEventListener('contextmenu', event => {
    if (enabled() && event.target instanceof Element && !editable(event.target)) { event.preventDefault(); inform(); }
  });
  document.addEventListener('dragstart', event => {
    if (enabled() && event.target instanceof Element && (event.target instanceof HTMLImageElement || event.target.closest('img'))) { event.preventDefault(); inform(); }
  }, true);
  document.addEventListener('auxclick', event => {
    if (enabled() && event.target instanceof Element && (event.target instanceof HTMLImageElement || event.target.closest('img'))) { event.preventDefault(); inform(); }
  });
  document.addEventListener('keydown', event => {
    if (!enabled()) return;
    const key = event.key.toLowerCase(), modified = event.ctrlKey || event.metaKey;
    if ((modified && ['c','x'].includes(key) && selectionProtected()) || (modified && (key === 'u' || key === 's' || (event.shiftKey && key === 'i'))) || key === 'f12') {
      event.preventDefault(); inform();
    }
  });
  guardPage();
  window.addEventListener('popstate', guardPage);
})();
