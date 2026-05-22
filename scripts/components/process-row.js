import { appendText, setReveal } from './dom.js';

export function renderProcess(container, items) {
  items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'process__row';
    setReveal(row, item.delay);

    appendText(row, 'span', item.number, 'process__num');
    appendText(row, 'h3', item.title, 'process__name');
    appendText(row, 'p', item.description, 'process__text');
    container.append(row);
  });
}
