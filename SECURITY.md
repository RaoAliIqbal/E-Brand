# Security and deployment

Implemented: strict same-origin checks and JSON-only bounded bodies on mutation APIs; login, enquiry, email-retry and analytics throttling; no built-in admin credentials; random signed expiring sessions bound to the configured credentials; HttpOnly/SameSite cookies (Secure in production); no-store admin API responses; anti-framing, MIME-sniffing, referrer, permissions and basic CSP protections; production HSTS. Stored enquiries are escaped for email and rendered as React text. Failed storage reads now fail closed instead of replacing the inbox. Analytics accepts UUID identities and retains at most 10,000 visitors and page views; totals therefore describe retained records.

Existing admin sessions must sign in again after this update. Changing the admin password or session secret invalidates sessions. Logout clears the browser cookie; a copied token remains valid until expiry or credential/secret rotation. There is no claim of malware immunity or a completed penetration test.

## Before hosting launch

- Set a unique long ADMIN_PASSWORD and a random ADMIN_SESSION_SECRET (at least 32 random bytes); keep them in private server environment settings. No credentials belong in public assets or git.
- Set NEXT_PUBLIC_SITE_URL to the exact HTTPS production origin. Redirect alternate hostnames to that origin. Enable HTTPS redirects, a managed WAF/bot protection, edge request-size limits and distributed rate limiting. The application's limiter is bounded but in-memory, per process, and resets on restart; it does not stop distributed denial of service.
- Set TRUSTED_PROXY_IP_HEADER only to a header the hosting proxy overwrites. Vercel uses x-vercel-forwarded-for automatically. Without a trusted address all visitors share fallback limits (including 3 enquiries / 10 minutes). Configure the proxy before opening the public site. Country headers are provider metadata, not authentication evidence.
- Keep the JSON inbox on private persistent storage outside public/, restrict filesystem access and enable encrypted backups. Use a database before running multiple server instances: the current write queue is single-process.
- Enable hosting-account MFA, malware scanning, dependency updates and access/error monitoring. Restore-test backups. This code does not scan the host operating system.
- Configure SMTP privately when available, verify a real notification and retry saved enquiries in admin.
- The current CSP blocks framing, plugins, external form destinations and foreign base URLs. It is deliberately not a script nonce policy; inline Next.js scripts and configured analytics still work. A future strict script policy needs a nonce/dynamic-rendering or hash strategy tested with all analytics tags.

Lenis is pinned to 1.3.11 from UNPKG with SHA-384 subresource integrity; CDN failure leaves native scrolling intact. The cursor uses an inline SVG, no external image or GSAP dependency. Touch pointers and reduced-motion users retain their native cursor; reduced motion disables scroll/reveal animations. Effects run only on public pages.

Checks: `node tests/security.test.cjs`, `npm run test:enquiries`, `npx tsc --noEmit`, `npm audit --omit=dev`.

References: [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html), [OWASP security headers](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html), [Lenis documentation](https://github.com/darkroomengineering/lenis).


## Content deterrents and reCAPTCHA

Portfolio cover wrappers use `.protected-content` and `.portfolio-watermark`. All public-page text selection, copy/cut, right-click menus, image dragging, and image middle-click actions are suppressed; form fields remain editable and the admin area retains normal interaction. Public Ctrl/Cmd+U, Ctrl/Cmd+S, Ctrl/Cmd+Shift+I and F12 are intercepted where browsers allow. Browser menus, disabled JavaScript, direct asset URLs, developer tools, downloaded images and screenshots bypass these deterrents. The watermark is an overlay, not burned into the original image; use burned-in previews if permanent watermarks are needed.

All enquiry forms and admin login use `website_hp` and reCAPTCHA v3 actions `enquiry` / `admin_login`. The backend checks Google's success flag, score >= 0.5, expected action, exact configured hostname, and challenge age <= 120 seconds, with an 8-second verification timeout. Google rejects reused tokens. Inputs are bounded, Unicode-normalized and stripped of non-printing control characters; manuscript text is never interpreted as HTML. React escapes it in admin and the mail renderer separately escapes HTML. Do not render this data through innerHTML.

Register v3 keys at https://www.google.com/recaptcha/admin/create. Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, private `RECAPTCHA_SECRET_KEY`, and `NEXT_PUBLIC_SITE_URL` to the canonical origin. Register the canonical hostname and localhost if developing locally; rebuild after changing the public key. Both absent in development permits local testing. Production, or a partially configured key pair, fails closed with 503. Missing keys therefore block production enquiries AND admin sign-in until configured. The secret must never be placed in HTML. Update the privacy notice for Google's verification service before launch.

The server permits 3 requests per trusted IP per 10 minutes (enquiries and login have separate buckets). Client localStorage counts attempts per browser/action for convenience and can be cleared; it is not an IP limit. Server limits remain per process and need a trusted proxy header plus edge/distributed enforcement before scaling. Rejected submissions also count to limit abuse. Other admin actions remain protected by sessions and origin checks, rather than reCAPTCHA on every dashboard action.

`public/demos/smart-protection.html` combines cursor, Lenis CDN, content protection, watermarks and a sample secure form in one file. Serve on the same origin as the backend and enter only the public site key in its meta tag. No standalone HTML can implement secret verification, authenticated persistence or authoritative IP limits. The actual application imports the same motion/protection script and shares typed form helpers.

CSP object/base/form directives and referrer policy have meta equivalents. Framing protection, HSTS, MIME-sniffing and Permissions-Policy remain real HTTP headers: unsupported meta tags would provide no protection.
