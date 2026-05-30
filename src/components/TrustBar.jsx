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

const TrustItem = ({ value, label, suffix, badgeIcon, badgeText, duration = 2 }) => {
    const { count, elementRef, isInView } = useCountUp(value, duration);
    const displayValue = value === 0 ? 'Zero' : `${isInView ? count : 0}${suffix}`;

    return (
        <motion.div
            className="trust-item"
            ref={elementRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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
    const items = [
        { value: 25, label: 'Countries Served', suffix: '+', badgeIcon: 'ti-world', badgeText: 'Global', duration: 2 },
        { value: 10, label: 'Years of Trade', suffix: '+', badgeIcon: 'ti-calendar-check', badgeText: 'Proven', duration: 2 },
        { value: 500, label: 'Orders Shipped', suffix: '+', badgeIcon: 'ti-ship', badgeText: 'Delivered', duration: 2.5 },
        { value: 0, label: 'Disputes Ever', suffix: '', badgeIcon: 'ti-shield-check', badgeText: 'Trusted', duration: 1.5 },
    ];

    return (
        <motion.div
            className="trust-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {items.map((item) => (
                <TrustItem key={item.label} {...item} />
            ))}
        </motion.div>
    );
};

export default TrustBar;