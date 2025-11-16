'use client';

import { Activity, Pause, Play, Settings2 } from 'lucide-react';

export function AgentDashboard() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="glass-effect rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-fg">Agent Status</h2>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? 'bg-success/20 text-success hover:bg-success/30'
              : 'bg-surface text-fg/60 hover:bg-surface/80'
          }`}
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span className="font-medium">{isActive ? 'Active' : 'Paused'}</span>
        </button>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-success animate-pulse' : 'bg-fg/30'}`}></div>
        <div className="flex-1">
          <p className="text-sm font-medium text-fg">
            {isActive ? 'Monitoring 4 markets' : 'Agent paused'}
          </p>
          <p className="text-xs text-fg/60">
            {isActive ? 'Last action: 2 minutes ago' : 'Resume to continue trading'}
          </p>
        </div>
      </div>

      {/* Active Markets */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-fg">Active Markets</h3>
        <div className="space-y-2">
          {['US Elections 2024', 'Bitcoin $100k by EOY', 'AI Regulation 2024', 'Fed Rate Decision'].map(
            (market, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <div className="flex items-center space-x-3">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-sm text-fg">{market}</span>
                </div>
                <span className="text-xs text-success">Monitoring</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-3">
        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-surface rounded-lg hover:bg-surface/80 transition-colors duration-200">
          <Settings2 className="w-4 h-4 text-fg" />
          <span className="text-sm font-medium text-fg">Settings</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-accent rounded-lg hover:bg-accent/90 transition-colors duration-200">
          <span className="text-sm font-medium text-white">Add Capital</span>
        </button>
      </div>
    </div>
  );
}

function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
