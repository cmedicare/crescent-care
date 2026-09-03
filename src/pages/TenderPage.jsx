import React from 'react';
import { motion } from 'framer-motion';
import ContactTenderForm from '../components/ContactTenderForm';

export default function TenderPage() {
  return (
    <div className="pt-28 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-sky-950 text-white shadow-xl">
          <div className="text-xs uppercase font-mono tracking-widest text-sky-300 font-bold font-mono">Formal Submissions</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 font-['Outfit']">
            Tender Invitation & RFP Submission Portal
          </h1>
          <p className="mt-3 text-sm text-sky-100 max-w-3xl leading-relaxed">
            Direct communication portal with Managing Director Sandeep Tiwari and our engineering procurement team for hospital civil, MOT, and MGPS contracts.
          </p>
        </div>
      </motion.div>

      <ContactTenderForm />
    </div>
  );
}
