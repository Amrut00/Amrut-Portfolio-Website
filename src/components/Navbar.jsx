import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0, width: "80px" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  
  const itemsRef = useRef({});
  const navRef = useRef(null);
  const isMountedRef = useRef(true);
  const animationFrameRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Publications", to: "publications" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  // Get indicator width based on text length
  const getIndicatorWidth = useCallback((to) => {
    const link = navLinks.find(link => link.to === to);
    if (!link) return "80px";
    
    const textLength = link.name.length;
    // 1-5 letters: 80px, more than 5 letters: 105px
    return textLength <= 8 ? "80px" : "105px";
  }, []);

  // Update sliding indicator position with dynamic size
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
          width: getIndicatorWidth(to),
          opacity: 1,
        });
        
        if (!isIndicatorReady) {
          setIsIndicatorReady(true);
        }
      }
    });
  }, [isIndicatorReady, getIndicatorWidth]);

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
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Update indicator when active section changes
  useEffect(() => {
    updateIndicator(activeSection);
  }, [activeSection, updateIndicator]);

  // Handle nav click - immediate feedback with scroll spy pause
  const handleNavClick = useCallback((to) => {
    // Disable scroll spy FIRST before any state updates
    isScrollingRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Now set active section immediately for instant feedback
    setActiveSection(to);
    updateIndicator(to);
    
    // Re-enable scroll spy after scroll animation completes (500ms duration + 700ms buffer for settling)
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1400);
  }, [updateIndicator]);

  // Custom scroll spy - detects which section is most visible
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Skip all processing if we're in programmatic scroll
      if (isScrollingRef.current) {
        return;
      }
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          
          // Double-check: Skip scroll spy updates during programmatic scrolling
          if (isScrollingRef.current) {
            ticking = false;
            return;
          }
          
          // Custom section detection based on viewport coverage
          const navbarHeight = 64; // Approximate navbar height
          const viewportHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
          
          let maxVisibleSection = null;
          let maxVisibleArea = 0;
          
          navLinks.forEach((link) => {
            const section = document.getElementById(link.to);
            if (section) {
              const rect = section.getBoundingClientRect();
              const sectionTop = rect.top + scrollPosition;
              const sectionBottom = sectionTop + rect.height;
              
              // Calculate visible area of this section
              const visibleTop = Math.max(sectionTop, scrollPosition + navbarHeight);
              const visibleBottom = Math.min(sectionBottom, scrollPosition + viewportHeight);
              const visibleArea = Math.max(0, visibleBottom - visibleTop);
              
              // Track section with most visible area
              if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                maxVisibleSection = link.to;
              }
            }
          });
          
          // Update active section if a section is covering significant viewport
          if (maxVisibleSection && maxVisibleSection !== activeSection) {
            // Only change if the section covers at least 30% of viewport
            const coverageThreshold = (viewportHeight - navbarHeight) * 0.3;
            if (maxVisibleArea >= coverageThreshold) {
              setActiveSection(maxVisibleSection);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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

  // Handle scroll spy activation (disabled in favor of custom scroll spy)
  const handleSetActive = useCallback((to) => {
    // Keeping this for react-scroll compatibility, but our custom scroll spy handles activation
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
        className="hidden lg:block fixed left-1/2 z-50 will-change-transform"
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
            background: "var(--bg-slate-900-80)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            border: "1px solid var(--border-purple-20)",
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.6), 0 12px 35px var(--shadow-cyan-20), 0 0 0 1px var(--color-purple-primary-10), inset 0 1px 0 var(--white-15), inset 0 -1px 0 rgba(0,0,0,0.4)",
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
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--color-cyan-500-15) 0%, var(--color-purple-primary-10) 25%, transparent 50%)`,
            }}
          />

          {/* Grid removed as per user request */}

          {/* Gradient Orbs */}
          <div className="absolute -left-20 -top-10 w-40 h-40 rounded-full blur-3xl pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to right, var(--color-cyan-500-20), var(--color-blue-500-20))',
              animation: 'pulse-glow 8s ease-in-out infinite' 
            }} 
          />
          <div className="absolute -right-20 -bottom-10 w-40 h-40 rounded-full blur-3xl pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to right, var(--color-purple-500-20), var(--color-pink-500-20))',
              animation: 'pulse-glow 8s ease-in-out infinite', 
              animationDelay: '2s' 
            }} 
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
              className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${
                isIndicatorReady ? "opacity-100" : "opacity-0"
              }`}
              style={{
                ...indicatorStyle,
                height: "42px",
                background: "linear-gradient(135deg, var(--color-cyan-500-50) 0%, var(--color-purple-primary-50) 50%, var(--color-pink-500-30) 100%)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
                boxShadow:
                  "0 4px 25px var(--shadow-cyan-30), 0 0 60px var(--shadow-purple-20), inset 0 1px 2px var(--white-25), inset 0 -1px 2px rgba(0,0,0,0.2)",
                border: "1px solid var(--border-cyan-40)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                perspective: 1000,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full blur-sm pointer-events-none" 
                style={{ background: 'linear-gradient(to right, var(--color-cyan-400) 0%, var(--color-purple-400-10) 50%, var(--color-pink-400) 100%)', opacity: 0.1 }} 
              />
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
                    offset={-60}
                    spy={false}
                    isDynamic={true}
                    onClick={() => handleNavClick(link.to)}
                    onSetActive={handleSetActive}
                    className="relative cursor-pointer select-none text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 will-change-transform"
                    style={{
                      color: isActive ? 'var(--text-white)' : 'var(--text-slate-300)',
                      backgroundColor: !isActive && isHovered ? 'var(--white-10)' : 'transparent',
                      transform: isActive || isHovered ? 'scale(1.05)' : 'scale(1)',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--text-white)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--text-slate-300)';
                      }
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
                          background: "radial-gradient(circle, var(--color-cyan-500-20) 0%, var(--color-purple-primary-15) 50%, transparent 70%)",
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

          {/* Outer Glow - Enhanced with cyan/purple theme */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 pointer-events-none -z-10 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyan-500-60), var(--color-purple-primary-50), var(--color-pink-500-60))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 8s ease infinite",
              filter: "blur(25px)",
            }}
          />
          
          {/* Border accent shine */}
          <div className="absolute inset-0 rounded-full pointer-events-none opacity-50"
            style={{
              background: "linear-gradient(135deg, transparent 0%, var(--color-cyan-500-10) 50%, transparent 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 10s ease infinite",
            }}
          />
        </div>
      </nav>

      {/* Floating Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className={`lg:hidden fixed right-6 top-6 z-50 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-0 invisible scale-0' : 'opacity-100 visible scale-100'
        }`}
        style={{
          background: "var(--bg-slate-900-95)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: "1px solid var(--border-cyan-30)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.5), 0 4px 20px var(--shadow-cyan-30), inset 0 1px 0 var(--white-15)",
        }}
        aria-label="Open menu"
      >
        {/* Gradient orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse-glow" />
        
        {/* Hamburger icon */}
        <div className="relative flex flex-col gap-1.5">
          <span className="block w-6 h-0.5 rounded-full" style={{ backgroundColor: 'var(--text-white)' }} />
          <span className="block w-6 h-0.5 rounded-full" style={{ backgroundColor: 'var(--text-white)' }} />
          <span className="block w-6 h-0.5 rounded-full" style={{ backgroundColor: 'var(--text-white)' }} />
        </div>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "var(--bg-slate-900-98)",
            backdropFilter: "blur(32px) saturate(180%)",
            borderLeft: "1px solid var(--border-cyan-20)",
            boxShadow:
              "-10px 0 50px rgba(0,0,0,0.5), -5px 0 35px var(--shadow-cyan-20)",
          }}
        >
          {/* Gradient orbs in sidebar */}
          <div className="absolute -right-10 top-20 w-40 h-40 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
            style={{ background: 'linear-gradient(to right, var(--color-cyan-500-20), var(--color-blue-500-20))' }} 
          />
          <div className="absolute -left-10 bottom-20 w-40 h-40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" 
            style={{ background: 'linear-gradient(to right, var(--color-purple-500-20), var(--color-pink-500-20))', animationDelay: '2s' }} 
          />

          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ color: 'var(--text-gray-300)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--white-10)'; e.currentTarget.style.color = 'var(--text-white)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-gray-300)'; }}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo/Title */}
          <div className="px-6 pt-8 pb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Menu
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="px-4 pt-4 space-y-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  spy={false}
                  onSetActive={handleSetActive}
                  onClick={() => handleLinkClick(link.to)}
                  className="relative w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-3 overflow-hidden group"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    background: isActive 
                      ? "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2))"
                      : "transparent",
                    color: isActive ? 'var(--text-white)' : 'var(--text-gray-300)',
                    border: isActive 
                      ? "1px solid var(--border-cyan-30)" 
                      : "1px solid transparent",
                    boxShadow: isActive 
                      ? "0 4px 20px var(--shadow-cyan-20), inset 0 1px 0 var(--white-10)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-white)';
                      e.currentTarget.style.backgroundColor = 'var(--white-10)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-gray-300)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {/* Animated background for active item */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: "linear-gradient(135deg, var(--color-cyan-500-30), var(--color-purple-primary-30), var(--color-pink-500-30))",
                        backgroundSize: "200% 200%",
                        animation: "gradient-shift 8s ease infinite",
                      }}
                    />
                  )}
                  
                  {/* Icon indicator */}
                  <div className={`relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 h-1.5' : 'group-hover:w-4'
                  }`}
                    style={{
                      background: isActive 
                        ? "linear-gradient(135deg, var(--color-cyan-500), var(--color-purple-primary))"
                        : "rgba(156, 163, 175, 0.5)",
                      boxShadow: isActive 
                        ? "0 0 12px var(--shadow-cyan-80), 0 0 4px var(--shadow-purple-60)"
                        : "none",
                    }}
                  />
                  
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Footer decoration */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <p className="text-center text-xs text-gray-500 mt-4">
              © 2025 Amrut Pathane.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
