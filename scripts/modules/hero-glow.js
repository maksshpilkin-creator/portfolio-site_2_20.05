export function initHeroGlow() {
  const glow = document.getElementById('heroGlow');
  const hero = document.querySelector('.hero');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!glow || !hero || !finePointer.matches || reduceMotion.matches) return;

  let frameId = 0;
  let x = 0;
  let y = 0;

  function renderGlow() {
    glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    frameId = 0;
  }

  hero.addEventListener('mousemove', (event) => {
    if (!(event instanceof MouseEvent)) return;
    const rect = hero.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    if (!frameId) frameId = requestAnimationFrame(renderGlow);
  }, { passive: true });

  hero.addEventListener('mouseenter', () => {
    hero.classList.add('is-glow-active');
  });

  hero.addEventListener('mouseleave', () => {
    hero.classList.remove('is-glow-active');
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
  });
}
