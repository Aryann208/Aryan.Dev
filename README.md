# Aryan.dev

Aryan Trivedi's portfolio. React 18, Create React App, CSS Modules/Sass and Framer Motion; npm is the package manager. The v2 preserves the original Cabinet Grotesk typography, purple/peach/crimson palette, split hero, looping technology panel and monogram.

## Develop and validate

Use Node.js **24.x**, as declared in `package.json`. Vercel no longer accepts this project's old 18.x selection.
The strict production build and source lint check were verified with Node.js 24.21.0 after updating this pin.

```sh
npm ci
npm start
npm run lint
npm test -- --watchAll=false --runInBand
npm run build
npm run preview
```

Vercel: select **24.x** under **Project Settings → Build and Deployment → Node.js Version**, use the Create React App preset, build command `npm run build`, and output directory `build`. The repository's `engines.node` pin also selects Node 24 for the next deployment. Deploy the commit containing this pin; redeploying an older commit does not include the change. No environment variables or backend are needed. Local changes take effect after being committed/pushed through the owner's deployment workflow.

## Content and resume

Shared links and resume URL live in `src/data/profile.js`. Experience, projects, and skills are maintained in their corresponding component data arrays.

All five resume links use the shared Google Drive viewer URL in `profile.resume`, opening in a new tab with a "View resume (PDF)" label. Keep the Drive file shared as **Anyone with the link → Viewer** so recruiters can open it without signing in. Aryan explicitly approved the resume's 90%/80% figures for public disclosure on October 14, 2026. Page copy uses the qualitative achievements. The verified one-page PDF is also retained as an unlinked repository asset.

For future updates, replace the file in Drive while retaining its sharing URL, or update `profile.resume` to a new public link. Verify access in a signed-out browser. The shared ResumeLink updates navigation, hero, about, contact and resume-section actions. External viewer links do not use the HTML download attribute. A tested email fallback is available if `profile.resume` is set to `null`.

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




