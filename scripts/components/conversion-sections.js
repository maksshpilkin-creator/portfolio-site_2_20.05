import { appendText, setReveal } from './dom.js';

export function renderConversionCards(container, items) {
  const isDark = container.classList.contains('conversion-grid--dark');

  items.forEach((item, index) => {
    const card = document.createElement('article');
    
    if (isDark) {
      card.className = 'conversion-card-shell';
      setReveal(card, (index % 4) + 1);

      const core = document.createElement('div');
      core.className = 'conversion-card-core conversion-card';

      if (item.marker) appendText(core, 'span', item.marker, 'conversion-card__marker');
      appendText(core, 'h3', item.title);
      appendText(core, 'p', item.description);

      card.append(core);
    } else {
      card.className = 'conversion-card';
      setReveal(card, (index % 4) + 1);

      if (item.marker) appendText(card, 'span', item.marker, 'conversion-card__marker');
      appendText(card, 'h3', item.title);
      appendText(card, 'p', item.description);
    }
    
    container.append(card);
  });
}

export function renderFaq(container, items) {
  items.forEach((item, index) => {
    const details = document.createElement('details');
    details.className = 'faq-item';
    setReveal(details, (index % 4) + 1);

    appendText(details, 'summary', item.question);
    appendText(details, 'p', item.answer);
    container.append(details);
  });
}
