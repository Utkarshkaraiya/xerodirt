'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LandingPageClient({ page, relatedAreaPages, relatedServicePages }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="landing-hero" id="landing-hero">
        <div className="landing-hero-bg" />
        <div className="container">
          <nav className="landing-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="landing-breadcrumb-sep">/</span>
            <Link href={page.categoryRef}>{page.serviceName}</Link>
            <span className="landing-breadcrumb-sep">/</span>
            <span className="landing-breadcrumb-current">{page.areaName}</span>
          </nav>

          <div className="landing-hero-content">
            <div className="landing-hero-text">
              <div className="landing-hero-badge">
                {page.serviceIcon} {page.trustLine}
              </div>
              <h1 className="landing-hero-title">{page.heroHeading}</h1>
              <p className="landing-hero-subtext">{page.heroSubtext}</p>

              <div className="landing-hero-stats">
                <div className="landing-hero-stat">
                  <span className="landing-stat-value">4.9★</span>
                  <span className="landing-stat-label">Google Rating</span>
                </div>
                <div className="landing-hero-stat">
                  <span className="landing-stat-value">5000+</span>
                  <span className="landing-stat-label">Homes Cleaned</span>
                </div>
                <div className="landing-hero-stat">
                  <span className="landing-stat-value">₹{page.startingPrice}</span>
                  <span className="landing-stat-label">Starting Price</span>
                </div>
              </div>

              <div className="landing-hero-actions">
                <Link href="/book" className="btn btn-primary btn-lg">
                  Book Now — ₹{page.startingPrice} →
                </Link>
                <a
                  href={`https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20need%20${encodeURIComponent(page.serviceName)}%20in%20${encodeURIComponent(page.areaName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white btn-lg"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LOCAL HIGHLIGHT BAR ====== */}
      <section className="landing-highlight-bar">
        <div className="container">
          <p>{page.localHighlight}</p>
        </div>
      </section>

      {/* ====== INTRO CONTENT ====== */}
      <section className="section landing-intro" id="landing-intro">
        <div className="container">
          <div className="landing-intro-grid">
            <div className="landing-intro-content">
              <span className="section-label">About This Service</span>
              <h2 className="section-title">Professional {page.serviceName} in {page.areaName}</h2>
              {page.introParas.map((para, i) => (
                <p key={i} className="landing-intro-para">{para}</p>
              ))}
            </div>
            <div className="landing-intro-sidebar">
              <div className="landing-quick-info-card">
                <h4>Quick Info</h4>
                <ul>
                  <li>
                    <span className="landing-qi-icon">💰</span>
                    <div>
                      <strong>Starting Price</strong>
                      <span>₹{page.startingPrice}</span>
                    </div>
                  </li>
                  <li>
                    <span className="landing-qi-icon">📍</span>
                    <div>
                      <strong>Service Area</strong>
                      <span>{page.areaName}{page.parentCity ? `, ${page.parentCity}` : ', Maharashtra'}</span>
                    </div>
                  </li>
                  <li>
                    <span className="landing-qi-icon">⏱️</span>
                    <div>
                      <strong>Duration</strong>
                      <span>60-90 minutes</span>
                    </div>
                  </li>
                  <li>
                    <span className="landing-qi-icon">✅</span>
                    <div>
                      <strong>Guarantee</strong>
                      <span>100% Satisfaction</span>
                    </div>
                  </li>
                </ul>
                <Link href={page.categoryRef} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  View All Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section section-light landing-why" id="landing-why">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Xerodirt</span>
            <h2 className="section-title">Why Choose Xerodirt in {page.areaName}</h2>
            <p className="section-subtitle">{page.areaDescription}</p>
          </div>
          <div className="landing-why-grid">
            {page.whyChoosePoints.map((point, i) => (
              <div key={i} className="landing-why-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="landing-why-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRICING SNAPSHOT ====== */}
      <section className="section landing-pricing" id="landing-pricing">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Transparent Pricing</span>
            <h2 className="section-title">{page.serviceName} Prices in {page.areaName}</h2>
            <p className="section-subtitle">No hidden charges. The price you see is the price you pay.</p>
          </div>
          <div className="landing-pricing-grid">
            {page.pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`landing-pricing-card reveal ${tier.bestseller ? 'bestseller' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {tier.bestseller && (
                  <div className="landing-pricing-badge">★ MOST POPULAR</div>
                )}
                <h3 className="landing-pricing-name">{tier.name}</h3>
                <div className="landing-pricing-price">
                  <span className="landing-pricing-currency">₹</span>
                  <span className="landing-pricing-amount">{tier.price}</span>
                </div>
                <p className="landing-pricing-highlight">{tier.highlight}</p>
                <Link href={page.categoryRef} className="btn btn-primary" style={{ width: '100%' }}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>
          <div className="landing-pricing-cta reveal">
            <p>Want to see complete service details, what&apos;s included, and what&apos;s not?</p>
            <Link href={page.categoryRef} className="btn btn-secondary">
              View Full {page.serviceName} Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="section section-light" id="landing-how">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Book {page.serviceName} in {page.areaName} in 3 Steps</h2>
          </div>
          <div className="how-it-works-grid">
            {[
              { num: '1', title: 'Choose Your Plan', desc: `Browse our ${page.serviceName.toLowerCase()} options and pick the one that fits your needs and budget.` },
              { num: '2', title: 'Schedule & Confirm', desc: `Select a convenient date and time. Book instantly via WhatsApp or our booking page. We serve all of ${page.areaName}.` },
              { num: '3', title: 'Sit Back & Relax', desc: 'Our trained professionals arrive on time with all supplies and equipment. Enjoy your sparkling clean space!' },
            ].map((step, i) => (
              <div key={i} className="how-step reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="how-step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCAL FAQS ====== */}
      <section className="section landing-faqs" id="landing-faqs">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">{page.serviceName} in {page.areaName} — FAQs</h2>
            <p className="section-subtitle">Common questions from {page.areaName} customers.</p>
          </div>
          <div className="faq-list">
            {page.localFaqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OTHER SERVICES IN THIS AREA ====== */}
      {relatedServicePages.length > 0 && (
        <section className="section section-light landing-related" id="landing-other-services">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-label">More Services</span>
              <h2 className="section-title">Other Cleaning Services in {page.areaName}</h2>
              <p className="section-subtitle">Explore all our professional cleaning services available in {page.areaName}.</p>
            </div>
            <div className="landing-related-grid">
              {relatedServicePages.map((rp, i) => (
                <Link
                  key={rp.slug}
                  href={`/${rp.slug}`}
                  className="landing-related-card reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="landing-related-icon">{rp.serviceIcon}</span>
                  <span className="landing-related-name">{rp.serviceName}</span>
                  <span className="landing-related-area">in {rp.areaName}</span>
                  <span className="landing-related-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== NEARBY AREAS ====== */}
      {relatedAreaPages.length > 0 && (
        <section className="section landing-nearby" id="landing-nearby">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-label">Nearby Areas</span>
              <h2 className="section-title">{page.serviceName} in Other Areas</h2>
              <p className="section-subtitle">{page.nearbyNote}</p>
            </div>
            <div className="landing-nearby-pills">
              {relatedAreaPages.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${rp.slug}`}
                  className="landing-nearby-pill"
                >
                  📍 {rp.areaName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA ====== */}
      <section className="cta-section" id="landing-cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready for Professional {page.serviceName} in {page.areaName}?</h2>
            <p>Book now and experience the Xerodirt difference — starting at just ₹{page.startingPrice}.</p>
            <div className="cta-buttons">
              <Link href="/book" className="btn btn-primary btn-lg">Book Now →</Link>
              <a
                href={`https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20need%20${encodeURIComponent(page.serviceName)}%20in%20${encodeURIComponent(page.areaName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
