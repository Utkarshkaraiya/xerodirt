# Walkthrough: Programmatic SEO Landing Pages

## What Was Built

36 city × service landing pages auto-generated from a single data file — following the same pattern as your blog. These pages target long-tail SEO keywords like "bathroom cleaning services in pune", "flat cleaning services in kothrud", etc.

## Files Created/Modified

### New Files

| File | Purpose |
|------|---------|
| [landing-pages.js](file:///d:/REACT%20APPLICATIONS/xerodirt/src/data/landing-pages.js) | Core data file — 9 areas × 4 services = 36 pages with unique SEO content |
| [page.js](file:///d:/REACT%20APPLICATIONS/xerodirt/src/app/%5Bslug%5D/page.js) | Server component — `generateStaticParams`, `generateMetadata`, JSON-LD schemas |
| [LandingPageClient.js](file:///d:/REACT%20APPLICATIONS/xerodirt/src/app/%5Bslug%5D/LandingPageClient.js) | Client component — full landing page UI with 8 sections |

### Modified Files

| File | Change |
|------|--------|
| [globals.css](file:///d:/REACT%20APPLICATIONS/xerodirt/src/app/globals.css) | Added ~500 lines of landing page CSS (hero, pricing cards, nearby pills, etc.) |

## Architecture

```
landing-pages.js (Data)
    ↓
[slug]/page.js (Server — SSG + SEO)
    ↓
[slug]/LandingPageClient.js (Client — UI)
    ↓
Build → 36 static HTML files
```

## Generated Pages (36 total)

### Bathroom Cleaning (9 pages)
- `/bathroom-cleaning-services-in-pune/`
- `/bathroom-cleaning-services-in-kothrud/`
- `/bathroom-cleaning-services-in-hinjewadi/`
- `/bathroom-cleaning-services-in-wakad/`
- `/bathroom-cleaning-services-in-baner/`
- `/bathroom-cleaning-services-in-aundh/`
- `/bathroom-cleaning-services-in-kharadi/`
- `/bathroom-cleaning-services-in-viman-nagar/`
- `/bathroom-cleaning-services-in-hadapsar/`

### Flat Cleaning (9 pages)
- `/flat-cleaning-services-in-pune/` ... and 8 area pages

### Kitchen Cleaning (9 pages)
- `/kitchen-cleaning-services-in-pune/` ... and 8 area pages

### Cleaning Subscription Plans (9 pages)
- `/cleaning-subscription-plans-in-pune/` ... and 8 area pages

## SEO Features Per Page

- ✅ **Unique `<title>` and `<meta description>`** per page
- ✅ **Unique H1** — e.g. "Bathroom Cleaning Services in Kothrud"
- ✅ **Unique intro content** — 3 paragraphs of localized SEO text
- ✅ **Unique FAQs** — 5 area-specific questions/answers per page
- ✅ **JSON-LD `Service` schema** — for Google rich snippets
- ✅ **JSON-LD `FAQPage` schema** — for FAQ rich results in Google
- ✅ **Canonical URLs** — prevent duplicate content issues
- ✅ **OpenGraph + Twitter cards** — for social sharing
- ✅ **Internal cross-linking** — related areas + related services
- ✅ **Breadcrumb navigation** — Home → Service → Area

## Page Sections

1. **Hero** — Trust badge, H1, subtext, stats, CTA buttons
2. **Highlight Bar** — Area-specific trust line
3. **Intro Content** — 3 unique SEO paragraphs + Quick Info sidebar card
4. **Why Choose Us** — 4 localized trust signal cards
5. **Pricing Snapshot** — Starting prices with "View Full Plans" CTA
6. **How It Works** — 3-step booking process
7. **Local FAQs** — 5 area-specific FAQs (with FAQ schema)
8. **Other Services** — Cross-links to other services in same area
9. **Nearby Areas** — Cross-links to same service in other areas
10. **CTA** — Book Now + WhatsApp

## How to Add More

### Add a new city/area
In [landing-pages.js](file:///d:/REACT%20APPLICATIONS/xerodirt/src/data/landing-pages.js):

1. Add to `areas` array
2. Add to `areaContent` object with `trustLine`, `localHighlight`, `areaDescription`, `nearbyNote`
3. Rebuild — new pages auto-generate

### Add a new service
1. Add to `landingServices` array
2. Add to `serviceContent` object with `heroSubtext`, `introParas`, `pricingTiers`, `whyChoosePoints`, `localFaqs`
3. Rebuild — new pages auto-generate

## Build Verification

```
✓ Generating static pages (56/56)
● /[slug]  →  36 pages generated
  /bathroom-cleaning-services-in-pune
  /flat-cleaning-services-in-pune
  /kitchen-cleaning-services-in-pune
  └ [+33 more paths]
```

No errors. All existing routes continue to work.
