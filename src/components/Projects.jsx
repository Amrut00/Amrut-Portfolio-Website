import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "PrakritiMitra",
      description: "Comprehensive NGO management platform with volunteer coordination, event management, and real-time communication features.",
      longDescription: "All-in-one solution for NGOs with QR code attendance, AI-powered reports, payment integration, and complete operational management.",
      image: "/assets/projects/prakritimitra.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "OpenAI"],
      category: "fullstack",
      featured: true,
      liveLink: "https://prakritimitra.me",
      githubLink: "https://github.com/PrakritiMitra/PrakritiMitra",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      title: "SPMS@IIITP - Student Project Management at IIIT Pune",
      description: "Academic project management platform for IIIT Pune with group formation, faculty allocation, and real-time collaboration features.",
      longDescription: "Dynamic faculty allocation system, role-specific dashboards, Socket.io chat, and complete project lifecycle tracking.",
      image: "/assets/projects/spms.png",
      technologies: ["React", "Node.js", "MySQL", "Socket.IO", "JWT", "Tailwind CSS"],
      category: "fullstack",
      featured: true,
      liveLink: "https://student-project-management.onrender.com/",
      githubLink: "https://github.com/Amrut00/Student-Project-Management",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 3,
      title: "Budget Buddy",
      description: "Personal finance tracking application with transaction management, smart budgeting, and analytics.",
      longDescription: "Comprehensive money management with multiple account types, budget tracking, transfer functionality, and beautiful data visualization.",
      image: "/assets/projects/budget-buddy.png",
      technologies: ["React", "Node.js", "MongoDB", "Zustand", "JWT", "Tailwind CSS"],
      category: "fullstack",
      featured: false,
      liveLink: "https://budget-buddy-mu-wine.vercel.app/",
      githubLink: "https://github.com/Amrut00/Budget-Buddy",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "Multi-Service Dashboard with AWS Load Balancing",
      description: "Dynamic dashboard with automatic load balancing across AWS EC2 instances based on real-time traffic.",
      longDescription: "Real-time user tracking with automatic instance switching when thresholds are exceeded. Features Railway, Zomato, and Netflix dashboards.",
      image: "/assets/projects/ticket-booking-system.png",
      technologies: ["React", "Node.js", "Socket.IO", "AWS EC2", "AWS ALB", "Express"],
      category: "backend",
      featured: false,
      liveLink: "https://github.com/Amrut00/Ticket-Booking-System",
      githubLink: "https://github.com/Amrut00/Ticket-Booking-System",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio with stunning animations, glassmorphism design, and performance-optimized interactions.",
      longDescription: "Showcases projects with GPU-accelerated animations, smooth scrolling, floating particles, gradient effects, and responsive design.",
      image: "/assets/projects/portfolio.png",
      technologies: ["React", "Vite", "Framer Motion", "Tailwind CSS", "React Scroll"],
      category: "frontend",
      featured: false,
      liveLink: "https://amrutpathane.me",
      githubLink: "https://github.com/Amrut00/Amrut-Portfolio-Website",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "fullstack", label: "Full Stack", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "backend", label: "Backend", icon: Code2 },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 py-20"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-20px) translateZ(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1) translateZ(0); }
          50% { opacity: 0.6; transform: scale(1.2) translateZ(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateZ(0); }
          100% { transform: translateX(100%) translateZ(0); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0px) translateZ(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-30px) translateZ(0); opacity: 0; }
        }
        
        .gpu-accelerated {
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          transform: translateY(-12px);
        }

        .project-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl"
          style={{ animation: 'gradient-shift 20s ease infinite' }}
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
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
              My Work
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 8s ease infinite'
              }}
            >
              Featured Projects
            </span>
        </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Showcasing my best work in web development, from full-stack applications to creative frontend experiences.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/50 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
              />
              Featured Work
            </motion.h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
              key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="project-card group relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  
                  {/* Card */}
                  <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover project-image"
                      />
                      {/* Subtle white overlay - not too bright */}
                      <div className="absolute inset-0 bg-black/10" />
                      
                      {/* Tech tags floating on image */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm text-cyan-400 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm text-slate-400 border border-slate-700">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {project.longDescription}
                      </p>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 text-slate-300 font-semibold border border-slate-700 hover:border-slate-600 hover:text-white transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects - Grid */}
        {regularProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" 
                style={{ animation: 'pulse-glow 2s ease-in-out infinite', animationDelay: '0.5s' }}
              />
              {filter === "all" ? "More Projects" : "Projects"}
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <motion.div
              key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="project-card group relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                  
                  {/* Card */}
                  <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover project-image"
                      />
                      {/* Subtle dark overlay */}
                      <div className="absolute inset-0 bg-black/20" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
              </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                    <span
                            key={idx}
                            className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex-1 justify-center"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm font-semibold border border-slate-700 hover:border-slate-600 hover:text-white transition-all flex-1 justify-center"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                </div>
              </div>
            </div>
                </motion.div>
          ))}
        </div>
      </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Code2 className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* More Coming Soon - Compact */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12 mb-8"
          >
            <a
              href="https://github.com/Amrut00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/70 transition-all group cursor-pointer"
            >
              {/* GitHub icon */}
              <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              
              {/* Text */}
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                View More on GitHub
              </span>
              
              {/* Arrow icon */}
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        )}

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Projects;
