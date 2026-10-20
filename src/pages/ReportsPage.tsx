import { useMemo } from 'react';
import { FileDown, FileText } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { reportTemplates } from '../data/demo';

const metricsByReport = {
  'R1': [
    { label: 'Entreprises contrôlées', value: '128' },
    { label: 'Missions réalisées', value: '54' },
    { label: 'Constats', value: '19' }
  ],
  'R2': [
    { label: 'Missions planifiées', value: '31' },
    { label: 'Rapports validés', value: '19' },
    { label: 'Délai moyen', value: '5.4 j' }
  ],
  'R3': [
    { label: 'Taux de conformité', value: '88%' },
    { label: 'Mesures en retard', value: '4' },
    { label: 'Plaintes traitées', value: '11' }
  ]
};

export function ReportsPage() {
  const reportCards = useMemo(
    () =>
      reportTemplates.map((report) => ({
        ...report,
        metrics: metricsByReport[report.id as keyof typeof metricsByReport] ?? []
      })),
    []
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Rapports</h2>
          <p className="text-sm text-slate-500">Génération et validation des rapports administratifs.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          <FileText size={16} />
          Nouveau rapport
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reportCards.map((report) => (
          <Card key={report.id}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">{report.id}</div>
                <h3 className="mt-1 text-base font-semibold text-slate-800">{report.title}</h3>
              </div>
              <button className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-slate-100" aria-label={`Exporter ${report.title}`}>
                <FileDown size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {report.metrics.map((metric) => (
                <div key={metric.label} className="flex justify-between gap-3 border-b border-slate-100 pb-1">
                  <span>{metric.label}</span>
                  <span className="font-semibold text-slate-800">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-slate-600">Statut : {report.status}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
