export const metadata = {
  title: 'About Us — Xerodirt Professional Cleaning',
  description: 'Learn about Xerodirt, Pune\'s trusted professional cleaning service provider. Our mission, values, and commitment to cleanliness.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1>The Xerodirt Story</h1>
          <p>We&apos;re on a mission to make professional cleaning accessible and affordable for every home in Pune.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content reveal">
            <div>
              <span className="section-label">Our Mission</span>
              <h2>Making Pune&apos;s Homes Sparkle, One at a Time</h2>
              <p>
                Xerodirt was born from a simple observation — finding reliable, professional cleaning services shouldn&apos;t be hard. We started with washroom cleaning and quickly expanded to cover everything a modern household needs.
              </p>
              <p>
                Today, we serve over 5000 homes across Pune with a team of 50+ trained professionals. Our commitment to quality, transparency, and customer satisfaction has earned us a 4.9★ rating on Google.
              </p>
              <p>
                From a single washroom clean to full apartment makeovers, from plumbing fixes to fresh paint jobs — Xerodirt is your one-stop solution for a cleaner, happier home.
              </p>
            </div>
            <div>
              <img src="/images/mainimg.png" alt="Xerodirt Team" style={{ borderRadius: '16px', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="features-grid reveal">
            {[
              { icon: '🎯', title: 'Quality First', desc: 'Every cleaning meets our rigorous quality standards. We don\'t cut corners.' },
              { icon: '💡', title: 'Transparency', desc: 'Upfront pricing with no hidden charges. What you see is what you pay.' },
              { icon: '⏰', title: 'Punctuality', desc: 'We value your time. Our teams always arrive on schedule, fully prepared.' },
              { icon: '🤝', title: 'Trust', desc: 'Background-verified staff, eco-friendly products, and a satisfaction guarantee.' },
            ].map((v, i) => (
              <div key={i} className="feature-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <p className="section-subtitle">Visit us or find us on Google Maps.</p>
          </div>
          <div className="contact-map reveal" style={{ maxWidth: '900px', margin: '0 auto', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.4501035673498!2d73.6873654!3d18.5828005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbce8fd8c319%3A0xded3b1e3a34a6bdf!2sXerodirt!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Xerodirt Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
