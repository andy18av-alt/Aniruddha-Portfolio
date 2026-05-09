import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aniruddha Vanshiv — Operations, Trust & Safety, AI-Enabled Business Leadership'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #050505 0%, #111111 60%, #0a0a0a 100%)',
          color: 'white',
          fontFamily: 'Inter, sans-serif',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.6,
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 1000, height: 500, borderRadius: 9999,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
          display: 'flex',
        }} />

        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, fontWeight: 600, letterSpacing: -1,
          }}>AV</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 18, fontWeight: 500, color: '#fafafa' }}>Aniruddha Vanshiv</div>
            <div style={{ fontSize: 13, color: '#a1a1aa', letterSpacing: 3, textTransform: 'uppercase', marginTop: 2 }}>Executive Portfolio</div>
          </div>
        </div>

        {/* Available pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 56, position: 'relative' }}>
          <div style={{ width: 8, height: 8, borderRadius: 9999, background: '#34d399', display: 'flex' }} />
          <div style={{ fontSize: 14, color: '#a1a1aa', letterSpacing: 4, textTransform: 'uppercase' }}>
            Available for leadership opportunities
          </div>
        </div>

        {/* Headline */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          marginTop: 28, fontSize: 64, lineHeight: 1.05,
          letterSpacing: -2.5, fontWeight: 600, color: '#fafafa',
          maxWidth: 1040, position: 'relative',
        }}>
          <div style={{ display: 'flex' }}>Building scalable operations,</div>
          <div style={{ display: 'flex' }}>trust systems & AI-enabled</div>
          <div style={{ display: 'flex' }}>business experiences.</div>
        </div>

        {/* Bottom row */}
        <div style={{
          marginTop: 'auto', display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', position: 'relative',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 16, color: '#d4d4d8' }}>Associate Director · Operations · Trust & Safety · CX · AI</div>
            <div style={{ fontSize: 13, color: '#71717a', letterSpacing: 3, textTransform: 'uppercase' }}>13+ years · $30B+ ecosystem · 450M+ customers</div>
          </div>
          <div style={{ fontSize: 13, color: '#71717a', letterSpacing: 3, textTransform: 'uppercase', display: 'flex' }}>
            Bengaluru · India
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
