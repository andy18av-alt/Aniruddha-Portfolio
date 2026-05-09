import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getSupabase } from '@/lib/supabase'

// Force Node.js runtime (Resend SDK + supabase-js need Node APIs).
export const runtime = 'nodejs'
// Always evaluate fresh per request (no caching of POST/OPTIONS handlers).
export const dynamic = 'force-dynamic'

// ---------- Resend (lazy init) ----------
let _resend
function getResend() {
  if (_resend) return _resend
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('Missing RESEND_API_KEY')
  _resend = new Resend(apiKey)
  return _resend
}

// ---------- Per-instance rate limit (per-IP, sliding window) ----------
// Note: in serverless this is per-warm-instance; combine with Vercel WAF /
// Upstash for a true distributed limiter when traffic warrants it.
const _rl = new Map()
const RL_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RL_MAX = 6
function checkRateLimit(key) {
  const now = Date.now()
  const rec = _rl.get(key)
  if (!rec || now > rec.resetAt) {
    _rl.set(key, { count: 1, resetAt: now + RL_WINDOW_MS })
    return { ok: true, remaining: RL_MAX - 1 }
  }
  if (rec.count >= RL_MAX) {
    return { ok: false, retryAfter: Math.ceil((rec.resetAt - now) / 1000) }
  }
  rec.count += 1
  return { ok: true, remaining: RL_MAX - rec.count }
}
function getClientIp(request) {
  const fwd = request.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return request.headers.get('x-real-ip') || '0.0.0.0'
}

