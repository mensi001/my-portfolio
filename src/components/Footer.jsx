import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 md:px-8 border-t border-[var(--line)] text-[var(--muted)] text-[13px] mt-12 bg-[var(--bg)] select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Jigar Vachhani</span>
        <span className="text-[var(--muted)]">Creative Video Editor · AI Video Creator</span>
        <button
          onClick={scrollToTop}
          className="hover:text-[var(--blue)] transition-colors"
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
