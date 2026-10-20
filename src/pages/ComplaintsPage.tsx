import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { complaints } from '../data/demo';

export function ComplaintsPage() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Plaintes et signalements</h2>
          <p className="text-sm text-slate-500">Dossiers confidentiels et accessibles aux agents habilités.</p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card>
          <div className="text-sm text-slate-500">Total reçues</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">24</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">À qualifier</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">6</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">En cours d’examen</div>
          <div className="mt-2 text-3xl font-bold text-slate-800">11</div>
        </Card>
      </div>

      <div className="mt-6 table-scroll">
        <table className="min-w-full rounded-xl border border-slate-200 bg-white text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Référence</th>
              <th className="px-4 py-3">Entreprise</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Urgence</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Responsable</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-semibold text-slate-800">{complaint.reference}</td>
                <td className="px-4 py-3">{complaint.company}</td>
                <td className="px-4 py-3">{complaint.category}</td>
                <td className="px-4 py-3">
                  <Badge tone={complaint.urgency === 'Urgent' ? 'danger' : complaint.urgency === 'Critique' ? 'warning' : 'info'}>
                    {complaint.urgency}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone="info">{complaint.status}</Badge>
                </td>
                <td className="px-4 py-3">{complaint.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
