'use client';
import { db } from "lib/firebase.js";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const washroomServices = [
  {
    id: 'basic-washroom',
    name: 'Basic Washroom Cleaning',
    price: 189,
    description: 'Surface cleaning, mopping, mirror cleaning, fixture polishing',
    subdescription: 'Quick and essential cleaning without machines.',
    icon: '🚿',
  },
  {
    id: 'deep-washroom',
    name: 'Deep Washroom Cleaning',
    price: 289,
    description: 'Machine-assisted deep cleaning to remove stains, grime & bacteria',
    subdescription: 'Machine-based deep cleaning.',
    icon: '✨',
  },
];

const kitchenServices = [
  {
    id: 'kitchen-deep',
    name: 'Kitchen Deep Cleaning',
    price: 499,
    description: 'Complete cleaning of kitchen surfaces to remove oil, grease, and dirt, ensuring a clean and hygienic cooking space.',
    subdescription: 'Kitchen deep cleaning without machines.',
    icon: '🔪',
  },
  {
    id: 'modular-kitchen-deep',
    name: 'Modular Kitchen Deep Cleaning',
    price: 1199,
    description: 'Intensive removal of oil, grease, and food residue from all key modular kitchen surfaces for a hygienic cooking space.',
    subdescription: 'Intensive cleaning of all modular kitchen surfaces.',
    icon: '🗄️',
  },
];

const flatServices = [
  {
    id: '1bhk-flat',
    name: '1 BHK Flat Cleaning',
    price: 1499,
    description: 'Thorough deep cleaning for unfurnished 1 BHK flats',
    subdescription: 'Unfurnished flat deep cleaning.',
    icon: '🏠',
  },
  {
    id: '2bhk-flat',
    name: '2 BHK Flat Cleaning',
    price: 2499,
    description: 'Comprehensive deep cleaning for unfurnished 2 BHK flats',
    subdescription: 'Unfurnished flat deep cleaning.',
    icon: '🏡',
  },
  {
    id: '3bhk-flat',
    name: '3 BHK Flat Cleaning',
    price: 3499,
    description: 'End-to-end deep cleaning for unfurnished 3 BHK flats',
    subdescription: 'Unfurnished flat deep cleaning.',
    icon: '🏢',
  },
];

const allServices = [...washroomServices, ...kitchenServices, ...flatServices];

