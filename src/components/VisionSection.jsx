// src/components/VisionSection.jsx
import React, { useEffect, useRef } from 'react';
import './VisionSection.css';

const pillars = [
    { icon: 'ti-globe', label: 'Global Reach' },
    { icon: 'ti-handshake', label: 'Strong Relationships' },
    { icon: 'ti-rocket', label: 'Seamless Trade' },
];

const VisionSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll(
            '.vision-quote-mark, .vision-eyebrow, .vision-heading, .vision-body, .vision-pillar'
        );

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

        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="vision-section" ref={sectionRef}>
            {/* Animated radial glow */}
            <div className="vision-glow" aria-hidden="true" />
            {/* Floating particles */}
            <div className="vision-particle vision-particle--1" aria-hidden="true" />
            <div className="vision-particle vision-particle--2" aria-hidden="true" />
            <div className="vision-particle vision-particle--3" aria-hidden="true" />

            <div className="vision-inner">
                <div className="vision-quote-mark">"</div>

                <div className="vision-content">
                    <p className="vision-eyebrow">OUR VISION</p>
                    <h2 className="vision-heading">
                        Built for the <span className="vision-accent">long game.</span>
                    </h2>
                    <p className="vision-body">
                        To become a globally trusted trading partner by delivering quality
                        products, building strong relationships, and ensuring seamless
                        international trade solutions.
                    </p>

                    <div className="vision-pillars">
                        {pillars.map((pillar, i) => (
                            <div
                                className="vision-pillar"
                                key={pillar.label}
                                style={{ '--pillar-index': i }}
                            >
                                <i className={`ti ${pillar.icon}`} aria-hidden="true" />
                                <span>{pillar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;