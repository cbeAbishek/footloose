"use client"

import { useMemo } from "react"
import type { SupabaseClient } from "@supabase/supabase-js"

import { createSupabaseBrowserClient } from "@/lib/supabase-browser"

let browserClient: SupabaseClient | null = null

export function useSupabase(): SupabaseClient {
  return useMemo(() => {
    if (!browserClient) {
      browserClient = createSupabaseBrowserClient()
    }
    return browserClient
  }, [])
}
