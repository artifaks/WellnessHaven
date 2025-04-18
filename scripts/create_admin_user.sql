-- This script creates an admin user in Supabase Auth
-- Replace 'your-email@example.com' and 'your-secure-password' with your preferred credentials

-- Insert a user with email/password authentication
INSERT INTO auth.users (
  instance_id,
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  confirmation_token,
  confirmation_sent_at,
  created_at,
  updated_at,
  aud,
  role
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  uuid_generate_v4(),
  'admin@herbalwisehaven.com',
  crypt('Admin123!', gen_salt('bf')),
  now(),
  now(),
  '',
  now(),
  now(),
  now(),
  'authenticated',
  'authenticated'
);

-- Note: After running this script, you should be able to log in with:
-- Email: admin@herbalwisehaven.com
-- Password: Admin123!
-- Please change this password immediately after your first login for security reasons.
