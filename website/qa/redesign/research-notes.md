# Footer, background and motion research

27 October 2026. Perplexity high research plus direct browser inspection of Linear and Vercel.

## Observed references

- [Linear](https://linear.app/): browser capture confirms a restrained dark footer, five clear navigation groups, thin separators and a separate legal row. Adopt the group hierarchy and quiet legal treatment, not its identity. Evidence: `linear-footer.jpg`.
- [Vercel](https://vercel.com/): browser capture confirms a spacious directory, compact column headings and a distinct utility row. Adopt alignment and consistent link rhythm. Evidence: `vercel-footer.jpg`. [Official design guidance](https://vercel.com/design.md) favors structural restraint; our faint evidence grid is a deliberate FreightClaimKit adaptation, not a claim about Vercel's live background.
- [Mercury](https://mercury.com/): research identified contrast and density changes between product and editorial sections. Exact current footer styling was only available through secondary captures; no animation behavior is asserted. Borrow pacing, not its warm palette.
- [Ramp](https://ramp.com/): research identified a substantial legal/disclosure layer. Keep concept-stage boundaries separated from navigation; do not invent certifications or contact details.
- [Instrument](https://www.instrument.com/home): large typography is a reference for confidence. The large FreightClaimKit footer wordmark is our own adaptation; the research does not verify an oversized Instrument footer wordmark.

## Applied direction

White hero and product index; silver document-grid evidence section; pale evergreen role and pilot sections; graphite ledger comparison; cool-gray rule section; deep forest footer. All existing card rotations removed. Footer receives its own opening statement, primary and secondary CTA, grouped navigation, readable concept notice, full-width wordmark and legal/motion controls.

## Motion references and boundaries

- [Lenis official integration](https://github.com/darkroomengineering/lenis): one GSAP ticker driver, scroll update connection, native touch, cleanup and anchor support. Applied conservative interpolation (0.085), wheel multiplier 0.9 and no touch smoothing.
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): one-shot reveals, responsive pinned chapter, refreshed geometry after assets/fonts, cleanup on route changes.
- [GSAP accessibility](https://gsap.com/resources/a11y/): full static content and native scrolling for reduced motion.
- [CSSPlugin](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/): clipping and transform primitives inform heading masks and transitions. Shutters use lightweight CSS transforms on two decorative panels; GSAP handles scroll storytelling. This is an authored effect, not a named official preset.

Shutter panels never hold essential copy. Focus gets the same treatment as hover. No effects imply completed evidence checks or real recovery.
