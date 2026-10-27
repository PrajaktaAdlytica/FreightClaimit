# FreightClaimKit · Claim Atlas

A responsive, animated company website and isolated synthetic claims workbench. The approved direction uses crisp white, emerald, silver and graphite; the cream background has been removed.

## Preview

- Development preview: http://127.0.0.1:4173/
- Production-bundle preview: http://127.0.0.1:4174/
- These are local previews, not public deployments.

## Delivered

- Branded navigation, logo, favicon, locally bundled Manrope and Newsreader fonts, five custom module illustrations and cargo/evidence hero art.
- 39 planned routes: home, five products, platform, capabilities, five role solutions, pricing, company, resources, contact, demo request, pilot, concept access, legal drafts and error recovery.
- Lenis smooth scrolling, GSAP hero sequence, directional scroll reveals, desktop horizontal evidence chapter, source maps, invoice cards, role explorer, hover/focus states and reduced-motion control.
- Ten synthetic case fixtures, filterable queue, FC-208 provenance and evidence tabs, reviewer acknowledgment, reason-required correction history and local JSON exports. Illustrative outcomes retain unknown values.
- Responsive mobile navigation, native horizontal evidence navigation, and desktop/mobile screenshots.
- Original research dossier at `/planning/index.html`, preserving the complete brief, coverage matrix, rule protocol and pilot worksheet.

## Scope and launch boundary

This is a frontend concept preview. Forms validate and create an editable local request draft; nothing is sent. Sign-in is an access concept and does not authenticate. No documents, payments, credentials, claim submissions or external messages are collected or sent. Reviewer changes reset when the view is reloaded. No operating service, recovery performance or live integration is represented.

Analytics and CRM are not connected. Before enabling them, finalize the privacy notice, consent and retention rules, service endpoints and accountable recipient. The intended event contract is in `analytics-contract.json`; successful form preview is never counted as a real buyer commitment.

A public launch also needs approved company/legal details, trademark/domain review, final pricing, accessibility and cross-browser testing, production hosting and custom-domain configuration. The GitHub source and static deployment branches are documented in the root README. Hosting and domain connection still require your Hostinger account setup.

## Development

Node.js and npm; `npm install`, `npm run dev`. Build with `npm run build`; verify hosting output with `npm run test:sites`. Vite outputs `dist/client`, plus the preserved Sites worker package. `vercel.json` supplies SPA routing for a later Vercel deployment; configure build command `npm run build` and output directory `dist/client`.

## Implementation map

- `src/App.jsx`: routes, navigation, motion and responsive menu.
- `src/Home.jsx`: narrative homepage and horizontal chapter.
- `src/components.jsx`: shared visuals, controls and diagrams.
- `src/Pages.jsx`: marketing, product, resource, form and access pages.
- `src/Workbench.jsx`: synthetic case workflow.
- `src/data/fixtures.json`: canonical ten-case dataset.
- `public/assets`: optimized generated illustrations; original masters in `source-assets`.
- `public/brand`: marks, favicon-related assets and font licenses.
- `qa` and `design-qa.md`: browser evidence and checks.

## Sources and licenses

Technical references: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [Lenis](https://github.com/darkroomengineering/lenis), [React Flow](https://reactflow.dev/), [Phosphor](https://phosphoricons.com/). Icon and diagram packages retain their package licenses; the approved brand mark is the custom Case Ribbon symbol. Fonts carry OFL license copies in `public/brand`. React Flow's development-only attribution reminder is not a runtime failure; its MIT license is retained in the dependency package.

Business research citations and uncertainty notes remain in the planning dossier. Generated cargo images are synthetic illustrations, not customer evidence or screenshots of an operating product.

## Footer/background refinement

Updated with a forest editorial footer, responsive oversized wordmark, differentiated evidence/role/rule/pilot backgrounds, straight cards, two-panel shutter states, heading-mask reveals, chapter indicators and reading progress. Research and QA are in `qa/redesign/`.
