import { initChips } from './modules/chips.js';
import { initContactForm } from './modules/contact-form.js';
import { initCountUp } from './modules/count-up.js';
import { initCustomCursor } from './modules/cursor.js';
import { initFaqAnimation } from './modules/faq.js';
import { initHeader } from './modules/header.js';
import { initHeroGlow } from './modules/hero-glow.js';
import { getLocalizedContent, getSavedLocale, saveLocale } from './modules/locale.js';
import { renderContent } from './modules/render-content.js';
import { initReveal } from './modules/reveal.js';
import { initSmoothAnchorScroll } from './modules/smooth-scroll.js';

let currentLocale = getSavedLocale();

function getCurrentContent() {
  return getLocalizedContent(currentLocale);
}

function renderCurrentContent() {
  renderContent(getCurrentContent(), currentLocale);
}

function initLanguageSwitchers() {
  document.addEventListener('click', (event) => {
    const button = event.target instanceof Element
      ? event.target.closest('[data-locale-option]')
      : null;
    if (!(button instanceof HTMLButtonElement)) return;

    const nextLocale = button.dataset.localeOption;
    if (!nextLocale || nextLocale === currentLocale) return;

    currentLocale = saveLocale(nextLocale);
    renderCurrentContent();
    initReveal();
    initCountUp();
  });
}

renderCurrentContent();
initCustomCursor();
initFaqAnimation();
initHeader();
initReveal();
initSmoothAnchorScroll();
initCountUp();
initHeroGlow();
initChips();
initLanguageSwitchers();
initContactForm(getCurrentContent);
