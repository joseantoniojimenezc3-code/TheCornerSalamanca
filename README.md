# The Corner Salamanca

Production-ready website for The Corner Salamanca — brunch, specialty coffee and drinks in Barrio de Salamanca, Madrid.

## Stack

- HTML5
- modular CSS3
- vanilla JavaScript ES modules
- JSON content for menu and translations
- GitHub Pages compatible

No Bootstrap, Tailwind, React, Vue, Angular, jQuery or external UI library is used.

## Run locally

Open the repository folder in VS Code and use **Live Server → Go Live**.

Do not test the site through a `file://` URL because ES modules and JSON fetches require an HTTP server.

## Main structure

```text
assets/
  icons/                 Favicons, touch icons and app icons
  images/
    originals/           Untouched source photography
    optimized/           Responsive WebP photography
    social/              Social sharing artwork
css/                     Design system and page styling
js/                      Navigation, i18n, menu, gallery and motion modules
data/
  menu.json              Integrated bilingual menu
  i18n.json              Fixed bilingual website copy
  media.json             Photography inventory
scripts/
  set-domain.mjs         One-command custom-domain metadata setup
docs/                    Photography audit
index.html               Main website
404.html                 Branded not-found page
robots.txt               Crawler policy
sitemap.xml              Current public URL sitemap
site.webmanifest         Browser/app metadata
DOMAIN_SETUP.md           Final custom-domain instructions
PROJECT_REPORT.md         Maintenance and production notes
```

## Final feature set

- Premium editorial mobile-first layout.
- Responsive navigation with accessible full-screen mobile menu.
- Brunch, coffee and signature-toast storytelling.
- Integrated menu loaded from `data/menu.json`.
- Persistent ES / EN language selector.
- Six-image editorial gallery with accessible full-screen viewer.
- Visit section with address, opening hours, directions, Google Reviews and embedded map.
- Instagram integration for `@thecornersalamanca`.
- Responsive footer with address and hours.
- Responsive WebP images and optimized social preview image.
- SEO metadata, Open Graph, Twitter cards and structured data.
- `robots.txt`, sitemap, branded 404 page and full favicon set.
- Reduced-motion support and keyboard accessibility.

## Publishing

The project is ready for GitHub Pages now. After purchasing the final domain, follow `DOMAIN_SETUP.md`.
