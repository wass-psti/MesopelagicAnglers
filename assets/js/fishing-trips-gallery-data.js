/* =========================================================
   MESOPELAGIC ANGLERS — FISHING TRIPS GALLERY DATA
   File: assets/js/fishing-trips-gallery-data.js
   ========================================================= */

(() => {
  "use strict";

  const galleryGrid = document.getElementById("tripGalleryGrid");

  if (!galleryGrid) {
    return;
  }

  /*
   * Diver is the first featured photograph in Documentation.
   *
   * The primary filename is images/Diver.png. If your saved file uses
   * .jpg, .jpeg, or .webp instead, the image loader automatically tries
   * those extensions.
   */
  const diverPhoto = {
    src: "images/diver.jpg",
    category: "documentation",
    tag: "Underwater",
    title: "Beneath the Blue",
    description:
      "Exploring the underwater environment surrounding the Mesopelagic Anglers fishing grounds.",
    layout: "feature",
    showCaption: true,
    alt:
      "Diver exploring underwater near the Mesopelagic Anglers fishing grounds"
  };

  const documentationPhotos = [
    {
      src: "images/536285494_1225848222889177_5043625951604212922_n.jpg",
      category: "documentation",
      tag: "Tackle",
      title: "Rigged for the Strike",
      description:
        "A colorful selection of offshore trolling lures prepared for the next run.",
      layout: "feature",
      showCaption: true,
      alt: "Colorful offshore trolling lures prepared for fishing"
    },
    {
      src: "images/644425809_1384924303648234_7673595510810537828_n.jpg",
      category: "documentation",
      tag: "Catch",
      title: "The Catch Comes Aboard",
      description:
        "A successful catch raised from the water after a productive offshore session.",
      layout: "tall",
      showCaption: true,
      alt: "Fresh fish being lifted aboard the Mesopelagic Anglers boat"
    },
    {
      src: "images/682530505_1434188518721812_7770289035412447444_n.jpg",
      category: "documentation",
      tag: "Bait Preparation",
      title: "Bait Prepared for the Drift",
      description:
        "Fresh bait prepared and organized before the next fishing pass.",
      layout: "",
      showCaption: true,
      alt: "Fresh bait prepared for an offshore fishing session"
    },
    {
      src: "images/682992084_1434188548721809_4018429536833011259_n.jpg",
      category: "documentation",
      tag: "Angler Moment",
      title: "A Proud Offshore Catch",
      description:
        "A memorable catch captured aboard the Mesopelagic Anglers boat.",
      layout: "",
      showCaption: true,
      alt: "Angler proudly holding a catch aboard the boat"
    },
    {
      src: "images/683031450_1434188502055147_943364686898463989_n.jpg",
      category: "documentation",
      tag: "On the Water",
      title: "Quiet Water, Open Horizon",
      description:
        "Mesopelagic Anglers moving through calm water beyond the Cebu coastline.",
      layout: "wide",
      showCaption: true,
      alt: "Mesopelagic Anglers boat travelling across calm offshore water"
    },
    {
      src: "images/683245501_1434187972055200_4709095748128680428_n.jpg",
      category: "documentation",
      tag: "Boat Operations",
      title: "At the Helm",
      description:
        "Guiding the vessel through the fishing grounds during an offshore expedition.",
      layout: "",
      showCaption: true,
      alt: "Boat operator at the helm during an offshore trip"
    },
    {
      src: "images/683389148_1434188302055167_2285264030603550985_n.jpg",
      category: "documentation",
      tag: "Boat Life",
      title: "Ready for the Next Run",
      description:
        "The vessel and crew prepared for another pass across the fishing grounds.",
      layout: "tall",
      showCaption: true,
      alt: "Mesopelagic Anglers vessel prepared for another fishing run"
    },
    {
      src: "images/683539404_1434188442055153_5704225369062469666_n.jpg",
      category: "documentation",
      tag: "Sunset Session",
      title: "Last Light on the Line",
      description:
        "Fishing continues as the final light settles over the water.",
      layout: "",
      showCaption: true,
      alt: "Angler fishing during the final light of the day"
    },
    {
      src: "images/683546311_1434188608721803_1708772071397120849_n.jpg",
      category: "documentation",
      tag: "Catch Handling",
      title: "The Day's Catch Secured",
      description:
        "Fresh catches safely stored after a productive session offshore.",
      layout: "",
      showCaption: true,
      alt: "Fresh catches secured after an offshore fishing trip"
    },
    {
      src: "images/684152012_1434188588721805_1148318638511611606_n.jpg",
      category: "documentation",
      tag: "Fleet",
      title: "Power for the Passage",
      description:
        "The boat's outboard engines prepared for long-distance offshore travel.",
      layout: "wide",
      showCaption: true,
      alt: "Outboard engines powering the Mesopelagic Anglers boat"
    },
    {
      src: "images/684230150_1434189122055085_5708986855777702905_n.jpg",
      category: "documentation",
      tag: "Diving",
      title: "Returning to the Surface",
      description:
        "An underwater moment captured as the diver returns toward the boat.",
      layout: "",
      showCaption: true,
      alt: "Diver returning toward the surface near the boat"
    },
    {
      src: "images/684748907_1434188055388525_4212461628854999526_n.jpg",
      category: "documentation",
      tag: "Boat Life",
      title: "Between Fishing Grounds",
      description:
        "A quiet transition aboard the vessel while moving between offshore locations.",
      layout: "tall",
      showCaption: true,
      alt: "Boat travelling between offshore fishing grounds"
    },
    {
      src: "images/684750194_1434188748721789_1870143518087854624_n.jpg",
      category: "documentation",
      tag: "Crew",
      title: "The People Behind the Journey",
      description:
        "A familiar face aboard the vessel during another Mesopelagic Anglers trip.",
      layout: "",
      showCaption: true,
      alt: "Crew member aboard the Mesopelagic Anglers vessel"
    },
    {
      src: "images/685017179_1434188155388515_5070270500638209915_n.jpg",
      category: "documentation",
      tag: "Catch",
      title: "Another Successful Run",
      description:
        "A fresh catch marking the result of another productive offshore session.",
      layout: "",
      showCaption: true,
      alt: "Fresh catch from a successful offshore fishing session"
    },
    {
      src: "images/685856760_1434189398721724_3901998489780786380_n.jpg",
      category: "documentation",
      tag: "Trip Memory",
      title: "A Day Shared Offshore",
      description:
        "A memorable fishing experience shared with the crew and guests aboard.",
      layout: "wide",
      showCaption: true,
      alt: "Crew and guests sharing a memorable offshore fishing trip"
    },
    {
      src: "images/730414256_1484588130348517_3105433140253366812_n.jpg",
      category: "documentation",
      tag: "Scenery",
      title: "The Route Is Part of the Story",
      description:
        "Open water and coastal scenery seen along the journey to the fishing grounds.",
      layout: "",
      showCaption: true,
      alt: "Open water and coastal scenery along the fishing route"
    },
    {
      src: "images/731883908_1484527510354579_8413813446820592292_n.jpg",
      category: "documentation",
      tag: "Fishing Trip",
      title: "Made for Days Like This",
      description:
        "A complete offshore experience shaped by good conditions, good company, and time on the water.",
      layout: "tall",
      showCaption: true,
      alt: "Mesopelagic Anglers fishing trip on a clear offshore day"
    }
  ];

  /* Snapper remains the first Friends & Catches image. */
  const snapperPhoto = {
    src: "friends-and-catches/snapper.jpg",
    category: "friends-catches",
    tag: "Featured Catch",
    title: "Snapper Catch",
    description:
      "A featured snapper catch from a Mesopelagic Anglers fishing trip.",
    layout: "feature",
    showCaption: true,
    alt: "Snapper catch photographed aboard the Mesopelagic Anglers boat"
  };

  /*
   * The remaining Friends & Catches photos display without card captions
   * and without lightbox captions.
   */
  const friendsAndCatchesPhotos = Array.from({ length: 31 }, (_, index) => {
    const number = index + 1;

    return {
      src: `friends-and-catches/gal (${number}).png`,
      category: "friends-catches",
      tag: "",
      title: "",
      description: "",
      layout: "",
      showCaption: false,
      alt: `Mesopelagic Anglers friends and catches photo ${number}`
    };
  });

  const createCard = (photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `trip-gallery-card${photo.layout ? ` trip-gallery-card--${photo.layout}` : ""}`;
    button.dataset.category = photo.category;
    button.dataset.gallerySrc = photo.src;
    button.dataset.galleryAlt = photo.alt || `${photo.title}, Mesopelagic Anglers fishing trip photograph`;
    button.dataset.galleryCaption = photo.showCaption
      ? [photo.title, photo.description].filter(Boolean).join(" — ")
      : "";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = button.dataset.galleryAlt;
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";

    /*
     * Try alternate Diver extensions when the exact extension used in
     * the repository differs from the primary .png path.
     */
    if (Array.isArray(photo.fallbackSources) && photo.fallbackSources.length) {
      let fallbackIndex = 0;

      image.addEventListener("error", () => {
        if (fallbackIndex >= photo.fallbackSources.length) {
          return;
        }

        image.src = photo.fallbackSources[fallbackIndex];
        fallbackIndex += 1;
      });
    }

    button.append(image);

    if (photo.showCaption) {
      const overlay = document.createElement("span");
      overlay.className = "trip-gallery-card__overlay";

      const tag = document.createElement("span");
      tag.className = "trip-gallery-card__tag";
      tag.textContent = photo.tag;

      const title = document.createElement("strong");
      title.textContent = photo.title;

      overlay.append(tag, title);

      if (photo.description) {
        const description = document.createElement("small");
        description.textContent = photo.description;
        overlay.append(description);
      }

      button.append(overlay);
    } else {
      button.classList.add("trip-gallery-card--no-caption");
    }

    return button;
  };

  const fragment = document.createDocumentFragment();
  const allPhotos = [
    diverPhoto,
    ...documentationPhotos,
    snapperPhoto,
    ...friendsAndCatchesPhotos
  ];

  allPhotos.forEach((photo, index) => {
    fragment.append(createCard(photo, index));
  });

  galleryGrid.append(fragment);
})();
