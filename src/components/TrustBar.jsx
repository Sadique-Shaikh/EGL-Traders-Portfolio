import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const TrustBar = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldColor = '#d4b44c'

    // Stats data
    const stats = [
        { label: 'Product Categories', value: 8, suffix: '+' },
        { label: 'Global Reach', value: 0, suffix: '' }, // static text
        { label: 'Custom Sourcing', value: 100, suffix: '%' },
    ]

    // For static "Global Reach" – no counter needed
    const [counts, setCounts] = useState([0, 0, 0])
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    useEffect(() => {
        if (inView) {
            const duration = 1500 // ms
            const steps = 60
            const stepTime = duration / steps

            const targets = stats.map(s => s.value)
            const increments = targets.map(t => t / steps)

            let currentStep = 0
            const interval = setInterval(() => {
                if (currentStep < steps) {
                    setCounts(prev => prev.map((p, i) => {
                        let next = p + increments[i]
                        if (next > targets[i]) next = targets[i]
                        return Math.floor(next)
                    }))
                    currentStep++
                } else {
                    clearInterval(interval)
                    setCounts(targets.map(v => Math.floor(v)))
                }
            }, stepTime)

            return () => clearInterval(interval)
        }
    }, [inView, stats])

    return (
        <div
            ref={ref}
            className="w-full py-3 md:py-4"
            style={{
                background: '#0a0a0a',
                borderTop: '1px solid rgba(230,184,0,0.15)',
                borderBottom: '1px solid rgba(230,184,0,0.15)',
                boxShadow: `inset 0 2px 4px ${shadowDark}, inset 0 -1px 2px ${shadowLight}`,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs md:text-sm tracking-wider">
                    {stats.map((stat, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flex items-center gap-2">
                                {stat.label === 'Global Reach' ? (
                                    // Gold SVG globe + text
                                    <div className="flex items-center gap-2">
                                        <svg 
                                            width="18" 
                                            height="18" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ filter: `drop-shadow(1px 1px 0 ${shadowDark})` }}
                                        >
                                            <circle cx="12" cy="12" r="10" stroke={goldColor} strokeWidth="1.5" fill="none"/>
                                            <ellipse cx="12" cy="12" rx="4" ry="10" stroke={goldColor} strokeWidth="1.5" fill="none"/>
                                            <line x1="2" y1="12" x2="22" y2="12" stroke={goldColor} strokeWidth="1.5" strokeDasharray="3 3"/>
                                            <line x1="12" y1="2" x2="12" y2="22" stroke={goldColor} strokeWidth="1.5"/>
                                        </svg>
                                        <span 
                                            className="font-bold text-base md:text-lg"
                                            style={{
                                                fontFamily: "'Cinzel', serif",
                                                color: goldColor,
                                                textShadow: `1px 1px 0 ${shadowDark}`,
                                            }}
                                        >
                                            Global Reach
                                        </span>
                                    </div>
                                ) : (
                                    <>
                                        <span
                                            className="font-bold text-base md:text-lg"
                                            style={{
                                                fontFamily: "'Cinzel', serif",
                                                color: goldColor,
                                                textShadow: `1px 1px 0 ${shadowDark}`,
                                            }}
                                        >
                                            {`${counts[idx]}${stat.suffix}`}
                                        </span>
                                        {stat.label !== 'Global Reach' && (
                                            <span className="text-[10px] text-white/50">•</span>
                                        )}
                                    </>
                                )}
                            </div>
                            {idx < stats.length - 1 && (
                                <span
                                    className="text-gold/40 text-lg font-thin hidden md:inline"
                                    style={{ fontFamily: "'Jost', sans-serif" }}
                                >
                                    |
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustBar