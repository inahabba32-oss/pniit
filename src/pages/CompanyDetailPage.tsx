import { Link, useParams } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { companies, findings, inspections } from '../data/demo';

export function CompanyDetailPage() {
  const { id } = useParams();
  const company = companies.find((item) => item.id === id) ?? companies[0];
  const relatedInspections = inspections.filter((item) => item.company === company.name);
  const relatedFindings = findings.filter((item) => item.inspection === relatedInspections[0]?.id || item.inspection === 'INS-2042');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-slate-500">Entreprise / {company.id}</div>
          <h2 className="text-2xl font-bold text-slate-800">{company.name}</h2>
        </div>
        <Link to="/entreprises" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Retour aux entreprises
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card>
          <div className="text-sm text-slate-500">Secteur</div>
          <div className="mt-2 text-xl font-bold text-slate-800">{company.sector}</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">Région</div>
          <div className="mt-2 text-xl font-bold text-slate-800">{company.region}</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">Statut</div>
          <div className="mt-2">
            <Badge tone={company.status === 'active' ? 'success' : company.status === 'review' ? 'warning' : 'info'}>
              {company.status === 'active' ? 'Actif' : company.status === 'review' ? 'À revoir' : 'En attente'}
            </Badge>
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Informations générales</h3>
          <dl className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between gap-4"><dt>Raison sociale</dt><dd className="font-medium text-slate-800">{company.name}</dd></div>
            <div className="flex justify-between gap-4"><dt>Immatriculation</dt><dd className="font-medium text-slate-800">{company.registrationNumber}</dd></div>
            <div className="flex justify-between gap-4"><dt>Adresse</dt><dd className="font-medium text-slate-800">{company.address}</dd></div>
            <div className="flex justify-between gap-4"><dt>Téléphone</dt><dd className="font-medium text-slate-800">{company.phone}</dd></div>
            <div className="flex justify-between gap-4"><dt>Email</dt><dd className="font-medium text-slate-800">{company.email}</dd></div>
            <div className="flex justify-between gap-4"><dt>Représentant</dt><dd className="font-medium text-slate-800">{company.representative}</dd></div>
          </dl>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Historique d’inspection</h3>
          <div className="space-y-3">
            {relatedInspections.map((inspection) => (
              <div key={inspection.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                <div className="font-semibold text-slate-800">{inspection.id}</div>
                <div className="text-slate-600">{inspection.type}</div>
                <div className="text-slate-500">{inspection.date}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-bold text-slate-800">Constats et mesures correctives</h3>
        <div className="table-scroll">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Référence</th>
                <th className="px-4 py-3">Catégorie</th>
                <th className="px-4 py-3">Échéance</th>
                <th className="px-4 py-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {relatedFindings.map((finding) => (
                <tr key={finding.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-800">{finding.reference}</td>
                  <td className="px-4 py-3">{finding.category}</td>
                  <td className="px-4 py-3">{finding.dueDate}</td>
                  <td className="px-4 py-3">
                    <Badge tone={finding.status === 'Régularisé' ? 'success' : 'warning'}>{finding.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
