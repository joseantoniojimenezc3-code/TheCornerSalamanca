# Connect the final domain

The website is production-ready on GitHub Pages. Until a custom domain is purchased, SEO metadata points to the current GitHub Pages address.

## 1. Buy the domain

Recommended priority:

1. `thecornersalamanca.com`
2. `thecornersalamanca.es`

No separate hosting is required. GitHub Pages remains the host.

## 2. Configure the project for the domain

From the project root, run:

```bash
node scripts/set-domain.mjs https://YOUR-DOMAIN.com
```

This updates canonical/OG metadata, the sitemap and robots file, and creates the GitHub Pages `CNAME` file.

## 3. Commit and push

```bash
git add .
git commit -m "Configure production domain"
git push
```

## 4. GitHub Pages

Repository → **Settings → Pages → Custom domain** → enter the purchased domain → Save.

Enable **Enforce HTTPS** once GitHub validates the DNS records.

## 5. DNS

Use the DNS records shown by GitHub Pages / your registrar for the chosen domain. GitHub's Pages screen will indicate when the configuration is valid.

## 6. Replace public links

Once HTTPS works on the custom domain, use it in:

- Google Business Profile → Website
- Instagram bio
- printed/in-store QR codes
- any social profile links

Do not print the final QR until the custom domain has been tested on both Wi‑Fi and mobile data.
