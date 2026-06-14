// src/components/Hero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Hero.css';
import TrustBar from './TrustBar';

// ─── Slides ───────────────────────────────────────────────────────────────────

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85',
        eyebrow: 'Hospitality Specialists',
        title: 'Supplying the\nWorld\'s Finest\nHotels',
        desc: 'From toiletries to bed linen — everything your property needs, sourced globally.',
    },
    {
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=85',
        eyebrow: 'Farm to Table',
        title: 'Premium Spices\n& Grains\nWorldwide',
        desc: 'Authentic flavours from the finest growing regions, delivered at scale.',
    },
    {
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=85',
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

    const whatsappNumber = ['+', '9', '1', '9', '2', '0', '9', '6', '1', '5', '8', '2', '5'].join('');
    const slide = slides[current];

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
                                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </motion.button>

                                {/* WhatsApp call — ghost */}
                                <motion.button
                                    className="btn-ghost"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products`, '_blank')}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18C1.61 2.09 2.48 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.09a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    Request a Call
                                </motion.button>
                            </motion.div>

                        </motion.div>
                    </div>

                    {/* RIGHT — floating image + stat badges */}
                    {/* <div className="hero-right">
                        <div className="float-image-wrap">
                            <motion.div
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ x: springX, y: springY }}
                                className="float-image-motion"
                            >
                                <div className="float-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80"
                                        alt="EGL Traders global cargo"
                                    />
                                </div>
                            </motion.div>

                            <StatBadge
                                value="25+"
                                label="Countries served"
                                position={{ top: '16px', right: '-24px' }}
                                delay={0.8}
                                dark={false}
                            />
                            <StatBadge
                                value="100%"
                                label="Zero disputes"
                                position={{ bottom: '32px', left: '-28px' }}
                                delay={1.0}
                                dark={true}
                            />
                        </div>
                    </div> */}

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