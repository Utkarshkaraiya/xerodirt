'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaPhoneAlt,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUserCheck,
  FaWhatsapp,
} from 'react-icons/fa';

import styles from './page.module.css';
import { FaAppStore } from "react-icons/fa";
import Image from 'next/image';

const serviceCards = [
  {
    name: 'Washroom Cleaning',
    description: 'Deep cleaning and sanitation for a hygienic washroom.',
    image: '/images/ui/service-washroom-3d.jpg',
    href: '/category/bathroom-cleaning',
  },
  {
    name: 'Kitchen Cleaning',
    description: 'Degreasing and disinfecting for a spotless kitchen.',
    image: '/images/ui/service-kitchen-3d.jpg',
    href: '/category/kitchen-cleaning',
  },
  {
    name: 'Flat Cleaning',
    description: 'Complete home cleaning for a fresh start.',
    image: '/images/ui/service-flat-3d.jpg',
    href: '/category/flat-cleaning',
  },
  {
    name: 'Mini Services',
    description: 'AC, fridge, chimney and more cleaned to perfection.',
    image: '/images/ui/service-appliance-3d.jpg',
    href: '/category/mini-services',
  },
  {
    name: 'Subscription Plans',
    description: 'Regular cleaning plans that fit your lifestyle.',
    image: '/images/ui/service-subscription-3d.jpg',
    href: '/category/subscription',
  },
];

const steps = [
  {
    title: 'Choose Your Service',
    description: 'Select the cleaning service you need.',
    icon: '/images/ui/how-choose-3d.jpg',
  },
  {
    title: 'Schedule and Confirm',
    description: 'Pick a date and time that works for you.',
    icon: '/images/ui/how-schedule-3d.jpg',
  },
  {
    title: 'Sit Back and Relax',
    description: 'Our experts will take care of the rest.',
    icon: '/images/ui/how-relax-3d.jpg',
  },
];

const trustPoints = [
  {
    icon: <FaUserCheck />,
    title: 'Trained Experts',
    description: 'Skilled professionals trained for every cleaning need.',
  },
  {
    icon: <FaLeaf />,
    title: 'Premium Products',
    description: 'We use eco-friendly and safe cleaning products.',
  },
  {
    icon: <FaCheck />,
    title: '100% Satisfaction',
    description: "Not happy? We re-clean it. Your satisfaction is our promise.",
  },
  {
    icon: <FaRegClock />,
    title: 'Flexible Plans',
    description: 'Choose from one-time or subscription plans that suit you.',
  },
];

const testimonials = [
  {
    quote: 'Xerodirt transformed my bathroom and kitchen! Super professional and very thorough cleaning.',
    name: 'Ankita Deshmukh',
    location: 'Kothrud, Pune',
  },
  {
    quote: "I use their monthly plan and it's worth every penny. My home always feels fresh.",
    name: 'Vikrant Patil',
    location: 'Baner, Pune',
  },
  {
    quote: 'On-time, polite staff and excellent cleaning quality. Highly recommended!',
    name: 'Saurabh Rast',
    location: 'Wakad, Pune',
  },
];

