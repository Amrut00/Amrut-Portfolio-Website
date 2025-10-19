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
      className="relative min-h-screen py-10 px-6 bg-slate-950 overflow-hidden flex items-center"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
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
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" style={{ animation: 'spin 3s linear infinite' }} />
            <span className="text-cyan-400 text-sm font-semibold">Academic Contributions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
              <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all">
                {/* Type Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-300">
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
                  <Users className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm font-semibold mb-2">Authors</p>
                    <p className="text-slate-300 text-base leading-relaxed">
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
                    <BookOpen className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-1">Conference</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{pub.conference}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-1">Date</p>
                      <p className="text-slate-300 text-sm">{pub.date}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-1">Venue</p>
                      <p className="text-slate-300 text-sm">{pub.venue}</p>
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
                  <p className="text-slate-400 text-sm font-semibold mb-3">Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-cyan-500/50 transition-colors"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

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

