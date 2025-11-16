'use client';

import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export function TradingActivity() {
  const activities = [
    {
      type: 'buy',
      market: 'US Elections 2024',
      outcome: 'YES',
      amount: '$500',
      price: '0.65',
      profit: '+$125',
      time: '2 min ago',
      positive: true,
    },
    {
      type: 'sell',
      market: 'Bitcoin $100k by EOY',
      outcome: 'NO',
      amount: '$750',
      price: '0.42',
      profit: '+$85',
      time: '15 min ago',
      positive: true,
    },
    {
      type: 'buy',
      market: 'AI Regulation 2024',
      outcome: 'YES',
      amount: '$300',
      price: '0.58',
      profit: '+$45',
      time: '1 hour ago',
      positive: true,
    },
    {
      type: 'sell',
      market: 'Fed Rate Decision',
      outcome: 'NO',
      amount: '$450',
      price: '0.35',
      profit: '-$20',
      time: '2 hours ago',
      positive: false,
    },
  ];

  return (
    <div className="glass-effect rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-fg">Recent Activity</h2>
        <button className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-surface rounded-lg hover:bg-surface/80 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.type === 'buy' ? 'bg-success/20' : 'bg-accent/20'
                }`}
              >
                {activity.type === 'buy' ? (
                  <ArrowUpRight className="w-5 h-5 text-success" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-accent" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-fg">{activity.market}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-fg/60">{activity.outcome}</span>
                  <span className="text-xs text-fg/40">•</span>
                  <span className="text-xs text-fg/60">{activity.amount}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold ${activity.positive ? 'text-success' : 'text-danger'}`}>
                {activity.profit}
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3 text-fg/40" />
                <span className="text-xs text-fg/60">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
