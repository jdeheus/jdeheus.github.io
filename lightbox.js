(function () {
  const galleries = [...document.querySelectorAll(".media-grid")];
  if (!galleries.length) return;

  const base = window.location.pathname.includes("/case-studies/") ? "../" : "";
  const lightboxModule = new URL(`${base}assets/vendor/photoswipe/photoswipe-lightbox.esm.min.js`, window.location.href).href;
  const pswpModule = new URL(`${base}assets/vendor/photoswipe/photoswipe.esm.min.js`, window.location.href).href;

  document.querySelectorAll("a.media-link").forEach((link) => {
    if (!link.dataset.pswpWidth) link.dataset.pswpWidth = link.closest(".wide") ? "1920" : "1400";
    if (!link.dataset.pswpHeight) link.dataset.pswpHeight = link.closest(".wide") ? "1080" : "1400";
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
