// ─── Programmatic SEO Landing Pages Data ───
// Each city × service combination gets a unique landing page with localized SEO content.
// Pattern: /[slug] → e.g. /bathroom-cleaning-services-in-pune
//
// To add a new city or service, just add entries to the arrays below.
// Pages are auto-generated at build time via generateStaticParams.

// ─── AREAS WE SERVE ───
export const areas = [
  { id: 'pune', name: 'Pune', type: 'city' },
  { id: 'kothrud', name: 'Kothrud', type: 'area', parentCity: 'Pune' },
  { id: 'hinjewadi', name: 'Hinjewadi', type: 'area', parentCity: 'Pune' },
  { id: 'wakad', name: 'Wakad', type: 'area', parentCity: 'Pune' },
  { id: 'baner', name: 'Baner', type: 'area', parentCity: 'Pune' },
  { id: 'aundh', name: 'Aundh', type: 'area', parentCity: 'Pune' },
  { id: 'kharadi', name: 'Kharadi', type: 'area', parentCity: 'Pune' },
  { id: 'viman-nagar', name: 'Viman Nagar', type: 'area', parentCity: 'Pune' },
  { id: 'hadapsar', name: 'Hadapsar', type: 'area', parentCity: 'Pune' },
];

// ─── LANDING PAGE SERVICES ───
export const landingServices = [
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    categoryRef: '/category/bathroom-cleaning',
    slugPrefix: 'bathroom-cleaning-services-in',
    icon: '🚿',
    startingPrice: 189,
  },
  {
    id: 'flat-cleaning',
    name: 'Flat Cleaning',
    categoryRef: '/category/flat-cleaning',
    slugPrefix: 'flat-cleaning-services-in',
    icon: '🏠',
    startingPrice: 1499,
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    categoryRef: '/category/kitchen-cleaning',
    slugPrefix: 'kitchen-cleaning-services-in',
    icon: '🍳',
    startingPrice: 499,
  },
  {
    id: 'subscription',
    name: 'Cleaning Subscription Plans',
    categoryRef: '/category/subscription',
    slugPrefix: 'cleaning-subscription-plans-in',
    icon: '📅',
    startingPrice: 599,
  },
];

// ─── UNIQUE CONTENT PER AREA ───
// Each area has localized blurbs, trust signals, and FAQs

