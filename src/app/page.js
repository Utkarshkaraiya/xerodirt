'use client';
import { useState } from 'react';
import Link from 'next/link';
import { majorCategories, testimonials, faqs } from '@/data/services';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero" id="hero">
        <div className="hero-bg-pattern" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge animate-fade-in-up">
                ✨ Trusted by 5000+ homes in Pune
              </div>
              <h1 className="animate-fade-in-up delay-1">
                Professional <span>Cleaning</span> Services in Pune
              </h1>
              <p className="hero-description animate-fade-in-up delay-2">
                On-demand washroom &amp; home cleaning to empower urban households. Affordable pricing, trained professionals, and 100% satisfaction guaranteed.
              </p>
              <div className="hero-buttons animate-fade-in-up delay-3">
                <Link href="/book" className="btn btn-primary btn-lg">
                  Book Now →
                </Link>

              </div>
              <div className="hero-stats-row animate-fade-in-up delay-4">
                <div className="hero-stat">
                  <div className="hero-stat-number">5000+</div>
                  <div className="hero-stat-label">Homes Cleaned</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">4.9★</div>
                  <div className="hero-stat-label">Google Rating</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">50+</div>
                  <div className="hero-stat-label">Professionals</div>
                </div>
              </div>
            </div>
            <div className="hero-image-wrapper animate-fade-in delay-2">
              <div className="hero-image-glow" />
              <img src="/images/mainimg.png" alt="Xerodirt Professional Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Everything Your Home Needs</h2>
            <p className="section-subtitle">From washrooms to kitchens, flats to appliances — we've got every corner covered with professional care.</p>
          </div>
          <div className="services-grid">
            {majorCategories.map((service, i) => (
              <Link href={`/category/${service.id}`} key={service.id} className="service-card reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={service.image} alt={service.name} className="service-card-image" loading="lazy" />
                <div className="service-card-body">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3 className="service-card-name">{service.name}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="section section-light" id="how-it-works">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Book in 3 Simple Steps</h2>
            <p className="section-subtitle">Getting your home professionally cleaned has never been easier.</p>
          </div>
          <div className="how-it-works-grid">
            {[
              { num: '1', title: 'Choose Your Service', desc: 'Browse our range of cleaning services and pick what you need — washroom, kitchen, full flat, or more.' },
              { num: '2', title: 'Schedule & Confirm', desc: 'Select a convenient date and time. Book instantly via WhatsApp or through our booking page.' },
              { num: '3', title: 'Sit Back & Relax', desc: 'Our trained professionals arrive on time with all supplies. Enjoy your sparkling clean space!' },
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

      {/* ====== WHY CHOOSE US ====== */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Xerodirt</span>
            <h2 className="section-title">Why 5000+ Homes Trust Us</h2>
            <p className="section-subtitle">We're not just cleaners — we're your hygiene partners committed to excellence.</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '👨‍🔧', title: 'Trained Professionals', desc: 'Background-verified, trained staff who treat your home with respect and care.' },
              { icon: '💰', title: 'Affordable Pricing', desc: 'Transparent pricing starting as low as ₹49. No hidden charges, no surprises.' },
              { icon: '✅', title: '100% Satisfaction', desc: 'Not happy? We\'ll re-clean at no extra cost. Your satisfaction is our guarantee.' },
              { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Professional-grade, eco-friendly products safe for your family and pets.' },
            ].map((f, i) => (
              <div key={i} className="feature-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: '5000+', label: 'Homes Cleaned' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '50+', label: 'Professionals' },
              { value: '3+', label: 'Years Experience' },
            ].map((s, i) => (
              <div key={i} className="stat-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from real customers who trust Xerodirt for their cleaning needs.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-author-name">{t.name}</div>
                    <div className="testimonial-author-date">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://maps.app.goo.gl/ANGcThTrtfmNNYrm9" target="_blank" rel="noopener noreferrer" className="google-review-badge reveal">
              📍 See all reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Got questions? We&apos;ve got answers.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} style={{ transitionDelay: `${i * 0.05}s` }}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section" id="cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready for a Sparkling Clean Home?</h2>
            <p>Book your professional cleaning service today and experience the Xerodirt difference.</p>
            <div className="cta-buttons">
              <Link href="/book" className="btn btn-primary btn-lg">Book Now →</Link>
              <a href="https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
