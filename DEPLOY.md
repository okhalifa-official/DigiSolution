# Deploying DigiSolution

The site is plain static files with no build step, hosted on **GitHub Pages** from the `main` branch (root folder) at https://digisolution.app/.

## Publish a change
1. Commit your changes to `main`.
2. `git push origin main`.
3. GitHub Pages rebuilds automatically (usually within a minute or two). Pages are cached for about 10 minutes.

## Domain and SSL
- The custom domain `digisolution.app` is set in the repository's **Settings > Pages**. HTTPS is enforced and the certificate is managed by GitHub.
- `www.digisolution.app` redirects to `https://digisolution.app/` automatically.
- `.app` domains are on the HSTS preload list, so browsers only load them over HTTPS.

## Files that matter for SEO
- `index.html`: title, meta description, canonical, Open Graph tags, JSON-LD schema (Organization, WebSite, WebPage, ProfessionalService, FAQPage).
- `404.html`: custom not-found page (served by GitHub Pages for unknown URLs).
- `robots.txt`, `sitemap.xml`, `llms.txt`: crawler files. Update `lastmod` in `sitemap.xml` when the page content changes.
- `assets/og-image.png`: 1200x630 social preview image.
- `assets/icons/`: PNG favicon and Apple touch icon.

## Keep in sync
The FAQ answers in `index.html` are duplicated in the FAQPage JSON-LD in the `<head>`. If you change one, change the other.

## Before launch checklist
- Make sure `support@digisolution.app` exists and receives mail, or change the address in `index.html` and `assets/js/main.js`.
- Confirm https://digisolution.app/ loads, the favicon shows, and the Open Graph preview works (e.g. share the link in a chat).
- Submit `https://digisolution.app/sitemap.xml` in Google Search Console.
