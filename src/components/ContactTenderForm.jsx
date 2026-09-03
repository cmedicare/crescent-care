import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function ContactTenderForm() {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    projectScope: '',
    budgetRange: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="tender" className="py-20 bg-slate-50 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Corporate Contact Information - Reveal from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Formal Tender Submissions</div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                Partner With AS Medical Infra
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                As we continue to expand healthcare infrastructure across India, we invite hospital developers, state medical corporations, and clinical architects to submit RFPs and tender invitations.
              </p>
            </div>

            {/* Registered Offices */}
            <div className="space-y-4 font-mono text-xs">
              <div className="theme-box p-4">
                <div className="uppercase text-[10px] font-bold text-sky-800">Marketing & Works Office</div>
                <div className="font-bold text-slate-900 text-sm mt-1 font-['Outfit']">{companyInfo.marketingOffice}</div>
                <div className="text-slate-600 mt-1 font-medium">Mobile: {companyInfo.phoneNumbers.join(' / ')}</div>
              </div>

              <div className="theme-box p-4">
                <div className="uppercase text-[10px] font-bold text-sky-800">Registered Head Office</div>
                <div className="font-bold text-slate-900 text-sm mt-1 font-['Outfit']">{companyInfo.headOffice}</div>
                <div className="text-slate-600 mt-1 font-medium">Email: {companyInfo.emails.join(' / ')}</div>
              </div>

              <div className="theme-box p-4 flex justify-between items-center">
                <div>
                  <div className="uppercase text-[10px] font-bold text-sky-800">Official Portals</div>
                  <div className="font-bold text-slate-900">{companyInfo.websites.join(' • ')}</div>
                </div>
                <span className="px-2.5 py-1 rounded badge-skyblue text-[10px] font-bold">
                  {companyInfo.instagram}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white text-xs shadow-md">
              <span className="font-bold block mb-1">Direct Managing Director Line:</span>
              Mr. Sandeep Tiwari (+91 9555202640) / Mr. Prithvi Singh for urgent institutional procurement.
            </div>
          </motion.div>

          {/* Form Area - Reveal from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 theme-box p-6 sm:p-8"
          >
            {submitted ? (
              <div className="p-8 rounded-xl bg-sky-50 border border-sky-200 text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-blue-600 text-white text-sm font-mono font-bold">
                  ✓ TENDER SUBMISSION TRANSMITTED
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">RFP Inquiry Successfully Recorded</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you for submitting your project parameters to M/s AS Medical Infra Pvt. Ltd. Our engineering procurement team led by Mr. Sandeep Tiwari will review your requirements and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Direct RFP & Project Inquiry</h3>
                  <span className="text-xs font-mono text-sky-700 font-bold">FORM REF: CC-RFP-2026</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Institution / Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AIIMS / Kala Healthcare / Govt Hospital"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Contact Person & Designation *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh / Chief Engineer"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@hospital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Mobile / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Project Site Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Dehradun / Awantipora / Patna"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Target Budget Tier</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹5 Cr - ₹15 Cr"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Project Scope & Engineering Specifications *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe required civil works, MOT count, MGPS piping, HVAC cleanroom requirements, or attach tender reference numbers..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1 font-bold">Additional Requirements / Notes</label>
                  <input
                    type="text"
                    placeholder="Execution timeframe constraints, architectural specifications..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-sky-50/50 border border-sky-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:from-blue-700 hover:to-sky-600 transition-all shadow-md shadow-sky-500/20"
                  >
                    Submit Formal RFP & Tender Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
