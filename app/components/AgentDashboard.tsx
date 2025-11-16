'use client';

import { useState } from 'react';
import { Activity, TrendingUp, DollarSign, Target, Share2, Settings2, Bell, ExternalLink } from 'lucide-react';

export function AgentDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'trades' | 'settings'>('overview');

  const recentTrades = [
    {
      id: '1',
      type: 'Arbitrage',
      market: 'US Elections 2024',
      profit: '+$124.50',
      profitPercent: '+3.2%',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      type: 'Yield Merge',
      market: 'Bitcoin $100k',
      profit: '+$89.20',
      profitPercent: '+2.1%',
      time: '5 hours ago',
      status: 'completed',
    },
    {
      id: '3',
      type: 'Arbitrage',
      market: 'Fed Rate Decision',
      profit: '+$156.80',
      profitPercent: '+4.5%',
      time: '1 day ago',
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Agent Dashboard</h1>
            <p className="text-fg/60">Monitor your automated trading performance</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 glass-effect hover:bg-surface rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-3 glass-effect hover:bg-surface rounded-lg transition-colors">
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg/60">Total Value</span>
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold">$25,500</div>
            <div className="text-sm text-success flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +12.5% this month
            </div>
          </div>

          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg/60">Total Profit</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-2xl font-bold text-success">+$2,847</div>
            <div className="text-sm text-fg/60">18.5% APY</div>
          </div>

          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg/60">Active Trades</span>
              <Activity className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm text-fg/60">Across 4 markets</div>
          </div>

          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-fg/60">Win Rate</span>
              <Target className="w-5 h-5 text-success" />
            </div>
            <div className="text-2xl font-bold">87%</div>
            <div className="text-sm text-fg/60">42 successful trades</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 glass-effect rounded-lg p-2 w-fit">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'overview' ? 'bg-accent text-white' : 'hover:bg-surface'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('trades')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'trades' ? 'bg-accent text-white' : 'hover:bg-surface'
            }`}
          >
            Trade History
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'settings' ? 'bg-accent text-white' : 'hover:bg-surface'
            }`}
          >
            Settings
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Performance Chart Placeholder */}
            <div className="glass-effect rounded-lg p-8">
              <h2 className="text-xl font-bold mb-6">Performance Overview</h2>
              <div className="h-64 flex items-center justify-center bg-surface/50 rounded-lg">
                <div className="text-center space-y-2">
                  <Activity className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-fg/60">Performance chart coming soon</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-effect rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Trades</h2>
                <button className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-1">
                  View All
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                {recentTrades.map((trade) => (
                  <div
                    key={trade.id}
                    className="flex items-center justify-between p-4 bg-surface hover:bg-surface/80 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-success/20 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <div className="font-semibold">{trade.market}</div>
                        <div className="text-sm text-fg/60">{trade.type} • {trade.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-success">{trade.profit}</div>
                      <div className="text-sm text-fg/60">{trade.profitPercent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Performance */}
            <div className="glass-effect rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-bold">Share Your Success</h3>
              <p className="text-fg/60">
                Show your trading performance to the Farcaster community
              </p>
              <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share on Farcaster
              </button>
            </div>
          </div>
        )}

        {activeTab === 'trades' && (
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-xl font-bold mb-6">Complete Trade History</h2>
            <div className="space-y-3">
              {recentTrades.map((trade) => (
                <div
                  key={trade.id}
                  className="flex items-center justify-between p-4 bg-surface rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-success/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold">{trade.market}</div>
                      <div className="text-sm text-fg/60">{trade.type} • {trade.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-success">{trade.profit}</div>
                      <div className="text-sm text-fg/60">{trade.profitPercent}</div>
                    </div>
                    <button className="p-2 hover:bg-surface/80 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-xl font-bold mb-6">Agent Settings</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Mispricing Threshold</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="2"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold">Capital Allocation</label>
                <input
                  type="number"
                  defaultValue="1000"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent"
                />
              </div>

              <button className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-200">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
