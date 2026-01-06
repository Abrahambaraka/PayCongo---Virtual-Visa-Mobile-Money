
import React from 'react';
import Navigation from './Navigation';
import VirtualCardUI from './VirtualCardUI';
import { Transaction, VirtualCard, TransactionType, View } from '../types';

interface DashboardViewProps {
  userBalance: number;
  transactions: Transaction[];
  cards: VirtualCard[];
  onAction: (action: string) => void;
  onNavigate: (view: View) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ 
  userBalance, 
  transactions, 
  cards, 
  onAction,
  onNavigate 
}) => {
  return (
    <div className="flex-1 flex flex-col pb-24 overflow-y-auto no-scrollbar animate-in fade-in duration-500">
      <div className="flex items-center justify-between px-6 py-5 z-20 sticky top-0 bg-background-dark/80 backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('PROFILE')} className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-emerald-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-background-dark flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-primary text-xl">person</span>
            </div>
          </button>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Bonjour,</p>
            <p className="text-sm font-bold">Jean-Pierre K.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-surface-dark flex items-center justify-center text-gray-400 relative">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-surface-dark"></span>
          </button>
        </div>
      </div>

      <div className="px-6 space-y-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-3xl blur opacity-25"></div>
          <div className="relative bg-surface-dark rounded-3xl p-7 border border-white/5 overflow-hidden">
            <div className="flex justify-between items-start relative z-10 mb-2">
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Solde Principal</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    <span className="text-primary mr-1">$</span>
                    {userBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3 relative z-10">
              <button onClick={() => onNavigate('RECHARGE')} className="flex-1 bg-primary text-background-dark h-12 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95">
                <span className="material-symbols-outlined text-lg">add</span> Déposer
              </button>
              <button onClick={() => onAction('send')} className="flex-1 bg-white/5 text-white h-12 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border border-white/10 transition-all active:scale-95">
                <span className="material-symbols-outlined text-lg">send</span> Envoyer
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Mes Cartes</h3>
            <button onClick={() => onNavigate('CARD_DETAILS')} className="text-primary text-xs font-black uppercase tracking-widest">Gérer tout</button>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x pb-4 -mx-6 px-6">
            {cards.map((card, idx) => (
              <div key={card.id} className="min-w-[85%] snap-center cursor-pointer" onClick={() => onNavigate('CARD_DETAILS')}>
                <VirtualCardUI card={card} focused={idx === 0} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 pb-8">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">Activité Récente</h3>
            <button onClick={() => onNavigate('TRANSACTIONS_LIST')} className="text-gray-500 text-xs font-bold uppercase tracking-widest">Voir tout</button>
          </div>
          <div className="space-y-4">
            {transactions.slice(0, 4).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === TransactionType.DEPOSIT ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white'}`}>
                    <span className="material-symbols-outlined text-xl">
                      {tx.type === TransactionType.DEPOSIT ? 'south_west' : tx.type === TransactionType.TRANSFER ? 'send' : 'shopping_bag'}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900 dark:text-gray-100">{tx.merchant || 'Transfert'}</p>
                    <p className="text-[10px] text-gray-500 font-semibold uppercase">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-black text-sm ${tx.type === TransactionType.DEPOSIT ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                    {tx.type === TransactionType.DEPOSIT ? '+' : '-'}${tx.amount.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation currentView="DASHBOARD" onNavigate={onNavigate} />
    </div>
  );
};

export default DashboardView;
