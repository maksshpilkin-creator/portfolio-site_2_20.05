export function appendText(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

export function setExternalLink(element, href) {
  element.href = href;
  element.target = '_blank';
  element.rel = 'noopener';
}

export function setReveal(element, delay) {
  element.setAttribute('data-reveal', '');
  if (delay) element.dataset.delay = String(delay);
}
