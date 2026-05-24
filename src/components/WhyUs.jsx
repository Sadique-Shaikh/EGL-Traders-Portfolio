import React, { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll } from 'framer-motion'
import * as THREE from 'three'

// ---------- Advanced Shape-Changing Particles ----------
function ShapeChangingParticles() {
    const particlesRef = useRef()
    const particlesCount = 200
    
    // Store individual particle properties
    const particlesData = useMemo(() => {
        const data = []
        for (let i = 0; i < particlesCount; i++) {
            data.push({
                // Position
                x: (Math.random() - 0.5) * 15,
                y: (Math.random() - 0.5) * 8,
                z: (Math.random() - 0.5) * 10 - 5,
                // Shape animation properties
                shapeType: Math.floor(Math.random() * 3), // 0: sphere, 1: cube, 2: tetrahedron
                morphSpeed: 0.5 + Math.random() * 1.5,
                rotationSpeed: 0.002 + Math.random() * 0.008,
                scale: 0.3 + Math.random() * 0.5,
                color: new THREE.Color().setHSL(0.12, 1, 0.5), // Golden hues
                pulseSpeed: 0.5 + Math.random() * 1,
            })
        }
        return data
    }, [])

    // Create individual meshes for each particle to allow shape morphing
    const particles = useMemo(() => {
        return particlesData.map((data, i) => {
            // Create different geometries
            let geometry
            switch(data.shapeType) {
                case 0: // Sphere
                    geometry = new THREE.SphereGeometry(0.08, 8, 8)
                    break
                case 1: // Cube/Box
                    geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15)
                    break
                case 2: // Tetrahedron
                    geometry = new THREE.TetrahedronGeometry(0.1)
                    break
                default:
                    geometry = new THREE.SphereGeometry(0.08, 8, 8)
            }
            
            const material = new THREE.MeshStandardMaterial({
                color: data.color,
                emissive: '#D4A017',
                emissiveIntensity: 0.3,
                metalness: 0.7,
                roughness: 0.3,
                transparent: true,
                opacity: 0.7,
            })
            
            const mesh = new THREE.Mesh(geometry, material)
            mesh.userData = {
                originalGeometry: geometry,
                shapeType: data.shapeType,
                morphProgress: Math.random(),
                morphDirection: 1,
                rotationSpeed: data.rotationSpeed,
                scale: data.scale,
                pulseSpeed: data.pulseSpeed,
                originalY: data.y,
            }
            mesh.position.set(data.x, data.y, data.z)
            mesh.scale.setScalar(data.scale)
            return mesh
        })
    }, [particlesData])

    // Add meshes to group on mount
    useEffect(() => {
        if (particlesRef.current) {
            particles.forEach(particle => {
                particlesRef.current.add(particle)
            })
        }
        
        return () => {
            if (particlesRef.current) {
                particles.forEach(particle => {
                    particlesRef.current.remove(particle)
                })
            }
        }
    }, [particles])

    useFrame((state) => {
        if (!particlesRef.current) return
        
        const time = state.clock.getElapsedTime()
        
        particles.forEach((particle, i) => {
            // 1. SHAPE MORPHING - Change geometry over time
            const data = particlesData[i]
            const morphProgress = Math.sin(time * data.morphSpeed) * 0.5 + 0.5
            const targetShape = Math.floor(time * 0.5 + i) % 3
            
            // Morph between shapes by replacing geometry
            if (targetShape !== particle.userData.shapeType && 
                Math.abs(Math.sin(time * data.morphSpeed)) < 0.05) {
                
                let newGeometry
                switch(targetShape) {
                    case 0:
                        newGeometry = new THREE.SphereGeometry(0.08, 12, 12)
                        break
                    case 1:
                        newGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15)
                        break
                    case 2:
                        newGeometry = new THREE.IcosahedronGeometry(0.09, 0)
                        break
                }
                
                particle.geometry.dispose() // Clean up old geometry
                particle.geometry = newGeometry
                particle.userData.shapeType = targetShape
            }
            
            // 2. SCALE PULSING - Particles breathe
            const pulse = 0.5 + Math.sin(time * data.pulseSpeed) * 0.3
            const scale = particle.userData.scale * (0.7 + pulse * 0.3)
            particle.scale.setScalar(scale)
            
            // 3. COLOR SHIFTING - Golden hues changing over time
            const hue = 0.12 + Math.sin(time * 0.5 + i) * 0.05
            particle.material.color.setHSL(hue, 1, 0.6)
            particle.material.emissiveIntensity = 0.2 + Math.sin(time * 0.8) * 0.15
            
            // 4. ROTATION - Spin on all axes
            particle.rotation.x += particle.userData.rotationSpeed
            particle.rotation.y += particle.userData.rotationSpeed * 1.3
            particle.rotation.z += particle.userData.rotationSpeed * 0.7
            
            // 5. FLOATING MOTION - Gentle sine wave movement
            particle.position.y = particle.userData.originalY + Math.sin(time * 0.8 + i) * 0.2
            particle.position.x += Math.sin(time * 0.5 + i) * 0.002
            particle.position.z += Math.cos(time * 0.6 + i) * 0.002
        })
        
        // Gentle overall rotation of the entire particle field
        particlesRef.current.rotation.y = Math.sin(time * 0.1) * 0.2
        particlesRef.current.rotation.x = Math.sin(time * 0.15) * 0.1
    })

    return <group ref={particlesRef} />
}

