'use client'

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, ArrowUpRight, ShieldAlert, Cpu, TrendingUp, Users, FolderGit2 } from "lucide-react";
import { Reveal } from "./shared";

// Knowledge base and predefined responses strictly grounded in Aniruddha's background
const KNOWLEDGE_BASE = {
  trust: {
    headline: "Trust & Safety at Enterprise Scale",
    text: "Aniruddha led Trust & Safety design initiatives, focusing on risk mitigation, fraud prevention, and policy enforcement across large-scale consumer internet platforms.",
    metrics: ["Mitigated marketplace risks", "Enhanced user trust and platform safety standards"],
    followUps: ["How did he achieve the G2N improvement?", "Show relevant case studies"],
    link: { text: "View Trust & Safety Case Study", href: "#work" }
  },
  ai: {
    headline: "Enterprise AI & Autonomous Automation",
    text: "Aniruddha specializes in deploying autonomous multi-agent systems, voice AI, and workflow automation platforms (such as n8n, Vapi, and custom LLM workflows) to accelerate execution speed.",
    metrics: ["13+ years in e-commerce and consumer internet", "Pioneered AI-enabled operational models"],
    followUps: ["What measurable business outcomes has he delivered?", "Show relevant case studies"],
    link: { text: "View AI Projects", href: "#work" }
  },
  impact: {
    headline: "Measurable Business Outcomes",
    text: "Aniruddha has consistently delivered high-impact financial and operational results across Gross-to-Net (G2N) optimization, returns experience, and marketplace efficiency.",
    metrics: [
      "₹80Cr+ business impact",
      "250+ bps G2N improvement",
      "100+ bps improvement in returns experience score",
      "1,200+ ppm reduction in returns imperfections"
    ],
    followUps: ["How did he achieve the G2N improvement?", "What was his Trust & Safety strategy?"],
    link: { text: "View Impact", href: "#impact" }
  },
  leadership: {
    headline: "Executive Leadership & Operations",
    text: "With 13+ years of experience spanning leadership roles including Associate Director at Flipkart and Founder of TrustOS, Aniruddha leads distributed cross-functional teams to drive operational excellence.",
    metrics: ["13+ years of experience", "Director+ executive focus"],
    followUps: ["Tell me about his AI work", "Show me his most relevant projects"],
    link: { text: "View Leadership Journey", href: "#experience" }
  },
  projects: {
    headline: "Flagship Case Studies & Initiatives",
    text: "Aniruddha's portfolio features major case studies including TrustOS (enterprise AI platform), EVA marketplace models, and complex AI workflow automations.",
    metrics: ["TrustOS Enterprise AI", "EVA Marketplace Architecture"],
    followUps: ["What measurable business outcomes has he delivered?", "How has Aniruddha approached Trust & Safety?"],
    link: { text: "View Case Studies", href: "#work" }
  }
};

const SUGGESTIONS = [
  { id: 'trust', label: "Trust & Safety", question: "How has Aniruddha approached Trust & Safety?", icon: ShieldAlert },
  { id: 'ai', label: "AI & Automation", question: "What has he actually built with AI?", icon: Cpu },
  { id: 'impact', label: "Business Impact", question: "What measurable business outcomes has he delivered?", icon: TrendingUp },
  { id: 'leadership', label: "Leadership", question: "Tell me about his leadership experience.", icon: Users },
  { id: 'projects', label: "Case Studies", question: "Show me his most relevant projects.", icon: FolderGit2 }
];

export default function AskAniruddha() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi, I'm Aniruddha's AI guide.\n\nI can help you quickly understand his experience, leadership approach, business impact and AI work. What would you like to explore?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleQuery = (queryTypeOrText, isCustom = false) => {
    let userQueryText = queryTypeOrText;
    let matchedKey = null;

    if (!isCustom) {
      const found = SUGGESTIONS.find(s => s.id === queryTypeOrText);
      if (found) {
        userQueryText = found.question;
        matchedKey = found.id;
      }
    } else {
      const lower = queryTypeOrText.toLowerCase();
      if (lower.includes('trust') || lower.includes('safety')) matchedKey = 'trust';
      else if (lower.includes('ai') || lower.includes('automation') || lower.includes('build')) matchedKey = 'ai';
      else if (lower.includes('impact') || lower.includes('metric') || lower.includes('result') || lower.includes('g2n')) matchedKey = 'impact';
      else if (lower.includes('leader') || lower.includes('experience') || lower.includes('flipkart')) matchedKey = 'leadership';
      else if (lower.includes('project') || lower.includes('case study') || lower.includes('trustos')) matchedKey = 'projects';
    }

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userQueryText }];
    setMessages(newMessages);
    setInput("");
    setIsThinking(true);

    // Simulate AI response generation
    setTimeout(() => {
      let responseData;
      if (matchedKey && KNOWLEDGE_BASE[matchedKey]) {
        responseData = KNOWLEDGE_BASE[matchedKey];
      } else {
        responseData = {
          headline: "Portfolio Overview",
          text: "Based on the portfolio, Aniruddha is an operations executive with 13+ years of experience spanning Trust & Safety, Product Strategy, and enterprise AI transformation.",
          metrics: ["13+ years of experience", "₹80Cr+ business impact"],
          followUps: ["What measurable business outcomes has he delivered?", "Show me his most relevant projects."],
          link: { text: "View Case Studies", href: "#work" }
        };
      }

      const formattedContent = {
        role: 'assistant',
        headline: responseData.headline,
        text: responseData.text,
        metrics: responseData.metrics,
        followUps: responseData.followUps,
        link: responseData.link
      };

      setMessages(prev => [...prev, formattedContent]);
      setIsThinking(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;
    handleQuery(input, true);
  };

  return (
    <section id="ask-aniruddha" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full blur-[160px] bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 h-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10.5px] tracking-[0.24em] uppercase text-neutral-300 font-medium">
                AI Digital Concierge
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              Ask Aniruddha
            </h2>
            
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              Explore my leadership journey, business impact and experience through an AI-powered conversation.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Avatar Anchor */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Reveal delay={0.1}>
              <div className={`relative overflow-hidden rounded-[24px] border bg-black/40 shadow-2xl transition-all duration-500 ${isThinking ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(52,211,153,0.15)]' : 'border-white/10'}`}>
                {/* Static Avatar Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/aniruddha.jpg"
                    alt="AI Aniruddha Avatar"
                    className="h-full w-full object-cover object-[center_20%] grayscale contrast-[1.08] brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Thinking status indicator */}
                  {isThinking && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[10px] uppercase tracking-wider text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Thinking...
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-300 font-medium">
                      AI Aniruddha
                    </div>
                    <p className="mt-1 text-[13px] text-neutral-400 leading-relaxed">
                      Your guide to Aniruddha's experience, projects and leadership journey.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Conversation Interface */}
          <div className="lg:col-span-8 flex flex-col h-[640px] rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
            
            {/* Chat Messages Stream Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {msg.role === 'user' ? (
                    <div className="max-w-[80%] rounded-2xl bg-white text-black px-5 py-3 text-[14px] font-medium">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3 text-[14px] text-neutral-200">
                      {index === 0 ? (
                        <p className="whitespace-pre-line text-neutral-300 leading-relaxed">{msg.content}</p>
                      ) : (
                        <>
                          <div className="font-medium text-white text-[15px] tracking-tight">
                            {msg.headline}
                          </div>
                          <p className="text-neutral-300 leading-relaxed">
                            {msg.text}
                          </p>
                          {msg.metrics && msg.metrics.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                              {msg.metrics.map((metric, mIdx) => (
                                <div key={mIdx} className="flex items-center gap-2 text-[12.5px] text-emerald-400 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  <span>{metric}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {msg.link && (
                            <div className="pt-2">
                              <a
                                href={msg.link.href}
                                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
                              >
                                {msg.link.text}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                          {msg.followUps && msg.followUps.length > 0 && (
                            <div className="pt-3 border-t border-white/[0.06]">
                              <div className="text-[11px] uppercase tracking-wider text-neutral-500 mb-2">Want to go deeper?</div>
                              <div className="flex flex-wrap gap-2">
                                {msg.followUps.map((fu, fIdx) => (
                                  <button
                                    key={fIdx}
                                    onClick={() => handleQuery(fu, true)}
                                    className="text-[12px] px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                                  >
                                    {fu}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              {isThinking && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-neutral-500 text-[13px] italic p-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Aniruddha's AI Portfolio Guide is analyzing documented records...
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Question Pills (Always visible or contextual) */}
            <div className="px-6 py-3 border-t border-white/[0.06] bg-black/60">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-medium">
                Suggested Explorations
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {SUGGESTIONS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleQuery(s.id, false)}
                      disabled={isThinking}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 text-[12px] font-medium whitespace-nowrap hover:bg-white/[0.08] hover:border-white/25 transition-all disabled:opacity-50"
                    >
                      <Icon className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chat Input Bar */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/80 flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Aniruddha..."
                disabled={isThinking}
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-3 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isThinking}
                className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 disabled:opacity-40 disabled:hover:bg-white transition-all"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}