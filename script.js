const SERVICES = {
  basic: {
  title: "Basic Washroom Cleaning",
  subtitle: "Quick and essential cleaning without machines — ideal for daily upkeep and hygiene maintenance.",
  inclusions: [
    "Manual cleaning of toilet seat (inside and outside), washbasin, and floor wipe.",

  ],
  exclusions: [
    "Use of buffing or mechanical cleaning machines",
    "Deep stain or heavy scale removal",
    "Cleaning of Shower Glass Partition.",
    "Cleaning behind permanently fixed units"
  ]
},

deep: {
  title: "Deep Washroom Cleaning",
  subtitle: "Comprehensive cleaning with buffing machine — removes hard stains, dirt, and grime from every corner.",
  inclusions: [
    "Full washroom cleaning including toilet seat (inside and outside).",
    "Deep floor clean, sink, tiles, taps, mirrors, Shower Glass Partition.",
    "Heavy stain and hard water deposit removal from tiles, fittings, and grout lines.",
    "Buffing machine used for deep floor scrubbing.",
    "Cleaning of hard-to-reach corners, walls, and areas behind fixtures.",
    "Disinfection of all touchpoints — handles, taps, andflush areas."
  ],
  exclusions: [
    "Tile or fixture replacement work",
    "Permanent mineral deposit removal requiring industrial restoration",
    "Shower curtain or ceiling cleaning beyond safe reach"
  ]
},

intense2bhk: {
  title: "2 BHK Deep Washroom Cleaning",
  subtitle: "Complete washroom deep cleaning for 2 BHK homes — detailed and professional using buffing machines.",
  inclusions: [
    "Full deep cleaning of all 2 BHK washrooms including toilet seats (inside and outside), floors, tiles, taps, mirrors, and windows.",
    "Hard water and stain removal from tiles, fittings, and grout lines.",
    "Buffing machine used for deep floor scrubbing and polishing.",
    "Cleaning of corners, walls, and behind fixtures.",
    "Disinfection of handles, flush areas, and switches."
  ],
  exclusions: [
    "Fixture replacement or repair work",
    "Ceiling or fan cleaning beyond safe reach",
    "Hard mineral deposit restoration requiring heavy equipment"
  ]
},

intense3bhk: {
  title: "3 BHK Deep Washroom Cleaning",
  subtitle: "Full-scale washroom deep cleaning for 3 BHK homes — industrial-grade cleaning with buffing and sanitization.",
  inclusions: [
    "All 3 BHK washrooms cleaned — toilets, basins, tiles, taps, mirrors, and windows.",
    "Removal of hard water stains and grime from all surfaces.",
    "Machine-based scrubbing for deep floor and tile shine.",
    "Thorough disinfection of every touchpoint and fixture.",
    "Deep floor clean, sink, tiles, taps, mirrors, Shower Glass Partition."
  ],
  
  exclusions: [
    "Major repairs or tile replacement",
    "Cleaning of ceiling fans or vents",
    "Permanent mineral damage restoration"
  ]
},

intensekitchen: {
  title: "Kitchen Cleaning",
  subtitle: "Deep cleaning for a hygienic, grease-free kitchen.",
  inclusions: [
    "Platform & slab deep cleaning.",
    "Sink & drainage area cleaning.",
    "Tiles / backsplash degreasing.",
    "Stove, chimney exterior cleaning.",
    "Cabinet & trolley cleaning (inside & outside).",
    "If the kitchen trolley is removable, we will remove, clean, and refit it.",
    "Floor cleaning."
  ],
  exclusions: [
    "If a nut/bolt is fixed inside the trolley, it will not be removed",
    "No dismantling of permanently fixed fittings",
    "Heavy repairs or carpentry work not included",
    "Appliance interior cleaning (oven, microwave, refrigerator, etc.)"
  ]
},
flat1bhk: {
  title: "1 BHK Full Flat Cleaning",
  subtitle: "Comprehensive deep cleaning for unfurnished 1 BHK flats to ensure a fresh, hygienic living space.",
  inclusions: [
    "Deep cleaning of living room, bedroom, kitchen, bathroom & balcony",
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
    "Window & mirror cleaning",
    "Major repairs or tile replacement"
  ]
}
,
flat2bhk:{
  title: "2 BHK Full Flat Cleaning",
  subtitle: "Thorough deep cleaning for unfurnished 2 BHK flats, covering all essential areas for a spotless and hygienic home.",
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
    "Window & mirror cleaning",
    "Major repairs or tile replacement"
  ]
},

  scheduled: {
    title: "Scheduled Maintenance",
    subtitle: "Recurring visits for consistent hygiene.",
    inclusions: [
      "Weekly or bi-weekly visits.",
      "Mix of deep and basic treatments.",
      "Priority scheduling & discounts.",
      "Regular disinfection of tiles and fixtures.",
      "Monthly inspection & touch-ups."
    ],
    exclusions: [
      "Emergency one-off deep restorations",
      "Major repair works"
    ]
  },
  emergency: {
    title: "Emergency Cleaning",
    subtitle: "Rapid-response cleaning for urgent needs.",
    inclusions: [
      "Immediate team deployment.",
      "Quick disinfection & odor control.",
      "Spot deep-clean for affected fixtures.",
      "Follow-up recommendations."
    ],
    exclusions: [
      "Long-term renovation or repairs"
    ]
  }
};

const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalSub = document.getElementById('modalSub');
const modalInclusions = document.getElementById('modalInclusions');
const modalExclusions = document.getElementById('modalExclusions');

document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const s = SERVICES[btn.dataset.service];
    modalTitle.textContent = s.title;
    modalSub.textContent = s.subtitle;
    modalInclusions.innerHTML = s.inclusions.map(i => `<li>${i}</li>`).join('');
    modalExclusions.innerHTML = s.exclusions.map(e => `<li>${e}</li>`).join('');
    modal.classList.add('show');

    document.getElementById('modalBook').onclick = () => {
      const encodedService = encodeURIComponent(s.title);
      const url = `https://wa.me/917559337336?text=Hi,%20I%20want%20to%20book%20the%20${encodedService}%20service.`;
      window.open(url, '_blank');
    };
  });
});

document.getElementById('modalClose').addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

document.getElementById('menu-toggle').onclick = function() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('overlay').classList.add('active');
};
document.getElementById('menu-close').onclick = closeMenu;
document.getElementById('overlay').onclick = closeMenu;

function buildWhatsAppMessage(form) {
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const address = form.address.value.trim();
  const date = form.date.value;
  const slot = form.slot.value;
  const service = form.service.value;

  const message =
`Hello XeroDirt Team,

I would like to book a cleaning service.

Name: ${name}
Phone: +91${phone}
Address: ${address}
Date: ${date}
Preferred Slot: ${slot}
Service: ${service}

Please confirm availability.`;

  window.open(
    "https://wa.me/917559337336?text=" + encodeURIComponent(message),
    "_blank"
  );

  return false;
}
