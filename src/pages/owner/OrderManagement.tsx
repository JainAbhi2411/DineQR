import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurantApi, orderApi } from '@/db/api';
import { Restaurant, OrderWithItems, OrderStatus } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Clock, CheckCircle, ChefHat, UtensilsCrossed, Banknote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/db/supabase';
import OrderCard from '@/components/order/OrderCard';
import PrintBill from '@/components/order/PrintBill';
import OwnerLayout from '@/components/owner/OwnerLayout';

export default function OrderManagement() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [printOrder, setPrintOrder] = useState<OrderWithItems | null>(null);
  const ordersRef = useRef<OrderWithItems[]>([]);

  // Keep ref in sync with state
  useEffect(() => {
    ordersRef.current = orders;
  }, [orders]);

  const loadData = useCallback(async () => {
    if (!restaurantId) return;
    
    try {
      const previousOrders = ordersRef.current;
      const [restaurantData, ordersData] = await Promise.all([
        restaurantApi.getRestaurantById(restaurantId),
        orderApi.getOrdersByRestaurant(restaurantId),
      ]);
      
      setRestaurant(restaurantData);
      setOrders(ordersData);

      // Check for new orders and show notification
      if (previousOrders.length > 0 && ordersData.length > previousOrders.length) {
        const newOrders = ordersData.filter(
          newOrder => !previousOrders.some(oldOrder => oldOrder.id === newOrder.id)
        );
        
        newOrders.forEach(order => {
          toast({
            title: '🔔 New Order Received!',
            description: `Table ${order.table?.table_number || 'N/A'} - Order #${order.id.slice(0, 8).toUpperCase()}`,
          });
        });
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
  }, [restaurantId, toast]);

  useEffect(() => {
    setLoading(true);
    loadData();
    
    console.log('[OrderManagement] Setting up real-time subscriptions for restaurant:', restaurantId);
    
    const channel = supabase
      .channel(`restaurant-orders-${restaurantId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders',
          filter: `restaurant_id=eq.${restaurantId}`,
        },
        (payload) => {
          console.log('[OrderManagement] Received order change:', payload);
          // Small delay to ensure all related data is written
          setTimeout(() => loadData(), 300);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'order_status_history',
        },
        (payload) => {
          console.log('[OrderManagement] Received status history change:', payload);
          // Check if this status history belongs to one of the restaurant's orders
          const orderId = payload.new.order_id;
          if (ordersRef.current.some(order => order.id === orderId)) {
            console.log('[OrderManagement] Status history belongs to restaurant order, reloading...');
            setTimeout(() => loadData(), 300);
          }
        }
      )
      .subscribe((status) => {
        console.log('[OrderManagement] Subscription status:', status);
      });

    return () => {
      console.log('[OrderManagement] Cleaning up subscription');
      supabase.removeChannel(channel);
    };
  }, [restaurantId, loadData]);

  const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
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

  const collectPayment = async (orderId: string) => {
    try {
      await orderApi.updatePaymentStatus(orderId, 'completed');
      await orderApi.updateOrderStatus(orderId, 'completed');
      toast({
        title: 'Payment Collected',
        description: 'Payment has been marked as received and order completed',
      });
      loadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update payment status',
        variant: 'destructive',
      });
    }
  };

  const filterOrders = (status: string) => {
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
  };

  const getOrderActions = (order: OrderWithItems) => {
    const actions = [];

    if (order.status === 'pending') {
      actions.push(
        <Button
          key="preparing"
          size="sm"
          onClick={() => updateOrderStatus(order.id, 'preparing')}
          className="flex items-center gap-2"
        >
          <ChefHat className="w-4 h-4" />
          Start Preparing
        </Button>
      );
    }

    if (order.status === 'preparing') {
      actions.push(
        <Button
          key="served"
          size="sm"
          onClick={() => updateOrderStatus(order.id, 'served')}
          className="flex items-center gap-2"
        >
          <UtensilsCrossed className="w-4 h-4" />
          Mark as Served
        </Button>
      );
    }

    if (order.status === 'served' && order.payment_method === 'coc' && order.payment_status === 'pending') {
      actions.push(
        <Button
          key="collect"
          size="sm"
          onClick={() => collectPayment(order.id)}
          className="flex items-center gap-2"
        >
          <Banknote className="w-4 h-4" />
          Payment Received
        </Button>
      );
    }

    if (order.status === 'served' && order.payment_status === 'completed') {
      actions.push(
        <Button
          key="complete"
          size="sm"
          variant="outline"
          onClick={() => updateOrderStatus(order.id, 'completed')}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Complete Order
        </Button>
      );
    }

    return <div className="flex gap-2 flex-wrap">{actions}</div>;
  };

  const pendingOrders = filterOrders('pending');
  const preparingOrders = filterOrders('preparing');
  const servedOrders = filterOrders('served');
  const completedOrders = filterOrders('completed');

  if (loading) {
    return (
      <OwnerLayout title="Order Management">
        <div className="container mx-auto p-6">
          <div className="flex items-center justify-center h-64">
            <Clock className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </OwnerLayout>
    );
  }

  return (
    <OwnerLayout title={`Order Management - ${restaurant?.name}`}>
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground">{restaurant?.name}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Pending</CardDescription>
            <CardTitle className="text-3xl">{pendingOrders.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Preparing</CardDescription>
            <CardTitle className="text-3xl">{preparingOrders.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Served</CardDescription>
            <CardTitle className="text-3xl">{servedOrders.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-3xl">{completedOrders.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Orders Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingOrders.length})</TabsTrigger>
          <TabsTrigger value="preparing">Preparing ({preparingOrders.length})</TabsTrigger>
          <TabsTrigger value="served">Served ({servedOrders.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedOrders.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {orders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <Clock className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No orders yet</p>
              </CardContent>
            </Card>
          ) : (
            orders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showCustomerInfo
                onPrint={setPrintOrder}
                actions={getOrderActions(order)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {pendingOrders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <Clock className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No pending orders</p>
              </CardContent>
            </Card>
          ) : (
            pendingOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showCustomerInfo
                onPrint={setPrintOrder}
                actions={getOrderActions(order)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="preparing" className="space-y-4 mt-6">
          {preparingOrders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <ChefHat className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No orders being prepared</p>
              </CardContent>
            </Card>
          ) : (
            preparingOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showCustomerInfo
                onPrint={setPrintOrder}
                actions={getOrderActions(order)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="served" className="space-y-4 mt-6">
          {servedOrders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <UtensilsCrossed className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No served orders</p>
              </CardContent>
            </Card>
          ) : (
            servedOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showCustomerInfo
                onPrint={setPrintOrder}
                actions={getOrderActions(order)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-6">
          {completedOrders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <CheckCircle className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No completed orders</p>
              </CardContent>
            </Card>
          ) : (
            completedOrders.map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showCustomerInfo
                onPrint={setPrintOrder}
                actions={getOrderActions(order)}
              />
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Print Dialog */}
      <Dialog open={!!printOrder} onOpenChange={() => setPrintOrder(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Print E-Bill</DialogTitle>
          </DialogHeader>
          {printOrder && <PrintBill order={printOrder} />}
        </DialogContent>
      </Dialog>
    </OwnerLayout>
  );
}
