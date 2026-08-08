// TrustOS case study page
// Place at: app/case-studies/trustos/page.js
// Requires: framer-motion, lucide-react

'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowUpRight, BrainCircuit, CircleDot, Eye, FileCheck2,
  Gauge, Gavel, GitBranch, GitPullRequest, Layers3, LockKeyhole, Network,
  Scale, ShieldCheck, Sparkles, UserRoundCheck, Workflow, Zap
} from 'lucide-react'

function TrustOSLogo({ size = 'md', compact = false }) {
  const sizes = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-20 w-20',
    hero: 'h-28 w-28 sm:h-36 sm:w-36',
  }

  return (
    <div className={`flex items-center ${compact ? 'gap-2.5' : 'gap-4'}`}>
      <img
        src="/trustos-logo.png"
        alt="TrustOS — AI-native Trust & Safety Operating System"
        className={`${sizes[size]} object-contain rounded-2xl`}
      />
      {!compact && (
        <div>
          <div className="text-lg font-semibold tracking-tight text-white">TrustOS</div>
          <div className="text-[8px] uppercase tracking-[0.22em] text-neutral-500">Trust &amp; Safety</div>
        </div>
      )}
    </div>
  )
}

const agents = [
  ['Evidence Intelligence Engine', 'Evidence', Eye, 'text-cyan-300', 'bg-cyan-400/10', 'Aggregates customer, seller, product and marketplace signals into an investigation-ready evidence set.'],
  ['Policy Compliance Engine', 'Policy', Scale, 'text-emerald-300', 'bg-emerald-400/10', 'Maps observed signals to applicable policy rules and surfaces potential violations with rationale.'],
  ['Brand Authentication Engine', 'Brand', ShieldCheck, 'text-violet-300', 'bg-violet-400/10', 'Evaluates brand-protection and counterfeit indicators without treating weak signals as conclusive proof.'],
  ['Autonomous Risk Council', 'Risk Council', Gavel, 'text-amber-300', 'bg-amber-400/10', 'Synthesizes independent agent findings, weighs conflicting evidence and produces a confidence-aware recommendation.'],
  ['Compliance Decision Engine', 'Decision', FileCheck2, 'text-blue-300', 'bg-blue-400/10', 'Translates risk and confidence into an explainable action path, including human approval where required.'],
]

const principles = [
  ['01', 'Evidence before enforcement', 'High-risk does not automatically mean high-confidence.'],
  ['02', 'Specialized reasoning', 'Different investigation questions deserve different reasoning agents.'],
  ['03', 'Human governance', 'Consequential enforcement remains accountable to people.'],
  ['04', 'Explainable decisions', 'Every recommendation should have an auditable rationale.'],
]

const stats = [
  ['18,742', 'Historical investigations'],
  ['4,286', 'Marketplace sellers'],
  ['318', 'Protected brands'],
  ['96,500', 'Products protected'],
  ['2.84M', 'Reviews analysed'],
  ['42', 'Countries represented'],
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
      <span className="text-neutral-600">{number}</span>
      <span className="h-px w-7 bg-white/10" />
      <span>{children}</span>
    </div>
  )
}

function Signal({ label, value, tone = 'neutral' }) {
  const tones = {
    neutral: 'border-white/10 bg-white/[0.025] text-neutral-300',
    danger: 'border-red-400/20 bg-red-400/[0.06] text-red-300',
    good: 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300',
    blue: 'border-blue-400/20 bg-blue-400/[0.06] text-blue-300',
  }
  return (
    <div className={`rounded-xl border px-4 py-3 ${tones[tone]}`}>
      <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  )
}

