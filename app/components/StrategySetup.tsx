'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

interface StrategySetupProps {
  onSetupComplete: () => void;
}

export function StrategySetup({ onSetupComplete }: StrategySetupProps) {
  const [capital, setCapital] = useState('1000');
  const [threshold, setThreshold] = useState('5');
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);

  const markets = [
    { id: '1', name: 'US Elections 2024', volume: '$2.5M' },
    { id: '2', name: 'Bitcoin $100k by EOY', volume: '$1.8M' },
    { id: '3', name: 'AI Regulation 2024', volume: '$950K' },
    { id: '4', name: 'Fed Rate Decision', volume: '$1.2M' },
  ];

  const toggleMarket = (id: string) => {
    setSelectedMarkets(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Setup Card */}
      <div className="glass-effect rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-fg">Setup Your Agent</h2>
          <p className="text-fg/60">Configure your automated trading strategy</p>
        </div>

        {/* Capital Allocation */}
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-fg font-medium">
            <DollarSign className="w-5 h-5 text-accent" />
            <span>Capital Allocation</span>
          </label>
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-fg focus:outline-none focus:border-accent transition-colors duration-200"
            placeholder="Enter amount in USD"
          />
          <p className="text-sm text-fg/60">Minimum: $100 | Recommended: $1,000+</p>
        </div>

        {/* Mispricing Threshold */}
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-fg font-medium">
            <Target className="w-5 h-5 text-accent" />
            <span>Mispricing Threshold</span>
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="20"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              className="flex-1"
            />
            <span className="text-2xl font-bold text-accent w-16 text-right">{threshold}%</span>
          </div>
          <p className="text-sm text-fg/60">Agent will execute trades when price difference exceeds this threshold</p>
        </div>

        {/* Market Selection */}
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-fg font-medium">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span>Select Markets to Monitor</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => toggleMarket(market.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedMarkets.includes(market.id)
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-fg">{market.name}</h4>
                    <p className="text-sm text-fg/60 mt-1">Volume: {market.volume}</p>
                  </div>
                  {selectedMarkets.includes(market.id) && (
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onSetupComplete}
          disabled={selectedMarkets.length === 0}
          className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-success text-white rounded-lg font-bold text-lg hover:shadow-elevate transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="w-5 h-5" />
          <span>Launch Agent</span>
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-effect rounded-lg p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-fg">Automated Trading</h3>
          <p className="text-sm text-fg/60">24/7 monitoring and execution</p>
        </div>
        <div className="glass-effect rounded-lg p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto">
            <Target className="w-6 h-6 text-success" />
          </div>
          <h3 className="font-bold text-fg">Smart Arbitrage</h3>
          <p className="text-sm text-fg/60">Detect and capitalize on mispricings</p>
        </div>
        <div className="glass-effect rounded-lg p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-fg">Yield Optimization</h3>
          <p className="text-sm text-fg/60">Maximize returns automatically</p>
        </div>
      </div>
    </div>
  );
}
