import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import FloatingCall from './components/FloatingCall';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function PortfolioApp() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col selection:bg-[var(--blue)] selection:text-white transition-colors duration-300">
      {/* Desktop bespoke cursor */}
      <CustomCursor />

      {/* Floating navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Left-side Floating Call Button */}
      <FloatingCall />

      {/* Right-side Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
