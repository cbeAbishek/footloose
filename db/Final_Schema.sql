-- ============================================================================
-- FOOTLOOSE HOUSE OF CHOREOGRAPHY - IMPROVED DATABASE SCHEMA
-- ============================================================================
-- Complete management system for dance academy covering operations, events,
-- inventory, finances, rentals, inquiries, and content management.
-- ============================================================================

-- Extensions ------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enumerations ----------------------------------------------------------------
CREATE TYPE user_role AS ENUM ('admin', 'staff', 'dancer', 'student', 'unknown');
CREATE TYPE attendance_subject AS ENUM ('staff', 'dancer', 'student');
CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'blocked', 'completed', 'approved', 'cancelled');
CREATE TYPE inventory_category AS ENUM ('costume', 'prop', 'equipment', 'accessory', 'other');
CREATE TYPE acquisition_type AS ENUM ('import', 'own_work', 'purchased', 'donated', 'other');
CREATE TYPE inquiry_status AS ENUM ('new', 'in_review', 'contacted', 'responded', 'converted', 'resolved', 'archived');
CREATE TYPE publication_status AS ENUM ('draft', 'scheduled', 'published', 'archived');
CREATE TYPE payment_status AS ENUM ('pending', 'partial', 'completed', 'overdue', 'cancelled', 'refunded');
CREATE TYPE payment_method AS ENUM ('cash', 'bank_transfer', 'upi', 'card', 'cheque', 'other');
CREATE TYPE transaction_type AS ENUM ('income', 'expense');
CREATE TYPE rental_status AS ENUM ('inquiry', 'booked', 'confirmed', 'in_use', 'returned', 'cancelled');
CREATE TYPE media_type_enum AS ENUM ('audio', 'image', 'video', 'document', 'other');

-- Utility Functions -----------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- MEDIA STORAGE MANAGEMENT
-- ============================================================================

-- Storage Buckets -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.storage_buckets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bucket_name TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  description TEXT,
  media_type media_type_enum NOT NULL,
  max_file_size_mb INTEGER DEFAULT 50,
  allowed_extensions TEXT[] DEFAULT ARRAY[]::TEXT[],
  is_public BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

INSERT INTO public.storage_buckets (bucket_name, display_name, description, media_type, max_file_size_mb, allowed_extensions, is_public)
VALUES
  ('media-audio', 'Audio Files', 'Rehearsal recordings, voice notes, songs', 'audio', 100, ARRAY['mp3', 'wav', 'ogg', 'm4a', 'aac'], false),
  ('media-images', 'Images', 'Costumes, events, evidence photos', 'image', 10, ARRAY['jpg', 'jpeg', 'png', 'gif', 'webp'], true),
  ('media-videos', 'Videos', 'Performance recordings, tutorials', 'video', 500, ARRAY['mp4', 'mov', 'avi', 'webm'], false),
  ('media-documents', 'Documents', 'Resumes, policies, contracts, reports', 'document', 20, ARRAY['pdf', 'doc', 'docx', 'xls', 'xlsx'], false)
ON CONFLICT (bucket_name) DO NOTHING;


-- ============================================================================
-- USER MANAGEMENT
-- ============================================================================

-- Users -----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_user_id TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'unknown',
  last_login_role user_role,
  last_login_at TIMESTAMPTZ,
  last_login_ip INET,
  profile_image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  date_of_birth DATE,
  address TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS users_role_idx ON public.users(role);
CREATE INDEX IF NOT EXISTS users_active_idx ON public.users(is_active);
CREATE INDEX IF NOT EXISTS users_email_idx ON public.users(email);

DROP TRIGGER IF EXISTS set_updated_at_users ON public.users;
CREATE TRIGGER set_updated_at_users BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Staff Profiles --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.staff_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  employee_id TEXT UNIQUE,
  designation TEXT NOT NULL,
  department TEXT,
  hire_date DATE NOT NULL,
  salary_amount NUMERIC(10,2),
  salary_currency TEXT DEFAULT 'INR',
  bio TEXT,
  specialization TEXT[],
  certifications TEXT[],
  years_experience INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

DROP TRIGGER IF EXISTS set_updated_at_staff_profiles ON public.staff_profiles;
CREATE TRIGGER set_updated_at_staff_profiles BEFORE UPDATE ON public.staff_profiles
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Dancer Profiles -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.dancer_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  dancer_id TEXT UNIQUE,
  skill_level TEXT NOT NULL,
  primary_style TEXT NOT NULL,
  secondary_styles TEXT[],
  joining_date DATE NOT NULL,
  achievements TEXT,
  medical_notes TEXT,
  height_cm INTEGER,
  weight_kg NUMERIC(5,2),
  costume_size TEXT,
  is_available BOOLEAN NOT NULL DEFAULT true,
  performance_count INTEGER DEFAULT 0,
  rating_avg NUMERIC(3,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

DROP TRIGGER IF EXISTS set_updated_at_dancer_profiles ON public.dancer_profiles;
CREATE TRIGGER set_updated_at_dancer_profiles BEFORE UPDATE ON public.dancer_profiles
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Student Profiles ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.student_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  student_id TEXT UNIQUE,
  guardian_name TEXT NOT NULL,
  guardian_phone TEXT NOT NULL,
  guardian_email TEXT,
  guardian_relation TEXT,
  school_name TEXT,
  grade TEXT,
  age INTEGER,
  medical_conditions TEXT,
  notes TEXT,
  enrollment_date DATE NOT NULL,
  is_active_student BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

DROP TRIGGER IF EXISTS set_updated_at_student_profiles ON public.student_profiles;
CREATE TRIGGER set_updated_at_student_profiles BEFORE UPDATE ON public.student_profiles
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Media Files -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.media_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bucket_name TEXT NOT NULL REFERENCES public.storage_buckets(bucket_name) ON DELETE RESTRICT,
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size_bytes BIGINT NOT NULL,
  mime_type TEXT NOT NULL,
  uploaded_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  is_public BOOLEAN NOT NULL DEFAULT false,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  UNIQUE(bucket_name, file_path)
);

CREATE INDEX IF NOT EXISTS media_files_bucket_idx ON public.media_files(bucket_name);
CREATE INDEX IF NOT EXISTS media_files_uploaded_by_idx ON public.media_files(uploaded_by);

-- ============================================================================
-- EVENTS MANAGEMENT
-- ============================================================================

-- Events ----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_code TEXT UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  event_type TEXT,
  
  -- Client Details
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  client_email TEXT,
  client_address TEXT,
  
  -- Event Logistics
  event_date TIMESTAMPTZ NOT NULL,
  event_end_date TIMESTAMPTZ,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  location TEXT NOT NULL,
  venue_address TEXT,
  
  -- Practice Details
  practice_start_at TIMESTAMPTZ,
  practice_end_at TIMESTAMPTZ,
  practice_location TEXT,
  rehearsal_count INTEGER DEFAULT 0,
  
  -- Team
  incharge_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  performer_summary TEXT,
  total_performers INTEGER DEFAULT 0,
  
  -- Status & Financials
  is_confirmed BOOLEAN NOT NULL DEFAULT false,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  estimated_cost NUMERIC(10,2),
  actual_cost NUMERIC(10,2),
  
  -- Metadata
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  notes TEXT,
  tags TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS events_date_idx ON public.events(event_date DESC);
