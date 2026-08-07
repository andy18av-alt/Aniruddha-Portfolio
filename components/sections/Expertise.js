'use client'

import { Compass, Shield, Network, Zap, Users, GitBranch, Rocket, Workflow, Settings2, Target, Activity, ScanSearch, Layers, FileBarChart, BarChart3, Brain } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";

// =============== EXPERTISE ===============
export default function Expertise() {
  const items = [
    { icon: Compass, label: 'Strategic Operations' },
    { icon: Shield, label: 'Trust & Safety' },
    { icon: Network, label: 'Marketplace Operations' },
    { icon: Zap, label: 'Hyperlocal Commerce' },
    { icon: Users, label: 'Customer Experience Transformation' },
    { icon: GitBranch, label: 'Reverse Logistics' },
    { icon: Rocket, label: 'Business Transformation' },
    { icon: Workflow, label: 'Program Management' },
    { icon: Settings2, label: 'Product Operations' },
    { icon: Target, label: 'Operational Excellence' },
    { icon: Activity, label: 'Performance Governance' },
    { icon: ScanSearch, label: 'Risk Mitigation' },
    { icon: Layers, label: 'Stakeholder Leadership' },
    { icon: FileBarChart, label: 'Process Design' },
    { icon: BarChart3, label: 'Data‑driven Decisions' },
    { icon: Brain, label: 'Cross‑functional Execution' },
  ];
  return (
    <section id="expertise" className="relative py-32 lg:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow num="03">Core Expertise</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl lg:text-5xl tracking-[-0.04em] text-white leading-[1.05]">
                Leadership <span className="serif italic font-normal text-neutral-300">capabilities</span> built across enterprise systems.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[14px] text-neutral-400 leading-relaxed max-w-md">
                A multi‑disciplinary toolkit refined over 13+ years — operating where business outcomes meet operational design and customer trust.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {items.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.025} y={12}>
                <div className="exec-card bg-[#0a0a0a] p-5 lg:p-6 h-full min-h-[140px] flex flex-col justify-between">
                  <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white" strokeWidth={1.4} />
                  <div className="text-[13px] text-neutral-200 font-medium leading-snug">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
