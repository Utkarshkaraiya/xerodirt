import Link from 'next/link';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.brand} aria-label="Xerodirt home">
              <img src="/brand/Xerodirt-Logo-177E73.svg" width="170" height="35" alt="" />
            </Link>
            <p className={styles.brandText}>
              Professional home cleaning services in Pune. We make your home cleaner,
              healthier and happier.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/goxerodirt" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61586138220359" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://wa.me/917559337336" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://www.youtube.com/@go_xerodirt" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Company</h4>
            <div className={styles.links}>
              <Link href="/about">About Us</Link>
              <Link href="/app-terms-and-conditions">Terms and Conditions</Link>
              <Link href="/app-privacy-policy">Privacy Policy</Link>
              <Link href="/app-refund-and-cancellation">Refund and Cancellation</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Services</h4>
            <div className={styles.links}>
              <Link href="/category/bathroom-cleaning">Washroom Cleaning</Link>
              <Link href="/category/kitchen-cleaning">Kitchen Cleaning</Link>
              <Link href="/category/flat-cleaning">Flat Cleaning</Link>
              <Link href="/category/mini-services">Appliance Cleaning</Link>
              <Link href="/category/subscription">Subscription Plans</Link>
            </div>
          </div>

          <div>
            <h4 className={styles.title}>Contact</h4>
            <div className={styles.contactList}>
              <a href="tel:8467942643"><FaPhoneAlt /> +91 84679 42643</a>
              <a href="https://wa.me/917559337336" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> +91 75593 37336</a>
              <a href="mailto:info@xerodirt.com"><FaEnvelope /> info@xerodirt.com</a>
              <span><FaMapMarkerAlt /> Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 Xerodirt. All rights reserved.</p>
          <p>Professional Cleaning Services in Pune</p>
        </div>
      </div>
    </footer>
  );
}