CREATE INDEX IF NOT EXISTS events_category_idx ON public.events(category);
CREATE INDEX IF NOT EXISTS events_incharge_idx ON public.events(incharge_user_id);
CREATE INDEX IF NOT EXISTS events_client_idx ON public.events(client_name);
CREATE INDEX IF NOT EXISTS events_confirmed_idx ON public.events(is_confirmed);

DROP TRIGGER IF EXISTS set_updated_at_events ON public.events;
CREATE TRIGGER set_updated_at_events BEFORE UPDATE ON public.events
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Event Performers ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_performers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  performer_name TEXT NOT NULL,
  role_description TEXT,
  performance_type TEXT,
  is_headliner BOOLEAN NOT NULL DEFAULT false,
  performance_fee NUMERIC(10,2),
  payment_status payment_status DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  UNIQUE(event_id, user_id)
);

CREATE INDEX IF NOT EXISTS event_performers_event_idx ON public.event_performers(event_id);
CREATE INDEX IF NOT EXISTS event_performers_user_idx ON public.event_performers(user_id);

-- Event Schedule Slots --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_schedule_slots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  slot_type TEXT NOT NULL,
  slot_title TEXT NOT NULL,
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  location TEXT,
  responsible_person UUID REFERENCES public.users(id) ON DELETE SET NULL,
  notes TEXT,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS event_schedule_event_idx ON public.event_schedule_slots(event_id);

-- Event Comments --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  attachments TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS event_comments_event_idx ON public.event_comments(event_id);

DROP TRIGGER IF EXISTS set_updated_at_event_comments ON public.event_comments;
CREATE TRIGGER set_updated_at_event_comments BEFORE UPDATE ON public.event_comments
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- ============================================================================
-- TASK MANAGEMENT
-- ============================================================================

-- Tasks -----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_code TEXT UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  status task_status NOT NULL DEFAULT 'pending',
  priority TEXT DEFAULT 'medium',
  
  -- Assignment
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
  assigned_role user_role,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  
  -- Timeline
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  due_at TIMESTAMPTZ,
  estimated_hours NUMERIC(5,2),
  actual_hours NUMERIC(5,2),
  
  -- Completion
  completion_notes TEXT,
  completion_rating INTEGER CHECK (completion_rating BETWEEN 1 AND 5),
  evidence_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS tasks_event_idx ON public.tasks(event_id);
CREATE INDEX IF NOT EXISTS tasks_assigned_to_idx ON public.tasks(assigned_to);
CREATE INDEX IF NOT EXISTS tasks_status_idx ON public.tasks(status);
CREATE INDEX IF NOT EXISTS tasks_due_idx ON public.tasks(due_at);

DROP TRIGGER IF EXISTS set_updated_at_tasks ON public.tasks;
CREATE TRIGGER set_updated_at_tasks BEFORE UPDATE ON public.tasks
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Task Collaborators ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.task_collaborators (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role TEXT,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  UNIQUE(task_id, user_id)
);

CREATE INDEX IF NOT EXISTS task_collaborators_task_idx ON public.task_collaborators(task_id);
CREATE INDEX IF NOT EXISTS task_collaborators_user_idx ON public.task_collaborators(user_id);

-- Task Updates ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.task_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  posted_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  previous_status task_status,
  new_status task_status,
  message TEXT,
  attachment_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
  hours_logged NUMERIC(5,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS task_updates_task_idx ON public.task_updates(task_id);

-- ============================================================================
-- INVENTORY MANAGEMENT
-- ============================================================================

-- Inventory Items -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inventory_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  item_code TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  category inventory_category NOT NULL DEFAULT 'costume',
  acquisition acquisition_type NOT NULL DEFAULT 'purchased',
  
  -- Quality & Condition
  quality_rating INTEGER CHECK (quality_rating BETWEEN 1 AND 10),
  condition TEXT DEFAULT 'excellent',
  
  -- Financial
  purchase_cost NUMERIC(10,2),
  purchase_date DATE,
  rent_amount_per_day NUMERIC(10,2),
  rent_amount_per_event NUMERIC(10,2),
  depreciation_rate NUMERIC(5,2),
  current_value NUMERIC(10,2),
  
  -- Stock
  available_quantity INTEGER NOT NULL DEFAULT 0,
  total_quantity INTEGER NOT NULL DEFAULT 0,
  minimum_stock_level INTEGER DEFAULT 1,
  
  -- Details
  size TEXT,
  color TEXT,
  material TEXT,
  manufacturer TEXT,
  
  -- Media
  image_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
  
  -- Metadata
  tags TEXT[],
  is_available_for_rent BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  last_used_date DATE,
  rental_count INTEGER DEFAULT 0,
  
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS inventory_category_idx ON public.inventory_items(category);
CREATE INDEX IF NOT EXISTS inventory_acquisition_idx ON public.inventory_items(acquisition);
CREATE INDEX IF NOT EXISTS inventory_available_idx ON public.inventory_items(is_available_for_rent);
CREATE INDEX IF NOT EXISTS inventory_code_idx ON public.inventory_items(item_code);

DROP TRIGGER IF EXISTS set_updated_at_inventory_items ON public.inventory_items;
CREATE TRIGGER set_updated_at_inventory_items BEFORE UPDATE ON public.inventory_items
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Inventory Media -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inventory_media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inventory_id UUID NOT NULL REFERENCES public.inventory_items(id) ON DELETE CASCADE,
  media_file_id UUID REFERENCES public.media_files(id) ON DELETE CASCADE,
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS inventory_media_item_idx ON public.inventory_media(inventory_id);

-- Inventory Maintenance Log ---------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inventory_maintenance_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inventory_id UUID NOT NULL REFERENCES public.inventory_items(id) ON DELETE CASCADE,
  maintenance_type TEXT NOT NULL,
  description TEXT,
  cost NUMERIC(10,2),
  performed_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  performed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  next_maintenance_due DATE
);

-- ============================================================================
-- DANCE CLASSES
-- ============================================================================

-- Dance Classes ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.dance_classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_code TEXT UNIQUE,
  class_name TEXT NOT NULL,
  description TEXT,
  dance_style TEXT NOT NULL,
  skill_level TEXT NOT NULL,
  
  -- Instructor
  instructor_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  assistant_instructor_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  -- Demographics
  student_count INTEGER DEFAULT 0,
  max_capacity INTEGER DEFAULT 20,
  age_group TEXT,
  min_age INTEGER,
  max_age INTEGER,
  
  -- Schedule
  class_day TEXT,
  start_time TIME,
  end_time TIME,
  duration_minutes INTEGER,
  location TEXT,
  
  -- Financials
  monthly_fee NUMERIC(10,2),
  registration_fee NUMERIC(10,2),
  
  -- Status
  is_active BOOLEAN NOT NULL DEFAULT true,
  start_date DATE,
  end_date DATE,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS dance_classes_instructor_idx ON public.dance_classes(instructor_id);
