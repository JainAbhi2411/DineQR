import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { orderApi, visitedRestaurantApi } from '@/db/api';
import { OrderWithItems, VisitedRestaurantWithDetails } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, ShoppingBag, History, User, Store, Clock, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CustomerDashboard() {
  const { profile } = useAuth();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [visitedRestaurants, setVisitedRestaurants] = useState<VisitedRestaurantWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, [profile]);

  const loadData = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      const [ordersData, visitedData] = await Promise.all([
        orderApi.getOrdersByCustomer(profile.id),
        visitedRestaurantApi.getVisitedRestaurants(profile.id),
      ]);
      setOrders(ordersData.slice(0, 5));
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
          <h1 className="text-3xl font-bold mb-2">Customer Dashboard</h1>
          <p className="text-muted-foreground">Browse menus, place orders, and track your dining experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter(o => ['pending', 'preparing', 'served'].includes(o.status)).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {orders.filter(o => o.status === 'completed').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Start your dining experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" asChild>
                <Link to="/customer/scan">
                  <QrCode className="w-4 h-4 mr-2" />
                  Scan QR Code
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/customer/orders">
                  <History className="w-4 h-4 mr-2" />
                  View Order History
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/customer/profile">
                  <User className="w-4 h-4 mr-2" />
                  Manage Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>Simple steps to order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Scan QR Code</h4>
                  <p className="text-sm text-muted-foreground">Scan the QR code on your table</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Browse Menu</h4>
                  <p className="text-sm text-muted-foreground">View items and add to cart</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Place Order</h4>
                  <p className="text-sm text-muted-foreground">Complete payment and enjoy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {visitedRestaurants.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Restaurants</CardTitle>
              <CardDescription>Quick access to restaurants you've visited</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {visitedRestaurants.map((visited) => (
                  <div
                    key={visited.id}
                    onClick={() => handleRestaurantClick(visited.restaurant_id)}
                    className="relative group border rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
                  >
                    <button
                      onClick={(e) => handleRemoveRestaurant(visited.id, e)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-background hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove restaurant"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Store className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{visited.restaurant?.name || 'Restaurant'}</h3>
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
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your latest dining experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{order.restaurant?.name || 'Restaurant'}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString()} • ${order.total_amount.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'served' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" asChild>
                <Link to="/customer/orders">View All Orders</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Start by scanning a QR code at a restaurant table
              </p>
              <Button asChild>
                <Link to="/customer/scan">
                  <QrCode className="w-4 h-4 mr-2" />
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
