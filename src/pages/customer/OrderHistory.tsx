import { useEffect, useState, useRef, useCallback } from 'react';
import { orderApi } from '@/db/api';
import { OrderWithItems } from '@/types/types';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Clock } from 'lucide-react';
import { supabase } from '@/db/supabase';
import OrderCard from '@/components/order/OrderCard';
import PrintBill from '@/components/order/PrintBill';

export default function OrderHistory() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [printOrder, setPrintOrder] = useState<OrderWithItems | null>(null);
  const ordersRef = useRef<OrderWithItems[]>([]);

  // Keep ref in sync with state
  useEffect(() => {
    ordersRef.current = orders;
  }, [orders]);

  const loadOrders = useCallback(async () => {
    if (!user) return;

    try {
      const previousOrders = ordersRef.current;
      const data = await orderApi.getOrdersByCustomer(user.id);
      setOrders(data);

      // Check if any order status changed and show notification
      if (previousOrders.length > 0) {
        data.forEach(newOrder => {
          const oldOrder = previousOrders.find(o => o.id === newOrder.id);
          if (oldOrder) {
            if (oldOrder.status !== newOrder.status) {
              toast({
                title: 'Order Status Updated',
                description: `Order #${newOrder.id.slice(0, 8).toUpperCase()} is now ${newOrder.status}`,
              });
            }
            if (oldOrder.payment_status !== newOrder.payment_status) {
              toast({
                title: 'Payment Status Updated',
                description: `Payment for order #${newOrder.id.slice(0, 8).toUpperCase()} is now ${newOrder.payment_status}`,
              });
            }
          }
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load orders',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      loadOrders();

      const channel = supabase
        .channel('customer-orders-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'orders',
            filter: `customer_id=eq.${user.id}`,
          },
          () => {
            // Small delay to ensure status_history trigger completes
            setTimeout(() => loadOrders(), 300);
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
            // Check if this status history belongs to one of the customer's orders
            const orderId = payload.new.order_id;
            if (ordersRef.current.some(order => order.id === orderId)) {
              setTimeout(() => loadOrders(), 300);
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, loadOrders]);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <Clock className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Order History</h1>
        <p className="text-muted-foreground mt-2">
          Track your orders and view order details
        </p>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-64">
            <Clock className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No orders yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Start by scanning a QR code at a restaurant table
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onPrint={setPrintOrder}
            />
          ))}
        </div>
      )}

      {/* Print Dialog */}
      <Dialog open={!!printOrder} onOpenChange={() => setPrintOrder(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Print E-Bill</DialogTitle>
          </DialogHeader>
          {printOrder && <PrintBill order={printOrder} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
