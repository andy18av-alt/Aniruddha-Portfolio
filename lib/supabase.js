import { createClient } from '@supabase/supabase-js'

/**
 * Server-side Supabase client (service-role).
 * - Uses SUPABASE_SERVICE_ROLE_KEY which bypasses RLS.
 * - MUST NEVER be imported from a client component or browser code.
 * - Singleton pattern is safe in Next.js / Vercel serverless: per-instance
 *   reuse across warm invocations, fresh init on cold starts.
 */
let _supabase = null

export function getSupabase() {
  if (_supabase) return _supabase

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    )
  }

  _supabase = createClient(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: { 'X-Client-Info': 'aniruddha-portfolio/1.0' },
    },
  })

  return _supabase
}
