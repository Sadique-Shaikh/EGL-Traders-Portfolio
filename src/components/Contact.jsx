// src/components/CTASection.jsx
import React from 'react';
import './Contact.css';
import logo from './../assets/new Egl logo.PNG';

const ContactCTA = () => {
    return (
        <>
            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-heading">
                        Ready to source <span className="cta-heading-accent">globally?</span>
                    </h2>
                    <p className="cta-subtext">
                        Get in touch today and we'll match you with the right products and
                        suppliers for your business.
                    </p>
                    <div className="cta-buttons">
                        <a
                            href="https://wa.me/your-number"
                            className="cta-btn cta-btn-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                            WhatsApp Us
                        </a>
                        <a href="#contact" className="cta-btn cta-btn-outline">
                            Get a Quote
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Footer ──────────────────────────────────────────────────── */}
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <div className="footer-logo-circle">
                            {/* EGL */}
                            <img
                                src={logo}
                                alt="EGL Logo"
                                className="h-8 sm:h-10 w-auto object-contain"
                            />
                        </div>
                        <span className="footer-logo-name">EGL TRADERS</span>
                    </div>
                    <p className="footer-copy">© 2025 EGL Traders. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ContactCTA;