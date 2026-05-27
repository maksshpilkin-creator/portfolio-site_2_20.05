import { setExternalLink } from './dom.js';

export function bindTelegramLinks(href) {
  document.querySelectorAll('[data-telegram-link]').forEach((link) => {
    setExternalLink(link, href);
  });
}

export function renderNavigation(container, items, linkClassName) {
  container.querySelectorAll(`.${linkClassName}`).forEach((link) => link.remove());
  const insertBeforeElement = container.querySelector('.mobile-nav__cta');

  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = linkClassName;
    link.textContent = item.label;

    if (insertBeforeElement) {
      container.insertBefore(link, insertBeforeElement);
      return;
    }

    container.append(link);
  });
}
