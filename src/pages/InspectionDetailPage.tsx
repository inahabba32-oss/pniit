import { ArrowLeft, ClipboardCheck, FileText, MapPin, ShieldCheck, UserRound } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { inspections } from '../data/demo';

export function InspectionDetailPage() {
  const { id } = useParams();
  const inspection = inspections.find((item) => item.id === id) ?? inspections[0];

  const checklist = [
    'Documents et registres professionnels',
    'Conditions de travail',
    'Durée du travail et repos',
    'Santé et sécurité au travail',
    'Obligations de l’employeur',
    'Protection des travailleurs'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">Mission / {inspection.id}</div>
          <h2 className="text-2xl font-bold text-slate-800">Fiche de mission</h2>
        </div>
        <Link to="/missions" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <ArrowLeft size={16} />
          Retour
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-4 font-semibold text-slate-800">Informations générales</div>
          <dl className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between gap-4"><dt>Entreprise</dt><dd className="font-medium text-slate-800">{inspection.company}</dd></div>
            <div className="flex justify-between gap-4"><dt>Inspecteur</dt><dd className="font-medium text-slate-800">{inspection.inspector}</dd></div>
            <div className="flex justify-between gap-4"><dt>Type</dt><dd className="font-medium text-slate-800">{inspection.type}</dd></div>
            <div className="flex justify-between gap-4"><dt>Date</dt><dd className="font-medium text-slate-800">{inspection.date}</dd></div>
            <div className="flex justify-between gap-4"><dt>Motif</dt><dd className="font-medium text-slate-800">{inspection.motive}</dd></div>
          </dl>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-4 font-semibold text-slate-800">Suivi opérationnel</div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2"><UserRound size={16} /> <span>Inspecteur assigné</span></div>
            <div className="flex items-center gap-2"><MapPin size={16} /> <span>Lieu: Djibouti, zone industrielle</span></div>
            <div className="flex items-center gap-2"><ClipboardCheck size={16} /> <span>Statut: {inspection.status}</span></div>
            <div className="flex items-center gap-2"><FileText size={16} /> <span>Rapport généré: non encore finalisé</span></div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span>Validation hiérarchique requise</span></div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-4 font-semibold text-slate-800">Checklist de contrôle</div>
        <div className="grid gap-3 md:grid-cols-2">
          {checklist.map((item) => (
            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <input type="checkbox" defaultChecked={item.includes('Documents') || item.includes('Santé')} />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-4 font-semibold text-slate-800">Observations et constats</div>
        <textarea rows={6} defaultValue="Les pièces justificatives ont été consultées. Les contrôles de sécurité et l’état des documents de gestion sont en cours d’examen par l’inspecteur habilité." />
      </div>
    </div>
  );
}
