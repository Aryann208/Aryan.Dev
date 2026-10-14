# Portfolio v2 implementation

## Baseline and decisions

The existing app is React 18 / Create React App 5, npm lockfile, CSS Modules and Sass, with Framer Motion. Its identity is the purple `#422057`, peach `#f8dcc1`, crimson `#a41c3c`, white `#f4f4f4` palette; local Cabinet Grotesk typography; split hero and looping technology labels; oversized headings; alternating project blocks; and monogram footer. Keep these rather than migrate frameworks or add a UI kit.

Original public screenshots are in `docs/screenshots/before-{desktop,mobile}.png`. Local baseline captures use `before-local-*`.

Implementation sequence:
1. Keep the hero composition and motion personality; replace frontend-only positioning and add clear project/resume navigation.
2. Rewrite About, add compact professional Experience, and group Skills around the supplied engineering experience.
3. Feature MacroIntel with a public application capture, followed by accessible native disclosures for the authentication and document extraction case studies. Label conceptual visuals. Demote older work and audit its links.
4. Correct contact links, remove stale resume actions, add metadata/social image/structured data and static crawler content without a framework migration.
5. Validate production build, lint, behavioral tests, keyboard/motion, image loading and overflow at 320, 360, 375, 390, 430, 768, 1024 and 1440px. Inspect desktop and mobile screenshots.

## Content boundaries

Use the supplied employment dates and responsibilities. Exclude confidential client identities, private screenshots and invented demos. The original `conv.pdf` belongs to a different person and was removed. Aryan supplied his current one-page 2026 PDF and explicitly approved retaining its 90%/80% figures for public disclosure. The PDF is integrated unchanged; page copy uses qualitative achievements. The email fallback remains available for future missing-resume states.

This change targets the existing Vercel repository. It does not publish to another hosting service or push a deployment without authorization.
