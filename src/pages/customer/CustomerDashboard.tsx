import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { orderApi, visitedRestaurantApi } from '@/db/api';
import { OrderWithItems, VisitedRestaurantWithDetails } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, ShoppingBag, History, User, Store, Clock, X, Sparkles, TrendingUp, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/db/supabase';

export default function CustomerDashboard() {
  const { profile } = useAuth();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [visitedRestaurants, setVisitedRestaurants] = useState<VisitedRestaurantWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();

    if (!profile) return;

    console.log('[CustomerDashboard] Setting up real-time subscription for customer:', profile.id);

    const channel = supabase
      .channel(`customer-orders-${profile.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders',
          filter: `customer_id=eq.${profile.id}`,
        },
        (payload) => {
          console.log('[CustomerDashboard] Received order change:', payload);
          setTimeout(() => loadData(), 300);
        }
      )
      .subscribe((status) => {
        console.log('[CustomerDashboard] Subscription status:', status);
      });

    return () => {
      console.log('[CustomerDashboard] Cleaning up subscription');
      supabase.removeChannel(channel);
    };
  }, [profile]);

  const loadData = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      const [ordersData, visitedData] = await Promise.all([
        orderApi.getOrdersByCustomer(profile.id),
        visitedRestaurantApi.getVisitedRestaurants(profile.id),
      ]);
      setOrders(ordersData);
      setVisitedRestaurants(visitedData);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRestaurant = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await visitedRestaurantApi.deleteVisitedRestaurant(id);
      setVisitedRestaurants(prev => prev.filter(r => r.id !== id));
      toast({
        title: 'Success',
        description: 'Restaurant removed from your list',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to remove restaurant',
        variant: 'destructive',
      });
    }
  };

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/customer/menu/${restaurantId}`);
  };

  const getLoyaltyPoints = () => {
    return orders.filter(o => o.status === 'completed').length * 10;
  };

  const getTotalSpent = () => {
    return orders
      .filter(o => o.status === 'completed')
      .reduce((sum, o) => sum + o.total_amount, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-secondary border-t-transparent glow-magenta"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-secondary opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--secondary)/0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2 gradient-text-secondary">
            Welcome back, {profile?.full_name || 'Guest'}!
          </h1>
          <p className="text-muted-foreground text-lg">Browse menus, place orders, and track your dining experience</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group overflow-hidden">
            <div className="scan-line" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-secondary group-hover:to-secondary-glow transition-all">
                <ShoppingBag className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold gradient-text-secondary">{orders.length}</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-200 group overflow-hidden">
            <div className="scan-line" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-primary-glow transition-all">
                <Clock className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold gradient-text-primary">
                {orders.filter(o => ['pending', 'preparing', 'served'].includes(o.status)).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">In progress</p>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-400 group overflow-hidden">
            <div className="scan-line" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-muted-foreground">Loyalty Points</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-secondary group-hover:to-secondary-glow transition-all">
                <Award className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold gradient-text-electric">{getLoyaltyPoints()}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-secondary" />
                Earn more points
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-600 group overflow-hidden">
            <div className="scan-line" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-primary-glow transition-all">
                <TrendingUp className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold gradient-text-primary">${getTotalSpent().toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">Completed orders</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8 mb-8">
          <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 animate-slide-in-left animation-delay-800 overflow-hidden group">
            <div className="scan-line" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Start your dining experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 relative z-10">
              <Button className="w-full justify-start morph-button hover-glow-cyan text-lg py-6" asChild>
                <Link to="/customer/scan">
                  <QrCode className="w-5 h-5 mr-2" />
                  Scan QR Code
                </Link>
              </Button>
              <Button className="w-full justify-start morph-button hover-glow-magenta" variant="outline" asChild>
                <Link to="/customer/orders">
                  <History className="w-5 h-5 mr-2" />
                  View Order History
                </Link>
              </Button>
              <Button className="w-full justify-start morph-button hover-glow-cyan" variant="outline" asChild>
                <Link to="/customer/profile">
                  <User className="w-5 h-5 mr-2" />
                  Manage Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 animate-slide-in-right animation-delay-800 overflow-hidden group">
            <div className="scan-line" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-secondary" />
                How It Works
              </CardTitle>
              <CardDescription>Simple steps to order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="flex gap-4 group/item hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 glow-cyan">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Scan QR Code</h4>
                  <p className="text-sm text-muted-foreground">Scan the QR code on your table</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-glow rounded-full flex items-center justify-center text-secondary-foreground font-bold flex-shrink-0 glow-magenta">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Browse Menu</h4>
                  <p className="text-sm text-muted-foreground">View items and add to cart</p>
                </div>
              </div>
              <div className="flex gap-4 group/item hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 glow-cyan">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Place Order</h4>
                  <p className="text-sm text-muted-foreground">Complete payment and enjoy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {visitedRestaurants.length > 0 && (
          <Card className="mb-8 glass border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up animation-delay-1000 overflow-hidden group">
            <div className="scan-line" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Store className="w-6 h-6 text-primary" />
                Your Restaurants
              </CardTitle>
              <CardDescription>Quick access to restaurants you've visited</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {visitedRestaurants.map((visited) => (
                  <div
                    key={visited.id}
                    onClick={() => handleRestaurantClick(visited.restaurant_id)}
                    className="relative group/card glass border-2 border-border rounded-lg p-4 hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1"
                  >
                    <button
                      onClick={(e) => handleRemoveRestaurant(visited.id, e)}
                      className="absolute top-2 right-2 p-1.5 rounded-full glass hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover/card:opacity-100 transition-all z-10"
                      aria-label="Remove restaurant"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-start gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/card:from-primary group-hover/card:to-primary-glow transition-all">
                        <Store className="w-7 h-7 text-primary group-hover/card:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{visited.restaurant?.name || 'Restaurant'}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {visited.restaurant?.location || 'Location not available'}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>Visited {visited.visit_count} {visited.visit_count === 1 ? 'time' : 'times'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {orders.length > 0 ? (
          <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 animate-fade-in-up animation-delay-1200 overflow-hidden group">
            <div className="scan-line" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-secondary" />
                Recent Orders
              </CardTitle>
              <CardDescription>Your latest dining experiences</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                {orders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 glass rounded-lg border border-border hover:border-secondary/50 transition-all">
                    <div>
                      <p className="font-medium text-lg">{order.restaurant?.name || 'Restaurant'}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString()} • ${order.total_amount.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === 'completed' ? 'bg-primary/20 text-primary border border-primary/30' :
                        order.status === 'preparing' ? 'bg-secondary/20 text-secondary border border-secondary/30' :
                        order.status === 'served' ? 'bg-primary/20 text-primary border border-primary/30' :
                        'bg-muted text-muted-foreground border border-border'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 morph-button hover-glow-magenta" variant="outline" asChild>
                <Link to="/customer/orders">View All Orders</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass border-2 border-border hover:border-primary/50 transition-all animate-scale-in">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                <ShoppingBag className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">No Orders Yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Start by scanning a QR code at a restaurant table to begin your dining experience
              </p>
              <Button asChild size="lg" className="morph-button hover-glow-cyan rounded-full px-8">
                <Link to="/customer/scan">
                  <QrCode className="w-5 h-5 mr-2" />
                  Scan QR Code
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
