import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import aboutImage from './../assets/herosection.PNG'

const About = () => {
    const { colors } = useTheme();
    
    // Parallax effect on mouse move
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
    const imageRef = useRef(null)

    const handleMouseMove = (e) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            mouseX.set((e.clientX - centerX) / 25)
            mouseY.set((e.clientY - centerY) / 25)
        }
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const leftVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    }

    const rightVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    }

    // Image animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, rotate: -2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
        },
    }

    // Badge animation variants
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut', delay: custom },
        }),
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="mx-6 md:mx-6 lg:mx-10 my-10 rounded-2xl overflow-hidden"
            style={{
                background: colors.bgPrimary,
                border: `1px solid ${colors.borderLight}`,
            }}
        >
            <div className="flex flex-col md:flex-row gap-0">
                {/* LEFT SIDE: Animated Image */}
                <motion.div
                    ref={imageRef}
                    variants={leftVariants}
                    className="flex-[0.7] relative overflow-visible"
                    style={{
                        minHeight: '400px',
                        position: 'relative',
                    }}
                    onMouseMove={handleMouseMove}
                >
                    {/* Main Image with Parallax */}
                    <motion.div
                        variants={imageVariants}
                        style={{ x: springX, y: springY }}
                        className="relative h-full w-full"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <img
                                src={aboutImage}
                                alt="EGL Traders - Global Trading Company"
                                className="w-full h-full object-cover"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"
                                style={{
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Floating Badge 1 - Top Right */}
                    <motion.div
                        custom={0.8}
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute top-4 right-4 z-20"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg"
                            style={{
                                borderLeft: `3px solid ${colors.accent}`,
                            }}
                        >
                            <div className="text-xs font-semibold" style={{ color: colors.accent }}>
                                Established 2014
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Badge 2 - Bottom Left */}
                    <motion.div
                        custom={1.0}
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute bottom-4 left-4 z-20"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                            className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg"
                            style={{
                                borderLeft: `3px solid ${colors.accent}`,
                            }}
                        >
                            <div className="text-xs font-semibold" style={{ color: colors.accent }}>
                                ⭐ 100% Trusted
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Badge 3 - Center Right (icon badge) */}
                    <motion.div
                        custom={1.2}
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 hidden lg:block"
                    >
                        <motion.div
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: 'easeInOut',
                                delay: 1
                            }}
                            className="bg-gradient-to-r rounded-full p-3 shadow-xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentLight})`,
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Animated Border Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            boxShadow: `0 0 0 2px ${colors.accent}20, 0 0 0 4px ${colors.accent}10`,
                            borderRadius: '16px',
                        }}
                    />
                </motion.div>

                {/* RIGHT SIDE: Content */}
                <motion.div
                    variants={rightVariants}
                    className="flex-[1.3] space-y-4 p-6 md:p-8"
                    style={{
                        background: colors.bgPrimary,
                    }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold"
                        style={{
                            fontFamily: "var(--font-heading)",
                            color: colors.accent,
                        }}
                    >
                        About EGL Traders
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base leading-relaxed"
                        style={{
                            color: colors.textSecondary,
                            fontFamily: "var(--font-body)",
                        }}
                    >
                        EGL Traders is a dynamic India-based trading and sourcing company committed to delivering high-quality products across global markets. We specialize in sourcing, supplying, exporting, and importing a wide range of goods tailored to our customers' specific requirements.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base leading-relaxed"
                        style={{
                            color: colors.textSecondary,
                            fontFamily: "var(--font-body)",
                        }}
                    >
                        With a strong network of manufacturers, suppliers, and logistics partners, we ensure efficient procurement and timely delivery. Our business model is simple — we source what our customers need, when they need it, at competitive prices.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base leading-relaxed"
                        style={{
                            color: colors.textSecondary,
                            fontFamily: "var(--font-body)",
                        }}
                    >
                        We work closely with clients across industries, including retail, hospitality, and wholesale distribution, ensuring flexibility, reliability, and long-term partnerships.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4 pt-4"
                    >
                        {[
                            { value: "25+", label: "Countries" },
                            { value: "10+", label: "Years" },
                            { value: "500+", label: "Orders" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="text-center flex-1"
                            >
                                <div
                                    className="text-xl md:text-2xl font-bold"
                                    style={{ color: colors.accent }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs uppercase tracking-wider"
                                    style={{ color: colors.textSecondary }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About