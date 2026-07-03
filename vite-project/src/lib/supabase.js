import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mjtebymopmxegdfuvmiy.supabase.co";

const supabaseKey =
  "sb_publishable_rOoaolFnyKuKeiJGHJoRKg_GWv-ZDCC";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);