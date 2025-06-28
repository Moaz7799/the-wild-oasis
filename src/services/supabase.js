import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kjoaevfeftaeslidjuog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqb2FldmZlZnRhZXNsaWRqdW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzI1ODEsImV4cCI6MjA2NDEwODU4MX0.llhGlgjrhkMidVFBagHGmqdHOTb5KXrPOec7qeAs9XI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
