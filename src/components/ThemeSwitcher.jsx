// src/components/ThemeSwitcher.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    // Use mousedown and touchstart for mobile
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when dropdown is open on mobile
  useEffect(() => {
    if (isOpen) {
      // Don't block scroll, just ensure dropdown is visible
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const themes = Object.entries(THEMES).map(([key, value]) => ({
    id: key,
    name: value.name,
    colors: value.colors,
  }));

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      style={{ zIndex: 9999 }}
    >
      {/* Theme Switcher Button - SVG Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition-all duration-200"
        style={{
          background: 'transparent',
          color: colors.textSecondary,
          cursor: 'pointer',
          position: 'relative',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = colors.accent;
          e.currentTarget.style.background = colors.bgSecondary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = colors.textSecondary;
          e.currentTarget.style.background = 'transparent';
        }}
        title="Change Theme"
      >
        {/* Palette SVG Icon */}
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 sm:w-64 rounded-xl overflow-visible"
            style={{
              background: colors.bgCard,
              border: `1px solid ${colors.borderLight}`,
              boxShadow: `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`,
              zIndex: 99999,
              position: 'absolute',
              top: '100%',
              right: 0,
            }}
          >
            <div className="p-2">
              <p className="text-xs font-semibold tracking-wider px-3 py-2 mb-1"
                style={{
                  color: colors.textSecondary,
                  fontFamily: "var(--font-body)",
                }}
              >
                SELECT THEME
              </p>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg transition-all duration-150 mb-1"
                  style={{
                    background: currentTheme === theme.id ? colors.bgSecondary : 'transparent',
                    color: currentTheme === theme.id ? colors.accent : colors.textSecondary,
                    fontFamily: "var(--font-body)",
                    borderLeft: currentTheme === theme.id ? `2px solid ${colors.accent}` : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (currentTheme !== theme.id) {
                      e.currentTarget.style.background = colors.bgSecondary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentTheme !== theme.id) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{theme.name}</span>
                    <div className="flex gap-1">
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{ background: theme.colors.accent }}
                      ></div>
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{ background: theme.colors.bgPrimary }}
                      ></div>
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{ background: theme.colors.textPrimary }}
                      ></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;