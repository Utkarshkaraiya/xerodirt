/*********************************
 * CONFIG
 *********************************/
const WHATSAPP_NUMBER = "917559337336";

/*********************************
 * SERVICE DETAILS (DETAIL MODAL)
 *********************************/
const SERVICES = {
  basic: {
    title: "Basic Washroom Cleaning",
    subtitle: "Quick and essential cleaning without machines.",
    inclusions: [
      "Toilet seat cleaning (inside & outside)",
      "Washbasin cleaning",
    ],
    exclusions: [
      "Machine cleaning",
      "Hard stain removal",
      "Shower glass cleaning",
      "Tile scrubbing,floor scrubbing", "Acid damage, permanent stains, or etched surfaces",
    ]
  },

  deep: {
    title: "Deep Washroom Cleaning",
    subtitle: "Machine-based deep cleaning.",
    inclusions: [
     "Full washroom cleaning including toilet seat (inside and outside).",
    "Deep floor clean, sink, tiles, taps, mirrors.",
    "Heavy stain and hard water deposit removal from tiles, fittings, and grout lines.",
    "Buffing machine used for deep floor scrubbing.",
    "Disinfection of all touchpoints — handles, taps, andflush areas."
      
    ],
    exclusions: [ "Acid damage, permanent stains, or etched surfaces", "Ceiling cleaning","Shower glass cleaning","Heavy mineral restoration"]
  },

  intense2bhk: {
  title: "2 BHK Deep Washroom Cleaning",
  subtitle: "Complete deep cleaning for all washrooms in 2 BHK.",
  inclusions: [
    "All washrooms deep cleaned",
    "Hard water & stain removal",
    "Machine scrubbing & polishing",
    "Disinfection of fixtures"
  ],
  exclusions: [
    "Fixture replacement",
    "Ceiling or fan cleaning",
    "Heavy mineral restoration",
     "Acid damage, permanent stains, or etched surfaces",
  ]
},

flat3bhk: {
  title: "3 BHK Deep Washroom Cleaning",
  subtitle: "Deep cleaning for all washrooms in 3 BHK.",
  inclusions: [
   "All 3 BHK washrooms cleaned — toilets, basins, tiles, taps, mirrors, and windows.",
    "Removal of hard water stains and grime from all surfaces.",
    "Machine-based scrubbing for deep floor and tile shine.",
    "Thorough disinfection of every touchpoint and fixture.",
    "Deep floor clean, sink, tiles, taps, mirrors, Shower Glass Partition."
  ],
  exclusions: [
   "Furnished interiors and furniture cleaning",
    "Glue, paint stain or sticker removal",
    "Terrace cleaning or inaccessible areas",
    "Wet wiping of walls & ceilings",
    "Window,tracks & mirror cleaning",
  "Acid damage, permanent stains, or etched surfaces",
  ]
},

flat1bhk: {
  title: "1 BHK Flat Cleaning",
  subtitle: "Unfurnished flat deep cleaning.",
  inclusions: [
     "Deep cleaning of living room, bedroom, kitchen, bathroom & balcony",
    "Floor sweeping, mopping & machine scrubbing where required",
    "Dusting of ceilings, fans, switchboards & light fixtures",
    "Kitchen slab, tiles, sink ",
    "Bathroom deep cleaning including toilet seat, washbasin, taps & tiles",
    "Side walls, partition glass & stain removal"
  ],
  exclusions: [
  "Furnished interiors and furniture cleaning",
    "Glue, paint stain or sticker removal",
    "Terrace cleaning or inaccessible areas",
    "Wet wiping of walls & ceilings",
    "Window,tracks & mirror cleaning",
  "Acid damage, permanent stains, or etched surfaces",
  ]
},

flat2bhk: {
  title: "2 BHK Flat Cleaning",
  subtitle: "Unfurnished flat deep cleaning.",
  inclusions: [
   "Deep cleaning of living room, bedrooms, kitchen, bathrooms & balcony",
    "Floor sweeping, mopping & machine scrubbing where required",
    "Dusting of ceilings, fans, switchboards & light fixtures",
    "Kitchen slab, tiles, sink & stove exterior cleaning",
    "Bathroom deep cleaning including toilet seat, washbasin, taps & tiles",
    "Side walls, partition glass & stain removal"
    
  ],
  exclusions: [
   "Furnished interiors and furniture cleaning",
    "Glue, paint stain or sticker removal",
    "Terrace cleaning or inaccessible areas",
    "Wet wiping of walls & ceilings",
    "Window,tracks & mirror cleaning",
  "Acid damage, permanent stains, or etched surfaces",
  ]
},

  kitchen: {
    title: "Modular Kitchen Deep Cleaning",
    subtitle: "Oil & grease removal.",
    inclusions: [ "Platform & slab deep cleaning.",
    "Sink & drainage area cleaning.",
    "Tiles / backsplash degreasing.",
    "Cabinet & trolley cleaning (inside & outside).",
    "If the kitchen trolley is removable, we will remove, clean, and refit it.",
    "Floor cleaning."],
    exclusions: ["Appliance interior", "Stove, chimney exterior cleaning.", "Acid damage, permanent stains, or etched surfaces",]
  },
  kitchenuf: {
  title: "Kitchen Deep Cleaning",
  subtitle: "Thorough oil, grease & hygiene-focused cleaning for empty kitchens.",
  inclusions: [
    "Deep cleaning of kitchen platform & slab.",
    "Sink & drainage area cleaning.",
    "Tiles / backsplash degreasing and scrubbing.",
    "Floor deep cleaning and mopping."
  ],
  exclusions: [
    "kitchen trolleys and cabinets (inside & outside)",
    "Appliance interior cleaning (oven, microwave, refrigerator, etc.)",
    "Stove, chimney exterior or interior cleaning",
    "Acid damage, permanent stains, or etched surfaces",
    "Repair, polishing, or replacement work"
  ]
}
,

monthly1: {
  title: "1 Washroom – Monthly Cleaning Plan",
  subtitle: "Hygiene maintenance with 3 scheduled visits per month.",
  inclusions: [
    "3 scheduled cleaning visits per month",
    "Cleaning of toilet seat, washbasin & floor",
    "Basic fittings & touchpoint cleaning",
    "Regular hygiene maintenance"
  ],
  exclusions: [
    "Deep cleaning with machines",
    "Hard water stain removal",
    "Tile restoration or repairs", "Acid damage, permanent stains, or etched surfaces",
  ]
},

monthly2: {
  title: "2 Washrooms – Monthly Cleaning Plan",
  subtitle: "Professional hygiene maintenance for 2 washrooms with 3 monthly visits.",
  inclusions: [
    "3 scheduled cleaning visits per month",
    "Cleaning of both washrooms – toilets, basins & floors",
    "Basic fittings & touchpoint cleaning",
    "Consistent service by trained staff", "Acid damage, permanent stains, or etched surfaces",
  ],
  exclusions: [
    "Deep cleaning with machines",
    "Hard water stain removal",
    "Tile restoration or repairs", "Acid damage, permanent stains, or etched surfaces",
  ]
},

monthly3: {
  title: "3 Washrooms – Monthly Cleaning Plan",
  subtitle: "Comprehensive hygiene maintenance for 3 washrooms with 3 visits per month.",
  inclusions: [
    "3 scheduled cleaning visits per month",
    "Cleaning of all 3 washrooms – toilets, basins & floors",
    "Basic fittings & touchpoint cleaning",
    "Routine hygiene maintenance"
  ],
  exclusions: [
    "Deep cleaning with machines",
    "Hard water stain removal",
    "Tile restoration or repairs", "Acid damage, permanent stains, or etched surfaces",
  ]
},
fan: {
  title: "Ceiling Fan Cleaning",
  subtitle: "Dust-free professional ceiling fan cleaning.",
  inclusions: [
    "Blade dust removal",
    "Motor housing cleaning",
    "Light fixture cleaning (if applicable)",
    "Dry & wet wiping"
  ],
  exclusions: [
    "Electrical repair",
    "Fan dismantling"
  ]
},

window: {
  title: "Window Cleaning",
  subtitle: "Crystal clear glass & frame cleaning.",
  inclusions: [
    "Glass cleaning",
    "Frame wiping",
    "Corner dust removal",
    "Streak-free finish"
  ],
  exclusions: [
    "High-rise exterior glass",
    "Broken glass repair"
  ]
},

wall: {
  title: "Wall Wet Wiping (Per Room)",
  subtitle: "Professional wall cleaning to remove dust & stains.",
  inclusions: [
    "Wet wiping of all walls",
    "Dust & dirt removal",
    "Mild stain cleaning"
  ],
  exclusions: [
    "Paint damage correction",
    "Permanent or acid marks"
  ]
},

sofa: {
  title: "Sofa & Chair Cleaning",
  subtitle: "Deep fabric cleaning per seat.",
  inclusions: [
    "Vacuum cleaning",
    "Stain treatment",
    "Odor removal",
    "Fabric-safe products"
  ],
  exclusions: [
    "Leather repair",
    "Color restoration"
  ]
},

"fridge-single": {
  title: "Single Door Fridge Cleaning",
  subtitle: "Complete hygienic fridge cleaning.",
  inclusions: [
    "Interior deep cleaning",
    "Exterior wiping",
    "Tray & compartment sanitization",
    "Odor removal"
  ],
  exclusions: [
    "Gas refilling",
    "Electrical repairs"
  ]
},

"fridge-double": {
  title: "Double Door Fridge Cleaning",
  subtitle: "Deep cleaning including freezer section.",
  inclusions: [
    "Interior & freezer cleaning",
    "Exterior polishing",
    "Compartment sanitization",
    "Odor removal"
  ],
  exclusions: [
    "Gas refilling",
    "Cooling issue repair"
  ]
},

chimney: {
  title: "Chimney Deep Cleaning",
  subtitle: "Grease-free kitchen chimney service.",
  inclusions: [
    "Filter cleaning",
    "Grease removal",
    "Motor surface cleaning",
    "Exterior polishing"
  ],
  exclusions: [
    "Motor replacement",
    "Electrical repairs"
  ]
}



};

