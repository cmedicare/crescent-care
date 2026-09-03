import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';
import { FaMapPin } from 'react-icons/fa6';

export default function ClientDirectory() {
  // Group clients by geographic region for clear corporate presentation
  const regionalGroups = [
    {
      region: "Delhi & NCR Region",
      icon: <FaMapPin />,
      clients: companyInfo.clientDirectory.filter(c => c.location.includes('Delhi') || c.location.includes('Noida') || c.location.includes('Faridabad') || c.location.includes('Ghaziabad') || c.location.includes('Gurugram') || c.location.includes('Sohna'))
    },
    {
      region: "Uttarakhand & Northern Belt",
      icon: <FaMapPin />,
      clients: companyInfo.clientDirectory.filter(c => c.location.includes('UK') || c.location.includes('Dehradun') || c.location.includes('Rohtak') || c.location.includes('HP') || c.location.includes('Chandigarh') || c.location.includes('Kangra'))
    },
    {
      region: "Bihar & Eastern Belt",
      icon: <FaMapPin />,
      clients: companyInfo.clientDirectory.filter(c => c.location.includes('Bihar') || c.location.includes('Patna') || c.location.includes('Chapra') || c.location.includes('Jharkhand') || c.location.includes('Giridih') || c.location.includes('Darbhanga') || c.location.includes('Gaya'))
    },
    {
      region: "Uttar Pradesh & Rajasthan",
      icon: <FaMapPin />,
      clients: companyInfo.clientDirectory.filter(c => c.location.includes('UP') || c.location.includes('Bareilly') || c.location.includes('Jhansi') || c.location.includes('Varanasi') || c.location.includes('RJ') || c.location.includes('Sikar') || c.location.includes('Jaipur') || c.location.includes('Mathura'))
    },
    {
      region: "North-East & Other States",
      icon: <FaMapPin />,
      clients: companyInfo.clientDirectory.filter(c => c.location.includes('Mizoram') || c.location.includes('Aizawl'))
    }
  ];

  // Marquee items for top infinite ticker
  const marqueeClients = [
    "AIIMS Awantipora (₹160M)",
    "KALA Healthcare Dehradun (₹140M)",
    "Doon Govt. Medical College & Research Center",
    "Akhand Jyoti Eye Hospital (15 Modular OTs)",
    "Kumar Sanskriti Hospital (9 Modular OTs)",
    "SH Hospital Rudrapur (6,500 Sq.M)",
    "Apollo Clinic Faridabad",
    "Yatharth Hospital Greater Noida",
    "Ruban Multispeciality Hospital Patna",
    "KD Medical College Mathura",
    "Indus Hospital Chandigarh",
    "Greenwood Hospital Aizawl",
    "Sadar Hospital Jhansi"
  ];

  return (
    <section id="clients" className="py-20 bg-sky-50/40 border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Reveal from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase font-mono tracking-widest text-sky-700 font-bold">Pan-India Footprint</div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Respected Healthcare Institutions & Clients ({companyInfo.clientDirectory.length}+ Facilities)
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium">
            M/s AS Medical Infra has completed turnkey medical construction, Modular OT installations, and MGPS networks for leading government & private hospitals across India.
          </p>
        </motion.div>

        {/* Smooth Marquee Banner Ticker */}
        <div className="mb-14 p-4 rounded-xl bg-white border border-sky-200 shadow-xs overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 shrink-0 px-3 py-1 rounded-md badge-skyblue">
              High Profile Clients
            </span>
            <div className="overflow-hidden whitespace-nowrap w-full">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-6 text-xs font-mono font-bold text-slate-800"
              >
                {[...marqueeClients, ...marqueeClients].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-sky-500">❖</span>
                    <span>{item}</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Regional Grouped Cards Grid - Reveal from Right */}
        <div className="space-y-10">
          {regionalGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="theme-box p-6 sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-sky-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-base">{group.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                    {group.region}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full badge-skyblue">
                  {group.clients.length} Executed Facilities
                </span>
              </div>

              {/* Grid of Client Cards inside Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.clients.map((client) => (
                  <div
                    key={client.id}
                    className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 hover:border-sky-300 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold mb-1.5">
                        <span>REF #{String(client.id).padStart(2, '0')}</span>
                        <span className="text-sky-700">{client.location}</span>
                      </div>
                      <div className="text-sm font-extrabold text-slate-900 font-['Outfit'] leading-snug">
                        {client.name}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-sky-100/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-semibold text-blue-700">
                        {client.scope}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Footer Badge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 rounded-xl bg-white border border-sky-200 shadow-xs text-center font-mono text-xs text-slate-600"
        >
          <span className="font-bold text-slate-900">Registered Corporate Work Orders:</span> All medical facility developments executed under full quality inspection unit protocols & certified engineer supervision.
        </motion.div>

      </div>
    </section>
  );
}
