export const demoDashboardMetrics = [
  { label: 'Entreprises enregistrées', value: '1,248', change: '+5.2%', trend: 'up' },
  { label: 'Inspecteurs actifs', value: '84', change: '+3.1%', trend: 'up' },
  { label: 'Inspections programmées', value: '312', change: '+8.7%', trend: 'up' },
  { label: 'Rapports en attente', value: '28', change: '-2.5%', trend: 'down' }
];

export const monthlyInspections = [
  { month: 'Jan', value: 120 },
  { month: 'Fév', value: 140 },
  { month: 'Mar', value: 138 },
  { month: 'Avr', value: 160 },
  { month: 'Mai', value: 170 },
  { month: 'Jui', value: 180 },
  { month: 'Juil', value: 210 },
  { month: 'Aoû', value: 198 },
  { month: 'Sep', value: 224 },
  { month: 'Oct', value: 190 },
  { month: 'Nov', value: 230 },
  { month: 'Déc', value: 250 }
];

export const regionalBreakdown = [
  { name: 'Djibouti', value: 36 },
  { name: 'Ali Sabieh', value: 22 },
  { name: 'Dikhil', value: 18 },
  { name: 'Obock', value: 14 },
  { name: 'Tadjourah', value: 10 }
];

export const sectorBreakdown = [
  { name: 'Transport', value: 28 },
  { name: 'Commerce', value: 24 },
  { name: 'Services', value: 22 },
  { name: 'Industrie', value: 16 },
  { name: 'Agriculture', value: 10 }
];

export const companies = [
  {
    id: 'C-001',
    name: 'Djibouti Logistics Group',
    registrationNumber: 'DJ-LOG-2024',
    sector: 'Transport / logistique',
    region: 'Djibouti',
    address: 'Zone industrielle, Djibouti',
    phone: '+253 21 35 45 66',
    email: 'contact@djilogistics.dj',
    representative: 'M. Hassan Ali',
    employees: 182,
    status: 'active',
    lastInspection: '2025-10-03',
    nextDeadline: '2025-11-15'
  },
  {
    id: 'C-002',
    name: 'Port Services Djibouti',
    registrationNumber: 'DJ-PORT-778',
    sector: 'Services portuaires',
    region: 'Djibouti',
    address: 'Port de Djibouti',
    phone: '+253 77 31 84 56',
    email: 'ops@portservices.dj',
    representative: 'Mme Amina Noor',
    employees: 460,
    status: 'review',
    lastInspection: '2025-09-26',
    nextDeadline: '2025-11-01'
  },
  {
    id: 'C-003',
    name: 'Solar Djibouti Holding',
    registrationNumber: 'DJ-SOLAR-114',
    sector: 'Énergie / services',
    region: 'Ali Sabieh',
    address: 'Ali Sabieh Centre',
    phone: '+253 21 77 12 44',
    email: 'sa@solardjibouti.dj',
    representative: 'M. Youssouf Aden',
    employees: 91,
    status: 'pending',
    lastInspection: '2025-08-14',
    nextDeadline: '2025-11-08'
  }
];

export const inspections = [
  {
    id: 'INS-2041',
    company: 'Djibouti Logistics Group',
    inspector: 'M. Abdoulaye Salah',
    type: 'Inspection programmée',
    motive: 'Vérification des obligations de sécurité',
    date: '2025-11-05',
    status: 'Programmée',
    priority: 'Élevée',
    region: 'Djibouti'
  },
  {
    id: 'INS-2042',
    company: 'Port Services Djibouti',
    inspector: 'Mme Noura Ismail',
    type: 'Inspection de contrôle',
    motive: 'Contrôle de conformité réglementaire',
    date: '2025-11-12',
    status: 'En cours',
    priority: 'Moyenne',
    region: 'Djibouti'
  },
  {
    id: 'INS-2043',
    company: 'Solar Djibouti Holding',
    inspector: 'M. Fathi Ibrahim',
    type: 'Inspection thématique',
    motive: 'Sanitaires et sécurité du travail',
    date: '2025-11-20',
    status: 'À valider',
    priority: 'Faible',
    region: 'Ali Sabieh'
  }
];

export const findings = [
  {
    id: 'F-901',
    reference: 'Constat / 2025-084',
    inspection: 'INS-2041',
    category: 'Conditions de travail',
    severity: 'Élevée',
    dueDate: '2025-11-12',
    status: 'En régularisation',
    responsible: 'Direction de l’entreprise'
  },
  {
    id: 'F-902',
    reference: 'Constat / 2025-089',
    inspection: 'INS-2042',
    category: 'Documents et registres',
    severity: 'Moyenne',
    dueDate: '2025-11-22',
    status: 'Mesure demandée',
    responsible: 'Gestion RH'
  }
];

export const complaints = [
  {
    id: 'CPL-101',
    reference: 'SIG-2025-001',
    company: 'Djibouti Logistics Group',
    category: 'Conditions de travail',
    status: 'En cours d’examen',
    urgency: 'Urgent',
    owner: 'Direction de l’inspection',
    date: '2025-10-30'
  },
  {
    id: 'CPL-102',
    reference: 'SIG-2025-002',
    company: 'Solar Djibouti Holding',
    category: 'Santé et sécurité',
    status: 'Orientée',
    urgency: 'Normale',
    owner: 'Cellule de contrôle',
    date: '2025-10-28'
  }
];

export const notificationItems = [
  {
    id: 'n1',
    title: 'Mission à programmer',
    text: 'Une inspection de contrôle est en attente d’affectation pour la région de Djibouti.',
    createdAt: '2025-11-02 08:30',
    type: 'mission',
    read: false
  },
  {
    id: 'n2',
    title: 'Rapport soumis',
    text: 'Le rapport de l’inspection INS-2041 est en attente de validation hiérarchique.',
    createdAt: '2025-11-03 12:10',
    type: 'validation',
    read: false
  },
  {
    id: 'n3',
    title: 'Échéance corrective',
    text: 'Le dossier F-901 nécessite une régularisation avant le 12/11/2025.',
    createdAt: '2025-11-03 14:00',
    type: 'deadline',
    read: true
  }
];

export const reportTemplates = [
  { id: 'R1', title: 'Rapport d’inspection', status: 'Draft' },
  { id: 'R2', title: 'Rapport de mission', status: 'Validé' },
  { id: 'R3', title: 'Rapport mensuel', status: 'En attente' }
];
