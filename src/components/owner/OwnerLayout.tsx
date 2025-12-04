import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OwnerSidebar from './OwnerSidebar';

interface OwnerLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  backTo?: string;
  title?: string;
}

export default function OwnerLayout({ 
  children, 
  showBackButton = false, 
  backTo = '/owner/dashboard',
  title 
}: OwnerLayoutProps) {
  const location = useLocation();
  const isDashboard = location.pathname === '/owner/dashboard';

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <OwnerSidebar />
      <main className="flex-1 ml-64 bg-gradient-to-br from-background via-background to-muted">
        {(showBackButton || (!isDashboard && !title)) && (
          <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="p-4 flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="morph-button">
                <Link to={backTo} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Link>
              </Button>
              {title && (
                <h1 className="text-2xl font-bold gradient-text-primary">{title}</h1>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
