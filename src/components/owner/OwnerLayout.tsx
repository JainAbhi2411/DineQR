import { ReactNode } from 'react';
import OwnerSidebar from './OwnerSidebar';

interface OwnerLayoutProps {
  children: ReactNode;
}

export default function OwnerLayout({ children }: OwnerLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <OwnerSidebar />
      <main className="flex-1 ml-64 bg-gradient-to-br from-background via-background to-muted">
        {children}
      </main>
    </div>
  );
}
