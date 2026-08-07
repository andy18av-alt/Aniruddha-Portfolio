'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// =============== Contact Form ===============
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', _hp: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' }); // idle | submitting | success | error
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.state === 'submitting') return;
    setStatus({ state: 'submitting', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ state: 'error', msg: data?.error || 'Could not send. Please try again.' });
        return;
      }
      setStatus({ state: 'success', msg: 'Thank you. Your message has reached Aniruddha.' });
      setForm({ name: '', email: '', company: '', message: '', _hp: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: 'Network error. Please email aniruddha.vanshiv@gmail.com directly.' });
    }
  };

  const fieldBase = "w-full bg-transparent border-b border-white/10 focus:border-white/40 outline-none text-[15px] text-white placeholder:text-neutral-600 py-3 px-0 transition-colors";

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      {/* Honeypot */}
      <input
        type="text" name="_hp" value={form._hp} onChange={onChange}
        tabIndex={-1} autoComplete="off" aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -left-[9999px] top-0 h-0 w-0"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Name</span>
          <input
            required name="name" value={form.name} onChange={onChange}
            placeholder="Your full name" className={fieldBase}
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Email</span>
          <input
            required type="email" name="email" value={form.email} onChange={onChange}
            placeholder="you@company.com" className={fieldBase}
          />
        </label>
      </div>

      <label className="block mt-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Company / Role <span className="text-neutral-700 normal-case tracking-normal">(optional)</span></span>
        <input
          name="company" value={form.company} onChange={onChange}
          placeholder="Where you're based" className={fieldBase}
        />
      </label>

      <label className="block mt-6">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Message</span>
        <textarea
          required name="message" value={form.message} onChange={onChange}
          rows={5} maxLength={5000}
          placeholder="Tell me about the opportunity, role, or context. I'll respond personally."
          className={`${fieldBase} resize-none leading-relaxed`}
        />
        <span className="block mt-1 text-[10px] text-neutral-600 tabular-nums">{form.message.length} / 5000</span>
      </label>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <button
          type="submit"
          disabled={status.state === 'submitting'}
          className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.state === 'submitting' ? (
            <>
              <motion.span
                animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="block w-3.5 h-3.5 rounded-full border border-black/30 border-t-black"
              />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
        <span className="text-[11px] text-neutral-600">Replies within 24–48 hours · IST</span>
      </div>

      <AnimatePresence>
        {status.state === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5"
          >
            <div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
            <div className="text-[13px] text-emerald-200/90">{status.msg}</div>
          </motion.div>
        )}
        {status.state === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-rose-500/20 bg-rose-500/5"
          >
            <div className="mt-0.5 h-2 w-2 rounded-full bg-rose-400" />
            <div className="text-[13px] text-rose-200/90">{status.msg}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
