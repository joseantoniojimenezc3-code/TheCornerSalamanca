const STORAGE_KEY = "tcs-language";
const SUPPORTED_LANGUAGES = new Set(["en", "es"]);

let translations = null;
let currentLanguage = "en";

const getByPath = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);

const normalizeLanguage = (language) => {
  const short = String(language || "").toLowerCase().slice(0, 2);
  return SUPPORTED_LANGUAGES.has(short) ? short : "en";
};

const getPreferredLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.has(saved)) return saved;
  } catch {
    // Storage can be unavailable in strict privacy contexts. Browser language remains a safe fallback.
  }

  return normalizeLanguage(navigator.language);
};

const translateNodes = (dictionary) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getByPath(dictionary, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getByPath(dictionary, element.dataset.i18nHtml);
    if (typeof value === "string") element.innerHTML = value;
  });

  ["ariaLabel", "alt", "title"].forEach((attributeKey) => {
    const selector = `[data-i18n-${attributeKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`;
    const attributeName = attributeKey === "ariaLabel" ? "aria-label" : attributeKey;

    document.querySelectorAll(selector).forEach((element) => {
      const datasetKey = `i18n${attributeKey[0].toUpperCase()}${attributeKey.slice(1)}`;
      const value = getByPath(dictionary, element.dataset[datasetKey]);
      if (typeof value === "string") element.setAttribute(attributeName, value);
    });
  });
};

const updateSeo = (dictionary) => {
  document.title = dictionary.seo.title;

  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogLocaleAlternate = document.querySelector('meta[property="og:locale:alternate"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');

  if (description) description.content = dictionary.seo.description;
  if (ogTitle) ogTitle.content = dictionary.seo.title;
  if (ogDescription) ogDescription.content = dictionary.seo.ogDescription;
  if (ogLocale) ogLocale.content = dictionary.seo.locale;
  if (ogLocaleAlternate) ogLocaleAlternate.content = dictionary.seo.alternateLocale;
  if (ogImageAlt && dictionary.seo.ogImageAlt) ogImageAlt.content = dictionary.seo.ogImageAlt;
  if (twitterTitle) twitterTitle.content = dictionary.seo.title;
  if (twitterDescription) twitterDescription.content = dictionary.seo.ogDescription;
  if (twitterImageAlt && dictionary.seo.ogImageAlt) twitterImageAlt.content = dictionary.seo.ogImageAlt;
};

const updateLanguageControls = (language) => {
  document.querySelectorAll("[data-language-button]").forEach((button) => {
    const isActive = button.dataset.languageButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const announceLanguage = (dictionary) => {
  const status = document.querySelector("[data-language-status]");
  if (!status) return;
  status.textContent = "";
  requestAnimationFrame(() => {
    status.textContent = dictionary.a11y.languageChanged;
  });
};

export const setLanguage = (language, { persist = true, announce = true } = {}) => {
  if (!translations) return;

  currentLanguage = normalizeLanguage(language);
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;
  translateNodes(dictionary);
  updateSeo(dictionary);
  updateLanguageControls(currentLanguage);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, currentLanguage);
    } catch {
      // Language switching still works when storage is blocked.
    }
  }

  document.dispatchEvent(new CustomEvent("tcs:languagechange", { detail: { language: currentLanguage } }));
  if (announce) announceLanguage(dictionary);
};

export const getLanguage = () => currentLanguage;

export const initI18n = async () => {
  try {
    const response = await fetch("data/i18n.json");
    if (!response.ok) throw new Error(`Translation request failed: ${response.status}`);
    translations = await response.json();
  } catch (error) {
    console.error(error);
    return currentLanguage;
  }

  currentLanguage = getPreferredLanguage();
  setLanguage(currentLanguage, { persist: false, announce: false });

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageButton));
  });

  return currentLanguage;
};
