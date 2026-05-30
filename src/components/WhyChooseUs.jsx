// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const reasons = [
    {
        icon: 'ti-world',
        title: 'Global Network',
        description: 'Trusted partners across 25+ countries with seamless logistics and documentation.',
    },
    {
        icon: 'ti-bolt',
        title: 'Fast Turnaround',
        description: 'Efficient procurement and shipping — 7-day delivery average on standard orders.',
    },
    {
        icon: 'ti-shield',
        title: 'Zero Disputes',
        description: '10+ years, 0 disputes — built entirely on transparency and trust.',
    },
    {
        icon: 'ti-diamond',
        title: 'Premium Quality',
        description: 'Rigorous quality checks for every single shipment before dispatch.',
    },
    {
        icon: 'ti-adjustments-horizontal',
        title: 'Custom Solutions',
        description: 'Tailored sourcing designed to match your exact business requirements.',
    },
    {
        icon: 'ti-headset',
        title: '24/7 Support',
        description: 'Dedicated trade desk always available whenever you need us.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-section">
            <div className="why-header">
                <p className="why-eyebrow">WHY EGL TRADERS</p>
                <h2 className="why-heading">Why Choose Us</h2>
                <div className="why-heading-rule" />
            </div>

            <div className="why-grid">
                {reasons.map((reason) => (
                    <div className="why-card" key={reason.title}>
                        <i className={`ti ${reason.icon} why-icon`} aria-hidden="true" />
                        <h3 className="why-title">{reason.title}</h3>
                        <p className="why-desc">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;