'use client';
import { useState } from 'react';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';


export default function CategoryPageClient({ category, subCategories }) {
  const [activeSubCat, setActiveSubCat] = useState(subCategories[0]?.id || '');
  const [showAppModal, setShowAppModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const [closing, setClosing] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailTier, setDetailTier] = useState(null);
  const { cartItems, addToCart, removeFromCart, cartTotal, cartItemCount } = useCart();

  const activeSub = subCategories.find((s) => s.id === activeSubCat) || subCategories[0];

  const getItemQuantity = (serviceId, tierName) => {
    const item = cartItems.find((i) => i.id === `${serviceId}-${tierName}`);
    return item ? item.quantity : 0;
  };
  const openDetailModal = (tier) => {
    setDetailTier(tier);
    setDetailModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailModal = () => {
    setClosing(true);
    setTimeout(() => {
      setDetailModalOpen(false);
      setDetailTier(null);
      setClosing(false);
      document.body.style.overflow = 'auto';
    }, 200);
  };

  // Extract short feature tags from tier description for pill display
  const getFeatureTags = (tier) => {
    if (tier.featureTags) return tier.featureTags;
    // Derive from pros if available
    if (tier.details?.pros) {
      return tier.details.pros.slice(0, 3).map(p => {
        // Shorten long pros to 2-3 words
        const words = p.replace(/[.,]/g, '').split(' ');
        if (words.length <= 3) return p;
        return words.slice(0, 3).join(' ');
      });
    }
    return [];
  };

  return (
    <>
      {/* Page Hero */}
      <section className="cat-page-hero">
        <div className="container">
          <div className="cat-page-hero-inner">
            <div className="cat-hero-text">
              <span className="cat-hero-label">
                ✨ {category.name.toUpperCase()}
              </span>
              <h1>{category.name}</h1>
              <p>{category.shortDesc}</p>
            </div>
            <div className="cat-hero-image">
              <img
                src={activeSub?.heroImage || category.image}
                alt={category.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main 3-Column Layout */}
      <section className="cat-section">
        <div className="container">
          <div className="cat-layout">

            {/* ===== LEFT SIDEBAR ===== */}
            <aside className="cat-sidebar">
              <div className="cat-sidebar-header">Select a service</div>
              <nav className="cat-sidebar-nav">
                {subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    className={`cat-sidebar-item ${activeSubCat === sub.id ? 'active' : ''}`}
                    onClick={() => setActiveSubCat(sub.id)}
                  >
                    <span className="cat-sidebar-icon">{sub.icon}</span>
                    <span className="cat-sidebar-label">{sub.name}</span>
                  </button>
                ))}
              </nav>

              {/* Need something customized? */}
              <div className="cat-sidebar-custom">
                <h4>Need something customized?</h4>
                <p>Let us know your requirements and we&apos;ll take care of the rest.</p>
                <Link href="/contact" className="cat-sidebar-contact-btn">
                  Contact Us →
                </Link>
              </div>
            </aside>

            {/* ===== MAIN CONTENT ===== */}
            <main className="cat-main">
              <h2 className="cat-main-title">{activeSub?.name}</h2>
              <p className="cat-main-subtitle">Choose the perfect service for your {activeSub?.name?.toLowerCase()} needs.</p>

              <div className="cat-tier-list">
                {activeSub?.tiers.map((tier, i) => {
                  const qty = getItemQuantity(activeSub.id, tier.name);
                  const serviceRef = { id: activeSub.id, name: activeSub.name, image: activeSub.image };
                  const tags = getFeatureTags(tier);

                  return (
                    <div key={i} className="cat-tier-card">
                      <div className="cat-tier-info">
                        {/* Bestseller badge on first item */}
                        {i === 0 && (
                          <div className="cat-tier-badge">
                            <span className="cat-badge-bestseller">★ BESTSELLER</span>
                          </div>
                        )}
                        <h3 className="cat-tier-name">{tier.name}</h3>
                        <div className="cat-tier-rating">
                          <span className="cat-rating-stars">⭐ 4.8</span>
                          <span className="cat-rating-count">(1.2K reviews)</span>
                        </div>
                        <div className="cat-tier-price-row">
                          <span className="cat-tier-price">₹{tier.price}</span>
                          <span className="cat-tier-duration">• 60 mins</span>
                        </div>
                        <p className="cat-tier-desc">
                          {tier.description}
                        </p>

                        {/* Feature Tags */}
                        {tags.length > 0 && (
                          <div className="cat-tier-tags">
                            {tags.map((tag, idx) => (
                              <span key={idx} className="cat-tier-tag">
                                <span className="cat-tag-check">✓</span> {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <button
                          className="cat-tier-details-btn"
                          onClick={() => setSelectedTier(tier)}
                        >
                          View details →
                        </button>

                      </div>

                      <div className="cat-tier-action">
                        <div className="cat-tier-image-wrapper">
                          <img
                            src={activeSub.image}
                            alt={tier.name}
                            className="cat-tier-image"
                          />
                          {qty === 0 ? (
                            <button
                              className="cat-add-btn"
                              onClick={() => addToCart(serviceRef, tier)}
                            >
                              Add <span className="cat-add-plus">+</span>
                            </button>
                          ) : (
                            <div className="cat-qty-control">
                              <button
                                className="cat-qty-btn"
                                onClick={() => removeFromCart(`${activeSub.id}-${tier.name}`)}
                              >
                                −
                              </button>
                              <span className="cat-qty-value">{qty}</span>
                              <button
                                className="cat-qty-btn"
                                onClick={() => addToCart(serviceRef, tier)}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Satisfaction Guarantee */}
              <div className="cat-satisfaction-bar">
                <div className="cat-satisfaction-icon">✅</div>
                <div className="cat-satisfaction-text">
                  <strong>100% Satisfaction Guarantee</strong>
                  <span>If you&apos;re not happy, we&apos;ll come back and make it right.</span>
                </div>
              </div>
            </main>

            {/* ===== RIGHT SIDEBAR ===== */}
            <aside className="cat-right-sidebar">
              {/* Coupon Banner */}
              <div className="cat-coupon-card">
                <div className="cat-coupon-icon">%</div>
                <div>
                  <div className="cat-coupon-title">Get Exclusive Offers</div>
                  <div className="cat-coupon-sub">Only on our Mobile App!</div>
                  <a className="cat-coupon-link" onClick={() => setShowAppModal(true)} >Download Now →</a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="cat-trust-card">
                <div className="cat-trust-header">
                  <h4>Xerodirt Promise</h4>
                  <div className="cat-trust-seal">✅</div>
                </div>
                <ul className="cat-trust-list">
                  <li>
                    <span className="cat-trust-check">✓</span>
                    Verified Professionals
                  </li>
                  <li>
                    <span className="cat-trust-check">✓</span>
                    Safe Chemicals
                  </li>
                  <li>
                    <span className="cat-trust-check">✓</span>
                    Superior Stain Removal
                  </li>
                  <li>
                    <span className="cat-trust-check">✓</span>
                    On-time Service
                  </li>
                  <li>
                    <span className="cat-trust-check">✓</span>
                    100% Satisfaction
                  </li>
                </ul>
              </div>

              {/* Cart Summary option was present here before */}
              {/* Cart Summary */}
              <aside className="hide-cart-on-mobile">
                {cartItemCount > 0 && (
                  <div className="cat-cart-card">
                    <h4 className="cat-cart-title">Cart</h4>
                    <div className="cat-cart-items">
                      {cartItems.map((item) => (
                        <div key={item.id} className="cat-cart-item">
                          <div className="cat-cart-item-info">
                            <span className="cat-cart-item-name">{item.tier.name}</span>
                            <span className="cat-cart-item-qty">× {item.quantity}</span>
                          </div>
                          <span className="cat-cart-item-price">₹{item.tier.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="cat-cart-footer">
                      <div className="cat-cart-total">
                        <span>₹{cartTotal}</span>
                      </div>
                      <Link href="/book" className="cat-cart-view-btn">
                        View Cart
                      </Link>
                    </div>
                  </div>
                )}
              </aside>
            </aside>
          </div>
        </div>
      </section >

      {selectedTier && (
        <div className="cat-modal-overlay" onClick={() => setSelectedTier(null)}>
          <div
            className="cat-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cat-modal-close"
              onClick={() => setSelectedTier(null)}
            >
              ✕
            </button>

            <h3>{selectedTier.name}</h3>
            <h5 style={{ color: 'gray' }}>{selectedTier.subdescription}</h5>
            <br></br>
            {/* PROS */}
            <div className="cat-modal-section">
              <h4 className="cat-modal-heading green">✔ What's Included</h4>
              <ul>
                {selectedTier.details?.pros?.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            </div>

            {/* CONS */}
            <div className="cat-modal-section">
              <h4 className="cat-modal-heading red">✖ Not Included</h4>
              <ul>
                {selectedTier.details?.cons?.map((item, i) => (
                  <li key={i}>✖ {item}</li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      )
      }

      {/* Mobile Floating Cart - Only shows if there are items */}
      {
        cartItemCount > 0 && (
          <div className="mobile-floating-cart">
            <div className="floating-cart-info">
              <span className="floating-cart-count">
                {cartItemCount} {cartItemCount === 1 ? 'Item' : 'Items'} in cart
              </span>
              <span className="floating-cart-total">Total: ₹{cartTotal}</span>
            </div>
            <Link href="/book" className="floating-view-cart-btn">
              View Cart
            </Link>
          </div>
        )
      }

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
