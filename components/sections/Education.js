'use client'

import { GraduationCap, BookOpen } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

// =============== EDUCATION ===============
export default function Education() {
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
}
