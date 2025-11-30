import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { orderApi } from '@/db/api';
import { OrderWithItems } from '@/types/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingBag, Clock, CheckCircle, ChefHat, UtensilsCrossed, CreditCard, Banknote, Receipt } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/db/supabase';

export default function OrderHistory() {
  const { profile } = useAuth();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderWithItems | null>(null);
  const [showBill, setShowBill] = useState(false);

  useEffect(() => {
    loadOrders();

    // Real-time subscription for order updates
    const channel = supabase
      .channel('customer-orders-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'orders',
          filter: `customer_id=eq.${profile?.id}`,
        },
        (payload) => {
          loadOrders();
          
          // Show payment dialog when order is served and payment is pending
          if (payload.eventType === 'UPDATE') {
            const updatedOrder = payload.new as any;
            if (
              updatedOrder.status === 'served' &&
              updatedOrder.payment_method === 'coc' &&
              updatedOrder.payment_status === 'pending'
            ) {
              // Find the full order details
              loadOrders().then(() => {
                const order = orders.find(o => o.id === updatedOrder.id);
                if (order) {
                  setSelectedOrder(order);
                  setPaymentDialogOpen(true);
                }
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [profile]);

  const loadOrders = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      const ordersData = await orderApi.getOrdersByCustomer(profile.id);
      setOrders(ordersData);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to load orders',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
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

  const handlePaymentConfirmation = () => {
    setPaymentDialogOpen(false);
    toast({
      title: 'Payment Reminder',
      description: 'Please proceed to the counter to complete your payment',
    });
  };

  const handleViewBill = (order: OrderWithItems) => {
    setSelectedOrder(order);
    setShowBill(true);
  };

  const handlePrintBill = () => {
    window.print();
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
          <h1 className="text-3xl font-bold mb-2">Order History</h1>
          <p className="text-muted-foreground">View all your past and current orders</p>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Start by scanning a QR code at a restaurant table to place your first order
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{order.restaurant?.name || 'Restaurant'}</CardTitle>
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
                  <div className="grid grid-cols-2 gap-3 text-xs xl:grid-cols-4 xl:gap-4 xl:text-sm">
                    <div>
                      <p className="text-muted-foreground">Order ID</p>
                      <p className="font-semibold">#{order.id.slice(0, 8)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Table</p>
                      <p className="font-semibold">{order.table?.table_number || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Amount</p>
                      <p className="font-semibold text-primary">${order.total_amount.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Payment Method</p>
                      <p className="font-semibold flex items-center gap-1">
                        {order.payment_method === 'online' ? (
                          <>
                            <CreditCard className="w-3 h-3" />
                            Online
                          </>
                        ) : (
                          <>
                            <Banknote className="w-3 h-3" />
                            COC
                          </>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Payment Status</p>
                      <Badge variant={order.payment_status === 'completed' ? 'default' : 'secondary'}>
                        {order.payment_status}
                      </Badge>
                    </div>
                  </div>

                  {/* Payment reminder for COC orders */}
                  {order.payment_method === 'coc' && order.payment_status === 'pending' && order.status === 'served' && (
                    <div className="border border-primary/20 bg-primary/5 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-semibold text-sm mb-1">💰 Payment Pending</p>
                          <p className="text-sm text-muted-foreground">
                            Please pay ${order.total_amount.toFixed(2)} at the counter
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleViewBill(order)}
                          variant="outline"
                          className="shrink-0"
                        >
                          <Receipt className="w-4 h-4 mr-1" />
                          View Bill
                        </Button>
                      </div>
                    </div>
                  )}

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
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Payment Notification Dialog */}
        <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>🍽️ Enjoy Your Meal!</DialogTitle>
              <DialogDescription>
                Your order has been served. Are you done with your meal?
              </DialogDescription>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-4 py-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">Order Summary</p>
                  <div className="space-y-1 text-sm">
                    {selectedOrder.order_items?.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.quantity}x {item.menu_item?.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary">${selectedOrder.total_amount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-1">💰 Payment Method: Cash on Counter</p>
                  <p className="text-sm text-muted-foreground">
                    Please proceed to the counter to complete your payment
                  </p>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={handlePaymentConfirmation} className="w-full">
                Proceed to Counter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Bill View Dialog */}
        <Dialog open={showBill} onOpenChange={setShowBill}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>📄 Bill Summary</DialogTitle>
              <DialogDescription>
                {selectedOrder?.restaurant?.name || 'Restaurant'}
              </DialogDescription>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-4 py-4">
                <div className="text-center border-b pb-4">
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-mono font-semibold">#{selectedOrder.id.slice(0, 8)}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(selectedOrder.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-sm">Order Items</p>
                  {selectedOrder.order_items?.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.menu_item?.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${selectedOrder.total_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${selectedOrder.total_amount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold mb-1">Payment Method</p>
                  <div className="flex items-center justify-center gap-2">
                    <Banknote className="w-4 h-4" />
                    <span className="text-sm">Cash on Counter</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Status: {selectedOrder.payment_status === 'completed' ? '✅ Paid' : '⏳ Pending'}
                  </p>
                </div>
              </div>
            )}
            <DialogFooter className="flex gap-2">
              <Button onClick={() => setShowBill(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Button onClick={handlePrintBill} className="flex-1">
                <Receipt className="w-4 h-4 mr-1" />
                Print Bill
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
