'use client';

import { Sparkles } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

export default function AICapabilities() {
  const chips = [
    'Generative AI',
    'AI Workflow Automation',
    'AI Agents',
    'Autonomous Systems',
    'Prompt Engineering',
    'AI Productivity Systems',
    'ChatGPT',
    'Claude Workflows',
    'Microsoft Copilot',
    'AI-assisted Analytics',
    'AI Research Systems',
    'AI Storytelling',
    'RAG Systems',
    'Make.com Automation',
    'No-code AI Workflows',
    'Voice AI Systems',
    'MCP Integrations',
    'AI-enabled Decision Systems',
  ];

  return (
    <section
      id="AILeadership"
      className="relative py-32 lg:py-40 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="nodeg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full blur-[140px] bg-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-5">

            <Reveal>
              <Eyebrow num="05">
                AI &amp; Future Capabilities
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                Building{" "}
                <span className="serif italic font-normal text-neutral-300">
                  AI-native
                </span>{" "}
                operational leadership.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] text-neutral-400 leading-relaxed max-w-md">
                Leveraging AI to improve operational efficiency,
                execution quality, decision systems, productivity,
                and scalable business workflows.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-neutral-300 border border-white/10 rounded-full px-4 h-9">
                <Sparkles className="w-3.5 h-3.5" />
                AI-enabled operational leadership
              </div>
            </Reveal>

          </div>

          <div className="lg:col-span-7">

            <Reveal delay={0.1}>
              <div className="relative border border-white/8 rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-white/[0.02] to-transparent">

                <svg
                  viewBox="0 0 400 200"
                  className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                >
                  <g
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                    fill="none"
                  >
                    <path d="M40,40 Q200,10 360,40" />
                    <path d="M40,160 Q200,190 360,160" />
                    <path d="M40,40 Q120,100 40,160" />
                    <path d="M360,40 Q280,100 360,160" />
                    <path d="M40,40 L360,160" />
                    <path d="M360,40 L40,160" />
                  </g>

                  {[
                    [40,40],
                    [360,40],
                    [40,160],
                    [360,160],
                    [200,100],
                  ].map(([x,y],i)=>(
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2.5"
                      fill="rgba(255,255,255,0.7)"
                    />
                  ))}
                </svg>

                <div className="relative flex flex-wrap gap-2.5">

                  {chips.map((chip, i)=>(
                    <Reveal
                      key={chip}
                      delay={i*0.02}
                      y={8}
                    >
                      <span className="inline-flex items-center gap-2 px-3.5 h-9 rounded-full border border-white/10 text-[12px] text-neutral-200 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/25 transition-all">
                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                        {chip}
                      </span>
                    </Reveal>
                  ))}

                </div>

              </div>
            </Reveal>

          </div>

        </div>
      </div>

    </section>
  );
}