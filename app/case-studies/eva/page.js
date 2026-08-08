'use client';

import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  ClipboardList,
  Cog,
  FileText,
  Gauge,
  LayoutDashboard,
  MessageSquareText,
  Sparkles,
  TriangleAlert,
  Workflow,
  Zap,
} from 'lucide-react'

const heroBadges = [
  'AI Strategy',
  'Decision Intelligence',
  'Workflow Automation',
  'Enterprise AI',
  'Google Gemini',
]

const problemCards = [
  {
    title: 'Slow Recovery',
    body: 'Manual incident management delays response when speed is critical.',
  },
  {
    title: 'Stakeholder Complexity',
    body: 'Multiple teams require synchronized communication under pressure.',
  },
  {
    title: 'Attendee Impact',
    body: 'Operational disruptions directly degrade the attendee experience.',
  },
  {
    title: 'Scale of Decisions',
    body: 'Large events generate hundreds of operational decisions difficult to coordinate manually.',
  },
]

const solutionSteps = [
  {
    title: 'Detect Incident',
    icon: Zap,
    body: 'Capture the operational signal, classify the issue, and open a structured response path.',
  },
  {
    title: 'Analyze Impact',
    icon: BrainCircuit,
    body: 'Assess stakeholder impact, constraints, urgency, and likely downstream effects.',
  },
  {
    title: 'Plan Recovery',
    icon: Workflow,
    body: 'Generate a recovery path that balances speed, coordination, and operational realism.',
  },
  {
    title: 'Execute & Brief',
    icon: MessageSquareText,
    body: 'Produce a concise executive brief and coordinate the next action.',
  },
]

const stackItems = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Lovable',
  'Responsive Dashboard UI',
]

const features = [
  'Multi-Agent Decision Intelligence',
  'AI Incident Resolution & Constraint Analysis',
  'Recovery Planning & Executive Briefings',
  'Event Operations Dashboard',
  'Business Impact Metrics',
]

const impactItems = [
  'Faster operational decision-making during live events',
  'Reduced manual coordination effort',
  'Improved organizer productivity',
  'Standardized incident response workflows',
  'Executive visibility into operational health',
]

const roadmapItems = [
  'Live Google Gemini integration',
  'Calendar synchronization',
  'Email and notification automation',
  'Venue management integrations',
  'Predictive incident detection',
  'CRM and ticketing integrations',
  'Real-time event monitoring',
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ children, number }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-sky-300/80">
      <span>{number}</span>
      <span className="h-px w-8 bg-white/10" />
      <span>{children}</span>
    </div>
  )
}

function BrandPill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-neutral-300">
      {children}
    </span>
  )
}

function MetricCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">{label}</div>
      <div className="mt-5 text-2xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-xs leading-5 text-neutral-500">{sub}</div>
    </div>
  )
}

