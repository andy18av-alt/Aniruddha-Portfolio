'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTRAIT_URL, Reveal, scrollTo } from "./shared";

// =============== HERO ===============
export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 lg:pt-24"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Ambient gradient */}
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
                Available for Executive Leadership Opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display text-[42px] sm:text-[54px] lg:text-[72px] xl:text-[80px] leading-[0.98] tracking-[-0.045em] font-medium text-white">
              <span className="block">
                Building{" "}
                <span className="serif italic font-normal text-neutral-200">
                  AI-powered
                </span>{" "}
                products
              </span>

              <span className="block">
                that{" "}
                <span className="serif italic font-normal text-neutral-200">
                  transform
                </span>{" "}
                operations
              </span>

              <span className="block">
                at enterprise scale.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-[560px] text-[15.5px] sm:text-base leading-[1.7] text-neutral-400">
              Associate Director with{" "}
              <span className="text-neutral-200">13+ years</span> building
              products, trust systems, and AI-enabled operating models that
              improve customer experience, reduce risk, and deliver measurable
              business outcomes.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-[560px] text-[14px] leading-[1.75] text-neutral-500">
              I design products that simplify complexity—combining product
              strategy, operational excellence, trust &amp; safety, and
              practical AI to create scalable systems that help businesses
              move faster, operate smarter, and serve customers better.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap items-center gap-3 pt-2">

              <button
                onClick={() => scrollTo("work")}
                className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-colors"
              >
                View Case Studies

                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
  onClick={() => {
    sessionStorage.setItem('resumeRequest', 'true');
    scrollTo('contact');
  }}
  className="group inline-flex items-center gap-2 h-11 px-6 rounded-full border border-white/15 text-[13px] font-medium text-neutral-100 hover:border-white/35 hover:bg-white/[0.03] transition-all"
>

                Request Resume

                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

            </div>
          </Reveal>

          {/* Capability line */}
          <Reveal delay={0.42}>
            <div className="pt-8 border-t border-white/[0.06] max-w-[560px]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">

                <span>AI Strategy</span>
                <span className="text-neutral-700">•</span>

                <span>Product Leadership</span>
                <span className="text-neutral-700">•</span>

                <span>Trust &amp; Safety</span>
                <span className="text-neutral-700">•</span>

                <span>Marketplace Operations</span>
                <span className="text-neutral-700">•</span>

                <span>CX Transformation</span>
                <span className="text-neutral-700">•</span>

                <span>Enterprise AI</span>

              </div>
            </div>
          </Reveal>

        </div>

        {/* RIGHT — Portrait */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="relative aspect-[4/5] w-full max-w-[500px]"
          >

            {/* soft glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent blur-2xl rounded-[32px]" />

            <div className="relative h-full w-full rounded-[20px] overflow-hidden border border-white/[0.08]">

              <img
                src={PORTRAIT_URL}
                alt="Aniruddha Vanshiv"
                className="h-full w-full object-cover object-[center_20%] grayscale contrast-[1.08] brightness-[0.95]"
              />

              {/* vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              {/* editorial caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">

                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-300/90">
                    Aniruddha Vanshiv
                  </div>

                  <div className="mt-2 text-[13px] text-white font-medium">
                    Product Strategy • Trust &amp; Safety • AI
                  </div>
                </div>

                <div className="text-[10px] uppercase tracking-[0.24em] text-neutral-400/80 text-right leading-tight">
                  Bengaluru
                  <br />
                  India
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="scroll-indicator" />

        <span className="text-[9.5px] uppercase tracking-[0.32em] text-neutral-600">
          Scroll
        </span>
      </motion.div>

    </section>
  );
}