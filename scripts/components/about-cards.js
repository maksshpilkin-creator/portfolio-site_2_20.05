import { appendText } from './dom.js';

export function renderStats(container, items) {
  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'stat-card';

    const value = appendText(card, 'strong', item.value);
    if (Number.isFinite(item.target)) {
      value.dataset.countTarget = String(item.target);
      if (item.prefix) value.dataset.countPrefix = item.prefix;
      if (item.suffix) value.dataset.countSuffix = item.suffix;
    }

    appendText(card, 'span', item.label);
    appendText(card, 'p', item.description);
    container.append(card);
  });
}

export function renderValues(container, items) {
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'value-card';
    appendText(card, 'h3', item.title);
    appendText(card, 'p', item.description);
    container.append(card);
  });
}
