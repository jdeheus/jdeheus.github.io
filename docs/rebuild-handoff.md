# Rebuild Handoff

## What Was Rebuilt

The static portfolio was rebuilt from an empty workspace as a no-build HTML/CSS/JavaScript site. It includes:

- Landing page.
- About page.
- Contact page.
- Five case-study pages.
- Shared mobile drawer.
- Desktop sticky process cards.
- Mobile case-study anchor dropdown.
- Section-scoped PhotoSwipe image modal behavior.
- Mailto contact form.
- Resume link target.

## Architecture

- `site-data.js`: canonical content and page data.
- `script.js`: shared renderers and controllers.
- `styles.css`: design system, page layouts, responsive rules, and motion/focus styling.
- `lightbox.js`: PhotoSwipe section-gallery setup and dynamic captions.
- HTML files: lightweight shells with page metadata and shared script/style includes.

This keeps future edits mostly data-driven. Case-study content and media should be edited in `site-data.js`.

## Behavior To Preserve

- Mobile drawer:
  - JD logo and hamburger in the header when closed.
  - Tan sheet when open.
  - Close X in the drawer.
  - Body scroll locked while open.
  - Background content click-blocked while open.
- Mobile case-study anchor dropdown:
  - Appears after the first section threshold.
  - Opens/closes with a 200ms ease-in animation.
  - Tracks active section.
  - Hides selected text while the drawer is open.
- Contact:
  - Name, email, and message are required.
  - Send stays disabled until required fields are valid.
  - Submit opens a `mailto:` URL.
  - Draft persists in `localStorage`.
- Media:
  - Case-study images open in PhotoSwipe.
  - Captions are high-contrast and section-scoped.

## Paper References Used During Reconstruction

- Landing page and selected-case ticket cards.
- Mobile drawer open/closed references.
- Mobile case-study spacing and anchor dropdown.
- Contact intake layout and input styling.
- About timeline layout.
- PwC timeline and media replacements.
- Resume pages.

Exact Paper URLs are embedded in the conversation history, not in source comments. If the design changes again, update `site-data.js` and the relevant CSS section rather than adding one-off page code.

## Remaining Cleanup / Next Steps

- If a native Paper export becomes available, it can replace the current image-based `docs/jonathan-de-heus-resume.pdf`; the current file was regenerated from high-DPI Paper frame captures and visually QA-rendered.
- Download remote `jondeheus.com` assets into `assets/images/` if the site should be fully self-contained.
- Initialize or clone the GitHub repo (`jdeheus/jdeheus.github.io`) into this folder if version control is needed.
- Remove local browser artifacts such as `.chrome-qa/` before committing or handing off.
- Re-run the QA checks after any content or motion changes.

## Suggested Final Verification Commands

```bash
node --check script.js
node --check site-data.js
curl -I http://127.0.0.1:8001/index.html
```

For visual verification, use the Playwright/browser checks described in `docs/rebuild-qa-notes.md`.
