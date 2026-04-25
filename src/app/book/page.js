'use client';
import { db } from "lib/firebase.js";
import { collection, addDoc, doc, setDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function BookPage() {
  const { cartItems, cartTotal, cartItemCount, clearCart, updateQuantity, removeFromCart } = useCart();

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
    notes: '',
    couponCode: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  //const otpRefs = useRef([]);

  const isMounted = useRef(false);

  const totalSteps = 3;

  // ⬇️ ADD THIS USEEFFECT HERE ⬇️
  useEffect(() => {
    window.scrollTo({
      top: 350,
      behavior: 'smooth' // Adds a nice smooth scroll effect
    });
  }, [step]); // This tells React to run this code whenever 'step' changes
  // ⬆️ ----------------------- ⬆️


  // ⬇️ 1. LOAD DATA WHEN THEY RETURN ⬇️
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPhone = localStorage.getItem('xerodirt_phone');
      const savedFormData = localStorage.getItem('xerodirt_formData');

      if (savedPhone) setPhone(savedPhone);

      if (savedFormData) {
        try {
          // Parses the saved string back into the formData object
          setFormData(JSON.parse(savedFormData));
        } catch (error) {
          console.error("Failed to parse saved data");
        }
      }
    }
  }, []);

  // ⬇️ 2. AUTO-SAVE AS THEY TYPE ⬇️
  useEffect(() => {
    if (isMounted.current && typeof window !== 'undefined') {
      // Saves the phone and the entire formData object (name, address, date, time, etc.)
      localStorage.setItem('xerodirt_phone', phone);
      localStorage.setItem('xerodirt_formData', JSON.stringify(formData));
    } else {
      isMounted.current = true;
    }
  }, [phone, formData]); // Runs every time phone or formData changes
  // ⬆️ ---------------------------------------- ⬆️


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

  // Generate a random alphanumeric customerId
  const generateCustomerId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 28; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handlePlaceOrder = async () => {

    setSubmitting(true);

    try {
      const customerId = generateCustomerId();
      const now = new Date();





      const sheetData = {
        name: formData.name,
        phone: phone,
        address: formData.address,
        status: 'Pending',
        date: formData.date,       // YYYY-MM-DD from <input type="date">
        slot: formData.time,
        service: cartItems.map(i => `${i.service.name} - ${i.tier.name} ×${i.quantity}`).join(', ')
      };

      // All fields in a single orders document (matches Firebase schema)
      const orderData = {
        // Customer fields
        customerId: customerId,
        customerName: formData.name,
        customerPhone: phone,
        customerAddress: formData.address,
        //address: formData.address,

        // Order details
        orderId: customerId,
        //phone: phone,
        notes: formData.notes || '',
        //date: formData.date,

        //service: cartItems.map(i => i.service.name).join(', '),
        //plan: cartItems.map(i => `${i.tier.name} ×${i.quantity}`).join(', '),
        //price: cartTotal,

        services: cartItems.map(item => ({
          name: item.service.name,
          price: item.tier.price,
          quantity: item.quantity
        })),

        serviceType: cartItems.map(i => i.service.name).join(', '),
        servicePrice: cartTotal,
        totalPrice: cartTotal,

        scheduledDate: Timestamp.fromDate(new Date(formData.date)),
        preferredSlot: formData.time,
        /*slot: formData.time,*/

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
      };



      const orderRef = await addDoc(
        collection(db, "orders"),
        orderData
      );
      console.log("Order ID:", orderRef.id);

      // 2. Get existing history or start new array
      const existingHistory = JSON.parse(localStorage.getItem('xerodirt_order_history')) || [];

      // 3. Define the new history item FIRST
      const historyItem = {
        id: orderRef.id || customerId,
        date: formData.date,
        time: formData.time,
        services: cartItems.map(i => `${i.service.name} (${i.tier.name})`),
        total: cartTotal,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // 4. THEN save the updated history
      localStorage.setItem('xerodirt_order_history', JSON.stringify([historyItem, ...existingHistory]));


      // Send to Google Sheets


      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwS3cD35Wf2F0S7Bnr2PubVZ6kbWVLsEJE2UiLm2S9nw2DQGvKiUdWkBJfeDuBiVIDF/exec';

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Use no-cors to avoid CORS issues with Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });



      // Send to Google Sheets


      //const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwS3cD35Wf2F0S7Bnr2PubVZ6kbWVLsEJE2UiLm2S9nw2DQGvKiUdWkBJfeDuBiVIDF/exec';

      /*fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Use no-cors to avoid CORS issues with Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sheetData),
      });*/

      // ⬇️ ADD THESE LINES TO SAVE DATA ⬇️
      if (typeof window !== 'undefined') {
        localStorage.setItem('xerodirt_phone', phone);
        localStorage.setItem('xerodirt_name', formData.name);
        localStorage.setItem('xerodirt_address', formData.address);
      }
      // ⬆️ ----------------------------- ⬆️

      setOrderPlaced(true);

    } catch (error) {
      console.error('Order placement failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    clearCart();
    setOrderPlaced(false);
    setStep(1);
    setPhone('');
    setOtpSent(false);
    setOtp(['', '', '', '', '', '']);
    setOtpVerified(false);
    setFormData({ name: formData.name, address: formData.address, date: '', time: '', notes: '', couponCode: '' });
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
                      <label>Phone Number *</label>

                      <div style={{ display: 'flex', width: '100%' }}>
                        <span
                          style={{
                            padding: '14px 16px',
                            background: 'var(--bg-light)',
                            border: '1px solid var(--border)',
                            borderRight: 'none',
                            borderRadius: '12px 0 0 12px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          +91
                        </span>

                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setPhone(onlyNums);
                          }}
                          maxLength={10}
                          placeholder="Enter 10 digit phone number"
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid var(--border)',
                            borderRadius: '0 12px 12px 0'
                          }}
                        />
                      </div>
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
                      <label>Coupon Code</label>
                      <input
                        type="text"
                        placeholder="Enter coupon code (optional)"
                        value={formData.couponCode}
                        onChange={(e) => setFormData({ ...formData, couponCode: e.target.value.toUpperCase() })}
                        style={{ textTransform: 'uppercase' }}
                      />
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
