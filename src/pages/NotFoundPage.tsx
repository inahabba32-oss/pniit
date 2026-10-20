export function NotFoundPage() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <h1 className="text-3xl font-bold text-slate-800">Page introuvable</h1>
      <p className="mt-2 text-slate-500">La ressource demandée n’existe pas ou n’est pas accessible.</p>
    </div>
  );
}
