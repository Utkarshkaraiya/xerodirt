import Link from 'next/link';
import { landingPages, getLandingPageBySlug, getRelatedAreaPages, getRelatedServicePages } from '@/data/landing-pages';
import LandingPageClient from './LandingPageClient';

// Generate static params for all landing pages
export async function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

// Dynamic SEO metadata per landing page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found — Xerodirt',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
      url: `https://xerodirt.com/${page.slug}`,
      images: [
        {
          url: '/images/mainimg.png',
          width: 1200,
          height: 630,
          alt: page.heroHeading,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/images/mainimg.png'],
    },
    alternates: {
      canonical: `https://xerodirt.com/${page.slug}`,
    },
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <span className="section-label">404</span>
            <h1>Page Not Found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link href="/" className="btn btn-primary">← Back to Home</Link>
          </div>
        </section>
      </>
    );
  }

  const relatedAreaPages = getRelatedAreaPages(slug);
  const relatedServicePages = getRelatedServicePages(slug);

  // JSON-LD Structured Data — LocalBusiness + Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.heroHeading,
    description: page.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Xerodirt',
      image: '/images/mainimg.png',
      telephone: '+917559337336',
      address: {
        '@type': 'PostalAddress',
        addressLocality: page.areaName,
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5204,
        longitude: 73.8567,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
      priceRange: `₹${page.startingPrice}+`,
    },
    areaServed: {
      '@type': 'Place',
      name: page.areaName,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: page.startingPrice,
      availability: 'https://schema.org/InStock',
    },
    url: `https://xerodirt.com/${page.slug}`,
  };

  // FAQ JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.localFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <LandingPageClient
        page={page}
        relatedAreaPages={relatedAreaPages}
        relatedServicePages={relatedServicePages}
      />
    </>
  );
}
