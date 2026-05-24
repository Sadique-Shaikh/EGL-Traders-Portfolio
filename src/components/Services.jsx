import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Services = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)"

    const services = [
        {
            title: "Import / Export",
            desc: "End-to-end global logistics with full documentation support.",
            icon: "🌍",
        },
        {
            title: "Custom Sourcing",
            desc: "Find exactly what you need from our verified supplier network.",
            icon: "🔍",
        },
        {
            title: "Wholesale Supply",
            desc: "Bulk orders at competitive rates, direct from manufacturers.",
            icon: "📦",
        },
        {
            title: "B2B Partnership",
            desc: "Long-term trade agreements tailored to your business needs.",
            icon: "🤝",
        },
    ]

    // 3D Tilt Card Component
    const TiltCard = ({ title, desc, icon }) => {
        const cardRef = useRef(null)
        const [isHovering, setIsHovering] = useState(false)

        // Motion values for tilt
        const x = useMotionValue(0)
        const y = useMotionValue(0)

        // Smooth spring physics
        const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
        const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
        const scale = useSpring(1, { stiffness: 300, damping: 30 })

        const handleMouseMove = (e) => {
            if (!cardRef.current) return
            const rect = cardRef.current.getBoundingClientRect()
            const width = rect.width
            const height = rect.height
            const mouseX = (e.clientX - rect.left) / width - 0.5   // -0.5 to 0.5
            const mouseY = (e.clientY - rect.top) / height - 0.5
            x.set(mouseX)
            y.set(mouseY)
        }

        const handleMouseEnter = () => {
            setIsHovering(true)
            scale.set(1.02)
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
            x.set(0)
            y.set(0)
            scale.set(1)
        }

        return (
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full"
            >
                <div
                    className="p-6 rounded-2xl transition-all duration-300 h-full flex flex-col"
                    style={{
                        background: '#0a0a0a',
                        boxShadow: isHovering
                            ? `0 20px 35px -10px ${shadowDark}, 0 0 0 2px rgba(212, 160, 23, 0.6), 0 0 15px rgba(212, 160, 23, 0.5)`
                            : `8px 8px 16px ${shadowDark}, -6px -6px 12px ${shadowLight}`,
                        border: `1px solid ${isHovering ? 'rgba(212,160,23,0.8)' : 'rgba(255,255,255,0.05)'}`,
                        transition: 'box-shadow 0.2s, border 0.2s',
                    }}
                >
                    <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}>
                        {icon}
                    </div>
                    <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            background: goldGradient,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-['Jost'] font-light flex-grow">
                        {desc}
                    </p>
                </div>
            </motion.div>
        )
    }

    return (
        <section className="relative py-20 md:py-28 overflow-hidden ">
            {/* Subtle background texture (same as other sections) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full py-1.5 px-4 bg-amber-500/5 backdrop-blur-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="text-amber-400 text-[11px] font-medium tracking-wider uppercase font-['Jost']">
                            What We Offer
                        </span>
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{
                            fontFamily: "'Cinzel', serif",
                            background: "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)",
                            backgroundSize: "200% 200%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            animation: "goldSheen 4s ease infinite",
                        }}
                    >
                        Our Core Services
                    </h2>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, idx) => (
                        <TiltCard key={idx} {...service} />
                    ))}
                </div>
            </div>

            {/* Keyframes for goldSheen (if not already global) */}
            <style>{`
                @keyframes goldSheen {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    )
}

export default Services