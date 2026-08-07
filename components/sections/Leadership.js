'use client'

import { Reveal, Eyebrow } from "./shared";

// =============== SCALE METRICS ===============
export default function Leadership() {
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
}
