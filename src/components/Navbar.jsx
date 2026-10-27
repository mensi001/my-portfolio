import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { name: 'HOME', href: '#home', id: 'home' },
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'SKILLS', href: '#skills', id: 'skills' },
  { name: 'PROJECTS', href: '#projects', id: 'projects' },
  { name: 'EXPERIENCE', href: '#services', id: 'services' },
  { name: 'CONTACT', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('HOME');
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  // Live real-time India clock with AM/PM (matching "INDIA · 02:17:00 PM")
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setCurrentTime(timeStr);
      } catch (err) {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Accurate active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;

      // If near top, select HOME
      if (scrollY < 120) {
        setActiveItem('HOME');
        return;
      }

      // Check if near bottom of page, select CONTACT
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveItem('CONTACT');
        return;
      }

      // Ordered as they appear down the page
      const sectionOrder = [
        { id: 'about', name: 'ABOUT' },
        { id: 'skills', name: 'SKILLS' },
        { id: 'projects', name: 'PROJECTS' },
        { id: 'services', name: 'EXPERIENCE' },
        { id: 'contact', name: 'CONTACT' },
      ];

      // Find the currently active section by bounding rect
      let currentSection = 'HOME';
      for (const section of sectionOrder) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above 40% of viewport and bottom is still visible
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom > 120) {
            currentSection = section.name;
          }
        }
      }

      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.name);
    isClickScrolling.current = true;

    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(item.id);
      if (el) {
        const yOffset = -90; // offset for floating navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* Floating Capsule Bar */}
        <header
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-2 sm:px-3 py-1.5 sm:py-2 flex items-center justify-between transition-all duration-300 shadow-xl ${
            theme === 'dark'
              ? 'bg-[#10141f]/90 backdrop-blur-md border border-[#252c3b] shadow-black/40 text-[#c4ccda]'
              : 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-slate-200/80 text-slate-600'
          }`}
        >
          {/* Left Navigation Links with animated active pill */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider transition-colors duration-200 uppercase z-10 cursor-pointer ${
                    isActive
                      ? 'text-[var(--blue)]'
                      : theme === 'dark'
                      ? 'text-[#9aa4b7] hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {/* Pill border highlight matching screenshot */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        theme === 'dark'
                          ? 'bg-[#122336] border border-[#63d6ff]/70 shadow-sm shadow-[#63d6ff]/25'
                          : 'bg-[#e0f2fe] border border-[#38bdf8] shadow-sm shadow-[#0284c7]/15'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Brand / Toggle */}
          <div className="md:hidden flex items-center gap-2 pl-2">
            <span className="font-extrabold text-sm tracking-tight text-[var(--text)]">
              JIGAR<span className="text-[var(--blue)]">.</span>
            </span>
          </div>

          {/* Right Info: Live Status & India Clock + Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 pr-1">
            {/* Live Indicator + Time */}
            <div
              className={`flex items-center gap-2 text-[11px] sm:text-[12px] font-mono tracking-wider font-semibold ${
                theme === 'dark' ? 'text-[#9aa4b7]' : 'text-slate-500'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shadow-sm shadow-emerald-500/50" />
              <span>INDIA</span>
              <span className="opacity-50">·</span>
              <span className="tabular-nums font-medium">
                {currentTime || '02:17:00 PM'}
              </span>
            </div>

            {/* Circular Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-[#252c3b] bg-[#111520] text-[#63d6ff] hover:border-[#63d6ff]'
                  : 'border-[#bae6fd] bg-[#f0f9ff] text-[#0284c7] hover:border-[#0284c7] shadow-sm'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#0284c7]" />
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[var(--text)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-20 inset-x-4 z-40 p-5 rounded-2xl md:hidden border shadow-2xl ${
              theme === 'dark'
                ? 'bg-[#10141f] border-[#252c3b] text-white'
                : 'bg-white border-slate-200 text-slate-800'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
                    activeItem === item.name
                      ? theme === 'dark'
                        ? 'bg-[#122336] text-[#63d6ff] border border-[#63d6ff]/50'
                        : 'bg-[#e0f2fe] text-[#0284c7] border border-[#38bdf8]'
                      : 'text-[var(--muted)]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
