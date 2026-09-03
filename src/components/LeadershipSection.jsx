import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-sky-50/50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title - Reveal from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Executive Leadership</div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Management & Engineering Leadership
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium">
            12+ years of specialized experience in healthcare civil engineering, project scheduling, structural safety, and clinical client satisfaction.
          </p>
        </motion.div>

        {/* Managing Directors Cards - Reveal from Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {companyInfo.leadership.filter(l => l.role.includes('Managing Director')).map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="theme-box p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-sky-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">{leader.name}</h3>
                  <div className="text-xs font-mono text-sky-700 font-semibold mt-0.5">{leader.role}</div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full badge-skyblue">
                  {leader.experience}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Team & Consultants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Key Engineering Team */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 theme-box p-6 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-sky-800 font-bold pb-2 border-b border-sky-100">
              Technical & Administrative Management
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {companyInfo.keyTeam.map((member, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-sky-50/70 border border-sky-100">
                  <div className="text-xs font-bold text-slate-900 font-['Outfit']">{member.name}</div>
                  <div className="text-[11px] font-mono text-slate-500">{member.role}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MEP Engineering Consultants */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 theme-box p-6 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-sky-800 font-bold pb-2 border-b border-sky-100">
              Retained MEP Engineering Consultants
            </div>

            <div className="space-y-4">
              {companyInfo.mepConsultants.map((consultant, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-sky-50/70 border border-sky-100 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900 font-['Outfit']">{consultant.name}</span>
                    <span className="font-mono text-sky-800 font-semibold">{consultant.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {consultant.services.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded badge-skyblue">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
