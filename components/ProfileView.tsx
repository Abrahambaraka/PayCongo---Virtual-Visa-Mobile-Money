
import React from 'react';
import Navigation from './Navigation';
import { View } from '../types';

interface ProfileViewProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigate: (view: View) => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ onBack, onLogout, onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom-4 duration-500 overflow-y-auto no-scrollbar pb-24">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-white/5">
        <button 
          onClick={onBack}
          className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Profil</h2>
        <div className="size-10"></div>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center pt-6 px-4 pb-6">
        <div className="relative mb-4 group cursor-pointer">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 ring-4 ring-primary/20" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgIEb74coB3blg6M11UeUqhW07iLWrtmpeATamPX41nbY8idI1x_A-eD4oIVWelqs1QYmsQ6RVktC3wlb1GjFyMR2cXuI4rmlUvEO4nUVKDnKIPrEXnDf55NxP7rAM0vAY1FRcTTghM6MNBQCOr9uNXZHQRrGkZLsud417uzU56SLLfWCUD5cQe0UYpgHBtxrb8BS9GQc2Spfsv9AUuREHK4DzDdX_70xBk3tI1CzQEguSVeaqIx8tRscuaGSHvEhTq_m43ShABGc")' }}
          >
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-black rounded-full p-1.5 border-4 border-background-light dark:border-background-dark flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-sm font-bold">check</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-2xl font-bold leading-tight">Jean Kabuya</h1>
          <p className="text-primary font-medium text-base tracking-wide">+243 81 234 5678</p>
          <div className="flex items-center gap-1 mt-1 px-3 py-1 rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
            <span className="text-primary text-sm font-semibold">Compte Vérifié</span>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="px-4 mb-8">
        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 items-center text-center shadow-sm border border-gray-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary mb-1">workspace_premium</span>
            <p className="text-slate-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Niveau Actuel</p>
            <p className="text-xl font-bold">Gold</p>
          </div>
          <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 items-center text-center shadow-sm border border-gray-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary mb-1">account_balance_wallet</span>
            <p className="text-slate-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Limite Jour</p>
            <p className="text-xl font-bold">$2,500</p>
          </div>
        </div>
      </div>

      {/* Settings Groups */}
      <div className="flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 px-2">Compte</h3>
          <div className="flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
            <button className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left w-full group">
              <div className="flex items-center justify-center rounded-xl bg-gray-100 dark:bg-primary/10 text-slate-900 dark:text-primary shrink-0 size-10 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold truncate">Informations personnelles</p>
                <p className="text-xs text-slate-500 dark:text-gray-400 truncate">Nom, Email, Adresse</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
            <div className="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
            <button className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left w-full group">
              <div className="flex items-center justify-center rounded-xl bg-gray-100 dark:bg-primary/10 text-slate-900 dark:text-primary shrink-0 size-10 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold truncate">Méthodes de paiement</p>
                <p className="text-xs text-slate-500 dark:text-gray-400 truncate">M-Pesa, Orange Money</p>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-500 hover:bg-red-500/20 active:scale-[0.98] transition-all font-bold flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">logout</span>
          Déconnexion
        </button>
      </div>

      <Navigation currentView="PROFILE" onNavigate={onNavigate} />
    </div>
  );
};

export default ProfileView;
