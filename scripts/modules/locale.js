import { defaultLocale, siteContentByLocale, supportedLocales } from '../../data/site-content.js';

const storageKey = 'devbymax-locale';

function isSupportedLocale(locale) {
  return supportedLocales.includes(locale);
}

export function getSavedLocale() {
  try {
    const savedLocale = window.localStorage.getItem(storageKey);
    return isSupportedLocale(savedLocale) ? savedLocale : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function saveLocale(locale) {
  if (!isSupportedLocale(locale)) return defaultLocale;

  try {
    window.localStorage.setItem(storageKey, locale);
  } catch {
    return locale;
  }

  return locale;
}

export function getLocalizedContent(locale) {
  return siteContentByLocale[isSupportedLocale(locale) ? locale : defaultLocale];
}

export function getSupportedLocales() {
  return [...supportedLocales];
}
