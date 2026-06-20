// src/components/CTASection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import logo from './../assets/Logo.webp';
import QuoteModal from './QuoteModal'; // Make sure this imports correctly

const CTASection = () => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
     
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919209615825';

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Hi EGL Traders,\n\nI'd like to get a quote for your products. Could you please share more details about your offerings?"
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    // Scroll-triggered reveals
    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll(
            '.cta-heading, .cta-subtext, .cta-buttons, .cta-trust-row'
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

    // Animated dot-grid canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const COLS = 18;
        const ROWS = 8;

        let frame = 0;
        let raf;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cw = canvas.width / (COLS + 1);
            const rh = canvas.height / (ROWS + 1);

            for (let r = 1; r <= ROWS; r++) {
                for (let c = 1; c <= COLS; c++) {
                    const wave = Math.sin(frame * 0.025 + c * 0.5 + r * 0.7);
                    const alpha = 0.06 + wave * 0.05;
                    const radius = 1.5 + wave * 0.8;
                    ctx.beginPath();
                    ctx.arc(c * cw, r * rh, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(200, 151, 74, ${alpha})`;
                    ctx.fill();
                }
            }

            frame++;
            raf = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section className="cta-section" ref={sectionRef}>
                {/* Animated dot-grid background */}
                <canvas ref={canvasRef} className="cta-canvas" aria-hidden="true" />

                {/* Radial glow */}
                <div className="cta-glow" aria-hidden="true" />

                <div className="cta-content">
                    <h2 className="cta-heading">
                        Ready to source <span className="cta-heading-accent">globally?</span>
                    </h2>
                    <p className="cta-subtext">
                        Get in touch today and we'll match you with the right products and
                        suppliers for your business.
                    </p>

                    {/* Trust signals */}
                    <div className="cta-trust-row">
                        <span className="cta-trust-item">
                            <i className="ti ti-shield-check" aria-hidden="true" />
                            Zero Disputes
                        </span>
                        <span className="cta-trust-dot" aria-hidden="true" />
                        <span className="cta-trust-item">
                            <i className="ti ti-world" aria-hidden="true" />
                            25+ Countries
                        </span>
                        <span className="cta-trust-dot" aria-hidden="true" />
                        <span className="cta-trust-item">
                            <i className="ti ti-clock" aria-hidden="true" />
                            Fast Response
                        </span>
                    </div>

                    <div className="cta-buttons">
                        <button
                            onClick={handleWhatsApp}
                            className="cta-btn cta-btn-whatsapp"
                        >
                            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                            WhatsApp Us
                        </button>
                        <button 
                            onClick={() => setIsQuoteModalOpen(true)} 
                            className="cta-btn cta-btn-outline"
                        >
                            <i className="ti ti-mail" aria-hidden="true" />
                            Get a Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Quote Modal */}
            <QuoteModal 
                isOpen={isQuoteModalOpen} 
                onClose={() => setIsQuoteModalOpen(false)} 
            />

            {/* ── Footer ──────────────────────────────────────────────────── */}
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <img
                            src={logo}
                            alt="EGL Logo"
                            className="h-8 sm:h-10 w-auto object-contain"
                        />
                        <span className="footer-logo-name">EGL TRADERS</span>
                    </div>
                    <p className="footer-copy">© 2026 EGL Traders. All rights reserved.</p>
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

export default CTASection;