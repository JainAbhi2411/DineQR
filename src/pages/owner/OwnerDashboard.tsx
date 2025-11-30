import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { restaurantApi, orderApi } from '@/db/api';
import { Restaurant, OrderWithItems } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, UtensilsCrossed, QrCode, ShoppingBag, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function OwnerDashboard() {
  const { profile } = useAuth();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
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
        const ordersData = await orderApi.getOrdersByRestaurant(restaurantsData[0].id);
        setOrders(ordersData.slice(0, 5));
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Restaurant Owner Dashboard</h1>
          <p className="text-muted-foreground">Manage your restaurants, menus, and orders</p>
        </div>

        {restaurants.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Store className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Restaurant Yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Get started by creating your first restaurant profile
              </p>
              <Button asChild>
                <Link to="/owner/restaurants/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Restaurant
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Restaurants</CardTitle>
                  <Store className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{restaurants.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{orders.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {orders.filter(o => o.status === 'pending').length}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Manage your restaurant</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link to="/owner/restaurants">
                      <Store className="w-4 h-4 mr-2" />
                      Manage Restaurants
                    </Link>
                  </Button>
                  {restaurants.length > 0 && (
                    <>
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link to={`/owner/menu/${restaurants[0].id}`}>
                          <UtensilsCrossed className="w-4 h-4 mr-2" />
                          Manage Menu
                        </Link>
                      </Button>
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link to={`/owner/tables/${restaurants[0].id}`}>
                          <QrCode className="w-4 h-4 mr-2" />
                          Manage Tables & QR Codes
                        </Link>
                      </Button>
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link to={`/owner/orders/${restaurants[0].id}`}>
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          View All Orders
                        </Link>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Restaurants</CardTitle>
                  <CardDescription>Manage your restaurant profiles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{restaurant.name}</h4>
                        <p className="text-sm text-muted-foreground">{restaurant.location || 'No location set'}</p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/owner/restaurants/${restaurant.id}`}>Manage</Link>
                      </Button>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/owner/restaurants/new">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Restaurant
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {orders.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest orders from your restaurant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-sm text-muted-foreground">
                            Table: {order.table?.table_number || 'N/A'} • ${order.total_amount.toFixed(2)}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link to="/owner/orders">View All Orders</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
