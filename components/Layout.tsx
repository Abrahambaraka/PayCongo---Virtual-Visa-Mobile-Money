
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl transition-colors duration-200">
      {children}
    </div>
  );
};

export default Layout;
