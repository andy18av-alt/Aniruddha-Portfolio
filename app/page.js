'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, animate, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowDown, Mail, Phone, MapPin, Linkedin, Sparkles, Shield, Network, Cpu,
  GitBranch, Workflow, BarChart3, Bot, MessageSquare, Layers, Compass, Target, Users,
  Activity, FileBarChart, Settings2, Brain, ScanSearch, Zap, Rocket, ChevronRight, Quote,
  GraduationCap, BookOpen
} from "lucide-react";

// =============== HERO PORTRAIT (grayscale) ===============
const PORTRAIT_URL = "/aniruddha.jpg";

// =============== Helper: scroll to section ===============
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// =============== Animated Counter ===============
const Counter = ({ to, prefix = "", suffix = "", decimals = 0, duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const m = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => m.stop();
  }, [inView, to, duration]);
  const formatted =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val + 0.0001).toLocaleString('en-IN');
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
};

// =============== Section Wrapper with reveal ===============
const Reveal = ({ children, delay = 0, className = "", y = 24 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0, margin: "0px 0px 0px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =============== Eyebrow Label ===============
const Eyebrow = ({ children, num }) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-400 font-medium">
    {num && <span className="text-neutral-600 tabular-nums">{num}</span>}
    <span className="h-px w-8 bg-neutral-700"></span>
    <span>{children}</span>
  </div>
);

// =============== Navigation ===============
const Nav = () => {
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
};

// =============== HERO ===============
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yShift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden pt-28 lg:pt-24">
      {/* Grid bg — softened for typography focus */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Ambient gradient — single, understated */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[100vw] h-[70vh] rounded-full blur-[140px] bg-gradient-to-b from-white/[0.035] to-transparent" />
      </div>

      <motion.div
        style={{ y: yShift, opacity }}
        className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-x-12 gap-y-16 lg:gap-y-0 items-center py-16 lg:py-24 min-h-[calc(100svh-6rem)]"
      >
        {/* LEFT — content */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3.5 h-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-[10.5px] tracking-[0.24em] uppercase text-neutral-300 font-medium">
                Available for Leadership Opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display text-[42px] sm:text-[54px] lg:text-[72px] xl:text-[80px] leading-[0.98] tracking-[-0.045em] font-medium text-white">
              <span className="block">Building <span className="serif italic font-normal text-neutral-200">intelligent</span> products</span>
              <span className="block">that <span className="serif italic font-normal text-neutral-200">transform</span> business</span>
              <span className="block">operations.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-[560px] text-[15.5px] sm:text-base leading-[1.7] text-neutral-400">
              Associate Director with <span className="text-neutral-200">13+ years</span> leading Product Strategy, Trust &amp; Safety, Customer Experience, Marketplace Operations and AI‑enabled transformation across enterprise‑scale platforms.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-[560px] text-[14px] leading-[1.75] text-neutral-500">
              I turn complex operational challenges into scalable products — combining product strategy, operational excellence and practical AI. My work spans customer experience, trust systems, workflow automation and intelligent decision support that delivers measurable business impact.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-colors"
              >
                View Case Studies
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-[13px] font-medium text-neutral-100 hover:border-white/35 hover:bg-white/[0.03] transition-all"
              >
                Let's Connect
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </button>
            </div>
          </Reveal>

          {/* Capability line — typography-only, no chips */}
          <Reveal delay={0.42}>
            <div className="pt-8 border-t border-white/[0.06] max-w-[560px]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                <span>Product Strategy</span>
                <span className="text-neutral-700">·</span>
                <span>Trust &amp; Safety</span>
                <span className="text-neutral-700">·</span>
                <span>CX Transformation</span>
                <span className="text-neutral-700">·</span>
                <span>Applied AI</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Portrait, refined */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative aspect-[4/5] w-full max-w-[420px]"
          >
            {/* soft, single-layer glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent blur-2xl rounded-[32px]" />
            <div className="relative h-full w-full rounded-[20px] overflow-hidden border border-white/[0.08]">
              <img
                src={PORTRAIT_URL}
                alt="Aniruddha Vanshiv"
                className="h-full w-full object-cover object-[center_20%] grayscale contrast-[1.08] brightness-[0.95]"
              />
              {/* refined vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              {/* editorial caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-300/90">Aniruddha Vanshiv</div>
                  <div className="mt-2 text-[13px] text-white font-medium">AI Product &amp; Operations Leader</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-neutral-400/80 text-right leading-tight">
                  Bengaluru<br />India
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="scroll-indicator" />
        <span className="text-[9.5px] uppercase tracking-[0.32em] text-neutral-600">Scroll</span>
      </motion.div>
    </section>
  );
};

// =============== ABOUT ===============
const About = () => (
  <section id="about" className="relative py-32 lg:py-40">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <Reveal>
        <Eyebrow num="01">About</Eyebrow>
      </Reveal>
      <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl lg:text-4xl tracking-[-0.03em] text-white leading-tight">
              An operator at the intersection of <span className="serif italic font-normal text-neutral-300">scale, trust,</span> and <span className="serif italic font-normal text-neutral-300">intelligence.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[15px] leading-[1.85] text-neutral-400">
          {[
            "An operations and Trust & Safety leader with 13+ years of experience building scalable systems across e-commerce, customer experience, reverse logistics, fraud mitigation, and marketplace governance.",
            "Over the years, I have led large-scale transformation initiatives focused on improving customer trust, reducing operational defects, strengthening platform integrity, and optimizing business profitability across complex marketplace ecosystems.",
            "My experience spans cross-functional leadership across Product, Engineering, Analytics, Operations, Finance, Supply Chain, and Business teams — translating ambiguous challenges into structured execution programs with measurable impact.",
            "Recently, I have been expanding into AI-powered operational systems, workflow automation, and intelligent productivity frameworks to build modern, AI-enabled execution capabilities for the next generation of digital businesses.",
          ].map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <p className="text-neutral-200 border-l border-white/15 pl-5 text-[16px] italic">
              I believe the future belongs to leaders who can combine operational rigor, systems thinking, customer obsession, and AI augmentation to drive scalable business outcomes.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

// =============== SCALE METRICS ===============
const ScaleMetrics = () => {
  // "Leadership Impact" — five editorial metric cards.
  const metrics = [
    { value: '13+', label: 'Years Experience', sub: 'Enterprise scale · commerce · AI' },
    { value: '₹80Cr+', label: 'Business Impact', sub: 'Realized across programs' },
    { value: '250+', label: 'bps G2N Improvement', sub: 'Gross‑to‑Net optimization' },
    { value: 'Millions', label: 'Customers Impacted', sub: 'Trust · CX · Reverse logistics' },
    { value: 'Enterprise', label: 'AI · Product · Operations', sub: 'Cross‑functional leadership' },
  ];
  return (
    <section id="scale" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow num="02">Leadership Impact</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.02]">
                Outcomes measured in <span className="serif italic font-normal text-neutral-300">business impact</span>, not activity.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-neutral-400 max-w-md">
              A career spanning product strategy, trust systems, customer experience and AI — quantified through the metrics that matter to enterprise leaders.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} y={16}>
              <div className="bg-[#0a0a0a] p-7 lg:p-9 h-full flex flex-col justify-between min-h-[220px] lg:min-h-[260px] group hover:bg-[#0d0d0d] transition-colors">
                <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="font-display text-[28px] sm:text-[32px] lg:text-[34px] xl:text-[38px] leading-[1.05] tracking-[-0.03em] text-white">
                    {m.value}
                  </div>
                  <div className="mt-5 text-[13px] text-neutral-200 font-medium leading-snug">{m.label}</div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-neutral-500">{m.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============== EXPERTISE ===============
const Expertise = () => {
  const items = [
    { icon: Compass, label: 'Strategic Operations' },
    { icon: Shield, label: 'Trust & Safety' },
    { icon: Network, label: 'Marketplace Operations' },
    { icon: Zap, label: 'Hyperlocal Commerce' },
    { icon: Users, label: 'Customer Experience Transformation' },
    { icon: GitBranch, label: 'Reverse Logistics' },
    { icon: Rocket, label: 'Business Transformation' },
    { icon: Workflow, label: 'Program Management' },
    { icon: Settings2, label: 'Product Operations' },
    { icon: Target, label: 'Operational Excellence' },
    { icon: Activity, label: 'Performance Governance' },
    { icon: ScanSearch, label: 'Risk Mitigation' },
    { icon: Layers, label: 'Stakeholder Leadership' },
    { icon: FileBarChart, label: 'Process Design' },
    { icon: BarChart3, label: 'Data‑driven Decisions' },
    { icon: Brain, label: 'Cross‑functional Execution' },
  ];
  return (
    <section id="expertise" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow num="03">Core Expertise</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                Leadership <span className="serif italic font-normal text-neutral-300">capabilities</span> built across enterprise systems.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[14px] text-neutral-400 leading-relaxed max-w-md">
                A multi‑disciplinary toolkit refined over 13+ years — operating where business outcomes meet operational design and customer trust.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {items.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.025} y={12}>
                <div className="exec-card bg-[#0a0a0a] p-5 lg:p-6 h-full min-h-[140px] flex flex-col justify-between">
                  <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white" strokeWidth={1.4} />
                  <div className="text-[13px] text-neutral-200 font-medium leading-snug">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== SELECTED TRANSFORMATIONS ===============
const Transformations = () => {
  // Featured (largest) card
  const featured = {
    badge: 'NEW',
    title: 'EVA Command Center',
    description:
      'An AI‑powered operational decision support platform that analyzes event incidents, recommends recovery strategies and orchestrates operational workflows using Google Gemini.',
    tags: ['AI Strategy', 'Google Gemini', 'Workflow Automation', 'Product Design'],
    buttons: [
      { label: 'Live Demo', href: 'https://eva-chief-of-staff.lovable.app', kind: 'primary', target: '_blank', rel: 'noopener noreferrer' },
      { label: 'Case Study', href: '#', kind: 'ghost' },
      { label: 'GitHub', href: '#', kind: 'ghost' },
    ],
  };

  const secondary = [
    {
      title: 'Flipkart Trust & Safety Transformation',
      description:
        'Led strategic product initiatives that improved customer trust, strengthened marketplace integrity and optimized Gross‑to‑Net performance across large‑scale commerce platforms.',
      highlights: [
        { value: '₹80Cr+', label: 'Business Impact' },
        { value: '250+ bps', label: 'G2N Improvement' },
      ],
      tags: ['Trust & Safety', 'Customer Experience'],
    },
    {
      title: 'AI Workflow Automation',
      description:
        'Built AI‑powered workflow automation systems, operational copilots and productivity solutions using LLMs, n8n and modern AI tooling.',
      tags: ['LLMs', 'n8n', 'Automation', 'Copilots'],
    },
  ];

  return (
    <section id="work" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow num="04">Featured Case Studies</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.02] max-w-3xl">
                Evidence of <span className="serif italic font-normal text-neutral-300">applied</span> product &amp; AI leadership.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-neutral-400 max-w-md">
              Selected work at the intersection of product strategy, operational systems and practical AI — each shipped, measured and evaluated on business outcomes.
            </p>
          </Reveal>
        </div>

        {/* Cards grid: featured (col-span-8 on lg) + 2 stacked (col-span-4) */}
        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* FEATURED */}
          <Reveal className="lg:col-span-8" y={24}>
            <article className="group relative h-full flex flex-col border border-white/[0.08] rounded-2xl bg-[#0a0a0a] hover:border-white/20 transition-colors overflow-hidden">
              {/* Top ambient strip (no gradient — a single subtle line) */}
              <div className="relative p-8 lg:p-12 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center h-6 px-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-[10px] uppercase tracking-[0.22em] text-emerald-300/90 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] mr-2" />
                    {featured.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Featured Case Study
                  </span>
                </div>

                <div className="mt-10 lg:mt-14">
                  <h3 className="font-display text-3xl lg:text-5xl xl:text-6xl tracking-[-0.035em] text-white leading-[1.02]">
                    EVA <span className="serif italic font-normal text-neutral-300">Command Center</span>
                  </h3>
                  <p className="mt-6 text-[15px] lg:text-base leading-[1.75] text-neutral-400 max-w-2xl">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-neutral-300 border border-white/10 rounded-full px-3 h-7 inline-flex items-center bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-10 flex flex-wrap items-center gap-3">
                  {featured.buttons.map((b) =>
                    b.kind === 'primary' ? (
                      <a
                        key={b.label}
                        href={b.href}
                        target={b.target}
                        rel={b.rel}
                        className="group/btn inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white text-black text-[12.5px] font-medium hover:bg-neutral-200 transition-colors"
                      >
                        {b.label}
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        key={b.label}
                        href={b.href}
                        target={b.target}
                        rel={b.rel}
                        className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-white/12 text-[12.5px] text-neutral-200 hover:border-white/30 hover:bg-white/[0.03] transition-all"
                      >
                        {b.label}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          </Reveal>

          {/* SIDE STACK — Cards 2 & 3 */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6 lg:gap-8">
            {secondary.map((c, idx) => (
              <Reveal key={c.title} delay={0.08 + idx * 0.06} y={24}>
                <article className="group relative h-full flex flex-col border border-white/[0.08] rounded-2xl bg-[#0a0a0a] hover:border-white/20 transition-colors overflow-hidden">
                  <div className="p-7 lg:p-8 flex-1 flex flex-col">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Case Study · {String(idx + 2).padStart(2, '0')}
                    </div>

                    <h3 className="mt-6 font-display text-xl lg:text-2xl tracking-[-0.025em] text-white leading-[1.15]">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[13.5px] leading-[1.7] text-neutral-400">
                      {c.description}
                    </p>

                    {c.highlights && (
                      <div className="mt-6 grid grid-cols-2 gap-4 py-4 border-y border-white/[0.06]">
                        {c.highlights.map((h) => (
                          <div key={h.label}>
                            <div className="font-display text-lg lg:text-xl tracking-[-0.02em] text-white tabular-nums">
                              {h.value}
                            </div>
                            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                              {h.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10.5px] text-neutral-300 border border-white/10 rounded-full px-2.5 h-6 inline-flex items-center"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* FLAGSHIP · TrustOS — full-width alongside EVA */}
          <Reveal className="lg:col-span-12" delay={0.1} y={24}>
            <article className="group relative border border-white/[0.08] rounded-2xl bg-[#0a0a0a] hover:border-white/20 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0 lg:gap-0">
                {/* Logo panel */}
                <div className="lg:col-span-5 relative flex items-center justify-center bg-[#080808] border-b lg:border-b-0 lg:border-r border-white/[0.06] p-10 lg:p-14 min-h-[260px] lg:min-h-[440px]">
                  {/* subtle corner marks */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/15" />
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/15" />
                  <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/15" />
                  <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/15" />
                  <img
                    src="/trustos-logo.png"
                    alt="TrustOS — AI-native Trust & Safety Operating System"
                    className="relative w-full max-w-[320px] lg:max-w-[380px] h-auto object-contain"
                  />
                </div>

                {/* Content panel */}
                <div className="lg:col-span-7 relative p-8 lg:p-12 flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center h-6 px-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-[10px] uppercase tracking-[0.22em] text-emerald-300/90 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] mr-2" />
                      NEW
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Featured Case Study
                    </span>
                  </div>

                  <div className="mt-8 lg:mt-10">
                    <h3 className="font-display text-3xl lg:text-5xl xl:text-[54px] tracking-[-0.035em] text-white leading-[1.02]">
                      <span className="text-white">Trust</span><span className="serif italic font-normal text-neutral-300">OS</span>
                    </h3>
                    <div className="mt-3 text-[13px] uppercase tracking-[0.22em] text-neutral-400">
                      AI‑native Trust &amp; Safety Operating System
                    </div>
                    <p className="mt-6 text-[15px] lg:text-base leading-[1.75] text-neutral-400 max-w-2xl">
                      An enterprise AI platform that orchestrates explainable investigations, policy interpretation, risk intelligence and human‑governed enforcement workflows for large‑scale digital platforms.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {['Trust & Safety', 'Multi‑Agent AI', 'Risk Intelligence', 'Enterprise AI'].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-neutral-300 border border-white/10 rounded-full px-3 h-7 inline-flex items-center bg-white/[0.02]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-10 flex flex-wrap items-center gap-3">
                    <a
                      href="https://risk-arbiter.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 h-10 px-5 rounded-full bg-white text-black text-[12.5px] font-medium hover:bg-neutral-200 transition-colors"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href="#"
                      title="Detailed Product Case Study Coming Soon"
                      aria-label="Case Study — Detailed Product Case Study Coming Soon"
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-white/12 text-[12.5px] text-neutral-200 hover:border-white/30 hover:bg-white/[0.03] transition-all"
                    >
                      Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                    <a
                      href="https://github.com/andy18av-alt/TrustOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-white/12 text-[12.5px] text-neutral-200 hover:border-white/30 hover:bg-white/[0.03] transition-all"
                    >
                      GitHub
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// =============== AI CAPABILITIES ===============
const AICapabilities = () => {
  const chips = [
    'Generative AI', 'AI Workflow Automation', 'AI Agents', 'Autonomous Systems',
    'Prompt Engineering', 'AI Productivity Systems', 'ChatGPT', 'Claude Workflows',
    'Microsoft Copilot', 'AI‑assisted Analytics', 'AI Research Systems', 'AI Storytelling',
    'RAG Systems', 'Make.com Automation', 'No‑code AI Workflows', 'Voice AI Systems',
    'MCP Integrations', 'AI‑enabled Decision Systems',
  ];
  return (
    <section id="ai" className="relative py-32 lg:py-40 border-t border-white/5 overflow-hidden">
      {/* node visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <radialGradient id="nodeg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full blur-[140px] bg-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow num="05">AI &amp; Future Capabilities</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                Building <span className="serif italic font-normal text-neutral-300">AI‑native</span> operational leadership.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] text-neutral-400 leading-relaxed max-w-md">
                Leveraging AI to improve operational efficiency, execution quality, decision systems, productivity, and scalable business workflows.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-neutral-300 border border-white/10 rounded-full px-4 h-9">
                <Sparkles className="w-3.5 h-3.5" />
                AI‑enabled operational leadership
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative border border-white/8 rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-white/[0.02] to-transparent">
                {/* subtle node graph */}
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none">
                    <path d="M40,40 Q200,10 360,40" />
                    <path d="M40,160 Q200,190 360,160" />
                    <path d="M40,40 Q120,100 40,160" />
                    <path d="M360,40 Q280,100 360,160" />
                    <path d="M40,40 L360,160" />
                    <path d="M360,40 L40,160" />
                  </g>
                  {[[40,40],[360,40],[40,160],[360,160],[200,100]].map(([x,y],i)=>(
                    <circle key={i} cx={x} cy={y} r="2.5" fill="rgba(255,255,255,0.7)" />
                  ))}
                </svg>

                <div className="relative flex flex-wrap gap-2.5">
                  {chips.map((c, i) => (
                    <Reveal key={c} delay={i * 0.02} y={8}>
                      <span className="inline-flex items-center gap-2 px-3.5 h-9 rounded-full border border-white/10 text-[12px] text-neutral-200 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/25 transition-all">
                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                        {c}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== AI ROADMAP ===============
const Roadmap = () => {
  const phases = [
    { id: '1.1', title: 'AI Fundamentals & Ecosystem Mastery', items: ['AI Generalist Mindset', 'Generative AI Ecosystem', 'AI Research Tools', 'AI Productivity'] },
    { id: '1.2', title: 'Build Products & AI Business Systems', items: ['Product Building', 'AI Monetization', 'LinkedIn Optimization with AI'] },
    { id: '1.3', title: 'AI Agents & Autonomous Systems', items: ['Workflow Automation with Make', 'Build AI Employees', 'Smart Voice Agents', 'MCP', 'Customer Support Agents with RAG', 'Microsoft Copilot', 'Claude Productivity Systems'] },
    { id: '1.4', title: 'AI Data Analytics & Storytelling', items: ['AI Data Analysis', 'AI‑powered Power BI', 'AI Storytelling & Presentation Systems'] },
    { id: '1.5', title: 'Career Readiness Using AI', items: ['ATS Resume Optimization', 'AI Job Hunting Systems', 'Agentic Job Applications'] },
    { id: '1.6', title: 'AI Branding & Leadership', items: ['AI Image & Video Generation', 'AI Leadership Communication'] },
    { id: '2',   title: 'AI Generalist Hackathon', items: ['AI Solution Building', 'Applied AI Projects'] },
  ];
  return (
    <section id="roadmap" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal><Eyebrow num="06">AI Learning Roadmap</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
              A structured progression from <span className="serif italic font-normal text-neutral-300">fundamentals</span> to <span className="serif italic font-normal text-neutral-300">applied</span> AI systems.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 relative">
          {/* central line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px tl-line lg:-translate-x-1/2" />
          <div className="space-y-12 lg:space-y-20">
            {phases.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={p.id} delay={i * 0.05}>
                  <div className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-start`}>
                    {/* dot */}
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-white border border-white/30 shadow-[0_0_24px_rgba(255,255,255,0.4)]" />
                    <div className={`pl-12 lg:pl-0 ${left ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Phase {p.id}</div>
                      <h3 className="mt-3 font-display text-2xl lg:text-3xl tracking-[-0.03em] text-white leading-tight">{p.title}</h3>
                    </div>
                    <div className={`pl-12 lg:pl-0 ${left ? 'lg:col-start-2 lg:pl-16' : 'lg:col-start-1 lg:row-start-1 lg:pr-16 lg:text-right'}`}>
                      <div className={`flex flex-wrap gap-2 ${left ? '' : 'lg:justify-end'}`}>
                        {p.items.map((it) => (
                          <span key={it} className="text-[12px] text-neutral-300 border border-white/10 rounded-full px-3 h-8 inline-flex items-center bg-white/[0.02]">
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== PHILOSOPHY ===============
const Philosophy = () => {
  const principles = [
    'Customer Obsession', 'Systems Thinking', 'Structured Execution', 'Ownership Mindset',
    'Scalable Mechanism Building', 'Data‑driven Decisions', 'Cross‑functional Leadership',
    'Continuous Improvement', 'AI‑augmented Productivity', 'Calm Execution Under Ambiguity',
  ];
  return (
    <section className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <Reveal><Eyebrow num="07">Leadership Philosophy</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <p className="mt-12 font-display text-3xl lg:text-5xl tracking-[-0.035em] leading-[1.18] text-neutral-100 max-w-4xl mx-auto">
            <span className="serif italic font-normal text-neutral-300">"</span>Known for bringing <span className="serif italic font-normal text-neutral-300">clarity, structure,</span> and <span className="serif italic font-normal text-neutral-300">calm execution</span> to high‑scale, ambiguous operational environments.<span className="serif italic font-normal text-neutral-300">"</span>
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {principles.map((p, i) => (
              <div key={p} className="flex items-center gap-3 text-[13px] text-neutral-400">
                <span className="text-neutral-700 tabular-nums text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-neutral-200">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// =============== EXPERIENCE TIMELINE ===============
const Experience = () => {
  const roles = [
    {
      company: 'Flipkart India Pvt Ltd',
      role: 'Associate Director — Gross to Net / Trust & Safety / CX',
      period: '2015 — Present',
      location: 'Bengaluru, India',
      points: [
        'Trust & Safety transformation across marketplace ecosystem',
        'Reverse logistics and customer experience redesign',
        'Fraud prevention and marketplace governance frameworks',
        'Hyperlocal initiatives and operational redesign',
        'AI‑enabled operational systems and intelligent automation',
        'Large‑scale cross‑functional execution across Product, Engineering, Analytics, Finance & Business',
      ],
      current: true,
    },
    {
      company: 'Bharat Petroleum Corporation Ltd',
      role: 'Executive Engineer — Retail',
      period: '2010 — 2012',
      location: 'India',
      points: [
        'Distributed operations across multi‑site retail infrastructure',
        'Compliance and regulatory governance',
        'Infrastructure execution and process standardization',
        'Multi‑site operational management',
      ],
    },
  ];
  return (
    <section id="experience" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow num="08">Experience</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                A leadership <span className="serif italic font-normal text-neutral-300">journey</span> across enterprise scale.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px tl-line" />
            <div className="space-y-14">
              {roles.map((r, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 h-7 w-7 rounded-full border border-white/15 bg-black flex items-center justify-center">
                      <span className={`h-2 w-2 rounded-full ${r.current ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]' : 'bg-neutral-500'}`} />
                    </div>
                    <div className="flex items-baseline justify-between flex-wrap gap-4">
                      <div>
                        <div className="font-display text-2xl lg:text-3xl tracking-[-0.03em] text-white">{r.company}</div>
                        <div className="mt-2 text-[14px] text-neutral-300">{r.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[12px] text-neutral-400 tabular-nums">{r.period}</div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 mt-1">{r.location}</div>
                      </div>
                    </div>
                    <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-3">
                      {r.points.map((p) => (
                        <div key={p} className="flex items-start gap-3 text-[14px] text-neutral-400 leading-relaxed">
                          <span className="mt-2 h-px w-3 bg-neutral-600 flex-shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== EDUCATION ===============
const Education = () => {
  const items = [
    {
      school: 'Indian Institute of Management Bangalore',
      shortName: 'IIM Bangalore',
      degree: 'Master of Business Administration (MBA)',
      field: 'Business Administration & Management, General',
      period: '2013 — 2015',
      tags: ['Strategy', 'Leadership', 'General Management', 'Communication', 'Multi‑tasking'],
      icon: GraduationCap,
    },
    {
      school: 'COEP Technological University',
      shortName: 'COEP Pune',
      degree: 'Bachelor of Technology (BTech)',
      field: 'Mechanical Engineering',
      period: '2006 — 2010',
      tags: ['Engineering Foundations', 'Teamwork', 'Business Development'],
      icon: BookOpen,
    },
  ];
  return (
    <section id="education" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow num="09">Education</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                A foundation in <span className="serif italic font-normal text-neutral-300">engineering rigor</span> and <span className="serif italic font-normal text-neutral-300">management strategy.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[14px] text-neutral-400 leading-relaxed max-w-md">
                Trained at two of India's most selective institutions — combining systems thinking, problem decomposition, and structured business judgment.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
            {items.map(({ school, shortName, degree, field, period, tags, icon: Icon }, i) => (
              <Reveal key={school} delay={i * 0.08}>
                <div className="group bg-[#0a0a0a] p-7 lg:p-9 h-full flex flex-col gap-6 hover:bg-[#0e0e0e] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors">
                      <Icon className="w-4 h-4 text-neutral-300" strokeWidth={1.4} />
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 tabular-nums">{period}</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{shortName}</div>
                    <div className="mt-2 font-display text-xl lg:text-2xl tracking-[-0.02em] text-white leading-tight">
                      {school}
                    </div>
                  </div>

                  <div className="border-t border-white/8 pt-5">
                    <div className="text-[14px] text-neutral-200 font-medium">{degree}</div>
                    <div className="mt-1 text-[13px] text-neutral-400">{field}</div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {tags.map((t) => (
                      <span key={t} className="text-[11px] text-neutral-300 border border-white/10 rounded-full px-2.5 h-7 inline-flex items-center bg-white/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== TESTIMONIALS ===============
const Testimonials = () => {
  const secondary = [
    { quote: 'Aniruddha is a rare professional who combines deep domain expertise with an incredible sense of ownership.', author: 'Bhargava Krishna', role: 'Fintech & E‑commerce Leader' },
    { quote: 'He brought structure to ambiguous problem spaces, aligned diverse teams toward common goals, and drove execution with discipline.', author: 'Balaji Chandran', role: 'Product Leader' },
    { quote: 'Aniruddha is a dependable leader who brings clarity, ownership, and execution excellence to complex problem spaces.', author: 'Saurabh Sharma', role: 'Startup Operator' },
  ];
  return (
    <section id="voices" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal><Eyebrow num="10">Voices</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05] max-w-3xl">
            What collaborators <span className="serif italic font-normal text-neutral-300">say</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <figure className="relative h-full border border-white/10 rounded-2xl p-8 lg:p-12 bg-gradient-to-b from-white/[0.03] to-transparent">
              <Quote className="w-7 h-7 text-neutral-600" />
              <blockquote className="mt-6 space-y-5 text-[17px] lg:text-[19px] leading-[1.65] text-neutral-200 font-light">
                <p>Aniruddha consistently demonstrated an ability to navigate complex and ambiguous problem spaces with clarity and focus.</p>
                <p>He brings a rare balance of strategic thinking and practical execution, ensuring ideas translate into meaningful business impact. One of his standout qualities is his composure in high‑pressure situations — he brings a calm, solution‑oriented presence that helps teams stay focused even during challenging moments.</p>
                <p>Aniruddha demonstrates a deep sense of ownership in his work, and his presence meaningfully enhances both decision‑making and execution.</p>
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-white/8">
                <div className="text-sm text-white font-medium">Parvathy Kartha</div>
                <div className="text-[12px] text-neutral-500 mt-1">Product Operations · Trust & Safety · Policy, Product & AI</div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-5 grid gap-5">
            {secondary.map((t, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <figure className="border border-white/8 rounded-2xl p-7 bg-[#0c0c0c] hover:border-white/20 transition-colors">
                  <Quote className="w-4 h-4 text-neutral-700" />
                  <blockquote className="mt-4 text-[14px] leading-[1.7] text-neutral-300 font-light">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-white/5">
                    <div className="text-[13px] text-white">{t.author}</div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =============== Contact Form ===============
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', _hp: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' }); // idle | submitting | success | error
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.state === 'submitting') return;
    setStatus({ state: 'submitting', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ state: 'error', msg: data?.error || 'Could not send. Please try again.' });
        return;
      }
      setStatus({ state: 'success', msg: 'Thank you. Your message has reached Aniruddha.' });
      setForm({ name: '', email: '', company: '', message: '', _hp: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: 'Network error. Please email aniruddha.vanshiv@gmail.com directly.' });
    }
  };

  const fieldBase = "w-full bg-transparent border-b border-white/10 focus:border-white/40 outline-none text-[15px] text-white placeholder:text-neutral-600 py-3 px-0 transition-colors";

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      {/* Honeypot */}
      <input
        type="text" name="_hp" value={form._hp} onChange={onChange}
        tabIndex={-1} autoComplete="off" aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -left-[9999px] top-0 h-0 w-0"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Name</span>
          <input
            required name="name" value={form.name} onChange={onChange}
            placeholder="Your full name" className={fieldBase}
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Email</span>
          <input
            required type="email" name="email" value={form.email} onChange={onChange}
            placeholder="you@company.com" className={fieldBase}
          />
        </label>
      </div>

      <label className="block mt-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Company / Role <span className="text-neutral-700 normal-case tracking-normal">(optional)</span></span>
        <input
          name="company" value={form.company} onChange={onChange}
          placeholder="Where you're based" className={fieldBase}
        />
      </label>

      <label className="block mt-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Message</span>
        <textarea
          required name="message" value={form.message} onChange={onChange}
          rows={5} maxLength={5000}
          placeholder="Tell me about the opportunity, role, or context. I'll respond personally."
          className={`${fieldBase} resize-none leading-relaxed`}
        />
        <span className="block mt-1 text-[10px] text-neutral-600 tabular-nums">{form.message.length} / 5000</span>
      </label>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <button
          type="submit"
          disabled={status.state === 'submitting'}
          className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.state === 'submitting' ? (
            <>
              <motion.span
                animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="block w-3.5 h-3.5 rounded-full border border-black/30 border-t-black"
              />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
        <span className="text-[11px] text-neutral-600">Replies within 24–48 hours · IST</span>
      </div>

      <AnimatePresence>
        {status.state === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5"
          >
            <div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
            <div className="text-[13px] text-emerald-200/90">{status.msg}</div>
          </motion.div>
        )}
        {status.state === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-rose-500/20 bg-rose-500/5"
          >
            <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-400" />
            <div className="text-[13px] text-rose-200/90">{status.msg}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

// =============== CONTACT ===============
const Contact = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full blur-[140px] bg-white/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal><Eyebrow num="11">Contact</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl lg:text-6xl tracking-[-0.045em] text-white leading-[1.02] max-w-5xl">
            Open to leadership opportunities across <span className="serif italic font-normal text-neutral-300">Operations, Trust &amp; Safety, CX Transformation, Marketplace Governance,</span> and <span className="serif italic font-normal text-neutral-300">AI‑enabled</span> Business Operations.
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — direct channels */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Direct channels</div>
              <div className="grid gap-px bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
                {[
                  { icon: Mail, label: 'Email', value: 'aniruddha.vanshiv@gmail.com', href: 'mailto:aniruddha.vanshiv@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 9739 299 852', href: 'tel:+919739299852' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com/in/aniruddhavanshiv' },
                  { icon: MapPin, label: 'Based in', value: 'Bengaluru, India', href: null },
                ].map(({ icon: Icon, label, value, href }) => {
                  const Comp = href ? 'a' : 'div';
                  return (
                    <Comp
                      key={label}
                      href={href || undefined}
                      target={href && href.startsWith('http') ? '_blank' : undefined}
                      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group bg-[#0a0a0a] p-5 lg:p-6 flex items-center justify-between hover:bg-[#0e0e0e] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{label}</div>
                          <div className="mt-0.5 text-[14px] text-white">{value}</div>
                        </div>
                      </div>
                      {href && <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                    </Comp>
                  );
                })}
              </div>
              <div className="pt-2 text-[12px] text-neutral-500 leading-relaxed border-l border-white/10 pl-4">
                For executive search, leadership opportunities, advisory engagements, or AI‑enabled operations programs — please use the form. All inquiries reviewed personally.
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Contact form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="border border-white/10 rounded-2xl p-7 lg:p-10 bg-gradient-to-b from-white/[0.025] to-transparent">
              <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Send a message</div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-neutral-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Inbox monitored
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// =============== FOOTER ===============
const Footer = () => (
  <footer className="border-t border-white/5 py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-full border border-white/15 flex items-center justify-center">
          <span className="text-[11px] font-medium tracking-tight">AV</span>
        </div>
        <div className="text-[12px] text-neutral-500">© {new Date().getFullYear()} Aniruddha Vanshiv. All rights reserved.</div>
      </div>
      <div className="flex items-center gap-6 text-[12px] text-neutral-400">
        <a href="https://linkedin.com/in/aniruddhavanshiv" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-white">LinkedIn</a>
        <a href="mailto:aniruddha.vanshiv@gmail.com" className="link-underline hover:text-white">Email</a>
        <a href="tel:+919739299852" className="link-underline hover:text-white">Phone</a>
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Bengaluru · India</div>
    </div>
  </footer>
);

// =============== APP ===============
function App() {
  return (
    <main className="relative bg-[#0a0a0a] text-neutral-100 selection:bg-white/20">
      <Nav />
      <Hero />
      <About />
      <ScaleMetrics />
      <Expertise />
      <Transformations />
      <AICapabilities />
      <Roadmap />
      <Philosophy />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
