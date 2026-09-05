'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#why-us', label: 'Why Us' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrap} aria-label="Xerodirt home">
          <img src="/brand/Xerodirt-Logo-177E73.svg" width="100" height="auto" alt="" className={styles.logoImage} />
          {/*<span className={styles.logoSub}>PROFESSIONAL HOME CLEANING</span>*/}
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/book" className={styles.bookCta}>
            Book Now
            <span aria-hidden="true" className={styles.arrow}>-&gt;</span>
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? 'X' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/book" className={styles.mobileBook} onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
