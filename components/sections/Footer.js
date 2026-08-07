'use client'


// =============== FOOTER ===============
export default function Footer() {
  return (
  <footer className="border-t border-white/5 py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-full border border-white/15 flex items-center justify-center">
          <span className="text-[11px] font-medium tracking-tight">AV</span>
        </div>
        <div className="text-[12px] text-neutral-500">© {new Date().getFullYear()} Aniruddha Vanshiv. All rights reserved.</div>
      </div>
      <div className="flex items-center gap-6 text-[12px] text-neutral-400">
        <a href="https://linkedin.com/in/aniruddhavanshiv" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-white">LinkedIn</a>
        <a href="mailto:aniruddha.vanshiv@gmail.com" className="link-underline hover:text-white">Email</a>
        <a href="tel:+919739299852" className="link-underline hover:text-white">Phone</a>
      </div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Bengaluru · India</div>
    </div>
  </footer>
);
}