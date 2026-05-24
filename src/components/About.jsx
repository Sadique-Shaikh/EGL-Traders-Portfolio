import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { AmbientLight, BoxGeometry, DirectionalLight } from 'three'
import { OrbitControls } from '@react-three/drei'

const About = () => {
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'

    const goldGradient = "linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)"

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

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="mx-6 md:mx-6 lg:mx-10 mt-10 p-1 rounded-3xl h-100"
            style={{
                background: '#0a0a0a',
                boxShadow: `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
            }}
        >
            <div className="flex flex-col md:flex-row gap-2 items-stretch h-full">
                {/* LEFT SIDE: Higher depth (raised outward) with slide-in */}
                <motion.div
                    variants={leftVariants}
                    className="flex-[0.7] flex justify-center items-center rounded-tl-2xl rounded-bl-2xl"
                    style={{
                        background: '#0a0a0a',
                        boxShadow: `8px 8px 16px ${shadowDark}, -6px -6px 12px ${shadowLight}`,
                    }}
                >
                    <Canvas camera={{ position: [0, 0, 3], fov: 45 }} resize={{ scroll: true }}>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[5, 5, 5]} intensity={0.5} color="#D4A017" />
                        <directionalLight position={[2, 5, 3]} intensity={0.4} />
                        <mesh position={[-.1, 0, 0]} rotation={[0.4, -0.9, 0]}>
                            <axesHelper size={2} />
                            <gridHelper />
                            <boxGeometry args={[1.5, .5, .75]} />
                            <meshStandardMaterial />
                            <OrbitControls />
                        </mesh>
                    </Canvas>
                </motion.div>

                {/* RIGHT SIDE: Lower depth (inset) with staggered text */}
                <motion.div
                    variants={containerVariants}
                    className="flex-[1.3] space-y-4 p-6 rounded-tr-2xl rounded-br-2xl"
                    style={{
                        background: '#060606',
                        boxShadow: `inset 4px 4px 8px ${shadowDark}, inset -2px -2px 6px ${shadowLight}`,
                        border: '0.5px solid rgba(255,255,255,0.03)',
                    }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-3xl"
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
                        About EGL Traders
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/70 text-sm md:text-base leading-relaxed font-['Jost'] font-light"
                    >
                        EGL Traders is a dynamic India-based trading and sourcing company committed to delivering high-quality products across global markets. We specialize in sourcing, supplying, exporting, and importing a wide range of goods tailored to our customers' specific requirements.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/60 text-sm md:text-base leading-relaxed font-['Jost'] font-light"
                    >
                        With a strong network of manufacturers, suppliers, and logistics partners, we ensure efficient procurement and timely delivery. Our business model is simple — we source what our customers need, when they need it, at competitive prices.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/50 text-sm md:text-base leading-relaxed font-['Jost'] font-light"
                    >
                        We work closely with clients across industries, including retail, hospitality, and wholesale distribution, ensuring flexibility, reliability, and long-term partnerships.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About