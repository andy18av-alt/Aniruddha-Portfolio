import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

// Resend client (lazy init)
let _resend
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

// In-memory rate limit (per-IP, sliding window)
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

// Build a premium HTML email
function buildContactEmailHtml({ name, email, company, message, submittedAt, ip }) {
  const safe = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
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
        Sent from aniruddha-vanshiv.com contact form · IP ${safe(ip)} · Reply directly to ${safe(email)}
      </div>
    </div>
  </div>
</body></html>`
}
function buildContactEmailText({ name, email, company, message, submittedAt }) {
  return [
    `New contact form submission`,
    `Submitted: ${submittedAt}`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    ``,
    `Message:`,
    message,
    ``,
    `--`,
    `Reply directly to ${email}`,
  ].filter(Boolean).join('\n')
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/root' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }
    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }

    // Status endpoints - POST /api/status
    if (route === '/status' && method === 'POST') {
      const body = await request.json()
      
      if (!body.client_name) {
        return handleCORS(NextResponse.json(
          { error: "client_name is required" }, 
          { status: 400 }
        ))
      }

      const statusObj = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date()
      }

      await db.collection('status_checks').insertOne(statusObj)
      return handleCORS(NextResponse.json(statusObj))
    }

    // Status endpoints - GET /api/status
    if (route === '/status' && method === 'GET') {
      const statusChecks = await db.collection('status_checks')
        .find({})
        .limit(1000)
        .toArray()

      // Remove MongoDB's _id field from response
      const cleanedStatusChecks = statusChecks.map(({ _id, ...rest }) => rest)
      
      return handleCORS(NextResponse.json(cleanedStatusChecks))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` }, 
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute