import Link from 'next/link';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">XERODIRT</div>
            <p className="footer-brand-desc">
              Professional washroom &amp; home cleaning services in Pune. On-demand cleaning to empower urban households with spotless living spaces.
            
              ⭐ 4.9 Rated Service ✅
              </p>
              
              
            
            <div className="footer-social">

              
              <a
                href="https://wa.me/917559337336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://maps.app.goo.gl/ANGcThTrtfmNNYrm9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                <FaMapMarkerAlt />
              </a>



              <a
                href="https://www.instagram.com/goxerodirt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@go_xerodirt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://x.com/goxerodirt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61586138220359"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div>
            {/*<h4>Services</h4>
            <div className="footer-links">
              <Link href="./category/washroom">Washroom Cleaning</Link>
              <Link href="/category/flat">Flat Cleaning</Link>
              <Link href="/category/kitchen">Kitchen Cleaning</Link>
              <Link href="/category/mini">Mini Services</Link>
              <Link href="/category/monthly">Monthly Cleaning</Link>
            </div>*/}
          </div>

          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/book">Book Now</Link>
              <Link href="/myorders">My Orders</Link>
              <Link href="/privacypolicy">Privacy Policy</Link>
              <Link href="/termsofservice">Terms of Service</Link>
            </div>
          </div>

          <div>
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <a href="tel:7987788640">
                +91 79877 88640
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaWhatsapp />
              </span>

              <a
                href="https://wa.me/917559337336"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 75593 37336
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <a href="mailto:info@xerodirt.com">
                info@xerodirt.com
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

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