const areaContent = {
  pune: {
    trustLine: 'Trusted by 5000+ homes across Pune',
    localHighlight: 'Pune\'s most-reviewed cleaning service with a 4.9★ Google rating.',
    areaDescription: 'Pune is a bustling metro with a mix of modern apartments, IT hubs, and traditional homes — all of which need regular professional cleaning to stay hygienic and comfortable.',
    nearbyNote: 'We serve all major areas in Pune including Kothrud, Hinjewadi, Wakad, Baner, Aundh, Kharadi, Viman Nagar, Hadapsar, and many more.',
  },
  kothrud: {
    trustLine: 'Serving 800+ families in Kothrud',
    localHighlight: 'From Karve Road societies to Paud Road apartments — Kothrud\'s go-to cleaning service.',
    areaDescription: 'Kothrud is one of Pune\'s most established residential areas, home to dense housing societies, senior citizens, and working families who value cleanliness and reliability.',
    nearbyNote: 'Also serving nearby areas like Warje, Bavdhan, and Erandwane with the same quality and pricing.',
  },
  hinjewadi: {
    trustLine: 'Cleaning 500+ flats in Hinjewadi monthly',
    localHighlight: 'Pune\'s IT hub deserves spotless homes after long work hours — that\'s where we come in.',
    areaDescription: 'Hinjewadi is home to thousands of IT professionals living in modern high-rise apartments across phases 1, 2, and 3. With busy schedules, professional cleaning isn\'t a luxury — it\'s a necessity.',
    nearbyNote: 'We also cover Maan, Marunji, and nearby Hinjewadi Phase 1-3 complexes.',
  },
  wakad: {
    trustLine: 'Trusted by 600+ Wakad homeowners',
    localHighlight: 'Quick service across Wakad\'s top societies — Kolte Patil, Datta Mandir Road, and more.',
    areaDescription: 'Wakad has exploded with new residential projects in recent years, bringing young families and professionals who want hassle-free, affordable cleaning solutions for their new apartments.',
    nearbyNote: 'We extend our services to Pimple Saudagar, Pimple Nilakh, and surrounding areas.',
  },
  baner: {
    trustLine: 'Premium cleaning for 700+ Baner residences',
    localHighlight: 'From premium towers on Baner Road to cozy 1BHKs — we clean them all impeccably.',
    areaDescription: 'Baner is one of Pune\'s most sought-after residential and commercial areas, known for premium apartments and a thriving restaurant scene. Homes here deserve equally premium cleaning.',
    nearbyNote: 'Also serving Balewadi, Pashan, and Sus Road areas with the same pricing.',
  },
  aundh: {
    trustLine: 'Serving 400+ homes in Aundh & surroundings',
    localHighlight: 'From DP Road apartments to University area homes — Aundh trusts Xerodirt.',
    areaDescription: 'Aundh combines a vibrant student community with established residential areas and modern apartments. Its mix of old and new construction means diverse cleaning needs — and we handle them all.',
    nearbyNote: 'We also serve nearby Sanghvi, PCMC areas, and Bopodi.',
  },
  kharadi: {
    trustLine: 'Cleaning 450+ apartments in Kharadi',
    localHighlight: 'EON Free Zone professionals come home to clean spaces — thanks to Xerodirt.',
    areaDescription: 'Kharadi has quickly become one of East Pune\'s most desirable residential areas, powered by the IT corridor and new luxury projects. Our services match the quality these homes deserve.',
    nearbyNote: 'Services also available in Chandan Nagar, Wagholi, and Mundhwa.',
  },
  'viman-nagar': {
    trustLine: 'Serving 550+ homes in Viman Nagar',
    localHighlight: 'Viman Nagar\'s fast-paced lifestyle needs a cleaning service that keeps up — we do.',
    areaDescription: 'Viman Nagar is a premium residential and commercial hub near Pune airport, home to professionals, families, and expats who expect top-notch service quality and reliability.',
    nearbyNote: 'We also cover Dhanori, Kalyani Nagar, and Yerawada neighborhoods.',
  },
  hadapsar: {
    trustLine: 'Trusted by 500+ families in Hadapsar',
    localHighlight: 'From Magarpatta City to Amanora — Hadapsar\'s largest cleaning service provider.',
    areaDescription: 'Hadapsar is one of Pune\'s largest and fastest-growing residential hubs, featuring massive township projects and a diverse mix of apartments that need consistent, professional maintenance.',
    nearbyNote: 'Also serving Fursungi, Undri, Wanowrie, and NIBM areas.',
  },
};

// ─── UNIQUE CONTENT PER SERVICE ───

