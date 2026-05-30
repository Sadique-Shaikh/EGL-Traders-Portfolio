// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import logo from './../assets/new Egl logo.PNG';

const AnimatedCTAButton = () => {
    const { colors } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                animate={{
                    x: [0, -6, 6, -5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 0],
                    rotate: [0, -4, 4, -3, 3, -2, 2, -1, 1, 0],
                    y: [0, -3, 0, -2, 0],
                    scale: [1, 1.06, 1.03, 1.04, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: "anticipate",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap"
                style={{
                    fontFamily: "var(--font-body)",
                    background: colors.accent,
                    color: colors.bgPrimary,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 4px 12px ${colors.accent}60`,
                }}
            >
                <span className="flex items-center gap-2">
                    <motion.svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        animate={{
                            rotate: [0, -15, 15, -10, 10, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                    GET A QUOTE
                </span>
            </motion.button>
        </motion.div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { colors } = useTheme();
    const [activeLink, setActiveLink] = useState('home');

    // Split navigation items for responsive design
    const mainNavItems = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT US', id: 'about-us' },
        { name: 'SERVICES', id: 'services' },
        { name: 'PRODUCTS', id: 'products' },
        { name: 'WHY CHOOSE US', id: 'WhyChooseUs' },
        { name: 'VISION', id: 'Vision' },
        { name: 'CONTACT', id: 'contact' }
    ];

    const [displayNavItems, setDisplayNavItems] = useState(mainNavItems);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setDisplayNavItems(mainNavItems.filter(item =>
                    item.name !== 'WHY CHOOSE US' && item.name !== 'VISION'
                ));
            } else {
                setDisplayNavItems(mainNavItems);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId, event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;

        setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (menuOpen) {
                    setMenuOpen(false);
                }
            } else {
                console.error(`Element with id "${id}" not found`);
                setTimeout(() => {
                    const retryElement = document.getElementById(id);
                    if (retryElement) {
                        const navbarHeight = 80;
                        const elementPosition = retryElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 500);
            }
        }, 100);
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about-us', 'services', 'products', 'WhyChooseUs', 'Vision', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        if (activeLink !== section) {
                            setActiveLink(section);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeLink]);

    return (
        <>
            {/* Global styles to prevent horizontal scroll and ensure proper z-index */}
            <style>{`
                body {
                    overflow-x: hidden !important;
                    max-width: 100vw !important;
                }
                .nav-container {
                    max-width: 100vw;
                    overflow-x: hidden;
                }
                /* Ensure ThemeSwitcher dropdown has higher z-index */
                .theme-switcher-dropdown {
                    z-index: 9999 !important;
                }
                /* Fix for mobile menu overlay */
                .mobile-menu-overlay {
                    z-index: 40;
                }
            `}</style>

            <nav
                className="sticky top-0 z-50 w-full nav-container"
                style={{
                    background: colors.bgPrimary,
                    borderBottom: `1px solid ${colors.borderLight}`,
                }}
            >
                <div className="flex justify-between items-center px-4 sm:px-6 py-3 w-full max-w-full overflow-visible">
                    {/* LEFT — Logo Area */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                color: colors.textPrimary,
                                background: 'transparent',
                            }}
                            aria-label="Menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo Image */}
                        <div
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-4xl p-1 cursor-pointer shrink-0"
                            style={{
                                background: colors.bgSecondary,
                            }}
                            onClick={(e) => scrollToSection('home', e)}
                        >
                            <img
                                src={logo}
                                alt="EGL Logo"
                                className="h-8 sm:h-10 w-auto object-contain"
                            />
                        </div>

                        {/* Logo Text */}
                        <span
                            className="text-sm sm:text-base md:text-lg font-bold tracking-wider cursor-pointer whitespace-nowrap"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: colors.bgDark,
                                letterSpacing: '0.05em',
                            }}
                            onClick={(e) => scrollToSection('home', e)}
                        >
                            EGL TRADERS
                        </span>
                    </div>

                    {/* MIDDLE — Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center justify-center flex-1 px-2 lg:px-4 max-w-full overflow-x-auto scrollbar-hide">
                        <ul className="flex items-center gap-0.5 lg:gap-1 xl:gap-2 flex-nowrap">
                            {displayNavItems.map((link) => (
                                <li key={link.name} className="shrink-0">
                                    <button
                                        onClick={(e) => scrollToSection(link.id, e)}
                                        className="block px-2 lg:px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 text-xs lg:text-sm font-medium whitespace-nowrap"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontWeight: activeLink === link.id ? 600 : 500,
                                            letterSpacing: '0.05em',
                                            color: activeLink === link.id ? colors.accent : colors.textSecondary,
                                            background: activeLink === link.id ? colors.bgSecondary : 'transparent',
                                            borderBottom: activeLink === link.id ? `2px solid ${colors.accent}` : 'none',
                                            cursor: 'pointer',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeLink !== link.id) {
                                                e.currentTarget.style.color = colors.accent;
                                                e.currentTarget.style.background = colors.bgSecondary;
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeLink !== link.id) {
                                                e.currentTarget.style.color = colors.textSecondary;
                                                e.currentTarget.style.background = 'transparent';
                                            }
                                        }}
                                    >
                                        {link.name === 'WHY CHOOSE US' ? 'WHY US' :
                                            link.name === 'ABOUT US' ? 'ABOUT' :
                                                link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — Theme Switcher + CTA Button */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0" style={{ zIndex: 9999, position: 'relative' }}>
                        <ThemeSwitcher />
                        <AnimatedCTAButton />
                    </div>
                </div>

                {/* Mobile Menu Dropdown - Fixed z-index and positioning */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden fixed left-0 right-0 top-18.25 overflow-hidden mobile-menu-overlay"
                            style={{
                                zIndex: 999,
                            }}
                        >
                            <div
                                className="py-4 px-4 border-t shadow-lg"
                                style={{
                                    background: colors.bgPrimary,
                                    borderColor: colors.borderLight,
                                    boxShadow: `0 10px 25px ${colors.shadowDark}`,
                                }}
                            >
                                <ul className="flex flex-col gap-2">
                                    {mainNavItems.map((link) => (
                                        <li className='w-full rounded-lg' key={link.name}>
                                            <button
                                                onClick={(e) => {
                                                    scrollToSection(link.id, e);
                                                    setMenuOpen(false);
                                                }}
                                                className="block w-full px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium text-left"
                                                style={{
                                                    color: activeLink === link.id ? colors.accent : colors.textSecondary,
                                                    background: activeLink === link.id ? colors.bgSecondary : 'transparent',
                                                    borderLeft: activeLink === link.id ? `3px solid ${colors.accent}` : 'none',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <b>{link.name}</b>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;