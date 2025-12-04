import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ShoppingBag, 
  Table2, 
  ChevronRight,
  Store
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { restaurantApi } from '@/db/api';

export default function OwnerSidebar() {
  const location = useLocation();
  const { profile } = useAuth();
  const [restaurantId, setRestaurantId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRestaurant = async () => {
      if (!profile) return;
      
      try {
        const restaurants = await restaurantApi.getRestaurantsByOwner(profile.id);
        if (restaurants.length > 0) {
          setRestaurantId(restaurants[0].id);
        }
      } catch (error) {
        console.error('Failed to load restaurant:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRestaurant();
  }, [profile]);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/owner/dashboard',
      requiresRestaurant: false,
    },
    {
      title: 'Restaurants',
      icon: Store,
      href: '/owner/restaurants',
      requiresRestaurant: false,
    },
    {
      title: 'Menu Management',
      icon: UtensilsCrossed,
      href: restaurantId ? `/owner/menu/${restaurantId}` : '#',
      requiresRestaurant: true,
    },
    {
      title: 'Orders',
      icon: ShoppingBag,
      href: restaurantId ? `/owner/orders/${restaurantId}` : '#',
      requiresRestaurant: true,
    },
    {
      title: 'Tables',
      icon: Table2,
      href: restaurantId ? `/owner/tables/${restaurantId}` : '#',
      requiresRestaurant: true,
    },
  ];

  if (loading) {
    return (
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass border-r border-border overflow-y-auto z-40">
        <div className="p-4 flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
        </div>
      </aside>
    );
  }

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
            const isActive = location.pathname === item.href || 
                           (item.requiresRestaurant && restaurantId && location.pathname.includes(item.href.split('/')[2]));
            const isDisabled = item.requiresRestaurant && !restaurantId;

            if (isDisabled) {
              return (
                <div
                  key={item.title}
                  className="flex items-center justify-between px-4 py-3 rounded-lg opacity-50 cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                </div>
              );
            }

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

        {!restaurantId && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground mb-2">No restaurant found</p>
            <Link 
              to="/owner/restaurants/new"
              className="text-xs text-primary hover:underline font-medium"
            >
              Create your first restaurant →
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
