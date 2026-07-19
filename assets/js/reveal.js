/* =========================================================
   INDEX PAGE FADE-IN / SCROLL REVEAL
   File: assets/js/reveal.js
   ========================================================= */

document.documentElement.classList.add("reveal-ready");

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealSelectors = [
    ".hero-content",
    ".guides-preview-header",
    ".fleet-collage",
    ".fleet-preview-copy",
    ".session-preview-header",
    ".fishing-preview-content",
    ".fishing-preview-map",
    ".package-preview-header",
    ".armory-preview-copy",
    ".armory-preview-media",
    ".faq-preview-copy",
    ".final-cta-box"
  ];

  const staggerGroups = [
    ".guides-card-grid > *",
    ".session-preview-grid > *",
    ".package-card-grid > *",
    ".faq-preview-list > *",
    ".fleet-simple-list > *",
    ".armory-simple-list > *"
  ];

  const revealElements = [];

  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add("reveal-item");
      revealElements.push(element);
    });
  });

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("reveal-item", "reveal-card");
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 90, 360)}ms`
      );
      revealElements.push(element);
    });
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});