// Alternative: Animated glowing orbs that change size
function GlowingOrbs() {
    const orbsRef = useRef()
    const orbCount = 80
    
    const orbs = useMemo(() => {
        const orbList = []
        for (let i = 0; i < orbCount; i++) {
            const geometry = new THREE.SphereGeometry(0.05, 16, 16)
            const material = new THREE.MeshStandardMaterial({
                color: '#D4A017',
                emissive: '#FFD700',
                emissiveIntensity: 0.5,
                metalness: 0.8,
                roughness: 0.2,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.userData = {
                x: (Math.random() - 0.5) * 18,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 12 - 6,
                speed: 0.3 + Math.random() * 1,
                phase: Math.random() * Math.PI * 2,
                sizeVariation: 0.3 + Math.random() * 0.5,
            }
            mesh.position.set(mesh.userData.x, mesh.userData.y, mesh.userData.z)
            orbList.push(mesh)
        }
        return orbList
    }, [])
    
    useEffect(() => {
        if (orbsRef.current) {
            orbs.forEach(orb => orbsRef.current.add(orb))
        }
        return () => {
            if (orbsRef.current) {
                orbs.forEach(orb => orbsRef.current.remove(orb))
            }
        }
    }, [orbs])
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        
        orbs.forEach((orb, i) => {
            const data = orb.userData
            // Size pulsing
            const size = 0.05 + Math.sin(time * data.speed + data.phase) * 0.03
            orb.scale.setScalar(size * data.sizeVariation)
            
            // Color intensity pulsing
            const intensity = 0.3 + Math.sin(time * 1.5 + i) * 0.2
            orb.material.emissiveIntensity = intensity
            
            // Floating motion
            orb.position.y = data.y + Math.sin(time * 0.8 + i) * 0.15
            orb.position.x = data.x + Math.cos(time * 0.5 + i) * 0.1
        })
        
        orbsRef.current.rotation.y = time * 0.05
    })
    
    return <group ref={orbsRef} />
}

