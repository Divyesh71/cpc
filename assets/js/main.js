/* California Pain Consultants — navigation behavior (vanilla JS, progressive enhancement) */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var menuBtn = header.querySelector('.menu-toggle');
  var menu = document.getElementById('site-menu');
  var mqMobile = window.matchMedia('(max-width: 1200px)');
  var dropdownItems = Array.prototype.slice.call(header.querySelectorAll('.has-dropdown'));

  /* ---- Sticky header state ---- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Dropdowns (desktop click/keyboard + mobile accordion) ---- */
  function setOpen(item, open) {
    var btn = item.querySelector('.dd-toggle');
    item.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeAll(except) {
    dropdownItems.forEach(function (item) { if (item !== except) setOpen(item, false); });
  }

  dropdownItems.forEach(function (item) {
    var btn = item.querySelector('.dd-toggle');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = !item.classList.contains('is-open');
      if (!mqMobile.matches) closeAll(item); // one open at a time on desktop
      setOpen(item, willOpen);
    });
    // Close when keyboard focus leaves the dropdown (desktop)
    item.addEventListener('focusout', function (e) {
      if (mqMobile.matches) return;
      if (!item.contains(e.relatedTarget)) setOpen(item, false);
    });
  });

  document.addEventListener('click', function (e) {
    if (!mqMobile.matches && !e.target.closest('.has-dropdown')) closeAll();
  });

  /* ---- Mobile menu ---- */
  function focusables() {
    var list = menu.querySelectorAll('a[href], button:not([disabled])');
    return [menuBtn].concat(Array.prototype.filter.call(list, function (el) {
      return el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden';
    }));
  }
  function openMenu() {
    header.classList.add('menu-open');
    document.body.classList.add('menu-locked', 'menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    var first = menu.querySelector('a, button');
    if (first) first.focus();
  }
  function closeMenu(returnFocus) {
    header.classList.remove('menu-open');
    document.body.classList.remove('menu-locked', 'menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    closeAll();
    if (returnFocus) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () {
    if (header.classList.contains('menu-open')) closeMenu(true); else openMenu();
  });
  // Close after choosing a link in the menu
  menu.addEventListener('click', function (e) {
    if (mqMobile.matches && e.target.closest('a')) closeMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    var menuOpen = header.classList.contains('menu-open');
    if (e.key === 'Escape') {
      if (menuOpen) { closeMenu(true); return; }
      var openItem = dropdownItems.filter(function (i) { return i.classList.contains('is-open'); })[0];
      if (openItem) { setOpen(openItem, false); openItem.querySelector('.dd-toggle').focus(); }
      return;
    }
    if (e.key === 'Tab' && menuOpen && mqMobile.matches) { // focus trap
      var f = focusables();
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Reset state when crossing the breakpoint
  function onBreakpoint() { closeMenu(false); }
  if (mqMobile.addEventListener) mqMobile.addEventListener('change', onBreakpoint);
  else mqMobile.addListener(onBreakpoint);

  /* ---- FAQ accordion ---- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq-btn'), function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();

/* ---- Advanced treatments slider (autoplay, smooth, swipe, a11y) ---- */
(function () {
  'use strict';
  var root = document.querySelector('.tx-slider');
  if (!root) return;
  var track = root.querySelector('.tx-track');
  var slides = Array.prototype.slice.call(track.children);
  var dotsWrap = root.querySelector('.tx-dots');
  var playBtn = root.querySelector('.tx-play');
  var DELAY = 4500;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var index = 0, timer = null, userPaused = reduce, hover = false, visible = true, dots = [];

  function perView() { return parseInt(getComputedStyle(root).getPropertyValue('--tx-per'), 10) || 1; }
  function maxIndex() { return Math.max(0, slides.length - perView()); }
  function stepPx() { return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : 0; }

  function buildDots() {
    dotsWrap.innerHTML = ''; dots = [];
    for (var i = 0; i <= maxIndex(); i++) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'tx-dot'; b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      (function (n) { b.addEventListener('click', function () { go(n); restart(); }); })(i);
      dotsWrap.appendChild(b); dots.push(b);
    }
  }
  function render() {
    track.style.transform = 'translate3d(' + (-index * stepPx()) + 'px,0,0)';
    var pv = perView();
    slides.forEach(function (sl, i) {
      var inView = i >= index && i < index + pv;
      sl.setAttribute('aria-hidden', inView ? 'false' : 'true');
      Array.prototype.forEach.call(sl.querySelectorAll('a'), function (a) { a.tabIndex = inView ? 0 : -1; });
    });
    dots.forEach(function (d, i) {
      if (i === index) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
  }
  function go(n) {
    var max = maxIndex();
    index = n > max ? 0 : (n < 0 ? max : n); // wrap around
    render();
  }
  function tick() { if (!userPaused && !hover && visible && !document.hidden) go(index + 1); }
  function restart() { clearInterval(timer); timer = setInterval(tick, DELAY); }

  var nextBtn = root.querySelector('.tx-next'), prevBtn = root.querySelector('.tx-prev');
  if (nextBtn) nextBtn.addEventListener('click', function () { go(index + 1); restart(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { go(index - 1); restart(); });
  if (playBtn) {
    playBtn.addEventListener('click', function () {
      userPaused = !userPaused;
      root.classList.toggle('is-paused', userPaused);
      playBtn.setAttribute('aria-label', userPaused ? 'Start automatic sliding' : 'Pause automatic sliding');
    });
    if (userPaused) { root.classList.add('is-paused'); playBtn.setAttribute('aria-label', 'Start automatic sliding'); }
  }

  root.addEventListener('mouseenter', function () { hover = true; });
  root.addEventListener('mouseleave', function () { hover = false; });
  root.addEventListener('focusin', function (e) {
    hover = true;
    var sl = e.target.closest('.tx-slide');
    if (sl) {
      var i = slides.indexOf(sl);
      if (i < index) go(i); else if (i >= index + perView()) go(i - perView() + 1);
    }
  });
  root.addEventListener('focusout', function () { hover = false; });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.25 }).observe(root);
  }

  /* swipe / drag */
  var startX = null, dx = 0, baseX = 0, moved = false;
  track.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startX = e.clientX; dx = 0; moved = false; baseX = -index * stepPx();
  });
  window.addEventListener('pointermove', function (e) {
    if (startX === null) return;
    dx = e.clientX - startX;
    if (Math.abs(dx) > 6) { moved = true; track.classList.add('is-dragging'); }
    if (moved) track.style.transform = 'translate3d(' + (baseX + dx) + 'px,0,0)';
  });
  window.addEventListener('pointerup', function () {
    if (startX === null) return;
    track.classList.remove('is-dragging');
    if (moved && Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1)); else render();
    if (moved) restart();
    startX = null;
  });
  track.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { buildDots(); go(Math.min(index, maxIndex())); }, 120);
  });

  buildDots(); render(); restart();
})();

/* Meet The Doctor: count-up stats (starts from 0 when the section scrolls into view) */
(function () {
  var list = document.querySelector('.doc-stats');
  if (!list || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els = list.querySelectorAll('[data-count]');
  els.forEach(function (el) { el.textContent = '0'; });
  function run(el) {
    var end = +el.getAttribute('data-count'), t0 = null, dur = 1800;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function (en) {
    if (!en[0].isIntersecting) return;
    els.forEach(run);
    io.disconnect();
  }, { threshold: 0.4 });
  io.observe(list);
})();
