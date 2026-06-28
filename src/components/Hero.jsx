// src/components/Hero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Hero.css';
import TrustBar from './TrustBar';
import Hospitality_Specialists from './../assets/Hospitality_Specialists.webp'
import Farm_to_Table from './../assets/Farm_to_Table.webp'
import Artisan_Confectionery from './../assets/Artisan_Confectionery.webp'
import Custom_Sourcing from './../assets/Custom_Sourcing.webp'

// ─── Slides ───────────────────────────────────────────────────────────────────

const slides = [
    {
        image: Hospitality_Specialists,
        eyebrow: 'Hospitality Specialists',
        title: 'Supplying the\nWorld\'s Finest\nHotels',
        desc: 'From toiletries to bed linen — everything your property needs, sourced globally.',
    },
    {
        image: Farm_to_Table,
        eyebrow: 'Farm to Table',
        title: 'Premium Spices\n& Grains\nWorldwide',
        desc: 'Authentic flavours from the finest growing regions, delivered at scale.',
    },
    {
        image: Artisan_Confectionery,
        eyebrow: 'Artisan Confectionery',
        title: 'Fine Chocolates\nSourced from\nthe World\'s Best',
        desc: 'Premium cacao and handcrafted confections from Belgium, Switzerland, and beyond.',
    },
    {
        image: Custom_Sourcing,
        eyebrow: 'Custom Sourcing',
        title: 'Your Vision,\nOur Global\nNetwork',
        desc: 'Tailored procurement solutions for businesses of every size, anywhere.',
    },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, rotate: -3, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
        opacity: 1, scale: 1,
        transition: { duration: 0.5, ease: 'easeOut', delay: custom },
    }),
};

// ─── Stat Badge ───────────────────────────────────────────────────────────────

const StatBadge = ({ value, label, position, delay, dark = false }) => (
    <motion.div
        custom={delay}
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        style={position}
        className={`stat-badge ${dark ? 'stat-badge-dark' : 'stat-badge-light'}`}
    >
        <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
            className="stat-badge-content"
        >
            <div className="stat-badge-value">{value}</div>
            <div className="stat-badge-label">{label}</div>
        </motion.div>
    </motion.div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [transitioning, setTransitioning] = useState(false);

    const goTo = useCallback((index) => {
        if (transitioning || index === current) return;
        setPrev(current);
        setTransitioning(true);
        setCurrent(index);
        setTimeout(() => { setPrev(null); setTransitioning(false); }, 1000);
    }, [current, transitioning]);

    useEffect(() => {
        const t = setInterval(() => goTo((current + 1) % slides.length), 5000);
        return () => clearInterval(t);
    }, [current, goTo]);

    // Parallax on floating card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
    };

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
    const slide = slides[current];

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            "Hi EGL Traders,\n\nI'd like to get a quote for your products. Could you please share more details about your offerings?"
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <>
            {/* ── Hero section ── */}
            <section className="hero-section" onMouseMove={handleMouseMove}>

                {/* ── Carousel background ── */}
                {slides.map((s, i) => (
                    <div
                        key={i}
                        className={`hero-bg ${i === current ? 'hero-bg--active' : ''} ${i === prev ? 'hero-bg--prev' : ''}`}
                        style={{ backgroundImage: `url(${s.image})` }}
                    />
                ))}

                {/* Style-C: left-heavy gradient keeps text readable on any photo */}
                <div className="hero-gradient" />

                {/* ── Main grid ── */}
                <div className="hero-inner">

                    {/* LEFT — text */}
                    <div className="hero-left">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">

                            {/* <motion.div variants={itemVariants}>
                                <div className="badge-pill">
                                    <span className="badge-dot" />
                                    India-Based · Global Reach
                                </div>
                            </motion.div> */}

                            {/* Accent line + eyebrow animate with slide key */}
                            <motion.div variants={itemVariants} key={`ey-${current}`}>
                                <div className="hero-accent-line" />
                                <p className="hero-eyebrow">{slide.eyebrow}</p>
                                <div className="badge-pill">
                                    <span className="badge-dot" />
                                    India-Based · Global Reach
                                </div>
                            </motion.div>

                            <motion.h1 className="hero-headline" variants={itemVariants} key={`ti-${current}`}>
                                {slide.title.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </motion.h1>

                            <motion.p className="hero-desc" variants={itemVariants} key={`de-${current}`}>
                                {slide.desc}
                            </motion.p>

                            <motion.div className="hero-btns" variants={itemVariants}>
                                {/* WhatsApp — primary */}
                                <motion.button
                                    className="btn-whatsapp"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleWhatsApp.bind(this, '_blank')}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </motion.button>

                                {/* View Products */}
                                <motion.button
                                    className="btn-ghost flex items-center gap-2"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    View Products
                                </motion.button>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

                {/* ── Carousel controls ── */}
                <div className="hero-counter">
                    <span className="hero-counter-cur">{String(current + 1).padStart(2, '0')}</span>
                    <div className="hero-counter-track">
                        <div className="hero-counter-fill" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
                    </div>
                    <span className="hero-counter-tot">{String(slides.length).padStart(2, '0')}</span>
                </div>

                <div className="hero-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`hero-dot ${i === current ? 'hero-dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button className="hero-arrow hero-arrow--left" onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Previous slide">←</button>
                <button className="hero-arrow hero-arrow--right" onClick={() => goTo((current + 1) % slides.length)} aria-label="Next slide">→</button>

            </section>
            {/* ---------------------------------------------- */}
            {/* ── Trust bar ── */}
            <TrustBar />
        </>
    );
};

export default Hero;