// ---------- Combination: Multiple Particle Types ----------
function AdvancedParticleSystem() {
    return (
        <>
            {/* Main shape-changing particles */}
            <ShapeChangingParticles />
            
            {/* Additional floating glowing particles */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={500}
                        array={(() => {
                            const positions = new Float32Array(500 * 3)
                            for (let i = 0; i < 500; i++) {
                                positions[i*3] = (Math.random() - 0.5) * 20
                                positions[i*3+1] = (Math.random() - 0.5) * 12
                                positions[i*3+2] = (Math.random() - 0.5) * 15 - 7
                            }
                            return positions
                        })()}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#D4A017"
                    size={0.03}
                    transparent
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </>
    )
}

// ---------- USP Item with Neumorphic Depth Effect ----------
const USPItem = ({ icon, title, description, index, scrollProgress }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const startThreshold = index * 0.12
    const endThreshold = startThreshold + 0.1
    
    useEffect(() => {
        if (scrollProgress >= startThreshold && scrollProgress <= endThreshold) {
            setIsVisible(true)
        } else if (scrollProgress > endThreshold) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [scrollProgress, startThreshold, endThreshold])

    // Neumorphic shadow colors
    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'
    const goldGradient = 'linear-gradient(135deg, #5C5A3A, #D4A017, #8B6B3D)'

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            style={{
                background: '#0a0a0a',
                borderRadius: '16px',
                // Neumorphic outer shadow
                boxShadow: isHovered 
                    ? `20px 20px 40px ${shadowDark}, -12px -12px 24px ${shadowLight}, 0 0 20px rgba(212,160,23,0.2)`
                    : `12px 12px 24px ${shadowDark}, -8px -8px 16px ${shadowLight}`,
                // Inner border with gold accent on hover
                border: isHovered 
                    ? '1px solid rgba(212, 160, 23, 0.4)'
                    : '1px solid rgba(212, 160, 23, 0.1)',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
            }}
        >
            {/* Icon with neumorphic inner shadow */}
            <motion.div
                animate={isVisible ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                className="text-4xl shrink-0 rounded-2xl flex items-center justify-center w-16 h-16"
                style={{
                    background: '#0a0a0a',
                    boxShadow: `inset 3px 3px 6px ${shadowDark}, inset -2px -2px 5px ${shadowLight}`,
                    filter: isHovered ? 'drop-shadow(0 0 8px rgba(212,160,23,0.5))' : 'drop-shadow(0 0 4px rgba(212,160,23,0.3))',
                    transition: 'all 0.3s ease',
                }}
            >
                {icon}
            </motion.div>
            
            <div className="flex-1">
                {/* Title with gold gradient */}
                <h3
                    className="text-lg md:text-xl font-bold mb-2"
                    style={{
                        fontFamily: "'Cinzel', serif",
                        background: isHovered 
                            ? 'linear-gradient(135deg, #D4A017, #F5C842, #D4A017)'
                            : 'linear-gradient(135deg, #5C5A3A, #D4A017, #8B6B3D)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-sm font-['Jost'] font-light leading-relaxed">
                    {description}
                </p>
                
                {/* Animated gold underline on hover */}
                <motion.div 
                    className="h-0.5 mt-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? '40px' : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: goldGradient }}
                />
            </div>
        </motion.div>
    )
}

// ---------- Main Component ----------
const WhyChooseUs = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })
    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => setScrollValue(v))
        return () => unsubscribe()
    }, [scrollYProgress])

    const usps = [
        { icon: "🌍", title: "Global Network", description: "Trusted partners across 25+ countries with seamless logistics." },
        { icon: "⚡", title: "Fast Turnaround", description: "Efficient procurement & shipping – 7-day delivery average." },
        { icon: "🔒", title: "Zero Disputes", description: "10+ years, 0 disputes – built on transparency and trust." },
        { icon: "💎", title: "Premium Quality", description: "Rigorous quality checks for every single shipment." },
        { icon: "🤝", title: "Custom Solutions", description: "Tailored sourcing to match your exact business needs." },
        { icon: "📞", title: "24/7 Support", description: "Dedicated trade desk always available for you." },
    ]

    const shadowDark = '#000000'
    const shadowLight = '#1c1c1c'

    return (
        <section
            ref={containerRef}
            className="relative py-20 md:py-28 overflow-hidden bg-amber-50 p-5"
            style={{ minHeight: '150vh' }}
        >
            {/* Neumorphic Gradient Background with Depth */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 40%, #000000 100%)',
                    boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.6), inset 0 -5px 15px rgba(28,28,28,0.2), 0 0 0 1px rgba(212,160,23,0.06)',
                }}
            />
            
            {/* Additional Depth Layer */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    boxShadow: 'inset 0 20px 40px -20px rgba(0,0,0,0.8), inset 0 -10px 20px -10px rgba(28,28,28,0.1)',
                }}
            />
            
            {/* Subtle Gold Rim Light */}
            <div 
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.2), transparent)',
                }}
            />
            
            {/* Texture Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 40%, ${shadowLight} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* 3D Shape-Changing Particle Canvas */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas 
                    camera={{ position: [0, 0, 12], fov: 50 }}
                    gl={{ alpha: false, antialias: true }}
                >
                    <ambientLight intensity={0.3} />
                    <pointLight position={[5, 5, 5]} intensity={0.8} />
                    <pointLight position={[-5, 3, 5]} intensity={0.5} />
                    <directionalLight position={[0, 5, 0]} intensity={0.5} />
                    
                    <AdvancedParticleSystem />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full py-1.5 px-4 bg-amber-500/5 backdrop-blur-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="text-amber-400 text-[11px] font-medium tracking-wider uppercase font-['Jost']">
                            Why EGL Traders
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
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4" />
                </div>

                {/* USPs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {usps.map((usp, idx) => (
                        <USPItem
                            key={idx}
                            icon={usp.icon}
                            title={usp.title}
                            description={usp.description}
                            index={idx}
                            scrollProgress={10}
                        />
                    ))}
                </div>

                {/* Scroll hint */}
                <div className="text-center mt-12">
                    <p className="text-amber-400/40 text-xs tracking-wider font-['Jost'] animate-pulse">
                        Scroll to reveal benefits ✨
                    </p>
                </div>
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
export default WhyChooseUs