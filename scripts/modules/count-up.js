function formatNumber(element, value) {
  const prefix = element.getAttribute('data-count-prefix') || '';
  const suffix = element.getAttribute('data-count-suffix') || '';
  element.textContent = prefix + value + suffix;
}

function showFinalValues(numbers) {
  numbers.forEach((element) => {
    formatNumber(element, Number(element.getAttribute('data-count-target')) || 0);
  });
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateNumber(element, delay, duration) {
  const target = Number(element.getAttribute('data-count-target')) || 0;
  let startTime = null;

  function tick(timestamp) {
    if (startTime === null) startTime = timestamp + delay;

    const elapsed = Math.max(0, timestamp - startTime);
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.round(target * easeOut(progress));

    formatNumber(element, current);

    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function initCountUp() {
  const statsBlock = document.querySelector('[data-count-stats]');
  if (!statsBlock) return;

  const numbers = Array.from(statsBlock.querySelectorAll('[data-count-target]'));
  if (!numbers.length) return;

  const duration = 2000;
  const stagger = 150;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function startCountUp() {
    if (reducedMotion) {
      showFinalValues(numbers);
      return;
    }

    numbers.forEach((element, index) => {
      formatNumber(element, 0);
      animateNumber(element, index * stagger, duration);
    });
  }

  if (reducedMotion || !('IntersectionObserver' in window)) {
    showFinalValues(numbers);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      startCountUp();
      observer.disconnect();
    });
  }, { threshold: 0.3 });

  observer.observe(statsBlock);
}