CREATE INDEX IF NOT EXISTS dance_classes_active_idx ON public.dance_classes(is_active);
CREATE INDEX IF NOT EXISTS dance_classes_day_idx ON public.dance_classes(class_day);

DROP TRIGGER IF EXISTS set_updated_at_dance_classes ON public.dance_classes;
CREATE TRIGGER set_updated_at_dance_classes BEFORE UPDATE ON public.dance_classes
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Dance Class Members ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.dance_class_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_id UUID NOT NULL REFERENCES public.dance_classes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role user_role NOT NULL,
  enrollment_date DATE NOT NULL DEFAULT CURRENT_DATE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  left_at TIMESTAMPTZ,
  UNIQUE(class_id, user_id)
);

CREATE INDEX IF NOT EXISTS dance_class_members_class_idx ON public.dance_class_members(class_id);
CREATE INDEX IF NOT EXISTS dance_class_members_user_idx ON public.dance_class_members(user_id);

-- Dance Class Sessions --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.dance_class_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_id UUID NOT NULL REFERENCES public.dance_classes(id) ON DELETE CASCADE,
  session_number INTEGER,
  session_date DATE NOT NULL,
  session_start TIMESTAMPTZ,
  session_end TIMESTAMPTZ,
  focus_area TEXT,
  curriculum_covered TEXT,
  attendance_count INTEGER DEFAULT 0,
  notes TEXT,
  recording_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS dance_class_sessions_class_idx ON public.dance_class_sessions(class_id);
CREATE INDEX IF NOT EXISTS dance_class_sessions_date_idx ON public.dance_class_sessions(session_date DESC);

-- ============================================================================
-- PERFORMANCE TRACKING
-- ============================================================================

-- User Performance Logs -------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_performance_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  class_session_id UUID REFERENCES public.dance_class_sessions(id) ON DELETE SET NULL,
  recorded_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  -- Performance Metrics
  score INTEGER CHECK (score BETWEEN 1 AND 100),
  technique_rating INTEGER CHECK (technique_rating BETWEEN 1 AND 10),
  creativity_rating INTEGER CHECK (creativity_rating BETWEEN 1 AND 10),
  stage_presence_rating INTEGER CHECK (stage_presence_rating BETWEEN 1 AND 10),
  
  -- Feedback
  strengths TEXT,
  areas_for_improvement TEXT,
  feedback TEXT,
  
  -- Media
  media_urls TEXT[] DEFAULT ARRAY[]::TEXT[],
  
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS performance_logs_user_idx ON public.user_performance_logs(user_id);
CREATE INDEX IF NOT EXISTS performance_logs_event_idx ON public.user_performance_logs(event_id);
CREATE INDEX IF NOT EXISTS performance_logs_date_idx ON public.user_performance_logs(recorded_at DESC);

-- ============================================================================
-- ATTENDANCE TRACKING
-- ============================================================================

-- Attendance Records ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.attendance_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attendance_code TEXT UNIQUE,
  subject_type attendance_subject NOT NULL,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  
  -- Context
  class_id UUID REFERENCES public.dance_classes(id) ON DELETE SET NULL,
  class_session_id UUID REFERENCES public.dance_class_sessions(id) ON DELETE SET NULL,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  
  -- Check In
  check_in_at TIMESTAMPTZ NOT NULL,
  check_in_location TEXT,
  check_in_ip INET,
  check_in_device TEXT,
  
  -- Check Out
  check_out_at TIMESTAMPTZ,
  check_out_location TEXT,
  check_out_ip INET,
  
  -- Calculated
  duration_minutes INTEGER,
  is_late BOOLEAN DEFAULT false,
  late_by_minutes INTEGER,
  
  -- Status
  status TEXT DEFAULT 'present',
  notes TEXT,
  verified_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS attendance_user_idx ON public.attendance_records(user_id);
CREATE INDEX IF NOT EXISTS attendance_class_idx ON public.attendance_records(class_id);
CREATE INDEX IF NOT EXISTS attendance_event_idx ON public.attendance_records(event_id);
CREATE INDEX IF NOT EXISTS attendance_date_idx ON public.attendance_records(check_in_at DESC);
CREATE INDEX IF NOT EXISTS attendance_subject_idx ON public.attendance_records(subject_type);

-- ============================================================================
-- ANNUAL DAY MANAGEMENT
-- ============================================================================

-- Annual Day Projects ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.annual_day_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_code TEXT UNIQUE,
  project_name TEXT NOT NULL,
  
  -- School Details
  school_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  school_address TEXT,
  
  -- Event Details
  event_date DATE NOT NULL,
  event_time TIME,
  venue TEXT NOT NULL,
  venue_capacity INTEGER,
  
  -- Counts
  student_count INTEGER DEFAULT 0,
  performance_count INTEGER DEFAULT 0,
  master_count INTEGER DEFAULT 0,
  worker_count INTEGER DEFAULT 0,
  class_count INTEGER DEFAULT 0,
  
  -- Theme
  theme_name TEXT,
  theme_description TEXT,
  theme_colors TEXT[],
  
  -- Financial
  contract_amount NUMERIC(10,2),
  advance_amount NUMERIC(10,2),
  balance_amount NUMERIC(10,2),
  payment_status payment_status DEFAULT 'pending',
  
  -- Status
  status TEXT DEFAULT 'planning',
  is_confirmed BOOLEAN NOT NULL DEFAULT false,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  
  notes TEXT,
  created_by UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS annual_day_school_idx ON public.annual_day_projects(school_name);
CREATE INDEX IF NOT EXISTS annual_day_date_idx ON public.annual_day_projects(event_date);

CREATE TRIGGER set_updated_at_annual_day_projects 
BEFORE UPDATE ON public.annual_day_projects
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Annual Day Classes ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.annual_day_classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES public.annual_day_projects(id) ON DELETE CASCADE,
  class_name TEXT NOT NULL,
  class_section TEXT,
  student_count INTEGER DEFAULT 0,
  age_group TEXT,
  grade TEXT,
  class_time TEXT,
  teacher_name TEXT NOT NULL,
  teacher_phone TEXT,
  theme_segment TEXT,
  performance_order INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS annual_day_classes_project_idx ON public.annual_day_classes(project_id);

-- Annual Day Performances -----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.annual_day_performances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_id UUID NOT NULL REFERENCES public.annual_day_classes(id) ON DELETE CASCADE,
  performance_name TEXT NOT NULL,
  performance_type TEXT,
  performer_count INTEGER DEFAULT 0,
  
  -- Song Details
  song_title TEXT,
  song_artist TEXT,
  song_duration_minutes NUMERIC(5,2),
  song_file_url TEXT,
  song_lyrics TEXT,
  
  -- Theme & Style
  theme_name TEXT,
  dance_style TEXT,
  costume_description TEXT,
  
  -- Team
  prop_master_name TEXT,
  teacher_in_charge TEXT,
  choreographer_name TEXT,
  
  -- Logistics
  duration_minutes INTEGER,
  performance_order INTEGER,
  stage_setup_time_minutes INTEGER DEFAULT 5,
  
  -- Status
  rehearsal_count INTEGER DEFAULT 0,
  is_ready BOOLEAN NOT NULL DEFAULT false,
  
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS annual_day_performances_class_idx ON public.annual_day_performances(class_id);

