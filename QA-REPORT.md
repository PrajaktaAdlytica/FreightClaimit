# FreightClaimKit final QA — 28 October 2026

## Passed

- Production build: Vite 6.4.5.
- Existing Sites hosting tests: 4/4 passed; preserved worker packaging.
- Website npm dependency audit: zero reported vulnerabilities after compatible patch updates.
- Browser responsive sweep: 33 routes × 390×844, 768×1024 and 1440×900 = 99 checks. No page-width overflow or broken loaded images; one H1 per route. Raw results: `website/qa/final-responsive-audit.json`. Offscreen lazy images are not all covered by that image check.
- Mobile navigation opens, changes routes and closes correctly.
- Pilot form enforces required fields and prepares a clearly labeled local draft; it does not pretend to send anything.
- Demo queue blocked filter and FC-208 search return expected records.
- Reviewer acknowledgment, reason-required unit-value correction and decision history work. Synthetic comparison changes from $2,880 to $2,640, with the original preserved and no recovery estimate implied.
- Settled mobile product hero has clean wrapping/gutters and white background. Desktop source/reviewer workbench inspected; screenshot in `website/qa/final-dossier-desktop.png`.
- Apache test of the exact compiled package: homepage and deep product/case routes return HTML 200; missing asset returns 404. Evidence: `website/qa/apache-routing.json`.
- Earlier intro regression captures remain in `website/qa/intro-revised-4s.png` and `intro-revised-mobile.png`.

## Limits and follow-ups

- Browser QA used the in-app browser; this is not a claim of exhaustive Safari/Firefox/device testing or formal accessibility certification.
- The main JavaScript chunk produces Vite's size advisory (~563 kB, ~169 kB gzip). Additional route splitting can improve initial-load performance; build succeeds.
- No real email/form backend, authentication, analytics, payments, document uploads or claims submission. This is an honest concept preview, not an operating claims service.
- Search indexing remains disabled. Domain-specific metadata and final legal/company information need launch review.
- Hostinger account deployment, domain/DNS and SSL must be completed in the user's hPanel; no public-hosting claim is made.

## Release layout

`main` is editable source and project deliverables. `hostinger` is the compiled static web root, updated by GitHub Actions. Generated dependencies, caches, duplicate archive exports and third-party research captures are excluded from source control. See `HOSTINGER.md` for setup and validation.
