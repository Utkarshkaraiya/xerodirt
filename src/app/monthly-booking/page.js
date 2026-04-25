'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const monthlyPlans = [
  {
    id: 'plan-1w',
    name: '1 Washroom – Monthly Plan',
    price: 599,
    period: '/month',
    visits: '3 visits/month',
    icon: '🚿',
    features: [
      '3 scheduled cleaning visits per month',
      'Cleaning of toilet seat, washbasin & floor',
      'Basic fittings & touchpoint cleaning',
      'Regular hygiene maintenance',
    ],
    popular: false,
  },
  {
    id: 'plan-2w',
    name: '2 Washrooms – Monthly Plan',
    price: 999,
    period: '/month',
    visits: '3 visits/month',
    icon: '🏠',
    features: [
      '3 scheduled cleaning visits per month',
      'Cleaning of both washrooms – toilets, basins & floors',
      'Basic fittings & touchpoint cleaning',
      'Consistent service by trained staff',
    ],
    popular: true,
  },
  {
    id: 'plan-3w',
    name: '3 Washrooms – Monthly Plan',
    price: 1399,
    period: '/month',
    visits: '3 visits/month',
    icon: '🏢',
    features: [
      '3 scheduled cleaning visits per month',
      'All 3 washrooms – toilets, basins & floors',
      'Basic fittings & touchpoint cleaning',
      'Regular hygiene maintenance',
    ],
    popular: false,
  },
];

