import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 border-t border-sky-200 text-xs font-mono py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-sky-100">
          
          {/* Col 1: Branding */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Crescent Care" className="h-9 w-auto object-contain" />
              <div>
                <div className="text-sm font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                  CRESCENT CARE
                </div>
                <div className="text-[10px] uppercase font-bold text-sky-800 font-['Space_Grotesk']">
                  AS MEDICAL INFRA
                </div>
              </div>
            </Link>
            <p className="text-[11px] leading-relaxed text-slate-600 font-sans font-medium">
              M/s AS Medical Infra Pvt. Ltd. (Formerly Crescent Care / Sunpride Construction Pvt. Ltd.). Leading healthcare infrastructure and turnkey surgical engineering contractor in India.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 font-['Outfit']">Quick Navigation</div>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link to="/" className="hover:text-sky-600"> Home Overview</Link></li>
              <li><Link to="/services" className="hover:text-sky-600"> Turnkey Engineering Services</Link></li>
              <li><Link to="/projects" className="hover:text-sky-600"> Major Hospital Projects</Link></li>
              <li><Link to="/about" className="hover:text-sky-600"> About & Executive Leadership</Link></li>
              <li><Link to="/tender" className="hover:text-sky-600"> Formal Tender RFP Request</Link></li>
            </ul>
          </div>

          {/* Col 3: Flagship Executions */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 font-['Outfit']">Flagship Executions</div>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              <li>• AIIMS Awantipora (₹160M)</li>
              <li>• KALA Healthcare (₹140M)</li>
              <li>• SH Hospital Rudrapur (6,500 Sq.M)</li>
              <li>• Doon Govt. Medical College</li>
              <li>• Akhand Jyoti Eye Hospital (15 OTs)</li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-2 font-['Outfit']">Corporate Office</div>
            <div className="text-[11px] leading-relaxed text-slate-600 font-sans font-medium">
              D217, LG Floor, Deoli, New Delhi - 110062<br />
              Tel: +91 9555202640 / +91 9953987881<br />
              Email: asmedicalinfra@gmail.com
            </div>
            <div className="pt-2">
              <Link
                to="/tender"
                className="inline-block px-3.5 py-2 rounded-lg bg-blue-600 text-white font-bold text-[11px] hover:bg-blue-700 transition-colors shadow-xs"
              >
                Submit Formal RFP →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} M/s AS Medical Infra Pvt. Ltd. All rights reserved. Registered under Indian Companies Act.
          </div>
          <div className="flex items-center gap-4 font-bold text-sky-800">
            <span>Quality Inspection Unit Certified</span>
            <span>•</span>
            <span>ISO Compliant Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
