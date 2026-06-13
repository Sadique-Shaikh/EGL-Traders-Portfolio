// src/components/ProductModal.jsx
import React, { useEffect, useState } from 'react';
import './ProductsModal.css';

const productDetails = {
    'Hotel Supplies': {
        tagline: 'Everything a hospitality business needs, delivered with precision.',
        items: [
            {
                name: 'Bathroom Amenities',
                desc: 'Shampoo, conditioner, soap bars, and toiletry kits in custom branding.',
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=75',
            },
            {
                name: 'Bed Linen',
                desc: 'High-thread-count cotton sheets, pillowcases, and duvet covers.',
                image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=75',
            },
            {
                name: 'Towels & Robes',
                desc: 'Fluffy bath towels, hand towels, and plush bathrobes for guests.',
                image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=400&q=75',
            },
            {
                name: 'Housekeeping Supplies',
                desc: 'Detergents, cleaning agents, and janitorial essentials in bulk.',
                image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=75',
            },
            {
                name: 'In-Room Essentials',
                desc: 'Stationery kits, slippers, hair dryers, and welcome amenity sets.',
                image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=75',
            },
        ],
    },
    'Rice & Grains': {
        tagline: 'Farm-fresh grains sourced directly from certified growing regions.',
        items: [
            {
                name: 'Basmati Rice',
                desc: 'Long-grain, aromatic Basmati from the Punjab and Dehradun valleys.',
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=75',
            },
            {
                name: 'Brown Rice',
                desc: 'Whole-grain brown rice, minimally processed for maximum nutrition.',
                image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=75',
            },
            {
                name: 'Sona Masoori',
                desc: 'Lightweight, low-starch rice ideal for everyday South Indian cooking.',
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=75',
            },
            {
                name: 'Parboiled Rice',
                desc: 'Pre-cooked and dried for longer shelf life and faster cooking.',
                image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=75',
            },
            {
                name: 'Specialty Grains',
                desc: 'Quinoa, millet, barley, and supergrains for health-forward menus.',
                image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=75',
            },
        ],
    },
    'Spices & Seasonings': {
        tagline: 'Authentic flavours from soil to shelf — no fillers, no compromise.',
        items: [
            {
                name: 'Cardamom',
                desc: 'Green and black cardamom pods sourced from Kerala\'s high-altitude farms.',
                image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=75',
            },
            {
                name: 'Black Pepper',
                desc: 'Bold Malabar pepper, whole and cracked, for professional kitchens.',
                image: 'https://images.unsplash.com/photo-1599909533731-1b1e28e14b41?w=400&q=75',
            },
            {
                name: 'Turmeric',
                desc: 'High-curcumin whole finger and powder from Erode, Tamil Nadu.',
                image: 'https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=400&q=75',
            },
            {
                name: 'Cloves & Cinnamon',
                desc: 'Whole cloves from Zanzibar and Ceylon cinnamon quills.',
                image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=75',
            },
            {
                name: 'Spice Blends',
                desc: 'Custom masala mixes, curry powders, and proprietary seasoning blends.',
                image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&q=75',
            },
        ],
    },
    'Beverages': {
        tagline: 'Premium pours for hotels, cafés, and large-scale distributors.',
        items: [
            {
                name: 'Assam Tea',
                desc: 'Full-bodied CTC and orthodox loose-leaf teas from Assam estates.',
                image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=75',
            },
            {
                name: 'Darjeeling Tea',
                desc: 'First and second flush Darjeeling for specialty tea programs.',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75',
            },
            {
                name: 'Ground Coffee',
                desc: 'Single-origin and blended roasts, ground to your preferred profile.',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=75',
            },
            {
                name: 'Herbal Infusions',
                desc: 'Chamomile, peppermint, lemongrass, and custom wellness blends.',
                image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&q=75',
            },
            {
                name: 'Juices & Concentrates',
                desc: 'Fruit concentrates and ready-to-dilute juices for hospitality use.',
                image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=75',
            },
        ],
    },
    'Premium Chocolates': {
        tagline: 'Indulgent confectionery from the world\'s finest chocolate makers.',
        items: [
            {
                name: 'Dark Chocolate Truffles',
                desc: 'Single-origin 70%+ cacao truffles in assorted flavour profiles.',
                image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=75',
            },
            {
                name: 'Milk Chocolate Assortments',
                desc: 'Creamy praline and ganache filled boxes for gifting.',
                image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=75',
            },
            {
                name: 'Gift Boxes',
                desc: 'Curated branded gift sets for corporate and festive occasions.',
                image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=75',
            },
            {
                name: 'Seasonal Collections',
                desc: 'Limited edition holiday and celebration chocolate ranges.',
                image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=75',
            },
            {
                name: 'Couverture Blocks',
                desc: 'Bulk couverture chocolate for patisseries and chocolatiers.',
                image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=75',
            },
        ],
    },
    'Custom Sourcing': {
        tagline: 'Your requirements, our network — anywhere in the world.',
        items: [
            {
                name: 'Raw Material Procurement',
                desc: 'Agricultural and industrial raw materials sourced to spec.',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=75',
            },
            {
                name: 'Packaging Solutions',
                desc: 'Custom branded packaging for retail and wholesale products.',
                image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=75',
            },
            {
                name: 'Private Label Products',
                desc: 'White-label food and non-food products with your brand identity.',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=75',
            },
            {
                name: 'Global Import Facilitation',
                desc: 'Documentation, customs clearance, and end-to-end logistics.',
                image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=75',
            },
            {
                name: 'Quality Assurance',
                desc: 'Third-party lab testing and certification support for all sourced goods.',
                image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=75',
            },
        ],
    },
};

