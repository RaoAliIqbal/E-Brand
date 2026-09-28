# Deploy Storybound House with cPanel Setup Node.js App

This project needs a running Node.js server. A static `public_html` upload will not run the forms or admin APIs.

## Application settings

- Use Node.js 20.9 or newer (Node.js 22 if offered).
- Set Application mode to **Production**.
- Set Application URL to the root of `https://storyboundhouse.com/`.
- Keep the Application root outside `public_html`, such as `storybound-house` in the cPanel home directory.
- Set Application startup file to `app.js`.
- Deploy the GitHub repository `RaoAliIqbal/E-Brand` into the Application root. For a private repository, use an SSH deploy key or the host's private Git integration.
- Install dependencies (`npm ci` via Terminal, or **Run npm install** in Setup Node.js App), then run the `build` script (`npm run build` via Terminal or **Run JS Script**). Start or restart the application after a successful build.

The startup file listens on the `PORT` supplied by Passenger. Do not set a fixed public port.

## Private application environment

Configure these in Setup Node.js App, before building. Do not commit a production `.env` file or put it inside `public_html`.

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://storyboundhouse.com` (must match the browser origin exactly) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key registered for `storyboundhouse.com` |
| `RECAPTCHA_SECRET_KEY` | Matching reCAPTCHA v3 secret key |
| `ADMIN_USERNAME` | Chosen production admin username |
| `ADMIN_PASSWORD` | New, strong production password |
| `ADMIN_SESSION_SECRET` | Random value of at least 32 characters |
| `ADMIN_DATA_FILE` | Absolute, writable persistent path outside the application directory, e.g. `/home/CPANEL_USER/storybound-data/admin-data.json` |
| `SMTP_HOST` | `mail.storyboundhouse.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@storyboundhouse.com` |
| `SMTP_PASSWORD` | Current password for the sender mailbox, set privately after rotating the password shared in chat |
| `SMTP_FROM` | `info@storyboundhouse.com` |

`NEXT_PUBLIC_*` values are included in the browser build. Set them before `npm run build`, then rebuild if they change. Keep the other values server-side. Leave `TRUSTED_PROXY_IP_HEADER` unset unless the hosting proxy is confirmed to replace that header on every incoming request.

The data file stores enquiries and admin analytics. Keep its directory across deployments, ensure the Node.js app user can write to it, and include it in hosting backups. The file store is intended for one application instance.

## Before accepting live enquiries

1. Confirm the domain has valid HTTPS and opens the Node.js application at `/`.
2. Confirm `info@storyboundhouse.com` can authenticate to SMTP over SSL/TLS on port 465. Check the domain's SPF, DKIM, and DMARC records in cPanel Email Deliverability.
3. Confirm `sales@storyboundhouse.com`, `support@storyboundhouse.com`, and `contact@storyboundhouse.com` receive mail. The two configured Gmail addresses should also receive notifications.
4. Submit one test enquiry from each of the contact page, footer form, free quote popup, 70% popup, and 85% popup. Check the correct admin tab, the saved details, and the email status. Confirm delivery in the recipient inboxes; SMTP acceptance alone is not proof of inbox delivery.
5. Test `/adminarea` login and reload it to confirm enquiries remain available. Check that the persistent data file is backed up.

Do not call the forms live until the reCAPTCHA keys and SMTP sender are configured and these tests pass.
