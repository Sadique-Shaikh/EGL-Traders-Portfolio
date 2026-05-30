import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext';
import "./Hero.css"
import TrustBar from './TrustBar'

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.25 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
}

const imageVariants = {
    hidden: { opacity: 0, x: 40, rotate: 0 },
    visible: {
        opacity: 1,
        x: 0,
        rotate: -3,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
}

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut', delay: custom },
    }),
}

// ─── Floating Badge Component ─────────────────────────────────────────────────

const StatBadge = ({ value, label, position, delay, dark = false }) => (
    <motion.div
        custom={delay}
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        style={position}
        className={`absolute z-20 stat-badge ${dark ? 'stat-badge-dark' : 'stat-badge-light'}`}
    >
        <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
            className="stat-badge-content"
        >
            <div className="stat-badge-value">
                {value}
            </div>
            <div className="stat-badge-label">
                {label}
            </div>
        </motion.div>
    </motion.div>
)

// ─── Hero Component ───────────────────────────────────────────────────────────

const Hero = () => {
    // Subtle parallax on image when mouse moves
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set((e.clientX - centerX) / 30)
        mouseY.set((e.clientY - centerY) / 30)
    }

    const [bgLoaded, setBgLoaded] = useState(false);


    // Store as encoded or split array
    const encodedNumber = ['+', '9', '1', '9', '2', '0', '9', '6', '1', '5', '8', '2', '5'];
    const whatsappNumber = encodedNumber.join('');

    return (
        <>
            <section className={`hero-section ${bgLoaded ? 'bg-loaded' : ''}`} onMouseMove={handleMouseMove}>

                {/* ── Main hero grid ── */}
                <div className="hero-inner">

                    {/* LEFT — Text content */}
                    <div className="hero-left">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Badge */}
                            <motion.div variants={itemVariants}>
                                <div className="badge-pill">
                                    <span className="badge-dot" />
                                    India-Based · Global Reach
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1 className="hero-headline" variants={itemVariants}>
                                Sourcing the world,<br />
                                <span>delivering to your door</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p className="hero-desc" variants={itemVariants}>
                                EGL Traders connects businesses to quality products across global
                                markets — rice, spices, beverages, and more. Flexible, reliable,
                                competitive.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div className="hero-btns" variants={itemVariants}>
                                <motion.button
                                    className="btn-whatsapp"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                                // onClick={() => window.open('https://wa.me/+919209615825', '_blank')}
                                >
                                    {/* WhatsApp SVG icon */}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp Us
                                </motion.button>

                                <motion.a
                                    href="#products"
                                    className="btn-products"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    View Products
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT — Floating image + stat badges */}
                    <div className="hero-right">
                        <div className="float-image-wrap">

                            {/* Main floating image — slightly rotated */}
                            <motion.div
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ x: springX, y: springY }}
                                className="float-image-wrap"
                            >
                                <div className="float-image">

                                    {/* ── REPLACE THIS DIV WITH YOUR REAL IMAGE ── */}
                                    <img
                                        src="src\assets\istockphoto-1339057752-612x612.jpg"
                                        alt="EGL Traders cargo shipping"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                                    />

                                    <svg
                                        className="float-image-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        width="88"
                                        height="88"
                                        color="rgba(200,151,74,0.3)"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
                                        <path d="M4 18l-1 -3h18l-2 4" />
                                        <path d="M5 15v-2h6v-3h2v3h5v2" />
                                        <path d="M6 9l6 -6l6 6" />
                                    </svg>
                                    <span className="float-image-label">REPLACE WITH REAL PHOTO</span>
                                </div>
                            </motion.div>

                            {/* Top-right badge — countries */}
                            <StatBadge
                                value="25+"
                                label="Countries served"
                                position={{ top: '16px', right: '-24px' }}
                                delay={0.8}
                                dark={false}
                            />

                            {/* Bottom-left badge — disputes */}
                            <StatBadge
                                value="100%"
                                label="Zero disputes"
                                position={{ bottom: '32px', left: '-28px' }}
                                delay={1.0}
                                dark={true}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Trust bar with counting animation ── */}
                <TrustBar />

            </section>
        </>
    )
}

export default Hero