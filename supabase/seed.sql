INSERT INTO regions (code, name) VALUES
  ('DJI', 'Djibouti'),
  ('ALI', 'Ali Sabieh'),
  ('DIK', 'Dikhil'),
  ('OBO', 'Obock'),
  ('TAD', 'Tadjourah');

INSERT INTO activity_categories (code, name, description) VALUES
  ('TRANSPORT', 'Transport / logistique', 'Activités de transport et logistique'),
  ('COMMERCE', 'Commerce', 'Commerce de détail et gros'),
  ('SERVICES', 'Services', 'Services administratifs et privés'),
  ('INDUSTRY', 'Industrie', 'Industries et productions'),
  ('ENERGY', 'Énergie', 'Production et distribution d’énergie');

INSERT INTO roles (code, label, permissions) VALUES
  ('admin_system', 'Administrateur système', '{"access": ["all"]}'),
  ('admin_metier', 'Administrateur métier', '{"access": ["companies","inspections","complaints","reports"]}'),
  ('inspecteur', 'Inspecteur du travail', '{"access": ["missions","inspections","findings"]}'),
  ('controleur', 'Contrôleur', '{"access": ["missions","documents","followup"]}'),
  ('responsable', 'Responsable hiérarchique', '{"access": ["dashboard","reports","followup"]}');

INSERT INTO companies (internal_code, legal_name, registration_number, sector_id, address, region_id, phone, email, representative_name, declared_staff_size, registration_date, status, last_inspection_date, next_deadline)
SELECT 'C-001', 'Djibouti Logistics Group', 'DJ-LOG-2024', ac.id, 'Zone industrielle, Djibouti', r.id, '+253 21 35 45 66', 'contact@djilogistics.dj', 'M. Hassan Ali', 182, '2024-01-12', 'active', '2025-10-03', '2025-11-15'
FROM activity_categories ac JOIN regions r ON r.code = 'DJI' WHERE ac.code = 'TRANSPORT';

INSERT INTO companies (internal_code, legal_name, registration_number, sector_id, address, region_id, phone, email, representative_name, declared_staff_size, registration_date, status, last_inspection_date, next_deadline)
SELECT 'C-002', 'Port Services Djibouti', 'DJ-PORT-778', ac.id, 'Port de Djibouti', r.id, '+253 77 31 84 56', 'ops@portservices.dj', 'Mme Amina Noor', 460, '2023-05-18', 'review', '2025-09-26', '2025-11-01'
FROM activity_categories ac JOIN regions r ON r.code = 'DJI' WHERE ac.code = 'SERVICES';

INSERT INTO companies (internal_code, legal_name, registration_number, sector_id, address, region_id, phone, email, representative_name, declared_staff_size, registration_date, status, last_inspection_date, next_deadline)
SELECT 'C-003', 'Solar Djibouti Holding', 'DJ-SOLAR-114', ac.id, 'Ali Sabieh Centre', r.id, '+253 21 77 12 44', 'sa@solardjibouti.dj', 'M. Youssouf Aden', 91, '2022-11-03', 'pending', '2025-08-14', '2025-11-08'
FROM activity_categories ac JOIN regions r ON r.code = 'ALI' WHERE ac.code = 'ENERGY';