// ---------- Email templates ----------
function buildContactEmailHtml({ name, email, company, message, submittedAt, ip }) {
  const safe = (s) =>
    String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
  return `<!doctype html>
<html><body style="margin:0;background:#0a0a0a;font-family:-apple-system,Segoe UI,Inter,Helvetica,Arial,sans-serif;color:#e5e5e5">
  <div style="max-width:620px;margin:0 auto;padding:40px 24px">
    <div style="border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;background:linear-gradient(180deg,#101010,#0b0b0b)">
      <div style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#a1a1aa">Portfolio · New Inquiry</div>
      <h1 style="font-size:28px;letter-spacing:-0.02em;margin:14px 0 6px;color:#fafafa;font-weight:600">New message from ${safe(name)}</h1>
      <div style="color:#a1a1aa;font-size:13px;margin-bottom:22px">${safe(submittedAt)}</div>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-bottom:22px">
        <tr><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:.18em;width:120px">Name</td><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#fafafa;font-size:14px">${safe(name)}</td></tr>
        <tr><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:.18em">Email</td><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#fafafa;font-size:14px"><a href="mailto:${safe(email)}" style="color:#fafafa;text-decoration:underline">${safe(email)}</a></td></tr>
        ${company ? `<tr><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:.18em">Company</td><td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.08);color:#fafafa;font-size:14px">${safe(company)}</td></tr>` : ''}
      </table>
      <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:18px">
        <div style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:.18em;margin-bottom:10px">Message</div>
        <div style="white-space:pre-wrap;color:#e5e5e5;font-size:15px;line-height:1.7">${safe(message)}</div>
      </div>
      <div style="margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.08);color:#52525b;font-size:11px">
        Stored in Supabase · IP ${safe(ip)} · Reply directly to ${safe(email)}
      </div>
    </div>
  </div>
</body></html>`
}
function buildContactEmailText({ name, email, company, message, submittedAt }) {
  return [
    'New contact form submission',
    `Submitted: ${submittedAt}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    'Message:',
    message,
    '',
    '--',
    `Reply directly to ${email}`,
  ]
    .filter(Boolean)
    .join('\n')
}

// ---------- CORS ----------
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 204 }))
}

// ---------- Validation ----------
function validate(body) {
  const errors = {}
  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim()
  const company = body?.company == null ? null : String(body.company).trim() || null
  const message = String(body?.message || '').trim()

  if (name.length < 2) errors.name = 'Name is required'
  if (name.length > 255) errors.name = 'Name is too long'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email required'
  if (email.length > 320) errors.email = 'Email is too long'
  if (message.length < 10) errors.message = 'Message must be at least 10 characters'
  if (message.length > 5000) errors.message = 'Message is too long'
  if (company && company.length > 255) errors.company = 'Company name too long'

  return { errors, data: { name, email, company, message } }
}

// ---------- Route handler ----------
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    // Health / hello
    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(
        NextResponse.json({ status: 'ok', service: 'aniruddha-portfolio-api' })
      )
    }

    // Contact form — POST /api/contact
    if (route === '/contact' && method === 'POST') {
      const body = await request.json().catch(() => ({}))

      // Honeypot — return a soft success without doing anything else.
      if (body?._hp && String(body._hp).trim().length > 0) {
        return handleCORS(NextResponse.json({ success: true }))
      }

      // Validation
      const { errors, data } = validate(body)
      if (Object.keys(errors).length > 0) {
        return handleCORS(
          NextResponse.json(
            { success: false, error: 'Validation failed', errors },
            { status: 422 }
          )
        )
      }

      // Per-IP rate limit
      const ip = getClientIp(request)
      const rl = checkRateLimit(ip)
      if (!rl.ok) {
        const res = NextResponse.json(
          {
            success: false,
            error: `Too many requests. Try again in ${Math.ceil(rl.retryAfter / 60)} minutes.`,
          },
          { status: 429 }
        )
        res.headers.set('Retry-After', String(rl.retryAfter))
        return handleCORS(res)
      }

      // Persist to Supabase (REQUIRED — fail loud if this fails)
      let storedRow = null
      try {
        const supabase = getSupabase()
        const { data: rows, error } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: data.name,
              email: data.email,
              company: data.company,
              message: data.message,
            },
          ])
          .select('created_at')

        if (error) {
          console.error('[contact] Supabase insert error:', error)
          return handleCORS(
            NextResponse.json(
              {
                success: false,
                error: 'Could not save your message. Please try again or email aniruddha.vanshiv@gmail.com directly.',
              },
              { status: 500 }
            )
          )
        }
        storedRow = rows?.[0] || null
      } catch (e) {
        console.error('[contact] Supabase exception:', e?.message || e)
        return handleCORS(
          NextResponse.json(
            {
              success: false,
              error: 'Database unavailable. Please email aniruddha.vanshiv@gmail.com directly.',
            },
            { status: 503 }
          )
        )
      }

      const submittedAt = storedRow?.created_at ? new Date(storedRow.created_at) : new Date()
      const submittedAtStr =
        submittedAt.toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
          timeZone: 'Asia/Kolkata',
        }) + ' IST'

      // Send notification email via Resend (best-effort — submission already saved).
      let emailId = null
      let emailWarning = null
      try {
        const resend = getResend()
        const { data: sent, error: sendErr } = await resend.emails.send({
          from: process.env.CONTACT_FROM || 'Aniruddha Portfolio <onboarding@resend.dev>',
          to: [process.env.CONTACT_TO || 'aniruddha.vanshiv@gmail.com'],
          reply_to: data.email,
          subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
          html: buildContactEmailHtml({
            name: data.name,
            email: data.email,
            company: data.company,
            message: data.message,
            submittedAt: submittedAtStr,
            ip,
          }),
          text: buildContactEmailText({
            name: data.name,
            email: data.email,
            company: data.company,
            message: data.message,
            submittedAt: submittedAtStr,
          }),
        })
        if (sendErr) {
          console.error('[contact] Resend error:', sendErr)
          emailWarning = 'Saved your message; notification email failed to send.'
        } else {
          emailId = sent?.id || null
        }
      } catch (e) {
        console.error('[contact] Resend exception:', e?.message || e)
        emailWarning = 'Saved your message; notification email failed to send.'
      }

      return handleCORS(
        NextResponse.json({
          success: true,
          message: 'Thank you. Your message has reached Aniruddha.',
          submittedAt: storedRow?.created_at || null,
          emailId,
          ...(emailWarning ? { warning: emailWarning } : {}),
        })
      )
    }

    // Route not found
    return handleCORS(
      NextResponse.json({ error: `Route ${route} not found` }, { status: 404 })
    )
  } catch (error) {
    console.error('[api] Internal error:', error)
    return handleCORS(
      NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    )
  }
}

// Export all HTTP methods (catch-all)
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