const serviceContent = {
  'bathroom-cleaning': {
    heroSubtext: (area) => `Sparkling clean bathrooms starting at just ₹189. Professional deep cleaning with machine-assisted stain removal, disinfection, and hard water deposit treatment in ${area}.`,
    introParas: (area) => [
      `Looking for professional bathroom cleaning services in ${area}? Xerodirt provides expert washroom deep cleaning that eliminates stubborn hard water stains, soap scum, mold, and bacteria — leaving your bathroom hygienically clean and smelling fresh.`,
      `Our trained professionals use commercial-grade equipment including buffing machines, eco-friendly cleaning solutions specifically formulated for Indian hard water conditions, and hospital-grade disinfectants. Every session covers your toilet, washbasin, tiles, taps, mirrors, and floor — inside and out.`,
      `Whether you need a one-time deep clean to restore your bathroom or regular maintenance to keep it spotless, our flexible plans fit every budget. Book in under 60 seconds and our verified team arrives fully equipped — you don't need to provide anything.`,
    ],
    pricingTiers: [
      { name: 'Basic Bathroom Cleaning', price: 189, highlight: 'Quick surface cleaning without machines' },
      { name: 'Deep Bathroom Cleaning', price: 389, highlight: 'Machine-assisted deep clean with stain removal', bestseller: true },
    ],
    whyChoosePoints: (area) => [
      { icon: '🧹', title: 'Machine-Assisted Deep Clean', desc: `Our buffing machines remove tough tile stains and hard water deposits that manual cleaning simply can't handle — common in ${area}'s water supply.` },
      { icon: '🧴', title: 'Eco-Friendly Products', desc: 'Plant-based, biodegradable cleaning products that are safe for children, pets, and the environment — without compromising on cleaning power.' },
      { icon: '⏱️', title: 'Done in 60 Minutes', desc: 'Our efficient team completes a thorough bathroom deep clean in about 60 minutes, minimizing disruption to your day.' },
      { icon: '🛡️', title: 'Full Disinfection', desc: 'Hospital-grade sanitization of all touchpoints — toilet handles, taps, flush, and door handles — for complete peace of mind.' },
    ],
    localFaqs: (area) => [
      { q: `What does bathroom cleaning service in ${area} include?`, a: `Our bathroom cleaning in ${area} covers deep cleaning of the toilet seat (inside & outside), washbasin, floor scrubbing, tile and grout cleaning, tap and mirror polishing, hard water stain removal, and full disinfection of all touchpoints. The deep clean option includes machine-assisted floor scrubbing.` },
      { q: `How much does bathroom cleaning cost in ${area}?`, a: `Basic bathroom cleaning starts at ₹189 and deep bathroom cleaning with machine assistance starts at ₹389 in ${area}. No hidden charges — the price you see is the price you pay.` },
      { q: `How long does a bathroom deep clean take in ${area}?`, a: `A professional bathroom deep clean typically takes 45-60 minutes depending on the size and condition of your washroom. Our team arrives fully equipped with all supplies and machines.` },
      { q: `Do I need to provide any cleaning supplies?`, a: `No! Our ${area} cleaning team brings all professional-grade cleaning supplies, machines, and equipment. You don't need to arrange anything.` },
      { q: `Can I book regular bathroom cleaning in ${area}?`, a: `Absolutely! We offer monthly subscription plans starting at ₹599/month for 3 scheduled cleaning visits. This is the most popular option among our ${area} customers for maintaining consistent washroom hygiene.` },
    ],
  },

  'flat-cleaning': {
    heroSubtext: (area) => `Complete apartment deep cleaning starting at ₹1,499. Professional flat cleaning for 1BHK, 2BHK, and 3BHK unfurnished apartments in ${area}.`,
    introParas: (area) => [
      `Need professional flat cleaning services in ${area}? Xerodirt specializes in comprehensive apartment deep cleaning that covers every room — living areas, bedrooms, kitchen, bathrooms, and balconies — ensuring your home is spotlessly clean from floor to ceiling.`,
      `Whether you're moving into a new flat, preparing for a move-out inspection, or simply want a thorough deep clean, our trained team handles it all. We use industrial-grade machines for floor scrubbing, along with premium cleaning products that cut through months of accumulated dust, grime, and stains.`,
      `Our flat cleaning service is especially popular in ${area} among tenants during move-in/move-out, families preparing for festivals, and homeowners who want a professional-grade clean that regular house help simply can't deliver.`,
    ],
    pricingTiers: [
      { name: '1 BHK Flat Cleaning', price: 1499, highlight: 'All rooms, kitchen, bathroom & balcony' },
      { name: '2 BHK Flat Cleaning', price: 2499, highlight: 'Comprehensive deep clean for 2BHK', bestseller: true },
      { name: '3 BHK Flat Cleaning', price: 3499, highlight: 'End-to-end 3BHK deep clean' },
    ],
    whyChoosePoints: (area) => [
      { icon: '🏠', title: 'Every Room Covered', desc: `We clean every corner of your ${area} flat — living room, bedrooms, kitchen, bathrooms, and balconies. No room is left behind.` },
      { icon: '🔧', title: 'Machine Floor Scrubbing', desc: 'Industrial-grade floor scrubbing machines remove embedded dirt and stains that regular mopping misses — restoring your tiles to near-original condition.' },
      { icon: '✨', title: 'Ceiling to Floor', desc: 'We don\'t just mop. Our team dusts ceilings, fans, switchboards, light fixtures, and cleans side walls, partition glass, and all surfaces.' },
      { icon: '📅', title: 'Move-In/Move-Out Ready', desc: `Perfect for ${area} tenants changing flats. We leave the apartment inspection-ready with our thorough deep cleaning process.` },
    ],
    localFaqs: (area) => [
      { q: `How much does flat cleaning cost in ${area}?`, a: `Flat cleaning in ${area} starts at ₹1,499 for a 1BHK, ₹2,499 for a 2BHK, and ₹3,499 for a 3BHK. These prices are for unfurnished flats. Contact us for a custom quote for furnished apartments.` },
      { q: `What does flat cleaning include in ${area}?`, a: `Our flat cleaning covers deep cleaning of all rooms — floor sweeping, mopping & machine scrubbing, dusting of ceilings, fans, switchboards & light fixtures, kitchen slab & tiles, bathroom deep cleaning, side walls, and stain removal.` },
      { q: `How long does flat deep cleaning take?`, a: `A 1BHK typically takes 3-4 hours, a 2BHK takes 4-5 hours, and a 3BHK takes 5-6 hours. The exact duration depends on the condition and size of the apartment.` },
      { q: `Is flat cleaning available for furnished apartments in ${area}?`, a: `Our standard flat cleaning service is designed for unfurnished flats. For furnished apartments, we offer customized cleaning packages. Contact us via WhatsApp for a personalized quote.` },
      { q: `Can I book flat cleaning for a move-out in ${area}?`, a: `Yes! Move-out cleaning is one of our most popular services in ${area}. We ensure the flat is left in pristine condition for your deposit return or new tenant handover.` },
    ],
  },

  'kitchen-cleaning': {
    heroSubtext: (area) => `Professional kitchen deep cleaning starting at ₹499. Complete oil, grease & grime removal for a hygienic cooking space in ${area}.`,
    introParas: (area) => [
      `Searching for professional kitchen cleaning services in ${area}? Xerodirt provides thorough kitchen deep cleaning that tackles the toughest oil buildup, grease stains, and food residue — transforming your cooking space into a spotless, hygienic environment.`,
      `Kitchens accumulate layers of oil, grease, and food residue that regular cleaning can't remove. Our professional team uses commercial-grade degreasing agents and scrubbing techniques to deep clean your kitchen platform, tiles, backsplash, sink, drainage, and floor — leaving everything grease-free and sanitized.`,
      `We offer three tiers of kitchen cleaning in ${area}: standard kitchen cleaning for basic kitchens, modular kitchen deep cleaning for kitchens with up to 7 cabinets, and large kitchen cleaning for spacious kitchens with extensive cabinetry.`,
    ],
    pricingTiers: [
      { name: 'Kitchen Deep Cleaning', price: 499, highlight: 'Platform, tiles, sink & floor cleaning' },
      { name: 'Modular Kitchen Deep Cleaning', price: 1199, highlight: 'Includes cabinet cleaning (up to 7)', bestseller: true },
      { name: 'Large Kitchen Deep Cleaning', price: 1699, highlight: 'For kitchens with 7+ cabinets' },
    ],
    whyChoosePoints: (area) => [
      { icon: '🍳', title: 'Heavy Degreasing', desc: `Indian cooking generates intense oil and grease buildup. Our commercial-grade degreasers cut through layers of accumulated grease that regular cleaning products can't touch.` },
      { icon: '🧽', title: 'Backsplash & Tile Scrubbing', desc: 'We deep scrub kitchen tiles and backsplash areas where grease splatters accumulate, restoring them to their original appearance.' },
      { icon: '🚰', title: 'Sink & Drainage Cleaning', desc: `Kitchen sinks and drains in ${area} homes often harbor bacteria and odors. We thoroughly clean and sanitize these critical areas.` },
      { icon: '🗄️', title: 'Cabinet Deep Clean', desc: 'For modular kitchens, we clean inside and outside all cabinets and trolleys — removing food residue, pest traces, and accumulated grime.' },
    ],
    localFaqs: (area) => [
      { q: `How much does kitchen cleaning cost in ${area}?`, a: `Kitchen deep cleaning in ${area} starts at ₹499 for standard kitchens, ₹1,199 for modular kitchens (up to 7 cabinets), and ₹1,699 for large kitchens. All prices include professional cleaning supplies.` },
      { q: `What does kitchen cleaning include?`, a: `Our kitchen cleaning covers deep cleaning of the platform & slab, sink & drainage, tiles/backsplash degreasing, and floor cleaning. Modular kitchen plans also include cabinet and trolley cleaning inside and out.` },
      { q: `How long does kitchen deep cleaning take in ${area}?`, a: `Standard kitchen cleaning takes about 60-90 minutes. Modular kitchen cleaning takes 2-3 hours depending on the number of cabinets and level of grease buildup.` },
      { q: `Do you clean kitchen appliances like chimney and fridge?`, a: `Chimney cleaning (₹299) and fridge cleaning (₹199-₹299) are available as separate mini services. You can add them to your kitchen cleaning booking for a complete kitchen overhaul.` },
      { q: `Is kitchen cleaning safe for modular surfaces?`, a: `Absolutely. We use cleaning products specifically chosen to be effective on grease while being gentle on modular kitchen surfaces, laminates, and granite countertops. No abrasive chemicals that could damage your kitchen.` },
    ],
  },

  subscription: {
    heroSubtext: (area) => `Hassle-free monthly washroom maintenance starting at ₹599/month. 3 scheduled cleaning visits per month to keep your bathrooms consistently clean in ${area}.`,
    introParas: (area) => [
      `Tired of booking bathroom cleaning every time in ${area}? Xerodirt's subscription plans give you scheduled, recurring washroom maintenance — so your bathrooms stay consistently clean without you having to remember to book each time.`,
      `Our subscription plans are designed for ${area} homeowners and tenants who understand that bathroom hygiene requires regular attention, not just occasional deep cleans. With 3 scheduled visits per month, our trained team maintains your washrooms at a consistently high standard.`,
      `Choose from plans for 1, 2, or 3 washrooms. Each visit covers toilet seat cleaning, washbasin cleaning, floor cleaning, and basic fitting & touchpoint cleaning. It's the smartest way to maintain bathroom hygiene in ${area} — set it up once and forget about it.`,
    ],
    pricingTiers: [
      { name: '1 Washroom Subscription', price: 599, highlight: '3 visits/month for 1 washroom' },
      { name: '2 Washroom Subscription', price: 1099, highlight: '3 visits/month for 2 washrooms', bestseller: true },
      { name: '3 Washroom Subscription', price: 1599, highlight: '3 visits/month for 3 washrooms' },
    ],
    whyChoosePoints: (area) => [
      { icon: '📅', title: 'Set It & Forget It', desc: `No more remembering to book each time. Your ${area} washrooms get cleaned on a fixed schedule — 3 visits every month, automatically.` },
      { icon: '💰', title: 'Best Value', desc: 'Subscription plans offer significantly better per-visit pricing compared to one-time bookings. The more washrooms, the more you save.' },
      { icon: '👨‍🔧', title: 'Consistent Team', desc: `The same trained professional is assigned to your ${area} home, ensuring consistent quality and familiarity with your washroom's specific needs.` },
      { icon: '📊', title: 'Hygiene Tracking', desc: 'We maintain service logs for every visit so you can track cleaning history and ensure consistent maintenance standards.' },
    ],
    localFaqs: (area) => [
      { q: `How does the subscription plan work in ${area}?`, a: `Once you subscribe, we schedule 3 cleaning visits per month for your washroom(s) in ${area}. Our team arrives on the scheduled dates with all supplies — you just need to provide access. You can reschedule visits with advance notice.` },
      { q: `What does each subscription visit include?`, a: `Each visit covers toilet seat cleaning (inside & outside), washbasin cleaning, floor cleaning, and basic fitting & touchpoint cleaning. It's hygiene maintenance cleaning — for deep cleaning with machines, you'd book our one-time deep cleaning service.` },
      { q: `Can I cancel or pause my subscription?`, a: `Yes, you can pause or cancel your subscription at any time. We believe in earning your business every month, not locking you into long contracts.` },
      { q: `How much does a cleaning subscription cost in ${area}?`, a: `Monthly subscription plans in ${area} start at ₹599/month for 1 washroom, ₹1099/month for 2 washrooms, and ₹1,599/month for 3 washrooms. That's 3 professional cleaning visits per month.` },
      { q: `Is this different from deep bathroom cleaning?`, a: `Yes. Subscription visits are hygiene maintenance cleans — regular cleaning to keep things consistently clean. Deep cleaning (₹189-₹389) uses machines and heavy-duty products for thorough stain removal and restoration. We recommend a deep clean first, then subscription for ongoing maintenance.` },
    ],
  },
};

