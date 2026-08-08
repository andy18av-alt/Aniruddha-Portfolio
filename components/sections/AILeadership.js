'use client'

import { motion } from "framer-motion";
import { Sparkles, Rocket, Bot, BarChart3, ShieldCheck, Cpu } from "lucide-react";

const AICapabilities = [
  {
    title: "AI Foundations",
    status: "Completed",
    icon: Sparkles,
    items: [
      "Generative AI Fundamentals",
      "AI Ecosystem & Research",
      "AI Productivity Systems",
      "Prompt Engineering",
      "LLM Workflows"
    ]
  },
  {
    title: "AI Product Development",
    status: "Completed",
    icon: Rocket,
    items: [
      "Build AI Products",
      "Launch AI Businesses",
      "Workflow Design",
      "AI Monetization",
      "Product Strategy"
    ]
  },
  {
    title: "AI Agents & Automation",
    status: "Completed",
    icon: Bot,
    items: [
      "AI Agents",
      "Autonomous Systems",
      "RAG",
      "MCP",
      "Voice AI",
      "Claude",
      "Microsoft Copilot"
    ]
  },
  {
    title: "AI Analytics & Storytelling",
    status: "Completed",
    icon: BarChart3,
    items: [
      "AI Analytics",
      "Power BI + AI",
      "Executive Storytelling",
      "Decision Intelligence"
    ]
  },
  {
    title: "AI Leadership",
    status: "Completed",
    icon: ShieldCheck,
    items: [
      "Career Readiness",
      "Personal Branding",
      "Executive Communication",
      "AI Leadership"
    ]
  },
  {
    title: "Applied AI Projects",
    status: "Completed",
    icon: Cpu,
    items: [
      "TrustOS",
      "EVA Command Center",
      "AI Workflow Automation",
      "AI Generalist Hackathon Capstone"
    ]
  }
];

export default function AILeadership() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="ai" className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-neutral-500 text-xs tracking-[0.25em] uppercase">
            06
          </div>

          <h2 className="mt-3 text-3xl lg:text-5xl font-display text-white">
            AI Leadership Accelerator
          </h2>

          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Applied AI capability built through structured learning and real-world implementation, 
            spanning foundations to autonomous enterprise systems.
          </p>
        </motion.div>

        {/* Compact 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {AICapabilities.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.4, delay: index * 0.05 } 
                  }
                }}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 h-full transition-colors duration-300 hover:bg-white/[0.04] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg text-white font-semibold">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-neutral-400 text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                    ✓ Completed
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Bottom Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, delay: 0.1, ease: "easeOut" } 
            }
          }}
          className="mt-10 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-emerald-400 font-medium">
              Current Focus
            </div>
            <h3 className="mt-1 text-xl text-white font-display">
              Building Enterprise AI Operating Systems
            </h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed max-w-3xl">
              Combining Product Strategy, Trust & Safety, Workflow Automation, 
              and Multi-Agent AI to solve complex operational challenges at scale.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}