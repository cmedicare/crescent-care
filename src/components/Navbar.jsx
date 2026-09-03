import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Engineering Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About & Leadership' },
    { path: '/tender', label: 'Tender RFP' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-sky-100 py-2.5 shadow-md shadow-sky-500/5'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Link to Home */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-lg bg-white p-1 border border-sky-200 shadow-xs group-hover:border-sky-400 transition-colors">
              <img
                src="/logo.png"
                alt="Crescent Care Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            {/* <div>
              <div className="text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-2 font-['Outfit']">
                CRESCENT CARE
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded badge-skyblue">
                  AS MEDICAL INFRA
                </span>
              </div>
              <div className="text-[11px] font-semibold text-sky-700 tracking-wider font-['Space_Grotesk']">
                HEALTHCARE INFRASTRUCTURE PVT. LTD.
              </div>
            </div> */}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-md transition-all ${isActive
                    ? 'text-sky-700 bg-sky-100/80 border border-sky-200 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phoneNumbers[0]}`}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors font-mono"
            >
              {companyInfo.phoneNumbers[0]}
            </a>
            <Link
              to="/tender"
              className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:from-blue-700 hover:to-sky-600 transition-all shadow-md shadow-sky-500/20"
            >
              Submit Tender / RFP
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-sky-600 hover:bg-sky-50"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-3 py-2 text-sm font-semibold rounded-md ${isActive ? 'bg-sky-100 text-sky-800 font-bold' : 'text-slate-700 hover:bg-sky-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-sky-100">
            <Link
              to="/tender"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center shadow-md"
            >
              Submit Tender / RFP Request
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