function EVAHeroMockup() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#07101d] shadow-2xl shadow-cyan-950/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(34,211,238,.16),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.10),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,.08),transparent_25%)]" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[9px] uppercase tracking-[0.26em] text-neutral-500">EVA Command Center</div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-white">Autonomous AI Chief of Staff</div>
            <div className="mt-1 text-xs text-neutral-500">Enterprise event operations · incident response · executive briefings</div>
          </div>
          <div className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            Systems operational
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MetricCard label="Live incidents" value="12" sub="Need action now" />
          <MetricCard label="Recovery plans" value="48" sub="Generated by EVA" />
          <MetricCard label="Briefings" value="97" sub="Executive summaries" />
          <MetricCard label="Automation rate" value="84%" sub="Decision support" />
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Incident pipeline</div>
              <div className="text-[9px] text-emerald-300">Deterministic demo</div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['Detect', 'Schedule conflict at Main Stage'],
                ['Analyze', 'Impact across speakers, sponsor, venue'],
                ['Plan', 'Recovery options ranked by feasibility'],
                ['Execute', 'Brief generated for organizer review'],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4"
                >
                  <div className="mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white">{title}</div>
                    <div className="mt-1 text-xs leading-5 text-neutral-500">{body}</div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-600">Done</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Executive view</div>
            <div className="mt-5 rounded-2xl border border-sky-400/15 bg-sky-400/[0.05] p-4">
              <div className="text-[9px] uppercase tracking-[0.18em] text-sky-300/70">Current state</div>
              <div className="mt-3 text-sm font-medium text-white">High confidence recovery path ready</div>
              <div className="mt-2 text-xs leading-5 text-neutral-500">
                EVA surfaces the issue, estimates impact, and prepares the next-best response for the organizer.
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                <CircleDot className="h-3 w-3 text-cyan-300" />
                Briefing summary
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                One-line incident summary, likely business impact, recommended recovery action, and owner routing.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">Decision policy</div>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Deterministic reasoning today; Gemini orchestration-ready for live AI execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionFlow() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {solutionSteps.map((item, index) => {
        const Icon = item.icon
        return (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  0{index + 1}
                </div>
                <Icon className="h-4 w-4 text-cyan-300" />
              </div>
              <div className="mt-10 text-xl font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-6 text-neutral-500">{item.body}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

function TechnologyPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
        <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Technology stack</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <BrandPill key={item}>{item}</BrandPill>
          ))}
        </div>

        <div className="mt-8 text-[9px] uppercase tracking-[0.22em] text-neutral-500">AI models</div>
        <p className="mt-4 text-sm leading-7 text-neutral-400">
          Architected for Google Gemini 2.5 Flash. The submitted prototype uses deterministic reasoning with representative event scenarios — ensuring a stable demonstration while preserving the architecture for live LLM orchestration.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#07101d] p-7 sm:p-9">
        <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Key features</div>
        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
            >
              <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-300" />
              <div className="text-sm leading-6 text-neutral-300">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ImpactRoadmap() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
        <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Expected business impact</div>
        <div className="mt-6 space-y-3">
          {impactItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
            >
              <TriangleAlert className="mt-0.5 h-4 w-4 text-emerald-300" />
              <div className="text-sm leading-6 text-neutral-300">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#07101d] p-7 sm:p-9">
        <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Future enhancements</div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {roadmapItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-sky-400/15 bg-sky-400/[0.05] p-4">
          <div className="text-[9px] uppercase tracking-[0.2em] text-sky-300/70">Challenge</div>
          <p className="mt-2 text-sm leading-6 text-neutral-300">
            Designing a reliable multi-agent decision-making workflow within hackathon time constraints. The submitted version uses deterministic reasoning with a production-ready architecture for future live LLM integration.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EVACaseStudyPage() {
  const [activeBadge, setActiveBadge] = useState(0)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070d] text-neutral-100 selection:bg-cyan-400/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.16),transparent_25%),radial-gradient(circle_at_0%_40%,rgba(59,130,246,.08),transparent_22%),radial-gradient(circle_at_100%_70%,rgba(16,185,129,.06),transparent_18%)]" />

      <header className="sticky top-0 z-20 border-b border-white/6 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-neutral-600">
            <span>EVA</span>
            <span>·</span>
            <span>Product Case Study</span>
          </div>

          <a
            href="https://eva-chief-of-staff.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-neutral-200 transition hover:bg-white/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Live Demo
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      <section className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-18">
            <Reveal>
              <SectionLabel number="01">Flagship AI Product</SectionLabel>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/eva-logo.png"
                    alt="EVA logo"
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  Event Operations · AI Chief of Staff
                </div>
              </div>

              <h1 className="mt-7 text-[clamp(3.6rem,9vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                EVA
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-300">
                <span className="text-white">Event Virtual Administrator</span>
              </p>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed tracking-tight text-neutral-300 sm:text-2xl">
                Autonomous AI Chief of Staff for enterprise event operations.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
                EVA is designed to detect operational incidents, analyze impact, plan recovery, and brief organizers with structured decision support. The case study follows the same problem/solution/technology/impact structure documented in the submitted project material.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {heroBadges.map((badge, i) => (
                  <button
                    key={badge}
                    type="button"
                    onClick={() => setActiveBadge(i)}
                    className={`rounded-full border px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] transition ${
                      activeBadge === i
                        ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200'
                        : 'border-white/10 bg-white/[0.03] text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {badge}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://eva-chief-of-staff.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition hover:bg-neutral-200"
                >
                  Launch EVA
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/andy18av-alt/eva-chief-of-staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-neutral-200 transition hover:bg-white/5"
                >
                  View source
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-cyan-500/10 blur-3xl" />
                <EVAHeroMockup />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-white/[0.015] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-3 lg:grid-cols-6 sm:px-8 lg:px-10">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Autonomous</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Decision intelligence</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Gemini-ready</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Architecture path</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Live demo</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Published prototype</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Event ops</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Chief of staff model</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Structured</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Workflow output</div>
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white">Explainable</div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-neutral-600">Organizer briefings</div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <Reveal>
              <SectionLabel number="02">Problem statement</SectionLabel>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl leading-[1.02]">
                The coordination gap in live events.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                Large conferences involve complex coordination across speakers, sponsors, exhibitors, and venues. Incidents — cancellations, scheduling conflicts, sponsor issues — demand rapid, synchronized decisions that current platforms cannot support autonomously.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {problemCards.map((card, index) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/70">
                      0{index + 1}
                    </div>
                    <div className="mt-10 text-xl font-medium text-white">{card.title}</div>
                    <p className="mt-3 text-sm leading-6 text-neutral-500">{card.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionLabel number="03">Proposed solution</SectionLabel>
            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl leading-[1.02]">
                EVA: autonomous decision intelligence.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-neutral-500">
                EVA functions as a virtual Chief of Staff — a multi-agent AI platform where specialized agents collaborate to detect, analyze, plan, and resolve operational incidents, then brief organizers.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <SolutionFlow />
          </div>

          <div className="mt-8 rounded-[28px] border border-cyan-400/15 bg-cyan-400/[0.04] p-6 sm:p-8">
            <p className="text-base sm:text-lg leading-8 text-white">
              EVA replaces reactive manual coordination with structured, autonomous decision-making — reducing recovery time and improving operational consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionLabel number="04">Technology & features</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl leading-[1.02]">
              Architecture & capabilities.
            </h2>
          </Reveal>

          <div className="mt-14">
            <TechnologyPanel />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionLabel number="05">Business impact & future</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl leading-[1.02]">
              Impact, challenges & roadmap.
            </h2>
          </Reveal>

          <div className="mt-14">
            <ImpactRoadmap />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionLabel number="06">Demo & repository</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl leading-[1.02]">
              Live prototype & source code.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                  <Image
                    src="/EVA Logo.png"
                    alt="EVA logo and brand lockup"
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[28px] border border-white/10 bg-[#07101d] p-7 sm:p-9">
                <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Published prototype</div>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  EVA is available as a live, interactive prototype. The demo showcases incident detection, impact analysis, recovery planning, executive briefings, and operational dashboards.
                </p>

                <div className="mt-8">
                  <a
                    href="https://eva-chief-of-staff.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition hover:bg-neutral-200"
                  >
                    Open demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="mt-8 text-[9px] uppercase tracking-[0.22em] text-neutral-500">GitHub description</div>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  EVA is an autonomous AI-powered event operations platform that helps conference organizers respond to operational incidents through structured multi-agent reasoning. The prototype demonstrates incident detection, impact analysis, recovery planning, executive briefings, and operational dashboards using a deterministic AI workflow designed for future live LLM integration.
                </p>

                <div className="mt-8">
                  <a
                    href="https://github.com/andy18av-alt/eva-chief-of-staff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-neutral-200 transition hover:bg-white/5"
                  >
                    GitHub repository
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-t border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src="/eva-logo.png"
                  alt="EVA logo"
                  width={180}
                  height={180}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-8 text-[9px] uppercase tracking-[0.28em] text-neutral-600">
              Transparent by design
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl leading-[0.98]">
              EVA is architected for Gemini,
              <span className="text-neutral-400"> but demonstrated safely with deterministic scenarios.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
              The submitted prototype demonstrates representative AI reasoning using structured scenarios — preserving the architecture for live LLM orchestration.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xl font-medium text-white">Honest</div>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Deterministic reasoning is clearly stated — no overclaiming.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xl font-medium text-white">Architecture-Ready</div>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Live LLM integration is a defined next step, not a gap.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xl font-medium text-white">Demonstrable</div>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Stable, representative scenarios ensure a reliable demo.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="https://eva-chief-of-staff.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-medium text-black transition hover:bg-neutral-200"
              >
                Launch EVA
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/andy18av-alt/eva-chief-of-staff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-xs text-neutral-200 transition hover:bg-white/5"
              >
                Explore GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white"
              >
                Back to portfolio
                <ArrowLeft className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-[9px] uppercase tracking-[0.18em] text-neutral-700 sm:flex-row sm:px-8 lg:px-10">
          <span>EVA · Product Case Study</span>
          <span>Aniruddha Vanshiv · 2026</span>
        </div>
      </footer>
    </main>
  )
}
