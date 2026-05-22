export function initChips() {
  document.querySelectorAll('[data-chip-group]').forEach((group) => {
    const chips = Array.from(group.querySelectorAll('.chip'))
      .filter((chip) => chip instanceof HTMLButtonElement);
    const hiddenInput = group.querySelector('input[type="hidden"]');

    function setActive(chip) {
      chips.forEach((item) => {
        const isActive = item === chip;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-checked', String(isActive));
        item.tabIndex = isActive ? 0 : -1;
      });

      if (hiddenInput instanceof HTMLInputElement) hiddenInput.value = chip.dataset.value || chip.textContent.trim();
      chip.focus({ preventScroll: true });
    }

    chips.forEach((chip, index) => {
      chip.addEventListener('click', () => setActive(chip));

      chip.addEventListener('keydown', (event) => {
        const nextKeys = ['ArrowRight', 'ArrowDown'];
        const previousKeys = ['ArrowLeft', 'ArrowUp'];
        if (![...nextKeys, ...previousKeys, 'Home', 'End'].includes(event.key)) return;

        event.preventDefault();
        if (event.key === 'Home') {
          setActive(chips[0]);
          return;
        }

        if (event.key === 'End') {
          setActive(chips[chips.length - 1]);
          return;
        }

        const direction = nextKeys.includes(event.key) ? 1 : -1;
        const nextIndex = (index + direction + chips.length) % chips.length;
        setActive(chips[nextIndex]);
      });
    });
  });
}
