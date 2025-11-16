'use client';

import { useState } from 'react';
import { Menu, X, Bell, Settings2 } from 'lucide-react';
import { ConnectWallet } from './ConnectWallet';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <span className="text-xl font-bold text-fg">Polymarket Agent</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button className="text-fg/80 hover:text-fg transition-colors duration-200">
              Dashboard
            </button>
            <button className="text-fg/80 hover:text-fg transition-colors duration-200">
              Strategies
            </button>
            <button className="text-fg/80 hover:text-fg transition-colors duration-200">
              Markets
            </button>
            <button className="relative p-2 text-fg/80 hover:text-fg transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            </button>
            <button className="p-2 text-fg/80 hover:text-fg transition-colors duration-200">
              <Settings2 className="w-5 h-5" />
            </button>
            <ConnectWallet />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-fg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button className="block w-full text-left px-4 py-2 text-fg/80 hover:text-fg hover:bg-surface/50 rounded-md transition-colors duration-200">
              Dashboard
            </button>
            <button className="block w-full text-left px-4 py-2 text-fg/80 hover:text-fg hover:bg-surface/50 rounded-md transition-colors duration-200">
              Strategies
            </button>
            <button className="block w-full text-left px-4 py-2 text-fg/80 hover:text-fg hover:bg-surface/50 rounded-md transition-colors duration-200">
              Markets
            </button>
            <div className="px-4">
              <ConnectWallet />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
