import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, MapPin, Calendar, FileText, Sparkles } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Usability Evaluation of a Project-Based Learning Management System at IIIT Pune",
      authors: "Amrut Pathane, Anurag Kawade, Omkar Dhumal, Mohd Samar Bin Mahtab, Priya Jadhav, Shrikant Salve",
      conference: "INTERACT 2025 – HCI Education and Education for HCI",
      publicationType: "Position Paper (Springer LNCS)",
      date: "September 9, 2025",
      venue: "Belo Horizonte, Brazil (Attended Online)",
      keywords: [
        "Human–Computer Interaction",
        "Project-Based Learning",
        "Usability Evaluation",
        "Educational Technology"
      ],
      gradient: "from-cyan-500 via-blue-600 to-purple-700",
    }
  ];

  return (
    <section
      id="publications"
      className="relative min-h-screen py-10 px-6 overflow-hidden flex items-center"
      style={{ backgroundColor: 'var(--bg-slate-950)' }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-pattern)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-pattern)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Grid fade overlays - Top and Bottom */}
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ 
          background: 'linear-gradient(to bottom, var(--bg-slate-950), transparent)'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ 
          background: 'linear-gradient(to top, var(--bg-slate-950), transparent)'
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: 'var(--particle-white)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 animate-spin-slow" style={{ color: 'var(--color-cyan-400)', animation: 'spin 3s linear infinite' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--color-cyan-400)' }}>Academic Contributions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Publications & Research
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-slate-400)' }}>
            Peer-reviewed research in HCI and Educational Technology
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${pub.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Publication Card */}
              <div className="relative backdrop-blur-xl rounded-2xl p-6 md:p-8 transition-all"
                style={{ 
                  backgroundColor: 'var(--bg-slate-900-70)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'var(--border-slate-800)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-slate-700)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-slate-800)'}
              >
                {/* Type Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4"
                >
                  <FileText className="w-4 h-4" style={{ color: 'var(--color-cyan-400)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-slate-300)' }}>
                    {pub.publicationType}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r ${pub.gradient} bg-clip-text text-transparent leading-tight`}
                >
                  {pub.title}
                </motion.h3>

                {/* Authors */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-3 mb-5"
                >
                  <Users className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-cyan-400)' }} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-slate-400)' }}>Authors</p>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-slate-300)' }}>
                      {pub.authors}
                    </p>
                  </div>
                </motion.div>

                {/* Conference & Date Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid md:grid-cols-3 gap-5 mb-5"
                >
                  {/* Conference */}
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-purple-400)' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-slate-400)' }}>Conference</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-slate-300)' }}>{pub.conference}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-400)' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-slate-400)' }}>Date</p>
                      <p className="text-sm" style={{ color: 'var(--text-slate-300)' }}>{pub.date}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-pink-400)' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-slate-400)' }}>Venue</p>
                      <p className="text-sm" style={{ color: 'var(--text-slate-300)' }}>{pub.venue}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Keywords */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-slate-400)' }}>Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm transition-colors"
                        style={{ 
                          backgroundColor: 'var(--bg-slate-800-50)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-slate-700)',
                          color: 'var(--text-slate-300)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-cyan-50)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-slate-700)'}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to top, var(--bg-slate-950), transparent)'
        }}
      />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Publications;