// ─── GENERATE ALL LANDING PAGES ───

function generateLandingPages() {
  const pages = [];

  for (const area of areas) {
    for (const service of landingServices) {
      const areaInfo = areaContent[area.id];
      const serviceInfo = serviceContent[service.id];
      const areaName = area.name;
      const serviceName = service.name;

      const slug = `${service.slugPrefix}-${area.id}`;

      pages.push({
        slug,
        areaId: area.id,
        areaName,
        areaType: area.type,
        parentCity: area.parentCity || null,
        serviceId: service.id,
        serviceName,
        serviceIcon: service.icon,
        categoryRef: service.categoryRef,
        startingPrice: service.startingPrice,

        // SEO Meta
        metaTitle: `${serviceName} in ${areaName} — Starting ₹${service.startingPrice} | Xerodirt`,
        metaDescription: `Professional ${serviceName.toLowerCase()} services in ${areaName}, Pune. ${areaInfo.trustLine}. Trained professionals, eco-friendly products, 100% satisfaction guaranteed. Book now!`,
        metaKeywords: `${serviceName.toLowerCase()} ${areaName.toLowerCase()}, ${serviceName.toLowerCase()} services in ${areaName.toLowerCase()}, professional ${serviceName.toLowerCase()} ${areaName.toLowerCase()}, best ${serviceName.toLowerCase()} ${areaName.toLowerCase()}, affordable ${serviceName.toLowerCase()} ${areaName.toLowerCase()}, xerodirt ${areaName.toLowerCase()}`,

        // Hero
        heroHeading: `${serviceName} in ${areaName}`,
        heroSubtext: serviceInfo.heroSubtext(areaName),

        // Unique Content
        trustLine: areaInfo.trustLine,
        localHighlight: areaInfo.localHighlight,
        introParas: serviceInfo.introParas(areaName),
        whyChoosePoints: serviceInfo.whyChoosePoints(areaName),

        // Pricing
        pricingTiers: serviceInfo.pricingTiers,

        // FAQs
        localFaqs: serviceInfo.localFaqs(areaName),

        // Area info
        areaDescription: areaInfo.areaDescription,
        nearbyNote: areaInfo.nearbyNote,
      });
    }
  }

  return pages;
}

export const landingPages = generateLandingPages();

// ─── HELPER FUNCTIONS ───

export function getLandingPageBySlug(slug) {
  return landingPages.find((p) => p.slug === slug) || null;
}

export function getAllLandingPageSlugs() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export function getRelatedAreaPages(currentSlug) {
  const current = getLandingPageBySlug(currentSlug);
  if (!current) return [];
  return landingPages
    .filter((p) => p.serviceId === current.serviceId && p.slug !== currentSlug)
    .map((p) => ({ slug: p.slug, areaName: p.areaName, serviceName: p.serviceName }));
}

export function getRelatedServicePages(currentSlug) {
  const current = getLandingPageBySlug(currentSlug);
  if (!current) return [];
  return landingPages
    .filter((p) => p.areaId === current.areaId && p.slug !== currentSlug)
    .map((p) => ({ slug: p.slug, areaName: p.areaName, serviceName: p.serviceName, serviceIcon: p.serviceIcon }));
}
