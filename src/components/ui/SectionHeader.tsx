import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function SectionHeader({ title, subtitle, action, className }: { title: string; subtitle?: string; action?: ReactNode; className?: string }) {
  return (
    <div className={cn('mb-4 flex items-center justify-between gap-4', className)}>
      <div>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
