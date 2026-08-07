'use client'

import { Reveal, Eyebrow } from "./shared";

// =============== EXPERIENCE TIMELINE ===============
export default function Experience() {
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
}