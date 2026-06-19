// src/components/Services.jsx
import React, { useEffect, useRef } from 'react';
import './Services.css';

const services = [
    {
        icon: 'ti-world',
        title: 'Import / Export',
        description:
            'End-to-end global logistics with full documentation support. We handle customs, freight, and last-mile delivery.',
        stat: '40+ Routes',
    },
    {
        icon: 'ti-search',
        title: 'Custom Sourcing',
        description:
            'Find exactly what you need from our verified supplier network across 25+ countries.',
        stat: '25+ Countries',
    },
    {
        icon: 'ti-box',
        title: 'Wholesale Supply',
        description:
            'Bulk orders at competitive rates, direct from manufacturers. No middlemen, better margins.',
        stat: '10K+ Orders',
    },
    {
        icon: 'ti-affiliate',
        title: 'B2B Partnership',
        description:
            'Long-term trade agreements tailored to your business needs with dedicated account management.',
        stat: '500+ Partners',
    },
];

const Services = () => {
    const sectionRef = useRef(null);
    const ruleRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll-triggered card animations
        const cards = sectionRef.current?.querySelectorAll('.service-card');
        const header = sectionRef.current?.querySelector('.services-header');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (header) observer.observe(header);
        cards?.forEach((card) => observer.observe(card));

        // Animate the heading rule width on scroll
        const ruleObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rule-animate');
                        ruleObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ruleRef.current) ruleObserver.observe(ruleRef.current);

        return () => {
            observer.disconnect();
            ruleObserver.disconnect();
        };
    }, []);

    return (
        <section className="services-section" ref={sectionRef}>
            {/* Decorative background orbs */}
            <div className="services-bg-orb services-bg-orb--1" aria-hidden="true" />
            <div className="services-bg-orb services-bg-orb--2" aria-hidden="true" />

            <div className="services-header">
                <p className="services-eyebrow">WHAT WE OFFER</p>
                <h2 className="services-heading">
                    Our Core <span className="services-heading-accent">Services</span>
                </h2>
                <div className="services-heading-rule" ref={ruleRef} />
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={service.title}
                        style={{ '--card-index': index }}
                    >
                        {/* Shimmer overlay */}
                        <div className="service-card-shimmer" aria-hidden="true" />

                        <div className="service-card-top">
                            <div className="service-icon-wrap">
                                <i className={`ti ${service.icon}`} aria-hidden="true" />
                            </div>
                            <span className="service-stat">{service.stat}</span>
                        </div>

                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>

                        {/* <div className="service-card-footer">
                            <span className="service-learn-more">
                                Learn more
                                <i className="ti ti-arrow-right service-arrow" aria-hidden="true" />
                            </span>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;