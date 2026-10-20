import { Bell, Building2, BriefcaseBusiness, FileText, LayoutDashboard, LogOut, ShieldCheck, TriangleAlert, User } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { appMode, isSupabaseConfigured } from '../services/supabase';

const navItems = [
  { to: '/', label: 'Tableau de bord', icon: LayoutDashboard },
  { to: '/entreprises', label: 'Entreprises', icon: Building2 },
  { to: '/missions', label: 'Missions', icon: BriefcaseBusiness },
  { to: '/constats', label: 'Constats', icon: TriangleAlert },
  { to: '/plaintes', label: 'Plaintes', icon: ShieldCheck },
  { to: '/rapports', label: 'Rapports', icon: FileText },
  { to: '/notifications', label: 'Notifications', icon: Bell }
];

export function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full bg-slate-900 text-white lg:w-72">
          <div className="flex items-center gap-3 border-b border-slate-700 px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">P</div>
            <div>
              <div className="text-lg font-bold tracking-wide">PNIIT</div>
              <div className="text-[11px] text-slate-300">Inspection du travail</div>
            </div>
          </div>

          <nav className="space-y-2 p-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive ? 'bg-blue-600 text-white shadow-soft' : 'text-slate-200 hover:bg-slate-800'
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 border-t border-slate-700 p-4 text-sm text-slate-300">
            <div className="mb-2 flex items-center gap-2 font-semibold text-white">
              <ShieldCheck size={16} />
              Sécurité & accès
            </div>
            <div>Rôle: {user?.role ?? 'Non défini'}</div>
            <div>Mode: {appMode}</div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <div>
                <h1 className="text-xl font-bold text-slate-800">Plateforme Nationale de l’Inspection du Travail</h1>
                <p className="text-sm text-slate-500">République de Djibouti</p>
              </div>

              <div className="flex items-center gap-3">
                <NavLink to="/notifications" className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-100" aria-label="Notifications">
                  <Bell size={18} />
                </NavLink>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <User size={16} />
                  </div>
                  <div className="hidden text-left sm:block">
                    <div className="text-sm font-semibold text-slate-800">{user?.fullName}</div>
                    <div className="text-xs text-slate-500">{user?.service}</div>
                  </div>
                  <button
                    onClick={logout}
                    className="ml-2 rounded-md border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-100"
                    aria-label="Déconnexion"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {!isSupabaseConfigured && (
            <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Configuration Supabase absente. Le mode actuel est démo. Renseignez les variables VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY pour activer les connexions réelles.
            </div>
          )}

          <div className="p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
