import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: "💼",
      label: "Years Experience",
      value: "2+",
      color: "text-emerald-400",
    },
    {
      icon: "🏆",
      label: "Projects Completed",
      value: "12+",
      color: "text-amber-400",
    },
    { 
      icon: "🚀",
      label: "Technologies",
      value: "15+",
      color: "text-blue-400",
    },
    {
      icon: "☕",
      label: "Coffee Consumed",
      value: "∞",
      color: "text-orange-400",
    },
  ];

  const cards = [
    {
      icon: "👨‍💻",
      title: "Who I Am",
      description:
        "I'm Amrut, a Computer Science student and passionate Full Stack Developer who loves building impactful, scalable systems. I’m currently pursuing my BTech in Computer Science and Engineering from Indian Institute of Information Technology, Pune.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      icon: "⚙️",
      title: "What I Do",
      description:
        "I specialize in designing and developing full-stack applications using React, Node.js, Express, and MongoDB. My work focuses on clean UI/UX, efficient backend logic, and end-to-end system design - from authentication to deployment.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
    },
    {
      icon: "🚀",
      title: "What Drives Me",
      description:
        "I’m driven by curiosity, collaboration, and innovation - the excitement of solving real-world problems through code. My goal is to keep learning, contribute to impactful projects, and grow into a top-tier software engineer.",
      gradient: "from-pink-500 via-rose-500 to-red-600",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1) translateZ(0); }
          50% { transform: translateY(-20px) scale(1.05) translateZ(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1) translateZ(0); }
          50% { opacity: 0.6; transform: scale(1.3) translateZ(0); }
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
        
        @keyframes rotate-continuous {
          from { transform: rotate(0deg) translateZ(0); }
          to { transform: rotate(360deg) translateZ(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateZ(0); }
          100% { transform: translateX(100%) translateZ(0); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1) translateZ(0); }
          50% { transform: scale(1.1) translateZ(0); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 8s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-12px);
        }
        
        .stat-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-hover:hover {
          transform: translateY(-8px);
        }
        
        .icon-rotate {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .icon-rotate:hover {
          transform: rotate(360deg) scale(1.1);
        }
        
        .glow-effect {
          transition: opacity 0.5s ease;
        }
        
        .card-hover:hover .glow-effect {
          opacity: 0.3;
        }
        
        .bottom-line {
          width: 0;
          transition: width 0.5s ease;
        }
        
        .card-hover:hover .bottom-line {
          width: 100%;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        
        .stat-card:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient orbs - lighter on sides, darker at top/bottom */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-rotate-slow" />
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
              animation: `particle-float ${
                3 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 py-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div style={{ animation: "rotate-slow 3s linear infinite" }}>
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
                Get to know me
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                About Me
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-pulse" />
              <span className="text-3xl animate-float">💻</span>
              <div
                className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            style={{
              animation: "fade-in-up 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group stat-hover stat-card overflow-hidden"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors overflow-hidden">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-slate-800/50 rounded-xl icon-rotate">
                      <span className="text-4xl">{stat.icon}</span>
                    </div>

                    <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </h3>

                    <p className="text-slate-400 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div
            className="grid lg:grid-cols-3 gap-8"
            style={{
              animation: "fade-in-up 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="relative group card-hover">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur-2xl glow-effect opacity-0`}
                ></div>

                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300 h-full overflow-hidden">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl ${card.iconBg} mb-6 shadow-lg icon-rotate`}
                  >
                    <span className="text-4xl">{card.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    {card.title}
                    <span
                      className="text-xl animate-pulse"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      ⚡
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`h-1 bg-gradient-to-r ${card.gradient} rounded-full bottom-line`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default About;
