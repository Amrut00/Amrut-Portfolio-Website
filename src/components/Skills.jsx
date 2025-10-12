import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Wrench, 
  Palette, 
  Server,
  Sparkles,
  Zap,
  Layers,
  Users
} from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 1,
      category: "Frontend Development",
      icon: Palette,
      gradient: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-400",
      skills: [
        { name: "React.js", level: 95, color: "from-purple-500/20 to-violet-500/20" },
        { name: "HTML / CSS / JavaScript (ES6+)", level: 93, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Tailwind CSS", level: 92, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Framer Motion", level: 88, color: "from-purple-500/20 to-violet-500/20" },
        { name: "React Router / Context API", level: 90, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Responsive Design", level: 94, color: "from-purple-500/20 to-violet-500/20" },
      ],
    },
    {
      id: 2,
      category: "Backend Development",
      icon: Server,
      gradient: "from-violet-500 to-purple-600",
      iconColor: "text-violet-400",
      skills: [
        { name: "Node.js", level: 93, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Express.js", level: 91, color: "from-purple-500/20 to-violet-500/20" },
        { name: "RESTful APIs", level: 95, color: "from-purple-500/20 to-violet-500/20" },
        { name: "JWT Authentication", level: 90, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Session & Role-based Access", level: 88, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Socket.io (Real-time)", level: 84, color: "from-purple-500/20 to-violet-500/20" },
      ],
    },
    {
      id: 3,
      category: "Database & Storage",
      icon: Database,
      gradient: "from-pink-500 to-rose-600",
      iconColor: "text-pink-400",
      skills: [
        { name: "MongoDB", level: 92, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Mongoose ODM", level: 89, color: "from-purple-500/20 to-violet-500/20" },
        { name: "MySQL", level: 83, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Firebase", level: 85, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Data Modeling", level: 88, color: "from-purple-500/20 to-violet-500/20" },
      ],
    },
    {
      id: 4,
      category: "DevOps & Tools",
      icon: Wrench,
      gradient: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-400",
      skills: [
        { name: "Git & GitHub", level: 95, color: "from-purple-500/20 to-violet-500/20" },
        { name: "VS Code / Postman", level: 93, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Netlify / Vercel / Render", level: 90, color: "from-purple-500/20 to-violet-500/20" },
        { name: "Linux / Command Line", level: 85, color: "from-purple-500/20 to-violet-500/20" },
        { name: "API Testing & Debugging", level: 87, color: "from-purple-500/20 to-violet-500/20" },
      ],
    },
  ];

  const additionalSkills = [
    { name: "Team Leadership", icon: Users, color: "text-blue-400" },
    { name: "Problem Solving", icon: Sparkles, color: "text-cyan-400" },
    { name: "UI/UX Design", icon: Palette, color: "text-pink-400" },
    { name: "Code Review & Optimization", icon: Code2, color: "text-emerald-400" },
    { name: "Agile / Project Management", icon: Zap, color: "text-yellow-400" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 py-20"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-10px) translateZ(0); }
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
        
        @keyframes fill-bar {
          from { width: 0%; }
          to { width: var(--target-width); }
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

        .skill-bar {
          animation: fill-bar 1.5s ease-out forwards;
        }

        .skill-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-card:hover {
          transform: translateY(-8px);
        }

        .skill-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-item:hover {
          transform: translateX(8px);
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
              My Expertise
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 8s ease infinite'
              }}
            >
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: categoryIndex * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="skill-card group relative"
              style={{
                willChange: 'opacity, transform',
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              
              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.08 + skillIndex * 0.03,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="skill-item"
                      style={{
                        willChange: 'opacity, transform',
                      }}
                      onMouseEnter={() => setHoveredSkill(`${category.id}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-200 font-semibold">{skill.name}</span>
                        <span className={`text-sm font-bold ${
                          hoveredSkill === `${category.id}-${skillIndex}` 
                            ? 'text-cyan-400' 
                            : 'text-slate-500'
                        } transition-colors`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-slate-800/40 rounded-full overflow-hidden border border-slate-700/20">
                        <motion.div
                          className={`h-full rounded-full relative overflow-hidden bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: categoryIndex * 0.08 + skillIndex * 0.03, 
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          style={{
                            willChange: 'width',
                            transform: 'translateZ(0)',
                            WebkitTransform: 'translateZ(0)',
                          }}
                        >
                          {/* Enhanced shimmer effect for visibility */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                            style={{ 
                              animation: 'shimmer 2s infinite',
                              transform: 'translateZ(0)',
                              WebkitTransform: 'translateZ(0)',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="relative"
          style={{
            willChange: 'opacity, transform',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">
              Additional Expertise
            </h3>
            <p className="text-slate-400">
              Soft skills and methodologies I excel at
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.03,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
                style={{
                  willChange: 'opacity, transform',
                }}
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                
                {/* Badge */}
                <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all">
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  <span className="text-slate-200 font-semibold">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "20+", icon: Code2, color: "from-cyan-500 to-blue-600" },
            { label: "Years Experience", value: "2+", icon: Sparkles, color: "from-violet-500 to-purple-600" },
            { label: "Projects Built", value: "15+", icon: Layers, color: "from-pink-500 to-rose-600" },
            { label: "Lines of Code", value: "50K+", icon: Zap, color: "from-emerald-500 to-teal-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
              
              {/* Stat Card */}
              <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Skills;
