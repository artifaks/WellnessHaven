// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://elhhfkmuivqbgrbennmo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaGhma211aXZxYmdyYmVubm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0ODg2NDksImV4cCI6MjA0OTA2NDY0OX0.H3xKRRBu504Lf5d5GVudhm-W_yxuljIpxpHrzM6W0XY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);