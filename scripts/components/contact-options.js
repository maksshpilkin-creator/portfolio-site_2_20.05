import { appendText } from './dom.js';

export function renderChips(container, options) {
  const fieldName = container.dataset.chipName;
  const hiddenInput = fieldName ? document.createElement('input') : null;

  if (hiddenInput) {
    hiddenInput.type = 'hidden';
    hiddenInput.name = fieldName;
    hiddenInput.value = options[0] ?? '';
    container.append(hiddenInput);
  }

  options.forEach((option, index) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = index === 0 ? 'chip is-active' : 'chip';
    chip.textContent = option;
    chip.dataset.value = option;
    chip.setAttribute('role', 'radio');
    chip.setAttribute('aria-checked', String(index === 0));
    chip.tabIndex = index === 0 ? 0 : -1;
    container.append(chip);
  });
}

export function renderContactBenefits(container, items) {
  items.forEach((item) => {
    appendText(container, 'li', item);
  });
}
