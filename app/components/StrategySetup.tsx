'use client';

import { useState } from 'react';
import { ArrowLeft, Wallet, TrendingUp, Bell, CheckCircle2, Loader2 } from 'lucide-react';

interface StrategySetupProps {
  onComplete: () => void;
  onBack: () => void;
}

export function StrategySetup({ onComplete, onBack }: StrategySetupProps) {
  const [step, setStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [formData, setFormData] = useState({
    capital: '',
    threshold: '2',
    markets: [] as string[],
    notifications: true,
  });

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsConnecting(false);
    setStep(2);
  };

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDeploying(false);
    onComplete();
  };

  const popularMarkets = [
    { id: '1', name: 'US Elections 2024', volume: '$2.4M' },
    { id: '2', name: 'Bitcoin $100k by EOY', volume: '$1.8M' },
    { id: '3', name: 'Fed Rate Decision', volume: '$1.2M' },
    { id: '4', name: 'Tech Earnings', volume: '$890K' },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Setup Your Agent</h1>
            <p className="text-fg/60">Step {step} of 3</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-fg/60">Progress</span>
            <span className="text-sm font-semibold">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Connect Wallet */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="glass-effect rounded-lg p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Wallet className="w-8 h-8 text-accent" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
                <p className="text-fg/60">
                  Connect your wallet to start deploying capital and managing your agent
                </p>
              </div>

              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className="w-full px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Wallet className="w-5 h-5" />
                    Connect Wallet
                  </>
                )}
              </button>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-fg/60">
                  Supports Coinbase Wallet, MetaMask, and WalletConnect
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Configure Strategy */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="glass-effect rounded-lg p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold">Configure Strategy</h2>
              </div>

              {/* Capital Allocation */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Capital Allocation</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-fg/60">$</span>
                  <input
                    type="number"
                    value={formData.capital}
                    onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                    placeholder="1000"
                    className="w-full pl-8 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <p className="text-xs text-fg/60">Minimum: $100</p>
              </div>

              {/* Mispricing Threshold */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Mispricing Threshold</label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.threshold}
                    onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
                    className="flex-1"
                  />
                  <span className="text-lg font-bold w-12 text-right">{formData.threshold}%</span>
                </div>
                <p className="text-xs text-fg/60">Minimum price difference to trigger trades</p>
              </div>

              {/* Market Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Select Markets to Monitor</label>
                <div className="space-y-2">
                  {popularMarkets.map((market) => (
                    <label
                      key={market.id}
                      className="flex items-center gap-3 p-4 bg-surface hover:bg-surface/80 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.markets.includes(market.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, markets: [...formData.markets, market.id] });
                          } else {
                            setFormData({ ...formData, markets: formData.markets.filter(id => id !== market.id) });
                          }
                        }}
                        className="w-5 h-5 accent-accent"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{market.name}</div>
                        <div className="text-sm text-fg/60">Volume: {market.volume}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(3)}
                disabled={!formData.capital || formData.markets.length === 0}
                className="w-full px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Notifications & Deploy */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="glass-effect rounded-lg p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/20 rounded-lg">
                  <Bell className="w-6 h-6 text-success" />
                </div>
                <h2 className="text-xl font-bold">Notification Preferences</h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-surface rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold">Trade Execution Alerts</div>
                    <div className="text-sm text-fg/60">Get notified when trades are executed</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.notifications}
                    onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                    className="w-5 h-5 accent-accent"
                  />
                </label>

                <label className="flex items-center justify-between p-4 bg-surface rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold">Mispricing Detected</div>
                    <div className="text-sm text-fg/60">Alert when opportunities are found</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent" />
                </label>

                <label className="flex items-center justify-between p-4 bg-surface rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold">Performance Reports</div>
                    <div className="text-sm text-fg/60">Daily summary of agent activity</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-accent" />
                </label>
              </div>

              {/* Summary */}
              <div className="pt-6 border-t border-border space-y-3">
                <h3 className="font-semibold">Configuration Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-fg/60">Capital:</span>
                    <span className="font-semibold">${formData.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-fg/60">Threshold:</span>
                    <span className="font-semibold">{formData.threshold}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-fg/60">Markets:</span>
                    <span className="font-semibold">{formData.markets.length} selected</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDeploy}
                disabled={isDeploying}
                className="w-full px-8 py-4 bg-success hover:bg-success/90 disabled:bg-success/50 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 glow-success"
              >
                {isDeploying ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Deploying Agent...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Deploy Agent
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
