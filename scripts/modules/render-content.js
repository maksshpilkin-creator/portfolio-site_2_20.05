import { renderStats, renderValues } from '../components/about-cards.js';
import { renderChips, renderContactBenefits } from '../components/contact-options.js';
import { renderConversionCards, renderFaq } from '../components/conversion-sections.js';
import { bindTelegramLinks, renderNavigation } from '../components/navigation.js';
import { renderPortfolio } from '../components/portfolio-card.js';
import { renderProcess } from '../components/process-row.js';
import { renderServices } from '../components/service-card.js';

export function renderContent(content) {
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

  bindTelegramLinks(content.telegramUrl);
  if (desktopNav) renderNavigation(desktopNav, content.navigation, 'header__link');
  if (mobileNav) renderNavigation(mobileNav, content.navigation, 'mobile-nav__link');
  if (portfolio) renderPortfolio(portfolio, content.portfolio);
  if (audiences) renderConversionCards(audiences, content.audiences);
  if (services) renderServices(services, content.services, content.telegramUrl);
  if (deliverables) renderConversionCards(deliverables, content.deliverables);
  if (stats) renderStats(stats, content.stats);
  if (values) renderValues(values, content.values);
  if (trust) renderConversionCards(trust, content.trust);
  if (process) renderProcess(process, content.process);
  if (faq) renderFaq(faq, content.faq);
  if (contactBenefits) renderContactBenefits(contactBenefits, content.contact.benefits);
  if (projectTypes) renderChips(projectTypes, content.contact.projectTypes);
  if (budgets) renderChips(budgets, content.contact.budgets);
}
