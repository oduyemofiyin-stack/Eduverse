-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql/new)
-- after creating your Supabase project.

-- =====================
-- PROFILES TABLE
-- Stores user identity + learning data
-- =====================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  first_name text default '',
  last_name text default '',
  username text unique,
  picture text default '',
  provider text default 'email',
  data jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================
alter table public.profiles enable row level security;

-- Anyone can read profiles (for leaderboard, comments, etc.)
create policy "Profiles are publicly readable"
  on public.profiles for select
  using (true);

-- Users can insert their own profile
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Users can delete their own profile
create policy "Users can delete own profile"
  on public.profiles for delete
  using (auth.uid() = id);

-- =====================
-- AUTO-CREATE PROFILE ON SIGNUP
-- =====================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, first_name, last_name, username, picture, provider)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'first_name', ''),
    coalesce(new.raw_user_meta_data ->> 'last_name', ''),
    coalesce(new.raw_user_meta_data ->> 'username', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', ''),
    coalesce(new.raw_user_meta_data ->> 'provider', 'email')
  );
  return new;
end;
$$;

-- Trigger the function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =====================
-- UPDATED_AT TRIGGER
-- =====================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger on_profile_updated
  before update on public.profiles
  for each row execute function public.handle_updated_at();
