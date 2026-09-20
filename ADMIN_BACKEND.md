# Storybound House admin backend

The protected dashboard is available at `/adminarea`.

## Required production environment variables

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET` — use at least 32 random characters
- `ADMIN_DATA_FILE` — optional path for the persistent JSON data file

The development credentials are stored in the ignored `.env.local` file. Configure the same variables in the production host rather than committing credentials to source control.

## Data persistence

The built-in store writes enquiries, browser visitors, and page views to `data/admin-data.json`. This is suitable for a single persistent Node.js server. On a serverless host, configure `ADMIN_DATA_FILE` on a mounted persistent volume or replace `lib/admin-store.ts` with a managed database adapter before production launch.

## Analytics behavior

- Visitors receive random browser and session IDs in local/session storage.
- A page view is recorded after navigation.
- A heartbeat updates the current page every 30 seconds while the tab is visible.
- A visitor is considered live when seen within the last two minutes.
- Country, region, and city use deployment-provided headers when available.
- Admin pages are excluded from tracking.
- The most recently observed proxy-provided IP is stored for each visitor and displayed in the activity tables.

## Contact enquiries

The contact page, footer form, both offer popups, and free quote popup submit to `/api/contact`. Enquiries appear in the dashboard with `new`, `in-progress`, `resolved`, and `archived` statuses.

## 70% discount customers

The admin dashboard shows popup enquiries in the dedicated **70% discount customers** section, with search, status filtering, full enquiry details, and status updates. The popup submits `campaign: ghostwriting-70-off` through `/api/contact`; the server stores this with the contact record. Existing records with service `Ghostwriting — 70% offer` are also included. These contacts are excluded from the general contact inbox and remain included in the overall enquiry totals.

## Admin tabs and timed coupon

The right-side tabs switch between Popup enquiries (70% offers), **85% discount entries**, Lead inbox, and Live activity (analytics, active visitors, and paginated recent page views). On narrow screens the menu moves above the content.

The 85% offer appears after 15 seconds on each public-page visit. After dismissal it reopens after 20 seconds on the same page; submitting successfully stops automatic reopening for that page visit. It waits while another dialog is open or the page is hidden and is excluded from admin pages. The sticky footer’s Activate your coupon now button opens it immediately. Requests are saved under `ghostwriting-85-off`; no automatic coupon email is sent by this implementation.

## Visitor location and last IP

Analytics stores the latest IP from the hosting proxy headers and shows it in Live activity and Recent page views. The deployment proxy must strip client-supplied forwarding/location headers and set its own trusted values. Supported country headers include Vercel, Cloudflare, CloudFront, and `x-country-code`. Country names are decoded server-side. Local/private addresses show `Local network`; absent geolocation is `Unavailable`. A self-hosted deployment must supply country headers from its own geolocation setup. No visitor IP is sent to an external lookup service. Older visits without recorded IPs show `Not recorded` unless the same visitor later provides an IP. These values are analytics metadata, not authentication evidence.


## Enquiry notification emails

All five forms save the enquiry before attempting SMTP notification. The 70% and 85% submissions appear in their respective tabs; contact-page, footer, and free-quote submissions appear in Lead inbox. Source page, form source, service, and complete contact details are included in notification emails. The visitor is the Reply-To address, while the From address is the authorized SMTP sender.

Each new enquiry notifies exactly these recipients:

- sales@storyboundhouse.com
- support@storyboundhouse.com
- arao3960@gmail.com
- arao.dev3960@gmail.com
- contact@storyboundhouse.com

Set these server-side variables privately in `.env.local` for development and the hosting environment for production, then restart the server:

- `SMTP_HOST`: the outgoing mail server supplied by your email host
- `SMTP_PORT`: `465` for implicit TLS, or `587` for required STARTTLS
- `SMTP_USER`: the authenticated mailbox username
- `SMTP_PASSWORD`: its SMTP password or app password
- `SMTP_FROM`: the sender mailbox authorized by that account, without a display name

See `.env.example` for placeholders. Never use `NEXT_PUBLIC_` for these credentials. No SMTP account is configured in this workspace yet, so real notification delivery is not active.

The dashboard shows the saved email status and offers a retry. Partial failures retry only recipients the server did not accept; a fully accepted notification is not sent again. Concurrent retries for one enquiry are blocked for five minutes. An SMTP timeout can leave delivery uncertain, so manual retry can produce a duplicate in that case. "Email accepted by mail server" means SMTP accepted the message, not confirmed inbox delivery. No automatic coupon email is sent to the visitor.

Run `npm run test:enquiries` for isolated persistence, classification, recipient, failure, retry, and escaping tests. Tests use a simulated mail transport and never send real email or alter the live inbox. SMTP behavior follows [Nodemailer’s SMTP documentation](https://nodemailer.com/smtp).

## Homepage buttons

- The ownership banner’s Free estimate link opens `/contact`.
- Get a free quote opens the shared contact form in a modal, saved as `quote-popup`.
- Activate your coupon now opens the 85% popup; View 70% off pricing opens the 70% popup.
