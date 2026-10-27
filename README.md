# FreightClaimKit

Responsive freight-claims evidence concept website and synthetic workbench, with an animated Remotion intro.

- `website/`: React/Vite source, illustrations, vector brand assets, synthetic fixtures, planning content, and QA evidence.
- `intro-video/`: editable desktop, portrait, and reduced-motion video compositions.
- `outputs/`: design directions, brand masters, and planning artifacts.
- `work/`: source dossier generation and verification scripts.
- `HOSTINGER.md`: deployment instructions for regular PHP/HTML web hosting.
- `QA-REPORT.md`: final verification results and known launch limitations.

## Local development

```sh
cd website
npm ci
npm run dev
```

Production build: `npm run build`. Static web root: **website/dist/client/** (not dist/server).

## Branches

`main` contains source and project deliverables. `hostinger` contains only the compiled public website, ready to deploy directly into `public_html`. The GitHub Actions workflow rebuilds and updates `hostinger` when website source changes on `main`. Hostinger itself does not need Node.js or a build command.

## Current product scope

Research-stage concept, not an operating claims service. Forms produce local drafts and do not send enquiries; sign-in does not authenticate. No real documents, payments, filing, settlement, or recovery guarantees. Synthetic demo corrections are local to the view and reset on reload. Search indexing remains disabled intentionally until launch approval and final company/legal information are supplied.
