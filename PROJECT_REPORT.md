# The Corner Salamanca — Production Report

## Status

Version 1.0 / Phase 7 complete.

The site is a framework-free, mobile-first static website built with semantic HTML5, modular CSS and vanilla ES modules. It is ready for GitHub Pages and a future custom domain.

## Experience

- Editorial full-screen hero and branded storytelling sections.
- Brunch, specialty coffee and signature toast chapters.
- Data-driven integrated menu; no PDF required.
- Complete ES / EN switching with browser-language detection and saved preference.
- Six-image responsive gallery with an accessible keyboard/touch modal viewer.
- Visit section with address, verified opening-hour structure, directions, Google reviews, storefront photography and lazy-loaded map.
- Responsive branded footer with address, hours, navigation and Instagram.

## Performance

- No frontend framework or third-party JavaScript library.
- Responsive WebP photography.
- Hero preloaded and fetched at high priority.
- Lower-page photography and map lazy-loaded.
- Explicit image dimensions reduce layout shift.
- Native IntersectionObserver reveals.
- Reduced-motion support.
- Google Fonts restricted to the used families/weights and preconnected.

## SEO / sharing

- Language-aware title and descriptions.
- Canonical URL.
- Open Graph and Twitter large-image metadata.
- 1200×630 social sharing image.
- CafeOrCoffeeShop / Restaurant structured data.
- `robots.txt` and `sitemap.xml`.
- Branded 404 page.
- SVG/ICO favicon, Apple touch icon and web-app icons.

## Accessibility

- Semantic section hierarchy and landmarks.
- Skip link.
- Keyboard-operable mobile navigation and gallery.
- Focus restoration and focus trapping for modal UI.
- Minimum touch targets.
- Descriptive bilingual image alternatives.
- Language-change announcement.
- `prefers-reduced-motion` handling.

## Content maintenance

### Menu

Edit `data/menu.json`. Keep prices as strings with a decimal point, e.g. `"13.90"`. Both English and Spanish labels/descriptions live in the same item.

### Translations

Edit `data/i18n.json` for fixed interface/page copy.

### Gallery

The six gallery images are in the `#gallery` section of `index.html`. Keep `src`, `srcset`, width/height and bilingual alt keys consistent when replacing photography.

### Hours / address

Update all three locations if these change:

1. Visit section in `index.html`
2. Footer in `index.html`
3. Structured data in the `<head>` of `index.html`

### Instagram

Current account: `@thecornersalamanca`.

## Before publishing a future content change

1. Run the site through Live Server.
2. Test desktop and mobile.
3. Test ES and EN.
4. Open/close the mobile menu with keyboard and Escape.
5. Open the gallery and navigate with arrows / keyboard.
6. Verify Menu, Google Maps, Reviews and Instagram links.
7. Commit and push to `main`.

## Domain

See `DOMAIN_SETUP.md` after purchasing the final domain.

## Editorial refinement

- Reduced repeated “slow / unhurried” language across the homepage.
- Preserved the slower-morning idea only in the hero and philosophy.
- Rewrote Brunch, Coffee, Toasts, Menu, Gallery and Visit copy so each section communicates a distinct idea.
- Updated canonical production fallback URLs to the current GitHub Pages username.
