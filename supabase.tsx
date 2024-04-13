import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vygqaemcrzqinejfkzml.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5Z3FhZW1jcnpxaW5lamZrem1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4OTAxODcsImV4cCI6MjAyODQ2NjE4N30.fimqbXJDWa5agy9ifapEqCw_6RbNwmomH9QthBFYag4"; // Replace with your Supabase public key

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
