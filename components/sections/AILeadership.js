'use client'

import { motion } from "framer-motion";

const AICapabilities = [
  {
    title: "AI Foundations",
    status: "Completed",
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
    items: [
      "TrustOS",
      "EVA Command Center",
      "AI Workflow Automation",
      "AI Generalist Hackathon Capstone"
    ]
  }
];

export default function AILeadership() {
  // Animation variant for the smooth slide-up effect
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="ai" className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <div className="text-neutral-500 text-sm tracking-[0.25em] uppercase">
            06
          </div>

          <h2 className="mt-6 text-4xl lg:text-6xl font-display text-white">
            AI Leadership Accelerator
          </h2>

          <p className="mt-6 max-w-3xl text-neutral-400 text-lg leading-8">
            Applied AI capability built through structured learning and real-world implementation.
            A journey from AI foundations to enterprise-scale product strategy,
            autonomous systems, workflow automation, and operational intelligence.
          </p>
        </motion.div>

        {/* Grid Animation with Staggering */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {AICapabilities.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 } 
                }
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 h-full transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white font-semibold">
                  {phase.title}
                </h3>

                <span className={`text-xs uppercase tracking-[0.2em] ${
                  phase.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {phase.status === 'Completed' ? '✓ ' : '⏳ '}{phase.status}
                </span>
              </div>

              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-neutral-400 flex items-start gap-3"
                  >
                    <span className="text-emerald-400 mt-[2px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } 
            }
          }}
          className="mt-16 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-10"
        >
          <div className="text-sm uppercase tracking-[0.22em] text-emerald-400">
            Current Focus
          </div>

          <h3 className="mt-4 text-3xl text-white font-display">
            Building Enterprise AI Operating Systems
          </h3>

          <p className="mt-5 text-neutral-300 leading-8 max-w-4xl">
            Designing enterprise-grade AI systems that combine
            Product Strategy, Trust &amp; Safety, Workflow Automation,
            Multi-Agent AI, and Decision Intelligence to solve
            complex operational challenges at scale.
          </p>
        </motion.div>

      </div>
    </section>
  );
}