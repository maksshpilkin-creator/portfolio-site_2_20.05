import { appendText, setExternalLink, setReveal } from './dom.js';

export function renderServices(container, items, telegramUrl) {
  items.forEach((item, index) => {
    const link = document.createElement('a');
    link.className = 'service-card conversion-card-shell';
    setReveal(link, item.delay);
    setExternalLink(link, telegramUrl);

    const core = document.createElement('div');
    core.className = 'conversion-card-core conversion-card';

    appendText(core, 'span', String(index + 1).padStart(2, '0'), 'conversion-card__index');
    appendText(core, 'span', item.number, 'conversion-card__marker');

    const signal = document.createElement('span');
    signal.className = 'conversion-card__signal';
    signal.setAttribute('aria-hidden', 'true');
    signal.append(document.createElement('span'), document.createElement('span'), document.createElement('span'));
    core.append(signal);

    appendText(core, 'h3', item.title);
    appendText(core, 'p', item.description);

    link.append(core);
    container.append(link);
  });
}
