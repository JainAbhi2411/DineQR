import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurantApi, orderApi } from '@/db/api';
import { Restaurant, OrderWithItems } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Clock, CheckCircle, ChefHat, UtensilsCrossed } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/db/supabase';

export default function OrderManagement() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    loadData();
    
    const channel = supabase
      .channel('orders-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders',
          filter: `restaurant_id=eq.${restaurantId}`,
        },
        () => {
          loadData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [restaurantId]);

  const loadData = async () => {
    if (!restaurantId) return;
    
    try {
      setLoading(true);
      const [restaurantData, ordersData] = await Promise.all([
        restaurantApi.getRestaurantById(restaurantId),
        orderApi.getOrdersByRestaurant(restaurantId),
      ]);
      
      setRestaurant(restaurantData);
      setOrders(ordersData);
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

  const updateOrderStatus = async (orderId: string, status: 'pending' | 'preparing' | 'served' | 'completed') => {
    try {
      await orderApi.updateOrderStatus(orderId, status);
      toast({
        title: 'Success',
        description: `Order status updated to ${status}`,
      });
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update order status',
        variant: 'destructive',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparing':
        return 'bg-blue-100 text-blue-800';
      case 'served':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'preparing':
        return <ChefHat className="w-4 h-4" />;
      case 'served':
        return <UtensilsCrossed className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filterOrders = (status: string) => {
    return orders.filter((order) => order.status === status);
  };

  const renderOrderCard = (order: OrderWithItems) => (
    <Card key={order.id} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Order #{order.id.slice(0, 8)}</CardTitle>
            <CardDescription>
              {new Date(order.created_at).toLocaleString()}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(order.status)}>
            <span className="flex items-center gap-1">
              {getStatusIcon(order.status)}
              {order.status}
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Table</p>
            <p className="font-semibold">{order.table?.table_number || 'N/A'}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Customer</p>
            <p className="font-semibold">{order.customer?.full_name || 'Guest'}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total Amount</p>
            <p className="font-semibold text-primary">${order.total_amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Payment</p>
            <p className="font-semibold">{order.payment_status}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm font-semibold mb-2">Order Items:</p>
          <div className="space-y-2">
            {order.order_items?.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.quantity}x {item.menu_item?.name || 'Item'}
                </span>
                <span className="text-muted-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {order.special_instructions && (
          <div className="border-t pt-4">
            <p className="text-sm font-semibold mb-1">Special Instructions:</p>
            <p className="text-sm text-muted-foreground">{order.special_instructions}</p>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          {order.status === 'pending' && (
            <Button
              size="sm"
              className="flex-1"
              onClick={() => updateOrderStatus(order.id, 'preparing')}
            >
              Start Preparing
            </Button>
          )}
          {order.status === 'preparing' && (
            <Button
              size="sm"
              className="flex-1"
              onClick={() => updateOrderStatus(order.id, 'served')}
            >
              Mark as Served
            </Button>
          )}
          {order.status === 'served' && (
            <Button
              size="sm"
              className="flex-1"
              onClick={() => updateOrderStatus(order.id, 'completed')}
            >
              Complete Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

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
        <Button variant="ghost" onClick={() => navigate('/owner/dashboard')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{restaurant?.name} - Order Management</h1>
          <p className="text-muted-foreground">Manage and track customer orders in real-time</p>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{filterOrders('pending').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Preparing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{filterOrders('preparing').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Served</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{filterOrders('served').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{filterOrders('completed').length}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">Pending ({filterOrders('pending').length})</TabsTrigger>
            <TabsTrigger value="preparing">Preparing ({filterOrders('preparing').length})</TabsTrigger>
            <TabsTrigger value="served">Served ({filterOrders('served').length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({filterOrders('completed').length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-6">
            {filterOrders('pending').length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Clock className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No pending orders</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                {filterOrders('pending').map(renderOrderCard)}
              </div>
            )}
          </TabsContent>

          <TabsContent value="preparing" className="mt-6">
            {filterOrders('preparing').length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <ChefHat className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No orders being prepared</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                {filterOrders('preparing').map(renderOrderCard)}
              </div>
            )}
          </TabsContent>

          <TabsContent value="served" className="mt-6">
            {filterOrders('served').length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <UtensilsCrossed className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No served orders</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                {filterOrders('served').map(renderOrderCard)}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            {filterOrders('completed').length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <CheckCircle className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No completed orders</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                {filterOrders('completed').map(renderOrderCard)}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
