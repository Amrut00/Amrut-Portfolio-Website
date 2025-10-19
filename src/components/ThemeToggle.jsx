import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Temporarily disable transitions on initial load
    document.documentElement.classList.add('no-transition');
    
    setMounted(true);
    
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
      localStorage.setItem('theme', systemTheme);
    }
    
    // Re-enable transitions after initial load
    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 100);
  }, []);

  // Toggle theme (optimized - no delays)
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes pulse-glow-theme {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes rotate-sun {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-moon {
          from { transform: rotate(-30deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-moon {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 0 8px var(--color-cyan-500));
          }
          50% { 
            transform: translateY(-3px) scale(1.05);
            filter: drop-shadow(0 0 12px var(--color-cyan-400));
          }
        }
      `}</style>

      {/* Desktop Theme Toggle - Top Right */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={toggleTheme}
        className="hidden lg:flex fixed right-6 z-50 w-14 h-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          top: '1.5rem',
          background: 'var(--bg-slate-900-80)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: '1px solid var(--border-cyan-30)',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.3), 0 4px 20px var(--shadow-cyan-20), inset 0 1px 0 var(--white-15)',
        }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {/* Gradient orb background */}
        <div 
          className="absolute inset-0 rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, var(--color-cyan-500-40), var(--color-purple-primary-30))'
              : 'linear-gradient(135deg, var(--color-orange-500), var(--color-yellow-400))',
            animation: 'pulse-glow-theme 3s ease-in-out infinite'
          }}
        />

        {/* Icon container */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
                style={{ animation: 'float-moon 3s ease-in-out infinite' }}
              >
                <Moon 
                  className="w-6 h-6 transition-colors" 
                  style={{ color: 'var(--color-cyan-400)' }}
                  fill="currentColor"
                />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
                style={{ animation: 'rotate-sun 20s linear infinite' }}
              >
                <Sun 
                  className="w-6 h-6 transition-colors" 
                  style={{ color: 'var(--color-orange-500)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Outer glow on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 pointer-events-none -z-10 transition-opacity duration-500"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, var(--color-cyan-500-60), var(--color-purple-primary-50))'
              : 'linear-gradient(135deg, rgba(249,115,22,0.6), rgba(251,191,36,0.5))',
            filter: 'blur(15px)',
          }}
        />
      </motion.button>

      {/* Mobile Theme Toggle - Near menu button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={toggleTheme}
        className="lg:hidden fixed left-6 top-6 z-50 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
        style={{
          background: 'var(--bg-slate-900-80)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: '1px solid var(--border-cyan-30)',
          boxShadow:
            '0 10px 30px rgba(0,0,0,0.3), 0 4px 20px var(--shadow-cyan-20), inset 0 1px 0 var(--white-15)',
        }}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {/* Gradient orb background */}
        <div 
          className="absolute inset-0 rounded-full blur-xl pointer-events-none"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, var(--color-cyan-500-20), var(--color-purple-primary-20))'
              : 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(251,191,36,0.2))',
            animation: 'pulse-glow-theme 3s ease-in-out infinite'
          }}
        />

        {/* Icon container */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
                style={{ animation: 'float-moon 3s ease-in-out infinite' }}
              >
                <Moon 
                  className="w-5 h-5" 
                  style={{ color: 'var(--color-cyan-400)' }}
                  fill="currentColor"
                />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
              >
                <Sun 
                  className="w-5 h-5" 
                  style={{ color: 'var(--color-orange-500)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
};

export default ThemeToggle;

