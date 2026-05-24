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
    copy.className = 'portfolio-card__copy';

    if (item.signal) {
      appendText(copy, 'span', item.signal, 'portfolio-card__signal');
    }

    appendText(copy, 'h3', item.title);
    appendText(copy, 'p', item.type, 'portfolio-card__type');
    appendText(copy, 'p', item.description, 'portfolio-card__description');

    if (item.outcome || item.role || item.tags?.length) {
      const meta = document.createElement('div');
      meta.className = 'portfolio-card__meta';

      if (item.outcome) {
        const outcome = document.createElement('p');
        outcome.className = 'portfolio-card__outcome';
        appendText(outcome, 'span', 'Результат');
        outcome.append(document.createTextNode(item.outcome));
        meta.append(outcome);
      }

      if (item.role) {
        const role = document.createElement('p');
        role.className = 'portfolio-card__role';
        appendText(role, 'span', 'Роль');
        role.append(document.createTextNode(item.role));
        meta.append(role);
      }

      if (item.tags?.length) {
        const tags = document.createElement('ul');
        tags.className = 'portfolio-card__tags';
        item.tags.forEach((tag) => appendText(tags, 'li', tag));
        meta.append(tags);
      }

      copy.append(meta);
    }

    const cta = document.createElement('a');
    cta.textContent = 'Смотреть проект';
    setExternalLink(cta, item.url);

    body.append(copy, cta);
    card.append(imageLink, body);
    container.append(card);
  });
}
