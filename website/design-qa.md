# FreightClaimKit intro QA

Date: 2026-10-28
Source: /Users/prajaktagaikwad/Downloads/ChatGPT Image 27 Oct 2026, 23_15_07.png
Scope: animated homepage introduction and transition to the existing hero.

## Visual comparison
Reference and browser capture were opened together for comparison. The top scene of the supplied storyboard is the visual target; the lower four storyboard thumbnails are production notes, not website sections. Desktop capture: qa/intro-desktop.png, 1480 × 800, assembled scene at frame 239. Mobile capture: qa/intro-mobile.png, 390 × 844, reduced-motion final frame.

Preserved white canvas, evergreen headline, copper/glass evidence panels, emerald cargo container, marble base, supplied logo, left copy/right artwork hierarchy, bottom playback controls, and synthetic-data label. Independently generated assets allow the documents to enter separately. Manrope and Phosphor controls reuse the site typography/icon system. Mobile stacks copy over the scene and preserves the three document panels.

Iteration 1: desktop headline wrapped to three lines; reduced desktop font to 82px and kept each phrase together. Iteration 2: mobile invoice panel clipped; reduced mobile scene scale and shifted it left. Recaptured both fixed layouts. Studio font resolution error repaired using a bundled relative font path.

## Behavior verified in browser
- Full-motion playback reaches frame 299; automatically scrolls to hero top (0px viewport offset), navbar becomes visible.
- Navbar hidden and unavailable during intro.
- Pause, replay, keyboard seeking, and motion toggle operate.
- Reduced motion reaches frame 299 with scrollY 0 and navbar hidden; Continue moves to hero and focuses it.
- Mobile width 390: document scrollWidth 390, no horizontal overflow; all artwork and controls remain visible.
- Website browser console: no errors captured.
- Remotion Studio opens the registered desktop, mobile, and reduced-motion compositions after font fix.
- Production website build passes; Studio TypeScript check passes.

## Limits and remaining polish
The scene uses animated raster layers, not physically simulated 3D. The vault enters as a whole asset; its shelves are not individually articulated. Cast shadows/reflections and connector paths differ from the flat reference board. These are visual polish follow-ups, not interaction blockers. Build reports an existing large JavaScript chunk warning; no deployment or MP4 export was performed.

## Follow-up: intermediate-frame correction

The user identified a hard horizontal cut in the early vault reveal. The earlier QA did not catch this at the two-second frame. Removed the clip-path entirely and replaced the long rise with a short whole-object entrance. The vault is fully opaque before the exceptions phase. Reduced document travel and size changes, tightened the panel positions, and placed warnings next to their associated sources.

Rechecked frames 60 (2 seconds), 120 (4 seconds), and 269 (late assembly), plus 390 × 844 mobile at frame 120. Compared the supplied failure screenshot with the repaired browser view. No hard cropping of the vault remains; no horizontal overflow at mobile width. Captures: qa/intro-revised-4s.png and qa/intro-revised-mobile.png. Production build passes. Canonical composition synced to Studio.

final result: passed
