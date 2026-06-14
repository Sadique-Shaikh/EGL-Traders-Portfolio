// src/components/AboutSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const stats = [
    { value: '25+', label: 'Countries' },
    { value: '10+', label: 'Years' },
    { value: '500+', label: 'Orders' },
    { value: '0', label: 'Disputes' },
];

const AboutSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const statsVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.3 },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="about-section"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* ── Header ── */}
            <motion.div className="about-header" variants={itemVariants}>
                <motion.p 
                    className="about-eyebrow"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    WHO WE ARE
                </motion.p>
                <motion.h2 
                    className="about-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    About <span className="about-heading-accent">EGL Traders</span>
                </motion.h2>
                <motion.div 
                    className="about-heading-rule"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 40 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />
            </motion.div>

            {/* ── Two-column layout ── */}
            <div className="about-body">
                {/* Left: dark green image card with stats overlay */}
                <motion.div 
                    className="about-image-wrap"
                    variants={imageVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div 
                        className="about-image-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Optional: Add a gradient overlay on hover */}
                        <div className="about-image-overlay" />
                    </motion.div>

                    {/* Stats floating card */}
                    <motion.div 
                        className="about-stats-card"
                        variants={statsVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        {stats.map((s, index) => (
                            <motion.div 
                                className="about-stat" 
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                whileHover={{ scale: 1.1, color: "#C8974A" }}
                            >
                                <span className="about-stat-val">{s.value}</span>
                                <span className="about-stat-lbl">{s.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: text */}
                <motion.div className="about-text" variants={itemVariants}>
                    {[
                        "EGL Traders is a dynamic India-based trading and sourcing company committed to delivering high-quality products across global markets. We specialize in sourcing, supplying, exporting, and importing a wide range of goods.",
                        "With a strong network of manufacturers, suppliers, and logistics partners, we ensure efficient procurement and timely delivery. Our business model is simple — we source what our customers need, when they need it, at competitive prices.",
                        "We work closely with clients across industries, including retail, hospitality, and wholesale distribution, ensuring flexibility, reliability, and long-term partnerships."
                    ].map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutSection;