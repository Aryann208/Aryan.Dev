# Aryan.dev

Aryan Trivedi's portfolio. React 18, Create React App, CSS Modules/Sass and Framer Motion; npm is the package manager. The v2 preserves the original Cabinet Grotesk typography, purple/peach/crimson palette, split hero, looping technology panel and monogram.

## Develop and validate

```sh
npm ci
npm start
npm run lint
npm test -- --watchAll=false --runInBand
npm run build
npm run preview
```

Vercel remains compatible: Create React App preset, build command `npm run build`, output directory `build`. No environment variables or backend are needed. These changes are local until committed/pushed through the owner's deployment workflow.

## Content and resume

Shared links and resume URL live in `src/data/profile.js`. Experience, projects, and skills are maintained in their corresponding component data arrays.

The supplied one-page 2026 resume is integrated at `public/Aryan-Trivedi-Resume.pdf`, unchanged from the source PDF. Its identity, page count and SHA-256 match were verified. Aryan explicitly approved the resume's 90%/80% figures for public disclosure on October 14, 2026. Page copy uses the qualitative achievements. The unrelated old local PDF was removed.

For future updates, replace `public/Aryan-Trivedi-Resume.pdf`. Verify its identity, one-page length, HTTP status, `application/pdf` content type, and browser download after building. The shared ResumeLink updates navigation, hero, about, contact and resume-section actions. A tested email fallback is available if `profile.resume` is set to `null`.

No confidential client names, private screenshots or fabricated professional demo/source links are published. MacroIntel's image is a real capture of public demo-account analytics. Enterprise diagrams are labeled concept illustrations. TMDB retains its repository link; its demo was omitted after browser checks found failing upstream API calls.

## Browser verification

Python scripts use Playwright/Chromium in the QA environment, separate from production dependencies.

```sh
npm run preview
python scripts/visual-qa.py http://localhost:3001
python scripts/accessibility-qa.py http://localhost:3001
python scripts/audit-links.py
```

The visual script checks all eight requested widths, images, navigation, disclosures, keyboard focus, motion controls, console errors and horizontal overflow. The accessibility script runs axe-core with expanded disclosures and mobile navigation. Screenshots and JSON reports live in `docs/`. Original live and local screenshots are retained for comparison. See `docs/IMPLEMENTATION.md` and `docs/VALIDATION.md` for decisions and final results.

The app remains client rendered. Static metadata, social card, sitemap, robots directives, Person structured data and a useful visible no-JavaScript fallback improve sharing and discovery without changing frameworks.




