'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Sparkles } from "lucide-react";
import { scrollTo } from "./shared";
import AskAniruddhaDrawer from "./AskAniruddhaDrawer";

// =============== Navigation ===============
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = open || isAiDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, isAiDrawerOpen]);

  const items = [
    ['About', 'about', 'The leader behind the work'],
    ['Impact', 'impact', 'Outcomes measured in business impact'], 
    ['Expertise', 'expertise', 'Core leadership capabilities'], 
    ['Case Studies', 'work', 'Evidence of applied leadership'], 
    ['AI Leadership', 'ai', 'Applied AI capabilities'], 
    ['Philosophy', 'philosophy', 'Leadership Philosophy'], 
    ['Experience', 'experience', 'A leadership journey'], 
    ['Education', 'education', 'Engineering rigor and strategy'], 
    ['Voices', 'voices', 'What collaborators say'], 
    ['Contact', 'contact', 'Open to opportunities'], 
  ];
  
  const goTo = (id) => { 
    setOpen(false); 
    setTimeout(() => scrollTo(id), 240); 
  };

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 flex items-center justify-between gap-3">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2 group flex-shrink-0">
            <div className="h-7 w-7 rounded-full border border-white/15 flex items-center justify-center">
              <span className="text-[11px] font-medium tracking-tight">AV</span>
            </div>
            <span className="text-[13px] font-medium tracking-tight text-neutral-200 hidden sm:inline">Aniruddha Vanshiv</span>
          </button>
          
          <div className="hidden xl:flex items-center gap-5">
            {items.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[11.5px] tracking-tight text-neutral-400 hover:text-white transition-colors link-underline whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Ask AI Button */}
            <button
              onClick={() => setIsAiDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 h-8 rounded-full border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08] transition-all group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Sparkles className="w-3 h-3 text-neutral-300 group-hover:text-white transition-colors" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium px-3.5 h-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors whitespace-nowrap"
            >
              Let's Connect <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="xl:hidden relative h-10 w-10 flex items-center justify-center text-neutral-200"
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
              className="xl:hidden fixed inset-0 top-16 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col overflow-y-auto"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] rounded-full blur-[120px] bg-white/[0.04]" />
                <div className="absolute inset-0 grid-bg opacity-50" />
              </div>

              <div className="relative px-6 py-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Navigation</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-600 tabular-nums">{String(items.length).padStart(2, '0')} sections</div>
                </div>

                <button
                  onClick={() => { setOpen(false); setIsAiDrawerOpen(true); }}
                  className="w-full mb-6 flex items-center justify-between px-5 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-white font-medium text-[13px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Ask Aniruddha AI Guide</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </button>

                <nav className="flex-1 space-y-1">
                  {items.map(([label, id, sub], i) => (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.06 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => goTo(id)}
                      className="group w-full text-left flex items-baseline justify-between gap-4 py-3.5 border-b border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className="text-[10px] tabular-nums text-neutral-600 group-hover:text-neutral-400 transition-colors">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="font-display text-[24px] tracking-[-0.03em] leading-none text-white group-hover:translate-x-1 transition-transform duration-500">
                            {label}
                          </div>
                          <div className="mt-1.5 text-[11.5px] text-neutral-500">{sub}</div>
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
                  className="mt-8 pt-6 border-t border-white/5"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500 mb-4">Contact</div>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="mailto:aniruddha.vanshiv@gmail.com" className="flex items-center gap-2 px-4 h-10 rounded-full border border-white/10 text-[12px] text-neutral-200 hover:bg-white/[0.04] transition-all">
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                    <a href="https://linkedin.com/in/aniruddhavanshiv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-full border border-white/10 text-[12px] text-neutral-200 hover:bg-white/[0.04] transition-all">
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AskAniruddhaDrawer isOpen={isAiDrawerOpen} onClose={() => setIsAiDrawerOpen(false)} />
    </>
  );
}