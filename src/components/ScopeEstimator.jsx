import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiLayers, FiMaximize2, FiCheckCircle } from 'react-icons/fi';

export default function ScopeEstimator() {
  const scopeBenchmarks = [
    {
      title: "Government Medical College Standard",
      scale: "150 - 300 Bed Capacity",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      coveredArea: "15,000+ Sq. Meters",
      motUnits: "5 - 12 Modular OTs",
      mgpsPiping: "Central Gas Piping & Liquid Oxygen Manifold",
      hvacCleanroom: "Laminar Airflow & HEPA Cleanroom Units",
      avgTimeline: "18 - 24 Months Execution",
      benchmarkProject: "AIIMS Awantipora & Doon Govt Medical College"
    },
    {
      title: "Multispecialty Hospital Standard",
      scale: "75 - 150 Bed Capacity",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
      coveredArea: "5,350 - 6,500 Sq. Meters",
      motUnits: "3 - 6 Modular OTs",
      mgpsPiping: "Oxygen, Vacuum & Digital Alarm Consoles",
      hvacCleanroom: "Sub-zero Cleanroom Air Handling Units",
      avgTimeline: "12 - 18 Months Execution",
      benchmarkProject: "KALA Healthcare & SH Hospital Rudrapur"
    },
    {
      title: "Specialty Eye & Surgical Center",
      scale: "High-Volume Surgical Block",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      coveredArea: "3,000 - 4,500 Sq. Meters",
      motUnits: "9 - 15 Modular OTs",
      mgpsPiping: "Dedicated Surgical Piping & Bedhead Consoles",
      hvacCleanroom: "Sterile Ophthalmic Cleanroom Environment",
      avgTimeline: "9 - 12 Months Execution",
      benchmarkProject: "Akhand Jyoti Eye Hospital & Kumar Sanskriti"
    }
  ];

  return (
    <section id="estimator" className="py-24 bg-slate-50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Reveal from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-14"
        >
          <div className="text-xs uppercase font-mono tracking-widest text-blue-700 font-bold bg-sky-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Institutional Standards
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Project Delivery Benchmarks & Specifications
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-700 font-medium leading-relaxed">
            Standardized execution metrics and engineering benchmarks derived from completed healthcare contracts across India.
          </p>
        </motion.div>

        {/* Revealed Static Benchmark Cards - Reveal from Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scopeBenchmarks.map((benchmark, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="theme-box overflow-hidden flex flex-col justify-between bg-white border-2 border-sky-100 hover:border-sky-300 shadow-lg"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-sky-100">
                  <img
                    src={benchmark.image}
                    alt={benchmark.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white badge-blue px-3 py-1 rounded-md shadow-xs">
                      {benchmark.scale}
                    </span>
                    <span className="text-[11px] font-mono text-sky-200 font-bold bg-slate-900/80 px-2 py-0.5 rounded border border-sky-400/40">
                      BENCHMARK
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
                    {benchmark.title}
                  </h3>

                  <div className="mt-6 space-y-3 font-mono text-xs sm:text-sm text-slate-800">
                    <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 flex items-center gap-3">
                      <FiMaximize2 className="text-blue-700 w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-[10px] text-sky-900 uppercase font-bold">Covered Area</div>
                        <div className="font-extrabold text-slate-900 text-sm mt-0.5">{benchmark.coveredArea}</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 flex items-center gap-3">
                      <FiActivity className="text-blue-700 w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-[10px] text-sky-900 uppercase font-bold">Modular Operation Theatres</div>
                        <div className="font-extrabold text-blue-700 text-sm mt-0.5">{benchmark.motUnits}</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 flex items-center gap-3">
                      <FiLayers className="text-blue-700 w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-[10px] text-sky-900 uppercase font-bold">Life Support Systems</div>
                        <div className="font-bold text-slate-800 mt-0.5">{benchmark.mgpsPiping}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-sky-100 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-700 font-semibold">
                  <FiClock className="text-sky-700 w-4 h-4" />
                  <span>Schedule: <strong className="text-slate-900">{benchmark.avgTimeline}</strong></span>
                </div>
                <div className="text-[11px] font-mono text-blue-800 font-bold truncate">
                  Reference: {benchmark.benchmarkProject}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Standard Guarantee Note */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-sky-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
              <FiCheckCircle className="w-4 h-4 text-sky-400" />
              <span>Full Quality Inspection Standard</span>
            </div>
            <div className="text-base sm:text-xl font-bold font-['Outfit']">
              In-House Material Inspection Unit • Guaranteed Timelines • Certified Engineers
            </div>
          </div>
          <Link
            to="/tender"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs sm:text-sm hover:from-blue-700 hover:to-sky-600 transition-all shadow-md shrink-0 text-center"
          >
            Submit Tender Request →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
