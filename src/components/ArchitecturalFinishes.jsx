import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';

export default function ArchitecturalFinishes() {
  const scrollRef = useRef(null);

  // Clinical & Hospital Grade Unsplash Images (No residential/home photos)
  const categoryImages = [
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  ];

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
    <section id="finishes" className="py-20 bg-slate-50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Reveal from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div className="max-w-3xl">
            <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Material & Finish Engineering</div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Luxury Healthcare Interiors & Surgical Finishes
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Enhancing patient healing environment, clinical hygiene standards, acoustic treatment, and architectural distinction.
            </p>
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

        {/* Horizontal Scrollable Cards Carousel - Reveal from Right */}
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-6 snap-x snap-mandatory py-4 no-scrollbar scroll-smooth"
        >
          {companyInfo.architecturalFinishes.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] sm:w-[400px] lg:w-[440px] shrink-0 snap-start theme-box overflow-hidden bg-white border-2 border-sky-100 hover:border-sky-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Hospital Image Banner Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b border-sky-100">
                  <img
                    src={categoryImages[idx % categoryImages.length]}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/aiims.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white badge-blue px-3 py-1 rounded-md shadow-xs">
                      HOSPITAL GRADE
                    </span>
                    <span className="text-[11px] font-mono text-sky-200 font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-sky-400/40">
                      INTERIORS
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-sky-100 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">{category.title}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between">
                        <span>{item}</span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded badge-skyblue">
                          APPROVED
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-500 font-bold">
                <span>Standard: Clinical Grade</span>
                <span className="text-blue-700">ISO Certified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Material Note */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border-2 border-sky-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase text-sky-800 font-extrabold">Certified Supply & Installation Partners</div>
            <div className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
              Hikom International • Jindal Meditech • Hygine Airtech • Maxflow • Tarkett / Gerflor
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 max-w-md text-right font-medium">
            Full compliance with pharmaceutical cold room puff paneling, anti-static conductive floors, and hermetic lead-shielded doors.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
