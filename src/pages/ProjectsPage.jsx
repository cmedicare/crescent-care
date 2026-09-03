import React from 'react';
import { motion } from 'framer-motion';
import ProjectShowcase from '../components/ProjectShowcase';
import ClientDirectory from '../components/ClientDirectory';

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-sky-950 text-white shadow-xl">
          <div className="text-xs uppercase font-mono tracking-widest text-sky-300 font-bold">Execution Directory</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 font-['Outfit']">
            Major Medical Projects & Pan-India Client Portfolio
          </h1>
          <p className="mt-3 text-sm text-sky-100 max-w-3xl leading-relaxed">
            Verified execution track record covering AIIMS Awantipora (₹160M), Kala Healthcare (₹140M), SH Hospital Rudrapur, Doon Govt Medical College, and 48+ clinical institutions across India.
          </p>
        </div>
      </motion.div>

      <ProjectShowcase />
      <ClientDirectory />
    </div>
  );
}
