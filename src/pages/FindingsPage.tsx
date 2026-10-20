import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { findings } from '../data/demo';

export function FindingsPage() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Constats et mesures correctives</h2>
          <p className="text-sm text-slate-500">Suivi des manquements et des actions correctives.</p>
        </div>
        <Link to="/missions" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Voir les missions
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card>
          <div className="text-sm text-slate-500">À examiner</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">19</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">En régularisation</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">12</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">Régularisés</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">34</div>
        </Card>
      </div>

      <div className="mt-6 table-scroll">
        <table className="min-w-full rounded-xl border border-slate-200 bg-white text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Référence</th>
              <th className="px-4 py-3">Inspection</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Échéance</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((finding) => (
              <tr key={finding.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-semibold text-slate-800">{finding.reference}</td>
                <td className="px-4 py-3">{finding.inspection}</td>
                <td className="px-4 py-3">{finding.category}</td>
                <td className="px-4 py-3">{finding.dueDate}</td>
                <td className="px-4 py-3">
                  <Badge tone={finding.status === 'Régularisé' ? 'success' : finding.status === 'Mesure demandée' ? 'warning' : 'info'}>
                    {finding.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">{finding.responsible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
