import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const bgImages = [
    '/images/aiims.jpeg',
    '/images/aiims-2.jpeg',
    '/images/gov-college.jpg'
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-100 text-slate-900 min-h-[85vh] flex items-center border-b border-sky-200">

      {/* Background Image Carousel Slider - High Visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBgIndex}
            src={bgImages[currentBgIndex]}
            alt="AIIMS Hospital Project Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback path check
              if (currentBgIndex === 0) e.target.src = '/aiims.jpeg';
              if (currentBgIndex === 1) e.target.src = '/aiims-2.jpeg';
            }}
          />
        </AnimatePresence>
      </div>

      {/* Balanced Light Overlay for High Image Visibility + Sharp Text Contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 via-slate-50/15 to-white/25 backdrop-blur-[1px]" />
      <div className="absolute inset-0 z-0 bg-sky-900/10 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo Badge Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 border border-sky-300 shadow-md backdrop-blur-md mb-8"
          >
            <img src="/logo.png" alt="Logo" className="h-7 w-auto object-contain" />
            <span className="text-xs font-bold text-sky-950 font-['Space_Grotesk']">
              M/s AS Medical Infra Pvt. Ltd. (Formerly Crescent Care)
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl text-white text-shadow-sm text-shadow-black font-extrabold tracking-tight text-slate-950 leading-tight font-['Outfit'] drop-shadow-xs"
          >
            Turnkey Healthcare Infrastructure & <span className="text-gradient-blue text-blue-700 text-shadow-xs">Surgical Engineering</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Premier healthcare engineering contractor specializing in Modular Operation Theatres (MOT),
            Medical Gas Pipeline Systems (MGPS), Cleanroom HVAC, and full clinical MEP construction for projects up to <span className="font-extrabold text-blue-800">₹160 Million</span>.
          </motion.p>

          {/* Router Links CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 text-white hover:from-blue-800 hover:to-sky-700 transition-all shadow-lg shadow-blue-600/30 text-center"
            >
              View Completed Projects
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold rounded-xl bg-white/90 text-slate-900 border border-sky-300 hover:bg-white transition-all shadow-sm backdrop-blur-md text-center"
            >
              Engineering Capabilities
            </Link>
            <Link
              to="/tender"
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold rounded-xl text-blue-800 hover:text-blue-950 transition-all text-center bg-sky-100/70 border border-sky-200"
            >
              Direct RFP Submission →
            </Link>
          </motion.div>

        </div>

        {/* Revealed Flagship Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl bg-white/95 border border-sky-300 shadow-lg backdrop-blur-md"
          >
            <div className="text-xs uppercase font-mono tracking-wider text-sky-800 font-extrabold">Flagship Execution</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 font-['Outfit']">AIIMS Awantipora</div>
            <div className="mt-1 text-xs font-bold text-blue-700">₹160 Million Order • Kashmir</div>
            <p className="mt-3 text-xs text-slate-700 font-medium leading-relaxed">
              Girls Hostels & infrastructure development delivered under strict Himalayan weather constraints and high-level safety standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl bg-white/95 border border-sky-300 shadow-lg backdrop-blur-md"
          >
            <div className="text-xs uppercase font-mono tracking-wider text-sky-800 font-extrabold">Multispecialty Healthcare</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 font-['Outfit']">KALA Healthcare</div>
            <div className="mt-1 text-xs font-bold text-blue-700">₹140 Million Order • Dehradun</div>
            <p className="mt-3 text-xs text-slate-700 font-medium leading-relaxed">
              5,350 Sq.M covered area featuring turnkey hospital civil engineering, MOT complexes, and central life-support piping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-xl bg-white/95 border border-sky-300 shadow-lg backdrop-blur-md"
          >
            <div className="text-xs uppercase font-mono tracking-wider text-sky-800 font-extrabold">Medical Facilities</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 font-['Outfit']">48+ Institutional Clients</div>
            <div className="mt-1 text-xs font-bold text-blue-700">Pan-India Medical Footprint</div>
            <p className="mt-3 text-xs text-slate-700 font-medium leading-relaxed">
              Proven clinical delivery for government medical colleges, eye institutes, trauma centers, and private hospital chains.
            </p>
          </motion.div>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBgIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${currentBgIndex === idx ? 'w-8 bg-blue-700' : 'w-2.5 bg-slate-400 hover:bg-slate-600'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
