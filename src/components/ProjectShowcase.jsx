import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';

export default function ProjectShowcase() {
  const scrollRef = useRef(null);

  // Local image mapping for major project cards
  const projectImages = [
    '/images/aiims.jpeg',
    '/images/gov-college.jpg',
    '/images/eye.webp',
    '',
    '',
    ''
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
    <section id="projects" className="py-20 bg-sky-50/50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title with Arrow Controls - Reveal from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div className="max-w-3xl">
            <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Execution Portfolio</div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Flagship Hospital & Medical Infrastructure Projects
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium">
              Proven track record of delivering complex healthcare civil & MEP contracts across India within agreed timelines and budgets.
            </p>
          </div>

          {/* React-Icons Arrow Navigation Buttons */}
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

        {/* Horizontal Scrollable Projects Carousel - Reveal from Left */}
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-6 snap-x snap-mandatory py-4 no-scrollbar scroll-smooth"
        >
          {companyInfo.majorProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] sm:w-[400px] lg:w-[440px] shrink-0 snap-start theme-box overflow-hidden bg-white border-2 border-sky-100 hover:border-sky-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b border-sky-100">
                  <img
                    src={projectImages[idx % projectImages.length]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 bg-blue-100"
                    onError={(e) => {
                      e.target.src = '/images/aiims.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-bold mb-2">
                    <span>{project.location}</span>
                    <span className="text-blue-700 font-extrabold">{project.value}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit'] leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-mono text-slate-500 font-semibold">
                    Client: <span className="text-slate-800">{project.client}</span>
                  </p>

                  <div className="mt-6 pt-4 border-t border-sky-100 space-y-2">
                    <div className="text-xs font-bold text-slate-900 uppercase font-mono">Highlights:</div>
                    <ul className="space-y-1.5">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                          <span className="text-blue-600 shrink-0 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-bold">Execution Status</span>
                <span className="font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                  Certified Quality
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
