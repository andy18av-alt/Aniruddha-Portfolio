'use client'

import { Reveal, Eyebrow } from "./shared";

// =============== PHILOSOPHY ===============
export default function Philosophy() {
  const principles = [
    'Customer Obsession', 'Systems Thinking', 'Structured Execution', 'Ownership Mindset',
    'Scalable Mechanism Building', 'Data‑driven Decisions', 'Cross‑functional Leadership',
    'Continuous Improvement', 'AI‑augmented Productivity', 'Calm Execution Under Ambiguity',
  ];
  return (
    <section id="philosophy" className="relative py-32 lg:py-40 border-t border-white/5">
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
}
