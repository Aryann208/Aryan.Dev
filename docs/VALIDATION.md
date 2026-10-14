# Portfolio v2 validation

Validated on October 14, 2026 in the existing Windows checkout. Source remains local; no Git push or Vercel production deployment was performed.

## Delivered

- Full Stack Engineer positioning, project and resume CTAs, corrected social/email links.
- Rewritten About; professional Experience for Techolution and Atticus AI; five grouped skill categories; hiring-focused Contact.
- MacroIntel as the flagship personal project with a real demo-account analytics capture and verified public source link.
- Enterprise Authentication and AI Document Extraction case studies with native keyboard-accessible disclosures and labeled concept illustrations.
- Earlier Work retains all four projects. TMDB's demo button was omitted after real browser checks found API timeouts and a `/NaN` 404; its repository remains linked. Other demos rendered successfully in the initial browser audit.
- Supplied 2026 one-page resume integrated unchanged at `public/Aryan-Trivedi-Resume.pdf`. Explicit approval received for the PDF's 90%/80% figures. Page copy uses qualitative achievements.
- Static SEO/social metadata, actual PNG share image, branded icons, canonical, sitemap, robots, factual structured data and a useful no-JavaScript fallback.

The original Cabinet typography, purple/peach/crimson palette, split hero, technology marquee, alternating project compositions and monogram remain recognizable. No UI kit, framework migration or production dependency was added. Existing Framer Motion uses its lighter animation feature bundle; unused legacy components were retained and their lint issues corrected.

## Checks

| Check | Result |
| --- | --- |
| `CI=true npm run build` | Passed, optimized build |
| `npm run lint` | Passed, zero errors/warnings in source |
| `CI=true npm test -- --watchAll=false --runInBand` | 2 suites, 3 tests passed |
| `git diff --check` | Passed |
| Chromium viewport checks | 320, 360, 375, 390, 430, 768, 1024, 1440px passed |
| Horizontal page overflow | None at all eight widths |
| Images | All 12 loaded successfully at every width |
| Navigation | Targets exist; menus close after navigation and Escape; back-to-top works |
| Keyboard | Skip link moves focus into main; native disclosures toggle using Enter; menu Escape restores focus |
| Motion | Reduced-motion CSS and Framer behavior checked; explicit pause/resume works |
| Case studies | All three open/close; all expanded together at 320px without overflow |
| Browser errors | Zero console errors and zero uncaught page errors |
| Resume | Five links, HTTP 200, `application/pdf`, successful browser download and correct filename |
| Resume integrity | Source, public asset, built asset and downloaded bytes match; one page |
| axe-core 4.10.3 | Zero automated violations at 390/1440px, including WCAG 2.1 A/AA rules |

The resume SHA-256 is `dad93234d7380dfa45b517efacbb90b1462d97634b61a68b94c7cce587db3bb7`.

Axe leaves gradient labels, overlaid illustration regions and decorative glyph contrast for manual review. These were visually inspected and their underlying color pairs checked; minimum tested contrast was 4.71:1. This is a bounded automated/manual review, not a claim of formal accessibility certification. See `manual-contrast-review.json`.

## Performance and SEO

Final Lighthouse 12.8.2 runs use the built app, a local preview with gzip and hashed-asset cache headers, and Chrome. These are local lab results, not field measurements or a deployed Vercel audit.

| Lighthouse category | Mobile, simulated throttling | Desktop |
| --- | ---: | ---: |
| Performance | 73 | 99 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First contentful paint | 1.5 s | 0.4 s |
| Largest contentful paint | 2.7 s | 0.6 s |
| Total blocking time | 1,040 ms | 60 ms |
| Cumulative layout shift | 0.004 | 0.002 |

The JavaScript bundle is **83.25 kB gzip**, down from 95.49 kB in the initial implementation after using Framer's animation-only features; CSS is 7.01 kB gzip. Below-the-fold images load lazily, images reserve dimensions, unused font declarations were removed, and fonts use `font-display: swap`.

Mobile simulated CPU throttling still identifies initial style/layout work and blocking time as performance headroom. The existing animation character and framework were preserved. The portfolio is functional at every requested phone width, but the mobile performance score should not be described as perfect. The original uncompressed local run is recorded separately in `lighthouse-before-summary.json`; it is not an apples-to-apples production performance comparison.

## Screenshots and evidence

- Original live: [desktop](screenshots/before-desktop.png), [mobile](screenshots/before-mobile.png).
- Original local: [desktop](screenshots/before-local-desktop.png), [mobile](screenshots/before-local-mobile.png).
- Final complete page: [desktop](screenshots/after-1440.png), [mobile](screenshots/after-390.png).
- Final hero: [desktop](screenshots/after-desktop-hero.png), [mobile](screenshots/after-mobile-hero.png).
- Final projects: [desktop](screenshots/after-desktop-projects.png), [mobile](screenshots/after-mobile-projects.png).
- All case studies expanded: [320px](screenshots/after-320-case-studies-open.png).
- Other viewport captures use `screenshots/after-{width}.png`.

Long project-only captures suppress fixed navigation during the capture to avoid browser screenshot stitching artifacts. Full-page and hero captures retain navigation. Some captures use reduced motion for deterministic comparison; the normal animation path was tested separately.

Raw evidence: `visual-qa.json`, `accessibility-qa.json`, `manual-contrast-review.json`, `link-audit.json`, `demo-browser-audit.json`, and `lighthouse-{mobile,desktop}.report.{html,json}`.

## Deployment readiness and limits

Ready to deploy using the existing Vercel Create React App setup: `npm run build`, output `build`. No runtime environment variables are required. No additional assets or disclosure decisions remain outstanding.

- No push, live deployment or production-domain verification was performed.
- Browser coverage is Chromium on Windows with real rendering at emulated viewport widths; physical iOS/Android and Safari were not tested.
- The app remains client rendered; static metadata and no-JavaScript content improve discovery, while social previews can be fetched without executing React.
- LinkedIn blocks automated HTTP verification with status 999; the supplied canonical profile URL is retained. Other external links were checked for reachability, with the older demos also checked for initial browser rendering.
- The existing toolchain reports an outdated Browserslist database notice. It does not prevent lint, tests or the strict production build.
