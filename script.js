(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const root = document.getElementById("site-root");
  const isCase = document.body.dataset.page === "case-study";
  const rootPrefix = data.root;
  let lastScrollY = window.scrollY;
  let headerVisible = true;

  const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);

  const slug = (value) =>
    value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const jdLogo = () => `
    <svg class="jd-mark" viewBox="0 0 135 90" aria-hidden="true" focusable="false">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.314 90C23.229 90 17.614 88.831 12.471 86.602C7.414 84.288 3.257 81.067 0 76.867L11.571 63C14.057 66.257 16.671 68.725 19.414 70.439C22.157 72.067 25.114 72.918 28.286 72.918C36.771 72.918 41.014 67.892 41.014 57.949V16.714L41.051 0H61.714V36.735V56.847C61.714 67.99 58.971 76.249 53.486 81.735C48 87.22 39.943 90 29.314 90ZM55.35 90H84.948C94.72 90 103.334 88.157 110.791 84.471C118.248 80.7 124.077 75.471 128.277 68.786C132.477 62.014 134.577 54.086 134.577 45C134.577 35.829 132.477 27.9 128.277 21.214C124.077 14.529 118.248 9.343 110.791 5.657C103.334 1.886 94.72 0 84.948 0H70.622V17.083H83.938C89.938 17.083 95.124 18.24 99.495 20.554C103.952 22.783 107.381 25.997 109.781 30.197C112.267 34.311 113.51 39.24 113.51 44.983C113.51 50.64 112.267 55.568 109.781 59.768C107.381 63.968 103.952 67.225 99.495 69.54C95.124 71.768 89.938 72.883 83.938 72.883H68.711C67.212 77.946 64.832 82.099 61.57 85.361C59.753 87.178 57.68 88.725 55.35 90Z" fill="currentColor"/>
    </svg>`;

  const linkedinIcon = () => `
    <svg class="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="2.4" fill="currentColor"/>
      <path d="M6.94 8.98H3.9V20h3.04V8.98ZM7.2 5.57C7.2 4.6 6.42 3.9 5.4 3.9c-1.03 0-1.8.7-1.8 1.67 0 .95.76 1.68 1.76 1.68h.02c1.04 0 1.82-.73 1.82-1.68ZM20.1 13.68c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.07-3.28 1.82V8.98H9.58c.04 1.03 0 11.02 0 11.02h3.04v-6.16c0-.33.02-.66.12-.9.27-.66.88-1.34 1.9-1.34 1.34 0 1.88 1.01 1.88 2.5V20h3.04l.54-6.32Z" fill="var(--linkedin-inner, #fff)"/>
    </svg>`;

  function renderHeader(activePage) {
    const links = data.nav.map((item) => {
      const isActive = activePage && item.href.includes(`${activePage}.html`);
      const attrs = item.external ? ' target="_blank" rel="noreferrer"' : "";
      const cls = `site-nav-link${isActive ? " is-active" : ""}${item.icon ? " linkedin" : ""}`;
      const content = item.icon === "linkedin" ? `${linkedinIcon()}<span class="sr-only">LinkedIn</span>` : escapeHtml(item.label);
      return `<a class="${cls}" href="${item.href}"${attrs}>${content}</a>`;
    }).join("");

    return `
      <header class="site-header">
        <a class="brand" href="${rootPrefix}index.html" aria-label="Jonathan De Heus home">${jdLogo()}</a>
        <nav class="site-nav" aria-label="Primary">${links}</nav>
        <button class="mobile-menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu-sheet" aria-label="Open menu">
          <span class="mobile-menu-glyph" aria-hidden="true"><span></span><span></span></span>
        </button>
      </header>`;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <span>© Jonathan De Heus</span>
        <span>/</span>
        <span>2026</span>
      </footer>`;
  }

  function renderShell(main, activePage) {
    root.innerHTML = `${renderHeader(activePage)}${main}${renderFooter()}`;
    renderMobileMenu(activePage);
    initHeaderScroll();
    initMobileMenu();
  }

  function renderMobileMenu(activePage) {
    const sheet = document.getElementById("mobile-menu-sheet");
    if (!sheet) return;
    sheet.innerHTML = `
      <button class="mobile-menu-close-button" type="button" aria-label="Close menu">
        <span aria-hidden="true"></span><span aria-hidden="true"></span>
      </button>
      <nav class="mobile-menu-nav" aria-label="Mobile navigation">
        ${data.nav.map((item) => {
          const isActive = activePage && item.href.includes(`${activePage}.html`);
          const attrs = item.external ? ' target="_blank" rel="noreferrer"' : "";
          const icon = item.icon === "linkedin" ? linkedinIcon() : "";
          return `<a class="mobile-menu-link${isActive ? " is-active" : ""}" href="${item.href}"${attrs}>${icon}<span>${escapeHtml(item.label)}</span></a>`;
        }).join("")}
      </nav>`;
  }

  function renderLanding() {
    const caseRows = data.landingCases.map((item) => `
      <a class="case-row" href="${item.href}">
        <span class="case-row-header">
          <span>CASE ${item.number}</span>
          <span>${escapeHtml(item.meta)}</span>
        </span>
        <span class="case-row-body">
          <span class="case-row-copy">
            <span class="case-row-title">${escapeHtml(item.title)}</span>
            <span class="case-row-meta">${escapeHtml(item.meta)}</span>
          </span>
          <span class="case-action"><span class="view-link">VIEW <span aria-hidden="true">-&gt;</span></span></span>
        </span>
      </a>`).join("");

    renderShell(`
      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="hero-kicker">Hi, I'm Jon.</p>
            <h1>I design products that need to work for both users and businesses.</h1>
          </div>
          <aside class="hero-card" aria-label="Designer summary">
            <span class="corner-mark" aria-hidden="true"></span>
            <h2>Senior product designer who:</h2>
            <div class="hero-card-rule"></div>
            <p><strong>Deals with ambiguous requirements.</strong><span>Discovery, definition, and delivery handoff.</span></p>
            <div class="hero-card-rule"></div>
            <p><strong>Focuses on enterprise software</strong><span>Healthcare, B2B SaaS, fintech, and industrial products.</span></p>
            <div class="hero-card-rule"></div>
            <p><strong>Design leadership</strong><span>Mentorship, workshops, stakeholder alignment, and design-system practice.</span></p>
          </aside>
        </section>
        <section class="selected">
          <h2>Selected case studies</h2>
          <div class="case-list">${caseRows}</div>
        </section>
      </main>`, "index");
  }

  function renderAbout() {
    const steps = data.about.steps.map((step, index) => `
      <section class="about-step">
        <div class="about-step-marker">${String(index + 1).padStart(2, "0")}</div>
        <div class="about-step-content">
          <p class="section-kicker">${escapeHtml(step.label)}</p>
          ${step.logos ? `<div class="about-logo-row">${step.logos.map((logo) => `<img src="${logo.src}" alt="${escapeHtml(logo.alt)}">`).join("")}</div>` : `<h2>${escapeHtml(step.body)}</h2>`}
        </div>
      </section>`).join("");

    renderShell(`
      <main class="about-page">
        <section class="about-body">
          <aside class="about-rail">
            <div class="about-intro">
              <p class="section-kicker">About Me</p>
              <figure class="about-portrait">
                <img src="${data.about.image}" alt="Jonathan De Heus outdoors">
              </figure>
              <p id="about-title">${escapeHtml(data.about.intro)}</p>
            </div>
            <div class="about-off-clock">
              <p class="section-kicker">Off the clock</p>
              <span>${escapeHtml(data.about.offClock)}</span>
            </div>
          </aside>
          <div class="about-timeline">${steps}</div>
        </section>
      </main>`, "about");
  }

  function renderContact() {
    renderShell(`
      <main class="contact-page">
        <section class="contact-intake">
          <div class="contact-intake-copy">
            <p class="section-kicker">Contact</p>
            <h1>${escapeHtml(data.contact.headline)}</h1>
            <p>${escapeHtml(data.contact.body)}</p>
            <div class="contact-reasons">
              ${data.contact.reasons.map((reason, index) => `<div class="contact-reason"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(reason)}</strong></div>`).join("")}
            </div>
          </div>
          <form id="contactForm" class="contact-card" novalidate>
            <span class="corner-mark" aria-hidden="true"></span>
            <div class="contact-form-heading">
              <h2>Get in touch.</h2>
              <p>All fields are required.</p>
            </div>
            <div class="contact-form-rows">
              ${contactField("contactName", "Name", "text", "Please enter your name.")}
              ${contactField("contactEmail", "Email", "email", "Add your email so I can reply back.")}
              <label class="contact-field-row contact-message-row">
                <span>Message</span>
                <span class="field-stack">
                  <textarea id="contactMessage" name="message" aria-describedby="contactMessageError"></textarea>
                  <small id="contactMessageError" class="field-error" hidden>Please add a message.</small>
                </span>
              </label>
            </div>
            <div class="contact-send-row">
              <button class="contact-send-button view-link" type="submit" disabled>SEND NOTE <span aria-hidden="true">-&gt;</span></button>
            </div>
          </form>
        </section>
      </main>`, "contact");
    initContactForm();
  }

  function contactField(id, label, type, error) {
    return `
      <label class="contact-field-row">
        <span>${label}</span>
        <span class="field-stack">
          <input id="${id}" name="${id.replace("contact", "").toLowerCase()}" type="${type}" aria-describedby="${id}Error">
          <small id="${id}Error" class="field-error" hidden>${error}</small>
        </span>
      </label>`;
  }

  function caseUrl(id) {
    return `${rootPrefix}case-studies/${id}.html`;
  }

  function renderCaseStudy() {
    const id = document.body.dataset.case;
    const item = data.cases[id];
    if (!item) {
      renderShell("<main><p>Case study not found.</p></main>", "");
      return;
    }

    const index = data.caseOrder.indexOf(id);
    const prevId = index <= 0 ? null : data.caseOrder[index - 1];
    const nextId = index >= data.caseOrder.length - 1 ? null : data.caseOrder[index + 1];

    const process = item.sections.map((section, idx) => `
      <a class="process-link" href="#section-${String(idx + 1).padStart(2, "0")}-${slug(section.title)}" data-target="section-${String(idx + 1).padStart(2, "0")}-${slug(section.title)}">
        <span class="process-num">${String(idx + 1).padStart(2, "0")}</span>
        <span class="process-text" data-label="${escapeHtml(section.title)}">${escapeHtml(section.title)}</span>
      </a>`).join("");

    const sections = item.sections.map((section, idx) => renderArticleSection(id, section, idx)).join("");

    renderShell(`
      <main class="case-page">
        <section class="case-hero">
          <div class="case-hero-copy">
            <h1>${escapeHtml(item.title)}</h1>
            <p>${escapeHtml(item.summary)}</p>
            <div class="case-tags">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          </div>
          <aside class="project-card">
            <span class="corner-mark" aria-hidden="true"></span>
            <h2>Selected Project<br>Information</h2>
            <dl>
              <div><dt>Role</dt><dd>${escapeHtml(item.info.role)}</dd></div>
              <div><dt>Core Challenge</dt><dd class="challenge">${escapeHtml(item.info.challenge)}</dd></div>
              <div class="split"><span><dt>Timeline</dt><dd>${escapeHtml(item.info.timeline)}</dd></span><span><dt>Collaborators</dt><dd>${escapeHtml(item.info.collaborators)}</dd></span></div>
            </dl>
          </aside>
        </section>
        <div class="case-body">
          <aside class="process-card">
            <h2>Sections</h2>
            <nav class="process-list">${process}</nav>
          </aside>
          <article class="case-article">${sections}</article>
        </div>
        <nav class="case-navigation" aria-label="Case study navigation">
          ${prevId ? navButton(prevId, "prev", "Previous Case") : `<a class="case-nav-button prev" href="${rootPrefix}index.html"><span>&lt;- Previous</span><strong>Landing Page</strong></a>`}
          ${nextId ? navButton(nextId, "next", "Next Case") : `<a class="case-nav-button next" href="${rootPrefix}index.html"><span>Next -&gt;</span><strong>Landing Page</strong></a>`}
        </nav>
      </main>`, "");

    initProcessNavigation();
    initMobileAnchor(item);
    scrollToInitialHash();
  }

  function navButton(id, direction, label) {
    const item = data.cases[id];
    const arrow = direction === "prev" ? "&lt;- " : " -&gt;";
    const text = direction === "prev" ? `${arrow}${label}` : `${label}${arrow}`;
    return `<a class="case-nav-button ${direction}" href="${caseUrl(id)}"><span>${text}</span><strong>${escapeHtml(item.title.replace("Omnicell - ", ""))}</strong></a>`;
  }

  function renderArticleSection(caseId, section, idx) {
    const id = `section-${String(idx + 1).padStart(2, "0")}-${slug(section.title)}`;
    const media = section.media ? `<div class="media-grid" id="gallery-${caseId}-${slug(section.title)}">${section.media.map(renderMedia).join("")}</div>` : "";
    const timeline = section.timeline ? renderTimeline() : "";
    return `
      <section id="${id}" class="article-section" data-section-index="${idx}">
        <p class="article-eyebrow">${String(idx + 1).padStart(2, "0")} / ${escapeHtml(section.title)}</p>
        <h2>${escapeHtml(section.subtitle)}</h2>
        <div class="article-copy">${section.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div>
        ${timeline}
        ${media}
      </section>`;
  }

  function renderMedia(item) {
    if (item.type === "embed") {
      return `
        <figure class="media-card figma-card ${item.wide ? "wide" : ""}">
          <iframe title="${escapeHtml(item.caption)}" src="${item.src}" allowfullscreen loading="lazy"></iframe>
          <figcaption class="media-caption">${escapeHtml(item.caption)}</figcaption>
        </figure>`;
    }

    const src = item.src || item.fallback;
    const fallbackAttr = item.fallback ? ` onerror="this.onerror=null;this.src='${item.fallback}'"` : "";
    return `
      <figure class="media-card ${item.wide ? "wide" : ""} ${item.squareOnTablet ? "square-tablet" : ""}">
        <a class="media-link pswp-gallery__item" href="${src}" data-caption="${escapeHtml(item.caption)}">
          <img src="${src}" alt="${escapeHtml(item.caption)}"${fallbackAttr} loading="lazy">
        </a>
        <figcaption class="media-caption">${escapeHtml(item.caption)}</figcaption>
      </figure>`;
  }

  function renderTimeline() {
    const desktopSteps = [
      ["Planning and requirement gathering", "Define scope, stakeholders, and objectives"],
      ["Design & architecture", "Create blueprints, system structure, and UI/UX"],
      ["Development and coding", "Write code, integrate modules, version control"],
      ["Testing & quality assurance", "Execute tests, identify bugs, ensure compliance"],
      ["Deployment and release", "Launch product, monitor performance, user access"],
      ["Review & feedback loop", "Collect feedback, analyze data, optimize process"],
    ];
    const mobileSteps = [
      [["Planning and", "requirement", "gathering"], ["Define scope,", "stakeholders, and", "objectives"]],
      [["Design &", "architecture"], ["Create blueprints,", "system structure,", "and UI/UX"]],
      [["Development", "and coding"], ["Write code, integrate", "modules, version", "control"]],
      [["Testing &", "quality", "assurance"], ["Execute tests,", "identify bugs, ensure", "compliance"]],
      [["Deployment", "and release"], ["Launch product,", "monitor performance,", "user access"]],
      [["Review &", "feedback loop"], ["Collect feedback,", "analyze data,", "optimize process"]],
    ];
    const stepHtml = (step, idx, className = "") => `
      <div xmlns="http://www.w3.org/1999/xhtml" class="tl-step-card ${className}">
        <div class="tl-step-label">STEP ${String(idx + 1).padStart(2, "0")}</div>
        <div class="tl-step-title">${escapeHtml(step[0])}</div>
        <div class="tl-step-desc">${escapeHtml(step[1])}</div>
      </div>`;
    const mobileStepHtml = (step, idx) => `
      <div xmlns="http://www.w3.org/1999/xhtml" class="tl-step-card tl-step-card-mobile">
        <div class="tl-step-label">STEP ${String(idx + 1).padStart(2, "0")}</div>
        <div class="tl-step-title">${step[0].map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</div>
        <div class="tl-step-desc">${step[1].map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</div>
      </div>`;
    const mobileTitleHeight = (step) => step[0].length * 34;
    const mobileDescHeight = (step) => step[1].length * 24;
    const mobileStepClipInset = 18;
    const mobileStepHeight = (step) => Math.max(100, 16 + 10 + mobileTitleHeight(step) + 10 + mobileDescHeight(step));
    const mobileGap = 34;
    const mobileRows = mobileSteps.reduce((rows, step) => {
      const previous = rows[rows.length - 1];
      const y = previous ? previous.y + previous.height + mobileGap : 0;
      const height = mobileStepHeight(step);
      return [...rows, { step, y, height, clipHeight: height + mobileStepClipInset }];
    }, []);
    const lastMobileRow = mobileRows[mobileRows.length - 1];
    const lastMobileDotY = lastMobileRow.y + 16;
    const mobileSvgHeight = lastMobileRow.y + lastMobileRow.clipHeight;
    return `
      <figure class="paper-timeline" role="img" aria-label="Six step process timeline moving from planning through review and feedback">
        <svg class="paper-timeline-svg paper-timeline-desktop" viewBox="0 0 900 670" aria-hidden="true">
          <path d="M58 46 H832 C866 46 878 64 878 98 V260 C878 294 858 312 824 312 H66 C50 312 58 322 58 338 V414" fill="none" stroke="#E8DFCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M48 398 L58 414 L68 398" fill="none" stroke="#8E2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M58 444 H824" fill="none" stroke="#E8DFCE" stroke-width="2" stroke-linecap="round"/>
          ${desktopSteps.map((s, i) => {
            const x = [58, 330, 602, 58, 330, 602][i];
            const dotY = i < 3 ? 46 : 444;
            const cardY = i < 3 ? 100 : 498;
            return `<circle cx="${x}" cy="${dotY}" r="10" fill="#8E2F2F" stroke="#FFFFFF" stroke-width="6"/><foreignObject x="${x}" y="${cardY}" width="248" height="210">${stepHtml(s, i)}</foreignObject>`;
          }).join("")}
        </svg>
        <svg class="paper-timeline-svg paper-timeline-mobile" viewBox="0 0 335 ${mobileSvgHeight}" aria-hidden="true">
          <path d="M43 16 V${lastMobileDotY}" fill="none" stroke="#E8DFCE" stroke-width="2"/>
          ${mobileRows.map(({ step, y, clipHeight }, i) => {
            const dotY = y + 16;
            const [titleLines, descLines] = step;
            return `<circle cx="43" cy="${dotY}" r="11" fill="#8E2F2F" stroke="#FFFFFF" stroke-width="7"/><foreignObject x="86" y="${y + 8}" width="235" height="${clipHeight}">${mobileStepHtml([titleLines, descLines], i)}</foreignObject>`;
          }).join("")}
        </svg>
      </figure>`;
  }

  function initHeaderScroll() {
    const header = root.querySelector(".site-header");
    if (!header) return;
    const apply = () => {
      if (document.body.classList.contains("is-mobile-menu-open")) return;
      const y = window.scrollY;
      const goingUp = y < lastScrollY;
      const threshold = document.documentElement.scrollHeight * 0.1;
      headerVisible = y < 24 || (y > threshold && goingUp);
      header.classList.toggle("is-hidden", !headerVisible);
      header.classList.toggle("is-raised", y > 20 && headerVisible);
      document.body.classList.toggle("has-visible-header", headerVisible);
      lastScrollY = y;
    };
    apply();
    window.addEventListener("scroll", apply, { passive: true });
  }

  function initMobileMenu() {
    const button = root.querySelector(".mobile-menu-button");
    const closeButton = document.querySelector(".mobile-menu-close-button");
    const sheet = document.getElementById("mobile-menu-sheet");
    if (!button || !sheet) return;
    const header = root.querySelector(".site-header");
    let transitionTimer = 0;
    let menuScrollY = 0;
    let ghost = document.querySelector(".mobile-menu-ghost-button");
    if (!ghost) {
      ghost = document.createElement("button");
      ghost.className = "mobile-menu-ghost-button";
      ghost.type = "button";
      ghost.tabIndex = -1;
      ghost.setAttribute("aria-hidden", "true");
      ghost.innerHTML = '<span class="mobile-menu-glyph" aria-hidden="true"><span></span><span></span></span>';
      document.body.appendChild(ghost);
    }

    const motionMs = 420;
    const setGhostRect = (rect) => {
      ghost.style.setProperty("--ghost-left", `${rect.left}px`);
      ghost.style.setProperty("--ghost-top", `${rect.top}px`);
      ghost.style.setProperty("--ghost-width", `${rect.width}px`);
      ghost.style.setProperty("--ghost-height", `${rect.height}px`);
    };
    const placeGhost = (rect, instant = false) => {
      if (instant) ghost.classList.add("is-placing");
      setGhostRect(rect);
      if (instant) {
        ghost.getBoundingClientRect();
      }
    };
    const getClosedButtonRect = () => {
      if (!header) return button.getBoundingClientRect();
      const headerStyle = window.getComputedStyle(header);
      const paddingRight = parseFloat(headerStyle.paddingRight) || 20;
      const headerHeight = header.getBoundingClientRect().height || button.offsetHeight;
      const width = button.offsetWidth || 48;
      const height = button.offsetHeight || 48;
      return {
        left: window.innerWidth - paddingRight - width,
        top: Math.max(0, (headerHeight - height) / 2),
        width,
        height
      };
    };
    const getDrawerCloseRect = () => {
      if (closeButton && document.body.classList.contains("is-mobile-menu-open")) {
        return closeButton.getBoundingClientRect();
      }

      const closeStyle = closeButton ? window.getComputedStyle(closeButton) : null;
      const closeWidth = closeButton?.offsetWidth || 48;
      const closeHeight = closeButton?.offsetHeight || 48;
      const closeRight = closeStyle ? parseFloat(closeStyle.right) || 25 : 25;
      const closeTop = closeStyle ? parseFloat(closeStyle.top) || 31 : 31;

      return {
        left: window.innerWidth - closeRight - closeWidth,
        top: closeTop,
        width: closeWidth,
        height: closeHeight
      };
    };
    const clearTransition = () => {
      window.clearTimeout(transitionTimer);
      document.body.classList.remove("is-mobile-menu-opening", "is-mobile-menu-closing");
      ghost.classList.remove("is-visible", "is-x");
    };
    const lockForegroundScroll = () => {
      menuScrollY = window.scrollY;
      document.body.style.minHeight = `${root.scrollHeight}px`;
      document.body.style.setProperty("--mobile-menu-scroll-y", `${menuScrollY}px`);
      document.body.style.setProperty("--mobile-menu-root-top", `${-menuScrollY}px`);
    };
    const unlockForegroundScroll = () => {
      window.scrollTo(0, menuScrollY);
      document.body.style.removeProperty("--mobile-menu-scroll-y");
      document.body.style.removeProperty("--mobile-menu-root-top");
    };

    const setOpen = (open) => {
      if (open) {
        clearTransition();
        lockForegroundScroll();
        placeGhost(button.getBoundingClientRect(), true);
        ghost.classList.add("is-visible");
        document.body.classList.add("is-mobile-menu-opening");
        requestAnimationFrame(() => {
          ghost.classList.remove("is-placing");
          placeGhost(getDrawerCloseRect());
          ghost.classList.add("is-x");
          document.body.classList.add("is-mobile-menu-open");
        });
        sheet.setAttribute("aria-hidden", "false");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close menu");
        root.setAttribute("aria-hidden", "true");
        document.body.classList.add("has-visible-header");
        transitionTimer = window.setTimeout(() => {
          document.body.classList.remove("is-mobile-menu-opening");
          ghost.classList.remove("is-visible", "is-x");
        }, motionMs);
        return;
      }

      clearTransition();
      placeGhost(closeButton?.getBoundingClientRect() || getClosedButtonRect(), true);
      ghost.classList.add("is-visible", "is-x");
      document.body.classList.add("is-mobile-menu-closing");
      ghost.getBoundingClientRect();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ghost.classList.remove("is-placing");
          placeGhost(getClosedButtonRect());
          ghost.classList.remove("is-x");
          document.body.classList.remove("is-mobile-menu-open");
        });
      });
      sheet.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
      root.setAttribute("aria-hidden", "false");
      transitionTimer = window.setTimeout(() => {
        unlockForegroundScroll();
        document.body.classList.remove("is-mobile-menu-closing");
        document.body.style.removeProperty("min-height");
        window.scrollTo(0, menuScrollY);
        ghost.classList.remove("is-visible");
        button.focus({ preventScroll: true });
      }, motionMs);
    };

    const toggleOpen = () => {
      if (document.body.classList.contains("is-mobile-menu-opening") || document.body.classList.contains("is-mobile-menu-closing")) {
        return;
      }
      setOpen(!document.body.classList.contains("is-mobile-menu-open"));
    };

    button.addEventListener("click", toggleOpen);
    closeButton?.addEventListener("click", () => {
      setOpen(false);
    });
    sheet.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("is-mobile-menu-open")) {
        event.preventDefault();
        setOpen(false);
      }
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const name = form.querySelector("#contactName");
    const email = form.querySelector("#contactEmail");
    const message = form.querySelector("#contactMessage");
    const send = form.querySelector(".contact-send-button");
    const fields = [name, email, message];
    const storageKey = "jondeheus-contact-draft";

    try {
      const draft = JSON.parse(localStorage.getItem(storageKey) || "{}");
      fields.forEach((field) => { if (draft[field.name]) field.value = draft[field.name]; });
    } catch (_) {}

    const validate = (showErrors = false) => {
      const validName = name.value.trim().length > 0;
      const validEmail = email.validity.valid && email.value.trim().length > 0;
      const validMessage = message.value.trim().length > 0;
      toggleError(name, validName, showErrors);
      toggleError(email, validEmail, showErrors);
      toggleError(message, validMessage, showErrors);
      send.disabled = !(validName && validEmail && validMessage);
      return !send.disabled;
    };

    fields.forEach((field) => {
      field.addEventListener("input", () => {
        localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(fields.map((f) => [f.name, f.value]))));
        validate(false);
      });
      field.addEventListener("blur", () => validate(true));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validate(true)) return;
      const subject = encodeURIComponent(`Portfolio inquiry from ${name.value.trim()}`);
      const body = encodeURIComponent(`Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`);
      window.location.href = `mailto:${data.contact.mailto}?subject=${subject}&body=${body}`;
    });

    validate(false);
  }

  function toggleError(field, valid, show) {
    const error = document.getElementById(`${field.id}Error`);
    if (!error) return;
    const visible = show && !valid;
    error.hidden = !visible;
    field.classList.toggle("is-invalid", visible);
  }

  function initProcessNavigation() {
    const links = [...document.querySelectorAll(".process-link")];
    const sections = [...document.querySelectorAll(".article-section")];
    if (!links.length || !sections.length) return;

    const setActive = (id) => {
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.target === id));
    };

    const markerOffset = () => Math.max(120, Math.min(280, window.innerHeight * 0.28));
    const activeSectionId = () => {
      const marker = window.scrollY + markerOffset() + 16;
      return sections.reduce((current, section) => (
        section.offsetTop <= marker ? section.id : current
      ), sections[0].id);
    };
    const updateActive = () => setActive(activeSectionId());
    const scrollToSection = (id, behavior = "smooth") => {
      const target = document.getElementById(id);
      if (!target) return;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - markerOffset());
      window.scrollTo({ top, behavior });
      window.dispatchEvent(new CustomEvent("portfolio:hash-scroll", { detail: { id } }));
      setActive(id);
    };

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.dataset.target;
        if (!id) return;
        event.preventDefault();
        scrollToSection(id);
        history.pushState(null, "", `#${id}`);
      });
    });
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("portfolio:hash-scroll", (event) => {
      if (event.detail?.id) setActive(event.detail.id);
    });
    updateActive();
  }

  function initMobileAnchor(caseData) {
    const anchor = document.getElementById("mobile-anchor-dropdown");
    if (!anchor) return;
    const sections = caseData.sections;
    const sectionId = (section, idx) => `section-${String(idx + 1).padStart(2, "0")}-${slug(section.title)}`;
    const articleSections = [...document.querySelectorAll(".article-section")];
    const render = (active = 0, open = false) => {
      anchor.innerHTML = `
        <button class="mobile-anchor-button" type="button" aria-expanded="${open}" aria-controls="mobile-anchor-list">
          <span><strong>${String(active + 1).padStart(2, "0")}</strong> ${escapeHtml(sections[active].title)}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div id="mobile-anchor-list" class="mobile-anchor-list">
          ${sections.map((section, idx) => `<a href="#${sectionId(section, idx)}" class="${idx === active ? "is-active" : ""}" data-section-index="${idx}"><strong>${String(idx + 1).padStart(2, "0")}</strong><span>${escapeHtml(section.title)}</span></a>`).join("")}
        </div>`;
      anchor.classList.toggle("is-open", open);
      anchor.querySelector(".mobile-anchor-button").addEventListener("click", () => render(active, !anchor.classList.contains("is-open")));
      anchor.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
        current = Number(link.dataset.sectionIndex || current);
        render(current, false);
      }));
    };

    let current = 0;
    render(current, false);

    const first = document.querySelector(".article-section");
    const updateAvailability = () => {
      if (!first) return;
      if (
        document.body.classList.contains("is-mobile-menu-opening") ||
        document.body.classList.contains("is-mobile-menu-open") ||
        document.body.classList.contains("is-mobile-menu-closing")
      ) {
        return;
      }
      anchor.hidden = first.getBoundingClientRect().top > 96;
      anchor.classList.toggle("below-header", document.body.classList.contains("has-visible-header"));
    };

    const updateActiveFromScroll = () => {
      if (
        document.body.classList.contains("is-mobile-menu-opening") ||
        document.body.classList.contains("is-mobile-menu-open") ||
        document.body.classList.contains("is-mobile-menu-closing")
      ) {
        return;
      }
      const anchorBottom = anchor.hidden ? 0 : anchor.getBoundingClientRect().bottom;
      const marker = window.scrollY + anchorBottom + 12;
      let next = 0;
      articleSections.forEach((section) => {
        if (section.offsetTop <= marker) {
          next = Number(section.dataset.sectionIndex || next);
        }
      });
      if (next !== current) {
        current = next;
        render(current, anchor.classList.contains("is-open"));
      }
    };

    window.addEventListener("portfolio:hash-scroll", (event) => {
      const idx = sections.findIndex((section, sectionIdx) => sectionId(section, sectionIdx) === event.detail?.id);
      if (idx >= 0) {
        current = idx;
        render(current, false);
        updateAvailability();
      }
    });
    window.addEventListener("scroll", () => {
      updateAvailability();
      updateActiveFromScroll();
    }, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    updateAvailability();
    updateActiveFromScroll();
  }

  function scrollToInitialHash() {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const scroll = () => {
      if (decodeURIComponent(window.location.hash.slice(1)) !== id) return;
      const target = document.getElementById(id);
      if (target) {
        const marker = Math.max(120, Math.min(280, window.innerHeight * 0.28));
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - marker);
        window.scrollTo({ top, behavior: "auto" });
        window.dispatchEvent(new CustomEvent("portfolio:hash-scroll", { detail: { id } }));
      }
    };
    requestAnimationFrame(scroll);
    window.addEventListener("load", () => setTimeout(scroll, 50), { once: true });
    setTimeout(scroll, 700);
  }

  const page = document.body.dataset.page;
  if (page === "landing") renderLanding();
  if (page === "about") renderAbout();
  if (page === "contact") renderContact();
  if (page === "case-study") renderCaseStudy();
})();
