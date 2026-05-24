import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProductsCarousel = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = 'linear-gradient(135deg, #5C5A3A, #D4A017, #8B6B3D)'

    const productCategories = [
        {
            id: 1,
            name: "Tissue Products",
            description: "Premium quality facial tissues, toilet rolls, napkins, and industrial tissue rolls.",
            icon: "🧻",
            image: "https://images.pexels.com/photos/4107291/pexels-photo-4107291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Facial Tissues", "Toilet Rolls", "Napkins", "Industrial Rolls"],
            features: ["Soft & Durable", "Eco-friendly", "Bulk Packaging"]
        },
        {
            id: 2,
            name: "Hotel Supplies",
            description: "Complete range of amenities and supplies for hotels, resorts, and hospitality businesses.",
            icon: "🏨",
            image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Bathroom Amenities", "Bed Linens", "Guest Supplies", "Cleaning Products"],
            features: ["Premium Quality", "Bulk Orders", "Custom Branding"]
        },
        {
            id: 3,
            name: "Custom Sourcing",
            description: "Tailored sourcing solutions for your specific product requirements across global markets.",
            icon: "🔍",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Raw Materials", "Packaging Solutions", "Industrial Supplies", "Specialty Items"],
            features: ["Global Network", "Quality Control", "End-to-end Logistics"]
        },
        {
            id: 4,
            name: "Rice & Grains",
            description: "Premium Basmati and non-Basmati rice varieties sourced from the finest farms.",
            icon: "🌾",
            image: "https://images.pexels.com/photos/4110258/pexels-photo-4110258.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Basmati Rice", "Brown Rice", "Parboiled Rice", "Non-Basmati"],
            features: ["Aged 24 Months", "Export Quality", "Non-GMO"]
        },
        {
            id: 5,
            name: "Spices & Seasonings",
            description: "Pure, aromatic spices sourced directly from the finest growing regions.",
            icon: "🌶️",
            image: "https://images.pexels.com/photos/557657/pexels-photo-557657.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Cardamom", "Pepper", "Cinnamon", "Turmeric", "Cumin"],
            features: ["Premium Grade", "Fresh Harvest", "Authentic Origin"]
        },
        {
            id: 6,
            name: "Beverages",
            description: "High-quality tea, coffee, and other beverage products for wholesale supply.",
            icon: "☕",
            image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            subItems: ["Tea", "Coffee", "Juice Concentrates", "Energy Drinks"],
            features: ["Premium Blends", "Global Sourcing", "Custom Packaging"]
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState(productCategories[0])
    const [isHovered, setIsHovered] = useState(null)

    return (
        <div className="w-full py-16 px-4 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-gold text-sm tracking-[0.3em] mb-2"
                        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}
                    >
                        OUR RANGE
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-bold"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            background: goldGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Products We Offer
                    </h2>
                    <div
                        className="w-20 h-0.5 mx-auto mt-4"
                        style={{ background: goldGradient }}
                    />
                </motion.div>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {productCategories.map((category, idx) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        onMouseEnter={() => setIsHovered(category.id)}
                        onMouseLeave={() => setIsHovered(null)}
                        onClick={() => setSelectedCategory(category)}
                        className="cursor-pointer"
                    >
                        <div
                            className="rounded-2xl p-6 transition-all duration-300 h-full"
                            style={{
                                background: '#0a0a0a',
                                boxShadow: isHovered === category.id
                                    ? `0 20px 35px -10px ${shadowDark}, 0 0 0 2px rgba(212,160,23,0.4)`
                                    : `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
                                transform: isHovered === category.id ? 'translateY(-4px)' : 'translateY(0)',
                            }}
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                                    style={{
                                        background: '#0a0a0a',
                                        boxShadow: `inset 3px 3px 6px ${shadowDark}, inset -2px -2px 5px ${shadowLight}`,
                                    }}
                                >
                                    {category.icon}
                                </div>
                                <h3
                                    className="text-xl font-bold"
                                    style={{
                                        fontFamily: "'Cinzel', serif",
                                        background: goldGradient,
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                >
                                    {category.name}
                                </h3>
                            </div>

                            {/* Description */}
                            <p
                                className="text-white/60 text-sm leading-relaxed mb-4"
                                style={{ fontFamily: "'Jost', sans-serif" }}
                            >
                                {category.description}
                            </p>

                            {/* Sub-items chips */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.subItems.slice(0, 3).map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] px-2 py-1 rounded-full"
                                        style={{
                                            background: 'rgba(212,160,23,0.1)',
                                            color: '#D4A017',
                                            border: '1px solid rgba(212,160,23,0.2)',
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                                {category.subItems.length > 3 && (
                                    <span
                                        className="text-[10px] px-2 py-1 rounded-full"
                                        style={{
                                            color: 'rgba(255,255,255,0.4)',
                                        }}
                                    >
                                        +{category.subItems.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Selected Category Detail View */}
            <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto mt-12"
            >
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: '#0a0a0a',
                        boxShadow: `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Image */}
                        <div className="relative h-64 md:h-full overflow-hidden">
                            <img
                                src={selectedCategory.image}
                                alt={selectedCategory.name}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(92,90,58,0.3), rgba(212,160,23,0.1))',
                                }}
                            />
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{selectedCategory.icon}</span>
                                <h3
                                    className="text-2xl font-bold"
                                    style={{
                                        fontFamily: "'Cinzel', serif",
                                        background: goldGradient,
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                >
                                    {selectedCategory.name}
                                </h3>
                            </div>
                            <p
                                className="text-white/60 text-sm leading-relaxed mb-6"
                                style={{ fontFamily: "'Jost', sans-serif" }}
                            >
                                {selectedCategory.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                                <h4 className="text-gold text-sm font-semibold mb-3">Key Features</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCategory.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full"
                                            style={{
                                                background: 'rgba(212,160,23,0.15)',
                                                color: '#D4A017',
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Sub-items list */}
                            <div className="mb-6">
                                <h4 className="text-gold text-sm font-semibold mb-3">Product Range</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {selectedCategory.subItems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-gold text-xs">◆</span>
                                            <span className="text-white/50 text-xs">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 rounded-lg font-bold text-sm tracking-wider"
                                style={{
                                    background: goldGradient,
                                    color: '#0a0a0a',
                                    boxShadow: `6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
                                }}
                            >
                                Request Quote for {selectedCategory.name}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProductsCarousel