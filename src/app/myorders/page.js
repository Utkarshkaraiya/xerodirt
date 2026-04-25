'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';





export default function OrdersHistory() {

    const [orders, setOrders] = useState([]);
    const [phone, setPhone] = useState('');


    useEffect(() => {
        // Load data from localStorage
        const savedHistory = JSON.parse(localStorage.getItem('xerodirt_order_history')) || [];
        const savedPhone = localStorage.getItem('xerodirt_phone') || '';

        setOrders(savedHistory);
        setPhone(savedPhone);
    }, []);

    return (
        <>

            <section className="page-hero history-hero">
                <div className="container">
                    <span className="section-label">My Orders</span>
                    <h1>Your Cleaning History</h1>
                    <p>Here&apos;s a history of the services you&apos;ve booked with Xerodirt.</p>
                </div>
            </section>

            <div className="container" style={{ padding: '40px 10px', minHeight: '80vh' }}>
                {/*<h1 style={{ marginBottom: '10px' }}>My Orders</h1>*/}
                {phone && <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Showing orders for: <strong>+91 {phone}</strong></p>}

                {orders.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                        <p>You haven't placed any orders yet.</p>
                        <Link href="/#services" className="btn btn-primary" style={{ marginTop: '15px' }}>
                            Book a Service
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {orders.map((order, idx) => (
                            <div key={idx} style={{
                                padding: '20px',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                background: '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: {order.id}</span>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        background: 'var(--primary-bg)',
                                        color: 'var(--primary)',
                                        textTransform: 'uppercase'
                                    }}>
                                        {order.status}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{order.services.join(', ')}</h3>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem' }}>
                                    <div>📅 <strong>Date:</strong> {order.date}</div>
                                    <div>⏰ <strong>Slot:</strong> {order.time}</div>
                                </div>

                                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600' }}>Amount Paid:</span>
                                    <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>₹{order.total}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>


        </>
    );
}

