'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { TrendingUp, Zap, Shield, Users, ArrowRight, Activity, DollarSign, Target } from 'lucide-react';
import { AgentDashboard } from './components/AgentDashboard';
import { StrategySetup } from './components/StrategySetup';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [hasAgent, setHasAgent] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-12 w-12 rounded-full bg-accent"></div>
        </div>
      </div>
    );
  }

  if (hasAgent) {
    return <AgentDashboard />;
  }

  if (showSetup) {
    return <StrategySetup onComplete={() => setHasAgent(true)} onBack={() => setShowSetup(false)} />;
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span>Powered by Base & Farcaster</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fg via-accent to-fg bg-clip-text text-transparent">
              Polymarket Agent
            </h1>
            
            <p className="text-xl text-fg/70 max-w-2xl mx-auto">
              Automated Prediction Market Strategy & Social Trading on Base
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => setShowSetup(true)}
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 glow-accent"
              >
                Launch Agent
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 glass-effect hover:bg-surface/80 rounded-lg font-semibold transition-all duration-200">
                View Strategies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">$2.4M+</div>
                <div className="text-sm text-fg/60">Total Volume</div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-success/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">18.5%</div>
                <div className="text-sm text-fg/60">Avg. APY</div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg p-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-fg/60">Active Agents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-lg p-8 space-y-4 hover:bg-surface/80 transition-all duration-200">
            <div className="p-3 bg-accent/20 rounded-lg w-fit">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Yield Optimization & Arbitrage</h3>
            <p className="text-fg/70">
              Automated detection and execution of profitable arbitrage opportunities. 
              Maximize returns with minimal intervention.
            </p>
          </div>
          
          <div className="glass-effect rounded-lg p-8 space-y-4 hover:bg-surface/80 transition-all duration-200">
            <div className="p-3 bg-success/20 rounded-lg w-fit">
              <Shield className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-bold">Transparent Execution</h3>
            <p className="text-fg/70">
              Full audit trail of all agent activities with verifiable on-chain proofs 
              and Farcaster notifications.
            </p>
          </div>
          
          <div className="glass-effect rounded-lg p-8 space-y-4 hover:bg-surface/80 transition-all duration-200">
            <div className="p-3 bg-accent/20 rounded-lg w-fit">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Social Trading</h3>
            <p className="text-fg/70">
              Discover and mirror successful strategies. Share performance and 
              engage with the community on Farcaster.
            </p>
          </div>
          
          <div className="glass-effect rounded-lg p-8 space-y-4 hover:bg-surface/80 transition-all duration-200">
            <div className="p-3 bg-success/20 rounded-lg w-fit">
              <Target className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-bold">Real-time Notifications</h3>
            <p className="text-fg/70">
              Instant alerts for every significant bot action with interactive 
              Frames for quick engagement.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="glass-effect rounded-2xl p-12 text-center space-y-6 glow-accent">
          <h2 className="text-3xl font-bold">Ready to Start Earning?</h2>
          <p className="text-fg/70 max-w-2xl mx-auto">
            Join thousands of traders using automated strategies to capitalize on 
            Polymarket opportunities.
          </p>
          <button
            onClick={() => setShowSetup(true)}
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            Launch Your Agent
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
