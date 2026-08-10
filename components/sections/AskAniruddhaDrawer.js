'use client'

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ShieldAlert, Cpu, TrendingUp, Users, FolderGit2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const SUGGESTIONS = [
  { id: 'trust', label: "Trust & Safety", question: "How has Aniruddha approached Trust & Safety?", icon: ShieldAlert },
  { id: 'ai', label: "AI & Automation", question: "What has he actually built with AI?", icon: Cpu },
  { id: 'impact', label: "Business Impact", question: "What measurable business outcomes has he delivered?", icon: TrendingUp },
  { id: 'leadership', label: "Leadership", question: "Tell me about his leadership experience.", icon: Users },
  { id: 'projects', label: "Case Studies", question: "Show me his most relevant projects.", icon: FolderGit2 }
];

export default function AskAniruddhaDrawer({ isOpen, onClose }) {
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
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isThinking]);

  const handleQuery = async (queryTypeOrText, isCustom = false) => {
    let userQueryText = queryTypeOrText;
    if (isCustom) {
      const found = SUGGESTIONS.find(s => s.id === queryTypeOrText);
      if (found) {
        userQueryText = found.question;
      }
    }

    const newMessages = [...messages, { role: 'user', content: userQueryText }];
    setMessages(newMessages);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: newMessages.map(m => ({ role: m.role, content: m.content })) 
        })
      });

      if (!res.ok) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      setMessages(prev => [...prev, { role: 'assistant', content: "" }]);
      setIsThinking(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataText = line.replace("data: ", "").trim();
            if (dataText === "[DONE]") break;
            try {
              const parsed = JSON.parse(dataText);
              const textContent = parsed.choices[0]?.delta?.content || "";
              assistantMessage += textContent;

              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].content = assistantMessage;
                return updated;
              });
            } catch (e) {
              // skip parse errors on partial chunks
            }
          }
        }
      }
    } catch (err) {
      setIsThinking(false);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I encountered an issue connecting to the live assistant. Please try again or reach out via the contact section." 
      }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;
    handleQuery(input, false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full max-w-xl bg-[#0d0d0d] border-l border-white/10 flex flex-col h-full shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15">
                  <img
                    src="/aniruddha.jpg"
                    alt="AI Aniruddha"
                    className="w-full h-full object-cover grayscale contrast-110"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-white">Ask Aniruddha</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] uppercase tracking-wider text-emerald-400">
                      <Sparkles className="w-2.5 h-2.5" /> AI Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">Executive Digital Concierge</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="h-9 w-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Stream */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {msg.role === 'user' ? (
                    <div className="max-w-[85%] rounded-2xl bg-white text-black px-4 py-3 text-[13.5px] font-medium">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="max-w-[92%] rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-[13.5px] text-neutral-200">
                      <div className="text-neutral-300 leading-relaxed prose prose-invert max-w-none">
                        <ReactMarkdown
                          components={{
                            a: ({ node, ...props }) => (
                              <a 
                                {...props} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white underline underline-offset-4 decoration-white/50 hover:decoration-white font-medium transition-all"
                              />
                            )
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isThinking && (
                <div className="flex items-center gap-2 text-neutral-400 text-[12.5px] italic p-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Analyzing records...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="p-4 border-t border-white/[0.06] bg-black/60">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-medium">
                Suggested Explorations
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {SUGGESTIONS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleQuery(s.id, true)}
                      disabled={isThinking}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 text-[11.5px] font-medium whitespace-nowrap hover:bg-white/[0.08] hover:border-white/25 transition-all disabled:opacity-50"
                    >
                      <Icon className="w-3 h-3 text-neutral-400" />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Aniruddha..."
                disabled={isThinking}
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2.5 text-[13.5px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isThinking}
                className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 disabled:opacity-40 transition-all"
                aria-label="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}