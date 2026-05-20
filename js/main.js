// === CUSTOM CURSOR ===
(function () {
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  // Dot follows mouse exactly
  // Ring follows with slight lag using lerp
  function lerp(a, b, t) { return a + (b - a) * t; }

  function updateRing() {
    ringX = lerp(ringX, mouseX, 0.12);
    ringY = lerp(ringY, mouseY, 0.12);
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(updateRing);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    ring.classList.remove('is-hidden');
    dot.classList.remove('is-hidden');
  });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => {
    ring.classList.add('is-hidden');
    dot.classList.add('is-hidden');
  });

  document.addEventListener('mouseenter', () => {
    ring.classList.remove('is-hidden');
    dot.classList.remove('is-hidden');
  });

  // Expand ring on interactive elements
  const interactiveSelectors = 'a, button, [role="button"], input, textarea, label, select';

  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });

  // Also handle dynamically added elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      ring.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      ring.classList.remove('is-hovering');
    }
  });

  // Start ring animation loop
  requestAnimationFrame(updateRing);
})();


// Header scroll state
(function () {
  var header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


// Header active section highlight
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.header__link[href^="#"]'));
  if (!links.length) return;

  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();


// Mobile navigation
(function () {
  var burger = document.getElementById('burger');
  var mobileNav = document.getElementById('mobile-nav');

  if (!burger || !mobileNav) return;

  function setOpen(isOpen) {
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.classList.toggle('open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  }

  burger.addEventListener('click', function () {
    setOpen(!mobileNav.classList.contains('open'));
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();


// Scroll reveal
(function () {
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.setAttribute('data-revealed', 'true');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-revealed', 'true');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();


// Smooth anchor scroll with fixed header offset
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var header = document.getElementById('header');
      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();


// About stats count-up
(function () {
  var statsBlock = document.querySelector('[data-count-stats]');
  if (!statsBlock) return;

  var numbers = Array.prototype.slice.call(statsBlock.querySelectorAll('[data-count-target]'));
  if (!numbers.length) return;

  var duration = 2000;
  var stagger = 150;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function formatNumber(el, value) {
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    el.textContent = prefix + value + suffix;
  }

  function showFinalValues() {
    numbers.forEach(function (el) {
      formatNumber(el, Number(el.getAttribute('data-count-target')) || 0);
    });
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateNumber(el, delay) {
    var target = Number(el.getAttribute('data-count-target')) || 0;
    var startTime = null;

    function tick(timestamp) {
      if (startTime === null) startTime = timestamp + delay;

      var elapsed = Math.max(0, timestamp - startTime);
      var progress = Math.min(elapsed / duration, 1);
      var current = Math.round(target * easeOut(progress));

      formatNumber(el, current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  function startCountUp() {
    if (reducedMotion) {
      showFinalValues();
      return;
    }

    numbers.forEach(function (el, index) {
      formatNumber(el, 0);
      animateNumber(el, index * stagger);
    });
  }

  if (reducedMotion || !('IntersectionObserver' in window)) {
    showFinalValues();
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      startCountUp();
      observer.disconnect();
    });
  }, { threshold: 0.3 });

  observer.observe(statsBlock);
})();


// Hero mouse glow
(function () {
  var glow = document.getElementById('heroGlow');
  var hero = document.querySelector('.hero');
  if (!glow || !hero) return;
  if (window.matchMedia('(hover: none)').matches) return;

  hero.addEventListener('mousemove', function (e) {
    var rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top = (e.clientY - rect.top) + 'px';
  });
})();


// Contact option chips
(function () {
  document.querySelectorAll('[data-chip-group]').forEach(function (group) {
    group.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        group.querySelectorAll('.chip').forEach(function (item) {
          item.classList.remove('is-active');
        });
        chip.classList.add('is-active');
      });
    });
  });
})();
