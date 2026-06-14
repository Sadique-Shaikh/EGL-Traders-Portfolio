// src/components/WhyChooseUs.jsx
import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const reasons = [
    {
        icon: 'ti-world',
        title: 'Global Network',
        stat: '25+',
        statLabel: 'Countries',
        description: 'Trusted partners across 25+ countries with seamless logistics and documentation.',
    },
    {
        icon: 'ti-bolt',
        title: 'Fast Turnaround',
        stat: '7',
        statLabel: 'Day Avg. Delivery',
        description: 'Efficient procurement and shipping — 7-day delivery average on standard orders.',
    },
    {
        icon: 'ti-shield',
        title: 'Zero Disputes',
        stat: '10+',
        statLabel: 'Years of Trust',
        description: '10+ years, 0 disputes — built entirely on transparency and trust.',
    },
    {
        icon: 'ti-diamond',
        title: 'Premium Quality',
        stat: '100%',
        statLabel: 'Quality Checked',
        description: 'Rigorous quality checks for every single shipment before dispatch.',
    },
    {
        icon: 'ti-adjustments-horizontal',
        title: 'Custom Solutions',
        stat: '500+',
        statLabel: 'Custom Orders',
        description: 'Tailored sourcing designed to match your exact business requirements.',
    },
    {
        icon: 'ti-headset',
        title: '24/7 Support',
        stat: '24/7',
        statLabel: 'Trade Desk',
        description: 'Dedicated trade desk always available whenever you need us.',
    },
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const ruleRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('.why-card');
        const header = sectionRef.current?.querySelector('.why-header');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (header) observer.observe(header);
        cards?.forEach((card) => observer.observe(card));

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
        <section className="why-section" ref={sectionRef}>
            <div className="why-bg-orb why-bg-orb--1" aria-hidden="true" />
            <div className="why-bg-orb why-bg-orb--2" aria-hidden="true" />

            <div className="why-header">
                <p className="why-eyebrow">WHY EGL TRADERS</p>
                <h2 className="why-heading">Why Choose Us</h2>
                <div className="why-heading-rule" ref={ruleRef} />
            </div>

            <div className="why-grid">
                {reasons.map((reason, index) => (
                    <div
                        className="why-card"
                        key={reason.title}
                        style={{ '--card-index': index }}
                    >
                        <div className="why-card-glow" aria-hidden="true" />

                        <div className="why-card-top">
                            <div className="why-icon-wrap">
                                <i className={`ti ${reason.icon} why-icon`} aria-hidden="true" />
                            </div>
                            <div className="why-stat-wrap">
                                <span className="why-stat">{reason.stat}</span>
                                <span className="why-stat-label">{reason.statLabel}</span>
                            </div>
                        </div>

                        <h3 className="why-title">{reason.title}</h3>
                        <p className="why-desc">{reason.description}</p>

                        <div className="why-card-line" aria-hidden="true" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;