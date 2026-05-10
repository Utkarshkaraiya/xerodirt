'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function BookPage() {
  const { cartItems, cartTotal, cartItemCount, updateQuantity, removeFromCart } = useCart();

  const [showAppModal, setShowAppModal] = useState(false);

  // TODO: Replace these with your actual app store URLs
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.xerodirt.app';
  const APP_STORE_URL = 'https://apps.apple.com/app/xerodirt/id000000000';

  useEffect(() => {
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showAppModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showAppModal]);

  return (
    <>
      {/* Hero */}
      <section className="checkout-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--primary-light)' }}>
            Checkout
          </span>
          <h1>Complete Your Booking</h1>
          <p>Review your cart and place your order via the Xerodirt app.</p>
        </div>
      </section>

      {/* Main Checkout */}
      <section className="checkout-section">
        <div className="container">
          <div className="checkout-layout">
            {/* Step Indicator — single dot since there's only one step now */}
            <div className="checkout-stepper">
              <div className="checkout-step-dot active" />
            </div>

            <div className="checkout-card">
              {/* ===== CART OVERVIEW ===== */}
              <div>
                <div className="checkout-step-title">
                  <span className="checkout-step-num">1</span>
                  Cart Overview
                </div>

                {cartItemCount === 0 ? (
                  <div className="checkout-empty-cart">
                    <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🛒</div>
                    <p>Your cart is empty. Browse our services and add items.</p>
                    <Link href="/#services" className="btn btn-primary">
                      Browse Services
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="checkout-cart-list">
                      {cartItems.map((item) => (
                        <div key={item.id} className="checkout-cart-row">
                          <div className="checkout-cart-row-info">
                            <div>
                              <div className="checkout-cart-row-name">{item.tier.name}</div>
                              <div className="checkout-cart-row-service">{item.service.name}</div>
                            </div>
                          </div>
                          <div className="checkout-cart-row-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                            <div className="checkout-cart-row-price" style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--primary)' }}>
                              ₹{item.tier.price * item.quantity}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              {/* Quantity Controls */}
                              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-light)', borderRadius: '6px', border: '1px solid var(--border)', padding: '2px 4px' }}>
                                <button
                                  onClick={() => {
                                    if (item.quantity > 1) {
                                      updateQuantity(item.id, item.quantity - 1);
                                    } else {
                                      removeFromCart(item.id);
                                    }
                                  }}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 8px', color: 'var(--text-secondary)' }}
                                >
                                  −
                                </button>
                                <span style={{ fontWeight: '600', fontSize: '0.9rem', minWidth: '20px', textAlign: 'center' }}>
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 8px', color: 'var(--text-secondary)' }}
                                >
                                  +
                                </button>
                              </div>

                              {/* Remove Button */}
                              <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', fontSize: '1.1rem' }}
                                title="Remove item"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="checkout-summary-row">
                      <span>Subtotal ({cartItemCount} items)</span>
                      <span>₹{cartTotal}</span>
                    </div>
                    <div className="checkout-summary-row total">
                      <span>Total</span>
                      <span className="checkout-summary-value">₹{cartTotal}</span>
                    </div>

                    <div className="checkout-nav-buttons">
                      <Link href="/#services" className="checkout-back-btn" style={{ textAlign: 'center' }}>
                        ← Back
                      </Link>
                      <button className="checkout-next-btn" onClick={() => setShowAppModal(true)}>
                        Proceed to Booking →
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APP DOWNLOAD MODAL ===== */}
      {showAppModal && (
        <div className="app-download-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowAppModal(false); }}>
          <div className="app-download-modal">
            {/* Header */}
            <div className="app-download-modal-header">
              <button className="app-modal-close" onClick={() => setShowAppModal(false)}>✕</button>
              <div className="app-modal-phone-icon">📱</div>
              <h2>Book via the Xerodirt App</h2>
              <p>For a seamless booking experience, download our app and place your order in seconds.</p>
            </div>

            {/* Body */}
            <div className="app-download-modal-body">
              {/* Benefits */}
              <div className="app-modal-benefits">
                <div className="app-modal-benefit">
                  <div className="app-modal-benefit-icon">⚡</div>
                  <span>Faster booking with saved details</span>
                </div>
                <div className="app-modal-benefit">
                  <div className="app-modal-benefit-icon">🔔</div>
                  <span>Real-time order tracking & notifications</span>
                </div>
                <div className="app-modal-benefit">
                  <div className="app-modal-benefit-icon">🎁</div>
                  <span>App-exclusive offers & discounts</span>
                </div>
              </div>

              {/* Store Buttons */}
              <div className="app-store-buttons">
                <a href="https://play.google.com/store/apps/details?id=com.xerodirt.xerodirt_app" target="_blank" rel="noopener noreferrer" className="app-store-btn app-store-btn-playstore">
                  <div className="app-store-btn-icon">
                    <img width="96" height="96" src="https://img.icons8.com/fluency/96/google-play-store-new.png" alt="google-play-store-new" />
                  </div>
                  <div className="app-store-btn-text">
                    <span className="app-store-btn-label">GET IT ON</span>
                    <span className="app-store-btn-name">Google Play</span>
                  </div>
                  <span className="app-store-btn-arrow">→</span>
                </a>

                <a href="https://apps.apple.com/in/app/xerodirt/id6764423738" target="_blank" rel="noopener noreferrer" className="app-store-btn app-store-btn-appstore">
                  <div className="app-store-btn-icon">
                    <img
                      width="96"
                      height="96"
                      src="https://img.icons8.com/fluency/96/apple-app-store.png"
                      alt="apple-app-store"
                      className="store-icon"
                    />
                  </div>
                  <div className="app-store-btn-text">
                    <span className="app-store-btn-label">DOWNLOAD ON THE</span>
                    <span className="app-store-btn-name">App Store</span>
                  </div>
                  <span className="app-store-btn-arrow">→</span>
                </a>
              </div>

              {/* Footer */}
              <div className="app-modal-footer">
                <button onClick={() => setShowAppModal(false)}>Continue browsing</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