-- Annual Day Props ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.annual_day_props (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  performance_id UUID NOT NULL REFERENCES public.annual_day_performances(id) ON DELETE CASCADE,
  prop_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  
  -- Link to inventory
  inventory_item_id UUID REFERENCES public.inventory_items(id) ON DELETE SET NULL,
  
  -- Or custom prop
  is_custom BOOLEAN NOT NULL DEFAULT false,
  description TEXT,
  estimated_cost NUMERIC(10,2),
  
  -- Assignment
  assigned_to TEXT,
  status TEXT DEFAULT 'pending',
  
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS annual_day_props_performance_idx ON public.annual_day_props(performance_id);
CREATE INDEX IF NOT EXISTS annual_day_props_inventory_idx ON public.annual_day_props(inventory_item_id);

-- Annual Day Team Assignments -------------------------------------------------
CREATE TABLE IF NOT EXISTS public.annual_day_team_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES public.annual_day_projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  team_member_name TEXT NOT NULL,
  role_description TEXT NOT NULL,
  role_type TEXT,
  responsibilities TEXT,
  contact_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS annual_day_team_project_idx ON public.annual_day_team_assignments(project_id);
CREATE INDEX IF NOT EXISTS annual_day_team_user_idx ON public.annual_day_team_assignments(user_id);

-- ============================================================================
-- RENTAL MANAGEMENT
-- ============================================================================

-- Rental Bookings -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rental_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_code TEXT UNIQUE,
  
  -- Client Details
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  client_email TEXT,
  client_address TEXT,
  client_id_proof TEXT,
  
  -- Booking Details
  booking_date DATE NOT NULL DEFAULT CURRENT_DATE,
  rental_start_date DATE NOT NULL,
  rental_end_date DATE NOT NULL,
  rental_days INTEGER NOT NULL,
  
  -- Event Details
  event_type TEXT,
  event_location TEXT,
  expected_attendees INTEGER,
  
  -- Financial
  total_rent_amount NUMERIC(10,2) NOT NULL,
  security_deposit NUMERIC(10,2) DEFAULT 0,
  discount_amount NUMERIC(10,2) DEFAULT 0,
  tax_amount NUMERIC(10,2) DEFAULT 0,
  final_amount NUMERIC(10,2) NOT NULL,
  
  advance_paid NUMERIC(10,2) DEFAULT 0,
  balance_amount NUMERIC(10,2),
  
  payment_status payment_status NOT NULL DEFAULT 'pending',
  
  -- Status
  status rental_status NOT NULL DEFAULT 'inquiry',
  is_confirmed BOOLEAN NOT NULL DEFAULT false,
  
  -- Return Details
  actual_return_date DATE,
  return_verified_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  damage_charges NUMERIC(10,2) DEFAULT 0,
  refund_amount NUMERIC(10,2) DEFAULT 0,
  
  -- Metadata
  notes TEXT,
  terms_conditions TEXT,
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  approved_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS rental_bookings_client_idx ON public.rental_bookings(client_name);
CREATE INDEX IF NOT EXISTS rental_bookings_status_idx ON public.rental_bookings(status);
CREATE INDEX IF NOT EXISTS rental_bookings_start_date_idx ON public.rental_bookings(rental_start_date);
CREATE INDEX IF NOT EXISTS rental_bookings_payment_idx ON public.rental_bookings(payment_status);

DROP TRIGGER IF EXISTS set_updated_at_rental_bookings ON public.rental_bookings;
CREATE TRIGGER set_updated_at_rental_bookings BEFORE UPDATE ON public.rental_bookings
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Rental Booking Items --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rental_booking_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID NOT NULL REFERENCES public.rental_bookings(id) ON DELETE CASCADE,
  inventory_id UUID NOT NULL REFERENCES public.inventory_items(id) ON DELETE RESTRICT,
  
  item_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  rent_per_day NUMERIC(10,2) NOT NULL,
  total_rent NUMERIC(10,2) NOT NULL,
  
  -- Condition
  condition_at_pickup TEXT DEFAULT 'good',
  condition_at_return TEXT,
  damage_description TEXT,
  damage_cost NUMERIC(10,2) DEFAULT 0,
  
  -- Status
  is_picked_up BOOLEAN NOT NULL DEFAULT false,
  picked_up_at TIMESTAMPTZ,
  is_returned BOOLEAN NOT NULL DEFAULT false,
  returned_at TIMESTAMPTZ,
  
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS rental_items_booking_idx ON public.rental_booking_items(booking_id);
CREATE INDEX IF NOT EXISTS rental_items_inventory_idx ON public.rental_booking_items(inventory_id);

-- ============================================================================
-- FINANCIAL MANAGEMENT
-- ============================================================================

-- Financial Accounts ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.financial_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_name TEXT NOT NULL,
  account_type TEXT NOT NULL,
  account_number TEXT,
  bank_name TEXT,
  ifsc_code TEXT,
  current_balance NUMERIC(12,2) DEFAULT 0,
  currency TEXT DEFAULT 'INR',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

DROP TRIGGER IF EXISTS set_updated_at_financial_accounts ON public.financial_accounts;
CREATE TRIGGER set_updated_at_financial_accounts BEFORE UPDATE ON public.financial_accounts
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Financial Transactions ------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.financial_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_code TEXT UNIQUE,
  transaction_type transaction_type NOT NULL,
  category TEXT NOT NULL,
  sub_category TEXT,
  
  -- Amount Details
  amount NUMERIC(12,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  tax_amount NUMERIC(12,2) DEFAULT 0,
  discount_amount NUMERIC(12,2) DEFAULT 0,
  net_amount NUMERIC(12,2) NOT NULL,
  
  -- Payment Details
  payment_method payment_method NOT NULL,
  payment_status payment_status NOT NULL DEFAULT 'pending',
  transaction_reference TEXT,
  
  -- Account
  account_id UUID REFERENCES public.financial_accounts(id) ON DELETE SET NULL,
  
  -- Related Entities
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  class_id UUID REFERENCES public.dance_classes(id) ON DELETE SET NULL,
  rental_id UUID REFERENCES public.rental_bookings(id) ON DELETE SET NULL,
  
  -- Details
  description TEXT NOT NULL,
  invoice_number TEXT,
  receipt_number TEXT,
  
  -- Timeline
  transaction_date DATE NOT NULL,
  due_date DATE,
  paid_date DATE,
  
  -- Metadata
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  approved_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  notes TEXT,
  attachments TEXT[],
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS transactions_type_idx ON public.financial_transactions(transaction_type);
CREATE INDEX IF NOT EXISTS transactions_date_idx ON public.financial_transactions(transaction_date DESC);
CREATE INDEX IF NOT EXISTS transactions_event_idx ON public.financial_transactions(event_id);
CREATE INDEX IF NOT EXISTS transactions_user_idx ON public.financial_transactions(user_id);
CREATE INDEX IF NOT EXISTS transactions_status_idx ON public.financial_transactions(payment_status);
CREATE INDEX IF NOT EXISTS transactions_category_idx ON public.financial_transactions(category);

DROP TRIGGER IF EXISTS set_updated_at_financial_transactions ON public.financial_transactions;
CREATE TRIGGER set_updated_at_financial_transactions BEFORE UPDATE ON public.financial_transactions
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Class Fee Records -----------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.class_fee_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES public.dance_classes(id) ON DELETE CASCADE,
  
  -- Fee Details
  fee_month DATE NOT NULL,
  base_fee NUMERIC(10,2) NOT NULL,
  discount NUMERIC(10,2) DEFAULT 0,
  late_fee NUMERIC(10,2) DEFAULT 0,
  total_fee NUMERIC(10,2) NOT NULL,
  
  -- Payment
  payment_status payment_status NOT NULL DEFAULT 'pending',
  paid_amount NUMERIC(10,2) DEFAULT 0,
  balance_amount NUMERIC(10,2),
  payment_date DATE,
  payment_method payment_method,
  receipt_number TEXT,
  
  -- Links
  transaction_id UUID REFERENCES public.financial_transactions(id) ON DELETE SET NULL,
  
  due_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  
  UNIQUE(student_id, class_id, fee_month)
);

CREATE INDEX IF NOT EXISTS class_fee_student_idx ON public.class_fee_records(student_id);
CREATE INDEX IF NOT EXISTS class_fee_class_idx ON public.class_fee_records(class_id);
CREATE INDEX IF NOT EXISTS class_fee_status_idx ON public.class_fee_records(payment_status);
CREATE INDEX IF NOT EXISTS class_fee_month_idx ON public.class_fee_records(fee_month);

DROP TRIGGER IF EXISTS set_updated_at_class_fee_records ON public.class_fee_records;
CREATE TRIGGER set_updated_at_class_fee_records BEFORE UPDATE ON public.class_fee_records
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- ============================================================================
-- RENTAL MANAGEMENT
-- ============================================================================

-- Rental Bookings -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rental_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_code TEXT UNIQUE,
  
  -- Client Details
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  client_email TEXT,
  client_address TEXT,
  client_id_proof TEXT,
  
  -- Booking Details
  booking_date DATE NOT NULL DEFAULT CURRENT_DATE,
  rental_start_date DATE NOT NULL,
  rental_end_date DATE NOT NULL,
  rental_days INTEGER NOT NULL,
  
  -- Event Details
  event_type TEXT,
  event_location TEXT,
  expected_attendees INTEGER,
  
  -- Financial
  total_rent_amount NUMERIC(10,2) NOT NULL,
  security_deposit NUMERIC(10,2) DEFAULT 0,
  discount_amount NUMERIC(10,2) DEFAULT 0,
  tax_amount NUMERIC(10,2) DEFAULT 0,
  final_amount NUMERIC(10,2) NOT NULL,
  
  advance_paid NUMERIC(10,2) DEFAULT 0,
  balance_amount NUMERIC(10,2),
  
  payment_status payment_status NOT NULL DEFAULT 'pending',
  
  -- Status
  status rental_status NOT NULL DEFAULT 'inquiry',
  is_confirmed BOOLEAN NOT NULL DEFAULT false,
  
  -- Return Details
  actual_return_date DATE,
  return_verified_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  damage_charges NUMERIC(10,2) DEFAULT 0,
  refund_amount NUMERIC(10,2) DEFAULT 0,
  
  -- Metadata
  notes TEXT,
  terms_conditions TEXT,
  created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  approved_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS rental_bookings_client_idx ON public.rental_bookings(client_name);
CREATE INDEX IF NOT EXISTS rental_bookings_status_idx ON public.rental_bookings(status);
CREATE INDEX IF NOT EXISTS rental_bookings_start_date_idx ON public.rental_bookings(rental_start_date);
CREATE INDEX IF NOT EXISTS rental_bookings_payment_idx ON public.rental_bookings(payment_status);

DROP TRIGGER IF EXISTS set_updated_at_rental_bookings ON public.rental_bookings;
CREATE TRIGGER set_updated_at_rental_bookings BEFORE UPDATE ON public.rental_bookings
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Rental Booking Items --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rental_booking_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id UUID NOT NULL REFERENCES public.rental_bookings(id) ON DELETE CASCADE,
  inventory_id UUID NOT NULL REFERENCES public.inventory_items(id) ON DELETE RESTRICT,
  
  item_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  rent_per_day NUMERIC(10,2) NOT NULL,
  total_rent NUMERIC(10,2) NOT NULL,
  
  -- Condition
  condition_at_pickup TEXT DEFAULT 'good',
  condition_at_return TEXT,
  damage_description TEXT,
  damage_cost NUMERIC(10,2) DEFAULT 0,
  
  -- Status
  is_picked_up BOOLEAN NOT NULL DEFAULT false,
  picked_up_at TIMESTAMPTZ,
  is_returned BOOLEAN NOT NULL DEFAULT false,
  returned_at TIMESTAMPTZ,
  
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS rental_items_booking_idx ON public.rental_booking_items(booking_id);
CREATE INDEX IF NOT EXISTS rental_items_inventory_idx ON public.rental_booking_items(inventory_id);

-- ============================================================================
-- contact INQUIRIES MANAGEMENT
-- ============================================================================
CREATE TABLE public.inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_code TEXT UNIQUE DEFAULT 'INQ-' || to_char(NOW(), 'YYMMDDHH24MISS') || '-' || floor(random()*1000)::TEXT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE public.inquiries IS 'Contact & support inquiries submitted via the website form.';
COMMENT ON COLUMN public.inquiries.inquiry_code IS 'Human-readable tracking ID for support follow-up.';

-- ============================================================================
-- INQUIRIES & OUTREACH
-- ============================================================================

-- Class Inquiries -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.class_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_code TEXT UNIQUE,
  
  -- Contact Details
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  age INTEGER,
  
  -- Interest
  interested_class TEXT,
  dance_style TEXT,
  experience_level TEXT,
  preferred_schedule TEXT,
  
  message TEXT,
  status inquiry_status NOT NULL DEFAULT 'new',
  source TEXT,
  
  -- Follow-up
  assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
  follow_up_date DATE,
  follow_up_notes TEXT,
  converted_to_student BOOLEAN DEFAULT false,
  conversion_date DATE,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS class_inquiries_status_idx ON public.class_inquiries(status);
CREATE INDEX IF NOT EXISTS class_inquiries_assigned_idx ON public.class_inquiries(assigned_to);

DROP TRIGGER IF EXISTS set_updated_at_class_inquiries ON public.class_inquiries;
CREATE TRIGGER set_updated_at_class_inquiries BEFORE UPDATE ON public.class_inquiries
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Event Inquiries -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_code TEXT UNIQUE,
  
  -- Contact Details
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  organization TEXT,
  
  -- Event Details
  event_type TEXT NOT NULL,
  event_name TEXT,
  preferred_date DATE,
  alternative_dates DATE[],
  event_duration_hours NUMERIC(4,1),
  guest_count INTEGER,
  venue TEXT,
  budget_range TEXT,
  
  -- Requirements
  performance_requirements TEXT,
  special_requests TEXT,
  message TEXT,
  
  -- Status
  status inquiry_status NOT NULL DEFAULT 'new',
  assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
  estimated_quote NUMERIC(10,2),
  
  -- Follow-up
  follow_up_date DATE,
  follow_up_notes TEXT,
  converted_to_event BOOLEAN DEFAULT false,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS event_inquiries_status_idx ON public.event_inquiries(status);
CREATE INDEX IF NOT EXISTS event_inquiries_assigned_idx ON public.event_inquiries(assigned_to);

DROP TRIGGER IF EXISTS set_updated_at_event_inquiries ON public.event_inquiries;
CREATE TRIGGER set_updated_at_event_inquiries BEFORE UPDATE ON public.event_inquiries
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Costume Rental Inquiries ----------------------------------------------------
CREATE TABLE IF NOT EXISTS public.costume_rental_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_code TEXT UNIQUE,
  
  -- Contact Details
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  
  -- Rental Details
  requested_items TEXT NOT NULL,
  quantity_needed INTEGER,
  rental_start DATE NOT NULL,
  rental_end DATE NOT NULL,
  rental_days INTEGER,
  
  -- Event Context
  event_type TEXT,
  event_location TEXT,
  
  notes TEXT,
  status inquiry_status NOT NULL DEFAULT 'new',
  
  -- Follow-up
  assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
  estimated_amount NUMERIC(10,2),
  follow_up_notes TEXT,
  converted_to_booking BOOLEAN DEFAULT false,
  booking_id UUID REFERENCES public.rental_bookings(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS costume_inquiries_status_idx ON public.costume_rental_inquiries(status);

DROP TRIGGER IF EXISTS set_updated_at_costume_rental_inquiries ON public.costume_rental_inquiries;
CREATE TRIGGER set_updated_at_costume_rental_inquiries BEFORE UPDATE ON public.costume_rental_inquiries
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Career Applications ---------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.career_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_code TEXT UNIQUE,
  
  -- Applicant Details
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_location TEXT,
  
  -- Position Details
  position_applied TEXT NOT NULL,
  department TEXT,
  expected_salary NUMERIC(10,2),
  available_from DATE,
  
  -- Experience
  years_of_experience INTEGER,
  current_employer TEXT,
  education_qualification TEXT,
  
  -- Documents
  resume_url TEXT,
  portfolio_url TEXT,
  cover_letter TEXT,
  additional_documents TEXT[],
  
  -- Skills
  skills TEXT[],
  certifications TEXT[],
  languages TEXT[],
  
  -- Status
  status inquiry_status NOT NULL DEFAULT 'new',
  screening_status TEXT,
  interview_date TIMESTAMPTZ,
  interview_notes TEXT,
  
  -- Decision
  is_shortlisted BOOLEAN DEFAULT false,
  is_hired BOOLEAN DEFAULT false,
  rejection_reason TEXT,
  
  reviewed_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS career_applications_status_idx ON public.career_applications(status);
CREATE INDEX IF NOT EXISTS career_applications_position_idx ON public.career_applications(position_applied);

DROP TRIGGER IF EXISTS set_updated_at_career_applications ON public.career_applications;
CREATE TRIGGER set_updated_at_career_applications BEFORE UPDATE ON public.career_applications
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- ============================================================================
-- CONTENT MANAGEMENT
-- ============================================================================

-- Blog Posts ------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  
  -- Media
  cover_image_url TEXT,
  featured_image_url TEXT,
  gallery_urls TEXT[],
  
  -- Categorization
  category TEXT,
  tags TEXT[],
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  
  -- Publishing
  status publication_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  scheduled_for TIMESTAMPTZ,
  
  -- Engagement
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,
  
  -- Author
  author_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  -- Featured
  is_featured BOOLEAN NOT NULL DEFAULT false,
  featured_order INTEGER,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_status_idx ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON public.blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_featured_idx ON public.blog_posts(is_featured);

DROP TRIGGER IF EXISTS set_updated_at_blog_posts ON public.blog_posts;
CREATE TRIGGER set_updated_at_blog_posts BEFORE UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Blog Comments ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blog_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  parent_comment_id UUID REFERENCES public.blog_comments(id) ON DELETE CASCADE,
  
  -- Commenter
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  commenter_name TEXT NOT NULL,
  commenter_email TEXT,
  
  content TEXT NOT NULL,
  
  -- Moderation
  is_approved BOOLEAN NOT NULL DEFAULT false,
  is_spam BOOLEAN NOT NULL DEFAULT false,
  moderated_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  moderated_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS blog_comments_post_idx ON public.blog_comments(post_id);
CREATE INDEX IF NOT EXISTS blog_comments_parent_idx ON public.blog_comments(parent_comment_id);
CREATE INDEX IF NOT EXISTS blog_comments_approved_idx ON public.blog_comments(is_approved);

DROP TRIGGER IF EXISTS set_updated_at_blog_comments ON public.blog_comments;
CREATE TRIGGER set_updated_at_blog_comments BEFORE UPDATE ON public.blog_comments
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Alumni ----------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.alumni (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Personal Details
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  current_location TEXT,
  
  -- Academy Details
  batch_year INTEGER,
  enrollment_year INTEGER,
  graduation_year INTEGER,
  training_duration_years NUMERIC(3,1),
  dance_styles TEXT[],
  
  -- Current Status
  "current_role" TEXT,
  current_organization TEXT,
  profession TEXT,
  achievements TEXT,
  notable_performances TEXT[],
  
  -- Awards & Recognition
  awards TEXT[],
  certifications TEXT[],
  
  -- Profile
  bio TEXT,
  photo_url TEXT,
  social_media_links JSONB,
  website_url TEXT,
  
  -- Featured
  is_featured BOOLEAN NOT NULL DEFAULT false,
  featured_order INTEGER,
  testimonial TEXT,
  
  -- Contact Preferences
  willing_to_mentor BOOLEAN DEFAULT false,
  available_for_events BOOLEAN DEFAULT false,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS alumni_batch_idx ON public.alumni(batch_year);
CREATE INDEX IF NOT EXISTS alumni_featured_idx ON public.alumni(is_featured);

DROP TRIGGER IF EXISTS set_updated_at_alumni ON public.alumni;
CREATE TRIGGER set_updated_at_alumni BEFORE UPDATE ON public.alumni
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Testimonials ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Author
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  author_organization TEXT,
  author_photo_url TEXT,
  
  -- Content
  title TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  
  -- Context
  related_to TEXT,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  class_id UUID REFERENCES public.dance_classes(id) ON DELETE SET NULL,
  
  -- Publishing
  is_approved BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  featured_order INTEGER,
  
  approved_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  approved_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS testimonials_approved_idx ON public.testimonials(is_approved);
CREATE INDEX IF NOT EXISTS testimonials_featured_idx ON public.testimonials(is_featured);

DROP TRIGGER IF EXISTS set_updated_at_testimonials ON public.testimonials;
CREATE TRIGGER set_updated_at_testimonials BEFORE UPDATE ON public.testimonials
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Feedback --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Submitter
  submitted_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  
  -- Feedback Details
  feedback_type TEXT NOT NULL,
  category TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  
  -- Rating
  overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 5),
  service_rating INTEGER CHECK (service_rating BETWEEN 1 AND 5),
  instructor_rating INTEGER CHECK (instructor_rating BETWEEN 1 AND 5),
  facility_rating INTEGER CHECK (facility_rating BETWEEN 1 AND 5),
  
  -- Context
  related_to TEXT,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  class_id UUID REFERENCES public.dance_classes(id) ON DELETE SET NULL,
  
  -- Status
  status inquiry_status NOT NULL DEFAULT 'new',
  is_anonymous BOOLEAN NOT NULL DEFAULT false,
  
  -- Response
  response TEXT,
  responded_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  responded_at TIMESTAMPTZ,
  
  attachments TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS feedback_type_idx ON public.feedback(feedback_type);
CREATE INDEX IF NOT EXISTS feedback_status_idx ON public.feedback(status);
CREATE INDEX IF NOT EXISTS feedback_rating_idx ON public.feedback(overall_rating);

-- ============================================================================
-- NOTIFICATIONS & COMMUNICATIONS
-- ============================================================================

-- Notifications ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Recipient
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  
  -- Content
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  action_url TEXT,
  action_label TEXT,
  
  -- Context
  related_entity_type TEXT,
  related_entity_id UUID,
  
  -- Status
  is_read BOOLEAN NOT NULL DEFAULT false,
  read_at TIMESTAMPTZ,
  
  -- Priority
  priority TEXT DEFAULT 'normal',
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS notifications_user_idx ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS notifications_read_idx ON public.notifications(is_read);
CREATE INDEX IF NOT EXISTS notifications_type_idx ON public.notifications(notification_type);
CREATE INDEX IF NOT EXISTS notifications_created_idx ON public.notifications(created_at DESC);

-- Email Log -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.email_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Recipients
  to_emails TEXT[] NOT NULL,
  cc_emails TEXT[],
  bcc_emails TEXT[],
  
  -- Content
  subject TEXT NOT NULL,
  body_text TEXT,
  body_html TEXT,
  
  -- Metadata
  email_type TEXT NOT NULL,
  template_name TEXT,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  failure_reason TEXT,
  
  -- Context
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  related_entity_type TEXT,
  related_entity_id UUID,
  
  -- Tracking
  provider TEXT,
  provider_message_id TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS email_log_user_idx ON public.email_log(user_id);
CREATE INDEX IF NOT EXISTS email_log_status_idx ON public.email_log(status);
CREATE INDEX IF NOT EXISTS email_log_type_idx ON public.email_log(email_type);
CREATE INDEX IF NOT EXISTS email_log_sent_idx ON public.email_log(sent_at DESC);

-- SMS Log ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.sms_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Recipient
  phone_number TEXT NOT NULL,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  
  -- Content
  message TEXT NOT NULL,
  message_type TEXT NOT NULL,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  failure_reason TEXT,
  
  -- Context
  related_entity_type TEXT,
  related_entity_id UUID,
  
  -- Tracking
  provider TEXT,
  provider_message_id TEXT,
  cost NUMERIC(6,4),
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS sms_log_user_idx ON public.sms_log(user_id);
CREATE INDEX IF NOT EXISTS sms_log_status_idx ON public.sms_log(status);
CREATE INDEX IF NOT EXISTS sms_log_sent_idx ON public.sms_log(sent_at DESC);

-- ============================================================================
-- SYSTEM & AUDIT
-- ============================================================================

-- Audit Logs ------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Actor
  actor_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  actor_auth_id TEXT,
  actor_role user_role,
  actor_name TEXT,
  actor_email TEXT,
  
  -- Action
  action TEXT NOT NULL,
  action_category TEXT,
  description TEXT,
  
  -- Target
  entity_type TEXT,
  entity_id UUID,
  entity_name TEXT,
  
  -- Changes
  old_values JSONB,
  new_values JSONB,
  changed_fields TEXT[],
  
  -- Request Context
  ip_address INET,
  user_agent TEXT,
  request_path TEXT,
  request_method TEXT,
  
  -- Metadata
  metadata JSONB,
  severity TEXT DEFAULT 'info',
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS audit_logs_user_idx ON public.audit_logs(actor_user_id);
CREATE INDEX IF NOT EXISTS audit_logs_action_idx ON public.audit_logs(action);
CREATE INDEX IF NOT EXISTS audit_logs_category_idx ON public.audit_logs(action_category);
CREATE INDEX IF NOT EXISTS audit_logs_entity_idx ON public.audit_logs(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS audit_logs_created_idx ON public.audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS audit_logs_severity_idx ON public.audit_logs(severity);

-- System Settings -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.system_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  setting_category TEXT NOT NULL,
  description TEXT,
  data_type TEXT NOT NULL,
  is_public BOOLEAN NOT NULL DEFAULT false,
  is_editable BOOLEAN NOT NULL DEFAULT true,
  updated_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS system_settings_key_idx ON public.system_settings(setting_key);
CREATE INDEX IF NOT EXISTS system_settings_category_idx ON public.system_settings(setting_category);

DROP TRIGGER IF EXISTS set_updated_at_system_settings ON public.system_settings;
CREATE TRIGGER set_updated_at_system_settings BEFORE UPDATE ON public.system_settings
FOR EACH ROW EXECUTE PROCEDURE public.set_updated_at();

-- Activity Log ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activity_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  activity_type TEXT NOT NULL,
  activity_description TEXT NOT NULL,
  
  -- Context
  entity_type TEXT,
  entity_id UUID,
  
  -- Metadata
  metadata JSONB,
  ip_address INET,
  user_agent TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', NOW())
);

CREATE INDEX IF NOT EXISTS activity_log_user_idx ON public.activity_log(user_id);
CREATE INDEX IF NOT EXISTS activity_log_type_idx ON public.activity_log(activity_type);
CREATE INDEX IF NOT EXISTS activity_log_created_idx ON public.activity_log(created_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dancer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_performers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_schedule_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_maintenance_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dance_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dance_class_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dance_class_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_performance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.annual_day_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.annual_day_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.annual_day_performances ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.annual_day_props ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.annual_day_team_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_fee_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_booking_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.costume_rental_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alumni ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sms_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.storage_buckets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- BASIC RLS POLICIES (Examples - Customize based on requirements)
-- ============================================================================

-- Users: Can read own data, admins can read all
DROP POLICY IF EXISTS "users_self_select" ON public.users;
CREATE POLICY "users_self_select" ON public.users 
FOR SELECT USING (
  auth.uid()::text = auth_user_id 
  OR EXISTS (
    SELECT 1 FROM public.users u 
    WHERE u.auth_user_id = auth.uid()::text 
    AND u.role = 'admin'
  )
);

-- Users: Can update own non-role fields
DROP POLICY IF EXISTS "users_self_update" ON public.users;
CREATE POLICY "users_self_update" ON public.users 
FOR UPDATE USING (auth.uid()::text = auth_user_id);

-- Events: All authenticated users can read
DROP POLICY IF EXISTS "events_authenticated_select" ON public.events;
CREATE POLICY "events_authenticated_select" ON public.events 
FOR SELECT USING (auth.uid() IS NOT NULL);

-- Tasks: Users can see tasks assigned to them
DROP POLICY IF EXISTS "tasks_assigned_select" ON public.tasks;
CREATE POLICY "tasks_assigned_select" ON public.tasks 
FOR SELECT USING (
  assigned_to = auth.uid()
  OR created_by = auth.uid()
  OR EXISTS (
    SELECT 1 FROM public.users u 
    WHERE u.id = auth.uid() 
    AND u.role IN ('admin', 'staff')
  )
);

-- ============================================================================
-- HELPER VIEWS
-- ============================================================================

-- View: User Full Profile
CREATE OR REPLACE VIEW public.v_user_profiles AS
SELECT 
  u.*,
  sp.designation,
  sp.hire_date,
  sp.salary_amount,
  dp.skill_level,
  dp.primary_style,
  dp.performance_count,
  st.guardian_name,
  st.school_name,
  st.grade
FROM public.users u
LEFT JOIN public.staff_profiles sp ON u.id = sp.user_id
LEFT JOIN public.dancer_profiles dp ON u.id = dp.user_id
LEFT JOIN public.student_profiles st ON u.id = st.user_id;

-- View: Event Summary with Performers
CREATE OR REPLACE VIEW public.v_event_summary AS
SELECT 
  e.*,
  u.full_name AS incharge_name,
  COUNT(DISTINCT ep.id) AS performer_count,
  STRING_AGG(DISTINCT ep.performer_name, ', ') AS performer_names
FROM public.events e
LEFT JOIN public.users u ON e.incharge_user_id = u.id
LEFT JOIN public.event_performers ep ON e.id = ep.event_id
GROUP BY e.id, u.full_name;

-- View: Class Attendance Summary
CREATE OR REPLACE VIEW public.v_class_attendance_summary AS
SELECT 
  dc.id AS class_id,
  dc.class_name,
  COUNT(DISTINCT ar.user_id) AS total_attendees,
  AVG(ar.duration_minutes) AS avg_duration_minutes,
  COUNT(CASE WHEN ar.is_late THEN 1 END) AS late_count
FROM public.dance_classes dc
LEFT JOIN public.attendance_records ar ON dc.id = ar.class_id
GROUP BY dc.id, dc.class_name;

-- View: Financial Summary
CREATE OR REPLACE VIEW public.v_financial_summary AS
SELECT 
  DATE_TRUNC('month', transaction_date) AS month,
  transaction_type,
  category,
  COUNT(*) AS transaction_count,
  SUM(net_amount) AS total_amount,
  COUNT(CASE WHEN payment_status = 'completed' THEN 1 END) AS completed_count,
  SUM(CASE WHEN payment_status = 'completed' THEN net_amount ELSE 0 END) AS completed_amount
FROM public.financial_transactions
GROUP BY DATE_TRUNC('month', transaction_date), transaction_type, category;

-- ============================================================================
-- INITIAL DATA SETUP
-- ============================================================================

-- Insert default system settings
INSERT INTO public.system_settings (setting_key, setting_value, setting_category, description, data_type, is_public)
VALUES
  ('academy_name', '"Footloose House of Choreography"', 'general', 'Academy name', 'string', true),
  ('academy_email', '"info@footloosehoc.com"', 'general', 'Primary contact email', 'string', true),
  ('academy_phone', '"+91-XXXXXXXXXX"', 'general', 'Primary contact phone', 'string', true),
  ('currency', '"INR"', 'financial', 'Default currency', 'string', false),
  ('tax_rate', '18', 'financial', 'Default tax rate percentage', 'number', false),
  ('late_fee_per_day', '50', 'financial', 'Late fee per day for class fees', 'number', false),
  ('security_deposit_percentage', '20', 'rental', 'Security deposit percentage for rentals', 'number', false),
  ('max_rental_days', '7', 'rental', 'Maximum rental period in days', 'number', false)
ON CONFLICT (setting_key) DO NOTHING;

-- ============================================================================
-- FUNCTIONS FOR BUSINESS LOGIC
-- ============================================================================

-- Function: Calculate rental booking amount
CREATE OR REPLACE FUNCTION public.calculate_rental_amount(
  p_booking_id UUID
) RETURNS NUMERIC AS $$
DECLARE
  v_total NUMERIC := 0;
BEGIN
  SELECT COALESCE(SUM(total_rent), 0)
  INTO v_total
  FROM NEW.rental_booking_items
  WHERE booking_id = p_booking_id;
  
  RETURN v_total;
END;
$$ LANGUAGE plpgsql;

-- Function: Update attendance duration
CREATE OR REPLACE FUNCTION public.update_attendance_duration()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.check_out_at IS NOT NULL AND NEW.check_in_at IS NOT NULL THEN
    NEW.duration_minutes := EXTRACT(EPOCH FROM (NEW.check_out_at - NEW.check_in_at)) / 60;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_attendance_duration 
BEFORE INSERT OR UPDATE ON public.attendance_records
FOR EACH ROW EXECUTE PROCEDURE public.update_attendance_duration();

-- Function: Update inventory available quantity
CREATE OR REPLACE FUNCTION public.update_inventory_quantity()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    UPDATE NEW.inventory_items
    SET available_quantity = total_quantity - (
      SELECT COALESCE(SUM(quantity), 0)
      FROM NEW.rental_booking_items rbi
      JOIN NEW.rental_bookings rb ON rbi.booking_id = rb.id
      WHERE rbi.inventory_id = NEW.inventory_id
      AND rb.status IN ('booked', 'confirmed', 'in_use')
      AND NOT rbi.is_returned
    )
    WHERE id = NEW.inventory_id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_inventory_on_rental 
AFTER INSERT OR UPDATE ON public.rental_booking_items
FOR EACH ROW EXECUTE PROCEDURE public.update_inventory_quantity();

-- ============================================================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================================================

COMMENT ON TABLE public.users IS 'Core user table with authentication and role information';
COMMENT ON TABLE public.events IS 'Event management with client details and scheduling';
COMMENT ON TABLE public.tasks IS 'Task assignment and tracking for staff and dancers';
COMMENT ON TABLE public.inventory_items IS 'Costume, prop, and equipment inventory';
COMMENT ON TABLE public.rental_bookings IS 'Costume and prop rental management';
COMMENT ON TABLE public.financial_transactions IS 'All financial transactions including income and expenses';
COMMENT ON TABLE public.dance_classes IS 'Regular dance class schedule and management';
COMMENT ON TABLE public.attendance_records IS 'Check-in/check-out tracking for staff, dancers, and students';
COMMENT ON TABLE public.annual_day_projects IS 'School annual day event management';
COMMENT ON TABLE public.audit_logs IS 'System audit trail for all critical actions';

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================