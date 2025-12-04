import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { restaurantApi, orderApi, menuItemApi, tableApi } from '@/db/api';
import { Restaurant, OrderWithItems, MenuItem, Table } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, UtensilsCrossed, QrCode, ShoppingBag, Plus, TrendingUp, DollarSign, Users, Clock, BarChart3, Settings, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function OwnerDashboard() {
  const { profile } = useAuth();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, [profile]);

  const loadData = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      const restaurantsData = await restaurantApi.getRestaurantsByOwner(profile.id);
      setRestaurants(restaurantsData);

      if (restaurantsData.length > 0) {
        const [ordersData, menuData, tablesData] = await Promise.all([
          orderApi.getOrdersByRestaurant(restaurantsData[0].id),
          menuItemApi.getItemsByRestaurant(restaurantsData[0].id),
          tableApi.getTablesByRestaurant(restaurantsData[0].id),
        ]);
        setOrders(ordersData);
        setMenuItems(menuData);
        setTables(tablesData);
      }
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

  const calculateRevenue = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return orders
      .filter(o => new Date(o.created_at) >= today && o.status === 'completed')
      .reduce((sum, o) => sum + o.total_amount, 0);
  };

  const getActiveOrders = () => {
    return orders.filter(o => ['pending', 'preparing', 'ready'].includes(o.status)).length;
  };

  const getTableOccupancy = () => {
    return tables.length;
  };

  const getPopularItems = () => {
    const itemCounts = new Map<string, { item: MenuItem; count: number }>();
    
    orders.forEach(order => {
      order.order_items?.forEach(orderItem => {
        const menuItem = menuItems.find(m => m.id === orderItem.menu_item_id);
        if (menuItem) {
          const existing = itemCounts.get(menuItem.id);
          if (existing) {
            existing.count += orderItem.quantity;
          } else {
            itemCounts.set(menuItem.id, { item: menuItem, count: orderItem.quantity });
          }
        }
      });
    });

    return Array.from(itemCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent glow-orange"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-primary opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-2 gradient-text-primary">Owner Dashboard</h1>
          <p className="text-muted-foreground text-lg">Manage your restaurants, menus, and orders with real-time insights</p>
        </div>

        {restaurants.length === 0 ? (
          <Card className="glass border-2 border-border hover:border-primary/50 transition-all animate-scale-in">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse-glow">
                <Store className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">No Restaurant Yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Get started by creating your first restaurant profile and unlock the full potential of DineQR
              </p>
              <Button asChild size="lg" className="morph-button hover-glow-orange rounded-full px-8">
                <Link to="/owner/restaurants/new">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Restaurant
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group overflow-hidden">
                <div className="scan-line" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Today's Revenue</CardTitle>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-primary-glow transition-all">
                    <DollarSign className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold gradient-text-primary">${calculateRevenue().toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    From completed orders
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-200 group overflow-hidden">
                <div className="scan-line" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Orders</CardTitle>
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-secondary group-hover:to-secondary-glow transition-all">
                    <ShoppingBag className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold gradient-text-secondary">{getActiveOrders()}</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-secondary" />
                    In progress
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-400 group overflow-hidden">
                <div className="scan-line" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Tables</CardTitle>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:from-primary group-hover:to-primary-glow transition-all">
                    <Users className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold gradient-text-electric">{getTableOccupancy()}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Available tables
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-600 group overflow-hidden">
                <div className="scan-line" />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:from-secondary group-hover:to-secondary-glow transition-all">
                    <BarChart3 className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold gradient-text-secondary">{orders.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">All time</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-8 mb-8">
              <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 animate-slide-in-left animation-delay-800 xl:col-span-2 overflow-hidden group">
                <div className="scan-line" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Store className="w-6 h-6 text-primary" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Manage your restaurant operations</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-3 relative z-10">
                  <Button className="w-full justify-start morph-button hover-glow-orange" variant="outline" asChild>
                    <Link to="/owner/restaurants">
                      <Store className="w-5 h-5 mr-2" />
                      Manage Restaurants
                    </Link>
                  </Button>
                  {restaurants.length > 0 && (
                    <>
                      <Button className="w-full justify-start morph-button hover-glow-purple" variant="outline" asChild>
                        <Link to={`/owner/menu/${restaurants[0].id}`}>
                          <UtensilsCrossed className="w-5 h-5 mr-2" />
                          Manage Menu
                        </Link>
                      </Button>
                      <Button className="w-full justify-start morph-button hover-glow-orange" variant="outline" asChild>
                        <Link to={`/owner/tables/${restaurants[0].id}`}>
                          <QrCode className="w-5 h-5 mr-2" />
                          Tables & QR Codes
                        </Link>
                      </Button>
                      <Button className="w-full justify-start morph-button hover-glow-purple" variant="outline" asChild>
                        <Link to={`/owner/orders/${restaurants[0].id}`}>
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          View All Orders
                        </Link>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 animate-slide-in-right animation-delay-800 overflow-hidden group">
                <div className="scan-line" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    Popular Items
                  </CardTitle>
                  <CardDescription>Top selling menu items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  {getPopularItems().length > 0 ? (
                    getPopularItems().map((item, index) => (
                      <div key={item.item.id} className="flex items-center justify-between p-3 glass rounded-lg border border-border hover:border-secondary/50 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center text-sm font-bold text-secondary">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{item.item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.count} orders</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-primary">${item.item.price.toFixed(2)}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No orders yet</p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
              <Card className="glass border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up animation-delay-1000 overflow-hidden group">
                <div className="scan-line" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Store className="w-6 h-6 text-primary" />
                    Your Restaurants
                  </CardTitle>
                  <CardDescription>Manage your restaurant profiles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="flex items-center justify-between p-4 glass rounded-lg border border-border hover:border-primary/50 transition-all group/item">
                      <div>
                        <h4 className="font-semibold text-lg">{restaurant.name}</h4>
                        <p className="text-sm text-muted-foreground">{restaurant.location || 'No location set'}</p>
                      </div>
                      <Button size="sm" variant="outline" asChild className="morph-button">
                        <Link to={`/owner/restaurants/${restaurant.id}`}>Manage</Link>
                      </Button>
                    </div>
                  ))}
                  <Button className="w-full morph-button hover-glow-orange" variant="outline" asChild>
                    <Link to="/owner/restaurants/new">
                      <Plus className="w-5 h-5 mr-2" />
                      Add Restaurant
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass border-2 border-border hover:border-secondary/50 transition-all duration-300 animate-fade-in-up animation-delay-1200 overflow-hidden group">
                <div className="scan-line" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-secondary" />
                    Recent Orders
                  </CardTitle>
                  <CardDescription>Latest orders from your restaurant</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  {orders.length > 0 ? (
                    <>
                      <div className="space-y-3">
                        {orders.slice(0, 5).map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 glass rounded-lg border border-border hover:border-secondary/50 transition-all">
                            <div>
                              <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
                              <p className="text-sm text-muted-foreground">
                                Table: {order.table?.table_number || 'N/A'} • ${order.total_amount.toFixed(2)}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                                order.status === 'completed' ? 'bg-primary/20 text-primary border border-primary/30' :
                                order.status === 'preparing' ? 'bg-secondary/20 text-secondary border border-secondary/30' :
                                'bg-muted text-muted-foreground border border-border'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {restaurants.length > 0 && (
                        <Button className="w-full mt-4 morph-button hover-glow-purple" variant="outline" asChild>
                          <Link to={`/owner/orders/${restaurants[0].id}`}>View All Orders</Link>
                        </Button>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">No orders yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
