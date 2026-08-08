import { readFile, writeFile } from "node:fs/promises";
import { URL } from "node:url";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/set-domain.mjs https://thecornersalamanca.com");
  process.exit(1);
}

let target;
try {
  target = new URL(input.includes("://") ? input : `https://${input}`);
} catch {
  console.error("Invalid domain. Example: https://thecornersalamanca.com");
  process.exit(1);
}

if (target.protocol !== "https:") {
  console.error("Use an HTTPS URL.");
  process.exit(1);
}

target.pathname = "/";
target.search = "";
target.hash = "";
const base = target.href;
const image = `${base}assets/images/social/the-corner-salamanca-og.jpg`;
const oldBasePattern = /https:\/\/joseantoniojimenezc3-code\.github\.io\/TheCornerSalamanca\//g;

const indexPath = new URL("../index.html", import.meta.url);
let index = await readFile(indexPath, "utf8");
index = index.replace(oldBasePattern, base);
index = index.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${base}">`);
index = index.replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${base}">`);
index = index.replace(/<meta property="og:image" content="[^"]+">/, `<meta property="og:image" content="${image}">`);
index = index.replace(/<meta name="twitter:image" content="[^"]+">/, `<meta name="twitter:image" content="${image}">`);
index = index.replace(/("url"\s*:\s*")[^"]+("\s*,)/, `$1${base}$2`);
index = index.replace(/("image"\s*:\s*")[^"]+("\s*,)/, `$1${image}$2`);
await writeFile(indexPath, index);

const sitemapPath = new URL("../sitemap.xml", import.meta.url);
let sitemap = await readFile(sitemapPath, "utf8");
sitemap = sitemap.replace(/<loc>[^<]+<\/loc>/, `<loc>${base}</loc>`);
await writeFile(sitemapPath, sitemap);

const robotsPath = new URL("../robots.txt", import.meta.url);
let robots = await readFile(robotsPath, "utf8");
robots = robots.replace(/Sitemap: .+/, `Sitemap: ${base}sitemap.xml`);
await writeFile(robotsPath, robots);

await writeFile(new URL("../CNAME", import.meta.url), `${target.hostname}\n`);

console.log(`Production domain configured: ${base}`);
console.log("Updated index.html, sitemap.xml, robots.txt and CNAME.");
