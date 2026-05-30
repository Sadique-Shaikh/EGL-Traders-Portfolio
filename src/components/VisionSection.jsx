// src/components/VisionSection.jsx
import React from 'react';
import './VisionSection.css';

const VisionSection = () => {
    return (
        <section className="vision-section">
            <div className="vision-inner">
                {/* Decorative quote mark */}
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

                    {/* Three vision pillars */}
                    <div className="vision-pillars">
                        <div className="vision-pillar">
                            <i className="ti ti-globe" aria-hidden="true" />
                            <span>Global Reach</span>
                        </div>
                        <div className="vision-pillar">
                            <i className="ti ti-handshake" aria-hidden="true" />
                            <span>Strong Relationships</span>
                        </div>
                        <div className="vision-pillar">
                            <i className="ti ti-rocket" aria-hidden="true" />
                            <span>Seamless Trade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;