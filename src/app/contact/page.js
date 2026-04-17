'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Xerodirt!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/917559337336?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1>Get in Touch</h1>
          <p>Have questions? Need a quote? We&apos;re just a message away.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>Let&apos;s Talk</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
                Whether you want to book a service, get a custom quote, or just have a question — we&apos;re here to help.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card-icon">📞</div>
                  <h4>Phone</h4>
                  <p><a href="tel:7987788640">79877 88640</a></p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-card-icon">💬</div>
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/917559337336" target="_blank" rel="noopener noreferrer">+91 75593 37336</a></p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-card-icon">📧</div>
                  <h4>Email</h4>
                  <p>info@xerodirt.com</p>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-card-icon">📍</div>
                  <h4>Location</h4>
                  <p>Pune, Maharashtra</p>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us what you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send via WhatsApp →
                </button>
              </form>
            </div>

            <div className="contact-map">
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
        </div>
      </section>
    </>
  );
}
