export function initFaqAnimation() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new WeakMap();

  function getCollapsedHeight(details, summary) {
    const styles = window.getComputedStyle(details);
    const paddingTop = parseFloat(styles.paddingTop) || 0;
    const paddingBottom = parseFloat(styles.paddingBottom) || 0;
    const borderTop = parseFloat(styles.borderTopWidth) || 0;
    const borderBottom = parseFloat(styles.borderBottomWidth) || 0;

    return summary.offsetHeight + paddingTop + paddingBottom + borderTop + borderBottom;
  }

  function clearAnimation(details) {
    details.style.height = '';
    details.style.overflow = '';
    details.removeAttribute('data-animating');
    animations.delete(details);
  }

  function cancelCurrentAnimation(details) {
    const animation = animations.get(details);
    if (!animation) return;

    animation.onfinish = null;
    animation.cancel();
    animations.delete(details);
  }

  function animateDetails(details, fromHeight, toHeight, shouldClose) {
    details.style.height = `${fromHeight}px`;
    details.style.overflow = 'hidden';
    details.dataset.animating = shouldClose ? 'closing' : 'opening';

    const animation = details.animate(
      { height: [`${fromHeight}px`, `${toHeight}px`] },
      { duration: 360, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    );

    animations.set(details, animation);

    animation.onfinish = () => {
      if (shouldClose) details.open = false;
      clearAnimation(details);
    };
  }

  document.querySelectorAll('.faq-item').forEach((details) => {
    if (!(details instanceof HTMLDetailsElement)) return;

    const summary = details.querySelector('summary');
    if (!(summary instanceof HTMLElement)) return;

    summary.addEventListener('click', (event) => {
      if (reduceMotion.matches) return;

      event.preventDefault();
      const isClosing = details.dataset.animating === 'closing';
      const startHeight = details.offsetHeight;
      cancelCurrentAnimation(details);

      if (details.open && !isClosing) {
        animateDetails(details, startHeight, getCollapsedHeight(details, summary), true);
        return;
      }

      details.open = true;
      animateDetails(details, startHeight, details.scrollHeight, false);
    });
  });
}
