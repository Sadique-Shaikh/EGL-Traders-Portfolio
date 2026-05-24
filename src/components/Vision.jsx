import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// ---------- 3D Globe Component (blurred, rotating) ----------
function RotatingGlobe({ scrollProgress }) {
    const globeRef = useRef()
    const groupRef = useRef()

    useFrame(() => {
        if (globeRef.current) {
            // Slow continuous rotation
            globeRef.current.rotation.y += 0.002
        }
        if (groupRef.current) {
            // Parallax movement: moves slightly on scroll
            groupRef.current.position.y = scrollProgress * -0.5
            groupRef.current.position.x = scrollProgress * 0.3
        }
    })

    return (
        <group ref={groupRef}>
            <Sphere ref={globeRef} args={[2.5, 128, 128]}>
                <meshStandardMaterial
                    color="#1a1a2e"
                    metalness={0.8}
                    roughness={0.4}
                    emissive="#D4A017"
                    emissiveIntensity={0.15}
                    transparent
                    opacity={0.85}
                />
            </Sphere>
            {/* Atmosphere / glow layer */}
            <Sphere args={[2.55, 64, 64]}>
                <meshStandardMaterial
                    color="#D4A017"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                />
            </Sphere>
            {/* Wireframe grid for continents effect */}
            <Sphere args={[2.52, 64, 64]}>
                <meshBasicMaterial
                    color="#D4A017"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </Sphere>
        </group>
    )
}

// ---------- Main Vision Component ----------
const Vision = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    
    // Parallax values for text and globe
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const globeScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    const blurAmount = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 8])
    
    // For globe rotation speed based on scroll (optional)
    const [globeProgress, setGlobeProgress] = React.useState(0)
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => setGlobeProgress(v))
        return () => unsubscribe()
    }, [scrollYProgress])

    const quote = "To become a globally trusted trading partner, delivering excellence across every border, every time."
    const author = "— EGL Traders"

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* 3D Globe Canvas (blurred via CSS filter) */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    scale: globeScale,
                    filter: `blur(${blurAmount}px)`,
                }}
            >
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[5, 5, 5]} intensity={0.5} color="#D4A017" />
                    <directionalLight position={[2, 5, 3]} intensity={0.4} />
                    <RotatingGlobe scrollProgress={globeProgress} />
                </Canvas>
            </motion.div>

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content container */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Eyebrow (subtle) */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-amber-400/60 text-xs tracking-[0.3em] uppercase mb-6 font-['Jost']"
                >
                    Our Vision
                </motion.span>

                {/* Main Quote */}
                <motion.h2
                    style={{ y: textY }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl mx-auto text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    <span
                        className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent"
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                            fontStyle: 'italic',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        }}
                    >
                        {quote}
                    </span>
                </motion.h2>

                {/* Author */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6 text-amber-400/70 text-sm tracking-wide font-['Jost']"
                >
                    {author}
                </motion.p>

                {/* Scroll hint (small) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="text-amber-400/40 text-[10px] tracking-[0.2em] uppercase animate-pulse">
                        Scroll
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-amber-400/40 to-transparent mx-auto mt-1" />
                </motion.div>
            </div>
        </section>
    )
}

export default Vision