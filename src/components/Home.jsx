import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Download } from "lucide-react";

const Home = () => {

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-slate-950)' }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1) translateZ(0); }
          50% { transform: translateY(-20px) scale(1.05) translateZ(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1) translateZ(0); }
          50% { opacity: 0.7; transform: scale(1.2) translateZ(0); }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0px) translateZ(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-30px) translateZ(0); opacity: 0; }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg) translateZ(0); }
          to { transform: rotate(360deg) translateZ(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateZ(0); }
          100% { transform: translateX(100%) translateZ(0); }
        }
        
        .gpu-accelerated {
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px var(--color-cyan-500-30), 0 0 40px var(--color-purple-primary-20); }
          50% { text-shadow: 0 0 30px var(--color-cyan-500-50), 0 0 60px var(--color-purple-primary-30); }
        }
      `}</style>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-pattern)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-pattern)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient orbs - lighter on sides, darker at top/bottom */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyan-blue orb - left side */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Purple-pink orb - right side */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Center orb - subtle violet */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 pt-24">
        <div className="flex flex-col items-center text-center">

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light" style={{ color: 'var(--text-slate-300)' }}>
              Hi there! I'm
            </h2>
          </motion.div>

          {/* Name - Main Hero with Dynamic Letter Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black flex flex-wrap justify-center gap-x-4">
              {/* First Name - Amrut */}
              <span className="whitespace-nowrap">
                {"Amrut".split("").map((char, index) => (
                  <span
                    key={`first-${index}`}
                    className="inline-block bg-clip-text text-transparent"
                    style={{ 
                      background: 'linear-gradient(to right, var(--color-cyan-400), var(--color-blue-500), var(--color-purple-600))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 8s ease infinite',
                      animationDelay: `${index * 0.1}s`,
                      filter: 'drop-shadow(0 0 15px var(--shadow-cyan-30)) drop-shadow(0 0 30px var(--shadow-purple-30))',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              
              {/* Last Name - Pathane */}
              <span className="whitespace-nowrap">
                {"Pathane".split("").map((char, index) => (
                  <span
                    key={`last-${index}`}
                    className="inline-block bg-clip-text text-transparent"
                    style={{ 
                      background: 'linear-gradient(to right, var(--color-cyan-400), var(--color-blue-500), var(--color-purple-600))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 8s ease infinite',
                      animationDelay: `${(index + 5) * 0.1}s`,
                      filter: 'drop-shadow(0 0 15px var(--shadow-cyan-30)) drop-shadow(0 0 30px var(--shadow-purple-30))',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Title with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-2 sm:gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden sm:block"
            >
              <Terminal className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--color-cyan-400)' }} />
            </motion.div>
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold whitespace-nowrap"
              style={{ color: 'var(--text-slate-200)' }}
            >
              Full Stack Developer
            </h3>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="hidden sm:block"
            >
              <Code className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--color-purple-400)' }} />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl text-base lg:text-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-slate-400)' }}
          >
            Crafting elegant digital experiences with cutting-edge technologies.
            Passionate about creating impactful solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center px-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full overflow-hidden"
              style={{
                transformOrigin: 'center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-100 group-hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(to right, var(--color-cyan-500), var(--color-blue-500), var(--color-purple-600))',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 8s ease infinite'
                }}
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0"
                  style={{ 
                    background: 'linear-gradient(to right, transparent, var(--white-20), transparent)',
                    animation: 'shimmer 2s infinite' 
                  }}
                />
              </div>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2 font-bold text-base sm:text-lg whitespace-nowrap" style={{ color: 'var(--text-white)' }}>
                Explore My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </span>

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                style={{
                  background: 'linear-gradient(to right, var(--color-cyan-500-60), var(--color-purple-primary-60))',
                }}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-xl transition-colors duration-300"
              style={{ 
                backgroundColor: 'var(--bg-slate-900-50)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-slate-700)',
                transformOrigin: 'center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-cyan-50)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-slate-700)'}
            >
              <span className="flex items-center gap-2 font-bold text-base sm:text-lg whitespace-nowrap" style={{ color: 'var(--text-slate-200)' }}>
                View Resume
                <Download className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-cyan-400)' }} />
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to top, var(--bg-slate-950), transparent)'
        }}
      ></div>
    </section>
  );
};

export default Home;
