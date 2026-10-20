import { FileDown, FileText } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { reportTemplates } from '../data/demo';

export function ReportsPage() {
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
        {reportTemplates.map((report) => (
          <Card key={report.id}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm text-slate-500">{report.id}</div>
                <h3 className="mt-1 text-base font-semibold text-slate-800">{report.title}</h3>
              </div>
              <button className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-slate-100">
                <FileDown size={16} />
              </button>
            </div>
            <div className="mt-4 text-sm text-slate-600">Statut : {report.status}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
