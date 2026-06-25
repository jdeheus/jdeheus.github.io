# Rebuild QA Notes

The rebuilt portfolio is served by the static Python server at `http://127.0.0.1:8001/`.

## Static Checks

- `node --check script.js`: passed.
- `node --check site-data.js`: passed.
- `curl -I http://127.0.0.1:8001/index.html`: returned HTTP 200 from `SimpleHTTP`.

## Browser QA

Playwright QA was run with the bundled runtime and managed Chromium. The first pass used stale selectors for the contact submit button and PwC mobile gallery; the corrected selector pass completed successfully.

Verified:

- Landing desktop has no horizontal overflow and renders five case-study cards.
- Landing mobile has no horizontal overflow.
- Mobile drawer opens, shows the tan sheet, shows the close button, and closes.
- Contact send button is disabled before required fields and enabled after name, email, and message are filled.
- PwC mobile section hash scroll lands on section 03 and the mobile anchor button reads `03 Heuristic Analysis Results`.
- PwC mobile has no horizontal overflow.
- PwC section 03 has three media links.
- PhotoSwipe opens and shows a readable full-width caption panel.
- About page renders the live-site image.
- Resume link points to `docs/jonathan-de-heus-resume.pdf`.
- Resume PDF is present, two pages, and was rendered back to PNG for visual verification.
- Browser console produced no errors or warnings in the focused QA run.

## QA Screenshots

Recent final screenshots:

- `docs/qa-screenshots/qa-landing-desktop-final.png`
- `docs/qa-screenshots/qa-landing-mobile-final.png`
- `docs/qa-screenshots/qa-landing-mobile-drawer-open-final.png`
- `docs/qa-screenshots/qa-contact-mobile-filled-final.png`
- `docs/qa-screenshots/qa-pwc-mobile-section03-final.png`
- `docs/qa-screenshots/qa-pwc-modal-caption-final.png`
- `docs/qa-screenshots/qa-about-desktop-final.png`
- `docs/qa-screenshots/final-landing-desktop.png`
- `docs/qa-screenshots/final-contact-desktop.png`
- `docs/qa-screenshots/final-pwc-mobile.png`
- `docs/qa-screenshots/final-about-desktop.png`
- `docs/qa-screenshots/resume-page1-paper-crop.png`
- `docs/qa-screenshots/resume-page2-paper-crop.png`
- `docs/qa-screenshots/resume-pdf-render-page1.png`
- `docs/qa-screenshots/resume-pdf-render-page2.png`

Earlier reconstruction screenshots are also retained in `docs/qa-screenshots/` for comparison.

## Known QA Notes

- The corrected mobile anchor check uses `.mobile-anchor-button`, not `.mobile-anchor-current`.
- The corrected PwC gallery check uses `#gallery-pwc-audit-heuristic-analysis-results`, not `#gallery-pwc-audit-section-03-heuristic-analysis-results`.
- The corrected contact button check uses `.contact-send-button`, not `.contactSubmit`.
- The contact filled screenshot may show viewport movement caused by focusing form fields on mobile. Behavior passed by DOM state: the send button became enabled after required fields were filled.
- The resume PDF is image-based from high-DPI Paper frame captures rather than a native Paper PDF export.
- The workspace is not currently a Git repository, so git status/commit workflows are unavailable until the GitHub repo is initialized or cloned into this folder.
