import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Skill Kit Masterclass Reel',
    category: 'Reels',
    description: 'Engaging educational short-form reel crafted for viral social distribution.',
    videoSrc: '/Ai Video/Skill Kit.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Aarambh Studio Visuals',
    category: 'AI Videos',
    description: 'High-concept cinematic AI visual narrative and creative production.',
    videoSrc: '/Ai Video/Aarambh Studio_01(1).mp4',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Aadhyashakti Navratri - Edition 1',
    category: 'AI Videos',
    description: 'Vibrant cultural celebration brought to life with dynamic AI video generation.',
    videoSrc: '/Ai Video/Aadhyashakti Navratri_01.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Aadhyashakti Navratri - Edition 3',
    category: 'AI Videos',
    description: 'Energetic traditional festival atmosphere with futuristic motion effects.',
    videoSrc: '/Ai Video/Aadhyashakti Navratri_03.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Aadhyashakti Navratri N1',
    category: 'AI Videos',
    description: 'Night festive celebrations captured with cinematic lighting and AI visuals.',
    videoSrc: '/Ai Video/Aadhyashakti Navratri_N1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bapa Digi Print Commercial',
    category: 'Brand Ads',
    description: 'Promotional digital print commercial highlighting brand identity and craftsmanship.',
    videoSrc: '/Ai Video/Bapa Digi Print.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Subway Campaign Concept',
    category: 'Brand Ads',
    description: 'Fast-paced, appetite-piquing brand promo designed for maximum engagement.',
    videoSrc: '/Ai Video/Subway(1).mp4',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Chahiye Kya Aurat Ko',
    category: 'Reels',
    description: 'Narrative short reel combining relatable storytelling with high-retention cuts.',
    videoSrc: '/Ai Video/Chahiye Kya Aurat ko.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ramti Aave Musical',
    category: 'Video Editing',
    description: 'Rhythmic song edit with expressive beats, seamless flow, and color grading.',
    videoSrc: '/Ai Video/Ramti Aave.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Piyush Sir Feature',
    category: 'Video Editing',
    description: 'Professional speaker promo with crisp audio-visual polish and typography.',
    videoSrc: '/Ai Video/Piyush Sir(1).mp4',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'શ્રી ઉમા યુવા ગ્રુપ (Uma Yuva Group)',
    category: 'AI Videos',
    description: 'Community documentary showcase featuring AI styling and smooth cinematic cuts.',
    videoSrc: '/Ai Video/શ્રી ઉમા યુવા ગ્રુપ.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Showcase - Series 01',
    category: 'Motion Graphics',
    description: 'Modern motion design showcasing branding, logo elements, and sleek transitions.',
    videoSrc: '/Ai Video/19_08_JV_GMB_01.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Showcase - Series 02',
    category: 'Motion Graphics',
    description: 'Dynamic typography and graphic motion compositions for digital campaigns.',
    videoSrc: '/Ai Video/22_08_JV_GMB_01..mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Creative Promo 02',
    category: 'Brand Ads',
    description: 'Brand-focused storytelling combining kinetic visuals and marketing pacing.',
    videoSrc: '/Ai Video/22_08_JV_GMB_02.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Showcase - Series 03',
    category: 'AI Videos',
    description: 'Generative AI visual experiment blending surreal lighting and fluid animation.',
    videoSrc: '/Ai Video/24_08_JV_GMB_02.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Creative Cut 25-01',
    category: 'AI Videos',
    description: 'AI-assisted video generation highlighting futuristic aesthetics and design.',
    videoSrc: '/Ai Video/25_08_JV_GMB_01.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'GMB Creative Cut 25-03',
    category: 'AI Videos',
    description: 'High-energy AI visual synthesis with custom motion and grading.',
    videoSrc: '/Ai Video/25_08_JV_GMB_03.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'JV Signature Creative 02',
    category: 'AI Videos',
    description: 'Stylized cinematic presentation demonstrating AI video workflows.',
    videoSrc: '/Ai Video/07_08_JV_02.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
];

const categories = ['All Work', 'AI Videos', 'Brand Ads', 'Reels', 'Motion Graphics', 'Video Editing'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All Work' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <div className="text-[var(--blue)] text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase mb-1">
              Selected projects
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-1">
              Work that speaks.
            </h2>
            <div className="text-[var(--muted)] text-xs sm:text-sm md:text-base">
              Explore {PROJECTS.length} featured video projects, AI videos, and creative experiments.
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 my-4 sm:my-6 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = cat === 'All Work'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 ${isActive
                  ? 'bg-[var(--blue)] text-slate-900 border-[var(--blue)] shadow-sm'
                  : 'bg-[var(--panel)] text-[var(--muted)] border-[var(--line)] hover:border-[var(--blue)] hover:text-[var(--text)]'
                  }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-slate-900/20 text-slate-900 font-bold' : 'bg-white/10 text-[var(--muted)]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.title + idx}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedVideo(p)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedVideo(p);
                  }
                }}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer border border-[var(--line)] bg-[var(--panel)] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[var(--blue)] hover:shadow-xl transition-all duration-200 flex flex-col text-left"
              >
                {/* 16:10 Thumbnail / Video Preview */}
                <div className="aspect-[16/10] bg-[var(--panel-dark)] relative overflow-hidden flex items-center justify-center">
                  {p.videoSrc ? (
                    <video
                      src={p.videoSrc}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onMouseEnter={(e) => {
                        try {
                          e.currentTarget.play().catch(() => { });
                        } catch { }
                      }}
                      onMouseLeave={(e) => {
                        try {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        } catch { }
                      }}
                    />
                  ) : p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Play Button Icon Overlay */}
                  <div className="absolute w-12 h-12 rounded-full grid place-items-center bg-black/50 border border-white/40 backdrop-blur-md text-white text-base group-hover:scale-110 group-hover:bg-[var(--blue)] group-hover:text-slate-900 group-hover:border-[var(--blue)] transition-all pointer-events-none">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>

                  {/* Category Tag in top-left */}
                  <div className="absolute left-3 top-3 bg-black/70 border border-white/20 rounded-lg px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm pointer-events-none">
                    {p.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[var(--text)] mb-1.5 group-hover:text-[var(--blue)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[var(--muted)] text-xs leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[var(--blue)] text-xs font-bold mt-4">
                    <span>Play video</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[var(--panel)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--line)] bg-[var(--panel-dark)]">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--blue)] uppercase tracking-wider block">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 sm:p-2 rounded-full text-[var(--muted)] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="w-full bg-black flex items-center justify-center aspect-video max-h-[65vh]">
                <video
                  src={selectedVideo.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description Footer */}
              <div className="px-4 sm:px-6 py-3 bg-[var(--panel)] text-xs sm:text-sm text-[var(--muted)]">
                {selectedVideo.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
