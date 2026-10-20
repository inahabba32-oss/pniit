import { useState } from 'react';
import { Link } from 'react-router-dom';

export function InspectionFormPage() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">Mission / nouvelle saisie</div>
          <h2 className="text-2xl font-bold text-slate-800">Créer une inspection</h2>
        </div>
        <Link to="/missions" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Retour à la planification
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="company">Entreprise</label>
            <input id="company" defaultValue="Djibouti Logistics Group" />
          </div>
          <div>
            <label htmlFor="inspecteur">Inspecteur</label>
            <input id="inspecteur" defaultValue="M. Abdoulaye Salah" />
          </div>
          <div>
            <label htmlFor="type">Type de mission</label>
            <select id="type" defaultValue="Inspection programmée">
              <option>Inspection programmée</option>
              <option>Inspection de contrôle</option>
              <option>Inspection consécutive à une plainte</option>
              <option>Inspection de suivi</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" defaultValue="2025-11-12" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="motif">Motif de l’inspection</label>
            <input id="motif" defaultValue="Vérification des obligations de sécurité" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="observations">Observations</label>
            <textarea id="observations" rows={5} defaultValue="Contrôles de sécurité et pièces justificatives à vérifier sur site." />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            Enregistrer la mission
          </button>
          {saved && <span className="text-sm font-medium text-emerald-600">Mission enregistrée avec succès.</span>}
        </div>
      </form>
    </div>
  );
}
