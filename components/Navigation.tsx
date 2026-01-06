
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onAction?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, onAction }) => {
  const navItems: { view: View; icon: string; label: string }[] = [
    { view: 'DASHBOARD', icon: 'home', label: 'Accueil' },
    { view: 'CARD_DETAILS', icon: 'credit_card', label: 'Cartes' },
    { view: 'TRANSACTIONS_LIST', icon: 'history', label: 'Activités' },
    { view: 'PROFILE', icon: 'person', label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5 flex items-center justify-around px-4 z-50 max-w-md mx-auto">
      {/* Home & Cards */}
      <div className="flex flex-1 justify-around">
        {navItems.slice(0, 2).map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${
              currentView === item.view ? 'text-primary scale-110' : 'text-slate-400 dark:text-gray-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === item.view ? 'fill-1' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Central Action Button (Quick Deposit) */}
      <div className="relative -top-6 px-4">
        <button
          onClick={() => onNavigate('RECHARGE')}
          className="w-14 h-14 bg-primary text-background-dark rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transform transition-all active:scale-90 hover:scale-105"
        >
          <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
      </div>

      {/* Activity & Profile */}
      <div className="flex flex-1 justify-around">
        {navItems.slice(2).map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${
              currentView === item.view ? 'text-primary scale-110' : 'text-slate-400 dark:text-gray-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === item.view ? 'fill-1' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
