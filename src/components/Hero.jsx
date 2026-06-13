// src/components/Hero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85',
        eyebrow: 'Hospitality Specialists',
        title: 'Supplying the\nWorld\'s Finest\nHotels',
        desc: 'From toiletries to bed linen — everything your property needs, sourced globally.',
        cta: 'Explore Hotel Supplies',
    },
    {
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=85',
        eyebrow: 'Farm to Table',
        title: 'Premium Spices\n& Grains\nWorldwide',
        desc: 'Authentic flavours from the finest growing regions, delivered at scale.',
        cta: 'View Our Products',
    },
    {
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=85',
        eyebrow: 'Custom Sourcing',
        title: 'Your Vision,\nOur Global\nNetwork',
        desc: 'Tailored procurement solutions for businesses of every size, anywhere.',
        cta: 'Get a Quote',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [transitioning, setTransitioning] = useState(false);

    const goTo = useCallback((index) => {
        if (transitioning || index === current) return;
        setPrev(current);
        setTransitioning(true);
        setCurrent(index);
        setTimeout(() => {
            setPrev(null);
            setTransitioning(false);
        }, 900);
    }, [current, transitioning]);

    useEffect(() => {
        const timer = setInterval(() => {
            goTo((current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    const slide = slides[current];

    return (
        <section className="hero">

            {/* Background images */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`hero-bg ${i === current ? 'hero-bg--active' : ''} ${i === prev ? 'hero-bg--prev' : ''}`}
                    style={{ backgroundImage: `url(${s.image})` }}
                />
            ))}

            {/* Left gradient so text always reads over any photo */}
            <div className="hero-gradient" />

            {/* Content */}
            <div className="hero-content" key={current}>
                <div className="hero-accent-line" />
                <p className="hero-eyebrow">{slide.eyebrow}</p>
                <h1 className="hero-title">
                    {slide.title.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-actions">
                    <button className="hero-btn hero-btn--primary">
                        {slide.cta} <span className="hero-btn-arrow">→</span>
                    </button>
                    <button className="hero-btn hero-btn--ghost">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Slide counter */}
            <div className="hero-counter">
                <span className="hero-counter-current">
                    {String(current + 1).padStart(2, '0')}
                </span>
                <div className="hero-counter-track">
                    <div
                        className="hero-counter-fill"
                        style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                    />
                </div>
                <span className="hero-counter-total">
                    {String(slides.length).padStart(2, '0')}
                </span>
            </div>

            {/* Dot navigation */}
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

            {/* Prev / Next arrows */}
            <button
                className="hero-arrow hero-arrow--left"
                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
            >
                ←
            </button>
            <button
                className="hero-arrow hero-arrow--right"
                onClick={() => goTo((current + 1) % slides.length)}
                aria-label="Next slide"
            >
                →
            </button>

        </section>
    );
};

export default Hero;