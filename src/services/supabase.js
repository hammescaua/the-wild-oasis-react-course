import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mtdlgcxunmmovcsvtyuh.supabase.co";
const supabaseKey = "sb_publishable_m3usBd47HVTGwfogaTk89w_2oc1oxKY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