const faqs = [
  {
    question: 'How do I book a cleaning service?',
    answer: 'You can book instantly from the Book Now button or call/WhatsApp us for quick confirmation.',
  },
  {
    question: 'What areas in Pune do you serve?',
    answer: 'We serve major localities across Pune including Baner, Wakad, Kothrud, Hinjewadi, Aundh, and nearby areas.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use premium and eco-friendly cleaning products that are safe for families and pets.',
  },
  {
    question: 'How long does a typical cleaning session take?',
    answer: 'Most services take 45-120 minutes depending on service type and condition.',
  },
  {
    question: 'Do I need to provide any cleaning supplies?',
    answer: 'No. Our team carries all required tools and supplies.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer: 'You can reschedule or cancel in advance. If service quality falls short, we offer a prompt re-clean.',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.trustBadge}>
                <FaCheck aria-hidden="true" />
                <p>Trusted by 5000+ Homes in Pune</p>
              </div>

              <h1 className={styles.heroTitle}>
                Professional <span>Cleaning</span> Services in Pune
              </h1>

              <p className={styles.heroText}>
                Premium cleaning for your home. Expert professionals,
                eco-friendly products, and 100% satisfaction guaranteed.
              </p>

              <div className={styles.heroActions}>
                <Link href="/book" className={styles.primaryBtn}>
                  Book via App <FaAppStore />
                </Link>
                <a href="tel:8467942643" className={styles.secondaryBtn}>
                  <FaPhoneAlt /> Call Us
                </a>
              </div>

              <div className={styles.heroHighlights}>
                <div><FaShieldAlt /> Background Verified Professionals</div>
                <div><FaLeaf /> Eco-Friendly Products</div>
                <div><FaCheck /> 100% Satisfaction Guarantee</div>
              </div>
            </div>

            <div className={styles.heroVisualWrap}>
              <Image src="/images/ui/xerodirt-her-mobile-app.png" width={1024} height={1536} priority alt="Two Xerodirt cleaning professionals at work in a home" className={styles.heroVisual} />
              <img src="/brand/xerodirt-logo-white.svg" width="220" height="46" alt="Xerodirt" className={styles.phoneLogo} />
              <div className={styles.heroMetricCard}>
                <div>
                  <strong>5000+</strong>
                  <span>Homes Cleaned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>OUR SERVICES</span>
            <h2>Everything Your Home Needs</h2>
            <p>
              From washrooms to kitchens, flats to appliances - we have every
              corner covered with professional care.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {serviceCards.map((service) => (
              <Link key={service.name} href={service.href} className={styles.serviceCard}>
                <img src={service.image} alt={service.name} />
                <div className={styles.serviceBody}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>HOW IT WORKS</span>
            <h2>Book in 3 Simple Steps</h2>
            <p>Getting your home professionally cleaned has never been easier.</p>
          </div>

          <div className={styles.stepsWrap}>
            <div className={styles.stepLine} />
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <img src={step.icon} alt={step.title} />
                <strong>{index + 1}</strong>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
            <img src="/images/ui/cta-kit-3d.jpg" alt="Cleaning kit" className={styles.stepKit} />
          </div>
        </div>
      </section>

      <section className={styles.section} id="why-us">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>WHY XERODIRT</span>
            <h2>Why 5000+ Homes Trust Us</h2>
            <p>
              We are not just cleaners - we are your hygiene partners committed
              to excellence.
            </p>
          </div>

          <div className={styles.trustGrid}>
            {trustPoints.map((item) => (
              <article key={item.title} className={styles.trustCard}>
                <div className={styles.trustIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.statsBar}>
            <div><strong>5000+</strong><span>Homes Cleaned</span></div>
            <div><strong>4.9 <FaStar /></strong><span>Google Rating</span></div>
            <div><strong>50+</strong><span>Professionals</span></div>
            <div><strong>3+</strong><span>Years Experience</span></div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="reviews">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>REVIEWS</span>
            <h2>What Our Customers Say</h2>
            <p>Trusted by homeowners across Pune.</p>
            <div className={styles.googleBadge}>
              <img src="/google-icon.svg" alt="Google" />
              <span>4.9/5 Google Rating</span>
            </div>
          </div>

            <div className="testimonial-carousel-wrapper">
              <div className="fade-left"></div>
              <div className="fade-right"></div>
              <div className="track-top">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="testimonial-stars">
                      {'★'.repeat(5)}
                    </div>
                    <p className="testimonial-text">
                      &ldquo;{t.quote.length > 100 ? t.quote.slice(0, 110) + "..." : t.quote}&rdquo;
                    </p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                      <div>
                        <div className="testimonial-author-name">{t.name}</div>
                        <div className="testimonial-author-date">{t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonial-carousel-wrapper">
              <div className="fade-left"></div>
              <div className="fade-right"></div>
              <div className="track-bottom">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="testimonial-stars">
                      {'★'.repeat(5)}
                    </div>
                    <p className="testimonial-text">
                      &ldquo;{t.quote.length > 100 ? t.quote.slice(0, 110) + "..." : t.quote}&rdquo;
                    </p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                      <div>
                        <div className="testimonial-author-name">{t.name}</div>
                        <div className="testimonial-author-date">{t.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`} id="faq">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            <img src="/images/ui/xerodirt-faq-premium-transparent-shadow.png" alt="FAQ illustration" className={styles.faqArt} />

            <div className={styles.faqList}>
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <article key={item.question} className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <span className={styles.plus}>{isOpen ? '-' : '+'}</span>
                    </button>
                    <div className={styles.faqAnswer}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={styles.container}>
          <div className={styles.bottomCtaInner}>
            <div>
              <h2>Ready for a Sparkling Clean Home?</h2>
              <p>
                Book your professional cleaning service today and experience the
                Xerodirt difference.
              </p>
            </div>

            <img src="/images/ui/xerodirt-floating-cleaning-kit.svg" alt="Floating cleaning kit" className={styles.ctaVisual} />

            <div className={styles.bottomActions}>
              <Link href="/book" className={styles.whiteBtn}>
                Book Now <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsBtn}
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
