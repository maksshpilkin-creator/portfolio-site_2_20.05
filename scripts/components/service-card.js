import { appendText, setExternalLink, setReveal } from './dom.js';

export function renderServices(container, items, telegramUrl) {
  items.forEach((item) => {
    const link = document.createElement('a');
    link.className = 'service-card';
    setReveal(link, item.delay);
    setExternalLink(link, telegramUrl);

    appendText(link, 'span', item.number);
    appendText(link, 'h3', item.title);
    appendText(link, 'p', item.description);
    container.append(link);
  });
}
