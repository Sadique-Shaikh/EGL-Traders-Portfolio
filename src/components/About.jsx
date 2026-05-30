// src/components/AboutSection.jsx
import React from 'react';
import './About.css';

const stats = [
    { value: '25+', label: 'Countries' },
    { value: '10+', label: 'Years' },
    { value: '500+', label: 'Orders' },
    { value: '0', label: 'Disputes' },
];

const AboutSection = () => {
    return (
        <section className="about-section">
            {/* ── Header ── */}
            <div className="about-header">
                <p className="about-eyebrow">WHO WE ARE</p>
                <h2 className="about-heading">
                    About <span className="about-heading-accent">EGL Traders</span>
                </h2>
                <div className="about-heading-rule" />
            </div>

            {/* ── Two-column layout ── */}
            <div className="about-body">
                {/* Left: dark green image card with stats overlay */}
                <div className="about-image-wrap">
                    <div className="about-image-card">
                        <i className="ti ti-building-store about-image-icon" aria-hidden="true" />
                    </div>
                    {/* Stats floating card */}
                    <div className="about-stats-card">
                        {stats.map((s) => (
                            <div className="about-stat" key={s.label}>
                                <span className="about-stat-val">{s.value}</span>
                                <span className="about-stat-lbl">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: text */}
                <div className="about-text">
                    <p>
                        EGL Traders is a dynamic India-based trading and sourcing company committed
                        to delivering high-quality products across global markets. We specialize in
                        sourcing, supplying, exporting, and importing a wide range of goods.
                    </p>
                    <p>
                        With a strong network of manufacturers, suppliers, and logistics partners,
                        we ensure efficient procurement and timely delivery. Our business model is
                        simple — we source what our customers need, when they need it, at
                        competitive prices.
                    </p>
                    <p>
                        We work closely with clients across industries, including retail,
                        hospitality, and wholesale distribution, ensuring flexibility, reliability,
                        and long-term partnerships.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;