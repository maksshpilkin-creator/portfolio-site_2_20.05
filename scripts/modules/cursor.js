export function initCustomCursor() {
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!ring || !dot || !finePointer.matches || reduceMotion.matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  let frameId = 0;
  let hasPosition = false;

  document.body.classList.add('has-custom-cursor');
  ring.classList.add('is-hidden');
  dot.classList.add('is-hidden');

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function stopRing() {
    if (!frameId) return;
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  function updateRing() {
    ringX = lerp(ringX, mouseX, 0.12);
    ringY = lerp(ringY, mouseY, 0.12);
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    if (Math.abs(ringX - mouseX) > 0.1 || Math.abs(ringY - mouseY) > 0.1) {
      frameId = requestAnimationFrame(updateRing);
      return;
    }

    frameId = 0;
  }

  function scheduleRingUpdate() {
    if (!frameId) frameId = requestAnimationFrame(updateRing);
  }

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (event.target instanceof Element) {
      const faqItem = event.target.closest('.faq-item');

      if (faqItem instanceof HTMLElement) {
        const rect = faqItem.getBoundingClientRect();
        faqItem.style.setProperty('--faq-hover-x', `${event.clientX - rect.left}px`);
        faqItem.style.setProperty('--faq-hover-y', `${event.clientY - rect.top}px`);
      }
    }

    if (!hasPosition) {
      ringX = mouseX;
      ringY = mouseY;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      hasPosition = true;
    }

    dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    ring.classList.remove('is-hidden');
    dot.classList.remove('is-hidden');
    scheduleRingUpdate();
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    ring.classList.add('is-hidden');
    dot.classList.add('is-hidden');
    ring.classList.remove('is-hovering', 'is-faq-hovering');
    dot.classList.remove('is-faq-hovering');
    stopRing();
  });

  document.addEventListener('mouseenter', () => {
    ring.classList.remove('is-hidden');
    dot.classList.remove('is-hidden');
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopRing();
  });

  const interactiveSelectors = 'a, button, [role="button"], input, textarea, label, select, .faq-item';
  const faqSelector = '.faq-item';

  document.addEventListener('mouseover', (event) => {
    if (!(event.target instanceof Element)) return;

    if (event.target.closest(interactiveSelectors)) ring.classList.add('is-hovering');
    if (event.target.closest(faqSelector)) {
      ring.classList.add('is-faq-hovering');
      dot.classList.add('is-faq-hovering');
    }
  });

  document.addEventListener('mouseout', (event) => {
    if (!(event.target instanceof Element)) return;

    const nextTarget = event.relatedTarget instanceof Element ? event.relatedTarget : null;
    const hoveredInteractive = event.target.closest(interactiveSelectors);

    if (hoveredInteractive && !nextTarget?.closest(interactiveSelectors)) ring.classList.remove('is-hovering');

    const faqItem = event.target.closest(faqSelector);
    if (faqItem && !nextTarget?.closest(faqSelector)) {
      ring.classList.remove('is-faq-hovering');
      dot.classList.remove('is-faq-hovering');
    }
  });

}
