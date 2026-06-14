// src/components/ProductsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import ProductModal from './ProductsModal';

export const products = [
    {
        icon: 'ti-building-store',
        bgClass: 'bg-dark-green',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
        title: 'Hotel Supplies',
        description: 'Complete amenities for hotels, resorts, and hospitality businesses.',
        tags: ['Bathroom', 'Bed Linen', '+2 more'],
    },
    {
        icon: 'ti-plant-2',
        bgClass: 'bg-medium-green',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
        title: 'Rice & Grains',
        description: 'Premium Basmati and non-Basmati rice sourced from finest farms.',
        tags: ['Basmati', 'Brown Rice', '+2 more'],
    },
    {
        icon: 'ti-leaf',
        bgClass: 'bg-dark-brown',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
        title: 'Spices & Seasonings',
        description: 'Pure aromatic spices from the finest growing regions worldwide.',
        tags: ['Cardamom', 'Pepper', '+3 more'],
    },
    {
        icon: 'ti-droplet',
        bgClass: 'bg-deep-teal',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
        title: 'Beverages',
        description: 'High-quality tea, coffee and beverages for wholesale supply.',
        tags: ['Tea', 'Coffee', '+2 more'],
    },
    {
        icon: 'ti-candy',
        bgClass: 'bg-dark-purple',
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80',
        title: 'Premium Chocolates',
        description: 'Luxury assorted chocolates, truffles, and confectionery products from premium international brands.',
        tags: ['Truffles', 'Assorted', 'Gift Boxes'],
    },
    {
        icon: 'ti-search',
        bgClass: 'bg-forest',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
        title: 'Custom Sourcing',
        description: 'Tailored sourcing for your specific product requirements globally.',
        tags: ['Raw Materials', 'Packaging'],
    },
];

const ProductsSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const sectionRef = useRef(null);
    const ruleRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('.product-card');
        const header = sectionRef.current?.querySelector('.products-header');

        // Scroll-triggered reveal for cards + header
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (header) observer.observe(header);
        cards?.forEach((card) => observer.observe(card));

        // Animated heading rule
        const ruleObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rule-animate');
                        ruleObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ruleRef.current) ruleObserver.observe(ruleRef.current);

        return () => {
            observer.disconnect();
            ruleObserver.disconnect();
        };
    }, []);

    const handleOpen = (product) => setSelectedProduct(product);
    const handleClose = () => setSelectedProduct(null);

    return (
        <>
            <section className="products-section" ref={sectionRef}>
                {/* Decorative background orbs — mirrors Services section */}
                <div className="products-bg-orb products-bg-orb--1" aria-hidden="true" />
                <div className="products-bg-orb products-bg-orb--2" aria-hidden="true" />

                <div className="products-header">
                    <p className="products-eyebrow">OUR RANGE</p>
                    <h2 className="products-heading">
                        Products We <span className="products-heading-accent">Offer</span>
                    </h2>
                    <div className="products-heading-rule" ref={ruleRef} />
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            className="product-card product-card--clickable"
                            key={product.title}
                            style={{ '--card-index': index }}
                            onClick={() => handleOpen(product)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View details for ${product.title}`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleOpen(product);
                                }
                            }}
                        >
                            {/* Image with zoom + overlay */}
                            <div className="product-card-image">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-card-img"
                                    loading="lazy"
                                />
                                <div className="product-card-overlay" />

                                {/* Icon badge — top-right */}
                                <div className="product-card-icon-badge">
                                    <i className={`ti ${product.icon}`} aria-hidden="true" />
                                </div>

                                {/* Golden shimmer sweep on hover */}
                                <div className="product-card-shimmer" aria-hidden="true" />
                            </div>

                            <div className="product-card-body">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-desc">{product.description}</p>
                                <div className="product-tags">
                                    {product.tags.map((tag) => (
                                        <span className="product-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <span className="product-card-cta">
                                    View Products
                                    <i className="ti ti-arrow-right product-cta-arrow" aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <ProductModal
                product={selectedProduct}
                onClose={handleClose}
            />
        </>
    );
};

export default ProductsSection;