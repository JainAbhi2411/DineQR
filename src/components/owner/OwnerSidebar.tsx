import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ShoppingBag, 
  Users, 
  Table2, 
  Package, 
  BarChart3, 
  Settings,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/owner/dashboard',
  },
  {
    title: 'Menu Management',
    icon: UtensilsCrossed,
    href: '/owner/menu',
  },
  {
    title: 'Orders',
    icon: ShoppingBag,
    href: '/owner/orders',
  },
  {
    title: 'Tables',
    icon: Table2,
    href: '/owner/tables',
  },
  {
    title: 'Staff',
    icon: Users,
    href: '/owner/staff',
  },
  {
    title: 'Inventory',
    icon: Package,
    href: '/owner/inventory',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/owner/analytics',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/owner/settings',
  },
];

export default function OwnerSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass border-r border-border overflow-y-auto z-40">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold gradient-text-primary mb-1">Restaurant Owner</h2>
          <p className="text-xs text-muted-foreground">Manage your restaurant</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg glow-orange'
                    : 'hover:bg-muted text-foreground hover-glow-orange'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn(
                    'w-5 h-5 transition-transform duration-200',
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  )} />
                  <span className="font-medium">{item.title}</span>
                </div>
                {isActive && (
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
