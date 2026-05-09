'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, animate, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowDown, Mail, Phone, MapPin, Linkedin, Sparkles, Shield, Network, Cpu,
  GitBranch, Workflow, BarChart3, Bot, MessageSquare, Layers, Compass, Target, Users,
  Activity, FileBarChart, Settings2, Brain, ScanSearch, Zap, Rocket, ChevronRight, Quote
} from "lucide-react";

// =============== HERO PORTRAIT (grayscale) ===============
const PORTRAIT_URL = "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?auto=format&fit=crop&w=1200&q=80&sat=-100";

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
  const items = [
    ['About', 'about'], ['Scale', 'scale'], ['Expertise', 'expertise'],
    ['Work', 'work'], ['AI', 'ai'], ['Roadmap', 'roadmap'],
    ['Experience', 'experience'], ['Voices', 'voices'], ['Contact', 'contact'],
  ];
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
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
        <button onClick={() => setOpen(!open)} className="lg:hidden text-neutral-300">
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}/>
            <span className={`block h-px w-6 bg-current transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}/>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-black/90 backdrop-blur-xl"
          >
            <div className="px-6 py-6 grid grid-cols-2 gap-4">
              {items.map(([label, id]) => (
                <button key={id} onClick={() => { scrollTo(id); setOpen(false); }} className="text-left text-sm text-neutral-300">
                  {label}
                </button>
              ))}
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
  const yShift = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden pt-28 lg:pt-0 lg:flex items-center">
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] rounded-full blur-[120px] bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] rounded-full blur-[100px] bg-white/[0.03]" />
      </div>

      <motion.div style={{ y: yShift, opacity }} className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-0">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-neutral-400">Available for leadership opportunities</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.96] tracking-[-0.045em] font-medium text-white">
              Building <span className="serif italic font-normal text-neutral-200">scalable</span> operations,
              <br className="hidden sm:block" /> trust systems &amp;
              <br className="hidden sm:block" /> <span className="text-neutral-300">AI‑enabled</span> business <span className="serif italic font-normal text-neutral-200">experiences.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-[15px] sm:text-base leading-relaxed text-neutral-400">
              Associate Director with 13+ years across <span className="text-neutral-200">E‑commerce, Trust &amp; Safety, Customer Experience, Marketplace Operations, Reverse Logistics</span>, and <span className="text-neutral-200">AI‑enabled transformation</span>.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="max-w-xl text-[14px] leading-relaxed text-neutral-500">
              Bridging enterprise‑scale operational leadership with next‑generation AI workflows, intelligent automation, and scalable business transformation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={() => scrollTo('experience')} className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-colors">
                View Experience <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-white/15 text-[13px] font-medium hover:border-white/40 hover:bg-white/[0.03] transition-all">
                Let's Connect <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* Quick stats strip */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-3 gap-6 pt-10 max-w-md">
              {[['13+', 'Years'], ['$30B+', 'Ecosystem'], ['450M+', 'Customers']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl tracking-tight text-white">{v}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Portrait */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[4/5] max-w-[440px] mx-auto"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-white/5 to-transparent blur-2xl rounded-3xl" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 noise">
              <img
                src={PORTRAIT_URL}
                alt="Aniruddha Vanshiv"
                className="h-full w-full object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-300">Associate Director</div>
                  <div className="text-sm text-white mt-1">Operations · Trust &amp; Safety · CX</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Bengaluru, IN</div>
              </div>
              {/* corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/40" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-white/40" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-white/40" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/40" />
            </div>

            {/* floating UI chip */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-2 -bottom-5 hidden md:flex items-center gap-2 px-3 h-9 rounded-full bg-black/85 backdrop-blur border border-white/15 text-[11px] text-neutral-200 shadow-2xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-300" /> AI‑enabled operator
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-2 -top-5 hidden md:flex items-center gap-2 px-3 h-9 rounded-full bg-black/85 backdrop-blur border border-white/15 text-[11px] text-neutral-200 shadow-2xl"
            >
              <Shield className="w-3.5 h-3.5 text-neutral-300" /> Trust &amp; Safety
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="scroll-indicator" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
      </div>
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
  const metrics = [
    { value: 30, prefix: '$', suffix: 'B+', label: 'Commerce Ecosystem Scale', sub: 'Marketplace GMV exposure' },
    { value: 450, suffix: 'M+', label: 'Customer Ecosystem', sub: 'Active marketplace customers' },
    { value: 1.6, suffix: 'M+', decimals: 1, label: 'Seller Network', sub: 'Marketplace seller base' },
    { value: 48, prefix: '~', suffix: '%', label: 'India E‑commerce Share', sub: 'Approx. category share' },
    { value: 20, prefix: '₹', suffix: 'K+ Cr', label: 'Marketplace Revenue', sub: 'Annual marketplace scale' },
  ];
  return (
    <section id="scale" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-8">
          <div className="max-w-xl">
            <Reveal><Eyebrow num="02">Operating at Enterprise Scale</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.02]">
                Built and led inside one of India's largest <span className="serif italic font-normal text-neutral-300">digital commerce</span> ecosystems.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[14px] leading-relaxed text-neutral-400">
              Across marketplace operations, customer trust systems, reverse logistics, hyperlocal initiatives, and large‑scale operational transformation.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.06} y={16}>
              <div className="bg-[#0a0a0a] p-7 lg:p-9 h-full flex flex-col justify-between min-h-[220px] lg:min-h-[260px] group hover:bg-[#0e0e0e] transition-colors">
                <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">0{i + 1}</div>
                <div>
                  <div className="font-display text-[44px] lg:text-[64px] leading-none tracking-[-0.04em] text-white">
                    <Counter to={m.value} prefix={m.prefix || ''} suffix={m.suffix || ''} decimals={m.decimals || 0} />
                  </div>
                  <div className="mt-4 text-[13px] text-neutral-200 font-medium">{m.label}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500">{m.sub}</div>
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
  const cases = [
    {
      no: '01',
      tag: 'Customer Trust · Reverse Logistics',
      title: 'Real‑Time Return on Hold (RoH)',
      problem: '400K customers per month were facing delayed return pickup reattempts due to offline adjudication systems.',
      action: 'Built a real‑time operational intervention framework with live CX adjudication and 2.5‑minute SLA decisioning.',
      impact: 'Eliminated next‑day reattempts for ~400K monthly customers while improving customer trust and operational efficiency.',
      stat: ['400K /mo', '2.5 min SLA'],
    },
    {
      no: '02',
      tag: 'Fraud · Marketplace Profitability',
      title: 'Exchange Arbitrage Exploitation Fix',
      problem: 'Bad actors exploited exchange loopholes causing ₹1.58 Cr/month leakage.',
      action: 'Implemented rapid MRP validation controls and tactical operational interventions ahead of long‑term engineering fixes.',
      impact: 'Stopped major financial leakage and protected marketplace profitability.',
      stat: ['₹1.58 Cr /mo', 'Leakage stopped'],
    },
    {
      no: '03',
      tag: 'Fraud Operations · Risk',
      title: 'Laptop SPF Fraud Intervention',
      problem: 'Massive fraud surge in laptop claims causing severe operational and financial risk.',
      action: 'Introduced 48‑hour manual adjudication hold and proactive fraud review framework.',
      impact: 'Recovered significant losses and improved fraud actionability from 30% to 70%.',
      stat: ['30% → 70%', 'Actionability'],
    },
    {
      no: '04',
      tag: 'AI · Image Intelligence · Risk',
      title: 'AI‑enabled Fraud Detection & Image Intelligence',
      problem: 'Manual fraud detection lacked scalability and precision.',
      action: 'Partnered on AI‑assisted image intelligence and operational risk detection workflows leveraging behavioral telemetry.',
      impact: 'Improved fraud precision, strengthened marketplace integrity, and enabled scalable risk detection systems.',
      stat: ['AI‑assisted', 'Scalable detection'],
    },
  ];
  return (
    <section id="work" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal><Eyebrow num="04">Selected Transformations</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-6xl tracking-[-0.04em] text-white leading-[1.02] max-w-3xl">
                A track record of <span className="serif italic font-normal text-neutral-300">measurable</span> business outcomes.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          {cases.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.05} y={20}>
              <article className="group relative border border-white/8 rounded-2xl bg-gradient-to-b from-[#0c0c0c] to-[#0a0a0a] hover:border-white/20 transition-colors overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12">
                  <div className="lg:col-span-3 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl text-neutral-700 tabular-nums">{c.no}</span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{c.tag}</div>
                    <div className="mt-auto space-y-1">
                      {c.stat.map((s) => (
                        <div key={s} className="text-sm text-neutral-200 font-medium tabular-nums">{s}</div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.03em] text-white leading-tight max-w-2xl">
                      {c.title}
                    </h3>
                    <div className="mt-8 grid md:grid-cols-3 gap-8">
                      {[['Problem', c.problem], ['Action', c.action], ['Impact', c.impact]].map(([k, v]) => (
                        <div key={k}>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{k}</div>
                          <p className="mt-3 text-[14px] text-neutral-300 leading-relaxed">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* hover line */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            </Reveal>
          ))}
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
        <Reveal><Eyebrow num="09">Voices</Eyebrow></Reveal>
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

// =============== CONTACT ===============
const Contact = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full blur-[140px] bg-white/[0.04]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal><Eyebrow num="10">Contact</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl lg:text-7xl tracking-[-0.045em] text-white leading-[1.0] max-w-5xl">
            Open to leadership opportunities across <span className="serif italic font-normal text-neutral-300">Operations, Trust &amp; Safety, CX Transformation, Marketplace Governance,</span> and <span className="serif italic font-normal text-neutral-300">AI‑enabled</span> Business Operations.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-10 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
            Exploring opportunities across India, Dubai, APAC, and global remote‑first ecosystems.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
          {[
            { icon: Mail, label: 'Email', value: 'aniruddha.vanshiv@gmail.com', href: 'mailto:aniruddha.vanshiv@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+91 9739 299 852', href: 'tel:+919739299852' },
            { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com/in/aniruddhavanshiv' },
            { icon: MapPin, label: 'Based in', value: 'Bengaluru, India', href: null },
          ].map(({ icon: Icon, label, value, href }, i) => {
            const Comp = href ? 'a' : 'div';
            return (
              <Comp
                key={label}
                href={href || undefined}
                target={href && href.startsWith('http') ? '_blank' : undefined}
                rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-[#0a0a0a] p-7 lg:p-9 flex items-center justify-between hover:bg-[#0e0e0e] transition-colors"
              >
                <div className="flex items-center gap-5">
                  <Icon className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{label}</div>
                    <div className="mt-1 text-[15px] text-white">{value}</div>
                  </div>
                </div>
                {href && <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
              </Comp>
            );
          })}
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
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
