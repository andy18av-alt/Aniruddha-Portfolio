'use client'

import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import ContactForm from "./ContactForm";

// =============== CONTACT ===============
export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] rounded-full blur-[140px] bg-white/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal><Eyebrow num="11">Contact</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl lg:text-6xl tracking-[-0.045em] text-white leading-[1.02] max-w-5xl">
            Open to leadership opportunities across <span className="serif italic font-normal text-neutral-300">Operations, Trust &amp; Safety, CX Transformation, Marketplace Governance,</span> and <span className="serif italic font-normal text-neutral-300">AI‑enabled</span> Business Operations.
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — direct channels */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Direct channels</div>
              <div className="grid gap-px bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
                {[
                  { icon: Mail, label: 'Email', value: 'aniruddha.vanshiv@gmail.com', href: 'mailto:aniruddha.vanshiv@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 9739 299 852', href: 'tel:+919739299852' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com/in/aniruddhavanshiv' },
                  { icon: MapPin, label: 'Based in', value: 'Bengaluru, India', href: null },
                ].map(({ icon: Icon, label, value, href }) => {
                  const Comp = href ? 'a' : 'div';
                  return (
                    <Comp
                      key={label}
                      href={href || undefined}
                      target={href && href.startsWith('http') ? '_blank' : undefined}
                      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group bg-[#0a0a0a] p-5 lg:p-6 flex items-center justify-between hover:bg-[#0e0e0e] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{label}</div>
                          <div className="mt-0.5 text-[14px] text-white">{value}</div>
                        </div>
                      </div>
                      {href && <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                    </Comp>
                  );
                })}
              </div>
              <div className="pt-2 text-[12px] text-neutral-500 leading-relaxed border-l border-white/10 pl-4">
                For executive search, leadership opportunities, advisory engagements, or AI‑enabled operations programs — please use the form. All inquiries reviewed personally.
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Contact form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="border border-white/10 rounded-2xl p-7 lg:p-10 bg-gradient-to-b from-white/[0.025] to-transparent">
              <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">Send a message</div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-neutral-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Inbox monitored
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
