export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">P</div>
          <h1 className="text-2xl font-bold text-slate-800">PNIIT</h1>
          <p className="text-sm text-slate-500">Plateforme Nationale de l’Inspection du Travail</p>
        </div>

        <form className="space-y-4">
          <div>
            <label>Email professionnel</label>
            <input type="email" defaultValue="admin@pniit.dj" />
          </div>
          <div>
            <label>Mot de passe</label>
            <input type="password" defaultValue="password" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
