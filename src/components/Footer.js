import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">XERODIRT</div>
            <p className="footer-brand-desc">
              Professional washroom &amp; home cleaning services in Pune. On-demand cleaning to empower urban households with spotless living spaces.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/917559337336" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
              <a href="https://maps.app.goo.gl/ANGcThTrtfmNNYrm9" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">📍</a>
              <a href="tel:7987788640" aria-label="Phone">📞</a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <div className="footer-links">
              <Link href="/services#washroom-cleaning">Washroom Cleaning</Link>
              <Link href="/services#flat-cleaning">Flat Cleaning</Link>
              <Link href="/services#kitchen-cleaning">Kitchen Cleaning</Link>
              <Link href="/services#mini-services">Mini Services</Link>
              <Link href="/services#monthly-cleaning">Monthly Cleaning</Link>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/book">Book Now</Link>
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href="tel:7987788640">79877 88640</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <a href="https://wa.me/917559337336" target="_blank" rel="noopener noreferrer">+91 75593 37336</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <span>info@xerodirt.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Xerodirt. All rights reserved.</p>
          <p>Professional Cleaning Services in Pune</p>
        </div>
      </div>
    </footer>
  );
}
