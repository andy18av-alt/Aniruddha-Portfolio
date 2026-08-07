'use client'

import { Reveal, Eyebrow } from "./shared";

// =============== AI ROADMAP ===============
export default function Roadmap() {
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
}