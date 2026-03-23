/***
I made this file so
***/
import { createClient } from "@supabase/supabase-js"

// This code runs ONLY ONCE when the app starts
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)