'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { AgentDashboard } from './components/AgentDashboard';
import { StrategySetup } from './components/StrategySetup';
import { TradingActivity } from './components/TradingActivity';
import { PerformanceMetrics } from './components/PerformanceMetrics';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [hasAgent, setHasAgent] = useState(false);

  useEffect(() => {
    // CRITICAL: Signal app is ready to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg/60">Loading Polymarket Agent...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Polymarket Agent
          </h1>
          <p className="text-xl text-fg/80 max-w-2xl mx-auto">
            Automated Prediction Market Strategy & Social Trading on Base
          </p>
        </section>

        {/* Main Content */}
        {!hasAgent ? (
          <StrategySetup onSetupComplete={() => setHasAgent(true)} />
        ) : (
          <>
            <PerformanceMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AgentDashboard />
              <TradingActivity />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
