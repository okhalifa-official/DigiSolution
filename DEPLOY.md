# Deploying DigiSolution to GoDaddy

The site is plain static files: no build step. Upload the **contents** of this `site/` folder (not the folder itself).

**No video files.** All motion (brand loop band, prompt cursor) is live CSS/JS, so there is no video folder to upload. Total first-load weight is about 25 KB of site files plus Google Fonts (Inter and IBM Plex Mono for the hero prompt), well inside any GoDaddy plan.

## Option A: cPanel File Manager
1. Sign in to GoDaddy > My Products > Web Hosting > **Manage** > **cPanel Admin**.
2. Open **File Manager** and go to `public_html` (or the document root of the digisolution.app domain if it is an add-on domain).
3. Remove any default placeholder `index.html`/`coming soon` files.
4. Zip the contents of `site/` (index.html, favicon.svg, robots.txt, sitemap.xml, assets/), click **Upload** in File Manager, upload the zip, then right-click it > **Extract**. Delete the zip afterwards.
5. Make sure `index.html` sits directly in `public_html`, not in a subfolder.

## Option B: FTP
1. In cPanel > **FTP Accounts**, create or reuse an account (note host, username, port 21).
2. Connect with FileZilla or Cyberduck and upload the contents of `site/` into `public_html`.

## Point the domain
- If digisolution.app is registered at GoDaddy: Domain Settings > **DNS** and set the `A` record for `@` to your hosting plan's IP (shown in cPanel sidebar), and `CNAME` `www` to `@`. Often this is automatic when the domain is attached to the hosting plan.
- If registered elsewhere: set the registrar's nameservers to GoDaddy's, or add an `A` record to the hosting IP.
- DNS can take from minutes up to 48 hours.

## SSL (required)
`.app` domains are on the HSTS preload list: browsers **only** load them over HTTPS, so the site will not open until SSL is active.
1. GoDaddy > Web Hosting > **Manage** > **SSL Certificates** (or cPanel > SSL/TLS Status / AutoSSL) and install a certificate for digisolution.app and www.digisolution.app.
2. Wait for it to issue, then load https://digisolution.app/ to confirm.
3. Optionally add to `public_html/.htaccess` to redirect www to the bare domain:
   ```
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^www\.digisolution\.app$ [NC]
   RewriteRule ^(.*)$ https://digisolution.app/$1 [R=301,L]
   ```

## Before launch checklist
- Make sure `support@digisolution.app` exists in GoDaddy (cPanel mailbox, email forwarding to your inbox, or Workspace email), or change the address in `index.html` and `assets/js/main.js`.
- Confirm https://digisolution.app/ loads, the favicon shows, and the Open Graph preview works (e.g. share the link in a chat).
- Optionally submit `https://digisolution.app/sitemap.xml` to Google Search Console.