/*********************************
 * CATEGORY SERVICES
 *********************************/
const CATEGORY_SERVICES = {
 washroom: {
  title: "Professional Washroom Cleaning Services",
  services: [
    {
      serviceKey: "basic",
      icon: "fas fa-soap",
      name: "Basic Washroom Cleaning",
      desc: "Essential hygiene-focused cleaning of toilet seat, washbasin, and floor surfaces.",
      price: "₹189",
      oldPrice: "₹399",
      wa: "Basic Washroom Cleaning"
    },
    {
      serviceKey: "deep",
      icon: "fas fa-bath",
      name: "Deep Washroom Cleaning",
      desc: "Machine-assisted deep cleaning to remove stains, grime, and bacteria for complete sanitation.",
      price: "₹289",
      oldPrice: "₹699",
      wa: "Deep Washroom Cleaning"
    }
  ]
},
  flat: {
  title: "Professional Flat Cleaning Services",
  services: [
    {
      serviceKey: "flat1bhk",
      icon: "fas fa-city",
      name: "1 BHK Flat Deep Cleaning",
      desc: "Thorough deep cleaning for unfurnished 1 BHK flats, covering all essential living areas.",
      price: "₹1499",
      oldPrice: "₹3299",
      wa: "1 BHK Flat Deep Cleaning"
    },
    {
      serviceKey: "flat2bhk",
      icon: "fas fa-city",
      name: "2 BHK Flat Deep Cleaning",
      desc: "Comprehensive deep cleaning for unfurnished 2 BHK flats, ensuring complete hygiene and freshness.",
      price: "₹2499",
      oldPrice: "₹3299",
      wa: "2 BHK Flat Deep Cleaning"
    },
    {
      serviceKey: "flat3bhk",
      icon: "fas fa-city",
      name: "3 BHK Flat Deep Cleaning",
      desc: "End-to-end deep cleaning for unfurnished 3 BHK flats with detailed attention to every room.",
      price: "₹3499",
      oldPrice: "₹4299",
      wa: "3 BHK Flat Deep Cleaning"
    }
  ]
},
kitchen: {
  title: "Professional Kitchen Cleaning Services",
  services: [
    {
      serviceKey: "kitchenuf",
      icon: "fas fa-kitchen-set",
      name: "Kitchen Deep Cleaning",
      desc: "Complete cleaning of kitchen surfaces to remove oil, grease, and dirt, ensuring a clean and hygienic cooking space.",
      price: "₹499",
      oldPrice: "₹1299",
      wa: "Kitchen Deep Cleaning"
    },   {
      serviceKey: "Modular kitchen",
      icon: "fas fa-kitchen-set",
      name: "Modular Kitchen Deep Cleaning",
      desc: "Intensive removal of oil, grease, and food residue from all key modular kitchen surfaces for a hygienic cooking space.",
      price: "₹1199",
      oldPrice: "₹1999",
      wa: "Modular Kitchen Deep Cleaning"
    }
  ]
}
,
monthly: {
  title: "Monthly Washroom Cleaning Plans",
  services: [
    {
      serviceKey: "monthly1",
      icon: "fas fa-calendar-check",
      name: "1 Washroom – Monthly Plan",
      desc: "3 scheduled hygiene cleaning visits per month for 1 washroom.",
      price: "₹599/month",
      oldPrice: "₹999/month",
      wa: "1 Washroom Monthly Cleaning"
    },
    {
      serviceKey: "monthly2",
      icon: "fas fa-calendar-check",
      name: "2 Washrooms – Monthly Plan",
      desc: "Professional cleaning with 3 scheduled visits per month for 2 washrooms.",
      price: "₹999/month",
      oldPrice: "₹1499/month",
      wa: "2 Washrooms Monthly Cleaning"
    },
    {
      serviceKey: "monthly3",
      icon: "fas fa-calendar-check",
      name: "3 Washrooms – Monthly Plan",
      desc: "Complete monthly hygiene maintenance with 3 visits for 3 washrooms.",
      price: "₹1399/month",
      oldPrice: "₹1999/month",
      wa: "3 Washrooms Monthly Cleaning"
    }
  ]
},mini: {
  title: "💎 Mini Cleaning Services",
  services: [
    {   
      serviceKey: "fan",
      icon: "fas fa-fan",
      name: "Ceiling Fan Cleaning",
      desc: "Professional dust and grease removal for ceiling fans.",
      price: "₹49",
      oldPrice: "₹120",
      wa: "Ceiling Fan Cleaning"
    },
    {
      serviceKey: "window",
      icon: "fas fa-border-all",
      name: "Window Cleaning",
      desc: "Streak-free glass and frame cleaning per window.",
      price: "₹149",
      oldPrice: "₹500",
      wa: "Window Cleaning"
    },
    {
      serviceKey: "wall",
      icon: "fas fa-paint-roller",
      name: "Wall Wet Wiping (Per Room)",
      desc: "Wet wiping of walls to remove dust, stains, and marks.",
      price: "₹399",
      oldPrice: "₹800",
      wa: "Wall Wet Wiping"
    },
    {
      serviceKey: "sofa",
      icon: "fas fa-couch",
      name: "Sofa & Chair Cleaning",
      desc: "Deep vacuum and stain treatment per seat.",
      price: "₹129",
      oldPrice: "₹250",
      wa: "Sofa Cleaning"
    },
    {
      serviceKey: "fridge-single",
      icon: "fas fa-snowflake",
      name: "Single Door Fridge Cleaning",
      desc: "Interior & exterior fridge cleaning with odor removal.",
      price: "₹199",
      oldPrice: "₹500",
      wa: "Single Door Fridge Cleaning"
    },
    {
      serviceKey: "fridge-double",
      icon: "fas fa-snowflake",
      name: "Double Door Fridge Cleaning",
      desc: "Complete fridge & freezer deep cleaning.",
      price: "₹299",
      oldPrice: "₹650",
      wa: "Double Door Fridge Cleaning"
    },
    {
      serviceKey: "chimney",
      icon: "fas fa-fire-burner",
      name: "Chimney Deep Cleaning",
      desc: "Grease removal, filter cleaning & exterior polishing.",
      price: "₹299",
      oldPrice: "₹700",
      wa: "Chimney Deep Cleaning"
    }
  ]
}

};

