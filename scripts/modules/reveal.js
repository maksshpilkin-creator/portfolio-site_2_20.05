let revealObserver = null;

export function initReveal() {
  revealObserver?.disconnect();
  revealObserver = null;

  const reveals = document.querySelectorAll('[data-reveal]:not([data-revealed="true"])');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.setAttribute('data-revealed', 'true'));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-revealed', 'true');
      revealObserver?.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((element) => revealObserver?.observe(element));
}
