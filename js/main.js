import { initGallery } from "./gallery.js";
import { initHero } from "./hero.js";
import { initI18n } from "./i18n.js";
import { initMenu } from "./menu.js";
import { initNavigation } from "./navigation.js";
import { initReveals } from "./reveal.js";

const init = async () => {
  await initI18n();
  initHero();
  initGallery();
  initMenu();
  initNavigation();
  initReveals();

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
