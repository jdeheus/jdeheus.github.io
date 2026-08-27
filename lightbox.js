(function () {
  const galleries = [...document.querySelectorAll(".media-grid")];
  if (!galleries.length) return;

  const base = window.location.pathname.includes("/case-studies/") ? "../" : "";
  const lightboxModule = new URL(`${base}assets/vendor/photoswipe/photoswipe-lightbox.esm.min.js`, window.location.href).href;
  const pswpModule = new URL(`${base}assets/vendor/photoswipe/photoswipe.esm.min.js`, window.location.href).href;

  const getMediaDimensions = (src) => {
    const marker = "assets/images/";
    const index = src.indexOf(marker);
    const key = index >= 0 ? src.slice(index + marker.length) : src;
    return window.MEDIA_DIMENSIONS?.[key] || null;
  };

  document.querySelectorAll("a.media-link").forEach((link) => {
    const source = link.getAttribute("href") || link.querySelector("img")?.getAttribute("src") || "";
    const dimensions = getMediaDimensions(source);
    if (!link.dataset.pswpWidth) {
      link.dataset.pswpWidth = String(dimensions?.width || (link.closest(".wide") ? 1920 : 1400));
    }
    if (!link.dataset.pswpHeight) {
      link.dataset.pswpHeight = String(dimensions?.height || (link.closest(".wide") ? 1080 : 1400));
    }
  });

  import(lightboxModule)
    .then(({ default: PhotoSwipeLightbox }) => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: ".media-grid",
        children: "a.media-link",
        pswpModule: () => import(pswpModule),
        wheelToZoom: true,
        bgOpacity: 0.88,
        showHideAnimationType: "fade",
      });

      lightbox.on("uiRegister", () => {
        lightbox.pswp.ui.registerElement({
          name: "dynamic-caption",
          order: 9,
          isButton: false,
          appendTo: "root",
          html: "",
          onInit: (el, pswp) => {
            const updateCaption = () => {
              const slide = pswp.currSlide;
              const caption = slide?.data?.element?.dataset?.caption || "";
              el.textContent = caption;
              el.className = caption ? "pswp__dynamic-caption" : "pswp__dynamic-caption is-empty";
            };
            pswp.on("change", updateCaption);
            updateCaption();
          },
        });
      });

      lightbox.init();
    })
    .catch(() => {
      document.documentElement.classList.add("no-photoswipe");
    });
})();
