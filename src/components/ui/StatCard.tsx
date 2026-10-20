import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function StatCard({
  title,
  value,
  change,
  trend,
  className
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  className?: string;
}) {
  return (
    <div className={cn('card p-5', className)}>
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        <span className={cn('text-xs font-semibold', trend === 'up' ? 'text-emerald-600' : 'text-amber-600')}>
          {trend === 'up' ? '▲' : '▼'} {change}
        </span>
      </div>
    </div>
  );
}
