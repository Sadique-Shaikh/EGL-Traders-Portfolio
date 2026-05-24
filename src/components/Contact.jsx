import React from 'react'
import { motion } from 'framer-motion'

const ContactCTA = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)"

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a0a0a]">
            {/* Subtle background texture (consistent with other sections) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
                {/* Eyebrow / badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full py-1.5 px-4 bg-amber-500/5 backdrop-blur-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="text-amber-400 text-[11px] font-medium tracking-wider uppercase font-['Jost']">
                            India-based · Global reach
                        </span>
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto"
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
                    Ready to Source<br />with Confidence?
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-6 font-['Jost'] font-light"
                >
                    Get in touch – our trade desk responds within 2 hours.
                </motion.p>

                {/* CTA Buttons (side by side) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10"
                >
                    {/* WhatsApp Button with green glow */}
                    <motion.a
                        href="https://wa.me/your-number" // ← replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
                        style={{
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            background: 'linear-gradient(135deg, #075E54, #128C7E)',
                            color: 'white',
                            boxShadow: `0 0 12px rgba(37, 211, 102, 0.5), 6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}
                    >
                        <span>💬</span> WhatsApp Us
                    </motion.a>

                    {/* Email Button (neumorphic gold) */}
                    <motion.a
                        href="mailto:contact@egltraders.com" // ← replace with your email
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
                        style={{
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            background: '#0a0a0a',
                            color: '#D4A017',
                            boxShadow: `6px 6px 12px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
                            border: '1px solid rgba(212,160,23,0.4)',
                        }}
                    >
                        <span>✉️</span> Email Us
                    </motion.a>
                </motion.div>

                {/* Trust / Location mention (India-based, global reach) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-6 border-t border-white/10 inline-flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/40 font-['Jost'] tracking-wide"
                >
                    <span>🇮🇳 India HQ – New Delhi</span>
                    <span>🌍 Serving 25+ Countries</span>
                    <span>✓ 10+ Years · 0 Disputes</span>
                </motion.div>
            </div>

            <style>{`
                @keyframes goldSheen {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    )
}

export default ContactCTA