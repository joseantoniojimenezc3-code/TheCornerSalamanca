export const initHero = () => {
  const hero = document.querySelector("[data-hero]");
  const scrollIndicator = document.querySelector("[data-hero-scroll]");

  if (!hero || !scrollIndicator) return;

  const heroImage = hero.querySelector("img");
  const revealImage = () => requestAnimationFrame(() => hero.classList.add("is-ready"));

  if (!heroImage || heroImage.complete) {
    revealImage();
  } else {
    heroImage.addEventListener("load", revealImage, { once: true });
    heroImage.addEventListener("error", revealImage, { once: true });
  }

  const updateScrollIndicator = () => {
    const threshold = Math.min(hero.offsetHeight * 0.18, 160);
    scrollIndicator.classList.toggle("is-dismissed", window.scrollY > threshold);
  };

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateScrollIndicator();
        ticking = false;
      });
    },
    { passive: true },
  );

  updateScrollIndicator();
};
