'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function BookPage() {
  const { cartItems, cartTotal, cartItemCount, clearCart } = useCart();

  // Steps: 1=Cart, 2=Login(OTP), 3=Details, 4=Confirm/Success
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const otpRefs = useRef([]);

  const totalSteps = 3;

  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
      // Firebase OTP will be connected here later
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const code = otp.join('');
    if (code.length === 6) {
      // Firebase verification will be connected here later
      setOtpVerified(true);
      setStep(3);
    }
  };

  const handlePlaceOrder = async () => {
    setSubmitting(true);

    const itemsSummary = cartItems.map(item =>
      `${item.tier.name} (×${item.quantity}) - ₹${item.tier.price * item.quantity}`
    ).join('\n');

    const payload = {
      service: cartItems.map(i => i.service.name).join(', '),
      plan: cartItems.map(i => `${i.tier.name} ×${i.quantity}`).join(', '),
      price: cartTotal,
      name: formData.name,
      phone: phone,
      address: formData.address,
      date: formData.date,
      time: formData.time,
      notes: formData.notes || 'None'
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwccUYPsE8jyQ1APaivl3FtFTp0i2kr6wH5diSYk6pc5xhDYNKql2oseyaE99BxF_kG/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
    }

    setSubmitting(false);
    setOrderPlaced(true);
  };

  const handleCloseSuccess = () => {
    clearCart();
    setOrderPlaced(false);
    setStep(1);
    setPhone('');
    setOtpSent(false);
    setOtp(['', '', '', '', '', '']);
    setOtpVerified(false);
    setFormData({ name: '', address: '', date: '', time: '', notes: '' });
  };

  const canProceedStep3 = formData.name && formData.address && formData.date && formData.time;

  return (
    <>
      {/* Hero */}
      <section className="checkout-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--primary-light)' }}>
            Checkout
          </span>
          <h1>Complete Your Booking</h1>
          <p>Review your cart, verify your number, and place your order.</p>
        </div>
      </section>

      {/* Main Checkout */}
      <section className="checkout-section">
        <div className="container">
          <div className="checkout-layout">
            {/* Step Indicator */}
            <div className="checkout-stepper">
              {[1, 3].map((s) => (
                <div
                  key={s}
                  className={`checkout-step-dot ${step === s ? 'active' : ''} ${step > s ? 'done' : ''}`}
                />
              ))}
            </div>

            <div className="checkout-card">

              {/* ===== STEP 1: CART OVERVIEW ===== */}
              {step === 1 && (
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
                            <div className="checkout-cart-row-right">
                              <div className="checkout-cart-row-qty">Qty: {item.quantity}</div>
                              <div className="checkout-cart-row-price">₹{item.tier.price * item.quantity}</div>
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
                          ← Continue Shopping
                        </Link>
                        <button className="checkout-next-btn" onClick={() => setStep(3)}>
                          Proceed to Booking →
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ===== STEP 2: PHONE OTP LOGIN ===== */}
              {step === 2 && (
                <div>
                  <div className="checkout-step-title">
                    <span className="checkout-step-num">2</span>
                    Verify Your Number
                  </div>

                  {!otpSent ? (
                    <>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                        Enter your mobile number. We&apos;ll send an OTP to verify.
                      </p>

                      <div className="form-group">
                        <label>Mobile Number</label>
                        <div className="checkout-phone-input-group">
                          <span style={{
                            padding: '14px 16px',
                            background: 'var(--bg-light)',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid var(--border)',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                          }}>
                            +91
                          </span>
                          <input
                            type="tel"
                            placeholder="Enter 10-digit number"
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                            style={{ flex: 1 }}
                          />
                        </div>
                      </div>

                      <div className="checkout-nav-buttons">
                        <button className="checkout-back-btn" onClick={() => setStep(1)}>
                          ← Back
                        </button>
                        <button
                          className="checkout-next-btn"
                          onClick={handleSendOtp}
                          disabled={phone.length < 10}
                        >
                          Send OTP →
                        </button>
                      </div>
                    </>
                  ) : !otpVerified ? (
                    <>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.6' }}>
                        We&apos;ve sent an OTP to <strong>+91 {phone}</strong>
                      </p>
                      <button
                        onClick={() => { setOtpSent(false); setOtp(['', '', '', '', '', '']); }}
                        style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', marginBottom: '20px', display: 'block' }}
                      >
                        Change number
                      </button>

                      <div className="form-group">
                        <label>Enter 6-digit OTP</label>
                        <div className="otp-input-row">
                          {otp.map((digit, i) => (
                            <input
                              key={i}
                              ref={(el) => { otpRefs.current[i] = el; }}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(i, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(i, e)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="checkout-nav-buttons">
                        <button className="checkout-back-btn" onClick={() => { setOtpSent(false); setOtp(['', '', '', '', '', '']); }}>
                          ← Resend OTP
                        </button>
                        <button
                          className="checkout-next-btn"
                          onClick={handleVerifyOtp}
                          disabled={otp.join('').length < 6}
                        >
                          Verify & Continue →
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              )}

              {/* ===== STEP 3: BOOKING DETAILS ===== */}
              {step === 3 && (
                <div>
                  <div className="checkout-step-title">
                    <span className="checkout-step-num">3</span>
                    Booking Details
                  </div>

                  <div className="contact-form">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        value={`+91 ${phone}`}
                        disabled
                        style={{ background: 'var(--bg-light)', color: 'var(--text-muted)' }}
                      />
                    </div>

                    <div className="form-group">
                      <label>Address *</label>
                      <textarea
                        placeholder="Full address with landmark"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label>Preferred Date *</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Preferred Time Slot *</label>
                        <div style={{ display: 'grid', gap: '10px' }}>
                          {[
                            "Morning (9 AM – 12 PM)",
                            "Afternoon (1 PM – 4 PM)",
                            "Evening (5 PM – 8 PM)"
                          ].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, time: slot })}
                              style={{
                                padding: '10px',
                                borderRadius: '8px',
                                border: formData.time === slot
                                  ? '2px solid var(--primary)'
                                  : '1px solid #ccc',
                                background: formData.time === slot
                                  ? 'var(--primary-bg)'
                                  : '#fff',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: formData.time === slot ? 600 : 400
                              }}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Additional Notes</label>
                      <input
                        type="text"
                        placeholder="Any special instructions..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div style={{ marginTop: '28px', padding: '20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Order Summary</h4>
                    {cartItems.map((item) => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '0.85rem' }}>
                        <span>{item.tier.name} × {item.quantity}</span>
                        <span style={{ fontWeight: 600 }}>₹{item.tier.price * item.quantity}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--border)', marginTop: '12px', paddingTop: '12px', fontWeight: 800, fontSize: '1.1rem' }}>
                      <span>Total</span>
                      <span style={{ color: 'var(--primary)' }}>₹{cartTotal}</span>
                    </div>
                  </div>

                  <div className="checkout-nav-buttons">
                    <button className="checkout-back-btn" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button
                      className="checkout-next-btn"
                      onClick={handlePlaceOrder}
                      disabled={!canProceedStep3 || submitting}
                    >
                      {submitting ? 'Placing Order...' : 'Place Order →'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORDER PLACED SUCCESS MODAL ===== */}
      {orderPlaced && (
        <div className="order-success-overlay">
          <div className="order-success-modal">
            <div className="order-success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for choosing Xerodirt. Our team will contact you shortly to confirm your booking.</p>

            <div className="order-success-details">
              <div className="order-success-row">
                <span className="order-success-row-label">Name</span>
                <span className="order-success-row-value">{formData.name}</span>
              </div>
              <div className="order-success-row">
                <span className="order-success-row-label">Phone</span>
                <span className="order-success-row-value">+91 {phone}</span>
              </div>
              <div className="order-success-row">
                <span className="order-success-row-label">Date</span>
                <span className="order-success-row-value">{formData.date}</span>
              </div>
              <div className="order-success-row">
                <span className="order-success-row-label">Time</span>
                <span className="order-success-row-value">{formData.time}</span>
              </div>
              <div className="order-success-row" style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '8px' }}>
                <span className="order-success-row-label">Services</span>
                <span className="order-success-row-value">{cartItemCount} items</span>
              </div>
              <div className="order-success-row">
                <span className="order-success-row-label">Total</span>
                <span className="order-success-row-value" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.1rem' }}>₹{cartTotal}</span>
              </div>
            </div>

            <Link
              href="/"
              className="btn btn-primary btn-lg"
              onClick={handleCloseSuccess}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
