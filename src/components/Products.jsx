// src/components/ProductsSection.jsx
import React from 'react';
import './Products.css';

const products = [
    {
        icon: 'ti-building-store',
        bgClass: 'bg-dark-green',
        title: 'Hotel Supplies',
        description: 'Complete amenities for hotels, resorts, and hospitality businesses.',
        tags: ['Bathroom', 'Bed Linen', '+2 more'],
    },
    {
        icon: 'ti-plant-2',
        bgClass: 'bg-medium-green',
        title: 'Rice & Grains',
        description: 'Premium Basmati and non-Basmati rice sourced from finest farms.',
        tags: ['Basmati', 'Brown Rice', '+2 more'],
    },
    {
        icon: 'ti-leaf',
        bgClass: 'bg-dark-brown',
        title: 'Spices & Seasonings',
        description: 'Pure aromatic spices from the finest growing regions worldwide.',
        tags: ['Cardamom', 'Pepper', '+3 more'],
    },
    {
        icon: 'ti-droplet',
        bgClass: 'bg-deep-teal',
        title: 'Beverages',
        description: 'High-quality tea, coffee and beverages for wholesale supply.',
        tags: ['Tea', 'Coffee', '+2 more'],
    },
    {
        icon: 'ti-tools',
        bgClass: 'bg-dark-purple',
        title: 'Tissue Products',
        description: 'Facial tissues, toilet rolls, napkins and industrial tissue rolls.',
        tags: ['Facial', 'Toilet Rolls', '+1 more'],
    },
    {
        icon: 'ti-search',
        bgClass: 'bg-forest',
        title: 'Custom Sourcing',
        description: 'Tailored sourcing for your specific product requirements globally.',
        tags: ['Raw Materials', 'Packaging'],
    },
];

const ProductsSection = () => {
    return (
        <section className="products-section">
            <div className="products-header">
                <p className="products-eyebrow">OUR RANGE</p>
                <h2 className="products-heading">
                    Products We <span className="products-heading-accent">Offer</span>
                </h2>
                <div className="products-heading-rule" />
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.title}>
                        <div className={`product-card-image ${product.bgClass}`}>
                            <i className={`ti ${product.icon}`} aria-hidden="true" />
                        </div>
                        <div className="product-card-body">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-desc">{product.description}</p>
                            <div className="product-tags">
                                {product.tags.map((tag) => (
                                    <span className="product-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;