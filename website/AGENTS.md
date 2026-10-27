# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## FreightClaimKit decisions

- Selected visual: `../outputs/visual-directions/03-claim-atlas-crisp-white-v2.png`.
- Preserve Claim Atlas composition, crisp white surfaces, emerald cargo objects, silver evidence layers, graphite contrast chapters. Avoid cream backgrounds and generic blue gradients.
- Use strong explanatory graphics with every substantial text section, Lenis and GSAP scroll storytelling, directional reveals, and the horizontal evidence chapter. Keep reduced-motion, keyboard and mobile alternatives.
- Maintain all five proposed products and all research-stage disclosures. No real claimant uploads, filing, payments or credential collection.
- Brand is FreightClaimKit; older Freight Trestle references belong to historical research only.

## User refinement — 27 October 2026
- Supersedes the original direction where needed: stronger researched footers and differentiated backgrounds.
- All cards must stay straight, including CTA cards. No decorative card rotation or hover tilt.
- Refine Lenis/GSAP pacing and add shutter hover reveals to navigable cards, with keyboard and reduced-motion equivalents.

## Browser comments — section restructuring
- Hero must have controlled headline wrapping and a compact, deliberate hierarchy at the 556px browser width.
- Evidence walkthrough cards need source-specific graphics and prominent visual states, not enlarged text-only document mockups.
- Invoice comparison must use readable source/value summaries. Do not shrink full tables to illegible text on mobile; stack readable ledger cards.

## Latest material direction
User rejected pale gray/white backgrounds, checker patterns and generic styling. Use matte evergreen/ink, mineral-green reading surfaces and restrained copper. No repeating line grids, dot matrices, cream or glowing blobs. Keep original data and existing navigation/motion behavior. Logo options remain unselected.

Brand selection: user selected Case Ribbon option 03. Use public/brand/logo-* and symbol-* SVG paths. Do not revert to cube icon or previous concept marks.
