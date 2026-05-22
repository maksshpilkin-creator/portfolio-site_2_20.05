import { appendText, setExternalLink, setReveal } from './dom.js';

export function renderPortfolio(container, items) {
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'portfolio-card';
    setReveal(card, item.delay);

    const imageLink = document.createElement('a');
    imageLink.className = 'portfolio-card__image';
    imageLink.setAttribute('aria-label', `Смотреть проект ${item.title}`);
    setExternalLink(imageLink, item.url);

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.sizes = '(max-width: 768px) 100vw, 50vw';
    imageLink.append(image);

    const body = document.createElement('div');
    body.className = 'portfolio-card__body';

    const copy = document.createElement('div');
    appendText(copy, 'h3', item.title);
    appendText(copy, 'p', item.type, 'portfolio-card__type');
    appendText(copy, 'p', item.description, 'portfolio-card__description');

    const cta = document.createElement('a');
    cta.textContent = 'Смотреть проект';
    setExternalLink(cta, item.url);

    body.append(copy, cta);
    card.append(imageLink, body);
    container.append(card);
  });
}
