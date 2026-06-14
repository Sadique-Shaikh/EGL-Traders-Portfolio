// src/components/TrustBar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './TrustBar.css';

const useCountUp = (end, duration = 2) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true, margin: '-60px' });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated && end > 0) {
            setHasAnimated(true);
            let startTime = null;
            const animate = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * end));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration, hasAnimated]);

    return { count, elementRef, isInView };
};

const TrustItem = ({ value, label, suffix, badgeIcon, badgeText, duration = 2, index = 0 }) => {
    const { count, elementRef, isInView } = useCountUp(value, duration);
    const displayValue = value === 0 ? 'Zero' : `${isInView ? count : 0}${suffix}`;

    return (
        <motion.div
            className="trust-item"
            ref={elementRef}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Radial glow that appears on hover */}
            <div className="trust-item-glow" aria-hidden="true" />

            <div className="trust-badge">
                <i className={`ti ${badgeIcon}`} aria-hidden="true" />
                {badgeText}
            </div>

            <span className="trust-num">{displayValue}</span>
            <span className="trust-underline" />
            <span className="trust-lbl">{label}</span>
        </motion.div>
    );
};

const TrustBar = () => {
    const barRef = useRef(null);
    const isInView = useInView(barRef, { once: true, margin: '-40px' });

    const items = [
        { value: 25,  label: 'Countries Served', suffix: '+', badgeIcon: 'ti-world',          badgeText: 'Global',    duration: 2   },
        { value: 10,  label: 'Years of Trade',   suffix: '+', badgeIcon: 'ti-calendar-check', badgeText: 'Proven',    duration: 2   },
        { value: 500, label: 'Orders Shipped',   suffix: '+', badgeIcon: 'ti-ship',            badgeText: 'Delivered', duration: 2.5 },
        { value: 0,   label: 'Disputes Ever',    suffix: '',  badgeIcon: 'ti-shield-check',    badgeText: 'Trusted',   duration: 1.5 },
    ];

    return (
        <div className="trust-bar-wrapper" ref={barRef}>
            {/* Top border that draws itself in when section enters view */}
            <div className={`trust-bar-line trust-bar-line--top ${isInView ? 'is-drawn' : ''}`} aria-hidden="true" />

            {/* Ambient glow behind the whole bar */}
            <div className="trust-bar-ambient" aria-hidden="true" />

            <div className="trust-bar">
                {items.map((item, i) => (
                    <TrustItem key={item.label} {...item} index={i} />
                ))}
            </div>

            {/* Bottom border */}
            <div className={`trust-bar-line trust-bar-line--bottom ${isInView ? 'is-drawn' : ''}`} aria-hidden="true" />
        </div>
    );
};

export default TrustBar;