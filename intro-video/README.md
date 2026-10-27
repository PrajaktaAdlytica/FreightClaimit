# FreightClaimKit evidence intro

A ten-second Remotion composition integrated into the homepage through @remotion/player. Desktop, mobile, and reduced-motion compositions are available.

## Preview

Website: http://127.0.0.1:4174/
Studio: http://localhost:3001/EvidenceIntro

Run `npm run dev` in this directory to sync the canonical website composition and assets, then open Studio. Run `npm run sync` after editing website/src/video/IntroComposition.jsx. The website handles pause/seek/replay/skip, motion preference, navbar visibility, and the Lenis transition. Studio contains the artwork sequence only.

Canonical code: ../website/src/video/IntroComposition.jsx
Player integration: ../website/src/Intro.jsx
Styling: ../website/src/intro.css
QA: ../website/design-qa.md

## Story

0–2 seconds: three source documents arrive from different directions.
2–5 seconds: POD uncertainty and invoice discrepancy appear.
5–8 seconds: evidence panels settle around the complete glass vault and cargo container.
8–10 seconds: assembled case holds with a slight pullback; website then glides to hero.
Reduced motion uses opacity changes and waits for Continue instead of automatic scrolling.

## Artwork provenance

Selected reference: /Users/prajaktagaikwad/Downloads/ChatGPT Image 27 Oct 2026, 23_15_07.png
Four new transparent PNG layers were generated with the image generation tool in the selected white, evergreen, copper, and glass art direction. No real claimant or customer photographs are used.

- assets/intro-vault.png: glass architectural evidence vault, copper fittings, evergreen cargo container, dark green marble plinth, transparent background.
- assets/intro-bol.png: BOL source-linked glass panel, fictional freight photograph, synthetic document rows and FC-208 marker.
- assets/intro-pod.png: POD review-required glass panel, fictional loading dock, unresolved signature, copper connector.
- assets/intro-invoice.png: invoice value-mismatch glass panel, synthetic $2,880 and $2,640 comparison, unresolved $240 discrepancy.

Assets are copied from ../website/public/assets/ into public/assets/ by the sync script. The supplied website brand SVG is reused. The web experience is an interactive Remotion animation; an MP4 has not been exported.
