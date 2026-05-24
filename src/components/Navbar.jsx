import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from './../assets/EGL-Logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)";

    return (
        <>
            <nav
                className="sticky top-0 z-50"
                style={{
                    background: '#0a0a0a',
                    borderRadius: '0 0 24px 24px',
                    boxShadow: `8px 8px 16px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
                }}
            >
                <div className="flex justify-between items-center px-6 py-3">

                    {/* LEFT — Logo */}
                    <div className="flex items-center gap-2">
                        <button
                            className="md:hidden text-white w-10 h-10 rounded-full flex items-center justify-center"
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                background: '#0a0a0a',
                                boxShadow: `inset 2px 2px 5px ${shadowDark}, inset -2px -2px 5px ${shadowLight}`,
                            }}
                        >
                            ☰
                        </button>

                        <img src={logo} alt="EGL Logo" className='w-20 h-15' style={{ filter: `drop-shadow(2px 2px 4px ${shadowDark})` }} />

                        <p className="text-lg font-bold tracking-wider"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                background: goldGradient,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            <span style={{ background: 'inherit', WebkitBackgroundClip: 'inherit' }}>EGL</span> TRADERS
                        </p>
                    </div>

                    {/* MIDDLE — Neumorphic buttons (inspired by Figma dashboard) */}
                    <ul className="hidden md:flex items-center gap-3">
                        {['HOME', 'ABOUT US', 'SERVICES', 'PRODUCTS', 'CONTACT'].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="block text-xs tracking-widest px-4 py-2 rounded-xl transition-all duration-200"
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontWeight: 600,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        background: '#0a0a0a',
                                        color: '#d4b44c',
                                        boxShadow: `5px 5px 12px ${shadowDark}, -3px -3px 8px ${shadowLight}`,
                                        textShadow: `1px 1px 0 ${shadowDark}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        // Only pressed effect (inset shadow), no gold background
                                        e.currentTarget.style.boxShadow = `inset 4px 4px 8px ${shadowDark}, inset -2px -2px 6px ${shadowLight}`
                                        // Keep original background and text color
                                        e.currentTarget.style.background = '#0a0a0a'
                                        e.currentTarget.style.color = '#d4b44c'
                                        e.currentTarget.style.textShadow = `1px 1px 0 ${shadowDark}`
                                    }}
                                    onMouseLeave={(e) => {
                                        // Return to raised neumorphic state
                                        e.currentTarget.style.background = '#0a0a0a'
                                        e.currentTarget.style.color = '#d4b44c'
                                        e.currentTarget.style.boxShadow = `5px 5px 12px ${shadowDark}, -3px -3px 8px ${shadowLight}`
                                        e.currentTarget.style.textShadow = `1px 1px 0 ${shadowDark}`
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT — CTA Button with gold gradient */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="nm-btn-gold text-black text-xs font-bold tracking-widest px-5 py-2.5 rounded-lg"
                        style={{
                            fontFamily: "'Jost', sans-serif",
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                        }}
                    >
                        GET A QUOTE
                    </motion.button>
                </div>

                {/* Mobile menu — ul now fills parent width */}
                {menuOpen && (
                    <div className="md:hidden py-4 mt-2 rounded-2xl"
                        style={{
                            background: '#0a0a0a',
                            boxShadow: `inset 4px 4px 8px ${shadowDark}, inset -4px -4px 8px ${shadowLight}`,
                            margin: '0 16px 16px 16px',
                        }}
                    >
                        <ul className="flex flex-col items-center gap-3 w-full px-2">   {/* ← added w-full */}
                            {['HOME', 'ABOUT US', 'SERVICES', 'PRODUCTS', 'CONTACT'].map((link) => (
                                <li className='w-full' key={link}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="block text-xs tracking-widest px-5 py-2 rounded-xl transition-all duration-200 text-center"
                                        style={{
                                            background: '#0a0a0a',
                                            color: '#d4b44c',
                                            boxShadow: `5px 5px 12px ${shadowDark}, -3px -3px 8px ${shadowLight}`,
                                            textShadow: `1px 1px 0 ${shadowDark}`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 4px 4px 8px ${shadowDark}, inset -2px -2px 6px ${shadowLight}`
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = `5px 5px 12px ${shadowDark}, -3px -3px 8px ${shadowLight}`
                                        }}
                                        onTouchStart={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 4px 4px 8px ${shadowDark}, inset -2px -2px 6px ${shadowLight}`
                                        }}
                                        onTouchEnd={(e) => {
                                            e.currentTarget.style.boxShadow = `5px 5px 12px ${shadowDark}, -3px -3px 8px ${shadowLight}`
                                        }}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </nav>
        </>
    )
}

export default Navbar