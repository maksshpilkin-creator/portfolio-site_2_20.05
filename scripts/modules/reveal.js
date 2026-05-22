export function initReveal() {
  const reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.setAttribute('data-revealed', 'true'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-revealed', 'true');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((element) => observer.observe(element));
}
