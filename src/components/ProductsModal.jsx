// src/components/ProductModal.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ProductsModal.css';

const productDetails = {
    'Hotel Supplies': {
        tagline: 'Everything a hospitality business needs, delivered with precision.',
        items: [
            { name: 'Bathroom Amenities', desc: 'Shampoo, conditioner, soap bars, and toiletry kits in custom branding.', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80' },
            { name: 'Bed Linen', desc: 'High-thread-count cotton sheets, pillowcases, and duvet covers.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
            { name: 'Towels & Robes', desc: 'Fluffy bath towels, hand towels, and plush bathrobes for guests.', image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80' },
            { name: 'Housekeeping Supplies', desc: 'Detergents, cleaning agents, and janitorial essentials in bulk.', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80' },
            { name: 'In-Room Essentials', desc: 'Stationery kits, slippers, hair dryers, and welcome amenity sets.', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80' },
        ],
        specs: { 'Min. Order': 'Bulk / MOQ varies', 'Lead Time': '7–14 days', 'Branding': 'Custom available', 'Delivery': 'Worldwide' },
    },
    'Rice & Grains': {
        tagline: 'Farm-fresh grains sourced directly from certified growing regions.',
        items: [
            { name: 'Basmati Rice', desc: 'Long-grain, aromatic Basmati from the Punjab and Dehradun valleys.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80' },
            { name: 'Brown Rice', desc: 'Whole-grain brown rice, minimally processed for maximum nutrition.', image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80' },
            { name: 'Sona Masoori', desc: 'Lightweight, low-starch rice ideal for everyday South Indian cooking.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80' },
            { name: 'Parboiled Rice', desc: 'Pre-cooked and dried for longer shelf life and faster cooking.', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80' },
            { name: 'Specialty Grains', desc: 'Quinoa, millet, barley, and supergrains for health-forward menus.', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
        ],
        specs: { 'Origin': 'Punjab / Dehradun', 'Min. Order': '1 MT', 'Packaging': '5kg / 25kg bags', 'Certification': 'FSSAI, APEDA' },
    },
    'Spices & Seasonings': {
        tagline: 'Authentic flavours from soil to shelf — no fillers, no compromise.',
        items: [
            { name: 'Cardamom', desc: 'Green and black cardamom pods sourced from Kerala\'s high-altitude farms.', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80' },
            { name: 'Black Pepper', desc: 'Bold Malabar pepper, whole and cracked, for professional kitchens.', image: 'https://images.unsplash.com/photo-1599909533731-1b1e28e14b41?w=600&q=80' },
            { name: 'Turmeric', desc: 'High-curcumin whole finger and powder from Erode, Tamil Nadu.', image: 'https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=600&q=80' },
            { name: 'Cloves & Cinnamon', desc: 'Whole cloves from Zanzibar and Ceylon cinnamon quills.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80' },
            { name: 'Spice Blends', desc: 'Custom masala mixes, curry powders, and proprietary seasoning blends.', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80' },
        ],
        specs: { 'Origin': 'Kerala / Tamil Nadu', 'Min. Order': '50 kg', 'Form': 'Whole & powder', 'Certification': 'FSSAI, ISO' },
    },
    'Beverages': {
        tagline: 'Premium pours for hotels, cafés, and large-scale distributors.',
        items: [
            { name: 'Assam Tea', desc: 'Full-bodied CTC and orthodox loose-leaf teas from Assam estates.', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80' },
            { name: 'Darjeeling Tea', desc: 'First and second flush Darjeeling for specialty tea programs.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
            { name: 'Ground Coffee', desc: 'Single-origin and blended roasts, ground to your preferred profile.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80' },
            { name: 'Herbal Infusions', desc: 'Chamomile, peppermint, lemongrass, and custom wellness blends.', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80' },
            { name: 'Juices & Concentrates', desc: 'Fruit concentrates and ready-to-dilute juices for hospitality use.', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80' },
        ],
        specs: { 'Origin': 'Assam / Darjeeling', 'Min. Order': '10 kg', 'Packaging': 'Bulk & retail packs', 'Private Label': 'Available' },
    },
    'Premium Chocolates': {
        tagline: 'Indulgent confectionery from the world\'s finest chocolate makers.',
        items: [
            { name: 'Dark Chocolate Truffles', desc: 'Single-origin 70%+ cacao truffles in assorted flavour profiles.', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80' },
            { name: 'Milk Chocolate Assortments', desc: 'Creamy praline and ganache filled boxes for gifting.', image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80' },
            { name: 'Gift Boxes', desc: 'Curated branded gift sets for corporate and festive occasions.', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80' },
            { name: 'Seasonal Collections', desc: 'Limited edition holiday and celebration chocolate ranges.', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80' },
            { name: 'Couverture Blocks', desc: 'Bulk couverture chocolate for patisseries and chocolatiers.', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80' },
        ],
        specs: { 'Cacao': '55%–85% options', 'Min. Order': '5 kg', 'Packaging': 'Custom branding', 'Shelf Life': '12–18 months' },
    },
    'Custom Sourcing': {
        tagline: 'Your requirements, our network — anywhere in the world.',
        items: [
            { name: 'Raw Material Procurement', desc: 'Agricultural and industrial raw materials sourced to spec.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
            { name: 'Packaging Solutions', desc: 'Custom branded packaging for retail and wholesale products.', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80' },
            { name: 'Private Label Products', desc: 'White-label food and non-food products with your brand identity.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
            { name: 'Global Import Facilitation', desc: 'Documentation, customs clearance, and end-to-end logistics.', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80' },
            { name: 'Quality Assurance', desc: 'Third-party lab testing and certification support for all sourced goods.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80' },
        ],
        specs: { 'Coverage': '25+ countries', 'Lead Time': 'Quote-based', 'MOQ': 'Flexible', 'Compliance': 'Full support' },
    },
};

const whatsappNumber = ['+', '9', '1', '9', '2', '0', '9', '6', '1', '5', '8', '2', '5'].join('');

const ProductModal = ({ product, onClose }) => {
    const details = productDetails[product?.title];
    const [activeIndex, setActiveIndex] = useState(0);

    // Crossfade state
    const [imgSrc, setImgSrc] = useState('');
    const [imgFading, setImgFading] = useState(false);

    // Text swap state
    const [textFading, setTextFading] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);

    // Stagger triggers
    const [specsVisible, setSpecsVisible] = useState(false);
    const [chipsVisible, setChipsVisible] = useState(false);

    // Timers ref to clean up on unmount
    const timers = useRef([]);

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
        if (!product || !details) return;
        clearTimers();
        setActiveIndex(0);
        setDisplayIndex(0);
        setImgSrc(details.items[0].image);
        setImgFading(false);
        setTextFading(false);
        triggerStagger();
    }, [product]);

    // Switch item with crossfade + text swap
    const switchTo = useCallback((index) => {
        if (index === activeIndex) return;
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
            setImgSrc(details.items[index].image);

            // 3. Fade back in
            setImgFading(false);
            setTextFading(false);

            // 4. Stagger secondary elements
            triggerStagger();
        }, 220);
    }, [activeIndex, details, triggerStagger]);

    useEffect(() => {
        if (product) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
            clearTimers();
        };
    }, [product]);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    if (!product || !details) return null;

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
            <div className="pmodal" onClick={(e) => e.stopPropagation()}>

                {/* ── LEFT: image panel ── */}
                <div className="pmodal-left">
                    <div className="pmodal-img-main">

                        {/* Crossfading image */}
                        <img
                            src={imgSrc || activeItem.image}
                            alt={activeItem.name}
                            className={`pmodal-img${imgFading ? ' pmodal-img--fading' : ''}`}
                        />

                        {/* Gradient overlay for bottom text readability */}
                        <div className="pmodal-img-gradient" aria-hidden="true" />

                        {/* Category pill */}
                        <div className="pmodal-img-overlay">
                            <span className="pmodal-category-pill">
                                <i className={`ti ${product.icon}`} aria-hidden="true" />
                                {product.title}
                            </span>
                        </div>

                        {/* Product name + tagline over the image */}
                        <div className={`pmodal-img-footer${textFading ? ' pmodal-img-footer--fading' : ''}`}>
                            <p className="pmodal-img-item-name">{activeItem.name}</p>
                            <p className="pmodal-img-tagline-overlay">{details.tagline}</p>
                        </div>
                    </div>

                    {/* Thumbnail strip */}
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

                    {/* Header row */}
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

                    {/* Active product name + desc */}
                    <h2 className={`pmodal-name${textFading ? ' pmodal-name--fading' : ''}`}>
                        {activeItem.name}
                    </h2>
                    <p className="pmodal-tagline">{details.tagline}</p>
                    <p className={`pmodal-desc${textFading ? ' pmodal-desc--fading' : ''}`}>
                        {activeItem.desc}
                    </p>

                    {/* Specs */}
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

                    {/* Related */}
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

                    {/* Footer note */}
                    <div className="pmodal-note">
                        <i className="ti ti-info-circle" aria-hidden="true" />
                        <p>
                            These are a selection of our current offerings.{' '}
                            <strong>Additional products can be added and customised</strong>{' '}
                            to meet your specific business requirements.
                        </p>
                    </div>

                    {/* CTA */}
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