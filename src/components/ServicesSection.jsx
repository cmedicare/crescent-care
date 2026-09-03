import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';

export default function ServicesSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Reveal from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Core Capabilities</div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Turnkey Healthcare & Surgical Engineering Services
            </h2>
          </div>

          {/* React-Icons Arrow Buttons */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3.5 rounded-full bg-white border border-sky-200 text-sky-800 hover:bg-sky-50 shadow-xs transition-colors flex items-center justify-center text-lg cursor-pointer"
              title="Scroll Left"
              aria-label="Scroll Left"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-colors flex items-center justify-center text-lg cursor-pointer"
              title="Scroll Right"
              aria-label="Scroll Right"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scrollable Services Cards Carousel - Reveal from Right */}
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-6 snap-x snap-mandatory py-4 no-scrollbar scroll-smooth"
        >
          {companyInfo.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] sm:w-[420px] lg:w-[460px] shrink-0 snap-start theme-box overflow-hidden flex flex-col justify-between bg-white border-2 border-sky-100 hover:border-sky-300 shadow-md"
            >
              <div>
                {/* Unsplash Image Banner */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-sky-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white badge-blue px-3 py-1 rounded-md shadow-sm">
                      {service.category}
                    </span>
                    <span className="text-[11px] font-mono text-sky-200 font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-sky-400/40">
                      ISO CERTIFIED
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 pt-4 border-t border-sky-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-900 uppercase font-mono">Key Deliverables:</div>
                    <div className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-bold">Standards: NABH / ISO 13485</span>
                <span className="font-extrabold text-blue-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  Turnkey Execution
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
