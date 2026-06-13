// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define all your themes here - easy to add/modify!
export const THEMES = {
  // Theme 1: Dark & Gold
  darkGold: {
    name: 'Dark & Gold',
    colors: {
      // Backgrounds
      bgPrimary: '#0a0a0a',
      bgSecondary: '#1a1a1a',
      bgCard: '#0a0a0a',
      bgDark: '#0a0a0a',
      bgoption3: '#1a1a1a',

      // Text colors
      textPrimary: '#ffffff',
      textSecondary: '#b0b0b0',
      textLight: '#888888',
      textDarkBg: '#F7F4EE',

      // Accent colors
      accent: '#D4A017',        // Primary accent (gold)
      accentLight: '#F5C842',    // Light accent
      accentDark: '#B8860B',     // Dark accent
      accentGreen: '#D4A017',    // Using gold instead of green for consistency

      // UI Elements
      borderLight: '#2a2a2a',
      borderDark: '#1c1c1c',
      shadowDark: '#000000',
      shadowLight: '#1c1c1c',
      success: '#25D366',

      // Gradients
      goldGradient: 'linear-gradient(135deg, #B8860B, #D4A017, #F5C842, #B8860B)',
      darkGradient: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
    },
    fonts: {
      heading: "'Cinzel', serif",
      body: "'Jost', sans-serif",
    },
  },

  // Theme 2: Light & Elegant
  lightElegant: {
    name: 'Light & Elegant',
    colors: {
      bgPrimary: '#ffffff',
      bgSecondary: '#f8f8f8',
      bgCard: '#ffffff',
      bgDark: '#f8f8f8',
      bgoption3: '#f0f0f0',
      
      textPrimary: '#1a1a1a',
      textSecondary: '#555555',
      textLight: '#999999',
      textDarkBg: '#1a1a1a',
      
      accent: '#C8974A',
      accentLight: '#E8C88A',
      accentDark: '#A67C2E',
      accentGreen: '#C8974A', // Using gold instead of green
      
      borderLight: '#e0e0e0',
      borderDark: '#cccccc',
      shadowDark: '#d0d0d0',
      shadowLight: '#ffffff',
      success: '#25D366',
      
      goldGradient: 'linear-gradient(135deg, #C8974A, #DFB87A, #F0D49A, #C8974A)',
      darkGradient: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)',
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
  },

  // Theme 3: Navy & Gold (Corporate)
  navyGold: {
    name: 'Navy & Gold',
    colors: {
      bgPrimary: '#0F172A',
      bgSecondary: '#1E293B',
      bgCard: '#1E293B',
      bgDark: '#0F172A',
      bgoption3: '#1E293B',
      
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      textLight: '#64748B',
      textDarkBg: '#F8FAFC',
      
      accent: '#F5C842',
      accentLight: '#FDE047',
      accentDark: '#D4A017',
      accentGreen: '#F5C842', // Using gold
      
      borderLight: '#334155',
      borderDark: '#1E293B',
      shadowDark: '#0F172A',
      shadowLight: '#2D3A4E',
      success: '#25D366',
      
      goldGradient: 'linear-gradient(135deg, #F5C842, #FDE047, #FEF08A, #F5C842)',
      darkGradient: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
  },

  // Theme 4: Emerald Green
  emeraldGreen: {
    name: 'Emerald Green',
    colors: {
      
      bgPrimary: '#FFFFFF',
      bgSecondary: '#FAFDF9',
      bgCard: '#FFFFFF',
      bgDark: '#0F2D1F',
      bgoption3: '#DFF5D7',
      
      textPrimary: '#0F2D1F',
      textSecondary: '#5A7A66',
      textLight: '#8DB09A',
      textDarkBg: '#F7F4EE',
      
      accent: '#C8974A',
      accentLight: '#E8C88A',
      accentDark: '#B07D2E',
      accentGreen: '#1D9E75', // This one keeps the green accent
      
      borderLight: '#E8F5EF',
      borderDark: 'rgba(255,255,255,0.08)',
      shadowDark: 'rgba(15,45,31,0.06)',
      shadowLight: 'rgba(255,255,255,0.8)',
      success: '#25D366',
      
      goldGradient: 'linear-gradient(135deg, #C8974A, #DFB87A, #F0D49A, #C8974A)',
      darkGradient: 'linear-gradient(135deg, #0F2D1F 0%, #163622 100%)',
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
  },

  // Theme 5: Slate & Teal
  slateTeal: {
    name: 'Slate & Teal',
    colors: {
      bgPrimary: '#1E293B',
      bgSecondary: '#2D3A4E',
      bgCard: '#2D3A4E',
      bgDark: '#1E293B',
      bgoption3: '#2D3A4E',
      
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      textLight: '#64748B',
      textDarkBg: '#F8FAFC',
      
      accent: '#0D9488',
      accentLight: '#2DD4BF',
      accentDark: '#0F766E',
      accentGreen: '#0D9488', // Using teal instead of green
      
      borderLight: '#3B4A62',
      borderDark: '#1E293B',
      shadowDark: '#0F172A',
      shadowLight: '#3B4A62',
      success: '#25D366',
      
      goldGradient: 'linear-gradient(135deg, #0D9488, #2DD4BF, #5EEAD4, #0D9488)',
      darkGradient: 'linear-gradient(135deg, #2D3A4E 0%, #1E293B 100%)',
    },
    fonts: {
      heading: "'Cinzel', serif",
      body: "'Jost', sans-serif",
    },
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Load saved theme from localStorage or default to 'emeraldGreen'
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('egl_theme');
    return savedTheme && THEMES[savedTheme] ? savedTheme : 'emeraldGreen';
  });
  
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themeColors = THEMES[currentTheme].colors;
  const themeFonts = THEMES[currentTheme].fonts;

  // Apply CSS variables to document root
  useEffect(() => {
    const root = document.documentElement;

    // Set all color variables
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set font variables
    Object.entries(themeFonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });

    // Save to localStorage
    localStorage.setItem('egl_theme', currentTheme);
  }, [currentTheme, themeColors, themeFonts]);

  const changeTheme = (themeName) => {
    if (THEMES[themeName]) {
      setCurrentTheme(themeName);
      setIsThemeMenuOpen(false);
    }
  };

  const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme: THEMES[currentTheme],
        colors: themeColors,
        fonts: themeFonts,
        changeTheme,
        availableThemes: THEMES,
        isThemeMenuOpen,
        toggleThemeMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};