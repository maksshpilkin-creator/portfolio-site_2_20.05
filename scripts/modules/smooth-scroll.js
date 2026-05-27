export function initSmoothAnchorScroll() {
  document.addEventListener('click', (event) => {
    const anchor = event.target instanceof Element
      ? event.target.closest('a[href^="#"]')
      : null;
    if (!(anchor instanceof HTMLAnchorElement)) return;

    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();

    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
}
