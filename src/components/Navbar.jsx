import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  
  const itemsRef = useRef({});
  const navRef = useRef(null);
  const isMountedRef = useRef(true);
  const animationFrameRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  // Update sliding indicator position with fixed size
  const updateIndicator = useCallback((to) => {
    if (!isMountedRef.current) return;

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    animationFrameRef.current = requestAnimationFrame(() => {
      const el = itemsRef.current[to];
      if (el && isMountedRef.current) {
        const { offsetLeft, offsetWidth } = el;
        const centerOffset = offsetLeft + (offsetWidth / 2);
        
        setIndicatorStyle({
          transform: `translateX(${centerOffset}px)`,
          opacity: 1,
        });
        
        if (!isIndicatorReady) {
          setIsIndicatorReady(true);
        }
      }
    });
  }, [isIndicatorReady]);

  // Initialize indicator on mount
  useEffect(() => {
    isMountedRef.current = true;
    
    // Wait for DOM to be ready
    const initTimer = setTimeout(() => {
      if (isMountedRef.current) {
        updateIndicator(activeSection);
      }
    }, 100);

    return () => {
      isMountedRef.current = false;
      clearTimeout(initTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update indicator when active section changes
  useEffect(() => {
    updateIndicator(activeSection);
  }, [activeSection, updateIndicator]);

  // Handle immediate indicator update on click
  const handleNavClick = useCallback((to) => {
    setActiveSection(to);
    // Update indicator immediately for instant feedback
    updateIndicator(to);
  }, [updateIndicator]);

  // Handle scroll for shrinking navbar - optimized with RAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle resize to recalculate indicator position and close mobile menu
  useEffect(() => {
    let resizeTimer;
    
    const handleResize = () => {
      // Close mobile menu on desktop
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
      
      // Debounce indicator recalculation
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (isMountedRef.current) {
          // Force recalculation after layout stabilizes
          requestAnimationFrame(() => {
            updateIndicator(activeSection);
          });
        }
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [activeSection, updateIndicator]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = useCallback((to) => {
    handleNavClick(to);
    setMobileMenuOpen(false);
  }, [handleNavClick]);

  // Handle scroll spy activation (when scrolling naturally)
  const handleSetActive = useCallback((to) => {
    setActiveSection(to);
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Prevent subpixel jitter and layout shifts */
        nav * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <nav
        ref={navRef}
        className="fixed left-1/2 z-50 will-change-transform"
        style={{
          transform: `translate(-50%, ${scrolled ? '0.5rem' : '1.5rem'}) scale(${scrolled ? 0.97 : 1})`,
          top: 0,
          transition: 'transform 500ms ease-out',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          WebkitTransform: `translate(-50%, ${scrolled ? '0.5rem' : '1.5rem'}) scale(${scrolled ? 0.97 : 1})`,
        }}
      >
        {/* Glass Container */}
        <div
          className="relative flex items-center justify-center h-14 md:h-16 px-4 md:px-6 rounded-full overflow-hidden group"
          style={{
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.6), 0 12px 35px rgba(6,182,212,0.2), 0 0 0 1px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.4)",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x, y });
          }}
        >
          {/* Animated Gradient Background */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.1) 25%, transparent 50%)`,
            }}
          />

          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Gradient Orbs */}
          <div className="absolute -left-20 -top-10 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none" 
            style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} 
          />
          <div className="absolute -right-20 -bottom-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none" 
            style={{ animation: 'pulse-glow 8s ease-in-out infinite', animationDelay: '2s' }} 
          />

          {/* Shimmer Effect */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(110deg, transparent 25%, rgba(6,182,212,0.08) 45%, rgba(139,92,246,0.08) 55%, transparent 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s infinite",
            }}
          />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex relative items-center justify-center gap-x-2 flex-nowrap shrink-0" style={{ transform: 'translateZ(0)' }}>
            {/* Sliding Indicator */}
            <div
              className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out will-change-transform ${
                isIndicatorReady ? "opacity-100" : "opacity-0"
              }`}
              style={{
                ...indicatorStyle,
                width: "80px",
                height: "42px",
                background: "linear-gradient(135deg, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.35) 50%, rgba(236,72,153,0.3) 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
                boxShadow:
                  "0 4px 25px rgba(6,182,212,0.5), 0 0 60px rgba(139,92,246,0.3), inset 0 1px 2px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.2)",
                border: "1px solid rgba(6,182,212,0.4)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                perspective: 1000,
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 blur-sm pointer-events-none" />
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              const isHovered = hoveredItem === link.to;
              return (
                <div
                  key={link.to}
                  ref={(el) => (itemsRef.current[link.to] = el)}
                  className="relative isolate"
                  onMouseEnter={() => setHoveredItem(link.to)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ contain: 'layout' }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-20}
                    spy={true}
                    isDynamic={true}
                    onClick={() => handleNavClick(link.to)}
                    onSetActive={handleSetActive}
                    className={`relative cursor-pointer select-none text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 will-change-transform ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      transform: isActive || isHovered ? 'scale(1.05)' : 'scale(1)',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                  >
                    <span className="relative z-10 whitespace-nowrap bg-gradient-to-r from-white via-white to-white bg-clip-text">
                      {link.name}
                    </span>
                    
                    {/* Hover Glow - Enhanced with cyan/purple theme */}
                    {isHovered && !isActive && (
                      <div
                        className="absolute inset-0 rounded-full -z-10 transition-opacity duration-300"
                        style={{
                          background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
                          filter: "blur(10px)",
                        }}
                      />
                    )}
                    
                    {/* Active sparkle effect */}
                    {isActive && (
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-[2px]" 
                        style={{ animation: 'float-particle 3s ease-in-out infinite' }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden absolute right-6 z-20 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Outer Glow - Enhanced with cyan/purple theme */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 pointer-events-none -z-10 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(139,92,246,0.5), rgba(236,72,153,0.6))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 8s ease infinite",
              filter: "blur(25px)",
            }}
          />
          
          {/* Border accent shine */}
          <div className="absolute inset-0 rounded-full pointer-events-none opacity-50"
            style={{
              background: "linear-gradient(135deg, transparent 0%, rgba(6,182,212,0.1) 50%, transparent 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 10s ease infinite",
            }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-6 right-6 rounded-3xl transition-all duration-500 transform overflow-hidden ${
            mobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
          style={{
            background: "rgba(15, 23, 42, 0.92)",
            backdropFilter: "blur(32px) saturate(180%)",
            border: "1px solid rgba(6,182,212,0.2)",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.6), 0 12px 35px rgba(6,182,212,0.3), 0 0 0 1px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          {/* Gradient orb in menu */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-5 space-y-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-20}
                  spy={true}
                  onSetActive={handleSetActive}
                  onClick={() => handleLinkClick(link.to)}
                  className={`relative w-full text-left px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 flex items-center justify-between overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white scale-[1.02]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    border: isActive 
                      ? "1px solid rgba(6,182,212,0.3)" 
                      : "1px solid transparent",
                    boxShadow: isActive 
                      ? "0 4px 20px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                      : "none",
                  }}
                >
                  {/* Animated background for active item */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))",
                        backgroundSize: "200% 200%",
                        animation: "gradient-shift 8s ease infinite",
                      }}
                    />
                  )}
                  
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <div
                      className="relative z-10 w-2 h-2 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,1), rgba(139,92,246,1))",
                        boxShadow: "0 0 12px rgba(6,182,212,0.8), 0 0 4px rgba(139,92,246,0.6)",
                        animation: "pulse-glow 3s ease-in-out infinite",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
