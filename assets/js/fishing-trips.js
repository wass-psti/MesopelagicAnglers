document.addEventListener("DOMContentLoaded", () => {
  const filters = Array.from(document.querySelectorAll(".trip-filter"));
  const cards = Array.from(document.querySelectorAll(".trip-gallery-card"));

  const lightbox = document.getElementById("tripLightbox");
  const lightboxImage = lightbox?.querySelector(".trip-lightbox__image");
  const lightboxCaption = lightbox?.querySelector(".trip-lightbox__caption");
  const closeButton = lightbox?.querySelector(".trip-lightbox__close");
  const previousButton = lightbox?.querySelector(".trip-lightbox__nav--previous");
  const nextButton = lightbox?.querySelector(".trip-lightbox__nav--next");

  let visibleCards = cards;
  let currentIndex = 0;
  let lastFocusedElement = null;

  function updateVisibleCards() {
    visibleCards = cards.filter((card) => !card.hidden);
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter || "all";

      filters.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        card.hidden =
          selectedFilter !== "all" && !categories.includes(selectedFilter);
      });

      updateVisibleCards();
    });
  });

  function showImage(index) {
    if (!lightbox || !lightboxImage || !lightboxCaption || visibleCards.length === 0) {
      return;
    }

    currentIndex = (index + visibleCards.length) % visibleCards.length;

    const card = visibleCards[currentIndex];
    const source = card.dataset.gallerySrc;
    const alt = card.dataset.galleryAlt || "Mesopelagic Anglers fishing trip";

    if (!source) {
      return;
    }

    lightboxImage.src = source;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = alt;
  }

  function openLightbox(card) {
    if (!lightbox) {
      return;
    }

    updateVisibleCards();
    currentIndex = visibleCards.indexOf(card);
    lastFocusedElement = document.activeElement;

    showImage(currentIndex);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton?.focus();
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }

    lightbox.hidden = true;
    document.body.style.overflow = "";

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => openLightbox(card));
  });

  closeButton?.addEventListener("click", closeLightbox);
  previousButton?.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton?.addEventListener("click", () => showImage(currentIndex + 1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox || lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });

  filters.forEach((button, index) => {
    button.setAttribute(
      "aria-pressed",
      index === 0 ? "true" : "false"
    );
  });
});
