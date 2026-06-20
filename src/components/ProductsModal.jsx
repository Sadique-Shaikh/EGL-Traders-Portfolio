// src/components/ProductModal.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ProductsModal.css';
import { products } from '../data/products';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const ProductModal = ({ product, onClose }) => {
    // ✅ ALL HOOKS MUST BE CALLED FIRST, BEFORE ANY CONDITIONAL RETURNS
    
    const [activeIndex, setActiveIndex] = useState(0);
    const modalContentRef = useRef(null);

    // Crossfade state
    const [imgSrc, setImgSrc] = useState('');
    const [imgFading, setImgFading] = useState(false);

    // Text swap state
    const [textFading, setTextFading] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);

    // Stagger triggers
    const [specsVisible, setSpecsVisible] = useState(false);
    const [chipsVisible, setChipsVisible] = useState(false);

    // Swipe state
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const [isSwiping, setIsSwiping] = useState(false);

    // Timers ref to clean up on unmount
    const timers = useRef([]);

    // Find details AFTER hooks but BEFORE conditional returns
    const details = product ? products.find((p) => p.title === product?.title) : null;

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };

    const addTimer = (fn, delay) => {
        const id = setTimeout(fn, delay);
        timers.current.push(id);
        return id;
    };

    // Run stagger animations
    const triggerStagger = useCallback(() => {
        setSpecsVisible(false);
        setChipsVisible(false);
        addTimer(() => setSpecsVisible(true), 80);
        addTimer(() => setChipsVisible(true), 180);
    }, []);

    // Reset everything when modal opens with a new product
    useEffect(() => {
        if (!product || !details || !details.items) return;
        clearTimers();
        setActiveIndex(0);
        setDisplayIndex(0);
        setImgSrc(details.items[0]?.image || '');
        setImgFading(false);
        setTextFading(false);
        triggerStagger();
    }, [product, details, triggerStagger]);

    // Switch item with crossfade + text swap
    const switchTo = useCallback((index) => {
        if (!details || !details.items || details.items.length === 0) return;
        if (index === activeIndex) return;
        if (index < 0) index = details.items.length - 1;
        if (index >= details.items.length) index = 0;

        clearTimers();

        // 1. Fade out image and text
        setImgFading(true);
        setTextFading(true);
        setSpecsVisible(false);
        setChipsVisible(false);

        addTimer(() => {
            // 2. Swap content mid-fade
            setActiveIndex(index);
            setDisplayIndex(index);
            setImgSrc(details.items[index]?.image || '');

            // 3. Fade back in
            setImgFading(false);
            setTextFading(false);

            // 4. Stagger secondary elements
            triggerStagger();
        }, 220);
    }, [activeIndex, details, triggerStagger]);

    // Next product
    const nextProduct = useCallback(() => {
        if (!details || !details.items || details.items.length === 0) return;
        switchTo(activeIndex + 1);
    }, [activeIndex, switchTo, details]);

    // Previous product
    const prevProduct = useCallback(() => {
        if (!details || !details.items || details.items.length === 0) return;
        switchTo(activeIndex - 1);
    }, [activeIndex, switchTo, details]);

    // Handle touch start for swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        setIsSwiping(true);
    };

    // Handle touch move (optional - for visual feedback)
    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX.current;
    };

    // Handle touch end for swipe
    const handleTouchEnd = (e) => {
        if (!isSwiping) {
            setIsSwiping(false);
            return;
        }

        touchEndX.current = e.changedTouches[0].clientX;
        const swipeThreshold = 50;
        const diff = touchEndX.current - touchStartX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                prevProduct();
            } else {
                nextProduct();
            }
        }

        setIsSwiping(false);
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    useEffect(() => {
        if (product) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            clearTimers();
        };
    }, [product]);

    // Keyboard events - only when modal is open and has data
    useEffect(() => {
        const handleKey = (e) => {
            // Only handle keyboard events if product and details exist
            if (!product || !details || !details.items || details.items.length === 0) return;
            
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prevProduct();
            if (e.key === 'ArrowRight') nextProduct();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, prevProduct, nextProduct, product, details]);

    // ✅ CONDITIONAL RETURNS GO AFTER ALL HOOKS
    if (!product || !details) return null;
    
    // Don't render if no active item
    if (!details.items || !details.items[displayIndex]) return null;

    const activeItem = details.items[displayIndex];

    const handleWhatsApp = () => {
        const msg = encodeURIComponent(`Hi, I'd like a quote for: ${product.title} — ${activeItem.name}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    };

    return (
        <div
            className="pmodal-backdrop"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.title} details`}
        >
            <div
                className="pmodal"
                onClick={(e) => e.stopPropagation()}
                ref={modalContentRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* ── LEFT: image panel ── */}
                <div className="pmodal-left">
                    <div className="pmodal-img-main">

                        <div className="pmodal-swipe-indicators">
                            <button
                                className="pmodal-swipe-btn pmodal-swipe-prev"
                                onClick={prevProduct}
                                aria-label="Previous product"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                className="pmodal-swipe-btn pmodal-swipe-next"
                                onClick={nextProduct}
                                aria-label="Next product"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                        <img
                            src={imgSrc || activeItem.image}
                            alt={activeItem.name}
                            className={`pmodal-img${imgFading ? ' pmodal-img--fading' : ''}`}
                        />

                        <div className="pmodal-img-gradient" aria-hidden="true" />

                        <div className="pmodal-img-overlay">
                            <span className="pmodal-category-pill">
                                <i className={`ti ${product.icon}`} aria-hidden="true" />
                                {product.title}
                            </span>
                        </div>

                        <div className={`pmodal-img-footer${textFading ? ' pmodal-img-footer--fading' : ''}`}>
                            <p className="pmodal-img-item-name">{activeItem.name}</p>
                            <p className="pmodal-img-tagline-overlay">{details.tagline}</p>
                        </div>
                    </div>

                    <div className="pmodal-thumbs">
                        {details.items.map((item, i) => (
                            <button
                                key={item.name}
                                className={`pmodal-thumb${i === activeIndex ? ' pmodal-thumb--active' : ''}`}
                                onClick={() => switchTo(i)}
                                aria-label={item.name}
                                aria-pressed={i === activeIndex}
                            >
                                <img src={item.image} alt={item.name} loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: details panel ── */}
                <div className="pmodal-right">

                    <div className="pmodal-header">
                        <span className="pmodal-eyebrow">{product.title}</span>
                        <button className="pmodal-close" onClick={onClose} aria-label="Close modal">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <h2 className={`pmodal-name${textFading ? ' pmodal-name--fading' : ''}`}>
                        {activeItem.name}
                    </h2>
                    <p className="pmodal-tagline">{details.tagline}</p>
                    <p className={`pmodal-desc${textFading ? ' pmodal-desc--fading' : ''}`}>
                        {activeItem.desc}
                    </p>

                    {details.specs && (
                        <div className="pmodal-section">
                            <p className="pmodal-section-label">Specifications</p>
                            <div className="pmodal-specs">
                                {Object.entries(details.specs).map(([key, val], i) => (
                                    <div
                                        key={key}
                                        className={`pmodal-spec-card${specsVisible ? ' pmodal-spec-card--visible' : ''}`}
                                        style={{ transitionDelay: specsVisible ? `${i * 65}ms` : '0ms' }}
                                    >
                                        <span className="pmodal-spec-key">{key}</span>
                                        <span className="pmodal-spec-val">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="pmodal-section">
                        <p className="pmodal-section-label">Also in this category</p>
                        <div className="pmodal-related">
                            {details.items
                                .filter((_, i) => i !== activeIndex)
                                .map((item, i) => {
                                    const origIndex = details.items.indexOf(item);
                                    return (
                                        <button
                                            key={item.name}
                                            className={`pmodal-related-chip${chipsVisible ? ' pmodal-related-chip--visible' : ''}`}
                                            style={{ transitionDelay: chipsVisible ? `${i * 55}ms` : '0ms' }}
                                            onClick={() => switchTo(origIndex)}
                                        >
                                            <img src={item.image} alt={item.name} loading="lazy" />
                                            <span>{item.name}</span>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="pmodal-note">
                        <i className="ti ti-info-circle" aria-hidden="true" />
                        <p>
                            These are a selection of our current offerings.{' '}
                            <strong>Additional products can be added and customised</strong>{' '}
                            to meet your specific business requirements.
                        </p>
                    </div>

                    <button className="pmodal-cta" onClick={handleWhatsApp}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get a Quote for {activeItem.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;