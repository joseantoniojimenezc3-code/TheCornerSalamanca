const SELECTORS = {
  header: "[data-site-header]",
  panel: "[data-nav-panel]",
  open: "[data-nav-open]",
  close: "[data-nav-close]",
};

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export const initNavigation = () => {
  const header = document.querySelector(SELECTORS.header);
  const panel = document.querySelector(SELECTORS.panel);
  const openButton = document.querySelector(SELECTORS.open);
  const closeButton = document.querySelector(SELECTORS.close);
  const main = document.querySelector("main");

  if (!header || !panel || !openButton || !closeButton) return;

  const desktopQuery = window.matchMedia("(min-width: 64rem)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sectionLinks = [...document.querySelectorAll(".desktop-nav a[href^='#'], .mobile-nav a[href^='#']")];
  const sectionIds = [...new Set(sectionLinks.map((link) => link.getAttribute("href")?.slice(1)).filter(Boolean))];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  const setActiveSection = (id) => {
    sectionLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const visibleSections = new Map();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.intersectionRatio);
          else visibleSections.delete(entry.target.id);
        });

        if (!visibleSections.size) return;
        const [activeId] = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
        setActiveSection(activeId);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  const backgroundElements = [header, main].filter(Boolean);
  let lastFocusedElement = null;
  let closeTimer = null;

  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  const finishClose = () => {
    panel.hidden = true;
    panel.removeAttribute("data-state");
  };

  const closeMenu = ({ restoreFocus = true, immediate = false } = {}) => {
    if (panel.hidden) return;

    window.clearTimeout(closeTimer);
    panel.setAttribute("data-state", "closing");
    openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-nav-open");
    backgroundElements.forEach((element) => {
      element.removeAttribute("inert");
      element.removeAttribute("aria-hidden");
    });

    if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }

    if (immediate || reducedMotionQuery.matches) {
      finishClose();
      return;
    }

    closeTimer = window.setTimeout(finishClose, 450);
  };

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    lastFocusedElement = document.activeElement;
    panel.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-nav-open");
    backgroundElements.forEach((element) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });

    requestAnimationFrame(() => {
      panel.setAttribute("data-state", "open");
      closeButton.focus();
    });
  };

  const trapFocus = (event) => {
    if (event.key !== "Tab" || panel.hidden) return;

    const focusable = [...panel.querySelectorAll(FOCUSABLE)].filter(
      (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true",
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", () => closeMenu());
  panel.addEventListener("keydown", trapFocus);
  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu({ restoreFocus: false, immediate: true });
  });

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setHeaderState();
        ticking = false;
      });
    },
    { passive: true },
  );

  setHeaderState();
};
