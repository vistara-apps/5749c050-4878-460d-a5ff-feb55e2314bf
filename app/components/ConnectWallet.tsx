'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = async () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected) {
    return (
      <button className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-lg border border-border hover:border-accent transition-colors duration-200">
        <div className="w-2 h-2 bg-success rounded-full"></div>
        <span className="text-sm font-medium text-fg">{address}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center space-x-2 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-card"
    >
      <Wallet className="w-4 h-4" />
      <span className="font-medium">Connect Wallet</span>
    </button>
  );
}
