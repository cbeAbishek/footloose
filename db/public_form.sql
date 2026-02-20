-- Form submission tables for Supabase (public schema)
-- Includes basic timestamps and RLS insert policies for anon/authenticated.

create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
	new.updated_at = now();
	return new;
end;
$$;

create table if not exists public.alumni (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	email text,
	phone text,
	current_location text,
	headline text not null,
	bio text not null,
	batch_year int,
	enrollment_year int,
	graduation_year int,
	training_duration_years numeric,
	dance_styles text,
	"current_role" text,
	current_organization text,
	profession text,
	achievements text,
	notable_performances text,
	awards text,
	certifications text,
	website_url text,
	willing_to_mentor boolean not null default false,
	available_for_events boolean not null default false,
	photo text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger alumni_set_updated_at
before update on public.alumni
for each row execute function public.set_updated_at();

create table if not exists public.career_applications (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	email text not null,
	phone text not null,
	current_location text,
	position_applied text not null,
	department text,
	expected_salary numeric,
	available_from date,
	years_of_experience int,
	current_employer text,
	education_qualification text,
	resume text,
	portfolio_url text,
	cover_letter text,
	skills text,
	certifications text,
	languages text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger career_applications_set_updated_at
before update on public.career_applications
for each row execute function public.set_updated_at();

create table if not exists public.class_inquiries (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	email text,
	phone text not null,
	age int,
	interested_class text,
	dance_style text,
	experience_level text,
	preferred_schedule text,
	message text,
	source text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger class_inquiries_set_updated_at
before update on public.class_inquiries
for each row execute function public.set_updated_at();

create table if not exists public.costume_rental_inquiries (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	email text,
	phone text not null,
	requested_items text not null,
	quantity_needed int,
	rental_start date not null,
	rental_end date not null,
	rental_days int,
	event_type text not null,
	event_location text not null,
	notes text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger costume_rental_inquiries_set_updated_at
before update on public.costume_rental_inquiries
for each row execute function public.set_updated_at();

create table if not exists public.event_inquiries (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	organization text,
	email text not null,
	phone text not null,
	event_type text not null,
	event_name text,
	preferred_date text,
	alternative_dates text,
	guest_count int,
	event_duration_hours numeric,
	venue text,
	budget_range text,
	performance_requirements text,
	special_requests text,
	message text,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger event_inquiries_set_updated_at
before update on public.event_inquiries
for each row execute function public.set_updated_at();

create table if not exists public.inquiries (
	id uuid primary key default gen_random_uuid(),
	full_name text not null,
	email text not null,
	phone text not null,
	subject text not null,
	message text not null,
	created_at timestamptz not null default now(),
	updated_at timestamptz not null default now()
);

create trigger inquiries_set_updated_at
before update on public.inquiries
for each row execute function public.set_updated_at();

alter table public.alumni enable row level security;
alter table public.career_applications enable row level security;
alter table public.class_inquiries enable row level security;
alter table public.costume_rental_inquiries enable row level security;
alter table public.event_inquiries enable row level security;
alter table public.inquiries enable row level security;

create policy "alumni_insert" on public.alumni
for insert to anon, authenticated
with check (true);

create policy "career_applications_insert" on public.career_applications
for insert to anon, authenticated
with check (true);

create policy "class_inquiries_insert" on public.class_inquiries
for insert to anon, authenticated
with check (true);

create policy "costume_rental_inquiries_insert" on public.costume_rental_inquiries
for insert to anon, authenticated
with check (true);

create policy "event_inquiries_insert" on public.event_inquiries
for insert to anon, authenticated
with check (true);

create policy "inquiries_insert" on public.inquiries
for insert to anon, authenticated
with check (true);
