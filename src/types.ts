export type Role = 'admin_system' | 'admin_metier' | 'inspecteur' | 'controleur' | 'responsable';

export type UserProfile = {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  region: string;
  service: string;
  active: boolean;
};

export type Company = {
  id: string;
  name: string;
  registrationNumber: string;
  sector: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  representative: string;
  employees: number;
  status: 'active' | 'pending' | 'review';
  lastInspection: string;
  nextDeadline: string;
};

export type Inspection = {
  id: string;
  company: string;
  inspector: string;
  type: string;
  motive: string;
  date: string;
  status: 'Brouillon' | 'À valider' | 'Programmée' | 'En cours' | 'Réalisée' | 'Reportée' | 'Annulée';
  priority: 'Faible' | 'Moyenne' | 'Élevée';
  region: string;
};

export type Finding = {
  id: string;
  reference: string;
  inspection: string;
  category: string;
  severity: 'Faible' | 'Moyenne' | 'Élevée';
  dueDate: string;
  status: 'À examiner' | 'Contrôle en cours' | 'Mesure demandée' | 'En régularisation' | 'Régularisé';
  responsible: string;
};

export type Complaint = {
  id: string;
  reference: string;
  company: string;
  category: string;
  status: 'Reçue' | 'En cours d’examen' | 'Orientée' | 'Inspection à programmer' | 'Clôturée';
  urgency: 'Normale' | 'Urgent' | 'Critique';
  owner: string;
  date: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  type: 'mission' | 'validation' | 'deadline' | 'complaint';
  read: boolean;
};

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
};
