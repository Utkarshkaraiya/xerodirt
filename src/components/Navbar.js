'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">XERODIRT</Link>

          <div className="navbar-links">
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/book" className="navbar-cta">Book Now</Link>
            <Link href="/myorders">My Orders</Link>
          </div>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`navbar-mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          {/*<Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>*/}
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/book" onClick={() => setMobileOpen(false)}>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
