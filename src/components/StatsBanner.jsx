import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function StatsBanner() {
  return (
    <section className="py-12 border-y border-sky-100 bg-sky-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
          {companyInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-white border border-sky-200 shadow-xs hover:border-sky-300 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-black font-['Space_Grotesk'] text-blue-700 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-500 line-clamp-1">
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Growth Trajectory Strip */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 pt-6 border-t border-sky-200/80 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold text-sky-800 tracking-wider">Financial Progression:</span>
            <div className="flex items-center gap-4 text-xs font-mono">
              {companyInfo.turnoverHistory.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-slate-500">{t.year}:</span>
                  <span className="font-bold text-blue-700">{t.value}</span>
                  {idx < companyInfo.turnoverHistory.length - 1 && <span className="text-sky-300">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Official Work Orders Executed Under Full Quality Inspection Units
          </div>
        </motion.div>

      </div>
    </section>
  );
}
