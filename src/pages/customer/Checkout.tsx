import { useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { orderApi } from '@/db/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CreditCard, ShoppingBag } from 'lucide-react';
import { supabase } from '@/db/supabase';

export default function Checkout() {
  const { restaurantId } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const tableId = searchParams.get('table');
  const { cart, restaurant } = location.state || {};
  
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [loading, setLoading] = useState(false);

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cart is Empty</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Please add items to your cart before checkout
            </p>
            <Button onClick={() => navigate(-1)}>
              Go Back to Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getTotalAmount = () => {
    return cart.reduce((total: number, item: any) => total + item.menuItem.price * item.quantity, 0);
  };

  const handlePlaceOrder = async () => {
    if (!profile || !restaurantId || !tableId) {
      toast({
        title: 'Error',
        description: 'Missing required information',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        restaurant_id: restaurantId,
        customer_id: profile.id,
        table_id: tableId,
        total_amount: getTotalAmount(),
        status: 'pending' as const,
        payment_status: 'pending' as const,
        special_instructions: specialInstructions || null,
        assigned_to: null,
      };

      const order = await orderApi.createOrder(orderData);

      const orderItems = cart.map((item: any) => ({
        order_id: order.id,
        menu_item_id: item.menuItem.id,
        quantity: item.quantity,
        price: item.menuItem.price,
      }));

      await orderApi.createOrderItems(orderItems);

      const { data, error } = await supabase.functions.invoke('create_stripe_checkout', {
        body: {
          orderId: order.id,
          amount: getTotalAmount(),
          restaurantName: restaurant?.name || 'Restaurant',
        },
      });

      if (error) {
        const errorMsg = await error?.context?.text();
        throw new Error(errorMsg || 'Failed to create payment session');
      }

      if (data?.data?.url) {
        window.location.href = data.data.url;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to place order',
        variant: 'destructive',
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((item: any) => (
                    <div key={item.menuItem.id} className="flex justify-between items-center pb-4 border-b last:border-0">
                      <div className="flex gap-4">
                        {item.menuItem.image_url && (
                          <img
                            src={item.menuItem.image_url}
                            alt={item.menuItem.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        )}
                        <div>
                          <h4 className="font-semibold">{item.menuItem.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ${item.menuItem.price.toFixed(2)} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold">
                        ${(item.menuItem.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Instructions</CardTitle>
                <CardDescription>Any special requests for your order?</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="E.g., No onions, extra spicy, etc."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Bill Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${getTotalAmount().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span>${(getTotalAmount() * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${(getTotalAmount() * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Restaurant:</strong> {restaurant?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Items:</strong> {cart.reduce((total: number, item: any) => total + item.quantity, 0)}
                  </p>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  {loading ? 'Processing...' : 'Proceed to Payment'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  You will be redirected to a secure payment page
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
