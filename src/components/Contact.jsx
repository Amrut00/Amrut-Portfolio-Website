import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  Check
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = 'service_i422kyd';
    const templateId = 'template_ifoh8x8';
    const publicKey = 'kOjtAAtc4RFujkS4o';
    
    // Template params matching your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'New Portfolio Contact', // For the subject line
    };
    
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("Email sent successfully!");
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);
      alert("Failed to send message. Please try again or contact me directly at pathaneamrut@gmail.com");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pathaneamrut@gmail.com",
      link: "mailto:pathaneamrut@gmail.com",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8600947412",
      link: "tel:+918600947412",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      link: "#",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      link: "https://github.com/Amrut00",
      color: "hover:text-slate-200"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      link: "https://www.linkedin.com/in/amrut-pathane/",
      color: "hover:text-blue-400"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      link: "https://www.instagram.com/amrut_ap7_/",
      color: "hover:text-pink-400"
    },
  ];

  return (
    <section
      id="contact"
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
        
        .gpu-accelerated {
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .input-focus {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-focus:focus {
          transform: translateY(-2px);
        }

        .success-checkmark {
          animation: scale-up 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes scale-up {
          0% { transform: scale(0) rotate(0deg) translateZ(0); }
          50% { transform: scale(1.2) rotate(180deg) translateZ(0); }
          100% { transform: scale(1) rotate(360deg) translateZ(0); }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0px) translateZ(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-30px) translateZ(0); opacity: 0; }
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
              Let's Connect
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 8s ease infinite'
              }}
            >
          Get In Touch
            </span>
        </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative block"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                  
                  {/* Card */}
                  <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} shadow-lg`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                  style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                />
                Connect With Me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`p-4 rounded-xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-slate-700 text-slate-400 ${social.color} transition-colors duration-300`}
                    style={{
                      transformOrigin: 'center',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              
              <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Available for work</p>
                    <p className="text-slate-400 text-sm">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              
              {/* Form Container */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-slate-300 font-semibold mb-3">
                        Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                        placeholder="John Doe"
                        className="input-focus w-full px-5 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
              />
            </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-slate-300 font-semibold mb-3">
                        Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                        placeholder="john@example.com"
                        className="input-focus w-full px-5 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500"
              />
            </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-slate-300 font-semibold mb-3">
                        Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                        rows="6"
                        placeholder="Tell me about your project..."
                        className="input-focus w-full px-5 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-500 resize-none"
              ></textarea>
            </div>

                    {/* Submit Button */}
                    <motion.button
              type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative group/btn overflow-hidden rounded-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-100 group-hover/btn:opacity-90 transition-opacity rounded-xl"
                        style={{
                          backgroundSize: '200% 200%',
                          animation: 'gradient-shift 8s ease infinite'
                        }}
                      />
                      
                      {/* Shimmer */}
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                          style={{ animation: 'shimmer 2s infinite' }}
                        />
                      </div>

                      <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-lg rounded-xl">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Send className="w-5 h-5" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
              Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </span>
                    </motion.button>
          </form>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="success-checkmark mb-6 p-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30">
                      <Check className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 text-center max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
          </div>
        </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm">
            © 2024 Amrut Pathane.
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Contact;
