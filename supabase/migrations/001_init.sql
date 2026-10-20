CREATE TABLE IF NOT EXISTS regions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS activity_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY,
  email text NOT NULL UNIQUE,
  full_name text NOT NULL,
  role text NOT NULL,
  region_id uuid REFERENCES regions(id),
  service text,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  label text NOT NULL,
  permissions jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  internal_code text NOT NULL UNIQUE,
  legal_name text NOT NULL,
  registration_number text,
  sector_id uuid REFERENCES activity_categories(id),
  address text,
  region_id uuid REFERENCES regions(id),
  phone text,
  email text,
  representative_name text,
  declared_staff_size integer,
  registration_date date,
  status text NOT NULL DEFAULT 'active',
  last_inspection_date date,
  next_deadline date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inspectors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL UNIQUE REFERENCES profiles(id),
  function_title text,
  region_id uuid REFERENCES regions(id),
  service text,
  status text NOT NULL DEFAULT 'active',
  skills jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inspections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  company_id uuid REFERENCES companies(id),
  mission_type text NOT NULL,
  motive text,
  planned_date timestamptz,
  region_id uuid REFERENCES regions(id),
  status text NOT NULL DEFAULT 'draft',
  priority text,
  assigned_inspector_id uuid REFERENCES inspectors(id),
  created_by uuid REFERENCES profiles(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inspection_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id uuid NOT NULL REFERENCES inspections(id) ON DELETE CASCADE,
  inspector_id uuid NOT NULL REFERENCES inspectors(id),
  role text,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inspection_checklists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  checklist jsonb NOT NULL DEFAULT '[]'::jsonb,
  version integer NOT NULL DEFAULT 1,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inspection_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inspection_id uuid NOT NULL REFERENCES inspections(id) ON DELETE CASCADE,
  checklist_id uuid REFERENCES inspection_checklists(id),
  observations text,
  findings_summary text,
  closure_date timestamptz,
  created_by uuid REFERENCES profiles(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS findings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  inspection_id uuid REFERENCES inspections(id),
  description text NOT NULL,
  category text,
  legal_reference text,
  priority text,
  expected_measure text,
  responsible_profile_id uuid REFERENCES profiles(id),
  notification_date timestamptz,
  due_date timestamptz,
  status text NOT NULL DEFAULT 'to_review',
  verification_date timestamptz,
  closure_note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS corrective_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  finding_id uuid NOT NULL REFERENCES findings(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  responsible_profile_id uuid REFERENCES profiles(id),
  due_date timestamptz,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  reception_date timestamptz NOT NULL DEFAULT now(),
  category text,
  company_id uuid REFERENCES companies(id),
  description text,
  urgency text,
  responsible_profile_id uuid REFERENCES profiles(id),
  status text NOT NULL DEFAULT 'received',
  decision text,
  closure_date timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  title text NOT NULL,
  report_type text NOT NULL,
  period_start date,
  period_end date,
  author_profile_id uuid REFERENCES profiles(id),
  generated_at timestamptz NOT NULL DEFAULT now(),
  validation_status text NOT NULL DEFAULT 'draft',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  related_table text,
  related_id uuid,
  file_name text NOT NULL,
  storage_path text NOT NULL,
  mime_type text,
  uploaded_by uuid REFERENCES profiles(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  title text NOT NULL,
  body text,
  type text,
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  action text NOT NULL,
  resource_table text,
  resource_id uuid,
  details jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_companies_region ON companies(region_id);
CREATE INDEX IF NOT EXISTS idx_companies_sector ON companies(sector_id);
CREATE INDEX IF NOT EXISTS idx_inspections_company ON inspections(company_id);
CREATE INDEX IF NOT EXISTS idx_inspections_status ON inspections(status);
CREATE INDEX IF NOT EXISTS idx_findings_status ON findings(status);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
CREATE INDEX IF NOT EXISTS idx_notifications_profile ON notifications(profile_id);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspections ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE inspection_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE findings ENABLE ROW LEVEL SECURITY;
ALTER TABLE corrective_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_are_visible_to_authenticated_users" ON profiles
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "companies_read_only_for_authenticated_users" ON companies
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "inspections_read_only_for_authenticated_users" ON inspections
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "findings_read_only_for_authenticated_users" ON findings
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "complaints_read_only_for_authenticated_users" ON complaints
FOR SELECT USING (auth.role() = 'authenticated');
