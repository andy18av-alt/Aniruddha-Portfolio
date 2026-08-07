'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { scrollTo } from "./shared";

// =============== Navigation ===============
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const items = [
    ['About', 'about', 'The leader behind the work'],
    ['Scale', 'scale', 'Operating at enterprise scale'],
    ['Expertise', 'expertise', '16 leadership capabilities'],
    ['Work', 'work', 'Selected transformations'],
    ['AI', 'ai', 'AI-native operational leadership'],
    ['Roadmap', 'roadmap', 'AI learning progression'],
    ['Experience', 'experience', '13+ years across enterprises'],
    ['Education', 'education', 'IIM Bangalore · COEP'],
    ['Voices', 'voices', 'What collaborators say'],
    ['Contact', 'contact', 'Open to opportunities'],
  ];
  const goTo = (id) => { setOpen(false); setTimeout(() => scrollTo(id), 240); };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('top')} className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-full border border-white/15 flex items-center justify-center">
            <span className="text-[11px] font-medium tracking-tight">AV</span>
          </div>
          <span className="text-[13px] font-medium tracking-tight text-neutral-200">Aniruddha Vanshiv</span>
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {items.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[12px] tracking-tight text-neutral-400 hover:text-white transition-colors link-underline"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex items-center gap-2 text-[12px] font-medium px-4 h-9 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
        >
          Let's Connect <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden relative h-10 w-10 -mr-2 flex items-center justify-center text-neutral-200"
        >
          <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
          <motion.span
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute block h-px w-6 bg-current origin-center"
          />
          <motion.span
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute block h-px w-6 bg-current origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="m-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col overflow-y-auto"
          >
            {/* ambient gradient */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] rounded-full blur-[120px] bg-white/[0.04]" />
              <div className="absolute inset-0 grid-bg opacity-50" />
            </div>

            <div className="relative px-6 py-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Navigation</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-600 tabular-nums">{String(items.length).padStart(2, '0')} sections</div>
              </div>

              <nav className="flex-1 space-y-1">
                {items.map(([label, id, sub], i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.06 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => goTo(id)}
                    className="group w-full text-left flex items-baseline justify-between gap-4 py-4 border-b border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="text-[10px] tabular-nums text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="font-display text-[28px] tracking-[-0.03em] leading-none text-white group-hover:translate-x-1 transition-transform duration-500">
                          {label}
                        </div>
                        <div className="mt-2 text-[12px] text-neutral-500">{sub}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 + items.length * 0.045 + 0.1 }}
                className="mt-10 pt-8 border-t border-white/5"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500 mb-5">Contact</div>
                <div className="grid grid-cols-2 gap-3">
                  <a href="mailto:aniruddha.vanshiv@gmail.com" className="flex items-center gap-2 px-4 h-11 rounded-full border border-white/10 text-[12px] text-neutral-200 hover:bg-white/[0.04] hover:border-white/25 transition-all">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  <a href="https://linkedin.com/in/aniruddhavanshiv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 h-11 rounded-full border border-white/10 text-[12px] text-neutral-200 hover:bg-white/[0.04] hover:border-white/25 transition-all">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a href="tel:+919739299852" className="flex items-center gap-2 px-4 h-11 rounded-full border border-white/10 text-[12px] text-neutral-200 hover:bg-white/[0.04] hover:border-white/25 transition-all">
                    <Phone className="w-3.5 h-3.5" /> Call
                  </a>
                  <button onClick={() => goTo('contact')} className="flex items-center justify-center gap-2 px-4 h-11 rounded-full bg-white text-black text-[12px] font-medium hover:bg-neutral-200 transition-colors">
                    Let's Connect <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="mt-6 text-[11px] text-neutral-600 flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Bengaluru, India · Open to global opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
