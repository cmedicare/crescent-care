import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsBanner from '../components/StatsBanner';
import ServicesSection from '../components/ServicesSection';
import ProjectShowcase from '../components/ProjectShowcase';
import ArchitecturalFinishes from '../components/ArchitecturalFinishes';
import ScopeEstimator from '../components/ScopeEstimator';
import ClientDirectory from '../components/ClientDirectory';
import SafetyValues from '../components/SafetyValues';
import LeadershipSection from '../components/LeadershipSection';
import ContactTenderForm from '../components/ContactTenderForm';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <ProjectShowcase />
      <ArchitecturalFinishes />
      <ScopeEstimator />
      <SafetyValues />
      <LeadershipSection />
      <ContactTenderForm />
    </>
  );
}
