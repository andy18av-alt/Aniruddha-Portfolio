'use client'

import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

// =============== SELECTED TRANSFORMATIONS ===============
export default function Products() {
  // Featured (largest) card
  const featured = {
    badge: 'NEW',
    title: 'EVA Command Center',
    description:
      'An AI‑powered operational decision support platform that analyzes event incidents, recommends recovery strategies and orchestrates operational workflows using Google Gemini.',
    tags: ['AI Strategy', 'Google Gemini', 'Workflow Automation', 'Product Design'],
    buttons: [
      { label: 'Live Demo', href: 'https://eva-chief-of-staff.lovable.app', kind: 'primary', target: '_blank', rel: 'noopener noreferrer' },
      { label: 'Case Study', href="/case-studies/eva", kind: 'ghost' },
      { label: 'GitHub', href: 'https://github.com/andy18av-alt/eva-chief-of-staff', kind: 'ghost', target: '_blank', rel: 'noopener noreferrer' },
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
                      href="/case-studies/trustos"              
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
                  <div className="relative -mx-2 mb-6 rounded-xl border border-white/[0.06] bg-[#080b16] overflow-hidden">
                    <img
                      src="/eva-logo.png"
                      alt="EVA — Event Virtual Administrator"
                      className="w-full h-auto max-h-[180px] object-contain"
                    />
                  </div>
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

        </div>
      </div>
    </section>
  );
}