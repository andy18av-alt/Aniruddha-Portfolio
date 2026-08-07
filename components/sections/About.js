'use client';

import { Reveal, Eyebrow } from "./shared";

// =============== ABOUT ===============
export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <Reveal>
          <Eyebrow num="01">About</Eyebrow>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16">

          <div className="lg:col-span-4">
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl lg:text-4xl tracking-[-0.03em] text-white leading-tight">
                An operator at the intersection of{" "}
                <span className="serif italic font-normal text-neutral-300">
                  scale, trust,
                </span>{" "}
                and{" "}
                <span className="serif italic font-normal text-neutral-300">
                  intelligence.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[15px] leading-[1.85] text-neutral-400">
            {[
              "An operations and Trust & Safety leader with 13+ years of experience building scalable systems across e-commerce, customer experience, reverse logistics, fraud mitigation, and marketplace governance.",
              "Over the years, I have led large-scale transformation initiatives focused on improving customer trust, reducing operational defects, strengthening platform integrity, and optimizing business profitability across complex marketplace ecosystems.",
              "My experience spans cross-functional leadership across Product, Engineering, Analytics, Operations, Finance, Supply Chain, and Business teams—translating ambiguous challenges into structured execution programs with measurable impact.",
              "Recently, I have been expanding into AI-powered operational systems, workflow automation, and intelligent productivity frameworks to build modern, AI-enabled execution capabilities for the next generation of digital businesses."
            ].map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.05}>
                <p>{paragraph}</p>
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
}