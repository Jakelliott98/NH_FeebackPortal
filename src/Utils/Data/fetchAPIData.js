
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eenszeklhitnbwhahbco.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlbnN6ZWtsaGl0bmJ3aGFoYmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2OTA4MjAsImV4cCI6MjA3NDI2NjgyMH0.rhzXKa5qfF23-wSFRe0nP7i-Lhwrwy5D2lLQ25iz5r8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;