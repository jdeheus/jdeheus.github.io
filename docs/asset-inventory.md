# Asset Inventory

This rebuild keeps the site static and no-build. Production pages load shared data from `site-data.js`, shared behavior from `script.js`, modal behavior from `lightbox.js`, and styles from `styles.css`.

## Production Pages

- `index.html`: landing page with hero, senior-product-designer card, and five linked ticket-style case study cards.
- `about.html`: about timeline page with live-site portrait/workspace image, company logos, and off-the-clock card.
- `contact.html`: mailto-based contact intake page with required name, email, and message fields.
- `case-studies/pwc-audit.html`: PwC Audit case study.
- `case-studies/onengine.html`: ONEngine case study.
- `case-studies/omnicell-benchmarking.html`: Omnicell Benchmarking case study.
- `case-studies/omnicell-scorecards.html`: Omnicell Scorecards case study.
- `case-studies/ford-credit.html`: Ford Credit case study.

## Local Assets

- `assets/images/pwc-old-work-order-list.png`: PwC section 03, caption `Link references - Old version`.
- `assets/images/pwc-proposed-overview.png`: PwC section 03, caption `Link Reference - Proposed`.
- `assets/images/pwc-initial-flow.jpg`: PwC section 03, caption `Initial design for Audit.`
- `assets/images/pwc-figma-make-one.png`: PwC section 05, caption `Utilizing Figma Make to quickly iterate on Audit screens`.
- `assets/vendor/photoswipe/photoswipe.css`
- `assets/vendor/photoswipe/photoswipe.esm.min.js`
- `assets/vendor/photoswipe/photoswipe-lightbox.esm.min.js`
- `docs/jonathan-de-heus-resume.pdf`: two-page resume PDF regenerated from the Paper resume frames.
- `docs/qa-screenshots/resume-page1-paper-crop.png`: cropped Paper source image used for resume PDF page 1.
- `docs/qa-screenshots/resume-page2-paper-crop.png`: cropped Paper source image used for resume PDF page 2.
- `docs/qa-screenshots/resume-pdf-render-page1.png`: rendered QA check of final resume PDF page 1.
- `docs/qa-screenshots/resume-pdf-render-page2.png`: rendered QA check of final resume PDF page 2.

## Remote Live-Site Assets

The rebuild intentionally uses public `jondeheus.com` media URLs for most production images so the deleted local repo can still be restored quickly.

- About image: `https://www.jondeheus.com/Pics/Portfolio_Pictures/About/landscape.jpg`
- Company logos:
  - `https://www.jondeheus.com/Pics/Homepage_Pictures/onengine.svg`
  - `https://www.jondeheus.com/Pics/Homepage_Pictures/omnicell.svg`
  - `https://www.jondeheus.com/Pics/Homepage_Pictures/ford_logo.svg`
  - `https://www.jondeheus.com/Pics/Homepage_Pictures/bosch_logo.svg`
  - `https://www.jondeheus.com/Pics/Homepage_Pictures/ge_og_logo.svg`
- ONEngine:
  - `Elie.jpg`
  - `Aqua_preview.jpg`
  - `Work Orders Wireframe V1.jpg`
  - `DeepAI Flow.jpg`
- Omnicell Benchmarking:
  - `Flow.png`
  - `sc_day1.png`
  - `sc_day2.png`
- Omnicell Scorecards:
  - `Med_Visibility_Scorecard.png`
  - `Pharm_Metrics_Scorecard.png`
  - `Purchasing_Scorecard.png`
  - `Savings_Scorecard.png`
  - `pharm_metrics_before.png`
  - `Pharm_metrics_after.png`
  - `pch_final.png`
- Ford Credit:
  - `Desktop.png`
  - `Mobile.png`
  - `final_wireframe.jpg`

## Embedded Figma Content

The case-study renderer supports media entries with `type: "figma"`. Figma embeds are used where the old site had interactive prototypes or presentation links, especially ONEngine and Omnicell Benchmarking.

## Important Caveats

- Remote image hotlinks should eventually be downloaded into `assets/images/` for long-term reliability.
- The resume PDF is image-based, generated from high-DPI Paper frame captures rather than a native Paper export.
- The local PwC assets came from the requested slide-export workflow and are the only project-local case-study image replacements currently in `assets/images/`.
