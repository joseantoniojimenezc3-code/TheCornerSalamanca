const FOCUSABLE = "button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])";

export const initGallery = () => {
  const dialog = document.querySelector("[data-gallery-dialog]");
  const triggers = [...document.querySelectorAll("[data-gallery-trigger]")];
  const image = dialog?.querySelector("[data-gallery-image]");
  const count = dialog?.querySelector("[data-gallery-count]");
  const closeButton = dialog?.querySelector("[data-gallery-close]");
  const previousButton = dialog?.querySelector("[data-gallery-previous]");
  const nextButton = dialog?.querySelector("[data-gallery-next]");

  if (!dialog || !image || !count || !closeButton || !previousButton || !nextButton || !triggers.length) return;

  let currentIndex = 0;
  let lastTrigger = null;

  const getSourceImage = (index) => triggers[index]?.querySelector("img");

  const updateTriggerLabels = () => {
    const language = document.documentElement.lang === "es" ? "es" : "en";
    triggers.forEach((trigger, index) => {
      const label = language === "es" ? "Abrir imagen" : "Open image";
      trigger.setAttribute("aria-label", `${label} ${index + 1} / ${triggers.length}`);
    });
  };

  const render = (index) => {
    currentIndex = (index + triggers.length) % triggers.length;
    const source = getSourceImage(currentIndex);
    if (!source) return;

    image.src = source.currentSrc || source.src;
    image.srcset = source.srcset || "";
    image.sizes = "min(92vw, 90rem)";
    image.alt = source.alt;
    count.textContent = `${currentIndex + 1} / ${triggers.length}`;
  };

  const open = (index, trigger) => {
    lastTrigger = trigger;
    render(index);
    document.body.classList.add("is-dialog-open");
    dialog.showModal();
    closeButton.focus({ preventScroll: true });
  };

  const close = () => {
    if (!dialog.open) return;
    dialog.close();
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => open(index, trigger));
  });

  closeButton.addEventListener("click", close);
  previousButton.addEventListener("click", () => render(currentIndex - 1));
  nextButton.addEventListener("click", () => render(currentIndex + 1));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      render(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      render(currentIndex + 1);
    }

    if (event.key === "Tab") {
      const focusable = [...dialog.querySelectorAll(FOCUSABLE)].filter((element) => !element.hasAttribute("disabled"));
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
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("is-dialog-open");
    image.removeAttribute("src");
    image.removeAttribute("srcset");
    if (lastTrigger instanceof HTMLElement) lastTrigger.focus({ preventScroll: true });
  });

  document.addEventListener("tcs:languagechange", () => {
    updateTriggerLabels();
    if (dialog.open) render(currentIndex);
  });

  updateTriggerLabels();
};
