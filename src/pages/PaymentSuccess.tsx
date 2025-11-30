import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/db/supabase';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    verifyPayment();
  }, []);

  const verifyPayment = async () => {
    const sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      setError('No payment session found');
      setVerifying(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('verify_stripe_payment', {
        body: { sessionId },
      });

      if (error) {
        const errorMsg = await error?.context?.text();
        throw new Error(errorMsg || 'Payment verification failed');
      }

      if (data?.data?.verified) {
        setVerified(true);
        toast({
          title: 'Payment Successful',
          description: 'Your order has been confirmed',
        });
      } else {
        setError('Payment not completed');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to verify payment');
      toast({
        title: 'Error',
        description: err.message || 'Failed to verify payment',
        variant: 'destructive',
      });
    } finally {
      setVerifying(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verifying Payment</h3>
            <p className="text-muted-foreground text-center">
              Please wait while we confirm your payment...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            verified ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {verified ? (
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            ) : (
              <XCircle className="w-8 h-8 text-red-600" />
            )}
          </div>
          <CardTitle className="text-2xl">
            {verified ? 'Payment Successful!' : 'Payment Failed'}
          </CardTitle>
          <CardDescription>
            {verified 
              ? 'Your order has been confirmed and will be prepared shortly'
              : error || 'There was an issue processing your payment'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {verified ? (
            <>
              <div className="bg-accent/50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  ✓ Payment processed successfully
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Order confirmed
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Restaurant notified
                </p>
              </div>
              <Button className="w-full" asChild>
                <Link to="/customer/orders">View My Orders</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/customer/dashboard">Back to Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground text-center">
                If you believe this is an error, please contact support or try again.
              </p>
              <Button className="w-full" onClick={() => navigate(-1)}>
                Go Back
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/customer/dashboard">Back to Dashboard</Link>
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
