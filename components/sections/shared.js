'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

// =============== HERO PORTRAIT (grayscale) ===============
export const PORTRAIT_URL = "/aniruddha.jpg";

// =============== Helper: scroll to section ===============
export const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// =============== Animated Counter ===============
export const Counter = ({ to, prefix = "", suffix = "", decimals = 0, duration = 2 }) => {
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
export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => {
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
export const Eyebrow = ({ children, num }) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-400 font-medium">
    {num && <span className="text-neutral-600 tabular-nums">{num}</span>}
    <span className="h-px w-8 bg-neutral-700"></span>
    <span>{children}</span>
  </div>
);
