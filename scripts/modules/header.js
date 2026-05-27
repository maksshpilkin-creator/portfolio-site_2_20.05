function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initActiveNav() {
  const links = Array.from(document.querySelectorAll('.header__link[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function setActive(id) {
    document.querySelectorAll('.header__link[href^="#"]').forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function initMobileNav() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');

  if (!burger || !mobileNav) return;

  const focusableSelector = 'a[href], button:not([disabled])';
  let previousFocus = null;

  function getFocusableElements() {
    return Array.from(mobileNav.querySelectorAll(focusableSelector))
      .filter((element) => element instanceof HTMLElement);
  }

  function setNavFocusable(isOpen) {
    getFocusableElements().forEach((element) => {
      element.tabIndex = isOpen ? 0 : -1;
    });
  }

  function setOpen(isOpen) {
    if (isOpen) previousFocus = document.activeElement;

    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    const openLabel = document.documentElement.dataset.menuOpenLabel || 'Открыть меню';
    const closeLabel = document.documentElement.dataset.menuCloseLabel || 'Закрыть меню';
    burger.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
    mobileNav.classList.toggle('open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('nav-open', isOpen);
    setNavFocusable(isOpen);

    if (isOpen) {
      requestAnimationFrame(() => getFocusableElements()[0]?.focus());
      return;
    }

    if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
  }

  setNavFocusable(false);

  burger.addEventListener('click', () => {
    setOpen(!mobileNav.classList.contains('open'));
  });

  mobileNav.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a') : null;
    if (target) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    const isOpen = mobileNav.classList.contains('open');
    if (!isOpen) return;

    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

export function initHeader() {
  initHeaderScroll();
  initActiveNav();
  initMobileNav();
}
