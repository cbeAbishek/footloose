import { createBrowserClient, createServerClient } from "@supabase/ssr"
import type { CookieOptions } from "@supabase/ssr"
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase keys are not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable data features.",
  )
}

export function createSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are missing")
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

export function createSupabaseServerClient(cookieStore?: ReadonlyRequestCookies) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are missing")
  }

  const store = cookieStore ?? cookies()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          store.set({ name, value, ...options })
        } catch (error) {
          console.warn("Unable to set Supabase cookie", error)
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          store.delete({ name, ...options })
        } catch (error) {
          console.warn("Unable to remove Supabase cookie", error)
        }
      },
    },
  })
}
