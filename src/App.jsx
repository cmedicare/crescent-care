import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import TenderPage from './pages/TenderPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Outfit'] selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Navbar />

      {/* React Router Routes */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tender" element={<TenderPage />} />
        </Routes>
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
