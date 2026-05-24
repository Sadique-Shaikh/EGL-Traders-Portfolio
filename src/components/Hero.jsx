import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="flex flex-col md:flex-row justify-between items-center min-h-screen py-2 relative"
            style={{ background: '#0a0a0a' }}
        >
            {/* LEFT COLUMN — Slightly wider */}
            <div className='flex-1 md:flex-[1.2] relative min-h-screen flex items-center z-10'>
                {/* Neumorphic card container */}
                <div
                    className="mx-6 md:mx-8 lg:mx-12 p-1 rounded-3xl w-full"
                    style={{
                        background: '#0a0a0a',
                        boxShadow: `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
                    }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full px-6 py-6 md:px-8 md:py-8"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <div
                                className="inline-block rounded-2xl py-1 px-3 text-[10px] tracking-wider font-medium"
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    background: '#0a0a0a',
                                    color: '#d4b44c',
                                    boxShadow: `4px 4px 8px ${shadowDark}, -2px -2px 6px ${shadowLight}`,
                                    textShadow: `1px 1px 0 ${shadowDark}`,
                                }}
                            >
                                India-based · Global reach
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold leading-tight py-3"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontWeight: 700,
                                background: goldGradient,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                textShadow: 'none',
                            }}
                        >
                            Sourcing the world,<br />
                            delivering to your door
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-white/70 text-sm leading-relaxed py-3 max-w-md"
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontWeight: 300,
                                letterSpacing: '0.02em',
                                textShadow: `1px 1px 0 ${shadowDark}`
                            }}
                        >
                            EGL Traders connects businesses to quality products across global markets — rice, spices, beverages, and more. Flexible, reliable, competitive.
                        </motion.p>

                        {/* Buttons */}
                        <div className='flex items-center gap-4 mt-2 flex-wrap'>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="text-black text-xs font-bold tracking-widest px-5 py-2.5 rounded-lg cursor-pointer"
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    background: goldGradient,
                                    boxShadow: `6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
                                }}
                            >
                                WhatsApp us
                            </motion.button>

                            <motion.a
                                href="#product"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="text-gold text-xs font-bold tracking-widest px-5 py-2.5 rounded-lg cursor-pointer"
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    background: '#0a0a0a',
                                    color: '#d4b44c',
                                    border: '1px solid rgba(230,184,0,0.3)',
                                    boxShadow: `6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
                                    transition: 'all 0.1s ease',
                                }}
                                onMouseDown={(e) => {
                                    e.currentTarget.style.boxShadow = `inset 4px 4px 8px ${shadowDark}, inset -2px -2px 6px ${shadowLight}`
                                    e.currentTarget.style.borderColor = 'rgba(230,184,0,0.6)'
                                }}
                                onMouseUp={(e) => {
                                    e.currentTarget.style.boxShadow = `6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`
                                    e.currentTarget.style.borderColor = 'rgba(230,184,0,0.3)'
                                }}
                            >
                                View Products
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT COLUMN — 3D Globe placeholder (slightly narrower) */}
            <div className="hidden md:flex flex-[0.8] h-full items-center justify-center">
                <div
                    className="w-80 h-80 rounded-full flex items-center justify-center text-sm"
                    style={{
                        background: '#0a0a0a',
                        color: '#d4b44c',
                        boxShadow: `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}, inset 1px 1px 0 rgba(255,255,255,0.05)`,
                        border: '1px solid rgba(230,184,0,0.15)',
                    }}
                >
                    🌐 3D Globe
                </div>
            </div>
        </motion.div>
    )
}

export default Hero