export default function MonthlyBookingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (submitted) {
      // A 0ms timeout pushes the scroll to the end of the execution queue
      setTimeout(() => {
        window.scrollTo({
          top: 100,
          left: 0,
          behavior: 'instant' // Using 'instant' is more reliable than 'smooth' for debugging
        });
      }, 0);
    }
  }, [submitted]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!selectedPlan) newErrors.plan = 'Please select a plan';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const plan = monthlyPlans.find((p) => p.id === selectedPlan);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      plan: plan?.name || '',
      price: plan?.price || '',
      notes: formData.notes || 'None',
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN'),
    };

    try {
      // IMPORTANT: Replace this URL with your separate Google Sheet Apps Script URL
      await fetch(
        //'https://script.google.com/macros/s/AKfycby-vosOjCVAkCaHKYjnTdJHC5OiBm_HRH6gpAfnIND5q-hR8mjC9qmNHKECURsQuHA/exec',
        //"https://script.google.com/macros/s/AKfycbw_gj_Ky4LcYuylYrkLoZavsIXINnYg8dTRLTFXfM5iFeHy7VDY1G9aiEU6fZ6kH84N0Q/exec",
        'https://script.google.com/macros/s/AKfycbw_gj_Ky4LcYuylYrkLoZavsIXINnYg8dTRLTFXfM5iFeHy7VDY1G9aiEU6fZ6kH84N0Q/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSelectedPlan(null);
    setFormData({ name: '', phone: '', address: '', notes: '' });
    setErrors({});
  };

  if (submitted) {
    const plan = monthlyPlans.find((p) => p.id === selectedPlan);
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
              24 hours to confirm your monthly cleaning plan.
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
                <span className="mb-success-label">Plan</span>
                <span className="mb-success-value">{plan?.name}</span>
              </div>
              <div className="mb-success-row mb-success-row-total">
                <span className="mb-success-label">Monthly Price</span>
                <span className="mb-success-value mb-success-price">
                  ₹{plan?.price}
                  <small>/month</small>
                </span>
              </div>
            </div>




            <div className="mb-success-actions">
              <button className="mb-btn mb-btn-primary" onClick={handleReset}>
                Book Another Plan
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

  return (
    <div className="mb-page">
      {/* Hero Section */}
      <section className="mb-hero">
        <div className="mb-hero-bg-pattern"></div>
        <div className="mb-hero-glow mb-hero-glow-1"></div>
        <div className="mb-hero-glow mb-hero-glow-2"></div>
        <div className="container">
          <div className="mb-hero-content">
            <span className="mb-hero-badge">
              <span className="mb-hero-badge-dot"></span>
              Monthly Plans
            </span>
            <h1>
              Monthly Cleaning
              <span> Subscription</span>
            </h1>
            <p>
              Keep your washrooms spotless all month long. Choose a plan, fill in
              your details, and we&apos;ll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-main">
        <div className="container">
          <div className="mb-layout">
            {/* Left Column - Plans */}
            <div className="mb-plans-section">
              <div className="mb-section-header">
                <span className="mb-section-number">1</span>
                <div>
                  <h2 className="mb-section-title">Choose Your Plan</h2>
                  <p className="mb-section-subtitle">
                    Select the monthly plan that fits your needs
                  </p>
                </div>
              </div>

              <div className="mb-plans-grid">
                {monthlyPlans.map((plan, index) => (
                  <div
                    key={plan.id}
                    className={`mb-plan-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      setErrors((prev) => ({ ...prev, plan: undefined }));
                    }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.popular && (
                      <div className="mb-plan-popular-badge">Most Popular</div>
                    )}

                    <div className="mb-plan-header">
                      <div className="mb-plan-icon">{plan.icon}</div>
                      <div className="mb-plan-name">{plan.name}</div>
                      <div className="mb-plan-visits">{plan.visits}</div>
                    </div>

                    <div className="mb-plan-price-wrap">
                      <span className="mb-plan-currency">₹</span>
                      <span className="mb-plan-price">{plan.price}</span>
                      <span className="mb-plan-period">{plan.period}</span>
                    </div>

                    <ul className="mb-plan-features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <span className="mb-plan-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-plan-select-indicator">
                      <div className="mb-plan-radio">
                        {selectedPlan === plan.id && (
                          <div className="mb-plan-radio-dot"></div>
                        )}
                      </div>
                      <span>
                        {selectedPlan === plan.id
                          ? 'Selected'
                          : 'Select This Plan'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {errors.plan && (
                <p className="mb-error-text" style={{ marginTop: '12px' }}>
                  {errors.plan}
                </p>
              )}
            </div>

            {/* Right Column - Form */}
            <div className="mb-form-section">
              <div className="mb-section-header">
                <span className="mb-section-number">2</span>
                <div>
                  <h2 className="mb-section-title">Your Details</h2>
                  <p className="mb-section-subtitle">
                    Tell us how to reach you
                  </p>
                </div>
              </div>

              <form className="mb-form" onSubmit={handleSubmit} noValidate>
                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="mb-name">
                    Full Name <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap ${errors.name ? 'error' : ''}`}>
                    <span className="mb-input-icon">👤</span>
                    <input
                      id="mb-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name)
                          setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                    />
                  </div>
                  {errors.name && (
                    <p className="mb-error-text">{errors.name}</p>
                  )}
                </div>

                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="mb-phone">
                    Phone Number <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap ${errors.phone ? 'error' : ''}`}>
                    <span className="mb-input-icon-text">+91</span>
                    <input
                      id="mb-phone"
                      type="tel"
                      placeholder="Enter 10-digit number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, ''),
                        });
                        if (errors.phone)
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mb-error-text">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="mb-address">
                    Address <span className="mb-required">*</span>
                  </label>
                  <div className={`mb-input-wrap mb-input-wrap-textarea ${errors.address ? 'error' : ''}`}>
                    <span className="mb-input-icon">📍</span>
                    <textarea
                      id="mb-address"
                      placeholder="Full address with flat no., building, area & landmark"
                      rows={3}
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.address)
                          setErrors((prev) => ({
                            ...prev,
                            address: undefined,
                          }));
                      }}
                    />
                  </div>
                  {errors.address && (
                    <p className="mb-error-text">{errors.address}</p>
                  )}
                </div>

                <div className="mb-form-group">
                  <label className="mb-label" htmlFor="mb-notes">
                    Additional Notes{' '}
                    <span className="mb-optional">(optional)</span>
                  </label>
                  <div className="mb-input-wrap mb-input-wrap-textarea">
                    <span className="mb-input-icon">📝</span>
                    <textarea
                      id="mb-notes"
                      placeholder="Any special instructions or preferences..."
                      rows={2}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Selected Plan Summary */}
                {selectedPlan && (
                  <div className="mb-selected-summary">
                    <div className="mb-selected-summary-header">
                      <span className="mb-selected-summary-icon">📋</span>
                      <span>Selected Plan</span>
                    </div>
                    <div className="mb-selected-summary-body">
                      <div className="mb-selected-summary-name">
                        {monthlyPlans.find((p) => p.id === selectedPlan)?.name}
                      </div>
                      <div className="mb-selected-summary-price">
                        ₹
                        {monthlyPlans.find((p) => p.id === selectedPlan)?.price}
                        <small>/month</small>
                      </div>
                    </div>
                  </div>
                )}

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
              </form>
            </div>
          </div>
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
                <p>Background verified & trained cleaning staff</p>
              </div>
            </div>
            <div className="mb-trust-item">
              <span className="mb-trust-icon">📅</span>
              <div>
                <strong>Scheduled Visits</strong>
                <p>3 fixed visits per month on your preferred days</p>
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
