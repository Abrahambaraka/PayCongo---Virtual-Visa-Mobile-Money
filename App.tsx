
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import AppAssistant from './components/AppAssistant';
import SignupView from './components/SignupView';
import KYCView from './components/KYCView';
import DashboardView from './components/DashboardView';
import RechargeView from './components/RechargeView';
import CardDetailsView from './components/CardDetailsView';
import HomeView from './components/HomeView';
import TransactionsListView from './components/TransactionsListView';
import TransferView from './components/TransferView';
import ProfileView from './components/ProfileView';
import { View, Transaction, VirtualCard, TransactionType, CardStatus } from './types';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', type: TransactionType.PAYMENT, amount: 15.00, currency: 'USD', merchant: 'Netflix Premium', date: 'Aujourd\'hui', status: 'completed' },
  { id: '2', type: TransactionType.DEPOSIT, amount: 50.00, currency: 'USD', merchant: 'M-Pesa Deposit', date: 'Hier', status: 'completed' },
  { id: '3', type: TransactionType.PAYMENT, amount: 8.40, currency: 'USD', merchant: 'AWS Services', date: '15 Nov 2023', status: 'completed' },
  { id: '4', type: TransactionType.PAYMENT, amount: 45.00, currency: 'USD', merchant: 'Uber Trip', date: '12 Nov 2023', status: 'completed' },
];

const INITIAL_CARDS: VirtualCard[] = [
  {
    id: 'card_1',
    number: '4532827100349982',
    expiry: '12/26',
    cvv: '123',
    balance: 1250.00,
    label: 'JEAN-PIERRE K.',
    status: CardStatus.ACTIVE,
    type: 'VISA'
  }
];

const App: React.FC = () => {
  const [view, setView] = useState<View>('HOME');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cards, setCards] = useState<VirtualCard[]>(INITIAL_CARDS);
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleRechargeSuccess = (amount: number) => {
    const updatedCards = [...cards];
    updatedCards[0].balance += amount;
    setCards(updatedCards);

    const newTx: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      type: TransactionType.DEPOSIT,
      amount: amount,
      currency: 'USD',
      merchant: 'Recharge M-Pesa',
      date: 'Maintenant',
      status: 'completed'
    };
    setTransactions([newTx, ...transactions]);
    setView('DASHBOARD');
  };

  const handleTransferSuccess = (amount: number, recipient: string) => {
    const updatedCards = [...cards];
    updatedCards[0].balance -= amount;
    setCards(updatedCards);

    const newTx: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      type: TransactionType.TRANSFER,
      amount: amount,
      currency: 'USD',
      merchant: `Transfert à ${recipient}`,
      date: 'Maintenant',
      status: 'completed'
    };
    setTransactions([newTx, ...transactions]);
    setView('DASHBOARD');
  };

  return (
    <Layout>
      {view === 'HOME' && <HomeView onStart={() => setView('AUTH')} onLogin={() => setView('DASHBOARD')} />}
      {view === 'AUTH' && <SignupView onBack={() => setView('HOME')} onSuccess={() => setView('KYC')} onLogin={() => setView('DASHBOARD')} />}
      {view === 'KYC' && <KYCView onBack={() => setView('AUTH')} onComplete={() => setView('DASHBOARD')} />}
      {view === 'DASHBOARD' && (
        <DashboardView 
          userBalance={cards[0].balance}
          transactions={transactions}
          cards={cards}
          onAction={(a) => a === 'send' ? setView('TRANSFER') : null}
          onNavigate={(v) => setView(v)}
        />
      )}
      {view === 'RECHARGE' && <RechargeView card={cards[0]} onBack={() => setView('DASHBOARD')} onSuccess={handleRechargeSuccess} />}
      {view === 'CARD_DETAILS' && <CardDetailsView card={cards[0]} transactions={transactions} onBack={() => setView('DASHBOARD')} onNavigate={(v) => setView(v)} />}
      {view === 'TRANSACTIONS_LIST' && <TransactionsListView transactions={transactions} onBack={() => setView('DASHBOARD')} onNavigate={(v) => setView(v)} />}
      {view === 'TRANSFER' && <TransferView onBack={() => setView('DASHBOARD')} onSuccess={handleTransferSuccess} balance={cards[0].balance} />}
      {view === 'PROFILE' && <ProfileView onBack={() => setView('DASHBOARD')} onLogout={() => setView('HOME')} onNavigate={(v) => setView(v)} />}
      <AppAssistant />
    </Layout>
  );
};

export default App;