/*********************************
 * CATEGORY MODAL OPEN
 *********************************/
document.querySelectorAll(".view-services").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = CATEGORY_SERVICES[btn.dataset.category];
    if (!cat) return;

    document.getElementById("categoryTitle").textContent = cat.title;

    const box = document.getElementById("categoryServices");
    box.innerHTML = "";

    cat.services.forEach(s => {
      box.innerHTML += `
        <div class="service-card">
          <i class="${s.icon}"></i>
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          <div class="price">${s.price}
            <span style="text-decoration:line-through;font-size:12px;color:#777;">
              ${s.oldPrice}
            </span>
          </div>
          <div class="action-row">
            <button class="book-btn" data-wa="${s.wa}">Book Now</button>
            <button class="details-btn" data-service="${s.serviceKey}">
              View Details
            </button>
          </div>
        </div>
      `;
    });

    openModal("categoryModal");
  });
});
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".book-btn");
  if (!btn) return;

  const serviceName = btn.dataset.wa;
  const message = `Hi, I want to book *${serviceName}* service.`;
  const encoded = encodeURIComponent(message);

  window.open(
    `https://wa.me/917559337336?text=${encoded}`,
    "_blank"
  );
});


/*********************************
 * SERVICE DETAILS MODAL
 *********************************/
