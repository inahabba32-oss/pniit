import { CheckCheck, Clock3 } from 'lucide-react';
import { notificationItems } from '../data/demo';
import { Card } from '../components/ui/Card';

export function NotificationsPage() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Notifications internes</h2>
          <p className="text-sm text-slate-500">Alertes sur missions, rapports et échéances.</p>
        </div>
      </div>

      <div className="space-y-4">
        {notificationItems.map((item) => (
          <Card key={item.id} className={item.read ? 'opacity-80' : ''}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  {item.read ? <CheckCheck size={16} className="text-emerald-600" /> : <Clock3 size={16} className="text-amber-600" />}
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
              <span className="text-xs text-slate-500">{item.createdAt}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