export default function WashroomFlatBookingPage() {
  const [quantities, setQuantities] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    couponCode: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Load saved user data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPhone = localStorage.getItem('xerodirt_phone');
      const savedName = localStorage.getItem('xerodirt_name');
      const savedAddress = localStorage.getItem('xerodirt_address');
      if (savedPhone || savedName || savedAddress) {
        setFormData(prev => ({
          ...prev,
          name: savedName || prev.name,
          phone: savedPhone || prev.phone,
          address: savedAddress || prev.address,
        }));
      }
    }
  }, []);

  // Scroll to top on success
  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        window.scrollTo({ top: 100, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, [submitted]);

  const updateQuantity = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newQty = Math.max(0, current + delta);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
    if (errors.cart) setErrors(prev => ({ ...prev, cart: undefined }));
  };

  const getSelectedItems = () => {
    return Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const service = allServices.find(s => s.id === id);
        return { ...service, quantity: qty };
      });
  };

  const cartTotal = getSelectedItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = getSelectedItems().reduce((sum, item) => sum + item.quantity, 0);

  const generateCustomerId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 28; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time slot';
    if (cartItemCount === 0) newErrors.cart = 'Please select at least one service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const customerId = generateCustomerId();
      const now = new Date();
      const selectedItems = getSelectedItems();

      const orderData = {
        customerId,
        customerName: formData.name,
        customerPhone: formData.phone,
        customerAddress: formData.address,
        orderId: customerId,
        notes: formData.notes || '',
        services: selectedItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        serviceType: selectedItems.map(i => i.name).join(', '),
        servicePrice: cartTotal,
        totalPrice: cartTotal,
        scheduledDate: Timestamp.fromDate(new Date(formData.date)),
        preferredSlot: formData.time,
        status: 'pending',
        statusHistory: [
          {
            status: 'pending',
            timestamp: Timestamp.fromDate(now),
            updatedBy: 'customer',
          }
        ],
        couponCode: formData.couponCode || null,
        discountAmount: 0,
        assignedWorkerId: null,
        assignedWorkerName: null,
        cancellationReason: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        source: 'booknow-direct',
      };

      await addDoc(collection(db, "orders"), orderData);

      // Send to Google Sheets
      const sheetData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        status: 'Pending',
        date: formData.date,
        slot: formData.time,
        service: selectedItems.map(i => `${i.name} ×${i.quantity}`).join(', '),
      };

      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwS3cD35Wf2F0S7Bnr2PubVZ6kbWVLsEJE2UiLm2S9nw2DQGvKiUdWkBJfeDuBiVIDF/exec';

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData),
      });

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('xerodirt_phone', formData.phone);
        localStorage.setItem('xerodirt_name', formData.name);
        localStorage.setItem('xerodirt_address', formData.address);
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Order placement failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuantities({});
    setFormData({ name: '', phone: '', address: '', date: '', time: '', couponCode: '', notes: '' });
    setErrors({});
  };

  // === SUCCESS STATE ===
  if (submitted) {
    const selectedItems = getSelectedItems();
    return (
      <div className="mb-page">
        <div className="mb-success-wrapper">
          <div className="mb-success-card">
            <div className="mb-success-icon-wrap">
              <div className="mb-success-icon">✓</div>
              <div className="mb-success-rings"></div>
            </div>
            <h2 className="mb-success-title">Booking Submitted!</h2>
            <p className="mb-success-subtitle">
              Thank you for choosing Xerodirt. Our team will contact you within
              24 hours to confirm your booking.
            </p>

            <div className="mb-success-details">
              <div className="mb-success-row">
                <span className="mb-success-label">Name</span>
                <span className="mb-success-value">{formData.name}</span>
              </div>
              <div className="mb-success-row">
                <span className="mb-success-label">Phone</span>
                <span className="mb-success-value">+91 {formData.phone}</span>
              </div>
              <div className="mb-success-row">
                <span className="mb-success-label">Date</span>
                <span className="mb-success-value">{formData.date}</span>
              </div>
              <div className="mb-success-row">
                <span className="mb-success-label">Time</span>
                <span className="mb-success-value">{formData.time}</span>
              </div>
              {selectedItems.map(item => (
                <div className="mb-success-row" key={item.id}>
                  <span className="mb-success-label">{item.name}</span>
                  <span className="mb-success-value">×{item.quantity} — ₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="mb-success-row mb-success-row-total">
                <span className="mb-success-label">Total</span>
                <span className="mb-success-value mb-success-price">
                  ₹{cartTotal}
                </span>
              </div>
            </div>

            <div className="mb-success-actions">
              <button className="mb-btn mb-btn-primary" onClick={handleReset}>
                Book Another Service
              </button>
              <Link href="/" className="mb-btn mb-btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // === RENDER SERVICE CARD ===
  const renderServiceCard = (service) => {
    const qty = quantities[service.id] || 0;
    const isSelected = qty > 0;

    return (
      <div
        key={service.id}
        className={`wf-service-item ${isSelected ? 'selected' : ''}`}
      >
        <div className="wf-item-left">
          <span className="wf-item-icon">{service.icon}</span>
          <div>
            <div className="wf-item-name">{service.name}</div>
            <div className="wf-item-desc">{service.subdescription}</div>
          </div>
        </div>
        <div className="wf-item-right">
          <div className="wf-item-price">₹{service.price}</div>
          <div className="wf-qty-wrap">
            <button
              type="button"
              className="wf-qty-btn"
              onClick={() => updateQuantity(service.id, -1)}
              disabled={qty === 0}
            >
              −
            </button>
            <span className="wf-qty-value">{qty}</span>
            <button
              type="button"
              className="wf-qty-btn"
              onClick={() => updateQuantity(service.id, 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === MAIN FORM ===
  return (
    <div className="mb-page">
      {/* Hero */}
      <section className="mb-hero">
        <div className="mb-hero-bg-pattern"></div>
        <div className="mb-hero-glow mb-hero-glow-1"></div>
        <div className="mb-hero-glow mb-hero-glow-2"></div>
        <div className="container">
          <div className="mb-hero-content">
            <span className="mb-hero-badge">
              <span className="mb-hero-badge-dot"></span>
              Quick Booking
            </span>
            <h1>
              Washroom &amp; Flat
              <span> Cleaning</span>
            </h1>
            <p>
              Select your services, fill in your details, and book in minutes.
              Simple and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-main">
        <div className="container">
          <form className="wf-page-layout" onSubmit={handleSubmit} noValidate>

            {/* === LEFT: Services === */}
            <div className="wf-services-column">

              {/* Washroom Section */}
              <div className="wf-category-section">
                <div className="mb-section-header">
                  <span className="mb-section-number">1</span>
                  <div>
                    <h2 className="mb-section-title">Washroom Cleaning</h2>
                    <p className="mb-section-subtitle">
                      Choose your washroom cleaning service
                    </p>
                  </div>
                </div>
                <div className="wf-service-list">
                  {washroomServices.map(renderServiceCard)}
                </div>
              </div>

              {/* Kitchen Cleaning Section */}
              <div className="wf-category-section">
                <div className="mb-section-header">
                  <span className="mb-section-number">2</span>
                  <div>
                    <h2 className="mb-section-title">Kitchen Cleaning</h2>
                    <p className="mb-section-subtitle">
                      Choose your kitchen cleaning service
                    </p>
                  </div>
                </div>
                <div className="wf-service-list">
                  {kitchenServices.map(renderServiceCard)}
                </div>
              </div>

              {/* Flat   Cleaning Section */}
              <div className="wf-category-section">
                <div className="mb-section-header">
                  <span className="mb-section-number">3</span>
                  <div>
                    <h2 className="mb-section-title">Flat Cleaning</h2>
                    <p className="mb-section-subtitle">
                      Choose your flat cleaning service
                    </p>
                  </div>
                </div>
                <div className="wf-service-list">
                  {flatServices.map(renderServiceCard)}
                </div>
              </div>

              {errors.cart && (
                <p className="mb-error-text" style={{ marginTop: '4px', fontSize: '0.88rem' }}>
                  {errors.cart}
                </p>
              )}
            </div>

            {/* === RIGHT: Form === */}
            <div className="mb-form-section">
              <div className="mb-section-header">
                <span className="mb-section-number">3</span>
                <div>
                  <h2 className="mb-section-title">Your Details</h2>
                  <p className="mb-section-subtitle">
                    Tell us how to reach you
                  </p>
                </div>
              </div>

              <div className="mb-form">
                {/* Name */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-name">
                    Full Name <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap ${errors.name ? 'error' : ''}`}>
                    <span className="mb-input-icon">👤</span>
                    <input
                      id="wf-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                      }}
                    />
                  </div>
                  {errors.name && <p className="mb-error-text">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-phone">
                    Phone Number <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap ${errors.phone ? 'error' : ''}`}>
                    <span className="mb-input-icon-text">+91</span>
                    <input
                      id="wf-phone"
                      type="tel"
                      placeholder="Enter 10-digit number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') });
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                      }}
                    />
                  </div>
                  {errors.phone && <p className="mb-error-text">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-address">
                    Address <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap mb-input-wrap-textarea ${errors.address ? 'error' : ''}`}>
                    <span className="mb-input-icon">📍</span>
                    <textarea
                      id="wf-address"
                      placeholder="Full address with flat no., building, area & landmark"
                      rows={3}
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.address) setErrors(prev => ({ ...prev, address: undefined }));
                      }}
                    />
                  </div>
                  {errors.address && <p className="mb-error-text">{errors.address}</p>}
                </div>

                {/* Date */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-date">
                    Preferred Date <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap ${errors.date ? 'error' : ''}`}>
                    <span className="mb-input-icon">📅</span>
                    <input
                      id="wf-date"
                      type="date"
                      min={getTodayDate()}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors(prev => ({ ...prev, date: undefined }));
                      }}
                    />
                  </div>
                  {errors.date && <p className="mb-error-text">{errors.date}</p>}
                </div>

                {/* Time Slot */}
                <div className="mb-form-group">
                  <label className="mb-label">
                    Preferred Time Slot <span className="mb-required">*</span>
                  </label>
                  <div className="wf-time-slots">
                    {[
                      "Morning (9 AM – 12 PM)",
                      "Afternoon (1 PM – 4 PM)",
                      "Evening (5 PM – 8 PM)"
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`wf-time-slot ${formData.time === slot ? 'selected' : ''}`}
                        onClick={() => {
                          setFormData({ ...formData, time: slot });
                          if (errors.time) setErrors(prev => ({ ...prev, time: undefined }));
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="mb-error-text">{errors.time}</p>}
                </div>

                {/* Coupon Code */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-coupon">
                    Coupon Code <span className="mb-optional">(optional)</span>
                  </label>
                  <div className="mb-input-wrap">
                    <span className="mb-input-icon">🏷️</span>
                    <input
                      id="wf-coupon"
                      type="text"
                      placeholder="Enter coupon code"
                      value={formData.couponCode}
                      onChange={(e) => setFormData({ ...formData, couponCode: e.target.value.toUpperCase() })}
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="wf-notes">
                    Additional Notes <span className="mb-optional">(optional)</span>
                  </label>
                  <div className="mb-input-wrap mb-input-wrap-textarea">
                    <span className="mb-input-icon">📝</span>
                    <textarea
                      id="wf-notes"
                      placeholder="Any special instructions or preferences..."
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>

                {/* Order Summary */}
                {cartItemCount > 0 && (
                  <div className="mb-selected-summary">
                    <div className="mb-selected-summary-header">
                      <span className="mb-selected-summary-icon">🛒</span>
                      <span>Order Summary</span>
                    </div>
                    <div style={{ padding: '14px 16px' }}>
                      {getSelectedItems().map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.88rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{item.name} × {item.quantity}</span>
                          <span style={{ fontWeight: 700 }}>₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--border)', marginTop: '10px', paddingTop: '10px', fontWeight: 800, fontSize: '1.05rem' }}>
                        <span>Total</span>
                        <span style={{ color: 'var(--primary)' }}>₹{cartTotal}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mb-btn mb-btn-primary mb-btn-submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="mb-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Booking
                      <span className="mb-btn-arrow">→</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="mb-trust">
        <div className="container">
          <div className="mb-trust-grid">
            <div className="mb-trust-item">
              <span className="mb-trust-icon">🛡️</span>
              <div>
                <strong>Trained Professionals</strong>
                <p>Background verified &amp; trained cleaning staff</p>
              </div>
            </div>
            <div className="mb-trust-item">
              <span className="mb-trust-icon">📅</span>
              <div>
                <strong>Flexible Scheduling</strong>
                <p>Choose your preferred date &amp; time slot</p>
              </div>
            </div>
            <div className="mb-trust-item">
              <span className="mb-trust-icon">💯</span>
              <div>
                <strong>Satisfaction Guaranteed</strong>
                <p>Not happy? We&apos;ll re-clean at no extra cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