document.addEventListener("click", e => {
  const btn = e.target.closest(".details-btn");
  if (!btn) return;

  const s = SERVICES[btn.dataset.service];
  if (!s) return;

  document.getElementById("modalTitle").textContent = s.title;
  document.getElementById("modalSub").textContent = s.subtitle;
  document.getElementById("modalInclusions").innerHTML =
    s.inclusions.map(i => `<li>${i}</li>`).join("");
  document.getElementById("modalExclusions").innerHTML =
    s.exclusions.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modalBook").onclick = () => {
    const msg = encodeURIComponent(`Hi, I want to book ${s.title}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  openModal("serviceModal");
});

/*********************************
 * MODAL HELPERS
 *********************************/
function openModal(id) {
  document.getElementById(id).classList.add("show");
  document.body.classList.add("modal-open");
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("show"));
  document.body.classList.remove("modal-open");
}
function closeCurrentModal(element) {
  const modal = element.closest(".modal");
  if (!modal) return;

  modal.classList.remove("show");

  // unlock scroll only if no modal is open
  if (!document.querySelector(".modal.show")) {
    document.body.classList.remove("modal-open");
  }
}


/*********************************
 * MODAL BACKDROP CLICK
 *********************************/
// document.querySelectorAll(".modal").forEach(modal => {
//   modal.addEventListener("click", e => {
//     if (e.target === modal) closeAllModals();
//   });
// });

/*********************************
 * CLOSE BUTTON
 *********************************/
// document.getElementById("modalClose")?.addEventListener("click", closeAllModals);

/*********************************
 * MOBILE MENU
 *********************************/
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  overlay.classList.add("active");
});

menuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("active");
}

/*********************************
 * ESC KEY CLOSE
 *********************************/
// document.addEventListener("keydown", e => {
//   if (e.key === "Escape") closeAllModals();
// });
function closeCategoryModal() {
  const modal = document.getElementById("categoryModal");
  if (modal) {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}
function closeCurrentModal(element) {
  const modal = element.closest(".modal");
  if (!modal) return;

  modal.classList.remove("show");

  // remove body lock ONLY if no other modal is open
  if (!document.querySelector(".modal.show")) {
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("show");

      if (!document.querySelector(".modal.show")) {
        document.body.classList.remove("modal-open");
      }
    }
  });
});

document.querySelectorAll(".modal-card").forEach(card => {
  card.addEventListener("click", e => e.stopPropagation());
});
document.querySelectorAll(".service-bg").forEach(card => {
  const bg = card.getAttribute("data-bg");
  if (bg) {
    card.style.backgroundImage = `url('${bg}')`;
  }
});
