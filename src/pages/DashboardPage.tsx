import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { monthlyInspections, regionalBreakdown, sectorBreakdown } from '../data/demo';
import { Card } from '../components/ui/Card';

const chartColors = ['#1d4ed8', '#60a5fa', '#0ea5e9', '#14b8a6', '#f59e0b'];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Entreprises enregistrées', value: '1,248', change: '+5.2%', trend: 'up' },
          { title: 'Inspecteurs actifs', value: '84', change: '+3.1%', trend: 'up' },
          { title: 'Inspections programmées', value: '312', change: '+8.7%', trend: 'up' },
          { title: 'Rapports en attente', value: '28', change: '-2.5%', trend: 'down' }
        ].map((item) => (
          <div key={item.title} className="card p-5">
            <div className="text-sm text-slate-500">{item.title}</div>
            <div className="mt-3 flex items-end justify-between">
              <div className="text-2xl font-bold text-slate-800">{item.value}</div>
              <span className={`text-xs font-semibold ${item.trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}`}>
                {item.trend === 'up' ? '▲' : '▼'} {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Évolution mensuelle des inspections</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyInspections}>
                <defs>
                  <linearGradient id="fillInspections" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#1d4ed8" fill="url(#fillInspections)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Répartition des inspections par région</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={regionalBreakdown} dataKey="value" innerRadius={45} outerRadius={90} paddingAngle={2}>
                  {regionalBreakdown.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Répartition des entreprises par secteur</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {sectorBreakdown.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">État des inspections</h3>
          <div className="space-y-4">
            {[
              { label: 'Programmées', value: 154, color: 'bg-blue-600' },
              { label: 'En cours', value: 41, color: 'bg-amber-500' },
              { label: 'Terminées', value: 718, color: 'bg-emerald-500' },
              { label: 'Reportées', value: 27, color: 'bg-slate-400' }
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm text-slate-600">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${(item.value / 718) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Activités récentes</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="rounded-lg border border-slate-200 p-3">Nouveau rapport de mission validé pour Djibouti Logistics Group.</li>
            <li className="rounded-lg border border-slate-200 p-3">3 inspections programmées dans la région d’Ali Sabieh.</li>
            <li className="rounded-lg border border-slate-200 p-3">2 plaintes reçues et en cours de qualification.</li>
          </ul>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-800">Échéances à surveiller</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-3">
              <span>Constat F-901</span>
              <span className="font-semibold text-amber-700">12/11</span>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-rose-200 bg-rose-50 p-3">
              <span>Inspection INS-2042</span>
              <span className="font-semibold text-rose-700">15/11</span>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-sky-200 bg-sky-50 p-3">
              <span>Rapport de contrôle</span>
              <span className="font-semibold text-sky-700">18/11</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