const ProductModal = ({ product, onClose }) => {
    const details = productDetails[product?.title];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [product]);

    useEffect(() => {
        if (product) document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, [product]);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    if (!product || !details) return null;

    const activeItem = details.items[activeIndex];

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${product.title} details`}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

                {/* Hero image header */}
                <div className="modal-header">
                    <img src={product.image} alt={product.title} className="modal-hero-img" />
                    <div className="modal-hero-overlay" />
                    <div className="modal-hero-content">
                        <i className={`ti ${product.icon} modal-header-icon`} aria-hidden="true" />
                        <h2 className="modal-hero-title">{product.title}</h2>
                        <p className="modal-hero-tagline">{details.tagline}</p>
                    </div>
                    <button className="modal-close" onClick={onClose} aria-label="Close modal">
                        <i className="ti ti-x" />
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <p className="modal-section-label">WHAT WE SUPPLY</p>

                    {/* Thumbnail strip */}
                    <div className="modal-thumb-strip">
                        {details.items.map((item, i) => (
                            <button
                                key={item.name}
                                className={`modal-thumb ${i === activeIndex ? 'modal-thumb--active' : ''}`}
                                onClick={() => setActiveIndex(i)}
                                aria-label={item.name}
                            >
                                <img src={item.image} alt={item.name} loading="lazy" />
                            </button>
                        ))}
                    </div>

                    {/* Active item detail */}
                    <div className="modal-item-detail">
                        <img
                            src={activeItem.image}
                            alt={activeItem.name}
                            className="modal-item-detail-img"
                            loading="lazy"
                        />
                        <div className="modal-item-detail-text">
                            <span className="modal-item-name">{activeItem.name}</span>
                            <span className="modal-item-desc">{activeItem.desc}</span>
                        </div>
                    </div>

                    {/* All items list */}
                    <ul className="modal-items">
                        {details.items.map((item, i) => (
                            <li
                                className={`modal-item ${i === activeIndex ? 'modal-item--active' : ''}`}
                                key={item.name}
                                onClick={() => setActiveIndex(i)}
                            >
                                <img src={item.image} alt={item.name} className="modal-item-thumb" loading="lazy" />
                                <div>
                                    <span className="modal-item-name">{item.name}</span>
                                    <span className="modal-item-desc">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Footer note */}
                    <div className="modal-footer-note">
                        <i className="ti ti-info-circle modal-note-icon" aria-hidden="true" />
                        <p>
                            These are a selection of our current offerings.{' '}
                            <strong>Additional products can be added and customised</strong> to meet your specific
                            business requirements — reach out and we'll tailor a solution for you.
                        </p>
                    </div>

                    <button className="modal-cta" onClick={onClose}>
                        <i className="ti ti-message-circle" /> Get a Quote for {product.title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;