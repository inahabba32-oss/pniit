import { Search, Plus } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { companies } from '../data/demo';

export function CompaniesPage() {
  return (
    <div>
      <SectionHeader
        title="Entreprises"
        subtitle="Gestion des entreprises et de leurs historiques d’inspection"
        action={
          <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            <Plus size={16} />
            Nouvelle entreprise
          </button>
        }
      />

      <Card className="mb-6 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input className="pl-9" placeholder="Rechercher une entreprise..." />
          </div>
          <div className="flex flex-wrap gap-2">
            <select defaultValue="all"><option value="all">Tous secteurs</option></select>
            <select defaultValue="all"><option value="all">Toutes régions</option></select>
            <select defaultValue="all"><option value="all">Tous statuts</option></select>
          </div>
        </div>
      </Card>

      <div className="table-scroll">
        <table className="min-w-full rounded-2xl border border-slate-200 bg-white">
          <thead className="bg-slate-50 text-left text-sm text-slate-600">
            <tr>
              <th className="px-4 py-3">Raison sociale</th>
              <th className="px-4 py-3">Secteur</th>
              <th className="px-4 py-3">Région</th>
              <th className="px-4 py-3">Représentant</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Dernière inspection</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-t border-slate-200 text-sm">
                <td className="px-4 py-3 font-medium text-slate-800">{company.name}</td>
                <td className="px-4 py-3">{company.sector}</td>
                <td className="px-4 py-3">{company.region}</td>
                <td className="px-4 py-3">{company.representative}</td>
                <td className="px-4 py-3">
                  <Badge tone={company.status === 'active' ? 'success' : company.status === 'review' ? 'warning' : 'info'}>
                    {company.status === 'active' ? 'Actif' : company.status === 'review' ? 'À revoir' : 'En attente'}
                  </Badge>
                </td>
                <td className="px-4 py-3">{company.lastInspection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
