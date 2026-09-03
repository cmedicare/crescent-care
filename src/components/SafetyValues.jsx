import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function SafetyValues() {
  return (
    <section className="py-20 bg-slate-50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Company Philosophy & Values - Reveal from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Quality Inspection Protocol</div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                Quality-Centric Materials & Engineering Discipline
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We procure raw materials strictly from quality-driven manufacturers. Every component is inspected at our in-house quality testing unit prior to installation on site.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="theme-box p-4 flex items-start gap-3">
                <span className="font-extrabold text-blue-600 text-sm">01</span>
                <div>
                  <div className="font-bold text-slate-900 font-['Outfit'] text-sm">Full Planning & Architectural Design</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Comprehensive pre-construction blue-printing before shift execution.</div>
                </div>
              </div>

              <div className="theme-box p-4 flex items-start gap-3">
                <span className="font-extrabold text-blue-600 text-sm">02</span>
                <div>
                  <div className="font-bold text-slate-900 font-['Outfit'] text-sm">High-Performance Machinery</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Deploying latest heavy machinery, precision copper benders, and cleanroom sealers.</div>
                </div>
              </div>

              <div className="theme-box p-4 flex items-start gap-3">
                <span className="font-extrabold text-blue-600 text-sm">03</span>
                <div>
                  <div className="font-bold text-slate-900 font-['Outfit'] text-sm">Environmental Compliance</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Strict adherence to environmental rules, dust suppression, and legal mandates.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Guidelines Matrix - Reveal from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 theme-box p-6 sm:p-8 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-sky-100 pb-4">
              <div>
                <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Site Safety Protocol</div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Mandatory Safety Guidelines</h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full badge-blue">
                ZERO INCIDENT TARGET
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {companyInfo.safetyGuidelines.map((guideline, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-sky-50/70 border border-sky-100 text-xs text-slate-700 font-medium flex items-start gap-2.5">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-sky-100/60 border border-sky-200 text-[11px] flex items-center justify-between font-mono">
              <span className="text-sky-900 font-medium">Audited Compliance: Standard Construction Safety Code</span>
              <span className="font-bold text-blue-700">Active Site Inspections</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
