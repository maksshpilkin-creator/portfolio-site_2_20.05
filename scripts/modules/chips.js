export function initChips() {
  function getChips(group) {
    return Array.from(group.querySelectorAll('.chip'))
      .filter((chip) => chip instanceof HTMLButtonElement);
  }

  function setActive(group, chip) {
    const chips = getChips(group);
    const hiddenInput = group.querySelector('input[type="hidden"]');

    chips.forEach((item) => {
      const isActive = item === chip;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-checked', String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    if (hiddenInput instanceof HTMLInputElement) hiddenInput.value = chip.dataset.value || chip.textContent.trim();
    chip.focus({ preventScroll: true });
  }

  document.addEventListener('click', (event) => {
    const chip = event.target instanceof Element ? event.target.closest('.chip') : null;
    const group = chip instanceof HTMLButtonElement ? chip.closest('[data-chip-group]') : null;
    if (group instanceof HTMLElement) setActive(group, chip);
  });

  document.addEventListener('keydown', (event) => {
    const chip = event.target instanceof HTMLButtonElement && event.target.classList.contains('chip')
      ? event.target
      : null;
    const group = chip?.closest('[data-chip-group]');
    if (!(group instanceof HTMLElement) || !chip) return;

    const nextKeys = ['ArrowRight', 'ArrowDown'];
    const previousKeys = ['ArrowLeft', 'ArrowUp'];
    if (![...nextKeys, ...previousKeys, 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    const chips = getChips(group);
    const currentIndex = chips.indexOf(chip);

    if (event.key === 'Home') {
      setActive(group, chips[0]);
      return;
    }

    if (event.key === 'End') {
      setActive(group, chips[chips.length - 1]);
      return;
    }

    const direction = nextKeys.includes(event.key) ? 1 : -1;
    const nextIndex = (currentIndex + direction + chips.length) % chips.length;
    setActive(group, chips[nextIndex]);
  });
}
