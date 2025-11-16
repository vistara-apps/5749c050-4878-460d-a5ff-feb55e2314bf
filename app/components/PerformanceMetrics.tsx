'use client';

import { TrendingUp, DollarSign, Activity, Target } from 'lucide-react';

export function PerformanceMetrics() {
  const metrics = [
    {
      label: 'Total Value',
      value: '$25,500',
      change: '+12.5%',
      positive: true,
      icon: DollarSign,
    },
    {
      label: 'Active Trades',
      value: '8',
      change: '+3 today',
      positive: true,
      icon: Activity,
    },
    {
      label: 'Win Rate',
      value: '73%',
      change: '+5% this week',
      positive: true,
      icon: Target,
    },
    {
      label: 'Total Profit',
      value: '$3,250',
      change: '+$450 today',
      positive: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="glass-effect rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg/60">{metric.label}</span>
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-bold text-fg">{metric.value}</h3>
              <p className={`text-sm ${metric.positive ? 'text-success' : 'text-danger'}`}>
                {metric.change}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
