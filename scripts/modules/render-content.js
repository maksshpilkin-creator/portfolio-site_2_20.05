import { renderStats, renderValues } from '../components/about-cards.js';
import { renderChips, renderContactBenefits } from '../components/contact-options.js';
import { renderConversionCards, renderFaq } from '../components/conversion-sections.js';
import { bindTelegramLinks, renderNavigation } from '../components/navigation.js';
import { renderPortfolio } from '../components/portfolio-card.js';
import { renderProcess } from '../components/process-row.js';
import { renderServices } from '../components/service-card.js';

function clearContainer(container) {
  container.replaceChildren();
}

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element instanceof HTMLMetaElement) element.content = value;
}

function renderStaticCopy(content, locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.menuOpenLabel = content.ui.menuOpen;
  document.documentElement.dataset.menuCloseLabel = content.ui.menuClose;
  document.title = content.meta.title;

  setMetaContent('meta[name="description"]', content.meta.description);
  setMetaContent('meta[property="og:title"]', content.meta.title);
  setMetaContent('meta[property="og:description"]', content.meta.description);
  setMetaContent('meta[property="og:url"]', content.meta.url);
  setMetaContent('meta[property="og:image"]', content.meta.image);
  setMetaContent('meta[name="twitter:title"]', content.meta.title);
  setMetaContent('meta[name="twitter:description"]', content.meta.description);
  setMetaContent('meta[name="twitter:image"]', content.meta.image);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && content.static[key]) element.textContent = content.static[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    if (key && content.static[key]) element.innerHTML = content.static[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (key && content.static[key]) element.setAttribute('placeholder', content.static[key]);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria-label');
    if (key && content.static[key]) element.setAttribute('aria-label', content.static[key]);
  });

  const burger = document.getElementById('burger');
  if (burger) {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-label', isOpen ? content.ui.menuClose : content.ui.menuOpen);
  }

  document.querySelectorAll('[data-locale-option]').forEach((button) => {
    const isActive = button.getAttribute('data-locale-option') === locale;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function syncMobileNavFocus(container) {
  const isOpen = container.getAttribute('aria-hidden') !== 'true';
  container.querySelectorAll('a[href], button:not([disabled])').forEach((element) => {
    if (element instanceof HTMLElement) element.tabIndex = isOpen ? 0 : -1;
  });
}

export function renderContent(content, locale = 'ru') {
  const desktopNav = document.querySelector('[data-render="desktop-nav"]');
  const mobileNav = document.querySelector('[data-render="mobile-nav"]');
  const portfolio = document.querySelector('[data-render="portfolio"]');
  const audiences = document.querySelector('[data-render="audiences"]');
  const services = document.querySelector('[data-render="services"]');
  const deliverables = document.querySelector('[data-render="deliverables"]');
  const stats = document.querySelector('[data-render="stats"]');
  const values = document.querySelector('[data-render="values"]');
  const trust = document.querySelector('[data-render="trust"]');
  const process = document.querySelector('[data-render="process"]');
  const faq = document.querySelector('[data-render="faq"]');
  const contactBenefits = document.querySelector('[data-render="contact-benefits"]');
  const projectTypes = document.querySelector('[data-render="project-types"]');
  const budgets = document.querySelector('[data-render="budgets"]');

  renderStaticCopy(content, locale);
  bindTelegramLinks(content.telegramUrl);
  if (desktopNav) renderNavigation(desktopNav, content.navigation, 'header__link');
  if (mobileNav) {
    renderNavigation(mobileNav, content.navigation, 'mobile-nav__link');
    syncMobileNavFocus(mobileNav);
  }
  if (portfolio) {
    clearContainer(portfolio);
    renderPortfolio(portfolio, content.portfolio, content.ui);
  }
  if (audiences) {
    clearContainer(audiences);
    renderConversionCards(audiences, content.audiences);
  }
  if (services) {
    clearContainer(services);
    renderServices(services, content.services, content.telegramUrl);
  }
  if (deliverables) {
    clearContainer(deliverables);
    renderConversionCards(deliverables, content.deliverables);
  }
  if (stats) {
    clearContainer(stats);
    renderStats(stats, content.stats);
  }
  if (values) {
    clearContainer(values);
    renderValues(values, content.values);
  }
  if (trust) {
    clearContainer(trust);
    renderConversionCards(trust, content.trust);
  }
  if (process) {
    clearContainer(process);
    renderProcess(process, content.process);
  }
  if (faq) {
    clearContainer(faq);
    renderFaq(faq, content.faq);
  }
  if (contactBenefits) {
    clearContainer(contactBenefits);
    renderContactBenefits(contactBenefits, content.contact.benefits);
  }
  if (projectTypes) {
    clearContainer(projectTypes);
    renderChips(projectTypes, content.contact.projectTypes);
  }
  if (budgets) {
    clearContainer(budgets);
    renderChips(budgets, content.contact.budgets);
  }
}
