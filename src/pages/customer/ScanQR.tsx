import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { tableApi, visitedRestaurantApi } from '@/db/api';
import { useAuth } from '@/contexts/AuthContext';

export default function ScanQR() {
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { profile } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!qrCode.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a QR code',
        variant: 'destructive',
      });
      return;
    }

    if (!profile) {
      toast({
        title: 'Error',
        description: 'Please log in to continue',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const table = await tableApi.getTableByQRCode(qrCode);
      
      if (!table) {
        toast({
          title: 'Error',
          description: 'Invalid QR code. Please try again.',
          variant: 'destructive',
        });
        return;
      }

      await visitedRestaurantApi.upsertVisitedRestaurant(profile.id, table.restaurant_id);

      navigate(`/customer/menu/${table.restaurant_id}?table=${table.id}`);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to scan QR code',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <QrCode className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Scan QR Code</CardTitle>
          <CardDescription>
            Scan the QR code on your table to view the menu and place orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center">
              <Camera className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground text-center">
                Camera scanning feature coming soon
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or enter code manually</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qrCode">QR Code</Label>
                <Input
                  id="qrCode"
                  type="text"
                  placeholder="Enter QR code from table"
                  value={qrCode}
                  onChange={(e) => setQrCode(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Verifying...' : 'Continue'}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <p>The QR code can be found on your restaurant table</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
