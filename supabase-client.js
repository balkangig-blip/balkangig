/* =========================================================
   BalkanGig — supabase-client.js
   Konekcija ka Supabase backend-u.
   VAŽNO: ovaj fajl mora biti uključen PRE script.js u svakom
   HTML fajlu, jer script.js koristi window.supabase.
   ========================================================= */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://jmnjvfgmskxbijgmvcgv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptbmp2Zmdtc2t4YmlqZ212Y2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxODgwMDEsImV4cCI6MjEwNTc2NDAwMX0.odGDperOm1IdJQPu-mEM0c4FOF-N2DY3KNMdmeJez8o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Dostupno i van modula, jer script.js nije type="module"
window.supabase = supabase;
