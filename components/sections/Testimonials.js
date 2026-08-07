'use client'

import { Quote } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

// =============== TESTIMONIALS ===============
export default function Testimonials() {
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
}