import { appendText, setReveal } from './dom.js';

export function renderConversionCards(container, items) {
  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'conversion-card';
    setReveal(card, (index % 4) + 1);

    if (item.marker) appendText(card, 'span', item.marker, 'conversion-card__marker');
    appendText(card, 'h3', item.title);
    appendText(card, 'p', item.description);
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
