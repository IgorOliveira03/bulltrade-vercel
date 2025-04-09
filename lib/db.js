import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bildsgbhfzbjobjpsceo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpbGRzZ2JoZnpiam9ianBzY2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTA5MjEsImV4cCI6MjA1OTc4NjkyMX0.T3-nS7WMcPPEtTHyZRaGnqNRGHGAePvEZyjuh6Rbcgo';

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;