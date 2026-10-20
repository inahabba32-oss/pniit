import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { companies } from '../data/demo';

export function CompaniesPage() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Entreprises</h2>
          <p className="text-sm text-slate-500">Gestion des entreprises et de leurs historiques.</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Nouvelle entreprise
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">{company.id}</div>
                <h3 className="mt-1 text-lg font-bold text-slate-800">{company.name}</h3>
              </div>
              <Badge tone={company.status === 'active' ? 'success' : company.status === 'review' ? 'warning' : 'info'}>
                {company.status === 'active' ? 'Actif' : company.status === 'review' ? 'À revoir' : 'En attente'}
              </Badge>
            </div>

            <dl className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between gap-3"><dt>Secteur</dt><dd className="font-medium text-slate-800">{company.sector}</dd></div>
              <div className="flex justify-between gap-3"><dt>Région</dt><dd className="font-medium text-slate-800">{company.region}</dd></div>
              <div className="flex justify-between gap-3"><dt>Représentant</dt><dd className="font-medium text-slate-800">{company.representative}</dd></div>
            </dl>

            <div className="mt-4 flex gap-2">
              <Link to={`/entreprises/${company.id}`} className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200">
                Fiche détaillée
              </Link>
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                Modifier
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