function CommandCenterMockup() {
  const cards = [
    ['20', 'Active investigations', '20 in queue', 'cyan'],
    ['1', 'Critical cases', 'Priority: critical', 'red'],
    ['90', 'High-risk sellers', '300 sellers tracked', 'red'],
    ['3.94', 'Avg seller rating', 'Across active sellers', 'green'],
  ]

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080d1b] shadow-2xl shadow-violet-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(124,58,237,.18),transparent_30%),radial-gradient(circle_at_15%_35%,rgba(14,165,233,.08),transparent_25%)]" />
      <div className="relative border-b border-white/10 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrustOSLogo size="sm" compact />
          <div>
            <div className="text-sm font-semibold text-white">TrustOS</div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-neutral-500">Trust &amp; Safety</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-5 text-[10px] text-neutral-500">
          <span className="text-white">Dashboard</span><span>Investigations</span><span>Sellers</span><span>Policies</span><span>Analytics</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-[9px] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> All Systems Operational
        </div>
      </div>
      <div className="relative p-5 sm:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[9px] uppercase tracking-[0.28em] text-neutral-500">Operations overview</div>
            <div className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-white">TrustOS Command Center</div>
            <div className="mt-1 text-xs text-neutral-500">AI-powered Trust &amp; Safety Operations for Enterprise Marketplaces</div>
          </div>
          <div className="hidden md:flex w-48 h-9 rounded-xl border border-white/10 bg-white/[0.03] items-center px-3 text-[10px] text-neutral-600">⌕ Search tickets, sellers, brands...</div>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map(([value, label, meta, tone]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div className={`text-[8px] uppercase tracking-[0.18em] ${tone === 'red' ? 'text-red-300/80' : tone === 'green' ? 'text-emerald-300/80' : 'text-cyan-300/80'}`}>{meta}</div>
              <div className="mt-5 text-2xl font-semibold text-white tabular-nums">{value}</div>
              <div className="mt-1 text-[10px] text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.025] p-5 min-h-[160px]">
            <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Platform scale</span><span className="text-[9px] text-emerald-300">Historical footprint</span></div>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.slice(0, 4).map(([value, label]) => <div key={label}><div className="text-lg font-semibold text-white">{value}</div><div className="mt-1 text-[9px] leading-tight text-neutral-600">{label}</div></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 min-h-[160px]">
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Resolution mix</div>
            <div className="mt-6 h-2 rounded-full bg-white/5 overflow-hidden flex"><div className="w-[95%] bg-emerald-400" /><div className="w-[5%] bg-red-400" /></div>
            <div className="mt-4 flex justify-between text-[10px]"><span className="text-emerald-300">94.8% AI-resolved</span><span className="text-red-300">5.2% human</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgentPipeline() {
  const [active, setActive] = useState(0)
  const agent = agents[active]
  const Icon = agent[2]

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
      <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
        <div className="text-[9px] uppercase tracking-[0.24em] text-neutral-600">Agent stack · 5 / 5</div>
        <div className="mt-5 space-y-2">
          {agents.map((item, index) => {
            const ItemIcon = item[2]
            const selected = index === active
            return (
              <button key={item[0]} onClick={() => setActive(index)} className={`w-full text-left rounded-2xl border px-4 py-3.5 transition-all ${selected ? 'border-white/15 bg-white/[0.06]' : 'border-transparent hover:border-white/8 hover:bg-white/[0.025]'}`}>
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl ${item[4]} flex items-center justify-center ${item[3]}`}><ItemIcon className="w-4 h-4" /></div>
                  <div className="min-w-0 flex-1"><div className="text-sm text-white truncate">{item[0]}</div><div className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-emerald-400/70">✓ Complete</div></div>
                  <span className="text-[10px] text-neutral-700">0{index + 1}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      <motion.div key={agent[0]} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-white/10 bg-[#0c1222] p-7 sm:p-9 relative overflow-hidden">
        <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl ${agent[4]}`} />
        <div className="relative">
          <div className="flex items-center gap-4"><div className={`h-12 w-12 rounded-2xl ${agent[4]} flex items-center justify-center ${agent[3]}`}><Icon className="w-6 h-6" /></div><div><div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Selected agent</div><h3 className="mt-1 text-xl font-semibold text-white">{agent[0]}</h3></div></div>
          <p className="mt-8 text-sm leading-7 text-neutral-400 max-w-xl">{agent[5]}</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3"><Signal label="Role" value="Specialist" /><Signal label="Output" value="Evidence + rationale" tone="blue" /><Signal label="Status" value="Complete" tone="good" /></div>
          <div className="mt-8 rounded-2xl border border-white/8 bg-black/20 p-5 font-mono text-[11px] leading-6 text-neutral-500">
            <span className="text-emerald-400">agent.complete</span> → {agent[1].toLowerCase().replaceAll(' ', '_')}<br />
            <span className="text-violet-300">confidence</span> → calibrated against available evidence<br />
            <span className="text-blue-300">handoff</span> → Autonomous Risk Council
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function DecisionSimulator() {
  const [confidence, setConfidence] = useState('medium')
  const [risk, setRisk] = useState('high')
  const decision = useMemo(() => {
    if (risk === 'low' && confidence === 'high') return { title: 'AI Resolution', detail: 'Proceed through autonomous resolution with standard audit logging.', tone: 'good' }
    if (risk === 'critical' && confidence === 'high') return { title: 'Human Approval', detail: 'Prepare an explainable enforcement recommendation and require human authorization.', tone: 'danger' }
    return { title: 'Manual Trust & Safety Review', detail: 'Withhold immediate enforcement and route the case for human validation.', tone: 'blue' }
  }, [confidence, risk])

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="text-[9px] uppercase tracking-[0.24em] text-neutral-600">Interactive decision model</div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Governance changes with evidence.</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-500">TrustOS separates risk from confidence so that high-risk cases with incomplete evidence do not automatically become enforcement actions.</p>
          <div className="mt-7 space-y-5">
            <div><div className="flex justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-500"><span>Risk level</span><span className="text-white">{risk}</span></div><div className="mt-2 grid grid-cols-3 gap-2">{['low', 'high', 'critical'].map(v => <button key={v} onClick={() => setRisk(v)} className={`h-9 rounded-xl border text-[10px] uppercase tracking-[0.15em] transition ${risk === v ? 'border-white/20 bg-white/10 text-white' : 'border-white/8 text-neutral-600 hover:text-neutral-300'}`}>{v}</button>)}</div></div>
            <div><div className="flex justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-500"><span>AI confidence</span><span className="text-white">{confidence}</span></div><div className="mt-2 grid grid-cols-3 gap-2">{['low', 'medium', 'high'].map(v => <button key={v} onClick={() => setConfidence(v)} className={`h-9 rounded-xl border text-[10px] uppercase tracking-[0.15em] transition ${confidence === v ? 'border-white/20 bg-white/10 text-white' : 'border-white/8 text-neutral-600 hover:text-neutral-300'}`}>{v}</button>)}</div></div>
          </div>
        </div>
        <motion.div key={`${risk}-${confidence}`} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className={`rounded-3xl border p-6 ${decision.tone === 'good' ? 'border-emerald-400/20 bg-emerald-400/[0.05]' : decision.tone === 'danger' ? 'border-red-400/20 bg-red-400/[0.05]' : 'border-blue-400/20 bg-blue-400/[0.05]'}`}>
          <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Recommended governance path</span><CircleDot className="w-4 h-4 text-neutral-500" /></div>
          <div className="mt-10 text-2xl font-semibold text-white">{decision.title}</div>
          <p className="mt-3 text-sm leading-6 text-neutral-400">{decision.detail}</p>
          <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500"><LockKeyhole className="w-3.5 h-3.5" /> Auditable action path</div>
        </motion.div>
      </div>
    </div>
  )
}

function InvestigationCard() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0b1020] overflow-hidden shadow-2xl shadow-blue-950/10">
      <div className="border-b border-white/8 px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-xl bg-red-400/10 text-red-300 flex items-center justify-center"><ShieldCheck className="w-4 h-4" /></div><div><div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500">Investigation complete</div><div className="mt-1 text-sm font-medium text-white">Trust &amp; Safety Investigation Summary</div></div></div>
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em]"><span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-blue-300">AI Confidence · Medium</span><span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1.5 text-violet-300">Human validation required</span></div>
      </div>
      <div className="p-5 sm:p-7">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[['Ticket', 'TKT-1001'], ['Seller', 'SELLER-1004'], ['Brand', 'Apple'], ['Product', 'AirPods Pro'], ['Type', 'Counterfeit Electronics'], ['Completed', '4.2 seconds']].map(([k, v]) => <div key={k}><div className="text-[8px] uppercase tracking-[0.18em] text-neutral-600">{k}</div><div className="mt-2 text-xs text-neutral-300 leading-5">{v}</div></div>)}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3"><Signal label="Risk score" value="80 / 100 · High" tone="danger" /><Signal label="Decision" value="Manual review" /><Signal label="Evidence signals" value="5 behavioural indicators" tone="blue" /><Signal label="Policy matches" value="3 matched rules" /></div>
        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5"><div className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">Executive reasoning</div><p className="mt-3 text-sm leading-7 text-neutral-400">Multiple agents identified a high-risk scenario involving customer allegations, seller history and marketplace indicators of possible counterfeit electronics. However, the system found no direct, conclusive evidence of counterfeiting. The recommendation therefore withholds immediate enforcement and routes the case to manual Trust &amp; Safety review.</p></div>
        <div className="mt-5 flex flex-wrap items-center gap-3"><div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-orange-300"><UserRoundCheck className="w-3.5 h-3.5" /> Human approval required</div><div className="text-[10px] text-neutral-600">No immediate enforcement · Evidence request · Brand Protection escalation if evidence emerges</div></div>
      </div>
    </div>
  )
}

export default function TrustOSCaseStudy() {
  return (
    <main className="min-h-screen bg-[#070a12] text-neutral-100 selection:bg-violet-500/30 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_0%,rgba(91,33,182,.14),transparent_28%),radial-gradient(circle_at_0%_35%,rgba(14,116,144,.08),transparent_25%)]" />

      <header className="relative z-20 border-b border-white/6 bg-[#070a12]/80 backdrop-blur-xl sticky top-0">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-5"><Link href="/" className="inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to portfolio</Link><div className="hidden md:block h-5 w-px bg-white/10" /><TrustOSLogo size="sm" compact /></div>
          <div className="hidden sm:flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-neutral-600"><span>TrustOS</span><span>·</span><span>Product Case Study</span></div>
          <a href="https://risk-arbiter.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-neutral-200 hover:bg-white/5 transition"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live demo <ArrowUpRight className="w-3 h-3" /></a>
        </div>
      </header>

      <section className="relative z-10 pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-end">
            <Reveal>
              <SectionLabel number="01">Flagship AI Product</SectionLabel>
              <div className="mt-7 flex items-center gap-4"><TrustOSLogo size="md" compact /><div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">Trust &amp; Safety · Enterprise AI</div></div>
              <h1 className="mt-7 font-display text-[clamp(3.7rem,9vw,8.5rem)] leading-[.86] tracking-[-0.065em] text-white">Trust<span className="serif italic font-normal text-neutral-400">OS</span></h1>
              <p className="mt-7 max-w-2xl text-xl sm:text-2xl leading-relaxed tracking-tight text-neutral-300">An AI-native operating system for <span className="text-white">explainable marketplace investigations</span> and human-governed enforcement.</p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">Designed around a simple premise: AI should compress investigation work and improve decision quality without removing human accountability from consequential actions.</p>
              <div className="mt-8 flex flex-wrap gap-2">{['Multi-Agent AI', 'Risk Intelligence', 'Policy Intelligence', 'Human-in-the-Loop', 'Enterprise AI'].map(x => <span key={x} className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] text-neutral-400">{x}</span>)}</div>
              <div className="mt-9 flex flex-wrap gap-3"><a href="https://risk-arbiter.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-xs font-medium hover:bg-neutral-200 transition">Launch TrustOS <ArrowUpRight className="w-3.5 h-3.5" /></a><a href="https://github.com/andy18av-alt/TrustOS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-neutral-200 hover:bg-white/5 transition">View source <ArrowUpRight className="w-3.5 h-3.5" /></a></div>
            </Reveal>
            <Reveal delay={0.12}><div className="relative"><div className="absolute -inset-6 rounded-[36px] bg-violet-600/10 blur-3xl" /><CommandCenterMockup /></div></Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/6 bg-white/[0.015] py-8"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">{stats.map(([value, label]) => <div key={label}><div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">{value}</div><div className="mt-1 text-[9px] uppercase tracking-[0.16em] leading-4 text-neutral-600">{label}</div></div>)}</div></section>

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-14">
            <Reveal><SectionLabel number="02">The problem</SectionLabel><h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white leading-[1.02]">Trust &amp; Safety does not scale <span className="serif italic font-normal text-neutral-400">linearly</span> with marketplace complexity.</h2></Reveal>
            <Reveal delay={0.08}><div className="grid sm:grid-cols-2 gap-4">{['Evidence is fragmented across systems.', 'Analysts spend time collecting signals instead of judging them.', 'Policy interpretation changes with context and market.', 'High-risk signals can be mistaken for conclusive evidence.'].map((x, i) => <div key={x} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"><div className="text-[10px] text-neutral-700">0{i + 1}</div><p className="mt-6 text-base leading-7 text-neutral-400">{x}</p></div>)}</div><div className="mt-5 rounded-2xl border border-violet-400/15 bg-violet-400/[0.04] p-6"><div className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">Design question</div><p className="mt-3 text-lg sm:text-xl leading-8 text-white">How do you move from <span className="text-violet-300">signal → investigation → reasoning → decision</span> without removing humans from the loop?</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal><SectionLabel number="03">The product thesis</SectionLabel><div className="mt-7 max-w-4xl"><h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.05em] leading-[1] text-white">AI should not replace the Trust &amp; Safety analyst. <span className="serif italic font-normal text-neutral-400">It should make the analyst dramatically more powerful.</span></h2></div></Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{principles.map(([n, title, body], i) => <Reveal key={title} delay={i * .05}><div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6"><div className="text-[9px] uppercase tracking-[0.2em] text-violet-300/60">{n}</div><h3 className="mt-12 text-lg font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-500">{body}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal><SectionLabel number="04">The architecture</SectionLabel><div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6"><h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">A multi-agent system built for <span className="serif italic font-normal text-neutral-400">consequential decisions.</span></h2><p className="max-w-md text-sm leading-6 text-neutral-500">TrustOS decomposes investigation into specialist reasoning domains instead of asking one model to make the entire decision.</p></div></Reveal>
          <div className="mt-12"><AgentPipeline /></div>
          <Reveal delay={0.08}><div className="mt-8 grid md:grid-cols-5 gap-2">{agents.map((agent, i) => <div key={agent[0]} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3 text-[10px] text-neutral-500"><span className="text-neutral-700">0{i + 1}</span><span className="truncate">{agent[1]}</span>{i < agents.length - 1 && <GitBranch className="hidden md:block ml-auto w-3 h-3 text-neutral-700" />}</div>)}</div></Reveal>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal><SectionLabel number="05">How it works</SectionLabel><h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">From investigation trigger to <span className="serif italic font-normal text-neutral-400">governed decision.</span></h2></Reveal>
          <div className="mt-14 grid md:grid-cols-5 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8">{[['01', 'Detect', 'A suspicious marketplace signal enters TrustOS.', Zap], ['02', 'Investigate', 'Evidence Intelligence gathers relevant signals.', BrainCircuit], ['03', 'Reason', 'Policy, brand and risk agents independently evaluate the case.', Network], ['04', 'Deliberate', 'The Risk Council synthesizes competing evidence.', Gavel], ['05', 'Govern', 'The Decision Engine determines the appropriate action path.', UserRoundCheck]].map(([n, title, body, Icon], i) => <Reveal key={title} delay={i * .04}><div className="h-full bg-[#0b0f19] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.2em] text-neutral-700">{n}</span><Icon className="w-4 h-4 text-neutral-600" /></div><h3 className="mt-12 text-lg font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-500">{body}</p></div></Reveal>)}</div>
          <div className="mt-10 rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.035] p-7 sm:p-9"><div className="flex items-start gap-4"><div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-300"><Workflow className="w-5 h-5" /></div><div><div className="text-[9px] uppercase tracking-[0.2em] text-emerald-300/70">The differentiator</div><p className="mt-3 text-xl sm:text-2xl leading-8 text-white">TrustOS doesn't just generate an answer. <span className="text-emerald-300">It generates an auditable decision path.</span></p></div></div></div>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal><SectionLabel number="06">Investigation walkthrough</SectionLabel><div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6"><h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">When AI finds risk but evidence isn't <span className="serif italic font-normal text-neutral-400">conclusive.</span></h2><p className="max-w-md text-sm leading-6 text-neutral-500">A representative Apple AirPods Pro investigation from the TrustOS demo environment.</p></div></Reveal>
          <Reveal delay={0.08} className="mt-12"><InvestigationCard /></Reveal>
          <Reveal delay={0.12} className="mt-8"><DecisionSimulator /></Reveal>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal><SectionLabel number="07">Executive intelligence</SectionLabel><h2 className="mt-6 max-w-4xl text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">TrustOS is more than an investigation tool. It turns operational activity into <span className="serif italic font-normal text-neutral-400">risk intelligence.</span></h2></Reveal>
          <div className="mt-12 grid lg:grid-cols-2 gap-5"><Reveal><div className="h-full rounded-3xl border border-white/8 bg-white/[0.02] p-7 sm:p-9"><div className="flex items-center gap-3"><Gauge className="w-5 h-5 text-violet-300" /><span className="text-sm font-medium text-white">Portfolio-level visibility</span></div><div className="mt-8 space-y-4">{[['Investigation trends', 'Volume and change over time'], ['Risk distribution', 'Critical, high, medium and low exposure'], ['AI vs human decisions', 'Where automation is working — and where it isn’t'], ['Top high-risk sellers', 'Seller-level concentration of violations']].map(([a, b]) => <div key={a} className="flex items-center justify-between gap-6 border-b border-white/6 pb-4"><div className="text-sm text-neutral-300">{a}</div><div className="text-[10px] text-neutral-600 text-right">{b}</div></div>)}</div></div></Reveal><Reveal delay={.08}><div className="h-full rounded-3xl border border-white/8 bg-[#0b1020] p-7 sm:p-9"><div className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">Demo operating footprint</div><div className="mt-8 grid grid-cols-2 gap-3">{stats.map(([value, label]) => <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"><div className="text-xl font-semibold text-white">{value}</div><div className="mt-2 text-[9px] uppercase tracking-[0.14em] leading-4 text-neutral-600">{label}</div></div>)}</div><div className="mt-5 text-[9px] leading-5 text-neutral-700">Representative / synthetic operating data shown in the product demo.</div></div></Reveal></div>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 border-y border-white/6 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14"><Reveal><SectionLabel number="08">Why it matters</SectionLabel><h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">From an AI demo to an <span className="serif italic font-normal text-neutral-400">operating model.</span></h2></Reveal><Reveal delay={.08}><div className="space-y-5">{[['Analyst productivity', 'Compress repetitive evidence gathering and investigation preparation.'], ['Decision quality', 'Improve consistency through independent evidence synthesis and explicit confidence.'], ['Risk reduction', 'Surface emerging seller and product risk earlier.'], ['Governance', 'Keep consequential enforcement accountable to human decision-makers.'], ['Scalability', 'Increase investigation capacity without proportionally increasing analyst workload.'], ['Executive visibility', 'Turn operational investigations into portfolio-level risk intelligence.']].map(([a,b]) => <div key={a} className="grid sm:grid-cols-[1fr_1.5fr] gap-5 border-b border-white/7 pb-5"><div className="text-base text-white">{a}</div><div className="text-sm leading-6 text-neutral-500">{b}</div></div>)}</div></Reveal></div></div>
      </section>

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Reveal><SectionLabel number="09">Built from an operator's perspective</SectionLabel><div className="mt-7 max-w-5xl"><p className="text-3xl sm:text-5xl leading-[1.08] tracking-[-0.045em] text-white">The opportunity isn't simply to automate investigations. <span className="serif italic font-normal text-neutral-400">It's to redesign the operating model around AI.</span></p></div></Reveal><Reveal delay={.1} className="mt-12"><div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-7 sm:p-10"><div className="grid md:grid-cols-4 gap-8">{[['Trust & Safety', ShieldCheck], ['Marketplace Operations', Layers3], ['Product Strategy', GitPullRequest], ['AI Systems', Sparkles]].map(([x, Icon]) => <div key={x} className="flex items-center gap-3 text-sm text-neutral-300"><Icon className="w-4 h-4 text-neutral-600" />{x}</div>)}</div><div className="mt-10 pt-8 border-t border-white/7 text-sm leading-7 text-neutral-500 max-w-3xl">TrustOS reflects an operator-led approach to AI product design: start with the decision and workflow, then use AI to remove friction, improve reasoning quality and create scalable mechanisms around the people accountable for the outcome.</div></div></Reveal></div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 border-t border-white/6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><Reveal><SectionLabel number="10">Roadmap</SectionLabel><h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-[-0.045em] text-white">From TrustOS to <span className="serif italic font-normal text-neutral-400">continuous trust intelligence.</span></h2></Reveal><div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-3">{[['V1', 'Multi-agent investigations', 'Current'], ['V2', 'Marketplace integrations', 'Next'], ['V3', 'Continuous seller monitoring', 'Next'], ['V4', 'Predictive risk detection', 'Future'], ['V5', 'Cross-marketplace intelligence', 'Future'], ['V6', 'Autonomous-but-governed Trust Operations', 'Vision']].map(([v, t, s], i) => <Reveal key={v} delay={i * .04}><div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-5"><div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.18em] text-violet-300/70">{v}</span><span className="text-[8px] uppercase tracking-[0.15em] text-neutral-700">{s}</span></div><div className="mt-8 text-sm leading-6 text-white">{t}</div></div></Reveal>)}</div></div>
      </section>

      <section className="relative z-10 py-24 sm:py-36">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center"><Reveal><div className="flex justify-center"><TrustOSLogo size="hero" /></div><div className="mt-8 text-[9px] uppercase tracking-[0.28em] text-neutral-600">The vision</div><h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.055em] leading-[.98] text-white">An AI operating system for <span className="serif italic font-normal text-neutral-400">marketplace trust.</span></h2><p className="mt-7 mx-auto max-w-2xl text-sm sm:text-base leading-7 text-neutral-500">Continuously detecting, investigating, reasoning and learning — while keeping humans accountable for consequential decisions.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="https://risk-arbiter.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-xs font-medium hover:bg-neutral-200 transition">Launch TrustOS <ArrowUpRight className="w-3.5 h-3.5" /></a><a href="https://github.com/andy18av-alt/TrustOS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-xs text-neutral-200 hover:bg-white/5 transition">Explore GitHub <ArrowUpRight className="w-3.5 h-3.5" /></a><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition">Back to portfolio <ArrowLeft className="w-3.5 h-3.5" /></Link></div></Reveal></div>
      </section>

      <footer className="relative z-10 border-t border-white/6 py-8"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] uppercase tracking-[0.18em] text-neutral-700"><span className="flex items-center gap-2"><img src="/trustos-logo.png" alt="" className="h-6 w-6 rounded-md object-contain" /> TrustOS · Product Case Study</span><span>Aniruddha Vanshiv · 2026</span></div></footer>
    </main>
  )
}
