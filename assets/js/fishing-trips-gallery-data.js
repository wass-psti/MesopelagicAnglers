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
    src: "images/Diver.png",
    fallbackSources: [
      "images/Diver.jpg",
      "images/Diver.jpeg",
      "images/Diver.webp",
      "images/diver.png",
      "images/diver.jpg"
    ],
    category: "documentation",
    tag: "Underwater documentation",
    title: "Diving Into the Fishing Grounds",
    description: "A closer look beneath the surface during a Mesopelagic Anglers offshore expedition.",
    layout: "feature",
    showCaption: true,
    alt: "Diver exploring beneath the water during a Mesopelagic Anglers offshore expedition"
  };

  const documentationPhotos = [
    ["images/536285494_1225848222889177_5043625951604212922_n.jpg","Featured trip","A day worth remembering","Customer outing and fresh catch","feature"],
    ["images/644425809_1384924303648234_7673595510810537828_n.jpg","Boat life","Out on the water","","tall"],
    ["images/682530505_1434188518721812_7770289035412447444_n.jpg","Catch","The result of the chase","",""] ,
    ["images/682992084_1434188548721809_4018429536833011259_n.jpg","Customers","Shared offshore moments","",""] ,
    ["images/683031450_1434188502055147_943364686898463989_n.jpg","On the water","Beyond the shoreline","","wide"],
    ["images/683245501_1434187972055200_4709095748128680428_n.jpg","Catch","Offshore reward","",""] ,
    ["images/683389148_1434188302055167_2285264030603550985_n.jpg","Angler moment","A catch for the camera","","tall"],
    ["images/683539404_1434188442055153_5704225369062469666_n.jpg","Boat life","Part of the journey","",""] ,
    ["images/683546311_1434188608721803_1708772071397120849_n.jpg","Catch","From sea to deck","",""] ,
    ["images/684152012_1434188588721805_1148318638511611606_n.jpg","Scenery","Blue water and open horizons","","wide"],
    ["images/684230150_1434189122055085_5708986855777702905_n.jpg","Customers","The trip highlight","",""] ,
    ["images/684748907_1434188055388525_4212461628854999526_n.jpg","Boat life","Between fishing grounds","","tall"],
    ["images/684750194_1434188748721789_1870143518087854624_n.jpg","Customers","Good company offshore","",""] ,
    ["images/685017179_1434188155388515_5070270500638209915_n.jpg","Catch","Another successful run","",""] ,
    ["images/685856760_1434189398721724_3901998489780786380_n.jpg","Trip memory","Better shared with the crew","","wide"],
    ["images/730414256_1484588130348517_3105433140253366812_n.jpg","Scenery","The route itself is part of the story","",""] ,
    ["images/731883908_1484527510354579_8413813446820592292_n.jpg","Fishing trip","Made for days like this","","tall"]
  ].map(([src, tag, title, description, layout]) => ({
    src,
    category: "documentation",
    tag,
    title,
    description,
    layout,
    showCaption: true
  }));

  /* Snapper is intentionally the first Friends & Catches image. */
  const snapperPhoto = {
    src: "friends-and-catches/snapper.jpg",
    category: "friends-catches",
    tag: "Featured catch",
    title: "Snapper catch",
    description: "A featured catch from a Mesopelagic Anglers fishing trip.",
    layout: "feature",
    showCaption: true
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
