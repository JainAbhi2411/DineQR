import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode, Camera, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { tableApi, visitedRestaurantApi } from '@/db/api';
import { useAuth } from '@/contexts/AuthContext';
import QRScanner from '@/components/customer/QRScanner';

export default function ScanQR() {
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { profile } = useAuth();

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || (hasTouch && isSmallScreen));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const processQRCode = async (code: string) => {
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
      const table = await tableApi.getTableByQRCode(code);
      
      if (!table) {
        toast({
          title: 'Invalid QR Code',
          description: 'This QR code is not valid. Please try scanning again.',
          variant: 'destructive',
        });
        return;
      }

      // Save visited restaurant
      await visitedRestaurantApi.upsertVisitedRestaurant(profile.id, table.restaurant_id);

      // Show success message
      toast({
        title: 'Success!',
        description: `Opening menu for Table ${table.table_number}`,
      });

      // Navigate to menu
      navigate(`/customer/menu/${table.restaurant_id}?table=${table.id}`);
    } catch (error: any) {
      console.error('[ScanQR] Error processing QR code:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to process QR code',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScanSuccess = (decodedText: string) => {
    console.log('[ScanQR] QR Code scanned:', decodedText);
    setShowScanner(false);
    processQRCode(decodedText);
  };

  const handleScanError = (error: string) => {
    console.error('[ScanQR] Scan error:', error);
    toast({
      title: 'Scanner Error',
      description: error,
      variant: 'destructive',
    });
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!qrCode.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a QR code',
        variant: 'destructive',
      });
      return;
    }

    await processQRCode(qrCode.trim());
  };

  const handleOpenScanner = () => {
    if (!profile) {
      toast({
        title: 'Login Required',
        description: 'Please log in to scan QR codes',
        variant: 'destructive',
      });
      return;
    }
    setShowScanner(true);
  };

  // Show scanner in fullscreen
  if (showScanner) {
    return (
      <QRScanner
        onScanSuccess={handleScanSuccess}
        onScanError={handleScanError}
        onClose={() => setShowScanner(false)}
      />
    );
  }

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
            {/* Camera Scan Button - Show on mobile */}
            {isMobile ? (
              <Button
                onClick={handleOpenScanner}
                className="w-full h-32 text-lg"
                size="lg"
                disabled={loading}
              >
                <div className="flex flex-col items-center gap-3">
                  <Camera className="w-12 h-12" />
                  <span>Open Camera to Scan</span>
                </div>
              </Button>
            ) : (
              <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center border-2 border-dashed">
                <Smartphone className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground text-center font-medium mb-2">
                  Camera scanning available on mobile devices
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  Please open this page on your smartphone to use the camera scanner
                </p>
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or enter code manually</span>
              </div>
            </div>

            <form onSubmit={handleManualSubmit} className="space-y-4">
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

            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p>The QR code can be found on your restaurant table</p>
              {isMobile && (
                <p className="text-xs text-primary">
                  💡 Tip: Use the camera scanner for faster access
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
