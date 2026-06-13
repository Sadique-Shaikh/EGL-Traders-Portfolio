// src/components/Services.jsx
import React from 'react';
import './Services.css';

const services = [
    {
        icon: 'ti-world',
        title: 'Import / Export',
        description:
            'End-to-end global logistics with full documentation support. We handle customs, freight, and last-mile delivery.',
    },
    {
        icon: 'ti-search',
        title: 'Custom Sourcing',
        description:
            'Find exactly what you need from our verified supplier network across 25+ countries.',
    },
    {
        icon: 'ti-box',
        title: 'Wholesale Supply',
        description:
            'Bulk orders at competitive rates, direct from manufacturers. No middlemen, better margins.',
    },
    {
        icon: 'ti-affiliate',
        title: 'B2B Partnership',
        description:
            'Long-term trade agreements tailored to your business needs with dedicated account management.',
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-header">
                <p className="services-eyebrow">WHAT WE OFFER</p>
                <h2 className="services-heading">
                    Our Core <span className="services-heading-accent">Services</span>
                </h2>
                <div className="services-heading-rule" />
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.title}>
                        <div className="service-icon-wrap">
                            <i className={`ti ${service.icon}`} aria-hidden="true" />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services