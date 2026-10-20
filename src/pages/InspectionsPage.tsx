import { CalendarDays, PlusCircle } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { inspections } from '../data/demo';

export function InspectionsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Planification des inspections"
        subtitle="Calendrier, missions et affectations"
        action={
          <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            <PlusCircle size={16} />
            Nouvelle mission
          </button>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
        <Card>
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <CalendarDays size={18} />
            <h3 className="font-semibold">Calendrier des missions</h3>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
              <div key={day} className="rounded-lg bg-slate-100 p-2 font-semibold text-slate-500">{day}</div>
            ))}
            {Array.from({ length: 14 }).map((_, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-500">
                {index + 5}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-bold">Statuts</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between"><span>Brouillon</span><Badge tone="neutral">4</Badge></div>
            <div className="flex items-center justify-between"><span>À valider</span><Badge tone="warning">2</Badge></div>
            <div className="flex items-center justify-between"><span>Programmée</span><Badge tone="info">7</Badge></div>
            <div className="flex items-center justify-between"><span>En cours</span><Badge tone="success">3</Badge></div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="table-scroll">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Référence</th>
                <th className="px-4 py-3">Entreprise</th>
                <th className="px-4 py-3">Inspecteur</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((inspection) => (
                <tr key={inspection.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-800">{inspection.id}</td>
                  <td className="px-4 py-3">{inspection.company}</td>
                  <td className="px-4 py-3">{inspection.inspector}</td>
                  <td className="px-4 py-3">{inspection.type}</td>
                  <td className="px-4 py-3">{inspection.date}</td>
                  <td className="px-4 py-3">
                    <Badge tone={inspection.status === 'En cours' ? 'success' : inspection.status === 'À valider' ? 'warning' : 'info'}>
                      {inspection.status}
                    </Badge>
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
